// https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SonarqubeProviderConfig {
  /**
  * Allows anonymizing users on destroy. Requires Sonarqube version >= 9.7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs#anonymize_user_on_delete SonarqubeProvider#anonymize_user_on_delete}
  */
  readonly anonymizeUserOnDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs#host SonarqubeProvider#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs#http_proxy SonarqubeProvider#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs#installed_edition SonarqubeProvider#installed_edition}
  */
  readonly installedEdition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs#installed_version SonarqubeProvider#installed_version}
  */
  readonly installedVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs#pass SonarqubeProvider#pass}
  */
  readonly pass?: string;
  /**
  * Allows ignoring insecure certificates when set to true. Defaults to false. Disabling TLS verification is dangerous and should only be done for local testing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs#tls_insecure_skip_verify SonarqubeProvider#tls_insecure_skip_verify}
  */
  readonly tlsInsecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs#token SonarqubeProvider#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs#user SonarqubeProvider#user}
  */
  readonly user?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs#alias SonarqubeProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs sonarqube}
*/
export class SonarqubeProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarqube";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SonarqubeProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SonarqubeProvider to import
  * @param importFromId The id of the existing SonarqubeProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SonarqubeProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarqube", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jdamata/sonarqube/0.16.17/docs sonarqube} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SonarqubeProviderConfig
  */
  public constructor(scope: Construct, id: string, config: SonarqubeProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarqube',
      terraformGeneratorMetadata: {
        providerName: 'sonarqube',
        providerVersion: '0.16.17'
      },
      terraformProviderSource: 'jdamata/sonarqube'
    });
    this._anonymizeUserOnDelete = config.anonymizeUserOnDelete;
    this._host = config.host;
    this._httpProxy = config.httpProxy;
    this._installedEdition = config.installedEdition;
    this._installedVersion = config.installedVersion;
    this._pass = config.pass;
    this._tlsInsecureSkipVerify = config.tlsInsecureSkipVerify;
    this._token = config.token;
    this._user = config.user;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anonymize_user_on_delete - computed: false, optional: true, required: false
  private _anonymizeUserOnDelete?: boolean | cdktf.IResolvable; 
  public get anonymizeUserOnDelete() {
    return this._anonymizeUserOnDelete;
  }
  public set anonymizeUserOnDelete(value: boolean | cdktf.IResolvable | undefined) {
    this._anonymizeUserOnDelete = value;
  }
  public resetAnonymizeUserOnDelete() {
    this._anonymizeUserOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymizeUserOnDeleteInput() {
    return this._anonymizeUserOnDelete;
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

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this._httpProxy;
  }
  public set httpProxy(value: string | undefined) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // installed_edition - computed: false, optional: true, required: false
  private _installedEdition?: string; 
  public get installedEdition() {
    return this._installedEdition;
  }
  public set installedEdition(value: string | undefined) {
    this._installedEdition = value;
  }
  public resetInstalledEdition() {
    this._installedEdition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installedEditionInput() {
    return this._installedEdition;
  }

  // installed_version - computed: false, optional: true, required: false
  private _installedVersion?: string; 
  public get installedVersion() {
    return this._installedVersion;
  }
  public set installedVersion(value: string | undefined) {
    this._installedVersion = value;
  }
  public resetInstalledVersion() {
    this._installedVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installedVersionInput() {
    return this._installedVersion;
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: string; 
  public get pass() {
    return this._pass;
  }
  public set pass(value: string | undefined) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }

  // tls_insecure_skip_verify - computed: false, optional: true, required: false
  private _tlsInsecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get tlsInsecureSkipVerify() {
    return this._tlsInsecureSkipVerify;
  }
  public set tlsInsecureSkipVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._tlsInsecureSkipVerify = value;
  }
  public resetTlsInsecureSkipVerify() {
    this._tlsInsecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInsecureSkipVerifyInput() {
    return this._tlsInsecureSkipVerify;
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

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this._user;
  }
  public set user(value: string | undefined) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
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
      anonymize_user_on_delete: cdktf.booleanToTerraform(this._anonymizeUserOnDelete),
      host: cdktf.stringToTerraform(this._host),
      http_proxy: cdktf.stringToTerraform(this._httpProxy),
      installed_edition: cdktf.stringToTerraform(this._installedEdition),
      installed_version: cdktf.stringToTerraform(this._installedVersion),
      pass: cdktf.stringToTerraform(this._pass),
      tls_insecure_skip_verify: cdktf.booleanToTerraform(this._tlsInsecureSkipVerify),
      token: cdktf.stringToTerraform(this._token),
      user: cdktf.stringToTerraform(this._user),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anonymize_user_on_delete: {
        value: cdktf.booleanToHclTerraform(this._anonymizeUserOnDelete),
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
      http_proxy: {
        value: cdktf.stringToHclTerraform(this._httpProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      installed_edition: {
        value: cdktf.stringToHclTerraform(this._installedEdition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      installed_version: {
        value: cdktf.stringToHclTerraform(this._installedVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pass: {
        value: cdktf.stringToHclTerraform(this._pass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_insecure_skip_verify: {
        value: cdktf.booleanToHclTerraform(this._tlsInsecureSkipVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
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
