// https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/component_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComponentTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique alias of the component type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/component_type#alias ComponentType#alias}
  */
  readonly alias: string;
  /**
  * The description of the component type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/component_type#description ComponentType#description}
  */
  readonly description?: string;
  /**
  * The icon associated with the component type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/component_type#icon ComponentType#icon}
  */
  readonly icon?: ComponentTypeIcon;
  /**
  * The unique name of the component type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/component_type#name ComponentType#name}
  */
  readonly name: string;
  /**
  * The properties of this component type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/component_type#properties ComponentType#properties}
  */
  readonly properties: { [key: string]: ComponentTypeProperties } | cdktf.IResolvable;
  /**
  * The relationships that can be defined for this component type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/component_type#relationships ComponentType#relationships}
  */
  readonly relationships?: { [key: string]: ComponentTypeRelationships } | cdktf.IResolvable;
}
export interface ComponentTypeIcon {
  /**
  * The color, represented as a hexcode, for the icon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/component_type#color ComponentType#color}
  */
  readonly color: string;
  /**
  * The name of the icon in Phosphor icons for Vue, e.g. `PhBird`. See https://phosphoricons.com/ for a full list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/component_type#name ComponentType#name}
  */
  readonly name: string;
}

export function componentTypeIconToTerraform(struct?: ComponentTypeIcon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function componentTypeIconToHclTerraform(struct?: ComponentTypeIcon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
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

export class ComponentTypeIconOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComponentTypeIcon | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComponentTypeIcon | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._name = value.name;
    }
  }

  // color - computed: false, optional: false, required: true
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
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
export interface ComponentTypeProperties {
  /**
  * Whether or not the property is allowed to be set in opslevel.yml config files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/component_type#allowed_in_config_files ComponentType#allowed_in_config_files}
  */
  readonly allowedInConfigFiles?: boolean | cdktf.IResolvable;
  /**
  * The description of the property definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/component_type#description ComponentType#description}
  */
  readonly description?: string;
  /**
  * The display status of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/component_type#display_status ComponentType#display_status}
  */
  readonly displayStatus?: string;
  /**
  * Restricts what sources are able to assign values to this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/component_type#locked_status ComponentType#locked_status}
  */
  readonly lockedStatus?: string;
  /**
  * The name of the property definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/component_type#name ComponentType#name}
  */
  readonly name: string;
  /**
  * The schema of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/component_type#schema ComponentType#schema}
  */
  readonly schema?: string;
}

export function componentTypePropertiesToTerraform(struct?: ComponentTypeProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_in_config_files: cdktf.booleanToTerraform(struct!.allowedInConfigFiles),
    description: cdktf.stringToTerraform(struct!.description),
    display_status: cdktf.stringToTerraform(struct!.displayStatus),
    locked_status: cdktf.stringToTerraform(struct!.lockedStatus),
    name: cdktf.stringToTerraform(struct!.name),
    schema: cdktf.stringToTerraform(struct!.schema),
  }
}


