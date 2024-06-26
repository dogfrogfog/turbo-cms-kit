// ./components/Post.tsx

import Image from "next/image"
import { dataset, projectId } from "@/sanity/env"
import { PortableText } from "@portabletext/react"
import imageUrlBuilder from "@sanity/image-url"
import type { SanityDocument } from "next-sanity"

import { HeroSection } from "@shared/ui"

const builder = imageUrlBuilder({ projectId, dataset })

export default function Post({ post }: { post: SanityDocument }) {
  console.log("post2222")
  console.log(post)
  const { title, mainImage, body } = post

  return (
    <main className="container prose prose-lg mx-auto p-4">
      {title ? <h1>{title}</h1> : null}
      {mainImage ? (
        <Image
          className="float-left m-0 mr-4 w-1/3 rounded-lg"
          src={builder
            .image(mainImage)
            .width(300)
            .height(300)
            .quality(80)
            .url()}
          width={300}
          height={300}
          alt={mainImage.alt || ""}
        />
      ) : null}
      {body ? <PortableText value={body} /> : null}

      <h3 className="text-3xl font-bold">shared package component 👇</h3>
      <HeroSection title="hello from sanity" />
    </main>
  )
}
