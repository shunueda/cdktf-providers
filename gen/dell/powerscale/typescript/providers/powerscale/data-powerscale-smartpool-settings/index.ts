// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smartpool_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerscaleSmartpoolSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Applies to all storagepools that fall back on the default transfer limit. Stop moving files to this pool when this limit is met. The value must be between 0 and 100. Only available for PowerScale 9.5 and above.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smartpool_settings#default_transfer_limit_pct DataPowerscaleSmartpoolSettings#default_transfer_limit_pct}
  */
  readonly defaultTransferLimitPct?: number;
  /**
  * How the default transfer limit value is applied.Only available for PowerScale 9.5 and above.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smartpool_settings#default_transfer_limit_state DataPowerscaleSmartpoolSettings#default_transfer_limit_state}
  */
  readonly defaultTransferLimitState?: string;
}
export interface DataPowerscaleSmartpoolSettingsSpilloverTarget {
}

export function dataPowerscaleSmartpoolSettingsSpilloverTargetToTerraform(struct?: DataPowerscaleSmartpoolSettingsSpilloverTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerscaleSmartpoolSettingsSpilloverTargetToHclTerraform(struct?: DataPowerscaleSmartpoolSettingsSpilloverTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerscaleSmartpoolSettingsSpilloverTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerscaleSmartpoolSettingsSpilloverTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerscaleSmartpoolSettingsSpilloverTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smartpool_settings powerscale_smartpool_settings}
*/
export class DataPowerscaleSmartpoolSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_smartpool_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerscaleSmartpoolSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerscaleSmartpoolSettings to import
  * @param importFromId The id of the existing DataPowerscaleSmartpoolSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smartpool_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerscaleSmartpoolSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_smartpool_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/data-sources/smartpool_settings powerscale_smartpool_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerscaleSmartpoolSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerscaleSmartpoolSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_smartpool_settings',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
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
    this._defaultTransferLimitPct = config.defaultTransferLimitPct;
    this._defaultTransferLimitState = config.defaultTransferLimitState;
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

  // global_namespace_acceleration_enabled - computed: true, optional: false, required: false
  public get globalNamespaceAccelerationEnabled() {
    return this.getBooleanAttribute('global_namespace_acceleration_enabled');
  }

  // global_namespace_acceleration_state - computed: true, optional: false, required: false
  public get globalNamespaceAccelerationState() {
    return this.getStringAttribute('global_namespace_acceleration_state');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // manage_io_optimization - computed: true, optional: false, required: false
  public get manageIoOptimization() {
    return this.getBooleanAttribute('manage_io_optimization');
  }

  // manage_io_optimization_apply_to_files - computed: true, optional: false, required: false
  public get manageIoOptimizationApplyToFiles() {
    return this.getBooleanAttribute('manage_io_optimization_apply_to_files');
  }

  // manage_protection - computed: true, optional: false, required: false
  public get manageProtection() {
    return this.getBooleanAttribute('manage_protection');
  }

  // manage_protection_apply_to_files - computed: true, optional: false, required: false
  public get manageProtectionApplyToFiles() {
    return this.getBooleanAttribute('manage_protection_apply_to_files');
  }

  // protect_directories_one_level_higher - computed: true, optional: false, required: false
  public get protectDirectoriesOneLevelHigher() {
    return this.getBooleanAttribute('protect_directories_one_level_higher');
  }

  // spillover_enabled - computed: true, optional: false, required: false
  public get spilloverEnabled() {
    return this.getBooleanAttribute('spillover_enabled');
  }

  // spillover_target - computed: true, optional: false, required: false
  private _spilloverTarget = new DataPowerscaleSmartpoolSettingsSpilloverTargetOutputReference(this, "spillover_target");
  public get spilloverTarget() {
    return this._spilloverTarget;
  }

  // ssd_l3_cache_default_enabled - computed: true, optional: false, required: false
  public get ssdL3CacheDefaultEnabled() {
    return this.getBooleanAttribute('ssd_l3_cache_default_enabled');
  }

  // ssd_qab_mirrors - computed: true, optional: false, required: false
  public get ssdQabMirrors() {
    return this.getStringAttribute('ssd_qab_mirrors');
  }

  // ssd_system_btree_mirrors - computed: true, optional: false, required: false
  public get ssdSystemBtreeMirrors() {
    return this.getStringAttribute('ssd_system_btree_mirrors');
  }

  // ssd_system_delta_mirrors - computed: true, optional: false, required: false
  public get ssdSystemDeltaMirrors() {
    return this.getStringAttribute('ssd_system_delta_mirrors');
  }

  // virtual_hot_spare_deny_writes - computed: true, optional: false, required: false
  public get virtualHotSpareDenyWrites() {
    return this.getBooleanAttribute('virtual_hot_spare_deny_writes');
  }

  // virtual_hot_spare_hide_spare - computed: true, optional: false, required: false
  public get virtualHotSpareHideSpare() {
    return this.getBooleanAttribute('virtual_hot_spare_hide_spare');
  }

  // virtual_hot_spare_limit_drives - computed: true, optional: false, required: false
  public get virtualHotSpareLimitDrives() {
    return this.getNumberAttribute('virtual_hot_spare_limit_drives');
  }

  // virtual_hot_spare_limit_percent - computed: true, optional: false, required: false
  public get virtualHotSpareLimitPercent() {
    return this.getNumberAttribute('virtual_hot_spare_limit_percent');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_transfer_limit_pct: cdktf.numberToTerraform(this._defaultTransferLimitPct),
      default_transfer_limit_state: cdktf.stringToTerraform(this._defaultTransferLimitState),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