export function componentTypePropertiesToHclTerraform(struct?: ComponentTypeProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_in_config_files: {
      value: cdktf.booleanToHclTerraform(struct!.allowedInConfigFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_status: {
      value: cdktf.stringToHclTerraform(struct!.displayStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locked_status: {
      value: cdktf.stringToHclTerraform(struct!.lockedStatus),
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
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComponentTypePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): ComponentTypeProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedInConfigFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedInConfigFiles = this._allowedInConfigFiles;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayStatus = this._displayStatus;
    }
    if (this._lockedStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.lockedStatus = this._lockedStatus;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComponentTypeProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedInConfigFiles = undefined;
      this._description = undefined;
      this._displayStatus = undefined;
      this._lockedStatus = undefined;
      this._name = undefined;
      this._schema = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedInConfigFiles = value.allowedInConfigFiles;
      this._description = value.description;
      this._displayStatus = value.displayStatus;
      this._lockedStatus = value.lockedStatus;
      this._name = value.name;
      this._schema = value.schema;
    }
  }

  // allowed_in_config_files - computed: true, optional: true, required: false
  private _allowedInConfigFiles?: boolean | cdktf.IResolvable; 
  public get allowedInConfigFiles() {
    return this.getBooleanAttribute('allowed_in_config_files');
  }
  public set allowedInConfigFiles(value: boolean | cdktf.IResolvable) {
    this._allowedInConfigFiles = value;
  }
  public resetAllowedInConfigFiles() {
    this._allowedInConfigFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInConfigFilesInput() {
    return this._allowedInConfigFiles;
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

  // display_status - computed: true, optional: true, required: false
  private _displayStatus?: string; 
  public get displayStatus() {
    return this.getStringAttribute('display_status');
  }
  public set displayStatus(value: string) {
    this._displayStatus = value;
  }
  public resetDisplayStatus() {
    this._displayStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayStatusInput() {
    return this._displayStatus;
  }

  // locked_status - computed: true, optional: true, required: false
  private _lockedStatus?: string; 
  public get lockedStatus() {
    return this.getStringAttribute('locked_status');
  }
  public set lockedStatus(value: string) {
    this._lockedStatus = value;
  }
  public resetLockedStatus() {
    this._lockedStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedStatusInput() {
    return this._lockedStatus;
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

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }
}

export class ComponentTypePropertiesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: ComponentTypeProperties } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): ComponentTypePropertiesOutputReference {
    return new ComponentTypePropertiesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface ComponentTypeRelationships {
  /**
  * The types of resources that can be selected for this relationship definition. Can include any component type alias on your account or 'team'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/component_type#allowed_types ComponentType#allowed_types}
  */
  readonly allowedTypes: string[];
  /**
  * The description of the relationship definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/component_type#description ComponentType#description}
  */
  readonly description?: string;
  /**
  * The display name of the relationship definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/component_type#name ComponentType#name}
  */
  readonly name: string;
}

export function componentTypeRelationshipsToTerraform(struct?: ComponentTypeRelationships | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedTypes),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function componentTypeRelationshipsToHclTerraform(struct?: ComponentTypeRelationships | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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

export class ComponentTypeRelationshipsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): ComponentTypeRelationships | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedTypes = this._allowedTypes;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComponentTypeRelationships | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedTypes = undefined;
      this._description = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedTypes = value.allowedTypes;
      this._description = value.description;
      this._name = value.name;
    }
  }

  // allowed_categories - computed: true, optional: false, required: false
  public get allowedCategories() {
    return this.getListAttribute('allowed_categories');
  }

  // allowed_types - computed: false, optional: false, required: true
  private _allowedTypes?: string[]; 
  public get allowedTypes() {
    return this.getListAttribute('allowed_types');
  }
  public set allowedTypes(value: string[]) {
    this._allowedTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedTypesInput() {
    return this._allowedTypes;
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

export class ComponentTypeRelationshipsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: ComponentTypeRelationships } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): ComponentTypeRelationshipsOutputReference {
    return new ComponentTypeRelationshipsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/component_type opslevel_component_type}
*/
export class ComponentType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_component_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComponentType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComponentType to import
  * @param importFromId The id of the existing ComponentType that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/component_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComponentType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_component_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/component_type opslevel_component_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComponentTypeConfig
  */
  public constructor(scope: Construct, id: string, config: ComponentTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'opslevel_component_type',
      terraformGeneratorMetadata: {
        providerName: 'opslevel',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._description = config.description;
    this._icon.internalValue = config.icon;
    this._name = config.name;
    this._properties.internalValue = config.properties;
    this._relationships.internalValue = config.relationships;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
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

  // icon - computed: false, optional: true, required: false
  private _icon = new ComponentTypeIconOutputReference(this, "icon");
  public get icon() {
    return this._icon;
  }
  public putIcon(value: ComponentTypeIcon) {
    this._icon.internalValue = value;
  }
  public resetIcon() {
    this._icon.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon.internalValue;
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

  // properties - computed: false, optional: false, required: true
  private _properties = new ComponentTypePropertiesMap(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: { [key: string]: ComponentTypeProperties } | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // relationships - computed: false, optional: true, required: false
  private _relationships = new ComponentTypeRelationshipsMap(this, "relationships");
  public get relationships() {
    return this._relationships;
  }
  public putRelationships(value: { [key: string]: ComponentTypeRelationships } | cdktf.IResolvable) {
    this._relationships.internalValue = value;
  }
  public resetRelationships() {
    this._relationships.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationshipsInput() {
    return this._relationships.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      description: cdktf.stringToTerraform(this._description),
      icon: componentTypeIconToTerraform(this._icon.internalValue),
      name: cdktf.stringToTerraform(this._name),
      properties: cdktf.hashMapper(componentTypePropertiesToTerraform)(this._properties.internalValue),
      relationships: cdktf.hashMapper(componentTypeRelationshipsToTerraform)(this._relationships.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon: {
        value: componentTypeIconToHclTerraform(this._icon.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComponentTypeIcon",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      properties: {
        value: cdktf.hashMapperHcl(componentTypePropertiesToHclTerraform)(this._properties.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "ComponentTypePropertiesMap",
      },
      relationships: {
        value: cdktf.hashMapperHcl(componentTypeRelationshipsToHclTerraform)(this._relationships.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "ComponentTypeRelationshipsMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
