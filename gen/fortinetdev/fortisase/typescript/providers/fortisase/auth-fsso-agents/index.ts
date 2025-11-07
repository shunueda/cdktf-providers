// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_fsso_agents
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthFssoAgentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_fsso_agents#active_server AuthFssoAgents#active_server}
  */
  readonly activeServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_fsso_agents#name AuthFssoAgents#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_fsso_agents#password AuthFssoAgents#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_fsso_agents#password2 AuthFssoAgents#password2}
  */
  readonly password2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_fsso_agents#password3 AuthFssoAgents#password3}
  */
  readonly password3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_fsso_agents#password4 AuthFssoAgents#password4}
  */
  readonly password4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_fsso_agents#password5 AuthFssoAgents#password5}
  */
  readonly password5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_fsso_agents#primary_key AuthFssoAgents#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_fsso_agents#server AuthFssoAgents#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_fsso_agents#server2 AuthFssoAgents#server2}
  */
  readonly server2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_fsso_agents#server3 AuthFssoAgents#server3}
  */
  readonly server3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_fsso_agents#server4 AuthFssoAgents#server4}
  */
  readonly server4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_fsso_agents#server5 AuthFssoAgents#server5}
  */
  readonly server5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_fsso_agents#ssl_trusted_cert AuthFssoAgents#ssl_trusted_cert}
  */
  readonly sslTrustedCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_fsso_agents#status AuthFssoAgents#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_fsso_agents fortisase_auth_fsso_agents}
*/
export class AuthFssoAgents extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_auth_fsso_agents";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthFssoAgents resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthFssoAgents to import
  * @param importFromId The id of the existing AuthFssoAgents that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_fsso_agents#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthFssoAgents to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_auth_fsso_agents", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_fsso_agents fortisase_auth_fsso_agents} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthFssoAgentsConfig
  */
  public constructor(scope: Construct, id: string, config: AuthFssoAgentsConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_auth_fsso_agents',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeServer = config.activeServer;
    this._name = config.name;
    this._password = config.password;
    this._password2 = config.password2;
    this._password3 = config.password3;
    this._password4 = config.password4;
    this._password5 = config.password5;
    this._primaryKey = config.primaryKey;
    this._server = config.server;
    this._server2 = config.server2;
    this._server3 = config.server3;
    this._server4 = config.server4;
    this._server5 = config.server5;
    this._sslTrustedCert = config.sslTrustedCert;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_server - computed: true, optional: true, required: false
  private _activeServer?: string; 
  public get activeServer() {
    return this.getStringAttribute('active_server');
  }
  public set activeServer(value: string) {
    this._activeServer = value;
  }
  public resetActiveServer() {
    this._activeServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeServerInput() {
    return this._activeServer;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // password - computed: true, optional: true, required: false
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

  // password2 - computed: true, optional: true, required: false
  private _password2?: string; 
  public get password2() {
    return this.getStringAttribute('password2');
  }
  public set password2(value: string) {
    this._password2 = value;
  }
  public resetPassword2() {
    this._password2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get password2Input() {
    return this._password2;
  }

  // password3 - computed: true, optional: true, required: false
  private _password3?: string; 
  public get password3() {
    return this.getStringAttribute('password3');
  }
  public set password3(value: string) {
    this._password3 = value;
  }
  public resetPassword3() {
    this._password3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get password3Input() {
    return this._password3;
  }

  // password4 - computed: true, optional: true, required: false
  private _password4?: string; 
  public get password4() {
    return this.getStringAttribute('password4');
  }
  public set password4(value: string) {
    this._password4 = value;
  }
  public resetPassword4() {
    this._password4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get password4Input() {
    return this._password4;
  }

  // password5 - computed: true, optional: true, required: false
  private _password5?: string; 
  public get password5() {
    return this.getStringAttribute('password5');
  }
  public set password5(value: string) {
    this._password5 = value;
  }
  public resetPassword5() {
    this._password5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get password5Input() {
    return this._password5;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // server - computed: true, optional: true, required: false
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

  // server2 - computed: true, optional: true, required: false
  private _server2?: string; 
  public get server2() {
    return this.getStringAttribute('server2');
  }
  public set server2(value: string) {
    this._server2 = value;
  }
  public resetServer2() {
    this._server2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get server2Input() {
    return this._server2;
  }

  // server3 - computed: true, optional: true, required: false
  private _server3?: string; 
  public get server3() {
    return this.getStringAttribute('server3');
  }
  public set server3(value: string) {
    this._server3 = value;
  }
  public resetServer3() {
    this._server3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get server3Input() {
    return this._server3;
  }

  // server4 - computed: true, optional: true, required: false
  private _server4?: string; 
  public get server4() {
    return this.getStringAttribute('server4');
  }
  public set server4(value: string) {
    this._server4 = value;
  }
  public resetServer4() {
    this._server4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get server4Input() {
    return this._server4;
  }

  // server5 - computed: true, optional: true, required: false
  private _server5?: string; 
  public get server5() {
    return this.getStringAttribute('server5');
  }
  public set server5(value: string) {
    this._server5 = value;
  }
  public resetServer5() {
    this._server5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get server5Input() {
    return this._server5;
  }

  // ssl_trusted_cert - computed: true, optional: true, required: false
  private _sslTrustedCert?: string; 
  public get sslTrustedCert() {
    return this.getStringAttribute('ssl_trusted_cert');
  }
  public set sslTrustedCert(value: string) {
    this._sslTrustedCert = value;
  }
  public resetSslTrustedCert() {
    this._sslTrustedCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslTrustedCertInput() {
    return this._sslTrustedCert;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_server: cdktf.stringToTerraform(this._activeServer),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      password2: cdktf.stringToTerraform(this._password2),
      password3: cdktf.stringToTerraform(this._password3),
      password4: cdktf.stringToTerraform(this._password4),
      password5: cdktf.stringToTerraform(this._password5),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      server: cdktf.stringToTerraform(this._server),
      server2: cdktf.stringToTerraform(this._server2),
      server3: cdktf.stringToTerraform(this._server3),
      server4: cdktf.stringToTerraform(this._server4),
      server5: cdktf.stringToTerraform(this._server5),
      ssl_trusted_cert: cdktf.stringToTerraform(this._sslTrustedCert),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_server: {
        value: cdktf.stringToHclTerraform(this._activeServer),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password2: {
        value: cdktf.stringToHclTerraform(this._password2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password3: {
        value: cdktf.stringToHclTerraform(this._password3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password4: {
        value: cdktf.stringToHclTerraform(this._password4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password5: {
        value: cdktf.stringToHclTerraform(this._password5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
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
      server2: {
        value: cdktf.stringToHclTerraform(this._server2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server3: {
        value: cdktf.stringToHclTerraform(this._server3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server4: {
        value: cdktf.stringToHclTerraform(this._server4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server5: {
        value: cdktf.stringToHclTerraform(this._server5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_trusted_cert: {
        value: cdktf.stringToHclTerraform(this._sslTrustedCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
