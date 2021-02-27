const app = Vue.createApp({
	data() {
		return {
			gallerys: [
				{
					title: "The Godfather Part III (1990)",
					src: "imgs/GodfatherIII2.jpg",
				},
				{
					title: "The Virgin Suicides (1999)",
					src: "imgs/VirginSuicides.jpg",
				},
				{
					title: "Lost in Translation (2003)",
					src: "imgs/Lost_in_Translation_poster.jpg",
				},
				{
					title: "Marie-Antoinette (2006)",
					src: "imgs/marie.png",
				},
				{
					title: "Somewhere (2010)",
					src: "imgs/Somewhere_Poster.jpeg",
				},
				{
					title: "The Bling Ring (2013)",
					src: "imgs/The_Bling_Ring_poster.jpg",
				},
				{
					title: "A Very Murray Christmas (2015)",
					src: "imgs/AVeryMurrayChristmas_poster.jpg",
				},
				{
					title: "The Beguiled (2017)",
					src: "imgs/The_Beguiled.png",
				},

				{
					title: "On the Rocks (2020)",
					src: "imgs/On_the_Rocks_poster.jpeg",
				},
			],
			cloneGallery: [],
			searchButton: false,
			search: "",
			enlargeImage: false,
			indexGallery: 0,
		};
	},
	methods: {
		showSearch() {
			this.searchButton = !searchButton;
		},
		returnIndex(index) {
			this.indexGallery = index;
		},
		showEnlargeImage() {
			this.enlargeImage = !enlargeImage;
		},
	},
	computed: {
		filteredList() {
			this.cloneGallery = this.gallerys.filter((gallery) => {
				return gallery.title.toLowerCase().includes(this.search.toLowerCase());
			});
			return this.cloneGallery;
		},
	},
});
// Vue.createApp(app).mount("#app");
