"use client"; // Mark as a Client Component
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Use the new router
import styles from "./Dashboard.module.css";
import * as XLSX from "xlsx";

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
  const router = useRouter();

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
        const data = await response.json();
        setLeads(data);
      } catch (error) {
        console.error("Error fetching leads:", error);
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
        console.error("Failed to delete lead");
      }
    } catch (error) {
      console.error("Error deleting lead:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    router.push("/signin");
  };

  const handleDownload = () => {
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
  };

  return (
    <div className={styles.dashboard}>
      <h1>Leads Dashboard</h1>
      <button className={styles.button} onClick={handleLogout}>
        Logout
      </button>
      <button className={styles.button} onClick={handleDownload}>
        Download as Excel
      </button>
      <table className={styles.table}>
        <thead>
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
              <td>{lead.message}</td>
              <td>{new Date(lead.timestamp).toLocaleString()}</td>
              <td>
                <button className={styles.button} onClick={() => handleDelete(lead.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;