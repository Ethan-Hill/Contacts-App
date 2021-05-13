<template>
  <main
    class="flex items-center justify-center min-h-screen bg-center bg-cover bg-backgroundColor"
  >
    <div
      v-if="contact.name"
      class="max-w-sm p-8 overflow-hidden bg-white rounded-lg shadow-lg"
    >
      <h1 class="text-3xl font-semibold text-gray-800">{{ contact.name }}</h1>
      <div class="flex items-center mt-4 text-gray-700">
        <svg class="w-6 h-6 fill-current" viewBox="0 0 512 512">
          <path
            d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"
          />
        </svg>
        <h1 class="px-2 text-sm">{{ contact.email }}</h1>
      </div>
      <div class="flex items-center my-4 text-gray-700">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.9975 20C10.4659 20.0121 3.99088 13.4595 4.00001 5.00251C4.00001 4.45023 4.44773 4 5.00001 4H7.63937C8.13494 4 8.55593 4.36413 8.6287 4.85433C8.80311 6.0292 9.14517 7.17297 9.64448 8.2507L9.74725 8.4725C9.89013 8.78091 9.79328 9.14734 9.51668 9.34487C8.6993 9.92859 8.38692 11.1036 9.0237 12.0204C9.82278 13.1708 10.8301 14.1779 11.9803 14.9766C12.897 15.6132 14.0718 15.3009 14.6555 14.4836C14.8532 14.2069 15.2198 14.11 15.5284 14.2529L15.7492 14.3552C16.827 14.8545 17.9708 15.1966 19.1458 15.371C19.636 15.4437 20 15.8647 20 16.3603V19C20 19.5523 19.5512 20 18.9989 20L18.9975 20Z"
            fill="#2E3A59"
          ></path>
        </svg>

        <h1 class="px-2 text-sm">{{ contact.phone_number }}</h1>
      </div>
      <Options
        :contact="contact"
        :delete-contact="deleteContact"
        :edit-contact="editContact"
      />
    </div>
  </main>
</template>
<script>
import Options from '../../../components/Items/Options'
export default {
  components: {
    Options,
  },
  async asyncData({ $axios, params }) {
    try {
      const contact = await $axios.$get(`/contacts/${params.id}`)
      return { contact }
    } catch (e) {
      return { contact: [] }
    }
  },

  data() {
    return {
      contact: {
        name: '',
        email: '',
        phone_number: '',
      },
    }
  },
  mounted() {
    if (!this.contact.name) {
      this.$router.push('/contacts')
    }
  },
  methods: {
    async deleteContact(e, contactId) {
      await this.$axios.$delete(`/contacts/${contactId}/`)
      this.$toast.success('Successfully deleted contact')
      this.$router.push('/contacts')
    },
    editContact(e, contactId) {
      this.$router.push(`/contacts/${contactId}/edit`)
    },
  },
}
</script>
<style scoped></style>
