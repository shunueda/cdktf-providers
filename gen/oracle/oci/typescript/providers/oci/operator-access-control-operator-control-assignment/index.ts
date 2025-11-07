// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OperatorAccessControlOperatorControlAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment#comment OperatorAccessControlOperatorControlAssignment#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment#compartment_id OperatorAccessControlOperatorControlAssignment#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment#defined_tags OperatorAccessControlOperatorControlAssignment#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment#freeform_tags OperatorAccessControlOperatorControlAssignment#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment#id OperatorAccessControlOperatorControlAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment#is_auto_approve_during_maintenance OperatorAccessControlOperatorControlAssignment#is_auto_approve_during_maintenance}
  */
  readonly isAutoApproveDuringMaintenance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment#is_enforced_always OperatorAccessControlOperatorControlAssignment#is_enforced_always}
  */
  readonly isEnforcedAlways: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment#is_hypervisor_log_forwarded OperatorAccessControlOperatorControlAssignment#is_hypervisor_log_forwarded}
  */
  readonly isHypervisorLogForwarded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment#is_log_forwarded OperatorAccessControlOperatorControlAssignment#is_log_forwarded}
  */
  readonly isLogForwarded?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment#operator_control_id OperatorAccessControlOperatorControlAssignment#operator_control_id}
  */
  readonly operatorControlId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_address OperatorAccessControlOperatorControlAssignment#remote_syslog_server_address}
  */
  readonly remoteSyslogServerAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_ca_cert OperatorAccessControlOperatorControlAssignment#remote_syslog_server_ca_cert}
  */
  readonly remoteSyslogServerCaCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment#remote_syslog_server_port OperatorAccessControlOperatorControlAssignment#remote_syslog_server_port}
  */
  readonly remoteSyslogServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment#resource_compartment_id OperatorAccessControlOperatorControlAssignment#resource_compartment_id}
  */
  readonly resourceCompartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment#resource_id OperatorAccessControlOperatorControlAssignment#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment#resource_name OperatorAccessControlOperatorControlAssignment#resource_name}
  */
  readonly resourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment#resource_type OperatorAccessControlOperatorControlAssignment#resource_type}
  */
  readonly resourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment#time_assignment_from OperatorAccessControlOperatorControlAssignment#time_assignment_from}
  */
  readonly timeAssignmentFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment#time_assignment_to OperatorAccessControlOperatorControlAssignment#time_assignment_to}
  */
  readonly timeAssignmentTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment#validate_assignment_trigger OperatorAccessControlOperatorControlAssignment#validate_assignment_trigger}
  */
  readonly validateAssignmentTrigger?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment#timeouts OperatorAccessControlOperatorControlAssignment#timeouts}
  */
  readonly timeouts?: OperatorAccessControlOperatorControlAssignmentTimeouts;
}
export interface OperatorAccessControlOperatorControlAssignmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment#create OperatorAccessControlOperatorControlAssignment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment#delete OperatorAccessControlOperatorControlAssignment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment#update OperatorAccessControlOperatorControlAssignment#update}
  */
  readonly update?: string;
}

