// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AligreenOssStockTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#audio_antispam_freeze_config AligreenOssStockTask#audio_antispam_freeze_config}
  */
  readonly audioAntispamFreezeConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#audio_auto_freeze_opened AligreenOssStockTask#audio_auto_freeze_opened}
  */
  readonly audioAutoFreezeOpened?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#audio_max_size AligreenOssStockTask#audio_max_size}
  */
  readonly audioMaxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#audio_opened AligreenOssStockTask#audio_opened}
  */
  readonly audioOpened?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#audio_scan_limit AligreenOssStockTask#audio_scan_limit}
  */
  readonly audioScanLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#audio_scenes AligreenOssStockTask#audio_scenes}
  */
  readonly audioScenes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#auto_freeze_type AligreenOssStockTask#auto_freeze_type}
  */
  readonly autoFreezeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#biz_type AligreenOssStockTask#biz_type}
  */
  readonly bizType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#buckets AligreenOssStockTask#buckets}
  */
  readonly buckets?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#callback_id AligreenOssStockTask#callback_id}
  */
  readonly callbackId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#end_date AligreenOssStockTask#end_date}
  */
  readonly endDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#id AligreenOssStockTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#image_ad_freeze_config AligreenOssStockTask#image_ad_freeze_config}
  */
  readonly imageAdFreezeConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#image_auto_freeze_opened AligreenOssStockTask#image_auto_freeze_opened}
  */
  readonly imageAutoFreezeOpened?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#image_live_freeze_config AligreenOssStockTask#image_live_freeze_config}
  */
  readonly imageLiveFreezeConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#image_opened AligreenOssStockTask#image_opened}
  */
  readonly imageOpened?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#image_porn_freeze_config AligreenOssStockTask#image_porn_freeze_config}
  */
  readonly imagePornFreezeConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#image_scan_limit AligreenOssStockTask#image_scan_limit}
  */
  readonly imageScanLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#image_scenes AligreenOssStockTask#image_scenes}
  */
  readonly imageScenes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#image_terrorism_freeze_config AligreenOssStockTask#image_terrorism_freeze_config}
  */
  readonly imageTerrorismFreezeConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#scan_image_no_file_type AligreenOssStockTask#scan_image_no_file_type}
  */
  readonly scanImageNoFileType?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#start_date AligreenOssStockTask#start_date}
  */
  readonly startDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#video_ad_freeze_config AligreenOssStockTask#video_ad_freeze_config}
  */
  readonly videoAdFreezeConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#video_auto_freeze_opened AligreenOssStockTask#video_auto_freeze_opened}
  */
  readonly videoAutoFreezeOpened?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#video_frame_interval AligreenOssStockTask#video_frame_interval}
  */
  readonly videoFrameInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#video_live_freeze_config AligreenOssStockTask#video_live_freeze_config}
  */
  readonly videoLiveFreezeConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#video_max_frames AligreenOssStockTask#video_max_frames}
  */
  readonly videoMaxFrames?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#video_max_size AligreenOssStockTask#video_max_size}
  */
  readonly videoMaxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#video_opened AligreenOssStockTask#video_opened}
  */
  readonly videoOpened?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#video_porn_freeze_config AligreenOssStockTask#video_porn_freeze_config}
  */
  readonly videoPornFreezeConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#video_scan_limit AligreenOssStockTask#video_scan_limit}
  */
  readonly videoScanLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#video_scenes AligreenOssStockTask#video_scenes}
  */
  readonly videoScenes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#video_terrorism_freeze_config AligreenOssStockTask#video_terrorism_freeze_config}
  */
  readonly videoTerrorismFreezeConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#video_voice_antispam_freeze_config AligreenOssStockTask#video_voice_antispam_freeze_config}
  */
  readonly videoVoiceAntispamFreezeConfig?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#timeouts AligreenOssStockTask#timeouts}
  */
  readonly timeouts?: AligreenOssStockTaskTimeouts;
}
export interface AligreenOssStockTaskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#create AligreenOssStockTask#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#delete AligreenOssStockTask#delete}
  */
  readonly delete?: string;
}

