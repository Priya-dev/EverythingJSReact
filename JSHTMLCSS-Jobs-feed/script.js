document.addEventListener("DOMContentLoaded", () => {
  const jobsDiv = document.getElementById("jobs");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  let controller;
  let start = 0;
  let end = 5;

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/jobstories.json`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const renderJobs = async () => {
    controller = new AbortController();
    try {
      const data = await fetchData();
      if (data && data.length > 0) {
        const arr = data.slice(start, end);
        let arrResp = [];
        // const newArr = await Promise.all(
        //   arr.map(async (id) => {
        //     const responseNew = await fetch(
        //       `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        //     );
        //     return responseNew.json();
        //   })
        // );
        for (let id of arr) {
          const responseNew = await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
            { signal: controller.signal }
          );
          let responseDataNew = await responseNew.json();
          arrResp.push(responseDataNew);
        }

        arrResp.forEach((job, index) => {
          const jobElement = document.createElement("div");
          jobElement.classList.add("job");

          console.log(job);

          const heading = document.createElement("h2");
          heading.textContent = job.by;
          jobElement.appendChild(heading);

          const description = document.createElement("p");
          description.textContent = `by: ${job.title}`;
          jobElement.appendChild(description);
          jobElement.setAttribute("key", index);

          jobsDiv.appendChild(jobElement);

          jobElement.addEventListener("click", (e) => {
            window.location.href = job.url;
          });
        });
      } else {
        console.log("No job data found");
      }
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Aborted");
        return;
      }
      console.error("Error rendering jobs:", error);
    }
  };

  loadMoreBtn.addEventListener("click", async () => {
    start += 5;
    end += 5;
    await renderJobs();
  });

  renderJobs();
});
