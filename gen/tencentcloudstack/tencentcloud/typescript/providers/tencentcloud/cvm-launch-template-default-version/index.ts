// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cvm_launch_template_default_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CvmLaunchTemplateDefaultVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of the version that you want to set as the default version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cvm_launch_template_default_version#default_version CvmLaunchTemplateDefaultVersion#default_version}
  */
  readonly defaultVersion: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cvm_launch_template_default_version#id CvmLaunchTemplateDefaultVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance launch template ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cvm_launch_template_default_version#launch_template_id CvmLaunchTemplateDefaultVersion#launch_template_id}
  */
  readonly launchTemplateId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cvm_launch_template_default_version tencentcloud_cvm_launch_template_default_version}
*/
export class CvmLaunchTemplateDefaultVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cvm_launch_template_default_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CvmLaunchTemplateDefaultVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CvmLaunchTemplateDefaultVersion to import
  * @param importFromId The id of the existing CvmLaunchTemplateDefaultVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cvm_launch_template_default_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CvmLaunchTemplateDefaultVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cvm_launch_template_default_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cvm_launch_template_default_version tencentcloud_cvm_launch_template_default_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CvmLaunchTemplateDefaultVersionConfig
  */
  public constructor(scope: Construct, id: string, config: CvmLaunchTemplateDefaultVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cvm_launch_template_default_version',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultVersion = config.defaultVersion;
    this._id = config.id;
    this._launchTemplateId = config.launchTemplateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_version - computed: false, optional: false, required: true
  private _defaultVersion?: number; 
  public get defaultVersion() {
    return this.getNumberAttribute('default_version');
  }
  public set defaultVersion(value: number) {
    this._defaultVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVersionInput() {
    return this._defaultVersion;
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

  // launch_template_id - computed: false, optional: false, required: true
  private _launchTemplateId?: string; 
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }
  public set launchTemplateId(value: string) {
    this._launchTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateIdInput() {
    return this._launchTemplateId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_version: cdktf.numberToTerraform(this._defaultVersion),
      id: cdktf.stringToTerraform(this._id),
      launch_template_id: cdktf.stringToTerraform(this._launchTemplateId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_version: {
        value: cdktf.numberToHclTerraform(this._defaultVersion),
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
      launch_template_id: {
        value: cdktf.stringToHclTerraform(this._launchTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
