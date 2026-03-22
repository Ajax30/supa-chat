<template>
  <FormCard title="Register">
    <form @submit.prevent="submit">
      <!-- First Name -->
      <div class="form-field">
        <label class="d-block">First Name</label>
        <input
          class="d-block w-100"
          type="text"
          placeholder="Ex. John"
          v-model="form.firstName"
          @blur="touched.firstName = true; validateField('firstName')"
        />
        <span class="error" v-if="touched.firstName && errors.firstName">{{ errors.firstName }}</span>
      </div>

      <!-- Last Name -->
      <div class="form-field">
        <label class="d-block">Last Name</label>
        <input
          class="d-block w-100"
          type="text"
          placeholder="Ex. Smith"
          v-model="form.lastName"
          @blur="touched.lastName = true; validateField('lastName')"
        />
        <span class="error" v-if="touched.lastName && errors.lastName">{{ errors.lastName }}</span>
      </div>

      <!-- Email -->
      <div class="form-field">
        <label class="d-block">Email</label>
        <input
          class="d-block w-100"
          type="email"
          placeholder="yourname@example.com"
          v-model="form.email"
          @blur="touched.email = true; validateField('email')"
        />
        <span class="error" v-if="touched.email && errors.email">{{ errors.email }}</span>
      </div>

      <!-- Photo (optional) -->
      <div class="form-field">
        <label class="d-block">Photo</label>
        <input
          class="d-block w-100"
          type="file"
          accept="image/*"
          @change="handleFile"
        />
        <span class="error" v-if="photoError">{{ photoError }}</span>
      </div>

      <!-- Password -->
      <div class="form-field">
        <label class="d-block">Password</label>
        <input
          class="d-block w-100"
          type="password"
          placeholder="Your Password"
          v-model="form.password"
          @blur="touched.password = true; validateField('password')"
        />
        <span class="error" v-if="touched.password && errors.password">{{ errors.password }}</span>
      </div>

      <!-- Repeat Password -->
      <div class="form-field">
        <label class="d-block">Repeat Password</label>
        <input
          class="d-block w-100"
          type="password"
          placeholder="Your Password Again"
          v-model="form.passwordRepeat"
          @blur="touched.passwordRepeat = true; validateField('passwordRepeat')"
        />
        <span class="error" v-if="touched.passwordRepeat && errors.passwordRepeat">{{ errors.passwordRepeat }}</span>
      </div>

      <button type="submit" class="w-100">Register</button>
    </form>
  </FormCard>
</template>

<script setup>
import FormCard from "@/components/Auth/FormCard.vue"
import * as yup from "yup"
import { reactive, ref, watch } from "vue"

// Reactive form data
const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  passwordRepeat: ""
})

// Angular-style touched tracking
const touched = reactive({
  firstName: false,
  lastName: false,
  email: false,
  password: false,
  passwordRepeat: false
})

// Reactive errors
const errors = reactive({
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  passwordRepeat: null
})

// Photo optional
const photo = ref(null)
const photoError = ref("")
function handleFile(e) {
  const file = e.target.files[0]
  if (file && !file.type.startsWith("image/")) {
    photoError.value = "Only images allowed"
    photo.value = null
  } else {
    photoError.value = ""
    photo.value = file
  }
}

// Yup validation schema
const schema = yup.object({
  firstName: yup.string().required("First name required"),
  lastName: yup.string().required("Last name required"),
  email: yup.string().email("Invalid email").required("Email required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required(),
  passwordRepeat: yup.string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Repeat password required")
})

// Validate single field live
function validateField(fieldName) {
  schema.validateAt(fieldName, form)
    .then(() => errors[fieldName] = null)
    .catch(err => errors[fieldName] = err.message)
}

// Watch all fields for **live validation after touched**
watch(form.firstName, () => touched.firstName && validateField("firstName"))
watch(form.lastName, () => touched.lastName && validateField("lastName"))
watch(form.email, () => touched.email && validateField("email"))
watch(form.password, () => touched.password && validateField("password"))
watch(form.passwordRepeat, () => touched.passwordRepeat && validateField("passwordRepeat"))

// Full form validation
async function validateForm() {
  try {
    await schema.validate(form, { abortEarly: false })
    Object.keys(errors).forEach(k => errors[k] = null)
    return true
  } catch (err) {
    err.inner.forEach(e => errors[e.path] = e.message)
    return false
  }
}

// Submit
async function submit() {
  const valid = await validateForm()
  if (!valid) return
  console.log("Form submitted:", { ...form, photo: photo.value })
}
</script>

<style scoped>
.form-field {
  position: relative;
  margin-bottom: 0;
}

.error {
  color: #dc3545;
  font-size: 0.85rem;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>