import { createApp } from 'vue'

import App from './App.vue'
import FriendContact from './components/FriendContact.vue'
import NewFriend from './components/NewFriend.vue'
import TestComponent from './components/TestComponent.vue'
import TestChildComponent from './components/TestChildComponent.vue'

const app = createApp(App)

app.component('friend-contact', FriendContact)
app.component('new-friend', NewFriend)
app.component('test-component', TestComponent)
app.component('test-child-component', TestChildComponent)

app.mount('#app')
