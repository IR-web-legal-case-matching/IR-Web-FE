import { ref } from 'vue'

export const inputForm = ref('')

export const selectID = ref('')
export const selectTable = ref([
  {
    id: '1',
    name: 'Restaurant',
  },
  {
    id: '2',
    name: 'Order No.',
  },
  {
    id: '3',
    name: 'Tel',
  },
])

export const sboxShowDebug = ref(false)
export const sboxAnime = ref(false)
export const toggleSearch = () => {
  sboxShowDebug.value =! sboxShowDebug.value
  sboxAnime.value =! sboxAnime.value
  setTimeout(() => { sboxAnime.value =! sboxAnime.value }, 280);
}