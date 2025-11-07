// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_super_resolution_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiMediaSuperResolutionTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_super_resolution_template#bucket CiMediaSuperResolutionTemplate#bucket}
  */
  readonly bucket: string;
  /**
  * Auto scaling switch, off by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_super_resolution_template#enable_scale_up CiMediaSuperResolutionTemplate#enable_scale_up}
  */
  readonly enableScaleUp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_super_resolution_template#id CiMediaSuperResolutionTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The template name only supports `Chinese`, `English`, `numbers`, `_`, `-` and `*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_super_resolution_template#name CiMediaSuperResolutionTemplate#name}
  */
  readonly name: string;
  /**
  * Resolution Options sdtohd: Standard Definition to Ultra Definition, hdto4k: HD to 4K.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_super_resolution_template#resolution CiMediaSuperResolutionTemplate#resolution}
  */
  readonly resolution: string;
  /**
  * version, default value Base, Base: basic version, Enhance: enhanced version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_super_resolution_template#version CiMediaSuperResolutionTemplate#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_super_resolution_template tencentcloud_ci_media_super_resolution_template}
*/
export class CiMediaSuperResolutionTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ci_media_super_resolution_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiMediaSuperResolutionTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiMediaSuperResolutionTemplate to import
  * @param importFromId The id of the existing CiMediaSuperResolutionTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_super_resolution_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiMediaSuperResolutionTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ci_media_super_resolution_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/ci_media_super_resolution_template tencentcloud_ci_media_super_resolution_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiMediaSuperResolutionTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiMediaSuperResolutionTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ci_media_super_resolution_template',
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
    this._enableScaleUp = config.enableScaleUp;
    this._id = config.id;
    this._name = config.name;
    this._resolution = config.resolution;
    this._version = config.version;
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

  // enable_scale_up - computed: false, optional: true, required: false
  private _enableScaleUp?: string; 
  public get enableScaleUp() {
    return this.getStringAttribute('enable_scale_up');
  }
  public set enableScaleUp(value: string) {
    this._enableScaleUp = value;
  }
  public resetEnableScaleUp() {
    this._enableScaleUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableScaleUpInput() {
    return this._enableScaleUp;
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

  // resolution - computed: false, optional: false, required: true
  private _resolution?: string; 
  public get resolution() {
    return this.getStringAttribute('resolution');
  }
  public set resolution(value: string) {
    this._resolution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionInput() {
    return this._resolution;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      enable_scale_up: cdktf.stringToTerraform(this._enableScaleUp),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resolution: cdktf.stringToTerraform(this._resolution),
      version: cdktf.stringToTerraform(this._version),
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
      enable_scale_up: {
        value: cdktf.stringToHclTerraform(this._enableScaleUp),
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
      resolution: {
        value: cdktf.stringToHclTerraform(this._resolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
