'use client'

import MainHeader from '@/components/layouts/mainHeader'
import PageForm from '../../components/createProfile/PageForm'

const CreateProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-sm p-6 max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Create a Page</h1>
          <PageForm />
        </div>
      </main>
    </div>
  )
}

export default CreateProfile
