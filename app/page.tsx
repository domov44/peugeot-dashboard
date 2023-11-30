

export default function Home() {
  return (
    <main className="">
      <img src={process.env.NEXT_PUBLIC_API_DOMAIN + image.data.attributes.url} alt={image.data.attributes.name} />
    </main>
  )
}
