// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mps_media_meta_data
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudMpsMediaMetaDataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mps_media_meta_data#id DataTencentcloudMpsMediaMetaData#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mps_media_meta_data#result_output_file DataTencentcloudMpsMediaMetaData#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mps_media_meta_data#input_info DataTencentcloudMpsMediaMetaData#input_info}
  */
  readonly inputInfo: DataTencentcloudMpsMediaMetaDataInputInfo;
}
export interface DataTencentcloudMpsMediaMetaDataMetaDataAudioStreamSet {
}

export function dataTencentcloudMpsMediaMetaDataMetaDataAudioStreamSetToTerraform(struct?: DataTencentcloudMpsMediaMetaDataMetaDataAudioStreamSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsMediaMetaDataMetaDataAudioStreamSetToHclTerraform(struct?: DataTencentcloudMpsMediaMetaDataMetaDataAudioStreamSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsMediaMetaDataMetaDataAudioStreamSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMpsMediaMetaDataMetaDataAudioStreamSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsMediaMetaDataMetaDataAudioStreamSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bitrate - computed: true, optional: false, required: false
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getNumberAttribute('channel');
  }

  // codec - computed: true, optional: false, required: false
  public get codec() {
    return this.getStringAttribute('codec');
  }

  // sampling_rate - computed: true, optional: false, required: false
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }
}

