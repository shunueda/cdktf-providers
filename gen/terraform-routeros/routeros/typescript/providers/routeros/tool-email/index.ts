// https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_email
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ToolEmailConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_email#___path___ ToolEmail#___path___}
  */
  readonly path?: string;
  /**
  * Name or email address that will be shown as a receiver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_email#from ToolEmail#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_email#id ToolEmail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Password used for authenticating to an SMTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_email#password ToolEmail#password}
  */
  readonly password?: string;
  /**
  * SMTP server's port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_email#port ToolEmail#port}
  */
  readonly port?: string;
  /**
  * SMTP server's IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_email#server ToolEmail#server}
  */
  readonly server?: string;
  /**
  * Whether to use TLS encryption:
  *   * yes - sends STARTTLS and drops the session if TLS is not available on the server
  *   * no - do not send STARTTLS
  *   * starttls - sends STARTTLS and continue without TLS if a server responds that TLS is not available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_email#tls ToolEmail#tls}
  */
  readonly tls?: string;
  /**
  * The username used for authenticating to an SMTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_email#user ToolEmail#user}
  */
  readonly user?: string;
  /**
  * The VRF table this resource operates on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_email#vrf ToolEmail#vrf}
  */
  readonly vrf?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_email routeros_tool_email}
*/
export class ToolEmail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_tool_email";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ToolEmail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ToolEmail to import
  * @param importFromId The id of the existing ToolEmail that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_email#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ToolEmail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_tool_email", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/tool_email routeros_tool_email} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ToolEmailConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ToolEmailConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_tool_email',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.95.0',
        providerVersionConstraint: '1.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._from = config.from;
    this._id = config.id;
    this._password = config.password;
    this._port = config.port;
    this._server = config.server;
    this._tls = config.tls;
    this._user = config.user;
    this._vrf = config.vrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
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

  // last_address - computed: true, optional: false, required: false
  public get lastAddress() {
    return this.getStringAttribute('last_address');
  }

  // last_status - computed: true, optional: false, required: false
  public get lastStatus() {
    return this.getStringAttribute('last_status');
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: string; 
  public get tls() {
    return this.getStringAttribute('tls');
  }
  public set tls(value: string) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
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

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      from: cdktf.stringToTerraform(this._from),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.stringToTerraform(this._port),
      server: cdktf.stringToTerraform(this._server),
      tls: cdktf.stringToTerraform(this._tls),
      user: cdktf.stringToTerraform(this._user),
      vrf: cdktf.stringToTerraform(this._vrf),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from: {
        value: cdktf.stringToHclTerraform(this._from),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls: {
        value: cdktf.stringToHclTerraform(this._tls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf: {
        value: cdktf.stringToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
