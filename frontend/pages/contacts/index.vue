<template>
  <main
    class="flex flex-col items-center justify-center min-h-screen py-16 bg-backgroundColor"
  >
    <h1 class="mb-12 text-6xl font-bold text-white">Contacts</h1>
    <template v-for="(contact, index) in contacts">
      <div :key="contact.id" class="w-3/4 my-6 lg:w-1/2">
        <ContactCard
          :on-delete="deleteContact"
          :on-edit="editContact"
          :contact="contact"
          :index="index"
          :on-redirect="redirectUser"
        ></ContactCard>
      </div>
    </template>
    <div
      class="fixed p-3 transition-all transform bg-white border rounded-full cursor-pointer border-backgroundColor bottom-5 right-1 md:right-5 hover:scale-105"
      @click="addContactRedirect"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13 13V19H11V13H5V11H11V5H13V11H19V13H13Z" fill="#000"></path>
      </svg>
    </div>
  </main>
</template>
<script>
import ContactCard from '~/components/ContactCard.vue'

export default {
  components: {
    ContactCard,
  },
  async asyncData({ $axios }) {
    try {
      const contacts = await $axios.$get(`/contacts/`)
      return { contacts }
    } catch (e) {
      return { contacts: [] }
    }
  },
  data() {
    return {
      contacts: [],
    }
  },
  methods: {
    async deleteContact(e, contactId) {
      e.stopPropagation()
      await this.$axios.$delete(`/contacts/${contactId}/`)
      const newContacts = await this.$axios.$get('/contacts/')
      this.contacts = newContacts
    },
    editContact(e, contactId) {
      e.stopPropagation()
      this.$router.push(`/contacts/${contactId}/edit`)
    },
    redirectUser(contactId) {
      this.$router.push(`/contacts/${contactId}`)
    },
    addContactRedirect() {
      this.$router.push(`/contacts/add`)
    },
  },
}
</script>
