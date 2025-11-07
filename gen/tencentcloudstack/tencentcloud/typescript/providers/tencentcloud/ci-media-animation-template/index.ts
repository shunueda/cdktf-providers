// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_animation_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiMediaAnimationTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_animation_template#bucket CiMediaAnimationTemplate#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_animation_template#id CiMediaAnimationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The template name only supports `Chinese`, `English`, `numbers`, `_`, `-` and `*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_animation_template#name CiMediaAnimationTemplate#name}
  */
  readonly name: string;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_animation_template#container CiMediaAnimationTemplate#container}
  */
  readonly container: CiMediaAnimationTemplateContainer;
  /**
  * time_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_animation_template#time_interval CiMediaAnimationTemplate#time_interval}
  */
  readonly timeInterval?: CiMediaAnimationTemplateTimeInterval;
  /**
  * video block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_animation_template#video CiMediaAnimationTemplate#video}
  */
  readonly video?: CiMediaAnimationTemplateVideo;
}
export interface CiMediaAnimationTemplateContainer {
  /**
  * Package format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_animation_template#format CiMediaAnimationTemplate#format}
  */
  readonly format: string;
}

export function ciMediaAnimationTemplateContainerToTerraform(struct?: CiMediaAnimationTemplateContainerOutputReference | CiMediaAnimationTemplateContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
  }
}


export function ciMediaAnimationTemplateContainerToHclTerraform(struct?: CiMediaAnimationTemplateContainerOutputReference | CiMediaAnimationTemplateContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaAnimationTemplateContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaAnimationTemplateContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaAnimationTemplateContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._format = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._format = value.format;
    }
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
}
export interface CiMediaAnimationTemplateTimeInterval {
  /**
  * duration, [0 video duration], in seconds, Support float format, the execution accuracy is accurate to milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_animation_template#duration CiMediaAnimationTemplate#duration}
  */
  readonly duration?: string;
  /**
  * Starting time, [0 video duration], in seconds, Support float format, the execution accuracy is accurate to milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_animation_template#start CiMediaAnimationTemplate#start}
  */
  readonly start?: string;
}

