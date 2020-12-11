import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle
`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s linear;
  }

  h2.title {
    color: ${({ theme }) => theme.text};
  }

  .email-nav-link .lightbulb a {
    color: ${({ theme }) => theme.text};
  }

  .email-nav-link:before {
    background-color: ${({ theme }) => theme.text};
  }

  .social-nav-links i {
    color: ${({ theme }) => theme.text};
  }

  .social-nav-links ul:after {
    background-color: ${({ theme }) => theme.text};
  }

  .navbar li a {
    color: ${({ theme }) => theme.text};
  }

  .btn-outline-success:hover {
    color: ${({ theme }) => theme.body};
  }

  .header {
    color: ${({ theme }) => theme.text};
  }

  .card-body {
    background-color: ${({ theme }) => theme.body};
  }

  .card:hover {
    border: ${({ theme }) => theme.border};
  }

  .card {
    background-color: ${({ theme }) => theme.body};
  }

  .about_me {
    border: ${({ theme }) => theme.border};
  }

  `
