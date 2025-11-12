// https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LdapProviderConfig {
  /**
  * Bind DN used to manage directory (`LDAP_BIND_DN`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs#ldap_bind_dn LdapProvider#ldap_bind_dn}
  */
  readonly ldapBindDn?: string;
  /**
  * Bind password (`LDAP_BIND_PASSWORD`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs#ldap_bind_password LdapProvider#ldap_bind_password}
  */
  readonly ldapBindPassword?: string;
  /**
  * Whether to skip certificate verification (`LDAP_TLS_INSECURE_VERIFY`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs#ldap_tls_insecure_verify LdapProvider#ldap_tls_insecure_verify}
  */
  readonly ldapTlsInsecureVerify?: boolean | cdktf.IResolvable;
  /**
  * Whether to connect using STARTTLS (`LDAP_TLS_USE_STARTTLS`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs#ldap_tls_use_starttls LdapProvider#ldap_tls_use_starttls}
  */
  readonly ldapTlsUseStarttls?: boolean | cdktf.IResolvable;
  /**
  * LDAP URL to managed server (`LDAP_URL`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs#ldap_url LdapProvider#ldap_url}
  */
  readonly ldapUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs#alias LdapProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs ldap}
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
  * @param importFromId The id of the existing LdapProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LdapProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ldap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dodevops/ldap/0.4.0/docs ldap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LdapProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LdapProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ldap',
      terraformGeneratorMetadata: {
        providerName: 'ldap',
        providerVersion: '0.4.0',
        providerVersionConstraint: '0.4.0'
      },
      terraformProviderSource: 'dodevops/ldap'
    });
    this._ldapBindDn = config.ldapBindDn;
    this._ldapBindPassword = config.ldapBindPassword;
    this._ldapTlsInsecureVerify = config.ldapTlsInsecureVerify;
    this._ldapTlsUseStarttls = config.ldapTlsUseStarttls;
    this._ldapUrl = config.ldapUrl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ldap_bind_dn - computed: false, optional: true, required: false
  private _ldapBindDn?: string; 
  public get ldapBindDn() {
    return this._ldapBindDn;
  }
  public set ldapBindDn(value: string | undefined) {
    this._ldapBindDn = value;
  }
  public resetLdapBindDn() {
    this._ldapBindDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapBindDnInput() {
    return this._ldapBindDn;
  }

  // ldap_bind_password - computed: false, optional: true, required: false
  private _ldapBindPassword?: string; 
  public get ldapBindPassword() {
    return this._ldapBindPassword;
  }
  public set ldapBindPassword(value: string | undefined) {
    this._ldapBindPassword = value;
  }
  public resetLdapBindPassword() {
    this._ldapBindPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapBindPasswordInput() {
    return this._ldapBindPassword;
  }

  // ldap_tls_insecure_verify - computed: false, optional: true, required: false
  private _ldapTlsInsecureVerify?: boolean | cdktf.IResolvable; 
  public get ldapTlsInsecureVerify() {
    return this._ldapTlsInsecureVerify;
  }
  public set ldapTlsInsecureVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._ldapTlsInsecureVerify = value;
  }
  public resetLdapTlsInsecureVerify() {
    this._ldapTlsInsecureVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapTlsInsecureVerifyInput() {
    return this._ldapTlsInsecureVerify;
  }

  // ldap_tls_use_starttls - computed: false, optional: true, required: false
  private _ldapTlsUseStarttls?: boolean | cdktf.IResolvable; 
  public get ldapTlsUseStarttls() {
    return this._ldapTlsUseStarttls;
  }
  public set ldapTlsUseStarttls(value: boolean | cdktf.IResolvable | undefined) {
    this._ldapTlsUseStarttls = value;
  }
  public resetLdapTlsUseStarttls() {
    this._ldapTlsUseStarttls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapTlsUseStarttlsInput() {
    return this._ldapTlsUseStarttls;
  }

  // ldap_url - computed: false, optional: true, required: false
  private _ldapUrl?: string; 
  public get ldapUrl() {
    return this._ldapUrl;
  }
  public set ldapUrl(value: string | undefined) {
    this._ldapUrl = value;
  }
  public resetLdapUrl() {
    this._ldapUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapUrlInput() {
    return this._ldapUrl;
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
      ldap_bind_dn: cdktf.stringToTerraform(this._ldapBindDn),
      ldap_bind_password: cdktf.stringToTerraform(this._ldapBindPassword),
      ldap_tls_insecure_verify: cdktf.booleanToTerraform(this._ldapTlsInsecureVerify),
      ldap_tls_use_starttls: cdktf.booleanToTerraform(this._ldapTlsUseStarttls),
      ldap_url: cdktf.stringToTerraform(this._ldapUrl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ldap_bind_dn: {
        value: cdktf.stringToHclTerraform(this._ldapBindDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_bind_password: {
        value: cdktf.stringToHclTerraform(this._ldapBindPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_tls_insecure_verify: {
        value: cdktf.booleanToHclTerraform(this._ldapTlsInsecureVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ldap_tls_use_starttls: {
        value: cdktf.booleanToHclTerraform(this._ldapTlsUseStarttls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ldap_url: {
        value: cdktf.stringToHclTerraform(this._ldapUrl),
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
