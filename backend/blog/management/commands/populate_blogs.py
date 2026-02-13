from django.core.management.base import BaseCommand
from django.utils.text import slugify
from django.contrib.auth import get_user_model
from blog.models import BlogPost, BlogBlock
import uuid

User = get_user_model()

class Command(BaseCommand):
    help = 'Populate sample blog posts with rich content blocks'

    def handle(self, *args, **options):
        # Get or create a superuser
        try:
            author = User.objects.get(is_superuser=True)
        except User.DoesNotExist:
            self.stdout.write(
                self.style.WARNING('No superuser found. Please create one first with: python manage.py createsuperuser')
            )
            return

        # Sample blog data
        blogs_data = [
            {
                'title': 'Building Scalable AI Systems: Lessons from Production',
                'excerpt': 'Real-world insights on architecting AI systems that can handle millions of requests while maintaining performance and reliability.',
                'tags': 'AI, Scalability, Production, Architecture',
                'blocks': [
                    {
                        'block_type': 'heading',
                        'content': 'The Challenge of Scale'
                    },
                    {
                        'block_type': 'text',
                        'content': 'When building AI systems for production, scale becomes the ultimate test. What works perfectly in a development environment often fails spectacularly when faced with real-world traffic patterns, data volumes, and user expectations.'
                    },
                    {
                        'block_type': 'text',
                        'content': 'In this post, I\'ll share key lessons learned from deploying AI systems that process millions of requests daily across multiple cloud providers.'
                    },
                    {
                        'block_type': 'heading',
                        'content': '1. Design for Failure'
                    },
                    {
                        'block_type': 'text',
                        'content': 'AI systems are complex beasts with many moving parts. Neural networks can fail silently, APIs can timeout, and infrastructure can become unavailable. Your system must be designed to handle these failures gracefully.'
                    },
                    {
                        'block_type': 'quote',
                        'content': 'A system that fails fast and recovers quickly is better than one that tries to be perfect and fails catastrophically.'
                    },
                    {
                        'block_type': 'heading',
                        'content': '2. Monitor Everything'
                    },
                    {
                        'block_type': 'text',
                        'content': 'You can\'t improve what you don\'t measure. Implement comprehensive monitoring from the moment you start building, not as an afterthought.'
                    },
                    {
                        'block_type': 'code',
                        'content': '# Example monitoring setup\nimport time\nfrom prometheus_client import Counter, Histogram\n\nREQUEST_COUNT = Counter(\'http_requests_total\', \'Total HTTP requests\')\nREQUEST_LATENCY = Histogram(\'http_request_duration_seconds\', \'HTTP request latency\')\n\n@REQUEST_LATENCY.time()\ndef process_ai_request(data):\n    REQUEST_COUNT.inc()\n    # Your AI processing logic here\n    return result'
                    },
                    {
                        'block_type': 'heading',
                        'content': '3. Optimize for Cost'
                    },
                    {
                        'block_type': 'text',
                        'content': 'AI inference can be expensive. Every millisecond and every byte matters when you\'re processing millions of requests.'
                    },
                    {
                        'block_type': 'text',
                        'content': 'Key optimization strategies include model quantization, batching, caching, and choosing the right instance types for your workload patterns.'
                    }
                ]
            },
            {
                'title': 'From Monolith to Microservices: A Migration Journey',
                'excerpt': 'How we broke down a massive Django monolith into microservices while maintaining data consistency and user experience.',
                'tags': 'Microservices, Django, Architecture, Migration',
                'blocks': [
                    {
                        'block_type': 'heading',
                        'content': 'The Monolith Problem'
                    },
                    {
                        'block_type': 'text',
                        'content': 'Our application started as a simple Django project. Over time, it grew into a 500,000+ line codebase handling everything from user authentication to complex AI processing.'
                    },
                    {
                        'block_type': 'text',
                        'content': 'Deployment took 45 minutes. A single bug could bring down the entire system. Scaling was limited by the largest component.'
                    },
                    {
                        'block_type': 'heading',
                        'content': 'Planning the Migration'
                    },
                    {
                        'block_type': 'text',
                        'content': 'We spent three months analyzing our codebase, identifying bounded contexts, and designing the service boundaries. The key was understanding our domain deeply.'
                    },
                    {
                        'block_type': 'text',
                        'content': 'We identified four main services: User Management, Content Processing, AI Services, and Analytics.'
                    },
                    {
                        'block_type': 'heading',
                        'content': 'The Migration Strategy'
                    },
                    {
                        'block_type': 'text',
                        'content': 'Instead of a big bang migration, we chose the strangler pattern. New features were built as microservices, and old functionality was gradually migrated.'
                    },
                    {
                        'block_type': 'code',
                        'content': '# Example service communication\nfrom typing import Optional\nimport httpx\n\nclass UserServiceClient:\n    def __init__(self, base_url: str):\n        self.base_url = base_url\n        self.client = httpx.AsyncClient(timeout=30.0)\n\n    async def get_user(self, user_id: str) -> Optional[dict]:\n        try:\n            response = await self.client.get(f"{self.base_url}/users/{user_id}")\n            response.raise_for_status()\n            return response.json()\n        except httpx.HTTPError:\n            return None'
                    },
                    {
                        'block_type': 'heading',
                        'content': 'Data Consistency Challenges'
                    },
                    {
                        'block_type': 'text',
                        'content': 'Maintaining data consistency across services was our biggest challenge. We implemented event-driven architecture with Apache Kafka and ensured eventual consistency.'
                    },
                    {
                        'block_type': 'text',
                        'content': 'For critical operations requiring strong consistency, we used the saga pattern with compensating transactions.'
                    }
                ]
            },
            {
                'title': 'Machine Learning in Production: Best Practices',
                'excerpt': 'Practical guide to deploying ML models in production environments with monitoring, A/B testing, and continuous improvement.',
                'tags': 'Machine Learning, Production, MLOps, Best Practices',
                'blocks': [
                    {
                        'block_type': 'heading',
                        'content': 'The ML Production Gap'
                    },
                    {
                        'block_type': 'text',
                        'content': 'Most machine learning tutorials focus on model accuracy in Jupyter notebooks. But getting that 95% accuracy model to serve millions of predictions reliably is a different challenge entirely.'
                    },
                    {
                        'block_type': 'text',
                        'content': 'Here are the key practices that have helped us maintain reliable ML systems in production.'
                    },
                    {
                        'block_type': 'heading',
                        'content': '1. Model Versioning and Rollback'
                    },
                    {
                        'block_type': 'text',
                        'content': 'Always version your models and have the ability to rollback instantly. We use DVC for model versioning and keep the last 10 versions ready for deployment.'
                    },
                    {
                        'block_type': 'code',
                        'content': '# Model versioning with DVC\ndvc add models/production_model.pkl\ndvc push\n\ngit add models/production_model.pkl.dvc\ngit commit -m "Update production model v2.1.3"\ngit tag v2.1.3'
                    },
                    {
                        'block_type': 'heading',
                        'content': '2. Feature Store for Consistency'
                    },
                    {
                        'block_type': 'text',
                        'content': 'Training and serving features must be identical. A feature store ensures consistency between training and inference.'
                    },
                    {
                        'block_type': 'text',
                        'content': 'We use Feast as our feature store, which provides point-in-time correct features for both training and serving.'
                    },
                    {
                        'block_type': 'heading',
                        'content': '3. Continuous Monitoring'
                    },
                    {
                        'block_type': 'text',
                        'content': 'Monitor not just system metrics, but also data drift, prediction quality, and business metrics.'
                    },
                    {
                        'block_type': 'text',
                        'content': 'Set up alerts for: prediction latency > 100ms, data drift score > 0.3, accuracy drop > 5%.'
                    },
                    {
                        'block_type': 'heading',
                        'content': '4. A/B Testing Framework'
                    },
                    {
                        'block_type': 'text',
                        'content': 'Never deploy a model without A/B testing. Even if your offline metrics look great, real-world performance matters.'
                    },
                    {
                        'block_type': 'text',
                        'content': 'We use a custom A/B testing framework that routes traffic based on user segments and measures multiple KPIs.'
                    }
                ]
            },
            {
                'title': 'Building Developer Experience: Internal Tools That Matter',
                'excerpt': 'How investing in internal developer tools can dramatically improve team productivity and code quality.',
                'tags': 'Developer Experience, Tools, Productivity, Engineering',
                'blocks': [
                    {
                        'block_type': 'heading',
                        'content': 'The Hidden Productivity Killer'
                    },
                    {
                        'block_type': 'text',
                        'content': 'Poor developer experience compounds over time. A team of 10 developers wasting 30 minutes daily on repetitive tasks loses 125 hours per month - that\'s over 3 weeks of productivity.'
                    },
                    {
                        'block_type': 'text',
                        'content': 'Here\'s how we transformed our development workflow with custom internal tools.'
                    },
                    {
                        'block_type': 'heading',
                        'content': '1. Automated Code Review'
                    },
                    {
                        'block_type': 'text',
                        'content': 'We built an AI-powered code review tool that catches common issues before they reach human reviewers.'
                    },
                    {
                        'block_type': 'text',
                        'content': 'The tool checks for: security vulnerabilities, performance issues, code style violations, and architectural consistency.'
                    },
                    {
                        'block_type': 'code',
                        'content': '# Example automated check\nfrom typing import List\nimport ast\n\nclass SecurityChecker(ast.NodeVisitor):\n    def __init__(self):\n        self.issues = []\n\n    def visit_Call(self, node):\n        if isinstance(node.func, ast.Name) and node.func.id == \'eval\':\n            self.issues.append({\n                \'type\': \'security\',\n                \'message\': \'Use of eval() detected - potential security risk\',\n                \'line\': node.lineno\n            })\n        self.generic_visit(node)'
                    },
                    {
                        'block_type': 'heading',
                        'content': '2. One-Click Deployments'
                    },
                    {
                        'block_type': 'text',
                        'content': 'Our deployment tool handles the entire pipeline: testing, building, security scanning, and deployment across multiple environments.'
                    },
                    {
                        'block_type': 'text',
                        'content': 'A single command deploys to staging, runs integration tests, and promotes to production if everything passes.'
                    },
                    {
                        'block_type': 'heading',
                        'content': '3. Intelligent Logging'
                    },
                    {
                        'block_type': 'text',
                        'content': 'We developed structured logging with automatic error correlation and performance insights.'
                    },
                    {
                        'block_type': 'text',
                        'content': 'Logs are automatically parsed, correlated, and presented in a web dashboard with filtering and search capabilities.'
                    },
                    {
                        'block_type': 'heading',
                        'content': 'Measuring Impact'
                    },
                    {
                        'block_type': 'text',
                        'content': 'After implementing these tools, we saw: 40% reduction in deployment time, 60% fewer production bugs, and 25% improvement in developer satisfaction scores.'
                    },
                    {
                        'block_type': 'text',
                        'content': 'The ROI was clear - the time saved by developers far exceeded the cost of building these tools.'
                    }
                ]
            },
            {
                'title': 'The Future of AI: Trends and Predictions for 2025',
                'excerpt': 'Exploring emerging AI trends, breakthrough technologies, and what they mean for developers and businesses.',
                'tags': 'AI, Future, Trends, Technology',
                'blocks': [
                    {
                        'block_type': 'heading',
                        'content': 'AI is Eating the World'
                    },
                    {
                        'block_type': 'text',
                        'content': 'We\'re at an inflection point. AI is no longer a nice-to-have technology - it\'s becoming the core differentiator for businesses across every industry.'
                    },
                    {
                        'block_type': 'text',
                        'content': 'Here are the trends that will shape AI development in 2025 and beyond.'
                    },
                    {
                        'block_type': 'heading',
                        'content': '1. Multimodal AI Becomes Standard'
                    },
                    {
                        'block_type': 'text',
                        'content': 'Single-modality AI (text-only, image-only) is giving way to systems that understand and generate across multiple modalities simultaneously.'
                    },
                    {
                        'block_type': 'text',
                        'content': 'Imagine an AI that can see your screen, understand your question, and respond with both text and diagrams. That\'s the future we\'re building toward.'
                    },
                    {
                        'block_type': 'heading',
                        'content': '2. AI-Native Development Platforms'
                    },
                    {
                        'block_type': 'text',
                        'content': 'Traditional programming paradigms are being augmented with AI-native approaches. Prompt engineering, few-shot learning, and AI-assisted development will become standard practices.'
                    },
                    {
                        'block_type': 'text',
                        'content': 'We\'ll see the rise of "AI-first" programming languages and frameworks designed specifically for machine learning workflows.'
                    },
                    {
                        'block_type': 'heading',
                        'content': '3. Edge AI Democratization'
                    },
                    {
                        'block_type': 'text',
                        'content': 'As edge computing matures, we\'ll see AI models running efficiently on devices from smartphones to IoT sensors.'
                    },
                    {
                        'block_type': 'text',
                        'content': 'This will enable real-time AI applications in areas like autonomous vehicles, industrial automation, and personalized healthcare.'
                    },
                    {
                        'block_type': 'heading',
                        'content': '4. Ethical AI by Design'
                    },
                    {
                        'block_type': 'text',
                        'content': 'With increasing regulatory scrutiny, ethical considerations will be built into AI systems from day one, not bolted on as an afterthought.'
                    },
                    {
                        'block_type': 'text',
                        'content': 'Expect to see: bias detection tools, explainability frameworks, and privacy-preserving machine learning techniques become standard.'
                    },
                    {
                        'block_type': 'heading',
                        'content': 'Preparing for the Future'
                    },
                    {
                        'block_type': 'text',
                        'content': 'To thrive in this AI-driven future, developers need to: embrace continuous learning, focus on problem-solving over specific technologies, and develop a deep understanding of both the capabilities and limitations of AI systems.'
                    },
                    {
                        'block_type': 'quote',
                        'content': 'The best way to predict the future is to create it.'
                    }
                ]
            }
        ]

        # Create blogs
        for blog_data in blogs_data:
            # Create slug from title
            slug = slugify(blog_data['title'])

            # Create blog post
            blog_post = BlogPost.objects.create(
                title=blog_data['title'],
                slug=slug,
                excerpt=blog_data['excerpt'],
                author=author,
                status='published',
                tags=blog_data['tags']
            )

            # Create blocks
            for i, block_data in enumerate(blog_data['blocks']):
                BlogBlock.objects.create(
                    post=blog_post,
                    block_type=block_data['block_type'],
                    content=block_data['content'],
                    order=i
                )

            self.stdout.write(
                self.style.SUCCESS(f'Created blog: "{blog_post.title}" with {len(blog_data["blocks"])} blocks')
            )

        self.stdout.write(
            self.style.SUCCESS(f'Successfully created {len(blogs_data)} sample blog posts!')
        )