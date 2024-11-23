import { createEvent, createStore } from "effector";

export const toggled = createEvent()

export const $flag = createStore(false)
    .on(toggled, state => !state)