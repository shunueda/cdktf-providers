// https://registry.terraform.io/providers/elastic-infra/ldap/2.0.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LdapProviderConfig {
  /**
  * Password to authenticate the Bind user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic-infra/ldap/2.0.1/docs#bind_password LdapProvider#bind_password}
  */
  readonly bindPassword: string;
  /**
  * Bind user to be used for authenticating on the LDAP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic-infra/ldap/2.0.1/docs#bind_user LdapProvider#bind_user}
  */
  readonly bindUser: string;
  /**
  * The LDAP server to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic-infra/ldap/2.0.1/docs#ldap_host LdapProvider#ldap_host}
  */
  readonly ldapHost: string;
  /**
  * The LDAP protocol port (default: 389).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic-infra/ldap/2.0.1/docs#ldap_port LdapProvider#ldap_port}
  */
  readonly ldapPort?: number;
  /**
  * Upgrade TLS to secure the connection (default: false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic-infra/ldap/2.0.1/docs#start_tls LdapProvider#start_tls}
  */
  readonly startTls?: boolean | cdktf.IResolvable;
  /**
  * Enable TLS encryption for LDAP (LDAPS) (default: false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic-infra/ldap/2.0.1/docs#tls LdapProvider#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
  /**
  * Don't verify server TLS certificate (default: false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic-infra/ldap/2.0.1/docs#tls_insecure LdapProvider#tls_insecure}
  */
  readonly tlsInsecure?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic-infra/ldap/2.0.1/docs#alias LdapProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic-infra/ldap/2.0.1/docs ldap}
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
  * @param importFromId The id of the existing LdapProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic-infra/ldap/2.0.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LdapProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ldap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic-infra/ldap/2.0.1/docs ldap} Resource
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
        providerVersion: '2.0.1',
        providerVersionConstraint: '2.0.1'
      },
      terraformProviderSource: 'elastic-infra/ldap'
    });
    this._bindPassword = config.bindPassword;
    this._bindUser = config.bindUser;
    this._ldapHost = config.ldapHost;
    this._ldapPort = config.ldapPort;
    this._startTls = config.startTls;
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

  // ldap_host - computed: false, optional: false, required: true
  private _ldapHost?: string; 
  public get ldapHost() {
    return this._ldapHost;
  }
  public set ldapHost(value: string | undefined) {
    this._ldapHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapHostInput() {
    return this._ldapHost;
  }

  // ldap_port - computed: false, optional: true, required: false
  private _ldapPort?: number; 
  public get ldapPort() {
    return this._ldapPort;
  }
  public set ldapPort(value: number | undefined) {
    this._ldapPort = value;
  }
  public resetLdapPort() {
    this._ldapPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapPortInput() {
    return this._ldapPort;
  }

  // start_tls - computed: false, optional: true, required: false
  private _startTls?: boolean | cdktf.IResolvable; 
  public get startTls() {
    return this._startTls;
  }
  public set startTls(value: boolean | cdktf.IResolvable | undefined) {
    this._startTls = value;
  }
  public resetStartTls() {
    this._startTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTlsInput() {
    return this._startTls;
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
      ldap_host: cdktf.stringToTerraform(this._ldapHost),
      ldap_port: cdktf.numberToTerraform(this._ldapPort),
      start_tls: cdktf.booleanToTerraform(this._startTls),
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
      ldap_host: {
        value: cdktf.stringToHclTerraform(this._ldapHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_port: {
        value: cdktf.numberToHclTerraform(this._ldapPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start_tls: {
        value: cdktf.booleanToHclTerraform(this._startTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
