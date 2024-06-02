<template>
  <br><br>
  <v-sheet class="bg-indigo-lighten-1 pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="500">
      <v-form
          v-model="form"
          @submit.prevent="onSubmit"
      >

        <v-text-field
            prepend-inner-icon="mdi-email"
            v-model="email"
            :readonly="loading"
            :rules="[required]"
            class="mb-2"
            label="Email"
            clearable
        ></v-text-field>

        <v-text-field
            prepend-inner-icon="mdi-message"
            v-model="message"
            :readonly="loading"
            :rules="[required]"
            label="message"
            placeholder="Enter your password"
            clearable
        ></v-text-field>
        <v-file-input multiple label="File input" prepend-inner-icon="mdi-file" prepend-icon=""></v-file-input>

        <br>

        <v-btn
            :disabled="!form"
            :loading="loading"
            color="success"
            size="large"
            type="submit"
            variant="elevated"
            block
        >
          request
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>
<script>
export default {
  data: () => ({
    form: false,
    email: null,
    message: null,
    loading: false,
  }),

  methods: {
    onSubmit() {
      if (!this.form) return

      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
    required(v) {
      return !!v || 'Field is required'
    },
  },
}
</script>