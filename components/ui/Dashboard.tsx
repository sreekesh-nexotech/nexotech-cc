"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Table, Button, Container, Navbar, Alert, Nav } from "react-bootstrap";
import * as XLSX from "xlsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

interface Lead {
  id: number;
  name: string;
  phone: string;
  email: string;
  company: string;
  message: string;
  timestamp: string;
}

const Dashboard = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Redirect to signin if not logged in
  useEffect(() => {
    if (typeof window !== "undefined") {
      const authToken = localStorage.getItem("auth_token");
      if (!authToken) {
        router.push("/signin");
      }
    }
  }, [router]);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await fetch("/api/leads");
        if (!response.ok) {
          throw new Error("Failed to fetch leads");
        }
        const data = await response.json();
        setLeads(data);
      } catch (error) {
        console.error("Error fetching leads:", error);
        setError("Failed to load leads. Please try again later.");
      }
    };

    fetchLeads();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`/api/leads/${id}`, { method: "DELETE" });

      if (response.ok) {
        setLeads((prevLeads) => prevLeads.filter((lead) => lead.id !== id));
      } else {
        throw new Error("Failed to delete lead");
      }
    } catch (error) {
      console.error("Error deleting lead:", error);
      setError("Failed to delete lead. Please try again.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    router.push("/signin");
  };

  const handleDownload = () => {
    try {
      const data = leads.map((lead) => ({
        ID: lead.id,
        Name: lead.name,
        Phone: lead.phone,
        Email: lead.email,
        Company: lead.company,
        Message: lead.message,
        Timestamp: new Date(lead.timestamp).toLocaleString(),
      }));

      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Leads");
      XLSX.writeFile(workbook, "leads.xlsx");
    } catch (error) {
      console.error("Error generating Excel file:", error);
      setError("Failed to generate download. Please try again.");
    }
  };

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" className="mb-4 shadow">
        <Container fluid>
          <Navbar.Brand className="fw-bold">
            <i className="bi bi-people-fill me-2"></i>
            Nexotech
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="mx-auto">
              <Nav.Link 
                as={Link} 
                href="/dashboard" 
                className={`text-white mx-2 ${pathname === '/dashboard' ? 'active-nav-link' : ''}`}
                active={pathname === '/dashboard'}
              >
                <i className="bi bi-speedometer2 me-1"></i> Dashboard
              </Nav.Link>
              <Nav.Link 
                as={Link} 
                href="/learning" 
                className={`text-white mx-2 ${pathname === '/learning' ? 'active-nav-link' : ''}`}
                active={pathname === '/learning'}
              >
                <i className="bi bi-book me-1"></i> Learning
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Button variant="light" onClick={handleDownload} className="me-2">
              <i className="bi bi-download me-1"></i> Export
            </Button>
            <Button variant="outline-light" onClick={handleLogout}>
              <i className="bi bi-box-arrow-right me-1"></i> Logout
            </Button>
          </Nav>
        </Container>
      </Navbar>

      <Container fluid className="px-4">
        {error && (
          <Alert variant="danger" onClose={() => setError(null)} dismissible className="mt-3">
            {error}
          </Alert>
        )}

        <Table striped bordered hover responsive className="shadow-sm">
          <thead className="bg-primary text-white">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Company</th>
              <th>Message</th>
              <th>Timestamp</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.phone}</td>
                <td>{lead.email}</td>
                <td>{lead.company}</td>
                <td className="text-truncate" style={{ maxWidth: "200px" }} title={lead.message}>
                  {lead.message}
                </td>
                <td>{new Date(lead.timestamp).toLocaleString()}</td>
                <td>
                  <Button variant="outline-danger" size="sm" onClick={() => handleDelete(lead.id)}>
                    <i className="bi bi-trash"></i> Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {leads.length === 0 && !error && (
          <Alert variant="info" className="mt-4">
            <i className="bi bi-info-circle-fill me-2"></i>
            No leads found. Your leads will appear here when they come in.
          </Alert>
        )}
      </Container>

      <style jsx global>{`
        :root {
          --bs-primary: #1e88e5;
          --bs-primary-rgb: 30, 136, 229;
        }
        .btn-primary {
          --bs-btn-bg: var(--bs-primary);
          --bs-btn-border-color: var(--bs-primary);
          --bs-btn-hover-bg: #1976d2;
          --bs-btn-hover-border-color: #1976d2;
          --bs-btn-active-bg: #1565c0;
          --bs-btn-active-border-color: #1565c0;
        }
        .bg-primary {
          background-color: var(--bs-primary) !important;
        }
        .table-primary {
          --bs-table-bg: var(--bs-primary);
          --bs-table-striped-bg: #e3f2fd;
          --bs-table-striped-color: #000;
          --bs-table-active-bg: #bbdefb;
          --bs-table-active-color: #000;
          --bs-table-hover-bg: #e3f2fd;
          --bs-table-hover-color: #000;
          color: #000;
          border-color: #bbdefb;
        }
        .active-nav-link {
          font-weight: bold;
          background-color: rgba(255, 255, 255, 0.2) !important;
          border-radius: 4px;
          position: relative;
        }
        .active-nav-link::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          right: 0;
          height: 3px;
          background-color: white;
          border-radius: 2px;
        }
        .nav-link {
          transition: all 0.3s ease;
          padding: 8px 16px !important;
        }
        .nav-link:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </>
  );
};

export default Dashboard;