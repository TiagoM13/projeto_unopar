import { signs_collection } from "./data/data.js";
import { returnSign } from "./utils/script.js";

const div = document.getElementById("html");
const user = document.getElementById("user");
const date_user = document.getElementById("date");

const handleSubmit = () => {
  if (user.value == "" || date_user.value === "") {
    alert("Por favor! Preencha os campos corretamente!")
  } else {
    handleGetDate(user.value, date_user.value);
  }

  user.value = "";
  date_user.value = "";
}

const handleGetDate = (user, date) => {
  const name = user;
  const date_app = new Date(date);
  const name_sign = returnSign(signs_collection, date_app);

  const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
  const date_format_init = new Date(name_sign.DataInicio);
  const date_format_and = new Date(name_sign.DataFim);
  const format_date_init = (date_format_init.getDate() + " de " + meses[(date_format_init.getMonth())]);
  const format_date_and = (date_format_and.getDate() + " de " + meses[(date_format_and.getMonth())]);

  const baseHTML = `
    <div class="html_content">
      <h3>${name}</h3> 
      <h4>${name_sign.Nome}: ${format_date_init} a ${format_date_and}</h4> 
      <p>${name_sign.Descricao}</p>
    </div>
  `;

  div.innerHTML += baseHTML;
}

const handleResetConsult = () => {
  div.innerHTML = '';
}

document.querySelector('form')
 .addEventListener('submit', event => {
   event.preventDefault();
 })

 document.querySelector('btn')
 addEventListener('submit', event => {
   event.preventDefault();

   handleSubmit();
 })

 document.querySelector('btn-reset')
 addEventListener('reset', event => {
   event.preventDefault();

   handleResetConsult();
 })

