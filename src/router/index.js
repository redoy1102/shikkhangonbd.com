import Vue from 'vue'
import VueRouter from 'vue-router'
import SmartPdf from "../components/smartpdf";
import Register from "../components/Register-SignIn-Page";
import SkillDevelopment from "../components/SkillDevelopment";
import Study from "../components/Study";
import About from "../components/About";
import PaymentMethod from "../components/PaymentMethod";
import CodeWithRedoy from "../components/CodeWithRedoy";
import CProgramming from "../components/VideoContent/CProgramming";




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SmartPDF',
    component: SmartPdf
  },

  {
    path: '/skillDevelopment',
    name: 'SkillDevelopment',
    component: SkillDevelopment
  },
  {
    path: '/codeWithRedoy',
    name: 'CodeWithRedoy',
    component: CodeWithRedoy
  },

  {
    path: '/codeWithRedoy/cprogramming',
    name: 'CProgramming',
    component: CProgramming
  },

  {
    path: '/about',
    name: 'About',
    component: About
  },

  {
    path: '/study',
    name: 'Study',
    component: Study
  },

  {
    path: '/payment',
    name: 'PaymentMethod',
    component: PaymentMethod
  },
  {
    path: '/register-signIn',
    name: 'Register',
    component: Register
  },


]

const router = new VueRouter({
  routes
})

export default router
