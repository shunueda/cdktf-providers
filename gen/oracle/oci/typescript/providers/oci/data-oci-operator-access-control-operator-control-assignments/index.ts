// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/operator_access_control_operator_control_assignments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOperatorAccessControlOperatorControlAssignmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/operator_access_control_operator_control_assignments#compartment_id DataOciOperatorAccessControlOperatorControlAssignments#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/operator_access_control_operator_control_assignments#id DataOciOperatorAccessControlOperatorControlAssignments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/operator_access_control_operator_control_assignments#operator_control_name DataOciOperatorAccessControlOperatorControlAssignments#operator_control_name}
  */
  readonly operatorControlName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/operator_access_control_operator_control_assignments#resource_name DataOciOperatorAccessControlOperatorControlAssignments#resource_name}
  */
  readonly resourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/operator_access_control_operator_control_assignments#resource_type DataOciOperatorAccessControlOperatorControlAssignments#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/operator_access_control_operator_control_assignments#state DataOciOperatorAccessControlOperatorControlAssignments#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/operator_access_control_operator_control_assignments#filter DataOciOperatorAccessControlOperatorControlAssignments#filter}
  */
  readonly filter?: DataOciOperatorAccessControlOperatorControlAssignmentsFilter[] | cdktf.IResolvable;
}
export interface DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems {
}

export function dataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsToTerraform(struct?: DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsToHclTerraform(struct?: DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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
}

export class DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference {
    return new DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection {
}

export function dataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionToTerraform(struct?: DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionToHclTerraform(struct?: DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference {
    return new DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOperatorAccessControlOperatorControlAssignmentsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/operator_access_control_operator_control_assignments#name DataOciOperatorAccessControlOperatorControlAssignments#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/operator_access_control_operator_control_assignments#regex DataOciOperatorAccessControlOperatorControlAssignments#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/operator_access_control_operator_control_assignments#values DataOciOperatorAccessControlOperatorControlAssignments#values}
  */
  readonly values: string[];
}

export function dataOciOperatorAccessControlOperatorControlAssignmentsFilterToTerraform(struct?: DataOciOperatorAccessControlOperatorControlAssignmentsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciOperatorAccessControlOperatorControlAssignmentsFilterToHclTerraform(struct?: DataOciOperatorAccessControlOperatorControlAssignmentsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciOperatorAccessControlOperatorControlAssignmentsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOperatorAccessControlOperatorControlAssignmentsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciOperatorAccessControlOperatorControlAssignmentsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciOperatorAccessControlOperatorControlAssignmentsFilter[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference {
    return new DataOciOperatorAccessControlOperatorControlAssignmentsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/operator_access_control_operator_control_assignments oci_operator_access_control_operator_control_assignments}
*/
export class DataOciOperatorAccessControlOperatorControlAssignments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_operator_access_control_operator_control_assignments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOperatorAccessControlOperatorControlAssignments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOperatorAccessControlOperatorControlAssignments to import
  * @param importFromId The id of the existing DataOciOperatorAccessControlOperatorControlAssignments that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/operator_access_control_operator_control_assignments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOperatorAccessControlOperatorControlAssignments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_operator_access_control_operator_control_assignments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/operator_access_control_operator_control_assignments oci_operator_access_control_operator_control_assignments} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOperatorAccessControlOperatorControlAssignmentsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOperatorAccessControlOperatorControlAssignmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_operator_access_control_operator_control_assignments',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._operatorControlName = config.operatorControlName;
    this._resourceName = config.resourceName;
    this._resourceType = config.resourceType;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // operator_control_assignment_collection - computed: true, optional: false, required: false
  private _operatorControlAssignmentCollection = new DataOciOperatorAccessControlOperatorControlAssignmentsOperatorControlAssignmentCollectionList(this, "operator_control_assignment_collection", false);
  public get operatorControlAssignmentCollection() {
    return this._operatorControlAssignmentCollection;
  }

  // operator_control_name - computed: false, optional: true, required: false
  private _operatorControlName?: string; 
  public get operatorControlName() {
    return this.getStringAttribute('operator_control_name');
  }
  public set operatorControlName(value: string) {
    this._operatorControlName = value;
  }
  public resetOperatorControlName() {
    this._operatorControlName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorControlNameInput() {
    return this._operatorControlName;
  }

  // resource_name - computed: false, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciOperatorAccessControlOperatorControlAssignmentsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciOperatorAccessControlOperatorControlAssignmentsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      operator_control_name: cdktf.stringToTerraform(this._operatorControlName),
      resource_name: cdktf.stringToTerraform(this._resourceName),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciOperatorAccessControlOperatorControlAssignmentsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
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
      operator_control_name: {
        value: cdktf.stringToHclTerraform(this._operatorControlName),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciOperatorAccessControlOperatorControlAssignmentsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciOperatorAccessControlOperatorControlAssignmentsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
