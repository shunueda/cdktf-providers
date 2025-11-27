// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/library_variable_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LibraryVariableSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of this library variable set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/library_variable_set#description LibraryVariableSet#description}
  */
  readonly description?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/library_variable_set#name LibraryVariableSet#name}
  */
  readonly name: string;
  /**
  * The space ID associated with this library variable set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/library_variable_set#space_id LibraryVariableSet#space_id}
  */
  readonly spaceId?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/library_variable_set#template LibraryVariableSet#template}
  */
  readonly template?: LibraryVariableSetTemplate[] | cdktf.IResolvable;
}
export interface LibraryVariableSetTemplate {
  /**
  * A default value for the parameter, if applicable. This can be a hard-coded value or a variable reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/library_variable_set#default_value LibraryVariableSet#default_value}
  */
  readonly defaultValue?: string;
  /**
  * The display settings for the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/library_variable_set#display_settings LibraryVariableSet#display_settings}
  */
  readonly displaySettings?: { [key: string]: string };
  /**
  * The help presented alongside the parameter input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/library_variable_set#help_text LibraryVariableSet#help_text}
  */
  readonly helpText?: string;
  /**
  * The label shown beside the parameter when presented in the deployment process. Example: `Server name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/library_variable_set#label LibraryVariableSet#label}
  */
  readonly label?: string;
  /**
  * The name of the variable set by the parameter. The name can contain letters, digits, dashes and periods. Example: `ServerName`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/library_variable_set#name LibraryVariableSet#name}
  */
  readonly name: string;
}

export function libraryVariableSetTemplateToTerraform(struct?: LibraryVariableSetTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    display_settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.displaySettings),
    help_text: cdktf.stringToTerraform(struct!.helpText),
    label: cdktf.stringToTerraform(struct!.label),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function libraryVariableSetTemplateToHclTerraform(struct?: LibraryVariableSetTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.displaySettings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    help_text: {
      value: cdktf.stringToHclTerraform(struct!.helpText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LibraryVariableSetTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LibraryVariableSetTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._displaySettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.displaySettings = this._displaySettings;
    }
    if (this._helpText !== undefined) {
      hasAnyValues = true;
      internalValueResult.helpText = this._helpText;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LibraryVariableSetTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._displaySettings = undefined;
      this._helpText = undefined;
      this._label = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._displaySettings = value.displaySettings;
      this._helpText = value.helpText;
      this._label = value.label;
      this._name = value.name;
    }
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // display_settings - computed: false, optional: true, required: false
  private _displaySettings?: { [key: string]: string }; 
  public get displaySettings() {
    return this.getStringMapAttribute('display_settings');
  }
  public set displaySettings(value: { [key: string]: string }) {
    this._displaySettings = value;
  }
  public resetDisplaySettings() {
    this._displaySettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displaySettingsInput() {
    return this._displaySettings;
  }

  // help_text - computed: true, optional: true, required: false
  private _helpText?: string; 
  public get helpText() {
    return this.getStringAttribute('help_text');
  }
  public set helpText(value: string) {
    this._helpText = value;
  }
  public resetHelpText() {
    this._helpText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpTextInput() {
    return this._helpText;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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
}

export class LibraryVariableSetTemplateList extends cdktf.ComplexList {
  public internalValue? : LibraryVariableSetTemplate[] | cdktf.IResolvable

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
  public get(index: number): LibraryVariableSetTemplateOutputReference {
    return new LibraryVariableSetTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/library_variable_set octopusdeploy_library_variable_set}
*/
export class LibraryVariableSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_library_variable_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LibraryVariableSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LibraryVariableSet to import
  * @param importFromId The id of the existing LibraryVariableSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/library_variable_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LibraryVariableSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_library_variable_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/library_variable_set octopusdeploy_library_variable_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LibraryVariableSetConfig
  */
  public constructor(scope: Construct, id: string, config: LibraryVariableSetConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_library_variable_set',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
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
    this._name = config.name;
    this._spaceId = config.spaceId;
    this._template.internalValue = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // template_ids - computed: true, optional: false, required: false
  private _templateIds = new cdktf.StringMap(this, "template_ids");
  public get templateIds() {
    return this._templateIds;
  }

  // variable_set_id - computed: true, optional: false, required: false
  public get variableSetId() {
    return this.getStringAttribute('variable_set_id');
  }

  // template - computed: false, optional: true, required: false
  private _template = new LibraryVariableSetTemplateList(this, "template", false);
  public get template() {
    return this._template;
  }
  public putTemplate(value: LibraryVariableSetTemplate[] | cdktf.IResolvable) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      space_id: cdktf.stringToTerraform(this._spaceId),
      template: cdktf.listMapper(libraryVariableSetTemplateToTerraform, true)(this._template.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.listMapperHcl(libraryVariableSetTemplateToHclTerraform, true)(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LibraryVariableSetTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
