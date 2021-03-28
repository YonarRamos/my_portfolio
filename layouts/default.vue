<template>
  <v-app>
    <v-app-bar
      :clipped-left="clipped"
      elevate-on-scroll
      app
      dense
    >
    <div>
        <img
          src="logo.png"
          width="200px"
          height="auto"
          style="position: relative"
          class="mt-2"
        />
    </div>
    
    <v-spacer/>

    <v-menu
      transition="fab-transition"
      botton
      origin="right"
      >
        <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          @click.stop="drawer = !drawer"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon color="grey">mdi-menu</v-icon>
        </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            id="item"
            :to="item.to"
          >
            <v-list-item-title id="item" :href="item.to" >{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      
    </v-app-bar>

    <!-- body -->
    <v-main>
      <nuxt />
    </v-main>

    <!-- footer -->
    <v-footer
      :absolute="fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '#'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Hello',
          to: '#greeting'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'About Me',
          to: '#about'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Services',
          to: '#services'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Experience',
          to: '#works'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Contact Me',
          to: '#contact-me'
        }
      ],
    }
  }
}
</script>
<style>
#item{
  cursor: pointer;
}
#item:hover{
  color: #1976D2;
  background-color: #f5f5f5
}
</style>