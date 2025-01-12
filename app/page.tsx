export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">SALGUEDA</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="https://www.salgueda.com/" className="hover:underline">Home</a></li>
              <li><a href="https://www.salgueda.com/producto" className="hover:underline">Producto</a></li>
              <li><a href="https://www.salgueda.com/sat" className="hover:underline">Servicio Técnico</a></li>
              <li><a href="https://www.salgueda.com/recambios" className="hover:underline">Pedir Recambios</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">EL ARTE DEL FUEGO</h2>
          <p className="text-lg mb-6">Encuentra la estufa perfecta para tu hogar en nuestra amplia selección de modelos y estilos.</p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.salgueda.com/presupuesto" className="bg-blue-600 text-white px-4 py-2 rounded">Presupuesto Gratuito</a>
            <a href="https://www.salgueda.com/producto" className="bg-green-600 text-white px-4 py-2 rounded">Descubrir</a>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-3xl font-semibold mb-4">Producto</h3>
          <p className="text-lg">Estilo y eficiencia. Industrias Salgueda dispone de estufas eficientes energéticamente y de diseño atractivo para que puedas calentar tu hogar sin sacrificar el estilo. Además de ahorrar en tus facturas de calefacción, nuestras estufas son amigables con el medio ambiente y están diseñadas para ser duraderas y fáciles de usar. Ya sea que prefieras una estufa de leña o de pellet, nuestras opciones de alta calidad seguramente mejorarán la estética de tu hogar mientras mantienen el ambiente cálido y acogedor. Descubre cómo nuestras estufas pueden transformar tu espacio vital.</p>
        </section>

        <section className="mb-12">
          <h3 className="text-3xl font-semibold mb-4">Empresa</h3>
          <p className="text-lg">Desde que Salgueda fabricó sus primeras estufas en 1963, nuestra pasión por la calidad y el diseño ha impulsado la creación de productos que satisfacen las necesidades más exigentes de su época. Esta idea central ha sido perfeccionada y llevada a cabo a lo largo de los años, y se ha fortalecido aún más hoy en día. En la actualidad, nuestros productos, junto con la colaboración y comercialización de otros líderes del sector, hacen de SALGUEDA un referente importante y reconocido en el mundo de la calefacción.</p>
        </section>

        <section className="mb-12">
          <h3 className="text-3xl font-semibold mb-4">Innovación</h3>
          <p className="text-lg">Como fabricante de estufas, dedicamos grandes esfuerzos en avanzar en la investigación de calefacción y en ofrecer las soluciones más eficientes y modernas para satisfacer las necesidades de nuestros clientes. Contamos con un equipo de ingenieros altamente capacitados y experimentados, que trabajan constantemente en la mejora y el desarrollo de nuevas tecnologías para nuestras estufas. Nos mantenemos al día en las últimas tendencias y avances del sector de la calefacción, y estamos siempre en busca de nuevas formas de mejorar la eficiencia energética y la funcionalidad de nuestras estufas. Creemos que la innovación es la clave para ofrecer a nuestros clientes la mejor experiencia posible de calefacción en su hogar. Nos esforzamos por ser líderes en el mercado de la calefacción, y estamos comprometidos en ofrecer a nuestros clientes los mejores productos de calefacción, con los más altos estándares de calidad, seguridad e innovación.</p>
        </section>

        <section className="mb-12">
          <h3 className="text-3xl font-semibold mb-4">Seguridad</h3>
          <p className="text-lg">Tu seguridad es nuestra prioridad. Trabajamos con proveedores y fabricantes comprometidos con los más altos estándares de seguridad y sometemos todas nuestras estufas a pruebas exhaustivas para garantizar su cumplimiento con nuestras normas internas y las regulaciones gubernamentales. Elija Salgueda y disfrute de la tranquilidad que merece.</p>
        </section>

        <section className="text-center">
          <h3 className="text-3xl font-semibold mb-4">Descubre el calor y el diseño de Salgueda</h3>
          <p className="text-lg mb-6">Visítanos hoy mismo y encuentra la estufa perfecta para tu hogar. Descubre cómo podemos hacer que tu espacio vital sea más cálido, hermoso y eficiente energéticamente. ¡No esperes más para disfrutar del calor y el diseño de Salgueda!</p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.salgueda.com/presupuesto" className="bg-blue-600 text-white px-4 py-2 rounded">Presupuesto</a>
            <a href="https://www.salgueda.com/producto" className="bg-green-600 text-white px-4 py-2 rounded">Descubrir</a>
          </div>
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
