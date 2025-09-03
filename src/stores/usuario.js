import { ref } from 'vue';
import { defineStore } from 'pinia';
import UsuarioAPI from '@/api/usuario';

const usuarioAPI = new UsuarioAPI();

export const useUsuarioStore = defineStore('usuario', () => {
  const usuarios = ref([]);

  async function getUsuarios() {
    const data = await usuarioAPI.getUsuariosAll();
    usuarios.value = data;
  }

  async function addUsuario(usuario) {
    const novoUsuario = await usuarioAPI.addUsuario(usuario);
    usuarios.value.push(novoUsuario);
  }

  async function updateUsuario(usuarioParaAtualizar) {
    const usuarioAtualizado = await usuarioAPI.updateUsuario(usuarioParaAtualizar);
    const index = usuarios.value.findIndex(u => u.id_usuario === usuarioAtualizado.id_usuario);
    if (index !== -1) {
      usuarios.value[index] = usuarioAtualizado;
    }
  }

  async function deleteUsuario(id_usuario) {
    await usuarioAPI.deleteUsuario(id_usuario);
    usuarios.value = usuarios.value.filter(u => u.id_usuario !== id_usuario);
  }

  async function login(email, password) {
    const tokens = await usuarioAPI.login(email, password);
    localStorage.setItem("access_token", tokens.access);
    localStorage.setItem("refresh_token", tokens.refresh);
    return tokens;
  }

  return { usuarios, getUsuarios, addUsuario, updateUsuario, deleteUsuario, login };
});
