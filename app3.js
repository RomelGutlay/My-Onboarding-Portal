document.addEventListener('DOMContentLoaded', () => {
    // DOM Phase Wrappers
    const phase1 = document.querySelector('#phase1');
    const phase2 = document.querySelector('#phase2');
    const phase3 = document.querySelector('#phase3');

    // DOM Step Headings Indicators
    const step1Indicator = document.querySelector('#step1Indicator');
    const step2Indicator = document.querySelector('#step2Indicator');
    const step3Indicator = document.querySelector('#step3Indicator');

    // DOM Validation Alert Box
    const validationAlert = document.querySelector('#validationAlert');

    // Capture Buttons Links
    const nextToPhase2 = document.querySelector('#nextToPhase2');
    const nextToPhase3 = document.querySelector('#nextToPhase3');
    const restartBtn = document.querySelector('#restartBtn');

    // Input Streams Nodes Selection
    const firstName = document.querySelector('#firstName');
    const middleName = document.querySelector('#middleName');
    const lastName = document.querySelector('#lastName');
    const extName = document.querySelector('#extName');
    const ageName = document.querySelector('#age');
    const bdayVal = document.querySelector('#bday');
    const genderName = document.querySelector('#gender');
    const currentAddress = document.querySelector('#currentAddress');
    const permanentAddress = document.querySelector('#permanentAddress');

    // Target Previews Injections Nodes Selection
    const previewName = document.querySelector('#previewName');
    const previewBio = document.querySelector('#previewBio');
    const previewGender = document.querySelector('#previewGender');
    const previewCurrent = document.querySelector('#previewCurrent');
    const previewPermanent = document.querySelector('#previewPermanent');

    // TRANSITION ACTION 1: Processing Name Streams
    nextToPhase2.addEventListener('click', () => {
        validationAlert.classList.add('d-none');

        const fNameClean = firstName.value.trim();
        const lNameClean = lastName.value.trim();
        const bdayVal = bday.value.trim();
        const aNameClean = ageName.value.trim();
        const gNameClean = genderName.value.trim();
       

        // Check required fields (First Name, Last Name, Birthdate, Age, and Gender selection)
        if (fNameClean === "" || lNameClean === "" || bdayVal === "" || gNameClean === "" || aNameClean === "") {
            validationAlert.classList.remove('d-none');
            validationAlert.textContent = "Validation Failure: Please fill out all required Phase 1 fields (*)!";
            return;
        }   
       

        // Advance visual stage indicator layout frames
        phase1.classList.add('d-none');
        phase2.classList.remove('d-none');

        step1Indicator.className = "text-muted flex-fill";
        step2Indicator.className = "text-primary border-bottom border-3 border-primary pb-1 flex-fill";
    });

    // TRANSITION ACTION 2: Processing Location & Generating Summary
    nextToPhase3.addEventListener('click', () => {
        validationAlert.classList.add('d-none');

        const currentAddrClean = currentAddress.value.trim();
        const permAddrClean = permanentAddress.value.trim();

        if (currentAddrClean === "" || permAddrClean === "") {
            validationAlert.classList.remove('d-none');
            validationAlert.textContent = "Validation Failure: Both Address fields are required fields!";
            return;
        }

        // Format Name
        const formattedFirst = firstName.value.trim().toUpperCase();
        const formattedMiddle = middleName.value.trim() !== "" ? middleName.value.trim().toUpperCase() + " " : "";
        const formattedLast = lastName.value.trim().toUpperCase();
        const formattedExt = extName.value.trim() !== "" ? ", " + extName.value.trim().toUpperCase() : "";
        const formattedAge = ageName.value.trim().toUpperCase();
        const formattedGender = genderName.value.trim().toUpperCase();
        const formattedBday = bday.value.trim().toUpperCase();

        // Populate Summary Cards
        previewName.textContent = `${formattedLast}, ${formattedFirst} ${formattedMiddle}${formattedExt}`;
        previewinfo.textContent = `${formattedAge}, ${formattedGender}, ${formattedBday}`;
        previewCurrent.textContent = currentAddrClean.toUpperCase();
        previewPermanent.textContent = permAddrClean.toUpperCase();

        // Switch panel layout view
        phase2.classList.add('d-none');
        phase3.classList.remove('d-none');

        step2Indicator.className = "text-muted flex-fill";
        step3Indicator.className = "text-primary border-bottom border-3 border-primary pb-1 flex-fill";
    });

    // RESTART INTERFACES STATE ACTIONS
    restartBtn.addEventListener('click', () => {
        firstName.value = ""; middleName.value = ""; lastName.value = ""; extName.value = "";
        bday.value = ""; age.value = "";
        currentAddress.value = ""; permanentAddress.value = "";
        document.querySelector('#genderMale').checked = true;

        phase3.classList.add('d-none');
        phase1.classList.remove('d-none');

        step3Indicator.className = "text-muted flex-fill";
        step1Indicator.className = "text-primary border-bottom border-3 border-primary pb-1 flex-fill";
    });
});
