
export function HowItWorks() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-caring-600">Simple Process</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How Giving Hands Works
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our platform connects donors, agents, and recipients in a seamless flow of generosity
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-giving-600 text-white">
                  1
                </div>
                Donors share items they no longer need
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Create an account as a donor and list items you'd like to donate. Include photos, descriptions, and pickup locations.
                </p>
                <p className="mt-6">
                  <a href="/register" className="text-sm font-semibold leading-6 text-giving-600">
                    Become a donor <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-caring-600 text-white">
                  2
                </div>
                Recipients find items they need
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Browse available donations by category, request items that meet your needs, and coordinate pickup through our platform.
                </p>
                <p className="mt-6">
                  <a href="/donations" className="text-sm font-semibold leading-6 text-caring-600">
                    Find donations <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-giving-600 text-white">
                  3
                </div>
                Agents facilitate the process
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Volunteer agents help coordinate pickups, deliveries, and ensure the donation process goes smoothly for everyone involved.
                </p>
                <p className="mt-6">
                  <a href="/register" className="text-sm font-semibold leading-6 text-giving-600">
                    Volunteer as an agent <span aria-hidden="true">→</span>
                  </a>
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
