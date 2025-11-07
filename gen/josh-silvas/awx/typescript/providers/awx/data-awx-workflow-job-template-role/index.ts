// https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/data-sources/workflow_job_template_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwxWorkflowJobTemplateRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/data-sources/workflow_job_template_role#id DataAwxWorkflowJobTemplateRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * The name of the role
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/data-sources/workflow_job_template_role#name DataAwxWorkflowJobTemplateRole#name}
  */
  readonly name?: string;
  /**
  * The ID of the workflow job template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/data-sources/workflow_job_template_role#workflow_job_template_id DataAwxWorkflowJobTemplateRole#workflow_job_template_id}
  */
  readonly workflowJobTemplateId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/data-sources/workflow_job_template_role awx_workflow_job_template_role}
*/
export class DataAwxWorkflowJobTemplateRole extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awx_workflow_job_template_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwxWorkflowJobTemplateRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwxWorkflowJobTemplateRole to import
  * @param importFromId The id of the existing DataAwxWorkflowJobTemplateRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/data-sources/workflow_job_template_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwxWorkflowJobTemplateRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awx_workflow_job_template_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/data-sources/workflow_job_template_role awx_workflow_job_template_role} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwxWorkflowJobTemplateRoleConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwxWorkflowJobTemplateRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'awx_workflow_job_template_role',
      terraformGeneratorMetadata: {
        providerName: 'awx',
        providerVersion: '1.7.5'
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
    this._name = config.name;
    this._workflowJobTemplateId = config.workflowJobTemplateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // workflow_job_template_id - computed: false, optional: false, required: true
  private _workflowJobTemplateId?: number; 
  public get workflowJobTemplateId() {
    return this.getNumberAttribute('workflow_job_template_id');
  }
  public set workflowJobTemplateId(value: number) {
    this._workflowJobTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowJobTemplateIdInput() {
    return this._workflowJobTemplateId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      workflow_job_template_id: cdktf.numberToTerraform(this._workflowJobTemplateId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workflow_job_template_id: {
        value: cdktf.numberToHclTerraform(this._workflowJobTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
