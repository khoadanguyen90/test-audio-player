"use client";

import { useEffect, useState } from "react";
import Player from "./Player";

export default function MusicPlayer() {
  // Create the songs array:
  const [songs] = useState([
    {
      title: "Fat Chillin",
      artist: "Deborah 1",
      src: "./music/fat-chillin-196099.mp3",
    },
    {
      title: "Long Road Acoustic",
      artist: "Deborah 2",
      src: "./music/long-road-acoustic-travel-228545.mp3",
    },
    {
      title: "Fondo Deep House",
      artist: "Deborah de 3",
      src: "./music/music-fondo-deep-house-235592.mp3",
    },
    {
      title: "Successful Corporate Vibes",
      artist: "Deborah de 4",
      src: "./music/successful-corporate-vibes-188043.mp3",
    },
    {
      title: "Podcast",
      artist: "y2mate",
      src: "./music/y2mate.com-Podcast_320kbps.mp3",
    },
  ]);

  // Set current song / next song (useState)
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  // Update current song (useEffect)
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="w-full">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}
