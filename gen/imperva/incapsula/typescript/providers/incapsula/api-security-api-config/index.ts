// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_api_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiSecurityApiConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The API specification document content. The supported format is OAS2 or OAS3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_api_config#api_specification ApiSecurityApiConfig#api_specification}
  */
  readonly apiSpecification: string;
  /**
  * Override the spec basePath / server base path with this value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_api_config#base_path ApiSecurityApiConfig#base_path}
  */
  readonly basePath?: string;
  /**
  * A description that will help recognize the API in the dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_api_config#description ApiSecurityApiConfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_api_config#id ApiSecurityApiConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The action taken when an invalid method Violation occurs. Possible values: ALERT_ONLY, BLOCK_REQUEST, BLOCK_USER, BLOCK_IP, IGNORE, DEFAULT. Assigning DEFAULT will inherit the action from parent object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_api_config#invalid_method_violation_action ApiSecurityApiConfig#invalid_method_violation_action}
  */
  readonly invalidMethodViolationAction?: string;
  /**
  * The violation action taken when invalid request parameter name was sent. Possible values: ALERT_ONLY, BLOCK_REQUEST, BLOCK_USER, BLOCK_IP, IGNORE, DEFAULT. Assigning DEFAULT will inherit the action from parent object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_api_config#invalid_param_name_violation_action ApiSecurityApiConfig#invalid_param_name_violation_action}
  */
  readonly invalidParamNameViolationAction?: string;
  /**
  * The action taken when an invalid parameter value Violation occurs. Possible values: ALERT_ONLY, BLOCK_REQUEST, BLOCK_USER, BLOCK_IP, IGNORE, DEFAULT. Assigning DEFAULT will inherit the action from parent object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_api_config#invalid_param_value_violation_action ApiSecurityApiConfig#invalid_param_value_violation_action}
  */
  readonly invalidParamValueViolationAction?: string;
  /**
  * The violation action taken when invalid URL was used. Possible values: ALERT_ONLY, BLOCK_REQUEST, BLOCK_USER, BLOCK_IP, IGNORE, DEFAULT. Assigning DEFAULT will inherit the action from parent object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_api_config#invalid_url_violation_action ApiSecurityApiConfig#invalid_url_violation_action}
  */
  readonly invalidUrlViolationAction?: string;
  /**
  * The action taken when a missing parameter Violation occurs. Possible values: ALERT_ONLY, BLOCK_REQUEST, BLOCK_USER, BLOCK_IP, IGNORE, DEFAULT. Assigning DEFAULT will inherit the action from parent object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_api_config#missing_param_violation_action ApiSecurityApiConfig#missing_param_violation_action}
  */
  readonly missingParamViolationAction?: string;
  /**
  * Numeric identifier of the site to operate on. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_api_config#site_id ApiSecurityApiConfig#site_id}
  */
  readonly siteId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_api_config incapsula_api_security_api_config}
*/
export class ApiSecurityApiConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_api_security_api_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiSecurityApiConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiSecurityApiConfig to import
  * @param importFromId The id of the existing ApiSecurityApiConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_api_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiSecurityApiConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_api_security_api_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_api_config incapsula_api_security_api_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiSecurityApiConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ApiSecurityApiConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_api_security_api_config',
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
    this._apiSpecification = config.apiSpecification;
    this._basePath = config.basePath;
    this._description = config.description;
    this._id = config.id;
    this._invalidMethodViolationAction = config.invalidMethodViolationAction;
    this._invalidParamNameViolationAction = config.invalidParamNameViolationAction;
    this._invalidParamValueViolationAction = config.invalidParamValueViolationAction;
    this._invalidUrlViolationAction = config.invalidUrlViolationAction;
    this._missingParamViolationAction = config.missingParamViolationAction;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_specification - computed: false, optional: false, required: true
  private _apiSpecification?: string; 
  public get apiSpecification() {
    return this.getStringAttribute('api_specification');
  }
  public set apiSpecification(value: string) {
    this._apiSpecification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSpecificationInput() {
    return this._apiSpecification;
  }

  // base_path - computed: true, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
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
      api_specification: cdktf.stringToTerraform(this._apiSpecification),
      base_path: cdktf.stringToTerraform(this._basePath),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      invalid_method_violation_action: cdktf.stringToTerraform(this._invalidMethodViolationAction),
      invalid_param_name_violation_action: cdktf.stringToTerraform(this._invalidParamNameViolationAction),
      invalid_param_value_violation_action: cdktf.stringToTerraform(this._invalidParamValueViolationAction),
      invalid_url_violation_action: cdktf.stringToTerraform(this._invalidUrlViolationAction),
      missing_param_violation_action: cdktf.stringToTerraform(this._missingParamViolationAction),
      site_id: cdktf.numberToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_specification: {
        value: cdktf.stringToHclTerraform(this._apiSpecification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_path: {
        value: cdktf.stringToHclTerraform(this._basePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      missing_param_violation_action: {
        value: cdktf.stringToHclTerraform(this._missingParamViolationAction),
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
