// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StoragePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set the threshold for triggering capacity usage critical-priority alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool#capacity_alert_critical_threshold StoragePool#capacity_alert_critical_threshold}
  */
  readonly capacityAlertCriticalThreshold?: number;
  /**
  * Set the threshold for triggering capacity usage high-priority alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool#capacity_alert_high_threshold StoragePool#capacity_alert_high_threshold}
  */
  readonly capacityAlertHighThreshold?: number;
  /**
  * Enable or disable fragmentation in the Storage Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool#fragmentation StoragePool#fragmentation}
  */
  readonly fragmentation?: boolean | cdktf.IResolvable;
  /**
  * Media Type of the storage pool. Valid values are `HDD`, `SSD` and `Transitional`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool#media_type StoragePool#media_type}
  */
  readonly mediaType: string;
  /**
  * Name of the Storage pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool#name StoragePool#name}
  */
  readonly name: string;
  /**
  * The maximum bandwidth of protected maintenance mode migration I/Os, in KB per second, per device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool#protected_maintenance_mode_bw_limit_per_device_in_kbps StoragePool#protected_maintenance_mode_bw_limit_per_device_in_kbps}
  */
  readonly protectedMaintenanceModeBwLimitPerDeviceInKbps?: number;
  /**
  * Set the I/O priority policy for protected maintenance mode for a specific Storage Pool. Valid values are `unlimited`, `limitNumOfConcurrentIos` and `favorAppIos`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool#protected_maintenance_mode_io_priority_policy StoragePool#protected_maintenance_mode_io_priority_policy}
  */
  readonly protectedMaintenanceModeIoPriorityPolicy?: string;
  /**
  * The maximum number of concurrent protected maintenance mode migration I/Os per device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool#protected_maintenance_mode_num_of_concurrent_ios_per_device StoragePool#protected_maintenance_mode_num_of_concurrent_ios_per_device}
  */
  readonly protectedMaintenanceModeNumOfConcurrentIosPerDevice?: number;
  /**
  * ID of the Protection Domain under which the storage pool will be created. Conflicts with `protection_domain_name`. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool#protection_domain_id StoragePool#protection_domain_id}
  */
  readonly protectionDomainId?: string;
  /**
  * Name of the Protection Domain under which the storage pool will be created. Conflicts with `protection_domain_id`. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool#protection_domain_name StoragePool#protection_domain_name}
  */
  readonly protectionDomainName?: string;
  /**
  * The maximum bandwidth of rebalance I/Os, in KB/s, per device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool#rebalance_bw_limit_per_device_in_kbps StoragePool#rebalance_bw_limit_per_device_in_kbps}
  */
  readonly rebalanceBwLimitPerDeviceInKbps?: number;
  /**
  * Enable or disable rebalancing in the specified Storage Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool#rebalance_enabled StoragePool#rebalance_enabled}
  */
  readonly rebalanceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Policy to use for rebalance I/O priority. Valid values are `unlimited`, `limitNumOfConcurrentIos` and `favorAppIos`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool#rebalance_io_priority_policy StoragePool#rebalance_io_priority_policy}
  */
  readonly rebalanceIoPriorityPolicy?: string;
  /**
  * The maximum number of concurrent rebalance I/Os per device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool#rebalance_num_of_concurrent_ios_per_device StoragePool#rebalance_num_of_concurrent_ios_per_device}
  */
  readonly rebalanceNumOfConcurrentIosPerDevice?: number;
  /**
  * Enable or disable rebuilds in the specified Storage Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool#rebuild_enabled StoragePool#rebuild_enabled}
  */
  readonly rebuildEnabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of concurrent rebuild and rebalance activities on SDSs in the Storage Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool#rebuild_rebalance_parallelism StoragePool#rebuild_rebalance_parallelism}
  */
  readonly rebuildRebalanceParallelism?: number;
  /**
  * This defines the maximum percentage of Storage Pool capacity that can be used by replication for the journal. Before deleting the storage pool, this has to be set to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool#replication_journal_capacity StoragePool#replication_journal_capacity}
  */
  readonly replicationJournalCapacity?: number;
  /**
  * Sets the Read RAM Cache write handling mode of the specified Storage Pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool#rm_cache_write_handling_mode StoragePool#rm_cache_write_handling_mode}
  */
  readonly rmCacheWriteHandlingMode?: string;
  /**
  * Sets the spare capacity reservation policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool#spare_percentage StoragePool#spare_percentage}
  */
  readonly sparePercentage?: number;
  /**
  * Enable/Disable RFcache on a specific storage pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool#use_rfcache StoragePool#use_rfcache}
  */
  readonly useRfcache?: boolean | cdktf.IResolvable;
  /**
  * Enable/Disable RMcache on a specific storage pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool#use_rmcache StoragePool#use_rmcache}
  */
  readonly useRmcache?: boolean | cdktf.IResolvable;
  /**
  * The maximum bandwidth of V-Tree migration IOs, in KB per second, per device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool#vtree_migration_bw_limit_per_device_in_kbps StoragePool#vtree_migration_bw_limit_per_device_in_kbps}
  */
  readonly vtreeMigrationBwLimitPerDeviceInKbps?: number;
  /**
  * Set the I/O priority policy for V-Tree migration for a specific Storage Pool. Valid values are `limitNumOfConcurrentIos` and `favorAppIos`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool#vtree_migration_io_priority_policy StoragePool#vtree_migration_io_priority_policy}
  */
  readonly vtreeMigrationIoPriorityPolicy?: string;
  /**
  * The maximum number of concurrent V-Tree migration I/Os per device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool#vtree_migration_num_of_concurrent_ios_per_device StoragePool#vtree_migration_num_of_concurrent_ios_per_device}
  */
  readonly vtreeMigrationNumOfConcurrentIosPerDevice?: number;
  /**
  * Enable/Disable padding policy on a specific storage pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool#zero_padding_enabled StoragePool#zero_padding_enabled}
  */
  readonly zeroPaddingEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool powerflex_storage_pool}
