// https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SysdigProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs#extra_headers SysdigProvider#extra_headers}
  */
  readonly extraHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs#ibm_monitor_api_key SysdigProvider#ibm_monitor_api_key}
  */
  readonly ibmMonitorApiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs#ibm_monitor_iam_url SysdigProvider#ibm_monitor_iam_url}
  */
  readonly ibmMonitorIamUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs#ibm_monitor_instance_id SysdigProvider#ibm_monitor_instance_id}
  */
  readonly ibmMonitorInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs#ibm_secure_api_key SysdigProvider#ibm_secure_api_key}
  */
  readonly ibmSecureApiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs#ibm_secure_iam_url SysdigProvider#ibm_secure_iam_url}
  */
  readonly ibmSecureIamUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs#ibm_secure_instance_id SysdigProvider#ibm_secure_instance_id}
  */
  readonly ibmSecureInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs#sysdig_monitor_api_token SysdigProvider#sysdig_monitor_api_token}
  */
  readonly sysdigMonitorApiToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs#sysdig_monitor_insecure_tls SysdigProvider#sysdig_monitor_insecure_tls}
  */
  readonly sysdigMonitorInsecureTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs#sysdig_monitor_team_id SysdigProvider#sysdig_monitor_team_id}
  */
  readonly sysdigMonitorTeamId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs#sysdig_monitor_team_name SysdigProvider#sysdig_monitor_team_name}
  */
  readonly sysdigMonitorTeamName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs#sysdig_monitor_url SysdigProvider#sysdig_monitor_url}
  */
  readonly sysdigMonitorUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs#sysdig_secure_api_token SysdigProvider#sysdig_secure_api_token}
  */
  readonly sysdigSecureApiToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs#sysdig_secure_insecure_tls SysdigProvider#sysdig_secure_insecure_tls}
  */
  readonly sysdigSecureInsecureTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs#sysdig_secure_skip_policyv2msg SysdigProvider#sysdig_secure_skip_policyv2msg}
  */
  readonly sysdigSecureSkipPolicyv2Msg?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs#sysdig_secure_team_id SysdigProvider#sysdig_secure_team_id}
  */
  readonly sysdigSecureTeamId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs#sysdig_secure_team_name SysdigProvider#sysdig_secure_team_name}
  */
  readonly sysdigSecureTeamName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs#sysdig_secure_url SysdigProvider#sysdig_secure_url}
  */
  readonly sysdigSecureUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs#alias SysdigProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs sysdig}
