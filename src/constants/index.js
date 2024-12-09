import { instagram, twitter, email } from "../Assets/icons"



const navLinks=[{
    name:'Home',
    href:'#hero'
},{
    name:'About',
    href:'#about'
},{
    name:'Skills',
    href:'#skills'
},{
    name:'Projects',
    href:'#projects'
},{
    name:'Reviews',
    href:'#reviews'
},{
    name:'Contacts',
    href: '#contacts'
}]

const socialMedia=[{
    icon:`${instagram}`,
    href:'instagram.com'
},{
    icon:`${twitter}`,
    href:'https://x.com/d_rahmaan?t=MDU-CV3Pt667tgq1zeCjEA&s=09'
},{
    icon:`${email}`,
    href:'/'
}]

const reviews = [{
    userName:'Elijah Mururu',
    text:`This developer is exceptional at frontend design! They created a responsive, visually stunning website that's intuitive and user-friendly. Their attention to detail, smooth animations, and ability to bring ideas to life exceeded my expectations. Highly recommend for any frontend project!`
},{
    userName:'Malala Ali',
    text:`Your frontend projects are impressive, with clean layouts and strong attention to detail. They’re visually appealing, responsive, and showcase a solid grasp of modern UI/UX principles. Adding features like dark mode or advanced animations could further enhance your portfolio. Great work overall!`
}]




 const footerLinks = [
    {
        title: "Navigation",
        links: [
            { name: "Home", link: "#home" },
            { name: "About", link: "#about" },
            { name: "Skills", link: "#skills" },
            { name: "Projects", link: "#projects" },
            { name: "Reviews", link: "#reviews" },
            { name: "Contact", link: "#contacts" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "abdurahmanali363@gmail.com", link: "mailto:abdulrahmanali363@gmail.com" },
            { name: "+254 793 40 99 29", link: "tel:+254793409929" },
        ],
    },
];



export {
    navLinks,
    socialMedia,
    reviews,
    footerLinks
}