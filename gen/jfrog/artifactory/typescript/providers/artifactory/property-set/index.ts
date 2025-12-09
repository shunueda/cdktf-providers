// https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/property_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PropertySetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Property set name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/property_set#name PropertySet#name}
  */
  readonly name: string;
  /**
  * Defines if the list visible and assignable to the repository or artifact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/property_set#visible PropertySet#visible}
  */
  readonly visible?: boolean | cdktf.IResolvable;
  /**
  * property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/property_set#property PropertySet#property}
  */
  readonly property?: PropertySetProperty[] | cdktf.IResolvable;
}
export interface PropertySetPropertyPredefinedValue {
  /**
  * Whether the value is selected by default in the UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/property_set#default_value PropertySet#default_value}
  */
  readonly defaultValue: boolean | cdktf.IResolvable;
  /**
  * Predefined property name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/property_set#name PropertySet#name}
  */
  readonly name: string;
}

export function propertySetPropertyPredefinedValueToTerraform(struct?: PropertySetPropertyPredefinedValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.booleanToTerraform(struct!.defaultValue),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function propertySetPropertyPredefinedValueToHclTerraform(struct?: PropertySetPropertyPredefinedValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.booleanToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class PropertySetPropertyPredefinedValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PropertySetPropertyPredefinedValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PropertySetPropertyPredefinedValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
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
      this._name = value.name;
    }
  }

  // default_value - computed: false, optional: false, required: true
  private _defaultValue?: boolean | cdktf.IResolvable; 
  public get defaultValue() {
    return this.getBooleanAttribute('default_value');
  }
  public set defaultValue(value: boolean | cdktf.IResolvable) {
    this._defaultValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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

export class PropertySetPropertyPredefinedValueList extends cdktf.ComplexList {
  public internalValue? : PropertySetPropertyPredefinedValue[] | cdktf.IResolvable

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
  public get(index: number): PropertySetPropertyPredefinedValueOutputReference {
    return new PropertySetPropertyPredefinedValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PropertySetProperty {
  /**
  * Disables `multiple_choice` if set to `false` at the same time with `multiple_choice` set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/property_set#closed_predefined_values PropertySet#closed_predefined_values}
  */
  readonly closedPredefinedValues?: boolean | cdktf.IResolvable;
  /**
  * Whether or not user can select multiple values. `closed_predefined_values` should be set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/property_set#multiple_choice PropertySet#multiple_choice}
  */
  readonly multipleChoice?: boolean | cdktf.IResolvable;
  /**
  * The name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/property_set#name PropertySet#name}
  */
  readonly name: string;
  /**
  * predefined_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/property_set#predefined_value PropertySet#predefined_value}
  */
  readonly predefinedValue?: PropertySetPropertyPredefinedValue[] | cdktf.IResolvable;
}

export function propertySetPropertyToTerraform(struct?: PropertySetProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    closed_predefined_values: cdktf.booleanToTerraform(struct!.closedPredefinedValues),
    multiple_choice: cdktf.booleanToTerraform(struct!.multipleChoice),
    name: cdktf.stringToTerraform(struct!.name),
    predefined_value: cdktf.listMapper(propertySetPropertyPredefinedValueToTerraform, true)(struct!.predefinedValue),
  }
}


export function propertySetPropertyToHclTerraform(struct?: PropertySetProperty | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    closed_predefined_values: {
      value: cdktf.booleanToHclTerraform(struct!.closedPredefinedValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    multiple_choice: {
      value: cdktf.booleanToHclTerraform(struct!.multipleChoice),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    predefined_value: {
      value: cdktf.listMapperHcl(propertySetPropertyPredefinedValueToHclTerraform, true)(struct!.predefinedValue),
      isBlock: true,
      type: "set",
      storageClassType: "PropertySetPropertyPredefinedValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PropertySetPropertyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PropertySetProperty | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._closedPredefinedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.closedPredefinedValues = this._closedPredefinedValues;
    }
    if (this._multipleChoice !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleChoice = this._multipleChoice;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._predefinedValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedValue = this._predefinedValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PropertySetProperty | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._closedPredefinedValues = undefined;
      this._multipleChoice = undefined;
      this._name = undefined;
      this._predefinedValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._closedPredefinedValues = value.closedPredefinedValues;
      this._multipleChoice = value.multipleChoice;
      this._name = value.name;
      this._predefinedValue.internalValue = value.predefinedValue;
    }
  }

  // closed_predefined_values - computed: true, optional: true, required: false
  private _closedPredefinedValues?: boolean | cdktf.IResolvable; 
  public get closedPredefinedValues() {
    return this.getBooleanAttribute('closed_predefined_values');
  }
  public set closedPredefinedValues(value: boolean | cdktf.IResolvable) {
    this._closedPredefinedValues = value;
  }
  public resetClosedPredefinedValues() {
    this._closedPredefinedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closedPredefinedValuesInput() {
    return this._closedPredefinedValues;
  }

  // multiple_choice - computed: true, optional: true, required: false
  private _multipleChoice?: boolean | cdktf.IResolvable; 
  public get multipleChoice() {
    return this.getBooleanAttribute('multiple_choice');
  }
  public set multipleChoice(value: boolean | cdktf.IResolvable) {
    this._multipleChoice = value;
  }
  public resetMultipleChoice() {
    this._multipleChoice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleChoiceInput() {
    return this._multipleChoice;
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

  // predefined_value - computed: false, optional: true, required: false
  private _predefinedValue = new PropertySetPropertyPredefinedValueList(this, "predefined_value", true);
  public get predefinedValue() {
    return this._predefinedValue;
  }
  public putPredefinedValue(value: PropertySetPropertyPredefinedValue[] | cdktf.IResolvable) {
    this._predefinedValue.internalValue = value;
  }
  public resetPredefinedValue() {
    this._predefinedValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedValueInput() {
    return this._predefinedValue.internalValue;
  }
}

export class PropertySetPropertyList extends cdktf.ComplexList {
  public internalValue? : PropertySetProperty[] | cdktf.IResolvable

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
  public get(index: number): PropertySetPropertyOutputReference {
    return new PropertySetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/property_set artifactory_property_set}
*/
export class PropertySet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_property_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PropertySet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PropertySet to import
  * @param importFromId The id of the existing PropertySet that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/property_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PropertySet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_property_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/property_set artifactory_property_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PropertySetConfig
  */
  public constructor(scope: Construct, id: string, config: PropertySetConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_property_set',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.11.1',
        providerVersionConstraint: '12.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._visible = config.visible;
    this._property.internalValue = config.property;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // visible - computed: true, optional: true, required: false
  private _visible?: boolean | cdktf.IResolvable; 
  public get visible() {
    return this.getBooleanAttribute('visible');
  }
  public set visible(value: boolean | cdktf.IResolvable) {
    this._visible = value;
  }
  public resetVisible() {
    this._visible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleInput() {
    return this._visible;
  }

  // property - computed: false, optional: true, required: false
  private _property = new PropertySetPropertyList(this, "property", true);
  public get property() {
    return this._property;
  }
  public putProperty(value: PropertySetProperty[] | cdktf.IResolvable) {
    this._property.internalValue = value;
  }
  public resetProperty() {
    this._property.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      visible: cdktf.booleanToTerraform(this._visible),
      property: cdktf.listMapper(propertySetPropertyToTerraform, true)(this._property.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visible: {
        value: cdktf.booleanToHclTerraform(this._visible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      property: {
        value: cdktf.listMapperHcl(propertySetPropertyToHclTerraform, true)(this._property.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PropertySetPropertyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