export function operatorAccessControlOperatorControlAssignmentTimeoutsToTerraform(struct?: OperatorAccessControlOperatorControlAssignmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function operatorAccessControlOperatorControlAssignmentTimeoutsToHclTerraform(struct?: OperatorAccessControlOperatorControlAssignmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OperatorAccessControlOperatorControlAssignmentTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OperatorAccessControlOperatorControlAssignmentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment oci_operator_access_control_operator_control_assignment}
*/
export class OperatorAccessControlOperatorControlAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_operator_access_control_operator_control_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OperatorAccessControlOperatorControlAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OperatorAccessControlOperatorControlAssignment to import
  * @param importFromId The id of the existing OperatorAccessControlOperatorControlAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OperatorAccessControlOperatorControlAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_operator_access_control_operator_control_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/operator_access_control_operator_control_assignment oci_operator_access_control_operator_control_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OperatorAccessControlOperatorControlAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: OperatorAccessControlOperatorControlAssignmentConfig) {
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
    this._comment = config.comment;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isAutoApproveDuringMaintenance = config.isAutoApproveDuringMaintenance;
    this._isEnforcedAlways = config.isEnforcedAlways;
    this._isHypervisorLogForwarded = config.isHypervisorLogForwarded;
    this._isLogForwarded = config.isLogForwarded;
    this._operatorControlId = config.operatorControlId;
    this._remoteSyslogServerAddress = config.remoteSyslogServerAddress;
    this._remoteSyslogServerCaCert = config.remoteSyslogServerCaCert;
    this._remoteSyslogServerPort = config.remoteSyslogServerPort;
    this._resourceCompartmentId = config.resourceCompartmentId;
    this._resourceId = config.resourceId;
    this._resourceName = config.resourceName;
    this._resourceType = config.resourceType;
    this._timeAssignmentFrom = config.timeAssignmentFrom;
    this._timeAssignmentTo = config.timeAssignmentTo;
    this._validateAssignmentTrigger = config.validateAssignmentTrigger;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigner_id - computed: true, optional: false, required: false
  public get assignerId() {
    return this.getStringAttribute('assigner_id');
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // is_auto_approve_during_maintenance - computed: true, optional: true, required: false
  private _isAutoApproveDuringMaintenance?: boolean | cdktf.IResolvable; 
  public get isAutoApproveDuringMaintenance() {
    return this.getBooleanAttribute('is_auto_approve_during_maintenance');
  }
  public set isAutoApproveDuringMaintenance(value: boolean | cdktf.IResolvable) {
    this._isAutoApproveDuringMaintenance = value;
  }
  public resetIsAutoApproveDuringMaintenance() {
    this._isAutoApproveDuringMaintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoApproveDuringMaintenanceInput() {
    return this._isAutoApproveDuringMaintenance;
  }

  // is_default_assignment - computed: true, optional: false, required: false
  public get isDefaultAssignment() {
    return this.getBooleanAttribute('is_default_assignment');
  }

  // is_enforced_always - computed: false, optional: false, required: true
  private _isEnforcedAlways?: boolean | cdktf.IResolvable; 
  public get isEnforcedAlways() {
    return this.getBooleanAttribute('is_enforced_always');
  }
  public set isEnforcedAlways(value: boolean | cdktf.IResolvable) {
    this._isEnforcedAlways = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnforcedAlwaysInput() {
    return this._isEnforcedAlways;
  }

  // is_hypervisor_log_forwarded - computed: true, optional: true, required: false
  private _isHypervisorLogForwarded?: boolean | cdktf.IResolvable; 
  public get isHypervisorLogForwarded() {
    return this.getBooleanAttribute('is_hypervisor_log_forwarded');
  }
  public set isHypervisorLogForwarded(value: boolean | cdktf.IResolvable) {
    this._isHypervisorLogForwarded = value;
  }
  public resetIsHypervisorLogForwarded() {
    this._isHypervisorLogForwarded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHypervisorLogForwardedInput() {
    return this._isHypervisorLogForwarded;
  }

  // is_log_forwarded - computed: true, optional: true, required: false
  private _isLogForwarded?: boolean | cdktf.IResolvable; 
  public get isLogForwarded() {
    return this.getBooleanAttribute('is_log_forwarded');
  }
  public set isLogForwarded(value: boolean | cdktf.IResolvable) {
    this._isLogForwarded = value;
  }
  public resetIsLogForwarded() {
    this._isLogForwarded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLogForwardedInput() {
    return this._isLogForwarded;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // op_control_name - computed: true, optional: false, required: false
  public get opControlName() {
    return this.getStringAttribute('op_control_name');
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

  // remote_syslog_server_address - computed: true, optional: true, required: false
  private _remoteSyslogServerAddress?: string; 
  public get remoteSyslogServerAddress() {
    return this.getStringAttribute('remote_syslog_server_address');
  }
  public set remoteSyslogServerAddress(value: string) {
    this._remoteSyslogServerAddress = value;
  }
  public resetRemoteSyslogServerAddress() {
    this._remoteSyslogServerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSyslogServerAddressInput() {
    return this._remoteSyslogServerAddress;
  }

  // remote_syslog_server_ca_cert - computed: true, optional: true, required: false
  private _remoteSyslogServerCaCert?: string; 
  public get remoteSyslogServerCaCert() {
    return this.getStringAttribute('remote_syslog_server_ca_cert');
  }
  public set remoteSyslogServerCaCert(value: string) {
    this._remoteSyslogServerCaCert = value;
  }
  public resetRemoteSyslogServerCaCert() {
    this._remoteSyslogServerCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSyslogServerCaCertInput() {
    return this._remoteSyslogServerCaCert;
  }

  // remote_syslog_server_port - computed: true, optional: true, required: false
  private _remoteSyslogServerPort?: number; 
  public get remoteSyslogServerPort() {
    return this.getNumberAttribute('remote_syslog_server_port');
  }
  public set remoteSyslogServerPort(value: number) {
    this._remoteSyslogServerPort = value;
  }
  public resetRemoteSyslogServerPort() {
    this._remoteSyslogServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSyslogServerPortInput() {
    return this._remoteSyslogServerPort;
  }

  // resource_compartment_id - computed: false, optional: false, required: true
  private _resourceCompartmentId?: string; 
  public get resourceCompartmentId() {
    return this.getStringAttribute('resource_compartment_id');
  }
  public set resourceCompartmentId(value: string) {
    this._resourceCompartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceCompartmentIdInput() {
    return this._resourceCompartmentId;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_assignment_from - computed: true, optional: true, required: false
  private _timeAssignmentFrom?: string; 
  public get timeAssignmentFrom() {
    return this.getStringAttribute('time_assignment_from');
  }
  public set timeAssignmentFrom(value: string) {
    this._timeAssignmentFrom = value;
  }
  public resetTimeAssignmentFrom() {
    this._timeAssignmentFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAssignmentFromInput() {
    return this._timeAssignmentFrom;
  }

  // time_assignment_to - computed: true, optional: true, required: false
  private _timeAssignmentTo?: string; 
  public get timeAssignmentTo() {
    return this.getStringAttribute('time_assignment_to');
  }
  public set timeAssignmentTo(value: string) {
    this._timeAssignmentTo = value;
  }
  public resetTimeAssignmentTo() {
    this._timeAssignmentTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAssignmentToInput() {
    return this._timeAssignmentTo;
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

  // validate_assignment_trigger - computed: false, optional: true, required: false
  private _validateAssignmentTrigger?: number; 
  public get validateAssignmentTrigger() {
    return this.getNumberAttribute('validate_assignment_trigger');
  }
  public set validateAssignmentTrigger(value: number) {
    this._validateAssignmentTrigger = value;
  }
  public resetValidateAssignmentTrigger() {
    this._validateAssignmentTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateAssignmentTriggerInput() {
    return this._validateAssignmentTrigger;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OperatorAccessControlOperatorControlAssignmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OperatorAccessControlOperatorControlAssignmentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_auto_approve_during_maintenance: cdktf.booleanToTerraform(this._isAutoApproveDuringMaintenance),
      is_enforced_always: cdktf.booleanToTerraform(this._isEnforcedAlways),
      is_hypervisor_log_forwarded: cdktf.booleanToTerraform(this._isHypervisorLogForwarded),
      is_log_forwarded: cdktf.booleanToTerraform(this._isLogForwarded),
      operator_control_id: cdktf.stringToTerraform(this._operatorControlId),
      remote_syslog_server_address: cdktf.stringToTerraform(this._remoteSyslogServerAddress),
      remote_syslog_server_ca_cert: cdktf.stringToTerraform(this._remoteSyslogServerCaCert),
      remote_syslog_server_port: cdktf.numberToTerraform(this._remoteSyslogServerPort),
      resource_compartment_id: cdktf.stringToTerraform(this._resourceCompartmentId),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      resource_name: cdktf.stringToTerraform(this._resourceName),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      time_assignment_from: cdktf.stringToTerraform(this._timeAssignmentFrom),
      time_assignment_to: cdktf.stringToTerraform(this._timeAssignmentTo),
      validate_assignment_trigger: cdktf.numberToTerraform(this._validateAssignmentTrigger),
      timeouts: operatorAccessControlOperatorControlAssignmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_auto_approve_during_maintenance: {
        value: cdktf.booleanToHclTerraform(this._isAutoApproveDuringMaintenance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_enforced_always: {
        value: cdktf.booleanToHclTerraform(this._isEnforcedAlways),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_hypervisor_log_forwarded: {
        value: cdktf.booleanToHclTerraform(this._isHypervisorLogForwarded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_log_forwarded: {
        value: cdktf.booleanToHclTerraform(this._isLogForwarded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      operator_control_id: {
        value: cdktf.stringToHclTerraform(this._operatorControlId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_syslog_server_address: {
        value: cdktf.stringToHclTerraform(this._remoteSyslogServerAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_syslog_server_ca_cert: {
        value: cdktf.stringToHclTerraform(this._remoteSyslogServerCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_syslog_server_port: {
        value: cdktf.numberToHclTerraform(this._remoteSyslogServerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_compartment_id: {
        value: cdktf.stringToHclTerraform(this._resourceCompartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_name: {
        value: cdktf.stringToHclTerraform(this._resourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_assignment_from: {
        value: cdktf.stringToHclTerraform(this._timeAssignmentFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_assignment_to: {
        value: cdktf.stringToHclTerraform(this._timeAssignmentTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate_assignment_trigger: {
        value: cdktf.numberToHclTerraform(this._validateAssignmentTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: operatorAccessControlOperatorControlAssignmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OperatorAccessControlOperatorControlAssignmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
