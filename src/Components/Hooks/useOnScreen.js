import { useEffect, useState } from "react";

// this hook will be used for Intersection Observer API
// description: The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.
// as the element comes into the viewport, the element will reveal itself percentages at a time

function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    // this is the event
    const observer = new IntersectionObserver(
      ([entry]) => {
        // update the state with new values
        setIntersecting(entry.isIntersecting ?? false);
      },
      {
        threshold: 0.9,
      }
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      // cleanup - once component mounts it needs to stop observing
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return isIntersecting;
}

export default useOnScreen;
