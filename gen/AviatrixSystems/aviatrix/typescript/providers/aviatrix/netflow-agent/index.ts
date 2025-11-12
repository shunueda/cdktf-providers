// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/netflow_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetflowAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable L7 mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/netflow_agent#enable_l7_mode NetflowAgent#enable_l7_mode}
  */
  readonly enableL7Mode?: boolean | cdktf.IResolvable;
  /**
  * List of excluded gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/netflow_agent#excluded_gateways NetflowAgent#excluded_gateways}
  */
  readonly excludedGateways?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/netflow_agent#id NetflowAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Netflow server port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/netflow_agent#port NetflowAgent#port}
  */
  readonly port: number;
  /**
  * Netflow server IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/netflow_agent#server_ip NetflowAgent#server_ip}
  */
  readonly serverIp: string;
  /**
  * Netflow version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/netflow_agent#version NetflowAgent#version}
  */
  readonly version?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/netflow_agent aviatrix_netflow_agent}
*/
export class NetflowAgent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_netflow_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetflowAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetflowAgent to import
  * @param importFromId The id of the existing NetflowAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/netflow_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetflowAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_netflow_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/netflow_agent aviatrix_netflow_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetflowAgentConfig
  */
  public constructor(scope: Construct, id: string, config: NetflowAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_netflow_agent',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10',
        providerVersionConstraint: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableL7Mode = config.enableL7Mode;
    this._excludedGateways = config.excludedGateways;
    this._id = config.id;
    this._port = config.port;
    this._serverIp = config.serverIp;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_l7_mode - computed: false, optional: true, required: false
  private _enableL7Mode?: boolean | cdktf.IResolvable; 
  public get enableL7Mode() {
    return this.getBooleanAttribute('enable_l7_mode');
  }
  public set enableL7Mode(value: boolean | cdktf.IResolvable) {
    this._enableL7Mode = value;
  }
  public resetEnableL7Mode() {
    this._enableL7Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableL7ModeInput() {
    return this._enableL7Mode;
  }

  // excluded_gateways - computed: false, optional: true, required: false
  private _excludedGateways?: string[]; 
  public get excludedGateways() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_gateways'));
  }
  public set excludedGateways(value: string[]) {
    this._excludedGateways = value;
  }
  public resetExcludedGateways() {
    this._excludedGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedGatewaysInput() {
    return this._excludedGateways;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // server_ip - computed: false, optional: false, required: true
  private _serverIp?: string; 
  public get serverIp() {
    return this.getStringAttribute('server_ip');
  }
  public set serverIp(value: string) {
    this._serverIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpInput() {
    return this._serverIp;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
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
      enable_l7_mode: cdktf.booleanToTerraform(this._enableL7Mode),
      excluded_gateways: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedGateways),
      id: cdktf.stringToTerraform(this._id),
      port: cdktf.numberToTerraform(this._port),
      server_ip: cdktf.stringToTerraform(this._serverIp),
      version: cdktf.numberToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_l7_mode: {
        value: cdktf.booleanToHclTerraform(this._enableL7Mode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      excluded_gateways: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedGateways),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      server_ip: {
        value: cdktf.stringToHclTerraform(this._serverIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
