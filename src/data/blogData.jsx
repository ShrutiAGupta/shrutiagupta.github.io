import WritingABook from '../components/Blog/Blogs/writing-a-book';
import OrganizingInNotion from '../components/Blog/Blogs/organizing-in-notion';
import BeAWell from '../components/Blog/Blogs/be-a-well';
import TheRightThing from '../components/Blog/Blogs/the-right-thing';
import BuildingPersonalWebsite from '../components/Blog/Blogs/building-personal-website';
import SixLayersOfCommunication from '../components/Blog/Blogs/six-layers-of-communication';
import IKnowBetter from '../components/Blog/Blogs/i-know-better';
import EvenHere from '../components/Blog/Blogs/even-here';
import TheThroughLine from '../components/Blog/Blogs/the-through-line';

export const blogPosts = [
        {
        date: '2026-04-12',
        tags: ['leadership'],
        image: '/assets/img/blog/the-through-line.jpg',
        title: 'The Through-Line',
        description: 'A conversation with a second-year MBA student who taught me that a winding path and a clear purpose are not contradictions.',
        element: <TheThroughLine />,
        visible: true,
        link: 'the-through-line',
    },
    {
        date: '2026-04-12',
        tags: ['philosophy'],
        image: '/assets/img/blog/even-here.jpg',
        title: 'Even Here',
        description: 'On being too much, crossing an ocean to find the loneliness followed, and the rest of yourself still waiting at the door.',
        element: <EvenHere />,
        visible: true,
        link: 'even-here',
    },
    {
        date: '2025-11-29',
        tags: ['communication'],
        image: '/assets/img/blog/six-layers-of-communication.jpg',
        title: 'The Six Layers of Everything We Say',
        description: 'Thinking about communication in a whole new way: the six layers that shape every conversation and connection we make',
        element: <SixLayersOfCommunication />,
        visible: true,
        link: 'six-layers-of-communication',
        
    },
    {
        date: '2025-06-21',
        tags: ['philosophy'],
        image: '/assets/img/blog/i-know-better.jpg',
        title: 'I Know Better',
        description: 'Wisdom makes everything feel justified. But knowing and changing are two completely different skills — and wisdom only gives you one.',
        element: <IKnowBetter />,
        visible: true,
        link: 'i-know-better',
    },
    {
        date: '2024-12-02',
        tags: ['philosophy'],
        image: '/assets/img/blog/be-a-well.jpg',
        title: "Don't Be an Ocean, Just Be a Nice Well",
        description: "What happens when perfectionism meets wisdom? A lesson in doing less, but doing it well",
        element: <BeAWell />,
        visible: true,
        link: 'be-a-well',
    },
    {
        date: '2021-06-28',
        tags: ['tech'],
        image: '/assets/img/blog/building-personal-website.PNG',
        title: "Building a Website That Feels Like You!",
        description: "Why let social media have all the fun when you can have your own slice of the internet that's totally, uniquely you?",
        element: <BuildingPersonalWebsite />,
        visible: true,
        link: 'building-personal-website',
        
    },
    {
        date: '2024-04-19',
        tags: ['tech', 'organization'],
        image: '/assets/img/blog/organizing-in-notion.png',
        title: 'Notion: A Guide to Getting Organized',
        description: 'Transforming chaotic to-do lists into organized digital workspace that actually works',
        element: <OrganizingInNotion />,
        visible: true,
        link: 'organizing-in-notion',
        
    },
    {
        date: '2023-05-12',
        tags: ['creative'],
        image: '/assets/img/blog/writing-a-book.PNG',
        title: 'Dreams to Pages: A Book Writing Guide',
        description: "Learn how to transform those brilliant ideas in your head to the book of your dreams",
        element: <WritingABook />,
        visible: true,
        link: 'writing-a-book',
        
    },
    {
        date: '2022-11-28',
        tags: ['philosophy'],
        image: '/assets/img/blog/the-right-thing.jpg',
        title: "Is the right thing bigger than all of us?",
        description: "What exactly are the dimensions of right? Of wrong? And who decides them?",
        element: <TheRightThing />,
        visible: true,
        link: 'the-right-thing',
        
}
];

export const featuredBlog = 'the-through-line';
export const monthFeaturedBlog = ['six-layers-of-communication', 'i-know-better'];
export const homeFeature = ['be-a-well', 'organizing-in-notion', 'writing-a-book'];