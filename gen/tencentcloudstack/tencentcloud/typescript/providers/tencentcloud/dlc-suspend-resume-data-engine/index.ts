// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/dlc_suspend_resume_data_engine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlcSuspendResumeDataEngineConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of a virtual cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/dlc_suspend_resume_data_engine#data_engine_name DlcSuspendResumeDataEngine#data_engine_name}
  */
  readonly dataEngineName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/dlc_suspend_resume_data_engine#id DlcSuspendResumeDataEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The operation type: `suspend` or `resume`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/dlc_suspend_resume_data_engine#operate DlcSuspendResumeDataEngine#operate}
  */
  readonly operate: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/dlc_suspend_resume_data_engine tencentcloud_dlc_suspend_resume_data_engine}
*/
export class DlcSuspendResumeDataEngine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_suspend_resume_data_engine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlcSuspendResumeDataEngine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlcSuspendResumeDataEngine to import
  * @param importFromId The id of the existing DlcSuspendResumeDataEngine that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/dlc_suspend_resume_data_engine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlcSuspendResumeDataEngine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_suspend_resume_data_engine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/dlc_suspend_resume_data_engine tencentcloud_dlc_suspend_resume_data_engine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlcSuspendResumeDataEngineConfig
  */
  public constructor(scope: Construct, id: string, config: DlcSuspendResumeDataEngineConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_suspend_resume_data_engine',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataEngineName = config.dataEngineName;
    this._id = config.id;
    this._operate = config.operate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_engine_name - computed: false, optional: false, required: true
  private _dataEngineName?: string; 
  public get dataEngineName() {
    return this.getStringAttribute('data_engine_name');
  }
  public set dataEngineName(value: string) {
    this._dataEngineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEngineNameInput() {
    return this._dataEngineName;
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

  // operate - computed: false, optional: false, required: true
  private _operate?: string; 
  public get operate() {
    return this.getStringAttribute('operate');
  }
  public set operate(value: string) {
    this._operate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operateInput() {
    return this._operate;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_engine_name: cdktf.stringToTerraform(this._dataEngineName),
      id: cdktf.stringToTerraform(this._id),
      operate: cdktf.stringToTerraform(this._operate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_engine_name: {
        value: cdktf.stringToHclTerraform(this._dataEngineName),
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
      operate: {
        value: cdktf.stringToHclTerraform(this._operate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
