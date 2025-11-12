// https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, indicates that the Security Policy is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#active SecurityPolicy#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * The human-readable description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#description SecurityPolicy#description}
  */
  readonly description?: string;
  /**
  * The human-readable name of the resource. Values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#name SecurityPolicy#name}
  */
  readonly name: string;
  /**
  * The UUID of a specific Resource Group associated with the Security Policy. If undefined, the Security Policy applies to all resources for your Team. This value must be defined if the current user has the Delegated Security Admin role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#resource_group SecurityPolicy#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * principals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#principals SecurityPolicy#principals}
  */
  readonly principals: SecurityPolicyPrincipals;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#rule SecurityPolicy#rule}
  */
  readonly rule: SecurityPolicyRule[] | cdktf.IResolvable;
}
export interface SecurityPolicyPrincipals {
  /**
  * The UUIDs of existing Groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#groups SecurityPolicy#groups}
  */
  readonly groups?: string[];
}

export function securityPolicyPrincipalsToTerraform(struct?: SecurityPolicyPrincipalsOutputReference | SecurityPolicyPrincipals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
  }
}


export function securityPolicyPrincipalsToHclTerraform(struct?: SecurityPolicyPrincipalsOutputReference | SecurityPolicyPrincipals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyPrincipalsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyPrincipals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyPrincipals | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groups = value.groups;
    }
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }
}
export interface SecurityPolicyRuleConditionsAccessRequest {
  /**
  * The number of seconds the approval remains valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#expires_after_seconds SecurityPolicy#expires_after_seconds}
  */
  readonly expiresAfterSeconds?: number;
  /**
  * The ID of the Access Request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#request_type_id SecurityPolicy#request_type_id}
  */
  readonly requestTypeId: string;
  /**
  * The name of the Access Request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#request_type_name SecurityPolicy#request_type_name}
  */
  readonly requestTypeName: string;
}

