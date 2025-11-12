// https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/resources/device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * IP address or host name for the management interface on the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/resources/device#address Device#address}
  */
  readonly address?: string;
  /**
  * Administrative state.
  *   - Choices: `locked`, `unlocked`, `southbound-locked`, `config-locked`, `call-home`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/resources/device#admin_state Device#admin_state}
  */
  readonly adminState?: string;
  /**
  * The authentication credentials used when connecting to this managed device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/resources/device#authgroup Device#authgroup}
  */
  readonly authgroup?: string;
  /**
  * CLI NED ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/resources/device#cli_ned_id Device#cli_ned_id}
  */
  readonly cliNedId?: string;
  /**
  * An instance name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/resources/device#instance Device#instance}
  */
  readonly instance?: string;
  /**
  * A string uniquely identifying the managed device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/resources/device#name Device#name}
  */
  readonly name: string;
  /**
  * NETCONF NED ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/resources/device#netconf_net_id Device#netconf_net_id}
  */
  readonly netconfNetId?: string;
  /**
  * Port for the management interface on the device. If this leaf is not configured, NCS will use a default value based on the type of device. For example, a NETCONF device uses port 830, a CLI device over SSH uses port 22, and an SNMP device uses port 161.
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/resources/device#port Device#port}
  */
  readonly port?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/resources/device nso_device}
*/
export class Device extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nso_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Device resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Device to import
  * @param importFromId The id of the existing Device that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/resources/device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Device to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nso_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/nso/0.2.0/docs/resources/device nso_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'nso_device',
      terraformGeneratorMetadata: {
        providerName: 'nso',
        providerVersion: '0.2.0',
        providerVersionConstraint: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._adminState = config.adminState;
    this._authgroup = config.authgroup;
    this._cliNedId = config.cliNedId;
    this._instance = config.instance;
    this._name = config.name;
    this._netconfNetId = config.netconfNetId;
    this._port = config.port;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // admin_state - computed: false, optional: true, required: false
  private _adminState?: string; 
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }
  public set adminState(value: string) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
  }

  // authgroup - computed: false, optional: true, required: false
  private _authgroup?: string; 
  public get authgroup() {
    return this.getStringAttribute('authgroup');
  }
  public set authgroup(value: string) {
    this._authgroup = value;
  }
  public resetAuthgroup() {
    this._authgroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authgroupInput() {
    return this._authgroup;
  }

  // cli_ned_id - computed: false, optional: true, required: false
  private _cliNedId?: string; 
  public get cliNedId() {
    return this.getStringAttribute('cli_ned_id');
  }
  public set cliNedId(value: string) {
    this._cliNedId = value;
  }
  public resetCliNedId() {
    this._cliNedId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliNedIdInput() {
    return this._cliNedId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance - computed: false, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // netconf_net_id - computed: false, optional: true, required: false
  private _netconfNetId?: string; 
  public get netconfNetId() {
    return this.getStringAttribute('netconf_net_id');
  }
  public set netconfNetId(value: string) {
    this._netconfNetId = value;
  }
  public resetNetconfNetId() {
    this._netconfNetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netconfNetIdInput() {
    return this._netconfNetId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      admin_state: cdktf.stringToTerraform(this._adminState),
      authgroup: cdktf.stringToTerraform(this._authgroup),
      cli_ned_id: cdktf.stringToTerraform(this._cliNedId),
      instance: cdktf.stringToTerraform(this._instance),
      name: cdktf.stringToTerraform(this._name),
      netconf_net_id: cdktf.stringToTerraform(this._netconfNetId),
      port: cdktf.numberToTerraform(this._port),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_state: {
        value: cdktf.stringToHclTerraform(this._adminState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authgroup: {
        value: cdktf.stringToHclTerraform(this._authgroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cli_ned_id: {
        value: cdktf.stringToHclTerraform(this._cliNedId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance: {
        value: cdktf.stringToHclTerraform(this._instance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netconf_net_id: {
        value: cdktf.stringToHclTerraform(this._netconfNetId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
