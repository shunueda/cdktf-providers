// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiMediaSnapshotTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template#bucket CiMediaSnapshotTemplate#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template#id CiMediaSnapshotTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The template name only supports `Chinese`, `English`, `numbers`, `_`, `-` and `*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template#name CiMediaSnapshotTemplate#name}
  */
  readonly name: string;
  /**
  * snapshot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template#snapshot CiMediaSnapshotTemplate#snapshot}
  */
  readonly snapshot: CiMediaSnapshotTemplateSnapshot;
}
export interface CiMediaSnapshotTemplateSnapshotSpriteSnapshotConfig {
  /**
  * Single image height Value range: [8, 4096], Unit: px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template#cell_height CiMediaSnapshotTemplate#cell_height}
  */
  readonly cellHeight?: string;
  /**
  * Single image width Value range: [8, 4096], Unit: px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template#cell_width CiMediaSnapshotTemplate#cell_width}
  */
  readonly cellWidth?: string;
  /**
  * See `https://www.ffmpeg.org/ffmpeg-utils.html#color-syntax` for details on supported colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template#color CiMediaSnapshotTemplate#color}
  */
  readonly color: string;
  /**
  * Number of screenshot columns, value range: [1, 10000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template#columns CiMediaSnapshotTemplate#columns}
  */
  readonly columns: string;
  /**
  * Number of screenshot lines, value range: [1, 10000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template#lines CiMediaSnapshotTemplate#lines}
  */
  readonly lines: string;
  /**
  * screenshot margin size, Value range: [8, 4096], Unit: px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template#margin CiMediaSnapshotTemplate#margin}
  */
  readonly margin?: string;
  /**
  * screenshot padding size, Value range: [8, 4096], Unit: px.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template#padding CiMediaSnapshotTemplate#padding}
  */
  readonly padding?: string;
}

export function ciMediaSnapshotTemplateSnapshotSpriteSnapshotConfigToTerraform(struct?: CiMediaSnapshotTemplateSnapshotSpriteSnapshotConfigOutputReference | CiMediaSnapshotTemplateSnapshotSpriteSnapshotConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cell_height: cdktf.stringToTerraform(struct!.cellHeight),
    cell_width: cdktf.stringToTerraform(struct!.cellWidth),
    color: cdktf.stringToTerraform(struct!.color),
    columns: cdktf.stringToTerraform(struct!.columns),
    lines: cdktf.stringToTerraform(struct!.lines),
    margin: cdktf.stringToTerraform(struct!.margin),
    padding: cdktf.stringToTerraform(struct!.padding),
  }
}


