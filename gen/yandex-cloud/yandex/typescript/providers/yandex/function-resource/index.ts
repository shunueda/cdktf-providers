// https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FunctionResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The maximum number of requests processed by a function instance at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#concurrency FunctionResource#concurrency}
  */
  readonly concurrency?: number;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#description FunctionResource#description}
  */
  readonly description?: string;
  /**
  * Entrypoint for Yandex Cloud Function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#entrypoint FunctionResource#entrypoint}
  */
  readonly entrypoint: string;
  /**
  * A set of key/value environment variables for Yandex Cloud Function. Each key must begin with a letter (A-Z, a-z).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#environment FunctionResource#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Execution timeout in seconds for Yandex Cloud Function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#execution_timeout FunctionResource#execution_timeout}
  */
  readonly executionTimeout?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#folder_id FunctionResource#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#id FunctionResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#labels FunctionResource#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Memory in megabytes (**aligned to 128MB**) for Yandex Cloud Function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#memory FunctionResource#memory}
  */
  readonly memory: number;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#name FunctionResource#name}
  */
  readonly name: string;
  /**
  * Runtime for Yandex Cloud Function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#runtime FunctionResource#runtime}
  */
  readonly runtime: string;
  /**
  * [Service account](https://yandex.cloud/docs/iam/concepts/users/service-accounts) which linked to the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#service_account_id FunctionResource#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * Tags for Yandex Cloud Function. Tag `$latest` isn't returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#tags FunctionResource#tags}
  */
  readonly tags?: string[];
  /**
  * Tmpfs size for Yandex Cloud Function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#tmpfs_size FunctionResource#tmpfs_size}
  */
  readonly tmpfsSize?: number;
  /**
  * User-defined string for current function version. User must change this string any times when function changed. Function will be updated when hash is changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#user_hash FunctionResource#user_hash}
  */
  readonly userHash: string;
  /**
  * async_invocation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#async_invocation FunctionResource#async_invocation}
  */
  readonly asyncInvocation?: FunctionResourceAsyncInvocation;
  /**
  * connectivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#connectivity FunctionResource#connectivity}
  */
  readonly connectivity?: FunctionResourceConnectivity;
  /**
  * content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#content FunctionResource#content}
  */
  readonly content?: FunctionResourceContent;
  /**
  * log_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#log_options FunctionResource#log_options}
  */
  readonly logOptions?: FunctionResourceLogOptions;
  /**
  * metadata_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#metadata_options FunctionResource#metadata_options}
  */
  readonly metadataOptions?: FunctionResourceMetadataOptions;
  /**
  * mounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#mounts FunctionResource#mounts}
  */
  readonly mounts?: FunctionResourceMounts[] | cdktf.IResolvable;
  /**
  * package block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#package FunctionResource#package}
  */
  readonly package?: FunctionResourcePackage;
  /**
  * secrets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#secrets FunctionResource#secrets}
  */
  readonly secrets?: FunctionResourceSecrets[] | cdktf.IResolvable;
  /**
  * storage_mounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#storage_mounts FunctionResource#storage_mounts}
  */
  readonly storageMounts?: FunctionResourceStorageMounts[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#timeouts FunctionResource#timeouts}
  */
  readonly timeouts?: FunctionResourceTimeouts;
}
export interface FunctionResourceAsyncInvocationYmqFailureTarget {
  /**
  * YMQ ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#arn FunctionResource#arn}
  */
  readonly arn: string;
  /**
  * Service account used for writing result to queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#service_account_id FunctionResource#service_account_id}
  */
  readonly serviceAccountId: string;
}

export function functionResourceAsyncInvocationYmqFailureTargetToTerraform(struct?: FunctionResourceAsyncInvocationYmqFailureTargetOutputReference | FunctionResourceAsyncInvocationYmqFailureTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
  }
}


export function functionResourceAsyncInvocationYmqFailureTargetToHclTerraform(struct?: FunctionResourceAsyncInvocationYmqFailureTargetOutputReference | FunctionResourceAsyncInvocationYmqFailureTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionResourceAsyncInvocationYmqFailureTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionResourceAsyncInvocationYmqFailureTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionResourceAsyncInvocationYmqFailureTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._serviceAccountId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._serviceAccountId = value.serviceAccountId;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }
}
export interface FunctionResourceAsyncInvocationYmqSuccessTarget {
  /**
  * YMQ ARN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#arn FunctionResource#arn}
  */
  readonly arn: string;
  /**
  * Service account used for writing result to queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#service_account_id FunctionResource#service_account_id}
  */
  readonly serviceAccountId: string;
}

export function functionResourceAsyncInvocationYmqSuccessTargetToTerraform(struct?: FunctionResourceAsyncInvocationYmqSuccessTargetOutputReference | FunctionResourceAsyncInvocationYmqSuccessTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
  }
}


