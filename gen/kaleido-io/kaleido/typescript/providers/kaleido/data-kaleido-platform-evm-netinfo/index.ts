// https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/data-sources/platform_evm_netinfo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKaleidoPlatformEvmNetinfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/data-sources/platform_evm_netinfo#environment DataKaleidoPlatformEvmNetinfo#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/data-sources/platform_evm_netinfo#json_rpc_url DataKaleidoPlatformEvmNetinfo#json_rpc_url}
  */
  readonly jsonRpcUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/data-sources/platform_evm_netinfo#password DataKaleidoPlatformEvmNetinfo#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/data-sources/platform_evm_netinfo#service DataKaleidoPlatformEvmNetinfo#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/data-sources/platform_evm_netinfo#username DataKaleidoPlatformEvmNetinfo#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/data-sources/platform_evm_netinfo kaleido_platform_evm_netinfo}
*/
export class DataKaleidoPlatformEvmNetinfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kaleido_platform_evm_netinfo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKaleidoPlatformEvmNetinfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKaleidoPlatformEvmNetinfo to import
  * @param importFromId The id of the existing DataKaleidoPlatformEvmNetinfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/data-sources/platform_evm_netinfo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKaleidoPlatformEvmNetinfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kaleido_platform_evm_netinfo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/data-sources/platform_evm_netinfo kaleido_platform_evm_netinfo} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKaleidoPlatformEvmNetinfoConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataKaleidoPlatformEvmNetinfoConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'kaleido_platform_evm_netinfo',
      terraformGeneratorMetadata: {
        providerName: 'kaleido',
        providerVersion: '1.1.2',
        providerVersionConstraint: '1.1.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environment = config.environment;
    this._jsonRpcUrl = config.jsonRpcUrl;
    this._password = config.password;
    this._service = config.service;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chain_id - computed: true, optional: false, required: false
  public get chainId() {
    return this.getNumberAttribute('chain_id');
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // json_rpc_url - computed: false, optional: true, required: false
  private _jsonRpcUrl?: string; 
  public get jsonRpcUrl() {
    return this.getStringAttribute('json_rpc_url');
  }
  public set jsonRpcUrl(value: string) {
    this._jsonRpcUrl = value;
  }
  public resetJsonRpcUrl() {
    this._jsonRpcUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonRpcUrlInput() {
    return this._jsonRpcUrl;
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment: cdktf.stringToTerraform(this._environment),
      json_rpc_url: cdktf.stringToTerraform(this._jsonRpcUrl),
      password: cdktf.stringToTerraform(this._password),
      service: cdktf.stringToTerraform(this._service),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      json_rpc_url: {
        value: cdktf.stringToHclTerraform(this._jsonRpcUrl),
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
      service: {
        value: cdktf.stringToHclTerraform(this._service),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
