<template>
  <el-row class="row-bg" justify="center" style="padding-top: 50px;">
    <el-card
      justify="center"
      shadow="always"
      style="max-width: 480px">

      <template #header>
        <div>
          <span><h3>Войти в систему</h3></span>
        </div>
      </template>

      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        status-icon>

        <el-form-item label="Логин" prop="login">
          <el-input v-model="ruleForm.login" />
        </el-form-item>

        <div>

          <el-form-item v-if="visible2" label="Пароль" prop="password">
            <el-input type="password" v-model.trim="ruleForm.password">
              <i slot="suffix" title="Показать пароль" @click="changePass('show',2)" style="cursor:pointer;"
                 class="el-icon-view"></i>
            </el-input>
          </el-form-item>

          <el-form-item v-else label="Пароль" prop="password">
            <el-input type="text" v-model.trim="ruleForm.password">
              <i slot="suffix" title="Скрыть пароль" @click="changePass('hide',2)" style="cursor:pointer;"
                 class="el-icon-unlock"></i>
            </el-input>
          </el-form-item>
        </div>
        <el-form-item style="padding-top: 20px;">
          <el-button style="width: 100%"
                     type="primary"
                     @click="submitForm(ruleFormRef)"
                     :loading="loading"
                     round>
            Войти
          </el-button>
        </el-form-item>
      </el-form>

</el-card>
</el-row>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useAuthStore } from '~/store/auth'
import { type ComponentSize, ElMessage, type FormInstance, type FormRules } from 'element-plus'

const auth = useAuthStore()
const route = useRoute()

definePageMeta({
  layout: false,
  title: 'Вход',
  middleware: ['login-auth']
})

interface RuleForm {
  login: string
  password: string
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  login: '',
  password: ''
})

const rules = reactive<FormRules<RuleForm>>({
  login: [
    { required: true, message: 'Введите логин', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Введите пароль', trigger: 'blur' },
    { min: 6, message: 'Пароль должен быть не менее 6 символов', trigger: 'blur' }
  ]
})

let loading = ref(false)
let visible2 = ref(true)

const showMessage = (message: string) => {
  ElMessage(message)
}

const changePass = (value: string) => {
  visible2 = !(value === 'show')
}

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {

      try {
        const formData = {
          username: ruleForm.login,
          password: ruleForm.password
        }

        const it = await auth.login(formData)

        if (!!it) {
          const type = auth.type

          if (type === 3) navigateTo('/courier')
          else navigateTo('/main')
        }
      } catch (e) {
        console.log(e)
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}

</script>
