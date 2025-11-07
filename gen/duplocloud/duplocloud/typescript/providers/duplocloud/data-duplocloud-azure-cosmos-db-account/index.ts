// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/data-sources/azure_cosmos_db_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDuplocloudAzureCosmosDbAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/data-sources/azure_cosmos_db_account#id DataDuplocloudAzureCosmosDbAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name for availability set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/data-sources/azure_cosmos_db_account#name DataDuplocloudAzureCosmosDbAccount#name}
  */
  readonly name: string;
  /**
  * The GUID of the tenant that the host will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/data-sources/azure_cosmos_db_account#tenant_id DataDuplocloudAzureCosmosDbAccount#tenant_id}
  */
  readonly tenantId: string;
}
export interface DataDuplocloudAzureCosmosDbAccountBackupPolicy {
}

export function dataDuplocloudAzureCosmosDbAccountBackupPolicyToTerraform(struct?: DataDuplocloudAzureCosmosDbAccountBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudAzureCosmosDbAccountBackupPolicyToHclTerraform(struct?: DataDuplocloudAzureCosmosDbAccountBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudAzureCosmosDbAccountBackupPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudAzureCosmosDbAccountBackupPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudAzureCosmosDbAccountBackupPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backup_interval - computed: true, optional: false, required: false
  public get backupInterval() {
    return this.getNumberAttribute('backup_interval');
  }

  // backup_retention_interval - computed: true, optional: false, required: false
  public get backupRetentionInterval() {
    return this.getNumberAttribute('backup_retention_interval');
  }

  // backup_storage_redundancy - computed: true, optional: false, required: false
  public get backupStorageRedundancy() {
    return this.getStringAttribute('backup_storage_redundancy');
  }

  // continuous_mode_tier - computed: true, optional: false, required: false
  public get continuousModeTier() {
    return this.getStringAttribute('continuous_mode_tier');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataDuplocloudAzureCosmosDbAccountBackupPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudAzureCosmosDbAccountBackupPolicyOutputReference {
    return new DataDuplocloudAzureCosmosDbAccountBackupPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudAzureCosmosDbAccountCapabilities {
}

export function dataDuplocloudAzureCosmosDbAccountCapabilitiesToTerraform(struct?: DataDuplocloudAzureCosmosDbAccountCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudAzureCosmosDbAccountCapabilitiesToHclTerraform(struct?: DataDuplocloudAzureCosmosDbAccountCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudAzureCosmosDbAccountCapabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudAzureCosmosDbAccountCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudAzureCosmosDbAccountCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataDuplocloudAzureCosmosDbAccountCapabilitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudAzureCosmosDbAccountCapabilitiesOutputReference {
    return new DataDuplocloudAzureCosmosDbAccountCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudAzureCosmosDbAccountConsistencyPolicy {
}

export function dataDuplocloudAzureCosmosDbAccountConsistencyPolicyToTerraform(struct?: DataDuplocloudAzureCosmosDbAccountConsistencyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudAzureCosmosDbAccountConsistencyPolicyToHclTerraform(struct?: DataDuplocloudAzureCosmosDbAccountConsistencyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudAzureCosmosDbAccountConsistencyPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudAzureCosmosDbAccountConsistencyPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudAzureCosmosDbAccountConsistencyPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_consistency_level - computed: true, optional: false, required: false
  public get defaultConsistencyLevel() {
    return this.getStringAttribute('default_consistency_level');
  }

  // max_interval_in_seconds - computed: true, optional: false, required: false
  public get maxIntervalInSeconds() {
    return this.getNumberAttribute('max_interval_in_seconds');
  }

  // max_staleness_prefix - computed: true, optional: false, required: false
  public get maxStalenessPrefix() {
    return this.getNumberAttribute('max_staleness_prefix');
  }
}

export class DataDuplocloudAzureCosmosDbAccountConsistencyPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudAzureCosmosDbAccountConsistencyPolicyOutputReference {
    return new DataDuplocloudAzureCosmosDbAccountConsistencyPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudAzureCosmosDbAccountGeoLocation {
}

export function dataDuplocloudAzureCosmosDbAccountGeoLocationToTerraform(struct?: DataDuplocloudAzureCosmosDbAccountGeoLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudAzureCosmosDbAccountGeoLocationToHclTerraform(struct?: DataDuplocloudAzureCosmosDbAccountGeoLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudAzureCosmosDbAccountGeoLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudAzureCosmosDbAccountGeoLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudAzureCosmosDbAccountGeoLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failover_priority - computed: true, optional: false, required: false
  public get failoverPriority() {
    return this.getNumberAttribute('failover_priority');
  }

  // is_zone_redundant - computed: true, optional: false, required: false
  public get isZoneRedundant() {
    return this.getBooleanAttribute('is_zone_redundant');
  }

  // location_name - computed: true, optional: false, required: false
  public get locationName() {
    return this.getStringAttribute('location_name');
  }
}

export class DataDuplocloudAzureCosmosDbAccountGeoLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudAzureCosmosDbAccountGeoLocationOutputReference {
    return new DataDuplocloudAzureCosmosDbAccountGeoLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudAzureCosmosDbAccountVirtualNetworkRule {
}

export function dataDuplocloudAzureCosmosDbAccountVirtualNetworkRuleToTerraform(struct?: DataDuplocloudAzureCosmosDbAccountVirtualNetworkRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudAzureCosmosDbAccountVirtualNetworkRuleToHclTerraform(struct?: DataDuplocloudAzureCosmosDbAccountVirtualNetworkRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudAzureCosmosDbAccountVirtualNetworkRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudAzureCosmosDbAccountVirtualNetworkRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudAzureCosmosDbAccountVirtualNetworkRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ignore_missing_vnet_service_endpoint - computed: true, optional: false, required: false
  public get ignoreMissingVnetServiceEndpoint() {
    return this.getBooleanAttribute('ignore_missing_vnet_service_endpoint');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataDuplocloudAzureCosmosDbAccountVirtualNetworkRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudAzureCosmosDbAccountVirtualNetworkRuleOutputReference {
    return new DataDuplocloudAzureCosmosDbAccountVirtualNetworkRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/data-sources/azure_cosmos_db_account duplocloud_azure_cosmos_db_account}
*/
export class DataDuplocloudAzureCosmosDbAccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_azure_cosmos_db_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDuplocloudAzureCosmosDbAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDuplocloudAzureCosmosDbAccount to import
  * @param importFromId The id of the existing DataDuplocloudAzureCosmosDbAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/data-sources/azure_cosmos_db_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDuplocloudAzureCosmosDbAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_azure_cosmos_db_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/data-sources/azure_cosmos_db_account duplocloud_azure_cosmos_db_account} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDuplocloudAzureCosmosDbAccountConfig
  */
  public constructor(scope: Construct, id: string, config: DataDuplocloudAzureCosmosDbAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_azure_cosmos_db_account',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.28'
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
    this._name = config.name;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_policy - computed: true, optional: false, required: false
  private _backupPolicy = new DataDuplocloudAzureCosmosDbAccountBackupPolicyList(this, "backup_policy", false);
  public get backupPolicy() {
    return this._backupPolicy;
  }

  // capabilities - computed: true, optional: false, required: false
  private _capabilities = new DataDuplocloudAzureCosmosDbAccountCapabilitiesList(this, "capabilities", false);
  public get capabilities() {
    return this._capabilities;
  }

  // capacity_mode - computed: true, optional: false, required: false
  public get capacityMode() {
    return this.getStringAttribute('capacity_mode');
  }

  // consistency_policy - computed: true, optional: false, required: false
  private _consistencyPolicy = new DataDuplocloudAzureCosmosDbAccountConsistencyPolicyList(this, "consistency_policy", false);
  public get consistencyPolicy() {
    return this._consistencyPolicy;
  }

  // disable_key_based_metadata_write_access - computed: true, optional: false, required: false
  public get disableKeyBasedMetadataWriteAccess() {
    return this.getBooleanAttribute('disable_key_based_metadata_write_access');
  }

  // enable_free_tier - computed: true, optional: false, required: false
  public get enableFreeTier() {
    return this.getBooleanAttribute('enable_free_tier');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // geo_location - computed: true, optional: false, required: false
  private _geoLocation = new DataDuplocloudAzureCosmosDbAccountGeoLocationList(this, "geo_location", false);
  public get geoLocation() {
    return this._geoLocation;
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

  // is_virtual_network_filter_enabled - computed: true, optional: false, required: false
  public get isVirtualNetworkFilterEnabled() {
    return this.getBooleanAttribute('is_virtual_network_filter_enabled');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // locations - computed: true, optional: false, required: false
  public get locations() {
    return this.getStringAttribute('locations');
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

  // primary_master_key - computed: true, optional: false, required: false
  public get primaryMasterKey() {
    return this.getStringAttribute('primary_master_key');
  }

  // primary_mongo_connection_string - computed: true, optional: false, required: false
  public get primaryMongoConnectionString() {
    return this.getStringAttribute('primary_mongo_connection_string');
  }

  // primary_readonly_master_key - computed: true, optional: false, required: false
  public get primaryReadonlyMasterKey() {
    return this.getStringAttribute('primary_readonly_master_key');
  }

  // primary_readonly_mongo_connection_string - computed: true, optional: false, required: false
  public get primaryReadonlyMongoConnectionString() {
    return this.getStringAttribute('primary_readonly_mongo_connection_string');
  }

  // primary_readonly_sql_connection_string - computed: true, optional: false, required: false
  public get primaryReadonlySqlConnectionString() {
    return this.getStringAttribute('primary_readonly_sql_connection_string');
  }

  // primary_sql_connection_string - computed: true, optional: false, required: false
  public get primarySqlConnectionString() {
    return this.getStringAttribute('primary_sql_connection_string');
  }

  // public_network_access - computed: true, optional: false, required: false
  public get publicNetworkAccess() {
    return this.getStringAttribute('public_network_access');
  }

  // read_endpoints - computed: true, optional: false, required: false
  public get readEndpoints() {
    return this.getListAttribute('read_endpoints');
  }

  // secondary_master_key - computed: true, optional: false, required: false
  public get secondaryMasterKey() {
    return this.getStringAttribute('secondary_master_key');
  }

  // secondary_mongo_connection_string - computed: true, optional: false, required: false
  public get secondaryMongoConnectionString() {
    return this.getStringAttribute('secondary_mongo_connection_string');
  }

  // secondary_readonly_master_key - computed: true, optional: false, required: false
  public get secondaryReadonlyMasterKey() {
    return this.getStringAttribute('secondary_readonly_master_key');
  }

  // secondary_readonly_mongo_connection_string - computed: true, optional: false, required: false
  public get secondaryReadonlyMongoConnectionString() {
    return this.getStringAttribute('secondary_readonly_mongo_connection_string');
  }

  // secondary_readonly_sql_connection_string - computed: true, optional: false, required: false
  public get secondaryReadonlySqlConnectionString() {
    return this.getStringAttribute('secondary_readonly_sql_connection_string');
  }

  // secondary_sql_connection_string - computed: true, optional: false, required: false
  public get secondarySqlConnectionString() {
    return this.getStringAttribute('secondary_sql_connection_string');
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // virtual_network_rule - computed: true, optional: false, required: false
  private _virtualNetworkRule = new DataDuplocloudAzureCosmosDbAccountVirtualNetworkRuleList(this, "virtual_network_rule", false);
  public get virtualNetworkRule() {
    return this._virtualNetworkRule;
  }

  // write_endpoints - computed: true, optional: false, required: false
  public get writeEndpoints() {
    return this.getListAttribute('write_endpoints');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
