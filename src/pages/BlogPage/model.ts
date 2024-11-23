import { createEffect, createStore, sample } from 'effector'
import { postApi, PostItem } from './api'
import { createGate } from 'effector-react'
import { spread } from 'patronum'


export const BlogPageGate = createGate()

export const getPostListFx = createEffect(postApi.getList)

export const $posts = createStore<PostItem[]>([])
export const $total = createStore(0)
export const $isLoading = createStore(true)

sample({
    clock: BlogPageGate.open,
    fn: () => true,
    target: $isLoading,
})
sample({
    clock: BlogPageGate.open,
    target: getPostListFx,
})
sample({
    clock: getPostListFx.doneData,
    target: spread({
        list: $posts,
        total: $total,
    })
})
sample({
    clock: getPostListFx.finally,
    fn: () => false,
    target: $isLoading,
})
sample({
    clock: BlogPageGate.close,
    fn: () => true,
    target: $isLoading,
})
