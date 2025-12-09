// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_ewlc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricEwlcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Percentage of APs to reboot during rolling upgrade
  *   - Choices: `5`, `15`, `25`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_ewlc#ap_reboot_percentage FabricEwlc#ap_reboot_percentage}
  */
  readonly apRebootPercentage?: number;
  /**
  * Flag to enable or disable rolling AP upgrades
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_ewlc#enable_rolling_ap_upgrade FabricEwlc#enable_rolling_ap_upgrade}
  */
  readonly enableRollingApUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Flag to enable or disable embedded wireless capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_ewlc#enable_wireless FabricEwlc#enable_wireless}
  */
  readonly enableWireless: boolean | cdktf.IResolvable;
  /**
  * Fabric Site ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_ewlc#fabric_id FabricEwlc#fabric_id}
  */
  readonly fabricId: string;
  /**
  * Network Device ID of the wireless capable switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_ewlc#network_device_id FabricEwlc#network_device_id}
  */
  readonly networkDeviceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_ewlc catalystcenter_fabric_ewlc}
*/
export class FabricEwlc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_fabric_ewlc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricEwlc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricEwlc to import
  * @param importFromId The id of the existing FabricEwlc that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_ewlc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricEwlc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_fabric_ewlc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.4/docs/resources/fabric_ewlc catalystcenter_fabric_ewlc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricEwlcConfig
  */
  public constructor(scope: Construct, id: string, config: FabricEwlcConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_fabric_ewlc',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.4',
        providerVersionConstraint: '0.4.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apRebootPercentage = config.apRebootPercentage;
    this._enableRollingApUpgrade = config.enableRollingApUpgrade;
    this._enableWireless = config.enableWireless;
    this._fabricId = config.fabricId;
    this._networkDeviceId = config.networkDeviceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ap_reboot_percentage - computed: false, optional: true, required: false
  private _apRebootPercentage?: number; 
  public get apRebootPercentage() {
    return this.getNumberAttribute('ap_reboot_percentage');
  }
  public set apRebootPercentage(value: number) {
    this._apRebootPercentage = value;
  }
  public resetApRebootPercentage() {
    this._apRebootPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apRebootPercentageInput() {
    return this._apRebootPercentage;
  }

  // enable_rolling_ap_upgrade - computed: false, optional: true, required: false
  private _enableRollingApUpgrade?: boolean | cdktf.IResolvable; 
  public get enableRollingApUpgrade() {
    return this.getBooleanAttribute('enable_rolling_ap_upgrade');
  }
  public set enableRollingApUpgrade(value: boolean | cdktf.IResolvable) {
    this._enableRollingApUpgrade = value;
  }
  public resetEnableRollingApUpgrade() {
    this._enableRollingApUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRollingApUpgradeInput() {
    return this._enableRollingApUpgrade;
  }

  // enable_wireless - computed: false, optional: false, required: true
  private _enableWireless?: boolean | cdktf.IResolvable; 
  public get enableWireless() {
    return this.getBooleanAttribute('enable_wireless');
  }
  public set enableWireless(value: boolean | cdktf.IResolvable) {
    this._enableWireless = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWirelessInput() {
    return this._enableWireless;
  }

  // fabric_id - computed: false, optional: false, required: true
  private _fabricId?: string; 
  public get fabricId() {
    return this.getStringAttribute('fabric_id');
  }
  public set fabricId(value: string) {
    this._fabricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricIdInput() {
    return this._fabricId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_device_id - computed: false, optional: false, required: true
  private _networkDeviceId?: string; 
  public get networkDeviceId() {
    return this.getStringAttribute('network_device_id');
  }
  public set networkDeviceId(value: string) {
    this._networkDeviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDeviceIdInput() {
    return this._networkDeviceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ap_reboot_percentage: cdktf.numberToTerraform(this._apRebootPercentage),
      enable_rolling_ap_upgrade: cdktf.booleanToTerraform(this._enableRollingApUpgrade),
      enable_wireless: cdktf.booleanToTerraform(this._enableWireless),
      fabric_id: cdktf.stringToTerraform(this._fabricId),
      network_device_id: cdktf.stringToTerraform(this._networkDeviceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ap_reboot_percentage: {
        value: cdktf.numberToHclTerraform(this._apRebootPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_rolling_ap_upgrade: {
        value: cdktf.booleanToHclTerraform(this._enableRollingApUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_wireless: {
        value: cdktf.booleanToHclTerraform(this._enableWireless),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fabric_id: {
        value: cdktf.stringToHclTerraform(this._fabricId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_device_id: {
        value: cdktf.stringToHclTerraform(this._networkDeviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
