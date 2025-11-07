// https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SatoriProviderConfig {
  /**
  * Allows to override the default file system folder where the JWT token is stored. Relevant if `reuse_jwt` is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs#jwt_folder_path SatoriProvider#jwt_folder_path}
  */
  readonly jwtFolderPath?: string;
  /**
  * Terraform provider generates a JWT token on each run. For frequent terraform runs, this option allows token storage in the file system and reusing it if valid. The usage of this option should be carefully considered as it may lead to token leak. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs#reuse_jwt SatoriProvider#reuse_jwt}
  */
  readonly reuseJwt?: boolean | cdktf.IResolvable;
  /**
  * Your Satori account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs#satori_account SatoriProvider#satori_account}
  */
  readonly satoriAccount: string;
  /**
  * Service account ID with administrative privileges. Can be specified with the `SATORI_SA` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs#service_account SatoriProvider#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Service account key. Can be specified with the `SATORI_SA_KEY` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs#service_account_key SatoriProvider#service_account_key}
  */
  readonly serviceAccountKey?: string;
  /**
  * Defaults to `https://app.satoricyber.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs#url SatoriProvider#url}
  */
  readonly url?: string;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs#verify_tls SatoriProvider#verify_tls}
  */
  readonly verifyTls?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs#alias SatoriProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs satori}
*/
export class SatoriProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "satori";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SatoriProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SatoriProvider to import
  * @param importFromId The id of the existing SatoriProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SatoriProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "satori", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs satori} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SatoriProviderConfig
  */
  public constructor(scope: Construct, id: string, config: SatoriProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'satori',
      terraformGeneratorMetadata: {
        providerName: 'satori',
        providerVersion: '0.2.8'
      },
      terraformProviderSource: 'SatoriCyber/satori'
    });
    this._jwtFolderPath = config.jwtFolderPath;
    this._reuseJwt = config.reuseJwt;
    this._satoriAccount = config.satoriAccount;
    this._serviceAccount = config.serviceAccount;
    this._serviceAccountKey = config.serviceAccountKey;
    this._url = config.url;
    this._verifyTls = config.verifyTls;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // jwt_folder_path - computed: false, optional: true, required: false
  private _jwtFolderPath?: string; 
  public get jwtFolderPath() {
    return this._jwtFolderPath;
  }
  public set jwtFolderPath(value: string | undefined) {
    this._jwtFolderPath = value;
  }
  public resetJwtFolderPath() {
    this._jwtFolderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtFolderPathInput() {
    return this._jwtFolderPath;
  }

  // reuse_jwt - computed: false, optional: true, required: false
  private _reuseJwt?: boolean | cdktf.IResolvable; 
  public get reuseJwt() {
    return this._reuseJwt;
  }
  public set reuseJwt(value: boolean | cdktf.IResolvable | undefined) {
    this._reuseJwt = value;
  }
  public resetReuseJwt() {
    this._reuseJwt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseJwtInput() {
    return this._reuseJwt;
  }

  // satori_account - computed: false, optional: false, required: true
  private _satoriAccount?: string; 
  public get satoriAccount() {
    return this._satoriAccount;
  }
  public set satoriAccount(value: string | undefined) {
    this._satoriAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get satoriAccountInput() {
    return this._satoriAccount;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public set serviceAccount(value: string | undefined) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // service_account_key - computed: false, optional: true, required: false
  private _serviceAccountKey?: string; 
  public get serviceAccountKey() {
    return this._serviceAccountKey;
  }
  public set serviceAccountKey(value: string | undefined) {
    this._serviceAccountKey = value;
  }
  public resetServiceAccountKey() {
    this._serviceAccountKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountKeyInput() {
    return this._serviceAccountKey;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // verify_tls - computed: false, optional: true, required: false
  private _verifyTls?: boolean | cdktf.IResolvable; 
  public get verifyTls() {
    return this._verifyTls;
  }
  public set verifyTls(value: boolean | cdktf.IResolvable | undefined) {
    this._verifyTls = value;
  }
  public resetVerifyTls() {
    this._verifyTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyTlsInput() {
    return this._verifyTls;
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
      jwt_folder_path: cdktf.stringToTerraform(this._jwtFolderPath),
      reuse_jwt: cdktf.booleanToTerraform(this._reuseJwt),
      satori_account: cdktf.stringToTerraform(this._satoriAccount),
      service_account: cdktf.stringToTerraform(this._serviceAccount),
      service_account_key: cdktf.stringToTerraform(this._serviceAccountKey),
      url: cdktf.stringToTerraform(this._url),
      verify_tls: cdktf.booleanToTerraform(this._verifyTls),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      jwt_folder_path: {
        value: cdktf.stringToHclTerraform(this._jwtFolderPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reuse_jwt: {
        value: cdktf.booleanToHclTerraform(this._reuseJwt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      satori_account: {
        value: cdktf.stringToHclTerraform(this._satoriAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account: {
        value: cdktf.stringToHclTerraform(this._serviceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_key: {
        value: cdktf.stringToHclTerraform(this._serviceAccountKey),
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
      verify_tls: {
        value: cdktf.booleanToHclTerraform(this._verifyTls),
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
