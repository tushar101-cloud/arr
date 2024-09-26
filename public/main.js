document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const openSidebar = document.getElementById('open-sidebar');
    const closeSidebar = document.getElementById('close-sidebar');
    const startNavigation = document.getElementById('start-navigation');
    const arScene = document.getElementById('ar-scene');
    const navbar = document.getElementById('navbar');
    const mainContent = document.querySelector('main');
    const adminLogin = document.getElementById('admin-login');
  
    // Open Sidebar and shift the navbar and main content
    openSidebar.addEventListener('click', () => {
      sidebar.style.left = '0';
      navbar.classList.add('shift-right');
      mainContent.classList.add('shift-right');
    });
  
    // Close Sidebar and move the navbar and main content back
    closeSidebar.addEventListener('click', () => {
      sidebar.style.left = '-250px';
      navbar.classList.remove('shift-right');
      mainContent.classList.remove('shift-right');
    });
  
    startNavigation.addEventListener('click', () => {
      arScene.style.display = 'block';
    });
  
    adminLogin.addEventListener('click', () => {
      window.location.href = '/admin.html';
    });
  });
  