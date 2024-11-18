<template>
  <el-form
    @submit.native.prevent="onSubmit"
    :model="controls"
    :rules="rules"
    ref="form">

    <h1 class="mb">Создать новый пост</h1>

    <el-form-item label="Введите название поста" prop="title">
      <el-input v-model="controls.title" />
    </el-form-item>

    <el-form-item label="Текст в формате .md или .html" prop="text">
      <el-input type="textarea" resize="none" :rows="10" v-model="controls.text" />
    </el-form-item>

    <el-dialog
      title="Предпросмотр" :visible.sync="previewDialog">
      <div :key="controls.text">
        <vue-markdown>{{ controls.text }}</vue-markdown>
      </div>
    </el-dialog>

    <el-upload
      class="mb"
      drag
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-change="handleImageChange"
      :auto-upload="false"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">Перетащите картинку <em> или нажмите</em></div>
      <div class="el-upload__tip" slot="tip">Файлы с расширением jpg/png</div>
    </el-upload>

    <el-button class="mb" type="success" plain @click="previewDialog = true">
      Предпросмотр
    </el-button>

    <el-form-item>
      <el-button
        type="primary"
        native-type="submit"
        :loading="loading"
        round>
        Обновить
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  layout: "admin",
  middleware: ["admin-auth"],
  data() {
    return {
      image: null,
      loading: false,
      previewDialog: false,
      controls: {
        title: "",
        text: ""
      },
      rules: {
        title: [
          { required: true, message: "Название не может быть пустым", trigger: "blur" }
        ],
        text: [
          { required: true, message: "Текст не должен быть пустым", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleImageChange(file, fileList) {
      this.image = file.raw;
    },
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid && this.image) {
          this.loading = true;

          const formData = {
            title: this.controls.title,
            text: this.controls.text,
            image: this.image
          };

          try {
            await this.$store.dispatch("post/create", formData);
            this.controls.title = "";
            this.controls.text = "";
            this.image = null;
            this.$refs.upload.clearFiles();
            this.$message.success("Пост был успешно создан");
            this.loading = false;
          } catch (e) {
            this.loading = false;
          }
        } else {
          this.$message.warning("Форма не валидна");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  width: 600px;
}
</style>
