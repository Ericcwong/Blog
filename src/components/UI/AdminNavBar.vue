<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Eric's Blog</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item href="/">Dashboard</b-nav-item>
            <b-nav-item href="/about">About</b-nav-item>
          </b-navbar-nav>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Posts</em>
            </template>
            <b-dropdown-item href="#">New Post</b-dropdown-item>
            <b-dropdown-item href="#">Edit Post</b-dropdown-item>
            <!-- <b-dropdown-item href="#">New Post</b-dropdown-item> -->
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>