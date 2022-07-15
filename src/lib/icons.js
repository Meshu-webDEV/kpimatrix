const ICONS = {
  CHEVRON_RIGHT: ({ className }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    );
  },
  CHECK: ({ className }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    );
  },
  X: ({ className }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    );
  },
  MINUS: ({ className }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z"
          clipRule="evenodd"
        />
      </svg>
    );
  },
  INFO: ({ className }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        />
      </svg>
    );
  },
  SING_OUT: ({ className }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
          clipRule="evenodd"
        />
      </svg>
    );
  },
  BURGER_MENU: ({ className }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    );
  },
  PENCIL: ({ className }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
      </svg>
    );
  },
  PLUS: ({ className }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
    );
  },
  SUN: ({ className }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    );
  },
  MOON: ({ className }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    );
  },
  TRIANGLE: ({ className }) => {
    return (
      <svg
        className={className}
        viewBox="0 0 10 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.58793 7.7845C4.6338 7.85112 4.69518 7.90559 4.76678 7.94322C4.83837 7.98085 4.91805 8.00052 4.99893 8.00052C5.07982 8.00052 5.15949 7.98085 5.23109 7.94322C5.30268 7.90559 5.36406 7.85112 5.40993 7.7845L9.90993 1.2845C9.96202 1.20953 9.99257 1.12172 9.99825 1.0306C10.0039 0.93949 9.98454 0.848562 9.94217 0.767697C9.89981 0.686832 9.83609 0.619124 9.75795 0.571929C9.67981 0.524734 9.59022 0.499857 9.49893 0.500001H0.498931C0.407853 0.500377 0.3186 0.525574 0.240771 0.572882C0.162942 0.62019 0.0994822 0.68782 0.0572151 0.768497C0.0149481 0.849175 -0.00452658 0.939848 0.000885399 1.03077C0.00629738 1.12168 0.0363913 1.20941 0.0879307 1.2845L4.58793 7.7845Z"
          fill="currentColor"
        />
      </svg>
    );
  },
  LOGO: ({ className }) => {
    return (
      <svg
        className={className}
        viewBox="0 0 45 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="45" height="25.9524" fill="url(#desktop-logo-pattern)" />
        <defs>
          <pattern
            id="desktop-logo-pattern"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_8_6600"
              transform="scale(0.00529101 0.00917431)"
            />
          </pattern>
          <image
            id="image0_8_6600"
            width="189"
            height="109"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    );
  },
  DESKTOP_LOGO: ({ className }) => {
    return (
      <svg
        className={className}
        viewBox="0 0 45 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="45" height="25.9524" fill="url(#desktop-logo-pattern)" />
        <defs>
          <pattern
            id="desktop-logo-pattern"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#desktop-logo-image"
              transform="scale(0.00529101 0.00917431)"
            />
          </pattern>
          <image
            id="desktop-logo-image"
            width="189"
            height="109"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    );
  },
  MATRIX_BURGER: ({ className }) => {
    return (
      <svg
        className={className}
        viewBox="0 0 31 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.74976 0.875H13.3748C13.9383 0.875 14.4788 1.09888 14.8774 1.4974C15.2759 1.89591 15.4998 2.43641 15.4998 3C15.4998 3.56359 15.2759 4.10409 14.8774 4.5026C14.4788 4.90112 13.9383 5.125 13.3748 5.125H2.74976C2.18617 5.125 1.64567 4.90112 1.24715 4.5026C0.84864 4.10409 0.624756 3.56359 0.624756 3C0.624756 2.43641 0.84864 1.89591 1.24715 1.4974C1.64567 1.09888 2.18617 0.875 2.74976 0.875ZM17.6248 17.875H28.2498C28.8133 17.875 29.3538 18.0989 29.7524 18.4974C30.1509 18.8959 30.3748 19.4364 30.3748 20C30.3748 20.5636 30.1509 21.1041 29.7524 21.5026C29.3538 21.9011 28.8133 22.125 28.2498 22.125H17.6248C17.0612 22.125 16.5207 21.9011 16.1222 21.5026C15.7236 21.1041 15.4998 20.5636 15.4998 20C15.4998 19.4364 15.7236 18.8959 16.1222 18.4974C16.5207 18.0989 17.0612 17.875 17.6248 17.875ZM2.74976 9.375H28.2498C28.8133 9.375 29.3538 9.59888 29.7524 9.9974C30.1509 10.3959 30.3748 10.9364 30.3748 11.5C30.3748 12.0636 30.1509 12.6041 29.7524 13.0026C29.3538 13.4011 28.8133 13.625 28.2498 13.625H2.74976C2.18617 13.625 1.64567 13.4011 1.24715 13.0026C0.84864 12.6041 0.624756 12.0636 0.624756 11.5C0.624756 10.9364 0.84864 10.3959 1.24715 9.9974C1.64567 9.59888 2.18617 9.375 2.74976 9.375Z"
          fill="currentColor"
        />
      </svg>
    );
  },
};

const ICON_NAMES = {
  CHEVRON_RIGHT: "CHEVRON_RIGHT",
  SING_OUT: "SING_OUT",
  CHECK: "CHECK",
  X: "X",
  MINUS: "MINUS",
  INFO: "INFO",
  BURGER_MENU: "BURGER_MENU",
  MATRIX_BURGER: "MATRIX_BURGER",
  PENCIL: "PENCIL",
  PLUS: "PLUS",
  LOGO: "LOGO",
  SUN: "SUN",
  TRIANGLE: "TRIANGLE",
  MOON: "MOON",
  DESKTOP_LOGO: "DESKTOP_LOGO",
};

const Icon = ({ ICON_NAME, className }) => {
  switch (ICON_NAME) {
    case ICON_NAMES.CHEVRON_RIGHT:
      return <ICONS.CHEVRON_RIGHT className={className} />;
    case ICON_NAMES.CHECK:
      return <ICONS.CHECK className={className} />;
    case ICON_NAMES.X:
      return <ICONS.X className={className} />;
    case ICON_NAMES.MINUS:
      return <ICONS.MINUS className={className} />;
    case ICON_NAMES.INFO:
      return <ICONS.INFO className={className} />;
    case ICON_NAMES.SING_OUT:
      return <ICONS.SING_OUT className={className} />;
    case ICON_NAMES.BURGER_MENU:
      return <ICONS.BURGER_MENU className={className} />;
    case ICON_NAMES.PENCIL:
      return <ICONS.PENCIL className={className} />;
    case ICON_NAMES.PLUS:
      return <ICONS.PLUS className={className} />;
    case ICON_NAMES.LOGO:
      return <ICONS.LOGO className={className} />;
    case ICON_NAMES.TRIANGLE:
      return <ICONS.TRIANGLE className={className} />;
    case ICON_NAMES.DESKTOP_LOGO:
      return <ICONS.DESKTOP_LOGO className={className} />;
    case ICON_NAMES.SUN:
      return <ICONS.SUN className={className} />;
    case ICON_NAMES.MOON:
      return <ICONS.MOON className={className} />;
    case ICON_NAMES.MATRIX_BURGER:
      return <ICONS.MATRIX_BURGER className={className} />;
    default:
      break;
  }
};

export { ICON_NAMES, Icon };
