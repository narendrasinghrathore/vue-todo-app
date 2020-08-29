# vue-todo-application

Todo application in vue.js ![Build and Deploy](https://github.com/narendrasinghrathore/vue-todo-application/workflows/Build%20and%20Deploy/badge.svg?event=status)

## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Lints and fixes files

```bash
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Features

1. Custom [directives](./src/components/stateless/TodoItem.vue#L28)
   Below custom directive allow us to apply text decoration line through if todo item is marked as complete.

    ```javascript
    directives: {
        strike: function (el, bind) {
            const completed = bind.value.complete;
            el.style.textDecoration = completed ? "line-through" : "none";
            },
    },
    ```

2. Custom [filters](./src/components/stateless/TodoItem.vue#L36) with arguements

    ```javascript
    filters: {
        timestamp: function (val, format) {
        format = format || "en-US";
        return val ? new Intl.DateTimeFormat(format).format(new Date(val)) : "";
        },
    ```

3. Registering [mixins](./src/mixins/listItems.mixin.js#L5)
    with components

   ```javascript
   import { listItems } from 'mixins'; 
   mixins: [listItems],
   ```
