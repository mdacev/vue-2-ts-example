<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
      dark
    >
      <v-row wrap justify="center" class="pr-2">
      
        <v-img
          class="mx-2"
          src="factset.png"
          max-height="40"
          max-width="120"
          contain
        ></v-img>
        
        <router-link to="/">
          <span class="group pa-2">
            <v-icon medium>mdi-table-large</v-icon>
          </span>
        </router-link>  | 
        <router-link to="/trade">
          <span class="group pa-2">
            <v-icon medium>mdi-table-of-contents</v-icon>
          </span>
        </router-link> |  
        <router-link to="/chart">
          <span class="group pa-2">
            <v-icon medium>mdi-chart-bar</v-icon>
          </span>
        </router-link>
        <v-spacer></v-spacer>
      </v-row>
    </v-app-bar>

    <router-view/>

  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(28, 34, 43);
}

#nav {
  padding: 30px;
  margin-bottom: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
