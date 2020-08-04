import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/45835795?s=400&u=ab7a1991ab8ec1ab31961cdb1a295dcd25ab09a2&v=4" alt="Matheus José" />
                <div>
                    <strong>Matheus José</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur justo tellus, consequat semper vulputate non, maximus et purus.<br />
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Nullam nisi quam, consequat sed tellus et, dictum placerat neque. Quisque ac risus nisi.
            </p>

            <footer>
                <p>Preço/Hora <strong>R$ 20,00</strong></p>
                    <button type="button">
                            <img src={whatsappIcon} alt="Entrar em contato" />
                        Entrar em contato
                    </button>
            </footer>

        </article>
    );
}

export default TeacherItem;