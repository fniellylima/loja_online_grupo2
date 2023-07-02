import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo2 from './logo-footer.png';
import './styles.scss';

export default function Footer() {
  return (
    <div className='div-footer'>
       <footer className="footer">
        <div className='footer-top'>
          <div className='coluna-footer1'>
          <div className='div-logo-footer'>
          <img alt="logo" height={'33px'} src= {logo2}/> 
          <h4> Digital Store</h4>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur <br/>
           adipiscing elit, sed do eiusmod tempor <br/>
            incididunt ut labore et dolore</p>

            <div className='icons'>
              <FacebookIcon/>
              <InstagramIcon/>
              <TwitterIcon/>
            </div>            
        </div>

           

        <div className='coluna-footer'>
          <h4>Informação</h4>
          <p>Sobre a Drip Store</p>
          <p>Segurança</p>
          <p>Wishlist</p>
          <p>Blog</p>
          <p>Trabalhe conosco</p>
          <p>Meus Pedidos</p>
        </div>

        <div className='coluna-footer'>
          <h4>Categorias</h4>
          <p>Camisetas</p>
          <p>Calças</p>
          <p>Bonés</p>
          <p>Headphones</p>
          <p>Tênis</p>
        </div>

        <div className='coluna-footer'>
          <h4>Contato</h4>
          <p>Av. Santos Dumont 1510 - 1 <br /> andar - Aldeota, Fortaleza -<br />CE, 60150-161<br />(85) 3051-3411</p>
        </div>
        </div>

       
        <div className="footer_copyright">
          <p>&copy; 2022 Digital College</p>
        </div>
      </footer>
    </div>
  );
}
