// https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZabbixProviderConfig {
  /**
  * Zabbix API password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs#password ZabbixProvider#password}
  */
  readonly password: string;
  /**
  * Serialize API requests, if required due to API race conditions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs#serialize ZabbixProvider#serialize}
  */
  readonly serialize?: boolean | cdktf.IResolvable;
  /**
  * Disable TLS certificate checking (for testing use only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs#tls_insecure ZabbixProvider#tls_insecure}
  */
  readonly tlsInsecure?: boolean | cdktf.IResolvable;
  /**
  * Zabbix API url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs#url ZabbixProvider#url}
  */
  readonly url: string;
  /**
  * Zabbix API username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs#username ZabbixProvider#username}
  */
  readonly username: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs#alias ZabbixProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs zabbix}
*/
export class ZabbixProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zabbix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZabbixProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZabbixProvider to import
  * @param importFromId The id of the existing ZabbixProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZabbixProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zabbix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tpretz/zabbix/0.17.0/docs zabbix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZabbixProviderConfig
  */
  public constructor(scope: Construct, id: string, config: ZabbixProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'zabbix',
      terraformGeneratorMetadata: {
        providerName: 'zabbix',
        providerVersion: '0.17.0'
      },
      terraformProviderSource: 'tpretz/zabbix'
    });
    this._password = config.password;
    this._serialize = config.serialize;
    this._tlsInsecure = config.tlsInsecure;
    this._url = config.url;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // serialize - computed: false, optional: true, required: false
  private _serialize?: boolean | cdktf.IResolvable; 
  public get serialize() {
    return this._serialize;
  }
  public set serialize(value: boolean | cdktf.IResolvable | undefined) {
    this._serialize = value;
  }
  public resetSerialize() {
    this._serialize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializeInput() {
    return this._serialize;
  }

  // tls_insecure - computed: false, optional: true, required: false
  private _tlsInsecure?: boolean | cdktf.IResolvable; 
  public get tlsInsecure() {
    return this._tlsInsecure;
  }
  public set tlsInsecure(value: boolean | cdktf.IResolvable | undefined) {
    this._tlsInsecure = value;
  }
  public resetTlsInsecure() {
    this._tlsInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInsecureInput() {
    return this._tlsInsecure;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      password: cdktf.stringToTerraform(this._password),
      serialize: cdktf.booleanToTerraform(this._serialize),
      tls_insecure: cdktf.booleanToTerraform(this._tlsInsecure),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serialize: {
        value: cdktf.booleanToHclTerraform(this._serialize),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_insecure: {
        value: cdktf.booleanToHclTerraform(this._tlsInsecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
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
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
