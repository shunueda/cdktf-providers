// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityWafProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#advanced_protection_name SecurityWafProfile#advanced_protection_name}
  */
  readonly advancedProtectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#api_gateway_policy_name SecurityWafProfile#api_gateway_policy_name}
  */
  readonly apiGatewayPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#biometrics_based_detection SecurityWafProfile#biometrics_based_detection}
  */
  readonly biometricsBasedDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#bot_detection_name SecurityWafProfile#bot_detection_name}
  */
  readonly botDetectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#brute_force_login_name SecurityWafProfile#brute_force_login_name}
  */
  readonly bruteForceLoginName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#cookie_security SecurityWafProfile#cookie_security}
  */
  readonly cookieSecurity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#cors_protection SecurityWafProfile#cors_protection}
  */
  readonly corsProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#credential_stuffing_defense SecurityWafProfile#credential_stuffing_defense}
  */
  readonly credentialStuffingDefense?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#csrf_protection SecurityWafProfile#csrf_protection}
  */
  readonly csrfProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#data_leak_prevention_name SecurityWafProfile#data_leak_prevention_name}
  */
  readonly dataLeakPreventionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#desc SecurityWafProfile#desc}
  */
  readonly desc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#exception_name SecurityWafProfile#exception_name}
  */
  readonly exceptionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#heuristic_sql_xss_injection_detection SecurityWafProfile#heuristic_sql_xss_injection_detection}
  */
  readonly heuristicSqlXssInjectionDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#http_header_security_name SecurityWafProfile#http_header_security_name}
  */
  readonly httpHeaderSecurityName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#http_protocol_constraint SecurityWafProfile#http_protocol_constraint}
  */
  readonly httpProtocolConstraint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#id SecurityWafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#input_validation_policy_name SecurityWafProfile#input_validation_policy_name}
  */
  readonly inputValidationPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#json_validation_name SecurityWafProfile#json_validation_name}
  */
  readonly jsonValidationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#mkey SecurityWafProfile#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#openapi_validation_name SecurityWafProfile#openapi_validation_name}
  */
  readonly openapiValidationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#rule_match_record SecurityWafProfile#rule_match_record}
  */
  readonly ruleMatchRecord?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#threshold_based_detection SecurityWafProfile#threshold_based_detection}
  */
  readonly thresholdBasedDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#url_protection SecurityWafProfile#url_protection}
  */
  readonly urlProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#vdom SecurityWafProfile#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#web_attack_signature SecurityWafProfile#web_attack_signature}
  */
  readonly webAttackSignature?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#xml_validation_name SecurityWafProfile#xml_validation_name}
  */
  readonly xmlValidationName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile fortiadc_security_waf_profile}
