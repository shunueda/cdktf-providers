// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureCosmosDbAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable write operations on metadata resources (databases, containers, throughput) via account keys Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#disable_key_based_metadata_write_access AzureCosmosDbAccount#disable_key_based_metadata_write_access}
  */
  readonly disableKeyBasedMetadataWriteAccess?: boolean | cdktf.IResolvable;
  /**
  * Flag to indicate whether Free Tier is enabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#enable_free_tier AzureCosmosDbAccount#enable_free_tier}
  */
  readonly enableFreeTier?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#id AzureCosmosDbAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enables virtual network filtering for this Cosmos DB account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#is_virtual_network_filter_enabled AzureCosmosDbAccount#is_virtual_network_filter_enabled}
  */
  readonly isVirtualNetworkFilterEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates the type of database account. This can only be set at database account creation.
  * 			Allowed Account Kind : GlobalDocumentDB.
  * 			Future support MongoDB, Parse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#kind AzureCosmosDbAccount#kind}
  */
  readonly kind: string;
  /**
  * The name for availability set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#name AzureCosmosDbAccount#name}
  */
  readonly name: string;
  /**
  * Flag to indicate whether to enable/disable public network access. Defaults to `Enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#public_network_access AzureCosmosDbAccount#public_network_access}
  */
  readonly publicNetworkAccess?: string;
  /**
  * The GUID of the tenant that the host will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#tenant_id AzureCosmosDbAccount#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Specifies the  Cosmos DB account type. Defaults to `Microsoft.DocumentDB/databaseAccounts`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#type AzureCosmosDbAccount#type}
  */
  readonly type?: string;
  /**
  * backup_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#backup_policy AzureCosmosDbAccount#backup_policy}
  */
  readonly backupPolicy?: AzureCosmosDbAccountBackupPolicy;
  /**
  * capabilities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#capabilities AzureCosmosDbAccount#capabilities}
  */
  readonly capabilities?: AzureCosmosDbAccountCapabilities[] | cdktf.IResolvable;
  /**
  * consistency_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#consistency_policy AzureCosmosDbAccount#consistency_policy}
  */
  readonly consistencyPolicy?: AzureCosmosDbAccountConsistencyPolicy;
  /**
  * geo_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#geo_location AzureCosmosDbAccount#geo_location}
  */
  readonly geoLocation: AzureCosmosDbAccountGeoLocation[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#timeouts AzureCosmosDbAccount#timeouts}
  */
  readonly timeouts?: AzureCosmosDbAccountTimeouts;
  /**
  * virtual_network_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#virtual_network_rule AzureCosmosDbAccount#virtual_network_rule}
  */
  readonly virtualNetworkRule?: AzureCosmosDbAccountVirtualNetworkRule[] | cdktf.IResolvable;
}
export interface AzureCosmosDbAccountBackupPolicy {
  /**
  * Backup interval in minutes. Can be configured when type is set to Periodic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#backup_interval AzureCosmosDbAccount#backup_interval}
  */
  readonly backupInterval?: number;
  /**
  * Backup retention interval in hours
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#backup_retention_interval AzureCosmosDbAccount#backup_retention_interval}
  */
  readonly backupRetentionInterval?: number;
  /**
  * Backup storage redundancy type. Valid values are Geo, Local, Zone. Defaults to Geo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#backup_storage_redundancy AzureCosmosDbAccount#backup_storage_redundancy}
  */
  readonly backupStorageRedundancy?: string;
  /**
  * The type of backup. Possible values are Periodic and Continuous
  * 						> ⚠️ **Note:**: 
  * 						> Update from Periodic to Continuous type is allowed. To change from Periodic to Continuous resource need to be recreated Defaults to `Periodic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#type AzureCosmosDbAccount#type}
  */
  readonly type?: string;
}

