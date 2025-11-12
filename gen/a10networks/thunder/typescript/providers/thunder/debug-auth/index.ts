// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_auth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DebugAuthConfig extends cdktf.TerraformMetaArguments {
  /**
  * enable detail authd log
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_auth#authd DebugAuth#authd}
  */
  readonly authd?: number;
  /**
  * Filter SAML logs by client IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_auth#client_addr DebugAuth#client_addr}
  */
  readonly clientAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_auth#id DebugAuth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * '1': Diagnose Problems; '2': Detail packet flow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_auth#level DebugAuth#level}
  */
  readonly level?: string;
  /**
  * Enable debug SAML authentication logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_auth#saml DebugAuth#saml}
  */
  readonly saml?: number;
  /**
  * Filter SAML logs by SAML service provider name (SAML SP name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_auth#saml_sp DebugAuth#saml_sp}
  */
  readonly samlSp?: string;
  /**
  * Show the logs of specific username (User name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_auth#username DebugAuth#username}
  */
  readonly username?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_auth#uuid DebugAuth#uuid}
  */
  readonly uuid?: string;
  /**
  * Show the logs of specific virtual-server (Virtual-server name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_auth#virtual_server DebugAuth#virtual_server}
  */
  readonly virtualServer?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_auth thunder_debug_auth}
*/
export class DebugAuth extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_debug_auth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DebugAuth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DebugAuth to import
  * @param importFromId The id of the existing DebugAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_auth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DebugAuth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_debug_auth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/debug_auth thunder_debug_auth} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DebugAuthConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DebugAuthConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_debug_auth',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authd = config.authd;
    this._clientAddr = config.clientAddr;
    this._id = config.id;
    this._level = config.level;
    this._saml = config.saml;
    this._samlSp = config.samlSp;
    this._username = config.username;
    this._uuid = config.uuid;
    this._virtualServer = config.virtualServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authd - computed: false, optional: true, required: false
  private _authd?: number; 
  public get authd() {
    return this.getNumberAttribute('authd');
  }
  public set authd(value: number) {
    this._authd = value;
  }
  public resetAuthd() {
    this._authd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authdInput() {
    return this._authd;
  }

  // client_addr - computed: false, optional: true, required: false
  private _clientAddr?: string; 
  public get clientAddr() {
    return this.getStringAttribute('client_addr');
  }
  public set clientAddr(value: string) {
    this._clientAddr = value;
  }
  public resetClientAddr() {
    this._clientAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAddrInput() {
    return this._clientAddr;
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

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // saml - computed: false, optional: true, required: false
  private _saml?: number; 
  public get saml() {
    return this.getNumberAttribute('saml');
  }
  public set saml(value: number) {
    this._saml = value;
  }
  public resetSaml() {
    this._saml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml;
  }

  // saml_sp - computed: false, optional: true, required: false
  private _samlSp?: string; 
  public get samlSp() {
    return this.getStringAttribute('saml_sp');
  }
  public set samlSp(value: string) {
    this._samlSp = value;
  }
  public resetSamlSp() {
    this._samlSp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlSpInput() {
    return this._samlSp;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
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

  // virtual_server - computed: false, optional: true, required: false
  private _virtualServer?: string; 
  public get virtualServer() {
    return this.getStringAttribute('virtual_server');
  }
  public set virtualServer(value: string) {
    this._virtualServer = value;
  }
  public resetVirtualServer() {
    this._virtualServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerInput() {
    return this._virtualServer;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authd: cdktf.numberToTerraform(this._authd),
      client_addr: cdktf.stringToTerraform(this._clientAddr),
      id: cdktf.stringToTerraform(this._id),
      level: cdktf.stringToTerraform(this._level),
      saml: cdktf.numberToTerraform(this._saml),
      saml_sp: cdktf.stringToTerraform(this._samlSp),
      username: cdktf.stringToTerraform(this._username),
      uuid: cdktf.stringToTerraform(this._uuid),
      virtual_server: cdktf.stringToTerraform(this._virtualServer),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authd: {
        value: cdktf.numberToHclTerraform(this._authd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_addr: {
        value: cdktf.stringToHclTerraform(this._clientAddr),
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
      level: {
        value: cdktf.stringToHclTerraform(this._level),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml: {
        value: cdktf.numberToHclTerraform(this._saml),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      saml_sp: {
        value: cdktf.stringToHclTerraform(this._samlSp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
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
      virtual_server: {
        value: cdktf.stringToHclTerraform(this._virtualServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
