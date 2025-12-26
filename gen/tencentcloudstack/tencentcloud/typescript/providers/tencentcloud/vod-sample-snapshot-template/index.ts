// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vod_sample_snapshot_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VodSampleSnapshotTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Template description. Length limit: 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vod_sample_snapshot_template#comment VodSampleSnapshotTemplate#comment}
  */
  readonly comment?: string;
  /**
  * Fill type. Fill refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported:  stretch: stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot shorter or longer; black: fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks. white: fill with white. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with white color blocks. gauss: fill with Gaussian blur. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with Gaussian blur.Default value: black.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vod_sample_snapshot_template#fill_type VodSampleSnapshotTemplate#fill_type}
  */
  readonly fillType?: string;
  /**
  * Image format. Valid values: jpg, png. Default value: jpg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vod_sample_snapshot_template#format VodSampleSnapshotTemplate#format}
  */
  readonly format?: string;
  /**
  * Maximum value of the height (or short side) of a screenshot in px. Value range: 0 and [128, 4,096]. If both `Width` and `Height` are 0, the resolution will be the same as that of the source video; If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled; If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled; If both `Width` and `Height` are not 0, the custom resolution will be used.Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vod_sample_snapshot_template#height VodSampleSnapshotTemplate#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vod_sample_snapshot_template#id VodSampleSnapshotTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of a sampled screencapturing template. Length limit: 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vod_sample_snapshot_template#name VodSampleSnapshotTemplate#name}
  */
  readonly name?: string;
  /**
  * Resolution adaption. Valid values: open: enabled. In this case, `Width` represents the long side of a video, while `Height` the short side; close: disabled. In this case, `Width` represents the width of a video, while `Height` the height.Default value: open.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vod_sample_snapshot_template#resolution_adaptive VodSampleSnapshotTemplate#resolution_adaptive}
  */
  readonly resolutionAdaptive?: string;
  /**
  * Sampling interval. If `SampleType` is `Percent`, sampling will be performed at an interval of the specified percentage. If `SampleType` is `Time`, sampling will be performed at the specified time interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vod_sample_snapshot_template#sample_interval VodSampleSnapshotTemplate#sample_interval}
  */
  readonly sampleInterval: number;
  /**
  * Sampled screencapturing type. Valid values: Percent: by percent. Time: by time interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vod_sample_snapshot_template#sample_type VodSampleSnapshotTemplate#sample_type}
  */
  readonly sampleType: string;
  /**
  * The VOD [application](https://intl.cloud.tencent.com/document/product/266/14574) ID. For customers who activate VOD service from December 25, 2023, if they want to access resources in a VOD application (whether it's the default application or a newly created one), they must fill in this field with the application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vod_sample_snapshot_template#sub_app_id VodSampleSnapshotTemplate#sub_app_id}
  */
  readonly subAppId: number;
  /**
  * Maximum value of the width (or long side) of a screenshot in px. Value range: 0 and [128, 4,096]. If both `Width` and `Height` are 0, the resolution will be the same as that of the source video; If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled; If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled; If both `Width` and `Height` are not 0, the custom resolution will be used.Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vod_sample_snapshot_template#width VodSampleSnapshotTemplate#width}
  */
  readonly width?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vod_sample_snapshot_template tencentcloud_vod_sample_snapshot_template}
*/
export class VodSampleSnapshotTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vod_sample_snapshot_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VodSampleSnapshotTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VodSampleSnapshotTemplate to import
  * @param importFromId The id of the existing VodSampleSnapshotTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vod_sample_snapshot_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VodSampleSnapshotTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vod_sample_snapshot_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/vod_sample_snapshot_template tencentcloud_vod_sample_snapshot_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VodSampleSnapshotTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: VodSampleSnapshotTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vod_sample_snapshot_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._fillType = config.fillType;
    this._format = config.format;
    this._height = config.height;
    this._id = config.id;
    this._name = config.name;
    this._resolutionAdaptive = config.resolutionAdaptive;
    this._sampleInterval = config.sampleInterval;
    this._sampleType = config.sampleType;
    this._subAppId = config.subAppId;
    this._width = config.width;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // fill_type - computed: false, optional: true, required: false
  private _fillType?: string; 
  public get fillType() {
    return this.getStringAttribute('fill_type');
  }
  public set fillType(value: string) {
    this._fillType = value;
  }
  public resetFillType() {
    this._fillType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillTypeInput() {
    return this._fillType;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
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

  // resolution_adaptive - computed: false, optional: true, required: false
  private _resolutionAdaptive?: string; 
  public get resolutionAdaptive() {
    return this.getStringAttribute('resolution_adaptive');
  }
  public set resolutionAdaptive(value: string) {
    this._resolutionAdaptive = value;
  }
  public resetResolutionAdaptive() {
    this._resolutionAdaptive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionAdaptiveInput() {
    return this._resolutionAdaptive;
  }

  // sample_interval - computed: false, optional: false, required: true
  private _sampleInterval?: number; 
  public get sampleInterval() {
    return this.getNumberAttribute('sample_interval');
  }
  public set sampleInterval(value: number) {
    this._sampleInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleIntervalInput() {
    return this._sampleInterval;
  }

  // sample_type - computed: false, optional: false, required: true
  private _sampleType?: string; 
  public get sampleType() {
    return this.getStringAttribute('sample_type');
  }
  public set sampleType(value: string) {
    this._sampleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleTypeInput() {
    return this._sampleType;
  }

  // sub_app_id - computed: false, optional: false, required: true
  private _subAppId?: number; 
  public get subAppId() {
    return this.getNumberAttribute('sub_app_id');
  }
  public set subAppId(value: number) {
    this._subAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subAppIdInput() {
    return this._subAppId;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      fill_type: cdktf.stringToTerraform(this._fillType),
      format: cdktf.stringToTerraform(this._format),
      height: cdktf.numberToTerraform(this._height),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resolution_adaptive: cdktf.stringToTerraform(this._resolutionAdaptive),
      sample_interval: cdktf.numberToTerraform(this._sampleInterval),
      sample_type: cdktf.stringToTerraform(this._sampleType),
      sub_app_id: cdktf.numberToTerraform(this._subAppId),
      width: cdktf.numberToTerraform(this._width),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fill_type: {
        value: cdktf.stringToHclTerraform(this._fillType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      height: {
        value: cdktf.numberToHclTerraform(this._height),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      resolution_adaptive: {
        value: cdktf.stringToHclTerraform(this._resolutionAdaptive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sample_interval: {
        value: cdktf.numberToHclTerraform(this._sampleInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sample_type: {
        value: cdktf.stringToHclTerraform(this._sampleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_app_id: {
        value: cdktf.numberToHclTerraform(this._subAppId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      width: {
        value: cdktf.numberToHclTerraform(this._width),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
