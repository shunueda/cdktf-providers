// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiPropertyRulesTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The folder with snippets can contain symlinks to other folders with snippets and can be a symlink itself. Symlinks are handled recursively so be aware of the possibility of infinite recursion if a link points to its own parent directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_template#follow_links DataAkamaiPropertyRulesTemplate#follow_links}
  */
  readonly followLinks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_template#id DataAkamaiPropertyRulesTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * File path to the template file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_template#template_file DataAkamaiPropertyRulesTemplate#template_file}
  */
  readonly templateFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_template#var_definition_file DataAkamaiPropertyRulesTemplate#var_definition_file}
  */
  readonly varDefinitionFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_template#var_values_file DataAkamaiPropertyRulesTemplate#var_values_file}
  */
  readonly varValuesFile?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_template#template DataAkamaiPropertyRulesTemplate#template}
  */
  readonly template?: DataAkamaiPropertyRulesTemplateTemplate[] | cdktf.IResolvable;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_template#variables DataAkamaiPropertyRulesTemplate#variables}
  */
  readonly variables?: DataAkamaiPropertyRulesTemplateVariables[] | cdktf.IResolvable;
}
export interface DataAkamaiPropertyRulesTemplateTemplate {
  /**
  * Content of the template as string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_template#template_data DataAkamaiPropertyRulesTemplate#template_data}
  */
  readonly templateData: string;
  /**
  * Directory points to a folder, which contains snippets to include into template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_template#template_dir DataAkamaiPropertyRulesTemplate#template_dir}
  */
  readonly templateDir: string;
}

export function dataAkamaiPropertyRulesTemplateTemplateToTerraform(struct?: DataAkamaiPropertyRulesTemplateTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template_data: cdktf.stringToTerraform(struct!.templateData),
    template_dir: cdktf.stringToTerraform(struct!.templateDir),
  }
}


