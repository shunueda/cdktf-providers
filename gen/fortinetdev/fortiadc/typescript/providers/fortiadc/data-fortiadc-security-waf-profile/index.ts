// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/security_waf_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiadcSecurityWafProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/security_waf_profile#id DataFortiadcSecurityWafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/security_waf_profile#mkey DataFortiadcSecurityWafProfile#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/security_waf_profile#vdom DataFortiadcSecurityWafProfile#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/security_waf_profile fortiadc_security_waf_profile}
*/
export class DataFortiadcSecurityWafProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_security_waf_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiadcSecurityWafProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiadcSecurityWafProfile to import
  * @param importFromId The id of the existing DataFortiadcSecurityWafProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/security_waf_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiadcSecurityWafProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_security_waf_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/security_waf_profile fortiadc_security_waf_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiadcSecurityWafProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiadcSecurityWafProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_security_waf_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
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
    this._mkey = config.mkey;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_protection_name - computed: true, optional: false, required: false
  public get advancedProtectionName() {
    return this.getStringAttribute('advanced_protection_name');
  }

  // api_gateway_policy_name - computed: true, optional: false, required: false
  public get apiGatewayPolicyName() {
    return this.getStringAttribute('api_gateway_policy_name');
  }

  // biometrics_based_detection - computed: true, optional: false, required: false
  public get biometricsBasedDetection() {
    return this.getStringAttribute('biometrics_based_detection');
  }

  // bot_detection_name - computed: true, optional: false, required: false
  public get botDetectionName() {
    return this.getStringAttribute('bot_detection_name');
  }

  // brute_force_login_name - computed: true, optional: false, required: false
  public get bruteForceLoginName() {
    return this.getStringAttribute('brute_force_login_name');
  }

  // cookie_security - computed: true, optional: false, required: false
  public get cookieSecurity() {
    return this.getStringAttribute('cookie_security');
  }

  // cors_protection - computed: true, optional: false, required: false
  public get corsProtection() {
    return this.getStringAttribute('cors_protection');
  }

  // credential_stuffing_defense - computed: true, optional: false, required: false
  public get credentialStuffingDefense() {
    return this.getStringAttribute('credential_stuffing_defense');
  }

  // csrf_protection - computed: true, optional: false, required: false
  public get csrfProtection() {
    return this.getStringAttribute('csrf_protection');
  }

  // data_leak_prevention_name - computed: true, optional: false, required: false
  public get dataLeakPreventionName() {
    return this.getStringAttribute('data_leak_prevention_name');
  }

  // desc - computed: true, optional: false, required: false
  public get desc() {
    return this.getStringAttribute('desc');
  }

  // exception_name - computed: true, optional: false, required: false
  public get exceptionName() {
    return this.getStringAttribute('exception_name');
  }

  // heuristic_sql_xss_injection_detection - computed: true, optional: false, required: false
  public get heuristicSqlXssInjectionDetection() {
    return this.getStringAttribute('heuristic_sql_xss_injection_detection');
  }

  // http_header_security_name - computed: true, optional: false, required: false
  public get httpHeaderSecurityName() {
    return this.getStringAttribute('http_header_security_name');
  }

  // http_protocol_constraint - computed: true, optional: false, required: false
  public get httpProtocolConstraint() {
    return this.getStringAttribute('http_protocol_constraint');
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

  // input_validation_policy_name - computed: true, optional: false, required: false
  public get inputValidationPolicyName() {
    return this.getStringAttribute('input_validation_policy_name');
  }

  // json_validation_name - computed: true, optional: false, required: false
  public get jsonValidationName() {
    return this.getStringAttribute('json_validation_name');
  }

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // openapi_validation_name - computed: true, optional: false, required: false
  public get openapiValidationName() {
    return this.getStringAttribute('openapi_validation_name');
  }

  // rule_match_record - computed: true, optional: false, required: false
  public get ruleMatchRecord() {
    return this.getStringAttribute('rule_match_record');
  }

  // threshold_based_detection - computed: true, optional: false, required: false
  public get thresholdBasedDetection() {
    return this.getStringAttribute('threshold_based_detection');
  }

  // url_protection - computed: true, optional: false, required: false
  public get urlProtection() {
    return this.getStringAttribute('url_protection');
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // web_attack_signature - computed: true, optional: false, required: false
  public get webAttackSignature() {
    return this.getStringAttribute('web_attack_signature');
  }

  // xml_validation_name - computed: true, optional: false, required: false
  public get xmlValidationName() {
    return this.getStringAttribute('xml_validation_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      vdom: cdktf.stringToTerraform(this._vdom),
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
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
