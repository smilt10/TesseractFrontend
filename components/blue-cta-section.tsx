import Link from "next/link"
import { Button } from "@/components/ui/button"

interface BlueCTASectionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export default function BlueCTASection({ title, description, buttonText, buttonLink }: BlueCTASectionProps) {
  return (
    <section className="bg-blue-500 dark:bg-blue-700 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4 gradient-text">{title}</h2>
        <p className="text-blue-100 max-w-2xl mx-auto mb-8 dark:text-gray-300">{description}</p>
        <Link href={buttonLink}>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-md dark:bg-gray-200 dark:hover:bg-white">
            {buttonText}
          </Button>
        </Link>
      </div>
    </section>
  )
}
