<script>
import HomePage from './pages/home/HomePage.svelte';
import AboutPage from './pages/about/AboutPage.svelte';
import ServicePage from './pages/services/ServicePage.svelte';
import SkillsPage from './pages/skills/SkillsPage.svelte';
import ProjectPage from './pages/projects/ProjectPage.svelte';
import ContactPage from './pages/contact/ContactPage.svelte';
  import Navbar from './pages/_components/Navbar.svelte';
  import Footer from './pages/_components/Footer.svelte';
</script>

<section class="scrollbar-thin scrollbar-thumb-blue-500  ">
    <Navbar/>
    <main class=" bg-bg_white text-super_black dark:bg-bg_black dark:text-bg_white" >
        <HomePage/>
        <AboutPage/>
        <ServicePage/>
        <SkillsPage/>
        <ProjectPage/>
        <ContactPage/>
    </main>
    <Footer/>
 
</section>

<style>

</style>

