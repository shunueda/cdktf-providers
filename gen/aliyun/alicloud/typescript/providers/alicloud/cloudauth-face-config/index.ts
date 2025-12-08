// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cloudauth_face_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudauthFaceConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cloudauth_face_config#biz_name CloudauthFaceConfig#biz_name}
  */
  readonly bizName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cloudauth_face_config#biz_type CloudauthFaceConfig#biz_type}
  */
  readonly bizType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cloudauth_face_config#id CloudauthFaceConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cloudauth_face_config alicloud_cloudauth_face_config}
*/
export class CloudauthFaceConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloudauth_face_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudauthFaceConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudauthFaceConfig to import
  * @param importFromId The id of the existing CloudauthFaceConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cloudauth_face_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudauthFaceConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloudauth_face_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cloudauth_face_config alicloud_cloudauth_face_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudauthFaceConfigConfig
  */
  public constructor(scope: Construct, id: string, config: CloudauthFaceConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloudauth_face_config',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bizName = config.bizName;
    this._bizType = config.bizType;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // biz_name - computed: false, optional: false, required: true
  private _bizName?: string; 
  public get bizName() {
    return this.getStringAttribute('biz_name');
  }
  public set bizName(value: string) {
    this._bizName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bizNameInput() {
    return this._bizName;
  }

  // biz_type - computed: false, optional: false, required: true
  private _bizType?: string; 
  public get bizType() {
    return this.getStringAttribute('biz_type');
  }
  public set bizType(value: string) {
    this._bizType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bizTypeInput() {
    return this._bizType;
  }

  // gmt_modified - computed: true, optional: false, required: false
  public get gmtModified() {
    return this.getStringAttribute('gmt_modified');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      biz_name: cdktf.stringToTerraform(this._bizName),
      biz_type: cdktf.stringToTerraform(this._bizType),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      biz_name: {
        value: cdktf.stringToHclTerraform(this._bizName),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
