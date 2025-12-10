// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_sample_snapshot_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MpsSampleSnapshotTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Template description information, length limit: 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_sample_snapshot_template#comment MpsSampleSnapshotTemplate#comment}
  */
  readonly comment?: string;
  /**
  * Filling type, when the aspect ratio of the video stream configuration is inconsistent with the aspect ratio of the original video, the processing method for transcoding is filling. Optional filling type:stretch: Stretching, stretching each frame to fill the entire screen, which may cause the transcoded video to be squashed or stretched.black: Leave black, keep the video aspect ratio unchanged, and fill the rest of the edge with black.white: Leave blank, keep the aspect ratio of the video, and fill the rest of the edge with white.gauss: Gaussian blur, keep the aspect ratio of the video unchanged, and use Gaussian blur for the rest of the edge.Default value: black.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_sample_snapshot_template#fill_type MpsSampleSnapshotTemplate#fill_type}
  */
  readonly fillType?: string;
  /**
  * Image format, the value can be jpg, png, webp. Default is jpg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_sample_snapshot_template#format MpsSampleSnapshotTemplate#format}
  */
  readonly format?: string;
  /**
  * The maximum value of the snapshot height (or short side), value range: 0 and [128, 4096], unit: px.When Width and Height are both 0, the resolution is the same.When Width is 0 and Height is not 0, Width is scaled proportionally.When Width is not 0 and Height is 0, Height is scaled proportionally.When both Width and Height are not 0, the resolution is specified by the user.Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_sample_snapshot_template#height MpsSampleSnapshotTemplate#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_sample_snapshot_template#id MpsSampleSnapshotTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Sample snapshot template name, length limit: 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_sample_snapshot_template#name MpsSampleSnapshotTemplate#name}
  */
  readonly name?: string;
  /**
  * Adaptive resolution, optional value:open: At this time, Width represents the long side of the video, Height represents the short side of the video.close: At this point, Width represents the width of the video, and Height represents the height of the video.Default value: open.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_sample_snapshot_template#resolution_adaptive MpsSampleSnapshotTemplate#resolution_adaptive}
  */
  readonly resolutionAdaptive?: string;
  /**
  * Sampling interval.When SampleType is Percent, specify the percentage of the sampling interval.When SampleType is Time, specify the sampling interval time in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_sample_snapshot_template#sample_interval MpsSampleSnapshotTemplate#sample_interval}
  */
  readonly sampleInterval: number;
  /**
  * Sampling snapshot type, optional value:Percent/Time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_sample_snapshot_template#sample_type MpsSampleSnapshotTemplate#sample_type}
  */
  readonly sampleType: string;
  /**
  * The maximum value of the snapshot width (or long side), value range: 0 and [128, 4096], unit: px.When Width and Height are both 0, the resolution is the same.When Width is 0 and Height is not 0, Width is scaled proportionally.When Width is not 0 and Height is 0, Height is scaled proportionally.When both Width and Height are not 0, the resolution is specified by the user.Default value: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_sample_snapshot_template#width MpsSampleSnapshotTemplate#width}
  */
  readonly width?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_sample_snapshot_template tencentcloud_mps_sample_snapshot_template}
*/
export class MpsSampleSnapshotTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mps_sample_snapshot_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MpsSampleSnapshotTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MpsSampleSnapshotTemplate to import
  * @param importFromId The id of the existing MpsSampleSnapshotTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_sample_snapshot_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MpsSampleSnapshotTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mps_sample_snapshot_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_sample_snapshot_template tencentcloud_mps_sample_snapshot_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MpsSampleSnapshotTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: MpsSampleSnapshotTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mps_sample_snapshot_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
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
