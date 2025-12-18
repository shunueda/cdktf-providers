// https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The maximum number of requests processed by a function instance at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#concurrency DataYandexFunction#concurrency}
  */
  readonly concurrency?: number;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#folder_id DataYandexFunction#folder_id}
  */
  readonly folderId?: string;
  /**
  * Yandex Cloud Function id used to define function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#function_id DataYandexFunction#function_id}
  */
  readonly functionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#id DataYandexFunction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#name DataYandexFunction#name}
  */
  readonly name?: string;
  /**
  * connectivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#connectivity DataYandexFunction#connectivity}
  */
  readonly connectivity?: DataYandexFunctionConnectivity;
  /**
  * metadata_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#metadata_options DataYandexFunction#metadata_options}
  */
  readonly metadataOptions?: DataYandexFunctionMetadataOptions;
  /**
  * mounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#mounts DataYandexFunction#mounts}
  */
  readonly mounts?: DataYandexFunctionMounts[] | cdktf.IResolvable;
  /**
  * secrets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#secrets DataYandexFunction#secrets}
  */
  readonly secrets?: DataYandexFunctionSecrets[] | cdktf.IResolvable;
  /**
  * storage_mounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#storage_mounts DataYandexFunction#storage_mounts}
  */
  readonly storageMounts?: DataYandexFunctionStorageMounts[] | cdktf.IResolvable;
}
export interface DataYandexFunctionAsyncInvocationYmqFailureTarget {
}

