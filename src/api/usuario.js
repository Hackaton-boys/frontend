import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/usuarios/';

export default class UsuarioAPI {
  // Buscar todos os usuários
  async getUsuariosAll() {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar usuários:', error.response ? error.response.data : error.message);
      throw error;
    }
  }

  // Adicionar novo usuário
  async addUsuario(usuario) {
    try {
      // Garantir que todos os campos obrigatórios estão presentes
      const payload = {
        nome: usuario.nome || '',
        email: usuario.email || '',
        telefone: usuario.telefone || '',
        password: usuario.password || ''
      };

      if (!payload.nome || !payload.email || !payload.password) {
        throw new Error('Nome, email e senha são obrigatórios.');
      }

      const response = await axios.post(API_BASE_URL, payload);
      return response.data;
    } catch (error) {
      console.error('Erro ao adicionar usuário:', error.response ? error.response.data : error.message);
      throw error;
    }
  }

  // Atualizar usuário existente
  async updateUsuario(usuario) {
    try {
      if (!usuario.id_usuario) throw new Error('ID do usuário é necessário para atualizar.');

      const url = `${API_BASE_URL}${usuario.id_usuario}/`;

      // Preparar payload sem o id
      const payload = {
        nome: usuario.nome || '',
        email: usuario.email || '',
        telefone: usuario.telefone || '',
      };

      // Incluir password somente se for enviado
      if (usuario.password) payload.password = usuario.password;

      const response = await axios.put(url, payload);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error.response ? error.response.data : error.message);
      throw error;
    }
  }

  // Deletar usuário
  async deleteUsuario(id_usuario) {
    try {
      if (!id_usuario) throw new Error('ID do usuário é necessário para deletar.');
      const url = `${API_BASE_URL}${id_usuario}/`;
      const response = await axios.delete(url);
      return response.data;
    } catch (error) {
      console.error('Erro ao deletar usuário:', error.response ? error.response.data : error.message);
      throw error;
    }
  }
  // Login do usuário
async login(email, password) {
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/token/", {
      email,
      password,
    });
    return response.data; // retorna { access, refresh }
  } catch (error) {
    console.error("Erro ao fazer login:", error.response ? error.response.data : error.message);
    throw error;
  }
}
}

