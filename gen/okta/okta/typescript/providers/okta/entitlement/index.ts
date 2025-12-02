// https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/entitlement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EntitlementConfig extends cdktf.TerraformMetaArguments {
  /**
  * The data type of the entitlement property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/entitlement#data_type Entitlement#data_type}
  */
  readonly dataType: string;
  /**
  * The description of the entitlement property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/entitlement#description Entitlement#description}
  */
  readonly description?: string;
  /**
  * The value of an entitlement property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/entitlement#external_value Entitlement#external_value}
  */
  readonly externalValue: string;
  /**
  * The property that determines if the entitlement property can hold multiple values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/entitlement#multi_value Entitlement#multi_value}
  */
  readonly multiValue: boolean | cdktf.IResolvable;
  /**
  * The name of the entitlement property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/entitlement#name Entitlement#name}
  */
  readonly name?: string;
  /**
  * The Okta app instance, in ORN format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/entitlement#parent_resource_orn Entitlement#parent_resource_orn}
  */
  readonly parentResourceOrn?: string;
  /**
  * The value of the entitlement property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/entitlement#value Entitlement#value}
  */
  readonly value?: string;
  /**
  * parent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/entitlement#parent Entitlement#parent}
  */
  readonly parent: EntitlementParent;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/entitlement#values Entitlement#values}
  */
  readonly values?: EntitlementValues[] | cdktf.IResolvable;
}
export interface EntitlementParent {
  /**
  * The Okta app.id of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/entitlement#external_id Entitlement#external_id}
  */
  readonly externalId: string;
  /**
  * The type of resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/entitlement#type Entitlement#type}
  */
  readonly type: string;
}

export function entitlementParentToTerraform(struct?: EntitlementParent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function entitlementParentToHclTerraform(struct?: EntitlementParent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EntitlementParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EntitlementParent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EntitlementParent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalId = value.externalId;
      this._type = value.type;
    }
  }

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface EntitlementValues {
  /**
  * The description of the entitlement value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/entitlement#description Entitlement#description}
  */
  readonly description?: string;
  /**
  * The value of an entitlement property value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/entitlement#external_value Entitlement#external_value}
  */
  readonly externalValue?: string;
  /**
  * Collection of entitlement values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/entitlement#id Entitlement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The display name for an entitlement value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/entitlement#name Entitlement#name}
  */
  readonly name?: string;
}

export function entitlementValuesToTerraform(struct?: EntitlementValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    external_value: cdktf.stringToTerraform(struct!.externalValue),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function entitlementValuesToHclTerraform(struct?: EntitlementValues | cdktf.IResolvable): any {
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
    external_value: {
      value: cdktf.stringToHclTerraform(struct!.externalValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class EntitlementValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EntitlementValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._externalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalValue = this._externalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EntitlementValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._externalValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._externalValue = value.externalValue;
      this._id = value.id;
      this._name = value.name;
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

  // external_value - computed: false, optional: true, required: false
  private _externalValue?: string; 
  public get externalValue() {
    return this.getStringAttribute('external_value');
  }
  public set externalValue(value: string) {
    this._externalValue = value;
  }
  public resetExternalValue() {
    this._externalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalValueInput() {
    return this._externalValue;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class EntitlementValuesList extends cdktf.ComplexList {
  public internalValue? : EntitlementValues[] | cdktf.IResolvable

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
  public get(index: number): EntitlementValuesOutputReference {
    return new EntitlementValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/entitlement okta_entitlement}
*/
export class Entitlement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_entitlement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Entitlement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Entitlement to import
  * @param importFromId The id of the existing Entitlement that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/entitlement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Entitlement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_entitlement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/entitlement okta_entitlement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EntitlementConfig
  */
  public constructor(scope: Construct, id: string, config: EntitlementConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_entitlement',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.1',
        providerVersionConstraint: '6.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataType = config.dataType;
    this._description = config.description;
    this._externalValue = config.externalValue;
    this._multiValue = config.multiValue;
    this._name = config.name;
    this._parentResourceOrn = config.parentResourceOrn;
    this._value = config.value;
    this._parent.internalValue = config.parent;
    this._values.internalValue = config.values;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_type - computed: false, optional: false, required: true
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
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

  // external_value - computed: false, optional: false, required: true
  private _externalValue?: string; 
  public get externalValue() {
    return this.getStringAttribute('external_value');
  }
  public set externalValue(value: string) {
    this._externalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalValueInput() {
    return this._externalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multi_value - computed: false, optional: false, required: true
  private _multiValue?: boolean | cdktf.IResolvable; 
  public get multiValue() {
    return this.getBooleanAttribute('multi_value');
  }
  public set multiValue(value: boolean | cdktf.IResolvable) {
    this._multiValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValueInput() {
    return this._multiValue;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parent_resource_orn - computed: true, optional: true, required: false
  private _parentResourceOrn?: string; 
  public get parentResourceOrn() {
    return this.getStringAttribute('parent_resource_orn');
  }
  public set parentResourceOrn(value: string) {
    this._parentResourceOrn = value;
  }
  public resetParentResourceOrn() {
    this._parentResourceOrn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentResourceOrnInput() {
    return this._parentResourceOrn;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // parent - computed: false, optional: false, required: true
  private _parent = new EntitlementParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }
  public putParent(value: EntitlementParent) {
    this._parent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent.internalValue;
  }

  // values - computed: false, optional: true, required: false
  private _values = new EntitlementValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: EntitlementValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_type: cdktf.stringToTerraform(this._dataType),
      description: cdktf.stringToTerraform(this._description),
      external_value: cdktf.stringToTerraform(this._externalValue),
      multi_value: cdktf.booleanToTerraform(this._multiValue),
      name: cdktf.stringToTerraform(this._name),
      parent_resource_orn: cdktf.stringToTerraform(this._parentResourceOrn),
      value: cdktf.stringToTerraform(this._value),
      parent: entitlementParentToTerraform(this._parent.internalValue),
      values: cdktf.listMapper(entitlementValuesToTerraform, true)(this._values.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_type: {
        value: cdktf.stringToHclTerraform(this._dataType),
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
      external_value: {
        value: cdktf.stringToHclTerraform(this._externalValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_value: {
        value: cdktf.booleanToHclTerraform(this._multiValue),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_resource_orn: {
        value: cdktf.stringToHclTerraform(this._parentResourceOrn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: entitlementParentToHclTerraform(this._parent.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EntitlementParent",
      },
      values: {
        value: cdktf.listMapperHcl(entitlementValuesToHclTerraform, true)(this._values.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EntitlementValuesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