*/
export class StoragePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_storage_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StoragePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StoragePool to import
  * @param importFromId The id of the existing StoragePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StoragePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_storage_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/storage_pool powerflex_storage_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StoragePoolConfig
  */
  public constructor(scope: Construct, id: string, config: StoragePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'powerflex_storage_pool',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._capacityAlertCriticalThreshold = config.capacityAlertCriticalThreshold;
    this._capacityAlertHighThreshold = config.capacityAlertHighThreshold;
    this._fragmentation = config.fragmentation;
    this._mediaType = config.mediaType;
    this._name = config.name;
    this._protectedMaintenanceModeBwLimitPerDeviceInKbps = config.protectedMaintenanceModeBwLimitPerDeviceInKbps;
    this._protectedMaintenanceModeIoPriorityPolicy = config.protectedMaintenanceModeIoPriorityPolicy;
    this._protectedMaintenanceModeNumOfConcurrentIosPerDevice = config.protectedMaintenanceModeNumOfConcurrentIosPerDevice;
    this._protectionDomainId = config.protectionDomainId;
    this._protectionDomainName = config.protectionDomainName;
    this._rebalanceBwLimitPerDeviceInKbps = config.rebalanceBwLimitPerDeviceInKbps;
    this._rebalanceEnabled = config.rebalanceEnabled;
    this._rebalanceIoPriorityPolicy = config.rebalanceIoPriorityPolicy;
    this._rebalanceNumOfConcurrentIosPerDevice = config.rebalanceNumOfConcurrentIosPerDevice;
    this._rebuildEnabled = config.rebuildEnabled;
    this._rebuildRebalanceParallelism = config.rebuildRebalanceParallelism;
    this._replicationJournalCapacity = config.replicationJournalCapacity;
    this._rmCacheWriteHandlingMode = config.rmCacheWriteHandlingMode;
    this._sparePercentage = config.sparePercentage;
    this._useRfcache = config.useRfcache;
    this._useRmcache = config.useRmcache;
    this._vtreeMigrationBwLimitPerDeviceInKbps = config.vtreeMigrationBwLimitPerDeviceInKbps;
    this._vtreeMigrationIoPriorityPolicy = config.vtreeMigrationIoPriorityPolicy;
    this._vtreeMigrationNumOfConcurrentIosPerDevice = config.vtreeMigrationNumOfConcurrentIosPerDevice;
    this._zeroPaddingEnabled = config.zeroPaddingEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capacity_alert_critical_threshold - computed: true, optional: true, required: false
  private _capacityAlertCriticalThreshold?: number; 
  public get capacityAlertCriticalThreshold() {
    return this.getNumberAttribute('capacity_alert_critical_threshold');
  }
  public set capacityAlertCriticalThreshold(value: number) {
    this._capacityAlertCriticalThreshold = value;
  }
  public resetCapacityAlertCriticalThreshold() {
    this._capacityAlertCriticalThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityAlertCriticalThresholdInput() {
    return this._capacityAlertCriticalThreshold;
  }

  // capacity_alert_high_threshold - computed: true, optional: true, required: false
  private _capacityAlertHighThreshold?: number; 
  public get capacityAlertHighThreshold() {
    return this.getNumberAttribute('capacity_alert_high_threshold');
  }
  public set capacityAlertHighThreshold(value: number) {
    this._capacityAlertHighThreshold = value;
  }
  public resetCapacityAlertHighThreshold() {
    this._capacityAlertHighThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityAlertHighThresholdInput() {
    return this._capacityAlertHighThreshold;
  }

  // fragmentation - computed: true, optional: true, required: false
  private _fragmentation?: boolean | cdktf.IResolvable; 
  public get fragmentation() {
    return this.getBooleanAttribute('fragmentation');
  }
  public set fragmentation(value: boolean | cdktf.IResolvable) {
    this._fragmentation = value;
  }
  public resetFragmentation() {
    this._fragmentation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentationInput() {
    return this._fragmentation;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // media_type - computed: false, optional: false, required: true
  private _mediaType?: string; 
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string) {
    this._mediaType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
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

  // protected_maintenance_mode_bw_limit_per_device_in_kbps - computed: true, optional: true, required: false
  private _protectedMaintenanceModeBwLimitPerDeviceInKbps?: number; 
  public get protectedMaintenanceModeBwLimitPerDeviceInKbps() {
    return this.getNumberAttribute('protected_maintenance_mode_bw_limit_per_device_in_kbps');
  }
  public set protectedMaintenanceModeBwLimitPerDeviceInKbps(value: number) {
    this._protectedMaintenanceModeBwLimitPerDeviceInKbps = value;
  }
  public resetProtectedMaintenanceModeBwLimitPerDeviceInKbps() {
    this._protectedMaintenanceModeBwLimitPerDeviceInKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedMaintenanceModeBwLimitPerDeviceInKbpsInput() {
    return this._protectedMaintenanceModeBwLimitPerDeviceInKbps;
  }

  // protected_maintenance_mode_io_priority_policy - computed: true, optional: true, required: false
  private _protectedMaintenanceModeIoPriorityPolicy?: string; 
  public get protectedMaintenanceModeIoPriorityPolicy() {
    return this.getStringAttribute('protected_maintenance_mode_io_priority_policy');
  }
  public set protectedMaintenanceModeIoPriorityPolicy(value: string) {
    this._protectedMaintenanceModeIoPriorityPolicy = value;
  }
  public resetProtectedMaintenanceModeIoPriorityPolicy() {
    this._protectedMaintenanceModeIoPriorityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedMaintenanceModeIoPriorityPolicyInput() {
    return this._protectedMaintenanceModeIoPriorityPolicy;
  }

  // protected_maintenance_mode_num_of_concurrent_ios_per_device - computed: true, optional: true, required: false
  private _protectedMaintenanceModeNumOfConcurrentIosPerDevice?: number; 
  public get protectedMaintenanceModeNumOfConcurrentIosPerDevice() {
    return this.getNumberAttribute('protected_maintenance_mode_num_of_concurrent_ios_per_device');
  }
  public set protectedMaintenanceModeNumOfConcurrentIosPerDevice(value: number) {
    this._protectedMaintenanceModeNumOfConcurrentIosPerDevice = value;
  }
  public resetProtectedMaintenanceModeNumOfConcurrentIosPerDevice() {
    this._protectedMaintenanceModeNumOfConcurrentIosPerDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedMaintenanceModeNumOfConcurrentIosPerDeviceInput() {
    return this._protectedMaintenanceModeNumOfConcurrentIosPerDevice;
  }

  // protection_domain_id - computed: true, optional: true, required: false
  private _protectionDomainId?: string; 
  public get protectionDomainId() {
    return this.getStringAttribute('protection_domain_id');
  }
  public set protectionDomainId(value: string) {
    this._protectionDomainId = value;
  }
  public resetProtectionDomainId() {
    this._protectionDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionDomainIdInput() {
    return this._protectionDomainId;
  }

  // protection_domain_name - computed: false, optional: true, required: false
  private _protectionDomainName?: string; 
  public get protectionDomainName() {
    return this.getStringAttribute('protection_domain_name');
  }
  public set protectionDomainName(value: string) {
    this._protectionDomainName = value;
  }
  public resetProtectionDomainName() {
    this._protectionDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionDomainNameInput() {
    return this._protectionDomainName;
  }

  // rebalance_bw_limit_per_device_in_kbps - computed: true, optional: true, required: false
  private _rebalanceBwLimitPerDeviceInKbps?: number; 
  public get rebalanceBwLimitPerDeviceInKbps() {
    return this.getNumberAttribute('rebalance_bw_limit_per_device_in_kbps');
  }
  public set rebalanceBwLimitPerDeviceInKbps(value: number) {
    this._rebalanceBwLimitPerDeviceInKbps = value;
  }
  public resetRebalanceBwLimitPerDeviceInKbps() {
    this._rebalanceBwLimitPerDeviceInKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebalanceBwLimitPerDeviceInKbpsInput() {
    return this._rebalanceBwLimitPerDeviceInKbps;
  }

  // rebalance_enabled - computed: true, optional: true, required: false
  private _rebalanceEnabled?: boolean | cdktf.IResolvable; 
  public get rebalanceEnabled() {
    return this.getBooleanAttribute('rebalance_enabled');
  }
  public set rebalanceEnabled(value: boolean | cdktf.IResolvable) {
    this._rebalanceEnabled = value;
  }
  public resetRebalanceEnabled() {
    this._rebalanceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebalanceEnabledInput() {
    return this._rebalanceEnabled;
  }

  // rebalance_io_priority_policy - computed: true, optional: true, required: false
  private _rebalanceIoPriorityPolicy?: string; 
  public get rebalanceIoPriorityPolicy() {
    return this.getStringAttribute('rebalance_io_priority_policy');
  }
  public set rebalanceIoPriorityPolicy(value: string) {
    this._rebalanceIoPriorityPolicy = value;
  }
  public resetRebalanceIoPriorityPolicy() {
    this._rebalanceIoPriorityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebalanceIoPriorityPolicyInput() {
    return this._rebalanceIoPriorityPolicy;
  }

  // rebalance_num_of_concurrent_ios_per_device - computed: true, optional: true, required: false
  private _rebalanceNumOfConcurrentIosPerDevice?: number; 
  public get rebalanceNumOfConcurrentIosPerDevice() {
    return this.getNumberAttribute('rebalance_num_of_concurrent_ios_per_device');
  }
  public set rebalanceNumOfConcurrentIosPerDevice(value: number) {
    this._rebalanceNumOfConcurrentIosPerDevice = value;
  }
  public resetRebalanceNumOfConcurrentIosPerDevice() {
    this._rebalanceNumOfConcurrentIosPerDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebalanceNumOfConcurrentIosPerDeviceInput() {
    return this._rebalanceNumOfConcurrentIosPerDevice;
  }

  // rebuild_enabled - computed: true, optional: true, required: false
  private _rebuildEnabled?: boolean | cdktf.IResolvable; 
  public get rebuildEnabled() {
    return this.getBooleanAttribute('rebuild_enabled');
  }
  public set rebuildEnabled(value: boolean | cdktf.IResolvable) {
    this._rebuildEnabled = value;
  }
  public resetRebuildEnabled() {
    this._rebuildEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebuildEnabledInput() {
    return this._rebuildEnabled;
  }

  // rebuild_rebalance_parallelism - computed: true, optional: true, required: false
  private _rebuildRebalanceParallelism?: number; 
  public get rebuildRebalanceParallelism() {
    return this.getNumberAttribute('rebuild_rebalance_parallelism');
  }
  public set rebuildRebalanceParallelism(value: number) {
    this._rebuildRebalanceParallelism = value;
  }
  public resetRebuildRebalanceParallelism() {
    this._rebuildRebalanceParallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebuildRebalanceParallelismInput() {
    return this._rebuildRebalanceParallelism;
  }

  // replication_journal_capacity - computed: true, optional: true, required: false
  private _replicationJournalCapacity?: number; 
  public get replicationJournalCapacity() {
    return this.getNumberAttribute('replication_journal_capacity');
  }
  public set replicationJournalCapacity(value: number) {
    this._replicationJournalCapacity = value;
  }
  public resetReplicationJournalCapacity() {
    this._replicationJournalCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationJournalCapacityInput() {
    return this._replicationJournalCapacity;
  }

  // rm_cache_write_handling_mode - computed: true, optional: true, required: false
  private _rmCacheWriteHandlingMode?: string; 
  public get rmCacheWriteHandlingMode() {
    return this.getStringAttribute('rm_cache_write_handling_mode');
  }
  public set rmCacheWriteHandlingMode(value: string) {
    this._rmCacheWriteHandlingMode = value;
  }
  public resetRmCacheWriteHandlingMode() {
    this._rmCacheWriteHandlingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rmCacheWriteHandlingModeInput() {
    return this._rmCacheWriteHandlingMode;
  }

  // spare_percentage - computed: true, optional: true, required: false
  private _sparePercentage?: number; 
  public get sparePercentage() {
    return this.getNumberAttribute('spare_percentage');
  }
  public set sparePercentage(value: number) {
    this._sparePercentage = value;
  }
  public resetSparePercentage() {
    this._sparePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparePercentageInput() {
    return this._sparePercentage;
  }

  // use_rfcache - computed: true, optional: true, required: false
  private _useRfcache?: boolean | cdktf.IResolvable; 
  public get useRfcache() {
    return this.getBooleanAttribute('use_rfcache');
  }
  public set useRfcache(value: boolean | cdktf.IResolvable) {
    this._useRfcache = value;
  }
  public resetUseRfcache() {
    this._useRfcache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRfcacheInput() {
    return this._useRfcache;
  }

  // use_rmcache - computed: true, optional: true, required: false
  private _useRmcache?: boolean | cdktf.IResolvable; 
  public get useRmcache() {
    return this.getBooleanAttribute('use_rmcache');
  }
  public set useRmcache(value: boolean | cdktf.IResolvable) {
    this._useRmcache = value;
  }
  public resetUseRmcache() {
    this._useRmcache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRmcacheInput() {
    return this._useRmcache;
  }

  // vtree_migration_bw_limit_per_device_in_kbps - computed: true, optional: true, required: false
  private _vtreeMigrationBwLimitPerDeviceInKbps?: number; 
  public get vtreeMigrationBwLimitPerDeviceInKbps() {
    return this.getNumberAttribute('vtree_migration_bw_limit_per_device_in_kbps');
  }
  public set vtreeMigrationBwLimitPerDeviceInKbps(value: number) {
    this._vtreeMigrationBwLimitPerDeviceInKbps = value;
  }
  public resetVtreeMigrationBwLimitPerDeviceInKbps() {
    this._vtreeMigrationBwLimitPerDeviceInKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtreeMigrationBwLimitPerDeviceInKbpsInput() {
    return this._vtreeMigrationBwLimitPerDeviceInKbps;
  }

  // vtree_migration_io_priority_policy - computed: true, optional: true, required: false
  private _vtreeMigrationIoPriorityPolicy?: string; 
  public get vtreeMigrationIoPriorityPolicy() {
    return this.getStringAttribute('vtree_migration_io_priority_policy');
  }
  public set vtreeMigrationIoPriorityPolicy(value: string) {
    this._vtreeMigrationIoPriorityPolicy = value;
  }
  public resetVtreeMigrationIoPriorityPolicy() {
    this._vtreeMigrationIoPriorityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtreeMigrationIoPriorityPolicyInput() {
    return this._vtreeMigrationIoPriorityPolicy;
  }

  // vtree_migration_num_of_concurrent_ios_per_device - computed: true, optional: true, required: false
  private _vtreeMigrationNumOfConcurrentIosPerDevice?: number; 
  public get vtreeMigrationNumOfConcurrentIosPerDevice() {
    return this.getNumberAttribute('vtree_migration_num_of_concurrent_ios_per_device');
  }
  public set vtreeMigrationNumOfConcurrentIosPerDevice(value: number) {
    this._vtreeMigrationNumOfConcurrentIosPerDevice = value;
  }
  public resetVtreeMigrationNumOfConcurrentIosPerDevice() {
    this._vtreeMigrationNumOfConcurrentIosPerDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtreeMigrationNumOfConcurrentIosPerDeviceInput() {
    return this._vtreeMigrationNumOfConcurrentIosPerDevice;
  }

  // zero_padding_enabled - computed: true, optional: true, required: false
  private _zeroPaddingEnabled?: boolean | cdktf.IResolvable; 
  public get zeroPaddingEnabled() {
    return this.getBooleanAttribute('zero_padding_enabled');
  }
  public set zeroPaddingEnabled(value: boolean | cdktf.IResolvable) {
    this._zeroPaddingEnabled = value;
  }
  public resetZeroPaddingEnabled() {
    this._zeroPaddingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroPaddingEnabledInput() {
    return this._zeroPaddingEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity_alert_critical_threshold: cdktf.numberToTerraform(this._capacityAlertCriticalThreshold),
      capacity_alert_high_threshold: cdktf.numberToTerraform(this._capacityAlertHighThreshold),
      fragmentation: cdktf.booleanToTerraform(this._fragmentation),
      media_type: cdktf.stringToTerraform(this._mediaType),
      name: cdktf.stringToTerraform(this._name),
      protected_maintenance_mode_bw_limit_per_device_in_kbps: cdktf.numberToTerraform(this._protectedMaintenanceModeBwLimitPerDeviceInKbps),
      protected_maintenance_mode_io_priority_policy: cdktf.stringToTerraform(this._protectedMaintenanceModeIoPriorityPolicy),
      protected_maintenance_mode_num_of_concurrent_ios_per_device: cdktf.numberToTerraform(this._protectedMaintenanceModeNumOfConcurrentIosPerDevice),
      protection_domain_id: cdktf.stringToTerraform(this._protectionDomainId),
      protection_domain_name: cdktf.stringToTerraform(this._protectionDomainName),
      rebalance_bw_limit_per_device_in_kbps: cdktf.numberToTerraform(this._rebalanceBwLimitPerDeviceInKbps),
      rebalance_enabled: cdktf.booleanToTerraform(this._rebalanceEnabled),
      rebalance_io_priority_policy: cdktf.stringToTerraform(this._rebalanceIoPriorityPolicy),
      rebalance_num_of_concurrent_ios_per_device: cdktf.numberToTerraform(this._rebalanceNumOfConcurrentIosPerDevice),
      rebuild_enabled: cdktf.booleanToTerraform(this._rebuildEnabled),
      rebuild_rebalance_parallelism: cdktf.numberToTerraform(this._rebuildRebalanceParallelism),
      replication_journal_capacity: cdktf.numberToTerraform(this._replicationJournalCapacity),
      rm_cache_write_handling_mode: cdktf.stringToTerraform(this._rmCacheWriteHandlingMode),
      spare_percentage: cdktf.numberToTerraform(this._sparePercentage),
      use_rfcache: cdktf.booleanToTerraform(this._useRfcache),
      use_rmcache: cdktf.booleanToTerraform(this._useRmcache),
      vtree_migration_bw_limit_per_device_in_kbps: cdktf.numberToTerraform(this._vtreeMigrationBwLimitPerDeviceInKbps),
      vtree_migration_io_priority_policy: cdktf.stringToTerraform(this._vtreeMigrationIoPriorityPolicy),
      vtree_migration_num_of_concurrent_ios_per_device: cdktf.numberToTerraform(this._vtreeMigrationNumOfConcurrentIosPerDevice),
      zero_padding_enabled: cdktf.booleanToTerraform(this._zeroPaddingEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capacity_alert_critical_threshold: {
        value: cdktf.numberToHclTerraform(this._capacityAlertCriticalThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      capacity_alert_high_threshold: {
        value: cdktf.numberToHclTerraform(this._capacityAlertHighThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fragmentation: {
        value: cdktf.booleanToHclTerraform(this._fragmentation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      media_type: {
        value: cdktf.stringToHclTerraform(this._mediaType),
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
      protected_maintenance_mode_bw_limit_per_device_in_kbps: {
        value: cdktf.numberToHclTerraform(this._protectedMaintenanceModeBwLimitPerDeviceInKbps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protected_maintenance_mode_io_priority_policy: {
        value: cdktf.stringToHclTerraform(this._protectedMaintenanceModeIoPriorityPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protected_maintenance_mode_num_of_concurrent_ios_per_device: {
        value: cdktf.numberToHclTerraform(this._protectedMaintenanceModeNumOfConcurrentIosPerDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protection_domain_id: {
        value: cdktf.stringToHclTerraform(this._protectionDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection_domain_name: {
        value: cdktf.stringToHclTerraform(this._protectionDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rebalance_bw_limit_per_device_in_kbps: {
        value: cdktf.numberToHclTerraform(this._rebalanceBwLimitPerDeviceInKbps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rebalance_enabled: {
        value: cdktf.booleanToHclTerraform(this._rebalanceEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rebalance_io_priority_policy: {
        value: cdktf.stringToHclTerraform(this._rebalanceIoPriorityPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rebalance_num_of_concurrent_ios_per_device: {
        value: cdktf.numberToHclTerraform(this._rebalanceNumOfConcurrentIosPerDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rebuild_enabled: {
        value: cdktf.booleanToHclTerraform(this._rebuildEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rebuild_rebalance_parallelism: {
        value: cdktf.numberToHclTerraform(this._rebuildRebalanceParallelism),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replication_journal_capacity: {
        value: cdktf.numberToHclTerraform(this._replicationJournalCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rm_cache_write_handling_mode: {
        value: cdktf.stringToHclTerraform(this._rmCacheWriteHandlingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spare_percentage: {
        value: cdktf.numberToHclTerraform(this._sparePercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_rfcache: {
        value: cdktf.booleanToHclTerraform(this._useRfcache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_rmcache: {
        value: cdktf.booleanToHclTerraform(this._useRmcache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vtree_migration_bw_limit_per_device_in_kbps: {
        value: cdktf.numberToHclTerraform(this._vtreeMigrationBwLimitPerDeviceInKbps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vtree_migration_io_priority_policy: {
        value: cdktf.stringToHclTerraform(this._vtreeMigrationIoPriorityPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vtree_migration_num_of_concurrent_ios_per_device: {
        value: cdktf.numberToHclTerraform(this._vtreeMigrationNumOfConcurrentIosPerDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zero_padding_enabled: {
        value: cdktf.booleanToHclTerraform(this._zeroPaddingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
