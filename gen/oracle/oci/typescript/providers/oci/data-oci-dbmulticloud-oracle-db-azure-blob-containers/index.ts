// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dbmulticloud_oracle_db_azure_blob_containers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDbmulticloudOracleDbAzureBlobContainersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dbmulticloud_oracle_db_azure_blob_containers#azure_storage_account_name DataOciDbmulticloudOracleDbAzureBlobContainers#azure_storage_account_name}
  */
  readonly azureStorageAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dbmulticloud_oracle_db_azure_blob_containers#azure_storage_container_name DataOciDbmulticloudOracleDbAzureBlobContainers#azure_storage_container_name}
  */
  readonly azureStorageContainerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dbmulticloud_oracle_db_azure_blob_containers#compartment_id DataOciDbmulticloudOracleDbAzureBlobContainers#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dbmulticloud_oracle_db_azure_blob_containers#display_name DataOciDbmulticloudOracleDbAzureBlobContainers#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dbmulticloud_oracle_db_azure_blob_containers#id DataOciDbmulticloudOracleDbAzureBlobContainers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dbmulticloud_oracle_db_azure_blob_containers#oracle_db_azure_blob_container_id DataOciDbmulticloudOracleDbAzureBlobContainers#oracle_db_azure_blob_container_id}
  */
  readonly oracleDbAzureBlobContainerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dbmulticloud_oracle_db_azure_blob_containers#state DataOciDbmulticloudOracleDbAzureBlobContainers#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dbmulticloud_oracle_db_azure_blob_containers#filter DataOciDbmulticloudOracleDbAzureBlobContainers#filter}
  */
  readonly filter?: DataOciDbmulticloudOracleDbAzureBlobContainersFilter[] | cdktf.IResolvable;
}
export interface DataOciDbmulticloudOracleDbAzureBlobContainersOracleDbAzureBlobContainerSummaryCollectionItems {
}

