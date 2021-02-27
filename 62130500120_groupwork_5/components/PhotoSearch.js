app.component("photo-search", {
	props: {
		searchButton: Boolean,
		search: "",
	},
	template:
		/*html*/
		` <div class="flex items-center justify-between bg-black text-white h-10">
    <a v-on:click="searchButton" href="#">
        <span class="material-icons ml-28"> search </span>
    </a>
    <div v-if="searchButton" class="">
        <input
            v-model="search"
            class="ml-2 p-1 w-80 placeholder-gray-500 placeholder-opacity-50 focus:outline-none text-black rounded-sm"
            type="text"
            placeholder="Please enter text for searching photos"
        />
        <button
            v-on:click="searchButton"
            class="ml-2 p-1 rounded-sm focus:outline-none bg-blue-500"
        >
            Cancel
        </button>
    </div>
    
</div>`,
	data() {
		return {
			search: "",
		};
	},
	method: {
		searchButton() {
			this.search = "";
			this.$emit("search-button");
			this.$emit("search-picture", "");
		},
		searchPicture() {
			this.$emit("search-picture", this.search);
		},
	},
});