export function functionResourceAsyncInvocationYmqSuccessTargetToHclTerraform(struct?: FunctionResourceAsyncInvocationYmqSuccessTargetOutputReference | FunctionResourceAsyncInvocationYmqSuccessTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionResourceAsyncInvocationYmqSuccessTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionResourceAsyncInvocationYmqSuccessTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionResourceAsyncInvocationYmqSuccessTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._serviceAccountId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._serviceAccountId = value.serviceAccountId;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }
}
export interface FunctionResourceAsyncInvocation {
  /**
  * Maximum number of retries for async invocation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#retries_count FunctionResource#retries_count}
  */
  readonly retriesCount?: number;
  /**
  * Service account used for async invocation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#service_account_id FunctionResource#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * ymq_failure_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#ymq_failure_target FunctionResource#ymq_failure_target}
  */
  readonly ymqFailureTarget?: FunctionResourceAsyncInvocationYmqFailureTarget;
  /**
  * ymq_success_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#ymq_success_target FunctionResource#ymq_success_target}
  */
  readonly ymqSuccessTarget?: FunctionResourceAsyncInvocationYmqSuccessTarget;
}

export function functionResourceAsyncInvocationToTerraform(struct?: FunctionResourceAsyncInvocationOutputReference | FunctionResourceAsyncInvocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retries_count: cdktf.numberToTerraform(struct!.retriesCount),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
    ymq_failure_target: functionResourceAsyncInvocationYmqFailureTargetToTerraform(struct!.ymqFailureTarget),
    ymq_success_target: functionResourceAsyncInvocationYmqSuccessTargetToTerraform(struct!.ymqSuccessTarget),
  }
}


export function functionResourceAsyncInvocationToHclTerraform(struct?: FunctionResourceAsyncInvocationOutputReference | FunctionResourceAsyncInvocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retries_count: {
      value: cdktf.numberToHclTerraform(struct!.retriesCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ymq_failure_target: {
      value: functionResourceAsyncInvocationYmqFailureTargetToHclTerraform(struct!.ymqFailureTarget),
      isBlock: true,
      type: "list",
      storageClassType: "FunctionResourceAsyncInvocationYmqFailureTargetList",
    },
    ymq_success_target: {
      value: functionResourceAsyncInvocationYmqSuccessTargetToHclTerraform(struct!.ymqSuccessTarget),
      isBlock: true,
      type: "list",
      storageClassType: "FunctionResourceAsyncInvocationYmqSuccessTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionResourceAsyncInvocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionResourceAsyncInvocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retriesCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.retriesCount = this._retriesCount;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    if (this._ymqFailureTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ymqFailureTarget = this._ymqFailureTarget?.internalValue;
    }
    if (this._ymqSuccessTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ymqSuccessTarget = this._ymqSuccessTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionResourceAsyncInvocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retriesCount = undefined;
      this._serviceAccountId = undefined;
      this._ymqFailureTarget.internalValue = undefined;
      this._ymqSuccessTarget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retriesCount = value.retriesCount;
      this._serviceAccountId = value.serviceAccountId;
      this._ymqFailureTarget.internalValue = value.ymqFailureTarget;
      this._ymqSuccessTarget.internalValue = value.ymqSuccessTarget;
    }
  }

  // retries_count - computed: false, optional: true, required: false
  private _retriesCount?: number; 
  public get retriesCount() {
    return this.getNumberAttribute('retries_count');
  }
  public set retriesCount(value: number) {
    this._retriesCount = value;
  }
  public resetRetriesCount() {
    this._retriesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesCountInput() {
    return this._retriesCount;
  }

  // service_account_id - computed: false, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // ymq_failure_target - computed: false, optional: true, required: false
  private _ymqFailureTarget = new FunctionResourceAsyncInvocationYmqFailureTargetOutputReference(this, "ymq_failure_target");
  public get ymqFailureTarget() {
    return this._ymqFailureTarget;
  }
  public putYmqFailureTarget(value: FunctionResourceAsyncInvocationYmqFailureTarget) {
    this._ymqFailureTarget.internalValue = value;
  }
  public resetYmqFailureTarget() {
    this._ymqFailureTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ymqFailureTargetInput() {
    return this._ymqFailureTarget.internalValue;
  }

  // ymq_success_target - computed: false, optional: true, required: false
  private _ymqSuccessTarget = new FunctionResourceAsyncInvocationYmqSuccessTargetOutputReference(this, "ymq_success_target");
  public get ymqSuccessTarget() {
    return this._ymqSuccessTarget;
  }
  public putYmqSuccessTarget(value: FunctionResourceAsyncInvocationYmqSuccessTarget) {
    this._ymqSuccessTarget.internalValue = value;
  }
  public resetYmqSuccessTarget() {
    this._ymqSuccessTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ymqSuccessTargetInput() {
    return this._ymqSuccessTarget.internalValue;
  }
}
export interface FunctionResourceConnectivity {
  /**
  * Network the version will have access to. It's essential to specify network with subnets in all availability zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#network_id FunctionResource#network_id}
  */
  readonly networkId: string;
}

export function functionResourceConnectivityToTerraform(struct?: FunctionResourceConnectivityOutputReference | FunctionResourceConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_id: cdktf.stringToTerraform(struct!.networkId),
  }
}


export function functionResourceConnectivityToHclTerraform(struct?: FunctionResourceConnectivityOutputReference | FunctionResourceConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionResourceConnectivityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionResourceConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionResourceConnectivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkId = value.networkId;
    }
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }
}
export interface FunctionResourceContent {
  /**
  * Filename to zip archive for the version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#zip_filename FunctionResource#zip_filename}
  */
  readonly zipFilename: string;
}

export function functionResourceContentToTerraform(struct?: FunctionResourceContentOutputReference | FunctionResourceContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    zip_filename: cdktf.stringToTerraform(struct!.zipFilename),
  }
}


