/* When you use a CSS variable you can update that variable on any element
and any selectors that are inside of that element that reference the variable will be updated */

const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // dataset will grab all data attributes that an element has
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// this captures when you finish a change (let go of the mouse)
inputs.forEach(input => {
  input.addEventListener('change', handleUpdate);
});

// this one captures any time the mouse moves
inputs.forEach(input => {
  input.addEventListener('mousemove', handleUpdate);
});
