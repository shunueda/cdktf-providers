// https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuacamoleProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs#cookies GuacamoleProvider#cookies}
  */
  readonly cookies?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs#data_source GuacamoleProvider#data_source}
  */
  readonly dataSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs#disable_cookies GuacamoleProvider#disable_cookies}
  */
  readonly disableCookies?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs#disable_tls_verification GuacamoleProvider#disable_tls_verification}
  */
  readonly disableTlsVerification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs#password GuacamoleProvider#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs#token GuacamoleProvider#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs#url GuacamoleProvider#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs#username GuacamoleProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs#alias GuacamoleProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs guacamole}
*/
export class GuacamoleProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "guacamole";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GuacamoleProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GuacamoleProvider to import
  * @param importFromId The id of the existing GuacamoleProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GuacamoleProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "guacamole", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs guacamole} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GuacamoleProviderConfig
  */
  public constructor(scope: Construct, id: string, config: GuacamoleProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'guacamole',
      terraformGeneratorMetadata: {
        providerName: 'guacamole',
        providerVersion: '1.4.1',
        providerVersionConstraint: '1.4.1'
      },
      terraformProviderSource: 'techBeck03/guacamole'
    });
    this._cookies = config.cookies;
    this._dataSource = config.dataSource;
    this._disableCookies = config.disableCookies;
    this._disableTlsVerification = config.disableTlsVerification;
    this._password = config.password;
    this._token = config.token;
    this._url = config.url;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cookies - computed: false, optional: true, required: false
  private _cookies?: { [key: string]: string }; 
  public get cookies() {
    return this._cookies;
  }
  public set cookies(value: { [key: string]: string } | undefined) {
    this._cookies = value;
  }
  public resetCookies() {
    this._cookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource?: string; 
  public get dataSource() {
    return this._dataSource;
  }
  public set dataSource(value: string | undefined) {
    this._dataSource = value;
  }
  public resetDataSource() {
    this._dataSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // disable_cookies - computed: false, optional: true, required: false
  private _disableCookies?: boolean | cdktf.IResolvable; 
  public get disableCookies() {
    return this._disableCookies;
  }
  public set disableCookies(value: boolean | cdktf.IResolvable | undefined) {
    this._disableCookies = value;
  }
  public resetDisableCookies() {
    this._disableCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCookiesInput() {
    return this._disableCookies;
  }

  // disable_tls_verification - computed: false, optional: true, required: false
  private _disableTlsVerification?: boolean | cdktf.IResolvable; 
  public get disableTlsVerification() {
    return this._disableTlsVerification;
  }
  public set disableTlsVerification(value: boolean | cdktf.IResolvable | undefined) {
    this._disableTlsVerification = value;
  }
  public resetDisableTlsVerification() {
    this._disableTlsVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTlsVerificationInput() {
    return this._disableTlsVerification;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
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

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
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
      cookies: cdktf.hashMapper(cdktf.stringToTerraform)(this._cookies),
      data_source: cdktf.stringToTerraform(this._dataSource),
      disable_cookies: cdktf.booleanToTerraform(this._disableCookies),
      disable_tls_verification: cdktf.booleanToTerraform(this._disableTlsVerification),
      password: cdktf.stringToTerraform(this._password),
      token: cdktf.stringToTerraform(this._token),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cookies: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._cookies),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      data_source: {
        value: cdktf.stringToHclTerraform(this._dataSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_cookies: {
        value: cdktf.booleanToHclTerraform(this._disableCookies),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_tls_verification: {
        value: cdktf.booleanToHclTerraform(this._disableTlsVerification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
