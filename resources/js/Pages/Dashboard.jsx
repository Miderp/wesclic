import React, { useState, useEffect } from 'react';
import { Search, ChevronRight, Users, UserCheck, Monitor, Plus, Edit, Trash2, X, ChevronLeft, TrendingUp, TrendingDown, DollarSign, Package, BarChart3, Target, HelpCircle, FileText } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart as RePieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const API_URL = 'http://localhost:8000/api/v1';

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState('customers');
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  const Sidebar = () => {
    const menuItems = [
      { id: 'dashboard', label: 'Dashboard', icon: <BarChart3 size={20} /> },
      { id: 'product', label: 'Product', icon: <Package size={20} /> },
      { id: 'customers', label: 'Customers', icon: <Users size={20} /> },
      { id: 'income', label: 'Income', icon: <DollarSign size={20} /> },
      { id: 'promote', label: 'Promote', icon: <Target size={20} /> },
      { id: 'help', label: 'Help', icon: <HelpCircle size={20} /> },
    ];

    return (
      <div className={`${isSidebarMinimized ? 'w-20' : 'w-64'} bg-white border-r border-gray-200 flex flex-col transition-all duration-300`}>
        <div className="p-6">
          {!isSidebarMinimized && (
            <button 
              onClick={() => setIsSidebarMinimized(true)}
              className="flex items-center gap-2 text-gray-400 hover:text-gray-600 text-sm mb-6 cursor-pointer"
            >
              <ChevronLeft size={16} />
              <span>Minimize</span>
            </button>
          )}

          {isSidebarMinimized && (
            <button 
              onClick={() => setIsSidebarMinimized(false)}
              className="w-full flex justify-center mb-6 text-gray-400 hover:text-gray-600"
              title="Expand"
            >
              <ChevronRight size={20} />
            </button>
          )}

          <div className="flex items-center justify-between mb-8">
            <div className={`flex items-center gap-2 ${isSidebarMinimized ? 'justify-center w-full' : ''}`}>
              <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="w-5 h-5 border-2 border-white rounded-sm"></div>
              </div>
              {!isSidebarMinimized && (
                <>
                  <span className="font-semibold text-xl">Dashboard</span>
                  <span className="text-gray-400 text-xs">v.01</span>
                </>
              )}
            </div>
          </div>
          
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`flex items-center ${isSidebarMinimized ? 'justify-center' : 'justify-between'} px-3 py-2.5 rounded-lg cursor-pointer ${
                  currentPage === item.id
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  {!isSidebarMinimized && <span className="text-sm font-medium">{item.label}</span>}
                </div>
                {!isSidebarMinimized && <ChevronRight size={16} />}
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-6">
          {!isSidebarMinimized ? (
            <>
              <div className="bg-gradient-to-br from-[#EAABF0] to-[#4623E9] rounded-2xl p-5 text-white">
                <div className="text-center mb-3">
                  <p className="text-white text-xs font-medium leading-relaxed">
                    Upgrade to <strong>PRO</strong> to get access all Features!
                  </p>
                </div>
                <button className="w-full bg-white text-purple-600 text-sm font-medium rounded-lg py-2.5 hover:bg-gray-50">
                  Get Pro Now!
                </button>
              </div>
              <div className="flex items-center gap-3 mt-4 p-2">
                <img src="https://i.pravatar.cc/40?img=1" alt="User" className="w-10 h-10 rounded-full" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Evano</p>
                  <p className="text-xs text-gray-500">Project Manager</p>
                </div>
              </div>
            </>
          ) : (
            <div className="flex justify-center">
              <img src="https://i.pravatar.cc/40?img=1" alt="User" className="w-10 h-10 rounded-full" />
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage />;
      case 'product':
        return <ProductPage />;
      case 'customers':
        return <CustomersPage />;
      case 'income':
        return <IncomePage />;
      case 'promote':
        return <PromotePage />;
      case 'help':
        return <HelpPage />;
      default:
        return <CustomersPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        {renderPage()}
      </div>
    </div>
  );
}

function DashboardPage() {
  const [stats] = useState({
    totalRevenue: 45231,
    totalCustomers: 5423,
    totalProducts: 342,
    totalOrders: 1523
  });

  const salesData = [
    { month: 'Jan', sales: 4000, revenue: 2400 },
    { month: 'Feb', sales: 3000, revenue: 1398 },
    { month: 'Mar', sales: 2000, revenue: 9800 },
    { month: 'Apr', sales: 2780, revenue: 3908 },
    { month: 'May', sales: 1890, revenue: 4800 },
    { month: 'Jun', sales: 2390, revenue: 3800 },
  ];

  const productData = [
    { name: 'Electronics', value: 400 },
    { name: 'Clothing', value: 300 },
    { name: 'Food', value: 200 },
    { name: 'Books', value: 100 },
  ];

  const COLORS = ['#4623E9', '#EAABF0', '#10B981', '#F59E0B'];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-1">Dashboard Overview</h1>
      <p className="text-gray-500 text-sm mb-8">Welcome back, Evano! 👋🏼</p>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
              <DollarSign className="text-green-600" size={24} />
            </div>
            <TrendingUp className="text-green-600" size={20} />
          </div>
          <p className="text-gray-500 text-sm mb-1">Total Revenue</p>
          <p className="text-2xl font-bold">${stats.totalRevenue.toLocaleString()}</p>
          <p className="text-green-600 text-xs mt-2">↑ 12% from last month</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
              <Users className="text-blue-600" size={24} />
            </div>
            <TrendingUp className="text-green-600" size={20} />
          </div>
          <p className="text-gray-500 text-sm mb-1">Total Customers</p>
          <p className="text-2xl font-bold">{stats.totalCustomers.toLocaleString()}</p>
          <p className="text-green-600 text-xs mt-2">↑ 8% from last month</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
              <Package className="text-purple-600" size={24} />
            </div>
            <TrendingUp className="text-green-600" size={20} />
          </div>
          <p className="text-gray-500 text-sm mb-1">Total Products</p>
          <p className="text-2xl font-bold">{stats.totalProducts}</p>
          <p className="text-green-600 text-xs mt-2">↑ 5% from last month</p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
              <Monitor className="text-orange-600" size={24} />
            </div>
            <TrendingDown className="text-red-600" size={20} />
          </div>
          <p className="text-gray-500 text-sm mb-1">Total Orders</p>
          <p className="text-2xl font-bold">{stats.totalOrders.toLocaleString()}</p>
          <p className="text-red-600 text-xs mt-2">↓ 3% from last month</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Sales & Revenue</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#4623E9" strokeWidth={2} />
              <Line type="monotone" dataKey="revenue" stroke="#EAABF0" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Products by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RePieChart>
              <Pie
                data={productData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {productData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </RePieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function ProductPage() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop Pro', category: 'Electronics', price: 1299, stock: 45, status: 'Active' },
    { id: 2, name: 'Wireless Mouse', category: 'Electronics', price: 29, stock: 150, status: 'Active' },
    { id: 3, name: 'Office Chair', category: 'Furniture', price: 199, stock: 23, status: 'Active' },
    { id: 4, name: 'Desk Lamp', category: 'Furniture', price: 49, stock: 0, status: 'Inactive' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('create');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    name: '', category: '', price: '', stock: '', status: 'Active'
  });

  const handleCreate = () => {
    setModalMode('create');
    setFormData({ name: '', category: '', price: '', stock: '', status: 'Active' });
    setShowModal(true);
  };

  const handleEdit = (product) => {
    setModalMode('edit');
    setSelectedProduct(product);
    setFormData(product);
    setShowModal(true);
  };

  const handleSubmit = () => {
    if (modalMode === 'create') {
      setProducts([...products, { id: products.length + 1, ...formData }]);
    } else {
      setProducts(products.map(p => p.id === selectedProduct.id ? { ...p, ...formData } : p));
    }
    setShowModal(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-8">Product Management</h1>

      <div className="bg-white rounded-2xl border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">All Products</h2>
            <button onClick={handleCreate} className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              <Plus size={20} />
              Add Product
            </button>
          </div>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
        </div>

        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Product Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Category</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Price</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Stock</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium">{product.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{product.category}</td>
                <td className="px-6 py-4 text-sm text-gray-600">${product.price}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{product.stock}</td>
                <td className="px-6 py-4">
                  <span className={`px-4 py-1.5 rounded-md text-xs font-medium border ${
                    product.status === 'Active' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'
                  }`}>
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <button onClick={() => handleEdit(product)} className="p-1.5 hover:bg-blue-50 rounded text-blue-600">
                      <Edit size={16} />
                    </button>
                    <button onClick={() => handleDelete(product.id)} className="p-1.5 hover:bg-red-50 rounded text-red-600">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">{modalMode === 'create' ? 'Add Product' : 'Edit Product'}</h2>
              <button onClick={() => setShowModal(false)}><X size={24} /></button>
            </div>
            <div className="space-y-4">
              <input type="text" placeholder="Product Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-3 py-2 border rounded-lg" />
              <input type="text" placeholder="Category" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full px-3 py-2 border rounded-lg" />
              <input type="number" placeholder="Price" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} className="w-full px-3 py-2 border rounded-lg" />
              <input type="number" placeholder="Stock" value={formData.stock} onChange={(e) => setFormData({...formData, stock: e.target.value})} className="w-full px-3 py-2 border rounded-lg" />
              <select value={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})} className="w-full px-3 py-2 border rounded-lg">
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <div className="flex gap-3 pt-4">
                <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-2.5 border rounded-lg">Cancel</button>
                <button onClick={handleSubmit} className="flex-1 px-4 py-2.5 bg-purple-600 text-white rounded-lg">{modalMode === 'create' ? 'Create' : 'Update'}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function CustomersPage() {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Jane Cooper', company: 'Microsoft', phone: '(225) 555-0118', email: 'jane@microsoft.com', country: 'United States', status: 'Active' },
    { id: 2, name: 'Floyd Miles', company: 'Yahoo', phone: '(205) 555-0100', email: 'floyd@yahoo.com', country: 'Kiribati', status: 'Inactive' },
    { id: 3, name: 'Ronald Richards', company: 'Adobe', phone: '(302) 555-0107', email: 'ronald@adobe.com', country: 'Israel', status: 'Inactive' },
    { id: 4, name: 'Marvin McKinney', company: 'Tesla', phone: '(252) 555-0126', email: 'marvin@tesla.com', country: 'Iran', status: 'Active' },
    { id: 5, name: 'Jerome Bell', company: 'Google', phone: '(629) 555-0129', email: 'jerome@google.com', country: 'Réunion', status: 'Active' },
    { id: 6, name: 'Kathryn Murphy', company: 'Microsoft', phone: '(406) 555-0120', email: 'kathryn@microsoft.com', country: 'Curaçao', status: 'Active' },
    { id: 7, name: 'Jacob Jones', company: 'Yahoo', phone: '(208) 555-0112', email: 'jacob@yahoo.com', country: 'Brazil', status: 'Active' },
    { id: 8, name: 'Kristin Watson', company: 'Facebook', phone: '(704) 555-0127', email: 'kristin@facebook.com', country: 'Åland Islands', status: 'Inactive' },
  ]);
  
  const [stats] = useState({
    total_customers: 5423,
    active_members: 1893,
    active_now: 189,
    growth_rate: 16
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('create');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Newest');
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', country: '', status: 'Active'
  });

  const activeNowUsers = [
    { color: 'bg-purple-500' },
    { color: 'bg-blue-500' },
    { color: 'bg-pink-500' },
    { color: 'bg-orange-500' }
  ];

  const handleCreate = () => {
    setModalMode('create');
    setFormData({ name: '', email: '', phone: '', company: '', country: '', status: 'Active' });
    setShowModal(true);
  };

  const handleEdit = (customer) => {
    setModalMode('edit');
    setSelectedCustomer(customer);
    setFormData(customer);
    setShowModal(true);
  };

  const handleSubmit = () => {
    if (modalMode === 'create') {
      setCustomers([...customers, { id: customers.length + 1, ...formData }]);
    } else {
      setCustomers(customers.map(c => c.id === selectedCustomer.id ? { ...c, ...formData } : c));
    }
    setShowModal(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure?')) {
      setCustomers(customers.filter(c => c.id !== id));
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-1">Hello Evano 👋🏼,</h1>
      <p className="text-gray-500 text-sm mb-8"></p>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-500 text-sm mb-2">Total Customers</p>
              <p className="text-3xl font-bold mb-2">{stats.total_customers.toLocaleString()}</p>
              <p className="text-green-600 text-xs font-medium">↑ {stats.growth_rate}% this month</p>
            </div>
            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center">
              <Users className="text-green-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-500 text-sm mb-2">Members</p>
              <p className="text-3xl font-bold mb-2">{stats.active_members.toLocaleString()}</p>
              <p className="text-red-600 text-xs font-medium">↓ 1% this month</p>
            </div>
            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center">
              <UserCheck className="text-green-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-500 text-sm mb-2">Active Now</p>
              <p className="text-3xl font-bold mb-2">{stats.active_now}</p>
              <div className="flex -space-x-2 mt-2">
                {activeNowUsers.map((user, i) => (
                  <div key={i} className={`w-7 h-7 ${user.color} rounded-full border-2 border-white`} />
                ))}
              </div>
            </div>
            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center">
              <Monitor className="text-green-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Customer Table */}
      <div className="bg-white rounded-2xl border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">All Customers</h2>
              <p className="text-green-600 text-sm font-medium mt-0.5">Active Members</p>
            </div>
            <button 
              onClick={handleCreate}
              className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 text-sm font-medium"
            >
              <Plus size={18} />
              Add Customer
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            
            <div className="flex items-center gap-2 ml-4">
              <span className="text-sm text-gray-500">Short by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-gray-50 border-0 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                <option value="Newest">Newest</option>
                <option value="Name">Name</option>
              </select>
            </div>
          </div>
        </div>

        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Customer Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Company</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone Number</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Country</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{customer.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{customer.company}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{customer.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{customer.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{customer.country}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-4 py-1.5 rounded-md text-xs font-medium border ${
                    customer.status === 'Active' 
                      ? 'bg-green-50 text-green-700 border-green-200' 
                      : 'bg-red-50 text-red-700 border-red-200'
                  }`}>
                    {customer.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handleEdit(customer)}
                      className="p-1.5 hover:bg-blue-50 rounded text-blue-600"
                    >
                      <Edit size={16} />
                    </button>
                    <button 
                      onClick={() => handleDelete(customer.id)}
                      className="p-1.5 hover:bg-red-50 rounded text-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing data 1 to 8 of 256K entries
          </p>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-50 rounded">&lt;</button>
            <button className="px-3 py-1.5 text-sm bg-purple-600 text-white rounded">1</button>
            <button className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded">2</button>
            <button className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded">3</button>
            <button className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded">4</button>
            <button className="px-3 py-1.5 text-sm text-gray-500">...</button>
            <button className="px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded">40</button>
            <button className="px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-50 rounded">&gt;</button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">
                {modalMode === 'create' ? 'Add New Customer' : 'Edit Customer'}
              </h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Customer Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Enter name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Enter email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="(000) 000-0000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Country</label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Country"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 px-4 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium"
                >
                  {modalMode === 'create' ? 'Create' : 'Update'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function IncomePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-8">Income Tracking</h1>
      <div className="bg-white rounded-2xl p-6 border border-gray-100">
        <p className="text-gray-500">Income page content coming soon...</p>
      </div>
    </div>
  );
}

function PromotePage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-8">Marketing & Promotions</h1>
      <div className="bg-white rounded-2xl p-6 border border-gray-100">
        <p className="text-gray-500">Promote page content coming soon...</p>
      </div>
    </div>
  );
}

function HelpPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-8">Help Documentation</h1>
      <div className="bg-white rounded-2xl p-6 border border-gray-100">
        <p className="text-gray-500">Help page content coming soon...</p>
      </div>
    </div>
  );
}