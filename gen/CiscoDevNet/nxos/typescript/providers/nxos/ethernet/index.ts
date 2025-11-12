// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ethernet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EthernetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default admin status
  *   - Choices: `up`, `down`
  *   - Default value: `up`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ethernet#default_admin_status Ethernet#default_admin_status}
  */
  readonly defaultAdminStatus?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ethernet#device Ethernet#device}
  */
  readonly device?: string;
  /**
  * System jumbo MTU.
  *   - Range: `576`-`9216`
  *   - Default value: `9216`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ethernet#mtu Ethernet#mtu}
  */
  readonly mtu?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ethernet nxos_ethernet}
*/
export class Ethernet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_ethernet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ethernet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ethernet to import
  * @param importFromId The id of the existing Ethernet that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ethernet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ethernet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_ethernet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/ethernet nxos_ethernet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EthernetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EthernetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nxos_ethernet',
      terraformGeneratorMetadata: {
        providerName: 'nxos',
        providerVersion: '0.5.10',
        providerVersionConstraint: '0.5.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultAdminStatus = config.defaultAdminStatus;
    this._device = config.device;
    this._mtu = config.mtu;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_admin_status - computed: true, optional: true, required: false
  private _defaultAdminStatus?: string; 
  public get defaultAdminStatus() {
    return this.getStringAttribute('default_admin_status');
  }
  public set defaultAdminStatus(value: string) {
    this._defaultAdminStatus = value;
  }
  public resetDefaultAdminStatus() {
    this._defaultAdminStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAdminStatusInput() {
    return this._defaultAdminStatus;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_admin_status: cdktf.stringToTerraform(this._defaultAdminStatus),
      device: cdktf.stringToTerraform(this._device),
      mtu: cdktf.numberToTerraform(this._mtu),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_admin_status: {
        value: cdktf.stringToHclTerraform(this._defaultAdminStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