*/
export class SysdigProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sysdig";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SysdigProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SysdigProvider to import
  * @param importFromId The id of the existing SysdigProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SysdigProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sysdig", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs sysdig} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SysdigProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SysdigProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sysdig',
      terraformGeneratorMetadata: {
        providerName: 'sysdig',
        providerVersion: '3.1.0',
        providerVersionConstraint: '3.1.0'
      },
      terraformProviderSource: 'sysdiglabs/sysdig'
    });
    this._extraHeaders = config.extraHeaders;
    this._ibmMonitorApiKey = config.ibmMonitorApiKey;
    this._ibmMonitorIamUrl = config.ibmMonitorIamUrl;
    this._ibmMonitorInstanceId = config.ibmMonitorInstanceId;
    this._ibmSecureApiKey = config.ibmSecureApiKey;
    this._ibmSecureIamUrl = config.ibmSecureIamUrl;
    this._ibmSecureInstanceId = config.ibmSecureInstanceId;
    this._sysdigMonitorApiToken = config.sysdigMonitorApiToken;
    this._sysdigMonitorInsecureTls = config.sysdigMonitorInsecureTls;
    this._sysdigMonitorTeamId = config.sysdigMonitorTeamId;
    this._sysdigMonitorTeamName = config.sysdigMonitorTeamName;
    this._sysdigMonitorUrl = config.sysdigMonitorUrl;
    this._sysdigSecureApiToken = config.sysdigSecureApiToken;
    this._sysdigSecureInsecureTls = config.sysdigSecureInsecureTls;
    this._sysdigSecureSkipPolicyv2Msg = config.sysdigSecureSkipPolicyv2Msg;
    this._sysdigSecureTeamId = config.sysdigSecureTeamId;
    this._sysdigSecureTeamName = config.sysdigSecureTeamName;
    this._sysdigSecureUrl = config.sysdigSecureUrl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extra_headers - computed: false, optional: true, required: false
  private _extraHeaders?: { [key: string]: string }; 
  public get extraHeaders() {
    return this._extraHeaders;
  }
  public set extraHeaders(value: { [key: string]: string } | undefined) {
    this._extraHeaders = value;
  }
  public resetExtraHeaders() {
    this._extraHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraHeadersInput() {
    return this._extraHeaders;
  }

  // ibm_monitor_api_key - computed: false, optional: true, required: false
  private _ibmMonitorApiKey?: string; 
  public get ibmMonitorApiKey() {
    return this._ibmMonitorApiKey;
  }
  public set ibmMonitorApiKey(value: string | undefined) {
    this._ibmMonitorApiKey = value;
  }
  public resetIbmMonitorApiKey() {
    this._ibmMonitorApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibmMonitorApiKeyInput() {
    return this._ibmMonitorApiKey;
  }

  // ibm_monitor_iam_url - computed: false, optional: true, required: false
  private _ibmMonitorIamUrl?: string; 
  public get ibmMonitorIamUrl() {
    return this._ibmMonitorIamUrl;
  }
  public set ibmMonitorIamUrl(value: string | undefined) {
    this._ibmMonitorIamUrl = value;
  }
  public resetIbmMonitorIamUrl() {
    this._ibmMonitorIamUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibmMonitorIamUrlInput() {
    return this._ibmMonitorIamUrl;
  }

  // ibm_monitor_instance_id - computed: false, optional: true, required: false
  private _ibmMonitorInstanceId?: string; 
  public get ibmMonitorInstanceId() {
    return this._ibmMonitorInstanceId;
  }
  public set ibmMonitorInstanceId(value: string | undefined) {
    this._ibmMonitorInstanceId = value;
  }
  public resetIbmMonitorInstanceId() {
    this._ibmMonitorInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibmMonitorInstanceIdInput() {
    return this._ibmMonitorInstanceId;
  }

  // ibm_secure_api_key - computed: false, optional: true, required: false
  private _ibmSecureApiKey?: string; 
  public get ibmSecureApiKey() {
    return this._ibmSecureApiKey;
  }
  public set ibmSecureApiKey(value: string | undefined) {
    this._ibmSecureApiKey = value;
  }
  public resetIbmSecureApiKey() {
    this._ibmSecureApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibmSecureApiKeyInput() {
    return this._ibmSecureApiKey;
  }

  // ibm_secure_iam_url - computed: false, optional: true, required: false
  private _ibmSecureIamUrl?: string; 
  public get ibmSecureIamUrl() {
    return this._ibmSecureIamUrl;
  }
  public set ibmSecureIamUrl(value: string | undefined) {
    this._ibmSecureIamUrl = value;
  }
  public resetIbmSecureIamUrl() {
    this._ibmSecureIamUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibmSecureIamUrlInput() {
    return this._ibmSecureIamUrl;
  }

  // ibm_secure_instance_id - computed: false, optional: true, required: false
  private _ibmSecureInstanceId?: string; 
  public get ibmSecureInstanceId() {
    return this._ibmSecureInstanceId;
  }
  public set ibmSecureInstanceId(value: string | undefined) {
    this._ibmSecureInstanceId = value;
  }
  public resetIbmSecureInstanceId() {
    this._ibmSecureInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibmSecureInstanceIdInput() {
    return this._ibmSecureInstanceId;
  }

  // sysdig_monitor_api_token - computed: false, optional: true, required: false
  private _sysdigMonitorApiToken?: string; 
  public get sysdigMonitorApiToken() {
    return this._sysdigMonitorApiToken;
  }
  public set sysdigMonitorApiToken(value: string | undefined) {
    this._sysdigMonitorApiToken = value;
  }
  public resetSysdigMonitorApiToken() {
    this._sysdigMonitorApiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysdigMonitorApiTokenInput() {
    return this._sysdigMonitorApiToken;
  }

  // sysdig_monitor_insecure_tls - computed: false, optional: true, required: false
  private _sysdigMonitorInsecureTls?: boolean | cdktf.IResolvable; 
  public get sysdigMonitorInsecureTls() {
    return this._sysdigMonitorInsecureTls;
  }
  public set sysdigMonitorInsecureTls(value: boolean | cdktf.IResolvable | undefined) {
    this._sysdigMonitorInsecureTls = value;
  }
  public resetSysdigMonitorInsecureTls() {
    this._sysdigMonitorInsecureTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysdigMonitorInsecureTlsInput() {
    return this._sysdigMonitorInsecureTls;
  }

  // sysdig_monitor_team_id - computed: false, optional: true, required: false
  private _sysdigMonitorTeamId?: number; 
  public get sysdigMonitorTeamId() {
    return this._sysdigMonitorTeamId;
  }
  public set sysdigMonitorTeamId(value: number | undefined) {
    this._sysdigMonitorTeamId = value;
  }
  public resetSysdigMonitorTeamId() {
    this._sysdigMonitorTeamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysdigMonitorTeamIdInput() {
    return this._sysdigMonitorTeamId;
  }

  // sysdig_monitor_team_name - computed: false, optional: true, required: false
  private _sysdigMonitorTeamName?: string; 
  public get sysdigMonitorTeamName() {
    return this._sysdigMonitorTeamName;
  }
  public set sysdigMonitorTeamName(value: string | undefined) {
    this._sysdigMonitorTeamName = value;
  }
  public resetSysdigMonitorTeamName() {
    this._sysdigMonitorTeamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysdigMonitorTeamNameInput() {
    return this._sysdigMonitorTeamName;
  }

  // sysdig_monitor_url - computed: false, optional: true, required: false
  private _sysdigMonitorUrl?: string; 
  public get sysdigMonitorUrl() {
    return this._sysdigMonitorUrl;
  }
  public set sysdigMonitorUrl(value: string | undefined) {
    this._sysdigMonitorUrl = value;
  }
  public resetSysdigMonitorUrl() {
    this._sysdigMonitorUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysdigMonitorUrlInput() {
    return this._sysdigMonitorUrl;
  }

  // sysdig_secure_api_token - computed: false, optional: true, required: false
  private _sysdigSecureApiToken?: string; 
  public get sysdigSecureApiToken() {
    return this._sysdigSecureApiToken;
  }
  public set sysdigSecureApiToken(value: string | undefined) {
    this._sysdigSecureApiToken = value;
  }
  public resetSysdigSecureApiToken() {
    this._sysdigSecureApiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysdigSecureApiTokenInput() {
    return this._sysdigSecureApiToken;
  }

  // sysdig_secure_insecure_tls - computed: false, optional: true, required: false
  private _sysdigSecureInsecureTls?: boolean | cdktf.IResolvable; 
  public get sysdigSecureInsecureTls() {
    return this._sysdigSecureInsecureTls;
  }
  public set sysdigSecureInsecureTls(value: boolean | cdktf.IResolvable | undefined) {
    this._sysdigSecureInsecureTls = value;
  }
  public resetSysdigSecureInsecureTls() {
    this._sysdigSecureInsecureTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysdigSecureInsecureTlsInput() {
    return this._sysdigSecureInsecureTls;
  }

  // sysdig_secure_skip_policyv2msg - computed: false, optional: true, required: false
  private _sysdigSecureSkipPolicyv2Msg?: boolean | cdktf.IResolvable; 
  public get sysdigSecureSkipPolicyv2Msg() {
    return this._sysdigSecureSkipPolicyv2Msg;
  }
  public set sysdigSecureSkipPolicyv2Msg(value: boolean | cdktf.IResolvable | undefined) {
    this._sysdigSecureSkipPolicyv2Msg = value;
  }
  public resetSysdigSecureSkipPolicyv2Msg() {
    this._sysdigSecureSkipPolicyv2Msg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysdigSecureSkipPolicyv2MsgInput() {
    return this._sysdigSecureSkipPolicyv2Msg;
  }

  // sysdig_secure_team_id - computed: false, optional: true, required: false
  private _sysdigSecureTeamId?: number; 
  public get sysdigSecureTeamId() {
    return this._sysdigSecureTeamId;
  }
  public set sysdigSecureTeamId(value: number | undefined) {
    this._sysdigSecureTeamId = value;
  }
  public resetSysdigSecureTeamId() {
    this._sysdigSecureTeamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysdigSecureTeamIdInput() {
    return this._sysdigSecureTeamId;
  }

  // sysdig_secure_team_name - computed: false, optional: true, required: false
  private _sysdigSecureTeamName?: string; 
  public get sysdigSecureTeamName() {
    return this._sysdigSecureTeamName;
  }
  public set sysdigSecureTeamName(value: string | undefined) {
    this._sysdigSecureTeamName = value;
  }
  public resetSysdigSecureTeamName() {
    this._sysdigSecureTeamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysdigSecureTeamNameInput() {
    return this._sysdigSecureTeamName;
  }

  // sysdig_secure_url - computed: false, optional: true, required: false
  private _sysdigSecureUrl?: string; 
  public get sysdigSecureUrl() {
    return this._sysdigSecureUrl;
  }
  public set sysdigSecureUrl(value: string | undefined) {
    this._sysdigSecureUrl = value;
  }
  public resetSysdigSecureUrl() {
    this._sysdigSecureUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysdigSecureUrlInput() {
    return this._sysdigSecureUrl;
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
      extra_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._extraHeaders),
      ibm_monitor_api_key: cdktf.stringToTerraform(this._ibmMonitorApiKey),
      ibm_monitor_iam_url: cdktf.stringToTerraform(this._ibmMonitorIamUrl),
      ibm_monitor_instance_id: cdktf.stringToTerraform(this._ibmMonitorInstanceId),
      ibm_secure_api_key: cdktf.stringToTerraform(this._ibmSecureApiKey),
      ibm_secure_iam_url: cdktf.stringToTerraform(this._ibmSecureIamUrl),
      ibm_secure_instance_id: cdktf.stringToTerraform(this._ibmSecureInstanceId),
      sysdig_monitor_api_token: cdktf.stringToTerraform(this._sysdigMonitorApiToken),
      sysdig_monitor_insecure_tls: cdktf.booleanToTerraform(this._sysdigMonitorInsecureTls),
      sysdig_monitor_team_id: cdktf.numberToTerraform(this._sysdigMonitorTeamId),
      sysdig_monitor_team_name: cdktf.stringToTerraform(this._sysdigMonitorTeamName),
      sysdig_monitor_url: cdktf.stringToTerraform(this._sysdigMonitorUrl),
      sysdig_secure_api_token: cdktf.stringToTerraform(this._sysdigSecureApiToken),
      sysdig_secure_insecure_tls: cdktf.booleanToTerraform(this._sysdigSecureInsecureTls),
      sysdig_secure_skip_policyv2msg: cdktf.booleanToTerraform(this._sysdigSecureSkipPolicyv2Msg),
      sysdig_secure_team_id: cdktf.numberToTerraform(this._sysdigSecureTeamId),
      sysdig_secure_team_name: cdktf.stringToTerraform(this._sysdigSecureTeamName),
      sysdig_secure_url: cdktf.stringToTerraform(this._sysdigSecureUrl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extra_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extraHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ibm_monitor_api_key: {
        value: cdktf.stringToHclTerraform(this._ibmMonitorApiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ibm_monitor_iam_url: {
        value: cdktf.stringToHclTerraform(this._ibmMonitorIamUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ibm_monitor_instance_id: {
        value: cdktf.stringToHclTerraform(this._ibmMonitorInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ibm_secure_api_key: {
        value: cdktf.stringToHclTerraform(this._ibmSecureApiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ibm_secure_iam_url: {
        value: cdktf.stringToHclTerraform(this._ibmSecureIamUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ibm_secure_instance_id: {
        value: cdktf.stringToHclTerraform(this._ibmSecureInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sysdig_monitor_api_token: {
        value: cdktf.stringToHclTerraform(this._sysdigMonitorApiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sysdig_monitor_insecure_tls: {
        value: cdktf.booleanToHclTerraform(this._sysdigMonitorInsecureTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sysdig_monitor_team_id: {
        value: cdktf.numberToHclTerraform(this._sysdigMonitorTeamId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sysdig_monitor_team_name: {
        value: cdktf.stringToHclTerraform(this._sysdigMonitorTeamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sysdig_monitor_url: {
        value: cdktf.stringToHclTerraform(this._sysdigMonitorUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sysdig_secure_api_token: {
        value: cdktf.stringToHclTerraform(this._sysdigSecureApiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sysdig_secure_insecure_tls: {
        value: cdktf.booleanToHclTerraform(this._sysdigSecureInsecureTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sysdig_secure_skip_policyv2msg: {
        value: cdktf.booleanToHclTerraform(this._sysdigSecureSkipPolicyv2Msg),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sysdig_secure_team_id: {
        value: cdktf.numberToHclTerraform(this._sysdigSecureTeamId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sysdig_secure_team_name: {
        value: cdktf.stringToHclTerraform(this._sysdigSecureTeamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sysdig_secure_url: {
        value: cdktf.stringToHclTerraform(this._sysdigSecureUrl),
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
