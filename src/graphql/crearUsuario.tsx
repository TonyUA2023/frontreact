import { gql } from '@apollo/client';

const CREAR_USUARIO_MUTATION = gql`
  mutation crearUsuario($input: UsuarioInput){
    crearUsuario(input:$input)
  }
`;

export default CREAR_USUARIO_MUTATION;
