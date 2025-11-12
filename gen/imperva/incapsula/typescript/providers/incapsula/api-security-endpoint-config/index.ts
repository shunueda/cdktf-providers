// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_endpoint_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiSecurityEndpointConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The site ID which API security is configured on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_endpoint_config#api_id ApiSecurityEndpointConfig#api_id}
  */
  readonly apiId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_endpoint_config#id ApiSecurityEndpointConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The action taken when an invalid parameter name Violation occurs. Possible values: ALERT_ONLY, BLOCK_REQUEST, BLOCK_USER, BLOCK_IP, IGNORE, DEFAULT. Assigning DEFAULT will inherit the action from parent object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_endpoint_config#invalid_param_name_violation_action ApiSecurityEndpointConfig#invalid_param_name_violation_action}
  */
  readonly invalidParamNameViolationAction?: string;
  /**
  * The action taken when an invalid parameter value Violation occurs. Possible values: ALERT_ONLY, BLOCK_REQUEST, BLOCK_USER, BLOCK_IP, IGNORE, DEFAULT. Assigning DEFAULT will inherit the action from parent object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_endpoint_config#invalid_param_value_violation_action ApiSecurityEndpointConfig#invalid_param_value_violation_action}
  */
  readonly invalidParamValueViolationAction?: string;
  /**
  * HTTP method that describes a specific endpoint. Possible values: POST, GET, PUT, PATCH, DELETE, HEAD, OPTIONS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_endpoint_config#method ApiSecurityEndpointConfig#method}
  */
  readonly method: string;
  /**
  * The action taken when an invalid URL Violation occurs. Possible values: ALERT_ONLY, BLOCK_REQUEST, BLOCK_USER, BLOCK_IP, IGNORE, DEFAULT. Assigning DEFAULT will inherit the action from parent object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_endpoint_config#missing_param_violation_action ApiSecurityEndpointConfig#missing_param_violation_action}
  */
  readonly missingParamViolationAction?: string;
  /**
  * An URL path of specific endpoint 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_endpoint_config#path ApiSecurityEndpointConfig#path}
  */
  readonly path: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_endpoint_config incapsula_api_security_endpoint_config}
*/
export class ApiSecurityEndpointConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_api_security_endpoint_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiSecurityEndpointConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiSecurityEndpointConfig to import
  * @param importFromId The id of the existing ApiSecurityEndpointConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_endpoint_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiSecurityEndpointConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_api_security_endpoint_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/api_security_endpoint_config incapsula_api_security_endpoint_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiSecurityEndpointConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ApiSecurityEndpointConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_api_security_endpoint_config',
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
    this._apiId = config.apiId;
    this._id = config.id;
    this._invalidParamNameViolationAction = config.invalidParamNameViolationAction;
    this._invalidParamValueViolationAction = config.invalidParamValueViolationAction;
    this._method = config.method;
    this._missingParamViolationAction = config.missingParamViolationAction;
    this._path = config.path;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId?: number; 
  public get apiId() {
    return this.getNumberAttribute('api_id');
  }
  public set apiId(value: number) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
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

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktf.numberToTerraform(this._apiId),
      id: cdktf.stringToTerraform(this._id),
      invalid_param_name_violation_action: cdktf.stringToTerraform(this._invalidParamNameViolationAction),
      invalid_param_value_violation_action: cdktf.stringToTerraform(this._invalidParamValueViolationAction),
      method: cdktf.stringToTerraform(this._method),
      missing_param_violation_action: cdktf.stringToTerraform(this._missingParamViolationAction),
      path: cdktf.stringToTerraform(this._path),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_id: {
        value: cdktf.numberToHclTerraform(this._apiId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      method: {
        value: cdktf.stringToHclTerraform(this._method),
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
