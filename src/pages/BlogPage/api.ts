export type Post = {
    id: number
    name: string
    description: string
    content: string
}
export type PostItem = Omit<Post, 'content'>

const posts: Post[] = [
    {
        id: 1,
        name: 'post 1',
        description: 'description for post 1',
        content: 'content for post 1',
    },
    {
        id: 2,
        name: 'post 2',
        description: 'description for post 2',
        content: 'content for post 2',
    },
    {
        id: 3,
        name: 'post 3',
        description: 'description for post 3',
        content: 'content for post 3',
    },
]

export const postApi = {
    getList: async (): Promise<{ list: PostItem[], total: number }> => {
        await delay(2000)

        return {
            list: posts.map(({ content, ...post }) => post),
            total: posts.length
        }
    },
    getItem: async ({ id }: { id: number }) => {
        await delay(2000)

        return posts.find(item => item.id === id)
    }
}

function delay(ms = 2000) {
    return new Promise<void>(resolve => {
        const timeout = setTimeout(() => {
            resolve()
            clearTimeout(timeout)
        }, ms)
    })
}