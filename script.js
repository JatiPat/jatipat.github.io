const tabs = document.querySelectorAll('[data-tab-target]'); //finding all tags in DOM that's named 'data-tab-target' and storing the 'tabs' value
const tabContents = document.querySelectorAll('[data-tab-content]'); //finding all elements in DOM that's named 'data-tab-content' and storing the 'tabs' value

tabs.forEach((tab) => {
  //for each tab
  tab.addEventListener('click', () => {
    //on click...
    const target = document.querySelector(tab.dataset.tabTarget); //find the data tab target
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active'); //Hide all tab contents by removing active class
    });

    tabs.forEach((tab) => {
      tab.classList.remove('active'); //change other tabs into inactive tabs
    });

    tab.classList.add('active'); //set the clicked tab active
    target.classList.add('active'); //set the clicked tab contents active
  });
});
