import Hero from '../components/home/Hero'
import ContentRow from '../components/home/ContentRow'

// Sample data
const trendingFilms = [
  {
    id: 1,
    title: "The Last Sunset",
    creator: "Emma Richardson",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1159&q=80",
    rating: 4.8,
    duration: "1h 28m",
    year: 2023,
    genre: "Drama",
    views: 125000
  },
  {
    id: 2,
    title: "Urban Echoes",
    creator: "Marcus Chen",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1850&q=80",
    rating: 4.5,
    duration: "45m",
    year: 2023,
    genre: "Documentary",
    views: 89000
  },
  {
    id: 3,
    title: "Silent Whispers",
    creator: "Sophia Martinez",
    thumbnail: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
    rating: 4.7,
    duration: "1h 15m",
    year: 2023,
    genre: "Thriller",
    views: 156000
  },
  {
    id: 4,
    title: "Midnight Run",
    creator: "Alex Johnson",
    thumbnail: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.3,
    duration: "1h 52m",
    year: 2023,
    genre: "Action",
    views: 210000
  }
];

const newReleases = [
  {
    id: 5,
    title: "Eternal Flame",
    creator: "Lisa Wong",
    thumbnail: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.6,
    duration: "2h 05m",
    year: 2024,
    genre: "Romance",
    views: 75000
  },
  {
    id: 6,
    title: "Dark Matter",
    creator: "David Kim",
    thumbnail: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    rating: 4.9,
    duration: "2h 18m",
    year: 2024,
    genre: "Sci-Fi",
    views: 189000
  },
  {
    id: 7,
    title: "The Crown",
    creator: "Emma Richardson",
    thumbnail: "https://images.unsplash.com/photo-1609743522653-52354461eb27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.7,
    duration: "1h 45m",
    year: 2024,
    genre: "Drama",
    views: 95000
  },
  {
    id: 8,
    title: "Stranger Things",
    creator: "Marcus Chen",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1850&q=80",
    rating: 4.9,
    duration: "55m",
    year: 2024,
    genre: "Sci-Fi",
    views: 325000
  }
];

const topRated = [
  {
    id: 9,
    title: "The Shawshank Redemption",
    creator: "Frank Darabont",
    thumbnail: "https://images.unsplash.com/photo-1489599102910-59206b8ca314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.9,
    duration: "2h 22m",
    year: 1994,
    genre: "Drama",
    views: 4500000
  },
  {
    id: 10,
    title: "The Godfather",
    creator: "Francis Ford Coppola",
    thumbnail: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80",
    rating: 4.9,
    duration: "2h 55m",
    year: 1972,
    genre: "Crime",
    views: 3800000
  },
  {
    id: 11,
    title: "Pulp Fiction",
    creator: "Quentin Tarantino",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1850&q=80",
    rating: 4.8,
    duration: "2h 34m",
    year: 1994,
    genre: "Crime",
    views: 3200000
  },
  {
    id: 12,
    title: "Fight Club",
    creator: "David Fincher",
    thumbnail: "https://images.unsplash.com/photo-1598890777032-9c78de1f1b46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    rating: 4.7,
    duration: "2h 19m",
    year: 1999,
    genre: "Drama",
    views: 2900000
  }
];

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      
      <div className="bg-background">
        <ContentRow title="Trending Now" films={trendingFilms} />
        <ContentRow title="New Releases" films={newReleases} />
        <ContentRow title="Top Rated" films={topRated} />
        <ContentRow title="Recommended for You" films={trendingFilms} />
      </div>
    </main>
  );
}