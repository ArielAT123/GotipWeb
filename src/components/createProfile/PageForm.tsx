import { useState } from 'react'
import SectionTitle from './SectionTitle'
import SocialLinks from './SocialLinks'

const PageForm = () => {
  const [formData, setFormData] = useState({
    pageName: '',
    displayName: '',
    email: '',
    category: '',
    website: '',
    phone: '',
    about: '',
    facebook: '',
    twitter: '',
    instagram: '',
    pinterest: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitting:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="col-span-full">
        <label className="block text-sm font-medium mb-1">Page name</label>
        <input
          name="pageName"
          type="text"
          required
          className="w-full border rounded-lg px-4 py-2 bg-gray-50"
          placeholder="Page name (Required)"
          value={formData.pageName}
          onChange={handleChange}
        />
        <small className="text-gray-500">Name that describes what the page is about.</small>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Display name</label>
        <input
          name="displayName"
          type="text"
          required
          className="w-full border rounded-lg px-4 py-2 bg-gray-50"
          placeholder="Display name"
          value={formData.displayName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full border rounded-lg px-4 py-2 bg-gray-50"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          name="category"
          required
          className="w-full border rounded-lg px-4 py-2 bg-gray-50"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select category</option>
          <option value="Comedy">Comedy</option>
          <option value="Technology">Technology</option>
          <option value="Education">Education</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Hotel">Hotel</option>
          <option value="Travel">Travel</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Website URL</label>
        <input
          name="website"
          type="url"
          className="w-full border rounded-lg px-4 py-2 bg-gray-50"
          placeholder="https://yourwebsite.com"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Phone</label>
        <input
          name="phone"
          type="text"
          className="w-full border rounded-lg px-4 py-2 bg-gray-50"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="col-span-full">
        <label className="block text-sm font-medium mb-1">About page</label>
        <textarea
          name="about"
          rows={3}
          className="w-full border rounded-lg px-4 py-2 bg-gray-50"
          placeholder="Short description"
          maxLength={300}
          value={formData.about}
          onChange={handleChange}
        />
        <small className="text-gray-500">Character limit: 300</small>
      </div>

      <div className="col-span-full">
        <SectionTitle text="Social Links" />
        <SocialLinks data={formData} onChange={handleChange} />
      </div>

      <div className="col-span-full text-right">
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Create Page
        </button>
      </div>
    </form>
  )
}

export default PageForm
