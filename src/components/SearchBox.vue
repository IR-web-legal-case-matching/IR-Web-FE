<template>
  <div class="mt-4" style="width:600px;">
    <el-input
      v-model="inputForm"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #prepend>
        <el-select v-model="selectID" placeholder="Select" style="width: 115px">
          <div v-for="item in selectTable" :key="item.id">
            <el-option :label="item.name" :value="item.id" />
          </div>
        </el-select>
      </template>
      <template #append>
        <el-button 
          :class="{aniPressedFade: sboxAnime}"
          style="padding: 0;width: 50px;color: var(--ep-text-color-secondary)"
          @click="toggleSearch"
        >
          <el-icon><Search/></el-icon>
        </el-button>
      </template>
    </el-input>
  </div>
</template>

<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import { 
  inputForm, 
  sboxAnime, 
  selectID, selectTable,
  toggleSearch 
} from '~/composables'
</script>

<style scoped>
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
</style>