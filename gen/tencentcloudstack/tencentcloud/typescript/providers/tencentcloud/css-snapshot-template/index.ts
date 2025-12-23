// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/css_snapshot_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CssSnapshotTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cos application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/css_snapshot_template#cos_app_id CssSnapshotTemplate#cos_app_id}
  */
  readonly cosAppId: number;
  /**
  * Cos bucket name. Note: The CosBucket parameter value cannot include the - [appid] part.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/css_snapshot_template#cos_bucket CssSnapshotTemplate#cos_bucket}
  */
  readonly cosBucket: string;
  /**
  * Cos file name. If it is empty, set according to the default value {StreamID}-screenshot-{Hour}-{Minute}-{Second}-{Width}x{Height}{Ext}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/css_snapshot_template#cos_file_name CssSnapshotTemplate#cos_file_name}
  */
  readonly cosFileName?: string;
  /**
  * Cos Bucket folder prefix. If it is empty, set according to the default value /{Year}-{Month}-{Day}/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/css_snapshot_template#cos_prefix CssSnapshotTemplate#cos_prefix}
  */
  readonly cosPrefix?: string;
  /**
  * Cos region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/css_snapshot_template#cos_region CssSnapshotTemplate#cos_region}
  */
  readonly cosRegion: string;
  /**
  * Description information. Maximum length: 1024 bytes. Only `Chinese`, `English`, `numbers`, `_`, `-` are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/css_snapshot_template#description CssSnapshotTemplate#description}
  */
  readonly description?: string;
  /**
  * Screenshot height. Default: 0 (original height). Range: 0-2000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/css_snapshot_template#height CssSnapshotTemplate#height}
  */
  readonly height?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/css_snapshot_template#id CssSnapshotTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether porn is enabled, 0: not enabled, 1: enabled. Default: 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/css_snapshot_template#porn_flag CssSnapshotTemplate#porn_flag}
  */
  readonly pornFlag?: number;
  /**
  * Screenshot interval, unit: s, default: 10s. Range: 2s~300s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/css_snapshot_template#snapshot_interval CssSnapshotTemplate#snapshot_interval}
  */
  readonly snapshotInterval?: number;
  /**
  * Template name. Maximum length: 255 bytes. Only Chinese, English, numbers, `_`, `-` are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/css_snapshot_template#template_name CssSnapshotTemplate#template_name}
  */
  readonly templateName: string;
  /**
  * Screenshot width. Default: 0 (original width). Range: 0-3000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/css_snapshot_template#width CssSnapshotTemplate#width}
  */
  readonly width?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/css_snapshot_template tencentcloud_css_snapshot_template}
*/
export class CssSnapshotTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_css_snapshot_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CssSnapshotTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CssSnapshotTemplate to import
  * @param importFromId The id of the existing CssSnapshotTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/css_snapshot_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CssSnapshotTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_css_snapshot_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/css_snapshot_template tencentcloud_css_snapshot_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CssSnapshotTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CssSnapshotTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_css_snapshot_template',
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
    this._cosAppId = config.cosAppId;
    this._cosBucket = config.cosBucket;
    this._cosFileName = config.cosFileName;
    this._cosPrefix = config.cosPrefix;
    this._cosRegion = config.cosRegion;
    this._description = config.description;
    this._height = config.height;
    this._id = config.id;
    this._pornFlag = config.pornFlag;
    this._snapshotInterval = config.snapshotInterval;
    this._templateName = config.templateName;
    this._width = config.width;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cos_app_id - computed: false, optional: false, required: true
  private _cosAppId?: number; 
  public get cosAppId() {
    return this.getNumberAttribute('cos_app_id');
  }
  public set cosAppId(value: number) {
    this._cosAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cosAppIdInput() {
    return this._cosAppId;
  }

  // cos_bucket - computed: false, optional: false, required: true
  private _cosBucket?: string; 
  public get cosBucket() {
    return this.getStringAttribute('cos_bucket');
  }
  public set cosBucket(value: string) {
    this._cosBucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cosBucketInput() {
    return this._cosBucket;
  }

  // cos_file_name - computed: false, optional: true, required: false
  private _cosFileName?: string; 
  public get cosFileName() {
    return this.getStringAttribute('cos_file_name');
  }
  public set cosFileName(value: string) {
    this._cosFileName = value;
  }
  public resetCosFileName() {
    this._cosFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosFileNameInput() {
    return this._cosFileName;
  }

  // cos_prefix - computed: false, optional: true, required: false
  private _cosPrefix?: string; 
  public get cosPrefix() {
    return this.getStringAttribute('cos_prefix');
  }
  public set cosPrefix(value: string) {
    this._cosPrefix = value;
  }
  public resetCosPrefix() {
    this._cosPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosPrefixInput() {
    return this._cosPrefix;
  }

  // cos_region - computed: false, optional: false, required: true
  private _cosRegion?: string; 
  public get cosRegion() {
    return this.getStringAttribute('cos_region');
  }
  public set cosRegion(value: string) {
    this._cosRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cosRegionInput() {
    return this._cosRegion;
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

  // porn_flag - computed: false, optional: true, required: false
  private _pornFlag?: number; 
  public get pornFlag() {
    return this.getNumberAttribute('porn_flag');
  }
  public set pornFlag(value: number) {
    this._pornFlag = value;
  }
  public resetPornFlag() {
    this._pornFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pornFlagInput() {
    return this._pornFlag;
  }

  // snapshot_interval - computed: false, optional: true, required: false
  private _snapshotInterval?: number; 
  public get snapshotInterval() {
    return this.getNumberAttribute('snapshot_interval');
  }
  public set snapshotInterval(value: number) {
    this._snapshotInterval = value;
  }
  public resetSnapshotInterval() {
    this._snapshotInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIntervalInput() {
    return this._snapshotInterval;
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
      cos_app_id: cdktf.numberToTerraform(this._cosAppId),
      cos_bucket: cdktf.stringToTerraform(this._cosBucket),
      cos_file_name: cdktf.stringToTerraform(this._cosFileName),
      cos_prefix: cdktf.stringToTerraform(this._cosPrefix),
      cos_region: cdktf.stringToTerraform(this._cosRegion),
      description: cdktf.stringToTerraform(this._description),
      height: cdktf.numberToTerraform(this._height),
      id: cdktf.stringToTerraform(this._id),
      porn_flag: cdktf.numberToTerraform(this._pornFlag),
      snapshot_interval: cdktf.numberToTerraform(this._snapshotInterval),
      template_name: cdktf.stringToTerraform(this._templateName),
      width: cdktf.numberToTerraform(this._width),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cos_app_id: {
        value: cdktf.numberToHclTerraform(this._cosAppId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cos_bucket: {
        value: cdktf.stringToHclTerraform(this._cosBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos_file_name: {
        value: cdktf.stringToHclTerraform(this._cosFileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos_prefix: {
        value: cdktf.stringToHclTerraform(this._cosPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos_region: {
        value: cdktf.stringToHclTerraform(this._cosRegion),
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
      porn_flag: {
        value: cdktf.numberToHclTerraform(this._pornFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snapshot_interval: {
        value: cdktf.numberToHclTerraform(this._snapshotInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
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
