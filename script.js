// Array of image file paths
const imageFiles = [
  "043d8222-66ce-4002-8370-3d567a2ba157.JPG",
  "07002a91-3da1-41d0-84c8-76d1416f4c5f.JPG",
  "0ADACFA7-EE94-4CAF-B1B1-D57726CA1C2B.JPG",
  "0bd93495-8645-4cf9-b562-26f93250e056.JPG",
  "29BE5233-F8D4-4A00-951D-47F07813F168.JPG",
  "4011d12c-2fac-436e-a049-ce90ce68ee32.JPG",
  "442be0cf-48e8-4f41-872c-7f9c77df1ed4.JPG",
  "49C85620-7192-42D7-B5B7-7B6E32D1DB1A.JPG",
  "4a6e1065-292b-41f0-9412-98839f3da55c.JPG",
  "52bf7c7d-9801-4da0-aa63-df9f449dcde0.JPG",
  "53F7D812-5F91-4C44-82F2-D2D4EAF84ED3.JPG",
  "624A679E-FD75-427C-82AC-C0C7F6C63C86.JPG",
  "6b8a6431-f461-4855-b06a-3b44938d7f0f.JPG",
  "7B594F5F-E7BE-44C8-B679-A8B2069D3A95.JPG",
  "7afe5e73-53a3-4040-afd5-777bda827d25.JPG",
  "8606E76C-47EC-4E72-ABDE-B173931175B0.JPG",
  "88751899-f1fc-4cb6-8b2c-18342d5a5d66.JPG",
  "A346441E-4FA2-4A04-A9A8-8BE214E3F679.JPG",
  "A8C414B4-D9DD-4F45-9FF5-18803792182B.JPG",
  "BAE45C19-209D-4BB4-A84B-089648586875.JPG",
  "C1AB7C9A-8225-49EA-AFFF-CA62160A7CCA.JPG",
  "C6DF21EF-48E2-4461-B7ED-22806E8E296F.JPG",
  "DD7DD45A-C642-4C99-BCEF-8C12B9D3CB5B.JPG",
  "EFC054FB-285F-4A80-927C-A971EF11C6D5.JPG",
  "F035CA46-7D7C-4FA1-82D8-18A56A142244.JPG",
  "IMG_0980.JPG",
  "IMG_1216.JPG",
  "IMG_1275.JPG",
  "IMG_1291.JPG",
  "IMG_1412.JPG",
  "IMG_1426.JPG",
  "IMG_1430.JPG",
  "IMG_1939.PNG",
  "IMG_2551.JPG",
  "IMG_2555.PNG",
  "IMG_2569.JPG",
  "IMG_2573.JPG",
  "IMG_3411.jpg",
  "IMG_3415.PNG",
  "IMG_3838.jpg",
  "IMG_3864.jpg",
  "IMG_3964.JPG",
  "IMG_4172.JPG",
  "IMG_4191.jpg",
  "IMG_4193.jpg",
  "IMG_4315.JPG",
  "IMG_4413.JPG",
  "IMG_4414.JPG",
  "IMG_4440.JPG",
  "IMG_4442.JPG",
  "IMG_4507.JPG",
  "IMG_4508.JPG",
  "IMG_4509.JPG",
  "IMG_4729.jpg",
  "IMG_4733.jpg",
  "IMG_4756.jpg",
  "IMG_4870.jpg",
  "IMG_5001.JPG",
  "IMG_5003.JPG",
  "IMG_5112.jpg",
  "IMG_5138.jpg",
  "IMG_5668.jpg",
  "IMG_5696.jpg",
  "a1177846-7894-4026-8e8f-c68a64699771.JPG",
  "a275e36b-9d63-4d49-a0db-c5c938ff3319.JPG",
  "bereal.JPG",
  "cb10cb3e-3a7b-4e21-875b-5881dfdb48c0.JPG",
  "cdd81c5e-61db-4695-9c0d-282acd5cd903.JPG",
  "couch.JPG",
  "e5f1069b-b52f-42ba-ae9c-623843954250.JPG",
  "mirror.JPG",
  "nye.JPG",
  "wallp.PNG"
];

