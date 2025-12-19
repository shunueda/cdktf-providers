// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ots_search_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OtsSearchIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ots_search_index#id OtsSearchIndex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ots_search_index#index_name OtsSearchIndex#index_name}
  */
  readonly indexName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ots_search_index#instance_name OtsSearchIndex#instance_name}
  */
  readonly instanceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ots_search_index#table_name OtsSearchIndex#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ots_search_index#time_to_live OtsSearchIndex#time_to_live}
  */
  readonly timeToLive?: number;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ots_search_index#schema OtsSearchIndex#schema}
  */
  readonly schema: OtsSearchIndexSchema[] | cdktf.IResolvable;
}
export interface OtsSearchIndexSchemaFieldSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ots_search_index#analyzer OtsSearchIndex#analyzer}
  */
  readonly analyzer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ots_search_index#enable_sort_and_agg OtsSearchIndex#enable_sort_and_agg}
  */
  readonly enableSortAndAgg?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ots_search_index#field_name OtsSearchIndex#field_name}
  */
  readonly fieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ots_search_index#field_type OtsSearchIndex#field_type}
  */
  readonly fieldType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ots_search_index#index OtsSearchIndex#index}
  */
  readonly index?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ots_search_index#is_array OtsSearchIndex#is_array}
  */
  readonly isArray?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ots_search_index#store OtsSearchIndex#store}
  */
  readonly store?: boolean | cdktf.IResolvable;
}

export function otsSearchIndexSchemaFieldSchemaToTerraform(struct?: OtsSearchIndexSchemaFieldSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analyzer: cdktf.stringToTerraform(struct!.analyzer),
    enable_sort_and_agg: cdktf.booleanToTerraform(struct!.enableSortAndAgg),
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    field_type: cdktf.stringToTerraform(struct!.fieldType),
    index: cdktf.booleanToTerraform(struct!.index),
    is_array: cdktf.booleanToTerraform(struct!.isArray),
    store: cdktf.booleanToTerraform(struct!.store),
  }
}


