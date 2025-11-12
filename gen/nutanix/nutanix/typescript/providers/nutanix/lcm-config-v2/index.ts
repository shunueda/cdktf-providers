// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_config_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LcmConfigV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_config_v2#auto_inventory_schedule LcmConfigV2#auto_inventory_schedule}
  */
  readonly autoInventorySchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_config_v2#connectivity_type LcmConfigV2#connectivity_type}
  */
  readonly connectivityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_config_v2#has_module_auto_upgrade_enabled LcmConfigV2#has_module_auto_upgrade_enabled}
  */
  readonly hasModuleAutoUpgradeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_config_v2#id LcmConfigV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_config_v2#is_auto_inventory_enabled LcmConfigV2#is_auto_inventory_enabled}
  */
  readonly isAutoInventoryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_config_v2#is_https_enabled LcmConfigV2#is_https_enabled}
  */
  readonly isHttpsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_config_v2#url LcmConfigV2#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_config_v2#x_cluster_id LcmConfigV2#x_cluster_id}
  */
  readonly xClusterId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_config_v2 nutanix_lcm_config_v2}
*/
export class LcmConfigV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_lcm_config_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LcmConfigV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LcmConfigV2 to import
  * @param importFromId The id of the existing LcmConfigV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_config_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LcmConfigV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_lcm_config_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/lcm_config_v2 nutanix_lcm_config_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LcmConfigV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: LcmConfigV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_lcm_config_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3',
        providerVersionConstraint: '2.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoInventorySchedule = config.autoInventorySchedule;
    this._connectivityType = config.connectivityType;
    this._hasModuleAutoUpgradeEnabled = config.hasModuleAutoUpgradeEnabled;
    this._id = config.id;
    this._isAutoInventoryEnabled = config.isAutoInventoryEnabled;
    this._isHttpsEnabled = config.isHttpsEnabled;
    this._url = config.url;
    this._xClusterId = config.xClusterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_inventory_schedule - computed: false, optional: true, required: false
  private _autoInventorySchedule?: string; 
  public get autoInventorySchedule() {
    return this.getStringAttribute('auto_inventory_schedule');
  }
  public set autoInventorySchedule(value: string) {
    this._autoInventorySchedule = value;
  }
  public resetAutoInventorySchedule() {
    this._autoInventorySchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInventoryScheduleInput() {
    return this._autoInventorySchedule;
  }

  // connectivity_type - computed: false, optional: true, required: false
  private _connectivityType?: string; 
  public get connectivityType() {
    return this.getStringAttribute('connectivity_type');
  }
  public set connectivityType(value: string) {
    this._connectivityType = value;
  }
  public resetConnectivityType() {
    this._connectivityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityTypeInput() {
    return this._connectivityType;
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // has_module_auto_upgrade_enabled - computed: false, optional: true, required: false
  private _hasModuleAutoUpgradeEnabled?: boolean | cdktf.IResolvable; 
  public get hasModuleAutoUpgradeEnabled() {
    return this.getBooleanAttribute('has_module_auto_upgrade_enabled');
  }
  public set hasModuleAutoUpgradeEnabled(value: boolean | cdktf.IResolvable) {
    this._hasModuleAutoUpgradeEnabled = value;
  }
  public resetHasModuleAutoUpgradeEnabled() {
    this._hasModuleAutoUpgradeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasModuleAutoUpgradeEnabledInput() {
    return this._hasModuleAutoUpgradeEnabled;
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

  // is_auto_inventory_enabled - computed: false, optional: true, required: false
  private _isAutoInventoryEnabled?: boolean | cdktf.IResolvable; 
  public get isAutoInventoryEnabled() {
    return this.getBooleanAttribute('is_auto_inventory_enabled');
  }
  public set isAutoInventoryEnabled(value: boolean | cdktf.IResolvable) {
    this._isAutoInventoryEnabled = value;
  }
  public resetIsAutoInventoryEnabled() {
    this._isAutoInventoryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoInventoryEnabledInput() {
    return this._isAutoInventoryEnabled;
  }

  // is_https_enabled - computed: false, optional: true, required: false
  private _isHttpsEnabled?: boolean | cdktf.IResolvable; 
  public get isHttpsEnabled() {
    return this.getBooleanAttribute('is_https_enabled');
  }
  public set isHttpsEnabled(value: boolean | cdktf.IResolvable) {
    this._isHttpsEnabled = value;
  }
  public resetIsHttpsEnabled() {
    this._isHttpsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHttpsEnabledInput() {
    return this._isHttpsEnabled;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // x_cluster_id - computed: false, optional: true, required: false
  private _xClusterId?: string; 
  public get xClusterId() {
    return this.getStringAttribute('x_cluster_id');
  }
  public set xClusterId(value: string) {
    this._xClusterId = value;
  }
  public resetXClusterId() {
    this._xClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xClusterIdInput() {
    return this._xClusterId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_inventory_schedule: cdktf.stringToTerraform(this._autoInventorySchedule),
      connectivity_type: cdktf.stringToTerraform(this._connectivityType),
      has_module_auto_upgrade_enabled: cdktf.booleanToTerraform(this._hasModuleAutoUpgradeEnabled),
      id: cdktf.stringToTerraform(this._id),
      is_auto_inventory_enabled: cdktf.booleanToTerraform(this._isAutoInventoryEnabled),
      is_https_enabled: cdktf.booleanToTerraform(this._isHttpsEnabled),
      url: cdktf.stringToTerraform(this._url),
      x_cluster_id: cdktf.stringToTerraform(this._xClusterId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_inventory_schedule: {
        value: cdktf.stringToHclTerraform(this._autoInventorySchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connectivity_type: {
        value: cdktf.stringToHclTerraform(this._connectivityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      has_module_auto_upgrade_enabled: {
        value: cdktf.booleanToHclTerraform(this._hasModuleAutoUpgradeEnabled),
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
      is_auto_inventory_enabled: {
        value: cdktf.booleanToHclTerraform(this._isAutoInventoryEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_https_enabled: {
        value: cdktf.booleanToHclTerraform(this._isHttpsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      x_cluster_id: {
        value: cdktf.stringToHclTerraform(this._xClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