export function aligreenOssStockTaskTimeoutsToTerraform(struct?: AligreenOssStockTaskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function aligreenOssStockTaskTimeoutsToHclTerraform(struct?: AligreenOssStockTaskTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AligreenOssStockTaskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AligreenOssStockTaskTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AligreenOssStockTaskTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task alicloud_aligreen_oss_stock_task}
*/
export class AligreenOssStockTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_aligreen_oss_stock_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AligreenOssStockTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AligreenOssStockTask to import
  * @param importFromId The id of the existing AligreenOssStockTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AligreenOssStockTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_aligreen_oss_stock_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/aligreen_oss_stock_task alicloud_aligreen_oss_stock_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AligreenOssStockTaskConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AligreenOssStockTaskConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_aligreen_oss_stock_task',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._audioAntispamFreezeConfig = config.audioAntispamFreezeConfig;
    this._audioAutoFreezeOpened = config.audioAutoFreezeOpened;
    this._audioMaxSize = config.audioMaxSize;
    this._audioOpened = config.audioOpened;
    this._audioScanLimit = config.audioScanLimit;
    this._audioScenes = config.audioScenes;
    this._autoFreezeType = config.autoFreezeType;
    this._bizType = config.bizType;
    this._buckets = config.buckets;
    this._callbackId = config.callbackId;
    this._endDate = config.endDate;
    this._id = config.id;
    this._imageAdFreezeConfig = config.imageAdFreezeConfig;
    this._imageAutoFreezeOpened = config.imageAutoFreezeOpened;
    this._imageLiveFreezeConfig = config.imageLiveFreezeConfig;
    this._imageOpened = config.imageOpened;
    this._imagePornFreezeConfig = config.imagePornFreezeConfig;
    this._imageScanLimit = config.imageScanLimit;
    this._imageScenes = config.imageScenes;
    this._imageTerrorismFreezeConfig = config.imageTerrorismFreezeConfig;
    this._scanImageNoFileType = config.scanImageNoFileType;
    this._startDate = config.startDate;
    this._videoAdFreezeConfig = config.videoAdFreezeConfig;
    this._videoAutoFreezeOpened = config.videoAutoFreezeOpened;
    this._videoFrameInterval = config.videoFrameInterval;
    this._videoLiveFreezeConfig = config.videoLiveFreezeConfig;
    this._videoMaxFrames = config.videoMaxFrames;
    this._videoMaxSize = config.videoMaxSize;
    this._videoOpened = config.videoOpened;
    this._videoPornFreezeConfig = config.videoPornFreezeConfig;
    this._videoScanLimit = config.videoScanLimit;
    this._videoScenes = config.videoScenes;
    this._videoTerrorismFreezeConfig = config.videoTerrorismFreezeConfig;
    this._videoVoiceAntispamFreezeConfig = config.videoVoiceAntispamFreezeConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audio_antispam_freeze_config - computed: false, optional: true, required: false
  private _audioAntispamFreezeConfig?: string; 
  public get audioAntispamFreezeConfig() {
    return this.getStringAttribute('audio_antispam_freeze_config');
  }
  public set audioAntispamFreezeConfig(value: string) {
    this._audioAntispamFreezeConfig = value;
  }
  public resetAudioAntispamFreezeConfig() {
    this._audioAntispamFreezeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioAntispamFreezeConfigInput() {
    return this._audioAntispamFreezeConfig;
  }

  // audio_auto_freeze_opened - computed: false, optional: true, required: false
  private _audioAutoFreezeOpened?: boolean | cdktf.IResolvable; 
  public get audioAutoFreezeOpened() {
    return this.getBooleanAttribute('audio_auto_freeze_opened');
  }
  public set audioAutoFreezeOpened(value: boolean | cdktf.IResolvable) {
    this._audioAutoFreezeOpened = value;
  }
  public resetAudioAutoFreezeOpened() {
    this._audioAutoFreezeOpened = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioAutoFreezeOpenedInput() {
    return this._audioAutoFreezeOpened;
  }

  // audio_max_size - computed: false, optional: true, required: false
  private _audioMaxSize?: number; 
  public get audioMaxSize() {
    return this.getNumberAttribute('audio_max_size');
  }
  public set audioMaxSize(value: number) {
    this._audioMaxSize = value;
  }
  public resetAudioMaxSize() {
    this._audioMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioMaxSizeInput() {
    return this._audioMaxSize;
  }

  // audio_opened - computed: false, optional: true, required: false
  private _audioOpened?: boolean | cdktf.IResolvable; 
  public get audioOpened() {
    return this.getBooleanAttribute('audio_opened');
  }
  public set audioOpened(value: boolean | cdktf.IResolvable) {
    this._audioOpened = value;
  }
  public resetAudioOpened() {
    this._audioOpened = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioOpenedInput() {
    return this._audioOpened;
  }

  // audio_scan_limit - computed: false, optional: true, required: false
  private _audioScanLimit?: number; 
  public get audioScanLimit() {
    return this.getNumberAttribute('audio_scan_limit');
  }
  public set audioScanLimit(value: number) {
    this._audioScanLimit = value;
  }
  public resetAudioScanLimit() {
    this._audioScanLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioScanLimitInput() {
    return this._audioScanLimit;
  }

  // audio_scenes - computed: false, optional: true, required: false
  private _audioScenes?: string; 
  public get audioScenes() {
    return this.getStringAttribute('audio_scenes');
  }
  public set audioScenes(value: string) {
    this._audioScenes = value;
  }
  public resetAudioScenes() {
    this._audioScenes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioScenesInput() {
    return this._audioScenes;
  }

  // auto_freeze_type - computed: false, optional: true, required: false
  private _autoFreezeType?: string; 
  public get autoFreezeType() {
    return this.getStringAttribute('auto_freeze_type');
  }
  public set autoFreezeType(value: string) {
    this._autoFreezeType = value;
  }
  public resetAutoFreezeType() {
    this._autoFreezeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFreezeTypeInput() {
    return this._autoFreezeType;
  }

  // biz_type - computed: false, optional: true, required: false
  private _bizType?: string; 
  public get bizType() {
    return this.getStringAttribute('biz_type');
  }
  public set bizType(value: string) {
    this._bizType = value;
  }
  public resetBizType() {
    this._bizType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bizTypeInput() {
    return this._bizType;
  }

  // buckets - computed: false, optional: true, required: false
  private _buckets?: string; 
  public get buckets() {
    return this.getStringAttribute('buckets');
  }
  public set buckets(value: string) {
    this._buckets = value;
  }
  public resetBuckets() {
    this._buckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketsInput() {
    return this._buckets;
  }

  // callback_id - computed: false, optional: true, required: false
  private _callbackId?: number; 
  public get callbackId() {
    return this.getNumberAttribute('callback_id');
  }
  public set callbackId(value: number) {
    this._callbackId = value;
  }
  public resetCallbackId() {
    this._callbackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackIdInput() {
    return this._callbackId;
  }

  // end_date - computed: false, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
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

  // image_ad_freeze_config - computed: false, optional: true, required: false
  private _imageAdFreezeConfig?: string; 
  public get imageAdFreezeConfig() {
    return this.getStringAttribute('image_ad_freeze_config');
  }
  public set imageAdFreezeConfig(value: string) {
    this._imageAdFreezeConfig = value;
  }
  public resetImageAdFreezeConfig() {
    this._imageAdFreezeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageAdFreezeConfigInput() {
    return this._imageAdFreezeConfig;
  }

  // image_auto_freeze_opened - computed: false, optional: true, required: false
  private _imageAutoFreezeOpened?: boolean | cdktf.IResolvable; 
  public get imageAutoFreezeOpened() {
    return this.getBooleanAttribute('image_auto_freeze_opened');
  }
  public set imageAutoFreezeOpened(value: boolean | cdktf.IResolvable) {
    this._imageAutoFreezeOpened = value;
  }
  public resetImageAutoFreezeOpened() {
    this._imageAutoFreezeOpened = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageAutoFreezeOpenedInput() {
    return this._imageAutoFreezeOpened;
  }

  // image_live_freeze_config - computed: false, optional: true, required: false
  private _imageLiveFreezeConfig?: string; 
  public get imageLiveFreezeConfig() {
    return this.getStringAttribute('image_live_freeze_config');
  }
  public set imageLiveFreezeConfig(value: string) {
    this._imageLiveFreezeConfig = value;
  }
  public resetImageLiveFreezeConfig() {
    this._imageLiveFreezeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageLiveFreezeConfigInput() {
    return this._imageLiveFreezeConfig;
  }

  // image_opened - computed: false, optional: true, required: false
  private _imageOpened?: boolean | cdktf.IResolvable; 
  public get imageOpened() {
    return this.getBooleanAttribute('image_opened');
  }
  public set imageOpened(value: boolean | cdktf.IResolvable) {
    this._imageOpened = value;
  }
  public resetImageOpened() {
    this._imageOpened = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageOpenedInput() {
    return this._imageOpened;
  }

  // image_porn_freeze_config - computed: false, optional: true, required: false
  private _imagePornFreezeConfig?: string; 
  public get imagePornFreezeConfig() {
    return this.getStringAttribute('image_porn_freeze_config');
  }
  public set imagePornFreezeConfig(value: string) {
    this._imagePornFreezeConfig = value;
  }
  public resetImagePornFreezeConfig() {
    this._imagePornFreezeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePornFreezeConfigInput() {
    return this._imagePornFreezeConfig;
  }

  // image_scan_limit - computed: false, optional: true, required: false
  private _imageScanLimit?: number; 
  public get imageScanLimit() {
    return this.getNumberAttribute('image_scan_limit');
  }
  public set imageScanLimit(value: number) {
    this._imageScanLimit = value;
  }
  public resetImageScanLimit() {
    this._imageScanLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageScanLimitInput() {
    return this._imageScanLimit;
  }

  // image_scenes - computed: false, optional: true, required: false
  private _imageScenes?: string[]; 
  public get imageScenes() {
    return this.getListAttribute('image_scenes');
  }
  public set imageScenes(value: string[]) {
    this._imageScenes = value;
  }
  public resetImageScenes() {
    this._imageScenes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageScenesInput() {
    return this._imageScenes;
  }

  // image_terrorism_freeze_config - computed: false, optional: true, required: false
  private _imageTerrorismFreezeConfig?: string; 
  public get imageTerrorismFreezeConfig() {
    return this.getStringAttribute('image_terrorism_freeze_config');
  }
  public set imageTerrorismFreezeConfig(value: string) {
    this._imageTerrorismFreezeConfig = value;
  }
  public resetImageTerrorismFreezeConfig() {
    this._imageTerrorismFreezeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTerrorismFreezeConfigInput() {
    return this._imageTerrorismFreezeConfig;
  }

  // scan_image_no_file_type - computed: false, optional: true, required: false
  private _scanImageNoFileType?: boolean | cdktf.IResolvable; 
  public get scanImageNoFileType() {
    return this.getBooleanAttribute('scan_image_no_file_type');
  }
  public set scanImageNoFileType(value: boolean | cdktf.IResolvable) {
    this._scanImageNoFileType = value;
  }
  public resetScanImageNoFileType() {
    this._scanImageNoFileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanImageNoFileTypeInput() {
    return this._scanImageNoFileType;
  }

  // start_date - computed: false, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // video_ad_freeze_config - computed: false, optional: true, required: false
  private _videoAdFreezeConfig?: string; 
  public get videoAdFreezeConfig() {
    return this.getStringAttribute('video_ad_freeze_config');
  }
  public set videoAdFreezeConfig(value: string) {
    this._videoAdFreezeConfig = value;
  }
  public resetVideoAdFreezeConfig() {
    this._videoAdFreezeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoAdFreezeConfigInput() {
    return this._videoAdFreezeConfig;
  }

  // video_auto_freeze_opened - computed: false, optional: true, required: false
  private _videoAutoFreezeOpened?: boolean | cdktf.IResolvable; 
  public get videoAutoFreezeOpened() {
    return this.getBooleanAttribute('video_auto_freeze_opened');
  }
  public set videoAutoFreezeOpened(value: boolean | cdktf.IResolvable) {
    this._videoAutoFreezeOpened = value;
  }
  public resetVideoAutoFreezeOpened() {
    this._videoAutoFreezeOpened = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoAutoFreezeOpenedInput() {
    return this._videoAutoFreezeOpened;
  }

  // video_frame_interval - computed: false, optional: true, required: false
  private _videoFrameInterval?: number; 
  public get videoFrameInterval() {
    return this.getNumberAttribute('video_frame_interval');
  }
  public set videoFrameInterval(value: number) {
    this._videoFrameInterval = value;
  }
  public resetVideoFrameInterval() {
    this._videoFrameInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoFrameIntervalInput() {
    return this._videoFrameInterval;
  }

  // video_live_freeze_config - computed: false, optional: true, required: false
  private _videoLiveFreezeConfig?: string; 
  public get videoLiveFreezeConfig() {
    return this.getStringAttribute('video_live_freeze_config');
  }
  public set videoLiveFreezeConfig(value: string) {
    this._videoLiveFreezeConfig = value;
  }
  public resetVideoLiveFreezeConfig() {
    this._videoLiveFreezeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoLiveFreezeConfigInput() {
    return this._videoLiveFreezeConfig;
  }

  // video_max_frames - computed: false, optional: true, required: false
  private _videoMaxFrames?: number; 
  public get videoMaxFrames() {
    return this.getNumberAttribute('video_max_frames');
  }
  public set videoMaxFrames(value: number) {
    this._videoMaxFrames = value;
  }
  public resetVideoMaxFrames() {
    this._videoMaxFrames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoMaxFramesInput() {
    return this._videoMaxFrames;
  }

  // video_max_size - computed: false, optional: true, required: false
  private _videoMaxSize?: number; 
  public get videoMaxSize() {
    return this.getNumberAttribute('video_max_size');
  }
  public set videoMaxSize(value: number) {
    this._videoMaxSize = value;
  }
  public resetVideoMaxSize() {
    this._videoMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoMaxSizeInput() {
    return this._videoMaxSize;
  }

  // video_opened - computed: false, optional: true, required: false
  private _videoOpened?: boolean | cdktf.IResolvable; 
  public get videoOpened() {
    return this.getBooleanAttribute('video_opened');
  }
  public set videoOpened(value: boolean | cdktf.IResolvable) {
    this._videoOpened = value;
  }
  public resetVideoOpened() {
    this._videoOpened = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoOpenedInput() {
    return this._videoOpened;
  }

  // video_porn_freeze_config - computed: false, optional: true, required: false
  private _videoPornFreezeConfig?: string; 
  public get videoPornFreezeConfig() {
    return this.getStringAttribute('video_porn_freeze_config');
  }
  public set videoPornFreezeConfig(value: string) {
    this._videoPornFreezeConfig = value;
  }
  public resetVideoPornFreezeConfig() {
    this._videoPornFreezeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoPornFreezeConfigInput() {
    return this._videoPornFreezeConfig;
  }

  // video_scan_limit - computed: false, optional: true, required: false
  private _videoScanLimit?: number; 
  public get videoScanLimit() {
    return this.getNumberAttribute('video_scan_limit');
  }
  public set videoScanLimit(value: number) {
    this._videoScanLimit = value;
  }
  public resetVideoScanLimit() {
    this._videoScanLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoScanLimitInput() {
    return this._videoScanLimit;
  }

  // video_scenes - computed: false, optional: true, required: false
  private _videoScenes?: string; 
  public get videoScenes() {
    return this.getStringAttribute('video_scenes');
  }
  public set videoScenes(value: string) {
    this._videoScenes = value;
  }
  public resetVideoScenes() {
    this._videoScenes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoScenesInput() {
    return this._videoScenes;
  }

  // video_terrorism_freeze_config - computed: false, optional: true, required: false
  private _videoTerrorismFreezeConfig?: string; 
  public get videoTerrorismFreezeConfig() {
    return this.getStringAttribute('video_terrorism_freeze_config');
  }
  public set videoTerrorismFreezeConfig(value: string) {
    this._videoTerrorismFreezeConfig = value;
  }
  public resetVideoTerrorismFreezeConfig() {
    this._videoTerrorismFreezeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoTerrorismFreezeConfigInput() {
    return this._videoTerrorismFreezeConfig;
  }

  // video_voice_antispam_freeze_config - computed: false, optional: true, required: false
  private _videoVoiceAntispamFreezeConfig?: string; 
  public get videoVoiceAntispamFreezeConfig() {
    return this.getStringAttribute('video_voice_antispam_freeze_config');
  }
  public set videoVoiceAntispamFreezeConfig(value: string) {
    this._videoVoiceAntispamFreezeConfig = value;
  }
  public resetVideoVoiceAntispamFreezeConfig() {
    this._videoVoiceAntispamFreezeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoVoiceAntispamFreezeConfigInput() {
    return this._videoVoiceAntispamFreezeConfig;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AligreenOssStockTaskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AligreenOssStockTaskTimeouts) {
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
      audio_antispam_freeze_config: cdktf.stringToTerraform(this._audioAntispamFreezeConfig),
      audio_auto_freeze_opened: cdktf.booleanToTerraform(this._audioAutoFreezeOpened),
      audio_max_size: cdktf.numberToTerraform(this._audioMaxSize),
      audio_opened: cdktf.booleanToTerraform(this._audioOpened),
      audio_scan_limit: cdktf.numberToTerraform(this._audioScanLimit),
      audio_scenes: cdktf.stringToTerraform(this._audioScenes),
      auto_freeze_type: cdktf.stringToTerraform(this._autoFreezeType),
      biz_type: cdktf.stringToTerraform(this._bizType),
      buckets: cdktf.stringToTerraform(this._buckets),
      callback_id: cdktf.numberToTerraform(this._callbackId),
      end_date: cdktf.stringToTerraform(this._endDate),
      id: cdktf.stringToTerraform(this._id),
      image_ad_freeze_config: cdktf.stringToTerraform(this._imageAdFreezeConfig),
      image_auto_freeze_opened: cdktf.booleanToTerraform(this._imageAutoFreezeOpened),
      image_live_freeze_config: cdktf.stringToTerraform(this._imageLiveFreezeConfig),
      image_opened: cdktf.booleanToTerraform(this._imageOpened),
      image_porn_freeze_config: cdktf.stringToTerraform(this._imagePornFreezeConfig),
      image_scan_limit: cdktf.numberToTerraform(this._imageScanLimit),
      image_scenes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._imageScenes),
      image_terrorism_freeze_config: cdktf.stringToTerraform(this._imageTerrorismFreezeConfig),
      scan_image_no_file_type: cdktf.booleanToTerraform(this._scanImageNoFileType),
      start_date: cdktf.stringToTerraform(this._startDate),
      video_ad_freeze_config: cdktf.stringToTerraform(this._videoAdFreezeConfig),
      video_auto_freeze_opened: cdktf.booleanToTerraform(this._videoAutoFreezeOpened),
      video_frame_interval: cdktf.numberToTerraform(this._videoFrameInterval),
      video_live_freeze_config: cdktf.stringToTerraform(this._videoLiveFreezeConfig),
      video_max_frames: cdktf.numberToTerraform(this._videoMaxFrames),
      video_max_size: cdktf.numberToTerraform(this._videoMaxSize),
      video_opened: cdktf.booleanToTerraform(this._videoOpened),
      video_porn_freeze_config: cdktf.stringToTerraform(this._videoPornFreezeConfig),
      video_scan_limit: cdktf.numberToTerraform(this._videoScanLimit),
      video_scenes: cdktf.stringToTerraform(this._videoScenes),
      video_terrorism_freeze_config: cdktf.stringToTerraform(this._videoTerrorismFreezeConfig),
      video_voice_antispam_freeze_config: cdktf.stringToTerraform(this._videoVoiceAntispamFreezeConfig),
      timeouts: aligreenOssStockTaskTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audio_antispam_freeze_config: {
        value: cdktf.stringToHclTerraform(this._audioAntispamFreezeConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audio_auto_freeze_opened: {
        value: cdktf.booleanToHclTerraform(this._audioAutoFreezeOpened),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      audio_max_size: {
        value: cdktf.numberToHclTerraform(this._audioMaxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      audio_opened: {
        value: cdktf.booleanToHclTerraform(this._audioOpened),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      audio_scan_limit: {
        value: cdktf.numberToHclTerraform(this._audioScanLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      audio_scenes: {
        value: cdktf.stringToHclTerraform(this._audioScenes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_freeze_type: {
        value: cdktf.stringToHclTerraform(this._autoFreezeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      biz_type: {
        value: cdktf.stringToHclTerraform(this._bizType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      buckets: {
        value: cdktf.stringToHclTerraform(this._buckets),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      callback_id: {
        value: cdktf.numberToHclTerraform(this._callbackId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      end_date: {
        value: cdktf.stringToHclTerraform(this._endDate),
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
      image_ad_freeze_config: {
        value: cdktf.stringToHclTerraform(this._imageAdFreezeConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_auto_freeze_opened: {
        value: cdktf.booleanToHclTerraform(this._imageAutoFreezeOpened),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      image_live_freeze_config: {
        value: cdktf.stringToHclTerraform(this._imageLiveFreezeConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_opened: {
        value: cdktf.booleanToHclTerraform(this._imageOpened),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      image_porn_freeze_config: {
        value: cdktf.stringToHclTerraform(this._imagePornFreezeConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_scan_limit: {
        value: cdktf.numberToHclTerraform(this._imageScanLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      image_scenes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._imageScenes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      image_terrorism_freeze_config: {
        value: cdktf.stringToHclTerraform(this._imageTerrorismFreezeConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_image_no_file_type: {
        value: cdktf.booleanToHclTerraform(this._scanImageNoFileType),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      start_date: {
        value: cdktf.stringToHclTerraform(this._startDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_ad_freeze_config: {
        value: cdktf.stringToHclTerraform(this._videoAdFreezeConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_auto_freeze_opened: {
        value: cdktf.booleanToHclTerraform(this._videoAutoFreezeOpened),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      video_frame_interval: {
        value: cdktf.numberToHclTerraform(this._videoFrameInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      video_live_freeze_config: {
        value: cdktf.stringToHclTerraform(this._videoLiveFreezeConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_max_frames: {
        value: cdktf.numberToHclTerraform(this._videoMaxFrames),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      video_max_size: {
        value: cdktf.numberToHclTerraform(this._videoMaxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      video_opened: {
        value: cdktf.booleanToHclTerraform(this._videoOpened),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      video_porn_freeze_config: {
        value: cdktf.stringToHclTerraform(this._videoPornFreezeConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_scan_limit: {
        value: cdktf.numberToHclTerraform(this._videoScanLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      video_scenes: {
        value: cdktf.stringToHclTerraform(this._videoScenes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_terrorism_freeze_config: {
        value: cdktf.stringToHclTerraform(this._videoTerrorismFreezeConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_voice_antispam_freeze_config: {
        value: cdktf.stringToHclTerraform(this._videoVoiceAntispamFreezeConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: aligreenOssStockTaskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AligreenOssStockTaskTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
