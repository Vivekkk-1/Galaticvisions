new Vue({
    el: "#app",
    data: {
        images: [] // Stores the list of images
    },
    mounted() {
        this.loadImages(); // Load images when the page loads
    },
    methods: {
        async loadImages() {
            try {
                // Fetch images from a JSON file
                const response = await axios.get("images.json");
                this.images = response.data;
            } catch (error) {
                console.error("Error loading images:", error);
            }
        }
    }
});
