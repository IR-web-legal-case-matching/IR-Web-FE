import axios from 'axios'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { 
    Search, 
    Delete ,
} from '@element-plus/icons-vue'
import { 
    sboxAnime,
    toggleSearch as toggleSearchAnime,
} from '~/composables'

export const modelInput = ref('')
export const modelOutput = ref('')
export const modelStatus = ref('waiting') // waiting, loading, finished
export const clearInputVar = ref(false)

export const modelSubmit = () => {
    toggleSearchAnime()
    if(modelInput.value == ''){
        ElMessage.warning("You have to write something.")
        return
    }
    modelStatus.value = 'loading'
    axios.post('/api/model_output', {'query': modelInput.value})
    .then((res) => {
        modelOutput.value = res.data['result']
        modelStatus.value = 'finished'
        // ElMessage(modelOutput.value)
        // console.log(modelOutput.value)
    })
    .catch((res) =>{
        ElMessage.error(res)
        modelStatus.value = 'waiting'
    })
    // if(modelInput.value != '') ElMessage(modelInput.value)
}
export const clearInput = () => {
    clearInputVar.value =! clearInputVar.value
    setTimeout(() => { clearInputVar.value =! clearInputVar.value }, 800);  
    modelInput.value = ''
}