export function ciMediaAnimationTemplateTimeIntervalToTerraform(struct?: CiMediaAnimationTemplateTimeIntervalOutputReference | CiMediaAnimationTemplateTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function ciMediaAnimationTemplateTimeIntervalToHclTerraform(struct?: CiMediaAnimationTemplateTimeIntervalOutputReference | CiMediaAnimationTemplateTimeInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaAnimationTemplateTimeIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaAnimationTemplateTimeInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaAnimationTemplateTimeInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._start = value.start;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface CiMediaAnimationTemplateVideo {
  /**
  * Animation per second frame number, Priority: AnimateFramesPerSecond &gt; AnimateOnlyKeepKeyFrame &gt; AnimateTimeIntervalOfFrame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_animation_template#animate_frames_per_second CiMediaAnimationTemplate#animate_frames_per_second}
  */
  readonly animateFramesPerSecond?: string;
  /**
  * GIFs are kept only Keyframe, Priority: AnimateFramesPerSecond &gt; AnimateOnlyKeepKeyFrame &gt; AnimateTimeIntervalOfFrame.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_animation_template#animate_only_keep_key_frame CiMediaAnimationTemplate#animate_only_keep_key_frame}
  */
  readonly animateOnlyKeepKeyFrame?: string;
  /**
  * Animation frame extraction every time, (0, video duration], Animation frame extraction time interval, If TimeInterval.Duration is set, it is less than this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_animation_template#animate_time_interval_of_frame CiMediaAnimationTemplate#animate_time_interval_of_frame}
  */
  readonly animateTimeIntervalOfFrame?: string;
  /**
  * Codec format `gif`, `webp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_animation_template#codec CiMediaAnimationTemplate#codec}
  */
  readonly codec: string;
  /**
  * Frame rate, value range: (0, 60], Unit: fps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_animation_template#fps CiMediaAnimationTemplate#fps}
  */
  readonly fps?: string;
  /**
  * High, value range: [128, 4096], Unit: px, If only Height is set, Width is calculated according to the original ratio of the video, must be even.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_animation_template#height CiMediaAnimationTemplate#height}
  */
  readonly height?: string;
  /**
  * Set relative quality, [1, 100), webp image quality setting takes effect, gif has no quality parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_animation_template#quality CiMediaAnimationTemplate#quality}
  */
  readonly quality?: string;
  /**
  * width, value range: [128, 4096], Unit: px, If only Width is set, Height is calculated according to the original ratio of the video, must be even.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_animation_template#width CiMediaAnimationTemplate#width}
  */
  readonly width?: string;
}

export function ciMediaAnimationTemplateVideoToTerraform(struct?: CiMediaAnimationTemplateVideoOutputReference | CiMediaAnimationTemplateVideo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    animate_frames_per_second: cdktf.stringToTerraform(struct!.animateFramesPerSecond),
    animate_only_keep_key_frame: cdktf.stringToTerraform(struct!.animateOnlyKeepKeyFrame),
    animate_time_interval_of_frame: cdktf.stringToTerraform(struct!.animateTimeIntervalOfFrame),
    codec: cdktf.stringToTerraform(struct!.codec),
    fps: cdktf.stringToTerraform(struct!.fps),
    height: cdktf.stringToTerraform(struct!.height),
    quality: cdktf.stringToTerraform(struct!.quality),
    width: cdktf.stringToTerraform(struct!.width),
  }
}


export function ciMediaAnimationTemplateVideoToHclTerraform(struct?: CiMediaAnimationTemplateVideoOutputReference | CiMediaAnimationTemplateVideo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    animate_frames_per_second: {
      value: cdktf.stringToHclTerraform(struct!.animateFramesPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    animate_only_keep_key_frame: {
      value: cdktf.stringToHclTerraform(struct!.animateOnlyKeepKeyFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    animate_time_interval_of_frame: {
      value: cdktf.stringToHclTerraform(struct!.animateTimeIntervalOfFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    codec: {
      value: cdktf.stringToHclTerraform(struct!.codec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fps: {
      value: cdktf.stringToHclTerraform(struct!.fps),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    height: {
      value: cdktf.stringToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quality: {
      value: cdktf.stringToHclTerraform(struct!.quality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.stringToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaAnimationTemplateVideoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaAnimationTemplateVideo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._animateFramesPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.animateFramesPerSecond = this._animateFramesPerSecond;
    }
    if (this._animateOnlyKeepKeyFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.animateOnlyKeepKeyFrame = this._animateOnlyKeepKeyFrame;
    }
    if (this._animateTimeIntervalOfFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.animateTimeIntervalOfFrame = this._animateTimeIntervalOfFrame;
    }
    if (this._codec !== undefined) {
      hasAnyValues = true;
      internalValueResult.codec = this._codec;
    }
    if (this._fps !== undefined) {
      hasAnyValues = true;
      internalValueResult.fps = this._fps;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._quality !== undefined) {
      hasAnyValues = true;
      internalValueResult.quality = this._quality;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaAnimationTemplateVideo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._animateFramesPerSecond = undefined;
      this._animateOnlyKeepKeyFrame = undefined;
      this._animateTimeIntervalOfFrame = undefined;
      this._codec = undefined;
      this._fps = undefined;
      this._height = undefined;
      this._quality = undefined;
      this._width = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._animateFramesPerSecond = value.animateFramesPerSecond;
      this._animateOnlyKeepKeyFrame = value.animateOnlyKeepKeyFrame;
      this._animateTimeIntervalOfFrame = value.animateTimeIntervalOfFrame;
      this._codec = value.codec;
      this._fps = value.fps;
      this._height = value.height;
      this._quality = value.quality;
      this._width = value.width;
    }
  }

  // animate_frames_per_second - computed: false, optional: true, required: false
  private _animateFramesPerSecond?: string; 
  public get animateFramesPerSecond() {
    return this.getStringAttribute('animate_frames_per_second');
  }
  public set animateFramesPerSecond(value: string) {
    this._animateFramesPerSecond = value;
  }
  public resetAnimateFramesPerSecond() {
    this._animateFramesPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get animateFramesPerSecondInput() {
    return this._animateFramesPerSecond;
  }

  // animate_only_keep_key_frame - computed: false, optional: true, required: false
  private _animateOnlyKeepKeyFrame?: string; 
  public get animateOnlyKeepKeyFrame() {
    return this.getStringAttribute('animate_only_keep_key_frame');
  }
  public set animateOnlyKeepKeyFrame(value: string) {
    this._animateOnlyKeepKeyFrame = value;
  }
  public resetAnimateOnlyKeepKeyFrame() {
    this._animateOnlyKeepKeyFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get animateOnlyKeepKeyFrameInput() {
    return this._animateOnlyKeepKeyFrame;
  }

  // animate_time_interval_of_frame - computed: false, optional: true, required: false
  private _animateTimeIntervalOfFrame?: string; 
  public get animateTimeIntervalOfFrame() {
    return this.getStringAttribute('animate_time_interval_of_frame');
  }
  public set animateTimeIntervalOfFrame(value: string) {
    this._animateTimeIntervalOfFrame = value;
  }
  public resetAnimateTimeIntervalOfFrame() {
    this._animateTimeIntervalOfFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get animateTimeIntervalOfFrameInput() {
    return this._animateTimeIntervalOfFrame;
  }

  // codec - computed: false, optional: false, required: true
  private _codec?: string; 
  public get codec() {
    return this.getStringAttribute('codec');
  }
  public set codec(value: string) {
    this._codec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codecInput() {
    return this._codec;
  }

  // fps - computed: false, optional: true, required: false
  private _fps?: string; 
  public get fps() {
    return this.getStringAttribute('fps');
  }
  public set fps(value: string) {
    this._fps = value;
  }
  public resetFps() {
    this._fps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpsInput() {
    return this._fps;
  }

  // height - computed: false, optional: true, required: false
  private _height?: string; 
  public get height() {
    return this.getStringAttribute('height');
  }
  public set height(value: string) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // quality - computed: false, optional: true, required: false
  private _quality?: string; 
  public get quality() {
    return this.getStringAttribute('quality');
  }
  public set quality(value: string) {
    this._quality = value;
  }
  public resetQuality() {
    this._quality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualityInput() {
    return this._quality;
  }

  // width - computed: false, optional: true, required: false
  private _width?: string; 
  public get width() {
    return this.getStringAttribute('width');
  }
  public set width(value: string) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_animation_template tencentcloud_ci_media_animation_template}
*/
export class CiMediaAnimationTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ci_media_animation_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiMediaAnimationTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiMediaAnimationTemplate to import
  * @param importFromId The id of the existing CiMediaAnimationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_animation_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiMediaAnimationTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ci_media_animation_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_animation_template tencentcloud_ci_media_animation_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiMediaAnimationTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiMediaAnimationTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ci_media_animation_template',
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
    this._bucket = config.bucket;
    this._id = config.id;
    this._name = config.name;
    this._container.internalValue = config.container;
    this._timeInterval.internalValue = config.timeInterval;
    this._video.internalValue = config.video;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // container - computed: false, optional: false, required: true
  private _container = new CiMediaAnimationTemplateContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: CiMediaAnimationTemplateContainer) {
    this._container.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // time_interval - computed: false, optional: true, required: false
  private _timeInterval = new CiMediaAnimationTemplateTimeIntervalOutputReference(this, "time_interval");
  public get timeInterval() {
    return this._timeInterval;
  }
  public putTimeInterval(value: CiMediaAnimationTemplateTimeInterval) {
    this._timeInterval.internalValue = value;
  }
  public resetTimeInterval() {
    this._timeInterval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval.internalValue;
  }

  // video - computed: false, optional: true, required: false
  private _video = new CiMediaAnimationTemplateVideoOutputReference(this, "video");
  public get video() {
    return this._video;
  }
  public putVideo(value: CiMediaAnimationTemplateVideo) {
    this._video.internalValue = value;
  }
  public resetVideo() {
    this._video.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoInput() {
    return this._video.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      container: ciMediaAnimationTemplateContainerToTerraform(this._container.internalValue),
      time_interval: ciMediaAnimationTemplateTimeIntervalToTerraform(this._timeInterval.internalValue),
      video: ciMediaAnimationTemplateVideoToTerraform(this._video.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
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
      container: {
        value: ciMediaAnimationTemplateContainerToHclTerraform(this._container.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaAnimationTemplateContainerList",
      },
      time_interval: {
        value: ciMediaAnimationTemplateTimeIntervalToHclTerraform(this._timeInterval.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaAnimationTemplateTimeIntervalList",
      },
      video: {
        value: ciMediaAnimationTemplateVideoToHclTerraform(this._video.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaAnimationTemplateVideoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
