// https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppviewxProviderConfig {
  /**
  * AppViewX Client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs#appviewx_client_id AppviewxProvider#appviewx_client_id}
  */
  readonly appviewxClientId?: string;
  /**
  * AppViewX Client Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs#appviewx_client_secret AppviewxProvider#appviewx_client_secret}
  */
  readonly appviewxClientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs#appviewx_environment_ip AppviewxProvider#appviewx_environment_ip}
  */
  readonly appviewxEnvironmentIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs#appviewx_environment_is_https AppviewxProvider#appviewx_environment_is_https}
  */
  readonly appviewxEnvironmentIsHttps: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs#appviewx_environment_port AppviewxProvider#appviewx_environment_port}
  */
  readonly appviewxEnvironmentPort: string;
  /**
  * AppViewX Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs#appviewx_password AppviewxProvider#appviewx_password}
  */
  readonly appviewxPassword?: string;
  /**
  * AppViewX Username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs#appviewx_username AppviewxProvider#appviewx_username}
  */
  readonly appviewxUsername?: string;
  /**
  * Default certificate download password (provider level) - takes priority over resource level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs#certificate_download_password AppviewxProvider#certificate_download_password}
  */
  readonly certificateDownloadPassword?: string;
  /**
  * Default key download password (provider level) - takes priority over resource level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs#key_download_password AppviewxProvider#key_download_password}
  */
  readonly keyDownloadPassword?: string;
  /**
  * Log level (DEBUG, INFO)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs#log_level AppviewxProvider#log_level}
  */
  readonly logLevel?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs#alias AppviewxProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs appviewx}
