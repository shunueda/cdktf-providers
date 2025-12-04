// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MpsWithdrawsWatermarkOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#id MpsWithdrawsWatermarkOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source context which is used to pass through the user request information. The task flow status change callback will return the value of this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#session_context MpsWithdrawsWatermarkOperation#session_context}
  */
  readonly sessionContext?: string;
  /**
  * input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#input_info MpsWithdrawsWatermarkOperation#input_info}
  */
  readonly inputInfo: MpsWithdrawsWatermarkOperationInputInfo;
  /**
  * task_notify_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#task_notify_config MpsWithdrawsWatermarkOperation#task_notify_config}
  */
  readonly taskNotifyConfig?: MpsWithdrawsWatermarkOperationTaskNotifyConfig;
}
export interface MpsWithdrawsWatermarkOperationInputInfoCosInputInfo {
  /**
  * The COS bucket of the object to process, such as `TopRankVideo-125xxx88`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#bucket MpsWithdrawsWatermarkOperation#bucket}
  */
  readonly bucket: string;
  /**
  * The path of the object to process, such as `/movie/201907/WildAnimal.mov`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#object MpsWithdrawsWatermarkOperation#object}
  */
  readonly object: string;
  /**
  * The region of the COS bucket, such as `ap-chongqing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#region MpsWithdrawsWatermarkOperation#region}
  */
  readonly region: string;
}

