// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/oceanus_work_space
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceanusWorkSpaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Workspace description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/oceanus_work_space#description OceanusWorkSpace#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/oceanus_work_space#id OceanusWorkSpace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Workspace name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/oceanus_work_space#work_space_name OceanusWorkSpace#work_space_name}
  */
  readonly workSpaceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/oceanus_work_space tencentcloud_oceanus_work_space}
*/
export class OceanusWorkSpace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_oceanus_work_space";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OceanusWorkSpace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OceanusWorkSpace to import
  * @param importFromId The id of the existing OceanusWorkSpace that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/oceanus_work_space#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OceanusWorkSpace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_oceanus_work_space", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/oceanus_work_space tencentcloud_oceanus_work_space} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceanusWorkSpaceConfig
  */
  public constructor(scope: Construct, id: string, config: OceanusWorkSpaceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_oceanus_work_space',
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
    this._description = config.description;
    this._id = config.id;
    this._workSpaceName = config.workSpaceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getNumberAttribute('app_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // creator_uin - computed: true, optional: false, required: false
  public get creatorUin() {
    return this.getStringAttribute('creator_uin');
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

  // jobs_count - computed: true, optional: false, required: false
  public get jobsCount() {
    return this.getNumberAttribute('jobs_count');
  }

  // owner_uin - computed: true, optional: false, required: false
  public get ownerUin() {
    return this.getStringAttribute('owner_uin');
  }

  // role_auth_count - computed: true, optional: false, required: false
  public get roleAuthCount() {
    return this.getNumberAttribute('role_auth_count');
  }

  // serial_id - computed: true, optional: false, required: false
  public get serialId() {
    return this.getStringAttribute('serial_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // work_space_id - computed: true, optional: false, required: false
  public get workSpaceId() {
    return this.getStringAttribute('work_space_id');
  }

  // work_space_name - computed: false, optional: false, required: true
  private _workSpaceName?: string; 
  public get workSpaceName() {
    return this.getStringAttribute('work_space_name');
  }
  public set workSpaceName(value: string) {
    this._workSpaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workSpaceNameInput() {
    return this._workSpaceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      work_space_name: cdktf.stringToTerraform(this._workSpaceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      work_space_name: {
        value: cdktf.stringToHclTerraform(this._workSpaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