export function otsSearchIndexSchemaFieldSchemaToHclTerraform(struct?: OtsSearchIndexSchemaFieldSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    analyzer: {
      value: cdktf.stringToHclTerraform(struct!.analyzer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_sort_and_agg: {
      value: cdktf.booleanToHclTerraform(struct!.enableSortAndAgg),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_type: {
      value: cdktf.stringToHclTerraform(struct!.fieldType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.booleanToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_array: {
      value: cdktf.booleanToHclTerraform(struct!.isArray),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    store: {
      value: cdktf.booleanToHclTerraform(struct!.store),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OtsSearchIndexSchemaFieldSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OtsSearchIndexSchemaFieldSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analyzer !== undefined) {
      hasAnyValues = true;
      internalValueResult.analyzer = this._analyzer;
    }
    if (this._enableSortAndAgg !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSortAndAgg = this._enableSortAndAgg;
    }
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._fieldType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldType = this._fieldType;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._isArray !== undefined) {
      hasAnyValues = true;
      internalValueResult.isArray = this._isArray;
    }
    if (this._store !== undefined) {
      hasAnyValues = true;
      internalValueResult.store = this._store;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OtsSearchIndexSchemaFieldSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analyzer = undefined;
      this._enableSortAndAgg = undefined;
      this._fieldName = undefined;
      this._fieldType = undefined;
      this._index = undefined;
      this._isArray = undefined;
      this._store = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analyzer = value.analyzer;
      this._enableSortAndAgg = value.enableSortAndAgg;
      this._fieldName = value.fieldName;
      this._fieldType = value.fieldType;
      this._index = value.index;
      this._isArray = value.isArray;
      this._store = value.store;
    }
  }

  // analyzer - computed: false, optional: true, required: false
  private _analyzer?: string; 
  public get analyzer() {
    return this.getStringAttribute('analyzer');
  }
  public set analyzer(value: string) {
    this._analyzer = value;
  }
  public resetAnalyzer() {
    this._analyzer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyzerInput() {
    return this._analyzer;
  }

  // enable_sort_and_agg - computed: false, optional: true, required: false
  private _enableSortAndAgg?: boolean | cdktf.IResolvable; 
  public get enableSortAndAgg() {
    return this.getBooleanAttribute('enable_sort_and_agg');
  }
  public set enableSortAndAgg(value: boolean | cdktf.IResolvable) {
    this._enableSortAndAgg = value;
  }
  public resetEnableSortAndAgg() {
    this._enableSortAndAgg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSortAndAggInput() {
    return this._enableSortAndAgg;
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // field_type - computed: false, optional: false, required: true
  private _fieldType?: string; 
  public get fieldType() {
    return this.getStringAttribute('field_type');
  }
  public set fieldType(value: string) {
    this._fieldType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTypeInput() {
    return this._fieldType;
  }

  // index - computed: false, optional: true, required: false
  private _index?: boolean | cdktf.IResolvable; 
  public get index() {
    return this.getBooleanAttribute('index');
  }
  public set index(value: boolean | cdktf.IResolvable) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // is_array - computed: false, optional: true, required: false
  private _isArray?: boolean | cdktf.IResolvable; 
  public get isArray() {
    return this.getBooleanAttribute('is_array');
  }
  public set isArray(value: boolean | cdktf.IResolvable) {
    this._isArray = value;
  }
  public resetIsArray() {
    this._isArray = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isArrayInput() {
    return this._isArray;
  }

  // store - computed: false, optional: true, required: false
  private _store?: boolean | cdktf.IResolvable; 
  public get store() {
    return this.getBooleanAttribute('store');
  }
  public set store(value: boolean | cdktf.IResolvable) {
    this._store = value;
  }
  public resetStore() {
    this._store = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeInput() {
    return this._store;
  }
}

export class OtsSearchIndexSchemaFieldSchemaList extends cdktf.ComplexList {
  public internalValue? : OtsSearchIndexSchemaFieldSchema[] | cdktf.IResolvable

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
  public get(index: number): OtsSearchIndexSchemaFieldSchemaOutputReference {
    return new OtsSearchIndexSchemaFieldSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OtsSearchIndexSchemaIndexSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ots_search_index#routing_fields OtsSearchIndex#routing_fields}
  */
  readonly routingFields?: string[];
}

export function otsSearchIndexSchemaIndexSettingToTerraform(struct?: OtsSearchIndexSchemaIndexSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    routing_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routingFields),
  }
}


export function otsSearchIndexSchemaIndexSettingToHclTerraform(struct?: OtsSearchIndexSchemaIndexSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    routing_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routingFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OtsSearchIndexSchemaIndexSettingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OtsSearchIndexSchemaIndexSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routingFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingFields = this._routingFields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OtsSearchIndexSchemaIndexSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routingFields = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routingFields = value.routingFields;
    }
  }

  // routing_fields - computed: false, optional: true, required: false
  private _routingFields?: string[]; 
  public get routingFields() {
    return this.getListAttribute('routing_fields');
  }
  public set routingFields(value: string[]) {
    this._routingFields = value;
  }
  public resetRoutingFields() {
    this._routingFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingFieldsInput() {
    return this._routingFields;
  }
}

export class OtsSearchIndexSchemaIndexSettingList extends cdktf.ComplexList {
  public internalValue? : OtsSearchIndexSchemaIndexSetting[] | cdktf.IResolvable

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
  public get(index: number): OtsSearchIndexSchemaIndexSettingOutputReference {
    return new OtsSearchIndexSchemaIndexSettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OtsSearchIndexSchemaIndexSortSorter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ots_search_index#field_name OtsSearchIndex#field_name}
  */
  readonly fieldName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ots_search_index#mode OtsSearchIndex#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ots_search_index#order OtsSearchIndex#order}
  */
  readonly order?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ots_search_index#sorter_type OtsSearchIndex#sorter_type}
  */
  readonly sorterType?: string;
}

export function otsSearchIndexSchemaIndexSortSorterToTerraform(struct?: OtsSearchIndexSchemaIndexSortSorter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    mode: cdktf.stringToTerraform(struct!.mode),
    order: cdktf.stringToTerraform(struct!.order),
    sorter_type: cdktf.stringToTerraform(struct!.sorterType),
  }
}


export function otsSearchIndexSchemaIndexSortSorterToHclTerraform(struct?: OtsSearchIndexSchemaIndexSortSorter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sorter_type: {
      value: cdktf.stringToHclTerraform(struct!.sorterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OtsSearchIndexSchemaIndexSortSorterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OtsSearchIndexSchemaIndexSortSorter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._sorterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sorterType = this._sorterType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OtsSearchIndexSchemaIndexSortSorter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._mode = undefined;
      this._order = undefined;
      this._sorterType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._mode = value.mode;
      this._order = value.order;
      this._sorterType = value.sorterType;
    }
  }

  // field_name - computed: false, optional: true, required: false
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  public resetFieldName() {
    this._fieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // mode - computed: false, optional: true, required: false
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

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // sorter_type - computed: false, optional: true, required: false
  private _sorterType?: string; 
  public get sorterType() {
    return this.getStringAttribute('sorter_type');
  }
  public set sorterType(value: string) {
    this._sorterType = value;
  }
  public resetSorterType() {
    this._sorterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sorterTypeInput() {
    return this._sorterType;
  }
}

export class OtsSearchIndexSchemaIndexSortSorterList extends cdktf.ComplexList {
  public internalValue? : OtsSearchIndexSchemaIndexSortSorter[] | cdktf.IResolvable

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
  public get(index: number): OtsSearchIndexSchemaIndexSortSorterOutputReference {
    return new OtsSearchIndexSchemaIndexSortSorterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OtsSearchIndexSchemaIndexSort {
  /**
  * sorter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ots_search_index#sorter OtsSearchIndex#sorter}
  */
  readonly sorter: OtsSearchIndexSchemaIndexSortSorter[] | cdktf.IResolvable;
}

export function otsSearchIndexSchemaIndexSortToTerraform(struct?: OtsSearchIndexSchemaIndexSort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sorter: cdktf.listMapper(otsSearchIndexSchemaIndexSortSorterToTerraform, true)(struct!.sorter),
  }
}


export function otsSearchIndexSchemaIndexSortToHclTerraform(struct?: OtsSearchIndexSchemaIndexSort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sorter: {
      value: cdktf.listMapperHcl(otsSearchIndexSchemaIndexSortSorterToHclTerraform, true)(struct!.sorter),
      isBlock: true,
      type: "list",
      storageClassType: "OtsSearchIndexSchemaIndexSortSorterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OtsSearchIndexSchemaIndexSortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OtsSearchIndexSchemaIndexSort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sorter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sorter = this._sorter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OtsSearchIndexSchemaIndexSort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sorter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sorter.internalValue = value.sorter;
    }
  }

  // sorter - computed: false, optional: false, required: true
  private _sorter = new OtsSearchIndexSchemaIndexSortSorterList(this, "sorter", false);
  public get sorter() {
    return this._sorter;
  }
  public putSorter(value: OtsSearchIndexSchemaIndexSortSorter[] | cdktf.IResolvable) {
    this._sorter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sorterInput() {
    return this._sorter.internalValue;
  }
}

export class OtsSearchIndexSchemaIndexSortList extends cdktf.ComplexList {
  public internalValue? : OtsSearchIndexSchemaIndexSort[] | cdktf.IResolvable

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
  public get(index: number): OtsSearchIndexSchemaIndexSortOutputReference {
    return new OtsSearchIndexSchemaIndexSortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OtsSearchIndexSchema {
  /**
  * field_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ots_search_index#field_schema OtsSearchIndex#field_schema}
  */
  readonly fieldSchema: OtsSearchIndexSchemaFieldSchema[] | cdktf.IResolvable;
  /**
  * index_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ots_search_index#index_setting OtsSearchIndex#index_setting}
  */
  readonly indexSetting?: OtsSearchIndexSchemaIndexSetting[] | cdktf.IResolvable;
  /**
  * index_sort block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ots_search_index#index_sort OtsSearchIndex#index_sort}
  */
  readonly indexSort?: OtsSearchIndexSchemaIndexSort[] | cdktf.IResolvable;
}

export function otsSearchIndexSchemaToTerraform(struct?: OtsSearchIndexSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_schema: cdktf.listMapper(otsSearchIndexSchemaFieldSchemaToTerraform, true)(struct!.fieldSchema),
    index_setting: cdktf.listMapper(otsSearchIndexSchemaIndexSettingToTerraform, true)(struct!.indexSetting),
    index_sort: cdktf.listMapper(otsSearchIndexSchemaIndexSortToTerraform, true)(struct!.indexSort),
  }
}


export function otsSearchIndexSchemaToHclTerraform(struct?: OtsSearchIndexSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_schema: {
      value: cdktf.listMapperHcl(otsSearchIndexSchemaFieldSchemaToHclTerraform, true)(struct!.fieldSchema),
      isBlock: true,
      type: "list",
      storageClassType: "OtsSearchIndexSchemaFieldSchemaList",
    },
    index_setting: {
      value: cdktf.listMapperHcl(otsSearchIndexSchemaIndexSettingToHclTerraform, true)(struct!.indexSetting),
      isBlock: true,
      type: "set",
      storageClassType: "OtsSearchIndexSchemaIndexSettingList",
    },
    index_sort: {
      value: cdktf.listMapperHcl(otsSearchIndexSchemaIndexSortToHclTerraform, true)(struct!.indexSort),
      isBlock: true,
      type: "set",
      storageClassType: "OtsSearchIndexSchemaIndexSortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OtsSearchIndexSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OtsSearchIndexSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSchema = this._fieldSchema?.internalValue;
    }
    if (this._indexSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexSetting = this._indexSetting?.internalValue;
    }
    if (this._indexSort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexSort = this._indexSort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OtsSearchIndexSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldSchema.internalValue = undefined;
      this._indexSetting.internalValue = undefined;
      this._indexSort.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldSchema.internalValue = value.fieldSchema;
      this._indexSetting.internalValue = value.indexSetting;
      this._indexSort.internalValue = value.indexSort;
    }
  }

  // field_schema - computed: false, optional: false, required: true
  private _fieldSchema = new OtsSearchIndexSchemaFieldSchemaList(this, "field_schema", false);
  public get fieldSchema() {
    return this._fieldSchema;
  }
  public putFieldSchema(value: OtsSearchIndexSchemaFieldSchema[] | cdktf.IResolvable) {
    this._fieldSchema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSchemaInput() {
    return this._fieldSchema.internalValue;
  }

  // index_setting - computed: false, optional: true, required: false
  private _indexSetting = new OtsSearchIndexSchemaIndexSettingList(this, "index_setting", true);
  public get indexSetting() {
    return this._indexSetting;
  }
  public putIndexSetting(value: OtsSearchIndexSchemaIndexSetting[] | cdktf.IResolvable) {
    this._indexSetting.internalValue = value;
  }
  public resetIndexSetting() {
    this._indexSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexSettingInput() {
    return this._indexSetting.internalValue;
  }

  // index_sort - computed: false, optional: true, required: false
  private _indexSort = new OtsSearchIndexSchemaIndexSortList(this, "index_sort", true);
  public get indexSort() {
    return this._indexSort;
  }
  public putIndexSort(value: OtsSearchIndexSchemaIndexSort[] | cdktf.IResolvable) {
    this._indexSort.internalValue = value;
  }
  public resetIndexSort() {
    this._indexSort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexSortInput() {
    return this._indexSort.internalValue;
  }
}

export class OtsSearchIndexSchemaList extends cdktf.ComplexList {
  public internalValue? : OtsSearchIndexSchema[] | cdktf.IResolvable

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
  public get(index: number): OtsSearchIndexSchemaOutputReference {
    return new OtsSearchIndexSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ots_search_index alicloud_ots_search_index}
*/
export class OtsSearchIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ots_search_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OtsSearchIndex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OtsSearchIndex to import
  * @param importFromId The id of the existing OtsSearchIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ots_search_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OtsSearchIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ots_search_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ots_search_index alicloud_ots_search_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OtsSearchIndexConfig
  */
  public constructor(scope: Construct, id: string, config: OtsSearchIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ots_search_index',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
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
    this._indexName = config.indexName;
    this._instanceName = config.instanceName;
    this._tableName = config.tableName;
    this._timeToLive = config.timeToLive;
    this._schema.internalValue = config.schema;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // current_sync_timestamp - computed: true, optional: false, required: false
  public get currentSyncTimestamp() {
    return this.getNumberAttribute('current_sync_timestamp');
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

  // index_id - computed: true, optional: false, required: false
  public get indexId() {
    return this.getStringAttribute('index_id');
  }

  // index_name - computed: false, optional: false, required: true
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // sync_phase - computed: true, optional: false, required: false
  public get syncPhase() {
    return this.getStringAttribute('sync_phase');
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // time_to_live - computed: false, optional: true, required: false
  private _timeToLive?: number; 
  public get timeToLive() {
    return this.getNumberAttribute('time_to_live');
  }
  public set timeToLive(value: number) {
    this._timeToLive = value;
  }
  public resetTimeToLive() {
    this._timeToLive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveInput() {
    return this._timeToLive;
  }

  // schema - computed: false, optional: false, required: true
  private _schema = new OtsSearchIndexSchemaList(this, "schema", true);
  public get schema() {
    return this._schema;
  }
  public putSchema(value: OtsSearchIndexSchema[] | cdktf.IResolvable) {
    this._schema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      index_name: cdktf.stringToTerraform(this._indexName),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      table_name: cdktf.stringToTerraform(this._tableName),
      time_to_live: cdktf.numberToTerraform(this._timeToLive),
      schema: cdktf.listMapper(otsSearchIndexSchemaToTerraform, true)(this._schema.internalValue),
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
      index_name: {
        value: cdktf.stringToHclTerraform(this._indexName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_name: {
        value: cdktf.stringToHclTerraform(this._tableName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_to_live: {
        value: cdktf.numberToHclTerraform(this._timeToLive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      schema: {
        value: cdktf.listMapperHcl(otsSearchIndexSchemaToHclTerraform, true)(this._schema.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OtsSearchIndexSchemaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
