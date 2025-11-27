// https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/indexer_proxy_socks5
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IndexerProxySocks5Config extends cdktf.TerraformMetaArguments {
  /**
  * host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/indexer_proxy_socks5#host IndexerProxySocks5#host}
  */
  readonly host: string;
  /**
  * Indexer Proxy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/indexer_proxy_socks5#name IndexerProxySocks5#name}
  */
  readonly name: string;
  /**
  * Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/indexer_proxy_socks5#password IndexerProxySocks5#password}
  */
  readonly password: string;
  /**
  * Port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/indexer_proxy_socks5#port IndexerProxySocks5#port}
  */
  readonly port: number;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/indexer_proxy_socks5#tags IndexerProxySocks5#tags}
  */
  readonly tags?: number[];
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/indexer_proxy_socks5#username IndexerProxySocks5#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/indexer_proxy_socks5 prowlarr_indexer_proxy_socks5}
*/
export class IndexerProxySocks5 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prowlarr_indexer_proxy_socks5";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IndexerProxySocks5 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IndexerProxySocks5 to import
  * @param importFromId The id of the existing IndexerProxySocks5 that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/indexer_proxy_socks5#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IndexerProxySocks5 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prowlarr_indexer_proxy_socks5", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/indexer_proxy_socks5 prowlarr_indexer_proxy_socks5} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IndexerProxySocks5Config
  */
  public constructor(scope: Construct, id: string, config: IndexerProxySocks5Config) {
    super(scope, id, {
      terraformResourceType: 'prowlarr_indexer_proxy_socks5',
      terraformGeneratorMetadata: {
        providerName: 'prowlarr',
        providerVersion: '3.1.0',
        providerVersionConstraint: '3.1.0'
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
    this._password = config.password;
    this._port = config.port;
    this._tags = config.tags;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // tags - computed: true, optional: true, required: false
  private _tags?: number[]; 
  public get tags() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tags')));
  }
  public set tags(value: number[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host: cdktf.stringToTerraform(this._host),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
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
