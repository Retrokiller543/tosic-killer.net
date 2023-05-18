import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com/retrokiller543">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/your-linkedin-username">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </footer>
  );
}