export function functionResourceContentToHclTerraform(struct?: FunctionResourceContentOutputReference | FunctionResourceContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    zip_filename: {
      value: cdktf.stringToHclTerraform(struct!.zipFilename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionResourceContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionResourceContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._zipFilename !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipFilename = this._zipFilename;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionResourceContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._zipFilename = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._zipFilename = value.zipFilename;
    }
  }

  // zip_filename - computed: false, optional: false, required: true
  private _zipFilename?: string; 
  public get zipFilename() {
    return this.getStringAttribute('zip_filename');
  }
  public set zipFilename(value: string) {
    this._zipFilename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zipFilenameInput() {
    return this._zipFilename;
  }
}
export interface FunctionResourceLogOptions {
  /**
  * Is logging from function disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#disabled FunctionResource#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Log entries are written to default log group for specified folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#folder_id FunctionResource#folder_id}
  */
  readonly folderId?: string;
  /**
  * Log entries are written to specified log group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#log_group_id FunctionResource#log_group_id}
  */
  readonly logGroupId?: string;
  /**
  * Minimum log entry level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#min_level FunctionResource#min_level}
  */
  readonly minLevel?: string;
}

export function functionResourceLogOptionsToTerraform(struct?: FunctionResourceLogOptionsOutputReference | FunctionResourceLogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    folder_id: cdktf.stringToTerraform(struct!.folderId),
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
    min_level: cdktf.stringToTerraform(struct!.minLevel),
  }
}


