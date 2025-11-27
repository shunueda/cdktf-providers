// https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/indexer_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IndexerProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * IndexerProxy configuration template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/indexer_proxy#config_contract IndexerProxy#config_contract}
  */
  readonly configContract: string;
  /**
  * host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/indexer_proxy#host IndexerProxy#host}
  */
  readonly host?: string;
  /**
  * IndexerProxy implementation name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/indexer_proxy#implementation IndexerProxy#implementation}
  */
  readonly implementation: string;
  /**
  * Indexer Proxy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/indexer_proxy#name IndexerProxy#name}
  */
  readonly name: string;
  /**
  * Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/indexer_proxy#password IndexerProxy#password}
  */
  readonly password?: string;
  /**
  * Port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/indexer_proxy#port IndexerProxy#port}
  */
  readonly port?: number;
  /**
  * Request timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/indexer_proxy#request_timeout IndexerProxy#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * List of associated tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/indexer_proxy#tags IndexerProxy#tags}
  */
  readonly tags?: number[];
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/indexer_proxy#username IndexerProxy#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/indexer_proxy prowlarr_indexer_proxy}
*/
export class IndexerProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prowlarr_indexer_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IndexerProxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IndexerProxy to import
  * @param importFromId The id of the existing IndexerProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/indexer_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IndexerProxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prowlarr_indexer_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/resources/indexer_proxy prowlarr_indexer_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IndexerProxyConfig
  */
  public constructor(scope: Construct, id: string, config: IndexerProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'prowlarr_indexer_proxy',
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
    this._configContract = config.configContract;
    this._host = config.host;
    this._implementation = config.implementation;
    this._name = config.name;
    this._password = config.password;
    this._port = config.port;
    this._requestTimeout = config.requestTimeout;
    this._tags = config.tags;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_contract - computed: false, optional: false, required: true
  private _configContract?: string; 
  public get configContract() {
    return this.getStringAttribute('config_contract');
  }
  public set configContract(value: string) {
    this._configContract = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configContractInput() {
    return this._configContract;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // implementation - computed: false, optional: false, required: true
  private _implementation?: string; 
  public get implementation() {
    return this.getStringAttribute('implementation');
  }
  public set implementation(value: string) {
    this._implementation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get implementationInput() {
    return this._implementation;
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

  // port - computed: true, optional: true, required: false
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

  // request_timeout - computed: true, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }
  public set requestTimeout(value: number) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
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

  // username - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_contract: cdktf.stringToTerraform(this._configContract),
      host: cdktf.stringToTerraform(this._host),
      implementation: cdktf.stringToTerraform(this._implementation),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      request_timeout: cdktf.numberToTerraform(this._requestTimeout),
      tags: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tags),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_contract: {
        value: cdktf.stringToHclTerraform(this._configContract),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      implementation: {
        value: cdktf.stringToHclTerraform(this._implementation),
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
      request_timeout: {
        value: cdktf.numberToHclTerraform(this._requestTimeout),
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