export function securityPolicyRuleConditionsAccessRequestToTerraform(struct?: SecurityPolicyRuleConditionsAccessRequest | cdktf.IResolvable): any {
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


export function securityPolicyRuleConditionsAccessRequestToHclTerraform(struct?: SecurityPolicyRuleConditionsAccessRequest | cdktf.IResolvable): any {
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

export class SecurityPolicyRuleConditionsAccessRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicyRuleConditionsAccessRequest | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityPolicyRuleConditionsAccessRequest | cdktf.IResolvable | undefined) {
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

  // request_type_id - computed: false, optional: false, required: true
  private _requestTypeId?: string; 
  public get requestTypeId() {
    return this.getStringAttribute('request_type_id');
  }
  public set requestTypeId(value: string) {
    this._requestTypeId = value;
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

export class SecurityPolicyRuleConditionsAccessRequestList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicyRuleConditionsAccessRequest[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicyRuleConditionsAccessRequestOutputReference {
    return new SecurityPolicyRuleConditionsAccessRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicyRuleConditionsGateway {
  /**
  * Whether to record sessions made through a Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#session_recording SecurityPolicy#session_recording}
  */
  readonly sessionRecording: boolean | cdktf.IResolvable;
  /**
  * Whether to forward traffic through a Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#traffic_forwarding SecurityPolicy#traffic_forwarding}
  */
  readonly trafficForwarding: boolean | cdktf.IResolvable;
}

export function securityPolicyRuleConditionsGatewayToTerraform(struct?: SecurityPolicyRuleConditionsGatewayOutputReference | SecurityPolicyRuleConditionsGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    session_recording: cdktf.booleanToTerraform(struct!.sessionRecording),
    traffic_forwarding: cdktf.booleanToTerraform(struct!.trafficForwarding),
  }
}


export function securityPolicyRuleConditionsGatewayToHclTerraform(struct?: SecurityPolicyRuleConditionsGatewayOutputReference | SecurityPolicyRuleConditionsGateway): any {
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

export class SecurityPolicyRuleConditionsGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyRuleConditionsGateway | undefined {
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

  public set internalValue(value: SecurityPolicyRuleConditionsGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sessionRecording = undefined;
      this._trafficForwarding = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface SecurityPolicyRuleConditionsMfa {
  /**
  * The authentication context class reference (ACR) for this policy. This defines a specific set of assurance level requirements required by a protected resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#acr_values SecurityPolicy#acr_values}
  */
  readonly acrValues: string;
  /**
  * The number of seconds an MFA verification remains valid. After this time users need to reauthenticate before they can open new connections to resources. Defining a value of `0` requires users to authenticate for every connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#reauth_frequency_in_seconds SecurityPolicy#reauth_frequency_in_seconds}
  */
  readonly reauthFrequencyInSeconds: number;
}

export function securityPolicyRuleConditionsMfaToTerraform(struct?: SecurityPolicyRuleConditionsMfa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acr_values: cdktf.stringToTerraform(struct!.acrValues),
    reauth_frequency_in_seconds: cdktf.numberToTerraform(struct!.reauthFrequencyInSeconds),
  }
}


export function securityPolicyRuleConditionsMfaToHclTerraform(struct?: SecurityPolicyRuleConditionsMfa | cdktf.IResolvable): any {
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
    reauth_frequency_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.reauthFrequencyInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRuleConditionsMfaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicyRuleConditionsMfa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acrValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.acrValues = this._acrValues;
    }
    if (this._reauthFrequencyInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.reauthFrequencyInSeconds = this._reauthFrequencyInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRuleConditionsMfa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acrValues = undefined;
      this._reauthFrequencyInSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acrValues = value.acrValues;
      this._reauthFrequencyInSeconds = value.reauthFrequencyInSeconds;
    }
  }

  // acr_values - computed: false, optional: false, required: true
  private _acrValues?: string; 
  public get acrValues() {
    return this.getStringAttribute('acr_values');
  }
  public set acrValues(value: string) {
    this._acrValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acrValuesInput() {
    return this._acrValues;
  }

  // reauth_frequency_in_seconds - computed: false, optional: false, required: true
  private _reauthFrequencyInSeconds?: number; 
  public get reauthFrequencyInSeconds() {
    return this.getNumberAttribute('reauth_frequency_in_seconds');
  }
  public set reauthFrequencyInSeconds(value: number) {
    this._reauthFrequencyInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthFrequencyInSecondsInput() {
    return this._reauthFrequencyInSeconds;
  }
}

export class SecurityPolicyRuleConditionsMfaList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicyRuleConditionsMfa[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicyRuleConditionsMfaOutputReference {
    return new SecurityPolicyRuleConditionsMfaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicyRuleConditions {
  /**
  * access_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#access_request SecurityPolicy#access_request}
  */
  readonly accessRequest?: SecurityPolicyRuleConditionsAccessRequest[] | cdktf.IResolvable;
  /**
  * gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#gateway SecurityPolicy#gateway}
  */
  readonly gateway?: SecurityPolicyRuleConditionsGateway;
  /**
  * mfa block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#mfa SecurityPolicy#mfa}
  */
  readonly mfa?: SecurityPolicyRuleConditionsMfa[] | cdktf.IResolvable;
}

export function securityPolicyRuleConditionsToTerraform(struct?: SecurityPolicyRuleConditionsOutputReference | SecurityPolicyRuleConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_request: cdktf.listMapper(securityPolicyRuleConditionsAccessRequestToTerraform, true)(struct!.accessRequest),
    gateway: securityPolicyRuleConditionsGatewayToTerraform(struct!.gateway),
    mfa: cdktf.listMapper(securityPolicyRuleConditionsMfaToTerraform, true)(struct!.mfa),
  }
}


export function securityPolicyRuleConditionsToHclTerraform(struct?: SecurityPolicyRuleConditionsOutputReference | SecurityPolicyRuleConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_request: {
      value: cdktf.listMapperHcl(securityPolicyRuleConditionsAccessRequestToHclTerraform, true)(struct!.accessRequest),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyRuleConditionsAccessRequestList",
    },
    gateway: {
      value: securityPolicyRuleConditionsGatewayToHclTerraform(struct!.gateway),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyRuleConditionsGatewayList",
    },
    mfa: {
      value: cdktf.listMapperHcl(securityPolicyRuleConditionsMfaToHclTerraform, true)(struct!.mfa),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyRuleConditionsMfaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRuleConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyRuleConditions | undefined {
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

  public set internalValue(value: SecurityPolicyRuleConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessRequest.internalValue = undefined;
      this._gateway.internalValue = undefined;
      this._mfa.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessRequest.internalValue = value.accessRequest;
      this._gateway.internalValue = value.gateway;
      this._mfa.internalValue = value.mfa;
    }
  }

  // access_request - computed: false, optional: true, required: false
  private _accessRequest = new SecurityPolicyRuleConditionsAccessRequestList(this, "access_request", false);
  public get accessRequest() {
    return this._accessRequest;
  }
  public putAccessRequest(value: SecurityPolicyRuleConditionsAccessRequest[] | cdktf.IResolvable) {
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
  private _gateway = new SecurityPolicyRuleConditionsGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: SecurityPolicyRuleConditionsGateway) {
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
  private _mfa = new SecurityPolicyRuleConditionsMfaList(this, "mfa", false);
  public get mfa() {
    return this._mfa;
  }
  public putMfa(value: SecurityPolicyRuleConditionsMfa[] | cdktf.IResolvable) {
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
export interface SecurityPolicyRulePrivilegesPasswordCheckoutRdp {
  /**
  * If `true`, grants the privilege to Principals on matching resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#enabled SecurityPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function securityPolicyRulePrivilegesPasswordCheckoutRdpToTerraform(struct?: SecurityPolicyRulePrivilegesPasswordCheckoutRdpOutputReference | SecurityPolicyRulePrivilegesPasswordCheckoutRdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function securityPolicyRulePrivilegesPasswordCheckoutRdpToHclTerraform(struct?: SecurityPolicyRulePrivilegesPasswordCheckoutRdpOutputReference | SecurityPolicyRulePrivilegesPasswordCheckoutRdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRulePrivilegesPasswordCheckoutRdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyRulePrivilegesPasswordCheckoutRdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRulePrivilegesPasswordCheckoutRdp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface SecurityPolicyRulePrivilegesPasswordCheckoutSsh {
  /**
  * If `true`, grants the privilege to Principals on matching resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#enabled SecurityPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function securityPolicyRulePrivilegesPasswordCheckoutSshToTerraform(struct?: SecurityPolicyRulePrivilegesPasswordCheckoutSshOutputReference | SecurityPolicyRulePrivilegesPasswordCheckoutSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function securityPolicyRulePrivilegesPasswordCheckoutSshToHclTerraform(struct?: SecurityPolicyRulePrivilegesPasswordCheckoutSshOutputReference | SecurityPolicyRulePrivilegesPasswordCheckoutSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRulePrivilegesPasswordCheckoutSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyRulePrivilegesPasswordCheckoutSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRulePrivilegesPasswordCheckoutSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface SecurityPolicyRulePrivilegesPrincipalAccountRdp {
  /**
  * Provides coarse grain (full admin) access to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#admin_level_permissions SecurityPolicy#admin_level_permissions}
  */
  readonly adminLevelPermissions?: boolean | cdktf.IResolvable;
  /**
  * If `true`, grants the privilege to Principals on matching resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#enabled SecurityPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function securityPolicyRulePrivilegesPrincipalAccountRdpToTerraform(struct?: SecurityPolicyRulePrivilegesPrincipalAccountRdpOutputReference | SecurityPolicyRulePrivilegesPrincipalAccountRdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_level_permissions: cdktf.booleanToTerraform(struct!.adminLevelPermissions),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function securityPolicyRulePrivilegesPrincipalAccountRdpToHclTerraform(struct?: SecurityPolicyRulePrivilegesPrincipalAccountRdpOutputReference | SecurityPolicyRulePrivilegesPrincipalAccountRdp): any {
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
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRulePrivilegesPrincipalAccountRdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyRulePrivilegesPrincipalAccountRdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminLevelPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminLevelPermissions = this._adminLevelPermissions;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRulePrivilegesPrincipalAccountRdp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminLevelPermissions = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminLevelPermissions = value.adminLevelPermissions;
      this._enabled = value.enabled;
    }
  }

  // admin_level_permissions - computed: false, optional: true, required: false
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface SecurityPolicyRulePrivilegesPrincipalAccountSsh {
  /**
  * Provides coarse grain (full admin) access to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#admin_level_permissions SecurityPolicy#admin_level_permissions}
  */
  readonly adminLevelPermissions?: boolean | cdktf.IResolvable;
  /**
  * If `true`, grants the privilege to Principals on matching resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#enabled SecurityPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * UUIDs of the existing sudo command bundles. These commands have been created by the resource administrator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#sudo_command_bundles SecurityPolicy#sudo_command_bundles}
  */
  readonly sudoCommandBundles?: string[];
  /**
  * The name for sudo commands that will be visible to end users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#sudo_display_name SecurityPolicy#sudo_display_name}
  */
  readonly sudoDisplayName?: string;
}

export function securityPolicyRulePrivilegesPrincipalAccountSshToTerraform(struct?: SecurityPolicyRulePrivilegesPrincipalAccountSshOutputReference | SecurityPolicyRulePrivilegesPrincipalAccountSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_level_permissions: cdktf.booleanToTerraform(struct!.adminLevelPermissions),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    sudo_command_bundles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sudoCommandBundles),
    sudo_display_name: cdktf.stringToTerraform(struct!.sudoDisplayName),
  }
}


export function securityPolicyRulePrivilegesPrincipalAccountSshToHclTerraform(struct?: SecurityPolicyRulePrivilegesPrincipalAccountSshOutputReference | SecurityPolicyRulePrivilegesPrincipalAccountSsh): any {
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
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sudo_command_bundles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sudoCommandBundles),
      isBlock: false,
      type: "set",
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

export class SecurityPolicyRulePrivilegesPrincipalAccountSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyRulePrivilegesPrincipalAccountSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminLevelPermissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminLevelPermissions = this._adminLevelPermissions;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
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

  public set internalValue(value: SecurityPolicyRulePrivilegesPrincipalAccountSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminLevelPermissions = undefined;
      this._enabled = undefined;
      this._sudoCommandBundles = undefined;
      this._sudoDisplayName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminLevelPermissions = value.adminLevelPermissions;
      this._enabled = value.enabled;
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // sudo_command_bundles - computed: false, optional: true, required: false
  private _sudoCommandBundles?: string[]; 
  public get sudoCommandBundles() {
    return cdktf.Fn.tolist(this.getListAttribute('sudo_command_bundles'));
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
export interface SecurityPolicyRulePrivilegesSecret {
  /**
  * Defines the privilege to create a Secret Folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#folder_create SecurityPolicy#folder_create}
  */
  readonly folderCreate: boolean | cdktf.IResolvable;
  /**
  * Defines the privilege to delete a Secret Folder and its contents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#folder_delete SecurityPolicy#folder_delete}
  */
  readonly folderDelete: boolean | cdktf.IResolvable;
  /**
  * Defines the privilege to update the metadata of a Secret Folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#folder_update SecurityPolicy#folder_update}
  */
  readonly folderUpdate: boolean | cdktf.IResolvable;
  /**
  * Defines the privilege to list the contents of a Secret Folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#list SecurityPolicy#list}
  */
  readonly list: boolean | cdktf.IResolvable;
  /**
  * Defines the privilege to create a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#secret_create SecurityPolicy#secret_create}
  */
  readonly secretCreate: boolean | cdktf.IResolvable;
  /**
  * Defines the privilege to delete a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#secret_delete SecurityPolicy#secret_delete}
  */
  readonly secretDelete: boolean | cdktf.IResolvable;
  /**
  * Defines the privilege to reveal the plaintext contents of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#secret_reveal SecurityPolicy#secret_reveal}
  */
  readonly secretReveal: boolean | cdktf.IResolvable;
  /**
  * Defines the privilege to update a Secret and its metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#secret_update SecurityPolicy#secret_update}
  */
  readonly secretUpdate: boolean | cdktf.IResolvable;
}

export function securityPolicyRulePrivilegesSecretToTerraform(struct?: SecurityPolicyRulePrivilegesSecretOutputReference | SecurityPolicyRulePrivilegesSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    folder_create: cdktf.booleanToTerraform(struct!.folderCreate),
    folder_delete: cdktf.booleanToTerraform(struct!.folderDelete),
    folder_update: cdktf.booleanToTerraform(struct!.folderUpdate),
    list: cdktf.booleanToTerraform(struct!.list),
    secret_create: cdktf.booleanToTerraform(struct!.secretCreate),
    secret_delete: cdktf.booleanToTerraform(struct!.secretDelete),
    secret_reveal: cdktf.booleanToTerraform(struct!.secretReveal),
    secret_update: cdktf.booleanToTerraform(struct!.secretUpdate),
  }
}


export function securityPolicyRulePrivilegesSecretToHclTerraform(struct?: SecurityPolicyRulePrivilegesSecretOutputReference | SecurityPolicyRulePrivilegesSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    folder_create: {
      value: cdktf.booleanToHclTerraform(struct!.folderCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    folder_delete: {
      value: cdktf.booleanToHclTerraform(struct!.folderDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    folder_update: {
      value: cdktf.booleanToHclTerraform(struct!.folderUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    list: {
      value: cdktf.booleanToHclTerraform(struct!.list),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_create: {
      value: cdktf.booleanToHclTerraform(struct!.secretCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_delete: {
      value: cdktf.booleanToHclTerraform(struct!.secretDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_reveal: {
      value: cdktf.booleanToHclTerraform(struct!.secretReveal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_update: {
      value: cdktf.booleanToHclTerraform(struct!.secretUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRulePrivilegesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyRulePrivilegesSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._folderCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderCreate = this._folderCreate;
    }
    if (this._folderDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderDelete = this._folderDelete;
    }
    if (this._folderUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderUpdate = this._folderUpdate;
    }
    if (this._list !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list;
    }
    if (this._secretCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretCreate = this._secretCreate;
    }
    if (this._secretDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretDelete = this._secretDelete;
    }
    if (this._secretReveal !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretReveal = this._secretReveal;
    }
    if (this._secretUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretUpdate = this._secretUpdate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRulePrivilegesSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._folderCreate = undefined;
      this._folderDelete = undefined;
      this._folderUpdate = undefined;
      this._list = undefined;
      this._secretCreate = undefined;
      this._secretDelete = undefined;
      this._secretReveal = undefined;
      this._secretUpdate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._folderCreate = value.folderCreate;
      this._folderDelete = value.folderDelete;
      this._folderUpdate = value.folderUpdate;
      this._list = value.list;
      this._secretCreate = value.secretCreate;
      this._secretDelete = value.secretDelete;
      this._secretReveal = value.secretReveal;
      this._secretUpdate = value.secretUpdate;
    }
  }

  // folder_create - computed: false, optional: false, required: true
  private _folderCreate?: boolean | cdktf.IResolvable; 
  public get folderCreate() {
    return this.getBooleanAttribute('folder_create');
  }
  public set folderCreate(value: boolean | cdktf.IResolvable) {
    this._folderCreate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderCreateInput() {
    return this._folderCreate;
  }

  // folder_delete - computed: false, optional: false, required: true
  private _folderDelete?: boolean | cdktf.IResolvable; 
  public get folderDelete() {
    return this.getBooleanAttribute('folder_delete');
  }
  public set folderDelete(value: boolean | cdktf.IResolvable) {
    this._folderDelete = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderDeleteInput() {
    return this._folderDelete;
  }

  // folder_update - computed: false, optional: false, required: true
  private _folderUpdate?: boolean | cdktf.IResolvable; 
  public get folderUpdate() {
    return this.getBooleanAttribute('folder_update');
  }
  public set folderUpdate(value: boolean | cdktf.IResolvable) {
    this._folderUpdate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderUpdateInput() {
    return this._folderUpdate;
  }

  // list - computed: false, optional: false, required: true
  private _list?: boolean | cdktf.IResolvable; 
  public get list() {
    return this.getBooleanAttribute('list');
  }
  public set list(value: boolean | cdktf.IResolvable) {
    this._list = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list;
  }

  // secret_create - computed: false, optional: false, required: true
  private _secretCreate?: boolean | cdktf.IResolvable; 
  public get secretCreate() {
    return this.getBooleanAttribute('secret_create');
  }
  public set secretCreate(value: boolean | cdktf.IResolvable) {
    this._secretCreate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretCreateInput() {
    return this._secretCreate;
  }

  // secret_delete - computed: false, optional: false, required: true
  private _secretDelete?: boolean | cdktf.IResolvable; 
  public get secretDelete() {
    return this.getBooleanAttribute('secret_delete');
  }
  public set secretDelete(value: boolean | cdktf.IResolvable) {
    this._secretDelete = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretDeleteInput() {
    return this._secretDelete;
  }

  // secret_reveal - computed: false, optional: false, required: true
  private _secretReveal?: boolean | cdktf.IResolvable; 
  public get secretReveal() {
    return this.getBooleanAttribute('secret_reveal');
  }
  public set secretReveal(value: boolean | cdktf.IResolvable) {
    this._secretReveal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRevealInput() {
    return this._secretReveal;
  }

  // secret_update - computed: false, optional: false, required: true
  private _secretUpdate?: boolean | cdktf.IResolvable; 
  public get secretUpdate() {
    return this.getBooleanAttribute('secret_update');
  }
  public set secretUpdate(value: boolean | cdktf.IResolvable) {
    this._secretUpdate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretUpdateInput() {
    return this._secretUpdate;
  }
}
export interface SecurityPolicyRulePrivileges {
  /**
  * password_checkout_rdp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#password_checkout_rdp SecurityPolicy#password_checkout_rdp}
  */
  readonly passwordCheckoutRdp?: SecurityPolicyRulePrivilegesPasswordCheckoutRdp;
  /**
  * password_checkout_ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#password_checkout_ssh SecurityPolicy#password_checkout_ssh}
  */
  readonly passwordCheckoutSsh?: SecurityPolicyRulePrivilegesPasswordCheckoutSsh;
  /**
  * principal_account_rdp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#principal_account_rdp SecurityPolicy#principal_account_rdp}
  */
  readonly principalAccountRdp?: SecurityPolicyRulePrivilegesPrincipalAccountRdp;
  /**
  * principal_account_ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#principal_account_ssh SecurityPolicy#principal_account_ssh}
  */
  readonly principalAccountSsh?: SecurityPolicyRulePrivilegesPrincipalAccountSsh;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#secret SecurityPolicy#secret}
  */
  readonly secret?: SecurityPolicyRulePrivilegesSecret;
}

export function securityPolicyRulePrivilegesToTerraform(struct?: SecurityPolicyRulePrivilegesOutputReference | SecurityPolicyRulePrivileges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_checkout_rdp: securityPolicyRulePrivilegesPasswordCheckoutRdpToTerraform(struct!.passwordCheckoutRdp),
    password_checkout_ssh: securityPolicyRulePrivilegesPasswordCheckoutSshToTerraform(struct!.passwordCheckoutSsh),
    principal_account_rdp: securityPolicyRulePrivilegesPrincipalAccountRdpToTerraform(struct!.principalAccountRdp),
    principal_account_ssh: securityPolicyRulePrivilegesPrincipalAccountSshToTerraform(struct!.principalAccountSsh),
    secret: securityPolicyRulePrivilegesSecretToTerraform(struct!.secret),
  }
}


export function securityPolicyRulePrivilegesToHclTerraform(struct?: SecurityPolicyRulePrivilegesOutputReference | SecurityPolicyRulePrivileges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password_checkout_rdp: {
      value: securityPolicyRulePrivilegesPasswordCheckoutRdpToHclTerraform(struct!.passwordCheckoutRdp),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyRulePrivilegesPasswordCheckoutRdpList",
    },
    password_checkout_ssh: {
      value: securityPolicyRulePrivilegesPasswordCheckoutSshToHclTerraform(struct!.passwordCheckoutSsh),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyRulePrivilegesPasswordCheckoutSshList",
    },
    principal_account_rdp: {
      value: securityPolicyRulePrivilegesPrincipalAccountRdpToHclTerraform(struct!.principalAccountRdp),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyRulePrivilegesPrincipalAccountRdpList",
    },
    principal_account_ssh: {
      value: securityPolicyRulePrivilegesPrincipalAccountSshToHclTerraform(struct!.principalAccountSsh),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyRulePrivilegesPrincipalAccountSshList",
    },
    secret: {
      value: securityPolicyRulePrivilegesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyRulePrivilegesSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRulePrivilegesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyRulePrivileges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRulePrivileges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._passwordCheckoutRdp.internalValue = undefined;
      this._passwordCheckoutSsh.internalValue = undefined;
      this._principalAccountRdp.internalValue = undefined;
      this._principalAccountSsh.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._passwordCheckoutRdp.internalValue = value.passwordCheckoutRdp;
      this._passwordCheckoutSsh.internalValue = value.passwordCheckoutSsh;
      this._principalAccountRdp.internalValue = value.principalAccountRdp;
      this._principalAccountSsh.internalValue = value.principalAccountSsh;
      this._secret.internalValue = value.secret;
    }
  }

  // password_checkout_rdp - computed: false, optional: true, required: false
  private _passwordCheckoutRdp = new SecurityPolicyRulePrivilegesPasswordCheckoutRdpOutputReference(this, "password_checkout_rdp");
  public get passwordCheckoutRdp() {
    return this._passwordCheckoutRdp;
  }
  public putPasswordCheckoutRdp(value: SecurityPolicyRulePrivilegesPasswordCheckoutRdp) {
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
  private _passwordCheckoutSsh = new SecurityPolicyRulePrivilegesPasswordCheckoutSshOutputReference(this, "password_checkout_ssh");
  public get passwordCheckoutSsh() {
    return this._passwordCheckoutSsh;
  }
  public putPasswordCheckoutSsh(value: SecurityPolicyRulePrivilegesPasswordCheckoutSsh) {
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
  private _principalAccountRdp = new SecurityPolicyRulePrivilegesPrincipalAccountRdpOutputReference(this, "principal_account_rdp");
  public get principalAccountRdp() {
    return this._principalAccountRdp;
  }
  public putPrincipalAccountRdp(value: SecurityPolicyRulePrivilegesPrincipalAccountRdp) {
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
  private _principalAccountSsh = new SecurityPolicyRulePrivilegesPrincipalAccountSshOutputReference(this, "principal_account_ssh");
  public get principalAccountSsh() {
    return this._principalAccountSsh;
  }
  public putPrincipalAccountSsh(value: SecurityPolicyRulePrivilegesPrincipalAccountSsh) {
    this._principalAccountSsh.internalValue = value;
  }
  public resetPrincipalAccountSsh() {
    this._principalAccountSsh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalAccountSshInput() {
    return this._principalAccountSsh.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new SecurityPolicyRulePrivilegesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: SecurityPolicyRulePrivilegesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface SecurityPolicyRuleResourcesSecretsSecret {
  /**
  * The UUID of the Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#secret_id SecurityPolicy#secret_id}
  */
  readonly secretId: string;
}

export function securityPolicyRuleResourcesSecretsSecretToTerraform(struct?: SecurityPolicyRuleResourcesSecretsSecretOutputReference | SecurityPolicyRuleResourcesSecretsSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_id: cdktf.stringToTerraform(struct!.secretId),
  }
}


export function securityPolicyRuleResourcesSecretsSecretToHclTerraform(struct?: SecurityPolicyRuleResourcesSecretsSecretOutputReference | SecurityPolicyRuleResourcesSecretsSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRuleResourcesSecretsSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyRuleResourcesSecretsSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRuleResourcesSecretsSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretId = value.secretId;
    }
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }
}
export interface SecurityPolicyRuleResourcesSecretsSecretFolder {
  /**
  * The UUID of the Secret Folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#secret_folder_id SecurityPolicy#secret_folder_id}
  */
  readonly secretFolderId: string;
}

export function securityPolicyRuleResourcesSecretsSecretFolderToTerraform(struct?: SecurityPolicyRuleResourcesSecretsSecretFolderOutputReference | SecurityPolicyRuleResourcesSecretsSecretFolder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_folder_id: cdktf.stringToTerraform(struct!.secretFolderId),
  }
}


export function securityPolicyRuleResourcesSecretsSecretFolderToHclTerraform(struct?: SecurityPolicyRuleResourcesSecretsSecretFolderOutputReference | SecurityPolicyRuleResourcesSecretsSecretFolder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_folder_id: {
      value: cdktf.stringToHclTerraform(struct!.secretFolderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRuleResourcesSecretsSecretFolderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyRuleResourcesSecretsSecretFolder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretFolderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretFolderId = this._secretFolderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRuleResourcesSecretsSecretFolder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretFolderId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretFolderId = value.secretFolderId;
    }
  }

  // secret_folder_id - computed: false, optional: false, required: true
  private _secretFolderId?: string; 
  public get secretFolderId() {
    return this.getStringAttribute('secret_folder_id');
  }
  public set secretFolderId(value: string) {
    this._secretFolderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretFolderIdInput() {
    return this._secretFolderId;
  }
}
export interface SecurityPolicyRuleResourcesSecrets {
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#secret SecurityPolicy#secret}
  */
  readonly secret?: SecurityPolicyRuleResourcesSecretsSecret;
  /**
  * secret_folder block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#secret_folder SecurityPolicy#secret_folder}
  */
  readonly secretFolder?: SecurityPolicyRuleResourcesSecretsSecretFolder;
}

export function securityPolicyRuleResourcesSecretsToTerraform(struct?: SecurityPolicyRuleResourcesSecretsOutputReference | SecurityPolicyRuleResourcesSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: securityPolicyRuleResourcesSecretsSecretToTerraform(struct!.secret),
    secret_folder: securityPolicyRuleResourcesSecretsSecretFolderToTerraform(struct!.secretFolder),
  }
}


export function securityPolicyRuleResourcesSecretsToHclTerraform(struct?: SecurityPolicyRuleResourcesSecretsOutputReference | SecurityPolicyRuleResourcesSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: securityPolicyRuleResourcesSecretsSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyRuleResourcesSecretsSecretList",
    },
    secret_folder: {
      value: securityPolicyRuleResourcesSecretsSecretFolderToHclTerraform(struct!.secretFolder),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyRuleResourcesSecretsSecretFolderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRuleResourcesSecretsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyRuleResourcesSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._secretFolder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretFolder = this._secretFolder?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRuleResourcesSecrets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret.internalValue = undefined;
      this._secretFolder.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret.internalValue = value.secret;
      this._secretFolder.internalValue = value.secretFolder;
    }
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new SecurityPolicyRuleResourcesSecretsSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: SecurityPolicyRuleResourcesSecretsSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // secret_folder - computed: false, optional: true, required: false
  private _secretFolder = new SecurityPolicyRuleResourcesSecretsSecretFolderOutputReference(this, "secret_folder");
  public get secretFolder() {
    return this._secretFolder;
  }
  public putSecretFolder(value: SecurityPolicyRuleResourcesSecretsSecretFolder) {
    this._secretFolder.internalValue = value;
  }
  public resetSecretFolder() {
    this._secretFolder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretFolderInput() {
    return this._secretFolder.internalValue;
  }
}
export interface SecurityPolicyRuleResourcesServersLabelSelectors {
  /**
  * The usernames of a local accounts on a server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#accounts SecurityPolicy#accounts}
  */
  readonly accounts?: string[];
  /**
  * Defines a map of key-value pairs used to match servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#server_labels SecurityPolicy#server_labels}
  */
  readonly serverLabels: { [key: string]: string };
}

export function securityPolicyRuleResourcesServersLabelSelectorsToTerraform(struct?: SecurityPolicyRuleResourcesServersLabelSelectorsOutputReference | SecurityPolicyRuleResourcesServersLabelSelectors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accounts),
    server_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.serverLabels),
  }
}


export function securityPolicyRuleResourcesServersLabelSelectorsToHclTerraform(struct?: SecurityPolicyRuleResourcesServersLabelSelectorsOutputReference | SecurityPolicyRuleResourcesServersLabelSelectors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    server_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.serverLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRuleResourcesServersLabelSelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyRuleResourcesServersLabelSelectors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.accounts = this._accounts;
    }
    if (this._serverLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverLabels = this._serverLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRuleResourcesServersLabelSelectors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accounts = undefined;
      this._serverLabels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accounts = value.accounts;
      this._serverLabels = value.serverLabels;
    }
  }

  // accounts - computed: false, optional: true, required: false
  private _accounts?: string[]; 
  public get accounts() {
    return this.getListAttribute('accounts');
  }
  public set accounts(value: string[]) {
    this._accounts = value;
  }
  public resetAccounts() {
    this._accounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsInput() {
    return this._accounts;
  }

  // server_labels - computed: false, optional: false, required: true
  private _serverLabels?: { [key: string]: string }; 
  public get serverLabels() {
    return this.getStringMapAttribute('server_labels');
  }
  public set serverLabels(value: { [key: string]: string }) {
    this._serverLabels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverLabelsInput() {
    return this._serverLabels;
  }
}
export interface SecurityPolicyRuleResourcesServersServer {
  /**
  * The UUID of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#server_id SecurityPolicy#server_id}
  */
  readonly serverId: string;
}

export function securityPolicyRuleResourcesServersServerToTerraform(struct?: SecurityPolicyRuleResourcesServersServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_id: cdktf.stringToTerraform(struct!.serverId),
  }
}


export function securityPolicyRuleResourcesServersServerToHclTerraform(struct?: SecurityPolicyRuleResourcesServersServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_id: {
      value: cdktf.stringToHclTerraform(struct!.serverId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRuleResourcesServersServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicyRuleResourcesServersServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverId = this._serverId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRuleResourcesServersServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverId = value.serverId;
    }
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }
}

export class SecurityPolicyRuleResourcesServersServerList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicyRuleResourcesServersServer[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicyRuleResourcesServersServerOutputReference {
    return new SecurityPolicyRuleResourcesServersServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicyRuleResourcesServersServerAccount {
  /**
  * The username of a local account on a server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#account SecurityPolicy#account}
  */
  readonly account: string;
  /**
  * The UUID of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#server_id SecurityPolicy#server_id}
  */
  readonly serverId: string;
}

export function securityPolicyRuleResourcesServersServerAccountToTerraform(struct?: SecurityPolicyRuleResourcesServersServerAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    server_id: cdktf.stringToTerraform(struct!.serverId),
  }
}


export function securityPolicyRuleResourcesServersServerAccountToHclTerraform(struct?: SecurityPolicyRuleResourcesServersServerAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_id: {
      value: cdktf.stringToHclTerraform(struct!.serverId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRuleResourcesServersServerAccountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicyRuleResourcesServersServerAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._serverId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverId = this._serverId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRuleResourcesServersServerAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account = undefined;
      this._serverId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account = value.account;
      this._serverId = value.serverId;
    }
  }

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId?: string; 
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId;
  }
}

export class SecurityPolicyRuleResourcesServersServerAccountList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicyRuleResourcesServersServerAccount[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicyRuleResourcesServersServerAccountOutputReference {
    return new SecurityPolicyRuleResourcesServersServerAccountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicyRuleResourcesServers {
  /**
  * label_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#label_selectors SecurityPolicy#label_selectors}
  */
  readonly labelSelectors?: SecurityPolicyRuleResourcesServersLabelSelectors;
  /**
  * server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#server SecurityPolicy#server}
  */
  readonly server?: SecurityPolicyRuleResourcesServersServer[] | cdktf.IResolvable;
  /**
  * server_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#server_account SecurityPolicy#server_account}
  */
  readonly serverAccount?: SecurityPolicyRuleResourcesServersServerAccount[] | cdktf.IResolvable;
}

export function securityPolicyRuleResourcesServersToTerraform(struct?: SecurityPolicyRuleResourcesServersOutputReference | SecurityPolicyRuleResourcesServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selectors: securityPolicyRuleResourcesServersLabelSelectorsToTerraform(struct!.labelSelectors),
    server: cdktf.listMapper(securityPolicyRuleResourcesServersServerToTerraform, true)(struct!.server),
    server_account: cdktf.listMapper(securityPolicyRuleResourcesServersServerAccountToTerraform, true)(struct!.serverAccount),
  }
}


export function securityPolicyRuleResourcesServersToHclTerraform(struct?: SecurityPolicyRuleResourcesServersOutputReference | SecurityPolicyRuleResourcesServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selectors: {
      value: securityPolicyRuleResourcesServersLabelSelectorsToHclTerraform(struct!.labelSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyRuleResourcesServersLabelSelectorsList",
    },
    server: {
      value: cdktf.listMapperHcl(securityPolicyRuleResourcesServersServerToHclTerraform, true)(struct!.server),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyRuleResourcesServersServerList",
    },
    server_account: {
      value: cdktf.listMapperHcl(securityPolicyRuleResourcesServersServerAccountToHclTerraform, true)(struct!.serverAccount),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyRuleResourcesServersServerAccountList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRuleResourcesServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyRuleResourcesServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelectors = this._labelSelectors?.internalValue;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    if (this._serverAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAccount = this._serverAccount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRuleResourcesServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labelSelectors.internalValue = undefined;
      this._server.internalValue = undefined;
      this._serverAccount.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labelSelectors.internalValue = value.labelSelectors;
      this._server.internalValue = value.server;
      this._serverAccount.internalValue = value.serverAccount;
    }
  }

  // label_selectors - computed: false, optional: true, required: false
  private _labelSelectors = new SecurityPolicyRuleResourcesServersLabelSelectorsOutputReference(this, "label_selectors");
  public get labelSelectors() {
    return this._labelSelectors;
  }
  public putLabelSelectors(value: SecurityPolicyRuleResourcesServersLabelSelectors) {
    this._labelSelectors.internalValue = value;
  }
  public resetLabelSelectors() {
    this._labelSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorsInput() {
    return this._labelSelectors.internalValue;
  }

  // server - computed: false, optional: true, required: false
  private _server = new SecurityPolicyRuleResourcesServersServerList(this, "server", false);
  public get server() {
    return this._server;
  }
  public putServer(value: SecurityPolicyRuleResourcesServersServer[] | cdktf.IResolvable) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }

  // server_account - computed: false, optional: true, required: false
  private _serverAccount = new SecurityPolicyRuleResourcesServersServerAccountList(this, "server_account", false);
  public get serverAccount() {
    return this._serverAccount;
  }
  public putServerAccount(value: SecurityPolicyRuleResourcesServersServerAccount[] | cdktf.IResolvable) {
    this._serverAccount.internalValue = value;
  }
  public resetServerAccount() {
    this._serverAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAccountInput() {
    return this._serverAccount.internalValue;
  }
}
export interface SecurityPolicyRuleResources {
  /**
  * secrets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#secrets SecurityPolicy#secrets}
  */
  readonly secrets?: SecurityPolicyRuleResourcesSecrets;
  /**
  * servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#servers SecurityPolicy#servers}
  */
  readonly servers?: SecurityPolicyRuleResourcesServers;
}

export function securityPolicyRuleResourcesToTerraform(struct?: SecurityPolicyRuleResourcesOutputReference | SecurityPolicyRuleResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secrets: securityPolicyRuleResourcesSecretsToTerraform(struct!.secrets),
    servers: securityPolicyRuleResourcesServersToTerraform(struct!.servers),
  }
}


export function securityPolicyRuleResourcesToHclTerraform(struct?: SecurityPolicyRuleResourcesOutputReference | SecurityPolicyRuleResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secrets: {
      value: securityPolicyRuleResourcesSecretsToHclTerraform(struct!.secrets),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyRuleResourcesSecretsList",
    },
    servers: {
      value: securityPolicyRuleResourcesServersToHclTerraform(struct!.servers),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyRuleResourcesServersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRuleResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyRuleResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    if (this._servers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRuleResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secrets.internalValue = undefined;
      this._servers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secrets.internalValue = value.secrets;
      this._servers.internalValue = value.servers;
    }
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets = new SecurityPolicyRuleResourcesSecretsOutputReference(this, "secrets");
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: SecurityPolicyRuleResourcesSecrets) {
    this._secrets.internalValue = value;
  }
  public resetSecrets() {
    this._secrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }

  // servers - computed: false, optional: true, required: false
  private _servers = new SecurityPolicyRuleResourcesServersOutputReference(this, "servers");
  public get servers() {
    return this._servers;
  }
  public putServers(value: SecurityPolicyRuleResourcesServers) {
    this._servers.internalValue = value;
  }
  public resetServers() {
    this._servers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers.internalValue;
  }
}
export interface SecurityPolicyRule {
  /**
  * The human-readable name of the resource. Values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#name SecurityPolicy#name}
  */
  readonly name: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#conditions SecurityPolicy#conditions}
  */
  readonly conditions?: SecurityPolicyRuleConditions;
  /**
  * privileges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#privileges SecurityPolicy#privileges}
  */
  readonly privileges: SecurityPolicyRulePrivileges;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#resources SecurityPolicy#resources}
  */
  readonly resources: SecurityPolicyRuleResources;
}

export function securityPolicyRuleToTerraform(struct?: SecurityPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    conditions: securityPolicyRuleConditionsToTerraform(struct!.conditions),
    privileges: securityPolicyRulePrivilegesToTerraform(struct!.privileges),
    resources: securityPolicyRuleResourcesToTerraform(struct!.resources),
  }
}


export function securityPolicyRuleToHclTerraform(struct?: SecurityPolicyRule | cdktf.IResolvable): any {
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
    conditions: {
      value: securityPolicyRuleConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyRuleConditionsList",
    },
    privileges: {
      value: securityPolicyRulePrivilegesToHclTerraform(struct!.privileges),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyRulePrivilegesList",
    },
    resources: {
      value: securityPolicyRuleResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyRuleResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicyRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._privileges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileges = this._privileges?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._conditions.internalValue = undefined;
      this._privileges.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._conditions.internalValue = value.conditions;
      this._privileges.internalValue = value.privileges;
      this._resources.internalValue = value.resources;
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

  // conditions - computed: false, optional: true, required: false
  private _conditions = new SecurityPolicyRuleConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: SecurityPolicyRuleConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // privileges - computed: false, optional: false, required: true
  private _privileges = new SecurityPolicyRulePrivilegesOutputReference(this, "privileges");
  public get privileges() {
    return this._privileges;
  }
  public putPrivileges(value: SecurityPolicyRulePrivileges) {
    this._privileges.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges.internalValue;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new SecurityPolicyRuleResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: SecurityPolicyRuleResources) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class SecurityPolicyRuleList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicyRule[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicyRuleOutputReference {
    return new SecurityPolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy oktapam_security_policy}
*/
export class SecurityPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktapam_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityPolicy to import
  * @param importFromId The id of the existing SecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktapam_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/security_policy oktapam_security_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oktapam_security_policy',
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
    this._resourceGroup = config.resourceGroup;
    this._principals.internalValue = config.principals;
    this._rule.internalValue = config.rule;
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

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // principals - computed: false, optional: false, required: true
  private _principals = new SecurityPolicyPrincipalsOutputReference(this, "principals");
  public get principals() {
    return this._principals;
  }
  public putPrincipals(value: SecurityPolicyPrincipals) {
    this._principals.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals.internalValue;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new SecurityPolicyRuleList(this, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: SecurityPolicyRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      principals: securityPolicyPrincipalsToTerraform(this._principals.internalValue),
      rule: cdktf.listMapper(securityPolicyRuleToTerraform, true)(this._rule.internalValue),
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
      resource_group: {
        value: cdktf.stringToHclTerraform(this._resourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principals: {
        value: securityPolicyPrincipalsToHclTerraform(this._principals.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityPolicyPrincipalsList",
      },
      rule: {
        value: cdktf.listMapperHcl(securityPolicyRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecurityPolicyRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
