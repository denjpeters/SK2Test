import type {Handle} from '@sveltejs/kit'

const persist_object = {
    counter: 1
}

export const handle: Handle = async ({event, resolve}) => {
    event.locals = {
        ...event.locals,
        persist_object
    }

    return resolve(event)
}
