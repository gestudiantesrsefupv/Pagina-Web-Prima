'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mb-12">
      <div className="mx-4 rounded-[2.5rem] bg-white p-4 shadow-2xl">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-24 w-24">
              <Image
                src="/images/footer/pegatina.jpeg"
                alt="Logo Delegación"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm text-black">Delegación Física UPV</span>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/estudiantesrsef_upv/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-black hover:text-pink-600"
            >
              <svg className="text-black" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm5.5-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/company/grupo-de-estudiantes-rsef/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-black hover:text-blue-600"
            >
              <svg className="text-black" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.7v1.65h.05c.52-.99 1.8-2.03 3.7-2.03 3.95 0 4.7 2.6 4.7 5.98V21H17v-5.2c0-1.24-.02-2.84-1.73-2.84-1.74 0-2.01 1.36-2.01 2.76V21H9z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
