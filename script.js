document.addEventListener('DOMContentLoaded', function() {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // Get the value of the 'count' cookie
  let count = getCookie('count') ? parseInt(getCookie('count')) : 0;

  // Increment the value and update the cookie
  count++;
  setCookie('count', count, 7); // Cookie expires in 7 days

  // Display the count on the webpage
  document.getElementById('countDisplay').innerText = `Page visited: ${count} times`;
});