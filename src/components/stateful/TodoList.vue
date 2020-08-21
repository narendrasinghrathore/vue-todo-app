<template>
  <v-card class="mx-auto" tile>
    <v-list rounded>
      <v-subheader>Todo Item(s)</v-subheader>
      <v-list-item-group color="primary">
        <todo-item
          v-on:update-todo="updateTodo($event)"
          v-for="item in items"
          v-bind:item="item"
          :key="item.id"
        />
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
import uid from "uid";
export default {
  name: "todo-list",
  components: {
    "todo-item": () => import("../stateless/TodoItem"),
  },
  data: () => ({
    selectedItem: "",
    items: [
      { id: uid(32), text: "Real-Time", complete: false },
      { id: uid(32), text: "Audience", complete: true },
      { id: uid(32), text: "Conversions", complete: false },
    ],
  }),
  methods: {
    updateTodo: function (item) {
      const { id, text, complete } = item;
      const items = [...this.items];
      const index = items.findIndex((item) => item.id === id);
      const i = { id, text, complete: !complete };
      if (index) items[index] = i;
      this.items = items;
      console.log(id, text, complete, index, i);
    },
  },
};
</script>