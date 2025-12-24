// https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentClusterOptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Clone I/O bandwidth limit in KiB/s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#bandwidth_limit_clone VirtualEnvironmentClusterOptions#bandwidth_limit_clone}
  */
  readonly bandwidthLimitClone?: number;
  /**
  * Default I/O bandwidth limit in KiB/s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#bandwidth_limit_default VirtualEnvironmentClusterOptions#bandwidth_limit_default}
  */
  readonly bandwidthLimitDefault?: number;
  /**
  * Migration I/O bandwidth limit in KiB/s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#bandwidth_limit_migration VirtualEnvironmentClusterOptions#bandwidth_limit_migration}
  */
  readonly bandwidthLimitMigration?: number;
  /**
  * Move I/O bandwidth limit in KiB/s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#bandwidth_limit_move VirtualEnvironmentClusterOptions#bandwidth_limit_move}
  */
  readonly bandwidthLimitMove?: number;
  /**
  * Restore I/O bandwidth limit in KiB/s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#bandwidth_limit_restore VirtualEnvironmentClusterOptions#bandwidth_limit_restore}
  */
  readonly bandwidthLimitRestore?: number;
  /**
  * Select the default Console viewer. Must be `applet` | `vv`| `html5` | `xtermjs`. You can either use the builtin java applet (VNC; deprecated and maps to html5), an external virt-viewer compatible application (SPICE), an HTML5 based vnc viewer (noVNC), or an HTML5 based console client (xtermjs). If the selected viewer is not available (e.g. SPICE not activated for the VM), the fallback is noVNC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#console VirtualEnvironmentClusterOptions#console}
  */
  readonly console?: string;
  /**
  * Cluster resource scheduling setting for HA. Must be `static` | `basic` (default is `basic`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#crs_ha VirtualEnvironmentClusterOptions#crs_ha}
  */
  readonly crsHa?: string;
  /**
  * Cluster resource scheduling setting for HA rebalance on start.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#crs_ha_rebalance_on_start VirtualEnvironmentClusterOptions#crs_ha_rebalance_on_start}
  */
  readonly crsHaRebalanceOnStart?: boolean | cdktf.IResolvable;
  /**
  * Datacenter description. Shown in the web-interface datacenter notes panel. This is saved as comment inside the configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#description VirtualEnvironmentClusterOptions#description}
  */
  readonly description?: string;
  /**
  * email address to send notification from (default is root@$hostname).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#email_from VirtualEnvironmentClusterOptions#email_from}
  */
  readonly emailFrom?: string;
  /**
  * Cluster wide HA shutdown policy (). Must be `freeze` | `failover` | `migrate` | `conditional` (default is `conditional`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#ha_shutdown_policy VirtualEnvironmentClusterOptions#ha_shutdown_policy}
  */
  readonly haShutdownPolicy?: string;
  /**
  * Specify external http proxy which is used for downloads (example: `http://username:password@host:port/`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#http_proxy VirtualEnvironmentClusterOptions#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * Default keyboard layout for vnc server. Must be `de` | `de-ch` | `da` | `en-gb` | `en-us` | `es` | `fi` | `fr` | `fr-be` | `fr-ca` | `fr-ch` | `hu` | `is` | `it` | `ja` | `lt` | `mk` | `nl` | `no` | `pl` | `pt` | `pt-br` | `sv` | `sl` | `tr`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#keyboard VirtualEnvironmentClusterOptions#keyboard}
  */
  readonly keyboard?: string;
  /**
  * Default GUI language. Must be `ca` | `da` | `de` | `en` | `es` | `eu` | `fa` | `fr` | `he` | `it` | `ja` | `nb` | `nn` | `pl` | `pt_BR` | `ru` | `sl` | `sv` | `tr` | `zh_CN` | `zh_TW`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#language VirtualEnvironmentClusterOptions#language}
  */
  readonly language?: string;
  /**
  * Prefix for autogenerated MAC addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#mac_prefix VirtualEnvironmentClusterOptions#mac_prefix}
  */
  readonly macPrefix?: string;
  /**
  * Defines how many workers (per node) are maximal started on actions like 'stopall VMs' or task from the ha-manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#max_workers VirtualEnvironmentClusterOptions#max_workers}
  */
  readonly maxWorkers?: number;
  /**
  * Cluster wide migration network CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#migration_cidr VirtualEnvironmentClusterOptions#migration_cidr}
  */
  readonly migrationCidr?: string;
  /**
  * Cluster wide migration type. Must be `secure` | `insecure` (default is `secure`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#migration_type VirtualEnvironmentClusterOptions#migration_type}
  */
  readonly migrationType?: string;
  /**
  * The ranges for the next free VM ID auto-selection pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#next_id VirtualEnvironmentClusterOptions#next_id}
  */
  readonly nextId?: VirtualEnvironmentClusterOptionsNextId;
  /**
  * Cluster-wide notification settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#notify VirtualEnvironmentClusterOptions#notify}
  */
  readonly notify?: VirtualEnvironmentClusterOptionsNotify;
}
export interface VirtualEnvironmentClusterOptionsNextId {
  /**
  * The minimum number for the next free VM ID. Must be higher or equal to 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#lower VirtualEnvironmentClusterOptions#lower}
  */
  readonly lower?: number;
  /**
  * The maximum number for the next free VM ID. Must be less or equal to 999999999
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#upper VirtualEnvironmentClusterOptions#upper}
  */
  readonly upper?: number;
}

