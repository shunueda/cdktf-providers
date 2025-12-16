// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeoSecurityPolicyConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Security policy type. the following parameter values can be used: <li>ZoneDefaultPolicy: used to specify a site-level policy;</li> <li>Template: used to specify a policy Template. you need to simultaneously specify the TemplateId parameter;</li> <li>Host: used to specify a domain-level policy (note: when using a domain name to specify a dns service policy, only dns services or policy templates that have applied a domain-level policy are supported).</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#entity TeoSecurityPolicyConfig#entity}
  */
  readonly entity?: string;
  /**
  * Specifies the specified domain. when the Entity parameter value is Host, use the domain-level policy specified by this parameter. for example: use www.example.com to configure the domain-level policy of the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#host TeoSecurityPolicyConfig#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#id TeoSecurityPolicyConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify the policy Template ID. use this parameter to specify the ID of the policy Template when the Entity parameter value is Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#template_id TeoSecurityPolicyConfig#template_id}
  */
  readonly templateId?: string;
  /**
  * Zone ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#zone_id TeoSecurityPolicyConfig#zone_id}
  */
  readonly zoneId: string;
  /**
  * security_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#security_policy TeoSecurityPolicyConfig#security_policy}
  */
  readonly securityPolicy?: TeoSecurityPolicyConfigSecurityPolicy;
}
export interface TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionBlockIpActionParameters {
  /**
  * Penalty duration for blocking ips. supported units: <li>s: second, value range 1-120;</li> <li>m: minute, value range 1-120;</li> <li>h: hour, value range 1-48.</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#duration TeoSecurityPolicyConfig#duration}
  */
  readonly duration: string;
}

export function teoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionBlockIpActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionBlockIpActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionBlockIpActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionBlockIpActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionBlockIpActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionBlockIpActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionBlockIpActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionBlockIpActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionBlockIpActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionRedirectActionParameters {
  /**
  * Redirect URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#url TeoSecurityPolicyConfig#url}
  */
  readonly url: string;
}

export function teoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionRedirectActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionRedirectActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionRedirectActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionRedirectActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionRedirectActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionRedirectActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionRedirectActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionRedirectActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionRedirectActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionReturnCustomPageActionParameters {
  /**
  * Response custom page ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#error_page_id TeoSecurityPolicyConfig#error_page_id}
  */
  readonly errorPageId: string;
  /**
  * Response status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#response_code TeoSecurityPolicyConfig#response_code}
  */
  readonly responseCode: string;
}

