<template>
  <v-list-item>
    <v-list-item-icon v-on:click.exact="updateItem">
      <v-icon>
        {{item.complete ?
        'mdi-checkbox-marked-circle-outline':
        'mdi-checkbox-blank-circle-outline'}}
      </v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title
        v-strike="item"
        :aria-label="item.text"
        :data-title="item.text"
      >{{item.text}}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>
<script>
export default {
  name: "todo-item",
  props: {
    item: {
      title: String,
      complete: Boolean,
    },
  },
  directives: {
    strike: function (el, bind) {
      const completed = bind.value.complete;
      el.style.textDecoration = completed ? "line-through" : "none";
    },
  },
  methods: {
    updateItem: function () {
      this.$emit("update-todo", this.item);
    },
  },
};
</script>