// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_operator_control_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOperatorAccessControlOperatorControlAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_operator_control_assignment#operator_control_assignment_id DataOciOperatorAccessControlOperatorControlAssignment#operator_control_assignment_id}
  */
  readonly operatorControlAssignmentId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_operator_control_assignment oci_operator_access_control_operator_control_assignment}
*/
export class DataOciOperatorAccessControlOperatorControlAssignment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_operator_access_control_operator_control_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOperatorAccessControlOperatorControlAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOperatorAccessControlOperatorControlAssignment to import
  * @param importFromId The id of the existing DataOciOperatorAccessControlOperatorControlAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_operator_control_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOperatorAccessControlOperatorControlAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_operator_access_control_operator_control_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_operator_control_assignment oci_operator_access_control_operator_control_assignment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOperatorAccessControlOperatorControlAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOperatorAccessControlOperatorControlAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_operator_access_control_operator_control_assignment',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._operatorControlAssignmentId = config.operatorControlAssignmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigner_id - computed: true, optional: false, required: false
  public get assignerId() {
    return this.getStringAttribute('assigner_id');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
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

  // detachment_description - computed: true, optional: false, required: false
  public get detachmentDescription() {
    return this.getStringAttribute('detachment_description');
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getNumberAttribute('error_code');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
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

  // is_auto_approve_during_maintenance - computed: true, optional: false, required: false
  public get isAutoApproveDuringMaintenance() {
    return this.getBooleanAttribute('is_auto_approve_during_maintenance');
  }

  // is_default_assignment - computed: true, optional: false, required: false
  public get isDefaultAssignment() {
    return this.getBooleanAttribute('is_default_assignment');
  }

  // is_enforced_always - computed: true, optional: false, required: false
  public get isEnforcedAlways() {
    return this.getBooleanAttribute('is_enforced_always');
  }

  // is_hypervisor_log_forwarded - computed: true, optional: false, required: false
  public get isHypervisorLogForwarded() {
    return this.getBooleanAttribute('is_hypervisor_log_forwarded');
  }

  // is_log_forwarded - computed: true, optional: false, required: false
  public get isLogForwarded() {
    return this.getBooleanAttribute('is_log_forwarded');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // op_control_name - computed: true, optional: false, required: false
  public get opControlName() {
    return this.getStringAttribute('op_control_name');
  }

  // operator_control_assignment_id - computed: false, optional: false, required: true
  private _operatorControlAssignmentId?: string; 
  public get operatorControlAssignmentId() {
    return this.getStringAttribute('operator_control_assignment_id');
  }
  public set operatorControlAssignmentId(value: string) {
    this._operatorControlAssignmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorControlAssignmentIdInput() {
    return this._operatorControlAssignmentId;
  }

  // operator_control_id - computed: true, optional: false, required: false
  public get operatorControlId() {
    return this.getStringAttribute('operator_control_id');
  }

  // remote_syslog_server_address - computed: true, optional: false, required: false
  public get remoteSyslogServerAddress() {
    return this.getStringAttribute('remote_syslog_server_address');
  }

  // remote_syslog_server_ca_cert - computed: true, optional: false, required: false
  public get remoteSyslogServerCaCert() {
    return this.getStringAttribute('remote_syslog_server_ca_cert');
  }

  // remote_syslog_server_port - computed: true, optional: false, required: false
  public get remoteSyslogServerPort() {
    return this.getNumberAttribute('remote_syslog_server_port');
  }

  // resource_compartment_id - computed: true, optional: false, required: false
  public get resourceCompartmentId() {
    return this.getStringAttribute('resource_compartment_id');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_assignment_from - computed: true, optional: false, required: false
  public get timeAssignmentFrom() {
    return this.getStringAttribute('time_assignment_from');
  }

  // time_assignment_to - computed: true, optional: false, required: false
  public get timeAssignmentTo() {
    return this.getStringAttribute('time_assignment_to');
  }

  // time_of_assignment - computed: true, optional: false, required: false
  public get timeOfAssignment() {
    return this.getStringAttribute('time_of_assignment');
  }

  // time_of_deletion - computed: true, optional: false, required: false
  public get timeOfDeletion() {
    return this.getStringAttribute('time_of_deletion');
  }

  // unassigner_id - computed: true, optional: false, required: false
  public get unassignerId() {
    return this.getStringAttribute('unassigner_id');
  }

  // validate_assignment_trigger - computed: true, optional: false, required: false
  public get validateAssignmentTrigger() {
    return this.getNumberAttribute('validate_assignment_trigger');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      operator_control_assignment_id: cdktf.stringToTerraform(this._operatorControlAssignmentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      operator_control_assignment_id: {
        value: cdktf.stringToHclTerraform(this._operatorControlAssignmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
