// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dlc_work_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlcWorkGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dlc_work_group#id DlcWorkGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Working group description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dlc_work_group#work_group_description DlcWorkGroup#work_group_description}
  */
  readonly workGroupDescription?: string;
  /**
  * Working group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dlc_work_group#work_group_name DlcWorkGroup#work_group_name}
  */
  readonly workGroupName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dlc_work_group tencentcloud_dlc_work_group}
*/
export class DlcWorkGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_work_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlcWorkGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlcWorkGroup to import
  * @param importFromId The id of the existing DlcWorkGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dlc_work_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlcWorkGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_work_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/dlc_work_group tencentcloud_dlc_work_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlcWorkGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DlcWorkGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_work_group',
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
    this._id = config.id;
    this._workGroupDescription = config.workGroupDescription;
    this._workGroupName = config.workGroupName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // user_ids - computed: true, optional: false, required: false
  public get userIds() {
    return cdktf.Fn.tolist(this.getListAttribute('user_ids'));
  }

  // work_group_description - computed: false, optional: true, required: false
  private _workGroupDescription?: string; 
  public get workGroupDescription() {
    return this.getStringAttribute('work_group_description');
  }
  public set workGroupDescription(value: string) {
    this._workGroupDescription = value;
  }
  public resetWorkGroupDescription() {
    this._workGroupDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workGroupDescriptionInput() {
    return this._workGroupDescription;
  }

  // work_group_name - computed: false, optional: false, required: true
  private _workGroupName?: string; 
  public get workGroupName() {
    return this.getStringAttribute('work_group_name');
  }
  public set workGroupName(value: string) {
    this._workGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workGroupNameInput() {
    return this._workGroupName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      work_group_description: cdktf.stringToTerraform(this._workGroupDescription),
      work_group_name: cdktf.stringToTerraform(this._workGroupName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      work_group_description: {
        value: cdktf.stringToHclTerraform(this._workGroupDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      work_group_name: {
        value: cdktf.stringToHclTerraform(this._workGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
