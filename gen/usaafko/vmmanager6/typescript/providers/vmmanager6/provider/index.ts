// https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Vmmanager6ProviderConfig {
  /**
  * API Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs#pm_api_token Vmmanager6Provider#pm_api_token}
  */
  readonly pmApiToken?: string;
  /**
  * https://host.fqdn/vm/v3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs#pm_api_url Vmmanager6Provider#pm_api_url}
  */
  readonly pmApiUrl: string;
  /**
  * By default this provider will exit if an unknown attribute is found. This is to prevent the accidential destruction of VMs or Data when something in the VMmanager 6 API has changed/updated and is not confirmed to work with this provider. Set this to true at your own risk. It may allow you to proceed in cases when the provider refuses to work, but be aware of the danger in doing so.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs#pm_dangerously_ignore_unknown_attributes Vmmanager6Provider#pm_dangerously_ignore_unknown_attributes}
  */
  readonly pmDangerouslyIgnoreUnknownAttributes?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the verbose debug output from VMmanager 6 api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs#pm_debug Vmmanager6Provider#pm_debug}
  */
  readonly pmDebug?: boolean | cdktf.IResolvable;
  /**
  * Email e.g. admin@example.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs#pm_email Vmmanager6Provider#pm_email}
  */
  readonly pmEmail?: string;
  /**
  * Enable provider logging to get VMmanager API logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs#pm_log_enable Vmmanager6Provider#pm_log_enable}
  */
  readonly pmLogEnable?: boolean | cdktf.IResolvable;
  /**
  * Write logs to this specific file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs#pm_log_file Vmmanager6Provider#pm_log_file}
  */
  readonly pmLogFile?: string;
  /**
  * Configure the logging level to display; trace, debug, info, warn, etc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs#pm_log_levels Vmmanager6Provider#pm_log_levels}
  */
  readonly pmLogLevels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs#pm_parallel Vmmanager6Provider#pm_parallel}
  */
  readonly pmParallel?: number;
  /**
  * Password to authenticate into vmmanager6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs#pm_password Vmmanager6Provider#pm_password}
  */
  readonly pmPassword?: string;
  /**
  * How much second to wait for operations for both provider and api-client, default is 300s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs#pm_timeout Vmmanager6Provider#pm_timeout}
  */
  readonly pmTimeout?: number;
  /**
  * By default, every TLS connection is verified to be secure. This option allows terraform to proceed and operate on servers considered insecure. For example if you're connecting to a remote host and you do not have the CA cert that issued the VMmanager 6 api url's certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs#pm_tls_insecure Vmmanager6Provider#pm_tls_insecure}
  */
  readonly pmTlsInsecure?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs#alias Vmmanager6Provider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs vmmanager6}
