import type {PageServerLoad} from "./$types"

export const load = (async () => {
    return {
        valueA: 'A'
    }
}) satisfies PageServerLoad
