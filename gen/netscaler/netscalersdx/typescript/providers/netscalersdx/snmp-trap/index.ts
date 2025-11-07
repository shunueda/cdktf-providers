// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_trap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpTrapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Community Name. Maximum length =  32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_trap#community SnmpTrap#community}
  */
  readonly community?: string;
  /**
  * Destination Port. Minimum value =  1 Maximum value =  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_trap#dest_port SnmpTrap#dest_port}
  */
  readonly destPort?: number;
  /**
  * Trap Destination Server Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_trap#dest_server SnmpTrap#dest_server}
  */
  readonly destServer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_trap#id SnmpTrap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of SNMP Trap User. Minimum length =  1 Maximum length =  32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_trap#user_name SnmpTrap#user_name}
  */
  readonly userName?: string[];
  /**
  * SNMP version. Maximum length =  2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_trap#version SnmpTrap#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_trap netscalersdx_snmp_trap}
*/
export class SnmpTrap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_snmp_trap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpTrap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpTrap to import
  * @param importFromId The id of the existing SnmpTrap that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_trap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpTrap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_snmp_trap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/snmp_trap netscalersdx_snmp_trap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpTrapConfig
  */
  public constructor(scope: Construct, id: string, config: SnmpTrapConfig) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_snmp_trap',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._community = config.community;
    this._destPort = config.destPort;
    this._destServer = config.destServer;
    this._id = config.id;
    this._userName = config.userName;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // community - computed: false, optional: true, required: false
  private _community?: string; 
  public get community() {
    return this.getStringAttribute('community');
  }
  public set community(value: string) {
    this._community = value;
  }
  public resetCommunity() {
    this._community = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
  }

  // dest_port - computed: true, optional: true, required: false
  private _destPort?: number; 
  public get destPort() {
    return this.getNumberAttribute('dest_port');
  }
  public set destPort(value: number) {
    this._destPort = value;
  }
  public resetDestPort() {
    this._destPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortInput() {
    return this._destPort;
  }

  // dest_server - computed: false, optional: false, required: true
  private _destServer?: string; 
  public get destServer() {
    return this.getStringAttribute('dest_server');
  }
  public set destServer(value: string) {
    this._destServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destServerInput() {
    return this._destServer;
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

  // user_name - computed: true, optional: true, required: false
  private _userName?: string[]; 
  public get userName() {
    return this.getListAttribute('user_name');
  }
  public set userName(value: string[]) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
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
      community: cdktf.stringToTerraform(this._community),
      dest_port: cdktf.numberToTerraform(this._destPort),
      dest_server: cdktf.stringToTerraform(this._destServer),
      id: cdktf.stringToTerraform(this._id),
      user_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userName),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      community: {
        value: cdktf.stringToHclTerraform(this._community),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_port: {
        value: cdktf.numberToHclTerraform(this._destPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dest_server: {
        value: cdktf.stringToHclTerraform(this._destServer),
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
      user_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
