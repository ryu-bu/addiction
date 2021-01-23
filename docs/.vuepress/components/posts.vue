<template>
  <div>
    <v-flex v-for="page in pages">
    <router-link :to="page.path">
      <v-card
            max-width="374"
        >
        <v-img
        height="250"
        :src="page.frontmatter.image"
        ></v-img>

        <div class="page-detail">
          <v-card-title>{{ page.frontmatter.title }}</v-card-title>
          <div class="page-description">{{ page.frontmatter.description }}</div>
          <div class="page-author">Author: {{ page.frontmatter.author }}</div>
        </div>
      </v-card>
    </router-link>
    </v-flex>
  </div>
</template>
<script>
export default {    
  data() {
    return {
      pages: []
    }
  },
  mounted() {
    this.$site.pages.forEach(page => {
      if (page.frontmatter.type === 'article') {
        this.pages.push(page)
      }
    })
  },
  methods: {
      getImage(imgLink){
          let src = imgLink;
          return src
      }
  }
}
</script>

<style scoped>
.post-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.post-card {
  width: 100%;
  height: 150px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 10px;
  display: flex;
  align-items: center;
}
.article-image {
  height: 100%;
}
.description {
  width: 100%;
  display: flex;
  justify-content: center;
}

.page-title {
    font-size: large;
    color: black;
    text-decoration: none;
    text-align: center;
}
</style>