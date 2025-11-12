// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_siem_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsecSiemSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of the security configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_siem_settings#config_id AppsecSiemSettings#config_id}
  */
  readonly configId: number;
  /**
  * Whether Bot Manager events should be included in SIEM events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_siem_settings#enable_botman_siem AppsecSiemSettings#enable_botman_siem}
  */
  readonly enableBotmanSiem?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable SIEM on all security policies in the security configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_siem_settings#enable_for_all_policies AppsecSiemSettings#enable_for_all_policies}
  */
  readonly enableForAllPolicies: boolean | cdktf.IResolvable;
  /**
  * Whether to enable SIEM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_siem_settings#enable_siem AppsecSiemSettings#enable_siem}
  */
  readonly enableSiem: boolean | cdktf.IResolvable;
  /**
  * Describes all the protections and actions to be excluded from SIEM events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_siem_settings#exceptions AppsecSiemSettings#exceptions}
  */
  readonly exceptions?: AppsecSiemSettingsExceptions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_siem_settings#id AppsecSiemSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether JA4 Fingerprint should be included in SIEM events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_siem_settings#include_ja4_fingerprint_to_siem AppsecSiemSettings#include_ja4_fingerprint_to_siem}
  */
  readonly includeJa4FingerprintToSiem?: boolean | cdktf.IResolvable;
  /**
  * List of IDs of security policy for which SIEM integration is to be enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_siem_settings#security_policy_ids AppsecSiemSettings#security_policy_ids}
  */
  readonly securityPolicyIds?: string[];
  /**
  * Unique identifier of the SIEM settings being modified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_siem_settings#siem_id AppsecSiemSettings#siem_id}
  */
  readonly siemId: number;
}
export interface AppsecSiemSettingsExceptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_siem_settings#api_request_constraints AppsecSiemSettings#api_request_constraints}
  */
  readonly apiRequestConstraints?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_siem_settings#apr_protection AppsecSiemSettings#apr_protection}
  */
  readonly aprProtection?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_siem_settings#bot_management AppsecSiemSettings#bot_management}
  */
  readonly botManagement?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_siem_settings#client_rep AppsecSiemSettings#client_rep}
  */
  readonly clientRep?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_siem_settings#custom_rules AppsecSiemSettings#custom_rules}
  */
  readonly customRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_siem_settings#ip_geo AppsecSiemSettings#ip_geo}
  */
  readonly ipGeo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_siem_settings#malware_protection AppsecSiemSettings#malware_protection}
  */
  readonly malwareProtection?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_siem_settings#rate AppsecSiemSettings#rate}
  */
  readonly rate?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_siem_settings#slow_post AppsecSiemSettings#slow_post}
  */
  readonly slowPost?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_siem_settings#url_protection AppsecSiemSettings#url_protection}
  */
  readonly urlProtection?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_siem_settings#waf AppsecSiemSettings#waf}
  */
  readonly waf?: string[];
}

export function appsecSiemSettingsExceptionsToTerraform(struct?: AppsecSiemSettingsExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_request_constraints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiRequestConstraints),
    apr_protection: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aprProtection),
    bot_management: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.botManagement),
    client_rep: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clientRep),
    custom_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customRules),
    ip_geo: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipGeo),
    malware_protection: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.malwareProtection),
    rate: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rate),
    slow_post: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.slowPost),
    url_protection: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.urlProtection),
    waf: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.waf),
  }
}


