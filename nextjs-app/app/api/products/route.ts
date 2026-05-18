import { NextResponse } from 'next/server'
import { MOCK_PRODUCTS } from '@/lib/mock-products'

// GET /api/products - List all published products
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const featured = searchParams.get('featured')

    let products = MOCK_PRODUCTS

    if (category) {
      products = products.filter(p => p.category === category.toUpperCase())
    }

    if (featured === 'true') {
      products = products.filter(p => p.featured)
    }

    return NextResponse.json({ products })
  } catch (error) {
    console.error('Failed to fetch products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}
