// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_host_host_name
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpServerHostHostNameConfig extends cdktf.TerraformMetaArguments {
  /**
  * Hostname of SNMP trap host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_host_host_name#hostname SnmpServerHostHostName#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_host_host_name#id SnmpServerHostHostName#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The trap host's UDP port number(default: 162)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_host_host_name#udp_port SnmpServerHostHostName#udp_port}
  */
  readonly udpPort?: number;
  /**
  * SNMPv3 user to send traps (User Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_host_host_name#user SnmpServerHostHostName#user}
  */
  readonly user?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_host_host_name#uuid SnmpServerHostHostName#uuid}
  */
  readonly uuid?: string;
  /**
  * SNMPv1/v2c community string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_host_host_name#v1_v2c_comm SnmpServerHostHostName#v1_v2c_comm}
  */
  readonly v1V2CComm?: string;
  /**
  * 'v1': Use SNMPv1; 'v2c': Use SNMPv2c; 'v3': User SNMPv3;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_host_host_name#version SnmpServerHostHostName#version}
  */
  readonly version: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_host_host_name thunder_snmp_server_host_host_name}
*/
export class SnmpServerHostHostName extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_snmp_server_host_host_name";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpServerHostHostName resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpServerHostHostName to import
  * @param importFromId The id of the existing SnmpServerHostHostName that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_host_host_name#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpServerHostHostName to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_snmp_server_host_host_name", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/snmp_server_host_host_name thunder_snmp_server_host_host_name} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpServerHostHostNameConfig
  */
  public constructor(scope: Construct, id: string, config: SnmpServerHostHostNameConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_snmp_server_host_host_name',
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
    this._hostname = config.hostname;
    this._id = config.id;
    this._udpPort = config.udpPort;
    this._user = config.user;
    this._uuid = config.uuid;
    this._v1V2CComm = config.v1V2CComm;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // udp_port - computed: false, optional: true, required: false
  private _udpPort?: number; 
  public get udpPort() {
    return this.getNumberAttribute('udp_port');
  }
  public set udpPort(value: number) {
    this._udpPort = value;
  }
  public resetUdpPort() {
    this._udpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortInput() {
    return this._udpPort;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
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

  // v1_v2c_comm - computed: false, optional: true, required: false
  private _v1V2CComm?: string; 
  public get v1V2CComm() {
    return this.getStringAttribute('v1_v2c_comm');
  }
  public set v1V2CComm(value: string) {
    this._v1V2CComm = value;
  }
  public resetV1V2CComm() {
    this._v1V2CComm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1V2CCommInput() {
    return this._v1V2CComm;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      udp_port: cdktf.numberToTerraform(this._udpPort),
      user: cdktf.stringToTerraform(this._user),
      uuid: cdktf.stringToTerraform(this._uuid),
      v1_v2c_comm: cdktf.stringToTerraform(this._v1V2CComm),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_port: {
        value: cdktf.numberToHclTerraform(this._udpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v1_v2c_comm: {
        value: cdktf.stringToHclTerraform(this._v1V2CComm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
