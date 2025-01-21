const Pannable = (elViewport) => {

    const elCanvas = elViewport.firstElementChild;
    const start = {x: 0, y: 0};
    const offset = {x: 0, y: 0}; // The transform offset (from center)
    let isPan = false;
  
    const panStart = (ev) => {
      ev.preventDefault();
      isPan = true;
      start.x = ev.clientX - offset.x;
      start.y = ev.clientY - offset.y;
    };
  
    const panMove = (ev) => {
      if (!isPan) return; // Do nothing
      offset.x = ev.clientX - start.x;
      offset.y = ev.clientY - start.y;
      elCanvas.style.translate = `${offset.x}px ${offset.y}px`;
    };
  
    const panEnd = () => {
      isPan = false;
    };
  
    elViewport.addEventListener("pointerdown", panStart);
    addEventListener("pointermove", panMove);
    addEventListener("pointerup", panEnd);
  };
  
  document.querySelectorAll(".viewport").forEach(Pannable);