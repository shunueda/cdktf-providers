// https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/data-sources/retrospective_process_group_step
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRootlyRetrospectiveProcessGroupStepConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/data-sources/retrospective_process_group_step#retrospective_step_id DataRootlyRetrospectiveProcessGroupStep#retrospective_step_id}
  */
  readonly retrospectiveStepId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/data-sources/retrospective_process_group_step rootly_retrospective_process_group_step}
*/
export class DataRootlyRetrospectiveProcessGroupStep extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_retrospective_process_group_step";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRootlyRetrospectiveProcessGroupStep resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRootlyRetrospectiveProcessGroupStep to import
  * @param importFromId The id of the existing DataRootlyRetrospectiveProcessGroupStep that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/data-sources/retrospective_process_group_step#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRootlyRetrospectiveProcessGroupStep to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_retrospective_process_group_step", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/data-sources/retrospective_process_group_step rootly_retrospective_process_group_step} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRootlyRetrospectiveProcessGroupStepConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRootlyRetrospectiveProcessGroupStepConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rootly_retrospective_process_group_step',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.2.1',
        providerVersionConstraint: '5.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._retrospectiveStepId = config.retrospectiveStepId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // retrospective_step_id - computed: true, optional: true, required: false
  private _retrospectiveStepId?: string; 
  public get retrospectiveStepId() {
    return this.getStringAttribute('retrospective_step_id');
  }
  public set retrospectiveStepId(value: string) {
    this._retrospectiveStepId = value;
  }
  public resetRetrospectiveStepId() {
    this._retrospectiveStepId = undefined;
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
      retrospective_step_id: cdktf.stringToTerraform(this._retrospectiveStepId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
