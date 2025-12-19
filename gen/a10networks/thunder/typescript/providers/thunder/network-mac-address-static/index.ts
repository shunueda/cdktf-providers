// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_mac_address_static
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkMacAddressStaticConfig extends cdktf.TerraformMetaArguments {
  /**
  * Trap MAC with this DA to CPU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_mac_address_static#dest NetworkMacAddressStatic#dest}
  */
  readonly dest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_mac_address_static#id NetworkMacAddressStatic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure a Static MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_mac_address_static#mac NetworkMacAddressStatic#mac}
  */
  readonly mac: string;
  /**
  * Ethernet Port on which the Address is applicable (Port Value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_mac_address_static#port NetworkMacAddressStatic#port}
  */
  readonly port?: number;
  /**
  * Dummy for redirect use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_mac_address_static#redirect_dummy_mac NetworkMacAddressStatic#redirect_dummy_mac}
  */
  readonly redirectDummyMac?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_mac_address_static#uuid NetworkMacAddressStatic#uuid}
  */
  readonly uuid?: string;
  /**
  * VLAN Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_mac_address_static#vlan NetworkMacAddressStatic#vlan}
  */
  readonly vlan: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_mac_address_static thunder_network_mac_address_static}
*/
export class NetworkMacAddressStatic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_mac_address_static";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkMacAddressStatic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkMacAddressStatic to import
  * @param importFromId The id of the existing NetworkMacAddressStatic that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_mac_address_static#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkMacAddressStatic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_mac_address_static", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_mac_address_static thunder_network_mac_address_static} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkMacAddressStaticConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkMacAddressStaticConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_mac_address_static',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dest = config.dest;
    this._id = config.id;
    this._mac = config.mac;
    this._port = config.port;
    this._redirectDummyMac = config.redirectDummyMac;
    this._uuid = config.uuid;
    this._vlan = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dest - computed: false, optional: true, required: false
  private _dest?: number; 
  public get dest() {
    return this.getNumberAttribute('dest');
  }
  public set dest(value: number) {
    this._dest = value;
  }
  public resetDest() {
    this._dest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destInput() {
    return this._dest;
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

  // mac - computed: false, optional: false, required: true
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // redirect_dummy_mac - computed: false, optional: true, required: false
  private _redirectDummyMac?: number; 
  public get redirectDummyMac() {
    return this.getNumberAttribute('redirect_dummy_mac');
  }
  public set redirectDummyMac(value: number) {
    this._redirectDummyMac = value;
  }
  public resetRedirectDummyMac() {
    this._redirectDummyMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectDummyMacInput() {
    return this._redirectDummyMac;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vlan - computed: false, optional: false, required: true
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dest: cdktf.numberToTerraform(this._dest),
      id: cdktf.stringToTerraform(this._id),
      mac: cdktf.stringToTerraform(this._mac),
      port: cdktf.numberToTerraform(this._port),
      redirect_dummy_mac: cdktf.numberToTerraform(this._redirectDummyMac),
      uuid: cdktf.stringToTerraform(this._uuid),
      vlan: cdktf.numberToTerraform(this._vlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dest: {
        value: cdktf.numberToHclTerraform(this._dest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redirect_dummy_mac: {
        value: cdktf.numberToHclTerraform(this._redirectDummyMac),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
