// Her bir butonun üzerine, içerikte yazan eyleme karşılık gelen satır içi/inline stiller ekleyin
export default function ButtonVariants() {
  return (
    <>
    <span className='wrapper flex items-center justify-center mt-10 p-[20px]'>
      <button className='button-create p-5 m-[10px] rounded-[10px] bg-[green] text-white'>Create</button>
      <button className='button-update p-5 m-[10px] rounded-[10px] bg-[orange] text-white '>Update</button>
      <button className='button-delete p-5 m-[10px] rounded-[10px] bg-[red] text-white '>Delete</button>
    </span>
    <span className="wrapper1 flex items-center justify-center">
      <button className="button-tailwind  p-[20px] rounded-[10px] bg-[blue] text-white " >Testing TailWind</button>
    </span>
    </>
  )
}
