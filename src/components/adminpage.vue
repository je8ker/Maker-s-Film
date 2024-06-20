<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top"
       :class="{ 'navbar-scroll': isNavbarScroll }">
  </nav>

  <v-card>
    <v-layout>
      <v-app-bar
          color="indigo-accent-3"
          prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Admin page</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>

          <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>
      </v-app-bar>

      <v-navigation-drawer
          v-model="drawer"
          :location="$vuetify.display.mobile ? 'left' : undefined"
          temporary
      >
        <v-list
            :items="items"
        ></v-list>
      </v-navigation-drawer>

      <v-main>
        <admindataview/>
      </v-main>

    </v-layout>
  </v-card>
</template>
<script>
import admindataview from "./admindataview.vue"
export default {
  name: "adminpage",
  components:{
    admindataview,
  },
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Foo',
        value: 'foo',
      },
      {
        title: 'Bar',
        value: 'bar',
      },
      {
        title: 'Fizz',
        value: 'fizz',
      },
      {
        title: 'Buzz',
        value: 'buzz',
      },
    ],
  }),

  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>