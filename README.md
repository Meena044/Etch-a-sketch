# Etch-a-Sketch Web App 🎨

A simple **Etch-a-Sketch style web app** built with HTML, CSS, and JavaScript.  
Draw on a dynamic grid with **progressive darkening squares**, **reset**, and **custom grid size**.

---

## Features

- **Dynamic Grid Size**: Enter the number of squares per side to create a grid (e.g., 4x4, 16x16, 32x32).  
- **Progressive Darkening**: Each square darkens progressively by 10% per hover. Full opacity after 10 hovers.  
- **Reset Button**: Clears the grid and lets you set a new size.  
- **Responsive Grid**: The grid fits within a 450x450px container.  

---

## Demo

preview link: https://meena044.github.io/Etch-a-sketch/
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/b24271c8-c560-447d-b3de-a567e20b2d9b" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/2bc849d2-28e0-4c12-be59-8892ffd4bc39" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/77996475-fe6c-4212-a850-bd0d4bbc8a22" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/87b36365-53c3-4c66-ab07-cd805cbacfa7" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/70d0614c-16a0-4a1e-926f-a5b07721c412" />


---

## How to Use

1. Open `index.html` in a browser.  
2. Click on enter size to get your desired grid size when prompted.  
3. Hover over squares to draw with progressive darkening.  
4. Click the **Reset** button to clear and create a new grid.

---

## What I Learned & Implemented

- **DOM Manipulation**
  - Created and appended grid squares dynamically using `document.createElement` and `appendChild`.
  - Cleared and rebuilt the grid using `container.innerHTML = ""` for resets.

- **Event Handling**
  - Added `mouseover` events for progressive darkening.
  - Added `click` events for resetting the grid and handling user input.

- **Dataset Attributes**
  - Used `data-colorCounter` to track hover counts per square.
  - Learned to read and update dataset values dynamically in JavaScript.

- **Progressive Darkening Logic**
  - Implemented gradual color opacity increase (10% per hover) using `rgba`.
  - Ensured each square reaches full opacity after 10 hovers.

- **Responsive Grid Calculation**
  - Dynamically calculated square size based on container size and user input (`450 / gridSize`).
  - Ensured the grid always fits within the container without overflow.

- **User Interaction**
  - Prompted user for grid size to create customizable grids.
  - Experimented with color picker for user-selected colors (optional, removed for simplicity).

- **Code Organization**
  - Encapsulated grid creation in a reusable `defaultGrid(size)` function.
  - Learned about variable scoping and event listeners inside functions.

- **Styling & Layout**
  - Used CSS Flexbox for grid layout.
  - Applied borders, spacing, and hover effects for visual clarity.




