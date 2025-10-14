
// Simple lightbox
document.addEventListener('click', (e)=>{
  const a = e.target.closest('a.lightbox')
  if(!a) return
  e.preventDefault()
  const overlay = document.createElement('div')
  overlay.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.9);display:grid;place-items:center;z-index:9999'
  const img = document.createElement('img')
  img.src = a.href
  img.style.maxWidth='92vw'; img.style.maxHeight='90vh'; img.style.border='1px solid #333'; img.style.borderRadius='12px'
  overlay.appendChild(img)
  overlay.addEventListener('click', ()=> overlay.remove())
  document.body.appendChild(overlay)
})
