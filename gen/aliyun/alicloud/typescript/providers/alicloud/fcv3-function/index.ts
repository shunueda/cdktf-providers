// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Fcv3FunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#cpu Fcv3Function#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#description Fcv3Function#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#disk_size Fcv3Function#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#environment_variables Fcv3Function#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#function_name Fcv3Function#function_name}
  */
  readonly functionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#handler Fcv3Function#handler}
  */
  readonly handler: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#id Fcv3Function#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#instance_concurrency Fcv3Function#instance_concurrency}
  */
  readonly instanceConcurrency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#instance_isolation_mode Fcv3Function#instance_isolation_mode}
  */
  readonly instanceIsolationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#internet_access Fcv3Function#internet_access}
  */
  readonly internetAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#layers Fcv3Function#layers}
  */
  readonly layers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#memory_size Fcv3Function#memory_size}
  */
  readonly memorySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#resource_group_id Fcv3Function#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#role Fcv3Function#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#runtime Fcv3Function#runtime}
  */
  readonly runtime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#session_affinity Fcv3Function#session_affinity}
  */
  readonly sessionAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#session_affinity_config Fcv3Function#session_affinity_config}
  */
  readonly sessionAffinityConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#tags Fcv3Function#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#timeout Fcv3Function#timeout}
  */
  readonly timeout?: number;
  /**
  * code block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#code Fcv3Function#code}
  */
  readonly code?: Fcv3FunctionCode;
  /**
  * custom_container_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#custom_container_config Fcv3Function#custom_container_config}
  */
  readonly customContainerConfig?: Fcv3FunctionCustomContainerConfig;
  /**
  * custom_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#custom_dns Fcv3Function#custom_dns}
  */
  readonly customDns?: Fcv3FunctionCustomDns;
  /**
  * custom_runtime_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#custom_runtime_config Fcv3Function#custom_runtime_config}
  */
  readonly customRuntimeConfig?: Fcv3FunctionCustomRuntimeConfig;
  /**
  * gpu_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#gpu_config Fcv3Function#gpu_config}
  */
  readonly gpuConfig?: Fcv3FunctionGpuConfig;
  /**
  * instance_lifecycle_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#instance_lifecycle_config Fcv3Function#instance_lifecycle_config}
  */
  readonly instanceLifecycleConfig?: Fcv3FunctionInstanceLifecycleConfig;
  /**
  * invocation_restriction block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#invocation_restriction Fcv3Function#invocation_restriction}
  */
  readonly invocationRestriction?: Fcv3FunctionInvocationRestriction;
  /**
  * log_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#log_config Fcv3Function#log_config}
  */
  readonly logConfig?: Fcv3FunctionLogConfig;
  /**
  * nas_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#nas_config Fcv3Function#nas_config}
  */
  readonly nasConfig?: Fcv3FunctionNasConfig;
  /**
  * oss_mount_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#oss_mount_config Fcv3Function#oss_mount_config}
  */
  readonly ossMountConfig?: Fcv3FunctionOssMountConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#timeouts Fcv3Function#timeouts}
  */
  readonly timeouts?: Fcv3FunctionTimeouts;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#vpc_config Fcv3Function#vpc_config}
  */
  readonly vpcConfig?: Fcv3FunctionVpcConfig;
}
export interface Fcv3FunctionTracingConfig {
}

