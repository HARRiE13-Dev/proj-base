<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>Application</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn icon="mdi-dots-vertical"> </v-btn>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>

    <v-footer app>sdf</v-footer>
  </v-app>
</template>