export function dataAkamaiPropertyRulesTemplateTemplateToHclTerraform(struct?: DataAkamaiPropertyRulesTemplateTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template_data: {
      value: cdktf.stringToHclTerraform(struct!.templateData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_dir: {
      value: cdktf.stringToHclTerraform(struct!.templateDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiPropertyRulesTemplateTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiPropertyRulesTemplateTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templateData !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateData = this._templateData;
    }
    if (this._templateDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateDir = this._templateDir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiPropertyRulesTemplateTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._templateData = undefined;
      this._templateDir = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._templateData = value.templateData;
      this._templateDir = value.templateDir;
    }
  }

  // template_data - computed: false, optional: false, required: true
  private _templateData?: string; 
  public get templateData() {
    return this.getStringAttribute('template_data');
  }
  public set templateData(value: string) {
    this._templateData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDataInput() {
    return this._templateData;
  }

  // template_dir - computed: false, optional: false, required: true
  private _templateDir?: string; 
  public get templateDir() {
    return this.getStringAttribute('template_dir');
  }
  public set templateDir(value: string) {
    this._templateDir = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDirInput() {
    return this._templateDir;
  }
}

export class DataAkamaiPropertyRulesTemplateTemplateList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiPropertyRulesTemplateTemplate[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiPropertyRulesTemplateTemplateOutputReference {
    return new DataAkamaiPropertyRulesTemplateTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiPropertyRulesTemplateVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_template#name DataAkamaiPropertyRulesTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_template#type DataAkamaiPropertyRulesTemplate#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_template#value DataAkamaiPropertyRulesTemplate#value}
  */
  readonly value: string;
}

export function dataAkamaiPropertyRulesTemplateVariablesToTerraform(struct?: DataAkamaiPropertyRulesTemplateVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataAkamaiPropertyRulesTemplateVariablesToHclTerraform(struct?: DataAkamaiPropertyRulesTemplateVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiPropertyRulesTemplateVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiPropertyRulesTemplateVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiPropertyRulesTemplateVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataAkamaiPropertyRulesTemplateVariablesList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiPropertyRulesTemplateVariables[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiPropertyRulesTemplateVariablesOutputReference {
    return new DataAkamaiPropertyRulesTemplateVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_template akamai_property_rules_template}
*/
export class DataAkamaiPropertyRulesTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_property_rules_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiPropertyRulesTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiPropertyRulesTemplate to import
  * @param importFromId The id of the existing DataAkamaiPropertyRulesTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiPropertyRulesTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_property_rules_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/property_rules_template akamai_property_rules_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiPropertyRulesTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiPropertyRulesTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akamai_property_rules_template',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._followLinks = config.followLinks;
    this._id = config.id;
    this._templateFile = config.templateFile;
    this._varDefinitionFile = config.varDefinitionFile;
    this._varValuesFile = config.varValuesFile;
    this._template.internalValue = config.template;
    this._variables.internalValue = config.variables;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // follow_links - computed: false, optional: true, required: false
  private _followLinks?: boolean | cdktf.IResolvable; 
  public get followLinks() {
    return this.getBooleanAttribute('follow_links');
  }
  public set followLinks(value: boolean | cdktf.IResolvable) {
    this._followLinks = value;
  }
  public resetFollowLinks() {
    this._followLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followLinksInput() {
    return this._followLinks;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // template_file - computed: false, optional: true, required: false
  private _templateFile?: string; 
  public get templateFile() {
    return this.getStringAttribute('template_file');
  }
  public set templateFile(value: string) {
    this._templateFile = value;
  }
  public resetTemplateFile() {
    this._templateFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateFileInput() {
    return this._templateFile;
  }

  // var_definition_file - computed: false, optional: true, required: false
  private _varDefinitionFile?: string; 
  public get varDefinitionFile() {
    return this.getStringAttribute('var_definition_file');
  }
  public set varDefinitionFile(value: string) {
    this._varDefinitionFile = value;
  }
  public resetVarDefinitionFile() {
    this._varDefinitionFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varDefinitionFileInput() {
    return this._varDefinitionFile;
  }

  // var_values_file - computed: false, optional: true, required: false
  private _varValuesFile?: string; 
  public get varValuesFile() {
    return this.getStringAttribute('var_values_file');
  }
  public set varValuesFile(value: string) {
    this._varValuesFile = value;
  }
  public resetVarValuesFile() {
    this._varValuesFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varValuesFileInput() {
    return this._varValuesFile;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataAkamaiPropertyRulesTemplateTemplateList(this, "template", true);
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataAkamaiPropertyRulesTemplateTemplate[] | cdktf.IResolvable) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new DataAkamaiPropertyRulesTemplateVariablesList(this, "variables", true);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: DataAkamaiPropertyRulesTemplateVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      follow_links: cdktf.booleanToTerraform(this._followLinks),
      id: cdktf.stringToTerraform(this._id),
      template_file: cdktf.stringToTerraform(this._templateFile),
      var_definition_file: cdktf.stringToTerraform(this._varDefinitionFile),
      var_values_file: cdktf.stringToTerraform(this._varValuesFile),
      template: cdktf.listMapper(dataAkamaiPropertyRulesTemplateTemplateToTerraform, true)(this._template.internalValue),
      variables: cdktf.listMapper(dataAkamaiPropertyRulesTemplateVariablesToTerraform, true)(this._variables.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      follow_links: {
        value: cdktf.booleanToHclTerraform(this._followLinks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_file: {
        value: cdktf.stringToHclTerraform(this._templateFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      var_definition_file: {
        value: cdktf.stringToHclTerraform(this._varDefinitionFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      var_values_file: {
        value: cdktf.stringToHclTerraform(this._varValuesFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.listMapperHcl(dataAkamaiPropertyRulesTemplateTemplateToHclTerraform, true)(this._template.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAkamaiPropertyRulesTemplateTemplateList",
      },
      variables: {
        value: cdktf.listMapperHcl(dataAkamaiPropertyRulesTemplateVariablesToHclTerraform, true)(this._variables.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAkamaiPropertyRulesTemplateVariablesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