export function fcv3FunctionTracingConfigToTerraform(struct?: Fcv3FunctionTracingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fcv3FunctionTracingConfigToHclTerraform(struct?: Fcv3FunctionTracingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Fcv3FunctionTracingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Fcv3FunctionTracingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3FunctionTracingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // params - computed: true, optional: false, required: false
  private _params = new cdktf.StringMap(this, "params");
  public get params() {
    return this._params;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class Fcv3FunctionTracingConfigList extends cdktf.ComplexList {

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
  public get(index: number): Fcv3FunctionTracingConfigOutputReference {
    return new Fcv3FunctionTracingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Fcv3FunctionCode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#checksum Fcv3Function#checksum}
  */
  readonly checksum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#oss_bucket_name Fcv3Function#oss_bucket_name}
  */
  readonly ossBucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#oss_object_name Fcv3Function#oss_object_name}
  */
  readonly ossObjectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#zip_file Fcv3Function#zip_file}
  */
  readonly zipFile?: string;
}

export function fcv3FunctionCodeToTerraform(struct?: Fcv3FunctionCodeOutputReference | Fcv3FunctionCode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checksum: cdktf.stringToTerraform(struct!.checksum),
    oss_bucket_name: cdktf.stringToTerraform(struct!.ossBucketName),
    oss_object_name: cdktf.stringToTerraform(struct!.ossObjectName),
    zip_file: cdktf.stringToTerraform(struct!.zipFile),
  }
}


export function fcv3FunctionCodeToHclTerraform(struct?: Fcv3FunctionCodeOutputReference | Fcv3FunctionCode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checksum: {
      value: cdktf.stringToHclTerraform(struct!.checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oss_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.ossBucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oss_object_name: {
      value: cdktf.stringToHclTerraform(struct!.ossObjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zip_file: {
      value: cdktf.stringToHclTerraform(struct!.zipFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3FunctionCodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv3FunctionCode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.checksum = this._checksum;
    }
    if (this._ossBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ossBucketName = this._ossBucketName;
    }
    if (this._ossObjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ossObjectName = this._ossObjectName;
    }
    if (this._zipFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipFile = this._zipFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3FunctionCode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checksum = undefined;
      this._ossBucketName = undefined;
      this._ossObjectName = undefined;
      this._zipFile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checksum = value.checksum;
      this._ossBucketName = value.ossBucketName;
      this._ossObjectName = value.ossObjectName;
      this._zipFile = value.zipFile;
    }
  }

  // checksum - computed: false, optional: true, required: false
  private _checksum?: string; 
  public get checksum() {
    return this.getStringAttribute('checksum');
  }
  public set checksum(value: string) {
    this._checksum = value;
  }
  public resetChecksum() {
    this._checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checksumInput() {
    return this._checksum;
  }

  // oss_bucket_name - computed: false, optional: true, required: false
  private _ossBucketName?: string; 
  public get ossBucketName() {
    return this.getStringAttribute('oss_bucket_name');
  }
  public set ossBucketName(value: string) {
    this._ossBucketName = value;
  }
  public resetOssBucketName() {
    this._ossBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ossBucketNameInput() {
    return this._ossBucketName;
  }

  // oss_object_name - computed: false, optional: true, required: false
  private _ossObjectName?: string; 
  public get ossObjectName() {
    return this.getStringAttribute('oss_object_name');
  }
  public set ossObjectName(value: string) {
    this._ossObjectName = value;
  }
  public resetOssObjectName() {
    this._ossObjectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ossObjectNameInput() {
    return this._ossObjectName;
  }

  // zip_file - computed: false, optional: true, required: false
  private _zipFile?: string; 
  public get zipFile() {
    return this.getStringAttribute('zip_file');
  }
  public set zipFile(value: string) {
    this._zipFile = value;
  }
  public resetZipFile() {
    this._zipFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipFileInput() {
    return this._zipFile;
  }
}
export interface Fcv3FunctionCustomContainerConfigAccelerationInfo {
}

export function fcv3FunctionCustomContainerConfigAccelerationInfoToTerraform(struct?: Fcv3FunctionCustomContainerConfigAccelerationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fcv3FunctionCustomContainerConfigAccelerationInfoToHclTerraform(struct?: Fcv3FunctionCustomContainerConfigAccelerationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Fcv3FunctionCustomContainerConfigAccelerationInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Fcv3FunctionCustomContainerConfigAccelerationInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3FunctionCustomContainerConfigAccelerationInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class Fcv3FunctionCustomContainerConfigAccelerationInfoList extends cdktf.ComplexList {

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
  public get(index: number): Fcv3FunctionCustomContainerConfigAccelerationInfoOutputReference {
    return new Fcv3FunctionCustomContainerConfigAccelerationInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Fcv3FunctionCustomContainerConfigHealthCheckConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#failure_threshold Fcv3Function#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#http_get_url Fcv3Function#http_get_url}
  */
  readonly httpGetUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#initial_delay_seconds Fcv3Function#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#period_seconds Fcv3Function#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#success_threshold Fcv3Function#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#timeout_seconds Fcv3Function#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function fcv3FunctionCustomContainerConfigHealthCheckConfigToTerraform(struct?: Fcv3FunctionCustomContainerConfigHealthCheckConfigOutputReference | Fcv3FunctionCustomContainerConfigHealthCheckConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    http_get_url: cdktf.stringToTerraform(struct!.httpGetUrl),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function fcv3FunctionCustomContainerConfigHealthCheckConfigToHclTerraform(struct?: Fcv3FunctionCustomContainerConfigHealthCheckConfigOutputReference | Fcv3FunctionCustomContainerConfigHealthCheckConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_get_url: {
      value: cdktf.stringToHclTerraform(struct!.httpGetUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3FunctionCustomContainerConfigHealthCheckConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv3FunctionCustomContainerConfigHealthCheckConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._httpGetUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGetUrl = this._httpGetUrl;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3FunctionCustomContainerConfigHealthCheckConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureThreshold = undefined;
      this._httpGetUrl = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._timeoutSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureThreshold = value.failureThreshold;
      this._httpGetUrl = value.httpGetUrl;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // http_get_url - computed: false, optional: true, required: false
  private _httpGetUrl?: string; 
  public get httpGetUrl() {
    return this.getStringAttribute('http_get_url');
  }
  public set httpGetUrl(value: string) {
    this._httpGetUrl = value;
  }
  public resetHttpGetUrl() {
    this._httpGetUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetUrlInput() {
    return this._httpGetUrl;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface Fcv3FunctionCustomContainerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#acceleration_type Fcv3Function#acceleration_type}
  */
  readonly accelerationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#acr_instance_id Fcv3Function#acr_instance_id}
  */
  readonly acrInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#command Fcv3Function#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#entrypoint Fcv3Function#entrypoint}
  */
  readonly entrypoint?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#image Fcv3Function#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#port Fcv3Function#port}
  */
  readonly port?: number;
  /**
  * health_check_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#health_check_config Fcv3Function#health_check_config}
  */
  readonly healthCheckConfig?: Fcv3FunctionCustomContainerConfigHealthCheckConfig;
}

export function fcv3FunctionCustomContainerConfigToTerraform(struct?: Fcv3FunctionCustomContainerConfigOutputReference | Fcv3FunctionCustomContainerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acceleration_type: cdktf.stringToTerraform(struct!.accelerationType),
    acr_instance_id: cdktf.stringToTerraform(struct!.acrInstanceId),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    entrypoint: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entrypoint),
    image: cdktf.stringToTerraform(struct!.image),
    port: cdktf.numberToTerraform(struct!.port),
    health_check_config: fcv3FunctionCustomContainerConfigHealthCheckConfigToTerraform(struct!.healthCheckConfig),
  }
}


export function fcv3FunctionCustomContainerConfigToHclTerraform(struct?: Fcv3FunctionCustomContainerConfigOutputReference | Fcv3FunctionCustomContainerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acceleration_type: {
      value: cdktf.stringToHclTerraform(struct!.accelerationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acr_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.acrInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    entrypoint: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entrypoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_config: {
      value: fcv3FunctionCustomContainerConfigHealthCheckConfigToHclTerraform(struct!.healthCheckConfig),
      isBlock: true,
      type: "list",
      storageClassType: "Fcv3FunctionCustomContainerConfigHealthCheckConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3FunctionCustomContainerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv3FunctionCustomContainerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accelerationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accelerationType = this._accelerationType;
    }
    if (this._acrInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.acrInstanceId = this._acrInstanceId;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._entrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrypoint = this._entrypoint;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._healthCheckConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckConfig = this._healthCheckConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3FunctionCustomContainerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accelerationType = undefined;
      this._acrInstanceId = undefined;
      this._command = undefined;
      this._entrypoint = undefined;
      this._image = undefined;
      this._port = undefined;
      this._healthCheckConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accelerationType = value.accelerationType;
      this._acrInstanceId = value.acrInstanceId;
      this._command = value.command;
      this._entrypoint = value.entrypoint;
      this._image = value.image;
      this._port = value.port;
      this._healthCheckConfig.internalValue = value.healthCheckConfig;
    }
  }

  // acceleration_info - computed: true, optional: false, required: false
  private _accelerationInfo = new Fcv3FunctionCustomContainerConfigAccelerationInfoList(this, "acceleration_info", false);
  public get accelerationInfo() {
    return this._accelerationInfo;
  }

  // acceleration_type - computed: false, optional: true, required: false
  private _accelerationType?: string; 
  public get accelerationType() {
    return this.getStringAttribute('acceleration_type');
  }
  public set accelerationType(value: string) {
    this._accelerationType = value;
  }
  public resetAccelerationType() {
    this._accelerationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accelerationTypeInput() {
    return this._accelerationType;
  }

  // acr_instance_id - computed: false, optional: true, required: false
  private _acrInstanceId?: string; 
  public get acrInstanceId() {
    return this.getStringAttribute('acr_instance_id');
  }
  public set acrInstanceId(value: string) {
    this._acrInstanceId = value;
  }
  public resetAcrInstanceId() {
    this._acrInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acrInstanceIdInput() {
    return this._acrInstanceId;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // entrypoint - computed: false, optional: true, required: false
  private _entrypoint?: string[]; 
  public get entrypoint() {
    return this.getListAttribute('entrypoint');
  }
  public set entrypoint(value: string[]) {
    this._entrypoint = value;
  }
  public resetEntrypoint() {
    this._entrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // resolved_image_uri - computed: true, optional: false, required: false
  public get resolvedImageUri() {
    return this.getStringAttribute('resolved_image_uri');
  }

  // health_check_config - computed: false, optional: true, required: false
  private _healthCheckConfig = new Fcv3FunctionCustomContainerConfigHealthCheckConfigOutputReference(this, "health_check_config");
  public get healthCheckConfig() {
    return this._healthCheckConfig;
  }
  public putHealthCheckConfig(value: Fcv3FunctionCustomContainerConfigHealthCheckConfig) {
    this._healthCheckConfig.internalValue = value;
  }
  public resetHealthCheckConfig() {
    this._healthCheckConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckConfigInput() {
    return this._healthCheckConfig.internalValue;
  }
}
export interface Fcv3FunctionCustomDnsDnsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#name Fcv3Function#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#value Fcv3Function#value}
  */
  readonly value?: string;
}

export function fcv3FunctionCustomDnsDnsOptionsToTerraform(struct?: Fcv3FunctionCustomDnsDnsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function fcv3FunctionCustomDnsDnsOptionsToHclTerraform(struct?: Fcv3FunctionCustomDnsDnsOptions | cdktf.IResolvable): any {
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

export class Fcv3FunctionCustomDnsDnsOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Fcv3FunctionCustomDnsDnsOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Fcv3FunctionCustomDnsDnsOptions | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: true, required: false
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

export class Fcv3FunctionCustomDnsDnsOptionsList extends cdktf.ComplexList {
  public internalValue? : Fcv3FunctionCustomDnsDnsOptions[] | cdktf.IResolvable

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
  public get(index: number): Fcv3FunctionCustomDnsDnsOptionsOutputReference {
    return new Fcv3FunctionCustomDnsDnsOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Fcv3FunctionCustomDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#name_servers Fcv3Function#name_servers}
  */
  readonly nameServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#searches Fcv3Function#searches}
  */
  readonly searches?: string[];
  /**
  * dns_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#dns_options Fcv3Function#dns_options}
  */
  readonly dnsOptions?: Fcv3FunctionCustomDnsDnsOptions[] | cdktf.IResolvable;
}

export function fcv3FunctionCustomDnsToTerraform(struct?: Fcv3FunctionCustomDnsOutputReference | Fcv3FunctionCustomDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameServers),
    searches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searches),
    dns_options: cdktf.listMapper(fcv3FunctionCustomDnsDnsOptionsToTerraform, true)(struct!.dnsOptions),
  }
}


export function fcv3FunctionCustomDnsToHclTerraform(struct?: Fcv3FunctionCustomDnsOutputReference | Fcv3FunctionCustomDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    searches: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searches),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dns_options: {
      value: cdktf.listMapperHcl(fcv3FunctionCustomDnsDnsOptionsToHclTerraform, true)(struct!.dnsOptions),
      isBlock: true,
      type: "list",
      storageClassType: "Fcv3FunctionCustomDnsDnsOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3FunctionCustomDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv3FunctionCustomDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameServers = this._nameServers;
    }
    if (this._searches !== undefined) {
      hasAnyValues = true;
      internalValueResult.searches = this._searches;
    }
    if (this._dnsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsOptions = this._dnsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3FunctionCustomDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nameServers = undefined;
      this._searches = undefined;
      this._dnsOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nameServers = value.nameServers;
      this._searches = value.searches;
      this._dnsOptions.internalValue = value.dnsOptions;
    }
  }

  // name_servers - computed: false, optional: true, required: false
  private _nameServers?: string[]; 
  public get nameServers() {
    return this.getListAttribute('name_servers');
  }
  public set nameServers(value: string[]) {
    this._nameServers = value;
  }
  public resetNameServers() {
    this._nameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServersInput() {
    return this._nameServers;
  }

  // searches - computed: false, optional: true, required: false
  private _searches?: string[]; 
  public get searches() {
    return this.getListAttribute('searches');
  }
  public set searches(value: string[]) {
    this._searches = value;
  }
  public resetSearches() {
    this._searches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchesInput() {
    return this._searches;
  }

  // dns_options - computed: false, optional: true, required: false
  private _dnsOptions = new Fcv3FunctionCustomDnsDnsOptionsList(this, "dns_options", false);
  public get dnsOptions() {
    return this._dnsOptions;
  }
  public putDnsOptions(value: Fcv3FunctionCustomDnsDnsOptions[] | cdktf.IResolvable) {
    this._dnsOptions.internalValue = value;
  }
  public resetDnsOptions() {
    this._dnsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsOptionsInput() {
    return this._dnsOptions.internalValue;
  }
}
export interface Fcv3FunctionCustomRuntimeConfigHealthCheckConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#failure_threshold Fcv3Function#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#http_get_url Fcv3Function#http_get_url}
  */
  readonly httpGetUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#initial_delay_seconds Fcv3Function#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#period_seconds Fcv3Function#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#success_threshold Fcv3Function#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#timeout_seconds Fcv3Function#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function fcv3FunctionCustomRuntimeConfigHealthCheckConfigToTerraform(struct?: Fcv3FunctionCustomRuntimeConfigHealthCheckConfigOutputReference | Fcv3FunctionCustomRuntimeConfigHealthCheckConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    http_get_url: cdktf.stringToTerraform(struct!.httpGetUrl),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function fcv3FunctionCustomRuntimeConfigHealthCheckConfigToHclTerraform(struct?: Fcv3FunctionCustomRuntimeConfigHealthCheckConfigOutputReference | Fcv3FunctionCustomRuntimeConfigHealthCheckConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_get_url: {
      value: cdktf.stringToHclTerraform(struct!.httpGetUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3FunctionCustomRuntimeConfigHealthCheckConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv3FunctionCustomRuntimeConfigHealthCheckConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._httpGetUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGetUrl = this._httpGetUrl;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3FunctionCustomRuntimeConfigHealthCheckConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureThreshold = undefined;
      this._httpGetUrl = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._timeoutSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureThreshold = value.failureThreshold;
      this._httpGetUrl = value.httpGetUrl;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // failure_threshold - computed: true, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // http_get_url - computed: false, optional: true, required: false
  private _httpGetUrl?: string; 
  public get httpGetUrl() {
    return this.getStringAttribute('http_get_url');
  }
  public set httpGetUrl(value: string) {
    this._httpGetUrl = value;
  }
  public resetHttpGetUrl() {
    this._httpGetUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetUrlInput() {
    return this._httpGetUrl;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface Fcv3FunctionCustomRuntimeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#args Fcv3Function#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#command Fcv3Function#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#port Fcv3Function#port}
  */
  readonly port?: number;
  /**
  * health_check_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#health_check_config Fcv3Function#health_check_config}
  */
  readonly healthCheckConfig?: Fcv3FunctionCustomRuntimeConfigHealthCheckConfig;
}

export function fcv3FunctionCustomRuntimeConfigToTerraform(struct?: Fcv3FunctionCustomRuntimeConfigOutputReference | Fcv3FunctionCustomRuntimeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    port: cdktf.numberToTerraform(struct!.port),
    health_check_config: fcv3FunctionCustomRuntimeConfigHealthCheckConfigToTerraform(struct!.healthCheckConfig),
  }
}


export function fcv3FunctionCustomRuntimeConfigToHclTerraform(struct?: Fcv3FunctionCustomRuntimeConfigOutputReference | Fcv3FunctionCustomRuntimeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check_config: {
      value: fcv3FunctionCustomRuntimeConfigHealthCheckConfigToHclTerraform(struct!.healthCheckConfig),
      isBlock: true,
      type: "list",
      storageClassType: "Fcv3FunctionCustomRuntimeConfigHealthCheckConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3FunctionCustomRuntimeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv3FunctionCustomRuntimeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._healthCheckConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckConfig = this._healthCheckConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3FunctionCustomRuntimeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._port = undefined;
      this._healthCheckConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._port = value.port;
      this._healthCheckConfig.internalValue = value.healthCheckConfig;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // health_check_config - computed: false, optional: true, required: false
  private _healthCheckConfig = new Fcv3FunctionCustomRuntimeConfigHealthCheckConfigOutputReference(this, "health_check_config");
  public get healthCheckConfig() {
    return this._healthCheckConfig;
  }
  public putHealthCheckConfig(value: Fcv3FunctionCustomRuntimeConfigHealthCheckConfig) {
    this._healthCheckConfig.internalValue = value;
  }
  public resetHealthCheckConfig() {
    this._healthCheckConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckConfigInput() {
    return this._healthCheckConfig.internalValue;
  }
}
export interface Fcv3FunctionGpuConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#gpu_memory_size Fcv3Function#gpu_memory_size}
  */
  readonly gpuMemorySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#gpu_type Fcv3Function#gpu_type}
  */
  readonly gpuType?: string;
}

export function fcv3FunctionGpuConfigToTerraform(struct?: Fcv3FunctionGpuConfigOutputReference | Fcv3FunctionGpuConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gpu_memory_size: cdktf.numberToTerraform(struct!.gpuMemorySize),
    gpu_type: cdktf.stringToTerraform(struct!.gpuType),
  }
}


export function fcv3FunctionGpuConfigToHclTerraform(struct?: Fcv3FunctionGpuConfigOutputReference | Fcv3FunctionGpuConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gpu_memory_size: {
      value: cdktf.numberToHclTerraform(struct!.gpuMemorySize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gpu_type: {
      value: cdktf.stringToHclTerraform(struct!.gpuType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3FunctionGpuConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv3FunctionGpuConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gpuMemorySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuMemorySize = this._gpuMemorySize;
    }
    if (this._gpuType !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuType = this._gpuType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3FunctionGpuConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gpuMemorySize = undefined;
      this._gpuType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gpuMemorySize = value.gpuMemorySize;
      this._gpuType = value.gpuType;
    }
  }

  // gpu_memory_size - computed: false, optional: true, required: false
  private _gpuMemorySize?: number; 
  public get gpuMemorySize() {
    return this.getNumberAttribute('gpu_memory_size');
  }
  public set gpuMemorySize(value: number) {
    this._gpuMemorySize = value;
  }
  public resetGpuMemorySize() {
    this._gpuMemorySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuMemorySizeInput() {
    return this._gpuMemorySize;
  }

  // gpu_type - computed: false, optional: true, required: false
  private _gpuType?: string; 
  public get gpuType() {
    return this.getStringAttribute('gpu_type');
  }
  public set gpuType(value: string) {
    this._gpuType = value;
  }
  public resetGpuType() {
    this._gpuType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuTypeInput() {
    return this._gpuType;
  }
}
export interface Fcv3FunctionInstanceLifecycleConfigInitializer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#command Fcv3Function#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#handler Fcv3Function#handler}
  */
  readonly handler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#timeout Fcv3Function#timeout}
  */
  readonly timeout?: number;
}

export function fcv3FunctionInstanceLifecycleConfigInitializerToTerraform(struct?: Fcv3FunctionInstanceLifecycleConfigInitializerOutputReference | Fcv3FunctionInstanceLifecycleConfigInitializer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    handler: cdktf.stringToTerraform(struct!.handler),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function fcv3FunctionInstanceLifecycleConfigInitializerToHclTerraform(struct?: Fcv3FunctionInstanceLifecycleConfigInitializerOutputReference | Fcv3FunctionInstanceLifecycleConfigInitializer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    handler: {
      value: cdktf.stringToHclTerraform(struct!.handler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3FunctionInstanceLifecycleConfigInitializerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv3FunctionInstanceLifecycleConfigInitializer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._handler !== undefined) {
      hasAnyValues = true;
      internalValueResult.handler = this._handler;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3FunctionInstanceLifecycleConfigInitializer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
      this._handler = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
      this._handler = value.handler;
      this._timeout = value.timeout;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // handler - computed: false, optional: true, required: false
  private _handler?: string; 
  public get handler() {
    return this.getStringAttribute('handler');
  }
  public set handler(value: string) {
    this._handler = value;
  }
  public resetHandler() {
    this._handler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface Fcv3FunctionInstanceLifecycleConfigPreStop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#handler Fcv3Function#handler}
  */
  readonly handler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#timeout Fcv3Function#timeout}
  */
  readonly timeout?: number;
}

export function fcv3FunctionInstanceLifecycleConfigPreStopToTerraform(struct?: Fcv3FunctionInstanceLifecycleConfigPreStopOutputReference | Fcv3FunctionInstanceLifecycleConfigPreStop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    handler: cdktf.stringToTerraform(struct!.handler),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function fcv3FunctionInstanceLifecycleConfigPreStopToHclTerraform(struct?: Fcv3FunctionInstanceLifecycleConfigPreStopOutputReference | Fcv3FunctionInstanceLifecycleConfigPreStop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    handler: {
      value: cdktf.stringToHclTerraform(struct!.handler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3FunctionInstanceLifecycleConfigPreStopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv3FunctionInstanceLifecycleConfigPreStop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._handler !== undefined) {
      hasAnyValues = true;
      internalValueResult.handler = this._handler;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3FunctionInstanceLifecycleConfigPreStop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._handler = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._handler = value.handler;
      this._timeout = value.timeout;
    }
  }

  // handler - computed: false, optional: true, required: false
  private _handler?: string; 
  public get handler() {
    return this.getStringAttribute('handler');
  }
  public set handler(value: string) {
    this._handler = value;
  }
  public resetHandler() {
    this._handler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface Fcv3FunctionInstanceLifecycleConfig {
  /**
  * initializer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#initializer Fcv3Function#initializer}
  */
  readonly initializer?: Fcv3FunctionInstanceLifecycleConfigInitializer;
  /**
  * pre_stop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#pre_stop Fcv3Function#pre_stop}
  */
  readonly preStop?: Fcv3FunctionInstanceLifecycleConfigPreStop;
}

export function fcv3FunctionInstanceLifecycleConfigToTerraform(struct?: Fcv3FunctionInstanceLifecycleConfigOutputReference | Fcv3FunctionInstanceLifecycleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    initializer: fcv3FunctionInstanceLifecycleConfigInitializerToTerraform(struct!.initializer),
    pre_stop: fcv3FunctionInstanceLifecycleConfigPreStopToTerraform(struct!.preStop),
  }
}


export function fcv3FunctionInstanceLifecycleConfigToHclTerraform(struct?: Fcv3FunctionInstanceLifecycleConfigOutputReference | Fcv3FunctionInstanceLifecycleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    initializer: {
      value: fcv3FunctionInstanceLifecycleConfigInitializerToHclTerraform(struct!.initializer),
      isBlock: true,
      type: "list",
      storageClassType: "Fcv3FunctionInstanceLifecycleConfigInitializerList",
    },
    pre_stop: {
      value: fcv3FunctionInstanceLifecycleConfigPreStopToHclTerraform(struct!.preStop),
      isBlock: true,
      type: "list",
      storageClassType: "Fcv3FunctionInstanceLifecycleConfigPreStopList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3FunctionInstanceLifecycleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv3FunctionInstanceLifecycleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initializer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initializer = this._initializer?.internalValue;
    }
    if (this._preStop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preStop = this._preStop?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3FunctionInstanceLifecycleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._initializer.internalValue = undefined;
      this._preStop.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._initializer.internalValue = value.initializer;
      this._preStop.internalValue = value.preStop;
    }
  }

  // initializer - computed: false, optional: true, required: false
  private _initializer = new Fcv3FunctionInstanceLifecycleConfigInitializerOutputReference(this, "initializer");
  public get initializer() {
    return this._initializer;
  }
  public putInitializer(value: Fcv3FunctionInstanceLifecycleConfigInitializer) {
    this._initializer.internalValue = value;
  }
  public resetInitializer() {
    this._initializer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializerInput() {
    return this._initializer.internalValue;
  }

  // pre_stop - computed: false, optional: true, required: false
  private _preStop = new Fcv3FunctionInstanceLifecycleConfigPreStopOutputReference(this, "pre_stop");
  public get preStop() {
    return this._preStop;
  }
  public putPreStop(value: Fcv3FunctionInstanceLifecycleConfigPreStop) {
    this._preStop.internalValue = value;
  }
  public resetPreStop() {
    this._preStop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStopInput() {
    return this._preStop.internalValue;
  }
}
export interface Fcv3FunctionInvocationRestriction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#disable Fcv3Function#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#reason Fcv3Function#reason}
  */
  readonly reason?: string;
}

export function fcv3FunctionInvocationRestrictionToTerraform(struct?: Fcv3FunctionInvocationRestrictionOutputReference | Fcv3FunctionInvocationRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    reason: cdktf.stringToTerraform(struct!.reason),
  }
}


export function fcv3FunctionInvocationRestrictionToHclTerraform(struct?: Fcv3FunctionInvocationRestrictionOutputReference | Fcv3FunctionInvocationRestriction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3FunctionInvocationRestrictionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv3FunctionInvocationRestriction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3FunctionInvocationRestriction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._reason = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._reason = value.reason;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }
}
export interface Fcv3FunctionLogConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#enable_instance_metrics Fcv3Function#enable_instance_metrics}
  */
  readonly enableInstanceMetrics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#enable_request_metrics Fcv3Function#enable_request_metrics}
  */
  readonly enableRequestMetrics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#log_begin_rule Fcv3Function#log_begin_rule}
  */
  readonly logBeginRule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#logstore Fcv3Function#logstore}
  */
  readonly logstore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#project Fcv3Function#project}
  */
  readonly project?: string;
}

export function fcv3FunctionLogConfigToTerraform(struct?: Fcv3FunctionLogConfigOutputReference | Fcv3FunctionLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_instance_metrics: cdktf.booleanToTerraform(struct!.enableInstanceMetrics),
    enable_request_metrics: cdktf.booleanToTerraform(struct!.enableRequestMetrics),
    log_begin_rule: cdktf.stringToTerraform(struct!.logBeginRule),
    logstore: cdktf.stringToTerraform(struct!.logstore),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function fcv3FunctionLogConfigToHclTerraform(struct?: Fcv3FunctionLogConfigOutputReference | Fcv3FunctionLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_instance_metrics: {
      value: cdktf.booleanToHclTerraform(struct!.enableInstanceMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_request_metrics: {
      value: cdktf.booleanToHclTerraform(struct!.enableRequestMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_begin_rule: {
      value: cdktf.stringToHclTerraform(struct!.logBeginRule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logstore: {
      value: cdktf.stringToHclTerraform(struct!.logstore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3FunctionLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv3FunctionLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableInstanceMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInstanceMetrics = this._enableInstanceMetrics;
    }
    if (this._enableRequestMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRequestMetrics = this._enableRequestMetrics;
    }
    if (this._logBeginRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.logBeginRule = this._logBeginRule;
    }
    if (this._logstore !== undefined) {
      hasAnyValues = true;
      internalValueResult.logstore = this._logstore;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3FunctionLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableInstanceMetrics = undefined;
      this._enableRequestMetrics = undefined;
      this._logBeginRule = undefined;
      this._logstore = undefined;
      this._project = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableInstanceMetrics = value.enableInstanceMetrics;
      this._enableRequestMetrics = value.enableRequestMetrics;
      this._logBeginRule = value.logBeginRule;
      this._logstore = value.logstore;
      this._project = value.project;
    }
  }

  // enable_instance_metrics - computed: true, optional: true, required: false
  private _enableInstanceMetrics?: boolean | cdktf.IResolvable; 
  public get enableInstanceMetrics() {
    return this.getBooleanAttribute('enable_instance_metrics');
  }
  public set enableInstanceMetrics(value: boolean | cdktf.IResolvable) {
    this._enableInstanceMetrics = value;
  }
  public resetEnableInstanceMetrics() {
    this._enableInstanceMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInstanceMetricsInput() {
    return this._enableInstanceMetrics;
  }

  // enable_request_metrics - computed: true, optional: true, required: false
  private _enableRequestMetrics?: boolean | cdktf.IResolvable; 
  public get enableRequestMetrics() {
    return this.getBooleanAttribute('enable_request_metrics');
  }
  public set enableRequestMetrics(value: boolean | cdktf.IResolvable) {
    this._enableRequestMetrics = value;
  }
  public resetEnableRequestMetrics() {
    this._enableRequestMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRequestMetricsInput() {
    return this._enableRequestMetrics;
  }

  // log_begin_rule - computed: true, optional: true, required: false
  private _logBeginRule?: string; 
  public get logBeginRule() {
    return this.getStringAttribute('log_begin_rule');
  }
  public set logBeginRule(value: string) {
    this._logBeginRule = value;
  }
  public resetLogBeginRule() {
    this._logBeginRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logBeginRuleInput() {
    return this._logBeginRule;
  }

  // logstore - computed: false, optional: true, required: false
  private _logstore?: string; 
  public get logstore() {
    return this.getStringAttribute('logstore');
  }
  public set logstore(value: string) {
    this._logstore = value;
  }
  public resetLogstore() {
    this._logstore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logstoreInput() {
    return this._logstore;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}
export interface Fcv3FunctionNasConfigMountPoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#enable_tls Fcv3Function#enable_tls}
  */
  readonly enableTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#mount_dir Fcv3Function#mount_dir}
  */
  readonly mountDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#server_addr Fcv3Function#server_addr}
  */
  readonly serverAddr?: string;
}

export function fcv3FunctionNasConfigMountPointsToTerraform(struct?: Fcv3FunctionNasConfigMountPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_tls: cdktf.booleanToTerraform(struct!.enableTls),
    mount_dir: cdktf.stringToTerraform(struct!.mountDir),
    server_addr: cdktf.stringToTerraform(struct!.serverAddr),
  }
}


export function fcv3FunctionNasConfigMountPointsToHclTerraform(struct?: Fcv3FunctionNasConfigMountPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_tls: {
      value: cdktf.booleanToHclTerraform(struct!.enableTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mount_dir: {
      value: cdktf.stringToHclTerraform(struct!.mountDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_addr: {
      value: cdktf.stringToHclTerraform(struct!.serverAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3FunctionNasConfigMountPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Fcv3FunctionNasConfigMountPoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTls = this._enableTls;
    }
    if (this._mountDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountDir = this._mountDir;
    }
    if (this._serverAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddr = this._serverAddr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3FunctionNasConfigMountPoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableTls = undefined;
      this._mountDir = undefined;
      this._serverAddr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableTls = value.enableTls;
      this._mountDir = value.mountDir;
      this._serverAddr = value.serverAddr;
    }
  }

  // enable_tls - computed: false, optional: true, required: false
  private _enableTls?: boolean | cdktf.IResolvable; 
  public get enableTls() {
    return this.getBooleanAttribute('enable_tls');
  }
  public set enableTls(value: boolean | cdktf.IResolvable) {
    this._enableTls = value;
  }
  public resetEnableTls() {
    this._enableTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTlsInput() {
    return this._enableTls;
  }

  // mount_dir - computed: false, optional: true, required: false
  private _mountDir?: string; 
  public get mountDir() {
    return this.getStringAttribute('mount_dir');
  }
  public set mountDir(value: string) {
    this._mountDir = value;
  }
  public resetMountDir() {
    this._mountDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountDirInput() {
    return this._mountDir;
  }

  // server_addr - computed: false, optional: true, required: false
  private _serverAddr?: string; 
  public get serverAddr() {
    return this.getStringAttribute('server_addr');
  }
  public set serverAddr(value: string) {
    this._serverAddr = value;
  }
  public resetServerAddr() {
    this._serverAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddrInput() {
    return this._serverAddr;
  }
}

export class Fcv3FunctionNasConfigMountPointsList extends cdktf.ComplexList {
  public internalValue? : Fcv3FunctionNasConfigMountPoints[] | cdktf.IResolvable

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
  public get(index: number): Fcv3FunctionNasConfigMountPointsOutputReference {
    return new Fcv3FunctionNasConfigMountPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Fcv3FunctionNasConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#group_id Fcv3Function#group_id}
  */
  readonly groupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#user_id Fcv3Function#user_id}
  */
  readonly userId?: number;
  /**
  * mount_points block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#mount_points Fcv3Function#mount_points}
  */
  readonly mountPoints?: Fcv3FunctionNasConfigMountPoints[] | cdktf.IResolvable;
}

export function fcv3FunctionNasConfigToTerraform(struct?: Fcv3FunctionNasConfigOutputReference | Fcv3FunctionNasConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.numberToTerraform(struct!.groupId),
    user_id: cdktf.numberToTerraform(struct!.userId),
    mount_points: cdktf.listMapper(fcv3FunctionNasConfigMountPointsToTerraform, true)(struct!.mountPoints),
  }
}


export function fcv3FunctionNasConfigToHclTerraform(struct?: Fcv3FunctionNasConfigOutputReference | Fcv3FunctionNasConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.numberToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_id: {
      value: cdktf.numberToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mount_points: {
      value: cdktf.listMapperHcl(fcv3FunctionNasConfigMountPointsToHclTerraform, true)(struct!.mountPoints),
      isBlock: true,
      type: "list",
      storageClassType: "Fcv3FunctionNasConfigMountPointsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3FunctionNasConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv3FunctionNasConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    if (this._mountPoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoints = this._mountPoints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3FunctionNasConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupId = undefined;
      this._userId = undefined;
      this._mountPoints.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupId = value.groupId;
      this._userId = value.userId;
      this._mountPoints.internalValue = value.mountPoints;
    }
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // mount_points - computed: false, optional: true, required: false
  private _mountPoints = new Fcv3FunctionNasConfigMountPointsList(this, "mount_points", false);
  public get mountPoints() {
    return this._mountPoints;
  }
  public putMountPoints(value: Fcv3FunctionNasConfigMountPoints[] | cdktf.IResolvable) {
    this._mountPoints.internalValue = value;
  }
  public resetMountPoints() {
    this._mountPoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointsInput() {
    return this._mountPoints.internalValue;
  }
}
export interface Fcv3FunctionOssMountConfigMountPoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#bucket_name Fcv3Function#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#bucket_path Fcv3Function#bucket_path}
  */
  readonly bucketPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#endpoint Fcv3Function#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#mount_dir Fcv3Function#mount_dir}
  */
  readonly mountDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#read_only Fcv3Function#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function fcv3FunctionOssMountConfigMountPointsToTerraform(struct?: Fcv3FunctionOssMountConfigMountPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_path: cdktf.stringToTerraform(struct!.bucketPath),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    mount_dir: cdktf.stringToTerraform(struct!.mountDir),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function fcv3FunctionOssMountConfigMountPointsToHclTerraform(struct?: Fcv3FunctionOssMountConfigMountPoints | cdktf.IResolvable): any {
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
    bucket_path: {
      value: cdktf.stringToHclTerraform(struct!.bucketPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_dir: {
      value: cdktf.stringToHclTerraform(struct!.mountDir),
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

export class Fcv3FunctionOssMountConfigMountPointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Fcv3FunctionOssMountConfigMountPoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPath = this._bucketPath;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._mountDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountDir = this._mountDir;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3FunctionOssMountConfigMountPoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketName = undefined;
      this._bucketPath = undefined;
      this._endpoint = undefined;
      this._mountDir = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketName = value.bucketName;
      this._bucketPath = value.bucketPath;
      this._endpoint = value.endpoint;
      this._mountDir = value.mountDir;
      this._readOnly = value.readOnly;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_path - computed: false, optional: true, required: false
  private _bucketPath?: string; 
  public get bucketPath() {
    return this.getStringAttribute('bucket_path');
  }
  public set bucketPath(value: string) {
    this._bucketPath = value;
  }
  public resetBucketPath() {
    this._bucketPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPathInput() {
    return this._bucketPath;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // mount_dir - computed: false, optional: true, required: false
  private _mountDir?: string; 
  public get mountDir() {
    return this.getStringAttribute('mount_dir');
  }
  public set mountDir(value: string) {
    this._mountDir = value;
  }
  public resetMountDir() {
    this._mountDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountDirInput() {
    return this._mountDir;
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

export class Fcv3FunctionOssMountConfigMountPointsList extends cdktf.ComplexList {
  public internalValue? : Fcv3FunctionOssMountConfigMountPoints[] | cdktf.IResolvable

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
  public get(index: number): Fcv3FunctionOssMountConfigMountPointsOutputReference {
    return new Fcv3FunctionOssMountConfigMountPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Fcv3FunctionOssMountConfig {
  /**
  * mount_points block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#mount_points Fcv3Function#mount_points}
  */
  readonly mountPoints?: Fcv3FunctionOssMountConfigMountPoints[] | cdktf.IResolvable;
}

export function fcv3FunctionOssMountConfigToTerraform(struct?: Fcv3FunctionOssMountConfigOutputReference | Fcv3FunctionOssMountConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_points: cdktf.listMapper(fcv3FunctionOssMountConfigMountPointsToTerraform, true)(struct!.mountPoints),
  }
}


export function fcv3FunctionOssMountConfigToHclTerraform(struct?: Fcv3FunctionOssMountConfigOutputReference | Fcv3FunctionOssMountConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_points: {
      value: cdktf.listMapperHcl(fcv3FunctionOssMountConfigMountPointsToHclTerraform, true)(struct!.mountPoints),
      isBlock: true,
      type: "list",
      storageClassType: "Fcv3FunctionOssMountConfigMountPointsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3FunctionOssMountConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv3FunctionOssMountConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPoints = this._mountPoints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3FunctionOssMountConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mountPoints.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mountPoints.internalValue = value.mountPoints;
    }
  }

  // mount_points - computed: false, optional: true, required: false
  private _mountPoints = new Fcv3FunctionOssMountConfigMountPointsList(this, "mount_points", false);
  public get mountPoints() {
    return this._mountPoints;
  }
  public putMountPoints(value: Fcv3FunctionOssMountConfigMountPoints[] | cdktf.IResolvable) {
    this._mountPoints.internalValue = value;
  }
  public resetMountPoints() {
    this._mountPoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointsInput() {
    return this._mountPoints.internalValue;
  }
}
export interface Fcv3FunctionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#create Fcv3Function#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#delete Fcv3Function#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#update Fcv3Function#update}
  */
  readonly update?: string;
}

export function fcv3FunctionTimeoutsToTerraform(struct?: Fcv3FunctionTimeouts | cdktf.IResolvable): any {
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


export function fcv3FunctionTimeoutsToHclTerraform(struct?: Fcv3FunctionTimeouts | cdktf.IResolvable): any {
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

export class Fcv3FunctionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Fcv3FunctionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Fcv3FunctionTimeouts | cdktf.IResolvable | undefined) {
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
export interface Fcv3FunctionVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#security_group_id Fcv3Function#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#vpc_id Fcv3Function#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#vswitch_ids Fcv3Function#vswitch_ids}
  */
  readonly vswitchIds?: string[];
}

export function fcv3FunctionVpcConfigToTerraform(struct?: Fcv3FunctionVpcConfigOutputReference | Fcv3FunctionVpcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    vswitch_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vswitchIds),
  }
}


export function fcv3FunctionVpcConfigToHclTerraform(struct?: Fcv3FunctionVpcConfigOutputReference | Fcv3FunctionVpcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vswitch_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vswitchIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Fcv3FunctionVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Fcv3FunctionVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupId = this._securityGroupId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._vswitchIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitchIds = this._vswitchIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Fcv3FunctionVpcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroupId = undefined;
      this._vpcId = undefined;
      this._vswitchIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroupId = value.securityGroupId;
      this._vpcId = value.vpcId;
      this._vswitchIds = value.vswitchIds;
    }
  }

  // security_group_id - computed: false, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vswitch_ids - computed: false, optional: true, required: false
  private _vswitchIds?: string[]; 
  public get vswitchIds() {
    return this.getListAttribute('vswitch_ids');
  }
  public set vswitchIds(value: string[]) {
    this._vswitchIds = value;
  }
  public resetVswitchIds() {
    this._vswitchIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdsInput() {
    return this._vswitchIds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function alicloud_fcv3_function}
*/
export class Fcv3Function extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_fcv3_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Fcv3Function resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Fcv3Function to import
  * @param importFromId The id of the existing Fcv3Function that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Fcv3Function to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_fcv3_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/fcv3_function alicloud_fcv3_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Fcv3FunctionConfig
  */
  public constructor(scope: Construct, id: string, config: Fcv3FunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_fcv3_function',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cpu = config.cpu;
    this._description = config.description;
    this._diskSize = config.diskSize;
    this._environmentVariables = config.environmentVariables;
    this._functionName = config.functionName;
    this._handler = config.handler;
    this._id = config.id;
    this._instanceConcurrency = config.instanceConcurrency;
    this._instanceIsolationMode = config.instanceIsolationMode;
    this._internetAccess = config.internetAccess;
    this._layers = config.layers;
    this._memorySize = config.memorySize;
    this._resourceGroupId = config.resourceGroupId;
    this._role = config.role;
    this._runtime = config.runtime;
    this._sessionAffinity = config.sessionAffinity;
    this._sessionAffinityConfig = config.sessionAffinityConfig;
    this._tags = config.tags;
    this._timeout = config.timeout;
    this._code.internalValue = config.code;
    this._customContainerConfig.internalValue = config.customContainerConfig;
    this._customDns.internalValue = config.customDns;
    this._customRuntimeConfig.internalValue = config.customRuntimeConfig;
    this._gpuConfig.internalValue = config.gpuConfig;
    this._instanceLifecycleConfig.internalValue = config.instanceLifecycleConfig;
    this._invocationRestriction.internalValue = config.invocationRestriction;
    this._logConfig.internalValue = config.logConfig;
    this._nasConfig.internalValue = config.nasConfig;
    this._ossMountConfig.internalValue = config.ossMountConfig;
    this._timeouts.internalValue = config.timeouts;
    this._vpcConfig.internalValue = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // code_size - computed: true, optional: false, required: false
  public get codeSize() {
    return this.getNumberAttribute('code_size');
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // disk_size - computed: true, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // function_arn - computed: true, optional: false, required: false
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }

  // function_id - computed: true, optional: false, required: false
  public get functionId() {
    return this.getStringAttribute('function_id');
  }

  // function_name - computed: true, optional: true, required: false
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  public resetFunctionName() {
    this._functionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // handler - computed: false, optional: false, required: true
  private _handler?: string; 
  public get handler() {
    return this.getStringAttribute('handler');
  }
  public set handler(value: string) {
    this._handler = value;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler;
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

  // instance_concurrency - computed: true, optional: true, required: false
  private _instanceConcurrency?: number; 
  public get instanceConcurrency() {
    return this.getNumberAttribute('instance_concurrency');
  }
  public set instanceConcurrency(value: number) {
    this._instanceConcurrency = value;
  }
  public resetInstanceConcurrency() {
    this._instanceConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceConcurrencyInput() {
    return this._instanceConcurrency;
  }

  // instance_isolation_mode - computed: false, optional: true, required: false
  private _instanceIsolationMode?: string; 
  public get instanceIsolationMode() {
    return this.getStringAttribute('instance_isolation_mode');
  }
  public set instanceIsolationMode(value: string) {
    this._instanceIsolationMode = value;
  }
  public resetInstanceIsolationMode() {
    this._instanceIsolationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIsolationModeInput() {
    return this._instanceIsolationMode;
  }

  // internet_access - computed: true, optional: true, required: false
  private _internetAccess?: boolean | cdktf.IResolvable; 
  public get internetAccess() {
    return this.getBooleanAttribute('internet_access');
  }
  public set internetAccess(value: boolean | cdktf.IResolvable) {
    this._internetAccess = value;
  }
  public resetInternetAccess() {
    this._internetAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetAccessInput() {
    return this._internetAccess;
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
  }

  // last_update_status - computed: true, optional: false, required: false
  public get lastUpdateStatus() {
    return this.getStringAttribute('last_update_status');
  }

  // last_update_status_reason - computed: true, optional: false, required: false
  public get lastUpdateStatusReason() {
    return this.getStringAttribute('last_update_status_reason');
  }

  // last_update_status_reason_code - computed: true, optional: false, required: false
  public get lastUpdateStatusReasonCode() {
    return this.getStringAttribute('last_update_status_reason_code');
  }

  // layers - computed: false, optional: true, required: false
  private _layers?: string[]; 
  public get layers() {
    return this.getListAttribute('layers');
  }
  public set layers(value: string[]) {
    this._layers = value;
  }
  public resetLayers() {
    this._layers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layersInput() {
    return this._layers;
  }

  // memory_size - computed: true, optional: true, required: false
  private _memorySize?: number; 
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }
  public set memorySize(value: number) {
    this._memorySize = value;
  }
  public resetMemorySize() {
    this._memorySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeInput() {
    return this._memorySize;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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

  // session_affinity - computed: false, optional: true, required: false
  private _sessionAffinity?: string; 
  public get sessionAffinity() {
    return this.getStringAttribute('session_affinity');
  }
  public set sessionAffinity(value: string) {
    this._sessionAffinity = value;
  }
  public resetSessionAffinity() {
    this._sessionAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityInput() {
    return this._sessionAffinity;
  }

  // session_affinity_config - computed: false, optional: true, required: false
  private _sessionAffinityConfig?: string; 
  public get sessionAffinityConfig() {
    return this.getStringAttribute('session_affinity_config');
  }
  public set sessionAffinityConfig(value: string) {
    this._sessionAffinityConfig = value;
  }
  public resetSessionAffinityConfig() {
    this._sessionAffinityConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityConfigInput() {
    return this._sessionAffinityConfig;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_reason - computed: true, optional: false, required: false
  public get stateReason() {
    return this.getStringAttribute('state_reason');
  }

  // state_reason_code - computed: true, optional: false, required: false
  public get stateReasonCode() {
    return this.getStringAttribute('state_reason_code');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tracing_config - computed: true, optional: false, required: false
  private _tracingConfig = new Fcv3FunctionTracingConfigList(this, "tracing_config", false);
  public get tracingConfig() {
    return this._tracingConfig;
  }

  // code - computed: false, optional: true, required: false
  private _code = new Fcv3FunctionCodeOutputReference(this, "code");
  public get code() {
    return this._code;
  }
  public putCode(value: Fcv3FunctionCode) {
    this._code.internalValue = value;
  }
  public resetCode() {
    this._code.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code.internalValue;
  }

  // custom_container_config - computed: false, optional: true, required: false
  private _customContainerConfig = new Fcv3FunctionCustomContainerConfigOutputReference(this, "custom_container_config");
  public get customContainerConfig() {
    return this._customContainerConfig;
  }
  public putCustomContainerConfig(value: Fcv3FunctionCustomContainerConfig) {
    this._customContainerConfig.internalValue = value;
  }
  public resetCustomContainerConfig() {
    this._customContainerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customContainerConfigInput() {
    return this._customContainerConfig.internalValue;
  }

  // custom_dns - computed: false, optional: true, required: false
  private _customDns = new Fcv3FunctionCustomDnsOutputReference(this, "custom_dns");
  public get customDns() {
    return this._customDns;
  }
  public putCustomDns(value: Fcv3FunctionCustomDns) {
    this._customDns.internalValue = value;
  }
  public resetCustomDns() {
    this._customDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDnsInput() {
    return this._customDns.internalValue;
  }

  // custom_runtime_config - computed: false, optional: true, required: false
  private _customRuntimeConfig = new Fcv3FunctionCustomRuntimeConfigOutputReference(this, "custom_runtime_config");
  public get customRuntimeConfig() {
    return this._customRuntimeConfig;
  }
  public putCustomRuntimeConfig(value: Fcv3FunctionCustomRuntimeConfig) {
    this._customRuntimeConfig.internalValue = value;
  }
  public resetCustomRuntimeConfig() {
    this._customRuntimeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRuntimeConfigInput() {
    return this._customRuntimeConfig.internalValue;
  }

  // gpu_config - computed: false, optional: true, required: false
  private _gpuConfig = new Fcv3FunctionGpuConfigOutputReference(this, "gpu_config");
  public get gpuConfig() {
    return this._gpuConfig;
  }
  public putGpuConfig(value: Fcv3FunctionGpuConfig) {
    this._gpuConfig.internalValue = value;
  }
  public resetGpuConfig() {
    this._gpuConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuConfigInput() {
    return this._gpuConfig.internalValue;
  }

  // instance_lifecycle_config - computed: false, optional: true, required: false
  private _instanceLifecycleConfig = new Fcv3FunctionInstanceLifecycleConfigOutputReference(this, "instance_lifecycle_config");
  public get instanceLifecycleConfig() {
    return this._instanceLifecycleConfig;
  }
  public putInstanceLifecycleConfig(value: Fcv3FunctionInstanceLifecycleConfig) {
    this._instanceLifecycleConfig.internalValue = value;
  }
  public resetInstanceLifecycleConfig() {
    this._instanceLifecycleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceLifecycleConfigInput() {
    return this._instanceLifecycleConfig.internalValue;
  }

  // invocation_restriction - computed: false, optional: true, required: false
  private _invocationRestriction = new Fcv3FunctionInvocationRestrictionOutputReference(this, "invocation_restriction");
  public get invocationRestriction() {
    return this._invocationRestriction;
  }
  public putInvocationRestriction(value: Fcv3FunctionInvocationRestriction) {
    this._invocationRestriction.internalValue = value;
  }
  public resetInvocationRestriction() {
    this._invocationRestriction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationRestrictionInput() {
    return this._invocationRestriction.internalValue;
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig = new Fcv3FunctionLogConfigOutputReference(this, "log_config");
  public get logConfig() {
    return this._logConfig;
  }
  public putLogConfig(value: Fcv3FunctionLogConfig) {
    this._logConfig.internalValue = value;
  }
  public resetLogConfig() {
    this._logConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig.internalValue;
  }

  // nas_config - computed: false, optional: true, required: false
  private _nasConfig = new Fcv3FunctionNasConfigOutputReference(this, "nas_config");
  public get nasConfig() {
    return this._nasConfig;
  }
  public putNasConfig(value: Fcv3FunctionNasConfig) {
    this._nasConfig.internalValue = value;
  }
  public resetNasConfig() {
    this._nasConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nasConfigInput() {
    return this._nasConfig.internalValue;
  }

  // oss_mount_config - computed: false, optional: true, required: false
  private _ossMountConfig = new Fcv3FunctionOssMountConfigOutputReference(this, "oss_mount_config");
  public get ossMountConfig() {
    return this._ossMountConfig;
  }
  public putOssMountConfig(value: Fcv3FunctionOssMountConfig) {
    this._ossMountConfig.internalValue = value;
  }
  public resetOssMountConfig() {
    this._ossMountConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ossMountConfigInput() {
    return this._ossMountConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Fcv3FunctionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Fcv3FunctionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new Fcv3FunctionVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: Fcv3FunctionVpcConfig) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cpu: cdktf.numberToTerraform(this._cpu),
      description: cdktf.stringToTerraform(this._description),
      disk_size: cdktf.numberToTerraform(this._diskSize),
      environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._environmentVariables),
      function_name: cdktf.stringToTerraform(this._functionName),
      handler: cdktf.stringToTerraform(this._handler),
      id: cdktf.stringToTerraform(this._id),
      instance_concurrency: cdktf.numberToTerraform(this._instanceConcurrency),
      instance_isolation_mode: cdktf.stringToTerraform(this._instanceIsolationMode),
      internet_access: cdktf.booleanToTerraform(this._internetAccess),
      layers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._layers),
      memory_size: cdktf.numberToTerraform(this._memorySize),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      role: cdktf.stringToTerraform(this._role),
      runtime: cdktf.stringToTerraform(this._runtime),
      session_affinity: cdktf.stringToTerraform(this._sessionAffinity),
      session_affinity_config: cdktf.stringToTerraform(this._sessionAffinityConfig),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeout: cdktf.numberToTerraform(this._timeout),
      code: fcv3FunctionCodeToTerraform(this._code.internalValue),
      custom_container_config: fcv3FunctionCustomContainerConfigToTerraform(this._customContainerConfig.internalValue),
      custom_dns: fcv3FunctionCustomDnsToTerraform(this._customDns.internalValue),
      custom_runtime_config: fcv3FunctionCustomRuntimeConfigToTerraform(this._customRuntimeConfig.internalValue),
      gpu_config: fcv3FunctionGpuConfigToTerraform(this._gpuConfig.internalValue),
      instance_lifecycle_config: fcv3FunctionInstanceLifecycleConfigToTerraform(this._instanceLifecycleConfig.internalValue),
      invocation_restriction: fcv3FunctionInvocationRestrictionToTerraform(this._invocationRestriction.internalValue),
      log_config: fcv3FunctionLogConfigToTerraform(this._logConfig.internalValue),
      nas_config: fcv3FunctionNasConfigToTerraform(this._nasConfig.internalValue),
      oss_mount_config: fcv3FunctionOssMountConfigToTerraform(this._ossMountConfig.internalValue),
      timeouts: fcv3FunctionTimeoutsToTerraform(this._timeouts.internalValue),
      vpc_config: fcv3FunctionVpcConfigToTerraform(this._vpcConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpu: {
        value: cdktf.numberToHclTerraform(this._cpu),
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
      disk_size: {
        value: cdktf.numberToHclTerraform(this._diskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      environment_variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environmentVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      function_name: {
        value: cdktf.stringToHclTerraform(this._functionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      handler: {
        value: cdktf.stringToHclTerraform(this._handler),
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
      instance_concurrency: {
        value: cdktf.numberToHclTerraform(this._instanceConcurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_isolation_mode: {
        value: cdktf.stringToHclTerraform(this._instanceIsolationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_access: {
        value: cdktf.booleanToHclTerraform(this._internetAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      layers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._layers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      memory_size: {
        value: cdktf.numberToHclTerraform(this._memorySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
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
      session_affinity: {
        value: cdktf.stringToHclTerraform(this._sessionAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_affinity_config: {
        value: cdktf.stringToHclTerraform(this._sessionAffinityConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      code: {
        value: fcv3FunctionCodeToHclTerraform(this._code.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Fcv3FunctionCodeList",
      },
      custom_container_config: {
        value: fcv3FunctionCustomContainerConfigToHclTerraform(this._customContainerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Fcv3FunctionCustomContainerConfigList",
      },
      custom_dns: {
        value: fcv3FunctionCustomDnsToHclTerraform(this._customDns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Fcv3FunctionCustomDnsList",
      },
      custom_runtime_config: {
        value: fcv3FunctionCustomRuntimeConfigToHclTerraform(this._customRuntimeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Fcv3FunctionCustomRuntimeConfigList",
      },
      gpu_config: {
        value: fcv3FunctionGpuConfigToHclTerraform(this._gpuConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Fcv3FunctionGpuConfigList",
      },
      instance_lifecycle_config: {
        value: fcv3FunctionInstanceLifecycleConfigToHclTerraform(this._instanceLifecycleConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Fcv3FunctionInstanceLifecycleConfigList",
      },
      invocation_restriction: {
        value: fcv3FunctionInvocationRestrictionToHclTerraform(this._invocationRestriction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Fcv3FunctionInvocationRestrictionList",
      },
      log_config: {
        value: fcv3FunctionLogConfigToHclTerraform(this._logConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Fcv3FunctionLogConfigList",
      },
      nas_config: {
        value: fcv3FunctionNasConfigToHclTerraform(this._nasConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Fcv3FunctionNasConfigList",
      },
      oss_mount_config: {
        value: fcv3FunctionOssMountConfigToHclTerraform(this._ossMountConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Fcv3FunctionOssMountConfigList",
      },
      timeouts: {
        value: fcv3FunctionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Fcv3FunctionTimeouts",
      },
      vpc_config: {
        value: fcv3FunctionVpcConfigToHclTerraform(this._vpcConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Fcv3FunctionVpcConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
