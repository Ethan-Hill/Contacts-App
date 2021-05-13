<template>
  <main class="min-h-screen bg-center bg-cover bg-backgroundColor">
    <div
      class="flex flex-col items-center justify-center h-screen leading-loose"
    >
      <h1 class="mb-12 text-4xl font-bold text-white lg:text-6xl">
        Add Contact
      </h1>
      <form
        class="max-w-xl p-10 m-4 bg-white rounded shadow-xl"
        @submit.prevent="submitContact"
      >
        <p class="font-medium text-gray-800">Contact information</p>
        <div>
          <label class="block text-sm text-gray-00" for="name">Name</label>
          <input
            id="name"
            v-model="contact.name"
            class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            name="name"
            type="text"
            required
            placeholder="Your Name"
            aria-label="Name"
          />
        </div>
        <div class="mt-2">
          <label class="block text-sm text-gray-600" for="email">Email</label>
          <input
            id="email"
            v-model="contact.email"
            class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            name="email"
            type="email"
            required
            placeholder="Your Email"
            aria-label="Email"
          />
        </div>
        <div class="mt-2">
          <label class="block text-sm text-gray-600" for="phonenumber"
            >Phone Number</label
          >
          <input
            id="phonenumber"
            v-model="contact.phone_number"
            class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            name="phonenumber"
            type="text"
            required
            placeholder="+440123456789"
            aria-label="Phone Number"
          />
        </div>

        <div class="my-4">
          <button
            class="w-full px-4 py-1 font-light tracking-wider text-white rounded bg-backgroundColor"
            type="submit"
          >
            Submit
          </button>
        </div>
        <div v-if="errors">
          <div
            v-for="fieldError in errors"
            :key="fieldError.index"
            class="p-2 mt-2 bg-red-600"
          >
            <h1
              v-for="error in fieldError"
              :key="error.index"
              class="text-sm font-bold text-center text-white capitalize"
            >
              {{ error }}
            </h1>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      errors: null,
      contact: {
        name: '',
        email: '',
        phone_number: '',
      },
    }
  },
  methods: {
    async submitContact() {
      const config = {
        headers: { 'content-type': 'multipart/form-data' },
      }
      const formData = new FormData()
      for (const data in this.contact) {
        formData.append(data, this.contact[data])
      }

      await this.$axios
        .$post('/contacts/', formData, config)
        .then(() => {
          this.$toast.success('Created contact successfully')
          this.$router.push('/contacts/')
        })
        .catch((err) => {
          this.errors = err.response.data
          this.$toast.error('Error while creating contact')
          return err
        })
    },
  },
}
</script>
