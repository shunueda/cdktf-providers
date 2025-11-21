// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/operator_access_control_operator_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOperatorAccessControlOperatorControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/operator_access_control_operator_control#operator_control_id DataOciOperatorAccessControlOperatorControl#operator_control_id}
  */
  readonly operatorControlId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/operator_access_control_operator_control oci_operator_access_control_operator_control}
*/
export class DataOciOperatorAccessControlOperatorControl extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_operator_access_control_operator_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOperatorAccessControlOperatorControl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOperatorAccessControlOperatorControl to import
  * @param importFromId The id of the existing DataOciOperatorAccessControlOperatorControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/operator_access_control_operator_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOperatorAccessControlOperatorControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_operator_access_control_operator_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/operator_access_control_operator_control oci_operator_access_control_operator_control} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOperatorAccessControlOperatorControlConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOperatorAccessControlOperatorControlConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_operator_access_control_operator_control',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._operatorControlId = config.operatorControlId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approval_required_op_action_list - computed: true, optional: false, required: false
  public get approvalRequiredOpActionList() {
    return this.getListAttribute('approval_required_op_action_list');
  }

  // approver_groups_list - computed: true, optional: false, required: false
  public get approverGroupsList() {
    return this.getListAttribute('approver_groups_list');
  }

  // approvers_list - computed: true, optional: false, required: false
  public get approversList() {
    return this.getListAttribute('approvers_list');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // email_id_list - computed: true, optional: false, required: false
  public get emailIdList() {
    return this.getListAttribute('email_id_list');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default_operator_control - computed: true, optional: false, required: false
  public get isDefaultOperatorControl() {
    return this.getBooleanAttribute('is_default_operator_control');
  }

  // is_fully_pre_approved - computed: true, optional: false, required: false
  public get isFullyPreApproved() {
    return this.getBooleanAttribute('is_fully_pre_approved');
  }

  // last_modified_info - computed: true, optional: false, required: false
  public get lastModifiedInfo() {
    return this.getStringAttribute('last_modified_info');
  }

  // number_of_approvers - computed: true, optional: false, required: false
  public get numberOfApprovers() {
    return this.getNumberAttribute('number_of_approvers');
  }

  // operator_control_id - computed: false, optional: false, required: true
  private _operatorControlId?: string; 
  public get operatorControlId() {
    return this.getStringAttribute('operator_control_id');
  }
  public set operatorControlId(value: string) {
    this._operatorControlId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorControlIdInput() {
    return this._operatorControlId;
  }

  // operator_control_name - computed: true, optional: false, required: false
  public get operatorControlName() {
    return this.getStringAttribute('operator_control_name');
  }

  // pre_approved_op_action_list - computed: true, optional: false, required: false
  public get preApprovedOpActionList() {
    return this.getListAttribute('pre_approved_op_action_list');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_message - computed: true, optional: false, required: false
  public get systemMessage() {
    return this.getStringAttribute('system_message');
  }

  // time_of_creation - computed: true, optional: false, required: false
  public get timeOfCreation() {
    return this.getStringAttribute('time_of_creation');
  }

  // time_of_deletion - computed: true, optional: false, required: false
  public get timeOfDeletion() {
    return this.getStringAttribute('time_of_deletion');
  }

  // time_of_modification - computed: true, optional: false, required: false
  public get timeOfModification() {
    return this.getStringAttribute('time_of_modification');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      operator_control_id: cdktf.stringToTerraform(this._operatorControlId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      operator_control_id: {
        value: cdktf.stringToHclTerraform(this._operatorControlId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
