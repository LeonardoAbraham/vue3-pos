import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useFirestore, useCollection } from 'vuefire'
import { collection, addDoc, where, query, limit, orderBy } from 'firebase/firestore'

export const useProductsStore = defineStore('products', () => {

    const db = useFirestore()

    const categories = [
        { id: 1, name: 'Sudaderas' },
        { id: 2, name: 'Tenis' },
        { id: 3, name: 'Lentes' },
    ]

    const q = query(
        collection(db, 'products'),
        orderBy('availability', 'asc')
        //where('category', '==', 2),
        //limit(10),
    )

    const productsCollections = useCollection(q)

    async function createProduct(product) {
        await addDoc( collection(db, 'products'), product )
    }

    async function updateProduct(docRef, product) {
        console.log(product)
    }

    const categoryOptions = computed(() => {
        const options = [
            {label: 'Seleccione', value: '', attrs: {disabled: true}},
            ...categories.map(category => (
                {label: category.name, value: category.id}
            ))
        ]

        return options;
    })

    const noResults = computed(() => productsCollections.value.length === 0)


    return {
        createProduct,
        updateProduct,
        productsCollections,
        categoryOptions,
        noResults,
    }
})