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
import { listItems } from "../../mixins/listItems.mixin";
export default {
  name: "todo-list",
  mixins: [listItems],
  components: {
    "todo-item": () => import("../stateless/TodoItem"),
  },
  data: () => ({
    selectedItem: "",
  }),
  methods: {
    updateTodo: function (item) {
      const { id, text, complete, datetime } = item;
      const items = [...this.items];
      const index = items.findIndex((todo) => todo.id === id);
      const i = { id, text, complete: !complete, datetime };
      if (index > -1) items[index] = i;
      this.items = items;
    },
  },
};
</script>