export function virtualEnvironmentClusterOptionsNextIdToTerraform(struct?: VirtualEnvironmentClusterOptionsNextId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lower: cdktf.numberToTerraform(struct!.lower),
    upper: cdktf.numberToTerraform(struct!.upper),
  }
}


export function virtualEnvironmentClusterOptionsNextIdToHclTerraform(struct?: VirtualEnvironmentClusterOptionsNextId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lower: {
      value: cdktf.numberToHclTerraform(struct!.lower),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upper: {
      value: cdktf.numberToHclTerraform(struct!.upper),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentClusterOptionsNextIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualEnvironmentClusterOptionsNextId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lower !== undefined) {
      hasAnyValues = true;
      internalValueResult.lower = this._lower;
    }
    if (this._upper !== undefined) {
      hasAnyValues = true;
      internalValueResult.upper = this._upper;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentClusterOptionsNextId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lower = undefined;
      this._upper = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lower = value.lower;
      this._upper = value.upper;
    }
  }

  // lower - computed: false, optional: true, required: false
  private _lower?: number; 
  public get lower() {
    return this.getNumberAttribute('lower');
  }
  public set lower(value: number) {
    this._lower = value;
  }
  public resetLower() {
    this._lower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerInput() {
    return this._lower;
  }

  // upper - computed: false, optional: true, required: false
  private _upper?: number; 
  public get upper() {
    return this.getNumberAttribute('upper');
  }
  public set upper(value: number) {
    this._upper = value;
  }
  public resetUpper() {
    this._upper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upperInput() {
    return this._upper;
  }
}
export interface VirtualEnvironmentClusterOptionsNotify {
  /**
  * Cluster-wide notification settings for the HA fencing mode. Must be `always` | `never`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#ha_fencing_mode VirtualEnvironmentClusterOptions#ha_fencing_mode}
  */
  readonly haFencingMode?: string;
  /**
  * Cluster-wide notification settings for the HA fencing target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#ha_fencing_target VirtualEnvironmentClusterOptions#ha_fencing_target}
  */
  readonly haFencingTarget?: string;
  /**
  * Cluster-wide notification settings for package updates. Must be `auto` | `always` | `never`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#package_updates VirtualEnvironmentClusterOptions#package_updates}
  */
  readonly packageUpdates?: string;
  /**
  * Cluster-wide notification settings for the package updates target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#package_updates_target VirtualEnvironmentClusterOptions#package_updates_target}
  */
  readonly packageUpdatesTarget?: string;
  /**
  * Cluster-wide notification settings for replication. Must be `always` | `never`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#replication VirtualEnvironmentClusterOptions#replication}
  */
  readonly replication?: string;
  /**
  * Cluster-wide notification settings for the replication target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#replication_target VirtualEnvironmentClusterOptions#replication_target}
  */
  readonly replicationTarget?: string;
}

export function virtualEnvironmentClusterOptionsNotifyToTerraform(struct?: VirtualEnvironmentClusterOptionsNotify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ha_fencing_mode: cdktf.stringToTerraform(struct!.haFencingMode),
    ha_fencing_target: cdktf.stringToTerraform(struct!.haFencingTarget),
    package_updates: cdktf.stringToTerraform(struct!.packageUpdates),
    package_updates_target: cdktf.stringToTerraform(struct!.packageUpdatesTarget),
    replication: cdktf.stringToTerraform(struct!.replication),
    replication_target: cdktf.stringToTerraform(struct!.replicationTarget),
  }
}


export function virtualEnvironmentClusterOptionsNotifyToHclTerraform(struct?: VirtualEnvironmentClusterOptionsNotify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ha_fencing_mode: {
      value: cdktf.stringToHclTerraform(struct!.haFencingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ha_fencing_target: {
      value: cdktf.stringToHclTerraform(struct!.haFencingTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_updates: {
      value: cdktf.stringToHclTerraform(struct!.packageUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_updates_target: {
      value: cdktf.stringToHclTerraform(struct!.packageUpdatesTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication: {
      value: cdktf.stringToHclTerraform(struct!.replication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_target: {
      value: cdktf.stringToHclTerraform(struct!.replicationTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentClusterOptionsNotifyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualEnvironmentClusterOptionsNotify | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._haFencingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.haFencingMode = this._haFencingMode;
    }
    if (this._haFencingTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.haFencingTarget = this._haFencingTarget;
    }
    if (this._packageUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageUpdates = this._packageUpdates;
    }
    if (this._packageUpdatesTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageUpdatesTarget = this._packageUpdatesTarget;
    }
    if (this._replication !== undefined) {
      hasAnyValues = true;
      internalValueResult.replication = this._replication;
    }
    if (this._replicationTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationTarget = this._replicationTarget;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentClusterOptionsNotify | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._haFencingMode = undefined;
      this._haFencingTarget = undefined;
      this._packageUpdates = undefined;
      this._packageUpdatesTarget = undefined;
      this._replication = undefined;
      this._replicationTarget = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._haFencingMode = value.haFencingMode;
      this._haFencingTarget = value.haFencingTarget;
      this._packageUpdates = value.packageUpdates;
      this._packageUpdatesTarget = value.packageUpdatesTarget;
      this._replication = value.replication;
      this._replicationTarget = value.replicationTarget;
    }
  }

  // ha_fencing_mode - computed: false, optional: true, required: false
  private _haFencingMode?: string; 
  public get haFencingMode() {
    return this.getStringAttribute('ha_fencing_mode');
  }
  public set haFencingMode(value: string) {
    this._haFencingMode = value;
  }
  public resetHaFencingMode() {
    this._haFencingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haFencingModeInput() {
    return this._haFencingMode;
  }

  // ha_fencing_target - computed: false, optional: true, required: false
  private _haFencingTarget?: string; 
  public get haFencingTarget() {
    return this.getStringAttribute('ha_fencing_target');
  }
  public set haFencingTarget(value: string) {
    this._haFencingTarget = value;
  }
  public resetHaFencingTarget() {
    this._haFencingTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haFencingTargetInput() {
    return this._haFencingTarget;
  }

  // package_updates - computed: false, optional: true, required: false
  private _packageUpdates?: string; 
  public get packageUpdates() {
    return this.getStringAttribute('package_updates');
  }
  public set packageUpdates(value: string) {
    this._packageUpdates = value;
  }
  public resetPackageUpdates() {
    this._packageUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageUpdatesInput() {
    return this._packageUpdates;
  }

  // package_updates_target - computed: false, optional: true, required: false
  private _packageUpdatesTarget?: string; 
  public get packageUpdatesTarget() {
    return this.getStringAttribute('package_updates_target');
  }
  public set packageUpdatesTarget(value: string) {
    this._packageUpdatesTarget = value;
  }
  public resetPackageUpdatesTarget() {
    this._packageUpdatesTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageUpdatesTargetInput() {
    return this._packageUpdatesTarget;
  }

  // replication - computed: false, optional: true, required: false
  private _replication?: string; 
  public get replication() {
    return this.getStringAttribute('replication');
  }
  public set replication(value: string) {
    this._replication = value;
  }
  public resetReplication() {
    this._replication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationInput() {
    return this._replication;
  }

  // replication_target - computed: false, optional: true, required: false
  private _replicationTarget?: string; 
  public get replicationTarget() {
    return this.getStringAttribute('replication_target');
  }
  public set replicationTarget(value: string) {
    this._replicationTarget = value;
  }
  public resetReplicationTarget() {
    this._replicationTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationTargetInput() {
    return this._replicationTarget;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options proxmox_virtual_environment_cluster_options}
*/
export class VirtualEnvironmentClusterOptions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_cluster_options";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentClusterOptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentClusterOptions to import
  * @param importFromId The id of the existing VirtualEnvironmentClusterOptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentClusterOptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_cluster_options", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.90.0/docs/resources/virtual_environment_cluster_options proxmox_virtual_environment_cluster_options} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentClusterOptionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentClusterOptionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_cluster_options',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.90.0',
        providerVersionConstraint: '0.90.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidthLimitClone = config.bandwidthLimitClone;
    this._bandwidthLimitDefault = config.bandwidthLimitDefault;
    this._bandwidthLimitMigration = config.bandwidthLimitMigration;
    this._bandwidthLimitMove = config.bandwidthLimitMove;
    this._bandwidthLimitRestore = config.bandwidthLimitRestore;
    this._console = config.console;
    this._crsHa = config.crsHa;
    this._crsHaRebalanceOnStart = config.crsHaRebalanceOnStart;
    this._description = config.description;
    this._emailFrom = config.emailFrom;
    this._haShutdownPolicy = config.haShutdownPolicy;
    this._httpProxy = config.httpProxy;
    this._keyboard = config.keyboard;
    this._language = config.language;
    this._macPrefix = config.macPrefix;
    this._maxWorkers = config.maxWorkers;
    this._migrationCidr = config.migrationCidr;
    this._migrationType = config.migrationType;
    this._nextId.internalValue = config.nextId;
    this._notify.internalValue = config.notify;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth_limit_clone - computed: false, optional: true, required: false
  private _bandwidthLimitClone?: number; 
  public get bandwidthLimitClone() {
    return this.getNumberAttribute('bandwidth_limit_clone');
  }
  public set bandwidthLimitClone(value: number) {
    this._bandwidthLimitClone = value;
  }
  public resetBandwidthLimitClone() {
    this._bandwidthLimitClone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLimitCloneInput() {
    return this._bandwidthLimitClone;
  }

  // bandwidth_limit_default - computed: false, optional: true, required: false
  private _bandwidthLimitDefault?: number; 
  public get bandwidthLimitDefault() {
    return this.getNumberAttribute('bandwidth_limit_default');
  }
  public set bandwidthLimitDefault(value: number) {
    this._bandwidthLimitDefault = value;
  }
  public resetBandwidthLimitDefault() {
    this._bandwidthLimitDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLimitDefaultInput() {
    return this._bandwidthLimitDefault;
  }

  // bandwidth_limit_migration - computed: false, optional: true, required: false
  private _bandwidthLimitMigration?: number; 
  public get bandwidthLimitMigration() {
    return this.getNumberAttribute('bandwidth_limit_migration');
  }
  public set bandwidthLimitMigration(value: number) {
    this._bandwidthLimitMigration = value;
  }
  public resetBandwidthLimitMigration() {
    this._bandwidthLimitMigration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLimitMigrationInput() {
    return this._bandwidthLimitMigration;
  }

  // bandwidth_limit_move - computed: false, optional: true, required: false
  private _bandwidthLimitMove?: number; 
  public get bandwidthLimitMove() {
    return this.getNumberAttribute('bandwidth_limit_move');
  }
  public set bandwidthLimitMove(value: number) {
    this._bandwidthLimitMove = value;
  }
  public resetBandwidthLimitMove() {
    this._bandwidthLimitMove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLimitMoveInput() {
    return this._bandwidthLimitMove;
  }

  // bandwidth_limit_restore - computed: false, optional: true, required: false
  private _bandwidthLimitRestore?: number; 
  public get bandwidthLimitRestore() {
    return this.getNumberAttribute('bandwidth_limit_restore');
  }
  public set bandwidthLimitRestore(value: number) {
    this._bandwidthLimitRestore = value;
  }
  public resetBandwidthLimitRestore() {
    this._bandwidthLimitRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthLimitRestoreInput() {
    return this._bandwidthLimitRestore;
  }

  // console - computed: false, optional: true, required: false
  private _console?: string; 
  public get console() {
    return this.getStringAttribute('console');
  }
  public set console(value: string) {
    this._console = value;
  }
  public resetConsole() {
    this._console = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console;
  }

  // crs_ha - computed: true, optional: true, required: false
  private _crsHa?: string; 
  public get crsHa() {
    return this.getStringAttribute('crs_ha');
  }
  public set crsHa(value: string) {
    this._crsHa = value;
  }
  public resetCrsHa() {
    this._crsHa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crsHaInput() {
    return this._crsHa;
  }

  // crs_ha_rebalance_on_start - computed: false, optional: true, required: false
  private _crsHaRebalanceOnStart?: boolean | cdktf.IResolvable; 
  public get crsHaRebalanceOnStart() {
    return this.getBooleanAttribute('crs_ha_rebalance_on_start');
  }
  public set crsHaRebalanceOnStart(value: boolean | cdktf.IResolvable) {
    this._crsHaRebalanceOnStart = value;
  }
  public resetCrsHaRebalanceOnStart() {
    this._crsHaRebalanceOnStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crsHaRebalanceOnStartInput() {
    return this._crsHaRebalanceOnStart;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // email_from - computed: false, optional: true, required: false
  private _emailFrom?: string; 
  public get emailFrom() {
    return this.getStringAttribute('email_from');
  }
  public set emailFrom(value: string) {
    this._emailFrom = value;
  }
  public resetEmailFrom() {
    this._emailFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailFromInput() {
    return this._emailFrom;
  }

  // ha_shutdown_policy - computed: false, optional: true, required: false
  private _haShutdownPolicy?: string; 
  public get haShutdownPolicy() {
    return this.getStringAttribute('ha_shutdown_policy');
  }
  public set haShutdownPolicy(value: string) {
    this._haShutdownPolicy = value;
  }
  public resetHaShutdownPolicy() {
    this._haShutdownPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haShutdownPolicyInput() {
    return this._haShutdownPolicy;
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keyboard - computed: false, optional: true, required: false
  private _keyboard?: string; 
  public get keyboard() {
    return this.getStringAttribute('keyboard');
  }
  public set keyboard(value: string) {
    this._keyboard = value;
  }
  public resetKeyboard() {
    this._keyboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyboardInput() {
    return this._keyboard;
  }

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // mac_prefix - computed: true, optional: true, required: false
  private _macPrefix?: string; 
  public get macPrefix() {
    return this.getStringAttribute('mac_prefix');
  }
  public set macPrefix(value: string) {
    this._macPrefix = value;
  }
  public resetMacPrefix() {
    this._macPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macPrefixInput() {
    return this._macPrefix;
  }

  // max_workers - computed: false, optional: true, required: false
  private _maxWorkers?: number; 
  public get maxWorkers() {
    return this.getNumberAttribute('max_workers');
  }
  public set maxWorkers(value: number) {
    this._maxWorkers = value;
  }
  public resetMaxWorkers() {
    this._maxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkersInput() {
    return this._maxWorkers;
  }

  // migration_cidr - computed: false, optional: true, required: false
  private _migrationCidr?: string; 
  public get migrationCidr() {
    return this.getStringAttribute('migration_cidr');
  }
  public set migrationCidr(value: string) {
    this._migrationCidr = value;
  }
  public resetMigrationCidr() {
    this._migrationCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationCidrInput() {
    return this._migrationCidr;
  }

  // migration_type - computed: false, optional: true, required: false
  private _migrationType?: string; 
  public get migrationType() {
    return this.getStringAttribute('migration_type');
  }
  public set migrationType(value: string) {
    this._migrationType = value;
  }
  public resetMigrationType() {
    this._migrationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationTypeInput() {
    return this._migrationType;
  }

  // next_id - computed: false, optional: true, required: false
  private _nextId = new VirtualEnvironmentClusterOptionsNextIdOutputReference(this, "next_id");
  public get nextId() {
    return this._nextId;
  }
  public putNextId(value: VirtualEnvironmentClusterOptionsNextId) {
    this._nextId.internalValue = value;
  }
  public resetNextId() {
    this._nextId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextIdInput() {
    return this._nextId.internalValue;
  }

  // notify - computed: false, optional: true, required: false
  private _notify = new VirtualEnvironmentClusterOptionsNotifyOutputReference(this, "notify");
  public get notify() {
    return this._notify;
  }
  public putNotify(value: VirtualEnvironmentClusterOptionsNotify) {
    this._notify.internalValue = value;
  }
  public resetNotify() {
    this._notify.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyInput() {
    return this._notify.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth_limit_clone: cdktf.numberToTerraform(this._bandwidthLimitClone),
      bandwidth_limit_default: cdktf.numberToTerraform(this._bandwidthLimitDefault),
      bandwidth_limit_migration: cdktf.numberToTerraform(this._bandwidthLimitMigration),
      bandwidth_limit_move: cdktf.numberToTerraform(this._bandwidthLimitMove),
      bandwidth_limit_restore: cdktf.numberToTerraform(this._bandwidthLimitRestore),
      console: cdktf.stringToTerraform(this._console),
      crs_ha: cdktf.stringToTerraform(this._crsHa),
      crs_ha_rebalance_on_start: cdktf.booleanToTerraform(this._crsHaRebalanceOnStart),
      description: cdktf.stringToTerraform(this._description),
      email_from: cdktf.stringToTerraform(this._emailFrom),
      ha_shutdown_policy: cdktf.stringToTerraform(this._haShutdownPolicy),
      http_proxy: cdktf.stringToTerraform(this._httpProxy),
      keyboard: cdktf.stringToTerraform(this._keyboard),
      language: cdktf.stringToTerraform(this._language),
      mac_prefix: cdktf.stringToTerraform(this._macPrefix),
      max_workers: cdktf.numberToTerraform(this._maxWorkers),
      migration_cidr: cdktf.stringToTerraform(this._migrationCidr),
      migration_type: cdktf.stringToTerraform(this._migrationType),
      next_id: virtualEnvironmentClusterOptionsNextIdToTerraform(this._nextId.internalValue),
      notify: virtualEnvironmentClusterOptionsNotifyToTerraform(this._notify.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth_limit_clone: {
        value: cdktf.numberToHclTerraform(this._bandwidthLimitClone),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bandwidth_limit_default: {
        value: cdktf.numberToHclTerraform(this._bandwidthLimitDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bandwidth_limit_migration: {
        value: cdktf.numberToHclTerraform(this._bandwidthLimitMigration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bandwidth_limit_move: {
        value: cdktf.numberToHclTerraform(this._bandwidthLimitMove),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bandwidth_limit_restore: {
        value: cdktf.numberToHclTerraform(this._bandwidthLimitRestore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      console: {
        value: cdktf.stringToHclTerraform(this._console),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crs_ha: {
        value: cdktf.stringToHclTerraform(this._crsHa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crs_ha_rebalance_on_start: {
        value: cdktf.booleanToHclTerraform(this._crsHaRebalanceOnStart),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_from: {
        value: cdktf.stringToHclTerraform(this._emailFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_shutdown_policy: {
        value: cdktf.stringToHclTerraform(this._haShutdownPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_proxy: {
        value: cdktf.stringToHclTerraform(this._httpProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keyboard: {
        value: cdktf.stringToHclTerraform(this._keyboard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      language: {
        value: cdktf.stringToHclTerraform(this._language),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_prefix: {
        value: cdktf.stringToHclTerraform(this._macPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_workers: {
        value: cdktf.numberToHclTerraform(this._maxWorkers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      migration_cidr: {
        value: cdktf.stringToHclTerraform(this._migrationCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      migration_type: {
        value: cdktf.stringToHclTerraform(this._migrationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_id: {
        value: virtualEnvironmentClusterOptionsNextIdToHclTerraform(this._nextId.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualEnvironmentClusterOptionsNextId",
      },
      notify: {
        value: virtualEnvironmentClusterOptionsNotifyToHclTerraform(this._notify.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualEnvironmentClusterOptionsNotify",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
