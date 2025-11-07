// https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_notification_template_approvals
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowJobTemplateNotificationTemplateApprovalsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_notification_template_approvals#id WorkflowJobTemplateNotificationTemplateApprovals#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the notification template to associate with the workflow job template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_notification_template_approvals#notification_template_id WorkflowJobTemplateNotificationTemplateApprovals#notification_template_id}
  */
  readonly notificationTemplateId: number;
  /**
  * The ID of the workflow job template to associate the notification template with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_notification_template_approvals#workflow_job_template_id WorkflowJobTemplateNotificationTemplateApprovals#workflow_job_template_id}
  */
  readonly workflowJobTemplateId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_notification_template_approvals awx_workflow_job_template_notification_template_approvals}
*/
export class WorkflowJobTemplateNotificationTemplateApprovals extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awx_workflow_job_template_notification_template_approvals";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowJobTemplateNotificationTemplateApprovals resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowJobTemplateNotificationTemplateApprovals to import
  * @param importFromId The id of the existing WorkflowJobTemplateNotificationTemplateApprovals that should be imported. Refer to the {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_notification_template_approvals#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowJobTemplateNotificationTemplateApprovals to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awx_workflow_job_template_notification_template_approvals", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/josh-silvas/awx/1.7.5/docs/resources/workflow_job_template_notification_template_approvals awx_workflow_job_template_notification_template_approvals} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowJobTemplateNotificationTemplateApprovalsConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowJobTemplateNotificationTemplateApprovalsConfig) {
    super(scope, id, {
      terraformResourceType: 'awx_workflow_job_template_notification_template_approvals',
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
    this._notificationTemplateId = config.notificationTemplateId;
    this._workflowJobTemplateId = config.workflowJobTemplateId;
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

  // notification_template_id - computed: false, optional: false, required: true
  private _notificationTemplateId?: number; 
  public get notificationTemplateId() {
    return this.getNumberAttribute('notification_template_id');
  }
  public set notificationTemplateId(value: number) {
    this._notificationTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTemplateIdInput() {
    return this._notificationTemplateId;
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
      id: cdktf.stringToTerraform(this._id),
      notification_template_id: cdktf.numberToTerraform(this._notificationTemplateId),
      workflow_job_template_id: cdktf.numberToTerraform(this._workflowJobTemplateId),
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
      notification_template_id: {
        value: cdktf.numberToHclTerraform(this._notificationTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
