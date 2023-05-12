
function App() {
  return (
    <>
      <div className="flex justify-center items-center w-full min-h-screen bg-indigo-100">
        <div className="flex flex-col items-center justify-center bg-white w-2/3 sm:w-1/3 lg:w-1/5 p-4 rounded-2xl shadow-lg">
          <img
            src='/image-qr-code.png'
            alt='qr code image'
            className='rounded-xl'
          />
          <div className='flex break-words flex-col gap-3 pt-4 pb-5 text-center'>
            <p className='text-xl font-bold'>Improve your front-end skills by building projects</p>
            <p className='text-sm font-normal text-zinc-400'>Scan the QR code to visit Frontend Mentor and take yout coding skills to the next level</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
