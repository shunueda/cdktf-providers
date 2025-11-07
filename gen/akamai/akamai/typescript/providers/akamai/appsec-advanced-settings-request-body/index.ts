// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_request_body
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsecAdvancedSettingsRequestBodyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of the security configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_request_body#config_id AppsecAdvancedSettingsRequestBody#config_id}
  */
  readonly configId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_request_body#id AppsecAdvancedSettingsRequestBody#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Request body inspection size limit in KB allowed values are 'default', 8, 16, 32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_request_body#request_body_inspection_limit AppsecAdvancedSettingsRequestBody#request_body_inspection_limit}
  */
  readonly requestBodyInspectionLimit: string;
  /**
  * Indicates if the Request body inspection size should be overridden at policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_request_body#request_body_inspection_limit_override AppsecAdvancedSettingsRequestBody#request_body_inspection_limit_override}
  */
  readonly requestBodyInspectionLimitOverride?: boolean | cdktf.IResolvable;
  /**
  * Unique identifier of the security policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_request_body#security_policy_id AppsecAdvancedSettingsRequestBody#security_policy_id}
  */
  readonly securityPolicyId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_request_body akamai_appsec_advanced_settings_request_body}
*/
export class AppsecAdvancedSettingsRequestBody extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_appsec_advanced_settings_request_body";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsecAdvancedSettingsRequestBody resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsecAdvancedSettingsRequestBody to import
  * @param importFromId The id of the existing AppsecAdvancedSettingsRequestBody that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_request_body#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsecAdvancedSettingsRequestBody to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_appsec_advanced_settings_request_body", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_request_body akamai_appsec_advanced_settings_request_body} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsecAdvancedSettingsRequestBodyConfig
  */
  public constructor(scope: Construct, id: string, config: AppsecAdvancedSettingsRequestBodyConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_appsec_advanced_settings_request_body',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configId = config.configId;
    this._id = config.id;
    this._requestBodyInspectionLimit = config.requestBodyInspectionLimit;
    this._requestBodyInspectionLimitOverride = config.requestBodyInspectionLimitOverride;
    this._securityPolicyId = config.securityPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: false, optional: false, required: true
  private _configId?: number; 
  public get configId() {
    return this.getNumberAttribute('config_id');
  }
  public set configId(value: number) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
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

  // request_body_inspection_limit - computed: false, optional: false, required: true
  private _requestBodyInspectionLimit?: string; 
  public get requestBodyInspectionLimit() {
    return this.getStringAttribute('request_body_inspection_limit');
  }
  public set requestBodyInspectionLimit(value: string) {
    this._requestBodyInspectionLimit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyInspectionLimitInput() {
    return this._requestBodyInspectionLimit;
  }

  // request_body_inspection_limit_override - computed: false, optional: true, required: false
  private _requestBodyInspectionLimitOverride?: boolean | cdktf.IResolvable; 
  public get requestBodyInspectionLimitOverride() {
    return this.getBooleanAttribute('request_body_inspection_limit_override');
  }
  public set requestBodyInspectionLimitOverride(value: boolean | cdktf.IResolvable) {
    this._requestBodyInspectionLimitOverride = value;
  }
  public resetRequestBodyInspectionLimitOverride() {
    this._requestBodyInspectionLimitOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyInspectionLimitOverrideInput() {
    return this._requestBodyInspectionLimitOverride;
  }

  // security_policy_id - computed: false, optional: true, required: false
  private _securityPolicyId?: string; 
  public get securityPolicyId() {
    return this.getStringAttribute('security_policy_id');
  }
  public set securityPolicyId(value: string) {
    this._securityPolicyId = value;
  }
  public resetSecurityPolicyId() {
    this._securityPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyIdInput() {
    return this._securityPolicyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_id: cdktf.numberToTerraform(this._configId),
      id: cdktf.stringToTerraform(this._id),
      request_body_inspection_limit: cdktf.stringToTerraform(this._requestBodyInspectionLimit),
      request_body_inspection_limit_override: cdktf.booleanToTerraform(this._requestBodyInspectionLimitOverride),
      security_policy_id: cdktf.stringToTerraform(this._securityPolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_id: {
        value: cdktf.numberToHclTerraform(this._configId),
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
      request_body_inspection_limit: {
        value: cdktf.stringToHclTerraform(this._requestBodyInspectionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_body_inspection_limit_override: {
        value: cdktf.booleanToHclTerraform(this._requestBodyInspectionLimitOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_policy_id: {
        value: cdktf.stringToHclTerraform(this._securityPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
