// https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityPolicyV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#active SecurityPolicyV2#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#description SecurityPolicyV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#name SecurityPolicyV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#principals SecurityPolicyV2#principals}
  */
  readonly principals: SecurityPolicyV2Principals;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#rules SecurityPolicyV2#rules}
  */
  readonly rules: SecurityPolicyV2Rules[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#type SecurityPolicyV2#type}
  */
  readonly type?: string;
}
export interface SecurityPolicyV2Principals {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#user_groups SecurityPolicyV2#user_groups}
  */
  readonly userGroups?: string[];
}

export function securityPolicyV2PrincipalsToTerraform(struct?: SecurityPolicyV2Principals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userGroups),
  }
}


export function securityPolicyV2PrincipalsToHclTerraform(struct?: SecurityPolicyV2Principals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyV2PrincipalsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyV2Principals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroups = this._userGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyV2Principals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userGroups = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userGroups = value.userGroups;
    }
  }

  // user_groups - computed: false, optional: true, required: false
  private _userGroups?: string[]; 
  public get userGroups() {
    return this.getListAttribute('user_groups');
  }
  public set userGroups(value: string[]) {
    this._userGroups = value;
  }
  public resetUserGroups() {
    this._userGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupsInput() {
    return this._userGroups;
  }
}
export interface SecurityPolicyV2RulesConditionsAccessRequest {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#expires_after_seconds SecurityPolicyV2#expires_after_seconds}
  */
  readonly expiresAfterSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#request_type_id SecurityPolicyV2#request_type_id}
  */
  readonly requestTypeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#request_type_name SecurityPolicyV2#request_type_name}
  */
  readonly requestTypeName: string;
}

export function securityPolicyV2RulesConditionsAccessRequestToTerraform(struct?: SecurityPolicyV2RulesConditionsAccessRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expires_after_seconds: cdktf.numberToTerraform(struct!.expiresAfterSeconds),
    request_type_id: cdktf.stringToTerraform(struct!.requestTypeId),
    request_type_name: cdktf.stringToTerraform(struct!.requestTypeName),
  }
}


