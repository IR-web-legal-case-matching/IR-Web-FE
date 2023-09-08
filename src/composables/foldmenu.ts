import { ref } from 'vue'

const window = ref({
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientWidth
})

export const buttonAnime = ref(false)

export const isFold = ref(window.value.width<768?true:false)
export const toggleFold = () => {
  isFold.value =! isFold.value;
  buttonAnime.value =! buttonAnime.value
  setTimeout(() => { buttonAnime.value =! buttonAnime.value }, 300);
}

export const isCollapse = ref(true)
export const toggleCollapse = () => {
  isCollapse.value =! isCollapse.value;
}