export function dataYandexFunctionAsyncInvocationYmqFailureTargetToTerraform(struct?: DataYandexFunctionAsyncInvocationYmqFailureTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexFunctionAsyncInvocationYmqFailureTargetToHclTerraform(struct?: DataYandexFunctionAsyncInvocationYmqFailureTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexFunctionAsyncInvocationYmqFailureTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexFunctionAsyncInvocationYmqFailureTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexFunctionAsyncInvocationYmqFailureTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
}

export class DataYandexFunctionAsyncInvocationYmqFailureTargetList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexFunctionAsyncInvocationYmqFailureTargetOutputReference {
    return new DataYandexFunctionAsyncInvocationYmqFailureTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexFunctionAsyncInvocationYmqSuccessTarget {
}

export function dataYandexFunctionAsyncInvocationYmqSuccessTargetToTerraform(struct?: DataYandexFunctionAsyncInvocationYmqSuccessTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexFunctionAsyncInvocationYmqSuccessTargetToHclTerraform(struct?: DataYandexFunctionAsyncInvocationYmqSuccessTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexFunctionAsyncInvocationYmqSuccessTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexFunctionAsyncInvocationYmqSuccessTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexFunctionAsyncInvocationYmqSuccessTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
}

export class DataYandexFunctionAsyncInvocationYmqSuccessTargetList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexFunctionAsyncInvocationYmqSuccessTargetOutputReference {
    return new DataYandexFunctionAsyncInvocationYmqSuccessTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexFunctionAsyncInvocation {
}

export function dataYandexFunctionAsyncInvocationToTerraform(struct?: DataYandexFunctionAsyncInvocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexFunctionAsyncInvocationToHclTerraform(struct?: DataYandexFunctionAsyncInvocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexFunctionAsyncInvocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexFunctionAsyncInvocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexFunctionAsyncInvocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // retries_count - computed: true, optional: false, required: false
  public get retriesCount() {
    return this.getNumberAttribute('retries_count');
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }

  // ymq_failure_target - computed: true, optional: false, required: false
  private _ymqFailureTarget = new DataYandexFunctionAsyncInvocationYmqFailureTargetList(this, "ymq_failure_target", false);
  public get ymqFailureTarget() {
    return this._ymqFailureTarget;
  }

  // ymq_success_target - computed: true, optional: false, required: false
  private _ymqSuccessTarget = new DataYandexFunctionAsyncInvocationYmqSuccessTargetList(this, "ymq_success_target", false);
  public get ymqSuccessTarget() {
    return this._ymqSuccessTarget;
  }
}

export class DataYandexFunctionAsyncInvocationList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexFunctionAsyncInvocationOutputReference {
    return new DataYandexFunctionAsyncInvocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexFunctionLogOptions {
}

export function dataYandexFunctionLogOptionsToTerraform(struct?: DataYandexFunctionLogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexFunctionLogOptionsToHclTerraform(struct?: DataYandexFunctionLogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexFunctionLogOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexFunctionLogOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexFunctionLogOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // folder_id - computed: true, optional: false, required: false
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }

  // log_group_id - computed: true, optional: false, required: false
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }

  // min_level - computed: true, optional: false, required: false
  public get minLevel() {
    return this.getStringAttribute('min_level');
  }
}

export class DataYandexFunctionLogOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexFunctionLogOptionsOutputReference {
    return new DataYandexFunctionLogOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexFunctionConnectivity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#network_id DataYandexFunction#network_id}
  */
  readonly networkId: string;
}

export function dataYandexFunctionConnectivityToTerraform(struct?: DataYandexFunctionConnectivityOutputReference | DataYandexFunctionConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_id: cdktf.stringToTerraform(struct!.networkId),
  }
}


export function dataYandexFunctionConnectivityToHclTerraform(struct?: DataYandexFunctionConnectivityOutputReference | DataYandexFunctionConnectivity): any {
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

export class DataYandexFunctionConnectivityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexFunctionConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexFunctionConnectivity | undefined) {
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
export interface DataYandexFunctionMetadataOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#aws_v1_http_endpoint DataYandexFunction#aws_v1_http_endpoint}
  */
  readonly awsV1HttpEndpoint?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#gce_http_endpoint DataYandexFunction#gce_http_endpoint}
  */
  readonly gceHttpEndpoint?: number;
}

export function dataYandexFunctionMetadataOptionsToTerraform(struct?: DataYandexFunctionMetadataOptionsOutputReference | DataYandexFunctionMetadataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_v1_http_endpoint: cdktf.numberToTerraform(struct!.awsV1HttpEndpoint),
    gce_http_endpoint: cdktf.numberToTerraform(struct!.gceHttpEndpoint),
  }
}


export function dataYandexFunctionMetadataOptionsToHclTerraform(struct?: DataYandexFunctionMetadataOptionsOutputReference | DataYandexFunctionMetadataOptions): any {
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

export class DataYandexFunctionMetadataOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexFunctionMetadataOptions | undefined {
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

  public set internalValue(value: DataYandexFunctionMetadataOptions | undefined) {
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
export interface DataYandexFunctionMountsEphemeralDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#block_size_kb DataYandexFunction#block_size_kb}
  */
  readonly blockSizeKb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#size_gb DataYandexFunction#size_gb}
  */
  readonly sizeGb: number;
}

export function dataYandexFunctionMountsEphemeralDiskToTerraform(struct?: DataYandexFunctionMountsEphemeralDiskOutputReference | DataYandexFunctionMountsEphemeralDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_size_kb: cdktf.numberToTerraform(struct!.blockSizeKb),
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
  }
}


export function dataYandexFunctionMountsEphemeralDiskToHclTerraform(struct?: DataYandexFunctionMountsEphemeralDiskOutputReference | DataYandexFunctionMountsEphemeralDisk): any {
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

export class DataYandexFunctionMountsEphemeralDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexFunctionMountsEphemeralDisk | undefined {
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

  public set internalValue(value: DataYandexFunctionMountsEphemeralDisk | undefined) {
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
export interface DataYandexFunctionMountsObjectStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#bucket DataYandexFunction#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#prefix DataYandexFunction#prefix}
  */
  readonly prefix?: string;
}

export function dataYandexFunctionMountsObjectStorageToTerraform(struct?: DataYandexFunctionMountsObjectStorageOutputReference | DataYandexFunctionMountsObjectStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function dataYandexFunctionMountsObjectStorageToHclTerraform(struct?: DataYandexFunctionMountsObjectStorageOutputReference | DataYandexFunctionMountsObjectStorage): any {
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

export class DataYandexFunctionMountsObjectStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexFunctionMountsObjectStorage | undefined {
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

  public set internalValue(value: DataYandexFunctionMountsObjectStorage | undefined) {
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
export interface DataYandexFunctionMounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#mode DataYandexFunction#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#name DataYandexFunction#name}
  */
  readonly name: string;
  /**
  * ephemeral_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#ephemeral_disk DataYandexFunction#ephemeral_disk}
  */
  readonly ephemeralDisk?: DataYandexFunctionMountsEphemeralDisk;
  /**
  * object_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#object_storage DataYandexFunction#object_storage}
  */
  readonly objectStorage?: DataYandexFunctionMountsObjectStorage;
}

export function dataYandexFunctionMountsToTerraform(struct?: DataYandexFunctionMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    ephemeral_disk: dataYandexFunctionMountsEphemeralDiskToTerraform(struct!.ephemeralDisk),
    object_storage: dataYandexFunctionMountsObjectStorageToTerraform(struct!.objectStorage),
  }
}


export function dataYandexFunctionMountsToHclTerraform(struct?: DataYandexFunctionMounts | cdktf.IResolvable): any {
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
      value: dataYandexFunctionMountsEphemeralDiskToHclTerraform(struct!.ephemeralDisk),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexFunctionMountsEphemeralDiskList",
    },
    object_storage: {
      value: dataYandexFunctionMountsObjectStorageToHclTerraform(struct!.objectStorage),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexFunctionMountsObjectStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexFunctionMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexFunctionMounts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataYandexFunctionMounts | cdktf.IResolvable | undefined) {
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
  private _ephemeralDisk = new DataYandexFunctionMountsEphemeralDiskOutputReference(this, "ephemeral_disk");
  public get ephemeralDisk() {
    return this._ephemeralDisk;
  }
  public putEphemeralDisk(value: DataYandexFunctionMountsEphemeralDisk) {
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
  private _objectStorage = new DataYandexFunctionMountsObjectStorageOutputReference(this, "object_storage");
  public get objectStorage() {
    return this._objectStorage;
  }
  public putObjectStorage(value: DataYandexFunctionMountsObjectStorage) {
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

export class DataYandexFunctionMountsList extends cdktf.ComplexList {
  public internalValue? : DataYandexFunctionMounts[] | cdktf.IResolvable

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
  public get(index: number): DataYandexFunctionMountsOutputReference {
    return new DataYandexFunctionMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexFunctionSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#environment_variable DataYandexFunction#environment_variable}
  */
  readonly environmentVariable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#id DataYandexFunction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#key DataYandexFunction#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#version_id DataYandexFunction#version_id}
  */
  readonly versionId: string;
}

export function dataYandexFunctionSecretsToTerraform(struct?: DataYandexFunctionSecrets | cdktf.IResolvable): any {
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


export function dataYandexFunctionSecretsToHclTerraform(struct?: DataYandexFunctionSecrets | cdktf.IResolvable): any {
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

export class DataYandexFunctionSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexFunctionSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataYandexFunctionSecrets | cdktf.IResolvable | undefined) {
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

export class DataYandexFunctionSecretsList extends cdktf.ComplexList {
  public internalValue? : DataYandexFunctionSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataYandexFunctionSecretsOutputReference {
    return new DataYandexFunctionSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexFunctionStorageMounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#bucket DataYandexFunction#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#mount_point_name DataYandexFunction#mount_point_name}
  */
  readonly mountPointName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#prefix DataYandexFunction#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#read_only DataYandexFunction#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataYandexFunctionStorageMountsToTerraform(struct?: DataYandexFunctionStorageMounts | cdktf.IResolvable): any {
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


export function dataYandexFunctionStorageMountsToHclTerraform(struct?: DataYandexFunctionStorageMounts | cdktf.IResolvable): any {
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

export class DataYandexFunctionStorageMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexFunctionStorageMounts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataYandexFunctionStorageMounts | cdktf.IResolvable | undefined) {
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

export class DataYandexFunctionStorageMountsList extends cdktf.ComplexList {
  public internalValue? : DataYandexFunctionStorageMounts[] | cdktf.IResolvable

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
  public get(index: number): DataYandexFunctionStorageMountsOutputReference {
    return new DataYandexFunctionStorageMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function yandex_function}
*/
export class DataYandexFunction extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexFunction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexFunction to import
  * @param importFromId The id of the existing DataYandexFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexFunction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/function yandex_function} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexFunctionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexFunctionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_function',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.177.0',
        providerVersionConstraint: '0.177.0'
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
    this._folderId = config.folderId;
    this._functionId = config.functionId;
    this._id = config.id;
    this._name = config.name;
    this._connectivity.internalValue = config.connectivity;
    this._metadataOptions.internalValue = config.metadataOptions;
    this._mounts.internalValue = config.mounts;
    this._secrets.internalValue = config.secrets;
    this._storageMounts.internalValue = config.storageMounts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // async_invocation - computed: true, optional: false, required: false
  private _asyncInvocation = new DataYandexFunctionAsyncInvocationList(this, "async_invocation", false);
  public get asyncInvocation() {
    return this._asyncInvocation;
  }

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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // entrypoint - computed: true, optional: false, required: false
  public get entrypoint() {
    return this.getStringAttribute('entrypoint');
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new cdktf.StringMap(this, "environment");
  public get environment() {
    return this._environment;
  }

  // execution_timeout - computed: true, optional: false, required: false
  public get executionTimeout() {
    return this.getStringAttribute('execution_timeout');
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

  // function_id - computed: false, optional: true, required: false
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

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // log_options - computed: true, optional: false, required: false
  private _logOptions = new DataYandexFunctionLogOptionsList(this, "log_options", false);
  public get logOptions() {
    return this._logOptions;
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
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

  // runtime - computed: true, optional: false, required: false
  public get runtime() {
    return this.getStringAttribute('runtime');
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // tmpfs_size - computed: true, optional: false, required: false
  public get tmpfsSize() {
    return this.getNumberAttribute('tmpfs_size');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // connectivity - computed: false, optional: true, required: false
  private _connectivity = new DataYandexFunctionConnectivityOutputReference(this, "connectivity");
  public get connectivity() {
    return this._connectivity;
  }
  public putConnectivity(value: DataYandexFunctionConnectivity) {
    this._connectivity.internalValue = value;
  }
  public resetConnectivity() {
    this._connectivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityInput() {
    return this._connectivity.internalValue;
  }

  // metadata_options - computed: false, optional: true, required: false
  private _metadataOptions = new DataYandexFunctionMetadataOptionsOutputReference(this, "metadata_options");
  public get metadataOptions() {
    return this._metadataOptions;
  }
  public putMetadataOptions(value: DataYandexFunctionMetadataOptions) {
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
  private _mounts = new DataYandexFunctionMountsList(this, "mounts", false);
  public get mounts() {
    return this._mounts;
  }
  public putMounts(value: DataYandexFunctionMounts[] | cdktf.IResolvable) {
    this._mounts.internalValue = value;
  }
  public resetMounts() {
    this._mounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountsInput() {
    return this._mounts.internalValue;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets = new DataYandexFunctionSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: DataYandexFunctionSecrets[] | cdktf.IResolvable) {
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
  private _storageMounts = new DataYandexFunctionStorageMountsList(this, "storage_mounts", false);
  public get storageMounts() {
    return this._storageMounts;
  }
  public putStorageMounts(value: DataYandexFunctionStorageMounts[] | cdktf.IResolvable) {
    this._storageMounts.internalValue = value;
  }
  public resetStorageMounts() {
    this._storageMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageMountsInput() {
    return this._storageMounts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      concurrency: cdktf.numberToTerraform(this._concurrency),
      folder_id: cdktf.stringToTerraform(this._folderId),
      function_id: cdktf.stringToTerraform(this._functionId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      connectivity: dataYandexFunctionConnectivityToTerraform(this._connectivity.internalValue),
      metadata_options: dataYandexFunctionMetadataOptionsToTerraform(this._metadataOptions.internalValue),
      mounts: cdktf.listMapper(dataYandexFunctionMountsToTerraform, true)(this._mounts.internalValue),
      secrets: cdktf.listMapper(dataYandexFunctionSecretsToTerraform, true)(this._secrets.internalValue),
      storage_mounts: cdktf.listMapper(dataYandexFunctionStorageMountsToTerraform, true)(this._storageMounts.internalValue),
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
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_id: {
        value: cdktf.stringToHclTerraform(this._functionId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connectivity: {
        value: dataYandexFunctionConnectivityToHclTerraform(this._connectivity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexFunctionConnectivityList",
      },
      metadata_options: {
        value: dataYandexFunctionMetadataOptionsToHclTerraform(this._metadataOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexFunctionMetadataOptionsList",
      },
      mounts: {
        value: cdktf.listMapperHcl(dataYandexFunctionMountsToHclTerraform, true)(this._mounts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexFunctionMountsList",
      },
      secrets: {
        value: cdktf.listMapperHcl(dataYandexFunctionSecretsToHclTerraform, true)(this._secrets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexFunctionSecretsList",
      },
      storage_mounts: {
        value: cdktf.listMapperHcl(dataYandexFunctionStorageMountsToHclTerraform, true)(this._storageMounts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexFunctionStorageMountsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