*/
export class AppviewxProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "appviewx";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppviewxProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppviewxProvider to import
  * @param importFromId The id of the existing AppviewxProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppviewxProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "appviewx", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs appviewx} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppviewxProviderConfig
  */
  public constructor(scope: Construct, id: string, config: AppviewxProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'appviewx',
      terraformGeneratorMetadata: {
        providerName: 'appviewx',
        providerVersion: '1.0.8',
        providerVersionConstraint: '1.0.8'
      },
      terraformProviderSource: 'AppViewX/appviewx'
    });
    this._appviewxClientId = config.appviewxClientId;
    this._appviewxClientSecret = config.appviewxClientSecret;
    this._appviewxEnvironmentIp = config.appviewxEnvironmentIp;
    this._appviewxEnvironmentIsHttps = config.appviewxEnvironmentIsHttps;
    this._appviewxEnvironmentPort = config.appviewxEnvironmentPort;
    this._appviewxPassword = config.appviewxPassword;
    this._appviewxUsername = config.appviewxUsername;
    this._certificateDownloadPassword = config.certificateDownloadPassword;
    this._keyDownloadPassword = config.keyDownloadPassword;
    this._logLevel = config.logLevel;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // appviewx_client_id - computed: false, optional: true, required: false
  private _appviewxClientId?: string; 
  public get appviewxClientId() {
    return this._appviewxClientId;
  }
  public set appviewxClientId(value: string | undefined) {
    this._appviewxClientId = value;
  }
  public resetAppviewxClientId() {
    this._appviewxClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appviewxClientIdInput() {
    return this._appviewxClientId;
  }

  // appviewx_client_secret - computed: false, optional: true, required: false
  private _appviewxClientSecret?: string; 
  public get appviewxClientSecret() {
    return this._appviewxClientSecret;
  }
  public set appviewxClientSecret(value: string | undefined) {
    this._appviewxClientSecret = value;
  }
  public resetAppviewxClientSecret() {
    this._appviewxClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appviewxClientSecretInput() {
    return this._appviewxClientSecret;
  }

  // appviewx_environment_ip - computed: false, optional: false, required: true
  private _appviewxEnvironmentIp?: string; 
  public get appviewxEnvironmentIp() {
    return this._appviewxEnvironmentIp;
  }
  public set appviewxEnvironmentIp(value: string | undefined) {
    this._appviewxEnvironmentIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appviewxEnvironmentIpInput() {
    return this._appviewxEnvironmentIp;
  }

  // appviewx_environment_is_https - computed: false, optional: false, required: true
  private _appviewxEnvironmentIsHttps?: boolean | cdktf.IResolvable; 
  public get appviewxEnvironmentIsHttps() {
    return this._appviewxEnvironmentIsHttps;
  }
  public set appviewxEnvironmentIsHttps(value: boolean | cdktf.IResolvable | undefined) {
    this._appviewxEnvironmentIsHttps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appviewxEnvironmentIsHttpsInput() {
    return this._appviewxEnvironmentIsHttps;
  }

  // appviewx_environment_port - computed: false, optional: false, required: true
  private _appviewxEnvironmentPort?: string; 
  public get appviewxEnvironmentPort() {
    return this._appviewxEnvironmentPort;
  }
  public set appviewxEnvironmentPort(value: string | undefined) {
    this._appviewxEnvironmentPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appviewxEnvironmentPortInput() {
    return this._appviewxEnvironmentPort;
  }

  // appviewx_password - computed: false, optional: true, required: false
  private _appviewxPassword?: string; 
  public get appviewxPassword() {
    return this._appviewxPassword;
  }
  public set appviewxPassword(value: string | undefined) {
    this._appviewxPassword = value;
  }
  public resetAppviewxPassword() {
    this._appviewxPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appviewxPasswordInput() {
    return this._appviewxPassword;
  }

  // appviewx_username - computed: false, optional: true, required: false
  private _appviewxUsername?: string; 
  public get appviewxUsername() {
    return this._appviewxUsername;
  }
  public set appviewxUsername(value: string | undefined) {
    this._appviewxUsername = value;
  }
  public resetAppviewxUsername() {
    this._appviewxUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appviewxUsernameInput() {
    return this._appviewxUsername;
  }

  // certificate_download_password - computed: false, optional: true, required: false
  private _certificateDownloadPassword?: string; 
  public get certificateDownloadPassword() {
    return this._certificateDownloadPassword;
  }
  public set certificateDownloadPassword(value: string | undefined) {
    this._certificateDownloadPassword = value;
  }
  public resetCertificateDownloadPassword() {
    this._certificateDownloadPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateDownloadPasswordInput() {
    return this._certificateDownloadPassword;
  }

  // key_download_password - computed: false, optional: true, required: false
  private _keyDownloadPassword?: string; 
  public get keyDownloadPassword() {
    return this._keyDownloadPassword;
  }
  public set keyDownloadPassword(value: string | undefined) {
    this._keyDownloadPassword = value;
  }
  public resetKeyDownloadPassword() {
    this._keyDownloadPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDownloadPasswordInput() {
    return this._keyDownloadPassword;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this._logLevel;
  }
  public set logLevel(value: string | undefined) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
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
      appviewx_client_id: cdktf.stringToTerraform(this._appviewxClientId),
      appviewx_client_secret: cdktf.stringToTerraform(this._appviewxClientSecret),
      appviewx_environment_ip: cdktf.stringToTerraform(this._appviewxEnvironmentIp),
      appviewx_environment_is_https: cdktf.booleanToTerraform(this._appviewxEnvironmentIsHttps),
      appviewx_environment_port: cdktf.stringToTerraform(this._appviewxEnvironmentPort),
      appviewx_password: cdktf.stringToTerraform(this._appviewxPassword),
      appviewx_username: cdktf.stringToTerraform(this._appviewxUsername),
      certificate_download_password: cdktf.stringToTerraform(this._certificateDownloadPassword),
      key_download_password: cdktf.stringToTerraform(this._keyDownloadPassword),
      log_level: cdktf.stringToTerraform(this._logLevel),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      appviewx_client_id: {
        value: cdktf.stringToHclTerraform(this._appviewxClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      appviewx_client_secret: {
        value: cdktf.stringToHclTerraform(this._appviewxClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      appviewx_environment_ip: {
        value: cdktf.stringToHclTerraform(this._appviewxEnvironmentIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      appviewx_environment_is_https: {
        value: cdktf.booleanToHclTerraform(this._appviewxEnvironmentIsHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      appviewx_environment_port: {
        value: cdktf.stringToHclTerraform(this._appviewxEnvironmentPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      appviewx_password: {
        value: cdktf.stringToHclTerraform(this._appviewxPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      appviewx_username: {
        value: cdktf.stringToHclTerraform(this._appviewxUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_download_password: {
        value: cdktf.stringToHclTerraform(this._certificateDownloadPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_download_password: {
        value: cdktf.stringToHclTerraform(this._keyDownloadPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
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