export class DataTencentcloudMpsMediaMetaDataMetaDataAudioStreamSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMpsMediaMetaDataMetaDataAudioStreamSetOutputReference {
    return new DataTencentcloudMpsMediaMetaDataMetaDataAudioStreamSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsMediaMetaDataMetaDataVideoStreamSet {
}

export function dataTencentcloudMpsMediaMetaDataMetaDataVideoStreamSetToTerraform(struct?: DataTencentcloudMpsMediaMetaDataMetaDataVideoStreamSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsMediaMetaDataMetaDataVideoStreamSetToHclTerraform(struct?: DataTencentcloudMpsMediaMetaDataMetaDataVideoStreamSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsMediaMetaDataMetaDataVideoStreamSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMpsMediaMetaDataMetaDataVideoStreamSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsMediaMetaDataMetaDataVideoStreamSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bitrate - computed: true, optional: false, required: false
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }

  // codec - computed: true, optional: false, required: false
  public get codec() {
    return this.getStringAttribute('codec');
  }

  // color_primaries - computed: true, optional: false, required: false
  public get colorPrimaries() {
    return this.getStringAttribute('color_primaries');
  }

  // color_space - computed: true, optional: false, required: false
  public get colorSpace() {
    return this.getStringAttribute('color_space');
  }

  // color_transfer - computed: true, optional: false, required: false
  public get colorTransfer() {
    return this.getStringAttribute('color_transfer');
  }

  // fps - computed: true, optional: false, required: false
  public get fps() {
    return this.getNumberAttribute('fps');
  }

  // hdr_type - computed: true, optional: false, required: false
  public get hdrType() {
    return this.getStringAttribute('hdr_type');
  }

  // height - computed: true, optional: false, required: false
  public get height() {
    return this.getNumberAttribute('height');
  }

  // width - computed: true, optional: false, required: false
  public get width() {
    return this.getNumberAttribute('width');
  }
}

export class DataTencentcloudMpsMediaMetaDataMetaDataVideoStreamSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMpsMediaMetaDataMetaDataVideoStreamSetOutputReference {
    return new DataTencentcloudMpsMediaMetaDataMetaDataVideoStreamSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsMediaMetaDataMetaData {
}

export function dataTencentcloudMpsMediaMetaDataMetaDataToTerraform(struct?: DataTencentcloudMpsMediaMetaDataMetaData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudMpsMediaMetaDataMetaDataToHclTerraform(struct?: DataTencentcloudMpsMediaMetaDataMetaData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudMpsMediaMetaDataMetaDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudMpsMediaMetaDataMetaData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsMediaMetaDataMetaData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio_duration - computed: true, optional: false, required: false
  public get audioDuration() {
    return this.getNumberAttribute('audio_duration');
  }

  // audio_stream_set - computed: true, optional: false, required: false
  private _audioStreamSet = new DataTencentcloudMpsMediaMetaDataMetaDataAudioStreamSetList(this, "audio_stream_set", false);
  public get audioStreamSet() {
    return this._audioStreamSet;
  }

  // bitrate - computed: true, optional: false, required: false
  public get bitrate() {
    return this.getNumberAttribute('bitrate');
  }

  // container - computed: true, optional: false, required: false
  public get container() {
    return this.getStringAttribute('container');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // height - computed: true, optional: false, required: false
  public get height() {
    return this.getNumberAttribute('height');
  }

  // rotate - computed: true, optional: false, required: false
  public get rotate() {
    return this.getNumberAttribute('rotate');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // video_duration - computed: true, optional: false, required: false
  public get videoDuration() {
    return this.getNumberAttribute('video_duration');
  }

  // video_stream_set - computed: true, optional: false, required: false
  private _videoStreamSet = new DataTencentcloudMpsMediaMetaDataMetaDataVideoStreamSetList(this, "video_stream_set", false);
  public get videoStreamSet() {
    return this._videoStreamSet;
  }

  // width - computed: true, optional: false, required: false
  public get width() {
    return this.getNumberAttribute('width');
  }
}

export class DataTencentcloudMpsMediaMetaDataMetaDataList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudMpsMediaMetaDataMetaDataOutputReference {
    return new DataTencentcloudMpsMediaMetaDataMetaDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudMpsMediaMetaDataInputInfoCosInputInfo {
  /**
  * The COS bucket of the object to process, such as `TopRankVideo-125xxx88`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mps_media_meta_data#bucket DataTencentcloudMpsMediaMetaData#bucket}
  */
  readonly bucket: string;
  /**
  * The path of the object to process, such as `/movie/201907/WildAnimal.mov`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mps_media_meta_data#object DataTencentcloudMpsMediaMetaData#object}
  */
  readonly object: string;
  /**
  * The region of the COS bucket, such as `ap-chongqing`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mps_media_meta_data#region DataTencentcloudMpsMediaMetaData#region}
  */
  readonly region: string;
}

export function dataTencentcloudMpsMediaMetaDataInputInfoCosInputInfoToTerraform(struct?: DataTencentcloudMpsMediaMetaDataInputInfoCosInputInfoOutputReference | DataTencentcloudMpsMediaMetaDataInputInfoCosInputInfo): any {
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


export function dataTencentcloudMpsMediaMetaDataInputInfoCosInputInfoToHclTerraform(struct?: DataTencentcloudMpsMediaMetaDataInputInfoCosInputInfoOutputReference | DataTencentcloudMpsMediaMetaDataInputInfoCosInputInfo): any {
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

export class DataTencentcloudMpsMediaMetaDataInputInfoCosInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTencentcloudMpsMediaMetaDataInputInfoCosInputInfo | undefined {
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

  public set internalValue(value: DataTencentcloudMpsMediaMetaDataInputInfoCosInputInfo | undefined) {
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
export interface DataTencentcloudMpsMediaMetaDataInputInfoS3InputInfo {
  /**
  * The AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mps_media_meta_data#s3_bucket DataTencentcloudMpsMediaMetaData#s3_bucket}
  */
  readonly s3Bucket: string;
  /**
  * The path of the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mps_media_meta_data#s3_object DataTencentcloudMpsMediaMetaData#s3_object}
  */
  readonly s3Object: string;
  /**
  * The region of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mps_media_meta_data#s3_region DataTencentcloudMpsMediaMetaData#s3_region}
  */
  readonly s3Region: string;
  /**
  * The key ID required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mps_media_meta_data#s3_secret_id DataTencentcloudMpsMediaMetaData#s3_secret_id}
  */
  readonly s3SecretId?: string;
  /**
  * The key required to access the AWS S3 object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mps_media_meta_data#s3_secret_key DataTencentcloudMpsMediaMetaData#s3_secret_key}
  */
  readonly s3SecretKey?: string;
}

export function dataTencentcloudMpsMediaMetaDataInputInfoS3InputInfoToTerraform(struct?: DataTencentcloudMpsMediaMetaDataInputInfoS3InputInfoOutputReference | DataTencentcloudMpsMediaMetaDataInputInfoS3InputInfo): any {
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


export function dataTencentcloudMpsMediaMetaDataInputInfoS3InputInfoToHclTerraform(struct?: DataTencentcloudMpsMediaMetaDataInputInfoS3InputInfoOutputReference | DataTencentcloudMpsMediaMetaDataInputInfoS3InputInfo): any {
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

export class DataTencentcloudMpsMediaMetaDataInputInfoS3InputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTencentcloudMpsMediaMetaDataInputInfoS3InputInfo | undefined {
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

  public set internalValue(value: DataTencentcloudMpsMediaMetaDataInputInfoS3InputInfo | undefined) {
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
export interface DataTencentcloudMpsMediaMetaDataInputInfoUrlInputInfo {
  /**
  * URL of a video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mps_media_meta_data#url DataTencentcloudMpsMediaMetaData#url}
  */
  readonly url: string;
}

export function dataTencentcloudMpsMediaMetaDataInputInfoUrlInputInfoToTerraform(struct?: DataTencentcloudMpsMediaMetaDataInputInfoUrlInputInfoOutputReference | DataTencentcloudMpsMediaMetaDataInputInfoUrlInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataTencentcloudMpsMediaMetaDataInputInfoUrlInputInfoToHclTerraform(struct?: DataTencentcloudMpsMediaMetaDataInputInfoUrlInputInfoOutputReference | DataTencentcloudMpsMediaMetaDataInputInfoUrlInputInfo): any {
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

export class DataTencentcloudMpsMediaMetaDataInputInfoUrlInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTencentcloudMpsMediaMetaDataInputInfoUrlInputInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudMpsMediaMetaDataInputInfoUrlInputInfo | undefined) {
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
export interface DataTencentcloudMpsMediaMetaDataInputInfo {
  /**
  * The input type. Valid values:`COS`: A COS bucket address.`URL`: A URL.`AWS-S3`: An AWS S3 bucket address. Currently, this type is only supported for transcoding tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mps_media_meta_data#type DataTencentcloudMpsMediaMetaData#type}
  */
  readonly type: string;
  /**
  * cos_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mps_media_meta_data#cos_input_info DataTencentcloudMpsMediaMetaData#cos_input_info}
  */
  readonly cosInputInfo?: DataTencentcloudMpsMediaMetaDataInputInfoCosInputInfo;
  /**
  * s3_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mps_media_meta_data#s3_input_info DataTencentcloudMpsMediaMetaData#s3_input_info}
  */
  readonly s3InputInfo?: DataTencentcloudMpsMediaMetaDataInputInfoS3InputInfo;
  /**
  * url_input_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mps_media_meta_data#url_input_info DataTencentcloudMpsMediaMetaData#url_input_info}
  */
  readonly urlInputInfo?: DataTencentcloudMpsMediaMetaDataInputInfoUrlInputInfo;
}

export function dataTencentcloudMpsMediaMetaDataInputInfoToTerraform(struct?: DataTencentcloudMpsMediaMetaDataInputInfoOutputReference | DataTencentcloudMpsMediaMetaDataInputInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cos_input_info: dataTencentcloudMpsMediaMetaDataInputInfoCosInputInfoToTerraform(struct!.cosInputInfo),
    s3_input_info: dataTencentcloudMpsMediaMetaDataInputInfoS3InputInfoToTerraform(struct!.s3InputInfo),
    url_input_info: dataTencentcloudMpsMediaMetaDataInputInfoUrlInputInfoToTerraform(struct!.urlInputInfo),
  }
}


export function dataTencentcloudMpsMediaMetaDataInputInfoToHclTerraform(struct?: DataTencentcloudMpsMediaMetaDataInputInfoOutputReference | DataTencentcloudMpsMediaMetaDataInputInfo): any {
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
      value: dataTencentcloudMpsMediaMetaDataInputInfoCosInputInfoToHclTerraform(struct!.cosInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataTencentcloudMpsMediaMetaDataInputInfoCosInputInfoList",
    },
    s3_input_info: {
      value: dataTencentcloudMpsMediaMetaDataInputInfoS3InputInfoToHclTerraform(struct!.s3InputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataTencentcloudMpsMediaMetaDataInputInfoS3InputInfoList",
    },
    url_input_info: {
      value: dataTencentcloudMpsMediaMetaDataInputInfoUrlInputInfoToHclTerraform(struct!.urlInputInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DataTencentcloudMpsMediaMetaDataInputInfoUrlInputInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudMpsMediaMetaDataInputInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataTencentcloudMpsMediaMetaDataInputInfo | undefined {
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

  public set internalValue(value: DataTencentcloudMpsMediaMetaDataInputInfo | undefined) {
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
  private _cosInputInfo = new DataTencentcloudMpsMediaMetaDataInputInfoCosInputInfoOutputReference(this, "cos_input_info");
  public get cosInputInfo() {
    return this._cosInputInfo;
  }
  public putCosInputInfo(value: DataTencentcloudMpsMediaMetaDataInputInfoCosInputInfo) {
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
  private _s3InputInfo = new DataTencentcloudMpsMediaMetaDataInputInfoS3InputInfoOutputReference(this, "s3_input_info");
  public get s3InputInfo() {
    return this._s3InputInfo;
  }
  public putS3InputInfo(value: DataTencentcloudMpsMediaMetaDataInputInfoS3InputInfo) {
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
  private _urlInputInfo = new DataTencentcloudMpsMediaMetaDataInputInfoUrlInputInfoOutputReference(this, "url_input_info");
  public get urlInputInfo() {
    return this._urlInputInfo;
  }
  public putUrlInputInfo(value: DataTencentcloudMpsMediaMetaDataInputInfoUrlInputInfo) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mps_media_meta_data tencentcloud_mps_media_meta_data}
*/
export class DataTencentcloudMpsMediaMetaData extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mps_media_meta_data";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudMpsMediaMetaData resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudMpsMediaMetaData to import
  * @param importFromId The id of the existing DataTencentcloudMpsMediaMetaData that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mps_media_meta_data#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudMpsMediaMetaData to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mps_media_meta_data", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/mps_media_meta_data tencentcloud_mps_media_meta_data} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudMpsMediaMetaDataConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudMpsMediaMetaDataConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mps_media_meta_data',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
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
    this._resultOutputFile = config.resultOutputFile;
    this._inputInfo.internalValue = config.inputInfo;
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

  // meta_data - computed: true, optional: false, required: false
  private _metaData = new DataTencentcloudMpsMediaMetaDataMetaDataList(this, "meta_data", false);
  public get metaData() {
    return this._metaData;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // input_info - computed: false, optional: false, required: true
  private _inputInfo = new DataTencentcloudMpsMediaMetaDataInputInfoOutputReference(this, "input_info");
  public get inputInfo() {
    return this._inputInfo;
  }
  public putInputInfo(value: DataTencentcloudMpsMediaMetaDataInputInfo) {
    this._inputInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInfoInput() {
    return this._inputInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      input_info: dataTencentcloudMpsMediaMetaDataInputInfoToTerraform(this._inputInfo.internalValue),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_info: {
        value: dataTencentcloudMpsMediaMetaDataInputInfoToHclTerraform(this._inputInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudMpsMediaMetaDataInputInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
