// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/security_rule_exception
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityRuleExceptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * A comma separated list of client application types,
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/security_rule_exception#client_app_types SecurityRuleException#client_app_types}
  */
  readonly clientAppTypes?: string;
  /**
  * A comma separated list of client application IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/security_rule_exception#client_apps SecurityRuleException#client_apps}
  */
  readonly clientApps?: string;
  /**
  * A comma separated list of continent codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/security_rule_exception#continents SecurityRuleException#continents}
  */
  readonly continents?: string;
  /**
  * A comma separated list of country codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/security_rule_exception#countries SecurityRuleException#countries}
  */
  readonly countries?: string;
  /**
  * The id (an integer) of the whitelist to be set. This field is optional - in case no id is supplied, a new whitelist will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/security_rule_exception#exception_id_only SecurityRuleException#exception_id_only}
  */
  readonly exceptionIdOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/security_rule_exception#id SecurityRuleException#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A comma separated list of IPs or IP ranges, e.g: 192.168.1.1, 192.168.1.1-192.168.1.100 or 192.168.1.1/24
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/security_rule_exception#ips SecurityRuleException#ips}
  */
  readonly ips?: string;
  /**
  * A comma separated list of encoded parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/security_rule_exception#parameters SecurityRuleException#parameters}
  */
  readonly parameters?: string;
  /**
  * The identifier of the security rule, e.g api.threats.cross_site_scripting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/security_rule_exception#rule_id SecurityRuleException#rule_id}
  */
  readonly ruleId: string;
  /**
  * Numeric identifier of the site to operate on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/security_rule_exception#site_id SecurityRuleException#site_id}
  */
  readonly siteId: number;
  /**
  * A comma separated list of url patterns. One of: contains | equals | prefix | suffix | not_equals | not_contain | not_prefix | not_suffix. The patterns should be in accordance with the matching urls sent by the urls parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/security_rule_exception#url_patterns SecurityRuleException#url_patterns}
  */
  readonly urlPatterns?: string;
  /**
  * A comma separated list of resource paths. For example, /home and /admin/index.html are resource paths, while http://www.example.com/home is not. Each URL should be encoded separately using percent encoding as specified by RFC 3986 (http://tools.ietf.org/html/rfc3986#section-2.1). An empty URL list will remove all URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/security_rule_exception#urls SecurityRuleException#urls}
  */
  readonly urls?: string;
  /**
  * A comma separated list of encoded user agents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/security_rule_exception#user_agents SecurityRuleException#user_agents}
  */
  readonly userAgents?: string;
  /**
  * The id (an integer) of the whitelist to be set. This field is optional - in case no id is supplied, a new whitelist will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/security_rule_exception#whitelist_id SecurityRuleException#whitelist_id}
  */
  readonly whitelistId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/security_rule_exception incapsula_security_rule_exception}