export function securityPolicyV2RulesConditionsAccessRequestToHclTerraform(struct?: SecurityPolicyV2RulesConditionsAccessRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expires_after_seconds: {
      value: cdktf.numberToHclTerraform(struct!.expiresAfterSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_type_id: {
      value: cdktf.stringToHclTerraform(struct!.requestTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_type_name: {
      value: cdktf.stringToHclTerraform(struct!.requestTypeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyV2RulesConditionsAccessRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyV2RulesConditionsAccessRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expiresAfterSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiresAfterSeconds = this._expiresAfterSeconds;
    }
    if (this._requestTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTypeId = this._requestTypeId;
    }
    if (this._requestTypeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTypeName = this._requestTypeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyV2RulesConditionsAccessRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expiresAfterSeconds = undefined;
      this._requestTypeId = undefined;
      this._requestTypeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expiresAfterSeconds = value.expiresAfterSeconds;
      this._requestTypeId = value.requestTypeId;
      this._requestTypeName = value.requestTypeName;
    }
  }

  // expires_after_seconds - computed: false, optional: true, required: false
  private _expiresAfterSeconds?: number; 
  public get expiresAfterSeconds() {
    return this.getNumberAttribute('expires_after_seconds');
  }
  public set expiresAfterSeconds(value: number) {
    this._expiresAfterSeconds = value;
  }
  public resetExpiresAfterSeconds() {
    this._expiresAfterSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAfterSecondsInput() {
    return this._expiresAfterSeconds;
  }

  // request_type_id - computed: false, optional: true, required: false
  private _requestTypeId?: string; 
  public get requestTypeId() {
    return this.getStringAttribute('request_type_id');
  }
  public set requestTypeId(value: string) {
    this._requestTypeId = value;
  }
  public resetRequestTypeId() {
    this._requestTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTypeIdInput() {
    return this._requestTypeId;
  }

  // request_type_name - computed: false, optional: false, required: true
  private _requestTypeName?: string; 
  public get requestTypeName() {
    return this.getStringAttribute('request_type_name');
  }
  public set requestTypeName(value: string) {
    this._requestTypeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTypeNameInput() {
    return this._requestTypeName;
  }
}
export interface SecurityPolicyV2RulesConditionsGateway {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#session_recording SecurityPolicyV2#session_recording}
  */
  readonly sessionRecording: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#traffic_forwarding SecurityPolicyV2#traffic_forwarding}
  */
  readonly trafficForwarding: boolean | cdktf.IResolvable;
}

export function securityPolicyV2RulesConditionsGatewayToTerraform(struct?: SecurityPolicyV2RulesConditionsGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_recording: cdktf.booleanToTerraform(struct!.sessionRecording),
    traffic_forwarding: cdktf.booleanToTerraform(struct!.trafficForwarding),
  }
}


export function securityPolicyV2RulesConditionsGatewayToHclTerraform(struct?: SecurityPolicyV2RulesConditionsGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    session_recording: {
      value: cdktf.booleanToHclTerraform(struct!.sessionRecording),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    traffic_forwarding: {
      value: cdktf.booleanToHclTerraform(struct!.trafficForwarding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyV2RulesConditionsGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyV2RulesConditionsGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sessionRecording !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionRecording = this._sessionRecording;
    }
    if (this._trafficForwarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficForwarding = this._trafficForwarding;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyV2RulesConditionsGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sessionRecording = undefined;
      this._trafficForwarding = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sessionRecording = value.sessionRecording;
      this._trafficForwarding = value.trafficForwarding;
    }
  }

  // session_recording - computed: false, optional: false, required: true
  private _sessionRecording?: boolean | cdktf.IResolvable; 
  public get sessionRecording() {
    return this.getBooleanAttribute('session_recording');
  }
  public set sessionRecording(value: boolean | cdktf.IResolvable) {
    this._sessionRecording = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionRecordingInput() {
    return this._sessionRecording;
  }

  // traffic_forwarding - computed: false, optional: false, required: true
  private _trafficForwarding?: boolean | cdktf.IResolvable; 
  public get trafficForwarding() {
    return this.getBooleanAttribute('traffic_forwarding');
  }
  public set trafficForwarding(value: boolean | cdktf.IResolvable) {
    this._trafficForwarding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficForwardingInput() {
    return this._trafficForwarding;
  }
}
export interface SecurityPolicyV2RulesConditionsMfa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#acr_values SecurityPolicyV2#acr_values}
  */
  readonly acrValues?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#re_auth_frequency_in_seconds SecurityPolicyV2#re_auth_frequency_in_seconds}
  */
  readonly reAuthFrequencyInSeconds: number;
}

export function securityPolicyV2RulesConditionsMfaToTerraform(struct?: SecurityPolicyV2RulesConditionsMfa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acr_values: cdktf.stringToTerraform(struct!.acrValues),
    re_auth_frequency_in_seconds: cdktf.numberToTerraform(struct!.reAuthFrequencyInSeconds),
  }
}


export function securityPolicyV2RulesConditionsMfaToHclTerraform(struct?: SecurityPolicyV2RulesConditionsMfa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acr_values: {
      value: cdktf.stringToHclTerraform(struct!.acrValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    re_auth_frequency_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.reAuthFrequencyInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyV2RulesConditionsMfaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyV2RulesConditionsMfa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acrValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.acrValues = this._acrValues;
    }
    if (this._reAuthFrequencyInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.reAuthFrequencyInSeconds = this._reAuthFrequencyInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyV2RulesConditionsMfa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acrValues = undefined;
      this._reAuthFrequencyInSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acrValues = value.acrValues;
      this._reAuthFrequencyInSeconds = value.reAuthFrequencyInSeconds;
    }
  }

  // acr_values - computed: false, optional: true, required: false
  private _acrValues?: string; 
  public get acrValues() {
    return this.getStringAttribute('acr_values');
  }
  public set acrValues(value: string) {
    this._acrValues = value;
  }
  public resetAcrValues() {
    this._acrValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acrValuesInput() {
    return this._acrValues;
  }

  // re_auth_frequency_in_seconds - computed: false, optional: false, required: true
  private _reAuthFrequencyInSeconds?: number; 
  public get reAuthFrequencyInSeconds() {
    return this.getNumberAttribute('re_auth_frequency_in_seconds');
  }
  public set reAuthFrequencyInSeconds(value: number) {
    this._reAuthFrequencyInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reAuthFrequencyInSecondsInput() {
    return this._reAuthFrequencyInSeconds;
  }
}
export interface SecurityPolicyV2RulesConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#access_request SecurityPolicyV2#access_request}
  */
  readonly accessRequest?: SecurityPolicyV2RulesConditionsAccessRequest;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#gateway SecurityPolicyV2#gateway}
  */
  readonly gateway?: SecurityPolicyV2RulesConditionsGateway;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#mfa SecurityPolicyV2#mfa}
  */
  readonly mfa?: SecurityPolicyV2RulesConditionsMfa;
}

export function securityPolicyV2RulesConditionsToTerraform(struct?: SecurityPolicyV2RulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_request: securityPolicyV2RulesConditionsAccessRequestToTerraform(struct!.accessRequest),
    gateway: securityPolicyV2RulesConditionsGatewayToTerraform(struct!.gateway),
    mfa: securityPolicyV2RulesConditionsMfaToTerraform(struct!.mfa),
  }
}


export function securityPolicyV2RulesConditionsToHclTerraform(struct?: SecurityPolicyV2RulesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_request: {
      value: securityPolicyV2RulesConditionsAccessRequestToHclTerraform(struct!.accessRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityPolicyV2RulesConditionsAccessRequest",
    },
    gateway: {
      value: securityPolicyV2RulesConditionsGatewayToHclTerraform(struct!.gateway),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityPolicyV2RulesConditionsGateway",
    },
    mfa: {
      value: securityPolicyV2RulesConditionsMfaToHclTerraform(struct!.mfa),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityPolicyV2RulesConditionsMfa",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyV2RulesConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicyV2RulesConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessRequest = this._accessRequest?.internalValue;
    }
    if (this._gateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway?.internalValue;
    }
    if (this._mfa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfa = this._mfa?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyV2RulesConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessRequest.internalValue = undefined;
      this._gateway.internalValue = undefined;
      this._mfa.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessRequest.internalValue = value.accessRequest;
      this._gateway.internalValue = value.gateway;
      this._mfa.internalValue = value.mfa;
    }
  }

  // access_request - computed: false, optional: true, required: false
  private _accessRequest = new SecurityPolicyV2RulesConditionsAccessRequestOutputReference(this, "access_request");
  public get accessRequest() {
    return this._accessRequest;
  }
  public putAccessRequest(value: SecurityPolicyV2RulesConditionsAccessRequest) {
    this._accessRequest.internalValue = value;
  }
  public resetAccessRequest() {
    this._accessRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRequestInput() {
    return this._accessRequest.internalValue;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway = new SecurityPolicyV2RulesConditionsGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: SecurityPolicyV2RulesConditionsGateway) {
    this._gateway.internalValue = value;
  }
  public resetGateway() {
    this._gateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // mfa - computed: false, optional: true, required: false
  private _mfa = new SecurityPolicyV2RulesConditionsMfaOutputReference(this, "mfa");
  public get mfa() {
    return this._mfa;
  }
  public putMfa(value: SecurityPolicyV2RulesConditionsMfa) {
    this._mfa.internalValue = value;
  }
  public resetMfa() {
    this._mfa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaInput() {
    return this._mfa.internalValue;
  }
}

export class SecurityPolicyV2RulesConditionsList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicyV2RulesConditions[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicyV2RulesConditionsOutputReference {
    return new SecurityPolicyV2RulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicyV2RulesPrivilegesPasswordCheckoutDatabase {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#password_checkout_database SecurityPolicyV2#password_checkout_database}
  */
  readonly passwordCheckoutDatabase: boolean | cdktf.IResolvable;
}

export function securityPolicyV2RulesPrivilegesPasswordCheckoutDatabaseToTerraform(struct?: SecurityPolicyV2RulesPrivilegesPasswordCheckoutDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_checkout_database: cdktf.booleanToTerraform(struct!.passwordCheckoutDatabase),
  }
}


export function securityPolicyV2RulesPrivilegesPasswordCheckoutDatabaseToHclTerraform(struct?: SecurityPolicyV2RulesPrivilegesPasswordCheckoutDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password_checkout_database: {
      value: cdktf.booleanToHclTerraform(struct!.passwordCheckoutDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyV2RulesPrivilegesPasswordCheckoutDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyV2RulesPrivilegesPasswordCheckoutDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordCheckoutDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordCheckoutDatabase = this._passwordCheckoutDatabase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyV2RulesPrivilegesPasswordCheckoutDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passwordCheckoutDatabase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passwordCheckoutDatabase = value.passwordCheckoutDatabase;
    }
  }

  // password_checkout_database - computed: false, optional: false, required: true
  private _passwordCheckoutDatabase?: boolean | cdktf.IResolvable; 
  public get passwordCheckoutDatabase() {
    return this.getBooleanAttribute('password_checkout_database');
  }
  public set passwordCheckoutDatabase(value: boolean | cdktf.IResolvable) {
    this._passwordCheckoutDatabase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordCheckoutDatabaseInput() {
    return this._passwordCheckoutDatabase;
  }
}
export interface SecurityPolicyV2RulesPrivilegesPasswordCheckoutRdp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#password_checkout_rdp SecurityPolicyV2#password_checkout_rdp}
  */
  readonly passwordCheckoutRdp: boolean | cdktf.IResolvable;
}

export function securityPolicyV2RulesPrivilegesPasswordCheckoutRdpToTerraform(struct?: SecurityPolicyV2RulesPrivilegesPasswordCheckoutRdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_checkout_rdp: cdktf.booleanToTerraform(struct!.passwordCheckoutRdp),
  }
}


export function securityPolicyV2RulesPrivilegesPasswordCheckoutRdpToHclTerraform(struct?: SecurityPolicyV2RulesPrivilegesPasswordCheckoutRdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password_checkout_rdp: {
      value: cdktf.booleanToHclTerraform(struct!.passwordCheckoutRdp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyV2RulesPrivilegesPasswordCheckoutRdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyV2RulesPrivilegesPasswordCheckoutRdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordCheckoutRdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordCheckoutRdp = this._passwordCheckoutRdp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyV2RulesPrivilegesPasswordCheckoutRdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passwordCheckoutRdp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passwordCheckoutRdp = value.passwordCheckoutRdp;
    }
  }

  // password_checkout_rdp - computed: false, optional: false, required: true
  private _passwordCheckoutRdp?: boolean | cdktf.IResolvable; 
  public get passwordCheckoutRdp() {
    return this.getBooleanAttribute('password_checkout_rdp');
  }
  public set passwordCheckoutRdp(value: boolean | cdktf.IResolvable) {
    this._passwordCheckoutRdp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordCheckoutRdpInput() {
    return this._passwordCheckoutRdp;
  }
}
export interface SecurityPolicyV2RulesPrivilegesPasswordCheckoutSsh {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#password_checkout_ssh SecurityPolicyV2#password_checkout_ssh}
  */
  readonly passwordCheckoutSsh: boolean | cdktf.IResolvable;
}

export function securityPolicyV2RulesPrivilegesPasswordCheckoutSshToTerraform(struct?: SecurityPolicyV2RulesPrivilegesPasswordCheckoutSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_checkout_ssh: cdktf.booleanToTerraform(struct!.passwordCheckoutSsh),
  }
}


export function securityPolicyV2RulesPrivilegesPasswordCheckoutSshToHclTerraform(struct?: SecurityPolicyV2RulesPrivilegesPasswordCheckoutSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password_checkout_ssh: {
      value: cdktf.booleanToHclTerraform(struct!.passwordCheckoutSsh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyV2RulesPrivilegesPasswordCheckoutSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyV2RulesPrivilegesPasswordCheckoutSsh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordCheckoutSsh !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordCheckoutSsh = this._passwordCheckoutSsh;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyV2RulesPrivilegesPasswordCheckoutSsh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passwordCheckoutSsh = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passwordCheckoutSsh = value.passwordCheckoutSsh;
    }
  }

  // password_checkout_ssh - computed: false, optional: false, required: true
  private _passwordCheckoutSsh?: boolean | cdktf.IResolvable; 
  public get passwordCheckoutSsh() {
    return this.getBooleanAttribute('password_checkout_ssh');
  }
  public set passwordCheckoutSsh(value: boolean | cdktf.IResolvable) {
    this._passwordCheckoutSsh = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordCheckoutSshInput() {
    return this._passwordCheckoutSsh;
  }
}
export interface SecurityPolicyV2RulesPrivilegesPrincipalAccountRdp {
  /**
  * Provides coarse grain (full admin) access to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#admin_level_permissions SecurityPolicyV2#admin_level_permissions}
  */
  readonly adminLevelPermissions?: boolean | cdktf.IResolvable;
  /**
  * Defines the privilege to make RDP connections to a server with the user's principal account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#principal_account_rdp SecurityPolicyV2#principal_account_rdp}
  */
  readonly principalAccountRdp: boolean | cdktf.IResolvable;
}

export function securityPolicyV2RulesPrivilegesPrincipalAccountRdpToTerraform(struct?: SecurityPolicyV2RulesPrivilegesPrincipalAccountRdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_level_permissions: cdktf.booleanToTerraform(struct!.adminLevelPermissions),
    principal_account_rdp: cdktf.booleanToTerraform(struct!.principalAccountRdp),
  }
}


export function securityPolicyV2RulesPrivilegesPrincipalAccountRdpToHclTerraform(struct?: SecurityPolicyV2RulesPrivilegesPrincipalAccountRdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_level_permissions: {
      value: cdktf.booleanToHclTerraform(struct!.adminLevelPermissions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    principal_account_rdp: {
      value: cdktf.booleanToHclTerraform(struct!.principalAccountRdp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyV2RulesPrivilegesPrincipalAccountRdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyV2RulesPrivilegesPrincipalAccountRdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminLevelPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminLevelPermissions = this._adminLevelPermissions;
    }
    if (this._principalAccountRdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalAccountRdp = this._principalAccountRdp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyV2RulesPrivilegesPrincipalAccountRdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminLevelPermissions = undefined;
      this._principalAccountRdp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminLevelPermissions = value.adminLevelPermissions;
      this._principalAccountRdp = value.principalAccountRdp;
    }
  }

  // admin_level_permissions - computed: true, optional: true, required: false
  private _adminLevelPermissions?: boolean | cdktf.IResolvable; 
  public get adminLevelPermissions() {
    return this.getBooleanAttribute('admin_level_permissions');
  }
  public set adminLevelPermissions(value: boolean | cdktf.IResolvable) {
    this._adminLevelPermissions = value;
  }
  public resetAdminLevelPermissions() {
    this._adminLevelPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminLevelPermissionsInput() {
    return this._adminLevelPermissions;
  }

  // principal_account_rdp - computed: false, optional: false, required: true
  private _principalAccountRdp?: boolean | cdktf.IResolvable; 
  public get principalAccountRdp() {
    return this.getBooleanAttribute('principal_account_rdp');
  }
  public set principalAccountRdp(value: boolean | cdktf.IResolvable) {
    this._principalAccountRdp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalAccountRdpInput() {
    return this._principalAccountRdp;
  }
}
export interface SecurityPolicyV2RulesPrivilegesPrincipalAccountSsh {
  /**
  * Provides coarse grain (full admin) access to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#admin_level_permissions SecurityPolicyV2#admin_level_permissions}
  */
  readonly adminLevelPermissions?: boolean | cdktf.IResolvable;
  /**
  * Defines the privilege to make SSH connections to a server with the user's principal account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#principal_account_ssh SecurityPolicyV2#principal_account_ssh}
  */
  readonly principalAccountSsh: boolean | cdktf.IResolvable;
  /**
  * UUIDs of the existing sudo command bundles. These commands have been created by the resource administrator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#sudo_command_bundles SecurityPolicyV2#sudo_command_bundles}
  */
  readonly sudoCommandBundles?: string[];
  /**
  * The name for sudo commands that will be visible to end users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#sudo_display_name SecurityPolicyV2#sudo_display_name}
  */
  readonly sudoDisplayName?: string;
}

export function securityPolicyV2RulesPrivilegesPrincipalAccountSshToTerraform(struct?: SecurityPolicyV2RulesPrivilegesPrincipalAccountSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_level_permissions: cdktf.booleanToTerraform(struct!.adminLevelPermissions),
    principal_account_ssh: cdktf.booleanToTerraform(struct!.principalAccountSsh),
    sudo_command_bundles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sudoCommandBundles),
    sudo_display_name: cdktf.stringToTerraform(struct!.sudoDisplayName),
  }
}


export function securityPolicyV2RulesPrivilegesPrincipalAccountSshToHclTerraform(struct?: SecurityPolicyV2RulesPrivilegesPrincipalAccountSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_level_permissions: {
      value: cdktf.booleanToHclTerraform(struct!.adminLevelPermissions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    principal_account_ssh: {
      value: cdktf.booleanToHclTerraform(struct!.principalAccountSsh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sudo_command_bundles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sudoCommandBundles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sudo_display_name: {
      value: cdktf.stringToHclTerraform(struct!.sudoDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyV2RulesPrivilegesPrincipalAccountSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyV2RulesPrivilegesPrincipalAccountSsh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminLevelPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminLevelPermissions = this._adminLevelPermissions;
    }
    if (this._principalAccountSsh !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalAccountSsh = this._principalAccountSsh;
    }
    if (this._sudoCommandBundles !== undefined) {
      hasAnyValues = true;
      internalValueResult.sudoCommandBundles = this._sudoCommandBundles;
    }
    if (this._sudoDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sudoDisplayName = this._sudoDisplayName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyV2RulesPrivilegesPrincipalAccountSsh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminLevelPermissions = undefined;
      this._principalAccountSsh = undefined;
      this._sudoCommandBundles = undefined;
      this._sudoDisplayName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminLevelPermissions = value.adminLevelPermissions;
      this._principalAccountSsh = value.principalAccountSsh;
      this._sudoCommandBundles = value.sudoCommandBundles;
      this._sudoDisplayName = value.sudoDisplayName;
    }
  }

  // admin_level_permissions - computed: true, optional: true, required: false
  private _adminLevelPermissions?: boolean | cdktf.IResolvable; 
  public get adminLevelPermissions() {
    return this.getBooleanAttribute('admin_level_permissions');
  }
  public set adminLevelPermissions(value: boolean | cdktf.IResolvable) {
    this._adminLevelPermissions = value;
  }
  public resetAdminLevelPermissions() {
    this._adminLevelPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminLevelPermissionsInput() {
    return this._adminLevelPermissions;
  }

  // principal_account_ssh - computed: false, optional: false, required: true
  private _principalAccountSsh?: boolean | cdktf.IResolvable; 
  public get principalAccountSsh() {
    return this.getBooleanAttribute('principal_account_ssh');
  }
  public set principalAccountSsh(value: boolean | cdktf.IResolvable) {
    this._principalAccountSsh = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalAccountSshInput() {
    return this._principalAccountSsh;
  }

  // sudo_command_bundles - computed: false, optional: true, required: false
  private _sudoCommandBundles?: string[]; 
  public get sudoCommandBundles() {
    return this.getListAttribute('sudo_command_bundles');
  }
  public set sudoCommandBundles(value: string[]) {
    this._sudoCommandBundles = value;
  }
  public resetSudoCommandBundles() {
    this._sudoCommandBundles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sudoCommandBundlesInput() {
    return this._sudoCommandBundles;
  }

  // sudo_display_name - computed: false, optional: true, required: false
  private _sudoDisplayName?: string; 
  public get sudoDisplayName() {
    return this.getStringAttribute('sudo_display_name');
  }
  public set sudoDisplayName(value: string) {
    this._sudoDisplayName = value;
  }
  public resetSudoDisplayName() {
    this._sudoDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sudoDisplayNameInput() {
    return this._sudoDisplayName;
  }
}
export interface SecurityPolicyV2RulesPrivilegesRevealPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#reveal_password SecurityPolicyV2#reveal_password}
  */
  readonly revealPassword: boolean | cdktf.IResolvable;
}

export function securityPolicyV2RulesPrivilegesRevealPasswordToTerraform(struct?: SecurityPolicyV2RulesPrivilegesRevealPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reveal_password: cdktf.booleanToTerraform(struct!.revealPassword),
  }
}


export function securityPolicyV2RulesPrivilegesRevealPasswordToHclTerraform(struct?: SecurityPolicyV2RulesPrivilegesRevealPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reveal_password: {
      value: cdktf.booleanToHclTerraform(struct!.revealPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyV2RulesPrivilegesRevealPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyV2RulesPrivilegesRevealPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._revealPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.revealPassword = this._revealPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyV2RulesPrivilegesRevealPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._revealPassword = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._revealPassword = value.revealPassword;
    }
  }

  // reveal_password - computed: false, optional: false, required: true
  private _revealPassword?: boolean | cdktf.IResolvable; 
  public get revealPassword() {
    return this.getBooleanAttribute('reveal_password');
  }
  public set revealPassword(value: boolean | cdktf.IResolvable) {
    this._revealPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revealPasswordInput() {
    return this._revealPassword;
  }
}
export interface SecurityPolicyV2RulesPrivileges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#password_checkout_database SecurityPolicyV2#password_checkout_database}
  */
  readonly passwordCheckoutDatabase?: SecurityPolicyV2RulesPrivilegesPasswordCheckoutDatabase;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#password_checkout_rdp SecurityPolicyV2#password_checkout_rdp}
  */
  readonly passwordCheckoutRdp?: SecurityPolicyV2RulesPrivilegesPasswordCheckoutRdp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#password_checkout_ssh SecurityPolicyV2#password_checkout_ssh}
  */
  readonly passwordCheckoutSsh?: SecurityPolicyV2RulesPrivilegesPasswordCheckoutSsh;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#principal_account_rdp SecurityPolicyV2#principal_account_rdp}
  */
  readonly principalAccountRdp?: SecurityPolicyV2RulesPrivilegesPrincipalAccountRdp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#principal_account_ssh SecurityPolicyV2#principal_account_ssh}
  */
  readonly principalAccountSsh?: SecurityPolicyV2RulesPrivilegesPrincipalAccountSsh;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#reveal_password SecurityPolicyV2#reveal_password}
  */
  readonly revealPassword?: SecurityPolicyV2RulesPrivilegesRevealPassword;
}

export function securityPolicyV2RulesPrivilegesToTerraform(struct?: SecurityPolicyV2RulesPrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_checkout_database: securityPolicyV2RulesPrivilegesPasswordCheckoutDatabaseToTerraform(struct!.passwordCheckoutDatabase),
    password_checkout_rdp: securityPolicyV2RulesPrivilegesPasswordCheckoutRdpToTerraform(struct!.passwordCheckoutRdp),
    password_checkout_ssh: securityPolicyV2RulesPrivilegesPasswordCheckoutSshToTerraform(struct!.passwordCheckoutSsh),
    principal_account_rdp: securityPolicyV2RulesPrivilegesPrincipalAccountRdpToTerraform(struct!.principalAccountRdp),
    principal_account_ssh: securityPolicyV2RulesPrivilegesPrincipalAccountSshToTerraform(struct!.principalAccountSsh),
    reveal_password: securityPolicyV2RulesPrivilegesRevealPasswordToTerraform(struct!.revealPassword),
  }
}


export function securityPolicyV2RulesPrivilegesToHclTerraform(struct?: SecurityPolicyV2RulesPrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password_checkout_database: {
      value: securityPolicyV2RulesPrivilegesPasswordCheckoutDatabaseToHclTerraform(struct!.passwordCheckoutDatabase),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityPolicyV2RulesPrivilegesPasswordCheckoutDatabase",
    },
    password_checkout_rdp: {
      value: securityPolicyV2RulesPrivilegesPasswordCheckoutRdpToHclTerraform(struct!.passwordCheckoutRdp),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityPolicyV2RulesPrivilegesPasswordCheckoutRdp",
    },
    password_checkout_ssh: {
      value: securityPolicyV2RulesPrivilegesPasswordCheckoutSshToHclTerraform(struct!.passwordCheckoutSsh),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityPolicyV2RulesPrivilegesPasswordCheckoutSsh",
    },
    principal_account_rdp: {
      value: securityPolicyV2RulesPrivilegesPrincipalAccountRdpToHclTerraform(struct!.principalAccountRdp),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityPolicyV2RulesPrivilegesPrincipalAccountRdp",
    },
    principal_account_ssh: {
      value: securityPolicyV2RulesPrivilegesPrincipalAccountSshToHclTerraform(struct!.principalAccountSsh),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityPolicyV2RulesPrivilegesPrincipalAccountSsh",
    },
    reveal_password: {
      value: securityPolicyV2RulesPrivilegesRevealPasswordToHclTerraform(struct!.revealPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityPolicyV2RulesPrivilegesRevealPassword",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyV2RulesPrivilegesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicyV2RulesPrivileges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordCheckoutDatabase?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordCheckoutDatabase = this._passwordCheckoutDatabase?.internalValue;
    }
    if (this._passwordCheckoutRdp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordCheckoutRdp = this._passwordCheckoutRdp?.internalValue;
    }
    if (this._passwordCheckoutSsh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordCheckoutSsh = this._passwordCheckoutSsh?.internalValue;
    }
    if (this._principalAccountRdp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalAccountRdp = this._principalAccountRdp?.internalValue;
    }
    if (this._principalAccountSsh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalAccountSsh = this._principalAccountSsh?.internalValue;
    }
    if (this._revealPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.revealPassword = this._revealPassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyV2RulesPrivileges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passwordCheckoutDatabase.internalValue = undefined;
      this._passwordCheckoutRdp.internalValue = undefined;
      this._passwordCheckoutSsh.internalValue = undefined;
      this._principalAccountRdp.internalValue = undefined;
      this._principalAccountSsh.internalValue = undefined;
      this._revealPassword.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passwordCheckoutDatabase.internalValue = value.passwordCheckoutDatabase;
      this._passwordCheckoutRdp.internalValue = value.passwordCheckoutRdp;
      this._passwordCheckoutSsh.internalValue = value.passwordCheckoutSsh;
      this._principalAccountRdp.internalValue = value.principalAccountRdp;
      this._principalAccountSsh.internalValue = value.principalAccountSsh;
      this._revealPassword.internalValue = value.revealPassword;
    }
  }

  // password_checkout_database - computed: false, optional: true, required: false
  private _passwordCheckoutDatabase = new SecurityPolicyV2RulesPrivilegesPasswordCheckoutDatabaseOutputReference(this, "password_checkout_database");
  public get passwordCheckoutDatabase() {
    return this._passwordCheckoutDatabase;
  }
  public putPasswordCheckoutDatabase(value: SecurityPolicyV2RulesPrivilegesPasswordCheckoutDatabase) {
    this._passwordCheckoutDatabase.internalValue = value;
  }
  public resetPasswordCheckoutDatabase() {
    this._passwordCheckoutDatabase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordCheckoutDatabaseInput() {
    return this._passwordCheckoutDatabase.internalValue;
  }

  // password_checkout_rdp - computed: false, optional: true, required: false
  private _passwordCheckoutRdp = new SecurityPolicyV2RulesPrivilegesPasswordCheckoutRdpOutputReference(this, "password_checkout_rdp");
  public get passwordCheckoutRdp() {
    return this._passwordCheckoutRdp;
  }
  public putPasswordCheckoutRdp(value: SecurityPolicyV2RulesPrivilegesPasswordCheckoutRdp) {
    this._passwordCheckoutRdp.internalValue = value;
  }
  public resetPasswordCheckoutRdp() {
    this._passwordCheckoutRdp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordCheckoutRdpInput() {
    return this._passwordCheckoutRdp.internalValue;
  }

  // password_checkout_ssh - computed: false, optional: true, required: false
  private _passwordCheckoutSsh = new SecurityPolicyV2RulesPrivilegesPasswordCheckoutSshOutputReference(this, "password_checkout_ssh");
  public get passwordCheckoutSsh() {
    return this._passwordCheckoutSsh;
  }
  public putPasswordCheckoutSsh(value: SecurityPolicyV2RulesPrivilegesPasswordCheckoutSsh) {
    this._passwordCheckoutSsh.internalValue = value;
  }
  public resetPasswordCheckoutSsh() {
    this._passwordCheckoutSsh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordCheckoutSshInput() {
    return this._passwordCheckoutSsh.internalValue;
  }

  // principal_account_rdp - computed: false, optional: true, required: false
  private _principalAccountRdp = new SecurityPolicyV2RulesPrivilegesPrincipalAccountRdpOutputReference(this, "principal_account_rdp");
  public get principalAccountRdp() {
    return this._principalAccountRdp;
  }
  public putPrincipalAccountRdp(value: SecurityPolicyV2RulesPrivilegesPrincipalAccountRdp) {
    this._principalAccountRdp.internalValue = value;
  }
  public resetPrincipalAccountRdp() {
    this._principalAccountRdp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalAccountRdpInput() {
    return this._principalAccountRdp.internalValue;
  }

  // principal_account_ssh - computed: false, optional: true, required: false
  private _principalAccountSsh = new SecurityPolicyV2RulesPrivilegesPrincipalAccountSshOutputReference(this, "principal_account_ssh");
  public get principalAccountSsh() {
    return this._principalAccountSsh;
  }
  public putPrincipalAccountSsh(value: SecurityPolicyV2RulesPrivilegesPrincipalAccountSsh) {
    this._principalAccountSsh.internalValue = value;
  }
  public resetPrincipalAccountSsh() {
    this._principalAccountSsh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalAccountSshInput() {
    return this._principalAccountSsh.internalValue;
  }

  // reveal_password - computed: false, optional: true, required: false
  private _revealPassword = new SecurityPolicyV2RulesPrivilegesRevealPasswordOutputReference(this, "reveal_password");
  public get revealPassword() {
    return this._revealPassword;
  }
  public putRevealPassword(value: SecurityPolicyV2RulesPrivilegesRevealPassword) {
    this._revealPassword.internalValue = value;
  }
  public resetRevealPassword() {
    this._revealPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revealPasswordInput() {
    return this._revealPassword.internalValue;
  }
}

export class SecurityPolicyV2RulesPrivilegesList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicyV2RulesPrivileges[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicyV2RulesPrivilegesOutputReference {
    return new SecurityPolicyV2RulesPrivilegesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#server SecurityPolicyV2#server}
  */
  readonly server: string;
}

export function securityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServerToTerraform(struct?: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function securityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServerToHclTerraform(struct?: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._server = value.server;
    }
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServerAccount {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#server SecurityPolicyV2#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#username SecurityPolicyV2#username}
  */
  readonly username: string;
}

export function securityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServerAccountToTerraform(struct?: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServerAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function securityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServerAccountToHclTerraform(struct?: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServerAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServerAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServerAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServerAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._server = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._server = value.server;
      this._username = value.username;
    }
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelAccountSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#usernames SecurityPolicyV2#usernames}
  */
  readonly usernames?: string[];
}

export function securityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelAccountSelectorToTerraform(struct?: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelAccountSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    usernames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usernames),
  }
}


export function securityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelAccountSelectorToHclTerraform(struct?: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelAccountSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    usernames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.usernames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelAccountSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelAccountSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._usernames !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernames = this._usernames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelAccountSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._usernames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._usernames = value.usernames;
    }
  }

  // usernames - computed: false, optional: true, required: false
  private _usernames?: string[]; 
  public get usernames() {
    return this.getListAttribute('usernames');
  }
  public set usernames(value: string[]) {
    this._usernames = value;
  }
  public resetUsernames() {
    this._usernames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamesInput() {
    return this._usernames;
  }
}
export interface SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelServerSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#labels SecurityPolicyV2#labels}
  */
  readonly labels: { [key: string]: string };
}

export function securityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelServerSelectorToTerraform(struct?: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelServerSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function securityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelServerSelectorToHclTerraform(struct?: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelServerSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelServerSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelServerSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelServerSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
    }
  }

  // labels - computed: false, optional: false, required: true
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }
}
export interface SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#account_selector SecurityPolicyV2#account_selector}
  */
  readonly accountSelector: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelAccountSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#account_selector_type SecurityPolicyV2#account_selector_type}
  */
  readonly accountSelectorType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#server_selector SecurityPolicyV2#server_selector}
  */
  readonly serverSelector?: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelServerSelector;
}

export function securityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelToTerraform(struct?: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_selector: securityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelAccountSelectorToTerraform(struct!.accountSelector),
    account_selector_type: cdktf.stringToTerraform(struct!.accountSelectorType),
    server_selector: securityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelServerSelectorToTerraform(struct!.serverSelector),
  }
}


export function securityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelToHclTerraform(struct?: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_selector: {
      value: securityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelAccountSelectorToHclTerraform(struct!.accountSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelAccountSelector",
    },
    account_selector_type: {
      value: cdktf.stringToHclTerraform(struct!.accountSelectorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_selector: {
      value: securityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelServerSelectorToHclTerraform(struct!.serverSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelServerSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountSelector = this._accountSelector?.internalValue;
    }
    if (this._accountSelectorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountSelectorType = this._accountSelectorType;
    }
    if (this._serverSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSelector = this._serverSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountSelector.internalValue = undefined;
      this._accountSelectorType = undefined;
      this._serverSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountSelector.internalValue = value.accountSelector;
      this._accountSelectorType = value.accountSelectorType;
      this._serverSelector.internalValue = value.serverSelector;
    }
  }

  // account_selector - computed: false, optional: false, required: true
  private _accountSelector = new SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelAccountSelectorOutputReference(this, "account_selector");
  public get accountSelector() {
    return this._accountSelector;
  }
  public putAccountSelector(value: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelAccountSelector) {
    this._accountSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountSelectorInput() {
    return this._accountSelector.internalValue;
  }

  // account_selector_type - computed: false, optional: false, required: true
  private _accountSelectorType?: string; 
  public get accountSelectorType() {
    return this.getStringAttribute('account_selector_type');
  }
  public set accountSelectorType(value: string) {
    this._accountSelectorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountSelectorTypeInput() {
    return this._accountSelectorType;
  }

  // server_selector - computed: false, optional: true, required: false
  private _serverSelector = new SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelServerSelectorOutputReference(this, "server_selector");
  public get serverSelector() {
    return this._serverSelector;
  }
  public putServerSelector(value: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelServerSelector) {
    this._serverSelector.internalValue = value;
  }
  public resetServerSelector() {
    this._serverSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSelectorInput() {
    return this._serverSelector.internalValue;
  }
}
export interface SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#individual_server SecurityPolicyV2#individual_server}
  */
  readonly individualServer?: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#individual_server_account SecurityPolicyV2#individual_server_account}
  */
  readonly individualServerAccount?: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServerAccount;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#server_label SecurityPolicyV2#server_label}
  */
  readonly serverLabel?: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabel;
}

export function securityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsToTerraform(struct?: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    individual_server: securityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServerToTerraform(struct!.individualServer),
    individual_server_account: securityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServerAccountToTerraform(struct!.individualServerAccount),
    server_label: securityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelToTerraform(struct!.serverLabel),
  }
}


export function securityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsToHclTerraform(struct?: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    individual_server: {
      value: securityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServerToHclTerraform(struct!.individualServer),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServer",
    },
    individual_server_account: {
      value: securityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServerAccountToHclTerraform(struct!.individualServerAccount),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServerAccount",
    },
    server_label: {
      value: securityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelToHclTerraform(struct!.serverLabel),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabel",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._individualServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.individualServer = this._individualServer?.internalValue;
    }
    if (this._individualServerAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.individualServerAccount = this._individualServerAccount?.internalValue;
    }
    if (this._serverLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverLabel = this._serverLabel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._individualServer.internalValue = undefined;
      this._individualServerAccount.internalValue = undefined;
      this._serverLabel.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._individualServer.internalValue = value.individualServer;
      this._individualServerAccount.internalValue = value.individualServerAccount;
      this._serverLabel.internalValue = value.serverLabel;
    }
  }

  // individual_server - computed: false, optional: true, required: false
  private _individualServer = new SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServerOutputReference(this, "individual_server");
  public get individualServer() {
    return this._individualServer;
  }
  public putIndividualServer(value: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServer) {
    this._individualServer.internalValue = value;
  }
  public resetIndividualServer() {
    this._individualServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get individualServerInput() {
    return this._individualServer.internalValue;
  }

  // individual_server_account - computed: false, optional: true, required: false
  private _individualServerAccount = new SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServerAccountOutputReference(this, "individual_server_account");
  public get individualServerAccount() {
    return this._individualServerAccount;
  }
  public putIndividualServerAccount(value: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsIndividualServerAccount) {
    this._individualServerAccount.internalValue = value;
  }
  public resetIndividualServerAccount() {
    this._individualServerAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get individualServerAccountInput() {
    return this._individualServerAccount.internalValue;
  }

  // server_label - computed: false, optional: true, required: false
  private _serverLabel = new SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabelOutputReference(this, "server_label");
  public get serverLabel() {
    return this._serverLabel;
  }
  public putServerLabel(value: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsServerLabel) {
    this._serverLabel.internalValue = value;
  }
  public resetServerLabel() {
    this._serverLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverLabelInput() {
    return this._serverLabel.internalValue;
  }
}

export class SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectors[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsOutputReference {
    return new SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicyV2RulesResourceSelectorServerBasedResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#selectors SecurityPolicyV2#selectors}
  */
  readonly selectors: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectors[] | cdktf.IResolvable;
}

export function securityPolicyV2RulesResourceSelectorServerBasedResourceToTerraform(struct?: SecurityPolicyV2RulesResourceSelectorServerBasedResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selectors: cdktf.listMapper(securityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsToTerraform, false)(struct!.selectors),
  }
}


export function securityPolicyV2RulesResourceSelectorServerBasedResourceToHclTerraform(struct?: SecurityPolicyV2RulesResourceSelectorServerBasedResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selectors: {
      value: cdktf.listMapperHcl(securityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsToHclTerraform, false)(struct!.selectors),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyV2RulesResourceSelectorServerBasedResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyV2RulesResourceSelectorServerBasedResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyV2RulesResourceSelectorServerBasedResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selectors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selectors.internalValue = value.selectors;
    }
  }

  // selectors - computed: false, optional: false, required: true
  private _selectors = new SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectorsList(this, "selectors", false);
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: SecurityPolicyV2RulesResourceSelectorServerBasedResourceSelectors[] | cdktf.IResolvable) {
    this._selectors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }
}
export interface SecurityPolicyV2RulesResourceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#server_based_resource SecurityPolicyV2#server_based_resource}
  */
  readonly serverBasedResource: SecurityPolicyV2RulesResourceSelectorServerBasedResource;
}

export function securityPolicyV2RulesResourceSelectorToTerraform(struct?: SecurityPolicyV2RulesResourceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_based_resource: securityPolicyV2RulesResourceSelectorServerBasedResourceToTerraform(struct!.serverBasedResource),
  }
}


export function securityPolicyV2RulesResourceSelectorToHclTerraform(struct?: SecurityPolicyV2RulesResourceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_based_resource: {
      value: securityPolicyV2RulesResourceSelectorServerBasedResourceToHclTerraform(struct!.serverBasedResource),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityPolicyV2RulesResourceSelectorServerBasedResource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyV2RulesResourceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityPolicyV2RulesResourceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverBasedResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverBasedResource = this._serverBasedResource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyV2RulesResourceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverBasedResource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverBasedResource.internalValue = value.serverBasedResource;
    }
  }

  // server_based_resource - computed: false, optional: false, required: true
  private _serverBasedResource = new SecurityPolicyV2RulesResourceSelectorServerBasedResourceOutputReference(this, "server_based_resource");
  public get serverBasedResource() {
    return this._serverBasedResource;
  }
  public putServerBasedResource(value: SecurityPolicyV2RulesResourceSelectorServerBasedResource) {
    this._serverBasedResource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverBasedResourceInput() {
    return this._serverBasedResource.internalValue;
  }
}
export interface SecurityPolicyV2Rules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#conditions SecurityPolicyV2#conditions}
  */
  readonly conditions?: SecurityPolicyV2RulesConditions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#name SecurityPolicyV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#override_checkout_duration_in_seconds SecurityPolicyV2#override_checkout_duration_in_seconds}
  */
  readonly overrideCheckoutDurationInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#privileges SecurityPolicyV2#privileges}
  */
  readonly privileges: SecurityPolicyV2RulesPrivileges[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#resource_selector SecurityPolicyV2#resource_selector}
  */
  readonly resourceSelector: SecurityPolicyV2RulesResourceSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#resource_type SecurityPolicyV2#resource_type}
  */
  readonly resourceType: string;
}

export function securityPolicyV2RulesToTerraform(struct?: SecurityPolicyV2Rules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(securityPolicyV2RulesConditionsToTerraform, false)(struct!.conditions),
    name: cdktf.stringToTerraform(struct!.name),
    override_checkout_duration_in_seconds: cdktf.numberToTerraform(struct!.overrideCheckoutDurationInSeconds),
    privileges: cdktf.listMapper(securityPolicyV2RulesPrivilegesToTerraform, false)(struct!.privileges),
    resource_selector: securityPolicyV2RulesResourceSelectorToTerraform(struct!.resourceSelector),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function securityPolicyV2RulesToHclTerraform(struct?: SecurityPolicyV2Rules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(securityPolicyV2RulesConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyV2RulesConditionsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_checkout_duration_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.overrideCheckoutDurationInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    privileges: {
      value: cdktf.listMapperHcl(securityPolicyV2RulesPrivilegesToHclTerraform, false)(struct!.privileges),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyV2RulesPrivilegesList",
    },
    resource_selector: {
      value: securityPolicyV2RulesResourceSelectorToHclTerraform(struct!.resourceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityPolicyV2RulesResourceSelector",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyV2RulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicyV2Rules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overrideCheckoutDurationInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideCheckoutDurationInSeconds = this._overrideCheckoutDurationInSeconds;
    }
    if (this._privileges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileges = this._privileges?.internalValue;
    }
    if (this._resourceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceSelector = this._resourceSelector?.internalValue;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyV2Rules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
      this._name = undefined;
      this._overrideCheckoutDurationInSeconds = undefined;
      this._privileges.internalValue = undefined;
      this._resourceSelector.internalValue = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
      this._name = value.name;
      this._overrideCheckoutDurationInSeconds = value.overrideCheckoutDurationInSeconds;
      this._privileges.internalValue = value.privileges;
      this._resourceSelector.internalValue = value.resourceSelector;
      this._resourceType = value.resourceType;
    }
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new SecurityPolicyV2RulesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: SecurityPolicyV2RulesConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
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

  // override_checkout_duration_in_seconds - computed: false, optional: true, required: false
  private _overrideCheckoutDurationInSeconds?: number; 
  public get overrideCheckoutDurationInSeconds() {
    return this.getNumberAttribute('override_checkout_duration_in_seconds');
  }
  public set overrideCheckoutDurationInSeconds(value: number) {
    this._overrideCheckoutDurationInSeconds = value;
  }
  public resetOverrideCheckoutDurationInSeconds() {
    this._overrideCheckoutDurationInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideCheckoutDurationInSecondsInput() {
    return this._overrideCheckoutDurationInSeconds;
  }

  // privileges - computed: false, optional: false, required: true
  private _privileges = new SecurityPolicyV2RulesPrivilegesList(this, "privileges", false);
  public get privileges() {
    return this._privileges;
  }
  public putPrivileges(value: SecurityPolicyV2RulesPrivileges[] | cdktf.IResolvable) {
    this._privileges.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges.internalValue;
  }

  // resource_selector - computed: false, optional: false, required: true
  private _resourceSelector = new SecurityPolicyV2RulesResourceSelectorOutputReference(this, "resource_selector");
  public get resourceSelector() {
    return this._resourceSelector;
  }
  public putResourceSelector(value: SecurityPolicyV2RulesResourceSelector) {
    this._resourceSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSelectorInput() {
    return this._resourceSelector.internalValue;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class SecurityPolicyV2RulesList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicyV2Rules[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicyV2RulesOutputReference {
    return new SecurityPolicyV2RulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2 oktapam_security_policy_v2}
*/
export class SecurityPolicyV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktapam_security_policy_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityPolicyV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityPolicyV2 to import
  * @param importFromId The id of the existing SecurityPolicyV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityPolicyV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktapam_security_policy_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy_v2 oktapam_security_policy_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityPolicyV2Config
  */
  public constructor(scope: Construct, id: string, config: SecurityPolicyV2Config) {
    super(scope, id, {
      terraformResourceType: 'oktapam_security_policy_v2',
      terraformGeneratorMetadata: {
        providerName: 'oktapam',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._description = config.description;
    this._name = config.name;
    this._principals.internalValue = config.principals;
    this._rules.internalValue = config.rules;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
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

  // principals - computed: false, optional: false, required: true
  private _principals = new SecurityPolicyV2PrincipalsOutputReference(this, "principals");
  public get principals() {
    return this._principals;
  }
  public putPrincipals(value: SecurityPolicyV2Principals) {
    this._principals.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new SecurityPolicyV2RulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: SecurityPolicyV2Rules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      principals: securityPolicyV2PrincipalsToTerraform(this._principals.internalValue),
      rules: cdktf.listMapper(securityPolicyV2RulesToTerraform, false)(this._rules.internalValue),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principals: {
        value: securityPolicyV2PrincipalsToHclTerraform(this._principals.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityPolicyV2Principals",
      },
      rules: {
        value: cdktf.listMapperHcl(securityPolicyV2RulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityPolicyV2RulesList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
