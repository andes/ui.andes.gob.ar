import { Injectable, Component } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { TemplateFormComponent } from '../examples/template-form/template-form';

export interface DocExample {
  title: string;
  component: ComponentType<any>;
}

export interface DocItem {
  id: string;
  name: string;
  examples?: DocExample[];
}

export interface DocCategory {
  id: string;
  name: string;
  items: DocItem[];
  summary?: string;
}

const DOCS: DocCategory[] = [
  {
    id: 'layout',
    name: 'Layout',
    items: [
      {
        id: 'layout-intro',
        name: 'Qué es un layout?',
        examples: []
      },
      {
        id: 'tipologias',
        name: 'Tipologías',
        examples: []
      },
      {
        id: 'navbar',
        name: 'Navbar',
        examples: []
      },
      {
        id: 'panel-principal',
        name: 'Panel principal',
        examples: []
      },
      {
        id: 'panel-lateral',
        name: 'Panel lateral',
        examples: []
      },
      {
        id: 'footer',
        name: 'Footer',
        examples: []
      },
    ]
  },
  {
    id: 'componentes',
    name: 'Componentes',
    items: [
      {
        id: 'bool',
        name: 'Bool',
        examples: []
      },
      {
        id: 'accordion',
        name: 'Accordion',
        examples: []
      },
      {
        id: 'button',
        name: 'Button',
        examples: []
      },
      {
        id: 'badge',
        name: 'Badge',
        examples: []
      },
      {
        id: 'datetime',
        name: 'Datetime',
        examples: []
      },
      {
        id: 'text',
        name: 'Text',
        examples: []
      },
      {
        id: 'select',
        name: 'Select',
        examples: []
      },
      {
        id: 'float',
        name: 'Float',
        examples: []
      },
      {
        id: 'phone',
        name: 'Phone',
        examples: []
      },
      {
        id: 'icon',
        name: 'Icon',
        examples: []
      }
    ]
  },
  {
    id: 'templates',
    name: 'Plantillas',
    items: [
      {
        id: 'template-form',
        name: 'Formulario',
        examples: [{
          title: 'template-form',
          component: TemplateFormComponent
        },
        ]
      },
    ]
  },
];

const ALL_COMPONENTS = DOCS.reduce(
  (result, category) => result.concat(category.items), []);
const ALL_DOCS = ALL_COMPONENTS;
const ALL_CATEGORIES = DOCS;
export const SECTIONS = {
  ['components']: 'Guías'
};

@Injectable()
export class DocumentationItems {
  getCategories(section: string): DocCategory[] {
    return DOCS;
  }

  getItems(section: string): DocItem[] {
    return ALL_COMPONENTS;
  }

  getItemById(id: string, section: string): DocItem {
    return ALL_DOCS.find(doc => doc.id === id);
  }

  getCategoryById(id: string): DocCategory {
    return ALL_CATEGORIES.find(c => c.id == id);
  }
}
