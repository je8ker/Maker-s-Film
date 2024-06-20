<template>
  <div>
    <div class="d-flex justify-center mb-10" style="margin-top: 100px">
      <div class="text-h2 font-weight-bold">Maker's Film</div>
    </div>
    <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
          v-model="ID"
          density="compact"
          placeholder="아이디를 입력해주세요"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password

        <div
            class="cursor-pointer text-overline"
            @click="clickevent"
            style="color: royalblue;"
        >
          <a>
            아이디와 비밀번호를 잊어버리셨나요...?
          </a>
        </div>
      </div>

      <v-text-field
          v-model="PW"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="비밀번호를 입력해주세요"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-card
          class="mb-12"
          color="surface-variant"
          variant="tonal"
      >
      </v-card>

      <v-btn
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          block
      >
        Log In
      </v-btn>
    </v-card>
  </div>
</template>
<script>


export default {
  data: () => ({
    ID: "",
    PW: "",
    visible: false,
  }),

  methods: {
    clickevent() {
      alert("trap320@icloud.com으로 문의해주세요");
    }
  }
}
</script>