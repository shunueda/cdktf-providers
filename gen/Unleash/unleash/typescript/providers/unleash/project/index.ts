// https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the project's purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/project#description Project#description}
  */
  readonly description?: string;
  /**
  * Optional feature naming pattern applied to all features created in this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/project#feature_naming Project#feature_naming}
  */
  readonly featureNaming?: ProjectFeatureNaming;
  /**
  * Identifier for this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/project#id Project#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Optional list of link templates automatically added to new feature flags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/project#link_templates Project#link_templates}
  */
  readonly linkTemplates?: ProjectLinkTemplates[] | cdktf.IResolvable;
  /**
  * The project's collaboration mode. Determines whether non project members can submit change requests and the projects visibility to non members. Valid values are 'open', 'protected' and 'private'. If a value is not set, the project will default to 'open'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/project#mode Project#mode}
  */
  readonly mode?: string;
  /**
  * The name of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/project#name Project#name}
  */
  readonly name: string;
}
export interface ProjectFeatureNaming {
  /**
  * A human-readable description of the pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/project#description Project#description}
  */
  readonly description?: string;
  /**
  * An example feature name that matches the pattern.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/project#example Project#example}
  */
  readonly example?: string;
  /**
  * A JavaScript regular expression pattern, without the start and end delimiters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/project#pattern Project#pattern}
  */
  readonly pattern: string;
}

export function projectFeatureNamingToTerraform(struct?: ProjectFeatureNaming | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    example: cdktf.stringToTerraform(struct!.example),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function projectFeatureNamingToHclTerraform(struct?: ProjectFeatureNaming | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    example: {
      value: cdktf.stringToHclTerraform(struct!.example),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectFeatureNamingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ProjectFeatureNaming | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._example !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectFeatureNaming | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._example = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._example = value.example;
      this._pattern = value.pattern;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // example - computed: false, optional: true, required: false
  private _example?: string; 
  public get example() {
    return this.getStringAttribute('example');
  }
  public set example(value: string) {
    this._example = value;
  }
  public resetExample() {
    this._example = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface ProjectLinkTemplates {
  /**
  * Link title shown in the Unleash UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/project#title Project#title}
  */
  readonly title?: string;
  /**
  * URL template that can contain {{project}} or {{feature}} placeholders.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/project#url_template Project#url_template}
  */
  readonly urlTemplate: string;
}

export function projectLinkTemplatesToTerraform(struct?: ProjectLinkTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    title: cdktf.stringToTerraform(struct!.title),
    url_template: cdktf.stringToTerraform(struct!.urlTemplate),
  }
}


export function projectLinkTemplatesToHclTerraform(struct?: ProjectLinkTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_template: {
      value: cdktf.stringToHclTerraform(struct!.urlTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectLinkTemplatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ProjectLinkTemplates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._urlTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlTemplate = this._urlTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectLinkTemplates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._title = undefined;
      this._urlTemplate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._title = value.title;
      this._urlTemplate = value.urlTemplate;
    }
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // url_template - computed: false, optional: false, required: true
  private _urlTemplate?: string; 
  public get urlTemplate() {
    return this.getStringAttribute('url_template');
  }
  public set urlTemplate(value: string) {
    this._urlTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlTemplateInput() {
    return this._urlTemplate;
  }
}

export class ProjectLinkTemplatesList extends cdktf.ComplexList {
  public internalValue? : ProjectLinkTemplates[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ProjectLinkTemplatesOutputReference {
    return new ProjectLinkTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/project unleash_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "unleash_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "unleash_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/project unleash_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'unleash_project',
      terraformGeneratorMetadata: {
        providerName: 'unleash',
        providerVersion: '3.1.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._featureNaming.internalValue = config.featureNaming;
    this._id = config.id;
    this._linkTemplates.internalValue = config.linkTemplates;
    this._mode = config.mode;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // feature_naming - computed: false, optional: true, required: false
  private _featureNaming = new ProjectFeatureNamingOutputReference(this, "feature_naming");
  public get featureNaming() {
    return this._featureNaming;
  }
  public putFeatureNaming(value: ProjectFeatureNaming) {
    this._featureNaming.internalValue = value;
  }
  public resetFeatureNaming() {
    this._featureNaming.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureNamingInput() {
    return this._featureNaming.internalValue;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // link_templates - computed: false, optional: true, required: false
  private _linkTemplates = new ProjectLinkTemplatesList(this, "link_templates", false);
  public get linkTemplates() {
    return this._linkTemplates;
  }
  public putLinkTemplates(value: ProjectLinkTemplates[] | cdktf.IResolvable) {
    this._linkTemplates.internalValue = value;
  }
  public resetLinkTemplates() {
    this._linkTemplates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkTemplatesInput() {
    return this._linkTemplates.internalValue;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      feature_naming: projectFeatureNamingToTerraform(this._featureNaming.internalValue),
      id: cdktf.stringToTerraform(this._id),
      link_templates: cdktf.listMapper(projectLinkTemplatesToTerraform, false)(this._linkTemplates.internalValue),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_naming: {
        value: projectFeatureNamingToHclTerraform(this._featureNaming.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ProjectFeatureNaming",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_templates: {
        value: cdktf.listMapperHcl(projectLinkTemplatesToHclTerraform, false)(this._linkTemplates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectLinkTemplatesList",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
