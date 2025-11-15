// https://registry.terraform.io/providers/artie-labs/artie/2.3.0/docs/resources/ssh_tunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SshTunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * The public hostname or IP address of your SSH server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.0/docs/resources/ssh_tunnel#host SshTunnel#host}
  */
  readonly host: string;
  /**
  * A human-readable label for this SSH tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.0/docs/resources/ssh_tunnel#name SshTunnel#name}
  */
  readonly name: string;
  /**
  * The port number of your SSH server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.0/docs/resources/ssh_tunnel#port SshTunnel#port}
  */
  readonly port: number;
  /**
  * The username we should use when connecting to your SSH server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.0/docs/resources/ssh_tunnel#username SshTunnel#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.0/docs/resources/ssh_tunnel artie_ssh_tunnel}
*/
export class SshTunnel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artie_ssh_tunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SshTunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SshTunnel to import
  * @param importFromId The id of the existing SshTunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.0/docs/resources/ssh_tunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SshTunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artie_ssh_tunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/artie-labs/artie/2.3.0/docs/resources/ssh_tunnel artie_ssh_tunnel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SshTunnelConfig
  */
  public constructor(scope: Construct, id: string, config: SshTunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'artie_ssh_tunnel',
      terraformGeneratorMetadata: {
        providerName: 'artie',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._host = config.host;
    this._name = config.name;
    this._port = config.port;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host: cdktf.stringToTerraform(this._host),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
