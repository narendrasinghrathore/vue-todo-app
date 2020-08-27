<template>
 <!-- Rendering plain HTML elements is very fast in Vue, but sometimes you might have a component 
 that contains a lot of static content. In these cases, you can ensure that it’s only evaluated
  once and then cached by adding the v-once directive to the root element, -->
  <div class="about" v-once>
    <h1>This is an about page</h1>
  </div>
</template>
