
document.addEventListener('DOMContentLoaded', function () {
    var servicesLink = document.getElementById('servicesLink');
    var servicesDropdown = document.getElementById('servicesDropdown');
    var isDropdownOpen = false;

    if (servicesLink && servicesDropdown) {
        console.log("Services link and dropdown found."); // Check if elements are found
        
        // Toggle the dropdown list when clicking or tapping on the services link
        servicesLink.addEventListener('click', function (event) {
            console.log("Services link clicked."); // Check if the event listener is triggered
            
            // Toggle the visibility of the dropdown
            if (isDropdownOpen) {
                servicesDropdown.style.display = 'none';
            } else {
                servicesDropdown.style.display = 'block';
            }

            // Update the dropdown state
            isDropdownOpen = !isDropdownOpen;

            // Prevent the click event from propagating to the document
            event.stopPropagation();
        });

        // Close the dropdown when clicking or tapping outside of it
        document.addEventListener('click', function (event) {
            console.log("Clicked outside of dropdown."); // Check if the event listener is triggered
            
            // Check if the click or tap is outside of the services link and the dropdown list
            if (!servicesLink.contains(event.target) && !servicesDropdown.contains(event.target)) {
                // Close the dropdown
                servicesDropdown.style.display = 'none';
                isDropdownOpen = false;
            }
        });

        // Close the dropdown when tapping on mobile devices
        document.addEventListener('touchstart', function (event) {
            console.log("Tapped outside of dropdown."); // Check if the event listener is triggered
            
            // Check if the tap is outside of the services link and the dropdown list
            if (!servicesLink.contains(event.target) && !servicesDropdown.contains(event.target)) {
                // Close the dropdown
                servicesDropdown.style.display = 'none';
                isDropdownOpen = false;
            }
        });
    } else {
        console.log("Services link or dropdown not found."); // Check if elements are not found
    }
  });
</script>
