// https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MimirProviderConfig {
  /**
  * When set, add a delay (time duration) to read the alertmanager config after a change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs#alertmanager_read_delay_after_change MimirProvider#alertmanager_read_delay_after_change}
  */
  readonly alertmanagerReadDelayAfterChange?: string;
  /**
  * Max retries to read the alertmanager config after a change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs#alertmanager_read_retry_after_change MimirProvider#alertmanager_read_retry_after_change}
  */
  readonly alertmanagerReadRetryAfterChange?: number;
  /**
  * mimir alertmanager base url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs#alertmanager_uri MimirProvider#alertmanager_uri}
  */
  readonly alertmanagerUri?: string;
  /**
  * Client ca (filepath or inline) for TLS client authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs#ca MimirProvider#ca}
  */
  readonly ca?: string;
  /**
  * Client cert (filepath or inline) for TLS client authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs#cert MimirProvider#cert}
  */
  readonly cert?: string;
  /**
  * Enable debug mode to trace requests executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs#debug MimirProvider#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * mimir distributor base url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs#distributor_uri MimirProvider#distributor_uri}
  */
  readonly distributorUri?: string;
  /**
  * Enable the formatting of PromQL expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs#format_promql_expr MimirProvider#format_promql_expr}
  */
  readonly formatPromqlExpr?: boolean | cdktf.IResolvable;
  /**
  * A map of header names and values to set on all outbound requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs#headers MimirProvider#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * When using https, this disables TLS verification of the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs#insecure MimirProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Client key (filepath or inline) for TLS client authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs#key MimirProvider#key}
  */
  readonly key?: string;
  /**
  * The default organization id to operate on within mimir. For resources that have an org_id attribute, the resource-level attribute has priority. May alternatively be set via the MIMIR_ORG_ID environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs#org_id MimirProvider#org_id}
  */
  readonly orgId: string;
  /**
  * Overwrite the current alertmanager config on create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs#overwrite_alertmanager_config MimirProvider#overwrite_alertmanager_config}
  */
  readonly overwriteAlertmanagerConfig?: boolean | cdktf.IResolvable;
  /**
  * Overwrite the current rule group (alerting/recording) config on create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs#overwrite_rule_group_config MimirProvider#overwrite_rule_group_config}
  */
  readonly overwriteRuleGroupConfig?: boolean | cdktf.IResolvable;
  /**
  * When set, will use this password for BASIC auth to the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs#password MimirProvider#password}
  */
  readonly password?: string;
  /**
  * URL to the proxy to be used for all API requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs#proxy_url MimirProvider#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * When set, add a delay (time duration) to read the rule group after a change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs#rule_group_read_delay_after_change MimirProvider#rule_group_read_delay_after_change}
  */
  readonly ruleGroupReadDelayAfterChange?: string;
  /**
  * Max retries to read the rule group after a change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs#rule_group_read_retry_after_change MimirProvider#rule_group_read_retry_after_change}
  */
  readonly ruleGroupReadRetryAfterChange?: number;
  /**
  * mimir ruler base url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs#ruler_uri MimirProvider#ruler_uri}
  */
  readonly rulerUri?: string;
  /**
  * When set, will cause requests taking longer than this time (in seconds) to be aborted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs#timeout MimirProvider#timeout}
  */
  readonly timeout?: number;
  /**
  * When set, will use this token for Bearer auth to the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs#token MimirProvider#token}
  */
  readonly token?: string;
  /**
  * mimir base url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs#uri MimirProvider#uri}
  */
  readonly uri?: string;
  /**
  * When set, will use this username for BASIC auth to the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs#username MimirProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs#alias MimirProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs mimir}
*/
export class MimirProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mimir";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MimirProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MimirProvider to import
  * @param importFromId The id of the existing MimirProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MimirProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mimir", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fgouteroux/mimir/1.0.9/docs mimir} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MimirProviderConfig
  */
  public constructor(scope: Construct, id: string, config: MimirProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'mimir',
      terraformGeneratorMetadata: {
        providerName: 'mimir',
        providerVersion: '1.0.9'
      },
      terraformProviderSource: 'fgouteroux/mimir'
    });
    this._alertmanagerReadDelayAfterChange = config.alertmanagerReadDelayAfterChange;
    this._alertmanagerReadRetryAfterChange = config.alertmanagerReadRetryAfterChange;
    this._alertmanagerUri = config.alertmanagerUri;
    this._ca = config.ca;
    this._cert = config.cert;
    this._debug = config.debug;
    this._distributorUri = config.distributorUri;
    this._formatPromqlExpr = config.formatPromqlExpr;
    this._headers = config.headers;
    this._insecure = config.insecure;
    this._key = config.key;
    this._orgId = config.orgId;
    this._overwriteAlertmanagerConfig = config.overwriteAlertmanagerConfig;
    this._overwriteRuleGroupConfig = config.overwriteRuleGroupConfig;
    this._password = config.password;
    this._proxyUrl = config.proxyUrl;
    this._ruleGroupReadDelayAfterChange = config.ruleGroupReadDelayAfterChange;
    this._ruleGroupReadRetryAfterChange = config.ruleGroupReadRetryAfterChange;
    this._rulerUri = config.rulerUri;
    this._timeout = config.timeout;
    this._token = config.token;
    this._uri = config.uri;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alertmanager_read_delay_after_change - computed: false, optional: true, required: false
  private _alertmanagerReadDelayAfterChange?: string; 
  public get alertmanagerReadDelayAfterChange() {
    return this._alertmanagerReadDelayAfterChange;
  }
  public set alertmanagerReadDelayAfterChange(value: string | undefined) {
    this._alertmanagerReadDelayAfterChange = value;
  }
  public resetAlertmanagerReadDelayAfterChange() {
    this._alertmanagerReadDelayAfterChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertmanagerReadDelayAfterChangeInput() {
    return this._alertmanagerReadDelayAfterChange;
  }

  // alertmanager_read_retry_after_change - computed: false, optional: true, required: false
  private _alertmanagerReadRetryAfterChange?: number; 
  public get alertmanagerReadRetryAfterChange() {
    return this._alertmanagerReadRetryAfterChange;
  }
  public set alertmanagerReadRetryAfterChange(value: number | undefined) {
    this._alertmanagerReadRetryAfterChange = value;
  }
  public resetAlertmanagerReadRetryAfterChange() {
    this._alertmanagerReadRetryAfterChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertmanagerReadRetryAfterChangeInput() {
    return this._alertmanagerReadRetryAfterChange;
  }

  // alertmanager_uri - computed: false, optional: true, required: false
  private _alertmanagerUri?: string; 
  public get alertmanagerUri() {
    return this._alertmanagerUri;
  }
  public set alertmanagerUri(value: string | undefined) {
    this._alertmanagerUri = value;
  }
  public resetAlertmanagerUri() {
    this._alertmanagerUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertmanagerUriInput() {
    return this._alertmanagerUri;
  }

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this._ca;
  }
  public set ca(value: string | undefined) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this._cert;
  }
  public set cert(value: string | undefined) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this._debug;
  }
  public set debug(value: boolean | cdktf.IResolvable | undefined) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // distributor_uri - computed: false, optional: true, required: false
  private _distributorUri?: string; 
  public get distributorUri() {
    return this._distributorUri;
  }
  public set distributorUri(value: string | undefined) {
    this._distributorUri = value;
  }
  public resetDistributorUri() {
    this._distributorUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributorUriInput() {
    return this._distributorUri;
  }

  // format_promql_expr - computed: false, optional: true, required: false
  private _formatPromqlExpr?: boolean | cdktf.IResolvable; 
  public get formatPromqlExpr() {
    return this._formatPromqlExpr;
  }
  public set formatPromqlExpr(value: boolean | cdktf.IResolvable | undefined) {
    this._formatPromqlExpr = value;
  }
  public resetFormatPromqlExpr() {
    this._formatPromqlExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatPromqlExprInput() {
    return this._formatPromqlExpr;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this._headers;
  }
  public set headers(value: { [key: string]: string } | undefined) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this._key;
  }
  public set key(value: string | undefined) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this._orgId;
  }
  public set orgId(value: string | undefined) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // overwrite_alertmanager_config - computed: false, optional: true, required: false
  private _overwriteAlertmanagerConfig?: boolean | cdktf.IResolvable; 
  public get overwriteAlertmanagerConfig() {
    return this._overwriteAlertmanagerConfig;
  }
  public set overwriteAlertmanagerConfig(value: boolean | cdktf.IResolvable | undefined) {
    this._overwriteAlertmanagerConfig = value;
  }
  public resetOverwriteAlertmanagerConfig() {
    this._overwriteAlertmanagerConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteAlertmanagerConfigInput() {
    return this._overwriteAlertmanagerConfig;
  }

  // overwrite_rule_group_config - computed: false, optional: true, required: false
  private _overwriteRuleGroupConfig?: boolean | cdktf.IResolvable; 
  public get overwriteRuleGroupConfig() {
    return this._overwriteRuleGroupConfig;
  }
  public set overwriteRuleGroupConfig(value: boolean | cdktf.IResolvable | undefined) {
    this._overwriteRuleGroupConfig = value;
  }
  public resetOverwriteRuleGroupConfig() {
    this._overwriteRuleGroupConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteRuleGroupConfigInput() {
    return this._overwriteRuleGroupConfig;
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

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this._proxyUrl;
  }
  public set proxyUrl(value: string | undefined) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // rule_group_read_delay_after_change - computed: false, optional: true, required: false
  private _ruleGroupReadDelayAfterChange?: string; 
  public get ruleGroupReadDelayAfterChange() {
    return this._ruleGroupReadDelayAfterChange;
  }
  public set ruleGroupReadDelayAfterChange(value: string | undefined) {
    this._ruleGroupReadDelayAfterChange = value;
  }
  public resetRuleGroupReadDelayAfterChange() {
    this._ruleGroupReadDelayAfterChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupReadDelayAfterChangeInput() {
    return this._ruleGroupReadDelayAfterChange;
  }

  // rule_group_read_retry_after_change - computed: false, optional: true, required: false
  private _ruleGroupReadRetryAfterChange?: number; 
  public get ruleGroupReadRetryAfterChange() {
    return this._ruleGroupReadRetryAfterChange;
  }
  public set ruleGroupReadRetryAfterChange(value: number | undefined) {
    this._ruleGroupReadRetryAfterChange = value;
  }
  public resetRuleGroupReadRetryAfterChange() {
    this._ruleGroupReadRetryAfterChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupReadRetryAfterChangeInput() {
    return this._ruleGroupReadRetryAfterChange;
  }

  // ruler_uri - computed: false, optional: true, required: false
  private _rulerUri?: string; 
  public get rulerUri() {
    return this._rulerUri;
  }
  public set rulerUri(value: string | undefined) {
    this._rulerUri = value;
  }
  public resetRulerUri() {
    this._rulerUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulerUriInput() {
    return this._rulerUri;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this._timeout;
  }
  public set timeout(value: number | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this._uri;
  }
  public set uri(value: string | undefined) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
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
      alertmanager_read_delay_after_change: cdktf.stringToTerraform(this._alertmanagerReadDelayAfterChange),
      alertmanager_read_retry_after_change: cdktf.numberToTerraform(this._alertmanagerReadRetryAfterChange),
      alertmanager_uri: cdktf.stringToTerraform(this._alertmanagerUri),
      ca: cdktf.stringToTerraform(this._ca),
      cert: cdktf.stringToTerraform(this._cert),
      debug: cdktf.booleanToTerraform(this._debug),
      distributor_uri: cdktf.stringToTerraform(this._distributorUri),
      format_promql_expr: cdktf.booleanToTerraform(this._formatPromqlExpr),
      headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._headers),
      insecure: cdktf.booleanToTerraform(this._insecure),
      key: cdktf.stringToTerraform(this._key),
      org_id: cdktf.stringToTerraform(this._orgId),
      overwrite_alertmanager_config: cdktf.booleanToTerraform(this._overwriteAlertmanagerConfig),
      overwrite_rule_group_config: cdktf.booleanToTerraform(this._overwriteRuleGroupConfig),
      password: cdktf.stringToTerraform(this._password),
      proxy_url: cdktf.stringToTerraform(this._proxyUrl),
      rule_group_read_delay_after_change: cdktf.stringToTerraform(this._ruleGroupReadDelayAfterChange),
      rule_group_read_retry_after_change: cdktf.numberToTerraform(this._ruleGroupReadRetryAfterChange),
      ruler_uri: cdktf.stringToTerraform(this._rulerUri),
      timeout: cdktf.numberToTerraform(this._timeout),
      token: cdktf.stringToTerraform(this._token),
      uri: cdktf.stringToTerraform(this._uri),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alertmanager_read_delay_after_change: {
        value: cdktf.stringToHclTerraform(this._alertmanagerReadDelayAfterChange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alertmanager_read_retry_after_change: {
        value: cdktf.numberToHclTerraform(this._alertmanagerReadRetryAfterChange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alertmanager_uri: {
        value: cdktf.stringToHclTerraform(this._alertmanagerUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca: {
        value: cdktf.stringToHclTerraform(this._ca),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert: {
        value: cdktf.stringToHclTerraform(this._cert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      debug: {
        value: cdktf.booleanToHclTerraform(this._debug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      distributor_uri: {
        value: cdktf.stringToHclTerraform(this._distributorUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format_promql_expr: {
        value: cdktf.booleanToHclTerraform(this._formatPromqlExpr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._headers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overwrite_alertmanager_config: {
        value: cdktf.booleanToHclTerraform(this._overwriteAlertmanagerConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      overwrite_rule_group_config: {
        value: cdktf.booleanToHclTerraform(this._overwriteRuleGroupConfig),
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
      proxy_url: {
        value: cdktf.stringToHclTerraform(this._proxyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_group_read_delay_after_change: {
        value: cdktf.stringToHclTerraform(this._ruleGroupReadDelayAfterChange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_group_read_retry_after_change: {
        value: cdktf.numberToHclTerraform(this._ruleGroupReadRetryAfterChange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ruler_uri: {
        value: cdktf.stringToHclTerraform(this._rulerUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uri: {
        value: cdktf.stringToHclTerraform(this._uri),
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
