// https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_interface#device VpcInterface#device}
  */
  readonly device?: string;
  /**
  * Port-channel interface DN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_interface#port_channel_interface_dn VpcInterface#port_channel_interface_dn}
  */
  readonly portChannelInterfaceDn?: string;
  /**
  * The vPC interface identifier.
  *   - Range: `1`-`16384`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_interface#vpc_interface_id VpcInterface#vpc_interface_id}
  */
  readonly vpcInterfaceId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_interface nxos_vpc_interface}
*/
export class VpcInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nxos_vpc_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcInterface to import
  * @param importFromId The id of the existing VpcInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nxos_vpc_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nxos/0.5.10/docs/resources/vpc_interface nxos_vpc_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: VpcInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'nxos_vpc_interface',
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
    this._device = config.device;
    this._portChannelInterfaceDn = config.portChannelInterfaceDn;
    this._vpcInterfaceId = config.vpcInterfaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // port_channel_interface_dn - computed: false, optional: true, required: false
  private _portChannelInterfaceDn?: string; 
  public get portChannelInterfaceDn() {
    return this.getStringAttribute('port_channel_interface_dn');
  }
  public set portChannelInterfaceDn(value: string) {
    this._portChannelInterfaceDn = value;
  }
  public resetPortChannelInterfaceDn() {
    this._portChannelInterfaceDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portChannelInterfaceDnInput() {
    return this._portChannelInterfaceDn;
  }

  // vpc_interface_id - computed: false, optional: false, required: true
  private _vpcInterfaceId?: number; 
  public get vpcInterfaceId() {
    return this.getNumberAttribute('vpc_interface_id');
  }
  public set vpcInterfaceId(value: number) {
    this._vpcInterfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInterfaceIdInput() {
    return this._vpcInterfaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      port_channel_interface_dn: cdktf.stringToTerraform(this._portChannelInterfaceDn),
      vpc_interface_id: cdktf.numberToTerraform(this._vpcInterfaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_channel_interface_dn: {
        value: cdktf.stringToHclTerraform(this._portChannelInterfaceDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_interface_id: {
        value: cdktf.numberToHclTerraform(this._vpcInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