export function ciMediaSnapshotTemplateSnapshotSpriteSnapshotConfigToHclTerraform(struct?: CiMediaSnapshotTemplateSnapshotSpriteSnapshotConfigOutputReference | CiMediaSnapshotTemplateSnapshotSpriteSnapshotConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cell_height: {
      value: cdktf.stringToHclTerraform(struct!.cellHeight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cell_width: {
      value: cdktf.stringToHclTerraform(struct!.cellWidth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    columns: {
      value: cdktf.stringToHclTerraform(struct!.columns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lines: {
      value: cdktf.stringToHclTerraform(struct!.lines),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    margin: {
      value: cdktf.stringToHclTerraform(struct!.margin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    padding: {
      value: cdktf.stringToHclTerraform(struct!.padding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaSnapshotTemplateSnapshotSpriteSnapshotConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaSnapshotTemplateSnapshotSpriteSnapshotConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cellHeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.cellHeight = this._cellHeight;
    }
    if (this._cellWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.cellWidth = this._cellWidth;
    }
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._lines !== undefined) {
      hasAnyValues = true;
      internalValueResult.lines = this._lines;
    }
    if (this._margin !== undefined) {
      hasAnyValues = true;
      internalValueResult.margin = this._margin;
    }
    if (this._padding !== undefined) {
      hasAnyValues = true;
      internalValueResult.padding = this._padding;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaSnapshotTemplateSnapshotSpriteSnapshotConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cellHeight = undefined;
      this._cellWidth = undefined;
      this._color = undefined;
      this._columns = undefined;
      this._lines = undefined;
      this._margin = undefined;
      this._padding = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cellHeight = value.cellHeight;
      this._cellWidth = value.cellWidth;
      this._color = value.color;
      this._columns = value.columns;
      this._lines = value.lines;
      this._margin = value.margin;
      this._padding = value.padding;
    }
  }

  // cell_height - computed: true, optional: true, required: false
  private _cellHeight?: string; 
  public get cellHeight() {
    return this.getStringAttribute('cell_height');
  }
  public set cellHeight(value: string) {
    this._cellHeight = value;
  }
  public resetCellHeight() {
    this._cellHeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellHeightInput() {
    return this._cellHeight;
  }

  // cell_width - computed: true, optional: true, required: false
  private _cellWidth?: string; 
  public get cellWidth() {
    return this.getStringAttribute('cell_width');
  }
  public set cellWidth(value: string) {
    this._cellWidth = value;
  }
  public resetCellWidth() {
    this._cellWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellWidthInput() {
    return this._cellWidth;
  }

  // color - computed: false, optional: false, required: true
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: string; 
  public get columns() {
    return this.getStringAttribute('columns');
  }
  public set columns(value: string) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // lines - computed: false, optional: false, required: true
  private _lines?: string; 
  public get lines() {
    return this.getStringAttribute('lines');
  }
  public set lines(value: string) {
    this._lines = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linesInput() {
    return this._lines;
  }

  // margin - computed: true, optional: true, required: false
  private _margin?: string; 
  public get margin() {
    return this.getStringAttribute('margin');
  }
  public set margin(value: string) {
    this._margin = value;
  }
  public resetMargin() {
    this._margin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marginInput() {
    return this._margin;
  }

  // padding - computed: true, optional: true, required: false
  private _padding?: string; 
  public get padding() {
    return this.getStringAttribute('padding');
  }
  public set padding(value: string) {
    this._padding = value;
  }
  public resetPadding() {
    this._padding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingInput() {
    return this._padding;
  }
}
export interface CiMediaSnapshotTemplateSnapshot {
  /**
  * Screenshot black screen detection parameters, Valid when IsCheckBlack=true, Value reference range [30, 100], indicating the proportion of black pixels, the smaller the value, the smaller the proportion of black pixels, Start&gt;0, the parameter setting is invalid, no filter black screen, Start =0 parameter is valid, the start time of the frame capture is the first frame non-black screen start.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template#black_level CiMediaSnapshotTemplate#black_level}
  */
  readonly blackLevel?: string;
  /**
  * Screenshot image processing parameters, for example: imageMogr2/format/png.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template#ci_param CiMediaSnapshotTemplate#ci_param}
  */
  readonly ciParam?: string;
  /**
  * Number of screenshots, range (0 10000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template#count CiMediaSnapshotTemplate#count}
  */
  readonly count: string;
  /**
  * high, value range: [128, 4096], Unit: px, If only Height is set, Width is calculated according to the original ratio of the video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template#height CiMediaSnapshotTemplate#height}
  */
  readonly height?: string;
  /**
  * Whether to enable black screen detection true/false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template#is_check_black CiMediaSnapshotTemplate#is_check_black}
  */
  readonly isCheckBlack?: string;
  /**
  * Whether to check the number of screenshots forcibly, when using custom interval mode to take screenshots, the video time is not long enough to capture Count screenshots, you can switch to average screenshot mode to capture Count screenshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template#is_check_count CiMediaSnapshotTemplate#is_check_count}
  */
  readonly isCheckCount?: string;
  /**
  * Screenshot mode, value range: {Interval, Average, KeyFrame}- Interval means interval mode Average means average mode- KeyFrame represents the key frame mode- Interval mode: Start, TimeInterval, The Count parameter takes effect. When Count is set and TimeInterval is not set, Indicates to capture all frames, a total of Count pictures- Average mode: Start, the Count parameter takes effect. express.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template#mode CiMediaSnapshotTemplate#mode}
  */
  readonly mode?: string;
  /**
  * Screenshot black screen detection parameters, Valid when IsCheckBlack=true, The threshold for judging whether a pixel is a black point, value range: [0, 255].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template#pixel_black_threshold CiMediaSnapshotTemplate#pixel_black_threshold}
  */
  readonly pixelBlackThreshold?: string;
  /**
  * Screenshot output mode parameters, Value range: {OnlySnapshot, OnlySprite, SnapshotAndSprite}, OnlySnapshot means output only screenshot mode OnlySprite means only output sprite mode SnapshotAndSprite means output screenshot and sprite mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template#snapshot_out_mode CiMediaSnapshotTemplate#snapshot_out_mode}
  */
  readonly snapshotOutMode?: string;
  /**
  * Starting time, [0 video duration] in seconds, Support float format, the execution accuracy is accurate to milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template#start CiMediaSnapshotTemplate#start}
  */
  readonly start?: string;
  /**
  * Screenshot time interval, (0 3600], in seconds, Support float format, the execution accuracy is accurate to milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template#time_interval CiMediaSnapshotTemplate#time_interval}
  */
  readonly timeInterval?: string;
  /**
  * wide, value range: [128, 4096], Unit: px, If only Width is set, Height is calculated according to the original ratio of the video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template#width CiMediaSnapshotTemplate#width}
  */
  readonly width?: string;
  /**
  * sprite_snapshot_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template#sprite_snapshot_config CiMediaSnapshotTemplate#sprite_snapshot_config}
  */
  readonly spriteSnapshotConfig?: CiMediaSnapshotTemplateSnapshotSpriteSnapshotConfig;
}

export function ciMediaSnapshotTemplateSnapshotToTerraform(struct?: CiMediaSnapshotTemplateSnapshotOutputReference | CiMediaSnapshotTemplateSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    black_level: cdktf.stringToTerraform(struct!.blackLevel),
    ci_param: cdktf.stringToTerraform(struct!.ciParam),
    count: cdktf.stringToTerraform(struct!.count),
    height: cdktf.stringToTerraform(struct!.height),
    is_check_black: cdktf.stringToTerraform(struct!.isCheckBlack),
    is_check_count: cdktf.stringToTerraform(struct!.isCheckCount),
    mode: cdktf.stringToTerraform(struct!.mode),
    pixel_black_threshold: cdktf.stringToTerraform(struct!.pixelBlackThreshold),
    snapshot_out_mode: cdktf.stringToTerraform(struct!.snapshotOutMode),
    start: cdktf.stringToTerraform(struct!.start),
    time_interval: cdktf.stringToTerraform(struct!.timeInterval),
    width: cdktf.stringToTerraform(struct!.width),
    sprite_snapshot_config: ciMediaSnapshotTemplateSnapshotSpriteSnapshotConfigToTerraform(struct!.spriteSnapshotConfig),
  }
}


export function ciMediaSnapshotTemplateSnapshotToHclTerraform(struct?: CiMediaSnapshotTemplateSnapshotOutputReference | CiMediaSnapshotTemplateSnapshot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    black_level: {
      value: cdktf.stringToHclTerraform(struct!.blackLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ci_param: {
      value: cdktf.stringToHclTerraform(struct!.ciParam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
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
    is_check_black: {
      value: cdktf.stringToHclTerraform(struct!.isCheckBlack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_check_count: {
      value: cdktf.stringToHclTerraform(struct!.isCheckCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pixel_black_threshold: {
      value: cdktf.stringToHclTerraform(struct!.pixelBlackThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_out_mode: {
      value: cdktf.stringToHclTerraform(struct!.snapshotOutMode),
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
    time_interval: {
      value: cdktf.stringToHclTerraform(struct!.timeInterval),
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
    sprite_snapshot_config: {
      value: ciMediaSnapshotTemplateSnapshotSpriteSnapshotConfigToHclTerraform(struct!.spriteSnapshotConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CiMediaSnapshotTemplateSnapshotSpriteSnapshotConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaSnapshotTemplateSnapshotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaSnapshotTemplateSnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blackLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.blackLevel = this._blackLevel;
    }
    if (this._ciParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciParam = this._ciParam;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._isCheckBlack !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCheckBlack = this._isCheckBlack;
    }
    if (this._isCheckCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCheckCount = this._isCheckCount;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._pixelBlackThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.pixelBlackThreshold = this._pixelBlackThreshold;
    }
    if (this._snapshotOutMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotOutMode = this._snapshotOutMode;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    if (this._timeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInterval = this._timeInterval;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    if (this._spriteSnapshotConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spriteSnapshotConfig = this._spriteSnapshotConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaSnapshotTemplateSnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blackLevel = undefined;
      this._ciParam = undefined;
      this._count = undefined;
      this._height = undefined;
      this._isCheckBlack = undefined;
      this._isCheckCount = undefined;
      this._mode = undefined;
      this._pixelBlackThreshold = undefined;
      this._snapshotOutMode = undefined;
      this._start = undefined;
      this._timeInterval = undefined;
      this._width = undefined;
      this._spriteSnapshotConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blackLevel = value.blackLevel;
      this._ciParam = value.ciParam;
      this._count = value.count;
      this._height = value.height;
      this._isCheckBlack = value.isCheckBlack;
      this._isCheckCount = value.isCheckCount;
      this._mode = value.mode;
      this._pixelBlackThreshold = value.pixelBlackThreshold;
      this._snapshotOutMode = value.snapshotOutMode;
      this._start = value.start;
      this._timeInterval = value.timeInterval;
      this._width = value.width;
      this._spriteSnapshotConfig.internalValue = value.spriteSnapshotConfig;
    }
  }

  // black_level - computed: true, optional: true, required: false
  private _blackLevel?: string; 
  public get blackLevel() {
    return this.getStringAttribute('black_level');
  }
  public set blackLevel(value: string) {
    this._blackLevel = value;
  }
  public resetBlackLevel() {
    this._blackLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackLevelInput() {
    return this._blackLevel;
  }

  // ci_param - computed: true, optional: true, required: false
  private _ciParam?: string; 
  public get ciParam() {
    return this.getStringAttribute('ci_param');
  }
  public set ciParam(value: string) {
    this._ciParam = value;
  }
  public resetCiParam() {
    this._ciParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciParamInput() {
    return this._ciParam;
  }

  // count - computed: false, optional: false, required: true
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // height - computed: true, optional: true, required: false
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

  // is_check_black - computed: true, optional: true, required: false
  private _isCheckBlack?: string; 
  public get isCheckBlack() {
    return this.getStringAttribute('is_check_black');
  }
  public set isCheckBlack(value: string) {
    this._isCheckBlack = value;
  }
  public resetIsCheckBlack() {
    this._isCheckBlack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCheckBlackInput() {
    return this._isCheckBlack;
  }

  // is_check_count - computed: true, optional: true, required: false
  private _isCheckCount?: string; 
  public get isCheckCount() {
    return this.getStringAttribute('is_check_count');
  }
  public set isCheckCount(value: string) {
    this._isCheckCount = value;
  }
  public resetIsCheckCount() {
    this._isCheckCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCheckCountInput() {
    return this._isCheckCount;
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

  // pixel_black_threshold - computed: true, optional: true, required: false
  private _pixelBlackThreshold?: string; 
  public get pixelBlackThreshold() {
    return this.getStringAttribute('pixel_black_threshold');
  }
  public set pixelBlackThreshold(value: string) {
    this._pixelBlackThreshold = value;
  }
  public resetPixelBlackThreshold() {
    this._pixelBlackThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pixelBlackThresholdInput() {
    return this._pixelBlackThreshold;
  }

  // snapshot_out_mode - computed: true, optional: true, required: false
  private _snapshotOutMode?: string; 
  public get snapshotOutMode() {
    return this.getStringAttribute('snapshot_out_mode');
  }
  public set snapshotOutMode(value: string) {
    this._snapshotOutMode = value;
  }
  public resetSnapshotOutMode() {
    this._snapshotOutMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotOutModeInput() {
    return this._snapshotOutMode;
  }

  // start - computed: true, optional: true, required: false
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

  // time_interval - computed: true, optional: true, required: false
  private _timeInterval?: string; 
  public get timeInterval() {
    return this.getStringAttribute('time_interval');
  }
  public set timeInterval(value: string) {
    this._timeInterval = value;
  }
  public resetTimeInterval() {
    this._timeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval;
  }

  // width - computed: true, optional: true, required: false
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

  // sprite_snapshot_config - computed: false, optional: true, required: false
  private _spriteSnapshotConfig = new CiMediaSnapshotTemplateSnapshotSpriteSnapshotConfigOutputReference(this, "sprite_snapshot_config");
  public get spriteSnapshotConfig() {
    return this._spriteSnapshotConfig;
  }
  public putSpriteSnapshotConfig(value: CiMediaSnapshotTemplateSnapshotSpriteSnapshotConfig) {
    this._spriteSnapshotConfig.internalValue = value;
  }
  public resetSpriteSnapshotConfig() {
    this._spriteSnapshotConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spriteSnapshotConfigInput() {
    return this._spriteSnapshotConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template tencentcloud_ci_media_snapshot_template}
*/
export class CiMediaSnapshotTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ci_media_snapshot_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiMediaSnapshotTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiMediaSnapshotTemplate to import
  * @param importFromId The id of the existing CiMediaSnapshotTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiMediaSnapshotTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ci_media_snapshot_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_snapshot_template tencentcloud_ci_media_snapshot_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiMediaSnapshotTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiMediaSnapshotTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ci_media_snapshot_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
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
    this._snapshot.internalValue = config.snapshot;
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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // template_id - computed: true, optional: false, required: false
  public get templateId() {
    return this.getStringAttribute('template_id');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // snapshot - computed: false, optional: false, required: true
  private _snapshot = new CiMediaSnapshotTemplateSnapshotOutputReference(this, "snapshot");
  public get snapshot() {
    return this._snapshot;
  }
  public putSnapshot(value: CiMediaSnapshotTemplateSnapshot) {
    this._snapshot.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      snapshot: ciMediaSnapshotTemplateSnapshotToTerraform(this._snapshot.internalValue),
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
      snapshot: {
        value: ciMediaSnapshotTemplateSnapshotToHclTerraform(this._snapshot.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaSnapshotTemplateSnapshotList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
