<template>
  <v-list-item v-on:click.ctrl.exact="updateItem">
    <v-list-item-icon>
      <v-icon>{{item.complete ? 'mdi-checkbox-marked-circle-outline':'mdi-checkbox-blank-circle-outline'}}</v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title v-text="item.text"></v-list-item-title>
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
  methods:{
    updateItem: function () {
      this.$emit("update-todo", this.item);
    },
  },
};
</script>