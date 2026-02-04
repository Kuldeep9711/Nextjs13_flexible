import { graph, config } from '@grafbase/sdk'

// 1. Initialize the graph (replaces the deprecated 'g' object)
const g = graph.Standalone()

// 2. Define your User Model
const user = g.model('User', {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedinUrl: g.url().optional(),
  // Self-referencing relation for projects
  projects: g.relation(() => project).list().optional(),
})

// 3. Define your Project Model
const project = g.model('Project', {
  title: g.string().length({ min: 3 }),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(user),
})

// 4. Export the configuration
export default config({
  graph: g
}) 