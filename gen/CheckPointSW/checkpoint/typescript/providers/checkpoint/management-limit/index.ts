// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementLimitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_limit#color ManagementLimit#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_limit#comments ManagementLimit#comments}
  */
  readonly comments?: string;
  /**
  * The Rate for the maximum permitted bandwidth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_limit#download_rate ManagementLimit#download_rate}
  */
  readonly downloadRate?: number;
  /**
  * The Unit for the maximum permitted bandwidth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_limit#download_unit ManagementLimit#download_unit}
  */
  readonly downloadUnit?: string;
  /**
  * Enable throughput limit for downloads from the internet to the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_limit#enable_download ManagementLimit#enable_download}
  */
  readonly enableDownload?: boolean | cdktf.IResolvable;
  /**
  * Enable throughput limit for uploads from the organization to the internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_limit#enable_upload ManagementLimit#enable_upload}
  */
  readonly enableUpload?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_limit#id ManagementLimit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_limit#ignore_errors ManagementLimit#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_limit#ignore_warnings ManagementLimit#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_limit#name ManagementLimit#name}
  */
  readonly name: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_limit#tags ManagementLimit#tags}
  */
  readonly tags?: string[];
  /**
  * The Rate for the maximum permitted bandwidth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_limit#upload_rate ManagementLimit#upload_rate}
  */
  readonly uploadRate?: number;
  /**
  * The Unit for the maximum permitted bandwidth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_limit#upload_unit ManagementLimit#upload_unit}
  */
  readonly uploadUnit?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_limit checkpoint_management_limit}
*/
export class ManagementLimit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_limit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementLimit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementLimit to import
  * @param importFromId The id of the existing ManagementLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_limit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementLimit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_limit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_limit checkpoint_management_limit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementLimitConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementLimitConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_limit',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._color = config.color;
    this._comments = config.comments;
    this._downloadRate = config.downloadRate;
    this._downloadUnit = config.downloadUnit;
    this._enableDownload = config.enableDownload;
    this._enableUpload = config.enableUpload;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._name = config.name;
    this._tags = config.tags;
    this._uploadRate = config.uploadRate;
    this._uploadUnit = config.uploadUnit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // download_rate - computed: false, optional: true, required: false
  private _downloadRate?: number; 
  public get downloadRate() {
    return this.getNumberAttribute('download_rate');
  }
  public set downloadRate(value: number) {
    this._downloadRate = value;
  }
  public resetDownloadRate() {
    this._downloadRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadRateInput() {
    return this._downloadRate;
  }

  // download_unit - computed: false, optional: true, required: false
  private _downloadUnit?: string; 
  public get downloadUnit() {
    return this.getStringAttribute('download_unit');
  }
  public set downloadUnit(value: string) {
    this._downloadUnit = value;
  }
  public resetDownloadUnit() {
    this._downloadUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadUnitInput() {
    return this._downloadUnit;
  }

  // enable_download - computed: false, optional: true, required: false
  private _enableDownload?: boolean | cdktf.IResolvable; 
  public get enableDownload() {
    return this.getBooleanAttribute('enable_download');
  }
  public set enableDownload(value: boolean | cdktf.IResolvable) {
    this._enableDownload = value;
  }
  public resetEnableDownload() {
    this._enableDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDownloadInput() {
    return this._enableDownload;
  }

  // enable_upload - computed: false, optional: true, required: false
  private _enableUpload?: boolean | cdktf.IResolvable; 
  public get enableUpload() {
    return this.getBooleanAttribute('enable_upload');
  }
  public set enableUpload(value: boolean | cdktf.IResolvable) {
    this._enableUpload = value;
  }
  public resetEnableUpload() {
    this._enableUpload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUploadInput() {
    return this._enableUpload;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // upload_rate - computed: false, optional: true, required: false
  private _uploadRate?: number; 
  public get uploadRate() {
    return this.getNumberAttribute('upload_rate');
  }
  public set uploadRate(value: number) {
    this._uploadRate = value;
  }
  public resetUploadRate() {
    this._uploadRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadRateInput() {
    return this._uploadRate;
  }

  // upload_unit - computed: false, optional: true, required: false
  private _uploadUnit?: string; 
  public get uploadUnit() {
    return this.getStringAttribute('upload_unit');
  }
  public set uploadUnit(value: string) {
    this._uploadUnit = value;
  }
  public resetUploadUnit() {
    this._uploadUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadUnitInput() {
    return this._uploadUnit;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      download_rate: cdktf.numberToTerraform(this._downloadRate),
      download_unit: cdktf.stringToTerraform(this._downloadUnit),
      enable_download: cdktf.booleanToTerraform(this._enableDownload),
      enable_upload: cdktf.booleanToTerraform(this._enableUpload),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      upload_rate: cdktf.numberToTerraform(this._uploadRate),
      upload_unit: cdktf.stringToTerraform(this._uploadUnit),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      download_rate: {
        value: cdktf.numberToHclTerraform(this._downloadRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      download_unit: {
        value: cdktf.stringToHclTerraform(this._downloadUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_download: {
        value: cdktf.booleanToHclTerraform(this._enableDownload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_upload: {
        value: cdktf.booleanToHclTerraform(this._enableUpload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      upload_rate: {
        value: cdktf.numberToHclTerraform(this._uploadRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      upload_unit: {
        value: cdktf.stringToHclTerraform(this._uploadUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
