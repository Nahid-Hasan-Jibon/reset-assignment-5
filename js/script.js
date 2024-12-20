document
  .getElementById("donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const inputValue = getInputFieldValueByID("input-1");
    const currentBalance = getTextFieldValueByID("current-balance");
    const currentDonation = getTextFieldValueByID("current-donation");

    if (inputValue > currentBalance || inputValue < 0 || isNaN(inputValue)) {
      alert("Failed to donate money");
    } else {
      const updateBalance = currentBalance - inputValue;
      document.getElementById("current-balance").innerText =
        updateBalance.toFixed(2);
      const updateDonationBalance = currentDonation + inputValue;
      document.getElementById("current-donation").innerText =
        updateDonationBalance.toFixed(2);

      document
        .getElementById("donate-btn")
        .setAttribute(
          "onclick",
          document.getElementById("my_modal_1").showModal()
        );

      const place = document.getElementById("place").innerText;

      // const showCurrentTime=new Date().toLocaleTimeString()

      // const currentDate = new Date().toLocaleDateString()

      const currentTimeAndDate = new Date();
      const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const currentDate = currentTimeAndDate.toLocaleDateString(
        undefined,
        dateOptions
      );
      const showCurrentTime = currentTimeAndDate.toLocaleTimeString();

      // add to history section

      const div = document.createElement("div");
      div.innerHTML = `
    <div class="border-2 rounded-lg m-20 ">
         <div class="p-6">
          <p class="text-2xl font-bold">${inputValue} Taka is Donated for ${place}, Bangladesh</p>
        <p class="text-[#111111b3] mt-3">Date :${currentDate} ${showCurrentTime}   GMT +0600(Bangladesh Standard Time)</p>
         </div>
      </div>
     `;
      document.getElementById("history-container").appendChild(div);
    }
  });

// code for the 2nd card

document
  .getElementById("donate-btn-2")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const inputValue = getInputFieldValueByID("input-2");
    const currentBalance = getTextFieldValueByID("current-balance");
    const currentDonation = getTextFieldValueByID("current-donation-2");

    if (inputValue > currentBalance || inputValue < 0 || isNaN(inputValue)) {
      alert("Failed to donate money");
    } else {
      const updateBalance = currentBalance - inputValue;
      document.getElementById("current-balance").innerText =
        updateBalance.toFixed(2);
      const updateDonationBalance = currentDonation + inputValue;
      document.getElementById("current-donation-2").innerText =
        updateDonationBalance.toFixed(2);

      document
        .getElementById("donate-btn-2")
        .setAttribute(
          "onclick",
          document.getElementById("my_modal_1").showModal()
        );

      const place = document.getElementById("place-2").innerText;

      // const showCurrentTime=new Date().toLocaleTimeString()

      // const currentDate = new Date().toLocaleDateString()

      const currentTimeAndDate = new Date();
      const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const currentDate = currentTimeAndDate.toLocaleDateString(
        undefined,
        dateOptions
      );
      const showCurrentTime = currentTimeAndDate.toLocaleTimeString();

      // add to history section

      const div = document.createElement("div");
      div.innerHTML = `
    <div class="border-2 rounded-lg m-20 ">
         <div class="p-6">
          <p class="text-2xl font-bold">${inputValue} Taka is Donated for ${place}, Bangladesh</p>
        <p class="text-[#111111b3] mt-3">Date :${currentDate} ${showCurrentTime}   GMT +0600(Bangladesh Standard Time)</p>
         </div>
      </div>
     `;
      document.getElementById("history-container").appendChild(div);
    }
  });

// code for card 3

document
  .getElementById("donate-btn-3")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const inputValue = getInputFieldValueByID("input-3");
    const currentBalance = getTextFieldValueByID("current-balance");
    const currentDonation = getTextFieldValueByID("current-donation-3");

    if (inputValue > currentBalance || inputValue < 0 || isNaN(inputValue)) {
      alert("Failed to donate money");
    } else {
      const updateBalance = currentBalance - inputValue;
      document.getElementById("current-balance").innerText =
        updateBalance.toFixed(2);
      const updateDonationBalance = currentDonation + inputValue;
      document.getElementById("current-donation-3").innerText =
        updateDonationBalance.toFixed(2);

      document
        .getElementById("donate-btn-3")
        .setAttribute(
          "onclick",
          document.getElementById("my_modal_1").showModal()
        );

      const place = document.getElementById("place-3").innerText;

      // const showCurrentTime=new Date().toLocaleTimeString()

      // const currentDate = new Date().toLocaleDateString()

      const currentTimeAndDate = new Date();
      const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const currentDate = currentTimeAndDate.toLocaleDateString(
        undefined,
        dateOptions
      );
      const showCurrentTime = currentTimeAndDate.toLocaleTimeString();

      // add to history section

      const div = document.createElement("div");
      div.innerHTML = `
    <div class="border-2 rounded-lg m-20 ">
         <div class="p-6">
          <p class="text-2xl font-bold">${inputValue} Taka is Donated for ${place}, Bangladesh</p>
        <p class="text-[#111111b3] mt-3">Date :${currentDate} ${showCurrentTime}   GMT +0600(Bangladesh Standard Time)</p>
         </div>
      </div>
     `;
      document.getElementById("history-container").appendChild(div);
    }
  });
