export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            try {
              const root = document.documentElement;
              root.classList.add('dark');
            } catch (e) {}
          })();
        `,
      }}
    />
  )
}

