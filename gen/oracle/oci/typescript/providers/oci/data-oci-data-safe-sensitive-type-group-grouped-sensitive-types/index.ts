// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_sensitive_type_group_grouped_sensitive_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_sensitive_type_group_grouped_sensitive_types#id DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_sensitive_type_group_grouped_sensitive_types#sensitive_type_group_id DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypes#sensitive_type_group_id}
  */
  readonly sensitiveTypeGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_sensitive_type_group_grouped_sensitive_types#sensitive_type_id DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypes#sensitive_type_id}
  */
  readonly sensitiveTypeId?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_sensitive_type_group_grouped_sensitive_types#filter DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypes#filter}
  */
  readonly filter?: DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsItems {
}

export function dataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsItemsToTerraform(struct?: DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsItemsToHclTerraform(struct?: DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sensitive_type_id - computed: true, optional: false, required: false
  public get sensitiveTypeId() {
    return this.getStringAttribute('sensitive_type_id');
  }
}

export class DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsItemsOutputReference {
    return new DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsPatchOperations {
}

export function dataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsPatchOperationsToTerraform(struct?: DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsPatchOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsPatchOperationsToHclTerraform(struct?: DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsPatchOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsPatchOperationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsPatchOperations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsPatchOperations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // selection - computed: true, optional: false, required: false
  public get selection() {
    return this.getStringAttribute('selection');
  }

  // value - computed: true, optional: false, required: false
  private _value = new cdktf.StringMap(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsPatchOperationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsPatchOperationsOutputReference {
    return new DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsPatchOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItems {
}

export function dataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsToTerraform(struct?: DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsToHclTerraform(struct?: DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // patch_operations - computed: true, optional: false, required: false
  private _patchOperations = new DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsPatchOperationsList(this, "patch_operations", false);
  public get patchOperations() {
    return this._patchOperations;
  }

  // sensitive_type_group_id - computed: true, optional: false, required: false
  public get sensitiveTypeGroupId() {
    return this.getStringAttribute('sensitive_type_group_id');
  }
}

export class DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsOutputReference {
    return new DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollection {
}

export function dataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionToTerraform(struct?: DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionToHclTerraform(struct?: DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionOutputReference {
    return new DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_sensitive_type_group_grouped_sensitive_types#name DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_sensitive_type_group_grouped_sensitive_types#regex DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypes#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_sensitive_type_group_grouped_sensitive_types#values DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypes#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesFilterToTerraform(struct?: DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesFilterToHclTerraform(struct?: DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesFilterOutputReference {
    return new DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_sensitive_type_group_grouped_sensitive_types oci_data_safe_sensitive_type_group_grouped_sensitive_types}
*/
export class DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_sensitive_type_group_grouped_sensitive_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypes to import
  * @param importFromId The id of the existing DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_sensitive_type_group_grouped_sensitive_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_sensitive_type_group_grouped_sensitive_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/data_safe_sensitive_type_group_grouped_sensitive_types oci_data_safe_sensitive_type_group_grouped_sensitive_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_sensitive_type_group_grouped_sensitive_types',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._sensitiveTypeGroupId = config.sensitiveTypeGroupId;
    this._sensitiveTypeId = config.sensitiveTypeId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // grouped_sensitive_type_collection - computed: true, optional: false, required: false
  private _groupedSensitiveTypeCollection = new DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesGroupedSensitiveTypeCollectionList(this, "grouped_sensitive_type_collection", false);
  public get groupedSensitiveTypeCollection() {
    return this._groupedSensitiveTypeCollection;
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

  // sensitive_type_group_id - computed: false, optional: false, required: true
  private _sensitiveTypeGroupId?: string; 
  public get sensitiveTypeGroupId() {
    return this.getStringAttribute('sensitive_type_group_id');
  }
  public set sensitiveTypeGroupId(value: string) {
    this._sensitiveTypeGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveTypeGroupIdInput() {
    return this._sensitiveTypeGroupId;
  }

  // sensitive_type_id - computed: false, optional: true, required: false
  private _sensitiveTypeId?: string; 
  public get sensitiveTypeId() {
    return this.getStringAttribute('sensitive_type_id');
  }
  public set sensitiveTypeId(value: string) {
    this._sensitiveTypeId = value;
  }
  public resetSensitiveTypeId() {
    this._sensitiveTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveTypeIdInput() {
    return this._sensitiveTypeId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      sensitive_type_group_id: cdktf.stringToTerraform(this._sensitiveTypeGroupId),
      sensitive_type_id: cdktf.stringToTerraform(this._sensitiveTypeId),
      filter: cdktf.listMapper(dataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitive_type_group_id: {
        value: cdktf.stringToHclTerraform(this._sensitiveTypeGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitive_type_id: {
        value: cdktf.stringToHclTerraform(this._sensitiveTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataSafeSensitiveTypeGroupGroupedSensitiveTypesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
