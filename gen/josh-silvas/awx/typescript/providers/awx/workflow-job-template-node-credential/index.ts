// https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowJobTemplateNodeCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the credential to associate with the job template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_credential#credential_id WorkflowJobTemplateNodeCredential#credential_id}
  */
  readonly credentialId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_credential#id WorkflowJobTemplateNodeCredential#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the job template to associate the credential with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_credential#workflow_job_template_node_id WorkflowJobTemplateNodeCredential#workflow_job_template_node_id}
  */
  readonly workflowJobTemplateNodeId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_credential awx_workflow_job_template_node_credential}
*/
export class WorkflowJobTemplateNodeCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awx_workflow_job_template_node_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowJobTemplateNodeCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowJobTemplateNodeCredential to import
  * @param importFromId The id of the existing WorkflowJobTemplateNodeCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowJobTemplateNodeCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awx_workflow_job_template_node_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_credential awx_workflow_job_template_node_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowJobTemplateNodeCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowJobTemplateNodeCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'awx_workflow_job_template_node_credential',
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
    this._credentialId = config.credentialId;
    this._id = config.id;
    this._workflowJobTemplateNodeId = config.workflowJobTemplateNodeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credential_id - computed: false, optional: false, required: true
  private _credentialId?: number; 
  public get credentialId() {
    return this.getNumberAttribute('credential_id');
  }
  public set credentialId(value: number) {
    this._credentialId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialIdInput() {
    return this._credentialId;
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

  // workflow_job_template_node_id - computed: false, optional: false, required: true
  private _workflowJobTemplateNodeId?: number; 
  public get workflowJobTemplateNodeId() {
    return this.getNumberAttribute('workflow_job_template_node_id');
  }
  public set workflowJobTemplateNodeId(value: number) {
    this._workflowJobTemplateNodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowJobTemplateNodeIdInput() {
    return this._workflowJobTemplateNodeId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credential_id: cdktf.numberToTerraform(this._credentialId),
      id: cdktf.stringToTerraform(this._id),
      workflow_job_template_node_id: cdktf.numberToTerraform(this._workflowJobTemplateNodeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credential_id: {
        value: cdktf.numberToHclTerraform(this._credentialId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workflow_job_template_node_id: {
        value: cdktf.numberToHclTerraform(this._workflowJobTemplateNodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
