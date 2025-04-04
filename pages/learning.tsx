"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button, Container, Navbar, Alert, Nav, Row, Col, Card, Spinner, Dropdown, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import VideoPlayerModal from "@/components/ui/VideoPlayerModal";

interface Video {
    id: number;
    title: string;
    url: string;
    category: string;
    timestamp: string;
}

const LearningContent = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
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
        const fetchVideos = async () => {
            try {
                setLoading(true);
                const response = await fetch("/api/learning-content");
                
                if (!response.ok) {
                    const errorData = await response.json().catch(() => ({}));
                    throw new Error(errorData.message || "Failed to fetch videos");
                }
                
                const data = await response.json();
                setVideos(data);
                setFilteredVideos(data);
                setError(null);
            } catch (error) {
                console.error("Fetch error:", error);
                setError(error instanceof Error ? error.message : "Failed to load videos");
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    useEffect(() => {
        if (selectedCategory === "All") {
            setFilteredVideos(videos);
        } else {
            setFilteredVideos(videos.filter(video => video.category === selectedCategory));
        }
    }, [selectedCategory, videos]);

    const handleLogout = () => {
        localStorage.removeItem("auth_token");
        router.push("/signin");
    };

    const getYouTubeId = (url: string) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const handleVideoClick = (video: Video) => {
        setSelectedVideo(video);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedVideo(null);
    };

    // Get unique categories
    const categories = ["All", ...Array.from(new Set(videos.map(v => v.category)))];

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

                {loading ? (
                    <div className="text-center my-5">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        <p className="mt-2">Loading learning content...</p>
                    </div>
                ) : (
                    <>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h2 className="mb-0">Learning Content</h2>
                            <div className="d-flex align-items-center">
                                <Form.Label className="me-2 mb-0">Filter by:</Form.Label>
                                <Dropdown>
                                    <Dropdown.Toggle variant="primary" id="dropdown-categories">
                                        {selectedCategory}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {categories.map(category => (
                                            <Dropdown.Item 
                                                key={category} 
                                                active={selectedCategory === category}
                                                onClick={() => setSelectedCategory(category)}
                                            >
                                                {category}
                                            </Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>

                        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                            {filteredVideos.map(video => {
                                const videoId = getYouTubeId(video.url);
                                const thumbnailUrl = videoId 
                                    ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
                                    : '/placeholder-thumbnail.jpg';

                                return (
                                    <Col key={video.id}>
                                        <Card className="h-100 shadow-sm" onClick={() => handleVideoClick(video)} style={{ cursor: 'pointer' }}>
                                            <div className="ratio ratio-16x9">
                                                <Card.Img 
                                                    variant="top" 
                                                    src={thumbnailUrl} 
                                                    alt={video.title}
                                                />
                                            </div>
                                            <Card.Body>
                                                <Card.Title className="fs-6 mb-1">{video.title}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted small">
                                                    {video.category}
                                                </Card.Subtitle>
                                                <Card.Text className="text-muted small">
                                                    {new Date(video.timestamp).toLocaleDateString()}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                );
                            })}
                        </Row>

                        {filteredVideos.length === 0 && !loading && !error && (
                            <Alert variant="info" className="mt-4">
                                <i className="bi bi-info-circle-fill me-2"></i>
                                No videos found in this category.
                            </Alert>
                        )}
                    </>
                )}
            </Container>

            <VideoPlayerModal 
                video={selectedVideo} 
                show={showModal} 
                onHide={handleCloseModal} 
            />

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
                .card {
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }
                .card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                .dropdown-item.active {
                    background-color: var(--bs-primary);
                }
                .video-modal .modal-content {
                    background-color: transparent;
                    border: none;
                }
                .video-modal .modal-header {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 10;
                    color: white;
                    text-shadow: 0 1px 2px rgba(0,0,0,0.6);
                }
                .video-modal .modal-body {
                    padding: 0;
                }
                .video-modal .btn-close {
                    filter: invert(1);
                }
            `}</style>
        </>
    );
};

export default LearningContent;