*/
export class Vmmanager6Provider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vmmanager6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vmmanager6Provider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vmmanager6Provider to import
  * @param importFromId The id of the existing Vmmanager6Provider that should be imported. Refer to the {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vmmanager6Provider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vmmanager6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/usaafko/vmmanager6/0.0.34/docs vmmanager6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Vmmanager6ProviderConfig
  */
  public constructor(scope: Construct, id: string, config: Vmmanager6ProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'vmmanager6',
      terraformGeneratorMetadata: {
        providerName: 'vmmanager6',
        providerVersion: '0.0.34',
        providerVersionConstraint: '0.0.34'
      },
      terraformProviderSource: 'usaafko/vmmanager6'
    });
    this._pmApiToken = config.pmApiToken;
    this._pmApiUrl = config.pmApiUrl;
    this._pmDangerouslyIgnoreUnknownAttributes = config.pmDangerouslyIgnoreUnknownAttributes;
    this._pmDebug = config.pmDebug;
    this._pmEmail = config.pmEmail;
    this._pmLogEnable = config.pmLogEnable;
    this._pmLogFile = config.pmLogFile;
    this._pmLogLevels = config.pmLogLevels;
    this._pmParallel = config.pmParallel;
    this._pmPassword = config.pmPassword;
    this._pmTimeout = config.pmTimeout;
    this._pmTlsInsecure = config.pmTlsInsecure;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // pm_api_token - computed: false, optional: true, required: false
  private _pmApiToken?: string; 
  public get pmApiToken() {
    return this._pmApiToken;
  }
  public set pmApiToken(value: string | undefined) {
    this._pmApiToken = value;
  }
  public resetPmApiToken() {
    this._pmApiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmApiTokenInput() {
    return this._pmApiToken;
  }

  // pm_api_url - computed: false, optional: false, required: true
  private _pmApiUrl?: string; 
  public get pmApiUrl() {
    return this._pmApiUrl;
  }
  public set pmApiUrl(value: string | undefined) {
    this._pmApiUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pmApiUrlInput() {
    return this._pmApiUrl;
  }

  // pm_dangerously_ignore_unknown_attributes - computed: false, optional: true, required: false
  private _pmDangerouslyIgnoreUnknownAttributes?: boolean | cdktf.IResolvable; 
  public get pmDangerouslyIgnoreUnknownAttributes() {
    return this._pmDangerouslyIgnoreUnknownAttributes;
  }
  public set pmDangerouslyIgnoreUnknownAttributes(value: boolean | cdktf.IResolvable | undefined) {
    this._pmDangerouslyIgnoreUnknownAttributes = value;
  }
  public resetPmDangerouslyIgnoreUnknownAttributes() {
    this._pmDangerouslyIgnoreUnknownAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmDangerouslyIgnoreUnknownAttributesInput() {
    return this._pmDangerouslyIgnoreUnknownAttributes;
  }

  // pm_debug - computed: false, optional: true, required: false
  private _pmDebug?: boolean | cdktf.IResolvable; 
  public get pmDebug() {
    return this._pmDebug;
  }
  public set pmDebug(value: boolean | cdktf.IResolvable | undefined) {
    this._pmDebug = value;
  }
  public resetPmDebug() {
    this._pmDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmDebugInput() {
    return this._pmDebug;
  }

  // pm_email - computed: false, optional: true, required: false
  private _pmEmail?: string; 
  public get pmEmail() {
    return this._pmEmail;
  }
  public set pmEmail(value: string | undefined) {
    this._pmEmail = value;
  }
  public resetPmEmail() {
    this._pmEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmEmailInput() {
    return this._pmEmail;
  }

  // pm_log_enable - computed: false, optional: true, required: false
  private _pmLogEnable?: boolean | cdktf.IResolvable; 
  public get pmLogEnable() {
    return this._pmLogEnable;
  }
  public set pmLogEnable(value: boolean | cdktf.IResolvable | undefined) {
    this._pmLogEnable = value;
  }
  public resetPmLogEnable() {
    this._pmLogEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmLogEnableInput() {
    return this._pmLogEnable;
  }

  // pm_log_file - computed: false, optional: true, required: false
  private _pmLogFile?: string; 
  public get pmLogFile() {
    return this._pmLogFile;
  }
  public set pmLogFile(value: string | undefined) {
    this._pmLogFile = value;
  }
  public resetPmLogFile() {
    this._pmLogFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmLogFileInput() {
    return this._pmLogFile;
  }

  // pm_log_levels - computed: false, optional: true, required: false
  private _pmLogLevels?: { [key: string]: string }; 
  public get pmLogLevels() {
    return this._pmLogLevels;
  }
  public set pmLogLevels(value: { [key: string]: string } | undefined) {
    this._pmLogLevels = value;
  }
  public resetPmLogLevels() {
    this._pmLogLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmLogLevelsInput() {
    return this._pmLogLevels;
  }

  // pm_parallel - computed: false, optional: true, required: false
  private _pmParallel?: number; 
  public get pmParallel() {
    return this._pmParallel;
  }
  public set pmParallel(value: number | undefined) {
    this._pmParallel = value;
  }
  public resetPmParallel() {
    this._pmParallel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmParallelInput() {
    return this._pmParallel;
  }

  // pm_password - computed: false, optional: true, required: false
  private _pmPassword?: string; 
  public get pmPassword() {
    return this._pmPassword;
  }
  public set pmPassword(value: string | undefined) {
    this._pmPassword = value;
  }
  public resetPmPassword() {
    this._pmPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmPasswordInput() {
    return this._pmPassword;
  }

  // pm_timeout - computed: false, optional: true, required: false
  private _pmTimeout?: number; 
  public get pmTimeout() {
    return this._pmTimeout;
  }
  public set pmTimeout(value: number | undefined) {
    this._pmTimeout = value;
  }
  public resetPmTimeout() {
    this._pmTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmTimeoutInput() {
    return this._pmTimeout;
  }

  // pm_tls_insecure - computed: false, optional: true, required: false
  private _pmTlsInsecure?: boolean | cdktf.IResolvable; 
  public get pmTlsInsecure() {
    return this._pmTlsInsecure;
  }
  public set pmTlsInsecure(value: boolean | cdktf.IResolvable | undefined) {
    this._pmTlsInsecure = value;
  }
  public resetPmTlsInsecure() {
    this._pmTlsInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmTlsInsecureInput() {
    return this._pmTlsInsecure;
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
      pm_api_token: cdktf.stringToTerraform(this._pmApiToken),
      pm_api_url: cdktf.stringToTerraform(this._pmApiUrl),
      pm_dangerously_ignore_unknown_attributes: cdktf.booleanToTerraform(this._pmDangerouslyIgnoreUnknownAttributes),
      pm_debug: cdktf.booleanToTerraform(this._pmDebug),
      pm_email: cdktf.stringToTerraform(this._pmEmail),
      pm_log_enable: cdktf.booleanToTerraform(this._pmLogEnable),
      pm_log_file: cdktf.stringToTerraform(this._pmLogFile),
      pm_log_levels: cdktf.hashMapper(cdktf.stringToTerraform)(this._pmLogLevels),
      pm_parallel: cdktf.numberToTerraform(this._pmParallel),
      pm_password: cdktf.stringToTerraform(this._pmPassword),
      pm_timeout: cdktf.numberToTerraform(this._pmTimeout),
      pm_tls_insecure: cdktf.booleanToTerraform(this._pmTlsInsecure),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      pm_api_token: {
        value: cdktf.stringToHclTerraform(this._pmApiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pm_api_url: {
        value: cdktf.stringToHclTerraform(this._pmApiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pm_dangerously_ignore_unknown_attributes: {
        value: cdktf.booleanToHclTerraform(this._pmDangerouslyIgnoreUnknownAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pm_debug: {
        value: cdktf.booleanToHclTerraform(this._pmDebug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pm_email: {
        value: cdktf.stringToHclTerraform(this._pmEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pm_log_enable: {
        value: cdktf.booleanToHclTerraform(this._pmLogEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pm_log_file: {
        value: cdktf.stringToHclTerraform(this._pmLogFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pm_log_levels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._pmLogLevels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      pm_parallel: {
        value: cdktf.numberToHclTerraform(this._pmParallel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pm_password: {
        value: cdktf.stringToHclTerraform(this._pmPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pm_timeout: {
        value: cdktf.numberToHclTerraform(this._pmTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pm_tls_insecure: {
        value: cdktf.booleanToHclTerraform(this._pmTlsInsecure),
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
