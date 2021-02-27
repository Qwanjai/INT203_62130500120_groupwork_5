app.component("photo-item", {
	props: {
		cloneGallery: Array,
		enlargeImage: Boolean,
	},
	template:
		/*html*/
		` <ul class="grid grid-cols-2 gap-y-10 ml-10 lg:grid-cols-5">
    		<div v-for="(gallery,index) in cloneGallery">
        	<p class="text-lg font-semibold">{{gallery.title}}</p>
       		 <a v-on:click="showEnlargeImage(),returnIndex(index)" href="#">
           	 <img :src="gallery.src" class="h-48 w-32" />
        	</a>
    		</div>
		</ul>`,
	methods: {
		returnIndex(index) {
			// this.indexGallery = index;
			this.$emit("return-index", index);
		},
		showLargeImage() {
			// this.enlargeImage=!enlargeImage;
			this.$emit("enlarge-image", false);
		},
	},
});
