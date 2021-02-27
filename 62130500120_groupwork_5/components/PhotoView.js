app.component("photo-view", {
	props: {
		enlargeImage: Boolean,
		cloneGallery: Array,
		indexGallery: Number,
	},
	template:
		/*html*/
		`
        <div v-if="enlargeImage" class="bg-black h-1/2 w-1/2 ml-auto mr-auto">
        <img
            v-bind:src="cloneGallery[indexGallery].src"
            class="h-auto w-auto mr-auto ml-auto"
        />
        <span
           v-on:click="showLargeImage()"
            class="bg-yellow-300 mr-0 h-50 w-auto"
             >x close</span>
         </div>
    `,
	methods: {
		showLargeImage() {
			this.$emit("enlarge-image", true);
		},
	},
});
