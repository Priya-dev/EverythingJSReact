document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("box");
  const buttonFunc = document.getElementById("counter");
  let controller;
  let isError = false;
  let isLoading = false;

  const fetchData = async () => {
    isLoading = true;
    controller = new AbortController();
    try {
      updateUI();
      let data = await fetch("https://jsonplaceholder.typicode.com/todos/", {
        signal: controller.signal,
      });
      let response = await data.json();
      return response;
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Aborted");
        return;
      }
      console.log(error);
      isError = true;
      updateUI();
    } finally {
      isLoading = false;
      updateUI();
    }
  };

  const updateUI = () => {
    if (isLoading) {
      console.log("here isLoading");
      // Show loading state
      container.textContent = "Loading...";
    } else if (isError) {
      // Show error state
      console.log(error);
      container.textContent = "Error fetching jobs.";
    } else {
      // Reset container content
      container.textContent = "";
    }
    // Reset loading and error states
    isLoading = false;
    isError = false;
  };

  let renderData = async () => {
    let data = await fetchData();
    if (data.length > 0) {
      data.forEach((key) => {
        const itemDiv = document.createElement("li");
        itemDiv.classList.add("item");
        itemDiv.textContent = key.title;
        itemDiv.setAttribute("key", key);
        container.appendChild(itemDiv);
      });
    }
  };
  buttonFunc.addEventListener("click", () => {
    console.log("clicked");
  });
  renderData();
});
