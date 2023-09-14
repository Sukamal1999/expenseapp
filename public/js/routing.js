// routing.js
const appContainer = document.getElementById('app-container');

function handleRouteChange() {
  const route = window.location.hash.substr(1);

  switch (route) {
    case '':
      loadContent('views/day-expenses.html');
      break;
    case 'notes':
      loadContent('views/notes.html');
      break;
    case 'daily':
      loadContent('views/daily.html');
      break;
    case 'monthly':
      loadContent('views/monthly.html');
      break;
    case 'yearly':
      loadContent('views/yearly.html');
      break;
    default:
      loadContent('views/day-expenses.html');
  }
}

function loadContent(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      appContainer.innerHTML = data;
    })
    .catch((error) => {
      console.error(error);
    });
}

// Listen for the hashchange event to handle route changes
window.addEventListener('hashchange', handleRouteChange);

// Initialize the app by loading the appropriate content based on the initial route
handleRouteChange();
