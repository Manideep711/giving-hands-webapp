
export function Stats() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Making a difference together
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Our platform connects donors with those in need, creating a community of giving
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col bg-giving-50 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">Donations Made</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-giving-600">8,000+</dd>
            </div>
            <div className="flex flex-col bg-caring-50 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">People Helped</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-caring-600">3,500+</dd>
            </div>
            <div className="flex flex-col bg-giving-50 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">Volunteer Agents</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-giving-600">200+</dd>
            </div>
            <div className="flex flex-col bg-caring-50 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">Communities Served</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-caring-600">50+</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
