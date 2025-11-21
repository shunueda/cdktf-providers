// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/brain_industrial_pid_loop
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BrainIndustrialPidLoopConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/brain_industrial_pid_loop#id BrainIndustrialPidLoop#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/brain_industrial_pid_loop#pid_loop_configuration BrainIndustrialPidLoop#pid_loop_configuration}
  */
  readonly pidLoopConfiguration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/brain_industrial_pid_loop#pid_loop_dcs_type BrainIndustrialPidLoop#pid_loop_dcs_type}
  */
  readonly pidLoopDcsType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/brain_industrial_pid_loop#pid_loop_desc BrainIndustrialPidLoop#pid_loop_desc}
  */
  readonly pidLoopDesc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/brain_industrial_pid_loop#pid_loop_is_crucial BrainIndustrialPidLoop#pid_loop_is_crucial}
  */
  readonly pidLoopIsCrucial: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/brain_industrial_pid_loop#pid_loop_name BrainIndustrialPidLoop#pid_loop_name}
  */
  readonly pidLoopName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/brain_industrial_pid_loop#pid_loop_type BrainIndustrialPidLoop#pid_loop_type}
  */
  readonly pidLoopType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/brain_industrial_pid_loop#pid_project_id BrainIndustrialPidLoop#pid_project_id}
  */
  readonly pidProjectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/brain_industrial_pid_loop alicloud_brain_industrial_pid_loop}
*/
export class BrainIndustrialPidLoop extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_brain_industrial_pid_loop";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BrainIndustrialPidLoop resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BrainIndustrialPidLoop to import
  * @param importFromId The id of the existing BrainIndustrialPidLoop that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/brain_industrial_pid_loop#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BrainIndustrialPidLoop to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_brain_industrial_pid_loop", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/brain_industrial_pid_loop alicloud_brain_industrial_pid_loop} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BrainIndustrialPidLoopConfig
  */
  public constructor(scope: Construct, id: string, config: BrainIndustrialPidLoopConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_brain_industrial_pid_loop',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
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
    this._pidLoopConfiguration = config.pidLoopConfiguration;
    this._pidLoopDcsType = config.pidLoopDcsType;
    this._pidLoopDesc = config.pidLoopDesc;
    this._pidLoopIsCrucial = config.pidLoopIsCrucial;
    this._pidLoopName = config.pidLoopName;
    this._pidLoopType = config.pidLoopType;
    this._pidProjectId = config.pidProjectId;
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

  // pid_loop_configuration - computed: false, optional: false, required: true
  private _pidLoopConfiguration?: string; 
  public get pidLoopConfiguration() {
    return this.getStringAttribute('pid_loop_configuration');
  }
  public set pidLoopConfiguration(value: string) {
    this._pidLoopConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pidLoopConfigurationInput() {
    return this._pidLoopConfiguration;
  }

  // pid_loop_dcs_type - computed: false, optional: false, required: true
  private _pidLoopDcsType?: string; 
  public get pidLoopDcsType() {
    return this.getStringAttribute('pid_loop_dcs_type');
  }
  public set pidLoopDcsType(value: string) {
    this._pidLoopDcsType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pidLoopDcsTypeInput() {
    return this._pidLoopDcsType;
  }

  // pid_loop_desc - computed: false, optional: true, required: false
  private _pidLoopDesc?: string; 
  public get pidLoopDesc() {
    return this.getStringAttribute('pid_loop_desc');
  }
  public set pidLoopDesc(value: string) {
    this._pidLoopDesc = value;
  }
  public resetPidLoopDesc() {
    this._pidLoopDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidLoopDescInput() {
    return this._pidLoopDesc;
  }

  // pid_loop_is_crucial - computed: false, optional: false, required: true
  private _pidLoopIsCrucial?: boolean | cdktf.IResolvable; 
  public get pidLoopIsCrucial() {
    return this.getBooleanAttribute('pid_loop_is_crucial');
  }
  public set pidLoopIsCrucial(value: boolean | cdktf.IResolvable) {
    this._pidLoopIsCrucial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pidLoopIsCrucialInput() {
    return this._pidLoopIsCrucial;
  }

  // pid_loop_name - computed: false, optional: false, required: true
  private _pidLoopName?: string; 
  public get pidLoopName() {
    return this.getStringAttribute('pid_loop_name');
  }
  public set pidLoopName(value: string) {
    this._pidLoopName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pidLoopNameInput() {
    return this._pidLoopName;
  }

  // pid_loop_type - computed: false, optional: false, required: true
  private _pidLoopType?: string; 
  public get pidLoopType() {
    return this.getStringAttribute('pid_loop_type');
  }
  public set pidLoopType(value: string) {
    this._pidLoopType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pidLoopTypeInput() {
    return this._pidLoopType;
  }

  // pid_project_id - computed: false, optional: false, required: true
  private _pidProjectId?: string; 
  public get pidProjectId() {
    return this.getStringAttribute('pid_project_id');
  }
  public set pidProjectId(value: string) {
    this._pidProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pidProjectIdInput() {
    return this._pidProjectId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      pid_loop_configuration: cdktf.stringToTerraform(this._pidLoopConfiguration),
      pid_loop_dcs_type: cdktf.stringToTerraform(this._pidLoopDcsType),
      pid_loop_desc: cdktf.stringToTerraform(this._pidLoopDesc),
      pid_loop_is_crucial: cdktf.booleanToTerraform(this._pidLoopIsCrucial),
      pid_loop_name: cdktf.stringToTerraform(this._pidLoopName),
      pid_loop_type: cdktf.stringToTerraform(this._pidLoopType),
      pid_project_id: cdktf.stringToTerraform(this._pidProjectId),
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
      pid_loop_configuration: {
        value: cdktf.stringToHclTerraform(this._pidLoopConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pid_loop_dcs_type: {
        value: cdktf.stringToHclTerraform(this._pidLoopDcsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pid_loop_desc: {
        value: cdktf.stringToHclTerraform(this._pidLoopDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pid_loop_is_crucial: {
        value: cdktf.booleanToHclTerraform(this._pidLoopIsCrucial),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pid_loop_name: {
        value: cdktf.stringToHclTerraform(this._pidLoopName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pid_loop_type: {
        value: cdktf.stringToHclTerraform(this._pidLoopType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pid_project_id: {
        value: cdktf.stringToHclTerraform(this._pidProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
