const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const formAlarm = document.getElementById("form-alarm");
const alarmTimeInput = document.getElementById("alarm-time");

document.addEventListener("DOMContentLoaded", () => {
    getCurrentTime();
    // Cargar la alarma guardada, si existe
    loadAlarm();
});

formAlarm.addEventListener("submit", (e) => {
    e.preventDefault();
    const alarmTime = alarmTimeInput.value; // como obtenemos el valor del campo de entrada de la alarma
    if (alarmTime === "") {
        alert("Seleccione una hora precisa");
    } else {
        setAlarm(alarmTime);
    }
});

setInterval(() => {
    getCurrentTime();
    checkAlarm(); // para comprobar si es hora de la alarma
}, 1000);

function getCurrentTime() {
    const currentData = new Date();
    const currentHours = currentData.getHours();
    const currentMinutes = currentData.getMinutes();
    const currentSeconds = currentData.getSeconds();
    hours.innerText = formatNumber(currentHours);
    minutes.innerText = formatNumber(currentMinutes);
    seconds.innerText = formatNumber(currentSeconds);
}

function formatNumber(value) {
    return value < 10 ? "0" + value : value;
}

function setAlarm(alarmTime) {
    localStorage.setItem("alarmTime", alarmTime); // para guardar la hora de la alarma
}

function loadAlarm() {
    const alarmTime = localStorage.getItem("alarmTime");
    if (alarmTime) {
        alarmTimeInput.value = alarmTime; // Establecer la hora almacenada en el formulario
    }
}

function checkAlarm() {
  const currentTime = new Date();
  const alarmTimeString = alarmTimeInput.value;
  if (!alarmTimeString) return; // Si no se ha establecido una alarma, no hacer nada
  const alarmTime = new Date();
  const [alarmHour, alarmMinute] = alarmTimeString.split(":").map(Number);
  alarmTime.setHours(alarmHour, alarmMinute, 0); // Establecer la hora de la alarma sin segundos

  // con esto comprobamos las horas, minutos y segundos de la alarma con la hora actual
  if (
      alarmTime.getHours() === currentTime.getHours() &&
      alarmTime.getMinutes() === currentTime.getMinutes() &&
      alarmTime.getSeconds() === currentTime.getSeconds()
  ) {
      alert("¡Alarma!");
      // Limpiar la alarma después de sonar
      localStorage.removeItem("alarmTime");
      alarmTimeInput.value = "";
  }
}

