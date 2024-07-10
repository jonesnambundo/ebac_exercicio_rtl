import { fireEvent, render, screen } from '@testing-library/react';
//import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comment')).toBeInTheDocument();
    });

    test('Deve adicionar um segundo comentario', () => {
        render(<PostComment />);

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Testar o primeiro comentário'
            }
        });
        fireEvent.click(screen.getByTestId('add-comment-button'));

        fireEvent.change(screen.getByTestId('comment-textarea'), {
            target: {
                value: 'Testar o segundo comentário'
            }
        });
        fireEvent.click(screen.getByTestId('add-comment-button'));

        expect(screen.getAllByTestId('comment')).toHaveLength(2);
    })
});