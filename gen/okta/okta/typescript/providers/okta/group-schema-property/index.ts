// https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupSchemaPropertyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Array of values that an array property's items can be set to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#array_enum GroupSchemaProperty#array_enum}
  */
  readonly arrayEnum?: string[];
  /**
  * The type of the array elements if `type` is set to `array`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#array_type GroupSchemaProperty#array_type}
  */
  readonly arrayType?: string;
  /**
  * The description of the user schema property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#description GroupSchemaProperty#description}
  */
  readonly description?: string;
  /**
  * Array of values a primitive property can be set to. See `array_enum` for arrays.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#enum GroupSchemaProperty#enum}
  */
  readonly enum?: string[];
  /**
  * External name of the user schema property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#external_name GroupSchemaProperty#external_name}
  */
  readonly externalName?: string;
  /**
  * External namespace of the user schema property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#external_namespace GroupSchemaProperty#external_namespace}
  */
  readonly externalNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#id GroupSchemaProperty#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Subschema unique string identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#index GroupSchemaProperty#index}
  */
  readonly index: string;
  /**
  * Master priority for the group schema property. It can be set to `PROFILE_MASTER`, `OVERRIDE` or `OKTA`. Default: `PROFILE_MASTER`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#master GroupSchemaProperty#master}
  */
  readonly master?: string;
  /**
  * The maximum length of the user property value. Only applies to type `string`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#max_length GroupSchemaProperty#max_length}
  */
  readonly maxLength?: number;
  /**
  * The minimum length of the user property value. Only applies to type `string`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#min_length GroupSchemaProperty#min_length}
  */
  readonly minLength?: number;
  /**
  * Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#permissions GroupSchemaProperty#permissions}
  */
  readonly permissions?: string;
  /**
  * Whether the subschema is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#required GroupSchemaProperty#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#scope GroupSchemaProperty#scope}
  */
  readonly scope?: string;
  /**
  * Subschema title (display name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#title GroupSchemaProperty#title}
  */
  readonly title: string;
  /**
  * The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#type GroupSchemaProperty#type}
  */
  readonly type: string;
  /**
  * Whether the property should be unique. It can be set to `UNIQUE_VALIDATED` or `NOT_UNIQUE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#unique GroupSchemaProperty#unique}
  */
  readonly unique?: string;
  /**
  * array_one_of block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#array_one_of GroupSchemaProperty#array_one_of}
  */
  readonly arrayOneOf?: GroupSchemaPropertyArrayOneOf[] | cdktf.IResolvable;
  /**
  * master_override_priority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#master_override_priority GroupSchemaProperty#master_override_priority}
  */
  readonly masterOverridePriority?: GroupSchemaPropertyMasterOverridePriority[] | cdktf.IResolvable;
  /**
  * one_of block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#one_of GroupSchemaProperty#one_of}
  */
  readonly oneOf?: GroupSchemaPropertyOneOf[] | cdktf.IResolvable;
}
export interface GroupSchemaPropertyArrayOneOf {
  /**
  * Value mapping to member of `array_enum`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#const GroupSchemaProperty#const}
  */
  readonly const: string;
  /**
  * Display name for the enum value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#title GroupSchemaProperty#title}
  */
  readonly title: string;
}

