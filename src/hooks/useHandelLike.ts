import { useState, useEffect, useCallback } from 'react';

export const useHandelLike = (id: number) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const existingLikeJson = localStorage.getItem('liked');
    const existingLike = existingLikeJson ? JSON.parse(existingLikeJson) : {};
    setIsLiked(!!existingLike[id]);
  }, [id]);

  const toggleLike = useCallback(() => {
    const existingLikeJson = localStorage.getItem('liked');
    const existingLike = existingLikeJson ? JSON.parse(existingLikeJson) : {};

    const updatedLikes = { ...existingLike };

    if (updatedLikes[id]) {
      delete updatedLikes[id];
      setIsLiked(false);
    } else {
      updatedLikes[id] = { id };
      setIsLiked(true);
    }

    localStorage.setItem('liked', JSON.stringify(updatedLikes));
    window.dispatchEvent(new Event('likedUpdated'));
  }, [id]);

  return { isLiked, toggleLike };
};
