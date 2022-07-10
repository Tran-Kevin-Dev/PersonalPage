const tween = KUTE.fromTo(
  "#blobA1",
  { path: "#blobA1" },
  { path: "#blobA2" },
  { repeat: 999, duration: 2000, yoyo: true }
).start();