export function functionResourceLogOptionsToHclTerraform(struct?: FunctionResourceLogOptionsOutputReference | FunctionResourceLogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    folder_id: {
      value: cdktf.stringToHclTerraform(struct!.folderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group_id: {
      value: cdktf.stringToHclTerraform(struct!.logGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_level: {
      value: cdktf.stringToHclTerraform(struct!.minLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionResourceLogOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionResourceLogOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._folderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderId = this._folderId;
    }
    if (this._logGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupId = this._logGroupId;
    }
    if (this._minLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLevel = this._minLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionResourceLogOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._folderId = undefined;
      this._logGroupId = undefined;
      this._minLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._folderId = value.folderId;
      this._logGroupId = value.logGroupId;
      this._minLevel = value.minLevel;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // folder_id - computed: false, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // log_group_id - computed: false, optional: true, required: false
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  public resetLogGroupId() {
    this._logGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // min_level - computed: false, optional: true, required: false
  private _minLevel?: string; 
  public get minLevel() {
    return this.getStringAttribute('min_level');
  }
  public set minLevel(value: string) {
    this._minLevel = value;
  }
  public resetMinLevel() {
    this._minLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLevelInput() {
    return this._minLevel;
  }
}
export interface FunctionResourceMetadataOptions {
  /**
  * Enables access to AWS flavored metadata (IMDSv1). Values: `0` - default, `1` - enabled, `2` - disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#aws_v1_http_endpoint FunctionResource#aws_v1_http_endpoint}
  */
  readonly awsV1HttpEndpoint?: number;
  /**
  * Enables access to GCE flavored metadata. Values: `0`- default, `1` - enabled, `2` - disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#gce_http_endpoint FunctionResource#gce_http_endpoint}
  */
  readonly gceHttpEndpoint?: number;
}

export function functionResourceMetadataOptionsToTerraform(struct?: FunctionResourceMetadataOptionsOutputReference | FunctionResourceMetadataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_v1_http_endpoint: cdktf.numberToTerraform(struct!.awsV1HttpEndpoint),
    gce_http_endpoint: cdktf.numberToTerraform(struct!.gceHttpEndpoint),
  }
}


export function functionResourceMetadataOptionsToHclTerraform(struct?: FunctionResourceMetadataOptionsOutputReference | FunctionResourceMetadataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_v1_http_endpoint: {
      value: cdktf.numberToHclTerraform(struct!.awsV1HttpEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gce_http_endpoint: {
      value: cdktf.numberToHclTerraform(struct!.gceHttpEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionResourceMetadataOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionResourceMetadataOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsV1HttpEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsV1HttpEndpoint = this._awsV1HttpEndpoint;
    }
    if (this._gceHttpEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.gceHttpEndpoint = this._gceHttpEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionResourceMetadataOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsV1HttpEndpoint = undefined;
      this._gceHttpEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsV1HttpEndpoint = value.awsV1HttpEndpoint;
      this._gceHttpEndpoint = value.gceHttpEndpoint;
    }
  }

  // aws_v1_http_endpoint - computed: true, optional: true, required: false
  private _awsV1HttpEndpoint?: number; 
  public get awsV1HttpEndpoint() {
    return this.getNumberAttribute('aws_v1_http_endpoint');
  }
  public set awsV1HttpEndpoint(value: number) {
    this._awsV1HttpEndpoint = value;
  }
  public resetAwsV1HttpEndpoint() {
    this._awsV1HttpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsV1HttpEndpointInput() {
    return this._awsV1HttpEndpoint;
  }

  // gce_http_endpoint - computed: true, optional: true, required: false
  private _gceHttpEndpoint?: number; 
  public get gceHttpEndpoint() {
    return this.getNumberAttribute('gce_http_endpoint');
  }
  public set gceHttpEndpoint(value: number) {
    this._gceHttpEndpoint = value;
  }
  public resetGceHttpEndpoint() {
    this._gceHttpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gceHttpEndpointInput() {
    return this._gceHttpEndpoint;
  }
}
export interface FunctionResourceMountsEphemeralDisk {
  /**
  * Optional block size of the ephemeral disk in KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#block_size_kb FunctionResource#block_size_kb}
  */
  readonly blockSizeKb?: number;
  /**
  * Size of the ephemeral disk in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#size_gb FunctionResource#size_gb}
  */
  readonly sizeGb: number;
}

export function functionResourceMountsEphemeralDiskToTerraform(struct?: FunctionResourceMountsEphemeralDiskOutputReference | FunctionResourceMountsEphemeralDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_size_kb: cdktf.numberToTerraform(struct!.blockSizeKb),
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
  }
}


export function functionResourceMountsEphemeralDiskToHclTerraform(struct?: FunctionResourceMountsEphemeralDiskOutputReference | FunctionResourceMountsEphemeralDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_size_kb: {
      value: cdktf.numberToHclTerraform(struct!.blockSizeKb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size_gb: {
      value: cdktf.numberToHclTerraform(struct!.sizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionResourceMountsEphemeralDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionResourceMountsEphemeralDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockSizeKb !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockSizeKb = this._blockSizeKb;
    }
    if (this._sizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionResourceMountsEphemeralDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockSizeKb = undefined;
      this._sizeGb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockSizeKb = value.blockSizeKb;
      this._sizeGb = value.sizeGb;
    }
  }

  // block_size_kb - computed: true, optional: true, required: false
  private _blockSizeKb?: number; 
  public get blockSizeKb() {
    return this.getNumberAttribute('block_size_kb');
  }
  public set blockSizeKb(value: number) {
    this._blockSizeKb = value;
  }
  public resetBlockSizeKb() {
    this._blockSizeKb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSizeKbInput() {
    return this._blockSizeKb;
  }

  // size_gb - computed: false, optional: false, required: true
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
  }
}
export interface FunctionResourceMountsObjectStorage {
  /**
  * Name of the mounting bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#bucket FunctionResource#bucket}
  */
  readonly bucket: string;
  /**
  * Prefix within the bucket. If you leave this field empty, the entire bucket will be mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#prefix FunctionResource#prefix}
  */
  readonly prefix?: string;
}

export function functionResourceMountsObjectStorageToTerraform(struct?: FunctionResourceMountsObjectStorageOutputReference | FunctionResourceMountsObjectStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function functionResourceMountsObjectStorageToHclTerraform(struct?: FunctionResourceMountsObjectStorageOutputReference | FunctionResourceMountsObjectStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionResourceMountsObjectStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionResourceMountsObjectStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionResourceMountsObjectStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._prefix = value.prefix;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface FunctionResourceMounts {
  /**
  * Mount’s accessibility mode. Valid values are `ro` and `rw`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#mode FunctionResource#mode}
  */
  readonly mode?: string;
  /**
  * Name of the mount point. The directory where the target is mounted will be accessible at the `/function/storage/<mounts.0.name>` path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#name FunctionResource#name}
  */
  readonly name: string;
  /**
  * ephemeral_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#ephemeral_disk FunctionResource#ephemeral_disk}
  */
  readonly ephemeralDisk?: FunctionResourceMountsEphemeralDisk;
  /**
  * object_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#object_storage FunctionResource#object_storage}
  */
  readonly objectStorage?: FunctionResourceMountsObjectStorage;
}

export function functionResourceMountsToTerraform(struct?: FunctionResourceMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    ephemeral_disk: functionResourceMountsEphemeralDiskToTerraform(struct!.ephemeralDisk),
    object_storage: functionResourceMountsObjectStorageToTerraform(struct!.objectStorage),
  }
}


export function functionResourceMountsToHclTerraform(struct?: FunctionResourceMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
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
    ephemeral_disk: {
      value: functionResourceMountsEphemeralDiskToHclTerraform(struct!.ephemeralDisk),
      isBlock: true,
      type: "list",
      storageClassType: "FunctionResourceMountsEphemeralDiskList",
    },
    object_storage: {
      value: functionResourceMountsObjectStorageToHclTerraform(struct!.objectStorage),
      isBlock: true,
      type: "list",
      storageClassType: "FunctionResourceMountsObjectStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionResourceMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FunctionResourceMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ephemeralDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralDisk = this._ephemeralDisk?.internalValue;
    }
    if (this._objectStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStorage = this._objectStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionResourceMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._ephemeralDisk.internalValue = undefined;
      this._objectStorage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._name = value.name;
      this._ephemeralDisk.internalValue = value.ephemeralDisk;
      this._objectStorage.internalValue = value.objectStorage;
    }
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // ephemeral_disk - computed: false, optional: true, required: false
  private _ephemeralDisk = new FunctionResourceMountsEphemeralDiskOutputReference(this, "ephemeral_disk");
  public get ephemeralDisk() {
    return this._ephemeralDisk;
  }
  public putEphemeralDisk(value: FunctionResourceMountsEphemeralDisk) {
    this._ephemeralDisk.internalValue = value;
  }
  public resetEphemeralDisk() {
    this._ephemeralDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralDiskInput() {
    return this._ephemeralDisk.internalValue;
  }

  // object_storage - computed: false, optional: true, required: false
  private _objectStorage = new FunctionResourceMountsObjectStorageOutputReference(this, "object_storage");
  public get objectStorage() {
    return this._objectStorage;
  }
  public putObjectStorage(value: FunctionResourceMountsObjectStorage) {
    this._objectStorage.internalValue = value;
  }
  public resetObjectStorage() {
    this._objectStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageInput() {
    return this._objectStorage.internalValue;
  }
}

export class FunctionResourceMountsList extends cdktf.ComplexList {
  public internalValue? : FunctionResourceMounts[] | cdktf.IResolvable

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
  public get(index: number): FunctionResourceMountsOutputReference {
    return new FunctionResourceMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FunctionResourcePackage {
  /**
  * Name of the bucket that stores the code for the version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#bucket_name FunctionResource#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Name of the object in the bucket that stores the code for the version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#object_name FunctionResource#object_name}
  */
  readonly objectName: string;
  /**
  * SHA256 hash of the version deployment package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#sha_256 FunctionResource#sha_256}
  */
  readonly sha256?: string;
}

export function functionResourcePackageToTerraform(struct?: FunctionResourcePackageOutputReference | FunctionResourcePackage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    object_name: cdktf.stringToTerraform(struct!.objectName),
    sha_256: cdktf.stringToTerraform(struct!.sha256),
  }
}


export function functionResourcePackageToHclTerraform(struct?: FunctionResourcePackageOutputReference | FunctionResourcePackage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_name: {
      value: cdktf.stringToHclTerraform(struct!.objectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sha_256: {
      value: cdktf.stringToHclTerraform(struct!.sha256),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionResourcePackageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FunctionResourcePackage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._objectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectName = this._objectName;
    }
    if (this._sha256 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256 = this._sha256;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionResourcePackage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._objectName = undefined;
      this._sha256 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._objectName = value.objectName;
      this._sha256 = value.sha256;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // object_name - computed: false, optional: false, required: true
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // sha_256 - computed: false, optional: true, required: false
  private _sha256?: string; 
  public get sha256() {
    return this.getStringAttribute('sha_256');
  }
  public set sha256(value: string) {
    this._sha256 = value;
  }
  public resetSha256() {
    this._sha256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256Input() {
    return this._sha256;
  }
}
export interface FunctionResourceSecrets {
  /**
  * Function's environment variable in which secret's value will be stored. Must begin with a letter (A-Z, a-z).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#environment_variable FunctionResource#environment_variable}
  */
  readonly environmentVariable: string;
  /**
  * Secret's ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#id FunctionResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Secret's entries key which value will be stored in environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#key FunctionResource#key}
  */
  readonly key: string;
  /**
  * Secret's version ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#version_id FunctionResource#version_id}
  */
  readonly versionId: string;
}

export function functionResourceSecretsToTerraform(struct?: FunctionResourceSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment_variable: cdktf.stringToTerraform(struct!.environmentVariable),
    id: cdktf.stringToTerraform(struct!.id),
    key: cdktf.stringToTerraform(struct!.key),
    version_id: cdktf.stringToTerraform(struct!.versionId),
  }
}


export function functionResourceSecretsToHclTerraform(struct?: FunctionResourceSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment_variable: {
      value: cdktf.stringToHclTerraform(struct!.environmentVariable),
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
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_id: {
      value: cdktf.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionResourceSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FunctionResourceSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environmentVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariable = this._environmentVariable;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionResourceSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environmentVariable = undefined;
      this._id = undefined;
      this._key = undefined;
      this._versionId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environmentVariable = value.environmentVariable;
      this._id = value.id;
      this._key = value.key;
      this._versionId = value.versionId;
    }
  }

  // environment_variable - computed: false, optional: false, required: true
  private _environmentVariable?: string; 
  public get environmentVariable() {
    return this.getStringAttribute('environment_variable');
  }
  public set environmentVariable(value: string) {
    this._environmentVariable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariableInput() {
    return this._environmentVariable;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // version_id - computed: false, optional: false, required: true
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }
}

export class FunctionResourceSecretsList extends cdktf.ComplexList {
  public internalValue? : FunctionResourceSecrets[] | cdktf.IResolvable

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
  public get(index: number): FunctionResourceSecretsOutputReference {
    return new FunctionResourceSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FunctionResourceStorageMounts {
  /**
  * Name of the mounting bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#bucket FunctionResource#bucket}
  */
  readonly bucket: string;
  /**
  * Name of the mount point. The directory where the bucket is mounted will be accessible at the `/function/storage/<mount_point>` path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#mount_point_name FunctionResource#mount_point_name}
  */
  readonly mountPointName: string;
  /**
  * Prefix within the bucket. If you leave this field empty, the entire bucket will be mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#prefix FunctionResource#prefix}
  */
  readonly prefix?: string;
  /**
  * Mount the bucket in read-only mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#read_only FunctionResource#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function functionResourceStorageMountsToTerraform(struct?: FunctionResourceStorageMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    mount_point_name: cdktf.stringToTerraform(struct!.mountPointName),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function functionResourceStorageMountsToHclTerraform(struct?: FunctionResourceStorageMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_point_name: {
      value: cdktf.stringToHclTerraform(struct!.mountPointName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FunctionResourceStorageMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FunctionResourceStorageMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._mountPointName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPointName = this._mountPointName;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionResourceStorageMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucket = undefined;
      this._mountPointName = undefined;
      this._prefix = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucket = value.bucket;
      this._mountPointName = value.mountPointName;
      this._prefix = value.prefix;
      this._readOnly = value.readOnly;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // mount_point_name - computed: false, optional: false, required: true
  private _mountPointName?: string; 
  public get mountPointName() {
    return this.getStringAttribute('mount_point_name');
  }
  public set mountPointName(value: string) {
    this._mountPointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointNameInput() {
    return this._mountPointName;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}

export class FunctionResourceStorageMountsList extends cdktf.ComplexList {
  public internalValue? : FunctionResourceStorageMounts[] | cdktf.IResolvable

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
  public get(index: number): FunctionResourceStorageMountsOutputReference {
    return new FunctionResourceStorageMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FunctionResourceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#create FunctionResource#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#delete FunctionResource#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#update FunctionResource#update}
  */
  readonly update?: string;
}

export function functionResourceTimeoutsToTerraform(struct?: FunctionResourceTimeouts | cdktf.IResolvable): any {
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


export function functionResourceTimeoutsToHclTerraform(struct?: FunctionResourceTimeouts | cdktf.IResolvable): any {
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

export class FunctionResourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FunctionResourceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FunctionResourceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function yandex_function}
*/
export class FunctionResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FunctionResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FunctionResource to import
  * @param importFromId The id of the existing FunctionResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FunctionResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.170.0/docs/resources/function yandex_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FunctionResourceConfig
  */
  public constructor(scope: Construct, id: string, config: FunctionResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_function',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.170.0',
        providerVersionConstraint: '0.170.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._concurrency = config.concurrency;
    this._description = config.description;
    this._entrypoint = config.entrypoint;
    this._environment = config.environment;
    this._executionTimeout = config.executionTimeout;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._memory = config.memory;
    this._name = config.name;
    this._runtime = config.runtime;
    this._serviceAccountId = config.serviceAccountId;
    this._tags = config.tags;
    this._tmpfsSize = config.tmpfsSize;
    this._userHash = config.userHash;
    this._asyncInvocation.internalValue = config.asyncInvocation;
    this._connectivity.internalValue = config.connectivity;
    this._content.internalValue = config.content;
    this._logOptions.internalValue = config.logOptions;
    this._metadataOptions.internalValue = config.metadataOptions;
    this._mounts.internalValue = config.mounts;
    this._package.internalValue = config.package;
    this._secrets.internalValue = config.secrets;
    this._storageMounts.internalValue = config.storageMounts;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // concurrency - computed: true, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // entrypoint - computed: false, optional: false, required: true
  private _entrypoint?: string; 
  public get entrypoint() {
    return this.getStringAttribute('entrypoint');
  }
  public set entrypoint(value: string) {
    this._entrypoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // execution_timeout - computed: true, optional: true, required: false
  private _executionTimeout?: string; 
  public get executionTimeout() {
    return this.getStringAttribute('execution_timeout');
  }
  public set executionTimeout(value: string) {
    this._executionTimeout = value;
  }
  public resetExecutionTimeout() {
    this._executionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTimeoutInput() {
    return this._executionTimeout;
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // image_size - computed: true, optional: false, required: false
  public get imageSize() {
    return this.getNumberAttribute('image_size');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
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

  // runtime - computed: false, optional: false, required: true
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // service_account_id - computed: false, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tmpfs_size - computed: true, optional: true, required: false
  private _tmpfsSize?: number; 
  public get tmpfsSize() {
    return this.getNumberAttribute('tmpfs_size');
  }
  public set tmpfsSize(value: number) {
    this._tmpfsSize = value;
  }
  public resetTmpfsSize() {
    this._tmpfsSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpfsSizeInput() {
    return this._tmpfsSize;
  }

  // user_hash - computed: false, optional: false, required: true
  private _userHash?: string; 
  public get userHash() {
    return this.getStringAttribute('user_hash');
  }
  public set userHash(value: string) {
    this._userHash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userHashInput() {
    return this._userHash;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // async_invocation - computed: false, optional: true, required: false
  private _asyncInvocation = new FunctionResourceAsyncInvocationOutputReference(this, "async_invocation");
  public get asyncInvocation() {
    return this._asyncInvocation;
  }
  public putAsyncInvocation(value: FunctionResourceAsyncInvocation) {
    this._asyncInvocation.internalValue = value;
  }
  public resetAsyncInvocation() {
    this._asyncInvocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asyncInvocationInput() {
    return this._asyncInvocation.internalValue;
  }

  // connectivity - computed: false, optional: true, required: false
  private _connectivity = new FunctionResourceConnectivityOutputReference(this, "connectivity");
  public get connectivity() {
    return this._connectivity;
  }
  public putConnectivity(value: FunctionResourceConnectivity) {
    this._connectivity.internalValue = value;
  }
  public resetConnectivity() {
    this._connectivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityInput() {
    return this._connectivity.internalValue;
  }

  // content - computed: false, optional: true, required: false
  private _content = new FunctionResourceContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }
  public putContent(value: FunctionResourceContent) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }

  // log_options - computed: false, optional: true, required: false
  private _logOptions = new FunctionResourceLogOptionsOutputReference(this, "log_options");
  public get logOptions() {
    return this._logOptions;
  }
  public putLogOptions(value: FunctionResourceLogOptions) {
    this._logOptions.internalValue = value;
  }
  public resetLogOptions() {
    this._logOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOptionsInput() {
    return this._logOptions.internalValue;
  }

  // metadata_options - computed: false, optional: true, required: false
  private _metadataOptions = new FunctionResourceMetadataOptionsOutputReference(this, "metadata_options");
  public get metadataOptions() {
    return this._metadataOptions;
  }
  public putMetadataOptions(value: FunctionResourceMetadataOptions) {
    this._metadataOptions.internalValue = value;
  }
  public resetMetadataOptions() {
    this._metadataOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataOptionsInput() {
    return this._metadataOptions.internalValue;
  }

  // mounts - computed: false, optional: true, required: false
  private _mounts = new FunctionResourceMountsList(this, "mounts", false);
  public get mounts() {
    return this._mounts;
  }
  public putMounts(value: FunctionResourceMounts[] | cdktf.IResolvable) {
    this._mounts.internalValue = value;
  }
  public resetMounts() {
    this._mounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountsInput() {
    return this._mounts.internalValue;
  }

  // package - computed: false, optional: true, required: false
  private _package = new FunctionResourcePackageOutputReference(this, "package");
  public get package() {
    return this._package;
  }
  public putPackage(value: FunctionResourcePackage) {
    this._package.internalValue = value;
  }
  public resetPackage() {
    this._package.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package.internalValue;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets = new FunctionResourceSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: FunctionResourceSecrets[] | cdktf.IResolvable) {
    this._secrets.internalValue = value;
  }
  public resetSecrets() {
    this._secrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }

  // storage_mounts - computed: false, optional: true, required: false
  private _storageMounts = new FunctionResourceStorageMountsList(this, "storage_mounts", false);
  public get storageMounts() {
    return this._storageMounts;
  }
  public putStorageMounts(value: FunctionResourceStorageMounts[] | cdktf.IResolvable) {
    this._storageMounts.internalValue = value;
  }
  public resetStorageMounts() {
    this._storageMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageMountsInput() {
    return this._storageMounts.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FunctionResourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FunctionResourceTimeouts) {
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
      concurrency: cdktf.numberToTerraform(this._concurrency),
      description: cdktf.stringToTerraform(this._description),
      entrypoint: cdktf.stringToTerraform(this._entrypoint),
      environment: cdktf.hashMapper(cdktf.stringToTerraform)(this._environment),
      execution_timeout: cdktf.stringToTerraform(this._executionTimeout),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      memory: cdktf.numberToTerraform(this._memory),
      name: cdktf.stringToTerraform(this._name),
      runtime: cdktf.stringToTerraform(this._runtime),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tmpfs_size: cdktf.numberToTerraform(this._tmpfsSize),
      user_hash: cdktf.stringToTerraform(this._userHash),
      async_invocation: functionResourceAsyncInvocationToTerraform(this._asyncInvocation.internalValue),
      connectivity: functionResourceConnectivityToTerraform(this._connectivity.internalValue),
      content: functionResourceContentToTerraform(this._content.internalValue),
      log_options: functionResourceLogOptionsToTerraform(this._logOptions.internalValue),
      metadata_options: functionResourceMetadataOptionsToTerraform(this._metadataOptions.internalValue),
      mounts: cdktf.listMapper(functionResourceMountsToTerraform, true)(this._mounts.internalValue),
      package: functionResourcePackageToTerraform(this._package.internalValue),
      secrets: cdktf.listMapper(functionResourceSecretsToTerraform, true)(this._secrets.internalValue),
      storage_mounts: cdktf.listMapper(functionResourceStorageMountsToTerraform, true)(this._storageMounts.internalValue),
      timeouts: functionResourceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      concurrency: {
        value: cdktf.numberToHclTerraform(this._concurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entrypoint: {
        value: cdktf.stringToHclTerraform(this._entrypoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environment),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      execution_timeout: {
        value: cdktf.stringToHclTerraform(this._executionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime: {
        value: cdktf.stringToHclTerraform(this._runtime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_id: {
        value: cdktf.stringToHclTerraform(this._serviceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tmpfs_size: {
        value: cdktf.numberToHclTerraform(this._tmpfsSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_hash: {
        value: cdktf.stringToHclTerraform(this._userHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      async_invocation: {
        value: functionResourceAsyncInvocationToHclTerraform(this._asyncInvocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionResourceAsyncInvocationList",
      },
      connectivity: {
        value: functionResourceConnectivityToHclTerraform(this._connectivity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionResourceConnectivityList",
      },
      content: {
        value: functionResourceContentToHclTerraform(this._content.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionResourceContentList",
      },
      log_options: {
        value: functionResourceLogOptionsToHclTerraform(this._logOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionResourceLogOptionsList",
      },
      metadata_options: {
        value: functionResourceMetadataOptionsToHclTerraform(this._metadataOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionResourceMetadataOptionsList",
      },
      mounts: {
        value: cdktf.listMapperHcl(functionResourceMountsToHclTerraform, true)(this._mounts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionResourceMountsList",
      },
      package: {
        value: functionResourcePackageToHclTerraform(this._package.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionResourcePackageList",
      },
      secrets: {
        value: cdktf.listMapperHcl(functionResourceSecretsToHclTerraform, true)(this._secrets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionResourceSecretsList",
      },
      storage_mounts: {
        value: cdktf.listMapperHcl(functionResourceStorageMountsToHclTerraform, true)(this._storageMounts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FunctionResourceStorageMountsList",
      },
      timeouts: {
        value: functionResourceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FunctionResourceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
