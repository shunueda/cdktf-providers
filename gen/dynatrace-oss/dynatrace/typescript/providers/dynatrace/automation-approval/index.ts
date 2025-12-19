// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/automation_approval
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationApprovalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/automation_approval#id AutomationApproval#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Allow on tenant level anyone with access to the app can respond to requests via an approval link.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/automation_approval#workflow_app_access_approval_enabled AutomationApproval#workflow_app_access_approval_enabled}
  */
  readonly workflowAppAccessApprovalEnabled: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/automation_approval dynatrace_automation_approval}
*/
export class AutomationApproval extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_automation_approval";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutomationApproval resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutomationApproval to import
  * @param importFromId The id of the existing AutomationApproval that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/automation_approval#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutomationApproval to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_automation_approval", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/automation_approval dynatrace_automation_approval} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationApprovalConfig
  */
  public constructor(scope: Construct, id: string, config: AutomationApprovalConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_automation_approval',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
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
    this._workflowAppAccessApprovalEnabled = config.workflowAppAccessApprovalEnabled;
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

  // workflow_app_access_approval_enabled - computed: false, optional: false, required: true
  private _workflowAppAccessApprovalEnabled?: boolean | cdktf.IResolvable; 
  public get workflowAppAccessApprovalEnabled() {
    return this.getBooleanAttribute('workflow_app_access_approval_enabled');
  }
  public set workflowAppAccessApprovalEnabled(value: boolean | cdktf.IResolvable) {
    this._workflowAppAccessApprovalEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowAppAccessApprovalEnabledInput() {
    return this._workflowAppAccessApprovalEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      workflow_app_access_approval_enabled: cdktf.booleanToTerraform(this._workflowAppAccessApprovalEnabled),
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
      workflow_app_access_approval_enabled: {
        value: cdktf.booleanToHclTerraform(this._workflowAppAccessApprovalEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
