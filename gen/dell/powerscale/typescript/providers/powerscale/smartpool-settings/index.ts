// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smartpool_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmartpoolSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Applies to all storagepools that fall back on the default transfer limit. Stop moving files to this pool when this limit is met. The value must be between 0 and 100. Only available for PowerScale 9.5 and above.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smartpool_settings#default_transfer_limit_pct SmartpoolSettings#default_transfer_limit_pct}
  */
  readonly defaultTransferLimitPct?: number;
  /**
  * How the default transfer limit value is applied. Only available for PowerScale 9.5 and above.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smartpool_settings#default_transfer_limit_state SmartpoolSettings#default_transfer_limit_state}
  */
  readonly defaultTransferLimitState?: string;
  /**
  * Enable global namespace acceleration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smartpool_settings#global_namespace_acceleration_enabled SmartpoolSettings#global_namespace_acceleration_enabled}
  */
  readonly globalNamespaceAccelerationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether or not namespace operation optimizations are currently in effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smartpool_settings#global_namespace_acceleration_state SmartpoolSettings#global_namespace_acceleration_state}
  */
  readonly globalNamespaceAccelerationState?: string;
  /**
  * Manage I/O optimization settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smartpool_settings#manage_io_optimization SmartpoolSettings#manage_io_optimization}
  */
  readonly manageIoOptimization?: boolean | cdktf.IResolvable;
  /**
  * Apply to files with manually-managed I/O optimization settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smartpool_settings#manage_io_optimization_apply_to_files SmartpoolSettings#manage_io_optimization_apply_to_files}
  */
  readonly manageIoOptimizationApplyToFiles?: boolean | cdktf.IResolvable;
  /**
  * Manage protection settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smartpool_settings#manage_protection SmartpoolSettings#manage_protection}
  */
  readonly manageProtection?: boolean | cdktf.IResolvable;
  /**
  * Apply to files with manually-managed protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smartpool_settings#manage_protection_apply_to_files SmartpoolSettings#manage_protection_apply_to_files}
  */
  readonly manageProtectionApplyToFiles?: boolean | cdktf.IResolvable;
  /**
  * Increase directory protection to a higher requested protection than its contents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smartpool_settings#protect_directories_one_level_higher SmartpoolSettings#protect_directories_one_level_higher}
  */
  readonly protectDirectoriesOneLevelHigher?: boolean | cdktf.IResolvable;
  /**
  * Enable global spillover.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smartpool_settings#spillover_enabled SmartpoolSettings#spillover_enabled}
  */
  readonly spilloverEnabled?: boolean | cdktf.IResolvable;
  /**
  * Spillover data target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smartpool_settings#spillover_target SmartpoolSettings#spillover_target}
  */
  readonly spilloverTarget?: SmartpoolSettingsSpilloverTarget;
  /**
  * Use SSDs as L3 cache by default for new node pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smartpool_settings#ssd_l3_cache_default_enabled SmartpoolSettings#ssd_l3_cache_default_enabled}
  */
  readonly ssdL3CacheDefaultEnabled?: boolean | cdktf.IResolvable;
  /**
  * Controls number of mirrors of QAB blocks to place on SSDs. Acceptable values: one, all
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smartpool_settings#ssd_qab_mirrors SmartpoolSettings#ssd_qab_mirrors}
  */
  readonly ssdQabMirrors?: string;
  /**
  * Controls number of mirrors of system B-tree blocks to place on SSDs. Acceptable values: one, all
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smartpool_settings#ssd_system_btree_mirrors SmartpoolSettings#ssd_system_btree_mirrors}
  */
  readonly ssdSystemBtreeMirrors?: string;
  /**
  * Controls number of mirrors of system delta blocks to place on SSDs. Acceptable values: one, all
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smartpool_settings#ssd_system_delta_mirrors SmartpoolSettings#ssd_system_delta_mirrors}
  */
  readonly ssdSystemDeltaMirrors?: string;
  /**
  * Deny data writes to reserved disk space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smartpool_settings#virtual_hot_spare_deny_writes SmartpoolSettings#virtual_hot_spare_deny_writes}
  */
  readonly virtualHotSpareDenyWrites?: boolean | cdktf.IResolvable;
  /**
  * Subtract the space reserved for the virtual hot spare when calculating available free space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smartpool_settings#virtual_hot_spare_hide_spare SmartpoolSettings#virtual_hot_spare_hide_spare}
  */
  readonly virtualHotSpareHideSpare?: boolean | cdktf.IResolvable;
  /**
  * The number of drives to reserve for the virtual hot spare, from 0-4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smartpool_settings#virtual_hot_spare_limit_drives SmartpoolSettings#virtual_hot_spare_limit_drives}
  */
  readonly virtualHotSpareLimitDrives?: number;
  /**
  * The percent space to reserve for the virtual hot spare, from 0-20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smartpool_settings#virtual_hot_spare_limit_percent SmartpoolSettings#virtual_hot_spare_limit_percent}
  */
  readonly virtualHotSpareLimitPercent?: number;
}
export interface SmartpoolSettingsSpilloverTarget {
  /**
  * Target pool name if target specified as storagepool, otherwise empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smartpool_settings#name SmartpoolSettings#name}
  */
  readonly name?: string;
  /**
  * Type of target pool. Acceptable values: storagepool, anywhere
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smartpool_settings#type SmartpoolSettings#type}
  */
  readonly type?: string;
}

