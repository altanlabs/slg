import Link from 'next/link';

export default function ServicioTecnico() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">SALGUEDA</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/producto" className="hover:underline">Producto</Link></li>
              <li><Link href="/sat" className="hover:underline">Servicio Técnico</Link></li>
              <li><Link href="/recambios" className="hover:underline">Pedir Recambios</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Servicio Técnico</h2>
          <p className="text-lg mb-6">Ofrecemos soporte técnico especializado para garantizar el óptimo funcionamiento de nuestras estufas.</p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>Pol. Ind. Els Pintos, Picasso 1017500 Ripoll, Girona (España) | +34 972 700 597</p>
          <p>SALGUEDA S.A. - <a href="https://www.facebook.com/salgueda" className="hover:underline">Facebook</a> | <a href="https://twitter.com/SALGUEDA?t=yU-YNV19aWHGep-_vJDyCA&s=08" className="hover:underline">Twitter</a> | <a href="https://www.youtube.com/@jsalgueda8174" className="hover:underline">YouTube</a> | <a href="https://instagram.com/i_salgueda?igshid=ZDdkNTZiNTM=" className="hover:underline">Instagram</a></p>
          <p>© 2023 by <a href="https://www.altan.ai/" className="hover:underline">Altan</a></p>
        </div>
      </footer>
    </div>
  );
}
