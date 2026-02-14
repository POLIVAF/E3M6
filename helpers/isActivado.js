const hbs = require("hbs");

hbs.registerHelper("isActivado", (currentPath, route)=>{
    return currentPath === route;
})