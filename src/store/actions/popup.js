let poppage = null;

export const setCurrentPopPage = (page) => {
    if (poppage !== null) {
        poppage.removeClass("show");
    }

    poppage = page;
}