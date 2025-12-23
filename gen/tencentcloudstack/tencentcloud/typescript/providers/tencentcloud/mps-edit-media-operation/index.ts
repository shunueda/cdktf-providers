// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MpsEditMediaOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#id MpsEditMediaOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The path to save the media processing output file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#output_object_path MpsEditMediaOperation#output_object_path}
  */
  readonly outputObjectPath: string;
  /**
  * The source context which is used to pass through the user request information. The task flow status change callback will return the value of this field. It can contain up to 1,000 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#session_context MpsEditMediaOperation#session_context}
  */
  readonly sessionContext?: string;
  /**
  * The ID used for deduplication. If there was a request with the same ID in the last three days, the current request will return an error. The ID can contain up to 50 characters. If this parameter is left empty or an empty string is entered, no deduplication will be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#session_id MpsEditMediaOperation#session_id}
  */
  readonly sessionId?: string;
  /**
  * Task priority. The higher the value, the higher the priority. Value range: [-10,10]. If this parameter is left empty, 0 will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#tasks_priority MpsEditMediaOperation#tasks_priority}
  */
  readonly tasksPriority?: number;
  /**
  * file_infos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#file_infos MpsEditMediaOperation#file_infos}
  */
  readonly fileInfos: MpsEditMediaOperationFileInfos[] | cdktf.IResolvable;
  /**
  * output_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#output_config MpsEditMediaOperation#output_config}
  */
  readonly outputConfig?: MpsEditMediaOperationOutputConfig;
  /**
  * output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#output_storage MpsEditMediaOperation#output_storage}
  */
  readonly outputStorage: MpsEditMediaOperationOutputStorage;
  /**
  * task_notify_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#task_notify_config MpsEditMediaOperation#task_notify_config}
  */
  readonly taskNotifyConfig?: MpsEditMediaOperationTaskNotifyConfig;
}
export interface MpsEditMediaOperationFileInfosInputInfoCosInputInfo {
  /**
  * The COS bucket of the object to process, such as `TopRankVideo-125xxx88`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#bucket MpsEditMediaOperation#bucket}
  */
  readonly bucket: string;
  /**
  * The path of the object to process, such as `/movie/201907/WildAnimal.mov`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#object MpsEditMediaOperation#object}
  */
  readonly object: string;
  /**
  * The region of the COS bucket, such as `ap-chongqing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#region MpsEditMediaOperation#region}
  */
  readonly region: string;
}

