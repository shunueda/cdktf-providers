// https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KibanaSecurityExceptionItemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Array of comments about the exception item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#comments KibanaSecurityExceptionItem#comments}
  */
  readonly comments?: KibanaSecurityExceptionItemComments[] | cdktf.IResolvable;
  /**
  * Describes the exception item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#description KibanaSecurityExceptionItem#description}
  */
  readonly description: string;
  /**
  * The exception item entries. This defines the conditions under which the exception applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#entries KibanaSecurityExceptionItem#entries}
  */
  readonly entries: KibanaSecurityExceptionItemEntries[] | cdktf.IResolvable;
  /**
  * The exception item's expiration date in RFC3339 format. This field is only available for regular exception items, not endpoint exceptions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#expire_time KibanaSecurityExceptionItem#expire_time}
  */
  readonly expireTime?: string;
  /**
  * The exception item's human readable string identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#item_id KibanaSecurityExceptionItem#item_id}
  */
  readonly itemId?: string;
  /**
  * The exception list's identifier that this item belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#list_id KibanaSecurityExceptionItem#list_id}
  */
  readonly listId: string;
  /**
  * Placeholder for metadata about the exception item as JSON string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#meta KibanaSecurityExceptionItem#meta}
  */
  readonly meta?: string;
  /**
  * The name of the exception item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#name KibanaSecurityExceptionItem#name}
  */
  readonly name: string;
  /**
  * Determines whether the exception item is available in all Kibana spaces or just the space in which it is created. Can be `single` (default) or `agnostic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#namespace_type KibanaSecurityExceptionItem#namespace_type}
  */
  readonly namespaceType?: string;
  /**
  * Array of OS types for which the exceptions apply. Valid values: `linux`, `macos`, `windows`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#os_types KibanaSecurityExceptionItem#os_types}
  */
  readonly osTypes?: string[];
  /**
  * An identifier for the space. If space_id is not provided, the default space is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#space_id KibanaSecurityExceptionItem#space_id}
  */
  readonly spaceId?: string;
  /**
  * String array containing words and phrases to help categorize exception items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#tags KibanaSecurityExceptionItem#tags}
  */
  readonly tags?: string[];
  /**
  * The type of exception item. Must be `simple`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#type KibanaSecurityExceptionItem#type}
  */
  readonly type: string;
}
export interface KibanaSecurityExceptionItemComments {
  /**
  * The comment text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#comment KibanaSecurityExceptionItem#comment}
  */
  readonly comment: string;
}

export function kibanaSecurityExceptionItemCommentsToTerraform(struct?: KibanaSecurityExceptionItemComments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
  }
}


