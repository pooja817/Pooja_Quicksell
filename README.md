# Pooja_Quicksell
# QuickSell Kanban Board

A responsive React-based Kanban board application that helps organize and visualize tickets with flexible grouping and sorting options.

## 🚀 Features

- *Dynamic Grouping Options*
  - By Status (Todo, In Progress, Done, Canceled)
  - By Priority (No Priority, Low, Medium, High, Urgent)
  - By User
  
- *Smart Sorting*
  - Priority-based ordering
  - Title alphabetical sorting
  
- *Persistent Views*
  - Saves your viewing preferences
  - Maintains state across page reloads
  
- *Responsive Design*
  - Mobile-friendly interface
  - Horizontal scrolling for columns
  - Consistent card widths across devices

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
bash
git clone [your-repository-url]
cd [repository-name]


2. Install dependencies:
bash
npm install


3. Start the development server:
bash
npm start


4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔌 API Integration

The application integrates with the QuickSell API:
- Endpoint: https://api.quicksell.co/v1/internal/frontend-assignment
- Provides tickets and users data
- Automatic data refresh handling

## 📱 Browser Support

- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers
- Minimum supported screen width: 320px

## 🏗️ Project Structure


src/
├── assets/
│   └── icons/
├── components/
│   ├── Card/
│   ├── Column/
│   ├── Header/
│   ├── Kanban/
│   └── UserAvatar/
├── hooks/
│   ├── useClickOutside.js
│   └── usePersistentState.js
└── utils/
    ├── helpers.js
    └── icons.js


## 🎯 Implementation Details

### Grouping Logic
- *Status*: Organizes tickets by their current state
- *Priority*: Groups by urgency level (0-4)
- *User*: Arranges tickets by assigned team member

### State Management
- Uses React's Context API
- Local storage for view persistence
- Efficient re-rendering optimization

### Error Handling
- Loading states during data fetch
- Error messages for API failures
- Fallback UI components

### Performance Optimizations
- Memoized components
- Efficient sorting algorithms
- Lazy-loaded images
- Debounced API calls

## 🚨 Known Behaviors

- Horizontal scrolling required on mobile devices
- Dropdown menu closes on outside clicks
- View preferences persist in browser storage
- Fixed card width maintains consistency
