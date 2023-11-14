document.addEventListener("DOMContentLoaded", function () {
    // const menu_items = document.querySelector(".navbarelements") as HTMLUListElement|null;
    // // Looping if not null:
    // if (menu_items) {
    //     const list_items = menu_items.getElementsByTagName("li") as HTMLCollectionOf<HTMLLIElement>;
    //     for (let i = 0; i < list_items.length; i++){
    //         const elem = list_items[i] as HTMLLIElement;
    //         console.log(elem);
    //         elem.addEventListener("mouseover", () => {
    //             // if (elem.style.transform !== "translateX(-100px)"){
    //             //     elem.style.transform = "translateX(-100px)";
    //             // }
    //             // else {
    //             //     elem.style.transform = "translateX(0px)";
    //             // }
    //         })
    //     }
    // }
    var listener_object = document.getElementById("project-tag");
    listener_object === null || listener_object === void 0 ? void 0 : listener_object.addEventListener("mouseleave", function () {
        var projects_list_object = document.querySelector("#project-list");
        if (projects_list_object) {
            projects_list_object.style.width = "80px";
            projects_list_object.style.transform = "translateY(-10000px)";
            listener_object.style.boxShadow = "none";
        }
    });
    listener_object === null || listener_object === void 0 ? void 0 : listener_object.addEventListener("mouseover", function () {
        var projects_list_object = document.querySelector("#project-list");
        if (projects_list_object) {
            projects_list_object.style.width = "fit-content";
            projects_list_object.style.transform = "translateY(0px)";
            listener_object.style.boxShadow = "0 0 10px black";
        }
        // if (projects_list_object) {
        //     const project_list = projects_list_object.getElementsByTagName("li") as HTMLCollectionOf<HTMLLIElement>;
        //     for (let i = 0; i < project_list?.length; i++) {
        //         const elem = project_list[i] as HTMLLIElement;
        //         console.log(elem);
        //         if (elem.style.transform === "translateY(-10000px)"){
        //             elem.style.transform = "translateY(0px)";
        //         } else {
        //             elem.style.transform = "translateY(-10000px)";
        //         }
        //     }
        // }
    });
});
