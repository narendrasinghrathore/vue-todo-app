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
      <v-list-item-subtitle>{{item.datetime | timestamp('en-GB')}}</v-list-item-subtitle>
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
      datetime: Number,
    },
  },
  directives: {
    strike: function (el, bind) {
      const completed = bind.value.complete;
      el.style.textDecoration = completed ? "line-through" : "none";
    },
  },
  filters: {
    timestamp: function (val, format) {
      format = format || "en-US";
      return val ? new Intl.DateTimeFormat(format).format(new Date(val)) : "";
    },
  },
  methods: {
    updateItem: function () {
      this.$emit("update-todo", this.item);
    },
  },
};
</script>