// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/brain_industrial_pid_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BrainIndustrialPidProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/brain_industrial_pid_project#id BrainIndustrialPidProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/brain_industrial_pid_project#pid_organization_id BrainIndustrialPidProject#pid_organization_id}
  */
  readonly pidOrganizationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/brain_industrial_pid_project#pid_project_desc BrainIndustrialPidProject#pid_project_desc}
  */
  readonly pidProjectDesc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/brain_industrial_pid_project#pid_project_name BrainIndustrialPidProject#pid_project_name}
  */
  readonly pidProjectName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/brain_industrial_pid_project alicloud_brain_industrial_pid_project}
*/
export class BrainIndustrialPidProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_brain_industrial_pid_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BrainIndustrialPidProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BrainIndustrialPidProject to import
  * @param importFromId The id of the existing BrainIndustrialPidProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/brain_industrial_pid_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BrainIndustrialPidProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_brain_industrial_pid_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/brain_industrial_pid_project alicloud_brain_industrial_pid_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BrainIndustrialPidProjectConfig
  */
  public constructor(scope: Construct, id: string, config: BrainIndustrialPidProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_brain_industrial_pid_project',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
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
    this._pidOrganizationId = config.pidOrganizationId;
    this._pidProjectDesc = config.pidProjectDesc;
    this._pidProjectName = config.pidProjectName;
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

  // pid_organization_id - computed: false, optional: false, required: true
  private _pidOrganizationId?: string; 
  public get pidOrganizationId() {
    return this.getStringAttribute('pid_organization_id');
  }
  public set pidOrganizationId(value: string) {
    this._pidOrganizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pidOrganizationIdInput() {
    return this._pidOrganizationId;
  }

  // pid_project_desc - computed: false, optional: true, required: false
  private _pidProjectDesc?: string; 
  public get pidProjectDesc() {
    return this.getStringAttribute('pid_project_desc');
  }
  public set pidProjectDesc(value: string) {
    this._pidProjectDesc = value;
  }
  public resetPidProjectDesc() {
    this._pidProjectDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidProjectDescInput() {
    return this._pidProjectDesc;
  }

  // pid_project_name - computed: false, optional: false, required: true
  private _pidProjectName?: string; 
  public get pidProjectName() {
    return this.getStringAttribute('pid_project_name');
  }
  public set pidProjectName(value: string) {
    this._pidProjectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pidProjectNameInput() {
    return this._pidProjectName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      pid_organization_id: cdktf.stringToTerraform(this._pidOrganizationId),
      pid_project_desc: cdktf.stringToTerraform(this._pidProjectDesc),
      pid_project_name: cdktf.stringToTerraform(this._pidProjectName),
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
      pid_organization_id: {
        value: cdktf.stringToHclTerraform(this._pidOrganizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pid_project_desc: {
        value: cdktf.stringToHclTerraform(this._pidProjectDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pid_project_name: {
        value: cdktf.stringToHclTerraform(this._pidProjectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
