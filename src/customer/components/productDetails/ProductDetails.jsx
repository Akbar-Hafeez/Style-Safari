import React from 'react'
import Reviews from './Reviews'

export default function ProductDetails() {
  return (
    <div class="font-[sans-serif] bg-gray-700 mt-[4rem]">
      <div class="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
        <div class="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
          <div class="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div class="bg-gray-800 px-4 py-10 rounded-xl">
              <img src="https://readymadeui.com/images/coffee2.webp" alt="Product" class="w-4/5 rounded object-cover" />
            </div>
            <div class="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-6 mx-auto">
              <div class="bg-gray-800 rounded-xl p-4">
                <img src="https://readymadeui.com/images/coffee3.webp" alt="Product2" class="w-24 cursor-pointer" />
              </div>
              <div class="bg-gray-800 rounded-xl p-4">
                <img src="https://readymadeui.com/images/coffee4.webp" alt="Product2" class="w-24 cursor-pointer" />
              </div>
              <div class="bg-gray-800 rounded-xl p-4">
                <img src="https://readymadeui.com/images/coffee5.webp" alt="Product2" class="w-24 cursor-pointer" />
              </div>
            </div>
          </div>
          <div class="lg:col-span-2">
            <h2 class="text-2xl font-extrabold text-yellow-300">Espresso Elegante | Coffee</h2>
            <div class="flex flex-wrap gap-4 mt-4">
              <p class="text-yellow-300 text-4xl font-bold">$12</p>
              <p class="text-gray-400 text-xl"><strike>$16</strike> <span class="text-sm ml-1">Tax included</span></p>
            </div>
            <div class="flex space-x-2 mt-4">
              <svg class="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-5 fill-yellow-300" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <h4 class="text-white text-base">500 Reviews</h4>
            </div>
            <div class="flex flex-wrap gap-4 mt-8">
              <button type="button" class="min-w-[200px] px-4 py-3 bg-yellow-300 hover:bg-yellow-400 text-black text-sm font-bold rounded">Buy now</button>
              <button type="button" class="min-w-[200px] px-4 py-2.5 border border-yellow-300 bg-transparent text-yellow-300 text-sm font-bold rounded">Add to cart</button>
            </div>
            <div class="mt-8">
              <h3 class="text-lg font-bold text-yellow-300">About the coffee</h3>
              <ul class="space-y-3 list-disc mt-4 pl-4 text-sm text-white">
                <li>A cup of coffee is a beverage essential because of its timeless appeal</li>
                <li>Easy to prepare. It can be brewed using various methods, from drip machines to manual pour-overs.</li>
                <li>Available in various sizes, from a standard espresso shot to a large Americano, catering to different preferences.</li>
                <li>You can customize your coffee by adding cream, sugar, or flavorings to suit your taste preferences.</li>
              </ul>
            </div>
            <div className="reviews">
                <Reviews/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