export function groupSchemaPropertyArrayOneOfToTerraform(struct?: GroupSchemaPropertyArrayOneOf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    const: cdktf.stringToTerraform(struct!.const),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function groupSchemaPropertyArrayOneOfToHclTerraform(struct?: GroupSchemaPropertyArrayOneOf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    const: {
      value: cdktf.stringToHclTerraform(struct!.const),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupSchemaPropertyArrayOneOfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupSchemaPropertyArrayOneOf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._const !== undefined) {
      hasAnyValues = true;
      internalValueResult.const = this._const;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSchemaPropertyArrayOneOf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._const = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._const = value.const;
      this._title = value.title;
    }
  }

  // const - computed: false, optional: false, required: true
  private _const?: string; 
  public get const() {
    return this.getStringAttribute('const');
  }
  public set const(value: string) {
    this._const = value;
  }
  // Temporarily expose input value. Use with caution.
  public get constInput() {
    return this._const;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}

export class GroupSchemaPropertyArrayOneOfList extends cdktf.ComplexList {
  public internalValue? : GroupSchemaPropertyArrayOneOf[] | cdktf.IResolvable

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
  public get(index: number): GroupSchemaPropertyArrayOneOfOutputReference {
    return new GroupSchemaPropertyArrayOneOfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupSchemaPropertyMasterOverridePriority {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#type GroupSchemaProperty#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#value GroupSchemaProperty#value}
  */
  readonly value: string;
}

export function groupSchemaPropertyMasterOverridePriorityToTerraform(struct?: GroupSchemaPropertyMasterOverridePriority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function groupSchemaPropertyMasterOverridePriorityToHclTerraform(struct?: GroupSchemaPropertyMasterOverridePriority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class GroupSchemaPropertyMasterOverridePriorityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupSchemaPropertyMasterOverridePriority | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: GroupSchemaPropertyMasterOverridePriority | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._type = value.type;
      this._value = value.value;
    }
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

export class GroupSchemaPropertyMasterOverridePriorityList extends cdktf.ComplexList {
  public internalValue? : GroupSchemaPropertyMasterOverridePriority[] | cdktf.IResolvable

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
  public get(index: number): GroupSchemaPropertyMasterOverridePriorityOutputReference {
    return new GroupSchemaPropertyMasterOverridePriorityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupSchemaPropertyOneOf {
  /**
  * Enum value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#const GroupSchemaProperty#const}
  */
  readonly const: string;
  /**
  * Enum title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#title GroupSchemaProperty#title}
  */
  readonly title: string;
}

export function groupSchemaPropertyOneOfToTerraform(struct?: GroupSchemaPropertyOneOf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    const: cdktf.stringToTerraform(struct!.const),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function groupSchemaPropertyOneOfToHclTerraform(struct?: GroupSchemaPropertyOneOf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    const: {
      value: cdktf.stringToHclTerraform(struct!.const),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupSchemaPropertyOneOfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupSchemaPropertyOneOf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._const !== undefined) {
      hasAnyValues = true;
      internalValueResult.const = this._const;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupSchemaPropertyOneOf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._const = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._const = value.const;
      this._title = value.title;
    }
  }

  // const - computed: false, optional: false, required: true
  private _const?: string; 
  public get const() {
    return this.getStringAttribute('const');
  }
  public set const(value: string) {
    this._const = value;
  }
  // Temporarily expose input value. Use with caution.
  public get constInput() {
    return this._const;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}

export class GroupSchemaPropertyOneOfList extends cdktf.ComplexList {
  public internalValue? : GroupSchemaPropertyOneOf[] | cdktf.IResolvable

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
  public get(index: number): GroupSchemaPropertyOneOfOutputReference {
    return new GroupSchemaPropertyOneOfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property okta_group_schema_property}
*/
export class GroupSchemaProperty extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_group_schema_property";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupSchemaProperty resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupSchemaProperty to import
  * @param importFromId The id of the existing GroupSchemaProperty that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupSchemaProperty to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_group_schema_property", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs/resources/group_schema_property okta_group_schema_property} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupSchemaPropertyConfig
  */
  public constructor(scope: Construct, id: string, config: GroupSchemaPropertyConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_group_schema_property',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.2',
        providerVersionConstraint: '6.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arrayEnum = config.arrayEnum;
    this._arrayType = config.arrayType;
    this._description = config.description;
    this._enum = config.enum;
    this._externalName = config.externalName;
    this._externalNamespace = config.externalNamespace;
    this._id = config.id;
    this._index = config.index;
    this._master = config.master;
    this._maxLength = config.maxLength;
    this._minLength = config.minLength;
    this._permissions = config.permissions;
    this._required = config.required;
    this._scope = config.scope;
    this._title = config.title;
    this._type = config.type;
    this._unique = config.unique;
    this._arrayOneOf.internalValue = config.arrayOneOf;
    this._masterOverridePriority.internalValue = config.masterOverridePriority;
    this._oneOf.internalValue = config.oneOf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // array_enum - computed: false, optional: true, required: false
  private _arrayEnum?: string[]; 
  public get arrayEnum() {
    return this.getListAttribute('array_enum');
  }
  public set arrayEnum(value: string[]) {
    this._arrayEnum = value;
  }
  public resetArrayEnum() {
    this._arrayEnum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayEnumInput() {
    return this._arrayEnum;
  }

  // array_type - computed: false, optional: true, required: false
  private _arrayType?: string; 
  public get arrayType() {
    return this.getStringAttribute('array_type');
  }
  public set arrayType(value: string) {
    this._arrayType = value;
  }
  public resetArrayType() {
    this._arrayType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayTypeInput() {
    return this._arrayType;
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

  // enum - computed: false, optional: true, required: false
  private _enum?: string[]; 
  public get enum() {
    return this.getListAttribute('enum');
  }
  public set enum(value: string[]) {
    this._enum = value;
  }
  public resetEnum() {
    this._enum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumInput() {
    return this._enum;
  }

  // external_name - computed: false, optional: true, required: false
  private _externalName?: string; 
  public get externalName() {
    return this.getStringAttribute('external_name');
  }
  public set externalName(value: string) {
    this._externalName = value;
  }
  public resetExternalName() {
    this._externalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNameInput() {
    return this._externalName;
  }

  // external_namespace - computed: false, optional: true, required: false
  private _externalNamespace?: string; 
  public get externalNamespace() {
    return this.getStringAttribute('external_namespace');
  }
  public set externalNamespace(value: string) {
    this._externalNamespace = value;
  }
  public resetExternalNamespace() {
    this._externalNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNamespaceInput() {
    return this._externalNamespace;
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

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // master - computed: false, optional: true, required: false
  private _master?: string; 
  public get master() {
    return this.getStringAttribute('master');
  }
  public set master(value: string) {
    this._master = value;
  }
  public resetMaster() {
    this._master = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInput() {
    return this._master;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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

  // unique - computed: false, optional: true, required: false
  private _unique?: string; 
  public get unique() {
    return this.getStringAttribute('unique');
  }
  public set unique(value: string) {
    this._unique = value;
  }
  public resetUnique() {
    this._unique = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueInput() {
    return this._unique;
  }

  // array_one_of - computed: false, optional: true, required: false
  private _arrayOneOf = new GroupSchemaPropertyArrayOneOfList(this, "array_one_of", false);
  public get arrayOneOf() {
    return this._arrayOneOf;
  }
  public putArrayOneOf(value: GroupSchemaPropertyArrayOneOf[] | cdktf.IResolvable) {
    this._arrayOneOf.internalValue = value;
  }
  public resetArrayOneOf() {
    this._arrayOneOf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayOneOfInput() {
    return this._arrayOneOf.internalValue;
  }

  // master_override_priority - computed: false, optional: true, required: false
  private _masterOverridePriority = new GroupSchemaPropertyMasterOverridePriorityList(this, "master_override_priority", false);
  public get masterOverridePriority() {
    return this._masterOverridePriority;
  }
  public putMasterOverridePriority(value: GroupSchemaPropertyMasterOverridePriority[] | cdktf.IResolvable) {
    this._masterOverridePriority.internalValue = value;
  }
  public resetMasterOverridePriority() {
    this._masterOverridePriority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterOverridePriorityInput() {
    return this._masterOverridePriority.internalValue;
  }

  // one_of - computed: false, optional: true, required: false
  private _oneOf = new GroupSchemaPropertyOneOfList(this, "one_of", false);
  public get oneOf() {
    return this._oneOf;
  }
  public putOneOf(value: GroupSchemaPropertyOneOf[] | cdktf.IResolvable) {
    this._oneOf.internalValue = value;
  }
  public resetOneOf() {
    this._oneOf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneOfInput() {
    return this._oneOf.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      array_enum: cdktf.listMapper(cdktf.stringToTerraform, false)(this._arrayEnum),
      array_type: cdktf.stringToTerraform(this._arrayType),
      description: cdktf.stringToTerraform(this._description),
      enum: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enum),
      external_name: cdktf.stringToTerraform(this._externalName),
      external_namespace: cdktf.stringToTerraform(this._externalNamespace),
      id: cdktf.stringToTerraform(this._id),
      index: cdktf.stringToTerraform(this._index),
      master: cdktf.stringToTerraform(this._master),
      max_length: cdktf.numberToTerraform(this._maxLength),
      min_length: cdktf.numberToTerraform(this._minLength),
      permissions: cdktf.stringToTerraform(this._permissions),
      required: cdktf.booleanToTerraform(this._required),
      scope: cdktf.stringToTerraform(this._scope),
      title: cdktf.stringToTerraform(this._title),
      type: cdktf.stringToTerraform(this._type),
      unique: cdktf.stringToTerraform(this._unique),
      array_one_of: cdktf.listMapper(groupSchemaPropertyArrayOneOfToTerraform, true)(this._arrayOneOf.internalValue),
      master_override_priority: cdktf.listMapper(groupSchemaPropertyMasterOverridePriorityToTerraform, true)(this._masterOverridePriority.internalValue),
      one_of: cdktf.listMapper(groupSchemaPropertyOneOfToTerraform, true)(this._oneOf.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      array_enum: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._arrayEnum),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      array_type: {
        value: cdktf.stringToHclTerraform(this._arrayType),
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
      enum: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enum),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      external_name: {
        value: cdktf.stringToHclTerraform(this._externalName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_namespace: {
        value: cdktf.stringToHclTerraform(this._externalNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index: {
        value: cdktf.stringToHclTerraform(this._index),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master: {
        value: cdktf.stringToHclTerraform(this._master),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_length: {
        value: cdktf.numberToHclTerraform(this._maxLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_length: {
        value: cdktf.numberToHclTerraform(this._minLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      permissions: {
        value: cdktf.stringToHclTerraform(this._permissions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      required: {
        value: cdktf.booleanToHclTerraform(this._required),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unique: {
        value: cdktf.stringToHclTerraform(this._unique),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      array_one_of: {
        value: cdktf.listMapperHcl(groupSchemaPropertyArrayOneOfToHclTerraform, true)(this._arrayOneOf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroupSchemaPropertyArrayOneOfList",
      },
      master_override_priority: {
        value: cdktf.listMapperHcl(groupSchemaPropertyMasterOverridePriorityToHclTerraform, true)(this._masterOverridePriority.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroupSchemaPropertyMasterOverridePriorityList",
      },
      one_of: {
        value: cdktf.listMapperHcl(groupSchemaPropertyOneOfToHclTerraform, true)(this._oneOf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GroupSchemaPropertyOneOfList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
