import { useRef, useState } from "react";

function PersonalInfo({ data, setData, links, setLinks }) {
  const [linkData, setLinkData] = useState({
    label: "",
    url: "",
  });

  const inputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLinkChange = (e) => {
    const { name, value } = e.target;
    setLinkData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddLink = (e) => {
    e.preventDefault();
    if (linkData.label && linkData.url) {
      setLinks([...links, linkData]);
      setLinkData({
        label: "",
        url: "",
      });
      // Focus back to input after adding
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  };

  const handleDeleteLink = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const handleLinkEdit = (index, field, value) => {
    const updatedLinks = links.map((link, i) => {
      if (i === index) {
        return { ...link, [field]: value };
      }
      return link;
    });
    setLinks(updatedLinks);
  };

  return (
    <div style={{ marginBottom: "2rem" }} className="personal-info">
      <h2>Personal Information</h2>
      <form>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={data.phone}
            onChange={handleChange}
          />
        </div>
      </form>

      <h3>Links</h3>

      {links.map((link, index) => (
        <div key={index} className="experience-item-form">
          <input
            type="text"
            name="label"
            value={link.label}
            onChange={(e) => handleLinkEdit(index, "label", e.target.value)}
            placeholder="Label (e.g., GitHub, LinkedIn)"
          />
          <input
            type="text"
            name="url"
            value={link.url}
            onChange={(e) => handleLinkEdit(index, "url", e.target.value)}
            placeholder="URL"
          />
          <button
            type="button"
            onClick={() => handleDeleteLink(index)}
            className="delete-btn"
          >
            -
          </button>
        </div>
      ))}

      <form onSubmit={handleAddLink}>
        <div>
          <label htmlFor="label">Label</label>
          <input
            ref={inputRef}
            type="text"
            id="label"
            name="label"
            value={linkData.label}
            onChange={handleLinkChange}
            placeholder="e.g., GitHub, LinkedIn, Portfolio"
          />
        </div>
        <div>
          <label htmlFor="url">URL</label>
          <input
            type="text"
            id="url"
            name="url"
            value={linkData.url}
            onChange={handleLinkChange}
            placeholder="e.g., https://github.com/username"
          />
        </div>
        <button type="submit" className="add-btn">
          +
        </button>
      </form>
    </div>
  );
}

export default PersonalInfo;
