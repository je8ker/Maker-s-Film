<template>
  <v-card>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="file">사진 업로드:</label>
        <input type="file" id="file" @change="handleFileUpload">
        <span v-if="fileError" style="color: red;">{{ fileError }}</span>
      </div>
      <div>
        <label for="email">이메일:</label>
        <input type="email" id="email" v-model="email" @input="validateEmail">
        <span v-if="emailError" style="color: red;">{{ emailError }}</span>
      </div>
      <div>
        <label for="requests">요청 사항:</label>
        <textarea id="requests" v-model="requests"></textarea>
      </div>
      <button type="submit">제출</button>
    </form>
    <div v-if="submitted">
      <h3>폼 제출 완료</h3>
      <p>이메일: {{ email }}</p>
      <p>요청 사항: {{ requests }}</p>
      <p v-if="file">업로드된 파일: {{ file.name }}</p>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      emailError: '',
      file: null,
      fileError: '',
      requests: '',
      submitted: false
    };
  },
  methods: {
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        this.emailError = '유효하지 않은 이메일 주소입니다.';
      } else {
        this.emailError = '';
      }
    },
    handleFileUpload(event) {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
        this.file = selectedFile;
        this.fileError = '';
      } else {
        this.fileError = '파일을 선택해주세요.';
      }
    },
    handleSubmit() {
      this.validateEmail();

      if (this.emailError || !this.file) {
        if (!this.file) {
          this.fileError = '파일을 업로드해주세요.';
        }
        return;
      }

      this.submitted = true;
      console.log('이메일:', this.email);
      console.log('파일:', this.file);
      console.log('요청 사항:', this.requests);
    }
  }
};
</script>

<style>
/* 스타일을 추가할 수 있습니다 */
form div {
  margin-bottom: 15px;
}

form label {
  display: block;
  margin-bottom: 5px;
}

form input,
form textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