export function kibanaSecurityExceptionItemCommentsToHclTerraform(struct?: KibanaSecurityExceptionItemComments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSecurityExceptionItemCommentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KibanaSecurityExceptionItemComments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSecurityExceptionItemComments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
    }
  }

  // comment - computed: false, optional: false, required: true
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class KibanaSecurityExceptionItemCommentsList extends cdktf.ComplexList {
  public internalValue? : KibanaSecurityExceptionItemComments[] | cdktf.IResolvable

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
  public get(index: number): KibanaSecurityExceptionItemCommentsOutputReference {
    return new KibanaSecurityExceptionItemCommentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KibanaSecurityExceptionItemEntriesEntries {
  /**
  * The field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#field KibanaSecurityExceptionItem#field}
  */
  readonly field: string;
  /**
  * The operator to use. Valid values: `included`, `excluded`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#operator KibanaSecurityExceptionItem#operator}
  */
  readonly operator: string;
  /**
  * The type of nested entry. Valid values: `match`, `match_any`, `exists`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#type KibanaSecurityExceptionItem#type}
  */
  readonly type: string;
  /**
  * The value to match (for `match` type).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#value KibanaSecurityExceptionItem#value}
  */
  readonly value?: string;
  /**
  * Array of values to match (for `match_any` type).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#values KibanaSecurityExceptionItem#values}
  */
  readonly values?: string[];
}

export function kibanaSecurityExceptionItemEntriesEntriesToTerraform(struct?: KibanaSecurityExceptionItemEntriesEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function kibanaSecurityExceptionItemEntriesEntriesToHclTerraform(struct?: KibanaSecurityExceptionItemEntriesEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSecurityExceptionItemEntriesEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KibanaSecurityExceptionItemEntriesEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSecurityExceptionItemEntriesEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._value = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._operator = value.operator;
      this._type = value.type;
      this._value = value.value;
      this._values = value.values;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class KibanaSecurityExceptionItemEntriesEntriesList extends cdktf.ComplexList {
  public internalValue? : KibanaSecurityExceptionItemEntriesEntries[] | cdktf.IResolvable

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
  public get(index: number): KibanaSecurityExceptionItemEntriesEntriesOutputReference {
    return new KibanaSecurityExceptionItemEntriesEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KibanaSecurityExceptionItemEntriesListStruct {
  /**
  * The value list ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#id KibanaSecurityExceptionItem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The value list type (e.g., `keyword`, `ip`, `ip_range`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#type KibanaSecurityExceptionItem#type}
  */
  readonly type: string;
}

export function kibanaSecurityExceptionItemEntriesListStructToTerraform(struct?: KibanaSecurityExceptionItemEntriesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function kibanaSecurityExceptionItemEntriesListStructToHclTerraform(struct?: KibanaSecurityExceptionItemEntriesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class KibanaSecurityExceptionItemEntriesListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KibanaSecurityExceptionItemEntriesListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSecurityExceptionItemEntriesListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
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
export interface KibanaSecurityExceptionItemEntries {
  /**
  * Nested entries (for `nested` type). Only `match`, `match_any`, and `exists` entry types are allowed as nested entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#entries KibanaSecurityExceptionItem#entries}
  */
  readonly entries?: KibanaSecurityExceptionItemEntriesEntries[] | cdktf.IResolvable;
  /**
  * The field name. Required for all entry types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#field KibanaSecurityExceptionItem#field}
  */
  readonly field: string;
  /**
  * Value list reference (for `list` type).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#list KibanaSecurityExceptionItem#list}
  */
  readonly list?: KibanaSecurityExceptionItemEntriesListStruct;
  /**
  * The operator to use. Valid values: `included`, `excluded`. Note: The operator field is not supported for nested entry types and will be ignored if specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#operator KibanaSecurityExceptionItem#operator}
  */
  readonly operator?: string;
  /**
  * The type of entry. Valid values: `match`, `match_any`, `list`, `exists`, `nested`, `wildcard`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#type KibanaSecurityExceptionItem#type}
  */
  readonly type: string;
  /**
  * The value to match (for `match` and `wildcard` types).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#value KibanaSecurityExceptionItem#value}
  */
  readonly value?: string;
  /**
  * Array of values to match (for `match_any` type).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#values KibanaSecurityExceptionItem#values}
  */
  readonly values?: string[];
}

export function kibanaSecurityExceptionItemEntriesToTerraform(struct?: KibanaSecurityExceptionItemEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entries: cdktf.listMapper(kibanaSecurityExceptionItemEntriesEntriesToTerraform, false)(struct!.entries),
    field: cdktf.stringToTerraform(struct!.field),
    list: kibanaSecurityExceptionItemEntriesListStructToTerraform(struct!.list),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function kibanaSecurityExceptionItemEntriesToHclTerraform(struct?: KibanaSecurityExceptionItemEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entries: {
      value: cdktf.listMapperHcl(kibanaSecurityExceptionItemEntriesEntriesToHclTerraform, false)(struct!.entries),
      isBlock: true,
      type: "list",
      storageClassType: "KibanaSecurityExceptionItemEntriesEntriesList",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    list: {
      value: kibanaSecurityExceptionItemEntriesListStructToHclTerraform(struct!.list),
      isBlock: true,
      type: "struct",
      storageClassType: "KibanaSecurityExceptionItemEntriesListStruct",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaSecurityExceptionItemEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KibanaSecurityExceptionItemEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entries = this._entries?.internalValue;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._list?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list?.internalValue;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaSecurityExceptionItemEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entries.internalValue = undefined;
      this._field = undefined;
      this._list.internalValue = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._value = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entries.internalValue = value.entries;
      this._field = value.field;
      this._list.internalValue = value.list;
      this._operator = value.operator;
      this._type = value.type;
      this._value = value.value;
      this._values = value.values;
    }
  }

  // entries - computed: false, optional: true, required: false
  private _entries = new KibanaSecurityExceptionItemEntriesEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: KibanaSecurityExceptionItemEntriesEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // list - computed: false, optional: true, required: false
  private _list = new KibanaSecurityExceptionItemEntriesListStructOutputReference(this, "list");
  public get list() {
    return this._list;
  }
  public putList(value: KibanaSecurityExceptionItemEntriesListStruct) {
    this._list.internalValue = value;
  }
  public resetList() {
    this._list.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list.internalValue;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class KibanaSecurityExceptionItemEntriesList extends cdktf.ComplexList {
  public internalValue? : KibanaSecurityExceptionItemEntries[] | cdktf.IResolvable

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
  public get(index: number): KibanaSecurityExceptionItemEntriesOutputReference {
    return new KibanaSecurityExceptionItemEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item elasticstack_kibana_security_exception_item}
*/
export class KibanaSecurityExceptionItem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_kibana_security_exception_item";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KibanaSecurityExceptionItem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KibanaSecurityExceptionItem to import
  * @param importFromId The id of the existing KibanaSecurityExceptionItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KibanaSecurityExceptionItem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_kibana_security_exception_item", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.1/docs/resources/kibana_security_exception_item elasticstack_kibana_security_exception_item} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KibanaSecurityExceptionItemConfig
  */
  public constructor(scope: Construct, id: string, config: KibanaSecurityExceptionItemConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_kibana_security_exception_item',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.13.1',
        providerVersionConstraint: '0.13.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comments.internalValue = config.comments;
    this._description = config.description;
    this._entries.internalValue = config.entries;
    this._expireTime = config.expireTime;
    this._itemId = config.itemId;
    this._listId = config.listId;
    this._meta = config.meta;
    this._name = config.name;
    this._namespaceType = config.namespaceType;
    this._osTypes = config.osTypes;
    this._spaceId = config.spaceId;
    this._tags = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comments - computed: false, optional: true, required: false
  private _comments = new KibanaSecurityExceptionItemCommentsList(this, "comments", false);
  public get comments() {
    return this._comments;
  }
  public putComments(value: KibanaSecurityExceptionItemComments[] | cdktf.IResolvable) {
    this._comments.internalValue = value;
  }
  public resetComments() {
    this._comments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // entries - computed: false, optional: false, required: true
  private _entries = new KibanaSecurityExceptionItemEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: KibanaSecurityExceptionItemEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // expire_time - computed: true, optional: true, required: false
  private _expireTime?: string; 
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }
  public set expireTime(value: string) {
    this._expireTime = value;
  }
  public resetExpireTime() {
    this._expireTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireTimeInput() {
    return this._expireTime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // item_id - computed: true, optional: true, required: false
  private _itemId?: string; 
  public get itemId() {
    return this.getStringAttribute('item_id');
  }
  public set itemId(value: string) {
    this._itemId = value;
  }
  public resetItemId() {
    this._itemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemIdInput() {
    return this._itemId;
  }

  // list_id - computed: false, optional: false, required: true
  private _listId?: string; 
  public get listId() {
    return this.getStringAttribute('list_id');
  }
  public set listId(value: string) {
    this._listId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listIdInput() {
    return this._listId;
  }

  // meta - computed: false, optional: true, required: false
  private _meta?: string; 
  public get meta() {
    return this.getStringAttribute('meta');
  }
  public set meta(value: string) {
    this._meta = value;
  }
  public resetMeta() {
    this._meta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta;
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

  // namespace_type - computed: true, optional: true, required: false
  private _namespaceType?: string; 
  public get namespaceType() {
    return this.getStringAttribute('namespace_type');
  }
  public set namespaceType(value: string) {
    this._namespaceType = value;
  }
  public resetNamespaceType() {
    this._namespaceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceTypeInput() {
    return this._namespaceType;
  }

  // os_types - computed: false, optional: true, required: false
  private _osTypes?: string[]; 
  public get osTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('os_types'));
  }
  public set osTypes(value: string[]) {
    this._osTypes = value;
  }
  public resetOsTypes() {
    this._osTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypesInput() {
    return this._osTypes;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tie_breaker_id - computed: true, optional: false, required: false
  public get tieBreakerId() {
    return this.getStringAttribute('tie_breaker_id');
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comments: cdktf.listMapper(kibanaSecurityExceptionItemCommentsToTerraform, false)(this._comments.internalValue),
      description: cdktf.stringToTerraform(this._description),
      entries: cdktf.listMapper(kibanaSecurityExceptionItemEntriesToTerraform, false)(this._entries.internalValue),
      expire_time: cdktf.stringToTerraform(this._expireTime),
      item_id: cdktf.stringToTerraform(this._itemId),
      list_id: cdktf.stringToTerraform(this._listId),
      meta: cdktf.stringToTerraform(this._meta),
      name: cdktf.stringToTerraform(this._name),
      namespace_type: cdktf.stringToTerraform(this._namespaceType),
      os_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._osTypes),
      space_id: cdktf.stringToTerraform(this._spaceId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comments: {
        value: cdktf.listMapperHcl(kibanaSecurityExceptionItemCommentsToHclTerraform, false)(this._comments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KibanaSecurityExceptionItemCommentsList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entries: {
        value: cdktf.listMapperHcl(kibanaSecurityExceptionItemEntriesToHclTerraform, false)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KibanaSecurityExceptionItemEntriesList",
      },
      expire_time: {
        value: cdktf.stringToHclTerraform(this._expireTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      item_id: {
        value: cdktf.stringToHclTerraform(this._itemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      list_id: {
        value: cdktf.stringToHclTerraform(this._listId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta: {
        value: cdktf.stringToHclTerraform(this._meta),
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
      namespace_type: {
        value: cdktf.stringToHclTerraform(this._namespaceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._osTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
