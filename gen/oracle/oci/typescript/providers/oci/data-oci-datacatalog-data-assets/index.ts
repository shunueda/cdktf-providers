// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_data_assets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatacatalogDataAssetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_data_assets#catalog_id DataOciDatacatalogDataAssets#catalog_id}
  */
  readonly catalogId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_data_assets#created_by_id DataOciDatacatalogDataAssets#created_by_id}
  */
  readonly createdById?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_data_assets#display_name DataOciDatacatalogDataAssets#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_data_assets#display_name_contains DataOciDatacatalogDataAssets#display_name_contains}
  */
  readonly displayNameContains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_data_assets#external_key DataOciDatacatalogDataAssets#external_key}
  */
  readonly externalKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_data_assets#fields DataOciDatacatalogDataAssets#fields}
  */
  readonly fields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_data_assets#id DataOciDatacatalogDataAssets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_data_assets#state DataOciDatacatalogDataAssets#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_data_assets#type_key DataOciDatacatalogDataAssets#type_key}
  */
  readonly typeKey?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_data_assets#filter DataOciDatacatalogDataAssets#filter}
  */
  readonly filter?: DataOciDatacatalogDataAssetsFilter[] | cdktf.IResolvable;
}
export interface DataOciDatacatalogDataAssetsDataAssetCollectionItems {
}

export function dataOciDatacatalogDataAssetsDataAssetCollectionItemsToTerraform(struct?: DataOciDatacatalogDataAssetsDataAssetCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatacatalogDataAssetsDataAssetCollectionItemsToHclTerraform(struct?: DataOciDatacatalogDataAssetsDataAssetCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatacatalogDataAssetsDataAssetCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatacatalogDataAssetsDataAssetCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog_id - computed: true, optional: false, required: false
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }

  // created_by_id - computed: true, optional: false, required: false
  public get createdById() {
    return this.getStringAttribute('created_by_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // external_key - computed: true, optional: false, required: false
  public get externalKey() {
    return this.getStringAttribute('external_key');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new cdktf.StringMap(this, "properties");
  public get properties() {
    return this._properties;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_harvested - computed: true, optional: false, required: false
  public get timeHarvested() {
    return this.getStringAttribute('time_harvested');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type_key - computed: true, optional: false, required: false
  public get typeKey() {
    return this.getStringAttribute('type_key');
  }

  // updated_by_id - computed: true, optional: false, required: false
  public get updatedById() {
    return this.getStringAttribute('updated_by_id');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataOciDatacatalogDataAssetsDataAssetCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference {
    return new DataOciDatacatalogDataAssetsDataAssetCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatacatalogDataAssetsDataAssetCollection {
}

export function dataOciDatacatalogDataAssetsDataAssetCollectionToTerraform(struct?: DataOciDatacatalogDataAssetsDataAssetCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatacatalogDataAssetsDataAssetCollectionToHclTerraform(struct?: DataOciDatacatalogDataAssetsDataAssetCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatacatalogDataAssetsDataAssetCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatacatalogDataAssetsDataAssetCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatacatalogDataAssetsDataAssetCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDatacatalogDataAssetsDataAssetCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference {
    return new DataOciDatacatalogDataAssetsDataAssetCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatacatalogDataAssetsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_data_assets#name DataOciDatacatalogDataAssets#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_data_assets#regex DataOciDatacatalogDataAssets#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_data_assets#values DataOciDatacatalogDataAssets#values}
  */
  readonly values: string[];
}

export function dataOciDatacatalogDataAssetsFilterToTerraform(struct?: DataOciDatacatalogDataAssetsFilter | cdktf.IResolvable): any {
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


export function dataOciDatacatalogDataAssetsFilterToHclTerraform(struct?: DataOciDatacatalogDataAssetsFilter | cdktf.IResolvable): any {
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

export class DataOciDatacatalogDataAssetsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatacatalogDataAssetsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatacatalogDataAssetsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatacatalogDataAssetsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatacatalogDataAssetsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatacatalogDataAssetsFilterOutputReference {
    return new DataOciDatacatalogDataAssetsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_data_assets oci_datacatalog_data_assets}
*/
export class DataOciDatacatalogDataAssets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_datacatalog_data_assets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatacatalogDataAssets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatacatalogDataAssets to import
  * @param importFromId The id of the existing DataOciDatacatalogDataAssets that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_data_assets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatacatalogDataAssets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_datacatalog_data_assets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_data_assets oci_datacatalog_data_assets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatacatalogDataAssetsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatacatalogDataAssetsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datacatalog_data_assets',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._catalogId = config.catalogId;
    this._createdById = config.createdById;
    this._displayName = config.displayName;
    this._displayNameContains = config.displayNameContains;
    this._externalKey = config.externalKey;
    this._fields = config.fields;
    this._id = config.id;
    this._state = config.state;
    this._typeKey = config.typeKey;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_id - computed: false, optional: false, required: true
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // created_by_id - computed: false, optional: true, required: false
  private _createdById?: string; 
  public get createdById() {
    return this.getStringAttribute('created_by_id');
  }
  public set createdById(value: string) {
    this._createdById = value;
  }
  public resetCreatedById() {
    this._createdById = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByIdInput() {
    return this._createdById;
  }

  // data_asset_collection - computed: true, optional: false, required: false
  private _dataAssetCollection = new DataOciDatacatalogDataAssetsDataAssetCollectionList(this, "data_asset_collection", false);
  public get dataAssetCollection() {
    return this._dataAssetCollection;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // display_name_contains - computed: false, optional: true, required: false
  private _displayNameContains?: string; 
  public get displayNameContains() {
    return this.getStringAttribute('display_name_contains');
  }
  public set displayNameContains(value: string) {
    this._displayNameContains = value;
  }
  public resetDisplayNameContains() {
    this._displayNameContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameContainsInput() {
    return this._displayNameContains;
  }

  // external_key - computed: false, optional: true, required: false
  private _externalKey?: string; 
  public get externalKey() {
    return this.getStringAttribute('external_key');
  }
  public set externalKey(value: string) {
    this._externalKey = value;
  }
  public resetExternalKey() {
    this._externalKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalKeyInput() {
    return this._externalKey;
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return cdktf.Fn.tolist(this.getListAttribute('fields'));
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // type_key - computed: false, optional: true, required: false
  private _typeKey?: string; 
  public get typeKey() {
    return this.getStringAttribute('type_key');
  }
  public set typeKey(value: string) {
    this._typeKey = value;
  }
  public resetTypeKey() {
    this._typeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeKeyInput() {
    return this._typeKey;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatacatalogDataAssetsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatacatalogDataAssetsFilter[] | cdktf.IResolvable) {
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
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      created_by_id: cdktf.stringToTerraform(this._createdById),
      display_name: cdktf.stringToTerraform(this._displayName),
      display_name_contains: cdktf.stringToTerraform(this._displayNameContains),
      external_key: cdktf.stringToTerraform(this._externalKey),
      fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fields),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      type_key: cdktf.stringToTerraform(this._typeKey),
      filter: cdktf.listMapper(dataOciDatacatalogDataAssetsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_id: {
        value: cdktf.stringToHclTerraform(this._catalogId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_by_id: {
        value: cdktf.stringToHclTerraform(this._createdById),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name_contains: {
        value: cdktf.stringToHclTerraform(this._displayNameContains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_key: {
        value: cdktf.stringToHclTerraform(this._externalKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fields),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type_key: {
        value: cdktf.stringToHclTerraform(this._typeKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDatacatalogDataAssetsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatacatalogDataAssetsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
