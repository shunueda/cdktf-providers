// https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LdapProviderConfig {
  /**
  * LDAP password, can optionally be passed as `LDAP_BIND_PASSWORD`environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs#bind_password LdapProvider#bind_password}
  */
  readonly bindPassword: string;
  /**
  * LDAP username, can optionally be passed as `LDAP_BIND_USER`environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs#bind_user LdapProvider#bind_user}
  */
  readonly bindUser: string;
  /**
  * if the entry attribute names should be handeled case sensitive (for state handling in resource ldap_entry)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs#entry_attribute_names_case_sensitive LdapProvider#entry_attribute_names_case_sensitive}
  */
  readonly entryAttributeNamesCaseSensitive?: boolean | cdktf.IResolvable;
  /**
  * LDAP host, can optionally be passed as `LDAP_HOST`environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs#host LdapProvider#host}
  */
  readonly host: string;
  /**
  * LDAP port, can optionally be passed as `LDAP_PORT`environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs#port LdapProvider#port}
  */
  readonly port: number;
  /**
  * Enable the TLS encryption for LDAP (LDAPS). Default, is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs#tls LdapProvider#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * Don't verify the server TLS certificate. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs#tls_insecure LdapProvider#tls_insecure}
  */
  readonly tlsInsecure?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs#alias LdapProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs ldap}
*/
export class LdapProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ldap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LdapProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LdapProvider to import
  * @param importFromId The id of the existing LdapProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LdapProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ldap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/l-with/ldap/0.11.1/docs ldap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LdapProviderConfig
  */
  public constructor(scope: Construct, id: string, config: LdapProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'ldap',
      terraformGeneratorMetadata: {
        providerName: 'ldap',
        providerVersion: '0.11.1'
      },
      terraformProviderSource: 'l-with/ldap'
    });
    this._bindPassword = config.bindPassword;
    this._bindUser = config.bindUser;
    this._entryAttributeNamesCaseSensitive = config.entryAttributeNamesCaseSensitive;
    this._host = config.host;
    this._port = config.port;
    this._tls = config.tls;
    this._tlsInsecure = config.tlsInsecure;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bind_password - computed: false, optional: false, required: true
  private _bindPassword?: string; 
  public get bindPassword() {
    return this._bindPassword;
  }
  public set bindPassword(value: string | undefined) {
    this._bindPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindPasswordInput() {
    return this._bindPassword;
  }

  // bind_user - computed: false, optional: false, required: true
  private _bindUser?: string; 
  public get bindUser() {
    return this._bindUser;
  }
  public set bindUser(value: string | undefined) {
    this._bindUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindUserInput() {
    return this._bindUser;
  }

  // entry_attribute_names_case_sensitive - computed: false, optional: true, required: false
  private _entryAttributeNamesCaseSensitive?: boolean | cdktf.IResolvable; 
  public get entryAttributeNamesCaseSensitive() {
    return this._entryAttributeNamesCaseSensitive;
  }
  public set entryAttributeNamesCaseSensitive(value: boolean | cdktf.IResolvable | undefined) {
    this._entryAttributeNamesCaseSensitive = value;
  }
  public resetEntryAttributeNamesCaseSensitive() {
    this._entryAttributeNamesCaseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryAttributeNamesCaseSensitiveInput() {
    return this._entryAttributeNamesCaseSensitive;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this._port;
  }
  public set port(value: number | undefined) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this._tls;
  }
  public set tls(value: boolean | cdktf.IResolvable | undefined) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
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
      bind_password: cdktf.stringToTerraform(this._bindPassword),
      bind_user: cdktf.stringToTerraform(this._bindUser),
      entry_attribute_names_case_sensitive: cdktf.booleanToTerraform(this._entryAttributeNamesCaseSensitive),
      host: cdktf.stringToTerraform(this._host),
      port: cdktf.numberToTerraform(this._port),
      tls: cdktf.booleanToTerraform(this._tls),
      tls_insecure: cdktf.booleanToTerraform(this._tlsInsecure),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bind_password: {
        value: cdktf.stringToHclTerraform(this._bindPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_user: {
        value: cdktf.stringToHclTerraform(this._bindUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entry_attribute_names_case_sensitive: {
        value: cdktf.booleanToHclTerraform(this._entryAttributeNamesCaseSensitive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      tls: {
        value: cdktf.booleanToHclTerraform(this._tls),
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
