import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from "jquery";

const mobileMenu = new MobileMenu();
const featureReveal = new RevealOnScroll($(".feature-item"), "80%");
const testimonialReveal = new RevealOnScroll($(".testimonials"), "60%");
