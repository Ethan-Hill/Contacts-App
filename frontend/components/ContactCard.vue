<template>
  <div
    class="w-full transition duration-200 transform outline-none cursor-pointer hover:scale-105"
    @click="onRedirect(contact.id)"
  >
    <div class="w-full p-4 bg-white border border-gray-100 rounded-lg">
      <div class="flex flex-col items-center md:flex-row">
        <div class="flex flex-col flex-1 w-full">
          <div class="text-xs text-gray-500 uppercase">
            Contact {{ index + 1 }}
          </div>
          <div class="flex items-center">
            <svg
              class="hidden mx-6 text-gray-500 stroke-current lg:block"
              fill="none"
              height="24"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewbox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <div>
              <div class="text-xl font-bold">{{ contact.name }}</div>
              <div class="font-semibold">{{ contact.phone_number }}</div>
            </div>
          </div>
        </div>
        <Options
          :contact="contact"
          :delete-contact="onDelete"
          :edit-contact="onEdit"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Options from './Items/Options'
export default {
  components: {
    Options,
  },
  props: ['contact', 'onDelete', 'onEdit', 'onRedirect', 'index'],
}
</script>
