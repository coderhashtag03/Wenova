if (document.getElementById("download_button").disabled === true) {
  document.getElementById("download_id").href = "javascript: void(0)";
}

document.getElementById("spotify").onclick = function() {enableSoundCloud()};

function enableSoundCloud() {
  document.getElementById("soundcloud").disabled = false;
}

document.getElementById("soundcloud").onclick = function() {enableYoutube()};

function enableYoutube() {
  document.getElementById("youtube").disabled = false;
}

document.getElementById("youtube").onclick = function() {enableDownload()};

function enableDownload() {
  document.getElementById("download_button").disabled = false;
}
