// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/protection_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProtectionDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the PD should be in `Active` state. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/protection_domain#active ProtectionDomain#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Fine Granularity Metadata Cache size. Can be set only when `fgl_metadata_cache_enabled` is set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/protection_domain#fgl_default_metadata_cache_size ProtectionDomain#fgl_default_metadata_cache_size}
  */
  readonly fglDefaultMetadataCacheSize?: number;
  /**
  * Whether Fine Granularity Metadata Cache is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/protection_domain#fgl_metadata_cache_enabled ProtectionDomain#fgl_metadata_cache_enabled}
  */
  readonly fglMetadataCacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * Unique name of the protection domain instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/protection_domain#name ProtectionDomain#name}
  */
  readonly name: string;
  /**
  * Maximum allowed IO for protected maintenance mode in KBps. Must be greater than any other network throttling parameter. The value `0` represents unlimited bandwidth. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/protection_domain#overall_io_network_throttling_in_kbps ProtectionDomain#overall_io_network_throttling_in_kbps}
  */
  readonly overallIoNetworkThrottlingInKbps?: number;
  /**
  * Maximum allowed IO for protected maintenance mode in KBps. The value `0` represents unlimited bandwidth. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/protection_domain#protected_maintenance_mode_network_throttling_in_kbps ProtectionDomain#protected_maintenance_mode_network_throttling_in_kbps}
  */
  readonly protectedMaintenanceModeNetworkThrottlingInKbps?: number;
  /**
  * Maximum allowed IO for rebalancing in KBps. The value `0` represents unlimited bandwidth. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/protection_domain#rebalance_network_throttling_in_kbps ProtectionDomain#rebalance_network_throttling_in_kbps}
  */
  readonly rebalanceNetworkThrottlingInKbps?: number;
  /**
  * Maximum allowed IO for rebuilding in KBps. The value `0` represents unlimited bandwidth. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/protection_domain#rebuild_network_throttling_in_kbps ProtectionDomain#rebuild_network_throttling_in_kbps}
  */
  readonly rebuildNetworkThrottlingInKbps?: number;
  /**
  * Whether SDS Rf Cache is enabled or not. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/protection_domain#rf_cache_enabled ProtectionDomain#rf_cache_enabled}
  */
  readonly rfCacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum IO of the SDS RF Cache in KB. Can be set only when `rf_cache_enabled` is set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/protection_domain#rf_cache_max_io_size_kb ProtectionDomain#rf_cache_max_io_size_kb}
  */
  readonly rfCacheMaxIoSizeKb?: number;
  /**
  * Operational Mode of the SDS RF Cache. Accepted values are `Read`, `Write`, `ReadAndWrite` and `WriteMiss`. Can be set only when `rf_cache_enabled` is set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/protection_domain#rf_cache_operational_mode ProtectionDomain#rf_cache_operational_mode}
  */
  readonly rfCacheOperationalMode?: string;
  /**
  * Page size of the SDS RF Cache in KB. Can be set only when `rf_cache_enabled` is set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/protection_domain#rf_cache_page_size_kb ProtectionDomain#rf_cache_page_size_kb}
  */
  readonly rfCachePageSizeKb?: number;
  /**
  * Maximum allowed IO for vtree migration in KBps. The value `0` represents unlimited bandwidth. The default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/protection_domain#vtree_migration_network_throttling_in_kbps ProtectionDomain#vtree_migration_network_throttling_in_kbps}
  */
  readonly vtreeMigrationNetworkThrottlingInKbps?: number;
}
export interface ProtectionDomainLinks {
}