export function teoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionReturnCustomPageActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionReturnCustomPageActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionReturnCustomPageActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_page_id: cdktf.stringToTerraform(struct!.errorPageId),
    response_code: cdktf.stringToTerraform(struct!.responseCode),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionReturnCustomPageActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionReturnCustomPageActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionReturnCustomPageActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_page_id: {
      value: cdktf.stringToHclTerraform(struct!.errorPageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.stringToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionReturnCustomPageActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionReturnCustomPageActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorPageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorPageId = this._errorPageId;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionReturnCustomPageActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorPageId = undefined;
      this._responseCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorPageId = value.errorPageId;
      this._responseCode = value.responseCode;
    }
  }

  // error_page_id - computed: false, optional: false, required: true
  private _errorPageId?: string; 
  public get errorPageId() {
    return this.getStringAttribute('error_page_id');
  }
  public set errorPageId(value: string) {
    this._errorPageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPageIdInput() {
    return this._errorPageId;
  }

  // response_code - computed: false, optional: false, required: true
  private _responseCode?: string; 
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
  public set responseCode(value: string) {
    this._responseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesAction {
  /**
  * Specific actions for safe execution. valid values:.
  * <li>Deny: block</li> <li>Monitor: Monitor</li> <li>ReturnCustomPage: use specified page to block</li> <li>Redirect: Redirect to URL</li> <li>BlockIP: IP block</li> <li>JSChallenge: JavaScript challenge</li> <li>ManagedChallenge: managed challenge</li> <li>Disabled: Disabled</li> <li>Allow: Allow</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#name TeoSecurityPolicyConfig#name}
  */
  readonly name: string;
  /**
  * block_ip_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#block_ip_action_parameters TeoSecurityPolicyConfig#block_ip_action_parameters}
  */
  readonly blockIpActionParameters?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionBlockIpActionParameters;
  /**
  * redirect_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#redirect_action_parameters TeoSecurityPolicyConfig#redirect_action_parameters}
  */
  readonly redirectActionParameters?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionRedirectActionParameters;
  /**
  * return_custom_page_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#return_custom_page_action_parameters TeoSecurityPolicyConfig#return_custom_page_action_parameters}
  */
  readonly returnCustomPageActionParameters?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionReturnCustomPageActionParameters;
}

export function teoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionOutputReference | TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    block_ip_action_parameters: teoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionBlockIpActionParametersToTerraform(struct!.blockIpActionParameters),
    redirect_action_parameters: teoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionRedirectActionParametersToTerraform(struct!.redirectActionParameters),
    return_custom_page_action_parameters: teoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionReturnCustomPageActionParametersToTerraform(struct!.returnCustomPageActionParameters),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionOutputReference | TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_ip_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionBlockIpActionParametersToHclTerraform(struct!.blockIpActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionBlockIpActionParametersList",
    },
    redirect_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionRedirectActionParametersToHclTerraform(struct!.redirectActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionRedirectActionParametersList",
    },
    return_custom_page_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionReturnCustomPageActionParametersToHclTerraform(struct!.returnCustomPageActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionReturnCustomPageActionParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._blockIpActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIpActionParameters = this._blockIpActionParameters?.internalValue;
    }
    if (this._redirectActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectActionParameters = this._redirectActionParameters?.internalValue;
    }
    if (this._returnCustomPageActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnCustomPageActionParameters = this._returnCustomPageActionParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._blockIpActionParameters.internalValue = undefined;
      this._redirectActionParameters.internalValue = undefined;
      this._returnCustomPageActionParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._blockIpActionParameters.internalValue = value.blockIpActionParameters;
      this._redirectActionParameters.internalValue = value.redirectActionParameters;
      this._returnCustomPageActionParameters.internalValue = value.returnCustomPageActionParameters;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // block_ip_action_parameters - computed: false, optional: true, required: false
  private _blockIpActionParameters = new TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionBlockIpActionParametersOutputReference(this, "block_ip_action_parameters");
  public get blockIpActionParameters() {
    return this._blockIpActionParameters;
  }
  public putBlockIpActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionBlockIpActionParameters) {
    this._blockIpActionParameters.internalValue = value;
  }
  public resetBlockIpActionParameters() {
    this._blockIpActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpActionParametersInput() {
    return this._blockIpActionParameters.internalValue;
  }

  // redirect_action_parameters - computed: false, optional: true, required: false
  private _redirectActionParameters = new TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionRedirectActionParametersOutputReference(this, "redirect_action_parameters");
  public get redirectActionParameters() {
    return this._redirectActionParameters;
  }
  public putRedirectActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionRedirectActionParameters) {
    this._redirectActionParameters.internalValue = value;
  }
  public resetRedirectActionParameters() {
    this._redirectActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectActionParametersInput() {
    return this._redirectActionParameters.internalValue;
  }

  // return_custom_page_action_parameters - computed: false, optional: true, required: false
  private _returnCustomPageActionParameters = new TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionReturnCustomPageActionParametersOutputReference(this, "return_custom_page_action_parameters");
  public get returnCustomPageActionParameters() {
    return this._returnCustomPageActionParameters;
  }
  public putReturnCustomPageActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionReturnCustomPageActionParameters) {
    this._returnCustomPageActionParameters.internalValue = value;
  }
  public resetReturnCustomPageActionParameters() {
    this._returnCustomPageActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnCustomPageActionParametersInput() {
    return this._returnCustomPageActionParameters.internalValue;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRules {
  /**
  * The specific content of the custom rule must comply with the expression grammar. please refer to the product document for detailed specifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#condition TeoSecurityPolicyConfig#condition}
  */
  readonly condition: string;
  /**
  * Indicates whether the custom rule is enabled. valid values: <li>on: enabled</li> <li>off: disabled</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#enabled TeoSecurityPolicyConfig#enabled}
  */
  readonly enabled: string;
  /**
  * The name of the custom rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#name TeoSecurityPolicyConfig#name}
  */
  readonly name: string;
  /**
  * Customizes the priority of rules. value range: 0-100. it defaults to 0. only supports `rule_type` is `PreciseMatchRule`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#priority TeoSecurityPolicyConfig#priority}
  */
  readonly priority?: number;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#action TeoSecurityPolicyConfig#action}
  */
  readonly action: TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesAction;
}

export function teoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    action: teoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionToTerraform(struct!.action),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action: {
      value: teoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._action.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._enabled = value.enabled;
      this._name = value.name;
      this._priority = value.priority;
      this._action.internalValue = value.action;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rule_type - computed: true, optional: false, required: false
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }

  // action - computed: false, optional: false, required: true
  private _action = new TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }
}

export class TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesList extends cdktf.ComplexList {
  public internalValue? : TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRules[] | cdktf.IResolvable

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
  public get(index: number): TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesOutputReference {
    return new TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionBlockIpActionParameters {
  /**
  * Penalty duration for blocking ips. supported units: <li>s: second, value range 1-120;</li> <li>m: minute, value range 1-120;</li> <li>h: hour, value range 1-48.</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#duration TeoSecurityPolicyConfig#duration}
  */
  readonly duration: string;
}

export function teoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionBlockIpActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionBlockIpActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionBlockIpActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionBlockIpActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionBlockIpActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionBlockIpActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionBlockIpActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionBlockIpActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionBlockIpActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionRedirectActionParameters {
  /**
  * Redirect URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#url TeoSecurityPolicyConfig#url}
  */
  readonly url: string;
}

export function teoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionRedirectActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionRedirectActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionRedirectActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionRedirectActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionRedirectActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionRedirectActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionRedirectActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionRedirectActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionRedirectActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionReturnCustomPageActionParameters {
  /**
  * Response custom page ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#error_page_id TeoSecurityPolicyConfig#error_page_id}
  */
  readonly errorPageId: string;
  /**
  * Response status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#response_code TeoSecurityPolicyConfig#response_code}
  */
  readonly responseCode: string;
}

export function teoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionReturnCustomPageActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionReturnCustomPageActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionReturnCustomPageActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_page_id: cdktf.stringToTerraform(struct!.errorPageId),
    response_code: cdktf.stringToTerraform(struct!.responseCode),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionReturnCustomPageActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionReturnCustomPageActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionReturnCustomPageActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_page_id: {
      value: cdktf.stringToHclTerraform(struct!.errorPageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.stringToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionReturnCustomPageActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionReturnCustomPageActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorPageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorPageId = this._errorPageId;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionReturnCustomPageActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorPageId = undefined;
      this._responseCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorPageId = value.errorPageId;
      this._responseCode = value.responseCode;
    }
  }

  // error_page_id - computed: false, optional: false, required: true
  private _errorPageId?: string; 
  public get errorPageId() {
    return this.getStringAttribute('error_page_id');
  }
  public set errorPageId(value: string) {
    this._errorPageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPageIdInput() {
    return this._errorPageId;
  }

  // response_code - computed: false, optional: false, required: true
  private _responseCode?: string; 
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
  public set responseCode(value: string) {
    this._responseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesAction {
  /**
  * Specific actions for safe execution. valid values:.
  * <li>Deny: block</li> <li>Monitor: Monitor</li> <li>ReturnCustomPage: use specified page to block</li> <li>Redirect: Redirect to URL</li> <li>BlockIP: IP block</li> <li>JSChallenge: JavaScript challenge</li> <li>ManagedChallenge: managed challenge</li> <li>Disabled: Disabled</li> <li>Allow: Allow</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#name TeoSecurityPolicyConfig#name}
  */
  readonly name: string;
  /**
  * block_ip_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#block_ip_action_parameters TeoSecurityPolicyConfig#block_ip_action_parameters}
  */
  readonly blockIpActionParameters?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionBlockIpActionParameters;
  /**
  * redirect_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#redirect_action_parameters TeoSecurityPolicyConfig#redirect_action_parameters}
  */
  readonly redirectActionParameters?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionRedirectActionParameters;
  /**
  * return_custom_page_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#return_custom_page_action_parameters TeoSecurityPolicyConfig#return_custom_page_action_parameters}
  */
  readonly returnCustomPageActionParameters?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionReturnCustomPageActionParameters;
}

export function teoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionOutputReference | TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    block_ip_action_parameters: teoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionBlockIpActionParametersToTerraform(struct!.blockIpActionParameters),
    redirect_action_parameters: teoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionRedirectActionParametersToTerraform(struct!.redirectActionParameters),
    return_custom_page_action_parameters: teoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionReturnCustomPageActionParametersToTerraform(struct!.returnCustomPageActionParameters),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionOutputReference | TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_ip_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionBlockIpActionParametersToHclTerraform(struct!.blockIpActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionBlockIpActionParametersList",
    },
    redirect_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionRedirectActionParametersToHclTerraform(struct!.redirectActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionRedirectActionParametersList",
    },
    return_custom_page_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionReturnCustomPageActionParametersToHclTerraform(struct!.returnCustomPageActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionReturnCustomPageActionParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._blockIpActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIpActionParameters = this._blockIpActionParameters?.internalValue;
    }
    if (this._redirectActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectActionParameters = this._redirectActionParameters?.internalValue;
    }
    if (this._returnCustomPageActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnCustomPageActionParameters = this._returnCustomPageActionParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._blockIpActionParameters.internalValue = undefined;
      this._redirectActionParameters.internalValue = undefined;
      this._returnCustomPageActionParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._blockIpActionParameters.internalValue = value.blockIpActionParameters;
      this._redirectActionParameters.internalValue = value.redirectActionParameters;
      this._returnCustomPageActionParameters.internalValue = value.returnCustomPageActionParameters;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // block_ip_action_parameters - computed: false, optional: true, required: false
  private _blockIpActionParameters = new TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionBlockIpActionParametersOutputReference(this, "block_ip_action_parameters");
  public get blockIpActionParameters() {
    return this._blockIpActionParameters;
  }
  public putBlockIpActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionBlockIpActionParameters) {
    this._blockIpActionParameters.internalValue = value;
  }
  public resetBlockIpActionParameters() {
    this._blockIpActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpActionParametersInput() {
    return this._blockIpActionParameters.internalValue;
  }

  // redirect_action_parameters - computed: false, optional: true, required: false
  private _redirectActionParameters = new TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionRedirectActionParametersOutputReference(this, "redirect_action_parameters");
  public get redirectActionParameters() {
    return this._redirectActionParameters;
  }
  public putRedirectActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionRedirectActionParameters) {
    this._redirectActionParameters.internalValue = value;
  }
  public resetRedirectActionParameters() {
    this._redirectActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectActionParametersInput() {
    return this._redirectActionParameters.internalValue;
  }

  // return_custom_page_action_parameters - computed: false, optional: true, required: false
  private _returnCustomPageActionParameters = new TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionReturnCustomPageActionParametersOutputReference(this, "return_custom_page_action_parameters");
  public get returnCustomPageActionParameters() {
    return this._returnCustomPageActionParameters;
  }
  public putReturnCustomPageActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionReturnCustomPageActionParameters) {
    this._returnCustomPageActionParameters.internalValue = value;
  }
  public resetReturnCustomPageActionParameters() {
    this._returnCustomPageActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnCustomPageActionParametersInput() {
    return this._returnCustomPageActionParameters.internalValue;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRules {
  /**
  * The specific content of the custom rule must comply with the expression grammar. please refer to the product document for detailed specifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#condition TeoSecurityPolicyConfig#condition}
  */
  readonly condition: string;
  /**
  * Indicates whether the custom rule is enabled. valid values: <li>on: enabled</li> <li>off: disabled</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#enabled TeoSecurityPolicyConfig#enabled}
  */
  readonly enabled: string;
  /**
  * The name of the custom rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#name TeoSecurityPolicyConfig#name}
  */
  readonly name: string;
  /**
  * Customizes the priority of rules. value range: 0-100. it defaults to 0. only supports `rule_type` is `PreciseMatchRule`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#priority TeoSecurityPolicyConfig#priority}
  */
  readonly priority?: number;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#action TeoSecurityPolicyConfig#action}
  */
  readonly action: TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesAction;
}

export function teoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    action: teoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionToTerraform(struct!.action),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action: {
      value: teoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._action.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._enabled = value.enabled;
      this._name = value.name;
      this._priority = value.priority;
      this._action.internalValue = value.action;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rule_type - computed: true, optional: false, required: false
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }

  // action - computed: false, optional: false, required: true
  private _action = new TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }
}

export class TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesList extends cdktf.ComplexList {
  public internalValue? : TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRules[] | cdktf.IResolvable

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
  public get(index: number): TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesOutputReference {
    return new TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionBlockIpActionParameters {
  /**
  * Penalty duration for blocking ips. supported units: <li>s: second, value range 1-120;</li> <li>m: minute, value range 1-120;</li> <li>h: hour, value range 1-48.</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#duration TeoSecurityPolicyConfig#duration}
  */
  readonly duration: string;
}

export function teoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionBlockIpActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionBlockIpActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionBlockIpActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionBlockIpActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionBlockIpActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionBlockIpActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionBlockIpActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionBlockIpActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionBlockIpActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionRedirectActionParameters {
  /**
  * Redirect URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#url TeoSecurityPolicyConfig#url}
  */
  readonly url: string;
}

export function teoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionRedirectActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionRedirectActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionRedirectActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionRedirectActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionRedirectActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionRedirectActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionRedirectActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionRedirectActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionRedirectActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionReturnCustomPageActionParameters {
  /**
  * Response custom page ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#error_page_id TeoSecurityPolicyConfig#error_page_id}
  */
  readonly errorPageId: string;
  /**
  * Response status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#response_code TeoSecurityPolicyConfig#response_code}
  */
  readonly responseCode: string;
}

export function teoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionReturnCustomPageActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionReturnCustomPageActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionReturnCustomPageActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_page_id: cdktf.stringToTerraform(struct!.errorPageId),
    response_code: cdktf.stringToTerraform(struct!.responseCode),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionReturnCustomPageActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionReturnCustomPageActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionReturnCustomPageActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_page_id: {
      value: cdktf.stringToHclTerraform(struct!.errorPageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.stringToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionReturnCustomPageActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionReturnCustomPageActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorPageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorPageId = this._errorPageId;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionReturnCustomPageActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorPageId = undefined;
      this._responseCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorPageId = value.errorPageId;
      this._responseCode = value.responseCode;
    }
  }

  // error_page_id - computed: false, optional: false, required: true
  private _errorPageId?: string; 
  public get errorPageId() {
    return this.getStringAttribute('error_page_id');
  }
  public set errorPageId(value: string) {
    this._errorPageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPageIdInput() {
    return this._errorPageId;
  }

  // response_code - computed: false, optional: false, required: true
  private _responseCode?: string; 
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
  public set responseCode(value: string) {
    this._responseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesAction {
  /**
  * Specific actions for safe execution. valid values:.
  * <li>Deny: block</li> <li>Monitor: Monitor</li> <li>ReturnCustomPage: use specified page to block</li> <li>Redirect: Redirect to URL</li> <li>BlockIP: IP block</li> <li>JSChallenge: JavaScript challenge</li> <li>ManagedChallenge: managed challenge</li> <li>Disabled: Disabled</li> <li>Allow: Allow</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#name TeoSecurityPolicyConfig#name}
  */
  readonly name: string;
  /**
  * block_ip_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#block_ip_action_parameters TeoSecurityPolicyConfig#block_ip_action_parameters}
  */
  readonly blockIpActionParameters?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionBlockIpActionParameters;
  /**
  * redirect_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#redirect_action_parameters TeoSecurityPolicyConfig#redirect_action_parameters}
  */
  readonly redirectActionParameters?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionRedirectActionParameters;
  /**
  * return_custom_page_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#return_custom_page_action_parameters TeoSecurityPolicyConfig#return_custom_page_action_parameters}
  */
  readonly returnCustomPageActionParameters?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionReturnCustomPageActionParameters;
}

export function teoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionOutputReference | TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    block_ip_action_parameters: teoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionBlockIpActionParametersToTerraform(struct!.blockIpActionParameters),
    redirect_action_parameters: teoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionRedirectActionParametersToTerraform(struct!.redirectActionParameters),
    return_custom_page_action_parameters: teoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionReturnCustomPageActionParametersToTerraform(struct!.returnCustomPageActionParameters),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionOutputReference | TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_ip_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionBlockIpActionParametersToHclTerraform(struct!.blockIpActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionBlockIpActionParametersList",
    },
    redirect_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionRedirectActionParametersToHclTerraform(struct!.redirectActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionRedirectActionParametersList",
    },
    return_custom_page_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionReturnCustomPageActionParametersToHclTerraform(struct!.returnCustomPageActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionReturnCustomPageActionParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._blockIpActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIpActionParameters = this._blockIpActionParameters?.internalValue;
    }
    if (this._redirectActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectActionParameters = this._redirectActionParameters?.internalValue;
    }
    if (this._returnCustomPageActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnCustomPageActionParameters = this._returnCustomPageActionParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._blockIpActionParameters.internalValue = undefined;
      this._redirectActionParameters.internalValue = undefined;
      this._returnCustomPageActionParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._blockIpActionParameters.internalValue = value.blockIpActionParameters;
      this._redirectActionParameters.internalValue = value.redirectActionParameters;
      this._returnCustomPageActionParameters.internalValue = value.returnCustomPageActionParameters;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // block_ip_action_parameters - computed: false, optional: true, required: false
  private _blockIpActionParameters = new TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionBlockIpActionParametersOutputReference(this, "block_ip_action_parameters");
  public get blockIpActionParameters() {
    return this._blockIpActionParameters;
  }
  public putBlockIpActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionBlockIpActionParameters) {
    this._blockIpActionParameters.internalValue = value;
  }
  public resetBlockIpActionParameters() {
    this._blockIpActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpActionParametersInput() {
    return this._blockIpActionParameters.internalValue;
  }

  // redirect_action_parameters - computed: false, optional: true, required: false
  private _redirectActionParameters = new TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionRedirectActionParametersOutputReference(this, "redirect_action_parameters");
  public get redirectActionParameters() {
    return this._redirectActionParameters;
  }
  public putRedirectActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionRedirectActionParameters) {
    this._redirectActionParameters.internalValue = value;
  }
  public resetRedirectActionParameters() {
    this._redirectActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectActionParametersInput() {
    return this._redirectActionParameters.internalValue;
  }

  // return_custom_page_action_parameters - computed: false, optional: true, required: false
  private _returnCustomPageActionParameters = new TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionReturnCustomPageActionParametersOutputReference(this, "return_custom_page_action_parameters");
  public get returnCustomPageActionParameters() {
    return this._returnCustomPageActionParameters;
  }
  public putReturnCustomPageActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionReturnCustomPageActionParameters) {
    this._returnCustomPageActionParameters.internalValue = value;
  }
  public resetReturnCustomPageActionParameters() {
    this._returnCustomPageActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnCustomPageActionParametersInput() {
    return this._returnCustomPageActionParameters.internalValue;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyCustomRulesRules {
  /**
  * The specific content of the custom rule must comply with the expression grammar. please refer to the product document for detailed specifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#condition TeoSecurityPolicyConfig#condition}
  */
  readonly condition: string;
  /**
  * Indicates whether the custom rule is enabled. valid values: <li>on: enabled</li> <li>off: disabled</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#enabled TeoSecurityPolicyConfig#enabled}
  */
  readonly enabled: string;
  /**
  * The ID of a custom rule. <br> the rule ID supports different rule configuration operations: <br> - add a new rule: ID is empty or the ID parameter is not specified; <br> - modify an existing rule: specify the rule ID that needs to be updated/modified; <br> - delete an existing rule: existing Rules not included in the Rules list of the CustomRules parameter will be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#id TeoSecurityPolicyConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the custom rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#name TeoSecurityPolicyConfig#name}
  */
  readonly name: string;
  /**
  * Customizes the priority of rules. value range: 0-100. it defaults to 0. only supports `rule_type` is `PreciseMatchRule`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#priority TeoSecurityPolicyConfig#priority}
  */
  readonly priority?: number;
  /**
  * Type of custom rule. valid values: <li>BasicAccessRule: basic access control;</li> <li>PreciseMatchRule: exact matching rule, default;</li> <li>ManagedAccessRule: expert customized rule, for output only.</li> the default value is PreciseMatchRule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#rule_type TeoSecurityPolicyConfig#rule_type}
  */
  readonly ruleType?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#action TeoSecurityPolicyConfig#action}
  */
  readonly action: TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesAction;
}

export function teoSecurityPolicyConfigSecurityPolicyCustomRulesRulesToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
    action: teoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionToTerraform(struct!.action),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyCustomRulesRulesToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: teoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyCustomRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._ruleType = undefined;
      this._action.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._enabled = value.enabled;
      this._id = value.id;
      this._name = value.name;
      this._priority = value.priority;
      this._ruleType = value.ruleType;
      this._action.internalValue = value.action;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rule_type - computed: false, optional: true, required: false
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  public resetRuleType() {
    this._ruleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // action - computed: false, optional: false, required: true
  private _action = new TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }
}

export class TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesList extends cdktf.ComplexList {
  public internalValue? : TeoSecurityPolicyConfigSecurityPolicyCustomRulesRules[] | cdktf.IResolvable

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
  public get(index: number): TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesOutputReference {
    return new TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyCustomRules {
  /**
  * basic_access_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#basic_access_rules TeoSecurityPolicyConfig#basic_access_rules}
  */
  readonly basicAccessRules?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRules[] | cdktf.IResolvable;
  /**
  * precise_match_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#precise_match_rules TeoSecurityPolicyConfig#precise_match_rules}
  */
  readonly preciseMatchRules?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRules[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#rules TeoSecurityPolicyConfig#rules}
  */
  readonly rules?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesRules[] | cdktf.IResolvable;
}

export function teoSecurityPolicyConfigSecurityPolicyCustomRulesToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesOutputReference | TeoSecurityPolicyConfigSecurityPolicyCustomRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_access_rules: cdktf.listMapper(teoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesToTerraform, true)(struct!.basicAccessRules),
    precise_match_rules: cdktf.listMapper(teoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesToTerraform, true)(struct!.preciseMatchRules),
    rules: cdktf.listMapper(teoSecurityPolicyConfigSecurityPolicyCustomRulesRulesToTerraform, true)(struct!.rules),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyCustomRulesToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyCustomRulesOutputReference | TeoSecurityPolicyConfigSecurityPolicyCustomRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_access_rules: {
      value: cdktf.listMapperHcl(teoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesToHclTerraform, true)(struct!.basicAccessRules),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesList",
    },
    precise_match_rules: {
      value: cdktf.listMapperHcl(teoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesToHclTerraform, true)(struct!.preciseMatchRules),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesList",
    },
    rules: {
      value: cdktf.listMapperHcl(teoSecurityPolicyConfigSecurityPolicyCustomRulesRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyCustomRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyCustomRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAccessRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAccessRules = this._basicAccessRules?.internalValue;
    }
    if (this._preciseMatchRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preciseMatchRules = this._preciseMatchRules?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyCustomRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basicAccessRules.internalValue = undefined;
      this._preciseMatchRules.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basicAccessRules.internalValue = value.basicAccessRules;
      this._preciseMatchRules.internalValue = value.preciseMatchRules;
      this._rules.internalValue = value.rules;
    }
  }

  // basic_access_rules - computed: false, optional: true, required: false
  private _basicAccessRules = new TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRulesList(this, "basic_access_rules", false);
  public get basicAccessRules() {
    return this._basicAccessRules;
  }
  public putBasicAccessRules(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesBasicAccessRules[] | cdktf.IResolvable) {
    this._basicAccessRules.internalValue = value;
  }
  public resetBasicAccessRules() {
    this._basicAccessRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAccessRulesInput() {
    return this._basicAccessRules.internalValue;
  }

  // precise_match_rules - computed: false, optional: true, required: false
  private _preciseMatchRules = new TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRulesList(this, "precise_match_rules", false);
  public get preciseMatchRules() {
    return this._preciseMatchRules;
  }
  public putPreciseMatchRules(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesPreciseMatchRules[] | cdktf.IResolvable) {
    this._preciseMatchRules.internalValue = value;
  }
  public resetPreciseMatchRules() {
    this._preciseMatchRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preciseMatchRulesInput() {
    return this._preciseMatchRules.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new TeoSecurityPolicyConfigSecurityPolicyCustomRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: TeoSecurityPolicyConfigSecurityPolicyCustomRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesRequestFieldsForException {
  /**
  * The expression of the specific field to be skipped must conform to the expression syntax. <br />
  * Condition supports expression configuration syntax: <li> Written according to the matching condition expression syntax of the rule, supporting references to key and value. </li>.<li> Supports in, like operators, and and logical combinations. </li>.
  * For example: <li>${key} in ['x-trace-id']: parameter name is equal to x-trace-id. </li>.<li>${key} in ['x-trace-id'] and ${value} like ['Bearer *']: parameter name is equal to x-trace-id and the parameter value wildcard matches Bearer *. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#condition TeoSecurityPolicyConfig#condition}
  */
  readonly condition: string;
  /**
  * Specific fields to skip. Supported values:<br/>
  * <li>body.json: JSON request content; in this case, Condition supports key and value, and TargetField supports key and value, for example, { "Scope": "body.json", "Condition": "", "TargetField": "key" }, which means that all parameters of JSON request content skip WAF scanning;</li>
  * <li style="margin-top:5px">cookie: Cookie; in this case, Condition supports key and value, and TargetField supports key and value, for example, { "Scope": "cookie", "Condition": "${key} in ['account-id'] and ${value} like ['prefix-*']", "TargetField": "value" }, which means that the Cookie parameter name is equal to account-id and the parameter value wildcard matches prefix-* to skip WAF scanning;</li>
  * <li style="margin-top:5px">header: HTTP header parameter; Condition supports key and value, TargetField supports key and value, for example { "Scope": "header", "Condition": "${key} like ['x-auth-*']", "TargetField": "value" }, which means that the header parameter name wildcard matches x-auth-* and skips WAF scanning; </li>
  * <li style="margin-top:5px">uri.query: URL encoded content/query parameter; Condition supports key and value, TargetField supports key and value, for example { "Scope": "uri.query", "Condition": "${key} in ['action'] and ${value} in ['upload', 'delete']", "TargetField": "value" }, which means that the parameter name of the URL encoded content/query parameter is equal to action And the parameter value is equal to upload or delete to skip WAF scanning;</li>
  * <li style="margin-top:5px">uri: request path URI; in this case, Condition must be empty, TargetField supports query, path, fullpath, for example, { "Scope": "uri", "Condition": "", "TargetField": "query" }, indicating that the request path URI only query parameters skip WAF scanning;</li>
  * <li style="margin-top:5px">body: request body content. In this case, Condition must be empty, TargetField supports fullbody and multipart, for example, { "Scope": "body", "Condition": "", "TargetField": "fullbody" }, indicating that the request body content is the complete request body and skips WAF scanning;</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#scope TeoSecurityPolicyConfig#scope}
  */
  readonly scope: string;
  /**
  * When the Scope parameter uses different values, the supported values in the TargetField expression are as follows:
  * <li> body.json: supports key and value</li>
  * <li> cookie: supports key and value</li>
  * <li> header: supports key and value</li>
  * <li> uri.query: supports key and value</li>
  * <li> uri: supports path, query and fullpath</li>
  * <li> body: supports fullbody and multipart</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#target_field TeoSecurityPolicyConfig#target_field}
  */
  readonly targetField: string;
}

export function teoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesRequestFieldsForExceptionToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesRequestFieldsForException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    scope: cdktf.stringToTerraform(struct!.scope),
    target_field: cdktf.stringToTerraform(struct!.targetField),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesRequestFieldsForExceptionToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesRequestFieldsForException | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_field: {
      value: cdktf.stringToHclTerraform(struct!.targetField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesRequestFieldsForExceptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesRequestFieldsForException | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._targetField !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetField = this._targetField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesRequestFieldsForException | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._scope = undefined;
      this._targetField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._scope = value.scope;
      this._targetField = value.targetField;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // target_field - computed: false, optional: false, required: true
  private _targetField?: string; 
  public get targetField() {
    return this.getStringAttribute('target_field');
  }
  public set targetField(value: string) {
    this._targetField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFieldInput() {
    return this._targetField;
  }
}

export class TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesRequestFieldsForExceptionList extends cdktf.ComplexList {
  public internalValue? : TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesRequestFieldsForException[] | cdktf.IResolvable

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
  public get(index: number): TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesRequestFieldsForExceptionOutputReference {
    return new TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesRequestFieldsForExceptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRules {
  /**
  * The specific content of the exception rule must comply with the expression syntax. For detailed specifications, see the product documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#condition TeoSecurityPolicyConfig#condition}
  */
  readonly condition?: string;
  /**
  * Whether the exception rule is enabled. The values are: <li>on: enabled</li><li>off: disabled</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#enabled TeoSecurityPolicyConfig#enabled}
  */
  readonly enabled?: string;
  /**
  * The ID of the exception rule. <br>The rule ID can support different rule configuration operations: <br> <li> <b>Add</b> a new rule: the ID is empty or the ID parameter is not specified; </li><li> <b>Modify</b> an existing rule: specify the rule ID to be updated/modified; </li><li> <b>Delete</b> an existing rule: in the ExceptionRules parameter, the existing rules not included in the Rules list will be deleted. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#id TeoSecurityPolicyConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the managed rule group for the exception rule. This is only valid when SkipScope is ManagedRules and ManagedRulesForException cannot be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#managed_rule_groups_for_exception TeoSecurityPolicyConfig#managed_rule_groups_for_exception}
  */
  readonly managedRuleGroupsForException?: string[];
  /**
  * Specifies the specific managed rule for the exception rule. This is only valid when SkipScope is ManagedRules and ManagedRuleGroupsForException cannot be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#managed_rules_for_exception TeoSecurityPolicyConfig#managed_rules_for_exception}
  */
  readonly managedRulesForException?: string[];
  /**
  * The name of the exception rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#name TeoSecurityPolicyConfig#name}
  */
  readonly name?: string;
  /**
  * The specific type of the skipped request. The possible values are: <li>SkipOnAllRequestFields: skip all requests; </li><li>SkipOnSpecifiedRequestFields: skip specified request fields. </li>. This option is only valid when SkipScope is ManagedRules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#skip_option TeoSecurityPolicyConfig#skip_option}
  */
  readonly skipOption?: string;
  /**
  * Exception rule execution options, the values are: <li>WebSecurityModules: Specifies the security protection module for the exception rule. </li>.<li>ManagedRules: Specifies the managed rules. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#skip_scope TeoSecurityPolicyConfig#skip_scope}
  */
  readonly skipScope?: string;
  /**
  * Specifies the security protection module for the exception rule. It is valid only when SkipScope is WebSecurityModules. The possible values are: <li>websec-mod-managed-rules: managed rules; </li><li>websec-mod-rate-limiting: rate limiting; </li><li>websec-mod-custom-rules: custom rules; </li><li>websec-mod-adaptive-control: adaptive frequency control, intelligent client filtering, slow attack protection, traffic theft protection; </li><li>websec-mod-bot: Bot management. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#web_security_modules_for_exception TeoSecurityPolicyConfig#web_security_modules_for_exception}
  */
  readonly webSecurityModulesForException?: string[];
  /**
  * request_fields_for_exception block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#request_fields_for_exception TeoSecurityPolicyConfig#request_fields_for_exception}
  */
  readonly requestFieldsForException?: TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesRequestFieldsForException[] | cdktf.IResolvable;
}

export function teoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    managed_rule_groups_for_exception: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.managedRuleGroupsForException),
    managed_rules_for_exception: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.managedRulesForException),
    name: cdktf.stringToTerraform(struct!.name),
    skip_option: cdktf.stringToTerraform(struct!.skipOption),
    skip_scope: cdktf.stringToTerraform(struct!.skipScope),
    web_security_modules_for_exception: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.webSecurityModulesForException),
    request_fields_for_exception: cdktf.listMapper(teoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesRequestFieldsForExceptionToTerraform, true)(struct!.requestFieldsForException),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_rule_groups_for_exception: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.managedRuleGroupsForException),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    managed_rules_for_exception: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.managedRulesForException),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_option: {
      value: cdktf.stringToHclTerraform(struct!.skipOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_scope: {
      value: cdktf.stringToHclTerraform(struct!.skipScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_security_modules_for_exception: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.webSecurityModulesForException),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    request_fields_for_exception: {
      value: cdktf.listMapperHcl(teoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesRequestFieldsForExceptionToHclTerraform, true)(struct!.requestFieldsForException),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesRequestFieldsForExceptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._managedRuleGroupsForException !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedRuleGroupsForException = this._managedRuleGroupsForException;
    }
    if (this._managedRulesForException !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedRulesForException = this._managedRulesForException;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._skipOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipOption = this._skipOption;
    }
    if (this._skipScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipScope = this._skipScope;
    }
    if (this._webSecurityModulesForException !== undefined) {
      hasAnyValues = true;
      internalValueResult.webSecurityModulesForException = this._webSecurityModulesForException;
    }
    if (this._requestFieldsForException?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestFieldsForException = this._requestFieldsForException?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._managedRuleGroupsForException = undefined;
      this._managedRulesForException = undefined;
      this._name = undefined;
      this._skipOption = undefined;
      this._skipScope = undefined;
      this._webSecurityModulesForException = undefined;
      this._requestFieldsForException.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._enabled = value.enabled;
      this._id = value.id;
      this._managedRuleGroupsForException = value.managedRuleGroupsForException;
      this._managedRulesForException = value.managedRulesForException;
      this._name = value.name;
      this._skipOption = value.skipOption;
      this._skipScope = value.skipScope;
      this._webSecurityModulesForException = value.webSecurityModulesForException;
      this._requestFieldsForException.internalValue = value.requestFieldsForException;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // managed_rule_groups_for_exception - computed: false, optional: true, required: false
  private _managedRuleGroupsForException?: string[]; 
  public get managedRuleGroupsForException() {
    return cdktf.Fn.tolist(this.getListAttribute('managed_rule_groups_for_exception'));
  }
  public set managedRuleGroupsForException(value: string[]) {
    this._managedRuleGroupsForException = value;
  }
  public resetManagedRuleGroupsForException() {
    this._managedRuleGroupsForException = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedRuleGroupsForExceptionInput() {
    return this._managedRuleGroupsForException;
  }

  // managed_rules_for_exception - computed: false, optional: true, required: false
  private _managedRulesForException?: string[]; 
  public get managedRulesForException() {
    return cdktf.Fn.tolist(this.getListAttribute('managed_rules_for_exception'));
  }
  public set managedRulesForException(value: string[]) {
    this._managedRulesForException = value;
  }
  public resetManagedRulesForException() {
    this._managedRulesForException = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedRulesForExceptionInput() {
    return this._managedRulesForException;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // skip_option - computed: false, optional: true, required: false
  private _skipOption?: string; 
  public get skipOption() {
    return this.getStringAttribute('skip_option');
  }
  public set skipOption(value: string) {
    this._skipOption = value;
  }
  public resetSkipOption() {
    this._skipOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipOptionInput() {
    return this._skipOption;
  }

  // skip_scope - computed: false, optional: true, required: false
  private _skipScope?: string; 
  public get skipScope() {
    return this.getStringAttribute('skip_scope');
  }
  public set skipScope(value: string) {
    this._skipScope = value;
  }
  public resetSkipScope() {
    this._skipScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipScopeInput() {
    return this._skipScope;
  }

  // web_security_modules_for_exception - computed: false, optional: true, required: false
  private _webSecurityModulesForException?: string[]; 
  public get webSecurityModulesForException() {
    return cdktf.Fn.tolist(this.getListAttribute('web_security_modules_for_exception'));
  }
  public set webSecurityModulesForException(value: string[]) {
    this._webSecurityModulesForException = value;
  }
  public resetWebSecurityModulesForException() {
    this._webSecurityModulesForException = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSecurityModulesForExceptionInput() {
    return this._webSecurityModulesForException;
  }

  // request_fields_for_exception - computed: false, optional: true, required: false
  private _requestFieldsForException = new TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesRequestFieldsForExceptionList(this, "request_fields_for_exception", false);
  public get requestFieldsForException() {
    return this._requestFieldsForException;
  }
  public putRequestFieldsForException(value: TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesRequestFieldsForException[] | cdktf.IResolvable) {
    this._requestFieldsForException.internalValue = value;
  }
  public resetRequestFieldsForException() {
    this._requestFieldsForException.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestFieldsForExceptionInput() {
    return this._requestFieldsForException.internalValue;
  }
}

export class TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesList extends cdktf.ComplexList {
  public internalValue? : TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRules[] | cdktf.IResolvable

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
  public get(index: number): TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesOutputReference {
    return new TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyExceptionRules {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#rules TeoSecurityPolicyConfig#rules}
  */
  readonly rules?: TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRules[] | cdktf.IResolvable;
}

export function teoSecurityPolicyConfigSecurityPolicyExceptionRulesToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyExceptionRulesOutputReference | TeoSecurityPolicyConfigSecurityPolicyExceptionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(teoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesToTerraform, true)(struct!.rules),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyExceptionRulesToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyExceptionRulesOutputReference | TeoSecurityPolicyConfigSecurityPolicyExceptionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(teoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyExceptionRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyExceptionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyExceptionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: TeoSecurityPolicyConfigSecurityPolicyExceptionRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionBlockIpActionParameters {
  /**
  * The penalty duration for banning an IP. Supported units are: <li>s: seconds, value range 1 to 120; </li><li>m: minutes, value range 1 to 120; </li><li>h: hours, value range 1 to 48. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#duration TeoSecurityPolicyConfig#duration}
  */
  readonly duration: string;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionBlockIpActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionBlockIpActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionBlockIpActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionBlockIpActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionBlockIpActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionBlockIpActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionBlockIpActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionBlockIpActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionBlockIpActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionChallengeActionParameters {
  /**
  * Client authentication method ID. This field is required when Name is InterstitialChallenge/InlineChallenge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#attester_id TeoSecurityPolicyConfig#attester_id}
  */
  readonly attesterId?: string;
  /**
  * The specific challenge action to be executed safely. The possible values are: <li> InterstitialChallenge: interstitial challenge; </li><li> InlineChallenge: embedded challenge; </li><li> JSChallenge: JavaScript challenge; </li><li> ManagedChallenge: managed challenge. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#challenge_option TeoSecurityPolicyConfig#challenge_option}
  */
  readonly challengeOption: string;
  /**
  * The time interval for repeating the challenge. When Name is InterstitialChallenge/InlineChallenge, this field is required. The default value is 300s. Supported units are: <li>s: seconds, value range 1 to 60; </li><li>m: minutes, value range 1 to 60; </li><li>h: hours, value range 1 to 24. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#interval TeoSecurityPolicyConfig#interval}
  */
  readonly interval?: string;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionChallengeActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionChallengeActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionChallengeActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attester_id: cdktf.stringToTerraform(struct!.attesterId),
    challenge_option: cdktf.stringToTerraform(struct!.challengeOption),
    interval: cdktf.stringToTerraform(struct!.interval),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionChallengeActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionChallengeActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionChallengeActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attester_id: {
      value: cdktf.stringToHclTerraform(struct!.attesterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    challenge_option: {
      value: cdktf.stringToHclTerraform(struct!.challengeOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionChallengeActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionChallengeActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attesterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.attesterId = this._attesterId;
    }
    if (this._challengeOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeOption = this._challengeOption;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionChallengeActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attesterId = undefined;
      this._challengeOption = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attesterId = value.attesterId;
      this._challengeOption = value.challengeOption;
      this._interval = value.interval;
    }
  }

  // attester_id - computed: false, optional: true, required: false
  private _attesterId?: string; 
  public get attesterId() {
    return this.getStringAttribute('attester_id');
  }
  public set attesterId(value: string) {
    this._attesterId = value;
  }
  public resetAttesterId() {
    this._attesterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attesterIdInput() {
    return this._attesterId;
  }

  // challenge_option - computed: false, optional: false, required: true
  private _challengeOption?: string; 
  public get challengeOption() {
    return this.getStringAttribute('challenge_option');
  }
  public set challengeOption(value: string) {
    this._challengeOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeOptionInput() {
    return this._challengeOption;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionDenyActionParameters {
  /**
  * Whether to extend the blocking of source IP. The possible values are:
  * <li>on: on;</li>
  * <li>off: off.</li>
  * When enabled, the client IP that triggers the rule will be blocked continuously. When this option is enabled, the BlockIpDuration parameter must be specified at the same time.
  * Note: This option cannot be enabled at the same time as the ReturnCustomPage or Stall options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#block_ip TeoSecurityPolicyConfig#block_ip}
  */
  readonly blockIp?: string;
  /**
  * When BlockIP is on, the IP blocking duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#block_ip_duration TeoSecurityPolicyConfig#block_ip_duration}
  */
  readonly blockIpDuration?: string;
  /**
  * The PageId of the custom page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#error_page_id TeoSecurityPolicyConfig#error_page_id}
  */
  readonly errorPageId?: string;
  /**
  * Customize the status code of the page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#response_code TeoSecurityPolicyConfig#response_code}
  */
  readonly responseCode?: string;
  /**
  * Whether to use custom pages. The possible values are:
  * <li>on: on;</li>
  * <li>off: off.</li>
  * After enabling, use custom page content to intercept (respond to) requests. When enabling this option, you must specify the ResponseCode and ErrorPageId parameters at the same time.
  * Note: This option cannot be enabled at the same time as the BlockIp or Stall options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#return_custom_page TeoSecurityPolicyConfig#return_custom_page}
  */
  readonly returnCustomPage?: string;
  /**
  * Whether to ignore the request source suspension. The value is:
  * <li>on: Enable;</li>
  * <li>off: Disable.</li>
  * After enabling, it will no longer respond to requests in the current connection session and will not actively disconnect. It is used to fight against crawlers and consume client connection resources.
  * Note: This option cannot be enabled at the same time as the BlockIp or ReturnCustomPage options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#stall TeoSecurityPolicyConfig#stall}
  */
  readonly stall?: string;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionDenyActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionDenyActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionDenyActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_ip: cdktf.stringToTerraform(struct!.blockIp),
    block_ip_duration: cdktf.stringToTerraform(struct!.blockIpDuration),
    error_page_id: cdktf.stringToTerraform(struct!.errorPageId),
    response_code: cdktf.stringToTerraform(struct!.responseCode),
    return_custom_page: cdktf.stringToTerraform(struct!.returnCustomPage),
    stall: cdktf.stringToTerraform(struct!.stall),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionDenyActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionDenyActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionDenyActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_ip: {
      value: cdktf.stringToHclTerraform(struct!.blockIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_ip_duration: {
      value: cdktf.stringToHclTerraform(struct!.blockIpDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_page_id: {
      value: cdktf.stringToHclTerraform(struct!.errorPageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.stringToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    return_custom_page: {
      value: cdktf.stringToHclTerraform(struct!.returnCustomPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stall: {
      value: cdktf.stringToHclTerraform(struct!.stall),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionDenyActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionDenyActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIp = this._blockIp;
    }
    if (this._blockIpDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIpDuration = this._blockIpDuration;
    }
    if (this._errorPageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorPageId = this._errorPageId;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    if (this._returnCustomPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnCustomPage = this._returnCustomPage;
    }
    if (this._stall !== undefined) {
      hasAnyValues = true;
      internalValueResult.stall = this._stall;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionDenyActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockIp = undefined;
      this._blockIpDuration = undefined;
      this._errorPageId = undefined;
      this._responseCode = undefined;
      this._returnCustomPage = undefined;
      this._stall = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockIp = value.blockIp;
      this._blockIpDuration = value.blockIpDuration;
      this._errorPageId = value.errorPageId;
      this._responseCode = value.responseCode;
      this._returnCustomPage = value.returnCustomPage;
      this._stall = value.stall;
    }
  }

  // block_ip - computed: false, optional: true, required: false
  private _blockIp?: string; 
  public get blockIp() {
    return this.getStringAttribute('block_ip');
  }
  public set blockIp(value: string) {
    this._blockIp = value;
  }
  public resetBlockIp() {
    this._blockIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpInput() {
    return this._blockIp;
  }

  // block_ip_duration - computed: false, optional: true, required: false
  private _blockIpDuration?: string; 
  public get blockIpDuration() {
    return this.getStringAttribute('block_ip_duration');
  }
  public set blockIpDuration(value: string) {
    this._blockIpDuration = value;
  }
  public resetBlockIpDuration() {
    this._blockIpDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpDurationInput() {
    return this._blockIpDuration;
  }

  // error_page_id - computed: false, optional: true, required: false
  private _errorPageId?: string; 
  public get errorPageId() {
    return this.getStringAttribute('error_page_id');
  }
  public set errorPageId(value: string) {
    this._errorPageId = value;
  }
  public resetErrorPageId() {
    this._errorPageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPageIdInput() {
    return this._errorPageId;
  }

  // response_code - computed: false, optional: true, required: false
  private _responseCode?: string; 
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
  public set responseCode(value: string) {
    this._responseCode = value;
  }
  public resetResponseCode() {
    this._responseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }

  // return_custom_page - computed: false, optional: true, required: false
  private _returnCustomPage?: string; 
  public get returnCustomPage() {
    return this.getStringAttribute('return_custom_page');
  }
  public set returnCustomPage(value: string) {
    this._returnCustomPage = value;
  }
  public resetReturnCustomPage() {
    this._returnCustomPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnCustomPageInput() {
    return this._returnCustomPage;
  }

  // stall - computed: false, optional: true, required: false
  private _stall?: string; 
  public get stall() {
    return this.getStringAttribute('stall');
  }
  public set stall(value: string) {
    this._stall = value;
  }
  public resetStall() {
    this._stall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stallInput() {
    return this._stall;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionRedirectActionParameters {
  /**
  * The URL to redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#url TeoSecurityPolicyConfig#url}
  */
  readonly url: string;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionRedirectActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionRedirectActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionRedirectActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionRedirectActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionRedirectActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionRedirectActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionRedirectActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionRedirectActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionRedirectActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionReturnCustomPageActionParameters {
  /**
  * The custom page ID of the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#error_page_id TeoSecurityPolicyConfig#error_page_id}
  */
  readonly errorPageId: string;
  /**
  * Response status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#response_code TeoSecurityPolicyConfig#response_code}
  */
  readonly responseCode: string;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionReturnCustomPageActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionReturnCustomPageActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionReturnCustomPageActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_page_id: cdktf.stringToTerraform(struct!.errorPageId),
    response_code: cdktf.stringToTerraform(struct!.responseCode),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionReturnCustomPageActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionReturnCustomPageActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionReturnCustomPageActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_page_id: {
      value: cdktf.stringToHclTerraform(struct!.errorPageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.stringToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionReturnCustomPageActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionReturnCustomPageActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorPageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorPageId = this._errorPageId;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionReturnCustomPageActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorPageId = undefined;
      this._responseCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorPageId = value.errorPageId;
      this._responseCode = value.responseCode;
    }
  }

  // error_page_id - computed: false, optional: false, required: true
  private _errorPageId?: string; 
  public get errorPageId() {
    return this.getStringAttribute('error_page_id');
  }
  public set errorPageId(value: string) {
    this._errorPageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPageIdInput() {
    return this._errorPageId;
  }

  // response_code - computed: false, optional: false, required: true
  private _responseCode?: string; 
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
  public set responseCode(value: string) {
    this._responseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlAction {
  /**
  * The specific action of security execution. The values are:
  * <li>Deny: intercept, block the request to access site resources;</li>
  * <li>Monitor: observe, only record logs;</li>
  * <li>Redirect: redirect to URL;</li>
  * <li>Disabled: disabled, do not enable the specified rule;</li>
  * <li>Allow: allow access, but delay processing requests;</li>
  * <li>Challenge: challenge, respond to challenge content;</li>
  * <li>BlockIP: to be abandoned, IP ban;</li>
  * <li>ReturnCustomPage: to be abandoned, use the specified page to intercept;</li>
  * <li>JSChallenge: to be abandoned, JavaScript challenge;</li>
  * <li>ManagedChallenge: to be abandoned, managed challenge.</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#name TeoSecurityPolicyConfig#name}
  */
  readonly name: string;
  /**
  * block_ip_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#block_ip_action_parameters TeoSecurityPolicyConfig#block_ip_action_parameters}
  */
  readonly blockIpActionParameters?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionBlockIpActionParameters;
  /**
  * challenge_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#challenge_action_parameters TeoSecurityPolicyConfig#challenge_action_parameters}
  */
  readonly challengeActionParameters?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionChallengeActionParameters;
  /**
  * deny_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#deny_action_parameters TeoSecurityPolicyConfig#deny_action_parameters}
  */
  readonly denyActionParameters?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionDenyActionParameters;
  /**
  * redirect_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#redirect_action_parameters TeoSecurityPolicyConfig#redirect_action_parameters}
  */
  readonly redirectActionParameters?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionRedirectActionParameters;
  /**
  * return_custom_page_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#return_custom_page_action_parameters TeoSecurityPolicyConfig#return_custom_page_action_parameters}
  */
  readonly returnCustomPageActionParameters?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionReturnCustomPageActionParameters;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    block_ip_action_parameters: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionBlockIpActionParametersToTerraform(struct!.blockIpActionParameters),
    challenge_action_parameters: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionChallengeActionParametersToTerraform(struct!.challengeActionParameters),
    deny_action_parameters: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionDenyActionParametersToTerraform(struct!.denyActionParameters),
    redirect_action_parameters: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionRedirectActionParametersToTerraform(struct!.redirectActionParameters),
    return_custom_page_action_parameters: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionReturnCustomPageActionParametersToTerraform(struct!.returnCustomPageActionParameters),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_ip_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionBlockIpActionParametersToHclTerraform(struct!.blockIpActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionBlockIpActionParametersList",
    },
    challenge_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionChallengeActionParametersToHclTerraform(struct!.challengeActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionChallengeActionParametersList",
    },
    deny_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionDenyActionParametersToHclTerraform(struct!.denyActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionDenyActionParametersList",
    },
    redirect_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionRedirectActionParametersToHclTerraform(struct!.redirectActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionRedirectActionParametersList",
    },
    return_custom_page_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionReturnCustomPageActionParametersToHclTerraform(struct!.returnCustomPageActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionReturnCustomPageActionParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._blockIpActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIpActionParameters = this._blockIpActionParameters?.internalValue;
    }
    if (this._challengeActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeActionParameters = this._challengeActionParameters?.internalValue;
    }
    if (this._denyActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyActionParameters = this._denyActionParameters?.internalValue;
    }
    if (this._redirectActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectActionParameters = this._redirectActionParameters?.internalValue;
    }
    if (this._returnCustomPageActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnCustomPageActionParameters = this._returnCustomPageActionParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._blockIpActionParameters.internalValue = undefined;
      this._challengeActionParameters.internalValue = undefined;
      this._denyActionParameters.internalValue = undefined;
      this._redirectActionParameters.internalValue = undefined;
      this._returnCustomPageActionParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._blockIpActionParameters.internalValue = value.blockIpActionParameters;
      this._challengeActionParameters.internalValue = value.challengeActionParameters;
      this._denyActionParameters.internalValue = value.denyActionParameters;
      this._redirectActionParameters.internalValue = value.redirectActionParameters;
      this._returnCustomPageActionParameters.internalValue = value.returnCustomPageActionParameters;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // block_ip_action_parameters - computed: false, optional: true, required: false
  private _blockIpActionParameters = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionBlockIpActionParametersOutputReference(this, "block_ip_action_parameters");
  public get blockIpActionParameters() {
    return this._blockIpActionParameters;
  }
  public putBlockIpActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionBlockIpActionParameters) {
    this._blockIpActionParameters.internalValue = value;
  }
  public resetBlockIpActionParameters() {
    this._blockIpActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpActionParametersInput() {
    return this._blockIpActionParameters.internalValue;
  }

  // challenge_action_parameters - computed: false, optional: true, required: false
  private _challengeActionParameters = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionChallengeActionParametersOutputReference(this, "challenge_action_parameters");
  public get challengeActionParameters() {
    return this._challengeActionParameters;
  }
  public putChallengeActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionChallengeActionParameters) {
    this._challengeActionParameters.internalValue = value;
  }
  public resetChallengeActionParameters() {
    this._challengeActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeActionParametersInput() {
    return this._challengeActionParameters.internalValue;
  }

  // deny_action_parameters - computed: false, optional: true, required: false
  private _denyActionParameters = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionDenyActionParametersOutputReference(this, "deny_action_parameters");
  public get denyActionParameters() {
    return this._denyActionParameters;
  }
  public putDenyActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionDenyActionParameters) {
    this._denyActionParameters.internalValue = value;
  }
  public resetDenyActionParameters() {
    this._denyActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyActionParametersInput() {
    return this._denyActionParameters.internalValue;
  }

  // redirect_action_parameters - computed: false, optional: true, required: false
  private _redirectActionParameters = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionRedirectActionParametersOutputReference(this, "redirect_action_parameters");
  public get redirectActionParameters() {
    return this._redirectActionParameters;
  }
  public putRedirectActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionRedirectActionParameters) {
    this._redirectActionParameters.internalValue = value;
  }
  public resetRedirectActionParameters() {
    this._redirectActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectActionParametersInput() {
    return this._redirectActionParameters.internalValue;
  }

  // return_custom_page_action_parameters - computed: false, optional: true, required: false
  private _returnCustomPageActionParameters = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionReturnCustomPageActionParametersOutputReference(this, "return_custom_page_action_parameters");
  public get returnCustomPageActionParameters() {
    return this._returnCustomPageActionParameters;
  }
  public putReturnCustomPageActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionReturnCustomPageActionParameters) {
    this._returnCustomPageActionParameters.internalValue = value;
  }
  public resetReturnCustomPageActionParameters() {
    this._returnCustomPageActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnCustomPageActionParametersInput() {
    return this._returnCustomPageActionParameters.internalValue;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControl {
  /**
  * Whether adaptive frequency control is enabled. The possible values are: <li>on: enabled; </li><li>off: disabled. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#enabled TeoSecurityPolicyConfig#enabled}
  */
  readonly enabled: string;
  /**
  * The restriction level of adaptive frequency control. When Enabled is on, this field is required. The values are: <li>Loose: loose; </li><li>Moderate: moderate; </li><li>Strict: strict. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#sensitivity TeoSecurityPolicyConfig#sensitivity}
  */
  readonly sensitivity?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#action TeoSecurityPolicyConfig#action}
  */
  readonly action?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlAction;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.stringToTerraform(struct!.enabled),
    sensitivity: cdktf.stringToTerraform(struct!.sensitivity),
    action: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionToTerraform(struct!.action),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity: {
      value: cdktf.stringToHclTerraform(struct!.sensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._sensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivity = this._sensitivity;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._sensitivity = undefined;
      this._action.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._sensitivity = value.sensitivity;
      this._action.internalValue = value.action;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // sensitivity - computed: false, optional: true, required: false
  private _sensitivity?: string; 
  public get sensitivity() {
    return this.getStringAttribute('sensitivity');
  }
  public set sensitivity(value: string) {
    this._sensitivity = value;
  }
  public resetSensitivity() {
    this._sensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity;
  }

  // action - computed: false, optional: true, required: false
  private _action = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionBlockIpActionParameters {
  /**
  * The penalty duration for banning an IP. Supported units are: <li>s: seconds, value range 1 to 120; </li><li>m: minutes, value range 1 to 120; </li><li>h: hours, value range 1 to 48. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#duration TeoSecurityPolicyConfig#duration}
  */
  readonly duration: string;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionBlockIpActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionBlockIpActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionBlockIpActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionBlockIpActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionBlockIpActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionBlockIpActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionBlockIpActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionBlockIpActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionBlockIpActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionChallengeActionParameters {
  /**
  * Client authentication method ID. This field is required when Name is InterstitialChallenge/InlineChallenge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#attester_id TeoSecurityPolicyConfig#attester_id}
  */
  readonly attesterId?: string;
  /**
  * The specific challenge action to be executed safely. The possible values are: <li> InterstitialChallenge: interstitial challenge; </li><li> InlineChallenge: embedded challenge; </li><li> JSChallenge: JavaScript challenge; </li><li> ManagedChallenge: managed challenge. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#challenge_option TeoSecurityPolicyConfig#challenge_option}
  */
  readonly challengeOption: string;
  /**
  * The time interval for repeating the challenge. When Name is InterstitialChallenge/InlineChallenge, this field is required. The default value is 300s. Supported units are: <li>s: seconds, value range 1 to 60; </li><li>m: minutes, value range 1 to 60; </li><li>h: hours, value range 1 to 24. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#interval TeoSecurityPolicyConfig#interval}
  */
  readonly interval?: string;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionChallengeActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionChallengeActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionChallengeActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attester_id: cdktf.stringToTerraform(struct!.attesterId),
    challenge_option: cdktf.stringToTerraform(struct!.challengeOption),
    interval: cdktf.stringToTerraform(struct!.interval),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionChallengeActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionChallengeActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionChallengeActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attester_id: {
      value: cdktf.stringToHclTerraform(struct!.attesterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    challenge_option: {
      value: cdktf.stringToHclTerraform(struct!.challengeOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionChallengeActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionChallengeActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attesterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.attesterId = this._attesterId;
    }
    if (this._challengeOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeOption = this._challengeOption;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionChallengeActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attesterId = undefined;
      this._challengeOption = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attesterId = value.attesterId;
      this._challengeOption = value.challengeOption;
      this._interval = value.interval;
    }
  }

  // attester_id - computed: false, optional: true, required: false
  private _attesterId?: string; 
  public get attesterId() {
    return this.getStringAttribute('attester_id');
  }
  public set attesterId(value: string) {
    this._attesterId = value;
  }
  public resetAttesterId() {
    this._attesterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attesterIdInput() {
    return this._attesterId;
  }

  // challenge_option - computed: false, optional: false, required: true
  private _challengeOption?: string; 
  public get challengeOption() {
    return this.getStringAttribute('challenge_option');
  }
  public set challengeOption(value: string) {
    this._challengeOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeOptionInput() {
    return this._challengeOption;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionDenyActionParameters {
  /**
  * Whether to extend the blocking of source IP. The possible values are:
  * <li>on: on;</li>
  * <li>off: off.</li>
  * When enabled, the client IP that triggers the rule will be blocked continuously. When this option is enabled, the BlockIpDuration parameter must be specified at the same time.
  * Note: This option cannot be enabled at the same time as the ReturnCustomPage or Stall options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#block_ip TeoSecurityPolicyConfig#block_ip}
  */
  readonly blockIp?: string;
  /**
  * When BlockIP is on, the IP blocking duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#block_ip_duration TeoSecurityPolicyConfig#block_ip_duration}
  */
  readonly blockIpDuration?: string;
  /**
  * The PageId of the custom page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#error_page_id TeoSecurityPolicyConfig#error_page_id}
  */
  readonly errorPageId?: string;
  /**
  * Customize the status code of the page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#response_code TeoSecurityPolicyConfig#response_code}
  */
  readonly responseCode?: string;
  /**
  * Whether to use custom pages. The possible values are:
  * <li>on: on;</li>
  * <li>off: off.</li>
  * After enabling, use custom page content to intercept (respond to) requests. When enabling this option, you must specify the ResponseCode and ErrorPageId parameters at the same time.
  * Note: This option cannot be enabled at the same time as the BlockIp or Stall options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#return_custom_page TeoSecurityPolicyConfig#return_custom_page}
  */
  readonly returnCustomPage?: string;
  /**
  * Whether to ignore the request source suspension. The value is:
  * <li>on: Enable;</li>
  * <li>off: Disable.</li>
  * After enabling, it will no longer respond to requests in the current connection session and will not actively disconnect. It is used to fight against crawlers and consume client connection resources.
  * Note: This option cannot be enabled at the same time as the BlockIp or ReturnCustomPage options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#stall TeoSecurityPolicyConfig#stall}
  */
  readonly stall?: string;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionDenyActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionDenyActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionDenyActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_ip: cdktf.stringToTerraform(struct!.blockIp),
    block_ip_duration: cdktf.stringToTerraform(struct!.blockIpDuration),
    error_page_id: cdktf.stringToTerraform(struct!.errorPageId),
    response_code: cdktf.stringToTerraform(struct!.responseCode),
    return_custom_page: cdktf.stringToTerraform(struct!.returnCustomPage),
    stall: cdktf.stringToTerraform(struct!.stall),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionDenyActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionDenyActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionDenyActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_ip: {
      value: cdktf.stringToHclTerraform(struct!.blockIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_ip_duration: {
      value: cdktf.stringToHclTerraform(struct!.blockIpDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_page_id: {
      value: cdktf.stringToHclTerraform(struct!.errorPageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.stringToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    return_custom_page: {
      value: cdktf.stringToHclTerraform(struct!.returnCustomPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stall: {
      value: cdktf.stringToHclTerraform(struct!.stall),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionDenyActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionDenyActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIp = this._blockIp;
    }
    if (this._blockIpDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIpDuration = this._blockIpDuration;
    }
    if (this._errorPageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorPageId = this._errorPageId;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    if (this._returnCustomPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnCustomPage = this._returnCustomPage;
    }
    if (this._stall !== undefined) {
      hasAnyValues = true;
      internalValueResult.stall = this._stall;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionDenyActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockIp = undefined;
      this._blockIpDuration = undefined;
      this._errorPageId = undefined;
      this._responseCode = undefined;
      this._returnCustomPage = undefined;
      this._stall = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockIp = value.blockIp;
      this._blockIpDuration = value.blockIpDuration;
      this._errorPageId = value.errorPageId;
      this._responseCode = value.responseCode;
      this._returnCustomPage = value.returnCustomPage;
      this._stall = value.stall;
    }
  }

  // block_ip - computed: false, optional: true, required: false
  private _blockIp?: string; 
  public get blockIp() {
    return this.getStringAttribute('block_ip');
  }
  public set blockIp(value: string) {
    this._blockIp = value;
  }
  public resetBlockIp() {
    this._blockIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpInput() {
    return this._blockIp;
  }

  // block_ip_duration - computed: false, optional: true, required: false
  private _blockIpDuration?: string; 
  public get blockIpDuration() {
    return this.getStringAttribute('block_ip_duration');
  }
  public set blockIpDuration(value: string) {
    this._blockIpDuration = value;
  }
  public resetBlockIpDuration() {
    this._blockIpDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpDurationInput() {
    return this._blockIpDuration;
  }

  // error_page_id - computed: false, optional: true, required: false
  private _errorPageId?: string; 
  public get errorPageId() {
    return this.getStringAttribute('error_page_id');
  }
  public set errorPageId(value: string) {
    this._errorPageId = value;
  }
  public resetErrorPageId() {
    this._errorPageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPageIdInput() {
    return this._errorPageId;
  }

  // response_code - computed: false, optional: true, required: false
  private _responseCode?: string; 
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
  public set responseCode(value: string) {
    this._responseCode = value;
  }
  public resetResponseCode() {
    this._responseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }

  // return_custom_page - computed: false, optional: true, required: false
  private _returnCustomPage?: string; 
  public get returnCustomPage() {
    return this.getStringAttribute('return_custom_page');
  }
  public set returnCustomPage(value: string) {
    this._returnCustomPage = value;
  }
  public resetReturnCustomPage() {
    this._returnCustomPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnCustomPageInput() {
    return this._returnCustomPage;
  }

  // stall - computed: false, optional: true, required: false
  private _stall?: string; 
  public get stall() {
    return this.getStringAttribute('stall');
  }
  public set stall(value: string) {
    this._stall = value;
  }
  public resetStall() {
    this._stall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stallInput() {
    return this._stall;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionRedirectActionParameters {
  /**
  * The URL to redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#url TeoSecurityPolicyConfig#url}
  */
  readonly url: string;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionRedirectActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionRedirectActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionRedirectActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionRedirectActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionRedirectActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionRedirectActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionRedirectActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionRedirectActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionRedirectActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionReturnCustomPageActionParameters {
  /**
  * The custom page ID of the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#error_page_id TeoSecurityPolicyConfig#error_page_id}
  */
  readonly errorPageId: string;
  /**
  * Response status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#response_code TeoSecurityPolicyConfig#response_code}
  */
  readonly responseCode: string;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionReturnCustomPageActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionReturnCustomPageActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionReturnCustomPageActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_page_id: cdktf.stringToTerraform(struct!.errorPageId),
    response_code: cdktf.stringToTerraform(struct!.responseCode),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionReturnCustomPageActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionReturnCustomPageActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionReturnCustomPageActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_page_id: {
      value: cdktf.stringToHclTerraform(struct!.errorPageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.stringToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionReturnCustomPageActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionReturnCustomPageActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorPageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorPageId = this._errorPageId;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionReturnCustomPageActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorPageId = undefined;
      this._responseCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorPageId = value.errorPageId;
      this._responseCode = value.responseCode;
    }
  }

  // error_page_id - computed: false, optional: false, required: true
  private _errorPageId?: string; 
  public get errorPageId() {
    return this.getStringAttribute('error_page_id');
  }
  public set errorPageId(value: string) {
    this._errorPageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPageIdInput() {
    return this._errorPageId;
  }

  // response_code - computed: false, optional: false, required: true
  private _responseCode?: string; 
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
  public set responseCode(value: string) {
    this._responseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseAction {
  /**
  * The specific action of security execution. The values are:
  * <li>Deny: intercept, block the request to access site resources;</li>
  * <li>Monitor: observe, only record logs;</li>
  * <li>Redirect: redirect to URL;</li>
  * <li>Disabled: disabled, do not enable the specified rule;</li>
  * <li>Allow: allow access, but delay processing requests;</li>
  * <li>Challenge: challenge, respond to challenge content;</li>
  * <li>BlockIP: to be abandoned, IP ban;</li>
  * <li>ReturnCustomPage: to be abandoned, use the specified page to intercept;</li>
  * <li>JSChallenge: to be abandoned, JavaScript challenge;</li>
  * <li>ManagedChallenge: to be abandoned, managed challenge.</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#name TeoSecurityPolicyConfig#name}
  */
  readonly name: string;
  /**
  * block_ip_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#block_ip_action_parameters TeoSecurityPolicyConfig#block_ip_action_parameters}
  */
  readonly blockIpActionParameters?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionBlockIpActionParameters;
  /**
  * challenge_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#challenge_action_parameters TeoSecurityPolicyConfig#challenge_action_parameters}
  */
  readonly challengeActionParameters?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionChallengeActionParameters;
  /**
  * deny_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#deny_action_parameters TeoSecurityPolicyConfig#deny_action_parameters}
  */
  readonly denyActionParameters?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionDenyActionParameters;
  /**
  * redirect_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#redirect_action_parameters TeoSecurityPolicyConfig#redirect_action_parameters}
  */
  readonly redirectActionParameters?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionRedirectActionParameters;
  /**
  * return_custom_page_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#return_custom_page_action_parameters TeoSecurityPolicyConfig#return_custom_page_action_parameters}
  */
  readonly returnCustomPageActionParameters?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionReturnCustomPageActionParameters;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    block_ip_action_parameters: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionBlockIpActionParametersToTerraform(struct!.blockIpActionParameters),
    challenge_action_parameters: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionChallengeActionParametersToTerraform(struct!.challengeActionParameters),
    deny_action_parameters: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionDenyActionParametersToTerraform(struct!.denyActionParameters),
    redirect_action_parameters: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionRedirectActionParametersToTerraform(struct!.redirectActionParameters),
    return_custom_page_action_parameters: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionReturnCustomPageActionParametersToTerraform(struct!.returnCustomPageActionParameters),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_ip_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionBlockIpActionParametersToHclTerraform(struct!.blockIpActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionBlockIpActionParametersList",
    },
    challenge_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionChallengeActionParametersToHclTerraform(struct!.challengeActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionChallengeActionParametersList",
    },
    deny_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionDenyActionParametersToHclTerraform(struct!.denyActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionDenyActionParametersList",
    },
    redirect_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionRedirectActionParametersToHclTerraform(struct!.redirectActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionRedirectActionParametersList",
    },
    return_custom_page_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionReturnCustomPageActionParametersToHclTerraform(struct!.returnCustomPageActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionReturnCustomPageActionParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._blockIpActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIpActionParameters = this._blockIpActionParameters?.internalValue;
    }
    if (this._challengeActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeActionParameters = this._challengeActionParameters?.internalValue;
    }
    if (this._denyActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyActionParameters = this._denyActionParameters?.internalValue;
    }
    if (this._redirectActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectActionParameters = this._redirectActionParameters?.internalValue;
    }
    if (this._returnCustomPageActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnCustomPageActionParameters = this._returnCustomPageActionParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._blockIpActionParameters.internalValue = undefined;
      this._challengeActionParameters.internalValue = undefined;
      this._denyActionParameters.internalValue = undefined;
      this._redirectActionParameters.internalValue = undefined;
      this._returnCustomPageActionParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._blockIpActionParameters.internalValue = value.blockIpActionParameters;
      this._challengeActionParameters.internalValue = value.challengeActionParameters;
      this._denyActionParameters.internalValue = value.denyActionParameters;
      this._redirectActionParameters.internalValue = value.redirectActionParameters;
      this._returnCustomPageActionParameters.internalValue = value.returnCustomPageActionParameters;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // block_ip_action_parameters - computed: false, optional: true, required: false
  private _blockIpActionParameters = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionBlockIpActionParametersOutputReference(this, "block_ip_action_parameters");
  public get blockIpActionParameters() {
    return this._blockIpActionParameters;
  }
  public putBlockIpActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionBlockIpActionParameters) {
    this._blockIpActionParameters.internalValue = value;
  }
  public resetBlockIpActionParameters() {
    this._blockIpActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpActionParametersInput() {
    return this._blockIpActionParameters.internalValue;
  }

  // challenge_action_parameters - computed: false, optional: true, required: false
  private _challengeActionParameters = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionChallengeActionParametersOutputReference(this, "challenge_action_parameters");
  public get challengeActionParameters() {
    return this._challengeActionParameters;
  }
  public putChallengeActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionChallengeActionParameters) {
    this._challengeActionParameters.internalValue = value;
  }
  public resetChallengeActionParameters() {
    this._challengeActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeActionParametersInput() {
    return this._challengeActionParameters.internalValue;
  }

  // deny_action_parameters - computed: false, optional: true, required: false
  private _denyActionParameters = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionDenyActionParametersOutputReference(this, "deny_action_parameters");
  public get denyActionParameters() {
    return this._denyActionParameters;
  }
  public putDenyActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionDenyActionParameters) {
    this._denyActionParameters.internalValue = value;
  }
  public resetDenyActionParameters() {
    this._denyActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyActionParametersInput() {
    return this._denyActionParameters.internalValue;
  }

  // redirect_action_parameters - computed: false, optional: true, required: false
  private _redirectActionParameters = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionRedirectActionParametersOutputReference(this, "redirect_action_parameters");
  public get redirectActionParameters() {
    return this._redirectActionParameters;
  }
  public putRedirectActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionRedirectActionParameters) {
    this._redirectActionParameters.internalValue = value;
  }
  public resetRedirectActionParameters() {
    this._redirectActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectActionParametersInput() {
    return this._redirectActionParameters.internalValue;
  }

  // return_custom_page_action_parameters - computed: false, optional: true, required: false
  private _returnCustomPageActionParameters = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionReturnCustomPageActionParametersOutputReference(this, "return_custom_page_action_parameters");
  public get returnCustomPageActionParameters() {
    return this._returnCustomPageActionParameters;
  }
  public putReturnCustomPageActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionReturnCustomPageActionParameters) {
    this._returnCustomPageActionParameters.internalValue = value;
  }
  public resetReturnCustomPageActionParameters() {
    this._returnCustomPageActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnCustomPageActionParametersInput() {
    return this._returnCustomPageActionParameters.internalValue;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefense {
  /**
  * Whether the anti-theft feature (only applicable to mainland China) is enabled. The possible values are: <li>on: enabled; </li><li>off: disabled. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#enabled TeoSecurityPolicyConfig#enabled}
  */
  readonly enabled: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#action TeoSecurityPolicyConfig#action}
  */
  readonly action?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseAction;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.stringToTerraform(struct!.enabled),
    action: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionToTerraform(struct!.action),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._action.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._action.internalValue = value.action;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // action - computed: false, optional: true, required: false
  private _action = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionBlockIpActionParameters {
  /**
  * The penalty duration for banning an IP. Supported units are: <li>s: seconds, value range 1 to 120; </li><li>m: minutes, value range 1 to 120; </li><li>h: hours, value range 1 to 48. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#duration TeoSecurityPolicyConfig#duration}
  */
  readonly duration: string;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionBlockIpActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionBlockIpActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionBlockIpActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionBlockIpActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionBlockIpActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionBlockIpActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionBlockIpActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionBlockIpActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionBlockIpActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionChallengeActionParameters {
  /**
  * Client authentication method ID. This field is required when Name is InterstitialChallenge/InlineChallenge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#attester_id TeoSecurityPolicyConfig#attester_id}
  */
  readonly attesterId?: string;
  /**
  * The specific challenge action to be executed safely. The possible values are: <li> InterstitialChallenge: interstitial challenge; </li><li> InlineChallenge: embedded challenge; </li><li> JSChallenge: JavaScript challenge; </li><li> ManagedChallenge: managed challenge. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#challenge_option TeoSecurityPolicyConfig#challenge_option}
  */
  readonly challengeOption: string;
  /**
  * The time interval for repeating the challenge. When Name is InterstitialChallenge/InlineChallenge, this field is required. The default value is 300s. Supported units are: <li>s: seconds, value range 1 to 60; </li><li>m: minutes, value range 1 to 60; </li><li>h: hours, value range 1 to 24. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#interval TeoSecurityPolicyConfig#interval}
  */
  readonly interval?: string;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionChallengeActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionChallengeActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionChallengeActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attester_id: cdktf.stringToTerraform(struct!.attesterId),
    challenge_option: cdktf.stringToTerraform(struct!.challengeOption),
    interval: cdktf.stringToTerraform(struct!.interval),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionChallengeActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionChallengeActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionChallengeActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attester_id: {
      value: cdktf.stringToHclTerraform(struct!.attesterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    challenge_option: {
      value: cdktf.stringToHclTerraform(struct!.challengeOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionChallengeActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionChallengeActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attesterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.attesterId = this._attesterId;
    }
    if (this._challengeOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeOption = this._challengeOption;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionChallengeActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attesterId = undefined;
      this._challengeOption = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attesterId = value.attesterId;
      this._challengeOption = value.challengeOption;
      this._interval = value.interval;
    }
  }

  // attester_id - computed: false, optional: true, required: false
  private _attesterId?: string; 
  public get attesterId() {
    return this.getStringAttribute('attester_id');
  }
  public set attesterId(value: string) {
    this._attesterId = value;
  }
  public resetAttesterId() {
    this._attesterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attesterIdInput() {
    return this._attesterId;
  }

  // challenge_option - computed: false, optional: false, required: true
  private _challengeOption?: string; 
  public get challengeOption() {
    return this.getStringAttribute('challenge_option');
  }
  public set challengeOption(value: string) {
    this._challengeOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeOptionInput() {
    return this._challengeOption;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionDenyActionParameters {
  /**
  * Whether to extend the blocking of source IP. The possible values are:
  * <li>on: on;</li>
  * <li>off: off.</li>
  * When enabled, the client IP that triggers the rule will be blocked continuously. When this option is enabled, the BlockIpDuration parameter must be specified at the same time.
  * Note: This option cannot be enabled at the same time as the ReturnCustomPage or Stall options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#block_ip TeoSecurityPolicyConfig#block_ip}
  */
  readonly blockIp?: string;
  /**
  * When BlockIP is on, the IP blocking duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#block_ip_duration TeoSecurityPolicyConfig#block_ip_duration}
  */
  readonly blockIpDuration?: string;
  /**
  * The PageId of the custom page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#error_page_id TeoSecurityPolicyConfig#error_page_id}
  */
  readonly errorPageId?: string;
  /**
  * Customize the status code of the page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#response_code TeoSecurityPolicyConfig#response_code}
  */
  readonly responseCode?: string;
  /**
  * Whether to use custom pages. The possible values are:
  * <li>on: on;</li>
  * <li>off: off.</li>
  * After enabling, use custom page content to intercept (respond to) requests. When enabling this option, you must specify the ResponseCode and ErrorPageId parameters at the same time.
  * Note: This option cannot be enabled at the same time as the BlockIp or Stall options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#return_custom_page TeoSecurityPolicyConfig#return_custom_page}
  */
  readonly returnCustomPage?: string;
  /**
  * Whether to ignore the request source suspension. The value is:
  * <li>on: Enable;</li>
  * <li>off: Disable.</li>
  * After enabling, it will no longer respond to requests in the current connection session and will not actively disconnect. It is used to fight against crawlers and consume client connection resources.
  * Note: This option cannot be enabled at the same time as the BlockIp or ReturnCustomPage options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#stall TeoSecurityPolicyConfig#stall}
  */
  readonly stall?: string;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionDenyActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionDenyActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionDenyActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_ip: cdktf.stringToTerraform(struct!.blockIp),
    block_ip_duration: cdktf.stringToTerraform(struct!.blockIpDuration),
    error_page_id: cdktf.stringToTerraform(struct!.errorPageId),
    response_code: cdktf.stringToTerraform(struct!.responseCode),
    return_custom_page: cdktf.stringToTerraform(struct!.returnCustomPage),
    stall: cdktf.stringToTerraform(struct!.stall),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionDenyActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionDenyActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionDenyActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_ip: {
      value: cdktf.stringToHclTerraform(struct!.blockIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_ip_duration: {
      value: cdktf.stringToHclTerraform(struct!.blockIpDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_page_id: {
      value: cdktf.stringToHclTerraform(struct!.errorPageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.stringToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    return_custom_page: {
      value: cdktf.stringToHclTerraform(struct!.returnCustomPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stall: {
      value: cdktf.stringToHclTerraform(struct!.stall),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionDenyActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionDenyActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIp = this._blockIp;
    }
    if (this._blockIpDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIpDuration = this._blockIpDuration;
    }
    if (this._errorPageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorPageId = this._errorPageId;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    if (this._returnCustomPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnCustomPage = this._returnCustomPage;
    }
    if (this._stall !== undefined) {
      hasAnyValues = true;
      internalValueResult.stall = this._stall;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionDenyActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockIp = undefined;
      this._blockIpDuration = undefined;
      this._errorPageId = undefined;
      this._responseCode = undefined;
      this._returnCustomPage = undefined;
      this._stall = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockIp = value.blockIp;
      this._blockIpDuration = value.blockIpDuration;
      this._errorPageId = value.errorPageId;
      this._responseCode = value.responseCode;
      this._returnCustomPage = value.returnCustomPage;
      this._stall = value.stall;
    }
  }

  // block_ip - computed: false, optional: true, required: false
  private _blockIp?: string; 
  public get blockIp() {
    return this.getStringAttribute('block_ip');
  }
  public set blockIp(value: string) {
    this._blockIp = value;
  }
  public resetBlockIp() {
    this._blockIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpInput() {
    return this._blockIp;
  }

  // block_ip_duration - computed: false, optional: true, required: false
  private _blockIpDuration?: string; 
  public get blockIpDuration() {
    return this.getStringAttribute('block_ip_duration');
  }
  public set blockIpDuration(value: string) {
    this._blockIpDuration = value;
  }
  public resetBlockIpDuration() {
    this._blockIpDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpDurationInput() {
    return this._blockIpDuration;
  }

  // error_page_id - computed: false, optional: true, required: false
  private _errorPageId?: string; 
  public get errorPageId() {
    return this.getStringAttribute('error_page_id');
  }
  public set errorPageId(value: string) {
    this._errorPageId = value;
  }
  public resetErrorPageId() {
    this._errorPageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPageIdInput() {
    return this._errorPageId;
  }

  // response_code - computed: false, optional: true, required: false
  private _responseCode?: string; 
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
  public set responseCode(value: string) {
    this._responseCode = value;
  }
  public resetResponseCode() {
    this._responseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }

  // return_custom_page - computed: false, optional: true, required: false
  private _returnCustomPage?: string; 
  public get returnCustomPage() {
    return this.getStringAttribute('return_custom_page');
  }
  public set returnCustomPage(value: string) {
    this._returnCustomPage = value;
  }
  public resetReturnCustomPage() {
    this._returnCustomPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnCustomPageInput() {
    return this._returnCustomPage;
  }

  // stall - computed: false, optional: true, required: false
  private _stall?: string; 
  public get stall() {
    return this.getStringAttribute('stall');
  }
  public set stall(value: string) {
    this._stall = value;
  }
  public resetStall() {
    this._stall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stallInput() {
    return this._stall;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionRedirectActionParameters {
  /**
  * The URL to redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#url TeoSecurityPolicyConfig#url}
  */
  readonly url: string;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionRedirectActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionRedirectActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionRedirectActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionRedirectActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionRedirectActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionRedirectActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionRedirectActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionRedirectActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionRedirectActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionReturnCustomPageActionParameters {
  /**
  * The custom page ID of the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#error_page_id TeoSecurityPolicyConfig#error_page_id}
  */
  readonly errorPageId: string;
  /**
  * Response status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#response_code TeoSecurityPolicyConfig#response_code}
  */
  readonly responseCode: string;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionReturnCustomPageActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionReturnCustomPageActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionReturnCustomPageActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_page_id: cdktf.stringToTerraform(struct!.errorPageId),
    response_code: cdktf.stringToTerraform(struct!.responseCode),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionReturnCustomPageActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionReturnCustomPageActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionReturnCustomPageActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_page_id: {
      value: cdktf.stringToHclTerraform(struct!.errorPageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.stringToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionReturnCustomPageActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionReturnCustomPageActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorPageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorPageId = this._errorPageId;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionReturnCustomPageActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorPageId = undefined;
      this._responseCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorPageId = value.errorPageId;
      this._responseCode = value.responseCode;
    }
  }

  // error_page_id - computed: false, optional: false, required: true
  private _errorPageId?: string; 
  public get errorPageId() {
    return this.getStringAttribute('error_page_id');
  }
  public set errorPageId(value: string) {
    this._errorPageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPageIdInput() {
    return this._errorPageId;
  }

  // response_code - computed: false, optional: false, required: true
  private _responseCode?: string; 
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
  public set responseCode(value: string) {
    this._responseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringAction {
  /**
  * The specific action of security execution. The values are:
  * <li>Deny: intercept, block the request to access site resources;</li>
  * <li>Monitor: observe, only record logs;</li>
  * <li>Redirect: redirect to URL;</li>
  * <li>Disabled: disabled, do not enable the specified rule;</li>
  * <li>Allow: allow access, but delay processing requests;</li>
  * <li>Challenge: challenge, respond to challenge content;</li>
  * <li>BlockIP: to be abandoned, IP ban;</li>
  * <li>ReturnCustomPage: to be abandoned, use the specified page to intercept;</li>
  * <li>JSChallenge: to be abandoned, JavaScript challenge;</li>
  * <li>ManagedChallenge: to be abandoned, managed challenge.</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#name TeoSecurityPolicyConfig#name}
  */
  readonly name: string;
  /**
  * block_ip_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#block_ip_action_parameters TeoSecurityPolicyConfig#block_ip_action_parameters}
  */
  readonly blockIpActionParameters?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionBlockIpActionParameters;
  /**
  * challenge_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#challenge_action_parameters TeoSecurityPolicyConfig#challenge_action_parameters}
  */
  readonly challengeActionParameters?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionChallengeActionParameters;
  /**
  * deny_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#deny_action_parameters TeoSecurityPolicyConfig#deny_action_parameters}
  */
  readonly denyActionParameters?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionDenyActionParameters;
  /**
  * redirect_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#redirect_action_parameters TeoSecurityPolicyConfig#redirect_action_parameters}
  */
  readonly redirectActionParameters?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionRedirectActionParameters;
  /**
  * return_custom_page_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#return_custom_page_action_parameters TeoSecurityPolicyConfig#return_custom_page_action_parameters}
  */
  readonly returnCustomPageActionParameters?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionReturnCustomPageActionParameters;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    block_ip_action_parameters: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionBlockIpActionParametersToTerraform(struct!.blockIpActionParameters),
    challenge_action_parameters: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionChallengeActionParametersToTerraform(struct!.challengeActionParameters),
    deny_action_parameters: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionDenyActionParametersToTerraform(struct!.denyActionParameters),
    redirect_action_parameters: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionRedirectActionParametersToTerraform(struct!.redirectActionParameters),
    return_custom_page_action_parameters: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionReturnCustomPageActionParametersToTerraform(struct!.returnCustomPageActionParameters),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_ip_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionBlockIpActionParametersToHclTerraform(struct!.blockIpActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionBlockIpActionParametersList",
    },
    challenge_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionChallengeActionParametersToHclTerraform(struct!.challengeActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionChallengeActionParametersList",
    },
    deny_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionDenyActionParametersToHclTerraform(struct!.denyActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionDenyActionParametersList",
    },
    redirect_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionRedirectActionParametersToHclTerraform(struct!.redirectActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionRedirectActionParametersList",
    },
    return_custom_page_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionReturnCustomPageActionParametersToHclTerraform(struct!.returnCustomPageActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionReturnCustomPageActionParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._blockIpActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIpActionParameters = this._blockIpActionParameters?.internalValue;
    }
    if (this._challengeActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeActionParameters = this._challengeActionParameters?.internalValue;
    }
    if (this._denyActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyActionParameters = this._denyActionParameters?.internalValue;
    }
    if (this._redirectActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectActionParameters = this._redirectActionParameters?.internalValue;
    }
    if (this._returnCustomPageActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnCustomPageActionParameters = this._returnCustomPageActionParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._blockIpActionParameters.internalValue = undefined;
      this._challengeActionParameters.internalValue = undefined;
      this._denyActionParameters.internalValue = undefined;
      this._redirectActionParameters.internalValue = undefined;
      this._returnCustomPageActionParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._blockIpActionParameters.internalValue = value.blockIpActionParameters;
      this._challengeActionParameters.internalValue = value.challengeActionParameters;
      this._denyActionParameters.internalValue = value.denyActionParameters;
      this._redirectActionParameters.internalValue = value.redirectActionParameters;
      this._returnCustomPageActionParameters.internalValue = value.returnCustomPageActionParameters;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // block_ip_action_parameters - computed: false, optional: true, required: false
  private _blockIpActionParameters = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionBlockIpActionParametersOutputReference(this, "block_ip_action_parameters");
  public get blockIpActionParameters() {
    return this._blockIpActionParameters;
  }
  public putBlockIpActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionBlockIpActionParameters) {
    this._blockIpActionParameters.internalValue = value;
  }
  public resetBlockIpActionParameters() {
    this._blockIpActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpActionParametersInput() {
    return this._blockIpActionParameters.internalValue;
  }

  // challenge_action_parameters - computed: false, optional: true, required: false
  private _challengeActionParameters = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionChallengeActionParametersOutputReference(this, "challenge_action_parameters");
  public get challengeActionParameters() {
    return this._challengeActionParameters;
  }
  public putChallengeActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionChallengeActionParameters) {
    this._challengeActionParameters.internalValue = value;
  }
  public resetChallengeActionParameters() {
    this._challengeActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeActionParametersInput() {
    return this._challengeActionParameters.internalValue;
  }

  // deny_action_parameters - computed: false, optional: true, required: false
  private _denyActionParameters = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionDenyActionParametersOutputReference(this, "deny_action_parameters");
  public get denyActionParameters() {
    return this._denyActionParameters;
  }
  public putDenyActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionDenyActionParameters) {
    this._denyActionParameters.internalValue = value;
  }
  public resetDenyActionParameters() {
    this._denyActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyActionParametersInput() {
    return this._denyActionParameters.internalValue;
  }

  // redirect_action_parameters - computed: false, optional: true, required: false
  private _redirectActionParameters = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionRedirectActionParametersOutputReference(this, "redirect_action_parameters");
  public get redirectActionParameters() {
    return this._redirectActionParameters;
  }
  public putRedirectActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionRedirectActionParameters) {
    this._redirectActionParameters.internalValue = value;
  }
  public resetRedirectActionParameters() {
    this._redirectActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectActionParametersInput() {
    return this._redirectActionParameters.internalValue;
  }

  // return_custom_page_action_parameters - computed: false, optional: true, required: false
  private _returnCustomPageActionParameters = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionReturnCustomPageActionParametersOutputReference(this, "return_custom_page_action_parameters");
  public get returnCustomPageActionParameters() {
    return this._returnCustomPageActionParameters;
  }
  public putReturnCustomPageActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionReturnCustomPageActionParameters) {
    this._returnCustomPageActionParameters.internalValue = value;
  }
  public resetReturnCustomPageActionParameters() {
    this._returnCustomPageActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnCustomPageActionParametersInput() {
    return this._returnCustomPageActionParameters.internalValue;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFiltering {
  /**
  * Whether smart client filtering is enabled. The possible values are: <li>on: enabled; </li><li>off: disabled. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#enabled TeoSecurityPolicyConfig#enabled}
  */
  readonly enabled: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#action TeoSecurityPolicyConfig#action}
  */
  readonly action?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringAction;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFiltering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.stringToTerraform(struct!.enabled),
    action: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionToTerraform(struct!.action),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFiltering): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFiltering | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFiltering | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._action.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._action.internalValue = value.action;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // action - computed: false, optional: true, required: false
  private _action = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionBlockIpActionParameters {
  /**
  * The penalty duration for banning an IP. Supported units are: <li>s: seconds, value range 1 to 120; </li><li>m: minutes, value range 1 to 120; </li><li>h: hours, value range 1 to 48. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#duration TeoSecurityPolicyConfig#duration}
  */
  readonly duration: string;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionBlockIpActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionBlockIpActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionBlockIpActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionBlockIpActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionBlockIpActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionBlockIpActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionBlockIpActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionBlockIpActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionBlockIpActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionChallengeActionParameters {
  /**
  * Client authentication method ID. This field is required when Name is InterstitialChallenge/InlineChallenge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#attester_id TeoSecurityPolicyConfig#attester_id}
  */
  readonly attesterId?: string;
  /**
  * The specific challenge action to be executed safely. The possible values are: <li> InterstitialChallenge: interstitial challenge; </li><li> InlineChallenge: embedded challenge; </li><li> JSChallenge: JavaScript challenge; </li><li> ManagedChallenge: managed challenge. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#challenge_option TeoSecurityPolicyConfig#challenge_option}
  */
  readonly challengeOption: string;
  /**
  * The time interval for repeating the challenge. When Name is InterstitialChallenge/InlineChallenge, this field is required. The default value is 300s. Supported units are: <li>s: seconds, value range 1 to 60; </li><li>m: minutes, value range 1 to 60; </li><li>h: hours, value range 1 to 24. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#interval TeoSecurityPolicyConfig#interval}
  */
  readonly interval?: string;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionChallengeActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionChallengeActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionChallengeActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attester_id: cdktf.stringToTerraform(struct!.attesterId),
    challenge_option: cdktf.stringToTerraform(struct!.challengeOption),
    interval: cdktf.stringToTerraform(struct!.interval),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionChallengeActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionChallengeActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionChallengeActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attester_id: {
      value: cdktf.stringToHclTerraform(struct!.attesterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    challenge_option: {
      value: cdktf.stringToHclTerraform(struct!.challengeOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionChallengeActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionChallengeActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attesterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.attesterId = this._attesterId;
    }
    if (this._challengeOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeOption = this._challengeOption;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionChallengeActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attesterId = undefined;
      this._challengeOption = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attesterId = value.attesterId;
      this._challengeOption = value.challengeOption;
      this._interval = value.interval;
    }
  }

  // attester_id - computed: false, optional: true, required: false
  private _attesterId?: string; 
  public get attesterId() {
    return this.getStringAttribute('attester_id');
  }
  public set attesterId(value: string) {
    this._attesterId = value;
  }
  public resetAttesterId() {
    this._attesterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attesterIdInput() {
    return this._attesterId;
  }

  // challenge_option - computed: false, optional: false, required: true
  private _challengeOption?: string; 
  public get challengeOption() {
    return this.getStringAttribute('challenge_option');
  }
  public set challengeOption(value: string) {
    this._challengeOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeOptionInput() {
    return this._challengeOption;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionDenyActionParameters {
  /**
  * Whether to extend the blocking of source IP. The possible values are:
  * <li>on: on;</li>
  * <li>off: off.</li>
  * When enabled, the client IP that triggers the rule will be blocked continuously. When this option is enabled, the BlockIpDuration parameter must be specified at the same time.
  * Note: This option cannot be enabled at the same time as the ReturnCustomPage or Stall options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#block_ip TeoSecurityPolicyConfig#block_ip}
  */
  readonly blockIp?: string;
  /**
  * When BlockIP is on, the IP blocking duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#block_ip_duration TeoSecurityPolicyConfig#block_ip_duration}
  */
  readonly blockIpDuration?: string;
  /**
  * The PageId of the custom page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#error_page_id TeoSecurityPolicyConfig#error_page_id}
  */
  readonly errorPageId?: string;
  /**
  * Customize the status code of the page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#response_code TeoSecurityPolicyConfig#response_code}
  */
  readonly responseCode?: string;
  /**
  * Whether to use custom pages. The possible values are:
  * <li>on: on;</li>
  * <li>off: off.</li>
  * After enabling, use custom page content to intercept (respond to) requests. When enabling this option, you must specify the ResponseCode and ErrorPageId parameters at the same time.
  * Note: This option cannot be enabled at the same time as the BlockIp or Stall options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#return_custom_page TeoSecurityPolicyConfig#return_custom_page}
  */
  readonly returnCustomPage?: string;
  /**
  * Whether to ignore the request source suspension. The value is:
  * <li>on: Enable;</li>
  * <li>off: Disable.</li>
  * After enabling, it will no longer respond to requests in the current connection session and will not actively disconnect. It is used to fight against crawlers and consume client connection resources.
  * Note: This option cannot be enabled at the same time as the BlockIp or ReturnCustomPage options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#stall TeoSecurityPolicyConfig#stall}
  */
  readonly stall?: string;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionDenyActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionDenyActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionDenyActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_ip: cdktf.stringToTerraform(struct!.blockIp),
    block_ip_duration: cdktf.stringToTerraform(struct!.blockIpDuration),
    error_page_id: cdktf.stringToTerraform(struct!.errorPageId),
    response_code: cdktf.stringToTerraform(struct!.responseCode),
    return_custom_page: cdktf.stringToTerraform(struct!.returnCustomPage),
    stall: cdktf.stringToTerraform(struct!.stall),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionDenyActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionDenyActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionDenyActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_ip: {
      value: cdktf.stringToHclTerraform(struct!.blockIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_ip_duration: {
      value: cdktf.stringToHclTerraform(struct!.blockIpDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_page_id: {
      value: cdktf.stringToHclTerraform(struct!.errorPageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.stringToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    return_custom_page: {
      value: cdktf.stringToHclTerraform(struct!.returnCustomPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stall: {
      value: cdktf.stringToHclTerraform(struct!.stall),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionDenyActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionDenyActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIp = this._blockIp;
    }
    if (this._blockIpDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIpDuration = this._blockIpDuration;
    }
    if (this._errorPageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorPageId = this._errorPageId;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    if (this._returnCustomPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnCustomPage = this._returnCustomPage;
    }
    if (this._stall !== undefined) {
      hasAnyValues = true;
      internalValueResult.stall = this._stall;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionDenyActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockIp = undefined;
      this._blockIpDuration = undefined;
      this._errorPageId = undefined;
      this._responseCode = undefined;
      this._returnCustomPage = undefined;
      this._stall = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockIp = value.blockIp;
      this._blockIpDuration = value.blockIpDuration;
      this._errorPageId = value.errorPageId;
      this._responseCode = value.responseCode;
      this._returnCustomPage = value.returnCustomPage;
      this._stall = value.stall;
    }
  }

  // block_ip - computed: false, optional: true, required: false
  private _blockIp?: string; 
  public get blockIp() {
    return this.getStringAttribute('block_ip');
  }
  public set blockIp(value: string) {
    this._blockIp = value;
  }
  public resetBlockIp() {
    this._blockIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpInput() {
    return this._blockIp;
  }

  // block_ip_duration - computed: false, optional: true, required: false
  private _blockIpDuration?: string; 
  public get blockIpDuration() {
    return this.getStringAttribute('block_ip_duration');
  }
  public set blockIpDuration(value: string) {
    this._blockIpDuration = value;
  }
  public resetBlockIpDuration() {
    this._blockIpDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpDurationInput() {
    return this._blockIpDuration;
  }

  // error_page_id - computed: false, optional: true, required: false
  private _errorPageId?: string; 
  public get errorPageId() {
    return this.getStringAttribute('error_page_id');
  }
  public set errorPageId(value: string) {
    this._errorPageId = value;
  }
  public resetErrorPageId() {
    this._errorPageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPageIdInput() {
    return this._errorPageId;
  }

  // response_code - computed: false, optional: true, required: false
  private _responseCode?: string; 
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
  public set responseCode(value: string) {
    this._responseCode = value;
  }
  public resetResponseCode() {
    this._responseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }

  // return_custom_page - computed: false, optional: true, required: false
  private _returnCustomPage?: string; 
  public get returnCustomPage() {
    return this.getStringAttribute('return_custom_page');
  }
  public set returnCustomPage(value: string) {
    this._returnCustomPage = value;
  }
  public resetReturnCustomPage() {
    this._returnCustomPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnCustomPageInput() {
    return this._returnCustomPage;
  }

  // stall - computed: false, optional: true, required: false
  private _stall?: string; 
  public get stall() {
    return this.getStringAttribute('stall');
  }
  public set stall(value: string) {
    this._stall = value;
  }
  public resetStall() {
    this._stall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stallInput() {
    return this._stall;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionRedirectActionParameters {
  /**
  * The URL to redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#url TeoSecurityPolicyConfig#url}
  */
  readonly url: string;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionRedirectActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionRedirectActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionRedirectActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionRedirectActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionRedirectActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionRedirectActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionRedirectActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionRedirectActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionRedirectActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionReturnCustomPageActionParameters {
  /**
  * The custom page ID of the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#error_page_id TeoSecurityPolicyConfig#error_page_id}
  */
  readonly errorPageId: string;
  /**
  * Response status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#response_code TeoSecurityPolicyConfig#response_code}
  */
  readonly responseCode: string;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionReturnCustomPageActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionReturnCustomPageActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionReturnCustomPageActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_page_id: cdktf.stringToTerraform(struct!.errorPageId),
    response_code: cdktf.stringToTerraform(struct!.responseCode),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionReturnCustomPageActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionReturnCustomPageActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionReturnCustomPageActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_page_id: {
      value: cdktf.stringToHclTerraform(struct!.errorPageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.stringToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionReturnCustomPageActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionReturnCustomPageActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorPageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorPageId = this._errorPageId;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionReturnCustomPageActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorPageId = undefined;
      this._responseCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorPageId = value.errorPageId;
      this._responseCode = value.responseCode;
    }
  }

  // error_page_id - computed: false, optional: false, required: true
  private _errorPageId?: string; 
  public get errorPageId() {
    return this.getStringAttribute('error_page_id');
  }
  public set errorPageId(value: string) {
    this._errorPageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPageIdInput() {
    return this._errorPageId;
  }

  // response_code - computed: false, optional: false, required: true
  private _responseCode?: string; 
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
  public set responseCode(value: string) {
    this._responseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseAction {
  /**
  * The specific action of security execution. The values are:
  * <li>Deny: intercept, block the request to access site resources;</li>
  * <li>Monitor: observe, only record logs;</li>
  * <li>Redirect: redirect to URL;</li>
  * <li>Disabled: disabled, do not enable the specified rule;</li>
  * <li>Allow: allow access, but delay processing requests;</li>
  * <li>Challenge: challenge, respond to challenge content;</li>
  * <li>BlockIP: to be abandoned, IP ban;</li>
  * <li>ReturnCustomPage: to be abandoned, use the specified page to intercept;</li>
  * <li>JSChallenge: to be abandoned, JavaScript challenge;</li>
  * <li>ManagedChallenge: to be abandoned, managed challenge.</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#name TeoSecurityPolicyConfig#name}
  */
  readonly name: string;
  /**
  * block_ip_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#block_ip_action_parameters TeoSecurityPolicyConfig#block_ip_action_parameters}
  */
  readonly blockIpActionParameters?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionBlockIpActionParameters;
  /**
  * challenge_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#challenge_action_parameters TeoSecurityPolicyConfig#challenge_action_parameters}
  */
  readonly challengeActionParameters?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionChallengeActionParameters;
  /**
  * deny_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#deny_action_parameters TeoSecurityPolicyConfig#deny_action_parameters}
  */
  readonly denyActionParameters?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionDenyActionParameters;
  /**
  * redirect_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#redirect_action_parameters TeoSecurityPolicyConfig#redirect_action_parameters}
  */
  readonly redirectActionParameters?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionRedirectActionParameters;
  /**
  * return_custom_page_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#return_custom_page_action_parameters TeoSecurityPolicyConfig#return_custom_page_action_parameters}
  */
  readonly returnCustomPageActionParameters?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionReturnCustomPageActionParameters;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    block_ip_action_parameters: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionBlockIpActionParametersToTerraform(struct!.blockIpActionParameters),
    challenge_action_parameters: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionChallengeActionParametersToTerraform(struct!.challengeActionParameters),
    deny_action_parameters: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionDenyActionParametersToTerraform(struct!.denyActionParameters),
    redirect_action_parameters: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionRedirectActionParametersToTerraform(struct!.redirectActionParameters),
    return_custom_page_action_parameters: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionReturnCustomPageActionParametersToTerraform(struct!.returnCustomPageActionParameters),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_ip_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionBlockIpActionParametersToHclTerraform(struct!.blockIpActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionBlockIpActionParametersList",
    },
    challenge_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionChallengeActionParametersToHclTerraform(struct!.challengeActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionChallengeActionParametersList",
    },
    deny_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionDenyActionParametersToHclTerraform(struct!.denyActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionDenyActionParametersList",
    },
    redirect_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionRedirectActionParametersToHclTerraform(struct!.redirectActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionRedirectActionParametersList",
    },
    return_custom_page_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionReturnCustomPageActionParametersToHclTerraform(struct!.returnCustomPageActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionReturnCustomPageActionParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._blockIpActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIpActionParameters = this._blockIpActionParameters?.internalValue;
    }
    if (this._challengeActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeActionParameters = this._challengeActionParameters?.internalValue;
    }
    if (this._denyActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyActionParameters = this._denyActionParameters?.internalValue;
    }
    if (this._redirectActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectActionParameters = this._redirectActionParameters?.internalValue;
    }
    if (this._returnCustomPageActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnCustomPageActionParameters = this._returnCustomPageActionParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._blockIpActionParameters.internalValue = undefined;
      this._challengeActionParameters.internalValue = undefined;
      this._denyActionParameters.internalValue = undefined;
      this._redirectActionParameters.internalValue = undefined;
      this._returnCustomPageActionParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._blockIpActionParameters.internalValue = value.blockIpActionParameters;
      this._challengeActionParameters.internalValue = value.challengeActionParameters;
      this._denyActionParameters.internalValue = value.denyActionParameters;
      this._redirectActionParameters.internalValue = value.redirectActionParameters;
      this._returnCustomPageActionParameters.internalValue = value.returnCustomPageActionParameters;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // block_ip_action_parameters - computed: false, optional: true, required: false
  private _blockIpActionParameters = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionBlockIpActionParametersOutputReference(this, "block_ip_action_parameters");
  public get blockIpActionParameters() {
    return this._blockIpActionParameters;
  }
  public putBlockIpActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionBlockIpActionParameters) {
    this._blockIpActionParameters.internalValue = value;
  }
  public resetBlockIpActionParameters() {
    this._blockIpActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpActionParametersInput() {
    return this._blockIpActionParameters.internalValue;
  }

  // challenge_action_parameters - computed: false, optional: true, required: false
  private _challengeActionParameters = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionChallengeActionParametersOutputReference(this, "challenge_action_parameters");
  public get challengeActionParameters() {
    return this._challengeActionParameters;
  }
  public putChallengeActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionChallengeActionParameters) {
    this._challengeActionParameters.internalValue = value;
  }
  public resetChallengeActionParameters() {
    this._challengeActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeActionParametersInput() {
    return this._challengeActionParameters.internalValue;
  }

  // deny_action_parameters - computed: false, optional: true, required: false
  private _denyActionParameters = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionDenyActionParametersOutputReference(this, "deny_action_parameters");
  public get denyActionParameters() {
    return this._denyActionParameters;
  }
  public putDenyActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionDenyActionParameters) {
    this._denyActionParameters.internalValue = value;
  }
  public resetDenyActionParameters() {
    this._denyActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyActionParametersInput() {
    return this._denyActionParameters.internalValue;
  }

  // redirect_action_parameters - computed: false, optional: true, required: false
  private _redirectActionParameters = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionRedirectActionParametersOutputReference(this, "redirect_action_parameters");
  public get redirectActionParameters() {
    return this._redirectActionParameters;
  }
  public putRedirectActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionRedirectActionParameters) {
    this._redirectActionParameters.internalValue = value;
  }
  public resetRedirectActionParameters() {
    this._redirectActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectActionParametersInput() {
    return this._redirectActionParameters.internalValue;
  }

  // return_custom_page_action_parameters - computed: false, optional: true, required: false
  private _returnCustomPageActionParameters = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionReturnCustomPageActionParametersOutputReference(this, "return_custom_page_action_parameters");
  public get returnCustomPageActionParameters() {
    return this._returnCustomPageActionParameters;
  }
  public putReturnCustomPageActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionReturnCustomPageActionParameters) {
    this._returnCustomPageActionParameters.internalValue = value;
  }
  public resetReturnCustomPageActionParameters() {
    this._returnCustomPageActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnCustomPageActionParametersInput() {
    return this._returnCustomPageActionParameters.internalValue;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseMinimalRequestBodyTransferRate {
  /**
  * The minimum text transmission rate statistics time range, the possible values are: <li>10s: 10 seconds; </li><li>30s: 30 seconds; </li><li>60s: 60 seconds; </li><li>120s: 120 seconds. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#counting_period TeoSecurityPolicyConfig#counting_period}
  */
  readonly countingPeriod: string;
  /**
  * Whether the text transmission minimum rate threshold is enabled. The possible values are: <li>on: enabled; </li><li>off: disabled. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#enabled TeoSecurityPolicyConfig#enabled}
  */
  readonly enabled: string;
  /**
  * Minimum text transmission rate threshold. The unit only supports bps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#minimal_avg_transfer_rate_threshold TeoSecurityPolicyConfig#minimal_avg_transfer_rate_threshold}
  */
  readonly minimalAvgTransferRateThreshold: string;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseMinimalRequestBodyTransferRateToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseMinimalRequestBodyTransferRateOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseMinimalRequestBodyTransferRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counting_period: cdktf.stringToTerraform(struct!.countingPeriod),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    minimal_avg_transfer_rate_threshold: cdktf.stringToTerraform(struct!.minimalAvgTransferRateThreshold),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseMinimalRequestBodyTransferRateToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseMinimalRequestBodyTransferRateOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseMinimalRequestBodyTransferRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counting_period: {
      value: cdktf.stringToHclTerraform(struct!.countingPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimal_avg_transfer_rate_threshold: {
      value: cdktf.stringToHclTerraform(struct!.minimalAvgTransferRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseMinimalRequestBodyTransferRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseMinimalRequestBodyTransferRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countingPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.countingPeriod = this._countingPeriod;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._minimalAvgTransferRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimalAvgTransferRateThreshold = this._minimalAvgTransferRateThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseMinimalRequestBodyTransferRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._countingPeriod = undefined;
      this._enabled = undefined;
      this._minimalAvgTransferRateThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._countingPeriod = value.countingPeriod;
      this._enabled = value.enabled;
      this._minimalAvgTransferRateThreshold = value.minimalAvgTransferRateThreshold;
    }
  }

  // counting_period - computed: false, optional: false, required: true
  private _countingPeriod?: string; 
  public get countingPeriod() {
    return this.getStringAttribute('counting_period');
  }
  public set countingPeriod(value: string) {
    this._countingPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countingPeriodInput() {
    return this._countingPeriod;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // minimal_avg_transfer_rate_threshold - computed: false, optional: false, required: true
  private _minimalAvgTransferRateThreshold?: string; 
  public get minimalAvgTransferRateThreshold() {
    return this.getStringAttribute('minimal_avg_transfer_rate_threshold');
  }
  public set minimalAvgTransferRateThreshold(value: string) {
    this._minimalAvgTransferRateThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalAvgTransferRateThresholdInput() {
    return this._minimalAvgTransferRateThreshold;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseRequestBodyTransferTimeout {
  /**
  * Whether the text transmission timeout is enabled. The possible values are: <li>on: enabled; </li><li>off: disabled. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#enabled TeoSecurityPolicyConfig#enabled}
  */
  readonly enabled: string;
  /**
  * The text transmission timeout period is between 5 and 120, and the unit only supports seconds (s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#idle_timeout TeoSecurityPolicyConfig#idle_timeout}
  */
  readonly idleTimeout: string;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseRequestBodyTransferTimeoutToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseRequestBodyTransferTimeoutOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseRequestBodyTransferTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.stringToTerraform(struct!.enabled),
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseRequestBodyTransferTimeoutToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseRequestBodyTransferTimeoutOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseRequestBodyTransferTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseRequestBodyTransferTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseRequestBodyTransferTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseRequestBodyTransferTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._idleTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._idleTimeout = value.idleTimeout;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // idle_timeout - computed: false, optional: false, required: true
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefense {
  /**
  * Whether slow attack protection is enabled. The possible values are: <li>on: enabled; </li><li>off: disabled. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#enabled TeoSecurityPolicyConfig#enabled}
  */
  readonly enabled: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#action TeoSecurityPolicyConfig#action}
  */
  readonly action?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseAction;
  /**
  * minimal_request_body_transfer_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#minimal_request_body_transfer_rate TeoSecurityPolicyConfig#minimal_request_body_transfer_rate}
  */
  readonly minimalRequestBodyTransferRate?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseMinimalRequestBodyTransferRate;
  /**
  * request_body_transfer_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#request_body_transfer_timeout TeoSecurityPolicyConfig#request_body_transfer_timeout}
  */
  readonly requestBodyTransferTimeout?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseRequestBodyTransferTimeout;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.stringToTerraform(struct!.enabled),
    action: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionToTerraform(struct!.action),
    minimal_request_body_transfer_rate: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseMinimalRequestBodyTransferRateToTerraform(struct!.minimalRequestBodyTransferRate),
    request_body_transfer_timeout: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseRequestBodyTransferTimeoutToTerraform(struct!.requestBodyTransferTimeout),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionList",
    },
    minimal_request_body_transfer_rate: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseMinimalRequestBodyTransferRateToHclTerraform(struct!.minimalRequestBodyTransferRate),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseMinimalRequestBodyTransferRateList",
    },
    request_body_transfer_timeout: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseRequestBodyTransferTimeoutToHclTerraform(struct!.requestBodyTransferTimeout),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseRequestBodyTransferTimeoutList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._minimalRequestBodyTransferRate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimalRequestBodyTransferRate = this._minimalRequestBodyTransferRate?.internalValue;
    }
    if (this._requestBodyTransferTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBodyTransferTimeout = this._requestBodyTransferTimeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._action.internalValue = undefined;
      this._minimalRequestBodyTransferRate.internalValue = undefined;
      this._requestBodyTransferTimeout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._action.internalValue = value.action;
      this._minimalRequestBodyTransferRate.internalValue = value.minimalRequestBodyTransferRate;
      this._requestBodyTransferTimeout.internalValue = value.requestBodyTransferTimeout;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // action - computed: false, optional: true, required: false
  private _action = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // minimal_request_body_transfer_rate - computed: false, optional: true, required: false
  private _minimalRequestBodyTransferRate = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseMinimalRequestBodyTransferRateOutputReference(this, "minimal_request_body_transfer_rate");
  public get minimalRequestBodyTransferRate() {
    return this._minimalRequestBodyTransferRate;
  }
  public putMinimalRequestBodyTransferRate(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseMinimalRequestBodyTransferRate) {
    this._minimalRequestBodyTransferRate.internalValue = value;
  }
  public resetMinimalRequestBodyTransferRate() {
    this._minimalRequestBodyTransferRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalRequestBodyTransferRateInput() {
    return this._minimalRequestBodyTransferRate.internalValue;
  }

  // request_body_transfer_timeout - computed: false, optional: true, required: false
  private _requestBodyTransferTimeout = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseRequestBodyTransferTimeoutOutputReference(this, "request_body_transfer_timeout");
  public get requestBodyTransferTimeout() {
    return this._requestBodyTransferTimeout;
  }
  public putRequestBodyTransferTimeout(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseRequestBodyTransferTimeout) {
    this._requestBodyTransferTimeout.internalValue = value;
  }
  public resetRequestBodyTransferTimeout() {
    this._requestBodyTransferTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyTransferTimeoutInput() {
    return this._requestBodyTransferTimeout.internalValue;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtection {
  /**
  * adaptive_frequency_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#adaptive_frequency_control TeoSecurityPolicyConfig#adaptive_frequency_control}
  */
  readonly adaptiveFrequencyControl?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControl;
  /**
  * bandwidth_abuse_defense block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#bandwidth_abuse_defense TeoSecurityPolicyConfig#bandwidth_abuse_defense}
  */
  readonly bandwidthAbuseDefense?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefense;
  /**
  * client_filtering block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#client_filtering TeoSecurityPolicyConfig#client_filtering}
  */
  readonly clientFiltering?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFiltering;
  /**
  * slow_attack_defense block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#slow_attack_defense TeoSecurityPolicyConfig#slow_attack_defense}
  */
  readonly slowAttackDefense?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefense;
}

export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adaptive_frequency_control: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlToTerraform(struct!.adaptiveFrequencyControl),
    bandwidth_abuse_defense: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseToTerraform(struct!.bandwidthAbuseDefense),
    client_filtering: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringToTerraform(struct!.clientFiltering),
    slow_attack_defense: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseToTerraform(struct!.slowAttackDefense),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionOutputReference | TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adaptive_frequency_control: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlToHclTerraform(struct!.adaptiveFrequencyControl),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlList",
    },
    bandwidth_abuse_defense: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseToHclTerraform(struct!.bandwidthAbuseDefense),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseList",
    },
    client_filtering: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringToHclTerraform(struct!.clientFiltering),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringList",
    },
    slow_attack_defense: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseToHclTerraform(struct!.slowAttackDefense),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adaptiveFrequencyControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adaptiveFrequencyControl = this._adaptiveFrequencyControl?.internalValue;
    }
    if (this._bandwidthAbuseDefense?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthAbuseDefense = this._bandwidthAbuseDefense?.internalValue;
    }
    if (this._clientFiltering?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientFiltering = this._clientFiltering?.internalValue;
    }
    if (this._slowAttackDefense?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowAttackDefense = this._slowAttackDefense?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adaptiveFrequencyControl.internalValue = undefined;
      this._bandwidthAbuseDefense.internalValue = undefined;
      this._clientFiltering.internalValue = undefined;
      this._slowAttackDefense.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adaptiveFrequencyControl.internalValue = value.adaptiveFrequencyControl;
      this._bandwidthAbuseDefense.internalValue = value.bandwidthAbuseDefense;
      this._clientFiltering.internalValue = value.clientFiltering;
      this._slowAttackDefense.internalValue = value.slowAttackDefense;
    }
  }

  // adaptive_frequency_control - computed: false, optional: true, required: false
  private _adaptiveFrequencyControl = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControlOutputReference(this, "adaptive_frequency_control");
  public get adaptiveFrequencyControl() {
    return this._adaptiveFrequencyControl;
  }
  public putAdaptiveFrequencyControl(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionAdaptiveFrequencyControl) {
    this._adaptiveFrequencyControl.internalValue = value;
  }
  public resetAdaptiveFrequencyControl() {
    this._adaptiveFrequencyControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveFrequencyControlInput() {
    return this._adaptiveFrequencyControl.internalValue;
  }

  // bandwidth_abuse_defense - computed: false, optional: true, required: false
  private _bandwidthAbuseDefense = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefenseOutputReference(this, "bandwidth_abuse_defense");
  public get bandwidthAbuseDefense() {
    return this._bandwidthAbuseDefense;
  }
  public putBandwidthAbuseDefense(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionBandwidthAbuseDefense) {
    this._bandwidthAbuseDefense.internalValue = value;
  }
  public resetBandwidthAbuseDefense() {
    this._bandwidthAbuseDefense.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthAbuseDefenseInput() {
    return this._bandwidthAbuseDefense.internalValue;
  }

  // client_filtering - computed: false, optional: true, required: false
  private _clientFiltering = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFilteringOutputReference(this, "client_filtering");
  public get clientFiltering() {
    return this._clientFiltering;
  }
  public putClientFiltering(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionClientFiltering) {
    this._clientFiltering.internalValue = value;
  }
  public resetClientFiltering() {
    this._clientFiltering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFilteringInput() {
    return this._clientFiltering.internalValue;
  }

  // slow_attack_defense - computed: false, optional: true, required: false
  private _slowAttackDefense = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefenseOutputReference(this, "slow_attack_defense");
  public get slowAttackDefense() {
    return this._slowAttackDefense;
  }
  public putSlowAttackDefense(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionSlowAttackDefense) {
    this._slowAttackDefense.internalValue = value;
  }
  public resetSlowAttackDefense() {
    this._slowAttackDefense.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowAttackDefenseInput() {
    return this._slowAttackDefense.internalValue;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyManagedRulesAutoUpdate {
  /**
  * Indicates whether to enable automatic update to the latest version. valid values: <li>on: enabled</li> <li>off: disabled</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#auto_update_to_latest_version TeoSecurityPolicyConfig#auto_update_to_latest_version}
  */
  readonly autoUpdateToLatestVersion: string;
}

export function teoSecurityPolicyConfigSecurityPolicyManagedRulesAutoUpdateToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesAutoUpdateOutputReference | TeoSecurityPolicyConfigSecurityPolicyManagedRulesAutoUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_update_to_latest_version: cdktf.stringToTerraform(struct!.autoUpdateToLatestVersion),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyManagedRulesAutoUpdateToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesAutoUpdateOutputReference | TeoSecurityPolicyConfigSecurityPolicyManagedRulesAutoUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_update_to_latest_version: {
      value: cdktf.stringToHclTerraform(struct!.autoUpdateToLatestVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyManagedRulesAutoUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyManagedRulesAutoUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoUpdateToLatestVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpdateToLatestVersion = this._autoUpdateToLatestVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyManagedRulesAutoUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoUpdateToLatestVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoUpdateToLatestVersion = value.autoUpdateToLatestVersion;
    }
  }

  // auto_update_to_latest_version - computed: false, optional: false, required: true
  private _autoUpdateToLatestVersion?: string; 
  public get autoUpdateToLatestVersion() {
    return this.getStringAttribute('auto_update_to_latest_version');
  }
  public set autoUpdateToLatestVersion(value: string) {
    this._autoUpdateToLatestVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateToLatestVersionInput() {
    return this._autoUpdateToLatestVersion;
  }

  // ruleset_version - computed: true, optional: false, required: false
  public get rulesetVersion() {
    return this.getStringAttribute('ruleset_version');
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsMetaDataRuleDetails {
}

export function teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsMetaDataRuleDetailsToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsMetaDataRuleDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsMetaDataRuleDetailsToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsMetaDataRuleDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsMetaDataRuleDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsMetaDataRuleDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsMetaDataRuleDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // risk_level - computed: true, optional: false, required: false
  public get riskLevel() {
    return this.getStringAttribute('risk_level');
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // rule_version - computed: true, optional: false, required: false
  public get ruleVersion() {
    return this.getStringAttribute('rule_version');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
}

export class TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsMetaDataRuleDetailsList extends cdktf.ComplexList {

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
  public get(index: number): TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsMetaDataRuleDetailsOutputReference {
    return new TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsMetaDataRuleDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsMetaData {
}

export function teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsMetaDataToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsMetaData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsMetaDataToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsMetaData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsMetaDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsMetaData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsMetaData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_detail - computed: true, optional: false, required: false
  public get groupDetail() {
    return this.getStringAttribute('group_detail');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // rule_details - computed: true, optional: false, required: false
  private _ruleDetails = new TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsMetaDataRuleDetailsList(this, "rule_details", false);
  public get ruleDetails() {
    return this._ruleDetails;
  }
}

export class TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsMetaDataList extends cdktf.ComplexList {

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
  public get(index: number): TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsMetaDataOutputReference {
    return new TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsMetaDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionBlockIpActionParameters {
  /**
  * Penalty duration for blocking ips. supported units: <li>s: second, value range 1-120;</li> <li>m: minute, value range 1-120;</li> <li>h: hour, value range 1-48.</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#duration TeoSecurityPolicyConfig#duration}
  */
  readonly duration: string;
}

export function teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionBlockIpActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionBlockIpActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionBlockIpActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionBlockIpActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionBlockIpActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionBlockIpActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionBlockIpActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionBlockIpActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionBlockIpActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionRedirectActionParameters {
  /**
  * Redirect URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#url TeoSecurityPolicyConfig#url}
  */
  readonly url: string;
}

export function teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionRedirectActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionRedirectActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionRedirectActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionRedirectActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionRedirectActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionRedirectActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionRedirectActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionRedirectActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionRedirectActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionReturnCustomPageActionParameters {
  /**
  * Response custom page ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#error_page_id TeoSecurityPolicyConfig#error_page_id}
  */
  readonly errorPageId: string;
  /**
  * Response status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#response_code TeoSecurityPolicyConfig#response_code}
  */
  readonly responseCode: string;
}

export function teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionReturnCustomPageActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionReturnCustomPageActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionReturnCustomPageActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_page_id: cdktf.stringToTerraform(struct!.errorPageId),
    response_code: cdktf.stringToTerraform(struct!.responseCode),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionReturnCustomPageActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionReturnCustomPageActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionReturnCustomPageActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_page_id: {
      value: cdktf.stringToHclTerraform(struct!.errorPageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.stringToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionReturnCustomPageActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionReturnCustomPageActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorPageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorPageId = this._errorPageId;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionReturnCustomPageActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorPageId = undefined;
      this._responseCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorPageId = value.errorPageId;
      this._responseCode = value.responseCode;
    }
  }

  // error_page_id - computed: false, optional: false, required: true
  private _errorPageId?: string; 
  public get errorPageId() {
    return this.getStringAttribute('error_page_id');
  }
  public set errorPageId(value: string) {
    this._errorPageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPageIdInput() {
    return this._errorPageId;
  }

  // response_code - computed: false, optional: false, required: true
  private _responseCode?: string; 
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
  public set responseCode(value: string) {
    this._responseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsAction {
  /**
  * Specific actions for safe execution. valid values:.
  * <li>Deny: block</li> <li>Monitor: Monitor</li> <li>ReturnCustomPage: use specified page to block</li> <li>Redirect: Redirect to URL</li> <li>BlockIP: IP block</li> <li>JSChallenge: JavaScript challenge</li> <li>ManagedChallenge: managed challenge</li> <li>Disabled: Disabled</li> <li>Allow: Allow</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#name TeoSecurityPolicyConfig#name}
  */
  readonly name: string;
  /**
  * block_ip_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#block_ip_action_parameters TeoSecurityPolicyConfig#block_ip_action_parameters}
  */
  readonly blockIpActionParameters?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionBlockIpActionParameters;
  /**
  * redirect_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#redirect_action_parameters TeoSecurityPolicyConfig#redirect_action_parameters}
  */
  readonly redirectActionParameters?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionRedirectActionParameters;
  /**
  * return_custom_page_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#return_custom_page_action_parameters TeoSecurityPolicyConfig#return_custom_page_action_parameters}
  */
  readonly returnCustomPageActionParameters?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionReturnCustomPageActionParameters;
}

export function teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionOutputReference | TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    block_ip_action_parameters: teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionBlockIpActionParametersToTerraform(struct!.blockIpActionParameters),
    redirect_action_parameters: teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionRedirectActionParametersToTerraform(struct!.redirectActionParameters),
    return_custom_page_action_parameters: teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionReturnCustomPageActionParametersToTerraform(struct!.returnCustomPageActionParameters),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionOutputReference | TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_ip_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionBlockIpActionParametersToHclTerraform(struct!.blockIpActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionBlockIpActionParametersList",
    },
    redirect_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionRedirectActionParametersToHclTerraform(struct!.redirectActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionRedirectActionParametersList",
    },
    return_custom_page_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionReturnCustomPageActionParametersToHclTerraform(struct!.returnCustomPageActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionReturnCustomPageActionParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._blockIpActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIpActionParameters = this._blockIpActionParameters?.internalValue;
    }
    if (this._redirectActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectActionParameters = this._redirectActionParameters?.internalValue;
    }
    if (this._returnCustomPageActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnCustomPageActionParameters = this._returnCustomPageActionParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._blockIpActionParameters.internalValue = undefined;
      this._redirectActionParameters.internalValue = undefined;
      this._returnCustomPageActionParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._blockIpActionParameters.internalValue = value.blockIpActionParameters;
      this._redirectActionParameters.internalValue = value.redirectActionParameters;
      this._returnCustomPageActionParameters.internalValue = value.returnCustomPageActionParameters;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // block_ip_action_parameters - computed: false, optional: true, required: false
  private _blockIpActionParameters = new TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionBlockIpActionParametersOutputReference(this, "block_ip_action_parameters");
  public get blockIpActionParameters() {
    return this._blockIpActionParameters;
  }
  public putBlockIpActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionBlockIpActionParameters) {
    this._blockIpActionParameters.internalValue = value;
  }
  public resetBlockIpActionParameters() {
    this._blockIpActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpActionParametersInput() {
    return this._blockIpActionParameters.internalValue;
  }

  // redirect_action_parameters - computed: false, optional: true, required: false
  private _redirectActionParameters = new TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionRedirectActionParametersOutputReference(this, "redirect_action_parameters");
  public get redirectActionParameters() {
    return this._redirectActionParameters;
  }
  public putRedirectActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionRedirectActionParameters) {
    this._redirectActionParameters.internalValue = value;
  }
  public resetRedirectActionParameters() {
    this._redirectActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectActionParametersInput() {
    return this._redirectActionParameters.internalValue;
  }

  // return_custom_page_action_parameters - computed: false, optional: true, required: false
  private _returnCustomPageActionParameters = new TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionReturnCustomPageActionParametersOutputReference(this, "return_custom_page_action_parameters");
  public get returnCustomPageActionParameters() {
    return this._returnCustomPageActionParameters;
  }
  public putReturnCustomPageActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionReturnCustomPageActionParameters) {
    this._returnCustomPageActionParameters.internalValue = value;
  }
  public resetReturnCustomPageActionParameters() {
    this._returnCustomPageActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnCustomPageActionParametersInput() {
    return this._returnCustomPageActionParameters.internalValue;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionBlockIpActionParameters {
  /**
  * Penalty duration for blocking ips. supported units: <li>s: second, value range 1-120;</li> <li>m: minute, value range 1-120;</li> <li>h: hour, value range 1-48.</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#duration TeoSecurityPolicyConfig#duration}
  */
  readonly duration: string;
}

export function teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionBlockIpActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionBlockIpActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionBlockIpActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionBlockIpActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionBlockIpActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionBlockIpActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionBlockIpActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionBlockIpActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionBlockIpActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionRedirectActionParameters {
  /**
  * Redirect URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#url TeoSecurityPolicyConfig#url}
  */
  readonly url: string;
}

export function teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionRedirectActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionRedirectActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionRedirectActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionRedirectActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionRedirectActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionRedirectActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionRedirectActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionRedirectActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionRedirectActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionReturnCustomPageActionParameters {
  /**
  * Response custom page ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#error_page_id TeoSecurityPolicyConfig#error_page_id}
  */
  readonly errorPageId: string;
  /**
  * Response status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#response_code TeoSecurityPolicyConfig#response_code}
  */
  readonly responseCode: string;
}

export function teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionReturnCustomPageActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionReturnCustomPageActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionReturnCustomPageActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_page_id: cdktf.stringToTerraform(struct!.errorPageId),
    response_code: cdktf.stringToTerraform(struct!.responseCode),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionReturnCustomPageActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionReturnCustomPageActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionReturnCustomPageActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_page_id: {
      value: cdktf.stringToHclTerraform(struct!.errorPageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.stringToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionReturnCustomPageActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionReturnCustomPageActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorPageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorPageId = this._errorPageId;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionReturnCustomPageActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorPageId = undefined;
      this._responseCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorPageId = value.errorPageId;
      this._responseCode = value.responseCode;
    }
  }

  // error_page_id - computed: false, optional: false, required: true
  private _errorPageId?: string; 
  public get errorPageId() {
    return this.getStringAttribute('error_page_id');
  }
  public set errorPageId(value: string) {
    this._errorPageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPageIdInput() {
    return this._errorPageId;
  }

  // response_code - computed: false, optional: false, required: true
  private _responseCode?: string; 
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
  public set responseCode(value: string) {
    this._responseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsAction {
  /**
  * Specific actions for safe execution. valid values:.
  * <li>Deny: block</li> <li>Monitor: Monitor</li> <li>ReturnCustomPage: use specified page to block</li> <li>Redirect: Redirect to URL</li> <li>BlockIP: IP block</li> <li>JSChallenge: JavaScript challenge</li> <li>ManagedChallenge: managed challenge</li> <li>Disabled: Disabled</li> <li>Allow: Allow</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#name TeoSecurityPolicyConfig#name}
  */
  readonly name: string;
  /**
  * block_ip_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#block_ip_action_parameters TeoSecurityPolicyConfig#block_ip_action_parameters}
  */
  readonly blockIpActionParameters?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionBlockIpActionParameters;
  /**
  * redirect_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#redirect_action_parameters TeoSecurityPolicyConfig#redirect_action_parameters}
  */
  readonly redirectActionParameters?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionRedirectActionParameters;
  /**
  * return_custom_page_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#return_custom_page_action_parameters TeoSecurityPolicyConfig#return_custom_page_action_parameters}
  */
  readonly returnCustomPageActionParameters?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionReturnCustomPageActionParameters;
}

export function teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionOutputReference | TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    block_ip_action_parameters: teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionBlockIpActionParametersToTerraform(struct!.blockIpActionParameters),
    redirect_action_parameters: teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionRedirectActionParametersToTerraform(struct!.redirectActionParameters),
    return_custom_page_action_parameters: teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionReturnCustomPageActionParametersToTerraform(struct!.returnCustomPageActionParameters),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionOutputReference | TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_ip_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionBlockIpActionParametersToHclTerraform(struct!.blockIpActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionBlockIpActionParametersList",
    },
    redirect_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionRedirectActionParametersToHclTerraform(struct!.redirectActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionRedirectActionParametersList",
    },
    return_custom_page_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionReturnCustomPageActionParametersToHclTerraform(struct!.returnCustomPageActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionReturnCustomPageActionParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._blockIpActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIpActionParameters = this._blockIpActionParameters?.internalValue;
    }
    if (this._redirectActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectActionParameters = this._redirectActionParameters?.internalValue;
    }
    if (this._returnCustomPageActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnCustomPageActionParameters = this._returnCustomPageActionParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._blockIpActionParameters.internalValue = undefined;
      this._redirectActionParameters.internalValue = undefined;
      this._returnCustomPageActionParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._blockIpActionParameters.internalValue = value.blockIpActionParameters;
      this._redirectActionParameters.internalValue = value.redirectActionParameters;
      this._returnCustomPageActionParameters.internalValue = value.returnCustomPageActionParameters;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // block_ip_action_parameters - computed: false, optional: true, required: false
  private _blockIpActionParameters = new TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionBlockIpActionParametersOutputReference(this, "block_ip_action_parameters");
  public get blockIpActionParameters() {
    return this._blockIpActionParameters;
  }
  public putBlockIpActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionBlockIpActionParameters) {
    this._blockIpActionParameters.internalValue = value;
  }
  public resetBlockIpActionParameters() {
    this._blockIpActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpActionParametersInput() {
    return this._blockIpActionParameters.internalValue;
  }

  // redirect_action_parameters - computed: false, optional: true, required: false
  private _redirectActionParameters = new TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionRedirectActionParametersOutputReference(this, "redirect_action_parameters");
  public get redirectActionParameters() {
    return this._redirectActionParameters;
  }
  public putRedirectActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionRedirectActionParameters) {
    this._redirectActionParameters.internalValue = value;
  }
  public resetRedirectActionParameters() {
    this._redirectActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectActionParametersInput() {
    return this._redirectActionParameters.internalValue;
  }

  // return_custom_page_action_parameters - computed: false, optional: true, required: false
  private _returnCustomPageActionParameters = new TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionReturnCustomPageActionParametersOutputReference(this, "return_custom_page_action_parameters");
  public get returnCustomPageActionParameters() {
    return this._returnCustomPageActionParameters;
  }
  public putReturnCustomPageActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionReturnCustomPageActionParameters) {
    this._returnCustomPageActionParameters.internalValue = value;
  }
  public resetReturnCustomPageActionParameters() {
    this._returnCustomPageActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnCustomPageActionParametersInput() {
    return this._returnCustomPageActionParameters.internalValue;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActions {
  /**
  * Specific items under the managed rule group, which are used to rewrite the configuration content of this individual rule item. refer to product documentation for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#rule_id TeoSecurityPolicyConfig#rule_id}
  */
  readonly ruleId: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#action TeoSecurityPolicyConfig#action}
  */
  readonly action: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsAction;
}

export function teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_id: cdktf.stringToTerraform(struct!.ruleId),
    action: teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionToTerraform(struct!.action),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_id: {
      value: cdktf.stringToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleId = undefined;
      this._action.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleId = value.ruleId;
      this._action.internalValue = value.action;
    }
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

  // action - computed: false, optional: false, required: true
  private _action = new TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }
}

export class TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsList extends cdktf.ComplexList {
  public internalValue? : TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActions[] | cdktf.IResolvable

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
  public get(index: number): TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsOutputReference {
    return new TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroups {
  /**
  * Group name of the managed rule. if the rule group for the configuration is not specified, it will be processed based on the default configuration. refer to product documentation for the specific value of GroupId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#group_id TeoSecurityPolicyConfig#group_id}
  */
  readonly groupId: string;
  /**
  * Protection level of the managed rule group. valid values: <li>loose: lenient, only contains ultra-high risk rules. at this point, configure Action, and RuleActions configuration is invalid;</li> <li>normal: normal, contains ultra-high risk and high-risk rules. at this point, configure Action, and RuleActions configuration is invalid;</li> <li>strict: strict, contains ultra-high risk, high-risk and medium-risk rules. at this point, configure Action, and RuleActions configuration is invalid;</li> <li>extreme: super strict, contains ultra-high risk, high-risk, medium-risk and low-risk rules. at this point, configure Action, and RuleActions configuration is invalid;</li> <li>custom: custom, refined strategy. configure the disposal method for each individual rule. at this point, the Action field is invalid. use RuleActions to configure the refined strategy for each individual rule.</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#sensitivity_level TeoSecurityPolicyConfig#sensitivity_level}
  */
  readonly sensitivityLevel: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#action TeoSecurityPolicyConfig#action}
  */
  readonly action: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsAction;
  /**
  * rule_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#rule_actions TeoSecurityPolicyConfig#rule_actions}
  */
  readonly ruleActions?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActions[] | cdktf.IResolvable;
}

export function teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
    sensitivity_level: cdktf.stringToTerraform(struct!.sensitivityLevel),
    action: teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionToTerraform(struct!.action),
    rule_actions: cdktf.listMapper(teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsToTerraform, true)(struct!.ruleActions),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity_level: {
      value: cdktf.stringToHclTerraform(struct!.sensitivityLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionList",
    },
    rule_actions: {
      value: cdktf.listMapperHcl(teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsToHclTerraform, true)(struct!.ruleActions),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._sensitivityLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityLevel = this._sensitivityLevel;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._ruleActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleActions = this._ruleActions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupId = undefined;
      this._sensitivityLevel = undefined;
      this._action.internalValue = undefined;
      this._ruleActions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupId = value.groupId;
      this._sensitivityLevel = value.sensitivityLevel;
      this._action.internalValue = value.action;
      this._ruleActions.internalValue = value.ruleActions;
    }
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // meta_data - computed: true, optional: false, required: false
  private _metaData = new TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsMetaDataList(this, "meta_data", false);
  public get metaData() {
    return this._metaData;
  }

  // sensitivity_level - computed: false, optional: false, required: true
  private _sensitivityLevel?: string; 
  public get sensitivityLevel() {
    return this.getStringAttribute('sensitivity_level');
  }
  public set sensitivityLevel(value: string) {
    this._sensitivityLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityLevelInput() {
    return this._sensitivityLevel;
  }

  // action - computed: false, optional: false, required: true
  private _action = new TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // rule_actions - computed: false, optional: true, required: false
  private _ruleActions = new TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActionsList(this, "rule_actions", false);
  public get ruleActions() {
    return this._ruleActions;
  }
  public putRuleActions(value: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsRuleActions[] | cdktf.IResolvable) {
    this._ruleActions.internalValue = value;
  }
  public resetRuleActions() {
    this._ruleActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleActionsInput() {
    return this._ruleActions.internalValue;
  }
}

export class TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsList extends cdktf.ComplexList {
  public internalValue? : TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroups[] | cdktf.IResolvable

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
  public get(index: number): TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsOutputReference {
    return new TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyManagedRules {
  /**
  * Indicates whether the evaluation mode is Enabled. it is valid only when the Enabled parameter is set to on. valid values: <li>on: Enabled. all managed rules take effect in observation mode.</li> <li>off: disabled. all managed rules take effect according to the actual configuration.</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#detection_only TeoSecurityPolicyConfig#detection_only}
  */
  readonly detectionOnly: string;
  /**
  * Indicates whether the managed rule is enabled. valid values: <li>on: enabled. all managed rules take effect as configured;</li> <li>off: disabled. all managed rules do not take effect.</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#enabled TeoSecurityPolicyConfig#enabled}
  */
  readonly enabled: string;
  /**
  * Whether the managed rule semantic analysis option is Enabled is valid only when the Enabled parameter is on. valid values: <li>on: enable. perform semantic analysis on requests before processing them;</li> <li>off: disable. process requests directly without semantic analysis.</li> <br/>default off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#semantic_analysis TeoSecurityPolicyConfig#semantic_analysis}
  */
  readonly semanticAnalysis?: string;
  /**
  * auto_update block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#auto_update TeoSecurityPolicyConfig#auto_update}
  */
  readonly autoUpdate?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesAutoUpdate;
  /**
  * managed_rule_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#managed_rule_groups TeoSecurityPolicyConfig#managed_rule_groups}
  */
  readonly managedRuleGroups?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroups[] | cdktf.IResolvable;
}

export function teoSecurityPolicyConfigSecurityPolicyManagedRulesToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesOutputReference | TeoSecurityPolicyConfigSecurityPolicyManagedRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_only: cdktf.stringToTerraform(struct!.detectionOnly),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    semantic_analysis: cdktf.stringToTerraform(struct!.semanticAnalysis),
    auto_update: teoSecurityPolicyConfigSecurityPolicyManagedRulesAutoUpdateToTerraform(struct!.autoUpdate),
    managed_rule_groups: cdktf.listMapper(teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsToTerraform, true)(struct!.managedRuleGroups),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyManagedRulesToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyManagedRulesOutputReference | TeoSecurityPolicyConfigSecurityPolicyManagedRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detection_only: {
      value: cdktf.stringToHclTerraform(struct!.detectionOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    semantic_analysis: {
      value: cdktf.stringToHclTerraform(struct!.semanticAnalysis),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_update: {
      value: teoSecurityPolicyConfigSecurityPolicyManagedRulesAutoUpdateToHclTerraform(struct!.autoUpdate),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyManagedRulesAutoUpdateList",
    },
    managed_rule_groups: {
      value: cdktf.listMapperHcl(teoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsToHclTerraform, true)(struct!.managedRuleGroups),
      isBlock: true,
      type: "set",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyManagedRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyManagedRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectionOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionOnly = this._detectionOnly;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._semanticAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.semanticAnalysis = this._semanticAnalysis;
    }
    if (this._autoUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpdate = this._autoUpdate?.internalValue;
    }
    if (this._managedRuleGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedRuleGroups = this._managedRuleGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyManagedRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detectionOnly = undefined;
      this._enabled = undefined;
      this._semanticAnalysis = undefined;
      this._autoUpdate.internalValue = undefined;
      this._managedRuleGroups.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detectionOnly = value.detectionOnly;
      this._enabled = value.enabled;
      this._semanticAnalysis = value.semanticAnalysis;
      this._autoUpdate.internalValue = value.autoUpdate;
      this._managedRuleGroups.internalValue = value.managedRuleGroups;
    }
  }

  // detection_only - computed: false, optional: false, required: true
  private _detectionOnly?: string; 
  public get detectionOnly() {
    return this.getStringAttribute('detection_only');
  }
  public set detectionOnly(value: string) {
    this._detectionOnly = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionOnlyInput() {
    return this._detectionOnly;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // semantic_analysis - computed: false, optional: true, required: false
  private _semanticAnalysis?: string; 
  public get semanticAnalysis() {
    return this.getStringAttribute('semantic_analysis');
  }
  public set semanticAnalysis(value: string) {
    this._semanticAnalysis = value;
  }
  public resetSemanticAnalysis() {
    this._semanticAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get semanticAnalysisInput() {
    return this._semanticAnalysis;
  }

  // auto_update - computed: false, optional: true, required: false
  private _autoUpdate = new TeoSecurityPolicyConfigSecurityPolicyManagedRulesAutoUpdateOutputReference(this, "auto_update");
  public get autoUpdate() {
    return this._autoUpdate;
  }
  public putAutoUpdate(value: TeoSecurityPolicyConfigSecurityPolicyManagedRulesAutoUpdate) {
    this._autoUpdate.internalValue = value;
  }
  public resetAutoUpdate() {
    this._autoUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateInput() {
    return this._autoUpdate.internalValue;
  }

  // managed_rule_groups - computed: false, optional: true, required: false
  private _managedRuleGroups = new TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroupsList(this, "managed_rule_groups", true);
  public get managedRuleGroups() {
    return this._managedRuleGroups;
  }
  public putManagedRuleGroups(value: TeoSecurityPolicyConfigSecurityPolicyManagedRulesManagedRuleGroups[] | cdktf.IResolvable) {
    this._managedRuleGroups.internalValue = value;
  }
  public resetManagedRuleGroups() {
    this._managedRuleGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedRuleGroupsInput() {
    return this._managedRuleGroups.internalValue;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionBlockIpActionParameters {
  /**
  * The penalty duration for banning an IP. Supported units are: <li>s: seconds, value range 1 to 120; </li><li>m: minutes, value range 1 to 120; </li><li>h: hours, value range 1 to 48. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#duration TeoSecurityPolicyConfig#duration}
  */
  readonly duration: string;
}

export function teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionBlockIpActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionBlockIpActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionBlockIpActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionBlockIpActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionBlockIpActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionBlockIpActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionBlockIpActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionBlockIpActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionBlockIpActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionChallengeActionParameters {
  /**
  * Client authentication method ID. This field is required when Name is InterstitialChallenge/InlineChallenge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#attester_id TeoSecurityPolicyConfig#attester_id}
  */
  readonly attesterId?: string;
  /**
  * The specific challenge action to be executed safely. The possible values are: <li> InterstitialChallenge: interstitial challenge; </li><li> InlineChallenge: embedded challenge; </li><li> JSChallenge: JavaScript challenge; </li><li> ManagedChallenge: managed challenge. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#challenge_option TeoSecurityPolicyConfig#challenge_option}
  */
  readonly challengeOption: string;
  /**
  * The time interval for repeating the challenge. When Name is InterstitialChallenge/InlineChallenge, this field is required. The default value is 300s. Supported units are: <li>s: seconds, value range 1 to 60; </li><li>m: minutes, value range 1 to 60; </li><li>h: hours, value range 1 to 24. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#interval TeoSecurityPolicyConfig#interval}
  */
  readonly interval?: string;
}

export function teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionChallengeActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionChallengeActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionChallengeActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attester_id: cdktf.stringToTerraform(struct!.attesterId),
    challenge_option: cdktf.stringToTerraform(struct!.challengeOption),
    interval: cdktf.stringToTerraform(struct!.interval),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionChallengeActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionChallengeActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionChallengeActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attester_id: {
      value: cdktf.stringToHclTerraform(struct!.attesterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    challenge_option: {
      value: cdktf.stringToHclTerraform(struct!.challengeOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionChallengeActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionChallengeActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attesterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.attesterId = this._attesterId;
    }
    if (this._challengeOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeOption = this._challengeOption;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionChallengeActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attesterId = undefined;
      this._challengeOption = undefined;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attesterId = value.attesterId;
      this._challengeOption = value.challengeOption;
      this._interval = value.interval;
    }
  }

  // attester_id - computed: false, optional: true, required: false
  private _attesterId?: string; 
  public get attesterId() {
    return this.getStringAttribute('attester_id');
  }
  public set attesterId(value: string) {
    this._attesterId = value;
  }
  public resetAttesterId() {
    this._attesterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attesterIdInput() {
    return this._attesterId;
  }

  // challenge_option - computed: false, optional: false, required: true
  private _challengeOption?: string; 
  public get challengeOption() {
    return this.getStringAttribute('challenge_option');
  }
  public set challengeOption(value: string) {
    this._challengeOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeOptionInput() {
    return this._challengeOption;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionDenyActionParameters {
  /**
  * Whether to extend the blocking of source IP. The possible values are:
  * <li>on: on;</li>
  * <li>off: off.</li>
  * When enabled, the client IP that triggers the rule will be blocked continuously. When this option is enabled, the BlockIpDuration parameter must be specified at the same time.
  * Note: This option cannot be enabled at the same time as the ReturnCustomPage or Stall options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#block_ip TeoSecurityPolicyConfig#block_ip}
  */
  readonly blockIp?: string;
  /**
  * When BlockIP is on, the IP blocking duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#block_ip_duration TeoSecurityPolicyConfig#block_ip_duration}
  */
  readonly blockIpDuration?: string;
  /**
  * The PageId of the custom page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#error_page_id TeoSecurityPolicyConfig#error_page_id}
  */
  readonly errorPageId?: string;
  /**
  * Customize the status code of the page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#response_code TeoSecurityPolicyConfig#response_code}
  */
  readonly responseCode?: string;
  /**
  * Whether to use custom pages. The possible values are:
  * <li>on: on;</li>
  * <li>off: off.</li>
  * After enabling, use custom page content to intercept (respond to) requests. When enabling this option, you must specify the ResponseCode and ErrorPageId parameters at the same time.
  * Note: This option cannot be enabled at the same time as the BlockIp or Stall options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#return_custom_page TeoSecurityPolicyConfig#return_custom_page}
  */
  readonly returnCustomPage?: string;
  /**
  * Whether to ignore the request source suspension. The value is:
  * <li>on: Enable;</li>
  * <li>off: Disable.</li>
  * After enabling, it will no longer respond to requests in the current connection session and will not actively disconnect. It is used to fight against crawlers and consume client connection resources.
  * Note: This option cannot be enabled at the same time as the BlockIp or ReturnCustomPage options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#stall TeoSecurityPolicyConfig#stall}
  */
  readonly stall?: string;
}

export function teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionDenyActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionDenyActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionDenyActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_ip: cdktf.stringToTerraform(struct!.blockIp),
    block_ip_duration: cdktf.stringToTerraform(struct!.blockIpDuration),
    error_page_id: cdktf.stringToTerraform(struct!.errorPageId),
    response_code: cdktf.stringToTerraform(struct!.responseCode),
    return_custom_page: cdktf.stringToTerraform(struct!.returnCustomPage),
    stall: cdktf.stringToTerraform(struct!.stall),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionDenyActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionDenyActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionDenyActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_ip: {
      value: cdktf.stringToHclTerraform(struct!.blockIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_ip_duration: {
      value: cdktf.stringToHclTerraform(struct!.blockIpDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_page_id: {
      value: cdktf.stringToHclTerraform(struct!.errorPageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.stringToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    return_custom_page: {
      value: cdktf.stringToHclTerraform(struct!.returnCustomPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stall: {
      value: cdktf.stringToHclTerraform(struct!.stall),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionDenyActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionDenyActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIp = this._blockIp;
    }
    if (this._blockIpDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIpDuration = this._blockIpDuration;
    }
    if (this._errorPageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorPageId = this._errorPageId;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    if (this._returnCustomPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnCustomPage = this._returnCustomPage;
    }
    if (this._stall !== undefined) {
      hasAnyValues = true;
      internalValueResult.stall = this._stall;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionDenyActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockIp = undefined;
      this._blockIpDuration = undefined;
      this._errorPageId = undefined;
      this._responseCode = undefined;
      this._returnCustomPage = undefined;
      this._stall = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockIp = value.blockIp;
      this._blockIpDuration = value.blockIpDuration;
      this._errorPageId = value.errorPageId;
      this._responseCode = value.responseCode;
      this._returnCustomPage = value.returnCustomPage;
      this._stall = value.stall;
    }
  }

  // block_ip - computed: false, optional: true, required: false
  private _blockIp?: string; 
  public get blockIp() {
    return this.getStringAttribute('block_ip');
  }
  public set blockIp(value: string) {
    this._blockIp = value;
  }
  public resetBlockIp() {
    this._blockIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpInput() {
    return this._blockIp;
  }

  // block_ip_duration - computed: false, optional: true, required: false
  private _blockIpDuration?: string; 
  public get blockIpDuration() {
    return this.getStringAttribute('block_ip_duration');
  }
  public set blockIpDuration(value: string) {
    this._blockIpDuration = value;
  }
  public resetBlockIpDuration() {
    this._blockIpDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpDurationInput() {
    return this._blockIpDuration;
  }

  // error_page_id - computed: false, optional: true, required: false
  private _errorPageId?: string; 
  public get errorPageId() {
    return this.getStringAttribute('error_page_id');
  }
  public set errorPageId(value: string) {
    this._errorPageId = value;
  }
  public resetErrorPageId() {
    this._errorPageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPageIdInput() {
    return this._errorPageId;
  }

  // response_code - computed: false, optional: true, required: false
  private _responseCode?: string; 
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
  public set responseCode(value: string) {
    this._responseCode = value;
  }
  public resetResponseCode() {
    this._responseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }

  // return_custom_page - computed: false, optional: true, required: false
  private _returnCustomPage?: string; 
  public get returnCustomPage() {
    return this.getStringAttribute('return_custom_page');
  }
  public set returnCustomPage(value: string) {
    this._returnCustomPage = value;
  }
  public resetReturnCustomPage() {
    this._returnCustomPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnCustomPageInput() {
    return this._returnCustomPage;
  }

  // stall - computed: false, optional: true, required: false
  private _stall?: string; 
  public get stall() {
    return this.getStringAttribute('stall');
  }
  public set stall(value: string) {
    this._stall = value;
  }
  public resetStall() {
    this._stall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stallInput() {
    return this._stall;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionRedirectActionParameters {
  /**
  * The URL to redirect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#url TeoSecurityPolicyConfig#url}
  */
  readonly url: string;
}

export function teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionRedirectActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionRedirectActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionRedirectActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionRedirectActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionRedirectActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionRedirectActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionRedirectActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionRedirectActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionRedirectActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionReturnCustomPageActionParameters {
  /**
  * The custom page ID of the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#error_page_id TeoSecurityPolicyConfig#error_page_id}
  */
  readonly errorPageId: string;
  /**
  * Response status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#response_code TeoSecurityPolicyConfig#response_code}
  */
  readonly responseCode: string;
}

export function teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionReturnCustomPageActionParametersToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionReturnCustomPageActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionReturnCustomPageActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_page_id: cdktf.stringToTerraform(struct!.errorPageId),
    response_code: cdktf.stringToTerraform(struct!.responseCode),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionReturnCustomPageActionParametersToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionReturnCustomPageActionParametersOutputReference | TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionReturnCustomPageActionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_page_id: {
      value: cdktf.stringToHclTerraform(struct!.errorPageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.stringToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionReturnCustomPageActionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionReturnCustomPageActionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorPageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorPageId = this._errorPageId;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionReturnCustomPageActionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorPageId = undefined;
      this._responseCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorPageId = value.errorPageId;
      this._responseCode = value.responseCode;
    }
  }

  // error_page_id - computed: false, optional: false, required: true
  private _errorPageId?: string; 
  public get errorPageId() {
    return this.getStringAttribute('error_page_id');
  }
  public set errorPageId(value: string) {
    this._errorPageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPageIdInput() {
    return this._errorPageId;
  }

  // response_code - computed: false, optional: false, required: true
  private _responseCode?: string; 
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
  public set responseCode(value: string) {
    this._responseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesAction {
  /**
  * The specific action of security execution. The values are:
  * <li>Deny: intercept, block the request to access site resources;</li>
  * <li>Monitor: observe, only record logs;</li>
  * <li>Redirect: redirect to URL;</li>
  * <li>Disabled: disabled, do not enable the specified rule;</li>
  * <li>Allow: allow access, but delay processing requests;</li>
  * <li>Challenge: challenge, respond to challenge content;</li>
  * <li>BlockIP: to be abandoned, IP ban;</li>
  * <li>ReturnCustomPage: to be abandoned, use the specified page to intercept;</li>
  * <li>JSChallenge: to be abandoned, JavaScript challenge;</li>
  * <li>ManagedChallenge: to be abandoned, managed challenge.</li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#name TeoSecurityPolicyConfig#name}
  */
  readonly name: string;
  /**
  * block_ip_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#block_ip_action_parameters TeoSecurityPolicyConfig#block_ip_action_parameters}
  */
  readonly blockIpActionParameters?: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionBlockIpActionParameters;
  /**
  * challenge_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#challenge_action_parameters TeoSecurityPolicyConfig#challenge_action_parameters}
  */
  readonly challengeActionParameters?: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionChallengeActionParameters;
  /**
  * deny_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#deny_action_parameters TeoSecurityPolicyConfig#deny_action_parameters}
  */
  readonly denyActionParameters?: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionDenyActionParameters;
  /**
  * redirect_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#redirect_action_parameters TeoSecurityPolicyConfig#redirect_action_parameters}
  */
  readonly redirectActionParameters?: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionRedirectActionParameters;
  /**
  * return_custom_page_action_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#return_custom_page_action_parameters TeoSecurityPolicyConfig#return_custom_page_action_parameters}
  */
  readonly returnCustomPageActionParameters?: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionReturnCustomPageActionParameters;
}

export function teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionOutputReference | TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    block_ip_action_parameters: teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionBlockIpActionParametersToTerraform(struct!.blockIpActionParameters),
    challenge_action_parameters: teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionChallengeActionParametersToTerraform(struct!.challengeActionParameters),
    deny_action_parameters: teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionDenyActionParametersToTerraform(struct!.denyActionParameters),
    redirect_action_parameters: teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionRedirectActionParametersToTerraform(struct!.redirectActionParameters),
    return_custom_page_action_parameters: teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionReturnCustomPageActionParametersToTerraform(struct!.returnCustomPageActionParameters),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionOutputReference | TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_ip_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionBlockIpActionParametersToHclTerraform(struct!.blockIpActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionBlockIpActionParametersList",
    },
    challenge_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionChallengeActionParametersToHclTerraform(struct!.challengeActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionChallengeActionParametersList",
    },
    deny_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionDenyActionParametersToHclTerraform(struct!.denyActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionDenyActionParametersList",
    },
    redirect_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionRedirectActionParametersToHclTerraform(struct!.redirectActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionRedirectActionParametersList",
    },
    return_custom_page_action_parameters: {
      value: teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionReturnCustomPageActionParametersToHclTerraform(struct!.returnCustomPageActionParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionReturnCustomPageActionParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._blockIpActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIpActionParameters = this._blockIpActionParameters?.internalValue;
    }
    if (this._challengeActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeActionParameters = this._challengeActionParameters?.internalValue;
    }
    if (this._denyActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyActionParameters = this._denyActionParameters?.internalValue;
    }
    if (this._redirectActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectActionParameters = this._redirectActionParameters?.internalValue;
    }
    if (this._returnCustomPageActionParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnCustomPageActionParameters = this._returnCustomPageActionParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._blockIpActionParameters.internalValue = undefined;
      this._challengeActionParameters.internalValue = undefined;
      this._denyActionParameters.internalValue = undefined;
      this._redirectActionParameters.internalValue = undefined;
      this._returnCustomPageActionParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._blockIpActionParameters.internalValue = value.blockIpActionParameters;
      this._challengeActionParameters.internalValue = value.challengeActionParameters;
      this._denyActionParameters.internalValue = value.denyActionParameters;
      this._redirectActionParameters.internalValue = value.redirectActionParameters;
      this._returnCustomPageActionParameters.internalValue = value.returnCustomPageActionParameters;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // block_ip_action_parameters - computed: false, optional: true, required: false
  private _blockIpActionParameters = new TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionBlockIpActionParametersOutputReference(this, "block_ip_action_parameters");
  public get blockIpActionParameters() {
    return this._blockIpActionParameters;
  }
  public putBlockIpActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionBlockIpActionParameters) {
    this._blockIpActionParameters.internalValue = value;
  }
  public resetBlockIpActionParameters() {
    this._blockIpActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpActionParametersInput() {
    return this._blockIpActionParameters.internalValue;
  }

  // challenge_action_parameters - computed: false, optional: true, required: false
  private _challengeActionParameters = new TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionChallengeActionParametersOutputReference(this, "challenge_action_parameters");
  public get challengeActionParameters() {
    return this._challengeActionParameters;
  }
  public putChallengeActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionChallengeActionParameters) {
    this._challengeActionParameters.internalValue = value;
  }
  public resetChallengeActionParameters() {
    this._challengeActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeActionParametersInput() {
    return this._challengeActionParameters.internalValue;
  }

  // deny_action_parameters - computed: false, optional: true, required: false
  private _denyActionParameters = new TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionDenyActionParametersOutputReference(this, "deny_action_parameters");
  public get denyActionParameters() {
    return this._denyActionParameters;
  }
  public putDenyActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionDenyActionParameters) {
    this._denyActionParameters.internalValue = value;
  }
  public resetDenyActionParameters() {
    this._denyActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyActionParametersInput() {
    return this._denyActionParameters.internalValue;
  }

  // redirect_action_parameters - computed: false, optional: true, required: false
  private _redirectActionParameters = new TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionRedirectActionParametersOutputReference(this, "redirect_action_parameters");
  public get redirectActionParameters() {
    return this._redirectActionParameters;
  }
  public putRedirectActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionRedirectActionParameters) {
    this._redirectActionParameters.internalValue = value;
  }
  public resetRedirectActionParameters() {
    this._redirectActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectActionParametersInput() {
    return this._redirectActionParameters.internalValue;
  }

  // return_custom_page_action_parameters - computed: false, optional: true, required: false
  private _returnCustomPageActionParameters = new TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionReturnCustomPageActionParametersOutputReference(this, "return_custom_page_action_parameters");
  public get returnCustomPageActionParameters() {
    return this._returnCustomPageActionParameters;
  }
  public putReturnCustomPageActionParameters(value: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionReturnCustomPageActionParameters) {
    this._returnCustomPageActionParameters.internalValue = value;
  }
  public resetReturnCustomPageActionParameters() {
    this._returnCustomPageActionParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnCustomPageActionParametersInput() {
    return this._returnCustomPageActionParameters.internalValue;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRules {
  /**
  * Action The duration of the action. The supported units are: <li>s: seconds, with a value of 1 to 120; </li><li>m: minutes, with a value of 1 to 120; </li><li>h: hours, with a value of 1 to 48; </li><li>d: days, with a value of 1 to 30. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#action_duration TeoSecurityPolicyConfig#action_duration}
  */
  readonly actionDuration?: string;
  /**
  * The specific content of the precise rate limit must conform to the expression syntax. For detailed specifications, see the product documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#condition TeoSecurityPolicyConfig#condition}
  */
  readonly condition?: string;
  /**
  * The matching method of the rate threshold request feature. When Enabled is on, this field is required. <br /><br />When there are multiple conditions, multiple conditions will be combined for statistical calculation. The number of conditions cannot exceed 5. The possible values are: <br/><li><b>http.request.ip</b>: client IP; </li><li><b>http.request.xff_header_ip</b>: client IP (matching XFF header first); </li><li><b>http.request.uri.path</b>: requested access path; </li><li><b>http.request.cookies['session']</b>: cookie named session, where session can be replaced by the parameter you specify; </li><li><b>http.request.headers['user-agent']</b>: HTTP header named user-agent, where user-agent can be replaced by the parameter you specify; </li><li><b>http.request.ja3</b>: requested JA3 fingerprint; </li><li><b>http.request.uri.query['test']</b>: URL query parameter named test, where test can be replaced by the parameter you specify. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#count_by TeoSecurityPolicyConfig#count_by}
  */
  readonly countBy?: string[];
  /**
  * The statistical time window, the possible values are: <li>1s: 1 second; </li><li>5s: 5 seconds; </li><li>10s: 10 seconds; </li><li>20s: 20 seconds; </li><li>30s: 30 seconds; </li><li>40s: 40 seconds; </li><li>50s: 50 seconds; </li><li>1m: 1 minute; </li><li>2m: 2 minutes; </li><li>5m: 5 minutes; </li><li>10m: 10 minutes; </li><li>1h: 1 hour. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#counting_period TeoSecurityPolicyConfig#counting_period}
  */
  readonly countingPeriod?: string;
  /**
  * Whether the precise rate limit rule is enabled. The possible values are: <li>on: enabled; </li><li>off: disabled. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#enabled TeoSecurityPolicyConfig#enabled}
  */
  readonly enabled?: string;
  /**
  * The ID of the precise rate limit. <br>The rule ID can support different rule configuration operations: <br> <li> <b>Add</b> a new rule: the ID is empty or the ID parameter is not specified; </li><li> <b>Modify</b> an existing rule: specify the rule ID to be updated/modified; </li><li> <b>Delete</b> an existing rule: in the RateLimitingRules parameter, the existing rules not included in the Rules list will be deleted. </li>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#id TeoSecurityPolicyConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The cumulative number of interceptions within the time range of the precise rate limit, ranging from 1 to 100000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#max_request_threshold TeoSecurityPolicyConfig#max_request_threshold}
  */
  readonly maxRequestThreshold?: number;
  /**
  * The name of the precise rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#name TeoSecurityPolicyConfig#name}
  */
  readonly name?: string;
  /**
  * The priority of precise rate limiting ranges from 0 to 100, and the default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#priority TeoSecurityPolicyConfig#priority}
  */
  readonly priority?: number;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#action TeoSecurityPolicyConfig#action}
  */
  readonly action?: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesAction;
}

export function teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_duration: cdktf.stringToTerraform(struct!.actionDuration),
    condition: cdktf.stringToTerraform(struct!.condition),
    count_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countBy),
    counting_period: cdktf.stringToTerraform(struct!.countingPeriod),
    enabled: cdktf.stringToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    max_request_threshold: cdktf.numberToTerraform(struct!.maxRequestThreshold),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    action: teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionToTerraform(struct!.action),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_duration: {
      value: cdktf.stringToHclTerraform(struct!.actionDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countBy),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    counting_period: {
      value: cdktf.stringToHclTerraform(struct!.countingPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.stringToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_request_threshold: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action: {
      value: teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionDuration = this._actionDuration;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._countBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.countBy = this._countBy;
    }
    if (this._countingPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.countingPeriod = this._countingPeriod;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._maxRequestThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestThreshold = this._maxRequestThreshold;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionDuration = undefined;
      this._condition = undefined;
      this._countBy = undefined;
      this._countingPeriod = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._maxRequestThreshold = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._action.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionDuration = value.actionDuration;
      this._condition = value.condition;
      this._countBy = value.countBy;
      this._countingPeriod = value.countingPeriod;
      this._enabled = value.enabled;
      this._id = value.id;
      this._maxRequestThreshold = value.maxRequestThreshold;
      this._name = value.name;
      this._priority = value.priority;
      this._action.internalValue = value.action;
    }
  }

  // action_duration - computed: false, optional: true, required: false
  private _actionDuration?: string; 
  public get actionDuration() {
    return this.getStringAttribute('action_duration');
  }
  public set actionDuration(value: string) {
    this._actionDuration = value;
  }
  public resetActionDuration() {
    this._actionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionDurationInput() {
    return this._actionDuration;
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // count_by - computed: false, optional: true, required: false
  private _countBy?: string[]; 
  public get countBy() {
    return cdktf.Fn.tolist(this.getListAttribute('count_by'));
  }
  public set countBy(value: string[]) {
    this._countBy = value;
  }
  public resetCountBy() {
    this._countBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countByInput() {
    return this._countBy;
  }

  // counting_period - computed: false, optional: true, required: false
  private _countingPeriod?: string; 
  public get countingPeriod() {
    return this.getStringAttribute('counting_period');
  }
  public set countingPeriod(value: string) {
    this._countingPeriod = value;
  }
  public resetCountingPeriod() {
    this._countingPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countingPeriodInput() {
    return this._countingPeriod;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // max_request_threshold - computed: false, optional: true, required: false
  private _maxRequestThreshold?: number; 
  public get maxRequestThreshold() {
    return this.getNumberAttribute('max_request_threshold');
  }
  public set maxRequestThreshold(value: number) {
    this._maxRequestThreshold = value;
  }
  public resetMaxRequestThreshold() {
    this._maxRequestThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestThresholdInput() {
    return this._maxRequestThreshold;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // action - computed: false, optional: true, required: false
  private _action = new TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }
}

export class TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesList extends cdktf.ComplexList {
  public internalValue? : TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRules[] | cdktf.IResolvable

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
  public get(index: number): TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesOutputReference {
    return new TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicyRateLimitingRules {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#rules TeoSecurityPolicyConfig#rules}
  */
  readonly rules?: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRules[] | cdktf.IResolvable;
}

export function teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesOutputReference | TeoSecurityPolicyConfigSecurityPolicyRateLimitingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesToTerraform, true)(struct!.rules),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesOutputReference | TeoSecurityPolicyConfigSecurityPolicyRateLimitingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicyRateLimitingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface TeoSecurityPolicyConfigSecurityPolicy {
  /**
  * custom_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#custom_rules TeoSecurityPolicyConfig#custom_rules}
  */
  readonly customRules?: TeoSecurityPolicyConfigSecurityPolicyCustomRules;
  /**
  * exception_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#exception_rules TeoSecurityPolicyConfig#exception_rules}
  */
  readonly exceptionRules?: TeoSecurityPolicyConfigSecurityPolicyExceptionRules;
  /**
  * http_ddos_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#http_ddos_protection TeoSecurityPolicyConfig#http_ddos_protection}
  */
  readonly httpDdosProtection?: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtection;
  /**
  * managed_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#managed_rules TeoSecurityPolicyConfig#managed_rules}
  */
  readonly managedRules?: TeoSecurityPolicyConfigSecurityPolicyManagedRules;
  /**
  * rate_limiting_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#rate_limiting_rules TeoSecurityPolicyConfig#rate_limiting_rules}
  */
  readonly rateLimitingRules?: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRules;
}

export function teoSecurityPolicyConfigSecurityPolicyToTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyOutputReference | TeoSecurityPolicyConfigSecurityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_rules: teoSecurityPolicyConfigSecurityPolicyCustomRulesToTerraform(struct!.customRules),
    exception_rules: teoSecurityPolicyConfigSecurityPolicyExceptionRulesToTerraform(struct!.exceptionRules),
    http_ddos_protection: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionToTerraform(struct!.httpDdosProtection),
    managed_rules: teoSecurityPolicyConfigSecurityPolicyManagedRulesToTerraform(struct!.managedRules),
    rate_limiting_rules: teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesToTerraform(struct!.rateLimitingRules),
  }
}


export function teoSecurityPolicyConfigSecurityPolicyToHclTerraform(struct?: TeoSecurityPolicyConfigSecurityPolicyOutputReference | TeoSecurityPolicyConfigSecurityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_rules: {
      value: teoSecurityPolicyConfigSecurityPolicyCustomRulesToHclTerraform(struct!.customRules),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyCustomRulesList",
    },
    exception_rules: {
      value: teoSecurityPolicyConfigSecurityPolicyExceptionRulesToHclTerraform(struct!.exceptionRules),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyExceptionRulesList",
    },
    http_ddos_protection: {
      value: teoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionToHclTerraform(struct!.httpDdosProtection),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionList",
    },
    managed_rules: {
      value: teoSecurityPolicyConfigSecurityPolicyManagedRulesToHclTerraform(struct!.managedRules),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyManagedRulesList",
    },
    rate_limiting_rules: {
      value: teoSecurityPolicyConfigSecurityPolicyRateLimitingRulesToHclTerraform(struct!.rateLimitingRules),
      isBlock: true,
      type: "list",
      storageClassType: "TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoSecurityPolicyConfigSecurityPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoSecurityPolicyConfigSecurityPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRules = this._customRules?.internalValue;
    }
    if (this._exceptionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionRules = this._exceptionRules?.internalValue;
    }
    if (this._httpDdosProtection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpDdosProtection = this._httpDdosProtection?.internalValue;
    }
    if (this._managedRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedRules = this._managedRules?.internalValue;
    }
    if (this._rateLimitingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitingRules = this._rateLimitingRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoSecurityPolicyConfigSecurityPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customRules.internalValue = undefined;
      this._exceptionRules.internalValue = undefined;
      this._httpDdosProtection.internalValue = undefined;
      this._managedRules.internalValue = undefined;
      this._rateLimitingRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customRules.internalValue = value.customRules;
      this._exceptionRules.internalValue = value.exceptionRules;
      this._httpDdosProtection.internalValue = value.httpDdosProtection;
      this._managedRules.internalValue = value.managedRules;
      this._rateLimitingRules.internalValue = value.rateLimitingRules;
    }
  }

  // custom_rules - computed: false, optional: true, required: false
  private _customRules = new TeoSecurityPolicyConfigSecurityPolicyCustomRulesOutputReference(this, "custom_rules");
  public get customRules() {
    return this._customRules;
  }
  public putCustomRules(value: TeoSecurityPolicyConfigSecurityPolicyCustomRules) {
    this._customRules.internalValue = value;
  }
  public resetCustomRules() {
    this._customRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRulesInput() {
    return this._customRules.internalValue;
  }

  // exception_rules - computed: false, optional: true, required: false
  private _exceptionRules = new TeoSecurityPolicyConfigSecurityPolicyExceptionRulesOutputReference(this, "exception_rules");
  public get exceptionRules() {
    return this._exceptionRules;
  }
  public putExceptionRules(value: TeoSecurityPolicyConfigSecurityPolicyExceptionRules) {
    this._exceptionRules.internalValue = value;
  }
  public resetExceptionRules() {
    this._exceptionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionRulesInput() {
    return this._exceptionRules.internalValue;
  }

  // http_ddos_protection - computed: false, optional: true, required: false
  private _httpDdosProtection = new TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtectionOutputReference(this, "http_ddos_protection");
  public get httpDdosProtection() {
    return this._httpDdosProtection;
  }
  public putHttpDdosProtection(value: TeoSecurityPolicyConfigSecurityPolicyHttpDdosProtection) {
    this._httpDdosProtection.internalValue = value;
  }
  public resetHttpDdosProtection() {
    this._httpDdosProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpDdosProtectionInput() {
    return this._httpDdosProtection.internalValue;
  }

  // managed_rules - computed: false, optional: true, required: false
  private _managedRules = new TeoSecurityPolicyConfigSecurityPolicyManagedRulesOutputReference(this, "managed_rules");
  public get managedRules() {
    return this._managedRules;
  }
  public putManagedRules(value: TeoSecurityPolicyConfigSecurityPolicyManagedRules) {
    this._managedRules.internalValue = value;
  }
  public resetManagedRules() {
    this._managedRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedRulesInput() {
    return this._managedRules.internalValue;
  }

  // rate_limiting_rules - computed: false, optional: true, required: false
  private _rateLimitingRules = new TeoSecurityPolicyConfigSecurityPolicyRateLimitingRulesOutputReference(this, "rate_limiting_rules");
  public get rateLimitingRules() {
    return this._rateLimitingRules;
  }
  public putRateLimitingRules(value: TeoSecurityPolicyConfigSecurityPolicyRateLimitingRules) {
    this._rateLimitingRules.internalValue = value;
  }
  public resetRateLimitingRules() {
    this._rateLimitingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitingRulesInput() {
    return this._rateLimitingRules.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config tencentcloud_teo_security_policy_config}
*/
export class TeoSecurityPolicyConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_teo_security_policy_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeoSecurityPolicyConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeoSecurityPolicyConfig to import
  * @param importFromId The id of the existing TeoSecurityPolicyConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeoSecurityPolicyConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_teo_security_policy_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/teo_security_policy_config tencentcloud_teo_security_policy_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeoSecurityPolicyConfigConfig
  */
  public constructor(scope: Construct, id: string, config: TeoSecurityPolicyConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_teo_security_policy_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._entity = config.entity;
    this._host = config.host;
    this._id = config.id;
    this._templateId = config.templateId;
    this._zoneId = config.zoneId;
    this._securityPolicy.internalValue = config.securityPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entity - computed: false, optional: true, required: false
  private _entity?: string; 
  public get entity() {
    return this.getStringAttribute('entity');
  }
  public set entity(value: string) {
    this._entity = value;
  }
  public resetEntity() {
    this._entity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityInput() {
    return this._entity;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // security_policy - computed: false, optional: true, required: false
  private _securityPolicy = new TeoSecurityPolicyConfigSecurityPolicyOutputReference(this, "security_policy");
  public get securityPolicy() {
    return this._securityPolicy;
  }
  public putSecurityPolicy(value: TeoSecurityPolicyConfigSecurityPolicy) {
    this._securityPolicy.internalValue = value;
  }
  public resetSecurityPolicy() {
    this._securityPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyInput() {
    return this._securityPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entity: cdktf.stringToTerraform(this._entity),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      template_id: cdktf.stringToTerraform(this._templateId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      security_policy: teoSecurityPolicyConfigSecurityPolicyToTerraform(this._securityPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entity: {
        value: cdktf.stringToHclTerraform(this._entity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_policy: {
        value: teoSecurityPolicyConfigSecurityPolicyToHclTerraform(this._securityPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoSecurityPolicyConfigSecurityPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
