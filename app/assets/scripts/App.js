import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from "./modules/StickyHeader";
import Modal from "./modules/Modal";
import $ from "jquery";

const mobileMenu = new MobileMenu();
const featureReveal = new RevealOnScroll($(".feature-item"), "80%");
const testimonialReveal = new RevealOnScroll($(".testimonials"), "60%");
const stickyHeader = new StickyHeader();
const modal = new Modal();
