// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/multichassis_protection_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MultichassisProtectionPeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Time in seconds between ICL down and MCAEs moving to standby (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/multichassis_protection_peer#icl_down_delay MultichassisProtectionPeer#icl_down_delay}
  */
  readonly iclDownDelay?: number;
  /**
  * Inter-Chassis protection link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/multichassis_protection_peer#interface MultichassisProtectionPeer#interface}
  */
  readonly interface: string;
  /**
  * IP address for this peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/multichassis_protection_peer#ip_address MultichassisProtectionPeer#ip_address}
  */
  readonly ipAddress: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/multichassis_protection_peer junos_multichassis_protection_peer}
*/
export class MultichassisProtectionPeer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_multichassis_protection_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MultichassisProtectionPeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MultichassisProtectionPeer to import
  * @param importFromId The id of the existing MultichassisProtectionPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/multichassis_protection_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MultichassisProtectionPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_multichassis_protection_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/multichassis_protection_peer junos_multichassis_protection_peer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MultichassisProtectionPeerConfig
  */
  public constructor(scope: Construct, id: string, config: MultichassisProtectionPeerConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_multichassis_protection_peer',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._iclDownDelay = config.iclDownDelay;
    this._interface = config.interface;
    this._ipAddress = config.ipAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // icl_down_delay - computed: false, optional: true, required: false
  private _iclDownDelay?: number; 
  public get iclDownDelay() {
    return this.getNumberAttribute('icl_down_delay');
  }
  public set iclDownDelay(value: number) {
    this._iclDownDelay = value;
  }
  public resetIclDownDelay() {
    this._iclDownDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iclDownDelayInput() {
    return this._iclDownDelay;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      icl_down_delay: cdktf.numberToTerraform(this._iclDownDelay),
      interface: cdktf.stringToTerraform(this._interface),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      icl_down_delay: {
        value: cdktf.numberToHclTerraform(this._iclDownDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