export function dataOciDbmulticloudOracleDbAzureBlobContainersOracleDbAzureBlobContainerSummaryCollectionItemsToTerraform(struct?: DataOciDbmulticloudOracleDbAzureBlobContainersOracleDbAzureBlobContainerSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDbmulticloudOracleDbAzureBlobContainersOracleDbAzureBlobContainerSummaryCollectionItemsToHclTerraform(struct?: DataOciDbmulticloudOracleDbAzureBlobContainersOracleDbAzureBlobContainerSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDbmulticloudOracleDbAzureBlobContainersOracleDbAzureBlobContainerSummaryCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDbmulticloudOracleDbAzureBlobContainersOracleDbAzureBlobContainerSummaryCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDbmulticloudOracleDbAzureBlobContainersOracleDbAzureBlobContainerSummaryCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_storage_account_name - computed: true, optional: false, required: false
  public get azureStorageAccountName() {
    return this.getStringAttribute('azure_storage_account_name');
  }

  // azure_storage_container_name - computed: true, optional: false, required: false
  public get azureStorageContainerName() {
    return this.getStringAttribute('azure_storage_container_name');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modification - computed: true, optional: false, required: false
  public get lastModification() {
    return this.getStringAttribute('last_modification');
  }

  // lifecycle_state_details - computed: true, optional: false, required: false
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // private_endpoint_dns_alias - computed: true, optional: false, required: false
  public get privateEndpointDnsAlias() {
    return this.getStringAttribute('private_endpoint_dns_alias');
  }

  // private_endpoint_ip_address - computed: true, optional: false, required: false
  public get privateEndpointIpAddress() {
    return this.getStringAttribute('private_endpoint_ip_address');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataOciDbmulticloudOracleDbAzureBlobContainersOracleDbAzureBlobContainerSummaryCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDbmulticloudOracleDbAzureBlobContainersOracleDbAzureBlobContainerSummaryCollectionItemsOutputReference {
    return new DataOciDbmulticloudOracleDbAzureBlobContainersOracleDbAzureBlobContainerSummaryCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDbmulticloudOracleDbAzureBlobContainersOracleDbAzureBlobContainerSummaryCollection {
}

export function dataOciDbmulticloudOracleDbAzureBlobContainersOracleDbAzureBlobContainerSummaryCollectionToTerraform(struct?: DataOciDbmulticloudOracleDbAzureBlobContainersOracleDbAzureBlobContainerSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDbmulticloudOracleDbAzureBlobContainersOracleDbAzureBlobContainerSummaryCollectionToHclTerraform(struct?: DataOciDbmulticloudOracleDbAzureBlobContainersOracleDbAzureBlobContainerSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDbmulticloudOracleDbAzureBlobContainersOracleDbAzureBlobContainerSummaryCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDbmulticloudOracleDbAzureBlobContainersOracleDbAzureBlobContainerSummaryCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDbmulticloudOracleDbAzureBlobContainersOracleDbAzureBlobContainerSummaryCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDbmulticloudOracleDbAzureBlobContainersOracleDbAzureBlobContainerSummaryCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDbmulticloudOracleDbAzureBlobContainersOracleDbAzureBlobContainerSummaryCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDbmulticloudOracleDbAzureBlobContainersOracleDbAzureBlobContainerSummaryCollectionOutputReference {
    return new DataOciDbmulticloudOracleDbAzureBlobContainersOracleDbAzureBlobContainerSummaryCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDbmulticloudOracleDbAzureBlobContainersFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dbmulticloud_oracle_db_azure_blob_containers#name DataOciDbmulticloudOracleDbAzureBlobContainers#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dbmulticloud_oracle_db_azure_blob_containers#regex DataOciDbmulticloudOracleDbAzureBlobContainers#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dbmulticloud_oracle_db_azure_blob_containers#values DataOciDbmulticloudOracleDbAzureBlobContainers#values}
  */
  readonly values: string[];
}

export function dataOciDbmulticloudOracleDbAzureBlobContainersFilterToTerraform(struct?: DataOciDbmulticloudOracleDbAzureBlobContainersFilter | cdktf.IResolvable): any {
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


export function dataOciDbmulticloudOracleDbAzureBlobContainersFilterToHclTerraform(struct?: DataOciDbmulticloudOracleDbAzureBlobContainersFilter | cdktf.IResolvable): any {
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

export class DataOciDbmulticloudOracleDbAzureBlobContainersFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDbmulticloudOracleDbAzureBlobContainersFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDbmulticloudOracleDbAzureBlobContainersFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDbmulticloudOracleDbAzureBlobContainersFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDbmulticloudOracleDbAzureBlobContainersFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDbmulticloudOracleDbAzureBlobContainersFilterOutputReference {
    return new DataOciDbmulticloudOracleDbAzureBlobContainersFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dbmulticloud_oracle_db_azure_blob_containers oci_dbmulticloud_oracle_db_azure_blob_containers}
*/
export class DataOciDbmulticloudOracleDbAzureBlobContainers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dbmulticloud_oracle_db_azure_blob_containers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDbmulticloudOracleDbAzureBlobContainers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDbmulticloudOracleDbAzureBlobContainers to import
  * @param importFromId The id of the existing DataOciDbmulticloudOracleDbAzureBlobContainers that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dbmulticloud_oracle_db_azure_blob_containers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDbmulticloudOracleDbAzureBlobContainers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dbmulticloud_oracle_db_azure_blob_containers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/dbmulticloud_oracle_db_azure_blob_containers oci_dbmulticloud_oracle_db_azure_blob_containers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDbmulticloudOracleDbAzureBlobContainersConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDbmulticloudOracleDbAzureBlobContainersConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dbmulticloud_oracle_db_azure_blob_containers',
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
    this._azureStorageAccountName = config.azureStorageAccountName;
    this._azureStorageContainerName = config.azureStorageContainerName;
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._oracleDbAzureBlobContainerId = config.oracleDbAzureBlobContainerId;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_storage_account_name - computed: false, optional: true, required: false
  private _azureStorageAccountName?: string; 
  public get azureStorageAccountName() {
    return this.getStringAttribute('azure_storage_account_name');
  }
  public set azureStorageAccountName(value: string) {
    this._azureStorageAccountName = value;
  }
  public resetAzureStorageAccountName() {
    this._azureStorageAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageAccountNameInput() {
    return this._azureStorageAccountName;
  }

  // azure_storage_container_name - computed: false, optional: true, required: false
  private _azureStorageContainerName?: string; 
  public get azureStorageContainerName() {
    return this.getStringAttribute('azure_storage_container_name');
  }
  public set azureStorageContainerName(value: string) {
    this._azureStorageContainerName = value;
  }
  public resetAzureStorageContainerName() {
    this._azureStorageContainerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageContainerNameInput() {
    return this._azureStorageContainerName;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
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

  // oracle_db_azure_blob_container_id - computed: false, optional: true, required: false
  private _oracleDbAzureBlobContainerId?: string; 
  public get oracleDbAzureBlobContainerId() {
    return this.getStringAttribute('oracle_db_azure_blob_container_id');
  }
  public set oracleDbAzureBlobContainerId(value: string) {
    this._oracleDbAzureBlobContainerId = value;
  }
  public resetOracleDbAzureBlobContainerId() {
    this._oracleDbAzureBlobContainerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleDbAzureBlobContainerIdInput() {
    return this._oracleDbAzureBlobContainerId;
  }

  // oracle_db_azure_blob_container_summary_collection - computed: true, optional: false, required: false
  private _oracleDbAzureBlobContainerSummaryCollection = new DataOciDbmulticloudOracleDbAzureBlobContainersOracleDbAzureBlobContainerSummaryCollectionList(this, "oracle_db_azure_blob_container_summary_collection", false);
  public get oracleDbAzureBlobContainerSummaryCollection() {
    return this._oracleDbAzureBlobContainerSummaryCollection;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDbmulticloudOracleDbAzureBlobContainersFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDbmulticloudOracleDbAzureBlobContainersFilter[] | cdktf.IResolvable) {
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
      azure_storage_account_name: cdktf.stringToTerraform(this._azureStorageAccountName),
      azure_storage_container_name: cdktf.stringToTerraform(this._azureStorageContainerName),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      oracle_db_azure_blob_container_id: cdktf.stringToTerraform(this._oracleDbAzureBlobContainerId),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciDbmulticloudOracleDbAzureBlobContainersFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azure_storage_account_name: {
        value: cdktf.stringToHclTerraform(this._azureStorageAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_storage_container_name: {
        value: cdktf.stringToHclTerraform(this._azureStorageContainerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oracle_db_azure_blob_container_id: {
        value: cdktf.stringToHclTerraform(this._oracleDbAzureBlobContainerId),
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
      filter: {
        value: cdktf.listMapperHcl(dataOciDbmulticloudOracleDbAzureBlobContainersFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDbmulticloudOracleDbAzureBlobContainersFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
