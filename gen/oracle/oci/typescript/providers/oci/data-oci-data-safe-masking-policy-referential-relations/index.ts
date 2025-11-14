// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_masking_policy_referential_relations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeMaskingPolicyReferentialRelationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_masking_policy_referential_relations#column_name DataOciDataSafeMaskingPolicyReferentialRelations#column_name}
  */
  readonly columnName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_masking_policy_referential_relations#id DataOciDataSafeMaskingPolicyReferentialRelations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_masking_policy_referential_relations#masking_policy_id DataOciDataSafeMaskingPolicyReferentialRelations#masking_policy_id}
  */
  readonly maskingPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_masking_policy_referential_relations#object DataOciDataSafeMaskingPolicyReferentialRelations#object}
  */
  readonly object?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_masking_policy_referential_relations#relation_type DataOciDataSafeMaskingPolicyReferentialRelations#relation_type}
  */
  readonly relationType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_masking_policy_referential_relations#schema_name DataOciDataSafeMaskingPolicyReferentialRelations#schema_name}
  */
  readonly schemaName?: string[];
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_masking_policy_referential_relations#filter DataOciDataSafeMaskingPolicyReferentialRelations#filter}
  */
  readonly filter?: DataOciDataSafeMaskingPolicyReferentialRelationsFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsChild {
}

export function dataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsChildToTerraform(struct?: DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsChild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsChildToHclTerraform(struct?: DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsChild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsChildOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsChild | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsChild | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // referential_column_group - computed: true, optional: false, required: false
  public get referentialColumnGroup() {
    return this.getListAttribute('referential_column_group');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
}

export class DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsChildList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsChildOutputReference {
    return new DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsChildOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsParent {
}

export function dataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsParentToTerraform(struct?: DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsParentToHclTerraform(struct?: DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsParentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // referential_column_group - computed: true, optional: false, required: false
  public get referentialColumnGroup() {
    return this.getListAttribute('referential_column_group');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
}

export class DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsParentList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsParentOutputReference {
    return new DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsParentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItems {
}

export function dataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsToTerraform(struct?: DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsToHclTerraform(struct?: DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // child - computed: true, optional: false, required: false
  private _child = new DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsChildList(this, "child", false);
  public get child() {
    return this._child;
  }

  // masking_format - computed: true, optional: false, required: false
  public get maskingFormat() {
    return this.getListAttribute('masking_format');
  }

  // masking_policy_id - computed: true, optional: false, required: false
  public get maskingPolicyId() {
    return this.getStringAttribute('masking_policy_id');
  }

  // parent - computed: true, optional: false, required: false
  private _parent = new DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsParentList(this, "parent", false);
  public get parent() {
    return this._parent;
  }

  // relation_type - computed: true, optional: false, required: false
  public get relationType() {
    return this.getStringAttribute('relation_type');
  }
}

export class DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsOutputReference {
    return new DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollection {
}

export function dataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionToTerraform(struct?: DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionToHclTerraform(struct?: DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionOutputReference {
    return new DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeMaskingPolicyReferentialRelationsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_masking_policy_referential_relations#name DataOciDataSafeMaskingPolicyReferentialRelations#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_masking_policy_referential_relations#regex DataOciDataSafeMaskingPolicyReferentialRelations#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_masking_policy_referential_relations#values DataOciDataSafeMaskingPolicyReferentialRelations#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeMaskingPolicyReferentialRelationsFilterToTerraform(struct?: DataOciDataSafeMaskingPolicyReferentialRelationsFilter | cdktf.IResolvable): any {
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


export function dataOciDataSafeMaskingPolicyReferentialRelationsFilterToHclTerraform(struct?: DataOciDataSafeMaskingPolicyReferentialRelationsFilter | cdktf.IResolvable): any {
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

export class DataOciDataSafeMaskingPolicyReferentialRelationsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeMaskingPolicyReferentialRelationsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDataSafeMaskingPolicyReferentialRelationsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDataSafeMaskingPolicyReferentialRelationsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeMaskingPolicyReferentialRelationsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeMaskingPolicyReferentialRelationsFilterOutputReference {
    return new DataOciDataSafeMaskingPolicyReferentialRelationsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_masking_policy_referential_relations oci_data_safe_masking_policy_referential_relations}
*/
export class DataOciDataSafeMaskingPolicyReferentialRelations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_masking_policy_referential_relations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeMaskingPolicyReferentialRelations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeMaskingPolicyReferentialRelations to import
  * @param importFromId The id of the existing DataOciDataSafeMaskingPolicyReferentialRelations that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_masking_policy_referential_relations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeMaskingPolicyReferentialRelations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_masking_policy_referential_relations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/data_safe_masking_policy_referential_relations oci_data_safe_masking_policy_referential_relations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeMaskingPolicyReferentialRelationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeMaskingPolicyReferentialRelationsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_masking_policy_referential_relations',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._columnName = config.columnName;
    this._id = config.id;
    this._maskingPolicyId = config.maskingPolicyId;
    this._object = config.object;
    this._relationType = config.relationType;
    this._schemaName = config.schemaName;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // column_name - computed: false, optional: true, required: false
  private _columnName?: string[]; 
  public get columnName() {
    return this.getListAttribute('column_name');
  }
  public set columnName(value: string[]) {
    this._columnName = value;
  }
  public resetColumnName() {
    this._columnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
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

  // masking_policy_id - computed: false, optional: false, required: true
  private _maskingPolicyId?: string; 
  public get maskingPolicyId() {
    return this.getStringAttribute('masking_policy_id');
  }
  public set maskingPolicyId(value: string) {
    this._maskingPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingPolicyIdInput() {
    return this._maskingPolicyId;
  }

  // masking_policy_referential_relation_collection - computed: true, optional: false, required: false
  private _maskingPolicyReferentialRelationCollection = new DataOciDataSafeMaskingPolicyReferentialRelationsMaskingPolicyReferentialRelationCollectionList(this, "masking_policy_referential_relation_collection", false);
  public get maskingPolicyReferentialRelationCollection() {
    return this._maskingPolicyReferentialRelationCollection;
  }

  // object - computed: false, optional: true, required: false
  private _object?: string[]; 
  public get object() {
    return this.getListAttribute('object');
  }
  public set object(value: string[]) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // relation_type - computed: false, optional: true, required: false
  private _relationType?: string[]; 
  public get relationType() {
    return this.getListAttribute('relation_type');
  }
  public set relationType(value: string[]) {
    this._relationType = value;
  }
  public resetRelationType() {
    this._relationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationTypeInput() {
    return this._relationType;
  }

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string[]; 
  public get schemaName() {
    return this.getListAttribute('schema_name');
  }
  public set schemaName(value: string[]) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataSafeMaskingPolicyReferentialRelationsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeMaskingPolicyReferentialRelationsFilter[] | cdktf.IResolvable) {
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
      column_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._columnName),
      id: cdktf.stringToTerraform(this._id),
      masking_policy_id: cdktf.stringToTerraform(this._maskingPolicyId),
      object: cdktf.listMapper(cdktf.stringToTerraform, false)(this._object),
      relation_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationType),
      schema_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemaName),
      filter: cdktf.listMapper(dataOciDataSafeMaskingPolicyReferentialRelationsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      column_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._columnName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      masking_policy_id: {
        value: cdktf.stringToHclTerraform(this._maskingPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._object),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      relation_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      schema_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._schemaName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDataSafeMaskingPolicyReferentialRelationsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataSafeMaskingPolicyReferentialRelationsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
