// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_site_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiSecuritySiteConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_site_config#id ApiSecuritySiteConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The action taken when an invalid method Violation occurs. Possible values: ALERT_ONLY, BLOCK_REQUEST, BLOCK_USER, BLOCK_IP, IGNORE, DEFAULT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_site_config#invalid_method_violation_action ApiSecuritySiteConfig#invalid_method_violation_action}
  */
  readonly invalidMethodViolationAction?: string;
  /**
  * The action taken when an invalid parameter value Violation occurs. Possible values: ALERT_ONLY, BLOCK_REQUEST, BLOCK_USER, BLOCK_IP, IGNORE, DEFAULT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_site_config#invalid_param_name_violation_action ApiSecuritySiteConfig#invalid_param_name_violation_action}
  */
  readonly invalidParamNameViolationAction?: string;
  /**
  * The action taken when an invalid parameter value Violation occurs. Possible values: ALERT_ONLY, BLOCK_REQUEST, BLOCK_USER, BLOCK_IP, IGNORE, DEFAULT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_site_config#invalid_param_value_violation_action ApiSecuritySiteConfig#invalid_param_value_violation_action}
  */
  readonly invalidParamValueViolationAction?: string;
  /**
  * The action taken when an invalid URL Violation occurs. Possible values: ALERT_ONLY, BLOCK_REQUEST, BLOCK_USER, BLOCK_IP, IGNORE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_site_config#invalid_url_violation_action ApiSecuritySiteConfig#invalid_url_violation_action}
  */
  readonly invalidUrlViolationAction?: string;
  /**
  * Apply positive security model for all traffic on the site. Applying the positive security model for all traffic on the site may lead to undesired request blocking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_site_config#is_api_only_site ApiSecuritySiteConfig#is_api_only_site}
  */
  readonly isApiOnlySite?: boolean | cdktf.IResolvable;
  /**
  * Parameter shows whether automatic API discovery is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_site_config#is_automatic_discovery_api_integration_enabled ApiSecuritySiteConfig#is_automatic_discovery_api_integration_enabled}
  */
  readonly isAutomaticDiscoveryApiIntegrationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The action taken when a missing parameter Violation occurs. Possible values: ALERT_ONLY, BLOCK_REQUEST, BLOCK_USER, BLOCK_IP, IGNORE, DEFAULT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_site_config#missing_param_violation_action ApiSecuritySiteConfig#missing_param_violation_action}
  */
  readonly missingParamViolationAction?: string;
  /**
  * Action to be taken for traffic on the site that does not target the uploaded APIs. Possible values: ALERT_ONLY, BLOCK_REQUEST, BLOCK_USER, BLOCK_IP, IGNORE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_site_config#non_api_request_violation_action ApiSecuritySiteConfig#non_api_request_violation_action}
  */
  readonly nonApiRequestViolationAction?: string;
  /**
  * The Site ID of the the site the API security is configured on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_site_config#site_id ApiSecuritySiteConfig#site_id}
  */
  readonly siteId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_site_config incapsula_api_security_site_config}
