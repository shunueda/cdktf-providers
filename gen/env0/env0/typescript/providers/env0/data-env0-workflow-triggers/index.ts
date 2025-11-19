// https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/workflow_triggers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEnv0WorkflowTriggersConfig extends cdktf.TerraformMetaArguments {
  /**
  * id of the source environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/workflow_triggers#environment_id DataEnv0WorkflowTriggers#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/workflow_triggers#id DataEnv0WorkflowTriggers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/workflow_triggers env0_workflow_triggers}
*/
export class DataEnv0WorkflowTriggers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "env0_workflow_triggers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEnv0WorkflowTriggers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEnv0WorkflowTriggers to import
  * @param importFromId The id of the existing DataEnv0WorkflowTriggers that should be imported. Refer to the {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/workflow_triggers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEnv0WorkflowTriggers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "env0_workflow_triggers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/env0/env0/1.29.7/docs/data-sources/workflow_triggers env0_workflow_triggers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEnv0WorkflowTriggersConfig
  */
  public constructor(scope: Construct, id: string, config: DataEnv0WorkflowTriggersConfig) {
    super(scope, id, {
      terraformResourceType: 'env0_workflow_triggers',
      terraformGeneratorMetadata: {
        providerName: 'env0',
        providerVersion: '1.29.7',
        providerVersionConstraint: '1.29.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentId = config.environmentId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // downstream_environment_ids - computed: true, optional: false, required: false
  public get downstreamEnvironmentIds() {
    return this.getListAttribute('downstream_environment_ids');
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: false, optional: true, required: false
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
      environment_id: cdktf.stringToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