export function protectionDomainLinksToTerraform(struct?: ProtectionDomainLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function protectionDomainLinksToHclTerraform(struct?: ProtectionDomainLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ProtectionDomainLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProtectionDomainLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProtectionDomainLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class ProtectionDomainLinksList extends cdktf.ComplexList {

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
  public get(index: number): ProtectionDomainLinksOutputReference {
    return new ProtectionDomainLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/protection_domain powerflex_protection_domain}
*/
export class ProtectionDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_protection_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProtectionDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProtectionDomain to import
  * @param importFromId The id of the existing ProtectionDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/protection_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProtectionDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_protection_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/protection_domain powerflex_protection_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProtectionDomainConfig
  */
  public constructor(scope: Construct, id: string, config: ProtectionDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'powerflex_protection_domain',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._fglDefaultMetadataCacheSize = config.fglDefaultMetadataCacheSize;
    this._fglMetadataCacheEnabled = config.fglMetadataCacheEnabled;
    this._name = config.name;
    this._overallIoNetworkThrottlingInKbps = config.overallIoNetworkThrottlingInKbps;
    this._protectedMaintenanceModeNetworkThrottlingInKbps = config.protectedMaintenanceModeNetworkThrottlingInKbps;
    this._rebalanceNetworkThrottlingInKbps = config.rebalanceNetworkThrottlingInKbps;
    this._rebuildNetworkThrottlingInKbps = config.rebuildNetworkThrottlingInKbps;
    this._rfCacheEnabled = config.rfCacheEnabled;
    this._rfCacheMaxIoSizeKb = config.rfCacheMaxIoSizeKb;
    this._rfCacheOperationalMode = config.rfCacheOperationalMode;
    this._rfCachePageSizeKb = config.rfCachePageSizeKb;
    this._vtreeMigrationNetworkThrottlingInKbps = config.vtreeMigrationNetworkThrottlingInKbps;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // fgl_default_metadata_cache_size - computed: true, optional: true, required: false
  private _fglDefaultMetadataCacheSize?: number; 
  public get fglDefaultMetadataCacheSize() {
    return this.getNumberAttribute('fgl_default_metadata_cache_size');
  }
  public set fglDefaultMetadataCacheSize(value: number) {
    this._fglDefaultMetadataCacheSize = value;
  }
  public resetFglDefaultMetadataCacheSize() {
    this._fglDefaultMetadataCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fglDefaultMetadataCacheSizeInput() {
    return this._fglDefaultMetadataCacheSize;
  }

  // fgl_default_num_concurrent_writes - computed: true, optional: false, required: false
  public get fglDefaultNumConcurrentWrites() {
    return this.getNumberAttribute('fgl_default_num_concurrent_writes');
  }

  // fgl_metadata_cache_enabled - computed: true, optional: true, required: false
  private _fglMetadataCacheEnabled?: boolean | cdktf.IResolvable; 
  public get fglMetadataCacheEnabled() {
    return this.getBooleanAttribute('fgl_metadata_cache_enabled');
  }
  public set fglMetadataCacheEnabled(value: boolean | cdktf.IResolvable) {
    this._fglMetadataCacheEnabled = value;
  }
  public resetFglMetadataCacheEnabled() {
    this._fglMetadataCacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fglMetadataCacheEnabledInput() {
    return this._fglMetadataCacheEnabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // links - computed: true, optional: false, required: false
  private _links = new ProtectionDomainLinksList(this, "links", false);
  public get links() {
    return this._links;
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

  // overall_io_network_throttling_in_kbps - computed: true, optional: true, required: false
  private _overallIoNetworkThrottlingInKbps?: number; 
  public get overallIoNetworkThrottlingInKbps() {
    return this.getNumberAttribute('overall_io_network_throttling_in_kbps');
  }
  public set overallIoNetworkThrottlingInKbps(value: number) {
    this._overallIoNetworkThrottlingInKbps = value;
  }
  public resetOverallIoNetworkThrottlingInKbps() {
    this._overallIoNetworkThrottlingInKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overallIoNetworkThrottlingInKbpsInput() {
    return this._overallIoNetworkThrottlingInKbps;
  }

  // protected_maintenance_mode_network_throttling_in_kbps - computed: true, optional: true, required: false
  private _protectedMaintenanceModeNetworkThrottlingInKbps?: number; 
  public get protectedMaintenanceModeNetworkThrottlingInKbps() {
    return this.getNumberAttribute('protected_maintenance_mode_network_throttling_in_kbps');
  }
  public set protectedMaintenanceModeNetworkThrottlingInKbps(value: number) {
    this._protectedMaintenanceModeNetworkThrottlingInKbps = value;
  }
  public resetProtectedMaintenanceModeNetworkThrottlingInKbps() {
    this._protectedMaintenanceModeNetworkThrottlingInKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedMaintenanceModeNetworkThrottlingInKbpsInput() {
    return this._protectedMaintenanceModeNetworkThrottlingInKbps;
  }

  // rebalance_network_throttling_in_kbps - computed: true, optional: true, required: false
  private _rebalanceNetworkThrottlingInKbps?: number; 
  public get rebalanceNetworkThrottlingInKbps() {
    return this.getNumberAttribute('rebalance_network_throttling_in_kbps');
  }
  public set rebalanceNetworkThrottlingInKbps(value: number) {
    this._rebalanceNetworkThrottlingInKbps = value;
  }
  public resetRebalanceNetworkThrottlingInKbps() {
    this._rebalanceNetworkThrottlingInKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebalanceNetworkThrottlingInKbpsInput() {
    return this._rebalanceNetworkThrottlingInKbps;
  }

  // rebuild_network_throttling_in_kbps - computed: true, optional: true, required: false
  private _rebuildNetworkThrottlingInKbps?: number; 
  public get rebuildNetworkThrottlingInKbps() {
    return this.getNumberAttribute('rebuild_network_throttling_in_kbps');
  }
  public set rebuildNetworkThrottlingInKbps(value: number) {
    this._rebuildNetworkThrottlingInKbps = value;
  }
  public resetRebuildNetworkThrottlingInKbps() {
    this._rebuildNetworkThrottlingInKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebuildNetworkThrottlingInKbpsInput() {
    return this._rebuildNetworkThrottlingInKbps;
  }

  // replication_capacity_max_ratio - computed: true, optional: false, required: false
  public get replicationCapacityMaxRatio() {
    return this.getNumberAttribute('replication_capacity_max_ratio');
  }

  // rf_cache_accp_id - computed: true, optional: false, required: false
  public get rfCacheAccpId() {
    return this.getStringAttribute('rf_cache_accp_id');
  }

  // rf_cache_enabled - computed: true, optional: true, required: false
  private _rfCacheEnabled?: boolean | cdktf.IResolvable; 
  public get rfCacheEnabled() {
    return this.getBooleanAttribute('rf_cache_enabled');
  }
  public set rfCacheEnabled(value: boolean | cdktf.IResolvable) {
    this._rfCacheEnabled = value;
  }
  public resetRfCacheEnabled() {
    this._rfCacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfCacheEnabledInput() {
    return this._rfCacheEnabled;
  }

  // rf_cache_max_io_size_kb - computed: true, optional: true, required: false
  private _rfCacheMaxIoSizeKb?: number; 
  public get rfCacheMaxIoSizeKb() {
    return this.getNumberAttribute('rf_cache_max_io_size_kb');
  }
  public set rfCacheMaxIoSizeKb(value: number) {
    this._rfCacheMaxIoSizeKb = value;
  }
  public resetRfCacheMaxIoSizeKb() {
    this._rfCacheMaxIoSizeKb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfCacheMaxIoSizeKbInput() {
    return this._rfCacheMaxIoSizeKb;
  }

  // rf_cache_operational_mode - computed: true, optional: true, required: false
  private _rfCacheOperationalMode?: string; 
  public get rfCacheOperationalMode() {
    return this.getStringAttribute('rf_cache_operational_mode');
  }
  public set rfCacheOperationalMode(value: string) {
    this._rfCacheOperationalMode = value;
  }
  public resetRfCacheOperationalMode() {
    this._rfCacheOperationalMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfCacheOperationalModeInput() {
    return this._rfCacheOperationalMode;
  }

  // rf_cache_page_size_kb - computed: true, optional: true, required: false
  private _rfCachePageSizeKb?: number; 
  public get rfCachePageSizeKb() {
    return this.getNumberAttribute('rf_cache_page_size_kb');
  }
  public set rfCachePageSizeKb(value: number) {
    this._rfCachePageSizeKb = value;
  }
  public resetRfCachePageSizeKb() {
    this._rfCachePageSizeKb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfCachePageSizeKbInput() {
    return this._rfCachePageSizeKb;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // vtree_migration_network_throttling_in_kbps - computed: true, optional: true, required: false
  private _vtreeMigrationNetworkThrottlingInKbps?: number; 
  public get vtreeMigrationNetworkThrottlingInKbps() {
    return this.getNumberAttribute('vtree_migration_network_throttling_in_kbps');
  }
  public set vtreeMigrationNetworkThrottlingInKbps(value: number) {
    this._vtreeMigrationNetworkThrottlingInKbps = value;
  }
  public resetVtreeMigrationNetworkThrottlingInKbps() {
    this._vtreeMigrationNetworkThrottlingInKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtreeMigrationNetworkThrottlingInKbpsInput() {
    return this._vtreeMigrationNetworkThrottlingInKbps;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      fgl_default_metadata_cache_size: cdktf.numberToTerraform(this._fglDefaultMetadataCacheSize),
      fgl_metadata_cache_enabled: cdktf.booleanToTerraform(this._fglMetadataCacheEnabled),
      name: cdktf.stringToTerraform(this._name),
      overall_io_network_throttling_in_kbps: cdktf.numberToTerraform(this._overallIoNetworkThrottlingInKbps),
      protected_maintenance_mode_network_throttling_in_kbps: cdktf.numberToTerraform(this._protectedMaintenanceModeNetworkThrottlingInKbps),
      rebalance_network_throttling_in_kbps: cdktf.numberToTerraform(this._rebalanceNetworkThrottlingInKbps),
      rebuild_network_throttling_in_kbps: cdktf.numberToTerraform(this._rebuildNetworkThrottlingInKbps),
      rf_cache_enabled: cdktf.booleanToTerraform(this._rfCacheEnabled),
      rf_cache_max_io_size_kb: cdktf.numberToTerraform(this._rfCacheMaxIoSizeKb),
      rf_cache_operational_mode: cdktf.stringToTerraform(this._rfCacheOperationalMode),
      rf_cache_page_size_kb: cdktf.numberToTerraform(this._rfCachePageSizeKb),
      vtree_migration_network_throttling_in_kbps: cdktf.numberToTerraform(this._vtreeMigrationNetworkThrottlingInKbps),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fgl_default_metadata_cache_size: {
        value: cdktf.numberToHclTerraform(this._fglDefaultMetadataCacheSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fgl_metadata_cache_enabled: {
        value: cdktf.booleanToHclTerraform(this._fglMetadataCacheEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overall_io_network_throttling_in_kbps: {
        value: cdktf.numberToHclTerraform(this._overallIoNetworkThrottlingInKbps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protected_maintenance_mode_network_throttling_in_kbps: {
        value: cdktf.numberToHclTerraform(this._protectedMaintenanceModeNetworkThrottlingInKbps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rebalance_network_throttling_in_kbps: {
        value: cdktf.numberToHclTerraform(this._rebalanceNetworkThrottlingInKbps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rebuild_network_throttling_in_kbps: {
        value: cdktf.numberToHclTerraform(this._rebuildNetworkThrottlingInKbps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rf_cache_enabled: {
        value: cdktf.booleanToHclTerraform(this._rfCacheEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rf_cache_max_io_size_kb: {
        value: cdktf.numberToHclTerraform(this._rfCacheMaxIoSizeKb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rf_cache_operational_mode: {
        value: cdktf.stringToHclTerraform(this._rfCacheOperationalMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rf_cache_page_size_kb: {
        value: cdktf.numberToHclTerraform(this._rfCachePageSizeKb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vtree_migration_network_throttling_in_kbps: {
        value: cdktf.numberToHclTerraform(this._vtreeMigrationNetworkThrottlingInKbps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
