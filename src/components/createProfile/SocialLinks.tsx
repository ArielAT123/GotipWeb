interface SocialLinksProps {
    data: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const platforms = [
    { name: 'facebook', label: 'Facebook', icon: 'facebook' },
    { name: 'twitter', label: 'Twitter', icon: 'twitter' },
    { name: 'instagram', label: 'Instagram', icon: 'instagram' },
    { name: 'pinterest', label: 'Pinterest', icon: 'pinterest' },
  ]
  
  const SocialLinks: React.FC<SocialLinksProps> = ({ data, onChange }) => {
    return (
      <div className="col-span-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {platforms.map(({ name, label, icon }) => (
            <div key={name}>
              <label className="block text-sm font-medium mb-1">{label}</label>
              <div className="flex items-center border rounded-lg bg-gray-50 overflow-hidden">
                <span className="px-3 text-gray-500">
                  <i className={`fab fa-${icon}`}></i>
                </span>
                <input
                  name={name}
                  type="url"
                  className="w-full px-4 py-2 outline-none bg-gray-50"
                  placeholder={`https://${icon}.com`}
                  value={data[name]}
                  onChange={onChange}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default SocialLinks
  