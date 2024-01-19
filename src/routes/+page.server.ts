import type {PageServerLoad} from './$types'
import type {Actions} from "@sveltejs/kit";

export const load = (async () => {
    return {
        valueRoot: 'Root'
    }
}) satisfies PageServerLoad

export const actions = {
    increment: async ({locals}) => {
        locals.persist_object.counter++

        return {
            success: true
        }
    }
} satisfies Actions
