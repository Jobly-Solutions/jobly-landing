import React from 'react'
import { Code, Palette, BarChart, Briefcase } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const talentHubs = [
  {
    icon: Code,
    title: "Desarrollo",
    roles: ["Frontend", "Backend", "Full Stack", "Mobile", "DevOps"],
    skills: ["JavaScript", "React", "Node.js", "Python", "AWS"],
    color: "text-blue-500",
    bgColor: "bg-blue-100"
  },
  {
    icon: Palette,
    title: "Diseño",
    roles: ["UI/UX", "Product Design", "Brand", "Motion Graphics"],
    skills: ["Figma", "Adobe Creative Suite", "Sketch", "InVision"],
    color: "text-purple-500",
    bgColor: "bg-purple-100"
  },
  {
    icon: BarChart,
    title: "Data",
    roles: ["Data Science", "Data Engineering", "Business Intelligence", "Machine Learning"],
    skills: ["Python", "SQL", "Tableau", "TensorFlow", "Spark"],
    color: "text-green-500",
    bgColor: "bg-green-100"
  },
  {
    icon: Briefcase,
    title: "Producto",
    roles: ["Product Manager", "Product Owner", "Agile Coach", "Scrum Master"],
    skills: ["Agile", "Scrum", "Jira", "User Stories", "Roadmapping"],
    color: "text-orange-500",
    bgColor: "bg-orange-100"
  }
]

export function TalentHubs() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Especialidades Tech
          </Badge>
          <h2 className="text-3xl font-bold mb-4">
            Hubs de Talento Especializados
          </h2>
          <p className="text-gray-600">
            Conectamos profesionales altamente especializados con las mejores oportunidades en startups innovadoras
          </p>
        </div>
        <Tabs defaultValue="desarrollo" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            {talentHubs.map((hub) => (
              <TabsTrigger key={hub.title} value={hub.title.toLowerCase()}>
                <hub.icon className={`w-5 h-5 mr-2 ${hub.color}`} />
                {hub.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {talentHubs.map((hub) => (
            <TabsContent key={hub.title} value={hub.title.toLowerCase()}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-full ${hub.bgColor} ${hub.color} mr-4`}>
                      <hub.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold">{hub.title}</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Roles Destacados</h4>
                      <ul className="space-y-2">
                        {hub.roles.map((role, index) => (
                          <li key={index} className="flex items-center">
                            <div className={`w-2 h-2 rounded-full ${hub.color} mr-2`} />
                            {role}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Habilidades Clave</h4>
                      <div className="flex flex-wrap gap-2">
                        {hub.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className={`${hub.bgColor} ${hub.color}`}>
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

