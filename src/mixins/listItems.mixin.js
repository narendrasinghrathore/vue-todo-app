import uid from "uid";
/**
 * Mixins that return list of todo items
 */
const listItems = {
  data: () => ({
    items: [
      {
        id: uid(32),
        text: "Real-Time",
        complete: false,
        datetime: new Date().getTime(),
      },
      {
        id: uid(32),
        text: "Audience",
        complete: true,
        datetime: new Date().getTime(),
      },
      {
        id: uid(32),
        text: "Conversions",
        complete: false,
        datetime: new Date().getTime(),
      },
    ],
  }),
};

export { listItems };
