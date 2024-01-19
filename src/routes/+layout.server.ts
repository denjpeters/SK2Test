import type {LayoutServerLoad} from './$types'

export const load = (async ({locals, depends}) => {
    depends('app:persist')

    return {
        persist_object: {...locals.persist_object}
    }
}) satisfies LayoutServerLoad
