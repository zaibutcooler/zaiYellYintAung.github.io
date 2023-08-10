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

<section>
    <Navbar/>
    <main class="bg-[#e4e7ec] text-[#0d0c0d]">
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

