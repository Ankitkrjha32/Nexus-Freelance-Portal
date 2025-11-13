export const navLinks = [
    // Links visible when the user is NOT logged in
    {
        title: "Home",
        linkTo: "/",
        status: "loggedOut",
    },
    {
        title: "About",
        linkTo: "/about",
        status: "loggedOut",
    },
    {
        title: "How It Works",
        linkTo: "/how-it-works",
        status: "loggedOut",
    },

    // Links visible when the user IS logged in
    {
        title: "Browse Jobs",
        linkTo: "/jobs",
        status: "loggedIn",
    },
    {
        title: "Post a Job",
        linkTo: "/post-job",
        status: "loggedIn",
    },
    {
        title: "Categories",
        linkTo: "/categories",
        status: "loggedIn",
    },
    {
        title: "Messages",
        linkTo: "/messages",
        status: "loggedIn",
    },
];