export function appsecSiemSettingsExceptionsToHclTerraform(struct?: AppsecSiemSettingsExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_request_constraints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiRequestConstraints),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    apr_protection: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.aprProtection),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bot_management: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.botManagement),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    client_rep: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clientRep),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    custom_rules: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customRules),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ip_geo: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipGeo),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    malware_protection: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.malwareProtection),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rate: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rate),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    slow_post: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.slowPost),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    url_protection: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.urlProtection),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    waf: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.waf),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsecSiemSettingsExceptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AppsecSiemSettingsExceptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiRequestConstraints !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiRequestConstraints = this._apiRequestConstraints;
    }
    if (this._aprProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.aprProtection = this._aprProtection;
    }
    if (this._botManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.botManagement = this._botManagement;
    }
    if (this._clientRep !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRep = this._clientRep;
    }
    if (this._customRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRules = this._customRules;
    }
    if (this._ipGeo !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipGeo = this._ipGeo;
    }
    if (this._malwareProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.malwareProtection = this._malwareProtection;
    }
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    if (this._slowPost !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowPost = this._slowPost;
    }
    if (this._urlProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlProtection = this._urlProtection;
    }
    if (this._waf !== undefined) {
      hasAnyValues = true;
      internalValueResult.waf = this._waf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsecSiemSettingsExceptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiRequestConstraints = undefined;
      this._aprProtection = undefined;
      this._botManagement = undefined;
      this._clientRep = undefined;
      this._customRules = undefined;
      this._ipGeo = undefined;
      this._malwareProtection = undefined;
      this._rate = undefined;
      this._slowPost = undefined;
      this._urlProtection = undefined;
      this._waf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiRequestConstraints = value.apiRequestConstraints;
      this._aprProtection = value.aprProtection;
      this._botManagement = value.botManagement;
      this._clientRep = value.clientRep;
      this._customRules = value.customRules;
      this._ipGeo = value.ipGeo;
      this._malwareProtection = value.malwareProtection;
      this._rate = value.rate;
      this._slowPost = value.slowPost;
      this._urlProtection = value.urlProtection;
      this._waf = value.waf;
    }
  }

  // api_request_constraints - computed: false, optional: true, required: false
  private _apiRequestConstraints?: string[]; 
  public get apiRequestConstraints() {
    return cdktf.Fn.tolist(this.getListAttribute('api_request_constraints'));
  }
  public set apiRequestConstraints(value: string[]) {
    this._apiRequestConstraints = value;
  }
  public resetApiRequestConstraints() {
    this._apiRequestConstraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiRequestConstraintsInput() {
    return this._apiRequestConstraints;
  }

  // apr_protection - computed: false, optional: true, required: false
  private _aprProtection?: string[]; 
  public get aprProtection() {
    return cdktf.Fn.tolist(this.getListAttribute('apr_protection'));
  }
  public set aprProtection(value: string[]) {
    this._aprProtection = value;
  }
  public resetAprProtection() {
    this._aprProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aprProtectionInput() {
    return this._aprProtection;
  }

  // bot_management - computed: false, optional: true, required: false
  private _botManagement?: string[]; 
  public get botManagement() {
    return cdktf.Fn.tolist(this.getListAttribute('bot_management'));
  }
  public set botManagement(value: string[]) {
    this._botManagement = value;
  }
  public resetBotManagement() {
    this._botManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botManagementInput() {
    return this._botManagement;
  }

  // client_rep - computed: false, optional: true, required: false
  private _clientRep?: string[]; 
  public get clientRep() {
    return cdktf.Fn.tolist(this.getListAttribute('client_rep'));
  }
  public set clientRep(value: string[]) {
    this._clientRep = value;
  }
  public resetClientRep() {
    this._clientRep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRepInput() {
    return this._clientRep;
  }

  // custom_rules - computed: false, optional: true, required: false
  private _customRules?: string[]; 
  public get customRules() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_rules'));
  }
  public set customRules(value: string[]) {
    this._customRules = value;
  }
  public resetCustomRules() {
    this._customRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRulesInput() {
    return this._customRules;
  }

  // ip_geo - computed: false, optional: true, required: false
  private _ipGeo?: string[]; 
  public get ipGeo() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_geo'));
  }
  public set ipGeo(value: string[]) {
    this._ipGeo = value;
  }
  public resetIpGeo() {
    this._ipGeo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGeoInput() {
    return this._ipGeo;
  }

  // malware_protection - computed: false, optional: true, required: false
  private _malwareProtection?: string[]; 
  public get malwareProtection() {
    return cdktf.Fn.tolist(this.getListAttribute('malware_protection'));
  }
  public set malwareProtection(value: string[]) {
    this._malwareProtection = value;
  }
  public resetMalwareProtection() {
    this._malwareProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malwareProtectionInput() {
    return this._malwareProtection;
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: string[]; 
  public get rate() {
    return cdktf.Fn.tolist(this.getListAttribute('rate'));
  }
  public set rate(value: string[]) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // slow_post - computed: false, optional: true, required: false
  private _slowPost?: string[]; 
  public get slowPost() {
    return cdktf.Fn.tolist(this.getListAttribute('slow_post'));
  }
  public set slowPost(value: string[]) {
    this._slowPost = value;
  }
  public resetSlowPost() {
    this._slowPost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowPostInput() {
    return this._slowPost;
  }

  // url_protection - computed: false, optional: true, required: false
  private _urlProtection?: string[]; 
  public get urlProtection() {
    return cdktf.Fn.tolist(this.getListAttribute('url_protection'));
  }
  public set urlProtection(value: string[]) {
    this._urlProtection = value;
  }
  public resetUrlProtection() {
    this._urlProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlProtectionInput() {
    return this._urlProtection;
  }

  // waf - computed: false, optional: true, required: false
  private _waf?: string[]; 
  public get waf() {
    return cdktf.Fn.tolist(this.getListAttribute('waf'));
  }
  public set waf(value: string[]) {
    this._waf = value;
  }
  public resetWaf() {
    this._waf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafInput() {
    return this._waf;
  }
}

export class AppsecSiemSettingsExceptionsList extends cdktf.ComplexList {
  public internalValue? : AppsecSiemSettingsExceptions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AppsecSiemSettingsExceptionsOutputReference {
    return new AppsecSiemSettingsExceptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_siem_settings akamai_appsec_siem_settings}
*/
export class AppsecSiemSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_appsec_siem_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsecSiemSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsecSiemSettings to import
  * @param importFromId The id of the existing AppsecSiemSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_siem_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsecSiemSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_appsec_siem_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_siem_settings akamai_appsec_siem_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsecSiemSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: AppsecSiemSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_appsec_siem_settings',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
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
    this._enableBotmanSiem = config.enableBotmanSiem;
    this._enableForAllPolicies = config.enableForAllPolicies;
    this._enableSiem = config.enableSiem;
    this._exceptions.internalValue = config.exceptions;
    this._id = config.id;
    this._includeJa4FingerprintToSiem = config.includeJa4FingerprintToSiem;
    this._securityPolicyIds = config.securityPolicyIds;
    this._siemId = config.siemId;
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

  // enable_botman_siem - computed: false, optional: true, required: false
  private _enableBotmanSiem?: boolean | cdktf.IResolvable; 
  public get enableBotmanSiem() {
    return this.getBooleanAttribute('enable_botman_siem');
  }
  public set enableBotmanSiem(value: boolean | cdktf.IResolvable) {
    this._enableBotmanSiem = value;
  }
  public resetEnableBotmanSiem() {
    this._enableBotmanSiem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBotmanSiemInput() {
    return this._enableBotmanSiem;
  }

  // enable_for_all_policies - computed: false, optional: false, required: true
  private _enableForAllPolicies?: boolean | cdktf.IResolvable; 
  public get enableForAllPolicies() {
    return this.getBooleanAttribute('enable_for_all_policies');
  }
  public set enableForAllPolicies(value: boolean | cdktf.IResolvable) {
    this._enableForAllPolicies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableForAllPoliciesInput() {
    return this._enableForAllPolicies;
  }

  // enable_siem - computed: false, optional: false, required: true
  private _enableSiem?: boolean | cdktf.IResolvable; 
  public get enableSiem() {
    return this.getBooleanAttribute('enable_siem');
  }
  public set enableSiem(value: boolean | cdktf.IResolvable) {
    this._enableSiem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSiemInput() {
    return this._enableSiem;
  }

  // exceptions - computed: false, optional: true, required: false
  private _exceptions = new AppsecSiemSettingsExceptionsList(this, "exceptions", false);
  public get exceptions() {
    return this._exceptions;
  }
  public putExceptions(value: AppsecSiemSettingsExceptions[] | cdktf.IResolvable) {
    this._exceptions.internalValue = value;
  }
  public resetExceptions() {
    this._exceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionsInput() {
    return this._exceptions.internalValue;
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

  // include_ja4_fingerprint_to_siem - computed: false, optional: true, required: false
  private _includeJa4FingerprintToSiem?: boolean | cdktf.IResolvable; 
  public get includeJa4FingerprintToSiem() {
    return this.getBooleanAttribute('include_ja4_fingerprint_to_siem');
  }
  public set includeJa4FingerprintToSiem(value: boolean | cdktf.IResolvable) {
    this._includeJa4FingerprintToSiem = value;
  }
  public resetIncludeJa4FingerprintToSiem() {
    this._includeJa4FingerprintToSiem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeJa4FingerprintToSiemInput() {
    return this._includeJa4FingerprintToSiem;
  }

  // security_policy_ids - computed: false, optional: true, required: false
  private _securityPolicyIds?: string[]; 
  public get securityPolicyIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_policy_ids'));
  }
  public set securityPolicyIds(value: string[]) {
    this._securityPolicyIds = value;
  }
  public resetSecurityPolicyIds() {
    this._securityPolicyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyIdsInput() {
    return this._securityPolicyIds;
  }

  // siem_id - computed: false, optional: false, required: true
  private _siemId?: number; 
  public get siemId() {
    return this.getNumberAttribute('siem_id');
  }
  public set siemId(value: number) {
    this._siemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siemIdInput() {
    return this._siemId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_id: cdktf.numberToTerraform(this._configId),
      enable_botman_siem: cdktf.booleanToTerraform(this._enableBotmanSiem),
      enable_for_all_policies: cdktf.booleanToTerraform(this._enableForAllPolicies),
      enable_siem: cdktf.booleanToTerraform(this._enableSiem),
      exceptions: cdktf.listMapper(appsecSiemSettingsExceptionsToTerraform, false)(this._exceptions.internalValue),
      id: cdktf.stringToTerraform(this._id),
      include_ja4_fingerprint_to_siem: cdktf.booleanToTerraform(this._includeJa4FingerprintToSiem),
      security_policy_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityPolicyIds),
      siem_id: cdktf.numberToTerraform(this._siemId),
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
      enable_botman_siem: {
        value: cdktf.booleanToHclTerraform(this._enableBotmanSiem),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_for_all_policies: {
        value: cdktf.booleanToHclTerraform(this._enableForAllPolicies),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_siem: {
        value: cdktf.booleanToHclTerraform(this._enableSiem),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exceptions: {
        value: cdktf.listMapperHcl(appsecSiemSettingsExceptionsToHclTerraform, false)(this._exceptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsecSiemSettingsExceptionsList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_ja4_fingerprint_to_siem: {
        value: cdktf.booleanToHclTerraform(this._includeJa4FingerprintToSiem),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_policy_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityPolicyIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      siem_id: {
        value: cdktf.numberToHclTerraform(this._siemId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
