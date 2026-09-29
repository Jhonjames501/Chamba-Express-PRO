// Usa localStorage para empezar, luego lo conectamos a Firebase
let avisos = JSON.parse(localStorage.getItem('avisos') || '[]');

function publicar(){
 let nuevo = {
  rubro: document.getElementById('rubro').value,
  titulo: document.getElementById('titulo').value,
  distrito: document.getElementById('distrito').value,
  pago: document.getElementById('pago').value,
  whatsapp: document.getElementById('whatsapp').value
 }
 avisos.push(nuevo);
 localStorage.setItem('avisos', JSON.stringify(avisos));
 alert('Publicado!'); location.href='index.html';
}

function filtrar(){
 let texto = document.getElementById('buscador').value.toLowerCase();
 mostrar(avisos.filter(a => (a.titulo+a.distrito+a.rubro).toLowerCase().includes(texto)));
}
function filtrarRubro(r){
 if(r=='Todos') mostrar(avisos);
 else mostrar(avisos.filter(a=>a.rubro==r));
}
function mostrar(lista){
 document.getElementById('avisos').innerHTML = lista.map(a=>`
  <div class="card">
   <b>${a.rubro} - ${a.distrito}</b><br>
   ${a.titulo}<br>
   <b>${a.pago}</b><br>
   <a href="https://wa.me/51${a.whatsapp}?text=Hola soy trabajador, vi tu aviso de ${a.rubro}">Postular por WhatsApp</a>
  </div>
 `).join('');
}
if(document.getElementById('avisos')) mostrar(avisos);

function registrar(){
 if(!document.getElementById('nombre').value){ alert('Pon tu nombre completo'); return; }
 alert('Registrado: '+document.getElementById('nombre').value);
 location.href='index.html';
}