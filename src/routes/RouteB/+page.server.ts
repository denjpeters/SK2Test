import type {PageServerLoad} from './$types'

export const load = (async () => {
    return {
        valueB: 'B'
    }
}) satisfies PageServerLoad
