// https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/retrospective_process_group_step
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RetrospectiveProcessGroupStepConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/retrospective_process_group_step#id RetrospectiveProcessGroupStep#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/retrospective_process_group_step#position RetrospectiveProcessGroupStep#position}
  */
  readonly position?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/retrospective_process_group_step#retrospective_process_group_id RetrospectiveProcessGroupStep#retrospective_process_group_id}
  */
  readonly retrospectiveProcessGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/retrospective_process_group_step#retrospective_step_id RetrospectiveProcessGroupStep#retrospective_step_id}
  */
  readonly retrospectiveStepId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/retrospective_process_group_step rootly_retrospective_process_group_step}
*/
export class RetrospectiveProcessGroupStep extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_retrospective_process_group_step";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RetrospectiveProcessGroupStep resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RetrospectiveProcessGroupStep to import
  * @param importFromId The id of the existing RetrospectiveProcessGroupStep that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/retrospective_process_group_step#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RetrospectiveProcessGroupStep to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_retrospective_process_group_step", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/retrospective_process_group_step rootly_retrospective_process_group_step} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RetrospectiveProcessGroupStepConfig
  */
  public constructor(scope: Construct, id: string, config: RetrospectiveProcessGroupStepConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_retrospective_process_group_step',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.0.0',
        providerVersionConstraint: '5.0.0'
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
    this._position = config.position;
    this._retrospectiveProcessGroupId = config.retrospectiveProcessGroupId;
    this._retrospectiveStepId = config.retrospectiveStepId;
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

  // position - computed: true, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // retrospective_process_group_id - computed: true, optional: true, required: false
  private _retrospectiveProcessGroupId?: string; 
  public get retrospectiveProcessGroupId() {
    return this.getStringAttribute('retrospective_process_group_id');
  }
  public set retrospectiveProcessGroupId(value: string) {
    this._retrospectiveProcessGroupId = value;
  }
  public resetRetrospectiveProcessGroupId() {
    this._retrospectiveProcessGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrospectiveProcessGroupIdInput() {
    return this._retrospectiveProcessGroupId;
  }

  // retrospective_step_id - computed: false, optional: false, required: true
  private _retrospectiveStepId?: string; 
  public get retrospectiveStepId() {
    return this.getStringAttribute('retrospective_step_id');
  }
  public set retrospectiveStepId(value: string) {
    this._retrospectiveStepId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retrospectiveStepIdInput() {
    return this._retrospectiveStepId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      position: cdktf.numberToTerraform(this._position),
      retrospective_process_group_id: cdktf.stringToTerraform(this._retrospectiveProcessGroupId),
      retrospective_step_id: cdktf.stringToTerraform(this._retrospectiveStepId),
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
      position: {
        value: cdktf.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retrospective_process_group_id: {
        value: cdktf.stringToHclTerraform(this._retrospectiveProcessGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retrospective_step_id: {
        value: cdktf.stringToHclTerraform(this._retrospectiveStepId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
