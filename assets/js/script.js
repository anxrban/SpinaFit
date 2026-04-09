document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("searchForm");

    searchForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        
        const query = document.getElementById("query").value;
        if (query.trim() !== "") {
            // Redirect to the search results page with the query as a parameter
            window.location.href = `search.php?query=${encodeURIComponent(query)}`;
        }
    });
});