*/
export class SecurityRuleException extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_security_rule_exception";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityRuleException resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityRuleException to import
  * @param importFromId The id of the existing SecurityRuleException that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/security_rule_exception#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityRuleException to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_security_rule_exception", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/security_rule_exception incapsula_security_rule_exception} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityRuleExceptionConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityRuleExceptionConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_security_rule_exception',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1',
        providerVersionConstraint: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientAppTypes = config.clientAppTypes;
    this._clientApps = config.clientApps;
    this._continents = config.continents;
    this._countries = config.countries;
    this._exceptionIdOnly = config.exceptionIdOnly;
    this._id = config.id;
    this._ips = config.ips;
    this._parameters = config.parameters;
    this._ruleId = config.ruleId;
    this._siteId = config.siteId;
    this._urlPatterns = config.urlPatterns;
    this._urls = config.urls;
    this._userAgents = config.userAgents;
    this._whitelistId = config.whitelistId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_app_types - computed: false, optional: true, required: false
  private _clientAppTypes?: string; 
  public get clientAppTypes() {
    return this.getStringAttribute('client_app_types');
  }
  public set clientAppTypes(value: string) {
    this._clientAppTypes = value;
  }
  public resetClientAppTypes() {
    this._clientAppTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAppTypesInput() {
    return this._clientAppTypes;
  }

  // client_apps - computed: false, optional: true, required: false
  private _clientApps?: string; 
  public get clientApps() {
    return this.getStringAttribute('client_apps');
  }
  public set clientApps(value: string) {
    this._clientApps = value;
  }
  public resetClientApps() {
    this._clientApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAppsInput() {
    return this._clientApps;
  }

  // continents - computed: false, optional: true, required: false
  private _continents?: string; 
  public get continents() {
    return this.getStringAttribute('continents');
  }
  public set continents(value: string) {
    this._continents = value;
  }
  public resetContinents() {
    this._continents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continentsInput() {
    return this._continents;
  }

  // countries - computed: false, optional: true, required: false
  private _countries?: string; 
  public get countries() {
    return this.getStringAttribute('countries');
  }
  public set countries(value: string) {
    this._countries = value;
  }
  public resetCountries() {
    this._countries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countriesInput() {
    return this._countries;
  }

  // exception_id_only - computed: false, optional: true, required: false
  private _exceptionIdOnly?: string; 
  public get exceptionIdOnly() {
    return this.getStringAttribute('exception_id_only');
  }
  public set exceptionIdOnly(value: string) {
    this._exceptionIdOnly = value;
  }
  public resetExceptionIdOnly() {
    this._exceptionIdOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionIdOnlyInput() {
    return this._exceptionIdOnly;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ips - computed: false, optional: true, required: false
  private _ips?: string; 
  public get ips() {
    return this.getStringAttribute('ips');
  }
  public set ips(value: string) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: number; 
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }
  public set siteId(value: number) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // url_patterns - computed: false, optional: true, required: false
  private _urlPatterns?: string; 
  public get urlPatterns() {
    return this.getStringAttribute('url_patterns');
  }
  public set urlPatterns(value: string) {
    this._urlPatterns = value;
  }
  public resetUrlPatterns() {
    this._urlPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPatternsInput() {
    return this._urlPatterns;
  }

  // urls - computed: false, optional: true, required: false
  private _urls?: string; 
  public get urls() {
    return this.getStringAttribute('urls');
  }
  public set urls(value: string) {
    this._urls = value;
  }
  public resetUrls() {
    this._urls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls;
  }

  // user_agents - computed: false, optional: true, required: false
  private _userAgents?: string; 
  public get userAgents() {
    return this.getStringAttribute('user_agents');
  }
  public set userAgents(value: string) {
    this._userAgents = value;
  }
  public resetUserAgents() {
    this._userAgents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentsInput() {
    return this._userAgents;
  }

  // whitelist_id - computed: false, optional: true, required: false
  private _whitelistId?: string; 
  public get whitelistId() {
    return this.getStringAttribute('whitelist_id');
  }
  public set whitelistId(value: string) {
    this._whitelistId = value;
  }
  public resetWhitelistId() {
    this._whitelistId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistIdInput() {
    return this._whitelistId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_app_types: cdktf.stringToTerraform(this._clientAppTypes),
      client_apps: cdktf.stringToTerraform(this._clientApps),
      continents: cdktf.stringToTerraform(this._continents),
      countries: cdktf.stringToTerraform(this._countries),
      exception_id_only: cdktf.stringToTerraform(this._exceptionIdOnly),
      id: cdktf.stringToTerraform(this._id),
      ips: cdktf.stringToTerraform(this._ips),
      parameters: cdktf.stringToTerraform(this._parameters),
      rule_id: cdktf.stringToTerraform(this._ruleId),
      site_id: cdktf.numberToTerraform(this._siteId),
      url_patterns: cdktf.stringToTerraform(this._urlPatterns),
      urls: cdktf.stringToTerraform(this._urls),
      user_agents: cdktf.stringToTerraform(this._userAgents),
      whitelist_id: cdktf.stringToTerraform(this._whitelistId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_app_types: {
        value: cdktf.stringToHclTerraform(this._clientAppTypes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_apps: {
        value: cdktf.stringToHclTerraform(this._clientApps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      continents: {
        value: cdktf.stringToHclTerraform(this._continents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      countries: {
        value: cdktf.stringToHclTerraform(this._countries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exception_id_only: {
        value: cdktf.stringToHclTerraform(this._exceptionIdOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips: {
        value: cdktf.stringToHclTerraform(this._ips),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.stringToHclTerraform(this._parameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_id: {
        value: cdktf.stringToHclTerraform(this._ruleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.numberToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url_patterns: {
        value: cdktf.stringToHclTerraform(this._urlPatterns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      urls: {
        value: cdktf.stringToHclTerraform(this._urls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_agents: {
        value: cdktf.stringToHclTerraform(this._userAgents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      whitelist_id: {
        value: cdktf.stringToHclTerraform(this._whitelistId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