*/
export class ApiSecuritySiteConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_api_security_site_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiSecuritySiteConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiSecuritySiteConfig to import
  * @param importFromId The id of the existing ApiSecuritySiteConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_site_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiSecuritySiteConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_api_security_site_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_site_config incapsula_api_security_site_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiSecuritySiteConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ApiSecuritySiteConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_api_security_site_config',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._invalidMethodViolationAction = config.invalidMethodViolationAction;
    this._invalidParamNameViolationAction = config.invalidParamNameViolationAction;
    this._invalidParamValueViolationAction = config.invalidParamValueViolationAction;
    this._invalidUrlViolationAction = config.invalidUrlViolationAction;
    this._isApiOnlySite = config.isApiOnlySite;
    this._isAutomaticDiscoveryApiIntegrationEnabled = config.isAutomaticDiscoveryApiIntegrationEnabled;
    this._missingParamViolationAction = config.missingParamViolationAction;
    this._nonApiRequestViolationAction = config.nonApiRequestViolationAction;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // invalid_method_violation_action - computed: false, optional: true, required: false
  private _invalidMethodViolationAction?: string; 
  public get invalidMethodViolationAction() {
    return this.getStringAttribute('invalid_method_violation_action');
  }
  public set invalidMethodViolationAction(value: string) {
    this._invalidMethodViolationAction = value;
  }
  public resetInvalidMethodViolationAction() {
    this._invalidMethodViolationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidMethodViolationActionInput() {
    return this._invalidMethodViolationAction;
  }

  // invalid_param_name_violation_action - computed: true, optional: true, required: false
  private _invalidParamNameViolationAction?: string; 
  public get invalidParamNameViolationAction() {
    return this.getStringAttribute('invalid_param_name_violation_action');
  }
  public set invalidParamNameViolationAction(value: string) {
    this._invalidParamNameViolationAction = value;
  }
  public resetInvalidParamNameViolationAction() {
    this._invalidParamNameViolationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidParamNameViolationActionInput() {
    return this._invalidParamNameViolationAction;
  }

  // invalid_param_value_violation_action - computed: false, optional: true, required: false
  private _invalidParamValueViolationAction?: string; 
  public get invalidParamValueViolationAction() {
    return this.getStringAttribute('invalid_param_value_violation_action');
  }
  public set invalidParamValueViolationAction(value: string) {
    this._invalidParamValueViolationAction = value;
  }
  public resetInvalidParamValueViolationAction() {
    this._invalidParamValueViolationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidParamValueViolationActionInput() {
    return this._invalidParamValueViolationAction;
  }

  // invalid_url_violation_action - computed: false, optional: true, required: false
  private _invalidUrlViolationAction?: string; 
  public get invalidUrlViolationAction() {
    return this.getStringAttribute('invalid_url_violation_action');
  }
  public set invalidUrlViolationAction(value: string) {
    this._invalidUrlViolationAction = value;
  }
  public resetInvalidUrlViolationAction() {
    this._invalidUrlViolationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidUrlViolationActionInput() {
    return this._invalidUrlViolationAction;
  }

  // is_api_only_site - computed: false, optional: true, required: false
  private _isApiOnlySite?: boolean | cdktf.IResolvable; 
  public get isApiOnlySite() {
    return this.getBooleanAttribute('is_api_only_site');
  }
  public set isApiOnlySite(value: boolean | cdktf.IResolvable) {
    this._isApiOnlySite = value;
  }
  public resetIsApiOnlySite() {
    this._isApiOnlySite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isApiOnlySiteInput() {
    return this._isApiOnlySite;
  }

  // is_automatic_discovery_api_integration_enabled - computed: false, optional: true, required: false
  private _isAutomaticDiscoveryApiIntegrationEnabled?: boolean | cdktf.IResolvable; 
  public get isAutomaticDiscoveryApiIntegrationEnabled() {
    return this.getBooleanAttribute('is_automatic_discovery_api_integration_enabled');
  }
  public set isAutomaticDiscoveryApiIntegrationEnabled(value: boolean | cdktf.IResolvable) {
    this._isAutomaticDiscoveryApiIntegrationEnabled = value;
  }
  public resetIsAutomaticDiscoveryApiIntegrationEnabled() {
    this._isAutomaticDiscoveryApiIntegrationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutomaticDiscoveryApiIntegrationEnabledInput() {
    return this._isAutomaticDiscoveryApiIntegrationEnabled;
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getNumberAttribute('last_modified');
  }

  // missing_param_violation_action - computed: false, optional: true, required: false
  private _missingParamViolationAction?: string; 
  public get missingParamViolationAction() {
    return this.getStringAttribute('missing_param_violation_action');
  }
  public set missingParamViolationAction(value: string) {
    this._missingParamViolationAction = value;
  }
  public resetMissingParamViolationAction() {
    this._missingParamViolationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missingParamViolationActionInput() {
    return this._missingParamViolationAction;
  }

  // non_api_request_violation_action - computed: false, optional: true, required: false
  private _nonApiRequestViolationAction?: string; 
  public get nonApiRequestViolationAction() {
    return this.getStringAttribute('non_api_request_violation_action');
  }
  public set nonApiRequestViolationAction(value: string) {
    this._nonApiRequestViolationAction = value;
  }
  public resetNonApiRequestViolationAction() {
    this._nonApiRequestViolationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonApiRequestViolationActionInput() {
    return this._nonApiRequestViolationAction;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      invalid_method_violation_action: cdktf.stringToTerraform(this._invalidMethodViolationAction),
      invalid_param_name_violation_action: cdktf.stringToTerraform(this._invalidParamNameViolationAction),
      invalid_param_value_violation_action: cdktf.stringToTerraform(this._invalidParamValueViolationAction),
      invalid_url_violation_action: cdktf.stringToTerraform(this._invalidUrlViolationAction),
      is_api_only_site: cdktf.booleanToTerraform(this._isApiOnlySite),
      is_automatic_discovery_api_integration_enabled: cdktf.booleanToTerraform(this._isAutomaticDiscoveryApiIntegrationEnabled),
      missing_param_violation_action: cdktf.stringToTerraform(this._missingParamViolationAction),
      non_api_request_violation_action: cdktf.stringToTerraform(this._nonApiRequestViolationAction),
      site_id: cdktf.numberToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invalid_method_violation_action: {
        value: cdktf.stringToHclTerraform(this._invalidMethodViolationAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invalid_param_name_violation_action: {
        value: cdktf.stringToHclTerraform(this._invalidParamNameViolationAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invalid_param_value_violation_action: {
        value: cdktf.stringToHclTerraform(this._invalidParamValueViolationAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invalid_url_violation_action: {
        value: cdktf.stringToHclTerraform(this._invalidUrlViolationAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_api_only_site: {
        value: cdktf.booleanToHclTerraform(this._isApiOnlySite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_automatic_discovery_api_integration_enabled: {
        value: cdktf.booleanToHclTerraform(this._isAutomaticDiscoveryApiIntegrationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      missing_param_violation_action: {
        value: cdktf.stringToHclTerraform(this._missingParamViolationAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_api_request_violation_action: {
        value: cdktf.stringToHclTerraform(this._nonApiRequestViolationAction),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