export function mpsWithdrawsWatermarkOperationInputInfoCosInputInfoToTerraform(struct?: MpsWithdrawsWatermarkOperationInputInfoCosInputInfoOutputReference | MpsWithdrawsWatermarkOperationInputInfoCosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    object: cdktf.stringToTerraform(struct!.object),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsWithdrawsWatermarkOperationInputInfoCosInputInfoToHclTerraform(struct?: MpsWithdrawsWatermarkOperationInputInfoCosInputInfoOutputReference | MpsWithdrawsWatermarkOperationInputInfoCosInputInfo): any {
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
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsWithdrawsWatermarkOperationInputInfoCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsWithdrawsWatermarkOperationInputInfoCosInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsWithdrawsWatermarkOperationInputInfoCosInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._object = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._object = value.object;
      this._region = value.region;
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

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface MpsWithdrawsWatermarkOperationInputInfoS3InputInfo {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#s3_bucket MpsWithdrawsWatermarkOperation#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The path of the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#s3_object MpsWithdrawsWatermarkOperation#s3_object}
  */
  readonly s3Object: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#s3_region MpsWithdrawsWatermarkOperation#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#s3_secret_id MpsWithdrawsWatermarkOperation#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#s3_secret_key MpsWithdrawsWatermarkOperation#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsWithdrawsWatermarkOperationInputInfoS3InputInfoToTerraform(struct?: MpsWithdrawsWatermarkOperationInputInfoS3InputInfoOutputReference | MpsWithdrawsWatermarkOperationInputInfoS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_object: cdktf.stringToTerraform(struct!.s3Object),
    s3_region: cdktf.stringToTerraform(struct!.s3Region),
    s3_secret_id: cdktf.stringToTerraform(struct!.s3SecretId),
    s3_secret_key: cdktf.stringToTerraform(struct!.s3SecretKey),
  }
}


export function mpsWithdrawsWatermarkOperationInputInfoS3InputInfoToHclTerraform(struct?: MpsWithdrawsWatermarkOperationInputInfoS3InputInfoOutputReference | MpsWithdrawsWatermarkOperationInputInfoS3InputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_bucket: {
      value: cdktf.stringToHclTerraform(struct!.s3Bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_object: {
      value: cdktf.stringToHclTerraform(struct!.s3Object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_region: {
      value: cdktf.stringToHclTerraform(struct!.s3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsWithdrawsWatermarkOperationInputInfoS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsWithdrawsWatermarkOperationInputInfoS3InputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
    }
    if (this._s3Object !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Object = this._s3Object;
    }
    if (this._s3Region !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Region = this._s3Region;
    }
    if (this._s3SecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretId = this._s3SecretId;
    }
    if (this._s3SecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretKey = this._s3SecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsWithdrawsWatermarkOperationInputInfoS3InputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Bucket = undefined;
      this._s3Object = undefined;
      this._s3Region = undefined;
      this._s3SecretId = undefined;
      this._s3SecretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Bucket = value.s3Bucket;
      this._s3Object = value.s3Object;
      this._s3Region = value.s3Region;
      this._s3SecretId = value.s3SecretId;
      this._s3SecretKey = value.s3SecretKey;
    }
  }

  // s3_bucket - computed: false, optional: false, required: true
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_object - computed: false, optional: false, required: true
  private _s3Object?: string; 
  public get s3Object() {
    return this.getStringAttribute('s3_object');
  }
  public set s3Object(value: string) {
    this._s3Object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectInput() {
    return this._s3Object;
  }

  // s3_region - computed: false, optional: false, required: true
  private _s3Region?: string; 
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }

  // s3_secret_id - computed: false, optional: true, required: false
  private _s3SecretId?: string; 
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }
  public set s3SecretId(value: string) {
    this._s3SecretId = value;
  }
  public resetS3SecretId() {
    this._s3SecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretIdInput() {
    return this._s3SecretId;
  }

  // s3_secret_key - computed: false, optional: true, required: false
  private _s3SecretKey?: string; 
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
  public set s3SecretKey(value: string) {
    this._s3SecretKey = value;
  }
  public resetS3SecretKey() {
    this._s3SecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretKeyInput() {
    return this._s3SecretKey;
  }
}
export interface MpsWithdrawsWatermarkOperationInputInfoUrlInputInfo {
  /**
  * URL of a video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#url MpsWithdrawsWatermarkOperation#url}
  */
  readonly url: string;
}

export function mpsWithdrawsWatermarkOperationInputInfoUrlInputInfoToTerraform(struct?: MpsWithdrawsWatermarkOperationInputInfoUrlInputInfoOutputReference | MpsWithdrawsWatermarkOperationInputInfoUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mpsWithdrawsWatermarkOperationInputInfoUrlInputInfoToHclTerraform(struct?: MpsWithdrawsWatermarkOperationInputInfoUrlInputInfoOutputReference | MpsWithdrawsWatermarkOperationInputInfoUrlInputInfo): any {
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

export class MpsWithdrawsWatermarkOperationInputInfoUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsWithdrawsWatermarkOperationInputInfoUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsWithdrawsWatermarkOperationInputInfoUrlInputInfo | undefined) {
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
export interface MpsWithdrawsWatermarkOperationInputInfo {
  /**
  * The input type. Valid values: `COS`: A COS bucket address.  `URL`: A URL.  `AWS-S3`: An AWS S3 bucket address. Currently, this type is only supported for transcoding tasks..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#type MpsWithdrawsWatermarkOperation#type}
  */
  readonly type: string;
  /**
  * cos_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#cos_input_info MpsWithdrawsWatermarkOperation#cos_input_info}
  */
  readonly cosInputInfo?: MpsWithdrawsWatermarkOperationInputInfoCosInputInfo;
  /**
  * s3_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#s3_input_info MpsWithdrawsWatermarkOperation#s3_input_info}
  */
  readonly s3InputInfo?: MpsWithdrawsWatermarkOperationInputInfoS3InputInfo;
  /**
  * url_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#url_input_info MpsWithdrawsWatermarkOperation#url_input_info}
  */
  readonly urlInputInfo?: MpsWithdrawsWatermarkOperationInputInfoUrlInputInfo;
}

export function mpsWithdrawsWatermarkOperationInputInfoToTerraform(struct?: MpsWithdrawsWatermarkOperationInputInfoOutputReference | MpsWithdrawsWatermarkOperationInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_input_info: mpsWithdrawsWatermarkOperationInputInfoCosInputInfoToTerraform(struct!.cosInputInfo),
    s3_input_info: mpsWithdrawsWatermarkOperationInputInfoS3InputInfoToTerraform(struct!.s3InputInfo),
    url_input_info: mpsWithdrawsWatermarkOperationInputInfoUrlInputInfoToTerraform(struct!.urlInputInfo),
  }
}


export function mpsWithdrawsWatermarkOperationInputInfoToHclTerraform(struct?: MpsWithdrawsWatermarkOperationInputInfoOutputReference | MpsWithdrawsWatermarkOperationInputInfo): any {
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
    cos_input_info: {
      value: mpsWithdrawsWatermarkOperationInputInfoCosInputInfoToHclTerraform(struct!.cosInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsWithdrawsWatermarkOperationInputInfoCosInputInfoList",
    },
    s3_input_info: {
      value: mpsWithdrawsWatermarkOperationInputInfoS3InputInfoToHclTerraform(struct!.s3InputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsWithdrawsWatermarkOperationInputInfoS3InputInfoList",
    },
    url_input_info: {
      value: mpsWithdrawsWatermarkOperationInputInfoUrlInputInfoToHclTerraform(struct!.urlInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsWithdrawsWatermarkOperationInputInfoUrlInputInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsWithdrawsWatermarkOperationInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsWithdrawsWatermarkOperationInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cosInputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosInputInfo = this._cosInputInfo?.internalValue;
    }
    if (this._s3InputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3InputInfo = this._s3InputInfo?.internalValue;
    }
    if (this._urlInputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlInputInfo = this._urlInputInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsWithdrawsWatermarkOperationInputInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._cosInputInfo.internalValue = undefined;
      this._s3InputInfo.internalValue = undefined;
      this._urlInputInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._cosInputInfo.internalValue = value.cosInputInfo;
      this._s3InputInfo.internalValue = value.s3InputInfo;
      this._urlInputInfo.internalValue = value.urlInputInfo;
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

  // cos_input_info - computed: false, optional: true, required: false
  private _cosInputInfo = new MpsWithdrawsWatermarkOperationInputInfoCosInputInfoOutputReference(this, "cos_input_info");
  public get cosInputInfo() {
    return this._cosInputInfo;
  }
  public putCosInputInfo(value: MpsWithdrawsWatermarkOperationInputInfoCosInputInfo) {
    this._cosInputInfo.internalValue = value;
  }
  public resetCosInputInfo() {
    this._cosInputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosInputInfoInput() {
    return this._cosInputInfo.internalValue;
  }

  // s3_input_info - computed: false, optional: true, required: false
  private _s3InputInfo = new MpsWithdrawsWatermarkOperationInputInfoS3InputInfoOutputReference(this, "s3_input_info");
  public get s3InputInfo() {
    return this._s3InputInfo;
  }
  public putS3InputInfo(value: MpsWithdrawsWatermarkOperationInputInfoS3InputInfo) {
    this._s3InputInfo.internalValue = value;
  }
  public resetS3InputInfo() {
    this._s3InputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3InputInfoInput() {
    return this._s3InputInfo.internalValue;
  }

  // url_input_info - computed: false, optional: true, required: false
  private _urlInputInfo = new MpsWithdrawsWatermarkOperationInputInfoUrlInputInfoOutputReference(this, "url_input_info");
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
  public putUrlInputInfo(value: MpsWithdrawsWatermarkOperationInputInfoUrlInputInfo) {
    this._urlInputInfo.internalValue = value;
  }
  public resetUrlInputInfo() {
    this._urlInputInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInputInfoInput() {
    return this._urlInputInfo.internalValue;
  }
}
export interface MpsWithdrawsWatermarkOperationTaskNotifyConfigAwsSqs {
  /**
  * The key ID required to read from/write to the SQS queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#s3_secret_id MpsWithdrawsWatermarkOperation#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to read from/write to the SQS queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#s3_secret_key MpsWithdrawsWatermarkOperation#s3_secret_key}
  */
  readonly s3SecretKey?: string;
  /**
  * The name of the SQS queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#sqs_queue_name MpsWithdrawsWatermarkOperation#sqs_queue_name}
  */
  readonly sqsQueueName: string;
  /**
  * The region of the SQS queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#sqs_region MpsWithdrawsWatermarkOperation#sqs_region}
  */
  readonly sqsRegion: string;
}

export function mpsWithdrawsWatermarkOperationTaskNotifyConfigAwsSqsToTerraform(struct?: MpsWithdrawsWatermarkOperationTaskNotifyConfigAwsSqsOutputReference | MpsWithdrawsWatermarkOperationTaskNotifyConfigAwsSqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_secret_id: cdktf.stringToTerraform(struct!.s3SecretId),
    s3_secret_key: cdktf.stringToTerraform(struct!.s3SecretKey),
    sqs_queue_name: cdktf.stringToTerraform(struct!.sqsQueueName),
    sqs_region: cdktf.stringToTerraform(struct!.sqsRegion),
  }
}


export function mpsWithdrawsWatermarkOperationTaskNotifyConfigAwsSqsToHclTerraform(struct?: MpsWithdrawsWatermarkOperationTaskNotifyConfigAwsSqsOutputReference | MpsWithdrawsWatermarkOperationTaskNotifyConfigAwsSqs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sqs_queue_name: {
      value: cdktf.stringToHclTerraform(struct!.sqsQueueName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sqs_region: {
      value: cdktf.stringToHclTerraform(struct!.sqsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsWithdrawsWatermarkOperationTaskNotifyConfigAwsSqsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsWithdrawsWatermarkOperationTaskNotifyConfigAwsSqs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3SecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretId = this._s3SecretId;
    }
    if (this._s3SecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretKey = this._s3SecretKey;
    }
    if (this._sqsQueueName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqsQueueName = this._sqsQueueName;
    }
    if (this._sqsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqsRegion = this._sqsRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsWithdrawsWatermarkOperationTaskNotifyConfigAwsSqs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3SecretId = undefined;
      this._s3SecretKey = undefined;
      this._sqsQueueName = undefined;
      this._sqsRegion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3SecretId = value.s3SecretId;
      this._s3SecretKey = value.s3SecretKey;
      this._sqsQueueName = value.sqsQueueName;
      this._sqsRegion = value.sqsRegion;
    }
  }

  // s3_secret_id - computed: false, optional: true, required: false
  private _s3SecretId?: string; 
  public get s3SecretId() {
    return this.getStringAttribute('s3_secret_id');
  }
  public set s3SecretId(value: string) {
    this._s3SecretId = value;
  }
  public resetS3SecretId() {
    this._s3SecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretIdInput() {
    return this._s3SecretId;
  }

  // s3_secret_key - computed: false, optional: true, required: false
  private _s3SecretKey?: string; 
  public get s3SecretKey() {
    return this.getStringAttribute('s3_secret_key');
  }
  public set s3SecretKey(value: string) {
    this._s3SecretKey = value;
  }
  public resetS3SecretKey() {
    this._s3SecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretKeyInput() {
    return this._s3SecretKey;
  }

  // sqs_queue_name - computed: false, optional: false, required: true
  private _sqsQueueName?: string; 
  public get sqsQueueName() {
    return this.getStringAttribute('sqs_queue_name');
  }
  public set sqsQueueName(value: string) {
    this._sqsQueueName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsQueueNameInput() {
    return this._sqsQueueName;
  }

  // sqs_region - computed: false, optional: false, required: true
  private _sqsRegion?: string; 
  public get sqsRegion() {
    return this.getStringAttribute('sqs_region');
  }
  public set sqsRegion(value: string) {
    this._sqsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsRegionInput() {
    return this._sqsRegion;
  }
}
export interface MpsWithdrawsWatermarkOperationTaskNotifyConfig {
  /**
  * The CMQ or TDMQ-CMQ model. Valid values: Queue, Topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#cmq_model MpsWithdrawsWatermarkOperation#cmq_model}
  */
  readonly cmqModel?: string;
  /**
  * The CMQ or TDMQ-CMQ region, such as `sh` (Shanghai) or `bj` (Beijing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#cmq_region MpsWithdrawsWatermarkOperation#cmq_region}
  */
  readonly cmqRegion?: string;
  /**
  * Workflow notification method. Valid values: Finish, Change. If this parameter is left empty, `Finish` will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#notify_mode MpsWithdrawsWatermarkOperation#notify_mode}
  */
  readonly notifyMode?: string;
  /**
  * The notification type. Valid values:  `CMQ`: This value is no longer used. Please use `TDMQ-CMQ` instead.  `TDMQ-CMQ`: Message queue  `URL`: If `NotifyType` is set to `URL`, HTTP callbacks are sent to the URL specified by `NotifyUrl`. HTTP and JSON are used for the callbacks. The packet contains the response parameters of the `ParseNotification` API.  `SCF`: This notification type is not recommended. You need to configure it in the SCF console.  `AWS-SQS`: AWS queue. This type is only supported for AWS tasks, and the queue must be in the same region as the AWS bucket. Note: If you do not pass this parameter or pass in an empty string, `CMQ` will be used. To use a different notification type, specify this parameter accordingly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#notify_type MpsWithdrawsWatermarkOperation#notify_type}
  */
  readonly notifyType?: string;
  /**
  * HTTP callback URL, required if `NotifyType` is set to `URL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#notify_url MpsWithdrawsWatermarkOperation#notify_url}
  */
  readonly notifyUrl?: string;
  /**
  * The CMQ or TDMQ-CMQ queue to receive notifications. This parameter is valid when `CmqModel` is `Queue`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#queue_name MpsWithdrawsWatermarkOperation#queue_name}
  */
  readonly queueName?: string;
  /**
  * The CMQ or TDMQ-CMQ topic to receive notifications. This parameter is valid when `CmqModel` is `Topic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#topic_name MpsWithdrawsWatermarkOperation#topic_name}
  */
  readonly topicName?: string;
  /**
  * aws_sqs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#aws_sqs MpsWithdrawsWatermarkOperation#aws_sqs}
  */
  readonly awsSqs?: MpsWithdrawsWatermarkOperationTaskNotifyConfigAwsSqs;
}

export function mpsWithdrawsWatermarkOperationTaskNotifyConfigToTerraform(struct?: MpsWithdrawsWatermarkOperationTaskNotifyConfigOutputReference | MpsWithdrawsWatermarkOperationTaskNotifyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmq_model: cdktf.stringToTerraform(struct!.cmqModel),
    cmq_region: cdktf.stringToTerraform(struct!.cmqRegion),
    notify_mode: cdktf.stringToTerraform(struct!.notifyMode),
    notify_type: cdktf.stringToTerraform(struct!.notifyType),
    notify_url: cdktf.stringToTerraform(struct!.notifyUrl),
    queue_name: cdktf.stringToTerraform(struct!.queueName),
    topic_name: cdktf.stringToTerraform(struct!.topicName),
    aws_sqs: mpsWithdrawsWatermarkOperationTaskNotifyConfigAwsSqsToTerraform(struct!.awsSqs),
  }
}


export function mpsWithdrawsWatermarkOperationTaskNotifyConfigToHclTerraform(struct?: MpsWithdrawsWatermarkOperationTaskNotifyConfigOutputReference | MpsWithdrawsWatermarkOperationTaskNotifyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmq_model: {
      value: cdktf.stringToHclTerraform(struct!.cmqModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cmq_region: {
      value: cdktf.stringToHclTerraform(struct!.cmqRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_mode: {
      value: cdktf.stringToHclTerraform(struct!.notifyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_type: {
      value: cdktf.stringToHclTerraform(struct!.notifyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_url: {
      value: cdktf.stringToHclTerraform(struct!.notifyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_name: {
      value: cdktf.stringToHclTerraform(struct!.queueName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_name: {
      value: cdktf.stringToHclTerraform(struct!.topicName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_sqs: {
      value: mpsWithdrawsWatermarkOperationTaskNotifyConfigAwsSqsToHclTerraform(struct!.awsSqs),
      isBlock: true,
      type: "list",
      storageClassType: "MpsWithdrawsWatermarkOperationTaskNotifyConfigAwsSqsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsWithdrawsWatermarkOperationTaskNotifyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsWithdrawsWatermarkOperationTaskNotifyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmqModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmqModel = this._cmqModel;
    }
    if (this._cmqRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmqRegion = this._cmqRegion;
    }
    if (this._notifyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyMode = this._notifyMode;
    }
    if (this._notifyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyType = this._notifyType;
    }
    if (this._notifyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyUrl = this._notifyUrl;
    }
    if (this._queueName !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueName = this._queueName;
    }
    if (this._topicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicName = this._topicName;
    }
    if (this._awsSqs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSqs = this._awsSqs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsWithdrawsWatermarkOperationTaskNotifyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cmqModel = undefined;
      this._cmqRegion = undefined;
      this._notifyMode = undefined;
      this._notifyType = undefined;
      this._notifyUrl = undefined;
      this._queueName = undefined;
      this._topicName = undefined;
      this._awsSqs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cmqModel = value.cmqModel;
      this._cmqRegion = value.cmqRegion;
      this._notifyMode = value.notifyMode;
      this._notifyType = value.notifyType;
      this._notifyUrl = value.notifyUrl;
      this._queueName = value.queueName;
      this._topicName = value.topicName;
      this._awsSqs.internalValue = value.awsSqs;
    }
  }

  // cmq_model - computed: false, optional: true, required: false
  private _cmqModel?: string; 
  public get cmqModel() {
    return this.getStringAttribute('cmq_model');
  }
  public set cmqModel(value: string) {
    this._cmqModel = value;
  }
  public resetCmqModel() {
    this._cmqModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmqModelInput() {
    return this._cmqModel;
  }

  // cmq_region - computed: false, optional: true, required: false
  private _cmqRegion?: string; 
  public get cmqRegion() {
    return this.getStringAttribute('cmq_region');
  }
  public set cmqRegion(value: string) {
    this._cmqRegion = value;
  }
  public resetCmqRegion() {
    this._cmqRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmqRegionInput() {
    return this._cmqRegion;
  }

  // notify_mode - computed: false, optional: true, required: false
  private _notifyMode?: string; 
  public get notifyMode() {
    return this.getStringAttribute('notify_mode');
  }
  public set notifyMode(value: string) {
    this._notifyMode = value;
  }
  public resetNotifyMode() {
    this._notifyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyModeInput() {
    return this._notifyMode;
  }

  // notify_type - computed: false, optional: true, required: false
  private _notifyType?: string; 
  public get notifyType() {
    return this.getStringAttribute('notify_type');
  }
  public set notifyType(value: string) {
    this._notifyType = value;
  }
  public resetNotifyType() {
    this._notifyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyTypeInput() {
    return this._notifyType;
  }

  // notify_url - computed: false, optional: true, required: false
  private _notifyUrl?: string; 
  public get notifyUrl() {
    return this.getStringAttribute('notify_url');
  }
  public set notifyUrl(value: string) {
    this._notifyUrl = value;
  }
  public resetNotifyUrl() {
    this._notifyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyUrlInput() {
    return this._notifyUrl;
  }

  // queue_name - computed: false, optional: true, required: false
  private _queueName?: string; 
  public get queueName() {
    return this.getStringAttribute('queue_name');
  }
  public set queueName(value: string) {
    this._queueName = value;
  }
  public resetQueueName() {
    this._queueName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueNameInput() {
    return this._queueName;
  }

  // topic_name - computed: false, optional: true, required: false
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  public resetTopicName() {
    this._topicName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }

  // aws_sqs - computed: false, optional: true, required: false
  private _awsSqs = new MpsWithdrawsWatermarkOperationTaskNotifyConfigAwsSqsOutputReference(this, "aws_sqs");
  public get awsSqs() {
    return this._awsSqs;
  }
  public putAwsSqs(value: MpsWithdrawsWatermarkOperationTaskNotifyConfigAwsSqs) {
    this._awsSqs.internalValue = value;
  }
  public resetAwsSqs() {
    this._awsSqs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSqsInput() {
    return this._awsSqs.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation tencentcloud_mps_withdraws_watermark_operation}
*/
export class MpsWithdrawsWatermarkOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mps_withdraws_watermark_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MpsWithdrawsWatermarkOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MpsWithdrawsWatermarkOperation to import
  * @param importFromId The id of the existing MpsWithdrawsWatermarkOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MpsWithdrawsWatermarkOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mps_withdraws_watermark_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mps_withdraws_watermark_operation tencentcloud_mps_withdraws_watermark_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MpsWithdrawsWatermarkOperationConfig
  */
  public constructor(scope: Construct, id: string, config: MpsWithdrawsWatermarkOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mps_withdraws_watermark_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._sessionContext = config.sessionContext;
    this._inputInfo.internalValue = config.inputInfo;
    this._taskNotifyConfig.internalValue = config.taskNotifyConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // session_context - computed: false, optional: true, required: false
  private _sessionContext?: string; 
  public get sessionContext() {
    return this.getStringAttribute('session_context');
  }
  public set sessionContext(value: string) {
    this._sessionContext = value;
  }
  public resetSessionContext() {
    this._sessionContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionContextInput() {
    return this._sessionContext;
  }

  // input_info - computed: false, optional: false, required: true
  private _inputInfo = new MpsWithdrawsWatermarkOperationInputInfoOutputReference(this, "input_info");
  public get inputInfo() {
    return this._inputInfo;
  }
  public putInputInfo(value: MpsWithdrawsWatermarkOperationInputInfo) {
    this._inputInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInfoInput() {
    return this._inputInfo.internalValue;
  }

  // task_notify_config - computed: false, optional: true, required: false
  private _taskNotifyConfig = new MpsWithdrawsWatermarkOperationTaskNotifyConfigOutputReference(this, "task_notify_config");
  public get taskNotifyConfig() {
    return this._taskNotifyConfig;
  }
  public putTaskNotifyConfig(value: MpsWithdrawsWatermarkOperationTaskNotifyConfig) {
    this._taskNotifyConfig.internalValue = value;
  }
  public resetTaskNotifyConfig() {
    this._taskNotifyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNotifyConfigInput() {
    return this._taskNotifyConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      session_context: cdktf.stringToTerraform(this._sessionContext),
      input_info: mpsWithdrawsWatermarkOperationInputInfoToTerraform(this._inputInfo.internalValue),
      task_notify_config: mpsWithdrawsWatermarkOperationTaskNotifyConfigToTerraform(this._taskNotifyConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_context: {
        value: cdktf.stringToHclTerraform(this._sessionContext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_info: {
        value: mpsWithdrawsWatermarkOperationInputInfoToHclTerraform(this._inputInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsWithdrawsWatermarkOperationInputInfoList",
      },
      task_notify_config: {
        value: mpsWithdrawsWatermarkOperationTaskNotifyConfigToHclTerraform(this._taskNotifyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsWithdrawsWatermarkOperationTaskNotifyConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
