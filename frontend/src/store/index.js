const nonRegisteredLinks = [
    { title: "About", path: "/about" },
    { title: "FAQ", path: "/faq" },
    { title: "Login", path: "/auth/login" },
]
const registeredLinks = [
    { title: "Explore", path: "/", },
    { title: "Trending", path: "/trending" },
    { title: "About", path: "/about" },
    { title: "FAQ", path: "/faq" },
    { title: "Logout", path: "/#", id: "logout-btn" },
]



export { 
    nonRegisteredLinks, 
    registeredLinks 
}