export function azureCosmosDbAccountBackupPolicyToTerraform(struct?: AzureCosmosDbAccountBackupPolicyOutputReference | AzureCosmosDbAccountBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_interval: cdktf.numberToTerraform(struct!.backupInterval),
    backup_retention_interval: cdktf.numberToTerraform(struct!.backupRetentionInterval),
    backup_storage_redundancy: cdktf.stringToTerraform(struct!.backupStorageRedundancy),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function azureCosmosDbAccountBackupPolicyToHclTerraform(struct?: AzureCosmosDbAccountBackupPolicyOutputReference | AzureCosmosDbAccountBackupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_interval: {
      value: cdktf.numberToHclTerraform(struct!.backupInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_retention_interval: {
      value: cdktf.numberToHclTerraform(struct!.backupRetentionInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_storage_redundancy: {
      value: cdktf.stringToHclTerraform(struct!.backupStorageRedundancy),
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

export class AzureCosmosDbAccountBackupPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureCosmosDbAccountBackupPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupInterval = this._backupInterval;
    }
    if (this._backupRetentionInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRetentionInterval = this._backupRetentionInterval;
    }
    if (this._backupStorageRedundancy !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupStorageRedundancy = this._backupStorageRedundancy;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureCosmosDbAccountBackupPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupInterval = undefined;
      this._backupRetentionInterval = undefined;
      this._backupStorageRedundancy = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupInterval = value.backupInterval;
      this._backupRetentionInterval = value.backupRetentionInterval;
      this._backupStorageRedundancy = value.backupStorageRedundancy;
      this._type = value.type;
    }
  }

  // backup_interval - computed: false, optional: true, required: false
  private _backupInterval?: number; 
  public get backupInterval() {
    return this.getNumberAttribute('backup_interval');
  }
  public set backupInterval(value: number) {
    this._backupInterval = value;
  }
  public resetBackupInterval() {
    this._backupInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIntervalInput() {
    return this._backupInterval;
  }

  // backup_retention_interval - computed: false, optional: true, required: false
  private _backupRetentionInterval?: number; 
  public get backupRetentionInterval() {
    return this.getNumberAttribute('backup_retention_interval');
  }
  public set backupRetentionInterval(value: number) {
    this._backupRetentionInterval = value;
  }
  public resetBackupRetentionInterval() {
    this._backupRetentionInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionIntervalInput() {
    return this._backupRetentionInterval;
  }

  // backup_storage_redundancy - computed: true, optional: true, required: false
  private _backupStorageRedundancy?: string; 
  public get backupStorageRedundancy() {
    return this.getStringAttribute('backup_storage_redundancy');
  }
  public set backupStorageRedundancy(value: string) {
    this._backupStorageRedundancy = value;
  }
  public resetBackupStorageRedundancy() {
    this._backupStorageRedundancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStorageRedundancyInput() {
    return this._backupStorageRedundancy;
  }

  // continuous_mode_tier - computed: true, optional: false, required: false
  public get continuousModeTier() {
    return this.getStringAttribute('continuous_mode_tier');
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
}
export interface AzureCosmosDbAccountCapabilities {
  /**
  * Name of the Cosmos DB capability, for example, 'EnableServerless'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#name AzureCosmosDbAccount#name}
  */
  readonly name: string;
}

export function azureCosmosDbAccountCapabilitiesToTerraform(struct?: AzureCosmosDbAccountCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function azureCosmosDbAccountCapabilitiesToHclTerraform(struct?: AzureCosmosDbAccountCapabilities | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureCosmosDbAccountCapabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureCosmosDbAccountCapabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureCosmosDbAccountCapabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class AzureCosmosDbAccountCapabilitiesList extends cdktf.ComplexList {
  public internalValue? : AzureCosmosDbAccountCapabilities[] | cdktf.IResolvable

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
  public get(index: number): AzureCosmosDbAccountCapabilitiesOutputReference {
    return new AzureCosmosDbAccountCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureCosmosDbAccountConsistencyPolicy {
  /**
  * Specify the default consistency level and configuration settings of the Cosmos DB account. Possible values include: 'Eventual', 'Session', 'BoundedStaleness','Strong', 'ConsistentPrefix'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#default_consistency_level AzureCosmosDbAccount#default_consistency_level}
  */
  readonly defaultConsistencyLevel?: string;
  /**
  * When used with the 'Bounded Staleness' consistency level, this value represents the time amount of staleness (in seconds) tolerated. The accepted range for this value is 5 - 86400 (1 day). Required when consistency_level is set to BoundedStaleness.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#max_interval_in_seconds AzureCosmosDbAccount#max_interval_in_seconds}
  */
  readonly maxIntervalInSeconds?: number;
  /**
  * When used with the 'Bounded Staleness' consistency level, this value represents the number of stale requests tolerated. The accepted range for this value is 10 – 2147483647. Defaults to 100. Required when 'consistency_level' is set to 'BoundedStaleness'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#max_staleness_prefix AzureCosmosDbAccount#max_staleness_prefix}
  */
  readonly maxStalenessPrefix?: number;
}

export function azureCosmosDbAccountConsistencyPolicyToTerraform(struct?: AzureCosmosDbAccountConsistencyPolicyOutputReference | AzureCosmosDbAccountConsistencyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_consistency_level: cdktf.stringToTerraform(struct!.defaultConsistencyLevel),
    max_interval_in_seconds: cdktf.numberToTerraform(struct!.maxIntervalInSeconds),
    max_staleness_prefix: cdktf.numberToTerraform(struct!.maxStalenessPrefix),
  }
}


export function azureCosmosDbAccountConsistencyPolicyToHclTerraform(struct?: AzureCosmosDbAccountConsistencyPolicyOutputReference | AzureCosmosDbAccountConsistencyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_consistency_level: {
      value: cdktf.stringToHclTerraform(struct!.defaultConsistencyLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_interval_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxIntervalInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_staleness_prefix: {
      value: cdktf.numberToHclTerraform(struct!.maxStalenessPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureCosmosDbAccountConsistencyPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureCosmosDbAccountConsistencyPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultConsistencyLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultConsistencyLevel = this._defaultConsistencyLevel;
    }
    if (this._maxIntervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIntervalInSeconds = this._maxIntervalInSeconds;
    }
    if (this._maxStalenessPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStalenessPrefix = this._maxStalenessPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureCosmosDbAccountConsistencyPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultConsistencyLevel = undefined;
      this._maxIntervalInSeconds = undefined;
      this._maxStalenessPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultConsistencyLevel = value.defaultConsistencyLevel;
      this._maxIntervalInSeconds = value.maxIntervalInSeconds;
      this._maxStalenessPrefix = value.maxStalenessPrefix;
    }
  }

  // default_consistency_level - computed: false, optional: true, required: false
  private _defaultConsistencyLevel?: string; 
  public get defaultConsistencyLevel() {
    return this.getStringAttribute('default_consistency_level');
  }
  public set defaultConsistencyLevel(value: string) {
    this._defaultConsistencyLevel = value;
  }
  public resetDefaultConsistencyLevel() {
    this._defaultConsistencyLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultConsistencyLevelInput() {
    return this._defaultConsistencyLevel;
  }

  // max_interval_in_seconds - computed: true, optional: true, required: false
  private _maxIntervalInSeconds?: number; 
  public get maxIntervalInSeconds() {
    return this.getNumberAttribute('max_interval_in_seconds');
  }
  public set maxIntervalInSeconds(value: number) {
    this._maxIntervalInSeconds = value;
  }
  public resetMaxIntervalInSeconds() {
    this._maxIntervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIntervalInSecondsInput() {
    return this._maxIntervalInSeconds;
  }

  // max_staleness_prefix - computed: true, optional: true, required: false
  private _maxStalenessPrefix?: number; 
  public get maxStalenessPrefix() {
    return this.getNumberAttribute('max_staleness_prefix');
  }
  public set maxStalenessPrefix(value: number) {
    this._maxStalenessPrefix = value;
  }
  public resetMaxStalenessPrefix() {
    this._maxStalenessPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStalenessPrefixInput() {
    return this._maxStalenessPrefix;
  }
}
export interface AzureCosmosDbAccountGeoLocation {
  /**
  * The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority = (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists. Changing this causes the location to be re-provisioned and cannot be changed for the location with failover priority 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#failover_priority AzureCosmosDbAccount#failover_priority}
  */
  readonly failoverPriority: number;
  /**
  * Should zone redundancy be enabled for this region? Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#is_zone_redundant AzureCosmosDbAccount#is_zone_redundant}
  */
  readonly isZoneRedundant?: boolean | cdktf.IResolvable;
  /**
  * The name of the Azure region to host replicated data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#location_name AzureCosmosDbAccount#location_name}
  */
  readonly locationName: string;
}

export function azureCosmosDbAccountGeoLocationToTerraform(struct?: AzureCosmosDbAccountGeoLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failover_priority: cdktf.numberToTerraform(struct!.failoverPriority),
    is_zone_redundant: cdktf.booleanToTerraform(struct!.isZoneRedundant),
    location_name: cdktf.stringToTerraform(struct!.locationName),
  }
}


export function azureCosmosDbAccountGeoLocationToHclTerraform(struct?: AzureCosmosDbAccountGeoLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failover_priority: {
      value: cdktf.numberToHclTerraform(struct!.failoverPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_zone_redundant: {
      value: cdktf.booleanToHclTerraform(struct!.isZoneRedundant),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    location_name: {
      value: cdktf.stringToHclTerraform(struct!.locationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureCosmosDbAccountGeoLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureCosmosDbAccountGeoLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failoverPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverPriority = this._failoverPriority;
    }
    if (this._isZoneRedundant !== undefined) {
      hasAnyValues = true;
      internalValueResult.isZoneRedundant = this._isZoneRedundant;
    }
    if (this._locationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationName = this._locationName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureCosmosDbAccountGeoLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failoverPriority = undefined;
      this._isZoneRedundant = undefined;
      this._locationName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failoverPriority = value.failoverPriority;
      this._isZoneRedundant = value.isZoneRedundant;
      this._locationName = value.locationName;
    }
  }

  // failover_priority - computed: false, optional: false, required: true
  private _failoverPriority?: number; 
  public get failoverPriority() {
    return this.getNumberAttribute('failover_priority');
  }
  public set failoverPriority(value: number) {
    this._failoverPriority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverPriorityInput() {
    return this._failoverPriority;
  }

  // is_zone_redundant - computed: false, optional: true, required: false
  private _isZoneRedundant?: boolean | cdktf.IResolvable; 
  public get isZoneRedundant() {
    return this.getBooleanAttribute('is_zone_redundant');
  }
  public set isZoneRedundant(value: boolean | cdktf.IResolvable) {
    this._isZoneRedundant = value;
  }
  public resetIsZoneRedundant() {
    this._isZoneRedundant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isZoneRedundantInput() {
    return this._isZoneRedundant;
  }

  // location_name - computed: false, optional: false, required: true
  private _locationName?: string; 
  public get locationName() {
    return this.getStringAttribute('location_name');
  }
  public set locationName(value: string) {
    this._locationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationNameInput() {
    return this._locationName;
  }
}

export class AzureCosmosDbAccountGeoLocationList extends cdktf.ComplexList {
  public internalValue? : AzureCosmosDbAccountGeoLocation[] | cdktf.IResolvable

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
  public get(index: number): AzureCosmosDbAccountGeoLocationOutputReference {
    return new AzureCosmosDbAccountGeoLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureCosmosDbAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#create AzureCosmosDbAccount#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#delete AzureCosmosDbAccount#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#update AzureCosmosDbAccount#update}
  */
  readonly update?: string;
}

export function azureCosmosDbAccountTimeoutsToTerraform(struct?: AzureCosmosDbAccountTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function azureCosmosDbAccountTimeoutsToHclTerraform(struct?: AzureCosmosDbAccountTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureCosmosDbAccountTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AzureCosmosDbAccountTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureCosmosDbAccountTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface AzureCosmosDbAccountVirtualNetworkRule {
  /**
  * If set to true, the specified subnet will be added as a virtual network rule even if its CosmosDB service endpoint is not active Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#ignore_missing_vnet_service_endpoint AzureCosmosDbAccount#ignore_missing_vnet_service_endpoint}
  */
  readonly ignoreMissingVnetServiceEndpoint?: boolean | cdktf.IResolvable;
  /**
  * The ID of the subnet to allow access to this CosmosDB account. This should be in the format /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{virtualNetworkName}/subnets/{subnetName}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#subnet_id AzureCosmosDbAccount#subnet_id}
  */
  readonly subnetId: string;
}

export function azureCosmosDbAccountVirtualNetworkRuleToTerraform(struct?: AzureCosmosDbAccountVirtualNetworkRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_missing_vnet_service_endpoint: cdktf.booleanToTerraform(struct!.ignoreMissingVnetServiceEndpoint),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function azureCosmosDbAccountVirtualNetworkRuleToHclTerraform(struct?: AzureCosmosDbAccountVirtualNetworkRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_missing_vnet_service_endpoint: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMissingVnetServiceEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureCosmosDbAccountVirtualNetworkRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureCosmosDbAccountVirtualNetworkRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreMissingVnetServiceEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMissingVnetServiceEndpoint = this._ignoreMissingVnetServiceEndpoint;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureCosmosDbAccountVirtualNetworkRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreMissingVnetServiceEndpoint = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreMissingVnetServiceEndpoint = value.ignoreMissingVnetServiceEndpoint;
      this._subnetId = value.subnetId;
    }
  }

  // ignore_missing_vnet_service_endpoint - computed: false, optional: true, required: false
  private _ignoreMissingVnetServiceEndpoint?: boolean | cdktf.IResolvable; 
  public get ignoreMissingVnetServiceEndpoint() {
    return this.getBooleanAttribute('ignore_missing_vnet_service_endpoint');
  }
  public set ignoreMissingVnetServiceEndpoint(value: boolean | cdktf.IResolvable) {
    this._ignoreMissingVnetServiceEndpoint = value;
  }
  public resetIgnoreMissingVnetServiceEndpoint() {
    this._ignoreMissingVnetServiceEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingVnetServiceEndpointInput() {
    return this._ignoreMissingVnetServiceEndpoint;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}

export class AzureCosmosDbAccountVirtualNetworkRuleList extends cdktf.ComplexList {
  public internalValue? : AzureCosmosDbAccountVirtualNetworkRule[] | cdktf.IResolvable

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
  public get(index: number): AzureCosmosDbAccountVirtualNetworkRuleOutputReference {
    return new AzureCosmosDbAccountVirtualNetworkRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account duplocloud_azure_cosmos_db_account}
*/
export class AzureCosmosDbAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_azure_cosmos_db_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureCosmosDbAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureCosmosDbAccount to import
  * @param importFromId The id of the existing AzureCosmosDbAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureCosmosDbAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_azure_cosmos_db_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/azure_cosmos_db_account duplocloud_azure_cosmos_db_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureCosmosDbAccountConfig
  */
  public constructor(scope: Construct, id: string, config: AzureCosmosDbAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_azure_cosmos_db_account',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.28',
        providerVersionConstraint: '0.11.28'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disableKeyBasedMetadataWriteAccess = config.disableKeyBasedMetadataWriteAccess;
    this._enableFreeTier = config.enableFreeTier;
    this._id = config.id;
    this._isVirtualNetworkFilterEnabled = config.isVirtualNetworkFilterEnabled;
    this._kind = config.kind;
    this._name = config.name;
    this._publicNetworkAccess = config.publicNetworkAccess;
    this._tenantId = config.tenantId;
    this._type = config.type;
    this._backupPolicy.internalValue = config.backupPolicy;
    this._capabilities.internalValue = config.capabilities;
    this._consistencyPolicy.internalValue = config.consistencyPolicy;
    this._geoLocation.internalValue = config.geoLocation;
    this._timeouts.internalValue = config.timeouts;
    this._virtualNetworkRule.internalValue = config.virtualNetworkRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity_mode - computed: true, optional: false, required: false
  public get capacityMode() {
    return this.getStringAttribute('capacity_mode');
  }

  // disable_key_based_metadata_write_access - computed: false, optional: true, required: false
  private _disableKeyBasedMetadataWriteAccess?: boolean | cdktf.IResolvable; 
  public get disableKeyBasedMetadataWriteAccess() {
    return this.getBooleanAttribute('disable_key_based_metadata_write_access');
  }
  public set disableKeyBasedMetadataWriteAccess(value: boolean | cdktf.IResolvable) {
    this._disableKeyBasedMetadataWriteAccess = value;
  }
  public resetDisableKeyBasedMetadataWriteAccess() {
    this._disableKeyBasedMetadataWriteAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableKeyBasedMetadataWriteAccessInput() {
    return this._disableKeyBasedMetadataWriteAccess;
  }

  // enable_free_tier - computed: false, optional: true, required: false
  private _enableFreeTier?: boolean | cdktf.IResolvable; 
  public get enableFreeTier() {
    return this.getBooleanAttribute('enable_free_tier');
  }
  public set enableFreeTier(value: boolean | cdktf.IResolvable) {
    this._enableFreeTier = value;
  }
  public resetEnableFreeTier() {
    this._enableFreeTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFreeTierInput() {
    return this._enableFreeTier;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
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

  // is_virtual_network_filter_enabled - computed: true, optional: true, required: false
  private _isVirtualNetworkFilterEnabled?: boolean | cdktf.IResolvable; 
  public get isVirtualNetworkFilterEnabled() {
    return this.getBooleanAttribute('is_virtual_network_filter_enabled');
  }
  public set isVirtualNetworkFilterEnabled(value: boolean | cdktf.IResolvable) {
    this._isVirtualNetworkFilterEnabled = value;
  }
  public resetIsVirtualNetworkFilterEnabled() {
    this._isVirtualNetworkFilterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVirtualNetworkFilterEnabledInput() {
    return this._isVirtualNetworkFilterEnabled;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // public_network_access - computed: false, optional: true, required: false
  private _publicNetworkAccess?: string; 
  public get publicNetworkAccess() {
    return this.getStringAttribute('public_network_access');
  }
  public set publicNetworkAccess(value: string) {
    this._publicNetworkAccess = value;
  }
  public resetPublicNetworkAccess() {
    this._publicNetworkAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessInput() {
    return this._publicNetworkAccess;
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

  // write_endpoints - computed: true, optional: false, required: false
  public get writeEndpoints() {
    return this.getListAttribute('write_endpoints');
  }

  // backup_policy - computed: false, optional: true, required: false
  private _backupPolicy = new AzureCosmosDbAccountBackupPolicyOutputReference(this, "backup_policy");
  public get backupPolicy() {
    return this._backupPolicy;
  }
  public putBackupPolicy(value: AzureCosmosDbAccountBackupPolicy) {
    this._backupPolicy.internalValue = value;
  }
  public resetBackupPolicy() {
    this._backupPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyInput() {
    return this._backupPolicy.internalValue;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new AzureCosmosDbAccountCapabilitiesList(this, "capabilities", false);
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: AzureCosmosDbAccountCapabilities[] | cdktf.IResolvable) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // consistency_policy - computed: false, optional: true, required: false
  private _consistencyPolicy = new AzureCosmosDbAccountConsistencyPolicyOutputReference(this, "consistency_policy");
  public get consistencyPolicy() {
    return this._consistencyPolicy;
  }
  public putConsistencyPolicy(value: AzureCosmosDbAccountConsistencyPolicy) {
    this._consistencyPolicy.internalValue = value;
  }
  public resetConsistencyPolicy() {
    this._consistencyPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistencyPolicyInput() {
    return this._consistencyPolicy.internalValue;
  }

  // geo_location - computed: false, optional: false, required: true
  private _geoLocation = new AzureCosmosDbAccountGeoLocationList(this, "geo_location", false);
  public get geoLocation() {
    return this._geoLocation;
  }
  public putGeoLocation(value: AzureCosmosDbAccountGeoLocation[] | cdktf.IResolvable) {
    this._geoLocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationInput() {
    return this._geoLocation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AzureCosmosDbAccountTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AzureCosmosDbAccountTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // virtual_network_rule - computed: false, optional: true, required: false
  private _virtualNetworkRule = new AzureCosmosDbAccountVirtualNetworkRuleList(this, "virtual_network_rule", false);
  public get virtualNetworkRule() {
    return this._virtualNetworkRule;
  }
  public putVirtualNetworkRule(value: AzureCosmosDbAccountVirtualNetworkRule[] | cdktf.IResolvable) {
    this._virtualNetworkRule.internalValue = value;
  }
  public resetVirtualNetworkRule() {
    this._virtualNetworkRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkRuleInput() {
    return this._virtualNetworkRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_key_based_metadata_write_access: cdktf.booleanToTerraform(this._disableKeyBasedMetadataWriteAccess),
      enable_free_tier: cdktf.booleanToTerraform(this._enableFreeTier),
      id: cdktf.stringToTerraform(this._id),
      is_virtual_network_filter_enabled: cdktf.booleanToTerraform(this._isVirtualNetworkFilterEnabled),
      kind: cdktf.stringToTerraform(this._kind),
      name: cdktf.stringToTerraform(this._name),
      public_network_access: cdktf.stringToTerraform(this._publicNetworkAccess),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      type: cdktf.stringToTerraform(this._type),
      backup_policy: azureCosmosDbAccountBackupPolicyToTerraform(this._backupPolicy.internalValue),
      capabilities: cdktf.listMapper(azureCosmosDbAccountCapabilitiesToTerraform, true)(this._capabilities.internalValue),
      consistency_policy: azureCosmosDbAccountConsistencyPolicyToTerraform(this._consistencyPolicy.internalValue),
      geo_location: cdktf.listMapper(azureCosmosDbAccountGeoLocationToTerraform, true)(this._geoLocation.internalValue),
      timeouts: azureCosmosDbAccountTimeoutsToTerraform(this._timeouts.internalValue),
      virtual_network_rule: cdktf.listMapper(azureCosmosDbAccountVirtualNetworkRuleToTerraform, true)(this._virtualNetworkRule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_key_based_metadata_write_access: {
        value: cdktf.booleanToHclTerraform(this._disableKeyBasedMetadataWriteAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_free_tier: {
        value: cdktf.booleanToHclTerraform(this._enableFreeTier),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_virtual_network_filter_enabled: {
        value: cdktf.booleanToHclTerraform(this._isVirtualNetworkFilterEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
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
      public_network_access: {
        value: cdktf.stringToHclTerraform(this._publicNetworkAccess),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_policy: {
        value: azureCosmosDbAccountBackupPolicyToHclTerraform(this._backupPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureCosmosDbAccountBackupPolicyList",
      },
      capabilities: {
        value: cdktf.listMapperHcl(azureCosmosDbAccountCapabilitiesToHclTerraform, true)(this._capabilities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureCosmosDbAccountCapabilitiesList",
      },
      consistency_policy: {
        value: azureCosmosDbAccountConsistencyPolicyToHclTerraform(this._consistencyPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureCosmosDbAccountConsistencyPolicyList",
      },
      geo_location: {
        value: cdktf.listMapperHcl(azureCosmosDbAccountGeoLocationToHclTerraform, true)(this._geoLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureCosmosDbAccountGeoLocationList",
      },
      timeouts: {
        value: azureCosmosDbAccountTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AzureCosmosDbAccountTimeouts",
      },
      virtual_network_rule: {
        value: cdktf.listMapperHcl(azureCosmosDbAccountVirtualNetworkRuleToHclTerraform, true)(this._virtualNetworkRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureCosmosDbAccountVirtualNetworkRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
