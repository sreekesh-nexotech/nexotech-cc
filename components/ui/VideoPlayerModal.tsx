"use client";
import { Modal, Button } from "react-bootstrap";
import YouTube from "react-youtube";

interface Video {
    id: number;
    title: string;
    url: string;
    category: string;
    timestamp: string;
}

interface VideoPlayerModalProps {
    video: Video | null;
    show: boolean;
    onHide: () => void;
}

const VideoPlayerModal = ({ video, show, onHide }: VideoPlayerModalProps) => {
    if (!video) return null;

    const getYouTubeId = (url: string) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const videoId = getYouTubeId(video.url);

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <Modal 
            show={show} 
            onHide={onHide} 
            size="xl" 
            centered
            dialogClassName="video-modal"
        >
            <Modal.Header closeButton className="border-0 pb-0">
                <Modal.Title className="w-100 text-center h4">{video.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-0">
                <div className="ratio ratio-16x9">
                    {videoId ? (
                        <YouTube 
                            videoId={videoId} 
                            opts={opts} 
                            className="w-100 h-100"
                            iframeClassName="w-100 h-100"
                        />
                    ) : (
                        <div className="d-flex justify-content-center align-items-center bg-dark text-white h-100">
                            Invalid video URL
                        </div>
                    )}
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default VideoPlayerModal;