<template>
  <v-row>
    <v-col cols="12">
      <v-container class="my-4">
        <h1>이미지 목록</h1>

        <!-- 버튼 추가 -->
        <v-btn @click="fetchImages" color="primary">데이터 다시 불러오기</v-btn>
        <v-list>
          <v-list-item-group v-for="image in images" :key="image._id">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>이름: {{ image.filename }}</v-list-item-title>
                <v-list-item-subtitle>이메일: {{ image.email }}</v-list-item-subtitle>
                <v-list-item-subtitle>문의내용: {{ image.message }}</v-list-item-subtitle>
                <v-list-item-subtitle>생성날짜: {{ image.createdAt }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import axios from 'axios';

export default {
  name: "adminpagedata",
  data() {
    return {
      images: [], // images 데이터 프로퍼티 초기화
    };
  },
  created() {
    this.fetchImages(); // 초기 데이터 불러오기
  },
  methods: {
    fetchImages() {
      axios.get("http://localhost:3000/api/images/")
          .then((response) => {
            this.imag8es = response.data; // 데이터를 받아서 images에 할당
            // console.log("Fetched images:", this.images);
          })
          .catch((error) => {
            console.error('Error fetching images:', error);
          });
    }
  }
};
</script>
