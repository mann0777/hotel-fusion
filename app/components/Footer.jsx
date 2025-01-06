const Footer = () => {
  return (
    <footer className="bg-gray-200 py-6 px-4">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 text-center">
          All rights reserved. &copy; {new Date().getFullYear()}
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Hotel Fusion - Your Home Away From Home
        </p>
      </div>
    </footer>
  )
}

export default Footer
