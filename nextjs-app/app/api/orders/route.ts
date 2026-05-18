import { NextResponse } from 'next/server'

// Mock order creation (replace with database in production)
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Generate order number
    const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    
    // Calculate totals
    const subtotalCents = body.items.reduce((sum: number, item: any) => {
      // In production, fetch real prices from database
      return sum + (item.quantity * 4800) // Mock price
    }, 0)
    
    const shippingCents = subtotalCents >= 20000 ? 0 : 1200
    const totalCents = subtotalCents + shippingCents
    
    // Mock order object
    const order = {
      orderNumber,
      email: body.email,
      shippingAddress: body.shippingAddress,
      paymentGateway: body.paymentGateway,
      subtotalCents,
      shippingCents,
      totalCents,
      status: 'PENDING',
      paymentStatus: 'PENDING',
      items: body.items,
      createdAt: new Date().toISOString(),
    }
    
    // In production:
    // 1. Save order to database
    // 2. Create payment invoice with selected gateway
    // 3. Send confirmation email
    // 4. Return payment URL
    
    return NextResponse.json({
      order,
      paymentUrl: `/payment/${orderNumber}`, // Mock payment URL
    }, { status: 201 })
  } catch (error) {
    console.error('Failed to create order:', error)
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    )
  }
}
