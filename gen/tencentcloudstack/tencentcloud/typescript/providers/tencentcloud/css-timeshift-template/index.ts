// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_timeshift_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CssTimeshiftTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The region.`Mainland`: The Chinese mainland.`Overseas`: Outside the Chinese mainland.Default value: `Mainland`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_timeshift_template#area CssTimeshiftTemplate#area}
  */
  readonly area?: string;
  /**
  * The template description.Only letters, numbers, underscores, and hyphens are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_timeshift_template#description CssTimeshiftTemplate#description}
  */
  readonly description?: string;
  /**
  * The time shifting duration.Unit: Second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_timeshift_template#duration CssTimeshiftTemplate#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_timeshift_template#id CssTimeshiftTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The segment size.Value range: 3-10.Unit: Second.Default value: 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_timeshift_template#item_duration CssTimeshiftTemplate#item_duration}
  */
  readonly itemDuration?: number;
  /**
  * Whether to remove watermarks.If you pass in `true`, the original stream will be recorded.Default value: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_timeshift_template#remove_watermark CssTimeshiftTemplate#remove_watermark}
  */
  readonly removeWatermark?: boolean | cdktf.IResolvable;
  /**
  * The template name.Maximum length: 255 bytes.Only letters, numbers, underscores, and hyphens are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_timeshift_template#template_name CssTimeshiftTemplate#template_name}
  */
  readonly templateName: string;
  /**
  * The transcoding template IDs.This API works only if `RemoveWatermark` is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_timeshift_template#transcode_template_ids CssTimeshiftTemplate#transcode_template_ids}
  */
  readonly transcodeTemplateIds?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_timeshift_template tencentcloud_css_timeshift_template}
*/
export class CssTimeshiftTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_css_timeshift_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CssTimeshiftTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CssTimeshiftTemplate to import
  * @param importFromId The id of the existing CssTimeshiftTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_timeshift_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CssTimeshiftTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_css_timeshift_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/css_timeshift_template tencentcloud_css_timeshift_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CssTimeshiftTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CssTimeshiftTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_css_timeshift_template',
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
    this._area = config.area;
    this._description = config.description;
    this._duration = config.duration;
    this._id = config.id;
    this._itemDuration = config.itemDuration;
    this._removeWatermark = config.removeWatermark;
    this._templateName = config.templateName;
    this._transcodeTemplateIds = config.transcodeTemplateIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // area - computed: false, optional: true, required: false
  private _area?: string; 
  public get area() {
    return this.getStringAttribute('area');
  }
  public set area(value: string) {
    this._area = value;
  }
  public resetArea() {
    this._area = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area;
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

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // item_duration - computed: false, optional: true, required: false
  private _itemDuration?: number; 
  public get itemDuration() {
    return this.getNumberAttribute('item_duration');
  }
  public set itemDuration(value: number) {
    this._itemDuration = value;
  }
  public resetItemDuration() {
    this._itemDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemDurationInput() {
    return this._itemDuration;
  }

  // remove_watermark - computed: false, optional: true, required: false
  private _removeWatermark?: boolean | cdktf.IResolvable; 
  public get removeWatermark() {
    return this.getBooleanAttribute('remove_watermark');
  }
  public set removeWatermark(value: boolean | cdktf.IResolvable) {
    this._removeWatermark = value;
  }
  public resetRemoveWatermark() {
    this._removeWatermark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeWatermarkInput() {
    return this._removeWatermark;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // transcode_template_ids - computed: false, optional: true, required: false
  private _transcodeTemplateIds?: number[]; 
  public get transcodeTemplateIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('transcode_template_ids')));
  }
  public set transcodeTemplateIds(value: number[]) {
    this._transcodeTemplateIds = value;
  }
  public resetTranscodeTemplateIds() {
    this._transcodeTemplateIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transcodeTemplateIdsInput() {
    return this._transcodeTemplateIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      area: cdktf.stringToTerraform(this._area),
      description: cdktf.stringToTerraform(this._description),
      duration: cdktf.numberToTerraform(this._duration),
      id: cdktf.stringToTerraform(this._id),
      item_duration: cdktf.numberToTerraform(this._itemDuration),
      remove_watermark: cdktf.booleanToTerraform(this._removeWatermark),
      template_name: cdktf.stringToTerraform(this._templateName),
      transcode_template_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._transcodeTemplateIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      area: {
        value: cdktf.stringToHclTerraform(this._area),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
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
      item_duration: {
        value: cdktf.numberToHclTerraform(this._itemDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remove_watermark: {
        value: cdktf.booleanToHclTerraform(this._removeWatermark),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transcode_template_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._transcodeTemplateIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