export function smartpoolSettingsSpilloverTargetToTerraform(struct?: SmartpoolSettingsSpilloverTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function smartpoolSettingsSpilloverTargetToHclTerraform(struct?: SmartpoolSettingsSpilloverTarget | cdktf.IResolvable): any {
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

export class SmartpoolSettingsSpilloverTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SmartpoolSettingsSpilloverTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SmartpoolSettingsSpilloverTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: true, optional: true, required: false
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

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smartpool_settings powerscale_smartpool_settings}
*/
export class SmartpoolSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_smartpool_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SmartpoolSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SmartpoolSettings to import
  * @param importFromId The id of the existing SmartpoolSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smartpool_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SmartpoolSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_smartpool_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/smartpool_settings powerscale_smartpool_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmartpoolSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SmartpoolSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_smartpool_settings',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
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
    this._defaultTransferLimitPct = config.defaultTransferLimitPct;
    this._defaultTransferLimitState = config.defaultTransferLimitState;
    this._globalNamespaceAccelerationEnabled = config.globalNamespaceAccelerationEnabled;
    this._globalNamespaceAccelerationState = config.globalNamespaceAccelerationState;
    this._manageIoOptimization = config.manageIoOptimization;
    this._manageIoOptimizationApplyToFiles = config.manageIoOptimizationApplyToFiles;
    this._manageProtection = config.manageProtection;
    this._manageProtectionApplyToFiles = config.manageProtectionApplyToFiles;
    this._protectDirectoriesOneLevelHigher = config.protectDirectoriesOneLevelHigher;
    this._spilloverEnabled = config.spilloverEnabled;
    this._spilloverTarget.internalValue = config.spilloverTarget;
    this._ssdL3CacheDefaultEnabled = config.ssdL3CacheDefaultEnabled;
    this._ssdQabMirrors = config.ssdQabMirrors;
    this._ssdSystemBtreeMirrors = config.ssdSystemBtreeMirrors;
    this._ssdSystemDeltaMirrors = config.ssdSystemDeltaMirrors;
    this._virtualHotSpareDenyWrites = config.virtualHotSpareDenyWrites;
    this._virtualHotSpareHideSpare = config.virtualHotSpareHideSpare;
    this._virtualHotSpareLimitDrives = config.virtualHotSpareLimitDrives;
    this._virtualHotSpareLimitPercent = config.virtualHotSpareLimitPercent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_transfer_limit_pct - computed: true, optional: true, required: false
  private _defaultTransferLimitPct?: number; 
  public get defaultTransferLimitPct() {
    return this.getNumberAttribute('default_transfer_limit_pct');
  }
  public set defaultTransferLimitPct(value: number) {
    this._defaultTransferLimitPct = value;
  }
  public resetDefaultTransferLimitPct() {
    this._defaultTransferLimitPct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTransferLimitPctInput() {
    return this._defaultTransferLimitPct;
  }

  // default_transfer_limit_state - computed: true, optional: true, required: false
  private _defaultTransferLimitState?: string; 
  public get defaultTransferLimitState() {
    return this.getStringAttribute('default_transfer_limit_state');
  }
  public set defaultTransferLimitState(value: string) {
    this._defaultTransferLimitState = value;
  }
  public resetDefaultTransferLimitState() {
    this._defaultTransferLimitState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTransferLimitStateInput() {
    return this._defaultTransferLimitState;
  }

  // global_namespace_acceleration_enabled - computed: true, optional: true, required: false
  private _globalNamespaceAccelerationEnabled?: boolean | cdktf.IResolvable; 
  public get globalNamespaceAccelerationEnabled() {
    return this.getBooleanAttribute('global_namespace_acceleration_enabled');
  }
  public set globalNamespaceAccelerationEnabled(value: boolean | cdktf.IResolvable) {
    this._globalNamespaceAccelerationEnabled = value;
  }
  public resetGlobalNamespaceAccelerationEnabled() {
    this._globalNamespaceAccelerationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNamespaceAccelerationEnabledInput() {
    return this._globalNamespaceAccelerationEnabled;
  }

  // global_namespace_acceleration_state - computed: true, optional: true, required: false
  private _globalNamespaceAccelerationState?: string; 
  public get globalNamespaceAccelerationState() {
    return this.getStringAttribute('global_namespace_acceleration_state');
  }
  public set globalNamespaceAccelerationState(value: string) {
    this._globalNamespaceAccelerationState = value;
  }
  public resetGlobalNamespaceAccelerationState() {
    this._globalNamespaceAccelerationState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNamespaceAccelerationStateInput() {
    return this._globalNamespaceAccelerationState;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // manage_io_optimization - computed: true, optional: true, required: false
  private _manageIoOptimization?: boolean | cdktf.IResolvable; 
  public get manageIoOptimization() {
    return this.getBooleanAttribute('manage_io_optimization');
  }
  public set manageIoOptimization(value: boolean | cdktf.IResolvable) {
    this._manageIoOptimization = value;
  }
  public resetManageIoOptimization() {
    this._manageIoOptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageIoOptimizationInput() {
    return this._manageIoOptimization;
  }

  // manage_io_optimization_apply_to_files - computed: true, optional: true, required: false
  private _manageIoOptimizationApplyToFiles?: boolean | cdktf.IResolvable; 
  public get manageIoOptimizationApplyToFiles() {
    return this.getBooleanAttribute('manage_io_optimization_apply_to_files');
  }
  public set manageIoOptimizationApplyToFiles(value: boolean | cdktf.IResolvable) {
    this._manageIoOptimizationApplyToFiles = value;
  }
  public resetManageIoOptimizationApplyToFiles() {
    this._manageIoOptimizationApplyToFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageIoOptimizationApplyToFilesInput() {
    return this._manageIoOptimizationApplyToFiles;
  }

  // manage_protection - computed: true, optional: true, required: false
  private _manageProtection?: boolean | cdktf.IResolvable; 
  public get manageProtection() {
    return this.getBooleanAttribute('manage_protection');
  }
  public set manageProtection(value: boolean | cdktf.IResolvable) {
    this._manageProtection = value;
  }
  public resetManageProtection() {
    this._manageProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageProtectionInput() {
    return this._manageProtection;
  }

  // manage_protection_apply_to_files - computed: true, optional: true, required: false
  private _manageProtectionApplyToFiles?: boolean | cdktf.IResolvable; 
  public get manageProtectionApplyToFiles() {
    return this.getBooleanAttribute('manage_protection_apply_to_files');
  }
  public set manageProtectionApplyToFiles(value: boolean | cdktf.IResolvable) {
    this._manageProtectionApplyToFiles = value;
  }
  public resetManageProtectionApplyToFiles() {
    this._manageProtectionApplyToFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageProtectionApplyToFilesInput() {
    return this._manageProtectionApplyToFiles;
  }

  // protect_directories_one_level_higher - computed: true, optional: true, required: false
  private _protectDirectoriesOneLevelHigher?: boolean | cdktf.IResolvable; 
  public get protectDirectoriesOneLevelHigher() {
    return this.getBooleanAttribute('protect_directories_one_level_higher');
  }
  public set protectDirectoriesOneLevelHigher(value: boolean | cdktf.IResolvable) {
    this._protectDirectoriesOneLevelHigher = value;
  }
  public resetProtectDirectoriesOneLevelHigher() {
    this._protectDirectoriesOneLevelHigher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectDirectoriesOneLevelHigherInput() {
    return this._protectDirectoriesOneLevelHigher;
  }

  // spillover_enabled - computed: true, optional: true, required: false
  private _spilloverEnabled?: boolean | cdktf.IResolvable; 
  public get spilloverEnabled() {
    return this.getBooleanAttribute('spillover_enabled');
  }
  public set spilloverEnabled(value: boolean | cdktf.IResolvable) {
    this._spilloverEnabled = value;
  }
  public resetSpilloverEnabled() {
    this._spilloverEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spilloverEnabledInput() {
    return this._spilloverEnabled;
  }

  // spillover_target - computed: true, optional: true, required: false
  private _spilloverTarget = new SmartpoolSettingsSpilloverTargetOutputReference(this, "spillover_target");
  public get spilloverTarget() {
    return this._spilloverTarget;
  }
  public putSpilloverTarget(value: SmartpoolSettingsSpilloverTarget) {
    this._spilloverTarget.internalValue = value;
  }
  public resetSpilloverTarget() {
    this._spilloverTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spilloverTargetInput() {
    return this._spilloverTarget.internalValue;
  }

  // ssd_l3_cache_default_enabled - computed: true, optional: true, required: false
  private _ssdL3CacheDefaultEnabled?: boolean | cdktf.IResolvable; 
  public get ssdL3CacheDefaultEnabled() {
    return this.getBooleanAttribute('ssd_l3_cache_default_enabled');
  }
  public set ssdL3CacheDefaultEnabled(value: boolean | cdktf.IResolvable) {
    this._ssdL3CacheDefaultEnabled = value;
  }
  public resetSsdL3CacheDefaultEnabled() {
    this._ssdL3CacheDefaultEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssdL3CacheDefaultEnabledInput() {
    return this._ssdL3CacheDefaultEnabled;
  }

  // ssd_qab_mirrors - computed: true, optional: true, required: false
  private _ssdQabMirrors?: string; 
  public get ssdQabMirrors() {
    return this.getStringAttribute('ssd_qab_mirrors');
  }
  public set ssdQabMirrors(value: string) {
    this._ssdQabMirrors = value;
  }
  public resetSsdQabMirrors() {
    this._ssdQabMirrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssdQabMirrorsInput() {
    return this._ssdQabMirrors;
  }

  // ssd_system_btree_mirrors - computed: true, optional: true, required: false
  private _ssdSystemBtreeMirrors?: string; 
  public get ssdSystemBtreeMirrors() {
    return this.getStringAttribute('ssd_system_btree_mirrors');
  }
  public set ssdSystemBtreeMirrors(value: string) {
    this._ssdSystemBtreeMirrors = value;
  }
  public resetSsdSystemBtreeMirrors() {
    this._ssdSystemBtreeMirrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssdSystemBtreeMirrorsInput() {
    return this._ssdSystemBtreeMirrors;
  }

  // ssd_system_delta_mirrors - computed: true, optional: true, required: false
  private _ssdSystemDeltaMirrors?: string; 
  public get ssdSystemDeltaMirrors() {
    return this.getStringAttribute('ssd_system_delta_mirrors');
  }
  public set ssdSystemDeltaMirrors(value: string) {
    this._ssdSystemDeltaMirrors = value;
  }
  public resetSsdSystemDeltaMirrors() {
    this._ssdSystemDeltaMirrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssdSystemDeltaMirrorsInput() {
    return this._ssdSystemDeltaMirrors;
  }

  // virtual_hot_spare_deny_writes - computed: true, optional: true, required: false
  private _virtualHotSpareDenyWrites?: boolean | cdktf.IResolvable; 
  public get virtualHotSpareDenyWrites() {
    return this.getBooleanAttribute('virtual_hot_spare_deny_writes');
  }
  public set virtualHotSpareDenyWrites(value: boolean | cdktf.IResolvable) {
    this._virtualHotSpareDenyWrites = value;
  }
  public resetVirtualHotSpareDenyWrites() {
    this._virtualHotSpareDenyWrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHotSpareDenyWritesInput() {
    return this._virtualHotSpareDenyWrites;
  }

  // virtual_hot_spare_hide_spare - computed: true, optional: true, required: false
  private _virtualHotSpareHideSpare?: boolean | cdktf.IResolvable; 
  public get virtualHotSpareHideSpare() {
    return this.getBooleanAttribute('virtual_hot_spare_hide_spare');
  }
  public set virtualHotSpareHideSpare(value: boolean | cdktf.IResolvable) {
    this._virtualHotSpareHideSpare = value;
  }
  public resetVirtualHotSpareHideSpare() {
    this._virtualHotSpareHideSpare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHotSpareHideSpareInput() {
    return this._virtualHotSpareHideSpare;
  }

  // virtual_hot_spare_limit_drives - computed: true, optional: true, required: false
  private _virtualHotSpareLimitDrives?: number; 
  public get virtualHotSpareLimitDrives() {
    return this.getNumberAttribute('virtual_hot_spare_limit_drives');
  }
  public set virtualHotSpareLimitDrives(value: number) {
    this._virtualHotSpareLimitDrives = value;
  }
  public resetVirtualHotSpareLimitDrives() {
    this._virtualHotSpareLimitDrives = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHotSpareLimitDrivesInput() {
    return this._virtualHotSpareLimitDrives;
  }

  // virtual_hot_spare_limit_percent - computed: true, optional: true, required: false
  private _virtualHotSpareLimitPercent?: number; 
  public get virtualHotSpareLimitPercent() {
    return this.getNumberAttribute('virtual_hot_spare_limit_percent');
  }
  public set virtualHotSpareLimitPercent(value: number) {
    this._virtualHotSpareLimitPercent = value;
  }
  public resetVirtualHotSpareLimitPercent() {
    this._virtualHotSpareLimitPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHotSpareLimitPercentInput() {
    return this._virtualHotSpareLimitPercent;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_transfer_limit_pct: cdktf.numberToTerraform(this._defaultTransferLimitPct),
      default_transfer_limit_state: cdktf.stringToTerraform(this._defaultTransferLimitState),
      global_namespace_acceleration_enabled: cdktf.booleanToTerraform(this._globalNamespaceAccelerationEnabled),
      global_namespace_acceleration_state: cdktf.stringToTerraform(this._globalNamespaceAccelerationState),
      manage_io_optimization: cdktf.booleanToTerraform(this._manageIoOptimization),
      manage_io_optimization_apply_to_files: cdktf.booleanToTerraform(this._manageIoOptimizationApplyToFiles),
      manage_protection: cdktf.booleanToTerraform(this._manageProtection),
      manage_protection_apply_to_files: cdktf.booleanToTerraform(this._manageProtectionApplyToFiles),
      protect_directories_one_level_higher: cdktf.booleanToTerraform(this._protectDirectoriesOneLevelHigher),
      spillover_enabled: cdktf.booleanToTerraform(this._spilloverEnabled),
      spillover_target: smartpoolSettingsSpilloverTargetToTerraform(this._spilloverTarget.internalValue),
      ssd_l3_cache_default_enabled: cdktf.booleanToTerraform(this._ssdL3CacheDefaultEnabled),
      ssd_qab_mirrors: cdktf.stringToTerraform(this._ssdQabMirrors),
      ssd_system_btree_mirrors: cdktf.stringToTerraform(this._ssdSystemBtreeMirrors),
      ssd_system_delta_mirrors: cdktf.stringToTerraform(this._ssdSystemDeltaMirrors),
      virtual_hot_spare_deny_writes: cdktf.booleanToTerraform(this._virtualHotSpareDenyWrites),
      virtual_hot_spare_hide_spare: cdktf.booleanToTerraform(this._virtualHotSpareHideSpare),
      virtual_hot_spare_limit_drives: cdktf.numberToTerraform(this._virtualHotSpareLimitDrives),
      virtual_hot_spare_limit_percent: cdktf.numberToTerraform(this._virtualHotSpareLimitPercent),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_transfer_limit_pct: {
        value: cdktf.numberToHclTerraform(this._defaultTransferLimitPct),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_transfer_limit_state: {
        value: cdktf.stringToHclTerraform(this._defaultTransferLimitState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_namespace_acceleration_enabled: {
        value: cdktf.booleanToHclTerraform(this._globalNamespaceAccelerationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      global_namespace_acceleration_state: {
        value: cdktf.stringToHclTerraform(this._globalNamespaceAccelerationState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manage_io_optimization: {
        value: cdktf.booleanToHclTerraform(this._manageIoOptimization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manage_io_optimization_apply_to_files: {
        value: cdktf.booleanToHclTerraform(this._manageIoOptimizationApplyToFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manage_protection: {
        value: cdktf.booleanToHclTerraform(this._manageProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manage_protection_apply_to_files: {
        value: cdktf.booleanToHclTerraform(this._manageProtectionApplyToFiles),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      protect_directories_one_level_higher: {
        value: cdktf.booleanToHclTerraform(this._protectDirectoriesOneLevelHigher),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spillover_enabled: {
        value: cdktf.booleanToHclTerraform(this._spilloverEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spillover_target: {
        value: smartpoolSettingsSpilloverTargetToHclTerraform(this._spilloverTarget.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SmartpoolSettingsSpilloverTarget",
      },
      ssd_l3_cache_default_enabled: {
        value: cdktf.booleanToHclTerraform(this._ssdL3CacheDefaultEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssd_qab_mirrors: {
        value: cdktf.stringToHclTerraform(this._ssdQabMirrors),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssd_system_btree_mirrors: {
        value: cdktf.stringToHclTerraform(this._ssdSystemBtreeMirrors),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssd_system_delta_mirrors: {
        value: cdktf.stringToHclTerraform(this._ssdSystemDeltaMirrors),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_hot_spare_deny_writes: {
        value: cdktf.booleanToHclTerraform(this._virtualHotSpareDenyWrites),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      virtual_hot_spare_hide_spare: {
        value: cdktf.booleanToHclTerraform(this._virtualHotSpareHideSpare),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      virtual_hot_spare_limit_drives: {
        value: cdktf.numberToHclTerraform(this._virtualHotSpareLimitDrives),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      virtual_hot_spare_limit_percent: {
        value: cdktf.numberToHclTerraform(this._virtualHotSpareLimitPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
