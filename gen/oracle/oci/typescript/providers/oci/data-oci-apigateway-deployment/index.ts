// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apigateway_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciApigatewayDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apigateway_deployment#deployment_id DataOciApigatewayDeployment#deployment_id}
  */
  readonly deploymentId: string;
}
export interface DataOciApigatewayDeploymentLocks {
}

export function dataOciApigatewayDeploymentLocksToTerraform(struct?: DataOciApigatewayDeploymentLocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentLocksToHclTerraform(struct?: DataOciApigatewayDeploymentLocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentLocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentLocks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentLocks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // related_resource_id - computed: true, optional: false, required: false
  public get relatedResourceId() {
    return this.getStringAttribute('related_resource_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciApigatewayDeploymentLocksList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentLocksOutputReference {
    return new DataOciApigatewayDeploymentLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationLoggingPoliciesAccessLog {
}

export function dataOciApigatewayDeploymentSpecificationLoggingPoliciesAccessLogToTerraform(struct?: DataOciApigatewayDeploymentSpecificationLoggingPoliciesAccessLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationLoggingPoliciesAccessLogToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationLoggingPoliciesAccessLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationLoggingPoliciesAccessLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationLoggingPoliciesAccessLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationLoggingPoliciesAccessLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}

export class DataOciApigatewayDeploymentSpecificationLoggingPoliciesAccessLogList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationLoggingPoliciesAccessLogOutputReference {
    return new DataOciApigatewayDeploymentSpecificationLoggingPoliciesAccessLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationLoggingPoliciesExecutionLog {
}

export function dataOciApigatewayDeploymentSpecificationLoggingPoliciesExecutionLogToTerraform(struct?: DataOciApigatewayDeploymentSpecificationLoggingPoliciesExecutionLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationLoggingPoliciesExecutionLogToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationLoggingPoliciesExecutionLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationLoggingPoliciesExecutionLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationLoggingPoliciesExecutionLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationLoggingPoliciesExecutionLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
}

export class DataOciApigatewayDeploymentSpecificationLoggingPoliciesExecutionLogList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationLoggingPoliciesExecutionLogOutputReference {
    return new DataOciApigatewayDeploymentSpecificationLoggingPoliciesExecutionLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationLoggingPolicies {
}

export function dataOciApigatewayDeploymentSpecificationLoggingPoliciesToTerraform(struct?: DataOciApigatewayDeploymentSpecificationLoggingPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationLoggingPoliciesToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationLoggingPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationLoggingPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationLoggingPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationLoggingPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_log - computed: true, optional: false, required: false
  private _accessLog = new DataOciApigatewayDeploymentSpecificationLoggingPoliciesAccessLogList(this, "access_log", false);
  public get accessLog() {
    return this._accessLog;
  }

  // execution_log - computed: true, optional: false, required: false
  private _executionLog = new DataOciApigatewayDeploymentSpecificationLoggingPoliciesExecutionLogList(this, "execution_log", false);
  public get executionLog() {
    return this._executionLog;
  }
}

export class DataOciApigatewayDeploymentSpecificationLoggingPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationLoggingPoliciesOutputReference {
    return new DataOciApigatewayDeploymentSpecificationLoggingPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeys {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeysToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeysToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alg - computed: true, optional: false, required: false
  public get alg() {
    return this.getStringAttribute('alg');
  }

  // e - computed: true, optional: false, required: false
  public get e() {
    return this.getStringAttribute('e');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // key_ops - computed: true, optional: false, required: false
  public get keyOps() {
    return this.getListAttribute('key_ops');
  }

  // kid - computed: true, optional: false, required: false
  public get kid() {
    return this.getStringAttribute('kid');
  }

  // kty - computed: true, optional: false, required: false
  public get kty() {
    return this.getStringAttribute('kty');
  }

  // n - computed: true, optional: false, required: false
  public get n() {
    return this.getStringAttribute('n');
  }

  // use - computed: true, optional: false, required: false
  public get use() {
    return this.getStringAttribute('use');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeysOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeys {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_ssl_verify_disabled - computed: true, optional: false, required: false
  public get isSslVerifyDisabled() {
    return this.getBooleanAttribute('is_ssl_verify_disabled');
  }

  // keys - computed: true, optional: false, required: false
  private _keys = new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysKeysList(this, "keys", false);
  public get keys() {
    return this._keys;
  }

  // max_cache_duration_in_hours - computed: true, optional: false, required: false
  public get maxCacheDurationInHours() {
    return this.getNumberAttribute('max_cache_duration_in_hours');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetails {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetailsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetailsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret_id - computed: true, optional: false, required: false
  public get clientSecretId() {
    return this.getStringAttribute('client_secret_id');
  }

  // client_secret_version_number - computed: true, optional: false, required: false
  public get clientSecretVersionNumber() {
    return this.getStringAttribute('client_secret_version_number');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetailsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItems {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItems | undefined) {
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
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeaders {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItems {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getStringAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getStringAttribute('to');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeaders {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItems {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // if_exists - computed: true, optional: false, required: false
  public get ifExists() {
    return this.getStringAttribute('if_exists');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeaders {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformations {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter_headers - computed: true, optional: false, required: false
  private _filterHeaders = new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsFilterHeadersList(this, "filter_headers", false);
  public get filterHeaders() {
    return this._filterHeaders;
  }

  // rename_headers - computed: true, optional: false, required: false
  private _renameHeaders = new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsRenameHeadersList(this, "rename_headers", false);
  public get renameHeaders() {
    return this._renameHeaders;
  }

  // set_headers - computed: true, optional: false, required: false
  private _setHeaders = new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsSetHeadersList(this, "set_headers", false);
  public get setHeaders() {
    return this._setHeaders;
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetails {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetailsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetailsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetailsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicy {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_details - computed: true, optional: false, required: false
  private _clientDetails = new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyClientDetailsList(this, "client_details", false);
  public get clientDetails() {
    return this._clientDetails;
  }

  // fallback_redirect_path - computed: true, optional: false, required: false
  public get fallbackRedirectPath() {
    return this.getStringAttribute('fallback_redirect_path');
  }

  // logout_path - computed: true, optional: false, required: false
  public get logoutPath() {
    return this.getStringAttribute('logout_path');
  }

  // max_expiry_duration_in_hours - computed: true, optional: false, required: false
  public get maxExpiryDurationInHours() {
    return this.getNumberAttribute('max_expiry_duration_in_hours');
  }

  // response_code - computed: true, optional: false, required: false
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }

  // response_header_transformations - computed: true, optional: false, required: false
  private _responseHeaderTransformations = new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyResponseHeaderTransformationsList(this, "response_header_transformations", false);
  public get responseHeaderTransformations() {
    return this._responseHeaderTransformations;
  }

  // response_message - computed: true, optional: false, required: false
  public get responseMessage() {
    return this.getStringAttribute('response_message');
  }

  // response_type - computed: true, optional: false, required: false
  public get responseType() {
    return this.getStringAttribute('response_type');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // source_uri_details - computed: true, optional: false, required: false
  private _sourceUriDetails = new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicySourceUriDetailsList(this, "source_uri_details", false);
  public get sourceUriDetails() {
    return this._sourceUriDetails;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_cookies_for_intermediate_steps - computed: true, optional: false, required: false
  public get useCookiesForIntermediateSteps() {
    return this.getBooleanAttribute('use_cookies_for_intermediate_steps');
  }

  // use_cookies_for_session - computed: true, optional: false, required: false
  public get useCookiesForSession() {
    return this.getBooleanAttribute('use_cookies_for_session');
  }

  // use_pkce - computed: true, optional: false, required: false
  public get usePkce() {
    return this.getBooleanAttribute('use_pkce');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaims {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaimsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaimsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_required - computed: true, optional: false, required: false
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaimsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaimsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicy {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audiences - computed: true, optional: false, required: false
  public get audiences() {
    return this.getListAttribute('audiences');
  }

  // issuers - computed: true, optional: false, required: false
  public get issuers() {
    return this.getListAttribute('issuers');
  }

  // verify_claims - computed: true, optional: false, required: false
  private _verifyClaims = new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyVerifyClaimsList(this, "verify_claims", false);
  public get verifyClaims() {
    return this._verifyClaims;
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetails {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetailsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetailsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret_id - computed: true, optional: false, required: false
  public get clientSecretId() {
    return this.getStringAttribute('client_secret_id');
  }

  // client_secret_version_number - computed: true, optional: false, required: false
  public get clientSecretVersionNumber() {
    return this.getStringAttribute('client_secret_version_number');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetailsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeys {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeysToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeysToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alg - computed: true, optional: false, required: false
  public get alg() {
    return this.getStringAttribute('alg');
  }

  // e - computed: true, optional: false, required: false
  public get e() {
    return this.getStringAttribute('e');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // key_ops - computed: true, optional: false, required: false
  public get keyOps() {
    return this.getListAttribute('key_ops');
  }

  // kid - computed: true, optional: false, required: false
  public get kid() {
    return this.getStringAttribute('kid');
  }

  // kty - computed: true, optional: false, required: false
  public get kty() {
    return this.getStringAttribute('kty');
  }

  // n - computed: true, optional: false, required: false
  public get n() {
    return this.getStringAttribute('n');
  }

  // use - computed: true, optional: false, required: false
  public get use() {
    return this.getStringAttribute('use');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeysOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetails {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetailsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetailsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetailsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicy {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_validation_policy - computed: true, optional: false, required: false
  private _additionalValidationPolicy = new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyAdditionalValidationPolicyList(this, "additional_validation_policy", false);
  public get additionalValidationPolicy() {
    return this._additionalValidationPolicy;
  }

  // client_details - computed: true, optional: false, required: false
  private _clientDetails = new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyClientDetailsList(this, "client_details", false);
  public get clientDetails() {
    return this._clientDetails;
  }

  // is_ssl_verify_disabled - computed: true, optional: false, required: false
  public get isSslVerifyDisabled() {
    return this.getBooleanAttribute('is_ssl_verify_disabled');
  }

  // keys - computed: true, optional: false, required: false
  private _keys = new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyKeysList(this, "keys", false);
  public get keys() {
    return this._keys;
  }

  // max_cache_duration_in_hours - computed: true, optional: false, required: false
  public get maxCacheDurationInHours() {
    return this.getNumberAttribute('max_cache_duration_in_hours');
  }

  // source_uri_details - computed: true, optional: false, required: false
  private _sourceUriDetails = new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicySourceUriDetailsList(this, "source_uri_details", false);
  public get sourceUriDetails() {
    return this._sourceUriDetails;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaims {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaimsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaimsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_required - computed: true, optional: false, required: false
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaimsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaimsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthentication {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audiences - computed: true, optional: false, required: false
  public get audiences() {
    return this.getListAttribute('audiences');
  }

  // cache_key - computed: true, optional: false, required: false
  public get cacheKey() {
    return this.getListAttribute('cache_key');
  }

  // function_id - computed: true, optional: false, required: false
  public get functionId() {
    return this.getStringAttribute('function_id');
  }

  // is_anonymous_access_allowed - computed: true, optional: false, required: false
  public get isAnonymousAccessAllowed() {
    return this.getBooleanAttribute('is_anonymous_access_allowed');
  }

  // issuers - computed: true, optional: false, required: false
  public get issuers() {
    return this.getListAttribute('issuers');
  }

  // max_clock_skew_in_seconds - computed: true, optional: false, required: false
  public get maxClockSkewInSeconds() {
    return this.getNumberAttribute('max_clock_skew_in_seconds');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new cdktf.StringMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // public_keys - computed: true, optional: false, required: false
  private _publicKeys = new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationPublicKeysList(this, "public_keys", false);
  public get publicKeys() {
    return this._publicKeys;
  }

  // token_auth_scheme - computed: true, optional: false, required: false
  public get tokenAuthScheme() {
    return this.getStringAttribute('token_auth_scheme');
  }

  // token_header - computed: true, optional: false, required: false
  public get tokenHeader() {
    return this.getStringAttribute('token_header');
  }

  // token_query_param - computed: true, optional: false, required: false
  public get tokenQueryParam() {
    return this.getStringAttribute('token_query_param');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // validation_failure_policy - computed: true, optional: false, required: false
  private _validationFailurePolicy = new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationFailurePolicyList(this, "validation_failure_policy", false);
  public get validationFailurePolicy() {
    return this._validationFailurePolicy;
  }

  // validation_policy - computed: true, optional: false, required: false
  private _validationPolicy = new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationValidationPolicyList(this, "validation_policy", false);
  public get validationPolicy() {
    return this._validationPolicy;
  }

  // verify_claims - computed: true, optional: false, required: false
  private _verifyClaims = new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationVerifyClaimsList(this, "verify_claims", false);
  public get verifyClaims() {
    return this._verifyClaims;
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesCors {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesCorsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesCorsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesCorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesCors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesCors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_headers - computed: true, optional: false, required: false
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }

  // allowed_methods - computed: true, optional: false, required: false
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }

  // allowed_origins - computed: true, optional: false, required: false
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }

  // exposed_headers - computed: true, optional: false, required: false
  public get exposedHeaders() {
    return this.getListAttribute('exposed_headers');
  }

  // is_allow_credentials_enabled - computed: true, optional: false, required: false
  public get isAllowCredentialsEnabled() {
    return this.getBooleanAttribute('is_allow_credentials_enabled');
  }

  // max_age_in_seconds - computed: true, optional: false, required: false
  public get maxAgeInSeconds() {
    return this.getNumberAttribute('max_age_in_seconds');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesCorsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesCorsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesCorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeys {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeysToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeysToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alg - computed: true, optional: false, required: false
  public get alg() {
    return this.getStringAttribute('alg');
  }

  // e - computed: true, optional: false, required: false
  public get e() {
    return this.getStringAttribute('e');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // key_ops - computed: true, optional: false, required: false
  public get keyOps() {
    return this.getListAttribute('key_ops');
  }

  // kid - computed: true, optional: false, required: false
  public get kid() {
    return this.getStringAttribute('kid');
  }

  // kty - computed: true, optional: false, required: false
  public get kty() {
    return this.getStringAttribute('kty');
  }

  // n - computed: true, optional: false, required: false
  public get n() {
    return this.getStringAttribute('n');
  }

  // use - computed: true, optional: false, required: false
  public get use() {
    return this.getStringAttribute('use');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeysOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeys {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_ssl_verify_disabled - computed: true, optional: false, required: false
  public get isSslVerifyDisabled() {
    return this.getBooleanAttribute('is_ssl_verify_disabled');
  }

  // keys - computed: true, optional: false, required: false
  private _keys = new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysKeysList(this, "keys", false);
  public get keys() {
    return this._keys;
  }

  // max_cache_duration_in_hours - computed: true, optional: false, required: false
  public get maxCacheDurationInHours() {
    return this.getNumberAttribute('max_cache_duration_in_hours');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetails {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetailsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetailsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret_id - computed: true, optional: false, required: false
  public get clientSecretId() {
    return this.getStringAttribute('client_secret_id');
  }

  // client_secret_version_number - computed: true, optional: false, required: false
  public get clientSecretVersionNumber() {
    return this.getStringAttribute('client_secret_version_number');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetailsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItems {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItems | undefined) {
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
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeaders {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItems {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getStringAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getStringAttribute('to');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeaders {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItems {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // if_exists - computed: true, optional: false, required: false
  public get ifExists() {
    return this.getStringAttribute('if_exists');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeaders {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformations {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter_headers - computed: true, optional: false, required: false
  private _filterHeaders = new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsFilterHeadersList(this, "filter_headers", false);
  public get filterHeaders() {
    return this._filterHeaders;
  }

  // rename_headers - computed: true, optional: false, required: false
  private _renameHeaders = new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsRenameHeadersList(this, "rename_headers", false);
  public get renameHeaders() {
    return this._renameHeaders;
  }

  // set_headers - computed: true, optional: false, required: false
  private _setHeaders = new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsSetHeadersList(this, "set_headers", false);
  public get setHeaders() {
    return this._setHeaders;
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetails {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetailsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetailsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetailsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicy {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_details - computed: true, optional: false, required: false
  private _clientDetails = new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyClientDetailsList(this, "client_details", false);
  public get clientDetails() {
    return this._clientDetails;
  }

  // fallback_redirect_path - computed: true, optional: false, required: false
  public get fallbackRedirectPath() {
    return this.getStringAttribute('fallback_redirect_path');
  }

  // logout_path - computed: true, optional: false, required: false
  public get logoutPath() {
    return this.getStringAttribute('logout_path');
  }

  // max_expiry_duration_in_hours - computed: true, optional: false, required: false
  public get maxExpiryDurationInHours() {
    return this.getNumberAttribute('max_expiry_duration_in_hours');
  }

  // response_code - computed: true, optional: false, required: false
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }

  // response_header_transformations - computed: true, optional: false, required: false
  private _responseHeaderTransformations = new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyResponseHeaderTransformationsList(this, "response_header_transformations", false);
  public get responseHeaderTransformations() {
    return this._responseHeaderTransformations;
  }

  // response_message - computed: true, optional: false, required: false
  public get responseMessage() {
    return this.getStringAttribute('response_message');
  }

  // response_type - computed: true, optional: false, required: false
  public get responseType() {
    return this.getStringAttribute('response_type');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // source_uri_details - computed: true, optional: false, required: false
  private _sourceUriDetails = new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicySourceUriDetailsList(this, "source_uri_details", false);
  public get sourceUriDetails() {
    return this._sourceUriDetails;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_cookies_for_intermediate_steps - computed: true, optional: false, required: false
  public get useCookiesForIntermediateSteps() {
    return this.getBooleanAttribute('use_cookies_for_intermediate_steps');
  }

  // use_cookies_for_session - computed: true, optional: false, required: false
  public get useCookiesForSession() {
    return this.getBooleanAttribute('use_cookies_for_session');
  }

  // use_pkce - computed: true, optional: false, required: false
  public get usePkce() {
    return this.getBooleanAttribute('use_pkce');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaims {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaimsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaimsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_required - computed: true, optional: false, required: false
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaimsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaimsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicy {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audiences - computed: true, optional: false, required: false
  public get audiences() {
    return this.getListAttribute('audiences');
  }

  // issuers - computed: true, optional: false, required: false
  public get issuers() {
    return this.getListAttribute('issuers');
  }

  // verify_claims - computed: true, optional: false, required: false
  private _verifyClaims = new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyVerifyClaimsList(this, "verify_claims", false);
  public get verifyClaims() {
    return this._verifyClaims;
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetails {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetailsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetailsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret_id - computed: true, optional: false, required: false
  public get clientSecretId() {
    return this.getStringAttribute('client_secret_id');
  }

  // client_secret_version_number - computed: true, optional: false, required: false
  public get clientSecretVersionNumber() {
    return this.getStringAttribute('client_secret_version_number');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetailsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeys {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeysToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeysToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alg - computed: true, optional: false, required: false
  public get alg() {
    return this.getStringAttribute('alg');
  }

  // e - computed: true, optional: false, required: false
  public get e() {
    return this.getStringAttribute('e');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // key_ops - computed: true, optional: false, required: false
  public get keyOps() {
    return this.getListAttribute('key_ops');
  }

  // kid - computed: true, optional: false, required: false
  public get kid() {
    return this.getStringAttribute('kid');
  }

  // kty - computed: true, optional: false, required: false
  public get kty() {
    return this.getStringAttribute('kty');
  }

  // n - computed: true, optional: false, required: false
  public get n() {
    return this.getStringAttribute('n');
  }

  // use - computed: true, optional: false, required: false
  public get use() {
    return this.getStringAttribute('use');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeysOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetails {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetailsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetailsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetailsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicy {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_validation_policy - computed: true, optional: false, required: false
  private _additionalValidationPolicy = new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyAdditionalValidationPolicyList(this, "additional_validation_policy", false);
  public get additionalValidationPolicy() {
    return this._additionalValidationPolicy;
  }

  // client_details - computed: true, optional: false, required: false
  private _clientDetails = new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyClientDetailsList(this, "client_details", false);
  public get clientDetails() {
    return this._clientDetails;
  }

  // is_ssl_verify_disabled - computed: true, optional: false, required: false
  public get isSslVerifyDisabled() {
    return this.getBooleanAttribute('is_ssl_verify_disabled');
  }

  // keys - computed: true, optional: false, required: false
  private _keys = new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyKeysList(this, "keys", false);
  public get keys() {
    return this._keys;
  }

  // max_cache_duration_in_hours - computed: true, optional: false, required: false
  public get maxCacheDurationInHours() {
    return this.getNumberAttribute('max_cache_duration_in_hours');
  }

  // source_uri_details - computed: true, optional: false, required: false
  private _sourceUriDetails = new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicySourceUriDetailsList(this, "source_uri_details", false);
  public get sourceUriDetails() {
    return this._sourceUriDetails;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaims {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaimsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaimsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_required - computed: true, optional: false, required: false
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaimsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaimsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetail {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audiences - computed: true, optional: false, required: false
  public get audiences() {
    return this.getListAttribute('audiences');
  }

  // cache_key - computed: true, optional: false, required: false
  public get cacheKey() {
    return this.getListAttribute('cache_key');
  }

  // function_id - computed: true, optional: false, required: false
  public get functionId() {
    return this.getStringAttribute('function_id');
  }

  // is_anonymous_access_allowed - computed: true, optional: false, required: false
  public get isAnonymousAccessAllowed() {
    return this.getBooleanAttribute('is_anonymous_access_allowed');
  }

  // issuers - computed: true, optional: false, required: false
  public get issuers() {
    return this.getListAttribute('issuers');
  }

  // max_clock_skew_in_seconds - computed: true, optional: false, required: false
  public get maxClockSkewInSeconds() {
    return this.getNumberAttribute('max_clock_skew_in_seconds');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new cdktf.StringMap(this, "parameters");
  public get parameters() {
    return this._parameters;
  }

  // public_keys - computed: true, optional: false, required: false
  private _publicKeys = new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailPublicKeysList(this, "public_keys", false);
  public get publicKeys() {
    return this._publicKeys;
  }

  // token_auth_scheme - computed: true, optional: false, required: false
  public get tokenAuthScheme() {
    return this.getStringAttribute('token_auth_scheme');
  }

  // token_header - computed: true, optional: false, required: false
  public get tokenHeader() {
    return this.getStringAttribute('token_header');
  }

  // token_query_param - computed: true, optional: false, required: false
  public get tokenQueryParam() {
    return this.getStringAttribute('token_query_param');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // validation_failure_policy - computed: true, optional: false, required: false
  private _validationFailurePolicy = new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationFailurePolicyList(this, "validation_failure_policy", false);
  public get validationFailurePolicy() {
    return this._validationFailurePolicy;
  }

  // validation_policy - computed: true, optional: false, required: false
  private _validationPolicy = new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailValidationPolicyList(this, "validation_policy", false);
  public get validationPolicy() {
    return this._validationPolicy;
  }

  // verify_claims - computed: true, optional: false, required: false
  private _verifyClaims = new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailVerifyClaimsList(this, "verify_claims", false);
  public get verifyClaims() {
    return this._verifyClaims;
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKey {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKeyToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKeyToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKeyOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServers {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_server_detail - computed: true, optional: false, required: false
  private _authenticationServerDetail = new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersAuthenticationServerDetailList(this, "authentication_server_detail", false);
  public get authenticationServerDetail() {
    return this._authenticationServerDetail;
  }

  // key - computed: true, optional: false, required: false
  private _key = new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersKeyList(this, "key", false);
  public get key() {
    return this._key;
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSource {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSourceToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSourceToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSourceOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthentication {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_servers - computed: true, optional: false, required: false
  private _authenticationServers = new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationAuthenticationServersList(this, "authentication_servers", false);
  public get authenticationServers() {
    return this._authenticationServers;
  }

  // selection_source - computed: true, optional: false, required: false
  private _selectionSource = new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationSelectionSourceList(this, "selection_source", false);
  public get selectionSource() {
    return this._selectionSource;
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesMutualTls {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesMutualTlsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesMutualTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesMutualTlsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesMutualTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesMutualTlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesMutualTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesMutualTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_sans - computed: true, optional: false, required: false
  public get allowedSans() {
    return this.getListAttribute('allowed_sans');
  }

  // is_verified_certificate_required - computed: true, optional: false, required: false
  public get isVerifiedCertificateRequired() {
    return this.getBooleanAttribute('is_verified_certificate_required');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesMutualTlsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesMutualTlsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesMutualTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesRateLimiting {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesRateLimitingToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesRateLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesRateLimitingToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesRateLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesRateLimitingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesRateLimiting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesRateLimiting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rate_in_requests_per_second - computed: true, optional: false, required: false
  public get rateInRequestsPerSecond() {
    return this.getNumberAttribute('rate_in_requests_per_second');
  }

  // rate_key - computed: true, optional: false, required: false
  public get rateKey() {
    return this.getStringAttribute('rate_key');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesRateLimitingList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesRateLimitingOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesRateLimitingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPoliciesUsagePlans {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesUsagePlansToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesUsagePlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesUsagePlansToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPoliciesUsagePlans): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesUsagePlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPoliciesUsagePlans | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPoliciesUsagePlans | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // token_locations - computed: true, optional: false, required: false
  public get tokenLocations() {
    return this.getListAttribute('token_locations');
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesUsagePlansList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesUsagePlansOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesUsagePlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRequestPolicies {
}

export function dataOciApigatewayDeploymentSpecificationRequestPoliciesToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRequestPoliciesToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRequestPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRequestPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRequestPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication - computed: true, optional: false, required: false
  private _authentication = new DataOciApigatewayDeploymentSpecificationRequestPoliciesAuthenticationList(this, "authentication", false);
  public get authentication() {
    return this._authentication;
  }

  // cors - computed: true, optional: false, required: false
  private _cors = new DataOciApigatewayDeploymentSpecificationRequestPoliciesCorsList(this, "cors", false);
  public get cors() {
    return this._cors;
  }

  // dynamic_authentication - computed: true, optional: false, required: false
  private _dynamicAuthentication = new DataOciApigatewayDeploymentSpecificationRequestPoliciesDynamicAuthenticationList(this, "dynamic_authentication", false);
  public get dynamicAuthentication() {
    return this._dynamicAuthentication;
  }

  // mutual_tls - computed: true, optional: false, required: false
  private _mutualTls = new DataOciApigatewayDeploymentSpecificationRequestPoliciesMutualTlsList(this, "mutual_tls", false);
  public get mutualTls() {
    return this._mutualTls;
  }

  // rate_limiting - computed: true, optional: false, required: false
  private _rateLimiting = new DataOciApigatewayDeploymentSpecificationRequestPoliciesRateLimitingList(this, "rate_limiting", false);
  public get rateLimiting() {
    return this._rateLimiting;
  }

  // usage_plans - computed: true, optional: false, required: false
  private _usagePlans = new DataOciApigatewayDeploymentSpecificationRequestPoliciesUsagePlansList(this, "usage_plans", false);
  public get usagePlans() {
    return this._usagePlans;
  }
}

export class DataOciApigatewayDeploymentSpecificationRequestPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRequestPoliciesOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRequestPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesBackendHeaders {
}

export function dataOciApigatewayDeploymentSpecificationRoutesBackendHeadersToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesBackendHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesBackendHeadersToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesBackendHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesBackendHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesBackendHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesBackendHeaders | undefined) {
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

export class DataOciApigatewayDeploymentSpecificationRoutesBackendHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesBackendHeadersOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesBackendHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendHeaders {
}

export function dataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendHeadersToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendHeadersToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendHeaders | undefined) {
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

export class DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendHeadersOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackend {
}

export function dataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackend | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackend | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // connect_timeout_in_seconds - computed: true, optional: false, required: false
  public get connectTimeoutInSeconds() {
    return this.getNumberAttribute('connect_timeout_in_seconds');
  }

  // function_id - computed: true, optional: false, required: false
  public get functionId() {
    return this.getStringAttribute('function_id');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // is_ssl_verify_disabled - computed: true, optional: false, required: false
  public get isSslVerifyDisabled() {
    return this.getBooleanAttribute('is_ssl_verify_disabled');
  }

  // read_timeout_in_seconds - computed: true, optional: false, required: false
  public get readTimeoutInSeconds() {
    return this.getNumberAttribute('read_timeout_in_seconds');
  }

  // send_timeout_in_seconds - computed: true, optional: false, required: false
  public get sendTimeoutInSeconds() {
    return this.getNumberAttribute('send_timeout_in_seconds');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKey {
}

export function dataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKeyToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKeyToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKeyOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackends {
}

export function dataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackends): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackends): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackends | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackends | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backend - computed: true, optional: false, required: false
  private _backend = new DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsBackendList(this, "backend", false);
  public get backend() {
    return this._backend;
  }

  // key - computed: true, optional: false, required: false
  private _key = new DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsKeyList(this, "key", false);
  public get key() {
    return this._key;
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesBackendSelectionSource {
}

export function dataOciApigatewayDeploymentSpecificationRoutesBackendSelectionSourceToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesBackendSelectionSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesBackendSelectionSourceToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesBackendSelectionSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesBackendSelectionSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesBackendSelectionSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesBackendSelectionSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesBackendSelectionSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesBackendSelectionSourceOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesBackendSelectionSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesBackend {
}

export function dataOciApigatewayDeploymentSpecificationRoutesBackendToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesBackend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesBackendToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesBackend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesBackendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesBackend | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesBackend | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_post_logout_uris - computed: true, optional: false, required: false
  public get allowedPostLogoutUris() {
    return this.getListAttribute('allowed_post_logout_uris');
  }

  // body - computed: true, optional: false, required: false
  public get body() {
    return this.getStringAttribute('body');
  }

  // connect_timeout_in_seconds - computed: true, optional: false, required: false
  public get connectTimeoutInSeconds() {
    return this.getNumberAttribute('connect_timeout_in_seconds');
  }

  // function_id - computed: true, optional: false, required: false
  public get functionId() {
    return this.getStringAttribute('function_id');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataOciApigatewayDeploymentSpecificationRoutesBackendHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // is_ssl_verify_disabled - computed: true, optional: false, required: false
  public get isSslVerifyDisabled() {
    return this.getBooleanAttribute('is_ssl_verify_disabled');
  }

  // post_logout_state - computed: true, optional: false, required: false
  public get postLogoutState() {
    return this.getStringAttribute('post_logout_state');
  }

  // read_timeout_in_seconds - computed: true, optional: false, required: false
  public get readTimeoutInSeconds() {
    return this.getNumberAttribute('read_timeout_in_seconds');
  }

  // routing_backends - computed: true, optional: false, required: false
  private _routingBackends = new DataOciApigatewayDeploymentSpecificationRoutesBackendRoutingBackendsList(this, "routing_backends", false);
  public get routingBackends() {
    return this._routingBackends;
  }

  // selection_source - computed: true, optional: false, required: false
  private _selectionSource = new DataOciApigatewayDeploymentSpecificationRoutesBackendSelectionSourceList(this, "selection_source", false);
  public get selectionSource() {
    return this._selectionSource;
  }

  // send_timeout_in_seconds - computed: true, optional: false, required: false
  public get sendTimeoutInSeconds() {
    return this.getNumberAttribute('send_timeout_in_seconds');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesBackendList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesBackendOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesBackendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLog {
}

export function dataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLogToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLogToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLogList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLogOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLog {
}

export function dataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLogToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLogToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLogList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLogOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesLoggingPolicies {
}

export function dataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesLoggingPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesLoggingPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesLoggingPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesLoggingPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_log - computed: true, optional: false, required: false
  private _accessLog = new DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesAccessLogList(this, "access_log", false);
  public get accessLog() {
    return this._accessLog;
  }

  // execution_log - computed: true, optional: false, required: false
  private _executionLog = new DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesExecutionLogList(this, "execution_log", false);
  public get executionLog() {
    return this._executionLog;
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorization {
}

export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorizationToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorizationToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_scope - computed: true, optional: false, required: false
  public get allowedScope() {
    return this.getListAttribute('allowed_scope');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorizationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorizationOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContent {
}

export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContentToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContentToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // media_type - computed: true, optional: false, required: false
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }

  // validation_type - computed: true, optional: false, required: false
  public get validationType() {
    return this.getStringAttribute('validation_type');
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContentList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContentOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidation {
}

export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  private _content = new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationContentList(this, "content", false);
  public get content() {
    return this._content;
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // validation_mode - computed: true, optional: false, required: false
  public get validationMode() {
    return this.getStringAttribute('validation_mode');
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesCors {
}

export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesCorsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesCorsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesCors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesCorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesCors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesCors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_headers - computed: true, optional: false, required: false
  public get allowedHeaders() {
    return this.getListAttribute('allowed_headers');
  }

  // allowed_methods - computed: true, optional: false, required: false
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }

  // allowed_origins - computed: true, optional: false, required: false
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }

  // exposed_headers - computed: true, optional: false, required: false
  public get exposedHeaders() {
    return this.getListAttribute('exposed_headers');
  }

  // is_allow_credentials_enabled - computed: true, optional: false, required: false
  public get isAllowCredentialsEnabled() {
    return this.getBooleanAttribute('is_allow_credentials_enabled');
  }

  // max_age_in_seconds - computed: true, optional: false, required: false
  public get maxAgeInSeconds() {
    return this.getNumberAttribute('max_age_in_seconds');
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesCorsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesCorsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesCorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItems {
}

export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItemsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItemsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItems | undefined) {
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
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItemsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeaders {
}

export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItems {
}

export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItemsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItemsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getStringAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getStringAttribute('to');
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItemsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeaders {
}

export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItems {
}

export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItemsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItemsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // if_exists - computed: true, optional: false, required: false
  public get ifExists() {
    return this.getStringAttribute('if_exists');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItemsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeaders {
}

export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformations {
}

export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter_headers - computed: true, optional: false, required: false
  private _filterHeaders = new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsFilterHeadersList(this, "filter_headers", false);
  public get filterHeaders() {
    return this._filterHeaders;
  }

  // rename_headers - computed: true, optional: false, required: false
  private _renameHeaders = new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsRenameHeadersList(this, "rename_headers", false);
  public get renameHeaders() {
    return this._renameHeaders;
  }

  // set_headers - computed: true, optional: false, required: false
  private _setHeaders = new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsSetHeadersList(this, "set_headers", false);
  public get setHeaders() {
    return this._setHeaders;
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeaders {
}

export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeadersToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeadersToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeaders | undefined) {
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

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeadersOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidations {
}

export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // validation_mode - computed: true, optional: false, required: false
  public get validationMode() {
    return this.getStringAttribute('validation_mode');
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItems {
}

export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItemsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItemsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItems | undefined) {
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
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItemsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParameters {
}

export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItems {
}

export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItemsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItemsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getStringAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getStringAttribute('to');
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItemsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParameters {
}

export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItems {
}

export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItemsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItemsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // if_exists - computed: true, optional: false, required: false
  public get ifExists() {
    return this.getStringAttribute('if_exists');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItemsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParameters {
}

export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformations {
}

export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter_query_parameters - computed: true, optional: false, required: false
  private _filterQueryParameters = new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsFilterQueryParametersList(this, "filter_query_parameters", false);
  public get filterQueryParameters() {
    return this._filterQueryParameters;
  }

  // rename_query_parameters - computed: true, optional: false, required: false
  private _renameQueryParameters = new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsRenameQueryParametersList(this, "rename_query_parameters", false);
  public get renameQueryParameters() {
    return this._renameQueryParameters;
  }

  // set_query_parameters - computed: true, optional: false, required: false
  private _setQueryParameters = new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsSetQueryParametersList(this, "set_query_parameters", false);
  public get setQueryParameters() {
    return this._setQueryParameters;
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParameters {
}

export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParametersToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParametersToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParameters | undefined) {
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

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParametersOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidations {
}

export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // validation_mode - computed: true, optional: false, required: false
  public get validationMode() {
    return this.getStringAttribute('validation_mode');
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookup {
}

export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookupToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookupToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cache_key_additions - computed: true, optional: false, required: false
  public get cacheKeyAdditions() {
    return this.getListAttribute('cache_key_additions');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // is_private_caching_enabled - computed: true, optional: false, required: false
  public get isPrivateCachingEnabled() {
    return this.getBooleanAttribute('is_private_caching_enabled');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookupList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookupOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesRequestPolicies {
}

export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesRequestPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesRequestPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesRequestPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization - computed: true, optional: false, required: false
  private _authorization = new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesAuthorizationList(this, "authorization", false);
  public get authorization() {
    return this._authorization;
  }

  // body_validation - computed: true, optional: false, required: false
  private _bodyValidation = new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesBodyValidationList(this, "body_validation", false);
  public get bodyValidation() {
    return this._bodyValidation;
  }

  // cors - computed: true, optional: false, required: false
  private _cors = new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesCorsList(this, "cors", false);
  public get cors() {
    return this._cors;
  }

  // header_transformations - computed: true, optional: false, required: false
  private _headerTransformations = new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderTransformationsList(this, "header_transformations", false);
  public get headerTransformations() {
    return this._headerTransformations;
  }

  // header_validations - computed: true, optional: false, required: false
  private _headerValidations = new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesHeaderValidationsList(this, "header_validations", false);
  public get headerValidations() {
    return this._headerValidations;
  }

  // query_parameter_transformations - computed: true, optional: false, required: false
  private _queryParameterTransformations = new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterTransformationsList(this, "query_parameter_transformations", false);
  public get queryParameterTransformations() {
    return this._queryParameterTransformations;
  }

  // query_parameter_validations - computed: true, optional: false, required: false
  private _queryParameterValidations = new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesQueryParameterValidationsList(this, "query_parameter_validations", false);
  public get queryParameterValidations() {
    return this._queryParameterValidations;
  }

  // response_cache_lookup - computed: true, optional: false, required: false
  private _responseCacheLookup = new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesResponseCacheLookupList(this, "response_cache_lookup", false);
  public get responseCacheLookup() {
    return this._responseCacheLookup;
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItems {
}

export function dataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItemsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItemsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItems | undefined) {
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
}

export class DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItemsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeaders {
}

export function dataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItems {
}

export function dataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItemsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItemsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getStringAttribute('from');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getStringAttribute('to');
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItemsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeaders {
}

export function dataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItems {
}

export function dataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItemsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItemsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // if_exists - computed: true, optional: false, required: false
  public get ifExists() {
    return this.getStringAttribute('if_exists');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItemsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeaders {
}

export function dataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformations {
}

export function dataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // filter_headers - computed: true, optional: false, required: false
  private _filterHeaders = new DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsFilterHeadersList(this, "filter_headers", false);
  public get filterHeaders() {
    return this._filterHeaders;
  }

  // rename_headers - computed: true, optional: false, required: false
  private _renameHeaders = new DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsRenameHeadersList(this, "rename_headers", false);
  public get renameHeaders() {
    return this._renameHeaders;
  }

  // set_headers - computed: true, optional: false, required: false
  private _setHeaders = new DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsSetHeadersList(this, "set_headers", false);
  public get setHeaders() {
    return this._setHeaders;
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStore {
}

export function dataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStoreToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStoreToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // time_to_live_in_seconds - computed: true, optional: false, required: false
  public get timeToLiveInSeconds() {
    return this.getNumberAttribute('time_to_live_in_seconds');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStoreList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStoreOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutesResponsePolicies {
}

export function dataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesResponsePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutesResponsePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutesResponsePolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutesResponsePolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header_transformations - computed: true, optional: false, required: false
  private _headerTransformations = new DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesHeaderTransformationsList(this, "header_transformations", false);
  public get headerTransformations() {
    return this._headerTransformations;
  }

  // response_cache_store - computed: true, optional: false, required: false
  private _responseCacheStore = new DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesResponseCacheStoreList(this, "response_cache_store", false);
  public get responseCacheStore() {
    return this._responseCacheStore;
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecificationRoutes {
}

export function dataOciApigatewayDeploymentSpecificationRoutesToTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationRoutesToHclTerraform(struct?: DataOciApigatewayDeploymentSpecificationRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecificationRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecificationRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backend - computed: true, optional: false, required: false
  private _backend = new DataOciApigatewayDeploymentSpecificationRoutesBackendList(this, "backend", false);
  public get backend() {
    return this._backend;
  }

  // logging_policies - computed: true, optional: false, required: false
  private _loggingPolicies = new DataOciApigatewayDeploymentSpecificationRoutesLoggingPoliciesList(this, "logging_policies", false);
  public get loggingPolicies() {
    return this._loggingPolicies;
  }

  // methods - computed: true, optional: false, required: false
  public get methods() {
    return this.getListAttribute('methods');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // request_policies - computed: true, optional: false, required: false
  private _requestPolicies = new DataOciApigatewayDeploymentSpecificationRoutesRequestPoliciesList(this, "request_policies", false);
  public get requestPolicies() {
    return this._requestPolicies;
  }

  // response_policies - computed: true, optional: false, required: false
  private _responsePolicies = new DataOciApigatewayDeploymentSpecificationRoutesResponsePoliciesList(this, "response_policies", false);
  public get responsePolicies() {
    return this._responsePolicies;
  }
}

export class DataOciApigatewayDeploymentSpecificationRoutesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationRoutesOutputReference {
    return new DataOciApigatewayDeploymentSpecificationRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciApigatewayDeploymentSpecification {
}

export function dataOciApigatewayDeploymentSpecificationToTerraform(struct?: DataOciApigatewayDeploymentSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApigatewayDeploymentSpecificationToHclTerraform(struct?: DataOciApigatewayDeploymentSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApigatewayDeploymentSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApigatewayDeploymentSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApigatewayDeploymentSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logging_policies - computed: true, optional: false, required: false
  private _loggingPolicies = new DataOciApigatewayDeploymentSpecificationLoggingPoliciesList(this, "logging_policies", false);
  public get loggingPolicies() {
    return this._loggingPolicies;
  }

  // request_policies - computed: true, optional: false, required: false
  private _requestPolicies = new DataOciApigatewayDeploymentSpecificationRequestPoliciesList(this, "request_policies", false);
  public get requestPolicies() {
    return this._requestPolicies;
  }

  // routes - computed: true, optional: false, required: false
  private _routes = new DataOciApigatewayDeploymentSpecificationRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
}

export class DataOciApigatewayDeploymentSpecificationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApigatewayDeploymentSpecificationOutputReference {
    return new DataOciApigatewayDeploymentSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apigateway_deployment oci_apigateway_deployment}
*/
export class DataOciApigatewayDeployment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_apigateway_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciApigatewayDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciApigatewayDeployment to import
  * @param importFromId The id of the existing DataOciApigatewayDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apigateway_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciApigatewayDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_apigateway_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/apigateway_deployment oci_apigateway_deployment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciApigatewayDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciApigatewayDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apigateway_deployment',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deploymentId = config.deploymentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // deployment_id - computed: false, optional: false, required: true
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_lock_override - computed: true, optional: false, required: false
  public get isLockOverride() {
    return this.getBooleanAttribute('is_lock_override');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // locks - computed: true, optional: false, required: false
  private _locks = new DataOciApigatewayDeploymentLocksList(this, "locks", false);
  public get locks() {
    return this._locks;
  }

  // path_prefix - computed: true, optional: false, required: false
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }

  // specification - computed: true, optional: false, required: false
  private _specification = new DataOciApigatewayDeploymentSpecificationList(this, "specification", false);
  public get specification() {
    return this._specification;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deployment_id: cdktf.stringToTerraform(this._deploymentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deployment_id: {
        value: cdktf.stringToHclTerraform(this._deploymentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
