const tabs = document.getElementsByClassName("tab-item");
const tabContents = document.getElementsByClassName("tab-content-item");


tabsArray = Array.from(tabs)

tabsArray.forEach(tab => {
    tab.addEventListener("click", () => {
        selectTab(tab);
        selectTabContent(tab);
    }
    )
});

function selectTab(tab) {
    const selectedTab = document.getElementsByClassName("selected-tab")[0];
    selectedTab.classList.toggle("selected-tab")
    tab.classList.toggle("selected-tab")
}

function selectTabContent(tab) {
    const tabNumber = tab.id[4];
    const prevContent = document.getElementsByClassName("show")[0];
    const selectedContent = document.getElementById(`tab-${tabNumber}-content`);
    prevContent.classList.toggle("show")
    selectedContent.classList.toggle("show")
}