*/
export class SecurityWafProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_security_waf_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityWafProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityWafProfile to import
  * @param importFromId The id of the existing SecurityWafProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityWafProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_security_waf_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_profile fortiadc_security_waf_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityWafProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityWafProfileConfig) {
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
    this._advancedProtectionName = config.advancedProtectionName;
    this._apiGatewayPolicyName = config.apiGatewayPolicyName;
    this._biometricsBasedDetection = config.biometricsBasedDetection;
    this._botDetectionName = config.botDetectionName;
    this._bruteForceLoginName = config.bruteForceLoginName;
    this._cookieSecurity = config.cookieSecurity;
    this._corsProtection = config.corsProtection;
    this._credentialStuffingDefense = config.credentialStuffingDefense;
    this._csrfProtection = config.csrfProtection;
    this._dataLeakPreventionName = config.dataLeakPreventionName;
    this._desc = config.desc;
    this._exceptionName = config.exceptionName;
    this._heuristicSqlXssInjectionDetection = config.heuristicSqlXssInjectionDetection;
    this._httpHeaderSecurityName = config.httpHeaderSecurityName;
    this._httpProtocolConstraint = config.httpProtocolConstraint;
    this._id = config.id;
    this._inputValidationPolicyName = config.inputValidationPolicyName;
    this._jsonValidationName = config.jsonValidationName;
    this._mkey = config.mkey;
    this._openapiValidationName = config.openapiValidationName;
    this._ruleMatchRecord = config.ruleMatchRecord;
    this._thresholdBasedDetection = config.thresholdBasedDetection;
    this._urlProtection = config.urlProtection;
    this._vdom = config.vdom;
    this._webAttackSignature = config.webAttackSignature;
    this._xmlValidationName = config.xmlValidationName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_protection_name - computed: true, optional: true, required: false
  private _advancedProtectionName?: string; 
  public get advancedProtectionName() {
    return this.getStringAttribute('advanced_protection_name');
  }
  public set advancedProtectionName(value: string) {
    this._advancedProtectionName = value;
  }
  public resetAdvancedProtectionName() {
    this._advancedProtectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedProtectionNameInput() {
    return this._advancedProtectionName;
  }

  // api_gateway_policy_name - computed: true, optional: true, required: false
  private _apiGatewayPolicyName?: string; 
  public get apiGatewayPolicyName() {
    return this.getStringAttribute('api_gateway_policy_name');
  }
  public set apiGatewayPolicyName(value: string) {
    this._apiGatewayPolicyName = value;
  }
  public resetApiGatewayPolicyName() {
    this._apiGatewayPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGatewayPolicyNameInput() {
    return this._apiGatewayPolicyName;
  }

  // biometrics_based_detection - computed: true, optional: true, required: false
  private _biometricsBasedDetection?: string; 
  public get biometricsBasedDetection() {
    return this.getStringAttribute('biometrics_based_detection');
  }
  public set biometricsBasedDetection(value: string) {
    this._biometricsBasedDetection = value;
  }
  public resetBiometricsBasedDetection() {
    this._biometricsBasedDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biometricsBasedDetectionInput() {
    return this._biometricsBasedDetection;
  }

  // bot_detection_name - computed: true, optional: true, required: false
  private _botDetectionName?: string; 
  public get botDetectionName() {
    return this.getStringAttribute('bot_detection_name');
  }
  public set botDetectionName(value: string) {
    this._botDetectionName = value;
  }
  public resetBotDetectionName() {
    this._botDetectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botDetectionNameInput() {
    return this._botDetectionName;
  }

  // brute_force_login_name - computed: true, optional: true, required: false
  private _bruteForceLoginName?: string; 
  public get bruteForceLoginName() {
    return this.getStringAttribute('brute_force_login_name');
  }
  public set bruteForceLoginName(value: string) {
    this._bruteForceLoginName = value;
  }
  public resetBruteForceLoginName() {
    this._bruteForceLoginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bruteForceLoginNameInput() {
    return this._bruteForceLoginName;
  }

  // cookie_security - computed: true, optional: true, required: false
  private _cookieSecurity?: string; 
  public get cookieSecurity() {
    return this.getStringAttribute('cookie_security');
  }
  public set cookieSecurity(value: string) {
    this._cookieSecurity = value;
  }
  public resetCookieSecurity() {
    this._cookieSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieSecurityInput() {
    return this._cookieSecurity;
  }

  // cors_protection - computed: true, optional: true, required: false
  private _corsProtection?: string; 
  public get corsProtection() {
    return this.getStringAttribute('cors_protection');
  }
  public set corsProtection(value: string) {
    this._corsProtection = value;
  }
  public resetCorsProtection() {
    this._corsProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsProtectionInput() {
    return this._corsProtection;
  }

  // credential_stuffing_defense - computed: true, optional: true, required: false
  private _credentialStuffingDefense?: string; 
  public get credentialStuffingDefense() {
    return this.getStringAttribute('credential_stuffing_defense');
  }
  public set credentialStuffingDefense(value: string) {
    this._credentialStuffingDefense = value;
  }
  public resetCredentialStuffingDefense() {
    this._credentialStuffingDefense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialStuffingDefenseInput() {
    return this._credentialStuffingDefense;
  }

  // csrf_protection - computed: true, optional: true, required: false
  private _csrfProtection?: string; 
  public get csrfProtection() {
    return this.getStringAttribute('csrf_protection');
  }
  public set csrfProtection(value: string) {
    this._csrfProtection = value;
  }
  public resetCsrfProtection() {
    this._csrfProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrfProtectionInput() {
    return this._csrfProtection;
  }

  // data_leak_prevention_name - computed: true, optional: true, required: false
  private _dataLeakPreventionName?: string; 
  public get dataLeakPreventionName() {
    return this.getStringAttribute('data_leak_prevention_name');
  }
  public set dataLeakPreventionName(value: string) {
    this._dataLeakPreventionName = value;
  }
  public resetDataLeakPreventionName() {
    this._dataLeakPreventionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLeakPreventionNameInput() {
    return this._dataLeakPreventionName;
  }

  // desc - computed: true, optional: true, required: false
  private _desc?: string; 
  public get desc() {
    return this.getStringAttribute('desc');
  }
  public set desc(value: string) {
    this._desc = value;
  }
  public resetDesc() {
    this._desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc;
  }

  // exception_name - computed: true, optional: true, required: false
  private _exceptionName?: string; 
  public get exceptionName() {
    return this.getStringAttribute('exception_name');
  }
  public set exceptionName(value: string) {
    this._exceptionName = value;
  }
  public resetExceptionName() {
    this._exceptionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionNameInput() {
    return this._exceptionName;
  }

  // heuristic_sql_xss_injection_detection - computed: true, optional: true, required: false
  private _heuristicSqlXssInjectionDetection?: string; 
  public get heuristicSqlXssInjectionDetection() {
    return this.getStringAttribute('heuristic_sql_xss_injection_detection');
  }
  public set heuristicSqlXssInjectionDetection(value: string) {
    this._heuristicSqlXssInjectionDetection = value;
  }
  public resetHeuristicSqlXssInjectionDetection() {
    this._heuristicSqlXssInjectionDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heuristicSqlXssInjectionDetectionInput() {
    return this._heuristicSqlXssInjectionDetection;
  }

  // http_header_security_name - computed: true, optional: true, required: false
  private _httpHeaderSecurityName?: string; 
  public get httpHeaderSecurityName() {
    return this.getStringAttribute('http_header_security_name');
  }
  public set httpHeaderSecurityName(value: string) {
    this._httpHeaderSecurityName = value;
  }
  public resetHttpHeaderSecurityName() {
    this._httpHeaderSecurityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderSecurityNameInput() {
    return this._httpHeaderSecurityName;
  }

  // http_protocol_constraint - computed: true, optional: true, required: false
  private _httpProtocolConstraint?: string; 
  public get httpProtocolConstraint() {
    return this.getStringAttribute('http_protocol_constraint');
  }
  public set httpProtocolConstraint(value: string) {
    this._httpProtocolConstraint = value;
  }
  public resetHttpProtocolConstraint() {
    this._httpProtocolConstraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProtocolConstraintInput() {
    return this._httpProtocolConstraint;
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

  // input_validation_policy_name - computed: true, optional: true, required: false
  private _inputValidationPolicyName?: string; 
  public get inputValidationPolicyName() {
    return this.getStringAttribute('input_validation_policy_name');
  }
  public set inputValidationPolicyName(value: string) {
    this._inputValidationPolicyName = value;
  }
  public resetInputValidationPolicyName() {
    this._inputValidationPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputValidationPolicyNameInput() {
    return this._inputValidationPolicyName;
  }

  // json_validation_name - computed: true, optional: true, required: false
  private _jsonValidationName?: string; 
  public get jsonValidationName() {
    return this.getStringAttribute('json_validation_name');
  }
  public set jsonValidationName(value: string) {
    this._jsonValidationName = value;
  }
  public resetJsonValidationName() {
    this._jsonValidationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonValidationNameInput() {
    return this._jsonValidationName;
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

  // openapi_validation_name - computed: true, optional: true, required: false
  private _openapiValidationName?: string; 
  public get openapiValidationName() {
    return this.getStringAttribute('openapi_validation_name');
  }
  public set openapiValidationName(value: string) {
    this._openapiValidationName = value;
  }
  public resetOpenapiValidationName() {
    this._openapiValidationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openapiValidationNameInput() {
    return this._openapiValidationName;
  }

  // rule_match_record - computed: true, optional: true, required: false
  private _ruleMatchRecord?: string; 
  public get ruleMatchRecord() {
    return this.getStringAttribute('rule_match_record');
  }
  public set ruleMatchRecord(value: string) {
    this._ruleMatchRecord = value;
  }
  public resetRuleMatchRecord() {
    this._ruleMatchRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleMatchRecordInput() {
    return this._ruleMatchRecord;
  }

  // threshold_based_detection - computed: true, optional: true, required: false
  private _thresholdBasedDetection?: string; 
  public get thresholdBasedDetection() {
    return this.getStringAttribute('threshold_based_detection');
  }
  public set thresholdBasedDetection(value: string) {
    this._thresholdBasedDetection = value;
  }
  public resetThresholdBasedDetection() {
    this._thresholdBasedDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdBasedDetectionInput() {
    return this._thresholdBasedDetection;
  }

  // url_protection - computed: true, optional: true, required: false
  private _urlProtection?: string; 
  public get urlProtection() {
    return this.getStringAttribute('url_protection');
  }
  public set urlProtection(value: string) {
    this._urlProtection = value;
  }
  public resetUrlProtection() {
    this._urlProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlProtectionInput() {
    return this._urlProtection;
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

  // web_attack_signature - computed: true, optional: true, required: false
  private _webAttackSignature?: string; 
  public get webAttackSignature() {
    return this.getStringAttribute('web_attack_signature');
  }
  public set webAttackSignature(value: string) {
    this._webAttackSignature = value;
  }
  public resetWebAttackSignature() {
    this._webAttackSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAttackSignatureInput() {
    return this._webAttackSignature;
  }

  // xml_validation_name - computed: true, optional: true, required: false
  private _xmlValidationName?: string; 
  public get xmlValidationName() {
    return this.getStringAttribute('xml_validation_name');
  }
  public set xmlValidationName(value: string) {
    this._xmlValidationName = value;
  }
  public resetXmlValidationName() {
    this._xmlValidationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlValidationNameInput() {
    return this._xmlValidationName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advanced_protection_name: cdktf.stringToTerraform(this._advancedProtectionName),
      api_gateway_policy_name: cdktf.stringToTerraform(this._apiGatewayPolicyName),
      biometrics_based_detection: cdktf.stringToTerraform(this._biometricsBasedDetection),
      bot_detection_name: cdktf.stringToTerraform(this._botDetectionName),
      brute_force_login_name: cdktf.stringToTerraform(this._bruteForceLoginName),
      cookie_security: cdktf.stringToTerraform(this._cookieSecurity),
      cors_protection: cdktf.stringToTerraform(this._corsProtection),
      credential_stuffing_defense: cdktf.stringToTerraform(this._credentialStuffingDefense),
      csrf_protection: cdktf.stringToTerraform(this._csrfProtection),
      data_leak_prevention_name: cdktf.stringToTerraform(this._dataLeakPreventionName),
      desc: cdktf.stringToTerraform(this._desc),
      exception_name: cdktf.stringToTerraform(this._exceptionName),
      heuristic_sql_xss_injection_detection: cdktf.stringToTerraform(this._heuristicSqlXssInjectionDetection),
      http_header_security_name: cdktf.stringToTerraform(this._httpHeaderSecurityName),
      http_protocol_constraint: cdktf.stringToTerraform(this._httpProtocolConstraint),
      id: cdktf.stringToTerraform(this._id),
      input_validation_policy_name: cdktf.stringToTerraform(this._inputValidationPolicyName),
      json_validation_name: cdktf.stringToTerraform(this._jsonValidationName),
      mkey: cdktf.stringToTerraform(this._mkey),
      openapi_validation_name: cdktf.stringToTerraform(this._openapiValidationName),
      rule_match_record: cdktf.stringToTerraform(this._ruleMatchRecord),
      threshold_based_detection: cdktf.stringToTerraform(this._thresholdBasedDetection),
      url_protection: cdktf.stringToTerraform(this._urlProtection),
      vdom: cdktf.stringToTerraform(this._vdom),
      web_attack_signature: cdktf.stringToTerraform(this._webAttackSignature),
      xml_validation_name: cdktf.stringToTerraform(this._xmlValidationName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advanced_protection_name: {
        value: cdktf.stringToHclTerraform(this._advancedProtectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_gateway_policy_name: {
        value: cdktf.stringToHclTerraform(this._apiGatewayPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      biometrics_based_detection: {
        value: cdktf.stringToHclTerraform(this._biometricsBasedDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bot_detection_name: {
        value: cdktf.stringToHclTerraform(this._botDetectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      brute_force_login_name: {
        value: cdktf.stringToHclTerraform(this._bruteForceLoginName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_security: {
        value: cdktf.stringToHclTerraform(this._cookieSecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cors_protection: {
        value: cdktf.stringToHclTerraform(this._corsProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credential_stuffing_defense: {
        value: cdktf.stringToHclTerraform(this._credentialStuffingDefense),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csrf_protection: {
        value: cdktf.stringToHclTerraform(this._csrfProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_leak_prevention_name: {
        value: cdktf.stringToHclTerraform(this._dataLeakPreventionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desc: {
        value: cdktf.stringToHclTerraform(this._desc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exception_name: {
        value: cdktf.stringToHclTerraform(this._exceptionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      heuristic_sql_xss_injection_detection: {
        value: cdktf.stringToHclTerraform(this._heuristicSqlXssInjectionDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_header_security_name: {
        value: cdktf.stringToHclTerraform(this._httpHeaderSecurityName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_protocol_constraint: {
        value: cdktf.stringToHclTerraform(this._httpProtocolConstraint),
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
      input_validation_policy_name: {
        value: cdktf.stringToHclTerraform(this._inputValidationPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      json_validation_name: {
        value: cdktf.stringToHclTerraform(this._jsonValidationName),
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
      openapi_validation_name: {
        value: cdktf.stringToHclTerraform(this._openapiValidationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_match_record: {
        value: cdktf.stringToHclTerraform(this._ruleMatchRecord),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold_based_detection: {
        value: cdktf.stringToHclTerraform(this._thresholdBasedDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_protection: {
        value: cdktf.stringToHclTerraform(this._urlProtection),
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
      web_attack_signature: {
        value: cdktf.stringToHclTerraform(this._webAttackSignature),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xml_validation_name: {
        value: cdktf.stringToHclTerraform(this._xmlValidationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