export function mpsEditMediaOperationFileInfosInputInfoCosInputInfoToTerraform(struct?: MpsEditMediaOperationFileInfosInputInfoCosInputInfoOutputReference | MpsEditMediaOperationFileInfosInputInfoCosInputInfo): any {
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


export function mpsEditMediaOperationFileInfosInputInfoCosInputInfoToHclTerraform(struct?: MpsEditMediaOperationFileInfosInputInfoCosInputInfoOutputReference | MpsEditMediaOperationFileInfosInputInfoCosInputInfo): any {
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

export class MpsEditMediaOperationFileInfosInputInfoCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsEditMediaOperationFileInfosInputInfoCosInputInfo | undefined {
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

  public set internalValue(value: MpsEditMediaOperationFileInfosInputInfoCosInputInfo | undefined) {
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
export interface MpsEditMediaOperationFileInfosInputInfoS3InputInfo {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#s3_bucket MpsEditMediaOperation#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The path of the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#s3_object MpsEditMediaOperation#s3_object}
  */
  readonly s3Object: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#s3_region MpsEditMediaOperation#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#s3_secret_id MpsEditMediaOperation#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#s3_secret_key MpsEditMediaOperation#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsEditMediaOperationFileInfosInputInfoS3InputInfoToTerraform(struct?: MpsEditMediaOperationFileInfosInputInfoS3InputInfoOutputReference | MpsEditMediaOperationFileInfosInputInfoS3InputInfo): any {
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


export function mpsEditMediaOperationFileInfosInputInfoS3InputInfoToHclTerraform(struct?: MpsEditMediaOperationFileInfosInputInfoS3InputInfoOutputReference | MpsEditMediaOperationFileInfosInputInfoS3InputInfo): any {
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

export class MpsEditMediaOperationFileInfosInputInfoS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsEditMediaOperationFileInfosInputInfoS3InputInfo | undefined {
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

  public set internalValue(value: MpsEditMediaOperationFileInfosInputInfoS3InputInfo | undefined) {
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
export interface MpsEditMediaOperationFileInfosInputInfoUrlInputInfo {
  /**
  * URL of a video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#url MpsEditMediaOperation#url}
  */
  readonly url: string;
}

export function mpsEditMediaOperationFileInfosInputInfoUrlInputInfoToTerraform(struct?: MpsEditMediaOperationFileInfosInputInfoUrlInputInfoOutputReference | MpsEditMediaOperationFileInfosInputInfoUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function mpsEditMediaOperationFileInfosInputInfoUrlInputInfoToHclTerraform(struct?: MpsEditMediaOperationFileInfosInputInfoUrlInputInfoOutputReference | MpsEditMediaOperationFileInfosInputInfoUrlInputInfo): any {
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

export class MpsEditMediaOperationFileInfosInputInfoUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsEditMediaOperationFileInfosInputInfoUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsEditMediaOperationFileInfosInputInfoUrlInputInfo | undefined) {
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
export interface MpsEditMediaOperationFileInfosInputInfo {
  /**
  * The input type. Valid values: `COS`: A COS bucket address.  `URL`: A URL.  `AWS-S3`: An AWS S3 bucket address. Currently, this type is only supported for transcoding tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#type MpsEditMediaOperation#type}
  */
  readonly type: string;
  /**
  * cos_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#cos_input_info MpsEditMediaOperation#cos_input_info}
  */
  readonly cosInputInfo?: MpsEditMediaOperationFileInfosInputInfoCosInputInfo;
  /**
  * s3_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#s3_input_info MpsEditMediaOperation#s3_input_info}
  */
  readonly s3InputInfo?: MpsEditMediaOperationFileInfosInputInfoS3InputInfo;
  /**
  * url_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#url_input_info MpsEditMediaOperation#url_input_info}
  */
  readonly urlInputInfo?: MpsEditMediaOperationFileInfosInputInfoUrlInputInfo;
}

export function mpsEditMediaOperationFileInfosInputInfoToTerraform(struct?: MpsEditMediaOperationFileInfosInputInfoOutputReference | MpsEditMediaOperationFileInfosInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_input_info: mpsEditMediaOperationFileInfosInputInfoCosInputInfoToTerraform(struct!.cosInputInfo),
    s3_input_info: mpsEditMediaOperationFileInfosInputInfoS3InputInfoToTerraform(struct!.s3InputInfo),
    url_input_info: mpsEditMediaOperationFileInfosInputInfoUrlInputInfoToTerraform(struct!.urlInputInfo),
  }
}


export function mpsEditMediaOperationFileInfosInputInfoToHclTerraform(struct?: MpsEditMediaOperationFileInfosInputInfoOutputReference | MpsEditMediaOperationFileInfosInputInfo): any {
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
      value: mpsEditMediaOperationFileInfosInputInfoCosInputInfoToHclTerraform(struct!.cosInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsEditMediaOperationFileInfosInputInfoCosInputInfoList",
    },
    s3_input_info: {
      value: mpsEditMediaOperationFileInfosInputInfoS3InputInfoToHclTerraform(struct!.s3InputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsEditMediaOperationFileInfosInputInfoS3InputInfoList",
    },
    url_input_info: {
      value: mpsEditMediaOperationFileInfosInputInfoUrlInputInfoToHclTerraform(struct!.urlInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsEditMediaOperationFileInfosInputInfoUrlInputInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsEditMediaOperationFileInfosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsEditMediaOperationFileInfosInputInfo | undefined {
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

  public set internalValue(value: MpsEditMediaOperationFileInfosInputInfo | undefined) {
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
  private _cosInputInfo = new MpsEditMediaOperationFileInfosInputInfoCosInputInfoOutputReference(this, "cos_input_info");
  public get cosInputInfo() {
    return this._cosInputInfo;
  }
  public putCosInputInfo(value: MpsEditMediaOperationFileInfosInputInfoCosInputInfo) {
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
  private _s3InputInfo = new MpsEditMediaOperationFileInfosInputInfoS3InputInfoOutputReference(this, "s3_input_info");
  public get s3InputInfo() {
    return this._s3InputInfo;
  }
  public putS3InputInfo(value: MpsEditMediaOperationFileInfosInputInfoS3InputInfo) {
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
  private _urlInputInfo = new MpsEditMediaOperationFileInfosInputInfoUrlInputInfoOutputReference(this, "url_input_info");
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
  public putUrlInputInfo(value: MpsEditMediaOperationFileInfosInputInfoUrlInputInfo) {
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
export interface MpsEditMediaOperationFileInfos {
  /**
  * End time offset of video clipping in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#end_time_offset MpsEditMediaOperation#end_time_offset}
  */
  readonly endTimeOffset?: number;
  /**
  * Start time offset of video clipping in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#start_time_offset MpsEditMediaOperation#start_time_offset}
  */
  readonly startTimeOffset?: number;
  /**
  * input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#input_info MpsEditMediaOperation#input_info}
  */
  readonly inputInfo: MpsEditMediaOperationFileInfosInputInfo;
}

export function mpsEditMediaOperationFileInfosToTerraform(struct?: MpsEditMediaOperationFileInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time_offset: cdktf.numberToTerraform(struct!.endTimeOffset),
    start_time_offset: cdktf.numberToTerraform(struct!.startTimeOffset),
    input_info: mpsEditMediaOperationFileInfosInputInfoToTerraform(struct!.inputInfo),
  }
}


export function mpsEditMediaOperationFileInfosToHclTerraform(struct?: MpsEditMediaOperationFileInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time_offset: {
      value: cdktf.numberToHclTerraform(struct!.endTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time_offset: {
      value: cdktf.numberToHclTerraform(struct!.startTimeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    input_info: {
      value: mpsEditMediaOperationFileInfosInputInfoToHclTerraform(struct!.inputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsEditMediaOperationFileInfosInputInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsEditMediaOperationFileInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MpsEditMediaOperationFileInfos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTimeOffset = this._endTimeOffset;
    }
    if (this._startTimeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeOffset = this._startTimeOffset;
    }
    if (this._inputInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputInfo = this._inputInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsEditMediaOperationFileInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTimeOffset = undefined;
      this._startTimeOffset = undefined;
      this._inputInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTimeOffset = value.endTimeOffset;
      this._startTimeOffset = value.startTimeOffset;
      this._inputInfo.internalValue = value.inputInfo;
    }
  }

  // end_time_offset - computed: false, optional: true, required: false
  private _endTimeOffset?: number; 
  public get endTimeOffset() {
    return this.getNumberAttribute('end_time_offset');
  }
  public set endTimeOffset(value: number) {
    this._endTimeOffset = value;
  }
  public resetEndTimeOffset() {
    this._endTimeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeOffsetInput() {
    return this._endTimeOffset;
  }

  // start_time_offset - computed: false, optional: true, required: false
  private _startTimeOffset?: number; 
  public get startTimeOffset() {
    return this.getNumberAttribute('start_time_offset');
  }
  public set startTimeOffset(value: number) {
    this._startTimeOffset = value;
  }
  public resetStartTimeOffset() {
    this._startTimeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeOffsetInput() {
    return this._startTimeOffset;
  }

  // input_info - computed: false, optional: false, required: true
  private _inputInfo = new MpsEditMediaOperationFileInfosInputInfoOutputReference(this, "input_info");
  public get inputInfo() {
    return this._inputInfo;
  }
  public putInputInfo(value: MpsEditMediaOperationFileInfosInputInfo) {
    this._inputInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInfoInput() {
    return this._inputInfo.internalValue;
  }
}

export class MpsEditMediaOperationFileInfosList extends cdktf.ComplexList {
  public internalValue? : MpsEditMediaOperationFileInfos[] | cdktf.IResolvable

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
  public get(index: number): MpsEditMediaOperationFileInfosOutputReference {
    return new MpsEditMediaOperationFileInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MpsEditMediaOperationOutputConfig {
  /**
  * Format. Valid values: `mp4` (default), `hls`, `mov`, `flv`, `avi`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#container MpsEditMediaOperation#container}
  */
  readonly container?: string;
  /**
  * The editing mode. Valid values are `normal` and `fast`. The default is `normal`, which indicates precise editing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#type MpsEditMediaOperation#type}
  */
  readonly type?: string;
}

export function mpsEditMediaOperationOutputConfigToTerraform(struct?: MpsEditMediaOperationOutputConfigOutputReference | MpsEditMediaOperationOutputConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function mpsEditMediaOperationOutputConfigToHclTerraform(struct?: MpsEditMediaOperationOutputConfigOutputReference | MpsEditMediaOperationOutputConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
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

export class MpsEditMediaOperationOutputConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsEditMediaOperationOutputConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsEditMediaOperationOutputConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._container = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._container = value.container;
      this._type = value.type;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
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
}
export interface MpsEditMediaOperationOutputStorageCosOutputStorage {
  /**
  * The bucket to which the output file of media processing is saved, such as `TopRankVideo-125xxx88`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#bucket MpsEditMediaOperation#bucket}
  */
  readonly bucket?: string;
  /**
  * The region of the output bucket, such as `ap-chongqing`. If this parameter is left empty, the value of the upper layer will be inherited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#region MpsEditMediaOperation#region}
  */
  readonly region?: string;
}

export function mpsEditMediaOperationOutputStorageCosOutputStorageToTerraform(struct?: MpsEditMediaOperationOutputStorageCosOutputStorageOutputReference | MpsEditMediaOperationOutputStorageCosOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function mpsEditMediaOperationOutputStorageCosOutputStorageToHclTerraform(struct?: MpsEditMediaOperationOutputStorageCosOutputStorageOutputReference | MpsEditMediaOperationOutputStorageCosOutputStorage): any {
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

export class MpsEditMediaOperationOutputStorageCosOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsEditMediaOperationOutputStorageCosOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsEditMediaOperationOutputStorageCosOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._region = value.region;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface MpsEditMediaOperationOutputStorageS3OutputStorage {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#s3_bucket MpsEditMediaOperation#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#s3_region MpsEditMediaOperation#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#s3_secret_id MpsEditMediaOperation#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to upload files to the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#s3_secret_key MpsEditMediaOperation#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function mpsEditMediaOperationOutputStorageS3OutputStorageToTerraform(struct?: MpsEditMediaOperationOutputStorageS3OutputStorageOutputReference | MpsEditMediaOperationOutputStorageS3OutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_bucket: cdktf.stringToTerraform(struct!.s3Bucket),
    s3_region: cdktf.stringToTerraform(struct!.s3Region),
    s3_secret_id: cdktf.stringToTerraform(struct!.s3SecretId),
    s3_secret_key: cdktf.stringToTerraform(struct!.s3SecretKey),
  }
}


export function mpsEditMediaOperationOutputStorageS3OutputStorageToHclTerraform(struct?: MpsEditMediaOperationOutputStorageS3OutputStorageOutputReference | MpsEditMediaOperationOutputStorageS3OutputStorage): any {
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

export class MpsEditMediaOperationOutputStorageS3OutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsEditMediaOperationOutputStorageS3OutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Bucket = this._s3Bucket;
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

  public set internalValue(value: MpsEditMediaOperationOutputStorageS3OutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Bucket = undefined;
      this._s3Region = undefined;
      this._s3SecretId = undefined;
      this._s3SecretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Bucket = value.s3Bucket;
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
export interface MpsEditMediaOperationOutputStorage {
  /**
  * The storage type for a media processing output file. Valid values: `COS`: Tencent Cloud COS. `AWS-S3`: AWS S3. This type is only supported for AWS tasks, and the output bucket must be in the same region as the bucket of the source file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#type MpsEditMediaOperation#type}
  */
  readonly type: string;
  /**
  * cos_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#cos_output_storage MpsEditMediaOperation#cos_output_storage}
  */
  readonly cosOutputStorage?: MpsEditMediaOperationOutputStorageCosOutputStorage;
  /**
  * s3_output_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#s3_output_storage MpsEditMediaOperation#s3_output_storage}
  */
  readonly s3OutputStorage?: MpsEditMediaOperationOutputStorageS3OutputStorage;
}

export function mpsEditMediaOperationOutputStorageToTerraform(struct?: MpsEditMediaOperationOutputStorageOutputReference | MpsEditMediaOperationOutputStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_output_storage: mpsEditMediaOperationOutputStorageCosOutputStorageToTerraform(struct!.cosOutputStorage),
    s3_output_storage: mpsEditMediaOperationOutputStorageS3OutputStorageToTerraform(struct!.s3OutputStorage),
  }
}


export function mpsEditMediaOperationOutputStorageToHclTerraform(struct?: MpsEditMediaOperationOutputStorageOutputReference | MpsEditMediaOperationOutputStorage): any {
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
    cos_output_storage: {
      value: mpsEditMediaOperationOutputStorageCosOutputStorageToHclTerraform(struct!.cosOutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsEditMediaOperationOutputStorageCosOutputStorageList",
    },
    s3_output_storage: {
      value: mpsEditMediaOperationOutputStorageS3OutputStorageToHclTerraform(struct!.s3OutputStorage),
      isBlock: true,
      type: "list",
      storageClassType: "MpsEditMediaOperationOutputStorageS3OutputStorageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsEditMediaOperationOutputStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsEditMediaOperationOutputStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cosOutputStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosOutputStorage = this._cosOutputStorage?.internalValue;
    }
    if (this._s3OutputStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputStorage = this._s3OutputStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsEditMediaOperationOutputStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._cosOutputStorage.internalValue = undefined;
      this._s3OutputStorage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._cosOutputStorage.internalValue = value.cosOutputStorage;
      this._s3OutputStorage.internalValue = value.s3OutputStorage;
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

  // cos_output_storage - computed: false, optional: true, required: false
  private _cosOutputStorage = new MpsEditMediaOperationOutputStorageCosOutputStorageOutputReference(this, "cos_output_storage");
  public get cosOutputStorage() {
    return this._cosOutputStorage;
  }
  public putCosOutputStorage(value: MpsEditMediaOperationOutputStorageCosOutputStorage) {
    this._cosOutputStorage.internalValue = value;
  }
  public resetCosOutputStorage() {
    this._cosOutputStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosOutputStorageInput() {
    return this._cosOutputStorage.internalValue;
  }

  // s3_output_storage - computed: false, optional: true, required: false
  private _s3OutputStorage = new MpsEditMediaOperationOutputStorageS3OutputStorageOutputReference(this, "s3_output_storage");
  public get s3OutputStorage() {
    return this._s3OutputStorage;
  }
  public putS3OutputStorage(value: MpsEditMediaOperationOutputStorageS3OutputStorage) {
    this._s3OutputStorage.internalValue = value;
  }
  public resetS3OutputStorage() {
    this._s3OutputStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputStorageInput() {
    return this._s3OutputStorage.internalValue;
  }
}
export interface MpsEditMediaOperationTaskNotifyConfigAwsSqs {
  /**
  * The key ID required to read from/write to the SQS queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#s3_secret_id MpsEditMediaOperation#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to read from/write to the SQS queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#s3_secret_key MpsEditMediaOperation#s3_secret_key}
  */
  readonly s3SecretKey?: string;
  /**
  * The name of the SQS queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#sqs_queue_name MpsEditMediaOperation#sqs_queue_name}
  */
  readonly sqsQueueName: string;
  /**
  * The region of the SQS queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#sqs_region MpsEditMediaOperation#sqs_region}
  */
  readonly sqsRegion: string;
}

export function mpsEditMediaOperationTaskNotifyConfigAwsSqsToTerraform(struct?: MpsEditMediaOperationTaskNotifyConfigAwsSqsOutputReference | MpsEditMediaOperationTaskNotifyConfigAwsSqs): any {
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


export function mpsEditMediaOperationTaskNotifyConfigAwsSqsToHclTerraform(struct?: MpsEditMediaOperationTaskNotifyConfigAwsSqsOutputReference | MpsEditMediaOperationTaskNotifyConfigAwsSqs): any {
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

export class MpsEditMediaOperationTaskNotifyConfigAwsSqsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsEditMediaOperationTaskNotifyConfigAwsSqs | undefined {
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

  public set internalValue(value: MpsEditMediaOperationTaskNotifyConfigAwsSqs | undefined) {
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
export interface MpsEditMediaOperationTaskNotifyConfig {
  /**
  * The CMQ or TDMQ-CMQ model. Valid values: Queue, Topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#cmq_model MpsEditMediaOperation#cmq_model}
  */
  readonly cmqModel?: string;
  /**
  * The CMQ or TDMQ-CMQ region, such as `sh` (Shanghai) or `bj` (Beijing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#cmq_region MpsEditMediaOperation#cmq_region}
  */
  readonly cmqRegion?: string;
  /**
  * Workflow notification method. Valid values: Finish, Change. If this parameter is left empty, `Finish` will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#notify_mode MpsEditMediaOperation#notify_mode}
  */
  readonly notifyMode?: string;
  /**
  * The notification type. Valid values: `CMQ`: This value is no longer used. Please use `TDMQ-CMQ` instead. `TDMQ-CMQ`: Message queue. `URL`: If `NotifyType` is set to `URL`, HTTP callbacks are sent to the URL specified by `NotifyUrl`. HTTP and JSON are used for the callbacks. The packet contains the response parameters of the `ParseNotification` API. `SCF`: This notification type is not recommended. You need to configure it in the SCF console. `AWS-SQS`: AWS queue. This type is only supported for AWS tasks, and the queue must be in the same region as the AWS bucket. If you do not pass this parameter or pass in an empty string, `CMQ` will be used. To use a different notification type, specify this parameter accordingly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#notify_type MpsEditMediaOperation#notify_type}
  */
  readonly notifyType?: string;
  /**
  * HTTP callback URL, required if `NotifyType` is set to `URL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#notify_url MpsEditMediaOperation#notify_url}
  */
  readonly notifyUrl?: string;
  /**
  * The CMQ or TDMQ-CMQ queue to receive notifications. This parameter is valid when `CmqModel` is `Queue`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#queue_name MpsEditMediaOperation#queue_name}
  */
  readonly queueName?: string;
  /**
  * The CMQ or TDMQ-CMQ topic to receive notifications. This parameter is valid when `CmqModel` is `Topic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#topic_name MpsEditMediaOperation#topic_name}
  */
  readonly topicName?: string;
  /**
  * aws_sqs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#aws_sqs MpsEditMediaOperation#aws_sqs}
  */
  readonly awsSqs?: MpsEditMediaOperationTaskNotifyConfigAwsSqs;
}

export function mpsEditMediaOperationTaskNotifyConfigToTerraform(struct?: MpsEditMediaOperationTaskNotifyConfigOutputReference | MpsEditMediaOperationTaskNotifyConfig): any {
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
    aws_sqs: mpsEditMediaOperationTaskNotifyConfigAwsSqsToTerraform(struct!.awsSqs),
  }
}


export function mpsEditMediaOperationTaskNotifyConfigToHclTerraform(struct?: MpsEditMediaOperationTaskNotifyConfigOutputReference | MpsEditMediaOperationTaskNotifyConfig): any {
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
      value: mpsEditMediaOperationTaskNotifyConfigAwsSqsToHclTerraform(struct!.awsSqs),
      isBlock: true,
      type: "list",
      storageClassType: "MpsEditMediaOperationTaskNotifyConfigAwsSqsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsEditMediaOperationTaskNotifyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsEditMediaOperationTaskNotifyConfig | undefined {
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

  public set internalValue(value: MpsEditMediaOperationTaskNotifyConfig | undefined) {
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
  private _awsSqs = new MpsEditMediaOperationTaskNotifyConfigAwsSqsOutputReference(this, "aws_sqs");
  public get awsSqs() {
    return this._awsSqs;
  }
  public putAwsSqs(value: MpsEditMediaOperationTaskNotifyConfigAwsSqs) {
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
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation tencentcloud_mps_edit_media_operation}
*/
export class MpsEditMediaOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mps_edit_media_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MpsEditMediaOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MpsEditMediaOperation to import
  * @param importFromId The id of the existing MpsEditMediaOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MpsEditMediaOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mps_edit_media_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/mps_edit_media_operation tencentcloud_mps_edit_media_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MpsEditMediaOperationConfig
  */
  public constructor(scope: Construct, id: string, config: MpsEditMediaOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mps_edit_media_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
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
    this._outputObjectPath = config.outputObjectPath;
    this._sessionContext = config.sessionContext;
    this._sessionId = config.sessionId;
    this._tasksPriority = config.tasksPriority;
    this._fileInfos.internalValue = config.fileInfos;
    this._outputConfig.internalValue = config.outputConfig;
    this._outputStorage.internalValue = config.outputStorage;
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

  // output_object_path - computed: false, optional: false, required: true
  private _outputObjectPath?: string; 
  public get outputObjectPath() {
    return this.getStringAttribute('output_object_path');
  }
  public set outputObjectPath(value: string) {
    this._outputObjectPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputObjectPathInput() {
    return this._outputObjectPath;
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

  // session_id - computed: false, optional: true, required: false
  private _sessionId?: string; 
  public get sessionId() {
    return this.getStringAttribute('session_id');
  }
  public set sessionId(value: string) {
    this._sessionId = value;
  }
  public resetSessionId() {
    this._sessionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionIdInput() {
    return this._sessionId;
  }

  // tasks_priority - computed: false, optional: true, required: false
  private _tasksPriority?: number; 
  public get tasksPriority() {
    return this.getNumberAttribute('tasks_priority');
  }
  public set tasksPriority(value: number) {
    this._tasksPriority = value;
  }
  public resetTasksPriority() {
    this._tasksPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksPriorityInput() {
    return this._tasksPriority;
  }

  // file_infos - computed: false, optional: false, required: true
  private _fileInfos = new MpsEditMediaOperationFileInfosList(this, "file_infos", false);
  public get fileInfos() {
    return this._fileInfos;
  }
  public putFileInfos(value: MpsEditMediaOperationFileInfos[] | cdktf.IResolvable) {
    this._fileInfos.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInfosInput() {
    return this._fileInfos.internalValue;
  }

  // output_config - computed: false, optional: true, required: false
  private _outputConfig = new MpsEditMediaOperationOutputConfigOutputReference(this, "output_config");
  public get outputConfig() {
    return this._outputConfig;
  }
  public putOutputConfig(value: MpsEditMediaOperationOutputConfig) {
    this._outputConfig.internalValue = value;
  }
  public resetOutputConfig() {
    this._outputConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputConfigInput() {
    return this._outputConfig.internalValue;
  }

  // output_storage - computed: false, optional: false, required: true
  private _outputStorage = new MpsEditMediaOperationOutputStorageOutputReference(this, "output_storage");
  public get outputStorage() {
    return this._outputStorage;
  }
  public putOutputStorage(value: MpsEditMediaOperationOutputStorage) {
    this._outputStorage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputStorageInput() {
    return this._outputStorage.internalValue;
  }

  // task_notify_config - computed: false, optional: true, required: false
  private _taskNotifyConfig = new MpsEditMediaOperationTaskNotifyConfigOutputReference(this, "task_notify_config");
  public get taskNotifyConfig() {
    return this._taskNotifyConfig;
  }
  public putTaskNotifyConfig(value: MpsEditMediaOperationTaskNotifyConfig) {
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
      output_object_path: cdktf.stringToTerraform(this._outputObjectPath),
      session_context: cdktf.stringToTerraform(this._sessionContext),
      session_id: cdktf.stringToTerraform(this._sessionId),
      tasks_priority: cdktf.numberToTerraform(this._tasksPriority),
      file_infos: cdktf.listMapper(mpsEditMediaOperationFileInfosToTerraform, true)(this._fileInfos.internalValue),
      output_config: mpsEditMediaOperationOutputConfigToTerraform(this._outputConfig.internalValue),
      output_storage: mpsEditMediaOperationOutputStorageToTerraform(this._outputStorage.internalValue),
      task_notify_config: mpsEditMediaOperationTaskNotifyConfigToTerraform(this._taskNotifyConfig.internalValue),
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
      output_object_path: {
        value: cdktf.stringToHclTerraform(this._outputObjectPath),
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
      session_id: {
        value: cdktf.stringToHclTerraform(this._sessionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tasks_priority: {
        value: cdktf.numberToHclTerraform(this._tasksPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_infos: {
        value: cdktf.listMapperHcl(mpsEditMediaOperationFileInfosToHclTerraform, true)(this._fileInfos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsEditMediaOperationFileInfosList",
      },
      output_config: {
        value: mpsEditMediaOperationOutputConfigToHclTerraform(this._outputConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsEditMediaOperationOutputConfigList",
      },
      output_storage: {
        value: mpsEditMediaOperationOutputStorageToHclTerraform(this._outputStorage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsEditMediaOperationOutputStorageList",
      },
      task_notify_config: {
        value: mpsEditMediaOperationTaskNotifyConfigToHclTerraform(this._taskNotifyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsEditMediaOperationTaskNotifyConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
