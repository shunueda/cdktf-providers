// https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowJobTemplateNodeLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_link#id WorkflowJobTemplateNodeLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the awx_workflow_job_template_node to which the link is arriving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_link#next_node_id WorkflowJobTemplateNodeLink#next_node_id}
  */
  readonly nextNodeId: number;
  /**
  * ID of the awx_workflow_job_template_node from which the link is starting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_link#origin_node_id WorkflowJobTemplateNodeLink#origin_node_id}
  */
  readonly originNodeId: number;
  /**
  * The type of the link between 'origin_node_id' and 'next_node_id'. One of "success", "failure", "always"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_link#type WorkflowJobTemplateNodeLink#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_link awx_workflow_job_template_node_link}
*/
export class WorkflowJobTemplateNodeLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awx_workflow_job_template_node_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowJobTemplateNodeLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowJobTemplateNodeLink to import
  * @param importFromId The id of the existing WorkflowJobTemplateNodeLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowJobTemplateNodeLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awx_workflow_job_template_node_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_node_link awx_workflow_job_template_node_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowJobTemplateNodeLinkConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowJobTemplateNodeLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'awx_workflow_job_template_node_link',
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
    this._nextNodeId = config.nextNodeId;
    this._originNodeId = config.originNodeId;
    this._type = config.type;
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

  // next_node_id - computed: false, optional: false, required: true
  private _nextNodeId?: number; 
  public get nextNodeId() {
    return this.getNumberAttribute('next_node_id');
  }
  public set nextNodeId(value: number) {
    this._nextNodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextNodeIdInput() {
    return this._nextNodeId;
  }

  // origin_node_id - computed: false, optional: false, required: true
  private _originNodeId?: number; 
  public get originNodeId() {
    return this.getNumberAttribute('origin_node_id');
  }
  public set originNodeId(value: number) {
    this._originNodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originNodeIdInput() {
    return this._originNodeId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      next_node_id: cdktf.numberToTerraform(this._nextNodeId),
      origin_node_id: cdktf.numberToTerraform(this._originNodeId),
      type: cdktf.stringToTerraform(this._type),
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
      next_node_id: {
        value: cdktf.numberToHclTerraform(this._nextNodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      origin_node_id: {
        value: cdktf.numberToHclTerraform(this._originNodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
