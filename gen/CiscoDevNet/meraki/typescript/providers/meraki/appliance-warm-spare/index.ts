// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_warm_spare
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceWarmSpareConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable warm spare
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_warm_spare#enabled ApplianceWarmSpare#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_warm_spare#network_id ApplianceWarmSpare#network_id}
  */
  readonly networkId: string;
  /**
  * Serial number of the warm spare appliance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_warm_spare#spare_serial ApplianceWarmSpare#spare_serial}
  */
  readonly spareSerial?: string;
  /**
  * Uplink mode, either virtual or public
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_warm_spare#uplink_mode ApplianceWarmSpare#uplink_mode}
  */
  readonly uplinkMode?: string;
  /**
  * The WAN 1 shared IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_warm_spare#virtual_ip1 ApplianceWarmSpare#virtual_ip1}
  */
  readonly virtualIp1?: string;
  /**
  * The WAN 2 shared IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_warm_spare#virtual_ip2 ApplianceWarmSpare#virtual_ip2}
  */
  readonly virtualIp2?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_warm_spare meraki_appliance_warm_spare}
*/
export class ApplianceWarmSpare extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_warm_spare";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceWarmSpare resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceWarmSpare to import
  * @param importFromId The id of the existing ApplianceWarmSpare that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_warm_spare#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceWarmSpare to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_warm_spare", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_warm_spare meraki_appliance_warm_spare} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceWarmSpareConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceWarmSpareConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_warm_spare',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._networkId = config.networkId;
    this._spareSerial = config.spareSerial;
    this._uplinkMode = config.uplinkMode;
    this._virtualIp1 = config.virtualIp1;
    this._virtualIp2 = config.virtualIp2;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // spare_serial - computed: false, optional: true, required: false
  private _spareSerial?: string; 
  public get spareSerial() {
    return this.getStringAttribute('spare_serial');
  }
  public set spareSerial(value: string) {
    this._spareSerial = value;
  }
  public resetSpareSerial() {
    this._spareSerial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spareSerialInput() {
    return this._spareSerial;
  }

  // uplink_mode - computed: false, optional: true, required: false
  private _uplinkMode?: string; 
  public get uplinkMode() {
    return this.getStringAttribute('uplink_mode');
  }
  public set uplinkMode(value: string) {
    this._uplinkMode = value;
  }
  public resetUplinkMode() {
    this._uplinkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkModeInput() {
    return this._uplinkMode;
  }

  // virtual_ip1 - computed: false, optional: true, required: false
  private _virtualIp1?: string; 
  public get virtualIp1() {
    return this.getStringAttribute('virtual_ip1');
  }
  public set virtualIp1(value: string) {
    this._virtualIp1 = value;
  }
  public resetVirtualIp1() {
    this._virtualIp1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualIp1Input() {
    return this._virtualIp1;
  }

  // virtual_ip2 - computed: false, optional: true, required: false
  private _virtualIp2?: string; 
  public get virtualIp2() {
    return this.getStringAttribute('virtual_ip2');
  }
  public set virtualIp2(value: string) {
    this._virtualIp2 = value;
  }
  public resetVirtualIp2() {
    this._virtualIp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualIp2Input() {
    return this._virtualIp2;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      network_id: cdktf.stringToTerraform(this._networkId),
      spare_serial: cdktf.stringToTerraform(this._spareSerial),
      uplink_mode: cdktf.stringToTerraform(this._uplinkMode),
      virtual_ip1: cdktf.stringToTerraform(this._virtualIp1),
      virtual_ip2: cdktf.stringToTerraform(this._virtualIp2),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spare_serial: {
        value: cdktf.stringToHclTerraform(this._spareSerial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uplink_mode: {
        value: cdktf.stringToHclTerraform(this._uplinkMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_ip1: {
        value: cdktf.stringToHclTerraform(this._virtualIp1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_ip2: {
        value: cdktf.stringToHclTerraform(this._virtualIp2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
