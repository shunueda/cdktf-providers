// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigatewayDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#compartment_id ApigatewayDeployment#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#defined_tags ApigatewayDeployment#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#display_name ApigatewayDeployment#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#freeform_tags ApigatewayDeployment#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#gateway_id ApigatewayDeployment#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#id ApigatewayDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#is_lock_override ApigatewayDeployment#is_lock_override}
  */
  readonly isLockOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#path_prefix ApigatewayDeployment#path_prefix}
  */
  readonly pathPrefix: string;
  /**
  * locks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#locks ApigatewayDeployment#locks}
  */
  readonly locks?: ApigatewayDeploymentLocks[] | cdktf.IResolvable;
  /**
  * specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#specification ApigatewayDeployment#specification}
  */
  readonly specification: ApigatewayDeploymentSpecification;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#timeouts ApigatewayDeployment#timeouts}
  */
  readonly timeouts?: ApigatewayDeploymentTimeouts;
}
export interface ApigatewayDeploymentLocks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#message ApigatewayDeployment#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
}

export function apigatewayDeploymentLocksToTerraform(struct?: ApigatewayDeploymentLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message: cdktf.stringToTerraform(struct!.message),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function apigatewayDeploymentLocksToHclTerraform(struct?: ApigatewayDeploymentLocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentLocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentLocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentLocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._message = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._message = value.message;
      this._type = value.type;
    }
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // related_resource_id - computed: true, optional: false, required: false
  public get relatedResourceId() {
    return this.getStringAttribute('related_resource_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ApigatewayDeploymentLocksList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentLocks[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentLocksOutputReference {
    return new ApigatewayDeploymentLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationLoggingPoliciesAccessLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#is_enabled ApigatewayDeployment#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationLoggingPoliciesAccessLogToTerraform(struct?: ApigatewayDeploymentSpecificationLoggingPoliciesAccessLogOutputReference | ApigatewayDeploymentSpecificationLoggingPoliciesAccessLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}


export function apigatewayDeploymentSpecificationLoggingPoliciesAccessLogToHclTerraform(struct?: ApigatewayDeploymentSpecificationLoggingPoliciesAccessLogOutputReference | ApigatewayDeploymentSpecificationLoggingPoliciesAccessLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationLoggingPoliciesAccessLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationLoggingPoliciesAccessLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationLoggingPoliciesAccessLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface ApigatewayDeploymentSpecificationLoggingPoliciesExecutionLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#is_enabled ApigatewayDeployment#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#log_level ApigatewayDeployment#log_level}
  */
  readonly logLevel?: string;
}

export function apigatewayDeploymentSpecificationLoggingPoliciesExecutionLogToTerraform(struct?: ApigatewayDeploymentSpecificationLoggingPoliciesExecutionLogOutputReference | ApigatewayDeploymentSpecificationLoggingPoliciesExecutionLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}


export function apigatewayDeploymentSpecificationLoggingPoliciesExecutionLogToHclTerraform(struct?: ApigatewayDeploymentSpecificationLoggingPoliciesExecutionLogOutputReference | ApigatewayDeploymentSpecificationLoggingPoliciesExecutionLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationLoggingPoliciesExecutionLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationLoggingPoliciesExecutionLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationLoggingPoliciesExecutionLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._logLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._logLevel = value.logLevel;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }
}
export interface ApigatewayDeploymentSpecificationLoggingPolicies {
  /**
  * access_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#access_log ApigatewayDeployment#access_log}
  */
  readonly accessLog?: ApigatewayDeploymentSpecificationLoggingPoliciesAccessLog;
  /**
  * execution_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#execution_log ApigatewayDeployment#execution_log}
  */
  readonly executionLog?: ApigatewayDeploymentSpecificationLoggingPoliciesExecutionLog;
}

export function apigatewayDeploymentSpecificationLoggingPoliciesToTerraform(struct?: ApigatewayDeploymentSpecificationLoggingPoliciesOutputReference | ApigatewayDeploymentSpecificationLoggingPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_log: apigatewayDeploymentSpecificationLoggingPoliciesAccessLogToTerraform(struct!.accessLog),
    execution_log: apigatewayDeploymentSpecificationLoggingPoliciesExecutionLogToTerraform(struct!.executionLog),
  }
}


export function apigatewayDeploymentSpecificationLoggingPoliciesToHclTerraform(struct?: ApigatewayDeploymentSpecificationLoggingPoliciesOutputReference | ApigatewayDeploymentSpecificationLoggingPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_log: {
      value: apigatewayDeploymentSpecificationLoggingPoliciesAccessLogToHclTerraform(struct!.accessLog),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationLoggingPoliciesAccessLogList",
    },
    execution_log: {
      value: apigatewayDeploymentSpecificationLoggingPoliciesExecutionLogToHclTerraform(struct!.executionLog),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationLoggingPoliciesExecutionLogList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationLoggingPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationLoggingPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLog = this._accessLog?.internalValue;
    }
    if (this._executionLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionLog = this._executionLog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationLoggingPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessLog.internalValue = undefined;
      this._executionLog.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessLog.internalValue = value.accessLog;
      this._executionLog.internalValue = value.executionLog;
    }
  }

  // access_log - computed: false, optional: true, required: false
  private _accessLog = new ApigatewayDeploymentSpecificationLoggingPoliciesAccessLogOutputReference(this, "access_log");
  public get accessLog() {
    return this._accessLog;
  }
  public putAccessLog(value: ApigatewayDeploymentSpecificationLoggingPoliciesAccessLog) {
    this._accessLog.internalValue = value;
  }
  public resetAccessLog() {
    this._accessLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogInput() {
    return this._accessLog.internalValue;
  }

  // execution_log - computed: false, optional: true, required: false
  private _executionLog = new ApigatewayDeploymentSpecificationLoggingPoliciesExecutionLogOutputReference(this, "execution_log");
  public get executionLog() {
    return this._executionLog;
  }
  public putExecutionLog(value: ApigatewayDeploymentSpecificationLoggingPoliciesExecutionLog) {
    this._executionLog.internalValue = value;
  }
  public resetExecutionLog() {
    this._executionLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionLogInput() {
    return this._executionLog.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#alg ApigatewayDeployment#alg}
  */
  readonly alg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#e ApigatewayDeployment#e}
  */
  readonly e?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#format ApigatewayDeployment#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#key ApigatewayDeployment#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#key_ops ApigatewayDeployment#key_ops}
  */
  readonly keyOps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#kid ApigatewayDeployment#kid}
  */
  readonly kid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#kty ApigatewayDeployment#kty}
  */
  readonly kty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#n ApigatewayDeployment#n}
  */
  readonly n?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#use ApigatewayDeployment#use}
  */
  readonly use?: string;
}

export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeysToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alg: cdktf.stringToTerraform(struct!.alg),
    e: cdktf.stringToTerraform(struct!.e),
    format: cdktf.stringToTerraform(struct!.format),
    key: cdktf.stringToTerraform(struct!.key),
    key_ops: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyOps),
    kid: cdktf.stringToTerraform(struct!.kid),
    kty: cdktf.stringToTerraform(struct!.kty),
    n: cdktf.stringToTerraform(struct!.n),
    use: cdktf.stringToTerraform(struct!.use),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeysToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alg: {
      value: cdktf.stringToHclTerraform(struct!.alg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e: {
      value: cdktf.stringToHclTerraform(struct!.e),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_ops: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyOps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kid: {
      value: cdktf.stringToHclTerraform(struct!.kid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kty: {
      value: cdktf.stringToHclTerraform(struct!.kty),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    n: {
      value: cdktf.stringToHclTerraform(struct!.n),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use: {
      value: cdktf.stringToHclTerraform(struct!.use),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alg !== undefined) {
      hasAnyValues = true;
      internalValueResult.alg = this._alg;
    }
    if (this._e !== undefined) {
      hasAnyValues = true;
      internalValueResult.e = this._e;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._keyOps !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOps = this._keyOps;
    }
    if (this._kid !== undefined) {
      hasAnyValues = true;
      internalValueResult.kid = this._kid;
    }
    if (this._kty !== undefined) {
      hasAnyValues = true;
      internalValueResult.kty = this._kty;
    }
    if (this._n !== undefined) {
      hasAnyValues = true;
      internalValueResult.n = this._n;
    }
    if (this._use !== undefined) {
      hasAnyValues = true;
      internalValueResult.use = this._use;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alg = undefined;
      this._e = undefined;
      this._format = undefined;
      this._key = undefined;
      this._keyOps = undefined;
      this._kid = undefined;
      this._kty = undefined;
      this._n = undefined;
      this._use = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alg = value.alg;
      this._e = value.e;
      this._format = value.format;
      this._key = value.key;
      this._keyOps = value.keyOps;
      this._kid = value.kid;
      this._kty = value.kty;
      this._n = value.n;
      this._use = value.use;
    }
  }

  // alg - computed: true, optional: true, required: false
  private _alg?: string; 
  public get alg() {
    return this.getStringAttribute('alg');
  }
  public set alg(value: string) {
    this._alg = value;
  }
  public resetAlg() {
    this._alg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algInput() {
    return this._alg;
  }

  // e - computed: true, optional: true, required: false
  private _e?: string; 
  public get e() {
    return this.getStringAttribute('e');
  }
  public set e(value: string) {
    this._e = value;
  }
  public resetE() {
    this._e = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eInput() {
    return this._e;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_ops - computed: true, optional: true, required: false
  private _keyOps?: string[]; 
  public get keyOps() {
    return this.getListAttribute('key_ops');
  }
  public set keyOps(value: string[]) {
    this._keyOps = value;
  }
  public resetKeyOps() {
    this._keyOps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOpsInput() {
    return this._keyOps;
  }

  // kid - computed: true, optional: true, required: false
  private _kid?: string; 
  public get kid() {
    return this.getStringAttribute('kid');
  }
  public set kid(value: string) {
    this._kid = value;
  }
  public resetKid() {
    this._kid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kidInput() {
    return this._kid;
  }

  // kty - computed: true, optional: true, required: false
  private _kty?: string; 
  public get kty() {
    return this.getStringAttribute('kty');
  }
  public set kty(value: string) {
    this._kty = value;
  }
  public resetKty() {
    this._kty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ktyInput() {
    return this._kty;
  }

  // n - computed: true, optional: true, required: false
  private _n?: string; 
  public get n() {
    return this.getStringAttribute('n');
  }
  public set n(value: string) {
    this._n = value;
  }
  public resetN() {
    this._n = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nInput() {
    return this._n;
  }

  // use - computed: true, optional: true, required: false
  private _use?: string; 
  public get use() {
    return this.getStringAttribute('use');
  }
  public set use(value: string) {
    this._use = value;
  }
  public resetUse() {
    this._use = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInput() {
    return this._use;
  }
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeysList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeys[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeysOutputReference {
    return new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#is_ssl_verify_disabled ApigatewayDeployment#is_ssl_verify_disabled}
  */
  readonly isSslVerifyDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#max_cache_duration_in_hours ApigatewayDeployment#max_cache_duration_in_hours}
  */
  readonly maxCacheDurationInHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#uri ApigatewayDeployment#uri}
  */
  readonly uri?: string;
  /**
  * keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#keys ApigatewayDeployment#keys}
  */
  readonly keys?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeys[] | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_ssl_verify_disabled: cdktf.booleanToTerraform(struct!.isSslVerifyDisabled),
    max_cache_duration_in_hours: cdktf.numberToTerraform(struct!.maxCacheDurationInHours),
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
    keys: cdktf.listMapper(apigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeysToTerraform, true)(struct!.keys),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_ssl_verify_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isSslVerifyDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_cache_duration_in_hours: {
      value: cdktf.numberToHclTerraform(struct!.maxCacheDurationInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keys: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeysToHclTerraform, true)(struct!.keys),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isSslVerifyDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSslVerifyDisabled = this._isSslVerifyDisabled;
    }
    if (this._maxCacheDurationInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCacheDurationInHours = this._maxCacheDurationInHours;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._keys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isSslVerifyDisabled = undefined;
      this._maxCacheDurationInHours = undefined;
      this._type = undefined;
      this._uri = undefined;
      this._keys.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isSslVerifyDisabled = value.isSslVerifyDisabled;
      this._maxCacheDurationInHours = value.maxCacheDurationInHours;
      this._type = value.type;
      this._uri = value.uri;
      this._keys.internalValue = value.keys;
    }
  }

  // is_ssl_verify_disabled - computed: true, optional: true, required: false
  private _isSslVerifyDisabled?: boolean | cdktf.IResolvable; 
  public get isSslVerifyDisabled() {
    return this.getBooleanAttribute('is_ssl_verify_disabled');
  }
  public set isSslVerifyDisabled(value: boolean | cdktf.IResolvable) {
    this._isSslVerifyDisabled = value;
  }
  public resetIsSslVerifyDisabled() {
    this._isSslVerifyDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSslVerifyDisabledInput() {
    return this._isSslVerifyDisabled;
  }

  // max_cache_duration_in_hours - computed: true, optional: true, required: false
  private _maxCacheDurationInHours?: number; 
  public get maxCacheDurationInHours() {
    return this.getNumberAttribute('max_cache_duration_in_hours');
  }
  public set maxCacheDurationInHours(value: number) {
    this._maxCacheDurationInHours = value;
  }
  public resetMaxCacheDurationInHours() {
    this._maxCacheDurationInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCacheDurationInHoursInput() {
    return this._maxCacheDurationInHours;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uri - computed: true, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // keys - computed: false, optional: true, required: false
  private _keys = new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeysList(this, "keys", false);
  public get keys() {
    return this._keys;
  }
  public putKeys(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeys[] | cdktf.IResolvable) {
    this._keys.internalValue = value;
  }
  public resetKeys() {
    this._keys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#client_id ApigatewayDeployment#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#client_secret_id ApigatewayDeployment#client_secret_id}
  */
  readonly clientSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#client_secret_version_number ApigatewayDeployment#client_secret_version_number}
  */
  readonly clientSecretVersionNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
}

export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetailsToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetailsOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret_id: cdktf.stringToTerraform(struct!.clientSecretId),
    client_secret_version_number: cdktf.stringToTerraform(struct!.clientSecretVersionNumber),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetailsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetailsOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_version_number: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretId = this._clientSecretId;
    }
    if (this._clientSecretVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretVersionNumber = this._clientSecretVersionNumber;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecretId = undefined;
      this._clientSecretVersionNumber = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecretId = value.clientSecretId;
      this._clientSecretVersionNumber = value.clientSecretVersionNumber;
      this._type = value.type;
    }
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret_id - computed: true, optional: true, required: false
  private _clientSecretId?: string; 
  public get clientSecretId() {
    return this.getStringAttribute('client_secret_id');
  }
  public set clientSecretId(value: string) {
    this._clientSecretId = value;
  }
  public resetClientSecretId() {
    this._clientSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretIdInput() {
    return this._clientSecretId;
  }

  // client_secret_version_number - computed: true, optional: true, required: false
  private _clientSecretVersionNumber?: string; 
  public get clientSecretVersionNumber() {
    return this.getStringAttribute('client_secret_version_number');
  }
  public set clientSecretVersionNumber(value: string) {
    this._clientSecretVersionNumber = value;
  }
  public resetClientSecretVersionNumber() {
    this._clientSecretVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretVersionNumberInput() {
    return this._clientSecretVersionNumber;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#name ApigatewayDeployment#name}
  */
  readonly name?: string;
}

export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItems | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: true, required: false
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
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItems[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsOutputReference {
    return new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type?: string;
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#items ApigatewayDeployment#items}
  */
  readonly items?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItems[] | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    items: cdktf.listMapper(apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsToTerraform, true)(struct!.items),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    items: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._items.internalValue = value.items;
    }
  }

  // type - computed: true, optional: true, required: false
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

  // items - computed: false, optional: true, required: false
  private _items = new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#from ApigatewayDeployment#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#to ApigatewayDeployment#to}
  */
  readonly to?: string;
}

export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: true, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: true, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItems[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsOutputReference {
    return new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeaders {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#items ApigatewayDeployment#items}
  */
  readonly items?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItems[] | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsToTerraform, true)(struct!.items),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#if_exists ApigatewayDeployment#if_exists}
  */
  readonly ifExists?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#name ApigatewayDeployment#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#values ApigatewayDeployment#values}
  */
  readonly values?: string[];
}

export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    if_exists: cdktf.stringToTerraform(struct!.ifExists),
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    if_exists: {
      value: cdktf.stringToHclTerraform(struct!.ifExists),
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ifExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifExists = this._ifExists;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ifExists = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ifExists = value.ifExists;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // if_exists - computed: true, optional: true, required: false
  private _ifExists?: string; 
  public get ifExists() {
    return this.getStringAttribute('if_exists');
  }
  public set ifExists(value: string) {
    this._ifExists = value;
  }
  public resetIfExists() {
    this._ifExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifExistsInput() {
    return this._ifExists;
  }

  // name - computed: true, optional: true, required: false
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

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItems[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsOutputReference {
    return new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeaders {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#items ApigatewayDeployment#items}
  */
  readonly items?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItems[] | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsToTerraform, true)(struct!.items),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformations {
  /**
  * filter_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#filter_headers ApigatewayDeployment#filter_headers}
  */
  readonly filterHeaders?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeaders;
  /**
  * rename_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#rename_headers ApigatewayDeployment#rename_headers}
  */
  readonly renameHeaders?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeaders;
  /**
  * set_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#set_headers ApigatewayDeployment#set_headers}
  */
  readonly setHeaders?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeaders;
}

export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_headers: apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersToTerraform(struct!.filterHeaders),
    rename_headers: apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersToTerraform(struct!.renameHeaders),
    set_headers: apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersToTerraform(struct!.setHeaders),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_headers: {
      value: apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersToHclTerraform(struct!.filterHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersList",
    },
    rename_headers: {
      value: apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersToHclTerraform(struct!.renameHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersList",
    },
    set_headers: {
      value: apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersToHclTerraform(struct!.setHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterHeaders = this._filterHeaders?.internalValue;
    }
    if (this._renameHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.renameHeaders = this._renameHeaders?.internalValue;
    }
    if (this._setHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setHeaders = this._setHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterHeaders.internalValue = undefined;
      this._renameHeaders.internalValue = undefined;
      this._setHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterHeaders.internalValue = value.filterHeaders;
      this._renameHeaders.internalValue = value.renameHeaders;
      this._setHeaders.internalValue = value.setHeaders;
    }
  }

  // filter_headers - computed: false, optional: true, required: false
  private _filterHeaders = new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersOutputReference(this, "filter_headers");
  public get filterHeaders() {
    return this._filterHeaders;
  }
  public putFilterHeaders(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeaders) {
    this._filterHeaders.internalValue = value;
  }
  public resetFilterHeaders() {
    this._filterHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterHeadersInput() {
    return this._filterHeaders.internalValue;
  }

  // rename_headers - computed: false, optional: true, required: false
  private _renameHeaders = new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersOutputReference(this, "rename_headers");
  public get renameHeaders() {
    return this._renameHeaders;
  }
  public putRenameHeaders(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeaders) {
    this._renameHeaders.internalValue = value;
  }
  public resetRenameHeaders() {
    this._renameHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renameHeadersInput() {
    return this._renameHeaders.internalValue;
  }

  // set_headers - computed: false, optional: true, required: false
  private _setHeaders = new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersOutputReference(this, "set_headers");
  public get setHeaders() {
    return this._setHeaders;
  }
  public putSetHeaders(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeaders) {
    this._setHeaders.internalValue = value;
  }
  public resetSetHeaders() {
    this._setHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setHeadersInput() {
    return this._setHeaders.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#uri ApigatewayDeployment#uri}
  */
  readonly uri?: string;
}

export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetailsToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetailsOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetailsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetailsOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._uri = value.uri;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uri - computed: true, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#fallback_redirect_path ApigatewayDeployment#fallback_redirect_path}
  */
  readonly fallbackRedirectPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#logout_path ApigatewayDeployment#logout_path}
  */
  readonly logoutPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#max_expiry_duration_in_hours ApigatewayDeployment#max_expiry_duration_in_hours}
  */
  readonly maxExpiryDurationInHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#response_code ApigatewayDeployment#response_code}
  */
  readonly responseCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#response_message ApigatewayDeployment#response_message}
  */
  readonly responseMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#response_type ApigatewayDeployment#response_type}
  */
  readonly responseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#scopes ApigatewayDeployment#scopes}
  */
  readonly scopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#use_cookies_for_intermediate_steps ApigatewayDeployment#use_cookies_for_intermediate_steps}
  */
  readonly useCookiesForIntermediateSteps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#use_cookies_for_session ApigatewayDeployment#use_cookies_for_session}
  */
  readonly useCookiesForSession?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#use_pkce ApigatewayDeployment#use_pkce}
  */
  readonly usePkce?: boolean | cdktf.IResolvable;
  /**
  * client_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#client_details ApigatewayDeployment#client_details}
  */
  readonly clientDetails?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetails;
  /**
  * response_header_transformations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#response_header_transformations ApigatewayDeployment#response_header_transformations}
  */
  readonly responseHeaderTransformations?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformations;
  /**
  * source_uri_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#source_uri_details ApigatewayDeployment#source_uri_details}
  */
  readonly sourceUriDetails?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetails;
}

export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_redirect_path: cdktf.stringToTerraform(struct!.fallbackRedirectPath),
    logout_path: cdktf.stringToTerraform(struct!.logoutPath),
    max_expiry_duration_in_hours: cdktf.numberToTerraform(struct!.maxExpiryDurationInHours),
    response_code: cdktf.stringToTerraform(struct!.responseCode),
    response_message: cdktf.stringToTerraform(struct!.responseMessage),
    response_type: cdktf.stringToTerraform(struct!.responseType),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    type: cdktf.stringToTerraform(struct!.type),
    use_cookies_for_intermediate_steps: cdktf.booleanToTerraform(struct!.useCookiesForIntermediateSteps),
    use_cookies_for_session: cdktf.booleanToTerraform(struct!.useCookiesForSession),
    use_pkce: cdktf.booleanToTerraform(struct!.usePkce),
    client_details: apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetailsToTerraform(struct!.clientDetails),
    response_header_transformations: apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsToTerraform(struct!.responseHeaderTransformations),
    source_uri_details: apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetailsToTerraform(struct!.sourceUriDetails),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback_redirect_path: {
      value: cdktf.stringToHclTerraform(struct!.fallbackRedirectPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logout_path: {
      value: cdktf.stringToHclTerraform(struct!.logoutPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_expiry_duration_in_hours: {
      value: cdktf.numberToHclTerraform(struct!.maxExpiryDurationInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_code: {
      value: cdktf.stringToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_message: {
      value: cdktf.stringToHclTerraform(struct!.responseMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_type: {
      value: cdktf.stringToHclTerraform(struct!.responseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_cookies_for_intermediate_steps: {
      value: cdktf.booleanToHclTerraform(struct!.useCookiesForIntermediateSteps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_cookies_for_session: {
      value: cdktf.booleanToHclTerraform(struct!.useCookiesForSession),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_pkce: {
      value: cdktf.booleanToHclTerraform(struct!.usePkce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_details: {
      value: apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetailsToHclTerraform(struct!.clientDetails),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetailsList",
    },
    response_header_transformations: {
      value: apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsToHclTerraform(struct!.responseHeaderTransformations),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsList",
    },
    source_uri_details: {
      value: apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetailsToHclTerraform(struct!.sourceUriDetails),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackRedirectPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackRedirectPath = this._fallbackRedirectPath;
    }
    if (this._logoutPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutPath = this._logoutPath;
    }
    if (this._maxExpiryDurationInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxExpiryDurationInHours = this._maxExpiryDurationInHours;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    if (this._responseMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseMessage = this._responseMessage;
    }
    if (this._responseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseType = this._responseType;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useCookiesForIntermediateSteps !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCookiesForIntermediateSteps = this._useCookiesForIntermediateSteps;
    }
    if (this._useCookiesForSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCookiesForSession = this._useCookiesForSession;
    }
    if (this._usePkce !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePkce = this._usePkce;
    }
    if (this._clientDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientDetails = this._clientDetails?.internalValue;
    }
    if (this._responseHeaderTransformations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaderTransformations = this._responseHeaderTransformations?.internalValue;
    }
    if (this._sourceUriDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUriDetails = this._sourceUriDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fallbackRedirectPath = undefined;
      this._logoutPath = undefined;
      this._maxExpiryDurationInHours = undefined;
      this._responseCode = undefined;
      this._responseMessage = undefined;
      this._responseType = undefined;
      this._scopes = undefined;
      this._type = undefined;
      this._useCookiesForIntermediateSteps = undefined;
      this._useCookiesForSession = undefined;
      this._usePkce = undefined;
      this._clientDetails.internalValue = undefined;
      this._responseHeaderTransformations.internalValue = undefined;
      this._sourceUriDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fallbackRedirectPath = value.fallbackRedirectPath;
      this._logoutPath = value.logoutPath;
      this._maxExpiryDurationInHours = value.maxExpiryDurationInHours;
      this._responseCode = value.responseCode;
      this._responseMessage = value.responseMessage;
      this._responseType = value.responseType;
      this._scopes = value.scopes;
      this._type = value.type;
      this._useCookiesForIntermediateSteps = value.useCookiesForIntermediateSteps;
      this._useCookiesForSession = value.useCookiesForSession;
      this._usePkce = value.usePkce;
      this._clientDetails.internalValue = value.clientDetails;
      this._responseHeaderTransformations.internalValue = value.responseHeaderTransformations;
      this._sourceUriDetails.internalValue = value.sourceUriDetails;
    }
  }

  // fallback_redirect_path - computed: true, optional: true, required: false
  private _fallbackRedirectPath?: string; 
  public get fallbackRedirectPath() {
    return this.getStringAttribute('fallback_redirect_path');
  }
  public set fallbackRedirectPath(value: string) {
    this._fallbackRedirectPath = value;
  }
  public resetFallbackRedirectPath() {
    this._fallbackRedirectPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackRedirectPathInput() {
    return this._fallbackRedirectPath;
  }

  // logout_path - computed: true, optional: true, required: false
  private _logoutPath?: string; 
  public get logoutPath() {
    return this.getStringAttribute('logout_path');
  }
  public set logoutPath(value: string) {
    this._logoutPath = value;
  }
  public resetLogoutPath() {
    this._logoutPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutPathInput() {
    return this._logoutPath;
  }

  // max_expiry_duration_in_hours - computed: true, optional: true, required: false
  private _maxExpiryDurationInHours?: number; 
  public get maxExpiryDurationInHours() {
    return this.getNumberAttribute('max_expiry_duration_in_hours');
  }
  public set maxExpiryDurationInHours(value: number) {
    this._maxExpiryDurationInHours = value;
  }
  public resetMaxExpiryDurationInHours() {
    this._maxExpiryDurationInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExpiryDurationInHoursInput() {
    return this._maxExpiryDurationInHours;
  }

  // response_code - computed: true, optional: true, required: false
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

  // response_message - computed: true, optional: true, required: false
  private _responseMessage?: string; 
  public get responseMessage() {
    return this.getStringAttribute('response_message');
  }
  public set responseMessage(value: string) {
    this._responseMessage = value;
  }
  public resetResponseMessage() {
    this._responseMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseMessageInput() {
    return this._responseMessage;
  }

  // response_type - computed: true, optional: true, required: false
  private _responseType?: string; 
  public get responseType() {
    return this.getStringAttribute('response_type');
  }
  public set responseType(value: string) {
    this._responseType = value;
  }
  public resetResponseType() {
    this._responseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypeInput() {
    return this._responseType;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // use_cookies_for_intermediate_steps - computed: true, optional: true, required: false
  private _useCookiesForIntermediateSteps?: boolean | cdktf.IResolvable; 
  public get useCookiesForIntermediateSteps() {
    return this.getBooleanAttribute('use_cookies_for_intermediate_steps');
  }
  public set useCookiesForIntermediateSteps(value: boolean | cdktf.IResolvable) {
    this._useCookiesForIntermediateSteps = value;
  }
  public resetUseCookiesForIntermediateSteps() {
    this._useCookiesForIntermediateSteps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCookiesForIntermediateStepsInput() {
    return this._useCookiesForIntermediateSteps;
  }

  // use_cookies_for_session - computed: true, optional: true, required: false
  private _useCookiesForSession?: boolean | cdktf.IResolvable; 
  public get useCookiesForSession() {
    return this.getBooleanAttribute('use_cookies_for_session');
  }
  public set useCookiesForSession(value: boolean | cdktf.IResolvable) {
    this._useCookiesForSession = value;
  }
  public resetUseCookiesForSession() {
    this._useCookiesForSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCookiesForSessionInput() {
    return this._useCookiesForSession;
  }

  // use_pkce - computed: true, optional: true, required: false
  private _usePkce?: boolean | cdktf.IResolvable; 
  public get usePkce() {
    return this.getBooleanAttribute('use_pkce');
  }
  public set usePkce(value: boolean | cdktf.IResolvable) {
    this._usePkce = value;
  }
  public resetUsePkce() {
    this._usePkce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePkceInput() {
    return this._usePkce;
  }

  // client_details - computed: false, optional: true, required: false
  private _clientDetails = new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetailsOutputReference(this, "client_details");
  public get clientDetails() {
    return this._clientDetails;
  }
  public putClientDetails(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetails) {
    this._clientDetails.internalValue = value;
  }
  public resetClientDetails() {
    this._clientDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDetailsInput() {
    return this._clientDetails.internalValue;
  }

  // response_header_transformations - computed: false, optional: true, required: false
  private _responseHeaderTransformations = new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsOutputReference(this, "response_header_transformations");
  public get responseHeaderTransformations() {
    return this._responseHeaderTransformations;
  }
  public putResponseHeaderTransformations(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformations) {
    this._responseHeaderTransformations.internalValue = value;
  }
  public resetResponseHeaderTransformations() {
    this._responseHeaderTransformations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderTransformationsInput() {
    return this._responseHeaderTransformations.internalValue;
  }

  // source_uri_details - computed: false, optional: true, required: false
  private _sourceUriDetails = new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetailsOutputReference(this, "source_uri_details");
  public get sourceUriDetails() {
    return this._sourceUriDetails;
  }
  public putSourceUriDetails(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetails) {
    this._sourceUriDetails.internalValue = value;
  }
  public resetSourceUriDetails() {
    this._sourceUriDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUriDetailsInput() {
    return this._sourceUriDetails.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#is_required ApigatewayDeployment#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#key ApigatewayDeployment#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#values ApigatewayDeployment#values}
  */
  readonly values?: string[];
}

export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaimsToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_required: cdktf.booleanToTerraform(struct!.isRequired),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaimsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_required: {
      value: cdktf.booleanToHclTerraform(struct!.isRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRequired = this._isRequired;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isRequired = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isRequired = value.isRequired;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // is_required - computed: true, optional: true, required: false
  private _isRequired?: boolean | cdktf.IResolvable; 
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }
  public set isRequired(value: boolean | cdktf.IResolvable) {
    this._isRequired = value;
  }
  public resetIsRequired() {
    this._isRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRequiredInput() {
    return this._isRequired;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaimsList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaims[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaimsOutputReference {
    return new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#audiences ApigatewayDeployment#audiences}
  */
  readonly audiences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#issuers ApigatewayDeployment#issuers}
  */
  readonly issuers?: string[];
  /**
  * verify_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#verify_claims ApigatewayDeployment#verify_claims}
  */
  readonly verifyClaims?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaims[] | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
    issuers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.issuers),
    verify_claims: cdktf.listMapper(apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaimsToTerraform, true)(struct!.verifyClaims),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    issuers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.issuers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verify_claims: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaimsToHclTerraform, true)(struct!.verifyClaims),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaimsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
    }
    if (this._issuers !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuers = this._issuers;
    }
    if (this._verifyClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyClaims = this._verifyClaims?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audiences = undefined;
      this._issuers = undefined;
      this._verifyClaims.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audiences = value.audiences;
      this._issuers = value.issuers;
      this._verifyClaims.internalValue = value.verifyClaims;
    }
  }

  // audiences - computed: true, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
  }

  // issuers - computed: true, optional: true, required: false
  private _issuers?: string[]; 
  public get issuers() {
    return this.getListAttribute('issuers');
  }
  public set issuers(value: string[]) {
    this._issuers = value;
  }
  public resetIssuers() {
    this._issuers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuersInput() {
    return this._issuers;
  }

  // verify_claims - computed: false, optional: true, required: false
  private _verifyClaims = new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaimsList(this, "verify_claims", false);
  public get verifyClaims() {
    return this._verifyClaims;
  }
  public putVerifyClaims(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaims[] | cdktf.IResolvable) {
    this._verifyClaims.internalValue = value;
  }
  public resetVerifyClaims() {
    this._verifyClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyClaimsInput() {
    return this._verifyClaims.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#client_id ApigatewayDeployment#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#client_secret_id ApigatewayDeployment#client_secret_id}
  */
  readonly clientSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#client_secret_version_number ApigatewayDeployment#client_secret_version_number}
  */
  readonly clientSecretVersionNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
}

export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetailsToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetailsOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret_id: cdktf.stringToTerraform(struct!.clientSecretId),
    client_secret_version_number: cdktf.stringToTerraform(struct!.clientSecretVersionNumber),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetailsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetailsOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_version_number: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretId = this._clientSecretId;
    }
    if (this._clientSecretVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretVersionNumber = this._clientSecretVersionNumber;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecretId = undefined;
      this._clientSecretVersionNumber = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecretId = value.clientSecretId;
      this._clientSecretVersionNumber = value.clientSecretVersionNumber;
      this._type = value.type;
    }
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret_id - computed: true, optional: true, required: false
  private _clientSecretId?: string; 
  public get clientSecretId() {
    return this.getStringAttribute('client_secret_id');
  }
  public set clientSecretId(value: string) {
    this._clientSecretId = value;
  }
  public resetClientSecretId() {
    this._clientSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretIdInput() {
    return this._clientSecretId;
  }

  // client_secret_version_number - computed: true, optional: true, required: false
  private _clientSecretVersionNumber?: string; 
  public get clientSecretVersionNumber() {
    return this.getStringAttribute('client_secret_version_number');
  }
  public set clientSecretVersionNumber(value: string) {
    this._clientSecretVersionNumber = value;
  }
  public resetClientSecretVersionNumber() {
    this._clientSecretVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretVersionNumberInput() {
    return this._clientSecretVersionNumber;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#alg ApigatewayDeployment#alg}
  */
  readonly alg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#e ApigatewayDeployment#e}
  */
  readonly e?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#format ApigatewayDeployment#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#key ApigatewayDeployment#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#key_ops ApigatewayDeployment#key_ops}
  */
  readonly keyOps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#kid ApigatewayDeployment#kid}
  */
  readonly kid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#kty ApigatewayDeployment#kty}
  */
  readonly kty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#n ApigatewayDeployment#n}
  */
  readonly n?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#use ApigatewayDeployment#use}
  */
  readonly use?: string;
}

export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeysToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alg: cdktf.stringToTerraform(struct!.alg),
    e: cdktf.stringToTerraform(struct!.e),
    format: cdktf.stringToTerraform(struct!.format),
    key: cdktf.stringToTerraform(struct!.key),
    key_ops: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyOps),
    kid: cdktf.stringToTerraform(struct!.kid),
    kty: cdktf.stringToTerraform(struct!.kty),
    n: cdktf.stringToTerraform(struct!.n),
    use: cdktf.stringToTerraform(struct!.use),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeysToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alg: {
      value: cdktf.stringToHclTerraform(struct!.alg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e: {
      value: cdktf.stringToHclTerraform(struct!.e),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_ops: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyOps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kid: {
      value: cdktf.stringToHclTerraform(struct!.kid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kty: {
      value: cdktf.stringToHclTerraform(struct!.kty),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    n: {
      value: cdktf.stringToHclTerraform(struct!.n),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use: {
      value: cdktf.stringToHclTerraform(struct!.use),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alg !== undefined) {
      hasAnyValues = true;
      internalValueResult.alg = this._alg;
    }
    if (this._e !== undefined) {
      hasAnyValues = true;
      internalValueResult.e = this._e;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._keyOps !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOps = this._keyOps;
    }
    if (this._kid !== undefined) {
      hasAnyValues = true;
      internalValueResult.kid = this._kid;
    }
    if (this._kty !== undefined) {
      hasAnyValues = true;
      internalValueResult.kty = this._kty;
    }
    if (this._n !== undefined) {
      hasAnyValues = true;
      internalValueResult.n = this._n;
    }
    if (this._use !== undefined) {
      hasAnyValues = true;
      internalValueResult.use = this._use;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alg = undefined;
      this._e = undefined;
      this._format = undefined;
      this._key = undefined;
      this._keyOps = undefined;
      this._kid = undefined;
      this._kty = undefined;
      this._n = undefined;
      this._use = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alg = value.alg;
      this._e = value.e;
      this._format = value.format;
      this._key = value.key;
      this._keyOps = value.keyOps;
      this._kid = value.kid;
      this._kty = value.kty;
      this._n = value.n;
      this._use = value.use;
    }
  }

  // alg - computed: true, optional: true, required: false
  private _alg?: string; 
  public get alg() {
    return this.getStringAttribute('alg');
  }
  public set alg(value: string) {
    this._alg = value;
  }
  public resetAlg() {
    this._alg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algInput() {
    return this._alg;
  }

  // e - computed: true, optional: true, required: false
  private _e?: string; 
  public get e() {
    return this.getStringAttribute('e');
  }
  public set e(value: string) {
    this._e = value;
  }
  public resetE() {
    this._e = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eInput() {
    return this._e;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_ops - computed: true, optional: true, required: false
  private _keyOps?: string[]; 
  public get keyOps() {
    return this.getListAttribute('key_ops');
  }
  public set keyOps(value: string[]) {
    this._keyOps = value;
  }
  public resetKeyOps() {
    this._keyOps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOpsInput() {
    return this._keyOps;
  }

  // kid - computed: true, optional: true, required: false
  private _kid?: string; 
  public get kid() {
    return this.getStringAttribute('kid');
  }
  public set kid(value: string) {
    this._kid = value;
  }
  public resetKid() {
    this._kid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kidInput() {
    return this._kid;
  }

  // kty - computed: true, optional: true, required: false
  private _kty?: string; 
  public get kty() {
    return this.getStringAttribute('kty');
  }
  public set kty(value: string) {
    this._kty = value;
  }
  public resetKty() {
    this._kty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ktyInput() {
    return this._kty;
  }

  // n - computed: true, optional: true, required: false
  private _n?: string; 
  public get n() {
    return this.getStringAttribute('n');
  }
  public set n(value: string) {
    this._n = value;
  }
  public resetN() {
    this._n = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nInput() {
    return this._n;
  }

  // use - computed: true, optional: true, required: false
  private _use?: string; 
  public get use() {
    return this.getStringAttribute('use');
  }
  public set use(value: string) {
    this._use = value;
  }
  public resetUse() {
    this._use = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInput() {
    return this._use;
  }
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeysList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeys[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeysOutputReference {
    return new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#uri ApigatewayDeployment#uri}
  */
  readonly uri?: string;
}

export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetailsToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetailsOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetailsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetailsOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._uri = value.uri;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uri - computed: true, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#is_ssl_verify_disabled ApigatewayDeployment#is_ssl_verify_disabled}
  */
  readonly isSslVerifyDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#max_cache_duration_in_hours ApigatewayDeployment#max_cache_duration_in_hours}
  */
  readonly maxCacheDurationInHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#uri ApigatewayDeployment#uri}
  */
  readonly uri?: string;
  /**
  * additional_validation_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#additional_validation_policy ApigatewayDeployment#additional_validation_policy}
  */
  readonly additionalValidationPolicy?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicy;
  /**
  * client_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#client_details ApigatewayDeployment#client_details}
  */
  readonly clientDetails?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetails;
  /**
  * keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#keys ApigatewayDeployment#keys}
  */
  readonly keys?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeys[] | cdktf.IResolvable;
  /**
  * source_uri_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#source_uri_details ApigatewayDeployment#source_uri_details}
  */
  readonly sourceUriDetails?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetails;
}

export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_ssl_verify_disabled: cdktf.booleanToTerraform(struct!.isSslVerifyDisabled),
    max_cache_duration_in_hours: cdktf.numberToTerraform(struct!.maxCacheDurationInHours),
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
    additional_validation_policy: apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyToTerraform(struct!.additionalValidationPolicy),
    client_details: apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetailsToTerraform(struct!.clientDetails),
    keys: cdktf.listMapper(apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeysToTerraform, true)(struct!.keys),
    source_uri_details: apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetailsToTerraform(struct!.sourceUriDetails),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_ssl_verify_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isSslVerifyDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_cache_duration_in_hours: {
      value: cdktf.numberToHclTerraform(struct!.maxCacheDurationInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_validation_policy: {
      value: apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyToHclTerraform(struct!.additionalValidationPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyList",
    },
    client_details: {
      value: apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetailsToHclTerraform(struct!.clientDetails),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetailsList",
    },
    keys: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeysToHclTerraform, true)(struct!.keys),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeysList",
    },
    source_uri_details: {
      value: apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetailsToHclTerraform(struct!.sourceUriDetails),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isSslVerifyDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSslVerifyDisabled = this._isSslVerifyDisabled;
    }
    if (this._maxCacheDurationInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCacheDurationInHours = this._maxCacheDurationInHours;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._additionalValidationPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalValidationPolicy = this._additionalValidationPolicy?.internalValue;
    }
    if (this._clientDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientDetails = this._clientDetails?.internalValue;
    }
    if (this._keys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys?.internalValue;
    }
    if (this._sourceUriDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUriDetails = this._sourceUriDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isSslVerifyDisabled = undefined;
      this._maxCacheDurationInHours = undefined;
      this._type = undefined;
      this._uri = undefined;
      this._additionalValidationPolicy.internalValue = undefined;
      this._clientDetails.internalValue = undefined;
      this._keys.internalValue = undefined;
      this._sourceUriDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isSslVerifyDisabled = value.isSslVerifyDisabled;
      this._maxCacheDurationInHours = value.maxCacheDurationInHours;
      this._type = value.type;
      this._uri = value.uri;
      this._additionalValidationPolicy.internalValue = value.additionalValidationPolicy;
      this._clientDetails.internalValue = value.clientDetails;
      this._keys.internalValue = value.keys;
      this._sourceUriDetails.internalValue = value.sourceUriDetails;
    }
  }

  // is_ssl_verify_disabled - computed: true, optional: true, required: false
  private _isSslVerifyDisabled?: boolean | cdktf.IResolvable; 
  public get isSslVerifyDisabled() {
    return this.getBooleanAttribute('is_ssl_verify_disabled');
  }
  public set isSslVerifyDisabled(value: boolean | cdktf.IResolvable) {
    this._isSslVerifyDisabled = value;
  }
  public resetIsSslVerifyDisabled() {
    this._isSslVerifyDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSslVerifyDisabledInput() {
    return this._isSslVerifyDisabled;
  }

  // max_cache_duration_in_hours - computed: true, optional: true, required: false
  private _maxCacheDurationInHours?: number; 
  public get maxCacheDurationInHours() {
    return this.getNumberAttribute('max_cache_duration_in_hours');
  }
  public set maxCacheDurationInHours(value: number) {
    this._maxCacheDurationInHours = value;
  }
  public resetMaxCacheDurationInHours() {
    this._maxCacheDurationInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCacheDurationInHoursInput() {
    return this._maxCacheDurationInHours;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uri - computed: true, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // additional_validation_policy - computed: false, optional: true, required: false
  private _additionalValidationPolicy = new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyOutputReference(this, "additional_validation_policy");
  public get additionalValidationPolicy() {
    return this._additionalValidationPolicy;
  }
  public putAdditionalValidationPolicy(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicy) {
    this._additionalValidationPolicy.internalValue = value;
  }
  public resetAdditionalValidationPolicy() {
    this._additionalValidationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalValidationPolicyInput() {
    return this._additionalValidationPolicy.internalValue;
  }

  // client_details - computed: false, optional: true, required: false
  private _clientDetails = new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetailsOutputReference(this, "client_details");
  public get clientDetails() {
    return this._clientDetails;
  }
  public putClientDetails(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetails) {
    this._clientDetails.internalValue = value;
  }
  public resetClientDetails() {
    this._clientDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDetailsInput() {
    return this._clientDetails.internalValue;
  }

  // keys - computed: false, optional: true, required: false
  private _keys = new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeysList(this, "keys", false);
  public get keys() {
    return this._keys;
  }
  public putKeys(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeys[] | cdktf.IResolvable) {
    this._keys.internalValue = value;
  }
  public resetKeys() {
    this._keys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys.internalValue;
  }

  // source_uri_details - computed: false, optional: true, required: false
  private _sourceUriDetails = new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetailsOutputReference(this, "source_uri_details");
  public get sourceUriDetails() {
    return this._sourceUriDetails;
  }
  public putSourceUriDetails(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetails) {
    this._sourceUriDetails.internalValue = value;
  }
  public resetSourceUriDetails() {
    this._sourceUriDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUriDetailsInput() {
    return this._sourceUriDetails.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#is_required ApigatewayDeployment#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#key ApigatewayDeployment#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#values ApigatewayDeployment#values}
  */
  readonly values?: string[];
}

export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaimsToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_required: cdktf.booleanToTerraform(struct!.isRequired),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaimsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_required: {
      value: cdktf.booleanToHclTerraform(struct!.isRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRequired = this._isRequired;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isRequired = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isRequired = value.isRequired;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // is_required - computed: true, optional: true, required: false
  private _isRequired?: boolean | cdktf.IResolvable; 
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }
  public set isRequired(value: boolean | cdktf.IResolvable) {
    this._isRequired = value;
  }
  public resetIsRequired() {
    this._isRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRequiredInput() {
    return this._isRequired;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaimsList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaims[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaimsOutputReference {
    return new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#audiences ApigatewayDeployment#audiences}
  */
  readonly audiences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#cache_key ApigatewayDeployment#cache_key}
  */
  readonly cacheKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#function_id ApigatewayDeployment#function_id}
  */
  readonly functionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#is_anonymous_access_allowed ApigatewayDeployment#is_anonymous_access_allowed}
  */
  readonly isAnonymousAccessAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#issuers ApigatewayDeployment#issuers}
  */
  readonly issuers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#max_clock_skew_in_seconds ApigatewayDeployment#max_clock_skew_in_seconds}
  */
  readonly maxClockSkewInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#parameters ApigatewayDeployment#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#token_auth_scheme ApigatewayDeployment#token_auth_scheme}
  */
  readonly tokenAuthScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#token_header ApigatewayDeployment#token_header}
  */
  readonly tokenHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#token_query_param ApigatewayDeployment#token_query_param}
  */
  readonly tokenQueryParam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
  /**
  * public_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#public_keys ApigatewayDeployment#public_keys}
  */
  readonly publicKeys?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeys;
  /**
  * validation_failure_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#validation_failure_policy ApigatewayDeployment#validation_failure_policy}
  */
  readonly validationFailurePolicy?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicy;
  /**
  * validation_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#validation_policy ApigatewayDeployment#validation_policy}
  */
  readonly validationPolicy?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicy;
  /**
  * verify_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#verify_claims ApigatewayDeployment#verify_claims}
  */
  readonly verifyClaims?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaims[] | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
    cache_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cacheKey),
    function_id: cdktf.stringToTerraform(struct!.functionId),
    is_anonymous_access_allowed: cdktf.booleanToTerraform(struct!.isAnonymousAccessAllowed),
    issuers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.issuers),
    max_clock_skew_in_seconds: cdktf.numberToTerraform(struct!.maxClockSkewInSeconds),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    token_auth_scheme: cdktf.stringToTerraform(struct!.tokenAuthScheme),
    token_header: cdktf.stringToTerraform(struct!.tokenHeader),
    token_query_param: cdktf.stringToTerraform(struct!.tokenQueryParam),
    type: cdktf.stringToTerraform(struct!.type),
    public_keys: apigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysToTerraform(struct!.publicKeys),
    validation_failure_policy: apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyToTerraform(struct!.validationFailurePolicy),
    validation_policy: apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyToTerraform(struct!.validationPolicy),
    verify_claims: cdktf.listMapper(apigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaimsToTerraform, true)(struct!.verifyClaims),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesAuthenticationToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cache_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cacheKey),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    function_id: {
      value: cdktf.stringToHclTerraform(struct!.functionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_anonymous_access_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.isAnonymousAccessAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    issuers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.issuers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_clock_skew_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxClockSkewInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    token_auth_scheme: {
      value: cdktf.stringToHclTerraform(struct!.tokenAuthScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_header: {
      value: cdktf.stringToHclTerraform(struct!.tokenHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_query_param: {
      value: cdktf.stringToHclTerraform(struct!.tokenQueryParam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_keys: {
      value: apigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysToHclTerraform(struct!.publicKeys),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysList",
    },
    validation_failure_policy: {
      value: apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyToHclTerraform(struct!.validationFailurePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyList",
    },
    validation_policy: {
      value: apigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyToHclTerraform(struct!.validationPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyList",
    },
    verify_claims: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaimsToHclTerraform, true)(struct!.verifyClaims),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaimsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
    }
    if (this._cacheKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheKey = this._cacheKey;
    }
    if (this._functionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionId = this._functionId;
    }
    if (this._isAnonymousAccessAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAnonymousAccessAllowed = this._isAnonymousAccessAllowed;
    }
    if (this._issuers !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuers = this._issuers;
    }
    if (this._maxClockSkewInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxClockSkewInSeconds = this._maxClockSkewInSeconds;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._tokenAuthScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenAuthScheme = this._tokenAuthScheme;
    }
    if (this._tokenHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenHeader = this._tokenHeader;
    }
    if (this._tokenQueryParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenQueryParam = this._tokenQueryParam;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._publicKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeys = this._publicKeys?.internalValue;
    }
    if (this._validationFailurePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationFailurePolicy = this._validationFailurePolicy?.internalValue;
    }
    if (this._validationPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationPolicy = this._validationPolicy?.internalValue;
    }
    if (this._verifyClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyClaims = this._verifyClaims?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audiences = undefined;
      this._cacheKey = undefined;
      this._functionId = undefined;
      this._isAnonymousAccessAllowed = undefined;
      this._issuers = undefined;
      this._maxClockSkewInSeconds = undefined;
      this._parameters = undefined;
      this._tokenAuthScheme = undefined;
      this._tokenHeader = undefined;
      this._tokenQueryParam = undefined;
      this._type = undefined;
      this._publicKeys.internalValue = undefined;
      this._validationFailurePolicy.internalValue = undefined;
      this._validationPolicy.internalValue = undefined;
      this._verifyClaims.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audiences = value.audiences;
      this._cacheKey = value.cacheKey;
      this._functionId = value.functionId;
      this._isAnonymousAccessAllowed = value.isAnonymousAccessAllowed;
      this._issuers = value.issuers;
      this._maxClockSkewInSeconds = value.maxClockSkewInSeconds;
      this._parameters = value.parameters;
      this._tokenAuthScheme = value.tokenAuthScheme;
      this._tokenHeader = value.tokenHeader;
      this._tokenQueryParam = value.tokenQueryParam;
      this._type = value.type;
      this._publicKeys.internalValue = value.publicKeys;
      this._validationFailurePolicy.internalValue = value.validationFailurePolicy;
      this._validationPolicy.internalValue = value.validationPolicy;
      this._verifyClaims.internalValue = value.verifyClaims;
    }
  }

  // audiences - computed: true, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
  }

  // cache_key - computed: true, optional: true, required: false
  private _cacheKey?: string[]; 
  public get cacheKey() {
    return this.getListAttribute('cache_key');
  }
  public set cacheKey(value: string[]) {
    this._cacheKey = value;
  }
  public resetCacheKey() {
    this._cacheKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheKeyInput() {
    return this._cacheKey;
  }

  // function_id - computed: true, optional: true, required: false
  private _functionId?: string; 
  public get functionId() {
    return this.getStringAttribute('function_id');
  }
  public set functionId(value: string) {
    this._functionId = value;
  }
  public resetFunctionId() {
    this._functionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionIdInput() {
    return this._functionId;
  }

  // is_anonymous_access_allowed - computed: true, optional: true, required: false
  private _isAnonymousAccessAllowed?: boolean | cdktf.IResolvable; 
  public get isAnonymousAccessAllowed() {
    return this.getBooleanAttribute('is_anonymous_access_allowed');
  }
  public set isAnonymousAccessAllowed(value: boolean | cdktf.IResolvable) {
    this._isAnonymousAccessAllowed = value;
  }
  public resetIsAnonymousAccessAllowed() {
    this._isAnonymousAccessAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAnonymousAccessAllowedInput() {
    return this._isAnonymousAccessAllowed;
  }

  // issuers - computed: true, optional: true, required: false
  private _issuers?: string[]; 
  public get issuers() {
    return this.getListAttribute('issuers');
  }
  public set issuers(value: string[]) {
    this._issuers = value;
  }
  public resetIssuers() {
    this._issuers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuersInput() {
    return this._issuers;
  }

  // max_clock_skew_in_seconds - computed: true, optional: true, required: false
  private _maxClockSkewInSeconds?: number; 
  public get maxClockSkewInSeconds() {
    return this.getNumberAttribute('max_clock_skew_in_seconds');
  }
  public set maxClockSkewInSeconds(value: number) {
    this._maxClockSkewInSeconds = value;
  }
  public resetMaxClockSkewInSeconds() {
    this._maxClockSkewInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClockSkewInSecondsInput() {
    return this._maxClockSkewInSeconds;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // token_auth_scheme - computed: true, optional: true, required: false
  private _tokenAuthScheme?: string; 
  public get tokenAuthScheme() {
    return this.getStringAttribute('token_auth_scheme');
  }
  public set tokenAuthScheme(value: string) {
    this._tokenAuthScheme = value;
  }
  public resetTokenAuthScheme() {
    this._tokenAuthScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthSchemeInput() {
    return this._tokenAuthScheme;
  }

  // token_header - computed: true, optional: true, required: false
  private _tokenHeader?: string; 
  public get tokenHeader() {
    return this.getStringAttribute('token_header');
  }
  public set tokenHeader(value: string) {
    this._tokenHeader = value;
  }
  public resetTokenHeader() {
    this._tokenHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenHeaderInput() {
    return this._tokenHeader;
  }

  // token_query_param - computed: true, optional: true, required: false
  private _tokenQueryParam?: string; 
  public get tokenQueryParam() {
    return this.getStringAttribute('token_query_param');
  }
  public set tokenQueryParam(value: string) {
    this._tokenQueryParam = value;
  }
  public resetTokenQueryParam() {
    this._tokenQueryParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenQueryParamInput() {
    return this._tokenQueryParam;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // public_keys - computed: false, optional: true, required: false
  private _publicKeys = new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysOutputReference(this, "public_keys");
  public get publicKeys() {
    return this._publicKeys;
  }
  public putPublicKeys(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeys) {
    this._publicKeys.internalValue = value;
  }
  public resetPublicKeys() {
    this._publicKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeysInput() {
    return this._publicKeys.internalValue;
  }

  // validation_failure_policy - computed: false, optional: true, required: false
  private _validationFailurePolicy = new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyOutputReference(this, "validation_failure_policy");
  public get validationFailurePolicy() {
    return this._validationFailurePolicy;
  }
  public putValidationFailurePolicy(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicy) {
    this._validationFailurePolicy.internalValue = value;
  }
  public resetValidationFailurePolicy() {
    this._validationFailurePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationFailurePolicyInput() {
    return this._validationFailurePolicy.internalValue;
  }

  // validation_policy - computed: false, optional: true, required: false
  private _validationPolicy = new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyOutputReference(this, "validation_policy");
  public get validationPolicy() {
    return this._validationPolicy;
  }
  public putValidationPolicy(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicy) {
    this._validationPolicy.internalValue = value;
  }
  public resetValidationPolicy() {
    this._validationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationPolicyInput() {
    return this._validationPolicy.internalValue;
  }

  // verify_claims - computed: false, optional: true, required: false
  private _verifyClaims = new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaimsList(this, "verify_claims", false);
  public get verifyClaims() {
    return this._verifyClaims;
  }
  public putVerifyClaims(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaims[] | cdktf.IResolvable) {
    this._verifyClaims.internalValue = value;
  }
  public resetVerifyClaims() {
    this._verifyClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyClaimsInput() {
    return this._verifyClaims.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesCors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#allowed_headers ApigatewayDeployment#allowed_headers}
  */
  readonly allowedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#allowed_methods ApigatewayDeployment#allowed_methods}
  */
  readonly allowedMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#allowed_origins ApigatewayDeployment#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#exposed_headers ApigatewayDeployment#exposed_headers}
  */
  readonly exposedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#is_allow_credentials_enabled ApigatewayDeployment#is_allow_credentials_enabled}
  */
  readonly isAllowCredentialsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#max_age_in_seconds ApigatewayDeployment#max_age_in_seconds}
  */
  readonly maxAgeInSeconds?: number;
}

export function apigatewayDeploymentSpecificationRequestPoliciesCorsToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesCorsOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrigins),
    exposed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposedHeaders),
    is_allow_credentials_enabled: cdktf.booleanToTerraform(struct!.isAllowCredentialsEnabled),
    max_age_in_seconds: cdktf.numberToTerraform(struct!.maxAgeInSeconds),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesCorsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesCorsOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exposed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exposedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_allow_credentials_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isAllowCredentialsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_age_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxAgeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesCorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesCors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHeaders = this._allowedHeaders;
    }
    if (this._allowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods;
    }
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._exposedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposedHeaders = this._exposedHeaders;
    }
    if (this._isAllowCredentialsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAllowCredentialsEnabled = this._isAllowCredentialsEnabled;
    }
    if (this._maxAgeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeInSeconds = this._maxAgeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesCors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHeaders = undefined;
      this._allowedMethods = undefined;
      this._allowedOrigins = undefined;
      this._exposedHeaders = undefined;
      this._isAllowCredentialsEnabled = undefined;
      this._maxAgeInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHeaders = value.allowedHeaders;
      this._allowedMethods = value.allowedMethods;
      this._allowedOrigins = value.allowedOrigins;
      this._exposedHeaders = value.exposedHeaders;
      this._isAllowCredentialsEnabled = value.isAllowCredentialsEnabled;
      this._maxAgeInSeconds = value.maxAgeInSeconds;
    }
  }

  // allowed_headers - computed: true, optional: true, required: false
  private _allowedHeaders?: string[]; 
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }
  public set allowedHeaders(value: string[]) {
    this._allowedHeaders = value;
  }
  public resetAllowedHeaders() {
    this._allowedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeadersInput() {
    return this._allowedHeaders;
  }

  // allowed_methods - computed: true, optional: true, required: false
  private _allowedMethods?: string[]; 
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }
  public set allowedMethods(value: string[]) {
    this._allowedMethods = value;
  }
  public resetAllowedMethods() {
    this._allowedMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
  }

  // allowed_origins - computed: false, optional: false, required: true
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // exposed_headers - computed: true, optional: true, required: false
  private _exposedHeaders?: string[]; 
  public get exposedHeaders() {
    return this.getListAttribute('exposed_headers');
  }
  public set exposedHeaders(value: string[]) {
    this._exposedHeaders = value;
  }
  public resetExposedHeaders() {
    this._exposedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposedHeadersInput() {
    return this._exposedHeaders;
  }

  // is_allow_credentials_enabled - computed: true, optional: true, required: false
  private _isAllowCredentialsEnabled?: boolean | cdktf.IResolvable; 
  public get isAllowCredentialsEnabled() {
    return this.getBooleanAttribute('is_allow_credentials_enabled');
  }
  public set isAllowCredentialsEnabled(value: boolean | cdktf.IResolvable) {
    this._isAllowCredentialsEnabled = value;
  }
  public resetIsAllowCredentialsEnabled() {
    this._isAllowCredentialsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAllowCredentialsEnabledInput() {
    return this._isAllowCredentialsEnabled;
  }

  // max_age_in_seconds - computed: true, optional: true, required: false
  private _maxAgeInSeconds?: number; 
  public get maxAgeInSeconds() {
    return this.getNumberAttribute('max_age_in_seconds');
  }
  public set maxAgeInSeconds(value: number) {
    this._maxAgeInSeconds = value;
  }
  public resetMaxAgeInSeconds() {
    this._maxAgeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInSecondsInput() {
    return this._maxAgeInSeconds;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#alg ApigatewayDeployment#alg}
  */
  readonly alg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#e ApigatewayDeployment#e}
  */
  readonly e?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#format ApigatewayDeployment#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#key ApigatewayDeployment#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#key_ops ApigatewayDeployment#key_ops}
  */
  readonly keyOps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#kid ApigatewayDeployment#kid}
  */
  readonly kid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#kty ApigatewayDeployment#kty}
  */
  readonly kty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#n ApigatewayDeployment#n}
  */
  readonly n?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#use ApigatewayDeployment#use}
  */
  readonly use?: string;
}

export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeysToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alg: cdktf.stringToTerraform(struct!.alg),
    e: cdktf.stringToTerraform(struct!.e),
    format: cdktf.stringToTerraform(struct!.format),
    key: cdktf.stringToTerraform(struct!.key),
    key_ops: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyOps),
    kid: cdktf.stringToTerraform(struct!.kid),
    kty: cdktf.stringToTerraform(struct!.kty),
    n: cdktf.stringToTerraform(struct!.n),
    use: cdktf.stringToTerraform(struct!.use),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeysToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alg: {
      value: cdktf.stringToHclTerraform(struct!.alg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e: {
      value: cdktf.stringToHclTerraform(struct!.e),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_ops: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyOps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kid: {
      value: cdktf.stringToHclTerraform(struct!.kid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kty: {
      value: cdktf.stringToHclTerraform(struct!.kty),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    n: {
      value: cdktf.stringToHclTerraform(struct!.n),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use: {
      value: cdktf.stringToHclTerraform(struct!.use),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alg !== undefined) {
      hasAnyValues = true;
      internalValueResult.alg = this._alg;
    }
    if (this._e !== undefined) {
      hasAnyValues = true;
      internalValueResult.e = this._e;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._keyOps !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOps = this._keyOps;
    }
    if (this._kid !== undefined) {
      hasAnyValues = true;
      internalValueResult.kid = this._kid;
    }
    if (this._kty !== undefined) {
      hasAnyValues = true;
      internalValueResult.kty = this._kty;
    }
    if (this._n !== undefined) {
      hasAnyValues = true;
      internalValueResult.n = this._n;
    }
    if (this._use !== undefined) {
      hasAnyValues = true;
      internalValueResult.use = this._use;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alg = undefined;
      this._e = undefined;
      this._format = undefined;
      this._key = undefined;
      this._keyOps = undefined;
      this._kid = undefined;
      this._kty = undefined;
      this._n = undefined;
      this._use = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alg = value.alg;
      this._e = value.e;
      this._format = value.format;
      this._key = value.key;
      this._keyOps = value.keyOps;
      this._kid = value.kid;
      this._kty = value.kty;
      this._n = value.n;
      this._use = value.use;
    }
  }

  // alg - computed: true, optional: true, required: false
  private _alg?: string; 
  public get alg() {
    return this.getStringAttribute('alg');
  }
  public set alg(value: string) {
    this._alg = value;
  }
  public resetAlg() {
    this._alg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algInput() {
    return this._alg;
  }

  // e - computed: true, optional: true, required: false
  private _e?: string; 
  public get e() {
    return this.getStringAttribute('e');
  }
  public set e(value: string) {
    this._e = value;
  }
  public resetE() {
    this._e = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eInput() {
    return this._e;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_ops - computed: true, optional: true, required: false
  private _keyOps?: string[]; 
  public get keyOps() {
    return this.getListAttribute('key_ops');
  }
  public set keyOps(value: string[]) {
    this._keyOps = value;
  }
  public resetKeyOps() {
    this._keyOps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOpsInput() {
    return this._keyOps;
  }

  // kid - computed: true, optional: true, required: false
  private _kid?: string; 
  public get kid() {
    return this.getStringAttribute('kid');
  }
  public set kid(value: string) {
    this._kid = value;
  }
  public resetKid() {
    this._kid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kidInput() {
    return this._kid;
  }

  // kty - computed: true, optional: true, required: false
  private _kty?: string; 
  public get kty() {
    return this.getStringAttribute('kty');
  }
  public set kty(value: string) {
    this._kty = value;
  }
  public resetKty() {
    this._kty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ktyInput() {
    return this._kty;
  }

  // n - computed: true, optional: true, required: false
  private _n?: string; 
  public get n() {
    return this.getStringAttribute('n');
  }
  public set n(value: string) {
    this._n = value;
  }
  public resetN() {
    this._n = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nInput() {
    return this._n;
  }

  // use - computed: true, optional: true, required: false
  private _use?: string; 
  public get use() {
    return this.getStringAttribute('use');
  }
  public set use(value: string) {
    this._use = value;
  }
  public resetUse() {
    this._use = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInput() {
    return this._use;
  }
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeysList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeys[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeysOutputReference {
    return new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#is_ssl_verify_disabled ApigatewayDeployment#is_ssl_verify_disabled}
  */
  readonly isSslVerifyDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#max_cache_duration_in_hours ApigatewayDeployment#max_cache_duration_in_hours}
  */
  readonly maxCacheDurationInHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#uri ApigatewayDeployment#uri}
  */
  readonly uri?: string;
  /**
  * keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#keys ApigatewayDeployment#keys}
  */
  readonly keys?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeys[] | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_ssl_verify_disabled: cdktf.booleanToTerraform(struct!.isSslVerifyDisabled),
    max_cache_duration_in_hours: cdktf.numberToTerraform(struct!.maxCacheDurationInHours),
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
    keys: cdktf.listMapper(apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeysToTerraform, true)(struct!.keys),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_ssl_verify_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isSslVerifyDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_cache_duration_in_hours: {
      value: cdktf.numberToHclTerraform(struct!.maxCacheDurationInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keys: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeysToHclTerraform, true)(struct!.keys),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isSslVerifyDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSslVerifyDisabled = this._isSslVerifyDisabled;
    }
    if (this._maxCacheDurationInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCacheDurationInHours = this._maxCacheDurationInHours;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._keys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isSslVerifyDisabled = undefined;
      this._maxCacheDurationInHours = undefined;
      this._type = undefined;
      this._uri = undefined;
      this._keys.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isSslVerifyDisabled = value.isSslVerifyDisabled;
      this._maxCacheDurationInHours = value.maxCacheDurationInHours;
      this._type = value.type;
      this._uri = value.uri;
      this._keys.internalValue = value.keys;
    }
  }

  // is_ssl_verify_disabled - computed: true, optional: true, required: false
  private _isSslVerifyDisabled?: boolean | cdktf.IResolvable; 
  public get isSslVerifyDisabled() {
    return this.getBooleanAttribute('is_ssl_verify_disabled');
  }
  public set isSslVerifyDisabled(value: boolean | cdktf.IResolvable) {
    this._isSslVerifyDisabled = value;
  }
  public resetIsSslVerifyDisabled() {
    this._isSslVerifyDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSslVerifyDisabledInput() {
    return this._isSslVerifyDisabled;
  }

  // max_cache_duration_in_hours - computed: true, optional: true, required: false
  private _maxCacheDurationInHours?: number; 
  public get maxCacheDurationInHours() {
    return this.getNumberAttribute('max_cache_duration_in_hours');
  }
  public set maxCacheDurationInHours(value: number) {
    this._maxCacheDurationInHours = value;
  }
  public resetMaxCacheDurationInHours() {
    this._maxCacheDurationInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCacheDurationInHoursInput() {
    return this._maxCacheDurationInHours;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uri - computed: true, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // keys - computed: false, optional: true, required: false
  private _keys = new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeysList(this, "keys", false);
  public get keys() {
    return this._keys;
  }
  public putKeys(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeys[] | cdktf.IResolvable) {
    this._keys.internalValue = value;
  }
  public resetKeys() {
    this._keys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#client_id ApigatewayDeployment#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#client_secret_id ApigatewayDeployment#client_secret_id}
  */
  readonly clientSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#client_secret_version_number ApigatewayDeployment#client_secret_version_number}
  */
  readonly clientSecretVersionNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
}

export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetailsToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetailsOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret_id: cdktf.stringToTerraform(struct!.clientSecretId),
    client_secret_version_number: cdktf.stringToTerraform(struct!.clientSecretVersionNumber),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetailsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetailsOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_version_number: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretId = this._clientSecretId;
    }
    if (this._clientSecretVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretVersionNumber = this._clientSecretVersionNumber;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecretId = undefined;
      this._clientSecretVersionNumber = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecretId = value.clientSecretId;
      this._clientSecretVersionNumber = value.clientSecretVersionNumber;
      this._type = value.type;
    }
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret_id - computed: true, optional: true, required: false
  private _clientSecretId?: string; 
  public get clientSecretId() {
    return this.getStringAttribute('client_secret_id');
  }
  public set clientSecretId(value: string) {
    this._clientSecretId = value;
  }
  public resetClientSecretId() {
    this._clientSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretIdInput() {
    return this._clientSecretId;
  }

  // client_secret_version_number - computed: true, optional: true, required: false
  private _clientSecretVersionNumber?: string; 
  public get clientSecretVersionNumber() {
    return this.getStringAttribute('client_secret_version_number');
  }
  public set clientSecretVersionNumber(value: string) {
    this._clientSecretVersionNumber = value;
  }
  public resetClientSecretVersionNumber() {
    this._clientSecretVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretVersionNumberInput() {
    return this._clientSecretVersionNumber;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#name ApigatewayDeployment#name}
  */
  readonly name?: string;
}

export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItems | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: true, required: false
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
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItems[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsOutputReference {
    return new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type?: string;
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#items ApigatewayDeployment#items}
  */
  readonly items?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItems[] | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    items: cdktf.listMapper(apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsToTerraform, true)(struct!.items),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    items: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._items.internalValue = value.items;
    }
  }

  // type - computed: true, optional: true, required: false
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

  // items - computed: false, optional: true, required: false
  private _items = new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#from ApigatewayDeployment#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#to ApigatewayDeployment#to}
  */
  readonly to?: string;
}

export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: true, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: true, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItems[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsOutputReference {
    return new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeaders {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#items ApigatewayDeployment#items}
  */
  readonly items?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItems[] | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsToTerraform, true)(struct!.items),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#if_exists ApigatewayDeployment#if_exists}
  */
  readonly ifExists?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#name ApigatewayDeployment#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#values ApigatewayDeployment#values}
  */
  readonly values?: string[];
}

export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    if_exists: cdktf.stringToTerraform(struct!.ifExists),
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    if_exists: {
      value: cdktf.stringToHclTerraform(struct!.ifExists),
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ifExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifExists = this._ifExists;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ifExists = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ifExists = value.ifExists;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // if_exists - computed: true, optional: true, required: false
  private _ifExists?: string; 
  public get ifExists() {
    return this.getStringAttribute('if_exists');
  }
  public set ifExists(value: string) {
    this._ifExists = value;
  }
  public resetIfExists() {
    this._ifExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifExistsInput() {
    return this._ifExists;
  }

  // name - computed: true, optional: true, required: false
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

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItems[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsOutputReference {
    return new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeaders {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#items ApigatewayDeployment#items}
  */
  readonly items?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItems[] | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsToTerraform, true)(struct!.items),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformations {
  /**
  * filter_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#filter_headers ApigatewayDeployment#filter_headers}
  */
  readonly filterHeaders?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeaders;
  /**
  * rename_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#rename_headers ApigatewayDeployment#rename_headers}
  */
  readonly renameHeaders?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeaders;
  /**
  * set_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#set_headers ApigatewayDeployment#set_headers}
  */
  readonly setHeaders?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeaders;
}

export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_headers: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersToTerraform(struct!.filterHeaders),
    rename_headers: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersToTerraform(struct!.renameHeaders),
    set_headers: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersToTerraform(struct!.setHeaders),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_headers: {
      value: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersToHclTerraform(struct!.filterHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersList",
    },
    rename_headers: {
      value: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersToHclTerraform(struct!.renameHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersList",
    },
    set_headers: {
      value: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersToHclTerraform(struct!.setHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterHeaders = this._filterHeaders?.internalValue;
    }
    if (this._renameHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.renameHeaders = this._renameHeaders?.internalValue;
    }
    if (this._setHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setHeaders = this._setHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterHeaders.internalValue = undefined;
      this._renameHeaders.internalValue = undefined;
      this._setHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterHeaders.internalValue = value.filterHeaders;
      this._renameHeaders.internalValue = value.renameHeaders;
      this._setHeaders.internalValue = value.setHeaders;
    }
  }

  // filter_headers - computed: false, optional: true, required: false
  private _filterHeaders = new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersOutputReference(this, "filter_headers");
  public get filterHeaders() {
    return this._filterHeaders;
  }
  public putFilterHeaders(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeaders) {
    this._filterHeaders.internalValue = value;
  }
  public resetFilterHeaders() {
    this._filterHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterHeadersInput() {
    return this._filterHeaders.internalValue;
  }

  // rename_headers - computed: false, optional: true, required: false
  private _renameHeaders = new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersOutputReference(this, "rename_headers");
  public get renameHeaders() {
    return this._renameHeaders;
  }
  public putRenameHeaders(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeaders) {
    this._renameHeaders.internalValue = value;
  }
  public resetRenameHeaders() {
    this._renameHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renameHeadersInput() {
    return this._renameHeaders.internalValue;
  }

  // set_headers - computed: false, optional: true, required: false
  private _setHeaders = new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersOutputReference(this, "set_headers");
  public get setHeaders() {
    return this._setHeaders;
  }
  public putSetHeaders(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeaders) {
    this._setHeaders.internalValue = value;
  }
  public resetSetHeaders() {
    this._setHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setHeadersInput() {
    return this._setHeaders.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#uri ApigatewayDeployment#uri}
  */
  readonly uri?: string;
}

export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetailsToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetailsOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetailsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetailsOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._uri = value.uri;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uri - computed: true, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#fallback_redirect_path ApigatewayDeployment#fallback_redirect_path}
  */
  readonly fallbackRedirectPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#logout_path ApigatewayDeployment#logout_path}
  */
  readonly logoutPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#max_expiry_duration_in_hours ApigatewayDeployment#max_expiry_duration_in_hours}
  */
  readonly maxExpiryDurationInHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#response_code ApigatewayDeployment#response_code}
  */
  readonly responseCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#response_message ApigatewayDeployment#response_message}
  */
  readonly responseMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#response_type ApigatewayDeployment#response_type}
  */
  readonly responseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#scopes ApigatewayDeployment#scopes}
  */
  readonly scopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#use_cookies_for_intermediate_steps ApigatewayDeployment#use_cookies_for_intermediate_steps}
  */
  readonly useCookiesForIntermediateSteps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#use_cookies_for_session ApigatewayDeployment#use_cookies_for_session}
  */
  readonly useCookiesForSession?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#use_pkce ApigatewayDeployment#use_pkce}
  */
  readonly usePkce?: boolean | cdktf.IResolvable;
  /**
  * client_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#client_details ApigatewayDeployment#client_details}
  */
  readonly clientDetails?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetails;
  /**
  * response_header_transformations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#response_header_transformations ApigatewayDeployment#response_header_transformations}
  */
  readonly responseHeaderTransformations?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformations;
  /**
  * source_uri_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#source_uri_details ApigatewayDeployment#source_uri_details}
  */
  readonly sourceUriDetails?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetails;
}

export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_redirect_path: cdktf.stringToTerraform(struct!.fallbackRedirectPath),
    logout_path: cdktf.stringToTerraform(struct!.logoutPath),
    max_expiry_duration_in_hours: cdktf.numberToTerraform(struct!.maxExpiryDurationInHours),
    response_code: cdktf.stringToTerraform(struct!.responseCode),
    response_message: cdktf.stringToTerraform(struct!.responseMessage),
    response_type: cdktf.stringToTerraform(struct!.responseType),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    type: cdktf.stringToTerraform(struct!.type),
    use_cookies_for_intermediate_steps: cdktf.booleanToTerraform(struct!.useCookiesForIntermediateSteps),
    use_cookies_for_session: cdktf.booleanToTerraform(struct!.useCookiesForSession),
    use_pkce: cdktf.booleanToTerraform(struct!.usePkce),
    client_details: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetailsToTerraform(struct!.clientDetails),
    response_header_transformations: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsToTerraform(struct!.responseHeaderTransformations),
    source_uri_details: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetailsToTerraform(struct!.sourceUriDetails),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback_redirect_path: {
      value: cdktf.stringToHclTerraform(struct!.fallbackRedirectPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logout_path: {
      value: cdktf.stringToHclTerraform(struct!.logoutPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_expiry_duration_in_hours: {
      value: cdktf.numberToHclTerraform(struct!.maxExpiryDurationInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_code: {
      value: cdktf.stringToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_message: {
      value: cdktf.stringToHclTerraform(struct!.responseMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_type: {
      value: cdktf.stringToHclTerraform(struct!.responseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_cookies_for_intermediate_steps: {
      value: cdktf.booleanToHclTerraform(struct!.useCookiesForIntermediateSteps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_cookies_for_session: {
      value: cdktf.booleanToHclTerraform(struct!.useCookiesForSession),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_pkce: {
      value: cdktf.booleanToHclTerraform(struct!.usePkce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_details: {
      value: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetailsToHclTerraform(struct!.clientDetails),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetailsList",
    },
    response_header_transformations: {
      value: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsToHclTerraform(struct!.responseHeaderTransformations),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsList",
    },
    source_uri_details: {
      value: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetailsToHclTerraform(struct!.sourceUriDetails),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackRedirectPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackRedirectPath = this._fallbackRedirectPath;
    }
    if (this._logoutPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutPath = this._logoutPath;
    }
    if (this._maxExpiryDurationInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxExpiryDurationInHours = this._maxExpiryDurationInHours;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    if (this._responseMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseMessage = this._responseMessage;
    }
    if (this._responseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseType = this._responseType;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useCookiesForIntermediateSteps !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCookiesForIntermediateSteps = this._useCookiesForIntermediateSteps;
    }
    if (this._useCookiesForSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCookiesForSession = this._useCookiesForSession;
    }
    if (this._usePkce !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePkce = this._usePkce;
    }
    if (this._clientDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientDetails = this._clientDetails?.internalValue;
    }
    if (this._responseHeaderTransformations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeaderTransformations = this._responseHeaderTransformations?.internalValue;
    }
    if (this._sourceUriDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUriDetails = this._sourceUriDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fallbackRedirectPath = undefined;
      this._logoutPath = undefined;
      this._maxExpiryDurationInHours = undefined;
      this._responseCode = undefined;
      this._responseMessage = undefined;
      this._responseType = undefined;
      this._scopes = undefined;
      this._type = undefined;
      this._useCookiesForIntermediateSteps = undefined;
      this._useCookiesForSession = undefined;
      this._usePkce = undefined;
      this._clientDetails.internalValue = undefined;
      this._responseHeaderTransformations.internalValue = undefined;
      this._sourceUriDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fallbackRedirectPath = value.fallbackRedirectPath;
      this._logoutPath = value.logoutPath;
      this._maxExpiryDurationInHours = value.maxExpiryDurationInHours;
      this._responseCode = value.responseCode;
      this._responseMessage = value.responseMessage;
      this._responseType = value.responseType;
      this._scopes = value.scopes;
      this._type = value.type;
      this._useCookiesForIntermediateSteps = value.useCookiesForIntermediateSteps;
      this._useCookiesForSession = value.useCookiesForSession;
      this._usePkce = value.usePkce;
      this._clientDetails.internalValue = value.clientDetails;
      this._responseHeaderTransformations.internalValue = value.responseHeaderTransformations;
      this._sourceUriDetails.internalValue = value.sourceUriDetails;
    }
  }

  // fallback_redirect_path - computed: true, optional: true, required: false
  private _fallbackRedirectPath?: string; 
  public get fallbackRedirectPath() {
    return this.getStringAttribute('fallback_redirect_path');
  }
  public set fallbackRedirectPath(value: string) {
    this._fallbackRedirectPath = value;
  }
  public resetFallbackRedirectPath() {
    this._fallbackRedirectPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackRedirectPathInput() {
    return this._fallbackRedirectPath;
  }

  // logout_path - computed: true, optional: true, required: false
  private _logoutPath?: string; 
  public get logoutPath() {
    return this.getStringAttribute('logout_path');
  }
  public set logoutPath(value: string) {
    this._logoutPath = value;
  }
  public resetLogoutPath() {
    this._logoutPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutPathInput() {
    return this._logoutPath;
  }

  // max_expiry_duration_in_hours - computed: true, optional: true, required: false
  private _maxExpiryDurationInHours?: number; 
  public get maxExpiryDurationInHours() {
    return this.getNumberAttribute('max_expiry_duration_in_hours');
  }
  public set maxExpiryDurationInHours(value: number) {
    this._maxExpiryDurationInHours = value;
  }
  public resetMaxExpiryDurationInHours() {
    this._maxExpiryDurationInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExpiryDurationInHoursInput() {
    return this._maxExpiryDurationInHours;
  }

  // response_code - computed: true, optional: true, required: false
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

  // response_message - computed: true, optional: true, required: false
  private _responseMessage?: string; 
  public get responseMessage() {
    return this.getStringAttribute('response_message');
  }
  public set responseMessage(value: string) {
    this._responseMessage = value;
  }
  public resetResponseMessage() {
    this._responseMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseMessageInput() {
    return this._responseMessage;
  }

  // response_type - computed: true, optional: true, required: false
  private _responseType?: string; 
  public get responseType() {
    return this.getStringAttribute('response_type');
  }
  public set responseType(value: string) {
    this._responseType = value;
  }
  public resetResponseType() {
    this._responseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypeInput() {
    return this._responseType;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // use_cookies_for_intermediate_steps - computed: true, optional: true, required: false
  private _useCookiesForIntermediateSteps?: boolean | cdktf.IResolvable; 
  public get useCookiesForIntermediateSteps() {
    return this.getBooleanAttribute('use_cookies_for_intermediate_steps');
  }
  public set useCookiesForIntermediateSteps(value: boolean | cdktf.IResolvable) {
    this._useCookiesForIntermediateSteps = value;
  }
  public resetUseCookiesForIntermediateSteps() {
    this._useCookiesForIntermediateSteps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCookiesForIntermediateStepsInput() {
    return this._useCookiesForIntermediateSteps;
  }

  // use_cookies_for_session - computed: true, optional: true, required: false
  private _useCookiesForSession?: boolean | cdktf.IResolvable; 
  public get useCookiesForSession() {
    return this.getBooleanAttribute('use_cookies_for_session');
  }
  public set useCookiesForSession(value: boolean | cdktf.IResolvable) {
    this._useCookiesForSession = value;
  }
  public resetUseCookiesForSession() {
    this._useCookiesForSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCookiesForSessionInput() {
    return this._useCookiesForSession;
  }

  // use_pkce - computed: true, optional: true, required: false
  private _usePkce?: boolean | cdktf.IResolvable; 
  public get usePkce() {
    return this.getBooleanAttribute('use_pkce');
  }
  public set usePkce(value: boolean | cdktf.IResolvable) {
    this._usePkce = value;
  }
  public resetUsePkce() {
    this._usePkce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePkceInput() {
    return this._usePkce;
  }

  // client_details - computed: false, optional: true, required: false
  private _clientDetails = new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetailsOutputReference(this, "client_details");
  public get clientDetails() {
    return this._clientDetails;
  }
  public putClientDetails(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetails) {
    this._clientDetails.internalValue = value;
  }
  public resetClientDetails() {
    this._clientDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDetailsInput() {
    return this._clientDetails.internalValue;
  }

  // response_header_transformations - computed: false, optional: true, required: false
  private _responseHeaderTransformations = new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsOutputReference(this, "response_header_transformations");
  public get responseHeaderTransformations() {
    return this._responseHeaderTransformations;
  }
  public putResponseHeaderTransformations(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformations) {
    this._responseHeaderTransformations.internalValue = value;
  }
  public resetResponseHeaderTransformations() {
    this._responseHeaderTransformations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderTransformationsInput() {
    return this._responseHeaderTransformations.internalValue;
  }

  // source_uri_details - computed: false, optional: true, required: false
  private _sourceUriDetails = new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetailsOutputReference(this, "source_uri_details");
  public get sourceUriDetails() {
    return this._sourceUriDetails;
  }
  public putSourceUriDetails(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetails) {
    this._sourceUriDetails.internalValue = value;
  }
  public resetSourceUriDetails() {
    this._sourceUriDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUriDetailsInput() {
    return this._sourceUriDetails.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#is_required ApigatewayDeployment#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#key ApigatewayDeployment#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#values ApigatewayDeployment#values}
  */
  readonly values?: string[];
}

export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaimsToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_required: cdktf.booleanToTerraform(struct!.isRequired),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaimsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_required: {
      value: cdktf.booleanToHclTerraform(struct!.isRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRequired = this._isRequired;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isRequired = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isRequired = value.isRequired;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // is_required - computed: true, optional: true, required: false
  private _isRequired?: boolean | cdktf.IResolvable; 
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }
  public set isRequired(value: boolean | cdktf.IResolvable) {
    this._isRequired = value;
  }
  public resetIsRequired() {
    this._isRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRequiredInput() {
    return this._isRequired;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaimsList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaims[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaimsOutputReference {
    return new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#audiences ApigatewayDeployment#audiences}
  */
  readonly audiences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#issuers ApigatewayDeployment#issuers}
  */
  readonly issuers?: string[];
  /**
  * verify_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#verify_claims ApigatewayDeployment#verify_claims}
  */
  readonly verifyClaims?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaims[] | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
    issuers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.issuers),
    verify_claims: cdktf.listMapper(apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaimsToTerraform, true)(struct!.verifyClaims),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    issuers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.issuers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verify_claims: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaimsToHclTerraform, true)(struct!.verifyClaims),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaimsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
    }
    if (this._issuers !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuers = this._issuers;
    }
    if (this._verifyClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyClaims = this._verifyClaims?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audiences = undefined;
      this._issuers = undefined;
      this._verifyClaims.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audiences = value.audiences;
      this._issuers = value.issuers;
      this._verifyClaims.internalValue = value.verifyClaims;
    }
  }

  // audiences - computed: true, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
  }

  // issuers - computed: true, optional: true, required: false
  private _issuers?: string[]; 
  public get issuers() {
    return this.getListAttribute('issuers');
  }
  public set issuers(value: string[]) {
    this._issuers = value;
  }
  public resetIssuers() {
    this._issuers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuersInput() {
    return this._issuers;
  }

  // verify_claims - computed: false, optional: true, required: false
  private _verifyClaims = new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaimsList(this, "verify_claims", false);
  public get verifyClaims() {
    return this._verifyClaims;
  }
  public putVerifyClaims(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaims[] | cdktf.IResolvable) {
    this._verifyClaims.internalValue = value;
  }
  public resetVerifyClaims() {
    this._verifyClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyClaimsInput() {
    return this._verifyClaims.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#client_id ApigatewayDeployment#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#client_secret_id ApigatewayDeployment#client_secret_id}
  */
  readonly clientSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#client_secret_version_number ApigatewayDeployment#client_secret_version_number}
  */
  readonly clientSecretVersionNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
}

export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetailsToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetailsOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret_id: cdktf.stringToTerraform(struct!.clientSecretId),
    client_secret_version_number: cdktf.stringToTerraform(struct!.clientSecretVersionNumber),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetailsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetailsOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_version_number: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretId = this._clientSecretId;
    }
    if (this._clientSecretVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretVersionNumber = this._clientSecretVersionNumber;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecretId = undefined;
      this._clientSecretVersionNumber = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecretId = value.clientSecretId;
      this._clientSecretVersionNumber = value.clientSecretVersionNumber;
      this._type = value.type;
    }
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret_id - computed: true, optional: true, required: false
  private _clientSecretId?: string; 
  public get clientSecretId() {
    return this.getStringAttribute('client_secret_id');
  }
  public set clientSecretId(value: string) {
    this._clientSecretId = value;
  }
  public resetClientSecretId() {
    this._clientSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretIdInput() {
    return this._clientSecretId;
  }

  // client_secret_version_number - computed: true, optional: true, required: false
  private _clientSecretVersionNumber?: string; 
  public get clientSecretVersionNumber() {
    return this.getStringAttribute('client_secret_version_number');
  }
  public set clientSecretVersionNumber(value: string) {
    this._clientSecretVersionNumber = value;
  }
  public resetClientSecretVersionNumber() {
    this._clientSecretVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretVersionNumberInput() {
    return this._clientSecretVersionNumber;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#alg ApigatewayDeployment#alg}
  */
  readonly alg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#e ApigatewayDeployment#e}
  */
  readonly e?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#format ApigatewayDeployment#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#key ApigatewayDeployment#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#key_ops ApigatewayDeployment#key_ops}
  */
  readonly keyOps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#kid ApigatewayDeployment#kid}
  */
  readonly kid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#kty ApigatewayDeployment#kty}
  */
  readonly kty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#n ApigatewayDeployment#n}
  */
  readonly n?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#use ApigatewayDeployment#use}
  */
  readonly use?: string;
}

export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeysToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alg: cdktf.stringToTerraform(struct!.alg),
    e: cdktf.stringToTerraform(struct!.e),
    format: cdktf.stringToTerraform(struct!.format),
    key: cdktf.stringToTerraform(struct!.key),
    key_ops: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyOps),
    kid: cdktf.stringToTerraform(struct!.kid),
    kty: cdktf.stringToTerraform(struct!.kty),
    n: cdktf.stringToTerraform(struct!.n),
    use: cdktf.stringToTerraform(struct!.use),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeysToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alg: {
      value: cdktf.stringToHclTerraform(struct!.alg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e: {
      value: cdktf.stringToHclTerraform(struct!.e),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_ops: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyOps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kid: {
      value: cdktf.stringToHclTerraform(struct!.kid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kty: {
      value: cdktf.stringToHclTerraform(struct!.kty),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    n: {
      value: cdktf.stringToHclTerraform(struct!.n),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use: {
      value: cdktf.stringToHclTerraform(struct!.use),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alg !== undefined) {
      hasAnyValues = true;
      internalValueResult.alg = this._alg;
    }
    if (this._e !== undefined) {
      hasAnyValues = true;
      internalValueResult.e = this._e;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._keyOps !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyOps = this._keyOps;
    }
    if (this._kid !== undefined) {
      hasAnyValues = true;
      internalValueResult.kid = this._kid;
    }
    if (this._kty !== undefined) {
      hasAnyValues = true;
      internalValueResult.kty = this._kty;
    }
    if (this._n !== undefined) {
      hasAnyValues = true;
      internalValueResult.n = this._n;
    }
    if (this._use !== undefined) {
      hasAnyValues = true;
      internalValueResult.use = this._use;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alg = undefined;
      this._e = undefined;
      this._format = undefined;
      this._key = undefined;
      this._keyOps = undefined;
      this._kid = undefined;
      this._kty = undefined;
      this._n = undefined;
      this._use = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alg = value.alg;
      this._e = value.e;
      this._format = value.format;
      this._key = value.key;
      this._keyOps = value.keyOps;
      this._kid = value.kid;
      this._kty = value.kty;
      this._n = value.n;
      this._use = value.use;
    }
  }

  // alg - computed: true, optional: true, required: false
  private _alg?: string; 
  public get alg() {
    return this.getStringAttribute('alg');
  }
  public set alg(value: string) {
    this._alg = value;
  }
  public resetAlg() {
    this._alg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algInput() {
    return this._alg;
  }

  // e - computed: true, optional: true, required: false
  private _e?: string; 
  public get e() {
    return this.getStringAttribute('e');
  }
  public set e(value: string) {
    this._e = value;
  }
  public resetE() {
    this._e = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eInput() {
    return this._e;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_ops - computed: true, optional: true, required: false
  private _keyOps?: string[]; 
  public get keyOps() {
    return this.getListAttribute('key_ops');
  }
  public set keyOps(value: string[]) {
    this._keyOps = value;
  }
  public resetKeyOps() {
    this._keyOps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyOpsInput() {
    return this._keyOps;
  }

  // kid - computed: true, optional: true, required: false
  private _kid?: string; 
  public get kid() {
    return this.getStringAttribute('kid');
  }
  public set kid(value: string) {
    this._kid = value;
  }
  public resetKid() {
    this._kid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kidInput() {
    return this._kid;
  }

  // kty - computed: true, optional: true, required: false
  private _kty?: string; 
  public get kty() {
    return this.getStringAttribute('kty');
  }
  public set kty(value: string) {
    this._kty = value;
  }
  public resetKty() {
    this._kty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ktyInput() {
    return this._kty;
  }

  // n - computed: true, optional: true, required: false
  private _n?: string; 
  public get n() {
    return this.getStringAttribute('n');
  }
  public set n(value: string) {
    this._n = value;
  }
  public resetN() {
    this._n = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nInput() {
    return this._n;
  }

  // use - computed: true, optional: true, required: false
  private _use?: string; 
  public get use() {
    return this.getStringAttribute('use');
  }
  public set use(value: string) {
    this._use = value;
  }
  public resetUse() {
    this._use = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInput() {
    return this._use;
  }
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeysList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeys[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeysOutputReference {
    return new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#uri ApigatewayDeployment#uri}
  */
  readonly uri?: string;
}

export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetailsToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetailsOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetailsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetailsOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._uri = value.uri;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uri - computed: true, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#is_ssl_verify_disabled ApigatewayDeployment#is_ssl_verify_disabled}
  */
  readonly isSslVerifyDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#max_cache_duration_in_hours ApigatewayDeployment#max_cache_duration_in_hours}
  */
  readonly maxCacheDurationInHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#uri ApigatewayDeployment#uri}
  */
  readonly uri?: string;
  /**
  * additional_validation_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#additional_validation_policy ApigatewayDeployment#additional_validation_policy}
  */
  readonly additionalValidationPolicy?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicy;
  /**
  * client_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#client_details ApigatewayDeployment#client_details}
  */
  readonly clientDetails?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetails;
  /**
  * keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#keys ApigatewayDeployment#keys}
  */
  readonly keys?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeys[] | cdktf.IResolvable;
  /**
  * source_uri_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#source_uri_details ApigatewayDeployment#source_uri_details}
  */
  readonly sourceUriDetails?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetails;
}

export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_ssl_verify_disabled: cdktf.booleanToTerraform(struct!.isSslVerifyDisabled),
    max_cache_duration_in_hours: cdktf.numberToTerraform(struct!.maxCacheDurationInHours),
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
    additional_validation_policy: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyToTerraform(struct!.additionalValidationPolicy),
    client_details: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetailsToTerraform(struct!.clientDetails),
    keys: cdktf.listMapper(apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeysToTerraform, true)(struct!.keys),
    source_uri_details: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetailsToTerraform(struct!.sourceUriDetails),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_ssl_verify_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isSslVerifyDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_cache_duration_in_hours: {
      value: cdktf.numberToHclTerraform(struct!.maxCacheDurationInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_validation_policy: {
      value: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyToHclTerraform(struct!.additionalValidationPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyList",
    },
    client_details: {
      value: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetailsToHclTerraform(struct!.clientDetails),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetailsList",
    },
    keys: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeysToHclTerraform, true)(struct!.keys),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeysList",
    },
    source_uri_details: {
      value: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetailsToHclTerraform(struct!.sourceUriDetails),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isSslVerifyDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSslVerifyDisabled = this._isSslVerifyDisabled;
    }
    if (this._maxCacheDurationInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCacheDurationInHours = this._maxCacheDurationInHours;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._additionalValidationPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalValidationPolicy = this._additionalValidationPolicy?.internalValue;
    }
    if (this._clientDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientDetails = this._clientDetails?.internalValue;
    }
    if (this._keys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys?.internalValue;
    }
    if (this._sourceUriDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUriDetails = this._sourceUriDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isSslVerifyDisabled = undefined;
      this._maxCacheDurationInHours = undefined;
      this._type = undefined;
      this._uri = undefined;
      this._additionalValidationPolicy.internalValue = undefined;
      this._clientDetails.internalValue = undefined;
      this._keys.internalValue = undefined;
      this._sourceUriDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isSslVerifyDisabled = value.isSslVerifyDisabled;
      this._maxCacheDurationInHours = value.maxCacheDurationInHours;
      this._type = value.type;
      this._uri = value.uri;
      this._additionalValidationPolicy.internalValue = value.additionalValidationPolicy;
      this._clientDetails.internalValue = value.clientDetails;
      this._keys.internalValue = value.keys;
      this._sourceUriDetails.internalValue = value.sourceUriDetails;
    }
  }

  // is_ssl_verify_disabled - computed: true, optional: true, required: false
  private _isSslVerifyDisabled?: boolean | cdktf.IResolvable; 
  public get isSslVerifyDisabled() {
    return this.getBooleanAttribute('is_ssl_verify_disabled');
  }
  public set isSslVerifyDisabled(value: boolean | cdktf.IResolvable) {
    this._isSslVerifyDisabled = value;
  }
  public resetIsSslVerifyDisabled() {
    this._isSslVerifyDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSslVerifyDisabledInput() {
    return this._isSslVerifyDisabled;
  }

  // max_cache_duration_in_hours - computed: true, optional: true, required: false
  private _maxCacheDurationInHours?: number; 
  public get maxCacheDurationInHours() {
    return this.getNumberAttribute('max_cache_duration_in_hours');
  }
  public set maxCacheDurationInHours(value: number) {
    this._maxCacheDurationInHours = value;
  }
  public resetMaxCacheDurationInHours() {
    this._maxCacheDurationInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCacheDurationInHoursInput() {
    return this._maxCacheDurationInHours;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uri - computed: true, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // additional_validation_policy - computed: false, optional: true, required: false
  private _additionalValidationPolicy = new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyOutputReference(this, "additional_validation_policy");
  public get additionalValidationPolicy() {
    return this._additionalValidationPolicy;
  }
  public putAdditionalValidationPolicy(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicy) {
    this._additionalValidationPolicy.internalValue = value;
  }
  public resetAdditionalValidationPolicy() {
    this._additionalValidationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalValidationPolicyInput() {
    return this._additionalValidationPolicy.internalValue;
  }

  // client_details - computed: false, optional: true, required: false
  private _clientDetails = new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetailsOutputReference(this, "client_details");
  public get clientDetails() {
    return this._clientDetails;
  }
  public putClientDetails(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetails) {
    this._clientDetails.internalValue = value;
  }
  public resetClientDetails() {
    this._clientDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDetailsInput() {
    return this._clientDetails.internalValue;
  }

  // keys - computed: false, optional: true, required: false
  private _keys = new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeysList(this, "keys", false);
  public get keys() {
    return this._keys;
  }
  public putKeys(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeys[] | cdktf.IResolvable) {
    this._keys.internalValue = value;
  }
  public resetKeys() {
    this._keys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys.internalValue;
  }

  // source_uri_details - computed: false, optional: true, required: false
  private _sourceUriDetails = new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetailsOutputReference(this, "source_uri_details");
  public get sourceUriDetails() {
    return this._sourceUriDetails;
  }
  public putSourceUriDetails(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetails) {
    this._sourceUriDetails.internalValue = value;
  }
  public resetSourceUriDetails() {
    this._sourceUriDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUriDetailsInput() {
    return this._sourceUriDetails.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#is_required ApigatewayDeployment#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#key ApigatewayDeployment#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#values ApigatewayDeployment#values}
  */
  readonly values?: string[];
}

export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaimsToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_required: cdktf.booleanToTerraform(struct!.isRequired),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaimsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_required: {
      value: cdktf.booleanToHclTerraform(struct!.isRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRequired = this._isRequired;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isRequired = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isRequired = value.isRequired;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // is_required - computed: true, optional: true, required: false
  private _isRequired?: boolean | cdktf.IResolvable; 
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }
  public set isRequired(value: boolean | cdktf.IResolvable) {
    this._isRequired = value;
  }
  public resetIsRequired() {
    this._isRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRequiredInput() {
    return this._isRequired;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaimsList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaims[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaimsOutputReference {
    return new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#audiences ApigatewayDeployment#audiences}
  */
  readonly audiences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#cache_key ApigatewayDeployment#cache_key}
  */
  readonly cacheKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#function_id ApigatewayDeployment#function_id}
  */
  readonly functionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#is_anonymous_access_allowed ApigatewayDeployment#is_anonymous_access_allowed}
  */
  readonly isAnonymousAccessAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#issuers ApigatewayDeployment#issuers}
  */
  readonly issuers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#max_clock_skew_in_seconds ApigatewayDeployment#max_clock_skew_in_seconds}
  */
  readonly maxClockSkewInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#parameters ApigatewayDeployment#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#token_auth_scheme ApigatewayDeployment#token_auth_scheme}
  */
  readonly tokenAuthScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#token_header ApigatewayDeployment#token_header}
  */
  readonly tokenHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#token_query_param ApigatewayDeployment#token_query_param}
  */
  readonly tokenQueryParam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
  /**
  * public_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#public_keys ApigatewayDeployment#public_keys}
  */
  readonly publicKeys?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeys;
  /**
  * validation_failure_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#validation_failure_policy ApigatewayDeployment#validation_failure_policy}
  */
  readonly validationFailurePolicy?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicy;
  /**
  * validation_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#validation_policy ApigatewayDeployment#validation_policy}
  */
  readonly validationPolicy?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicy;
  /**
  * verify_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#verify_claims ApigatewayDeployment#verify_claims}
  */
  readonly verifyClaims?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaims[] | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
    cache_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cacheKey),
    function_id: cdktf.stringToTerraform(struct!.functionId),
    is_anonymous_access_allowed: cdktf.booleanToTerraform(struct!.isAnonymousAccessAllowed),
    issuers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.issuers),
    max_clock_skew_in_seconds: cdktf.numberToTerraform(struct!.maxClockSkewInSeconds),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    token_auth_scheme: cdktf.stringToTerraform(struct!.tokenAuthScheme),
    token_header: cdktf.stringToTerraform(struct!.tokenHeader),
    token_query_param: cdktf.stringToTerraform(struct!.tokenQueryParam),
    type: cdktf.stringToTerraform(struct!.type),
    public_keys: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysToTerraform(struct!.publicKeys),
    validation_failure_policy: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyToTerraform(struct!.validationFailurePolicy),
    validation_policy: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyToTerraform(struct!.validationPolicy),
    verify_claims: cdktf.listMapper(apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaimsToTerraform, true)(struct!.verifyClaims),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cache_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cacheKey),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    function_id: {
      value: cdktf.stringToHclTerraform(struct!.functionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_anonymous_access_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.isAnonymousAccessAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    issuers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.issuers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_clock_skew_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxClockSkewInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    token_auth_scheme: {
      value: cdktf.stringToHclTerraform(struct!.tokenAuthScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_header: {
      value: cdktf.stringToHclTerraform(struct!.tokenHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_query_param: {
      value: cdktf.stringToHclTerraform(struct!.tokenQueryParam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_keys: {
      value: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysToHclTerraform(struct!.publicKeys),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysList",
    },
    validation_failure_policy: {
      value: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyToHclTerraform(struct!.validationFailurePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyList",
    },
    validation_policy: {
      value: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyToHclTerraform(struct!.validationPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyList",
    },
    verify_claims: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaimsToHclTerraform, true)(struct!.verifyClaims),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaimsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
    }
    if (this._cacheKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheKey = this._cacheKey;
    }
    if (this._functionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionId = this._functionId;
    }
    if (this._isAnonymousAccessAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAnonymousAccessAllowed = this._isAnonymousAccessAllowed;
    }
    if (this._issuers !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuers = this._issuers;
    }
    if (this._maxClockSkewInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxClockSkewInSeconds = this._maxClockSkewInSeconds;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._tokenAuthScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenAuthScheme = this._tokenAuthScheme;
    }
    if (this._tokenHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenHeader = this._tokenHeader;
    }
    if (this._tokenQueryParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenQueryParam = this._tokenQueryParam;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._publicKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeys = this._publicKeys?.internalValue;
    }
    if (this._validationFailurePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationFailurePolicy = this._validationFailurePolicy?.internalValue;
    }
    if (this._validationPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationPolicy = this._validationPolicy?.internalValue;
    }
    if (this._verifyClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyClaims = this._verifyClaims?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audiences = undefined;
      this._cacheKey = undefined;
      this._functionId = undefined;
      this._isAnonymousAccessAllowed = undefined;
      this._issuers = undefined;
      this._maxClockSkewInSeconds = undefined;
      this._parameters = undefined;
      this._tokenAuthScheme = undefined;
      this._tokenHeader = undefined;
      this._tokenQueryParam = undefined;
      this._type = undefined;
      this._publicKeys.internalValue = undefined;
      this._validationFailurePolicy.internalValue = undefined;
      this._validationPolicy.internalValue = undefined;
      this._verifyClaims.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audiences = value.audiences;
      this._cacheKey = value.cacheKey;
      this._functionId = value.functionId;
      this._isAnonymousAccessAllowed = value.isAnonymousAccessAllowed;
      this._issuers = value.issuers;
      this._maxClockSkewInSeconds = value.maxClockSkewInSeconds;
      this._parameters = value.parameters;
      this._tokenAuthScheme = value.tokenAuthScheme;
      this._tokenHeader = value.tokenHeader;
      this._tokenQueryParam = value.tokenQueryParam;
      this._type = value.type;
      this._publicKeys.internalValue = value.publicKeys;
      this._validationFailurePolicy.internalValue = value.validationFailurePolicy;
      this._validationPolicy.internalValue = value.validationPolicy;
      this._verifyClaims.internalValue = value.verifyClaims;
    }
  }

  // audiences - computed: true, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
  }

  // cache_key - computed: true, optional: true, required: false
  private _cacheKey?: string[]; 
  public get cacheKey() {
    return this.getListAttribute('cache_key');
  }
  public set cacheKey(value: string[]) {
    this._cacheKey = value;
  }
  public resetCacheKey() {
    this._cacheKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheKeyInput() {
    return this._cacheKey;
  }

  // function_id - computed: true, optional: true, required: false
  private _functionId?: string; 
  public get functionId() {
    return this.getStringAttribute('function_id');
  }
  public set functionId(value: string) {
    this._functionId = value;
  }
  public resetFunctionId() {
    this._functionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionIdInput() {
    return this._functionId;
  }

  // is_anonymous_access_allowed - computed: true, optional: true, required: false
  private _isAnonymousAccessAllowed?: boolean | cdktf.IResolvable; 
  public get isAnonymousAccessAllowed() {
    return this.getBooleanAttribute('is_anonymous_access_allowed');
  }
  public set isAnonymousAccessAllowed(value: boolean | cdktf.IResolvable) {
    this._isAnonymousAccessAllowed = value;
  }
  public resetIsAnonymousAccessAllowed() {
    this._isAnonymousAccessAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAnonymousAccessAllowedInput() {
    return this._isAnonymousAccessAllowed;
  }

  // issuers - computed: true, optional: true, required: false
  private _issuers?: string[]; 
  public get issuers() {
    return this.getListAttribute('issuers');
  }
  public set issuers(value: string[]) {
    this._issuers = value;
  }
  public resetIssuers() {
    this._issuers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuersInput() {
    return this._issuers;
  }

  // max_clock_skew_in_seconds - computed: true, optional: true, required: false
  private _maxClockSkewInSeconds?: number; 
  public get maxClockSkewInSeconds() {
    return this.getNumberAttribute('max_clock_skew_in_seconds');
  }
  public set maxClockSkewInSeconds(value: number) {
    this._maxClockSkewInSeconds = value;
  }
  public resetMaxClockSkewInSeconds() {
    this._maxClockSkewInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClockSkewInSecondsInput() {
    return this._maxClockSkewInSeconds;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // token_auth_scheme - computed: true, optional: true, required: false
  private _tokenAuthScheme?: string; 
  public get tokenAuthScheme() {
    return this.getStringAttribute('token_auth_scheme');
  }
  public set tokenAuthScheme(value: string) {
    this._tokenAuthScheme = value;
  }
  public resetTokenAuthScheme() {
    this._tokenAuthScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthSchemeInput() {
    return this._tokenAuthScheme;
  }

  // token_header - computed: true, optional: true, required: false
  private _tokenHeader?: string; 
  public get tokenHeader() {
    return this.getStringAttribute('token_header');
  }
  public set tokenHeader(value: string) {
    this._tokenHeader = value;
  }
  public resetTokenHeader() {
    this._tokenHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenHeaderInput() {
    return this._tokenHeader;
  }

  // token_query_param - computed: true, optional: true, required: false
  private _tokenQueryParam?: string; 
  public get tokenQueryParam() {
    return this.getStringAttribute('token_query_param');
  }
  public set tokenQueryParam(value: string) {
    this._tokenQueryParam = value;
  }
  public resetTokenQueryParam() {
    this._tokenQueryParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenQueryParamInput() {
    return this._tokenQueryParam;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // public_keys - computed: false, optional: true, required: false
  private _publicKeys = new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysOutputReference(this, "public_keys");
  public get publicKeys() {
    return this._publicKeys;
  }
  public putPublicKeys(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeys) {
    this._publicKeys.internalValue = value;
  }
  public resetPublicKeys() {
    this._publicKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeysInput() {
    return this._publicKeys.internalValue;
  }

  // validation_failure_policy - computed: false, optional: true, required: false
  private _validationFailurePolicy = new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyOutputReference(this, "validation_failure_policy");
  public get validationFailurePolicy() {
    return this._validationFailurePolicy;
  }
  public putValidationFailurePolicy(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicy) {
    this._validationFailurePolicy.internalValue = value;
  }
  public resetValidationFailurePolicy() {
    this._validationFailurePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationFailurePolicyInput() {
    return this._validationFailurePolicy.internalValue;
  }

  // validation_policy - computed: false, optional: true, required: false
  private _validationPolicy = new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyOutputReference(this, "validation_policy");
  public get validationPolicy() {
    return this._validationPolicy;
  }
  public putValidationPolicy(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicy) {
    this._validationPolicy.internalValue = value;
  }
  public resetValidationPolicy() {
    this._validationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationPolicyInput() {
    return this._validationPolicy.internalValue;
  }

  // verify_claims - computed: false, optional: true, required: false
  private _verifyClaims = new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaimsList(this, "verify_claims", false);
  public get verifyClaims() {
    return this._verifyClaims;
  }
  public putVerifyClaims(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaims[] | cdktf.IResolvable) {
    this._verifyClaims.internalValue = value;
  }
  public resetVerifyClaims() {
    this._verifyClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyClaimsInput() {
    return this._verifyClaims.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#expression ApigatewayDeployment#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#is_default ApigatewayDeployment#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#name ApigatewayDeployment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#values ApigatewayDeployment#values}
  */
  readonly values?: string[];
}

export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKeyToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKeyOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKeyToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKeyOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_default: {
      value: cdktf.booleanToHclTerraform(struct!.isDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
      this._isDefault = undefined;
      this._name = undefined;
      this._type = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
      this._isDefault = value.isDefault;
      this._name = value.name;
      this._type = value.type;
      this._values = value.values;
    }
  }

  // expression - computed: true, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // is_default - computed: true, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
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

  // type - computed: true, optional: true, required: false
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

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServers {
  /**
  * authentication_server_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#authentication_server_detail ApigatewayDeployment#authentication_server_detail}
  */
  readonly authenticationServerDetail: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetail;
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#key ApigatewayDeployment#key}
  */
  readonly key: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKey;
}

export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_server_detail: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailToTerraform(struct!.authenticationServerDetail),
    key: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKeyToTerraform(struct!.key),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_server_detail: {
      value: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailToHclTerraform(struct!.authenticationServerDetail),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailList",
    },
    key: {
      value: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKeyToHclTerraform(struct!.key),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationServerDetail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationServerDetail = this._authenticationServerDetail?.internalValue;
    }
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationServerDetail.internalValue = undefined;
      this._key.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationServerDetail.internalValue = value.authenticationServerDetail;
      this._key.internalValue = value.key;
    }
  }

  // authentication_server_detail - computed: false, optional: false, required: true
  private _authenticationServerDetail = new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailOutputReference(this, "authentication_server_detail");
  public get authenticationServerDetail() {
    return this._authenticationServerDetail;
  }
  public putAuthenticationServerDetail(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetail) {
    this._authenticationServerDetail.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationServerDetailInput() {
    return this._authenticationServerDetail.internalValue;
  }

  // key - computed: false, optional: false, required: true
  private _key = new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKeyOutputReference(this, "key");
  public get key() {
    return this._key;
  }
  public putKey(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKey) {
    this._key.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServers[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersOutputReference {
    return new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#selector ApigatewayDeployment#selector}
  */
  readonly selector: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
}

export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSourceToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSourceOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: cdktf.stringToTerraform(struct!.selector),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSourceToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSourceOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selector = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selector = value.selector;
      this._type = value.type;
    }
  }

  // selector - computed: false, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthentication {
  /**
  * authentication_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#authentication_servers ApigatewayDeployment#authentication_servers}
  */
  readonly authenticationServers: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServers[] | cdktf.IResolvable;
  /**
  * selection_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#selection_source ApigatewayDeployment#selection_source}
  */
  readonly selectionSource: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSource;
}

export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_servers: cdktf.listMapper(apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersToTerraform, true)(struct!.authenticationServers),
    selection_source: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSourceToTerraform(struct!.selectionSource),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_servers: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersToHclTerraform, true)(struct!.authenticationServers),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersList",
    },
    selection_source: {
      value: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSourceToHclTerraform(struct!.selectionSource),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationServers = this._authenticationServers?.internalValue;
    }
    if (this._selectionSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionSource = this._selectionSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationServers.internalValue = undefined;
      this._selectionSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationServers.internalValue = value.authenticationServers;
      this._selectionSource.internalValue = value.selectionSource;
    }
  }

  // authentication_servers - computed: false, optional: false, required: true
  private _authenticationServers = new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersList(this, "authentication_servers", false);
  public get authenticationServers() {
    return this._authenticationServers;
  }
  public putAuthenticationServers(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServers[] | cdktf.IResolvable) {
    this._authenticationServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationServersInput() {
    return this._authenticationServers.internalValue;
  }

  // selection_source - computed: false, optional: false, required: true
  private _selectionSource = new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSourceOutputReference(this, "selection_source");
  public get selectionSource() {
    return this._selectionSource;
  }
  public putSelectionSource(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSource) {
    this._selectionSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionSourceInput() {
    return this._selectionSource.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesMutualTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#allowed_sans ApigatewayDeployment#allowed_sans}
  */
  readonly allowedSans?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#is_verified_certificate_required ApigatewayDeployment#is_verified_certificate_required}
  */
  readonly isVerifiedCertificateRequired?: boolean | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRequestPoliciesMutualTlsToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesMutualTlsOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesMutualTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedSans),
    is_verified_certificate_required: cdktf.booleanToTerraform(struct!.isVerifiedCertificateRequired),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesMutualTlsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesMutualTlsOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesMutualTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_sans: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedSans),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_verified_certificate_required: {
      value: cdktf.booleanToHclTerraform(struct!.isVerifiedCertificateRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesMutualTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesMutualTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedSans !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedSans = this._allowedSans;
    }
    if (this._isVerifiedCertificateRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isVerifiedCertificateRequired = this._isVerifiedCertificateRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesMutualTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedSans = undefined;
      this._isVerifiedCertificateRequired = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedSans = value.allowedSans;
      this._isVerifiedCertificateRequired = value.isVerifiedCertificateRequired;
    }
  }

  // allowed_sans - computed: true, optional: true, required: false
  private _allowedSans?: string[]; 
  public get allowedSans() {
    return this.getListAttribute('allowed_sans');
  }
  public set allowedSans(value: string[]) {
    this._allowedSans = value;
  }
  public resetAllowedSans() {
    this._allowedSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSansInput() {
    return this._allowedSans;
  }

  // is_verified_certificate_required - computed: true, optional: true, required: false
  private _isVerifiedCertificateRequired?: boolean | cdktf.IResolvable; 
  public get isVerifiedCertificateRequired() {
    return this.getBooleanAttribute('is_verified_certificate_required');
  }
  public set isVerifiedCertificateRequired(value: boolean | cdktf.IResolvable) {
    this._isVerifiedCertificateRequired = value;
  }
  public resetIsVerifiedCertificateRequired() {
    this._isVerifiedCertificateRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isVerifiedCertificateRequiredInput() {
    return this._isVerifiedCertificateRequired;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesRateLimiting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#rate_in_requests_per_second ApigatewayDeployment#rate_in_requests_per_second}
  */
  readonly rateInRequestsPerSecond: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#rate_key ApigatewayDeployment#rate_key}
  */
  readonly rateKey: string;
}

export function apigatewayDeploymentSpecificationRequestPoliciesRateLimitingToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesRateLimitingOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesRateLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate_in_requests_per_second: cdktf.numberToTerraform(struct!.rateInRequestsPerSecond),
    rate_key: cdktf.stringToTerraform(struct!.rateKey),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesRateLimitingToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesRateLimitingOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesRateLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate_in_requests_per_second: {
      value: cdktf.numberToHclTerraform(struct!.rateInRequestsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_key: {
      value: cdktf.stringToHclTerraform(struct!.rateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesRateLimitingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesRateLimiting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rateInRequestsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateInRequestsPerSecond = this._rateInRequestsPerSecond;
    }
    if (this._rateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateKey = this._rateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesRateLimiting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rateInRequestsPerSecond = undefined;
      this._rateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rateInRequestsPerSecond = value.rateInRequestsPerSecond;
      this._rateKey = value.rateKey;
    }
  }

  // rate_in_requests_per_second - computed: false, optional: false, required: true
  private _rateInRequestsPerSecond?: number; 
  public get rateInRequestsPerSecond() {
    return this.getNumberAttribute('rate_in_requests_per_second');
  }
  public set rateInRequestsPerSecond(value: number) {
    this._rateInRequestsPerSecond = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInRequestsPerSecondInput() {
    return this._rateInRequestsPerSecond;
  }

  // rate_key - computed: false, optional: false, required: true
  private _rateKey?: string; 
  public get rateKey() {
    return this.getStringAttribute('rate_key');
  }
  public set rateKey(value: string) {
    this._rateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateKeyInput() {
    return this._rateKey;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPoliciesUsagePlans {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#token_locations ApigatewayDeployment#token_locations}
  */
  readonly tokenLocations: string[];
}

export function apigatewayDeploymentSpecificationRequestPoliciesUsagePlansToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesUsagePlansOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesUsagePlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tokenLocations),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesUsagePlansToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesUsagePlansOutputReference | ApigatewayDeploymentSpecificationRequestPoliciesUsagePlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token_locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tokenLocations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesUsagePlansOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPoliciesUsagePlans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tokenLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenLocations = this._tokenLocations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPoliciesUsagePlans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tokenLocations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tokenLocations = value.tokenLocations;
    }
  }

  // token_locations - computed: false, optional: false, required: true
  private _tokenLocations?: string[]; 
  public get tokenLocations() {
    return this.getListAttribute('token_locations');
  }
  public set tokenLocations(value: string[]) {
    this._tokenLocations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenLocationsInput() {
    return this._tokenLocations;
  }
}
export interface ApigatewayDeploymentSpecificationRequestPolicies {
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#authentication ApigatewayDeployment#authentication}
  */
  readonly authentication?: ApigatewayDeploymentSpecificationRequestPoliciesAuthentication;
  /**
  * cors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#cors ApigatewayDeployment#cors}
  */
  readonly cors?: ApigatewayDeploymentSpecificationRequestPoliciesCors;
  /**
  * dynamic_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#dynamic_authentication ApigatewayDeployment#dynamic_authentication}
  */
  readonly dynamicAuthentication?: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthentication;
  /**
  * mutual_tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#mutual_tls ApigatewayDeployment#mutual_tls}
  */
  readonly mutualTls?: ApigatewayDeploymentSpecificationRequestPoliciesMutualTls;
  /**
  * rate_limiting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#rate_limiting ApigatewayDeployment#rate_limiting}
  */
  readonly rateLimiting?: ApigatewayDeploymentSpecificationRequestPoliciesRateLimiting;
  /**
  * usage_plans block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#usage_plans ApigatewayDeployment#usage_plans}
  */
  readonly usagePlans?: ApigatewayDeploymentSpecificationRequestPoliciesUsagePlans;
}

export function apigatewayDeploymentSpecificationRequestPoliciesToTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesOutputReference | ApigatewayDeploymentSpecificationRequestPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: apigatewayDeploymentSpecificationRequestPoliciesAuthenticationToTerraform(struct!.authentication),
    cors: apigatewayDeploymentSpecificationRequestPoliciesCorsToTerraform(struct!.cors),
    dynamic_authentication: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationToTerraform(struct!.dynamicAuthentication),
    mutual_tls: apigatewayDeploymentSpecificationRequestPoliciesMutualTlsToTerraform(struct!.mutualTls),
    rate_limiting: apigatewayDeploymentSpecificationRequestPoliciesRateLimitingToTerraform(struct!.rateLimiting),
    usage_plans: apigatewayDeploymentSpecificationRequestPoliciesUsagePlansToTerraform(struct!.usagePlans),
  }
}


export function apigatewayDeploymentSpecificationRequestPoliciesToHclTerraform(struct?: ApigatewayDeploymentSpecificationRequestPoliciesOutputReference | ApigatewayDeploymentSpecificationRequestPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: apigatewayDeploymentSpecificationRequestPoliciesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationList",
    },
    cors: {
      value: apigatewayDeploymentSpecificationRequestPoliciesCorsToHclTerraform(struct!.cors),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesCorsList",
    },
    dynamic_authentication: {
      value: apigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationToHclTerraform(struct!.dynamicAuthentication),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationList",
    },
    mutual_tls: {
      value: apigatewayDeploymentSpecificationRequestPoliciesMutualTlsToHclTerraform(struct!.mutualTls),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesMutualTlsList",
    },
    rate_limiting: {
      value: apigatewayDeploymentSpecificationRequestPoliciesRateLimitingToHclTerraform(struct!.rateLimiting),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesRateLimitingList",
    },
    usage_plans: {
      value: apigatewayDeploymentSpecificationRequestPoliciesUsagePlansToHclTerraform(struct!.usagePlans),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesUsagePlansList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRequestPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRequestPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._cors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cors = this._cors?.internalValue;
    }
    if (this._dynamicAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicAuthentication = this._dynamicAuthentication?.internalValue;
    }
    if (this._mutualTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mutualTls = this._mutualTls?.internalValue;
    }
    if (this._rateLimiting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiting = this._rateLimiting?.internalValue;
    }
    if (this._usagePlans?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usagePlans = this._usagePlans?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRequestPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication.internalValue = undefined;
      this._cors.internalValue = undefined;
      this._dynamicAuthentication.internalValue = undefined;
      this._mutualTls.internalValue = undefined;
      this._rateLimiting.internalValue = undefined;
      this._usagePlans.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication.internalValue = value.authentication;
      this._cors.internalValue = value.cors;
      this._dynamicAuthentication.internalValue = value.dynamicAuthentication;
      this._mutualTls.internalValue = value.mutualTls;
      this._rateLimiting.internalValue = value.rateLimiting;
      this._usagePlans.internalValue = value.usagePlans;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new ApigatewayDeploymentSpecificationRequestPoliciesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ApigatewayDeploymentSpecificationRequestPoliciesAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // cors - computed: false, optional: true, required: false
  private _cors = new ApigatewayDeploymentSpecificationRequestPoliciesCorsOutputReference(this, "cors");
  public get cors() {
    return this._cors;
  }
  public putCors(value: ApigatewayDeploymentSpecificationRequestPoliciesCors) {
    this._cors.internalValue = value;
  }
  public resetCors() {
    this._cors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors.internalValue;
  }

  // dynamic_authentication - computed: false, optional: true, required: false
  private _dynamicAuthentication = new ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationOutputReference(this, "dynamic_authentication");
  public get dynamicAuthentication() {
    return this._dynamicAuthentication;
  }
  public putDynamicAuthentication(value: ApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthentication) {
    this._dynamicAuthentication.internalValue = value;
  }
  public resetDynamicAuthentication() {
    this._dynamicAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicAuthenticationInput() {
    return this._dynamicAuthentication.internalValue;
  }

  // mutual_tls - computed: false, optional: true, required: false
  private _mutualTls = new ApigatewayDeploymentSpecificationRequestPoliciesMutualTlsOutputReference(this, "mutual_tls");
  public get mutualTls() {
    return this._mutualTls;
  }
  public putMutualTls(value: ApigatewayDeploymentSpecificationRequestPoliciesMutualTls) {
    this._mutualTls.internalValue = value;
  }
  public resetMutualTls() {
    this._mutualTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutualTlsInput() {
    return this._mutualTls.internalValue;
  }

  // rate_limiting - computed: false, optional: true, required: false
  private _rateLimiting = new ApigatewayDeploymentSpecificationRequestPoliciesRateLimitingOutputReference(this, "rate_limiting");
  public get rateLimiting() {
    return this._rateLimiting;
  }
  public putRateLimiting(value: ApigatewayDeploymentSpecificationRequestPoliciesRateLimiting) {
    this._rateLimiting.internalValue = value;
  }
  public resetRateLimiting() {
    this._rateLimiting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitingInput() {
    return this._rateLimiting.internalValue;
  }

  // usage_plans - computed: false, optional: true, required: false
  private _usagePlans = new ApigatewayDeploymentSpecificationRequestPoliciesUsagePlansOutputReference(this, "usage_plans");
  public get usagePlans() {
    return this._usagePlans;
  }
  public putUsagePlans(value: ApigatewayDeploymentSpecificationRequestPoliciesUsagePlans) {
    this._usagePlans.internalValue = value;
  }
  public resetUsagePlans() {
    this._usagePlans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usagePlansInput() {
    return this._usagePlans.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesBackendHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#name ApigatewayDeployment#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#value ApigatewayDeployment#value}
  */
  readonly value?: string;
}

export function apigatewayDeploymentSpecificationRoutesBackendHeadersToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesBackendHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apigatewayDeploymentSpecificationRoutesBackendHeadersToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesBackendHeaders | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesBackendHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesBackendHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesBackendHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApigatewayDeploymentSpecificationRoutesBackendHeadersList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRoutesBackendHeaders[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRoutesBackendHeadersOutputReference {
    return new ApigatewayDeploymentSpecificationRoutesBackendHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendHeaders {
}

export function apigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendHeadersToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendHeadersToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendHeadersList extends cdktf.ComplexList {

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
  public get(index: number): ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendHeadersOutputReference {
    return new ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackend {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#body ApigatewayDeployment#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#connect_timeout_in_seconds ApigatewayDeployment#connect_timeout_in_seconds}
  */
  readonly connectTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#function_id ApigatewayDeployment#function_id}
  */
  readonly functionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#is_ssl_verify_disabled ApigatewayDeployment#is_ssl_verify_disabled}
  */
  readonly isSslVerifyDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#read_timeout_in_seconds ApigatewayDeployment#read_timeout_in_seconds}
  */
  readonly readTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#status ApigatewayDeployment#status}
  */
  readonly status?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#url ApigatewayDeployment#url}
  */
  readonly url?: string;
}

export function apigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendOutputReference | ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    connect_timeout_in_seconds: cdktf.numberToTerraform(struct!.connectTimeoutInSeconds),
    function_id: cdktf.stringToTerraform(struct!.functionId),
    is_ssl_verify_disabled: cdktf.booleanToTerraform(struct!.isSslVerifyDisabled),
    read_timeout_in_seconds: cdktf.numberToTerraform(struct!.readTimeoutInSeconds),
    status: cdktf.numberToTerraform(struct!.status),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function apigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendOutputReference | ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect_timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    function_id: {
      value: cdktf.stringToHclTerraform(struct!.functionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_ssl_verify_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isSslVerifyDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.readTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.numberToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackend | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._connectTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeoutInSeconds = this._connectTimeoutInSeconds;
    }
    if (this._functionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionId = this._functionId;
    }
    if (this._isSslVerifyDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSslVerifyDisabled = this._isSslVerifyDisabled;
    }
    if (this._readTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.readTimeoutInSeconds = this._readTimeoutInSeconds;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackend | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._connectTimeoutInSeconds = undefined;
      this._functionId = undefined;
      this._isSslVerifyDisabled = undefined;
      this._readTimeoutInSeconds = undefined;
      this._status = undefined;
      this._type = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._connectTimeoutInSeconds = value.connectTimeoutInSeconds;
      this._functionId = value.functionId;
      this._isSslVerifyDisabled = value.isSslVerifyDisabled;
      this._readTimeoutInSeconds = value.readTimeoutInSeconds;
      this._status = value.status;
      this._type = value.type;
      this._url = value.url;
    }
  }

  // body - computed: true, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // connect_timeout_in_seconds - computed: true, optional: true, required: false
  private _connectTimeoutInSeconds?: number; 
  public get connectTimeoutInSeconds() {
    return this.getNumberAttribute('connect_timeout_in_seconds');
  }
  public set connectTimeoutInSeconds(value: number) {
    this._connectTimeoutInSeconds = value;
  }
  public resetConnectTimeoutInSeconds() {
    this._connectTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInSecondsInput() {
    return this._connectTimeoutInSeconds;
  }

  // function_id - computed: true, optional: true, required: false
  private _functionId?: string; 
  public get functionId() {
    return this.getStringAttribute('function_id');
  }
  public set functionId(value: string) {
    this._functionId = value;
  }
  public resetFunctionId() {
    this._functionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionIdInput() {
    return this._functionId;
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // is_ssl_verify_disabled - computed: true, optional: true, required: false
  private _isSslVerifyDisabled?: boolean | cdktf.IResolvable; 
  public get isSslVerifyDisabled() {
    return this.getBooleanAttribute('is_ssl_verify_disabled');
  }
  public set isSslVerifyDisabled(value: boolean | cdktf.IResolvable) {
    this._isSslVerifyDisabled = value;
  }
  public resetIsSslVerifyDisabled() {
    this._isSslVerifyDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSslVerifyDisabledInput() {
    return this._isSslVerifyDisabled;
  }

  // read_timeout_in_seconds - computed: true, optional: true, required: false
  private _readTimeoutInSeconds?: number; 
  public get readTimeoutInSeconds() {
    return this.getNumberAttribute('read_timeout_in_seconds');
  }
  public set readTimeoutInSeconds(value: number) {
    this._readTimeoutInSeconds = value;
  }
  public resetReadTimeoutInSeconds() {
    this._readTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInSecondsInput() {
    return this._readTimeoutInSeconds;
  }

  // send_timeout_in_seconds - computed: true, optional: false, required: false
  public get sendTimeoutInSeconds() {
    return this.getNumberAttribute('send_timeout_in_seconds');
  }

  // status - computed: true, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#expression ApigatewayDeployment#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#is_default ApigatewayDeployment#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#name ApigatewayDeployment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#values ApigatewayDeployment#values}
  */
  readonly values?: string[];
}

export function apigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKeyToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKeyOutputReference | ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function apigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKeyToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKeyOutputReference | ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_default: {
      value: cdktf.booleanToHclTerraform(struct!.isDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
      this._isDefault = undefined;
      this._name = undefined;
      this._type = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
      this._isDefault = value.isDefault;
      this._name = value.name;
      this._type = value.type;
      this._values = value.values;
    }
  }

  // expression - computed: true, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // is_default - computed: true, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesBackendRoutingBackends {
  /**
  * backend block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#backend ApigatewayDeployment#backend}
  */
  readonly backend?: ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackend;
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#key ApigatewayDeployment#key}
  */
  readonly key?: ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKey;
}

export function apigatewayDeploymentSpecificationRoutesBackendRoutingBackendsToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesBackendRoutingBackends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend: apigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendToTerraform(struct!.backend),
    key: apigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKeyToTerraform(struct!.key),
  }
}


export function apigatewayDeploymentSpecificationRoutesBackendRoutingBackendsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesBackendRoutingBackends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend: {
      value: apigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendToHclTerraform(struct!.backend),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendList",
    },
    key: {
      value: apigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKeyToHclTerraform(struct!.key),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesBackendRoutingBackends | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backend = this._backend?.internalValue;
    }
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesBackendRoutingBackends | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backend.internalValue = undefined;
      this._key.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backend.internalValue = value.backend;
      this._key.internalValue = value.key;
    }
  }

  // backend - computed: false, optional: true, required: false
  private _backend = new ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendOutputReference(this, "backend");
  public get backend() {
    return this._backend;
  }
  public putBackend(value: ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackend) {
    this._backend.internalValue = value;
  }
  public resetBackend() {
    this._backend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend.internalValue;
  }

  // key - computed: false, optional: true, required: false
  private _key = new ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKeyOutputReference(this, "key");
  public get key() {
    return this._key;
  }
  public putKey(value: ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKey) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }
}

export class ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRoutesBackendRoutingBackends[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsOutputReference {
    return new ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRoutesBackendSelectionSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#selector ApigatewayDeployment#selector}
  */
  readonly selector: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
}

export function apigatewayDeploymentSpecificationRoutesBackendSelectionSourceToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesBackendSelectionSourceOutputReference | ApigatewayDeploymentSpecificationRoutesBackendSelectionSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: cdktf.stringToTerraform(struct!.selector),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function apigatewayDeploymentSpecificationRoutesBackendSelectionSourceToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesBackendSelectionSourceOutputReference | ApigatewayDeploymentSpecificationRoutesBackendSelectionSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesBackendSelectionSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesBackendSelectionSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesBackendSelectionSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selector = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selector = value.selector;
      this._type = value.type;
    }
  }

  // selector - computed: false, optional: false, required: true
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesBackend {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#allowed_post_logout_uris ApigatewayDeployment#allowed_post_logout_uris}
  */
  readonly allowedPostLogoutUris?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#body ApigatewayDeployment#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#connect_timeout_in_seconds ApigatewayDeployment#connect_timeout_in_seconds}
  */
  readonly connectTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#function_id ApigatewayDeployment#function_id}
  */
  readonly functionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#is_ssl_verify_disabled ApigatewayDeployment#is_ssl_verify_disabled}
  */
  readonly isSslVerifyDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#post_logout_state ApigatewayDeployment#post_logout_state}
  */
  readonly postLogoutState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#read_timeout_in_seconds ApigatewayDeployment#read_timeout_in_seconds}
  */
  readonly readTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#send_timeout_in_seconds ApigatewayDeployment#send_timeout_in_seconds}
  */
  readonly sendTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#status ApigatewayDeployment#status}
  */
  readonly status?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#url ApigatewayDeployment#url}
  */
  readonly url?: string;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#headers ApigatewayDeployment#headers}
  */
  readonly headers?: ApigatewayDeploymentSpecificationRoutesBackendHeaders[] | cdktf.IResolvable;
  /**
  * routing_backends block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#routing_backends ApigatewayDeployment#routing_backends}
  */
  readonly routingBackends?: ApigatewayDeploymentSpecificationRoutesBackendRoutingBackends[] | cdktf.IResolvable;
  /**
  * selection_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#selection_source ApigatewayDeployment#selection_source}
  */
  readonly selectionSource?: ApigatewayDeploymentSpecificationRoutesBackendSelectionSource;
}

export function apigatewayDeploymentSpecificationRoutesBackendToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesBackendOutputReference | ApigatewayDeploymentSpecificationRoutesBackend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_post_logout_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedPostLogoutUris),
    body: cdktf.stringToTerraform(struct!.body),
    connect_timeout_in_seconds: cdktf.numberToTerraform(struct!.connectTimeoutInSeconds),
    function_id: cdktf.stringToTerraform(struct!.functionId),
    is_ssl_verify_disabled: cdktf.booleanToTerraform(struct!.isSslVerifyDisabled),
    post_logout_state: cdktf.stringToTerraform(struct!.postLogoutState),
    read_timeout_in_seconds: cdktf.numberToTerraform(struct!.readTimeoutInSeconds),
    send_timeout_in_seconds: cdktf.numberToTerraform(struct!.sendTimeoutInSeconds),
    status: cdktf.numberToTerraform(struct!.status),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
    headers: cdktf.listMapper(apigatewayDeploymentSpecificationRoutesBackendHeadersToTerraform, true)(struct!.headers),
    routing_backends: cdktf.listMapper(apigatewayDeploymentSpecificationRoutesBackendRoutingBackendsToTerraform, true)(struct!.routingBackends),
    selection_source: apigatewayDeploymentSpecificationRoutesBackendSelectionSourceToTerraform(struct!.selectionSource),
  }
}


export function apigatewayDeploymentSpecificationRoutesBackendToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesBackendOutputReference | ApigatewayDeploymentSpecificationRoutesBackend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_post_logout_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedPostLogoutUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect_timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    function_id: {
      value: cdktf.stringToHclTerraform(struct!.functionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_ssl_verify_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.isSslVerifyDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    post_logout_state: {
      value: cdktf.stringToHclTerraform(struct!.postLogoutState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.readTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_timeout_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.sendTimeoutInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.numberToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRoutesBackendHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesBackendHeadersList",
    },
    routing_backends: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRoutesBackendRoutingBackendsToHclTerraform, true)(struct!.routingBackends),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsList",
    },
    selection_source: {
      value: apigatewayDeploymentSpecificationRoutesBackendSelectionSourceToHclTerraform(struct!.selectionSource),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesBackendSelectionSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesBackendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesBackend | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedPostLogoutUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedPostLogoutUris = this._allowedPostLogoutUris;
    }
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._connectTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeoutInSeconds = this._connectTimeoutInSeconds;
    }
    if (this._functionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionId = this._functionId;
    }
    if (this._isSslVerifyDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSslVerifyDisabled = this._isSslVerifyDisabled;
    }
    if (this._postLogoutState !== undefined) {
      hasAnyValues = true;
      internalValueResult.postLogoutState = this._postLogoutState;
    }
    if (this._readTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.readTimeoutInSeconds = this._readTimeoutInSeconds;
    }
    if (this._sendTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendTimeoutInSeconds = this._sendTimeoutInSeconds;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._routingBackends?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingBackends = this._routingBackends?.internalValue;
    }
    if (this._selectionSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionSource = this._selectionSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesBackend | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedPostLogoutUris = undefined;
      this._body = undefined;
      this._connectTimeoutInSeconds = undefined;
      this._functionId = undefined;
      this._isSslVerifyDisabled = undefined;
      this._postLogoutState = undefined;
      this._readTimeoutInSeconds = undefined;
      this._sendTimeoutInSeconds = undefined;
      this._status = undefined;
      this._type = undefined;
      this._url = undefined;
      this._headers.internalValue = undefined;
      this._routingBackends.internalValue = undefined;
      this._selectionSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedPostLogoutUris = value.allowedPostLogoutUris;
      this._body = value.body;
      this._connectTimeoutInSeconds = value.connectTimeoutInSeconds;
      this._functionId = value.functionId;
      this._isSslVerifyDisabled = value.isSslVerifyDisabled;
      this._postLogoutState = value.postLogoutState;
      this._readTimeoutInSeconds = value.readTimeoutInSeconds;
      this._sendTimeoutInSeconds = value.sendTimeoutInSeconds;
      this._status = value.status;
      this._type = value.type;
      this._url = value.url;
      this._headers.internalValue = value.headers;
      this._routingBackends.internalValue = value.routingBackends;
      this._selectionSource.internalValue = value.selectionSource;
    }
  }

  // allowed_post_logout_uris - computed: true, optional: true, required: false
  private _allowedPostLogoutUris?: string[]; 
  public get allowedPostLogoutUris() {
    return this.getListAttribute('allowed_post_logout_uris');
  }
  public set allowedPostLogoutUris(value: string[]) {
    this._allowedPostLogoutUris = value;
  }
  public resetAllowedPostLogoutUris() {
    this._allowedPostLogoutUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPostLogoutUrisInput() {
    return this._allowedPostLogoutUris;
  }

  // body - computed: true, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // connect_timeout_in_seconds - computed: true, optional: true, required: false
  private _connectTimeoutInSeconds?: number; 
  public get connectTimeoutInSeconds() {
    return this.getNumberAttribute('connect_timeout_in_seconds');
  }
  public set connectTimeoutInSeconds(value: number) {
    this._connectTimeoutInSeconds = value;
  }
  public resetConnectTimeoutInSeconds() {
    this._connectTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInSecondsInput() {
    return this._connectTimeoutInSeconds;
  }

  // function_id - computed: true, optional: true, required: false
  private _functionId?: string; 
  public get functionId() {
    return this.getStringAttribute('function_id');
  }
  public set functionId(value: string) {
    this._functionId = value;
  }
  public resetFunctionId() {
    this._functionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionIdInput() {
    return this._functionId;
  }

  // is_ssl_verify_disabled - computed: true, optional: true, required: false
  private _isSslVerifyDisabled?: boolean | cdktf.IResolvable; 
  public get isSslVerifyDisabled() {
    return this.getBooleanAttribute('is_ssl_verify_disabled');
  }
  public set isSslVerifyDisabled(value: boolean | cdktf.IResolvable) {
    this._isSslVerifyDisabled = value;
  }
  public resetIsSslVerifyDisabled() {
    this._isSslVerifyDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSslVerifyDisabledInput() {
    return this._isSslVerifyDisabled;
  }

  // post_logout_state - computed: true, optional: true, required: false
  private _postLogoutState?: string; 
  public get postLogoutState() {
    return this.getStringAttribute('post_logout_state');
  }
  public set postLogoutState(value: string) {
    this._postLogoutState = value;
  }
  public resetPostLogoutState() {
    this._postLogoutState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postLogoutStateInput() {
    return this._postLogoutState;
  }

  // read_timeout_in_seconds - computed: true, optional: true, required: false
  private _readTimeoutInSeconds?: number; 
  public get readTimeoutInSeconds() {
    return this.getNumberAttribute('read_timeout_in_seconds');
  }
  public set readTimeoutInSeconds(value: number) {
    this._readTimeoutInSeconds = value;
  }
  public resetReadTimeoutInSeconds() {
    this._readTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInSecondsInput() {
    return this._readTimeoutInSeconds;
  }

  // send_timeout_in_seconds - computed: true, optional: true, required: false
  private _sendTimeoutInSeconds?: number; 
  public get sendTimeoutInSeconds() {
    return this.getNumberAttribute('send_timeout_in_seconds');
  }
  public set sendTimeoutInSeconds(value: number) {
    this._sendTimeoutInSeconds = value;
  }
  public resetSendTimeoutInSeconds() {
    this._sendTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendTimeoutInSecondsInput() {
    return this._sendTimeoutInSeconds;
  }

  // status - computed: true, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new ApigatewayDeploymentSpecificationRoutesBackendHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: ApigatewayDeploymentSpecificationRoutesBackendHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // routing_backends - computed: false, optional: true, required: false
  private _routingBackends = new ApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsList(this, "routing_backends", false);
  public get routingBackends() {
    return this._routingBackends;
  }
  public putRoutingBackends(value: ApigatewayDeploymentSpecificationRoutesBackendRoutingBackends[] | cdktf.IResolvable) {
    this._routingBackends.internalValue = value;
  }
  public resetRoutingBackends() {
    this._routingBackends.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingBackendsInput() {
    return this._routingBackends.internalValue;
  }

  // selection_source - computed: false, optional: true, required: false
  private _selectionSource = new ApigatewayDeploymentSpecificationRoutesBackendSelectionSourceOutputReference(this, "selection_source");
  public get selectionSource() {
    return this._selectionSource;
  }
  public putSelectionSource(value: ApigatewayDeploymentSpecificationRoutesBackendSelectionSource) {
    this._selectionSource.internalValue = value;
  }
  public resetSelectionSource() {
    this._selectionSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionSourceInput() {
    return this._selectionSource.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#is_enabled ApigatewayDeployment#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLogToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLogOutputReference | ApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
  }
}


export function apigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLogToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLogOutputReference | ApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#is_enabled ApigatewayDeployment#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#log_level ApigatewayDeployment#log_level}
  */
  readonly logLevel?: string;
}

export function apigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLogToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLogOutputReference | ApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
  }
}


export function apigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLogToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLogOutputReference | ApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isEnabled = undefined;
      this._logLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isEnabled = value.isEnabled;
      this._logLevel = value.logLevel;
    }
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesLoggingPolicies {
  /**
  * access_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#access_log ApigatewayDeployment#access_log}
  */
  readonly accessLog?: ApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLog;
  /**
  * execution_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#execution_log ApigatewayDeployment#execution_log}
  */
  readonly executionLog?: ApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLog;
}

export function apigatewayDeploymentSpecificationRoutesLoggingPoliciesToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesLoggingPoliciesOutputReference | ApigatewayDeploymentSpecificationRoutesLoggingPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_log: apigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLogToTerraform(struct!.accessLog),
    execution_log: apigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLogToTerraform(struct!.executionLog),
  }
}


export function apigatewayDeploymentSpecificationRoutesLoggingPoliciesToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesLoggingPoliciesOutputReference | ApigatewayDeploymentSpecificationRoutesLoggingPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_log: {
      value: apigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLogToHclTerraform(struct!.accessLog),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLogList",
    },
    execution_log: {
      value: apigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLogToHclTerraform(struct!.executionLog),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLogList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesLoggingPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesLoggingPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLog = this._accessLog?.internalValue;
    }
    if (this._executionLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionLog = this._executionLog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesLoggingPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessLog.internalValue = undefined;
      this._executionLog.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessLog.internalValue = value.accessLog;
      this._executionLog.internalValue = value.executionLog;
    }
  }

  // access_log - computed: false, optional: true, required: false
  private _accessLog = new ApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLogOutputReference(this, "access_log");
  public get accessLog() {
    return this._accessLog;
  }
  public putAccessLog(value: ApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLog) {
    this._accessLog.internalValue = value;
  }
  public resetAccessLog() {
    this._accessLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogInput() {
    return this._accessLog.internalValue;
  }

  // execution_log - computed: false, optional: true, required: false
  private _executionLog = new ApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLogOutputReference(this, "execution_log");
  public get executionLog() {
    return this._executionLog;
  }
  public putExecutionLog(value: ApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLog) {
    this._executionLog.internalValue = value;
  }
  public resetExecutionLog() {
    this._executionLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionLogInput() {
    return this._executionLog.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#allowed_scope ApigatewayDeployment#allowed_scope}
  */
  readonly allowedScope?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type?: string;
}

export function apigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorizationToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorizationOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_scope: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedScope),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function apigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorizationToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorizationOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_scope: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedScope),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedScope = this._allowedScope;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedScope = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedScope = value.allowedScope;
      this._type = value.type;
    }
  }

  // allowed_scope - computed: true, optional: true, required: false
  private _allowedScope?: string[]; 
  public get allowedScope() {
    return this.getListAttribute('allowed_scope');
  }
  public set allowedScope(value: string[]) {
    this._allowedScope = value;
  }
  public resetAllowedScope() {
    this._allowedScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedScopeInput() {
    return this._allowedScope;
  }

  // type - computed: true, optional: true, required: false
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
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#media_type ApigatewayDeployment#media_type}
  */
  readonly mediaType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#validation_type ApigatewayDeployment#validation_type}
  */
  readonly validationType: string;
}

export function apigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContentToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    media_type: cdktf.stringToTerraform(struct!.mediaType),
    validation_type: cdktf.stringToTerraform(struct!.validationType),
  }
}


export function apigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContentToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    media_type: {
      value: cdktf.stringToHclTerraform(struct!.mediaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation_type: {
      value: cdktf.stringToHclTerraform(struct!.validationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mediaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaType = this._mediaType;
    }
    if (this._validationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationType = this._validationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mediaType = undefined;
      this._validationType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mediaType = value.mediaType;
      this._validationType = value.validationType;
    }
  }

  // media_type - computed: false, optional: false, required: true
  private _mediaType?: string; 
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string) {
    this._mediaType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
  }

  // validation_type - computed: false, optional: false, required: true
  private _validationType?: string; 
  public get validationType() {
    return this.getStringAttribute('validation_type');
  }
  public set validationType(value: string) {
    this._validationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationTypeInput() {
    return this._validationType;
  }
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContentList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContent[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContentOutputReference {
    return new ApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#required ApigatewayDeployment#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#validation_mode ApigatewayDeployment#validation_mode}
  */
  readonly validationMode?: string;
  /**
  * content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#content ApigatewayDeployment#content}
  */
  readonly content?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContent[] | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    required: cdktf.booleanToTerraform(struct!.required),
    validation_mode: cdktf.stringToTerraform(struct!.validationMode),
    content: cdktf.listMapper(apigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContentToTerraform, true)(struct!.content),
  }
}


export function apigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validation_mode: {
      value: cdktf.stringToHclTerraform(struct!.validationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContentToHclTerraform, true)(struct!.content),
      isBlock: true,
      type: "set",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._validationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationMode = this._validationMode;
    }
    if (this._content?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._required = undefined;
      this._validationMode = undefined;
      this._content.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._required = value.required;
      this._validationMode = value.validationMode;
      this._content.internalValue = value.content;
    }
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // validation_mode - computed: true, optional: true, required: false
  private _validationMode?: string; 
  public get validationMode() {
    return this.getStringAttribute('validation_mode');
  }
  public set validationMode(value: string) {
    this._validationMode = value;
  }
  public resetValidationMode() {
    this._validationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationModeInput() {
    return this._validationMode;
  }

  // content - computed: false, optional: true, required: false
  private _content = new ApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContentList(this, "content", true);
  public get content() {
    return this._content;
  }
  public putContent(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContent[] | cdktf.IResolvable) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPoliciesCors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#allowed_headers ApigatewayDeployment#allowed_headers}
  */
  readonly allowedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#allowed_methods ApigatewayDeployment#allowed_methods}
  */
  readonly allowedMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#allowed_origins ApigatewayDeployment#allowed_origins}
  */
  readonly allowedOrigins: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#exposed_headers ApigatewayDeployment#exposed_headers}
  */
  readonly exposedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#is_allow_credentials_enabled ApigatewayDeployment#is_allow_credentials_enabled}
  */
  readonly isAllowCredentialsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#max_age_in_seconds ApigatewayDeployment#max_age_in_seconds}
  */
  readonly maxAgeInSeconds?: number;
}

export function apigatewayDeploymentSpecificationRoutesRequestPoliciesCorsToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesCorsOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHeaders),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedMethods),
    allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedOrigins),
    exposed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exposedHeaders),
    is_allow_credentials_enabled: cdktf.booleanToTerraform(struct!.isAllowCredentialsEnabled),
    max_age_in_seconds: cdktf.numberToTerraform(struct!.maxAgeInSeconds),
  }
}


export function apigatewayDeploymentSpecificationRoutesRequestPoliciesCorsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesCorsOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exposed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exposedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_allow_credentials_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isAllowCredentialsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_age_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxAgeInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesCorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesRequestPoliciesCors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHeaders = this._allowedHeaders;
    }
    if (this._allowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods;
    }
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._exposedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposedHeaders = this._exposedHeaders;
    }
    if (this._isAllowCredentialsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAllowCredentialsEnabled = this._isAllowCredentialsEnabled;
    }
    if (this._maxAgeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeInSeconds = this._maxAgeInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesCors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHeaders = undefined;
      this._allowedMethods = undefined;
      this._allowedOrigins = undefined;
      this._exposedHeaders = undefined;
      this._isAllowCredentialsEnabled = undefined;
      this._maxAgeInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHeaders = value.allowedHeaders;
      this._allowedMethods = value.allowedMethods;
      this._allowedOrigins = value.allowedOrigins;
      this._exposedHeaders = value.exposedHeaders;
      this._isAllowCredentialsEnabled = value.isAllowCredentialsEnabled;
      this._maxAgeInSeconds = value.maxAgeInSeconds;
    }
  }

  // allowed_headers - computed: true, optional: true, required: false
  private _allowedHeaders?: string[]; 
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }
  public set allowedHeaders(value: string[]) {
    this._allowedHeaders = value;
  }
  public resetAllowedHeaders() {
    this._allowedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeadersInput() {
    return this._allowedHeaders;
  }

  // allowed_methods - computed: true, optional: true, required: false
  private _allowedMethods?: string[]; 
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }
  public set allowedMethods(value: string[]) {
    this._allowedMethods = value;
  }
  public resetAllowedMethods() {
    this._allowedMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
  }

  // allowed_origins - computed: false, optional: false, required: true
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // exposed_headers - computed: true, optional: true, required: false
  private _exposedHeaders?: string[]; 
  public get exposedHeaders() {
    return this.getListAttribute('exposed_headers');
  }
  public set exposedHeaders(value: string[]) {
    this._exposedHeaders = value;
  }
  public resetExposedHeaders() {
    this._exposedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposedHeadersInput() {
    return this._exposedHeaders;
  }

  // is_allow_credentials_enabled - computed: true, optional: true, required: false
  private _isAllowCredentialsEnabled?: boolean | cdktf.IResolvable; 
  public get isAllowCredentialsEnabled() {
    return this.getBooleanAttribute('is_allow_credentials_enabled');
  }
  public set isAllowCredentialsEnabled(value: boolean | cdktf.IResolvable) {
    this._isAllowCredentialsEnabled = value;
  }
  public resetIsAllowCredentialsEnabled() {
    this._isAllowCredentialsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAllowCredentialsEnabledInput() {
    return this._isAllowCredentialsEnabled;
  }

  // max_age_in_seconds - computed: true, optional: true, required: false
  private _maxAgeInSeconds?: number; 
  public get maxAgeInSeconds() {
    return this.getNumberAttribute('max_age_in_seconds');
  }
  public set maxAgeInSeconds(value: number) {
    this._maxAgeInSeconds = value;
  }
  public resetMaxAgeInSeconds() {
    this._maxAgeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInSecondsInput() {
    return this._maxAgeInSeconds;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#name ApigatewayDeployment#name}
  */
  readonly name: string;
}

export function apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItemsToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItemsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItems | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItemsList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItems[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItemsOutputReference {
    return new ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#items ApigatewayDeployment#items}
  */
  readonly items: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItems[] | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    items: cdktf.listMapper(apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItemsToTerraform, true)(struct!.items),
  }
}


export function apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    items: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._items.internalValue = value.items;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // items - computed: false, optional: false, required: true
  private _items = new ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#from ApigatewayDeployment#from}
  */
  readonly from: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#to ApigatewayDeployment#to}
  */
  readonly to: string;
}

export function apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItemsToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItemsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: false, required: true
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItemsList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItems[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItemsOutputReference {
    return new ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeaders {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#items ApigatewayDeployment#items}
  */
  readonly items: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItems[] | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItemsToTerraform, true)(struct!.items),
  }
}


export function apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items = new ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#if_exists ApigatewayDeployment#if_exists}
  */
  readonly ifExists?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#name ApigatewayDeployment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#values ApigatewayDeployment#values}
  */
  readonly values: string[];
}

export function apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItemsToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    if_exists: cdktf.stringToTerraform(struct!.ifExists),
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItemsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    if_exists: {
      value: cdktf.stringToHclTerraform(struct!.ifExists),
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ifExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifExists = this._ifExists;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ifExists = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ifExists = value.ifExists;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // if_exists - computed: true, optional: true, required: false
  private _ifExists?: string; 
  public get ifExists() {
    return this.getStringAttribute('if_exists');
  }
  public set ifExists(value: string) {
    this._ifExists = value;
  }
  public resetIfExists() {
    this._ifExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifExistsInput() {
    return this._ifExists;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItemsList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItems[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItemsOutputReference {
    return new ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeaders {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#items ApigatewayDeployment#items}
  */
  readonly items: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItems[] | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItemsToTerraform, true)(struct!.items),
  }
}


export function apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items = new ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformations {
  /**
  * filter_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#filter_headers ApigatewayDeployment#filter_headers}
  */
  readonly filterHeaders?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeaders;
  /**
  * rename_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#rename_headers ApigatewayDeployment#rename_headers}
  */
  readonly renameHeaders?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeaders;
  /**
  * set_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#set_headers ApigatewayDeployment#set_headers}
  */
  readonly setHeaders?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeaders;
}

export function apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_headers: apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersToTerraform(struct!.filterHeaders),
    rename_headers: apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersToTerraform(struct!.renameHeaders),
    set_headers: apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersToTerraform(struct!.setHeaders),
  }
}


export function apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_headers: {
      value: apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersToHclTerraform(struct!.filterHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersList",
    },
    rename_headers: {
      value: apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersToHclTerraform(struct!.renameHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersList",
    },
    set_headers: {
      value: apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersToHclTerraform(struct!.setHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterHeaders = this._filterHeaders?.internalValue;
    }
    if (this._renameHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.renameHeaders = this._renameHeaders?.internalValue;
    }
    if (this._setHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setHeaders = this._setHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterHeaders.internalValue = undefined;
      this._renameHeaders.internalValue = undefined;
      this._setHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterHeaders.internalValue = value.filterHeaders;
      this._renameHeaders.internalValue = value.renameHeaders;
      this._setHeaders.internalValue = value.setHeaders;
    }
  }

  // filter_headers - computed: false, optional: true, required: false
  private _filterHeaders = new ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersOutputReference(this, "filter_headers");
  public get filterHeaders() {
    return this._filterHeaders;
  }
  public putFilterHeaders(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeaders) {
    this._filterHeaders.internalValue = value;
  }
  public resetFilterHeaders() {
    this._filterHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterHeadersInput() {
    return this._filterHeaders.internalValue;
  }

  // rename_headers - computed: false, optional: true, required: false
  private _renameHeaders = new ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersOutputReference(this, "rename_headers");
  public get renameHeaders() {
    return this._renameHeaders;
  }
  public putRenameHeaders(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeaders) {
    this._renameHeaders.internalValue = value;
  }
  public resetRenameHeaders() {
    this._renameHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renameHeadersInput() {
    return this._renameHeaders.internalValue;
  }

  // set_headers - computed: false, optional: true, required: false
  private _setHeaders = new ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersOutputReference(this, "set_headers");
  public get setHeaders() {
    return this._setHeaders;
  }
  public putSetHeaders(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeaders) {
    this._setHeaders.internalValue = value;
  }
  public resetSetHeaders() {
    this._setHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setHeadersInput() {
    return this._setHeaders.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#name ApigatewayDeployment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#required ApigatewayDeployment#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeadersToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
  }
}


export function apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeadersToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeaders | cdktf.IResolvable): any {
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
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._required = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._required = value.required;
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

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeadersList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeaders[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeadersOutputReference {
    return new ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#validation_mode ApigatewayDeployment#validation_mode}
  */
  readonly validationMode?: string;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#headers ApigatewayDeployment#headers}
  */
  readonly headers?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeaders[] | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    validation_mode: cdktf.stringToTerraform(struct!.validationMode),
    headers: cdktf.listMapper(apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeadersToTerraform, true)(struct!.headers),
  }
}


export function apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    validation_mode: {
      value: cdktf.stringToHclTerraform(struct!.validationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._validationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationMode = this._validationMode;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._validationMode = undefined;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._validationMode = value.validationMode;
      this._headers.internalValue = value.headers;
    }
  }

  // validation_mode - computed: true, optional: true, required: false
  private _validationMode?: string; 
  public get validationMode() {
    return this.getStringAttribute('validation_mode');
  }
  public set validationMode(value: string) {
    this._validationMode = value;
  }
  public resetValidationMode() {
    this._validationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationModeInput() {
    return this._validationMode;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#name ApigatewayDeployment#name}
  */
  readonly name: string;
}

export function apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItemsToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItemsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItems | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItemsList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItems[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItemsOutputReference {
    return new ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#items ApigatewayDeployment#items}
  */
  readonly items: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItems[] | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    items: cdktf.listMapper(apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItemsToTerraform, true)(struct!.items),
  }
}


export function apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    items: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._items.internalValue = value.items;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // items - computed: false, optional: false, required: true
  private _items = new ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#from ApigatewayDeployment#from}
  */
  readonly from: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#to ApigatewayDeployment#to}
  */
  readonly to: string;
}

export function apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItemsToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItemsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: false, required: true
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItemsList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItems[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItemsOutputReference {
    return new ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParameters {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#items ApigatewayDeployment#items}
  */
  readonly items: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItems[] | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItemsToTerraform, true)(struct!.items),
  }
}


export function apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items = new ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#if_exists ApigatewayDeployment#if_exists}
  */
  readonly ifExists?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#name ApigatewayDeployment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#values ApigatewayDeployment#values}
  */
  readonly values: string[];
}

export function apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItemsToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    if_exists: cdktf.stringToTerraform(struct!.ifExists),
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItemsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    if_exists: {
      value: cdktf.stringToHclTerraform(struct!.ifExists),
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ifExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifExists = this._ifExists;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ifExists = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ifExists = value.ifExists;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // if_exists - computed: true, optional: true, required: false
  private _ifExists?: string; 
  public get ifExists() {
    return this.getStringAttribute('if_exists');
  }
  public set ifExists(value: string) {
    this._ifExists = value;
  }
  public resetIfExists() {
    this._ifExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifExistsInput() {
    return this._ifExists;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItemsList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItems[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItemsOutputReference {
    return new ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParameters {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#items ApigatewayDeployment#items}
  */
  readonly items: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItems[] | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItemsToTerraform, true)(struct!.items),
  }
}


export function apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items = new ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformations {
  /**
  * filter_query_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#filter_query_parameters ApigatewayDeployment#filter_query_parameters}
  */
  readonly filterQueryParameters?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParameters;
  /**
  * rename_query_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#rename_query_parameters ApigatewayDeployment#rename_query_parameters}
  */
  readonly renameQueryParameters?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParameters;
  /**
  * set_query_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#set_query_parameters ApigatewayDeployment#set_query_parameters}
  */
  readonly setQueryParameters?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParameters;
}

export function apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_query_parameters: apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersToTerraform(struct!.filterQueryParameters),
    rename_query_parameters: apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersToTerraform(struct!.renameQueryParameters),
    set_query_parameters: apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersToTerraform(struct!.setQueryParameters),
  }
}


export function apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_query_parameters: {
      value: apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersToHclTerraform(struct!.filterQueryParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersList",
    },
    rename_query_parameters: {
      value: apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersToHclTerraform(struct!.renameQueryParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersList",
    },
    set_query_parameters: {
      value: apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersToHclTerraform(struct!.setQueryParameters),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterQueryParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterQueryParameters = this._filterQueryParameters?.internalValue;
    }
    if (this._renameQueryParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.renameQueryParameters = this._renameQueryParameters?.internalValue;
    }
    if (this._setQueryParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setQueryParameters = this._setQueryParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterQueryParameters.internalValue = undefined;
      this._renameQueryParameters.internalValue = undefined;
      this._setQueryParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterQueryParameters.internalValue = value.filterQueryParameters;
      this._renameQueryParameters.internalValue = value.renameQueryParameters;
      this._setQueryParameters.internalValue = value.setQueryParameters;
    }
  }

  // filter_query_parameters - computed: false, optional: true, required: false
  private _filterQueryParameters = new ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersOutputReference(this, "filter_query_parameters");
  public get filterQueryParameters() {
    return this._filterQueryParameters;
  }
  public putFilterQueryParameters(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParameters) {
    this._filterQueryParameters.internalValue = value;
  }
  public resetFilterQueryParameters() {
    this._filterQueryParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterQueryParametersInput() {
    return this._filterQueryParameters.internalValue;
  }

  // rename_query_parameters - computed: false, optional: true, required: false
  private _renameQueryParameters = new ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersOutputReference(this, "rename_query_parameters");
  public get renameQueryParameters() {
    return this._renameQueryParameters;
  }
  public putRenameQueryParameters(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParameters) {
    this._renameQueryParameters.internalValue = value;
  }
  public resetRenameQueryParameters() {
    this._renameQueryParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renameQueryParametersInput() {
    return this._renameQueryParameters.internalValue;
  }

  // set_query_parameters - computed: false, optional: true, required: false
  private _setQueryParameters = new ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersOutputReference(this, "set_query_parameters");
  public get setQueryParameters() {
    return this._setQueryParameters;
  }
  public putSetQueryParameters(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParameters) {
    this._setQueryParameters.internalValue = value;
  }
  public resetSetQueryParameters() {
    this._setQueryParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setQueryParametersInput() {
    return this._setQueryParameters.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#name ApigatewayDeployment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#required ApigatewayDeployment#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParametersToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
  }
}


export function apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParametersToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParameters | cdktf.IResolvable): any {
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
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._required = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._required = value.required;
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

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParametersList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParameters[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParametersOutputReference {
    return new ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#validation_mode ApigatewayDeployment#validation_mode}
  */
  readonly validationMode?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#parameters ApigatewayDeployment#parameters}
  */
  readonly parameters?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParameters[] | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    validation_mode: cdktf.stringToTerraform(struct!.validationMode),
    parameters: cdktf.listMapper(apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParametersToTerraform, true)(struct!.parameters),
  }
}


export function apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    validation_mode: {
      value: cdktf.stringToHclTerraform(struct!.validationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._validationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationMode = this._validationMode;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._validationMode = undefined;
      this._parameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._validationMode = value.validationMode;
      this._parameters.internalValue = value.parameters;
    }
  }

  // validation_mode - computed: true, optional: true, required: false
  private _validationMode?: string; 
  public get validationMode() {
    return this.getStringAttribute('validation_mode');
  }
  public set validationMode(value: string) {
    this._validationMode = value;
  }
  public resetValidationMode() {
    this._validationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationModeInput() {
    return this._validationMode;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#cache_key_additions ApigatewayDeployment#cache_key_additions}
  */
  readonly cacheKeyAdditions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#is_enabled ApigatewayDeployment#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#is_private_caching_enabled ApigatewayDeployment#is_private_caching_enabled}
  */
  readonly isPrivateCachingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
}

export function apigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookupToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookupOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_key_additions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cacheKeyAdditions),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    is_private_caching_enabled: cdktf.booleanToTerraform(struct!.isPrivateCachingEnabled),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function apigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookupToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookupOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_key_additions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cacheKeyAdditions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_private_caching_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isPrivateCachingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheKeyAdditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheKeyAdditions = this._cacheKeyAdditions;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._isPrivateCachingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrivateCachingEnabled = this._isPrivateCachingEnabled;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheKeyAdditions = undefined;
      this._isEnabled = undefined;
      this._isPrivateCachingEnabled = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheKeyAdditions = value.cacheKeyAdditions;
      this._isEnabled = value.isEnabled;
      this._isPrivateCachingEnabled = value.isPrivateCachingEnabled;
      this._type = value.type;
    }
  }

  // cache_key_additions - computed: true, optional: true, required: false
  private _cacheKeyAdditions?: string[]; 
  public get cacheKeyAdditions() {
    return this.getListAttribute('cache_key_additions');
  }
  public set cacheKeyAdditions(value: string[]) {
    this._cacheKeyAdditions = value;
  }
  public resetCacheKeyAdditions() {
    this._cacheKeyAdditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheKeyAdditionsInput() {
    return this._cacheKeyAdditions;
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // is_private_caching_enabled - computed: true, optional: true, required: false
  private _isPrivateCachingEnabled?: boolean | cdktf.IResolvable; 
  public get isPrivateCachingEnabled() {
    return this.getBooleanAttribute('is_private_caching_enabled');
  }
  public set isPrivateCachingEnabled(value: boolean | cdktf.IResolvable) {
    this._isPrivateCachingEnabled = value;
  }
  public resetIsPrivateCachingEnabled() {
    this._isPrivateCachingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrivateCachingEnabledInput() {
    return this._isPrivateCachingEnabled;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesRequestPolicies {
  /**
  * authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#authorization ApigatewayDeployment#authorization}
  */
  readonly authorization?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorization;
  /**
  * body_validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#body_validation ApigatewayDeployment#body_validation}
  */
  readonly bodyValidation?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidation;
  /**
  * cors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#cors ApigatewayDeployment#cors}
  */
  readonly cors?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesCors;
  /**
  * header_transformations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#header_transformations ApigatewayDeployment#header_transformations}
  */
  readonly headerTransformations?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformations;
  /**
  * header_validations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#header_validations ApigatewayDeployment#header_validations}
  */
  readonly headerValidations?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidations;
  /**
  * query_parameter_transformations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#query_parameter_transformations ApigatewayDeployment#query_parameter_transformations}
  */
  readonly queryParameterTransformations?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformations;
  /**
  * query_parameter_validations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#query_parameter_validations ApigatewayDeployment#query_parameter_validations}
  */
  readonly queryParameterValidations?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidations;
  /**
  * response_cache_lookup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#response_cache_lookup ApigatewayDeployment#response_cache_lookup}
  */
  readonly responseCacheLookup?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookup;
}

export function apigatewayDeploymentSpecificationRoutesRequestPoliciesToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization: apigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorizationToTerraform(struct!.authorization),
    body_validation: apigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationToTerraform(struct!.bodyValidation),
    cors: apigatewayDeploymentSpecificationRoutesRequestPoliciesCorsToTerraform(struct!.cors),
    header_transformations: apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsToTerraform(struct!.headerTransformations),
    header_validations: apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsToTerraform(struct!.headerValidations),
    query_parameter_transformations: apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsToTerraform(struct!.queryParameterTransformations),
    query_parameter_validations: apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsToTerraform(struct!.queryParameterValidations),
    response_cache_lookup: apigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookupToTerraform(struct!.responseCacheLookup),
  }
}


export function apigatewayDeploymentSpecificationRoutesRequestPoliciesToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesRequestPoliciesOutputReference | ApigatewayDeploymentSpecificationRoutesRequestPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization: {
      value: apigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorizationToHclTerraform(struct!.authorization),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorizationList",
    },
    body_validation: {
      value: apigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationToHclTerraform(struct!.bodyValidation),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationList",
    },
    cors: {
      value: apigatewayDeploymentSpecificationRoutesRequestPoliciesCorsToHclTerraform(struct!.cors),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesRequestPoliciesCorsList",
    },
    header_transformations: {
      value: apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsToHclTerraform(struct!.headerTransformations),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsList",
    },
    header_validations: {
      value: apigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsToHclTerraform(struct!.headerValidations),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsList",
    },
    query_parameter_transformations: {
      value: apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsToHclTerraform(struct!.queryParameterTransformations),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsList",
    },
    query_parameter_validations: {
      value: apigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsToHclTerraform(struct!.queryParameterValidations),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsList",
    },
    response_cache_lookup: {
      value: apigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookupToHclTerraform(struct!.responseCacheLookup),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesRequestPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesRequestPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization?.internalValue;
    }
    if (this._bodyValidation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyValidation = this._bodyValidation?.internalValue;
    }
    if (this._cors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cors = this._cors?.internalValue;
    }
    if (this._headerTransformations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerTransformations = this._headerTransformations?.internalValue;
    }
    if (this._headerValidations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValidations = this._headerValidations?.internalValue;
    }
    if (this._queryParameterTransformations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameterTransformations = this._queryParameterTransformations?.internalValue;
    }
    if (this._queryParameterValidations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameterValidations = this._queryParameterValidations?.internalValue;
    }
    if (this._responseCacheLookup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCacheLookup = this._responseCacheLookup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesRequestPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorization.internalValue = undefined;
      this._bodyValidation.internalValue = undefined;
      this._cors.internalValue = undefined;
      this._headerTransformations.internalValue = undefined;
      this._headerValidations.internalValue = undefined;
      this._queryParameterTransformations.internalValue = undefined;
      this._queryParameterValidations.internalValue = undefined;
      this._responseCacheLookup.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorization.internalValue = value.authorization;
      this._bodyValidation.internalValue = value.bodyValidation;
      this._cors.internalValue = value.cors;
      this._headerTransformations.internalValue = value.headerTransformations;
      this._headerValidations.internalValue = value.headerValidations;
      this._queryParameterTransformations.internalValue = value.queryParameterTransformations;
      this._queryParameterValidations.internalValue = value.queryParameterValidations;
      this._responseCacheLookup.internalValue = value.responseCacheLookup;
    }
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization = new ApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorization) {
    this._authorization.internalValue = value;
  }
  public resetAuthorization() {
    this._authorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // body_validation - computed: false, optional: true, required: false
  private _bodyValidation = new ApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationOutputReference(this, "body_validation");
  public get bodyValidation() {
    return this._bodyValidation;
  }
  public putBodyValidation(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidation) {
    this._bodyValidation.internalValue = value;
  }
  public resetBodyValidation() {
    this._bodyValidation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyValidationInput() {
    return this._bodyValidation.internalValue;
  }

  // cors - computed: false, optional: true, required: false
  private _cors = new ApigatewayDeploymentSpecificationRoutesRequestPoliciesCorsOutputReference(this, "cors");
  public get cors() {
    return this._cors;
  }
  public putCors(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesCors) {
    this._cors.internalValue = value;
  }
  public resetCors() {
    this._cors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors.internalValue;
  }

  // header_transformations - computed: false, optional: true, required: false
  private _headerTransformations = new ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsOutputReference(this, "header_transformations");
  public get headerTransformations() {
    return this._headerTransformations;
  }
  public putHeaderTransformations(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformations) {
    this._headerTransformations.internalValue = value;
  }
  public resetHeaderTransformations() {
    this._headerTransformations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerTransformationsInput() {
    return this._headerTransformations.internalValue;
  }

  // header_validations - computed: false, optional: true, required: false
  private _headerValidations = new ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsOutputReference(this, "header_validations");
  public get headerValidations() {
    return this._headerValidations;
  }
  public putHeaderValidations(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidations) {
    this._headerValidations.internalValue = value;
  }
  public resetHeaderValidations() {
    this._headerValidations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValidationsInput() {
    return this._headerValidations.internalValue;
  }

  // query_parameter_transformations - computed: false, optional: true, required: false
  private _queryParameterTransformations = new ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsOutputReference(this, "query_parameter_transformations");
  public get queryParameterTransformations() {
    return this._queryParameterTransformations;
  }
  public putQueryParameterTransformations(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformations) {
    this._queryParameterTransformations.internalValue = value;
  }
  public resetQueryParameterTransformations() {
    this._queryParameterTransformations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParameterTransformationsInput() {
    return this._queryParameterTransformations.internalValue;
  }

  // query_parameter_validations - computed: false, optional: true, required: false
  private _queryParameterValidations = new ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsOutputReference(this, "query_parameter_validations");
  public get queryParameterValidations() {
    return this._queryParameterValidations;
  }
  public putQueryParameterValidations(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidations) {
    this._queryParameterValidations.internalValue = value;
  }
  public resetQueryParameterValidations() {
    this._queryParameterValidations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParameterValidationsInput() {
    return this._queryParameterValidations.internalValue;
  }

  // response_cache_lookup - computed: false, optional: true, required: false
  private _responseCacheLookup = new ApigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookupOutputReference(this, "response_cache_lookup");
  public get responseCacheLookup() {
    return this._responseCacheLookup;
  }
  public putResponseCacheLookup(value: ApigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookup) {
    this._responseCacheLookup.internalValue = value;
  }
  public resetResponseCacheLookup() {
    this._responseCacheLookup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCacheLookupInput() {
    return this._responseCacheLookup.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#name ApigatewayDeployment#name}
  */
  readonly name: string;
}

export function apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItemsToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItemsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItems | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItemsList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItems[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItemsOutputReference {
    return new ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#items ApigatewayDeployment#items}
  */
  readonly items: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItems[] | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersOutputReference | ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    items: cdktf.listMapper(apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItemsToTerraform, true)(struct!.items),
  }
}


export function apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersOutputReference | ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    items: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._items.internalValue = value.items;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // items - computed: false, optional: false, required: true
  private _items = new ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#from ApigatewayDeployment#from}
  */
  readonly from: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#to ApigatewayDeployment#to}
  */
  readonly to: string;
}

export function apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItemsToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItemsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: false, required: true
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItemsList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItems[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItemsOutputReference {
    return new ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeaders {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#items ApigatewayDeployment#items}
  */
  readonly items: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItems[] | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersOutputReference | ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItemsToTerraform, true)(struct!.items),
  }
}


export function apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersOutputReference | ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items = new ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#if_exists ApigatewayDeployment#if_exists}
  */
  readonly ifExists?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#name ApigatewayDeployment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#values ApigatewayDeployment#values}
  */
  readonly values: string[];
}

export function apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItemsToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    if_exists: cdktf.stringToTerraform(struct!.ifExists),
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItemsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    if_exists: {
      value: cdktf.stringToHclTerraform(struct!.ifExists),
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ifExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifExists = this._ifExists;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ifExists = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ifExists = value.ifExists;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // if_exists - computed: true, optional: true, required: false
  private _ifExists?: string; 
  public get ifExists() {
    return this.getStringAttribute('if_exists');
  }
  public set ifExists(value: string) {
    this._ifExists = value;
  }
  public resetIfExists() {
    this._ifExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifExistsInput() {
    return this._ifExists;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItemsList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItems[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItemsOutputReference {
    return new ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeaders {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#items ApigatewayDeployment#items}
  */
  readonly items: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItems[] | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersOutputReference | ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItemsToTerraform, true)(struct!.items),
  }
}


export function apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersOutputReference | ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items = new ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformations {
  /**
  * filter_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#filter_headers ApigatewayDeployment#filter_headers}
  */
  readonly filterHeaders?: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeaders;
  /**
  * rename_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#rename_headers ApigatewayDeployment#rename_headers}
  */
  readonly renameHeaders?: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeaders;
  /**
  * set_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#set_headers ApigatewayDeployment#set_headers}
  */
  readonly setHeaders?: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeaders;
}

export function apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsOutputReference | ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_headers: apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersToTerraform(struct!.filterHeaders),
    rename_headers: apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersToTerraform(struct!.renameHeaders),
    set_headers: apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersToTerraform(struct!.setHeaders),
  }
}


export function apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsOutputReference | ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_headers: {
      value: apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersToHclTerraform(struct!.filterHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersList",
    },
    rename_headers: {
      value: apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersToHclTerraform(struct!.renameHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersList",
    },
    set_headers: {
      value: apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersToHclTerraform(struct!.setHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterHeaders = this._filterHeaders?.internalValue;
    }
    if (this._renameHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.renameHeaders = this._renameHeaders?.internalValue;
    }
    if (this._setHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setHeaders = this._setHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterHeaders.internalValue = undefined;
      this._renameHeaders.internalValue = undefined;
      this._setHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterHeaders.internalValue = value.filterHeaders;
      this._renameHeaders.internalValue = value.renameHeaders;
      this._setHeaders.internalValue = value.setHeaders;
    }
  }

  // filter_headers - computed: false, optional: true, required: false
  private _filterHeaders = new ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersOutputReference(this, "filter_headers");
  public get filterHeaders() {
    return this._filterHeaders;
  }
  public putFilterHeaders(value: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeaders) {
    this._filterHeaders.internalValue = value;
  }
  public resetFilterHeaders() {
    this._filterHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterHeadersInput() {
    return this._filterHeaders.internalValue;
  }

  // rename_headers - computed: false, optional: true, required: false
  private _renameHeaders = new ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersOutputReference(this, "rename_headers");
  public get renameHeaders() {
    return this._renameHeaders;
  }
  public putRenameHeaders(value: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeaders) {
    this._renameHeaders.internalValue = value;
  }
  public resetRenameHeaders() {
    this._renameHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renameHeadersInput() {
    return this._renameHeaders.internalValue;
  }

  // set_headers - computed: false, optional: true, required: false
  private _setHeaders = new ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersOutputReference(this, "set_headers");
  public get setHeaders() {
    return this._setHeaders;
  }
  public putSetHeaders(value: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeaders) {
    this._setHeaders.internalValue = value;
  }
  public resetSetHeaders() {
    this._setHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setHeadersInput() {
    return this._setHeaders.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#time_to_live_in_seconds ApigatewayDeployment#time_to_live_in_seconds}
  */
  readonly timeToLiveInSeconds: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#type ApigatewayDeployment#type}
  */
  readonly type: string;
}

export function apigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStoreToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStoreOutputReference | ApigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_to_live_in_seconds: cdktf.numberToTerraform(struct!.timeToLiveInSeconds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function apigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStoreToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStoreOutputReference | ApigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_to_live_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeToLiveInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeToLiveInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToLiveInSeconds = this._timeToLiveInSeconds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeToLiveInSeconds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeToLiveInSeconds = value.timeToLiveInSeconds;
      this._type = value.type;
    }
  }

  // time_to_live_in_seconds - computed: false, optional: false, required: true
  private _timeToLiveInSeconds?: number; 
  public get timeToLiveInSeconds() {
    return this.getNumberAttribute('time_to_live_in_seconds');
  }
  public set timeToLiveInSeconds(value: number) {
    this._timeToLiveInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveInSecondsInput() {
    return this._timeToLiveInSeconds;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ApigatewayDeploymentSpecificationRoutesResponsePolicies {
  /**
  * header_transformations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#header_transformations ApigatewayDeployment#header_transformations}
  */
  readonly headerTransformations?: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformations;
  /**
  * response_cache_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#response_cache_store ApigatewayDeployment#response_cache_store}
  */
  readonly responseCacheStore?: ApigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStore;
}

export function apigatewayDeploymentSpecificationRoutesResponsePoliciesToTerraform(struct?: ApigatewayDeploymentSpecificationRoutesResponsePoliciesOutputReference | ApigatewayDeploymentSpecificationRoutesResponsePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_transformations: apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsToTerraform(struct!.headerTransformations),
    response_cache_store: apigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStoreToTerraform(struct!.responseCacheStore),
  }
}


export function apigatewayDeploymentSpecificationRoutesResponsePoliciesToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutesResponsePoliciesOutputReference | ApigatewayDeploymentSpecificationRoutesResponsePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_transformations: {
      value: apigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsToHclTerraform(struct!.headerTransformations),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsList",
    },
    response_cache_store: {
      value: apigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStoreToHclTerraform(struct!.responseCacheStore),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesResponsePoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecificationRoutesResponsePolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerTransformations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerTransformations = this._headerTransformations?.internalValue;
    }
    if (this._responseCacheStore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCacheStore = this._responseCacheStore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutesResponsePolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerTransformations.internalValue = undefined;
      this._responseCacheStore.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerTransformations.internalValue = value.headerTransformations;
      this._responseCacheStore.internalValue = value.responseCacheStore;
    }
  }

  // header_transformations - computed: false, optional: true, required: false
  private _headerTransformations = new ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsOutputReference(this, "header_transformations");
  public get headerTransformations() {
    return this._headerTransformations;
  }
  public putHeaderTransformations(value: ApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformations) {
    this._headerTransformations.internalValue = value;
  }
  public resetHeaderTransformations() {
    this._headerTransformations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerTransformationsInput() {
    return this._headerTransformations.internalValue;
  }

  // response_cache_store - computed: false, optional: true, required: false
  private _responseCacheStore = new ApigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStoreOutputReference(this, "response_cache_store");
  public get responseCacheStore() {
    return this._responseCacheStore;
  }
  public putResponseCacheStore(value: ApigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStore) {
    this._responseCacheStore.internalValue = value;
  }
  public resetResponseCacheStore() {
    this._responseCacheStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCacheStoreInput() {
    return this._responseCacheStore.internalValue;
  }
}
export interface ApigatewayDeploymentSpecificationRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#methods ApigatewayDeployment#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#path ApigatewayDeployment#path}
  */
  readonly path: string;
  /**
  * backend block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#backend ApigatewayDeployment#backend}
  */
  readonly backend: ApigatewayDeploymentSpecificationRoutesBackend;
  /**
  * logging_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#logging_policies ApigatewayDeployment#logging_policies}
  */
  readonly loggingPolicies?: ApigatewayDeploymentSpecificationRoutesLoggingPolicies;
  /**
  * request_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#request_policies ApigatewayDeployment#request_policies}
  */
  readonly requestPolicies?: ApigatewayDeploymentSpecificationRoutesRequestPolicies;
  /**
  * response_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#response_policies ApigatewayDeployment#response_policies}
  */
  readonly responsePolicies?: ApigatewayDeploymentSpecificationRoutesResponsePolicies;
}

export function apigatewayDeploymentSpecificationRoutesToTerraform(struct?: ApigatewayDeploymentSpecificationRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path: cdktf.stringToTerraform(struct!.path),
    backend: apigatewayDeploymentSpecificationRoutesBackendToTerraform(struct!.backend),
    logging_policies: apigatewayDeploymentSpecificationRoutesLoggingPoliciesToTerraform(struct!.loggingPolicies),
    request_policies: apigatewayDeploymentSpecificationRoutesRequestPoliciesToTerraform(struct!.requestPolicies),
    response_policies: apigatewayDeploymentSpecificationRoutesResponsePoliciesToTerraform(struct!.responsePolicies),
  }
}


export function apigatewayDeploymentSpecificationRoutesToHclTerraform(struct?: ApigatewayDeploymentSpecificationRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend: {
      value: apigatewayDeploymentSpecificationRoutesBackendToHclTerraform(struct!.backend),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesBackendList",
    },
    logging_policies: {
      value: apigatewayDeploymentSpecificationRoutesLoggingPoliciesToHclTerraform(struct!.loggingPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesLoggingPoliciesList",
    },
    request_policies: {
      value: apigatewayDeploymentSpecificationRoutesRequestPoliciesToHclTerraform(struct!.requestPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesRequestPoliciesList",
    },
    response_policies: {
      value: apigatewayDeploymentSpecificationRoutesResponsePoliciesToHclTerraform(struct!.responsePolicies),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesResponsePoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigatewayDeploymentSpecificationRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._backend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backend = this._backend?.internalValue;
    }
    if (this._loggingPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingPolicies = this._loggingPolicies?.internalValue;
    }
    if (this._requestPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPolicies = this._requestPolicies?.internalValue;
    }
    if (this._responsePolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responsePolicies = this._responsePolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecificationRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._methods = undefined;
      this._path = undefined;
      this._backend.internalValue = undefined;
      this._loggingPolicies.internalValue = undefined;
      this._requestPolicies.internalValue = undefined;
      this._responsePolicies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._methods = value.methods;
      this._path = value.path;
      this._backend.internalValue = value.backend;
      this._loggingPolicies.internalValue = value.loggingPolicies;
      this._requestPolicies.internalValue = value.requestPolicies;
      this._responsePolicies.internalValue = value.responsePolicies;
    }
  }

  // methods - computed: true, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
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

  // backend - computed: false, optional: false, required: true
  private _backend = new ApigatewayDeploymentSpecificationRoutesBackendOutputReference(this, "backend");
  public get backend() {
    return this._backend;
  }
  public putBackend(value: ApigatewayDeploymentSpecificationRoutesBackend) {
    this._backend.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend.internalValue;
  }

  // logging_policies - computed: false, optional: true, required: false
  private _loggingPolicies = new ApigatewayDeploymentSpecificationRoutesLoggingPoliciesOutputReference(this, "logging_policies");
  public get loggingPolicies() {
    return this._loggingPolicies;
  }
  public putLoggingPolicies(value: ApigatewayDeploymentSpecificationRoutesLoggingPolicies) {
    this._loggingPolicies.internalValue = value;
  }
  public resetLoggingPolicies() {
    this._loggingPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingPoliciesInput() {
    return this._loggingPolicies.internalValue;
  }

  // request_policies - computed: false, optional: true, required: false
  private _requestPolicies = new ApigatewayDeploymentSpecificationRoutesRequestPoliciesOutputReference(this, "request_policies");
  public get requestPolicies() {
    return this._requestPolicies;
  }
  public putRequestPolicies(value: ApigatewayDeploymentSpecificationRoutesRequestPolicies) {
    this._requestPolicies.internalValue = value;
  }
  public resetRequestPolicies() {
    this._requestPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPoliciesInput() {
    return this._requestPolicies.internalValue;
  }

  // response_policies - computed: false, optional: true, required: false
  private _responsePolicies = new ApigatewayDeploymentSpecificationRoutesResponsePoliciesOutputReference(this, "response_policies");
  public get responsePolicies() {
    return this._responsePolicies;
  }
  public putResponsePolicies(value: ApigatewayDeploymentSpecificationRoutesResponsePolicies) {
    this._responsePolicies.internalValue = value;
  }
  public resetResponsePolicies() {
    this._responsePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsePoliciesInput() {
    return this._responsePolicies.internalValue;
  }
}

export class ApigatewayDeploymentSpecificationRoutesList extends cdktf.ComplexList {
  public internalValue? : ApigatewayDeploymentSpecificationRoutes[] | cdktf.IResolvable

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
  public get(index: number): ApigatewayDeploymentSpecificationRoutesOutputReference {
    return new ApigatewayDeploymentSpecificationRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigatewayDeploymentSpecification {
  /**
  * logging_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#logging_policies ApigatewayDeployment#logging_policies}
  */
  readonly loggingPolicies?: ApigatewayDeploymentSpecificationLoggingPolicies;
  /**
  * request_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#request_policies ApigatewayDeployment#request_policies}
  */
  readonly requestPolicies?: ApigatewayDeploymentSpecificationRequestPolicies;
  /**
  * routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#routes ApigatewayDeployment#routes}
  */
  readonly routes: ApigatewayDeploymentSpecificationRoutes[] | cdktf.IResolvable;
}

export function apigatewayDeploymentSpecificationToTerraform(struct?: ApigatewayDeploymentSpecificationOutputReference | ApigatewayDeploymentSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logging_policies: apigatewayDeploymentSpecificationLoggingPoliciesToTerraform(struct!.loggingPolicies),
    request_policies: apigatewayDeploymentSpecificationRequestPoliciesToTerraform(struct!.requestPolicies),
    routes: cdktf.listMapper(apigatewayDeploymentSpecificationRoutesToTerraform, true)(struct!.routes),
  }
}


export function apigatewayDeploymentSpecificationToHclTerraform(struct?: ApigatewayDeploymentSpecificationOutputReference | ApigatewayDeploymentSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logging_policies: {
      value: apigatewayDeploymentSpecificationLoggingPoliciesToHclTerraform(struct!.loggingPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationLoggingPoliciesList",
    },
    request_policies: {
      value: apigatewayDeploymentSpecificationRequestPoliciesToHclTerraform(struct!.requestPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRequestPoliciesList",
    },
    routes: {
      value: cdktf.listMapperHcl(apigatewayDeploymentSpecificationRoutesToHclTerraform, true)(struct!.routes),
      isBlock: true,
      type: "list",
      storageClassType: "ApigatewayDeploymentSpecificationRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigatewayDeploymentSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loggingPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingPolicies = this._loggingPolicies?.internalValue;
    }
    if (this._requestPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPolicies = this._requestPolicies?.internalValue;
    }
    if (this._routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loggingPolicies.internalValue = undefined;
      this._requestPolicies.internalValue = undefined;
      this._routes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loggingPolicies.internalValue = value.loggingPolicies;
      this._requestPolicies.internalValue = value.requestPolicies;
      this._routes.internalValue = value.routes;
    }
  }

  // logging_policies - computed: false, optional: true, required: false
  private _loggingPolicies = new ApigatewayDeploymentSpecificationLoggingPoliciesOutputReference(this, "logging_policies");
  public get loggingPolicies() {
    return this._loggingPolicies;
  }
  public putLoggingPolicies(value: ApigatewayDeploymentSpecificationLoggingPolicies) {
    this._loggingPolicies.internalValue = value;
  }
  public resetLoggingPolicies() {
    this._loggingPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingPoliciesInput() {
    return this._loggingPolicies.internalValue;
  }

  // request_policies - computed: false, optional: true, required: false
  private _requestPolicies = new ApigatewayDeploymentSpecificationRequestPoliciesOutputReference(this, "request_policies");
  public get requestPolicies() {
    return this._requestPolicies;
  }
  public putRequestPolicies(value: ApigatewayDeploymentSpecificationRequestPolicies) {
    this._requestPolicies.internalValue = value;
  }
  public resetRequestPolicies() {
    this._requestPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPoliciesInput() {
    return this._requestPolicies.internalValue;
  }

  // routes - computed: false, optional: false, required: true
  private _routes = new ApigatewayDeploymentSpecificationRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: ApigatewayDeploymentSpecificationRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }
}
export interface ApigatewayDeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#create ApigatewayDeployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#delete ApigatewayDeployment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#update ApigatewayDeployment#update}
  */
  readonly update?: string;
}

export function apigatewayDeploymentTimeoutsToTerraform(struct?: ApigatewayDeploymentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function apigatewayDeploymentTimeoutsToHclTerraform(struct?: ApigatewayDeploymentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigatewayDeploymentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApigatewayDeploymentTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigatewayDeploymentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment oci_apigateway_deployment}
*/
export class ApigatewayDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_apigateway_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApigatewayDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApigatewayDeployment to import
  * @param importFromId The id of the existing ApigatewayDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApigatewayDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_apigateway_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/apigateway_deployment oci_apigateway_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigatewayDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: ApigatewayDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apigateway_deployment',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._gatewayId = config.gatewayId;
    this._id = config.id;
    this._isLockOverride = config.isLockOverride;
    this._pathPrefix = config.pathPrefix;
    this._locks.internalValue = config.locks;
    this._specification.internalValue = config.specification;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
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

  // is_lock_override - computed: true, optional: true, required: false
  private _isLockOverride?: boolean | cdktf.IResolvable; 
  public get isLockOverride() {
    return this.getBooleanAttribute('is_lock_override');
  }
  public set isLockOverride(value: boolean | cdktf.IResolvable) {
    this._isLockOverride = value;
  }
  public resetIsLockOverride() {
    this._isLockOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLockOverrideInput() {
    return this._isLockOverride;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // path_prefix - computed: false, optional: false, required: true
  private _pathPrefix?: string; 
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }
  public set pathPrefix(value: string) {
    this._pathPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixInput() {
    return this._pathPrefix;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // locks - computed: false, optional: true, required: false
  private _locks = new ApigatewayDeploymentLocksList(this, "locks", false);
  public get locks() {
    return this._locks;
  }
  public putLocks(value: ApigatewayDeploymentLocks[] | cdktf.IResolvable) {
    this._locks.internalValue = value;
  }
  public resetLocks() {
    this._locks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locksInput() {
    return this._locks.internalValue;
  }

  // specification - computed: false, optional: false, required: true
  private _specification = new ApigatewayDeploymentSpecificationOutputReference(this, "specification");
  public get specification() {
    return this._specification;
  }
  public putSpecification(value: ApigatewayDeploymentSpecification) {
    this._specification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specificationInput() {
    return this._specification.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApigatewayDeploymentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApigatewayDeploymentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      id: cdktf.stringToTerraform(this._id),
      is_lock_override: cdktf.booleanToTerraform(this._isLockOverride),
      path_prefix: cdktf.stringToTerraform(this._pathPrefix),
      locks: cdktf.listMapper(apigatewayDeploymentLocksToTerraform, true)(this._locks.internalValue),
      specification: apigatewayDeploymentSpecificationToTerraform(this._specification.internalValue),
      timeouts: apigatewayDeploymentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
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
      is_lock_override: {
        value: cdktf.booleanToHclTerraform(this._isLockOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      path_prefix: {
        value: cdktf.stringToHclTerraform(this._pathPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locks: {
        value: cdktf.listMapperHcl(apigatewayDeploymentLocksToHclTerraform, true)(this._locks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApigatewayDeploymentLocksList",
      },
      specification: {
        value: apigatewayDeploymentSpecificationToHclTerraform(this._specification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApigatewayDeploymentSpecificationList",
      },
      timeouts: {
        value: apigatewayDeploymentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApigatewayDeploymentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
