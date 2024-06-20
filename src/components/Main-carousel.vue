<template>
    <div id="myCarousel" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true"
                aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/video/Glacier.gif" class="d-block w-100" alt="First slide">
          <div class="container">
            <div class="carousel-caption text-start">
              <h1>한계를 뛰어넘는 창작, Maker's Film</h1>
              <p>텍스트에서 영상, 이미지에서 비디오까지 AI가 당신의 창작을 도와드립니다. 지금 시작하세요!
              </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/video/main2.gif" class="d-block w-100" alt="Second slide">
          <div class="container">
            <div class="carousel-caption">
              <h1>아이디어가 빛나는 순간, Maker's Film</h1>
              <p>텍스트, 이미지, 비디오를 자유롭게 변환하여 맞춤형 콘텐츠를 제작하는 혁신적인 웹 서비스. 지금 경험해보세요!</p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="/video/main3.gif" class="d-block w-100" alt="Third slide">
          <div class="container">
            <div class="carousel-caption text-end">
              <h1>상상 그 이상을 현실로, Maker's Film</h1>
              <p>최첨단 AI 기술로 텍스트에서 영상까지, 이미지에서 비디오까지. 당신의 창의적 비전을 완벽하게 구현해드립니다.</p>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
</template>

<style scoped>
.carousel-item {
  height: 100vh; /* Full viewport height */
}

.carousel-item img {
  object-fit: cover;
  height: 100%;
}
</style>
<script setup>
</script>