const panels = document.querySelectorAll('.panel'); /* grab all the panels */

panels.forEach((panel) => { /* consider each panel in the array */
    panel.addEventListener('click', ()=> { /* when there is a click on a panel, do the following: */
        removeActiveClasses(); /* remove any existing 'active' class */
        panel.classList.add('active'); /* add 'active' class to clicked panel */
    });
});

function removeActiveClasses() { /* this function handles the removal of the active class used in the forEach loop above */
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}