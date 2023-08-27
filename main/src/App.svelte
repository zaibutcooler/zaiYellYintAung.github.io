<script>
import HomePage from './pages/home/HomePage.svelte';
import AboutPage from './pages/about/AboutPage.svelte';
import ServicePage from './pages/services/ServicePage.svelte';
import SkillsPage from './pages/skills/SkillsPage.svelte';
import ProjectPage from './pages/projects/ProjectPage.svelte';
import ContactPage from './pages/contact/ContactPage.svelte';
import DesktopNavbar from './pages/_components/DesktopNavbar.svelte';
import Footer from './pages/_components/Footer.svelte';
import MobileNavbar from './pages/_components/MobileNavbar.svelte';


if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
</script>




<section class="">
    <DesktopNavbar/>
    <MobileNavbar/>
    <main class=" bg-bg_white text-super_black dark:bg-bg_black dark:text-bg_white" >
        <HomePage/>
        <AboutPage/>
        <ProjectPage/>
        <!-- <SkillsPage/> -->
        <ServicePage/>
        <ContactPage/>
    </main>
    <Footer/>
 
</section>

<style>

</style>

