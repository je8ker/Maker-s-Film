<template>
  <div id="section3" class="container marketing introduce" style="margin-top: 30px;">
    <br><br>
    <v-sheet class="bg-indigo-lighten-1 pa-12" rounded>
      <v-card class="mx-auto px-6 py-8" max-width="500">
        <v-form
            ref="formRef"
            v-model="formValid"
            @submit.prevent="onSubmit"
        >
          <v-snackbar
              v-model="snackbar"
              :timeout="3000"
              color="success"
              top
          >
            이미지 업로드가 성공적으로 완료되었습니다.
          </v-snackbar>
          <v-text-field
              prepend-inner-icon="mdi-email"
              v-model="email"
              :readonly="loading"
              :rules="emailRules"
              class="mb-2"
              label="Email"
              clearable
          ></v-text-field>

          <v-text-field
              prepend-inner-icon="mdi-message"
              v-model="message"
              :readonly="loading"
              :rules="messageRules"
              label="message"
              placeholder="Enter your message"
              clearable
          ></v-text-field>
          <v-file-input
              v-model="file"
              :readonly="loading"
              :rules="fileRules"
              ref="fileInputRef"
              multiple
              label="File input"
              prepend-inner-icon="mdi-file"
              prepend-icon=""
              clearable
          ></v-file-input>

          <br>

          <v-btn
              :disabled="!formValid"
              :loading="loading"
              color="success"
              size="large"
              type="submit"
              variant="elevated"
              block
          >
            업로드
          </v-btn>
        </v-form>
      </v-card>
    </v-sheet>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    snackbar: false,
    formValid: false,
    email: "",
    message: "",
    file: null,
    loading: false,
    emailRules: [
      v => !!v || "이메일을 입력해주세요",
      v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || '이메일 형식이 잘못되었습니다.'
    ],
    messageRules: [
      v => !!v || '내용을 입력해주세요',
      v => !v || v.length > 5 || "5자 이상 입력해주세요",
    ],
    fileRules: [
      v => !!v || "파일을 선택해주세요",
      v => (v && v.length > 0) || "파일을 업로드해주세요",
      v => !v || (v.length > 0 && v[0].size < 100000000) || "최대 파일 크기는 100MB 미만입니다."
    ],
  }),

  methods: {
    async onSubmit() {
      if (!this.formValid) return

      this.loading = true

      const formData = new FormData();
      formData.append('email', this.email);
      formData.append('message', this.message);
      if (this.file && this.file.length > 0) {
        formData.append('file', this.file[0]);
      }

      try {
        const response = await axios.post('http://localhost:3000/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log("Front file upload msg :",response.data);
        this.snackbar = true;
        this.clearForm();
      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        this.loading = false;
      }
    },
    clearForm() {
      this.email = "";
      this.message = "";
      this.file = null;
      this.$refs.formRef.resetValidation();
      this.$nextTick(() => {
        this.$refs.fileInputRef.resetValidation();
      });
    }
  },
}
</script>
