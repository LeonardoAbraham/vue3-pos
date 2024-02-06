import { generateClasses } from '@formkit/themes'
const config = {
    config: {
        classes: generateClasses({
            global: {
                label: 'block mb-1 font-bold text-lg',
                message: 'text-red-500',
                wrapper: 'space-y-2 mb-3'
            },
            text: {
                //message:'$reset text-green-500'
            },
            file: {

            },
            select: {

            },
            number: {
                message: 'text-red-500'
            }
        })
    }
}

export default config

