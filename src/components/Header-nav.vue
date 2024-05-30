<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top" :class="{ 'navbar-scroll': isNavbarScroll }"> 
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> <i class="bi bi-film"></i> Maker's Film</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item me-auto">
            <a class="nav-link active" aria-current="page" href="#section1">소개</a>
          </li>
          <li class="nav-item me-auto">
            <a class="nav-link active" aria-current="page" href="#section2">업로드</a>
          </li>
          <li class="nav-item me-auto">
            <a class="nav-link active" aria-current="page" href="#section3">다운로드</a>
          </li>
          <li class="nav-item me-auto">
            <a class="nav-link active" aria-current="page" href="#section4">이메일</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isTransparent: false 
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); 
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY <= 100) {
        this.isTransparent = true;
      } else {
        this.isTransparent = false;
      }
    }
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: background-color 0.3s ease; 
}

.navbar-transparent {
  background-color: transparent !important;
}

.navbar:not(.navbar-transparent) {
  background-color: rgba(0, 0, 0, 0.7) !important;
}
</style>