// Create the heart path
const pathEl = document.getElementById("heartPath");
pathEl.setAttribute("d", makeHeartPath());

function makeHeartPath() {
  let d = "";
  const scale = 15; // Adjusted scale for a wider heart
  const ox = 500, oy = 500; // Center of the heart
  let first = true;
  for (let theta = 0; theta <= 2 * Math.PI; theta += 0.01) {
    const x = 16 * Math.pow(Math.sin(theta), 3);
    const y =
      13 * Math.cos(theta) -
      5 * Math.cos(2 * theta) -
      2 * Math.cos(3 * theta) -
      Math.cos(4 * theta);
    const px = ox + x * scale;
    const py = oy - y * scale;
    if (first) {
      d += `M ${px},${py}`;
      first = false;
    } else {
      d += ` L ${px},${py}`;
    }
  }
  d += " Z";
  return d;
}

// Place images along the heart shape
const container = document.querySelector(".heart-container");
const count = imageFiles.length;
const scale = 15; // Adjusted scale for a wider heart
const ox = 500, oy = 500;

imageFiles.forEach((src, i) => {
  const t = (i / count) * 2 * Math.PI;
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y =
    13 * Math.cos(t) -
    5 * Math.cos(2 * t) -
    2 * Math.cos(3 * t) -
    Math.cos(4 * t);
  const px = ox + x * scale;
  const py = oy - y * scale;

  const img = document.createElement("img");
  img.src = src;
  img.alt = "heart image";
  img.classList.add("heart-image");
  img.style.left = px + "px";
  img.style.top = py + "px";

  // Add click event for slideshow modal
  img.addEventListener("click", () => openSlideshow(i));

  container.appendChild(img);
});

// Slideshow functionality
let currentSlideIndex = -1;

function openSlideshow(index) {
  currentSlideIndex = index;
  
  const modal = document.getElementById("slideshow-modal");
  const modalImg = document.getElementById("modal-image");
  
  // Preload next/previous images
  const preloadIndexes = [
    (index - 1 + imageFiles.length) % imageFiles.length,
    (index + 1) % imageFiles.length
  ];
  
  preloadIndexes.forEach(i => {
    const img = new Image();
    img.src = imageFiles[i];
  });

  modalImg.src = imageFiles[index];
  modal.style.display = "flex"; // Changed to flex for better centering
}

function closeSlideshow() {
  const modal = document.getElementById("slideshow-modal");
  modal.style.display = "none";
}

function navigateSlideshow(direction) {
  currentSlideIndex += direction;

  if (currentSlideIndex < 0) {
    currentSlideIndex = imageFiles.length - 1;
  } else if (currentSlideIndex >= imageFiles.length) {
    currentSlideIndex = 0;
  }

  const modalImg = document.getElementById("modal-image");
  modalImg.src = imageFiles[currentSlideIndex];
}

// Event listeners for modal controls
document.querySelector(".close").addEventListener("click", closeSlideshow);
document.querySelector(".prev").addEventListener("click", () => navigateSlideshow(-1));
document.querySelector(".next").addEventListener("click", () => navigateSlideshow(1));

// Add touch event listeners for mobile swiping
let touchStartX = 0;

document.addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
});

document.addEventListener('touchend', e => {
  const touchEndX = e.changedTouches[0].clientX;
  const deltaX = touchEndX - touchStartX;
  
  if (Math.abs(deltaX) > 50) {
    navigateSlideshow(deltaX > 0 ? -1 : 1);
  }
});

// Close the modal if the user clicks outside of it
window.addEventListener("click", (event) => {
  const modal = document.getElementById("slideshow-modal");
  if (event.target == modal) {
    closeSlideshow();
  }
});
