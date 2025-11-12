// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerflexResourceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#filter DataPowerflexResourceGroup#filter}
  */
  readonly filter?: DataPowerflexResourceGroupFilter;
}
export interface DataPowerflexResourceGroupResourceGroupDetailsAssignedUsers {
}

export function dataPowerflexResourceGroupResourceGroupDetailsAssignedUsersToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsAssignedUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsAssignedUsersToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsAssignedUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsAssignedUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsAssignedUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsAssignedUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // group_dn - computed: true, optional: false, required: false
  public get groupDn() {
    return this.getStringAttribute('group_dn');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // phone_number - computed: true, optional: false, required: false
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.getListAttribute('roles');
  }

  // system_user - computed: true, optional: false, required: false
  public get systemUser() {
    return this.getBooleanAttribute('system_user');
  }

  // update_password - computed: true, optional: false, required: false
  public get updatePassword() {
    return this.getBooleanAttribute('update_password');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // user_preference - computed: true, optional: false, required: false
  public get userPreference() {
    return this.getStringAttribute('user_preference');
  }

  // user_seq_id - computed: true, optional: false, required: false
  public get userSeqId() {
    return this.getNumberAttribute('user_seq_id');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsAssignedUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsAssignedUsersOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsAssignedUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsDeploymentDevice {
}

export function dataPowerflexResourceGroupResourceGroupDetailsDeploymentDeviceToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsDeploymentDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsDeploymentDeviceToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsDeploymentDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsDeploymentDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsDeploymentDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsDeploymentDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // brownfield - computed: true, optional: false, required: false
  public get brownfield() {
    return this.getBooleanAttribute('brownfield');
  }

  // brownfield_status - computed: true, optional: false, required: false
  public get brownfieldStatus() {
    return this.getStringAttribute('brownfield_status');
  }

  // cloud_link - computed: true, optional: false, required: false
  public get cloudLink() {
    return this.getBooleanAttribute('cloud_link');
  }

  // compliant_state - computed: true, optional: false, required: false
  public get compliantState() {
    return this.getStringAttribute('compliant_state');
  }

  // component_id - computed: true, optional: false, required: false
  public get componentId() {
    return this.getStringAttribute('component_id');
  }

  // current_ip_address - computed: true, optional: false, required: false
  public get currentIpAddress() {
    return this.getStringAttribute('current_ip_address');
  }

  // das_cache - computed: true, optional: false, required: false
  public get dasCache() {
    return this.getBooleanAttribute('das_cache');
  }

  // device_group_name - computed: true, optional: false, required: false
  public get deviceGroupName() {
    return this.getStringAttribute('device_group_name');
  }

  // device_health - computed: true, optional: false, required: false
  public get deviceHealth() {
    return this.getStringAttribute('device_health');
  }

  // device_state - computed: true, optional: false, required: false
  public get deviceState() {
    return this.getStringAttribute('device_state');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // health_message - computed: true, optional: false, required: false
  public get healthMessage() {
    return this.getStringAttribute('health_message');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // log_dump - computed: true, optional: false, required: false
  public get logDump() {
    return this.getStringAttribute('log_dump');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // puppet_cert_name - computed: true, optional: false, required: false
  public get puppetCertName() {
    return this.getStringAttribute('puppet_cert_name');
  }

  // ref_id - computed: true, optional: false, required: false
  public get refId() {
    return this.getStringAttribute('ref_id');
  }

  // ref_type - computed: true, optional: false, required: false
  public get refType() {
    return this.getStringAttribute('ref_type');
  }

  // service_tag - computed: true, optional: false, required: false
  public get serviceTag() {
    return this.getStringAttribute('service_tag');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_end_time - computed: true, optional: false, required: false
  public get statusEndTime() {
    return this.getStringAttribute('status_end_time');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // status_start_time - computed: true, optional: false, required: false
  public get statusStartTime() {
    return this.getStringAttribute('status_start_time');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsDeploymentDeviceList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsDeploymentDeviceOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsDeploymentDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsDeploymentValidMessages {
}

export function dataPowerflexResourceGroupResourceGroupDetailsDeploymentValidMessagesToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsDeploymentValidMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsDeploymentValidMessagesToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsDeploymentValidMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsDeploymentValidMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsDeploymentValidMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsDeploymentValidMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // correlation_id - computed: true, optional: false, required: false
  public get correlationId() {
    return this.getStringAttribute('correlation_id');
  }

  // detailed_message - computed: true, optional: false, required: false
  public get detailedMessage() {
    return this.getStringAttribute('detailed_message');
  }

  // display_message - computed: true, optional: false, required: false
  public get displayMessage() {
    return this.getStringAttribute('display_message');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message_bundle - computed: true, optional: false, required: false
  public get messageBundle() {
    return this.getStringAttribute('message_bundle');
  }

  // message_code - computed: true, optional: false, required: false
  public get messageCode() {
    return this.getStringAttribute('message_code');
  }

  // response_action - computed: true, optional: false, required: false
  public get responseAction() {
    return this.getStringAttribute('response_action');
  }

  // sequence_number - computed: true, optional: false, required: false
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // time_stamp - computed: true, optional: false, required: false
  public get timeStamp() {
    return this.getStringAttribute('time_stamp');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsDeploymentValidMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsDeploymentValidMessagesOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsDeploymentValidMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsDeploymentValid {
}

export function dataPowerflexResourceGroupResourceGroupDetailsDeploymentValidToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsDeploymentValid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsDeploymentValidToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsDeploymentValid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsDeploymentValidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsDeploymentValid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsDeploymentValid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // messages - computed: true, optional: false, required: false
  private _messages = new DataPowerflexResourceGroupResourceGroupDetailsDeploymentValidMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }

  // valid - computed: true, optional: false, required: false
  public get valid() {
    return this.getBooleanAttribute('valid');
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsDeploymentValidationResponse {
}

export function dataPowerflexResourceGroupResourceGroupDetailsDeploymentValidationResponseToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsDeploymentValidationResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsDeploymentValidationResponseToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsDeploymentValidationResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsDeploymentValidationResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsDeploymentValidationResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsDeploymentValidationResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // can_deploy - computed: true, optional: false, required: false
  public get canDeploy() {
    return this.getBooleanAttribute('can_deploy');
  }

  // disk_type_mismatch - computed: true, optional: false, required: false
  public get diskTypeMismatch() {
    return this.getBooleanAttribute('disk_type_mismatch');
  }

  // drives_per_storage_pool - computed: true, optional: false, required: false
  public get drivesPerStoragePool() {
    return this.getNumberAttribute('drives_per_storage_pool');
  }

  // hostnames - computed: true, optional: false, required: false
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }

  // max_scalability - computed: true, optional: false, required: false
  public get maxScalability() {
    return this.getNumberAttribute('max_scalability');
  }

  // new_node_disk_types - computed: true, optional: false, required: false
  public get newNodeDiskTypes() {
    return this.getListAttribute('new_node_disk_types');
  }

  // no_of_fault_sets - computed: true, optional: false, required: false
  public get noOfFaultSets() {
    return this.getNumberAttribute('no_of_fault_sets');
  }

  // nodes - computed: true, optional: false, required: false
  public get nodes() {
    return this.getNumberAttribute('nodes');
  }

  // nodes_per_fault_set - computed: true, optional: false, required: false
  public get nodesPerFaultSet() {
    return this.getNumberAttribute('nodes_per_fault_set');
  }

  // number_of_service_volumes - computed: true, optional: false, required: false
  public get numberOfServiceVolumes() {
    return this.getNumberAttribute('number_of_service_volumes');
  }

  // protection_domain - computed: true, optional: false, required: false
  public get protectionDomain() {
    return this.getStringAttribute('protection_domain');
  }

  // storage_pool_disk_type - computed: true, optional: false, required: false
  public get storagePoolDiskType() {
    return this.getListAttribute('storage_pool_disk_type');
  }

  // storage_pools - computed: true, optional: false, required: false
  public get storagePools() {
    return this.getNumberAttribute('storage_pools');
  }

  // virtual_machines - computed: true, optional: false, required: false
  public get virtualMachines() {
    return this.getNumberAttribute('virtual_machines');
  }

  // warning_messages - computed: true, optional: false, required: false
  public get warningMessages() {
    return this.getListAttribute('warning_messages');
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsAssignedUsers {
}

export function dataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsAssignedUsersToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsAssignedUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsAssignedUsersToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsAssignedUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsAssignedUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsAssignedUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsAssignedUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // group_dn - computed: true, optional: false, required: false
  public get groupDn() {
    return this.getStringAttribute('group_dn');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // phone_number - computed: true, optional: false, required: false
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.getListAttribute('roles');
  }

  // system_user - computed: true, optional: false, required: false
  public get systemUser() {
    return this.getBooleanAttribute('system_user');
  }

  // update_password - computed: true, optional: false, required: false
  public get updatePassword() {
    return this.getBooleanAttribute('update_password');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // user_preference - computed: true, optional: false, required: false
  public get userPreference() {
    return this.getStringAttribute('user_preference');
  }

  // user_seq_id - computed: true, optional: false, required: false
  public get userSeqId() {
    return this.getNumberAttribute('user_seq_id');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsAssignedUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsAssignedUsersOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsAssignedUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentDevice {
}

export function dataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentDeviceToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentDeviceToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // brownfield - computed: true, optional: false, required: false
  public get brownfield() {
    return this.getBooleanAttribute('brownfield');
  }

  // brownfield_status - computed: true, optional: false, required: false
  public get brownfieldStatus() {
    return this.getStringAttribute('brownfield_status');
  }

  // cloud_link - computed: true, optional: false, required: false
  public get cloudLink() {
    return this.getBooleanAttribute('cloud_link');
  }

  // compliant_state - computed: true, optional: false, required: false
  public get compliantState() {
    return this.getStringAttribute('compliant_state');
  }

  // component_id - computed: true, optional: false, required: false
  public get componentId() {
    return this.getStringAttribute('component_id');
  }

  // current_ip_address - computed: true, optional: false, required: false
  public get currentIpAddress() {
    return this.getStringAttribute('current_ip_address');
  }

  // das_cache - computed: true, optional: false, required: false
  public get dasCache() {
    return this.getBooleanAttribute('das_cache');
  }

  // device_group_name - computed: true, optional: false, required: false
  public get deviceGroupName() {
    return this.getStringAttribute('device_group_name');
  }

  // device_health - computed: true, optional: false, required: false
  public get deviceHealth() {
    return this.getStringAttribute('device_health');
  }

  // device_state - computed: true, optional: false, required: false
  public get deviceState() {
    return this.getStringAttribute('device_state');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // health_message - computed: true, optional: false, required: false
  public get healthMessage() {
    return this.getStringAttribute('health_message');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // log_dump - computed: true, optional: false, required: false
  public get logDump() {
    return this.getStringAttribute('log_dump');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // puppet_cert_name - computed: true, optional: false, required: false
  public get puppetCertName() {
    return this.getStringAttribute('puppet_cert_name');
  }

  // ref_id - computed: true, optional: false, required: false
  public get refId() {
    return this.getStringAttribute('ref_id');
  }

  // ref_type - computed: true, optional: false, required: false
  public get refType() {
    return this.getStringAttribute('ref_type');
  }

  // service_tag - computed: true, optional: false, required: false
  public get serviceTag() {
    return this.getStringAttribute('service_tag');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_end_time - computed: true, optional: false, required: false
  public get statusEndTime() {
    return this.getStringAttribute('status_end_time');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // status_start_time - computed: true, optional: false, required: false
  public get statusStartTime() {
    return this.getStringAttribute('status_start_time');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentDeviceList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentDeviceOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValidMessages {
}

export function dataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValidMessagesToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValidMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValidMessagesToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValidMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValidMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValidMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValidMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // correlation_id - computed: true, optional: false, required: false
  public get correlationId() {
    return this.getStringAttribute('correlation_id');
  }

  // detailed_message - computed: true, optional: false, required: false
  public get detailedMessage() {
    return this.getStringAttribute('detailed_message');
  }

  // display_message - computed: true, optional: false, required: false
  public get displayMessage() {
    return this.getStringAttribute('display_message');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message_bundle - computed: true, optional: false, required: false
  public get messageBundle() {
    return this.getStringAttribute('message_bundle');
  }

  // message_code - computed: true, optional: false, required: false
  public get messageCode() {
    return this.getStringAttribute('message_code');
  }

  // response_action - computed: true, optional: false, required: false
  public get responseAction() {
    return this.getStringAttribute('response_action');
  }

  // sequence_number - computed: true, optional: false, required: false
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // time_stamp - computed: true, optional: false, required: false
  public get timeStamp() {
    return this.getStringAttribute('time_stamp');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValidMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValidMessagesOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValidMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValid {
}

export function dataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValidToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValidToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // messages - computed: true, optional: false, required: false
  private _messages = new DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValidMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }

  // valid - computed: true, optional: false, required: false
  public get valid() {
    return this.getBooleanAttribute('valid');
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValidationResponse {
}

export function dataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValidationResponseToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValidationResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValidationResponseToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValidationResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValidationResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValidationResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValidationResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // can_deploy - computed: true, optional: false, required: false
  public get canDeploy() {
    return this.getBooleanAttribute('can_deploy');
  }

  // disk_type_mismatch - computed: true, optional: false, required: false
  public get diskTypeMismatch() {
    return this.getBooleanAttribute('disk_type_mismatch');
  }

  // drives_per_storage_pool - computed: true, optional: false, required: false
  public get drivesPerStoragePool() {
    return this.getNumberAttribute('drives_per_storage_pool');
  }

  // hostnames - computed: true, optional: false, required: false
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }

  // max_scalability - computed: true, optional: false, required: false
  public get maxScalability() {
    return this.getNumberAttribute('max_scalability');
  }

  // new_node_disk_types - computed: true, optional: false, required: false
  public get newNodeDiskTypes() {
    return this.getListAttribute('new_node_disk_types');
  }

  // no_of_fault_sets - computed: true, optional: false, required: false
  public get noOfFaultSets() {
    return this.getNumberAttribute('no_of_fault_sets');
  }

  // nodes - computed: true, optional: false, required: false
  public get nodes() {
    return this.getNumberAttribute('nodes');
  }

  // nodes_per_fault_set - computed: true, optional: false, required: false
  public get nodesPerFaultSet() {
    return this.getNumberAttribute('nodes_per_fault_set');
  }

  // number_of_service_volumes - computed: true, optional: false, required: false
  public get numberOfServiceVolumes() {
    return this.getNumberAttribute('number_of_service_volumes');
  }

  // protection_domain - computed: true, optional: false, required: false
  public get protectionDomain() {
    return this.getStringAttribute('protection_domain');
  }

  // storage_pool_disk_type - computed: true, optional: false, required: false
  public get storagePoolDiskType() {
    return this.getListAttribute('storage_pool_disk_type');
  }

  // storage_pools - computed: true, optional: false, required: false
  public get storagePools() {
    return this.getNumberAttribute('storage_pools');
  }

  // virtual_machines - computed: true, optional: false, required: false
  public get virtualMachines() {
    return this.getNumberAttribute('virtual_machines');
  }

  // warning_messages - computed: true, optional: false, required: false
  public get warningMessages() {
    return this.getListAttribute('warning_messages');
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsJobDetails {
}

export function dataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsJobDetailsToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsJobDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsJobDetailsToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsJobDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsJobDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsJobDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsJobDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component_id - computed: true, optional: false, required: false
  public get componentId() {
    return this.getStringAttribute('component_id');
  }

  // execution_id - computed: true, optional: false, required: false
  public get executionId() {
    return this.getStringAttribute('execution_id');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsJobDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsJobDetailsOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsJobDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsLicenseRepository {
}

export function dataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsLicenseRepositoryToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsLicenseRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsLicenseRepositoryToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsLicenseRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsLicenseRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsLicenseRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsLicenseRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // disk_location - computed: true, optional: false, required: false
  public get diskLocation() {
    return this.getStringAttribute('disk_location');
  }

  // filename - computed: true, optional: false, required: false
  public get filename() {
    return this.getStringAttribute('filename');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license_data - computed: true, optional: false, required: false
  public get licenseData() {
    return this.getStringAttribute('license_data');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsVms {
}

export function dataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsVmsToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsVms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsVmsToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsVms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsVmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsVms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsVms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_name - computed: true, optional: false, required: false
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }

  // vm_ipaddress - computed: true, optional: false, required: false
  public get vmIpaddress() {
    return this.getStringAttribute('vm_ipaddress');
  }

  // vm_manufacturer - computed: true, optional: false, required: false
  public get vmManufacturer() {
    return this.getStringAttribute('vm_manufacturer');
  }

  // vm_model - computed: true, optional: false, required: false
  public get vmModel() {
    return this.getStringAttribute('vm_model');
  }

  // vm_service_tag - computed: true, optional: false, required: false
  public get vmServiceTag() {
    return this.getStringAttribute('vm_service_tag');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsVmsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsVmsOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsVmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeployments {
}

export function dataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeployments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeployments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeployments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeployments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_users_allowed - computed: true, optional: false, required: false
  public get allUsersAllowed() {
    return this.getBooleanAttribute('all_users_allowed');
  }

  // assigned_users - computed: true, optional: false, required: false
  private _assignedUsers = new DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsAssignedUsersList(this, "assigned_users", false);
  public get assignedUsers() {
    return this._assignedUsers;
  }

  // brownfield - computed: true, optional: false, required: false
  public get brownfield() {
    return this.getBooleanAttribute('brownfield');
  }

  // can_migratev_clsv_ms - computed: true, optional: false, required: false
  public get canMigratevClsvMs() {
    return this.getBooleanAttribute('can_migratev_clsv_ms');
  }

  // compliant - computed: true, optional: false, required: false
  public get compliant() {
    return this.getBooleanAttribute('compliant');
  }

  // configuration_change - computed: true, optional: false, required: false
  public get configurationChange() {
    return this.getBooleanAttribute('configuration_change');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // current_batch_count - computed: true, optional: false, required: false
  public get currentBatchCount() {
    return this.getStringAttribute('current_batch_count');
  }

  // current_step_count - computed: true, optional: false, required: false
  public get currentStepCount() {
    return this.getStringAttribute('current_step_count');
  }

  // current_step_message - computed: true, optional: false, required: false
  public get currentStepMessage() {
    return this.getStringAttribute('current_step_message');
  }

  // custom_image - computed: true, optional: false, required: false
  public get customImage() {
    return this.getStringAttribute('custom_image');
  }

  // deployment_description - computed: true, optional: false, required: false
  public get deploymentDescription() {
    return this.getStringAttribute('deployment_description');
  }

  // deployment_device - computed: true, optional: false, required: false
  private _deploymentDevice = new DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentDeviceList(this, "deployment_device", false);
  public get deploymentDevice() {
    return this._deploymentDevice;
  }

  // deployment_finished_date - computed: true, optional: false, required: false
  public get deploymentFinishedDate() {
    return this.getStringAttribute('deployment_finished_date');
  }

  // deployment_health_status_type - computed: true, optional: false, required: false
  public get deploymentHealthStatusType() {
    return this.getStringAttribute('deployment_health_status_type');
  }

  // deployment_name - computed: true, optional: false, required: false
  public get deploymentName() {
    return this.getStringAttribute('deployment_name');
  }

  // deployment_scheduled_date - computed: true, optional: false, required: false
  public get deploymentScheduledDate() {
    return this.getStringAttribute('deployment_scheduled_date');
  }

  // deployment_started_date - computed: true, optional: false, required: false
  public get deploymentStartedDate() {
    return this.getStringAttribute('deployment_started_date');
  }

  // deployment_valid - computed: true, optional: false, required: false
  private _deploymentValid = new DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValidOutputReference(this, "deployment_valid");
  public get deploymentValid() {
    return this._deploymentValid;
  }

  // deployment_validation_response - computed: true, optional: false, required: false
  private _deploymentValidationResponse = new DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsDeploymentValidationResponseOutputReference(this, "deployment_validation_response");
  public get deploymentValidationResponse() {
    return this._deploymentValidationResponse;
  }

  // disruptive_firmware - computed: true, optional: false, required: false
  public get disruptiveFirmware() {
    return this.getBooleanAttribute('disruptive_firmware');
  }

  // firmware_init - computed: true, optional: false, required: false
  public get firmwareInit() {
    return this.getBooleanAttribute('firmware_init');
  }

  // firmware_repository_id - computed: true, optional: false, required: false
  public get firmwareRepositoryId() {
    return this.getStringAttribute('firmware_repository_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // individual_teardown - computed: true, optional: false, required: false
  public get individualTeardown() {
    return this.getBooleanAttribute('individual_teardown');
  }

  // job_details - computed: true, optional: false, required: false
  private _jobDetails = new DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsJobDetailsList(this, "job_details", false);
  public get jobDetails() {
    return this._jobDetails;
  }

  // license_repository - computed: true, optional: false, required: false
  private _licenseRepository = new DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsLicenseRepositoryOutputReference(this, "license_repository");
  public get licenseRepository() {
    return this._licenseRepository;
  }

  // license_repository_id - computed: true, optional: false, required: false
  public get licenseRepositoryId() {
    return this.getStringAttribute('license_repository_id');
  }

  // lifecycle_mode - computed: true, optional: false, required: false
  public get lifecycleMode() {
    return this.getBooleanAttribute('lifecycle_mode');
  }

  // lifecycle_mode_reasons - computed: true, optional: false, required: false
  public get lifecycleModeReasons() {
    return this.getListAttribute('lifecycle_mode_reasons');
  }

  // no_op - computed: true, optional: false, required: false
  public get noOp() {
    return this.getBooleanAttribute('no_op');
  }

  // number_of_deployments - computed: true, optional: false, required: false
  public get numberOfDeployments() {
    return this.getNumberAttribute('number_of_deployments');
  }

  // operation_data - computed: true, optional: false, required: false
  public get operationData() {
    return this.getStringAttribute('operation_data');
  }

  // operation_status - computed: true, optional: false, required: false
  public get operationStatus() {
    return this.getStringAttribute('operation_status');
  }

  // operation_type - computed: true, optional: false, required: false
  public get operationType() {
    return this.getStringAttribute('operation_type');
  }

  // original_deployment_id - computed: true, optional: false, required: false
  public get originalDeploymentId() {
    return this.getStringAttribute('original_deployment_id');
  }

  // overall_device_health - computed: true, optional: false, required: false
  public get overallDeviceHealth() {
    return this.getStringAttribute('overall_device_health');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // precalculated_device_health - computed: true, optional: false, required: false
  public get precalculatedDeviceHealth() {
    return this.getStringAttribute('precalculated_device_health');
  }

  // preconfigure_svm - computed: true, optional: false, required: false
  public get preconfigureSvm() {
    return this.getBooleanAttribute('preconfigure_svm');
  }

  // preconfigure_svm_and_update - computed: true, optional: false, required: false
  public get preconfigureSvmAndUpdate() {
    return this.getBooleanAttribute('preconfigure_svm_and_update');
  }

  // remove_service - computed: true, optional: false, required: false
  public get removeService() {
    return this.getBooleanAttribute('remove_service');
  }

  // retry - computed: true, optional: false, required: false
  public get retry() {
    return this.getBooleanAttribute('retry');
  }

  // scale_up - computed: true, optional: false, required: false
  public get scaleUp() {
    return this.getBooleanAttribute('scale_up');
  }

  // schedule_date - computed: true, optional: false, required: false
  public get scheduleDate() {
    return this.getStringAttribute('schedule_date');
  }

  // services_deployed - computed: true, optional: false, required: false
  public get servicesDeployed() {
    return this.getStringAttribute('services_deployed');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // teardown - computed: true, optional: false, required: false
  public get teardown() {
    return this.getBooleanAttribute('teardown');
  }

  // teardown_after_cancel - computed: true, optional: false, required: false
  public get teardownAfterCancel() {
    return this.getBooleanAttribute('teardown_after_cancel');
  }

  // template_valid - computed: true, optional: false, required: false
  public get templateValid() {
    return this.getBooleanAttribute('template_valid');
  }

  // total_batch_count - computed: true, optional: false, required: false
  public get totalBatchCount() {
    return this.getStringAttribute('total_batch_count');
  }

  // total_num_of_steps - computed: true, optional: false, required: false
  public get totalNumOfSteps() {
    return this.getStringAttribute('total_num_of_steps');
  }

  // update_server_firmware - computed: true, optional: false, required: false
  public get updateServerFirmware() {
    return this.getBooleanAttribute('update_server_firmware');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }

  // use_default_catalog - computed: true, optional: false, required: false
  public get useDefaultCatalog() {
    return this.getBooleanAttribute('use_default_catalog');
  }

  // vds - computed: true, optional: false, required: false
  public get vds() {
    return this.getBooleanAttribute('vds');
  }

  // vms - computed: true, optional: false, required: false
  private _vms = new DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsVmsList(this, "vms", false);
  public get vms() {
    return this._vms;
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareBundlesSoftwareComponents {
}

export function dataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareBundlesSoftwareComponentsToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareBundlesSoftwareComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareBundlesSoftwareComponentsToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareBundlesSoftwareComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareBundlesSoftwareComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareBundlesSoftwareComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareBundlesSoftwareComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // component_id - computed: true, optional: false, required: false
  public get componentId() {
    return this.getStringAttribute('component_id');
  }

  // component_type - computed: true, optional: false, required: false
  public get componentType() {
    return this.getStringAttribute('component_type');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // custom - computed: true, optional: false, required: false
  public get custom() {
    return this.getBooleanAttribute('custom');
  }

  // dell_version - computed: true, optional: false, required: false
  public get dellVersion() {
    return this.getStringAttribute('dell_version');
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }

  // firmware_repo_name - computed: true, optional: false, required: false
  public get firmwareRepoName() {
    return this.getStringAttribute('firmware_repo_name');
  }

  // hash_md_5 - computed: true, optional: false, required: false
  public get hashMd5() {
    return this.getStringAttribute('hash_md_5');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore - computed: true, optional: false, required: false
  public get ignore() {
    return this.getBooleanAttribute('ignore');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // needs_attention - computed: true, optional: false, required: false
  public get needsAttention() {
    return this.getBooleanAttribute('needs_attention');
  }

  // operating_system - computed: true, optional: false, required: false
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }

  // original_component_id - computed: true, optional: false, required: false
  public get originalComponentId() {
    return this.getStringAttribute('original_component_id');
  }

  // original_version - computed: true, optional: false, required: false
  public get originalVersion() {
    return this.getStringAttribute('original_version');
  }

  // package_id - computed: true, optional: false, required: false
  public get packageId() {
    return this.getStringAttribute('package_id');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // sub_device_id - computed: true, optional: false, required: false
  public get subDeviceId() {
    return this.getStringAttribute('sub_device_id');
  }

  // sub_vendor_id - computed: true, optional: false, required: false
  public get subVendorId() {
    return this.getStringAttribute('sub_vendor_id');
  }

  // system_ids - computed: true, optional: false, required: false
  public get systemIds() {
    return this.getListAttribute('system_ids');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }

  // vendor_id - computed: true, optional: false, required: false
  public get vendorId() {
    return this.getStringAttribute('vendor_id');
  }

  // vendor_version - computed: true, optional: false, required: false
  public get vendorVersion() {
    return this.getStringAttribute('vendor_version');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareBundlesSoftwareComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareBundlesSoftwareComponentsOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareBundlesSoftwareComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareBundles {
}

export function dataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareBundlesToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareBundlesToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareBundles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareBundles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bundle_date - computed: true, optional: false, required: false
  public get bundleDate() {
    return this.getStringAttribute('bundle_date');
  }

  // bundle_type - computed: true, optional: false, required: false
  public get bundleType() {
    return this.getStringAttribute('bundle_type');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // criticality - computed: true, optional: false, required: false
  public get criticality() {
    return this.getStringAttribute('criticality');
  }

  // custom - computed: true, optional: false, required: false
  public get custom() {
    return this.getBooleanAttribute('custom');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_model - computed: true, optional: false, required: false
  public get deviceModel() {
    return this.getStringAttribute('device_model');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // fw_repository_id - computed: true, optional: false, required: false
  public get fwRepositoryId() {
    return this.getStringAttribute('fw_repository_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // needs_attention - computed: true, optional: false, required: false
  public get needsAttention() {
    return this.getBooleanAttribute('needs_attention');
  }

  // software_components - computed: true, optional: false, required: false
  private _softwareComponents = new DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareBundlesSoftwareComponentsList(this, "software_components", false);
  public get softwareComponents() {
    return this._softwareComponents;
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }

  // user_bundle - computed: true, optional: false, required: false
  public get userBundle() {
    return this.getBooleanAttribute('user_bundle');
  }

  // user_bundle_hash_md_5 - computed: true, optional: false, required: false
  public get userBundleHashMd5() {
    return this.getStringAttribute('user_bundle_hash_md_5');
  }

  // user_bundle_path - computed: true, optional: false, required: false
  public get userBundlePath() {
    return this.getStringAttribute('user_bundle_path');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareBundlesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareBundlesOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareComponents {
}

export function dataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareComponentsToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareComponentsToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // component_id - computed: true, optional: false, required: false
  public get componentId() {
    return this.getStringAttribute('component_id');
  }

  // component_type - computed: true, optional: false, required: false
  public get componentType() {
    return this.getStringAttribute('component_type');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // custom - computed: true, optional: false, required: false
  public get custom() {
    return this.getBooleanAttribute('custom');
  }

  // dell_version - computed: true, optional: false, required: false
  public get dellVersion() {
    return this.getStringAttribute('dell_version');
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }

  // firmware_repo_name - computed: true, optional: false, required: false
  public get firmwareRepoName() {
    return this.getStringAttribute('firmware_repo_name');
  }

  // hash_md_5 - computed: true, optional: false, required: false
  public get hashMd5() {
    return this.getStringAttribute('hash_md_5');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore - computed: true, optional: false, required: false
  public get ignore() {
    return this.getBooleanAttribute('ignore');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // needs_attention - computed: true, optional: false, required: false
  public get needsAttention() {
    return this.getBooleanAttribute('needs_attention');
  }

  // operating_system - computed: true, optional: false, required: false
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }

  // original_component_id - computed: true, optional: false, required: false
  public get originalComponentId() {
    return this.getStringAttribute('original_component_id');
  }

  // original_version - computed: true, optional: false, required: false
  public get originalVersion() {
    return this.getStringAttribute('original_version');
  }

  // package_id - computed: true, optional: false, required: false
  public get packageId() {
    return this.getStringAttribute('package_id');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // sub_device_id - computed: true, optional: false, required: false
  public get subDeviceId() {
    return this.getStringAttribute('sub_device_id');
  }

  // sub_vendor_id - computed: true, optional: false, required: false
  public get subVendorId() {
    return this.getStringAttribute('sub_vendor_id');
  }

  // system_ids - computed: true, optional: false, required: false
  public get systemIds() {
    return this.getListAttribute('system_ids');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }

  // vendor_id - computed: true, optional: false, required: false
  public get vendorId() {
    return this.getStringAttribute('vendor_id');
  }

  // vendor_version - computed: true, optional: false, required: false
  public get vendorVersion() {
    return this.getStringAttribute('vendor_version');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareComponentsOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepository {
}

export function dataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bundle_count - computed: true, optional: false, required: false
  public get bundleCount() {
    return this.getNumberAttribute('bundle_count');
  }

  // component_count - computed: true, optional: false, required: false
  public get componentCount() {
    return this.getNumberAttribute('component_count');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // custom - computed: true, optional: false, required: false
  public get custom() {
    return this.getBooleanAttribute('custom');
  }

  // default_catalog - computed: true, optional: false, required: false
  public get defaultCatalog() {
    return this.getBooleanAttribute('default_catalog');
  }

  // deployments - computed: true, optional: false, required: false
  private _deployments = new DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryDeploymentsList(this, "deployments", false);
  public get deployments() {
    return this._deployments;
  }

  // disk_location - computed: true, optional: false, required: false
  public get diskLocation() {
    return this.getStringAttribute('disk_location');
  }

  // download_progress - computed: true, optional: false, required: false
  public get downloadProgress() {
    return this.getNumberAttribute('download_progress');
  }

  // download_status - computed: true, optional: false, required: false
  public get downloadStatus() {
    return this.getStringAttribute('download_status');
  }

  // embedded - computed: true, optional: false, required: false
  public get embedded() {
    return this.getBooleanAttribute('embedded');
  }

  // extract_progress - computed: true, optional: false, required: false
  public get extractProgress() {
    return this.getNumberAttribute('extract_progress');
  }

  // file_size_in_gigabytes - computed: true, optional: false, required: false
  public get fileSizeInGigabytes() {
    return this.getNumberAttribute('file_size_in_gigabytes');
  }

  // filename - computed: true, optional: false, required: false
  public get filename() {
    return this.getStringAttribute('filename');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
  }

  // md_5_hash - computed: true, optional: false, required: false
  public get md5Hash() {
    return this.getStringAttribute('md_5_hash');
  }

  // minimal - computed: true, optional: false, required: false
  public get minimal() {
    return this.getBooleanAttribute('minimal');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // needs_attention - computed: true, optional: false, required: false
  public get needsAttention() {
    return this.getBooleanAttribute('needs_attention');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // rcmapproved - computed: true, optional: false, required: false
  public get rcmapproved() {
    return this.getBooleanAttribute('rcmapproved');
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // signed_key_source_location - computed: true, optional: false, required: false
  public get signedKeySourceLocation() {
    return this.getStringAttribute('signed_key_source_location');
  }

  // software_bundles - computed: true, optional: false, required: false
  private _softwareBundles = new DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareBundlesList(this, "software_bundles", false);
  public get softwareBundles() {
    return this._softwareBundles;
  }

  // software_components - computed: true, optional: false, required: false
  private _softwareComponents = new DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositorySoftwareComponentsList(this, "software_components", false);
  public get softwareComponents() {
    return this._softwareComponents;
  }

  // source_location - computed: true, optional: false, required: false
  public get sourceLocation() {
    return this.getStringAttribute('source_location');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }

  // user_bundle_count - computed: true, optional: false, required: false
  public get userBundleCount() {
    return this.getNumberAttribute('user_bundle_count');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsJobDetails {
}

export function dataPowerflexResourceGroupResourceGroupDetailsJobDetailsToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsJobDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsJobDetailsToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsJobDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsJobDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsJobDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsJobDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component_id - computed: true, optional: false, required: false
  public get componentId() {
    return this.getStringAttribute('component_id');
  }

  // execution_id - computed: true, optional: false, required: false
  public get executionId() {
    return this.getStringAttribute('execution_id');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsJobDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsJobDetailsOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsJobDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsLicenseRepository {
}

export function dataPowerflexResourceGroupResourceGroupDetailsLicenseRepositoryToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsLicenseRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsLicenseRepositoryToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsLicenseRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsLicenseRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsLicenseRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsLicenseRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // disk_location - computed: true, optional: false, required: false
  public get diskLocation() {
    return this.getStringAttribute('disk_location');
  }

  // filename - computed: true, optional: false, required: false
  public get filename() {
    return this.getStringAttribute('filename');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license_data - computed: true, optional: false, required: false
  public get licenseData() {
    return this.getStringAttribute('license_data');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsMessages {
}

export function dataPowerflexResourceGroupResourceGroupDetailsMessagesToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsMessagesToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // correlation_id - computed: true, optional: false, required: false
  public get correlationId() {
    return this.getStringAttribute('correlation_id');
  }

  // detailed_message - computed: true, optional: false, required: false
  public get detailedMessage() {
    return this.getStringAttribute('detailed_message');
  }

  // display_message - computed: true, optional: false, required: false
  public get displayMessage() {
    return this.getStringAttribute('display_message');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message_bundle - computed: true, optional: false, required: false
  public get messageBundle() {
    return this.getStringAttribute('message_bundle');
  }

  // message_code - computed: true, optional: false, required: false
  public get messageCode() {
    return this.getStringAttribute('message_code');
  }

  // response_action - computed: true, optional: false, required: false
  public get responseAction() {
    return this.getStringAttribute('response_action');
  }

  // sequence_number - computed: true, optional: false, required: false
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // time_stamp - computed: true, optional: false, required: false
  public get timeStamp() {
    return this.getStringAttribute('time_stamp');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsMessagesOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateAssignedUsers {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateAssignedUsersToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateAssignedUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateAssignedUsersToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateAssignedUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateAssignedUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateAssignedUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateAssignedUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // group_dn - computed: true, optional: false, required: false
  public get groupDn() {
    return this.getStringAttribute('group_dn');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // phone_number - computed: true, optional: false, required: false
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.getListAttribute('roles');
  }

  // system_user - computed: true, optional: false, required: false
  public get systemUser() {
    return this.getBooleanAttribute('system_user');
  }

  // update_password - computed: true, optional: false, required: false
  public get updatePassword() {
    return this.getBooleanAttribute('update_password');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // user_preference - computed: true, optional: false, required: false
  public get userPreference() {
    return this.getStringAttribute('user_preference');
  }

  // user_seq_id - computed: true, optional: false, required: false
  public get userSeqId() {
    return this.getNumberAttribute('user_seq_id');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateAssignedUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateAssignedUsersOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateAssignedUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsComponentValidMessages {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsComponentValidMessagesToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsComponentValidMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsComponentValidMessagesToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsComponentValidMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsComponentValidMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsComponentValidMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsComponentValidMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // correlation_id - computed: true, optional: false, required: false
  public get correlationId() {
    return this.getStringAttribute('correlation_id');
  }

  // detailed_message - computed: true, optional: false, required: false
  public get detailedMessage() {
    return this.getStringAttribute('detailed_message');
  }

  // display_message - computed: true, optional: false, required: false
  public get displayMessage() {
    return this.getStringAttribute('display_message');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message_bundle - computed: true, optional: false, required: false
  public get messageBundle() {
    return this.getStringAttribute('message_bundle');
  }

  // message_code - computed: true, optional: false, required: false
  public get messageCode() {
    return this.getStringAttribute('message_code');
  }

  // response_action - computed: true, optional: false, required: false
  public get responseAction() {
    return this.getStringAttribute('response_action');
  }

  // sequence_number - computed: true, optional: false, required: false
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // time_stamp - computed: true, optional: false, required: false
  public get timeStamp() {
    return this.getStringAttribute('time_stamp');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsComponentValidMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsComponentValidMessagesOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsComponentValidMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsComponentValid {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsComponentValidToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsComponentValid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsComponentValidToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsComponentValid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsComponentValidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsComponentValid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsComponentValid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // messages - computed: true, optional: false, required: false
  private _messages = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsComponentValidMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }

  // valid - computed: true, optional: false, required: false
  public get valid() {
    return this.getBooleanAttribute('valid');
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsResources {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsResourcesToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsResourcesToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsResourcesOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponents {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asm_guid - computed: true, optional: false, required: false
  public get asmGuid() {
    return this.getStringAttribute('asm_guid');
  }

  // brownfield - computed: true, optional: false, required: false
  public get brownfield() {
    return this.getBooleanAttribute('brownfield');
  }

  // changed - computed: true, optional: false, required: false
  public get changed() {
    return this.getBooleanAttribute('changed');
  }

  // cloned - computed: true, optional: false, required: false
  public get cloned() {
    return this.getBooleanAttribute('cloned');
  }

  // cloned_from_asm_guid - computed: true, optional: false, required: false
  public get clonedFromAsmGuid() {
    return this.getStringAttribute('cloned_from_asm_guid');
  }

  // cloned_from_id - computed: true, optional: false, required: false
  public get clonedFromId() {
    return this.getStringAttribute('cloned_from_id');
  }

  // component_id - computed: true, optional: false, required: false
  public get componentId() {
    return this.getStringAttribute('component_id');
  }

  // component_valid - computed: true, optional: false, required: false
  private _componentValid = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsComponentValidOutputReference(this, "component_valid");
  public get componentValid() {
    return this._componentValid;
  }

  // config_file - computed: true, optional: false, required: false
  public get configFile() {
    return this.getStringAttribute('config_file');
  }

  // help_text - computed: true, optional: false, required: false
  public get helpText() {
    return this.getStringAttribute('help_text');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // instances - computed: true, optional: false, required: false
  public get instances() {
    return this.getNumberAttribute('instances');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // manage_firmware - computed: true, optional: false, required: false
  public get manageFirmware() {
    return this.getBooleanAttribute('manage_firmware');
  }

  // management_ip_address - computed: true, optional: false, required: false
  public get managementIpAddress() {
    return this.getStringAttribute('management_ip_address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // os_puppet_cert_name - computed: true, optional: false, required: false
  public get osPuppetCertName() {
    return this.getStringAttribute('os_puppet_cert_name');
  }

  // puppet_cert_name - computed: true, optional: false, required: false
  public get puppetCertName() {
    return this.getStringAttribute('puppet_cert_name');
  }

  // ref_id - computed: true, optional: false, required: false
  public get refId() {
    return this.getStringAttribute('ref_id');
  }

  // related_components - computed: true, optional: false, required: false
  private _relatedComponents = new cdktf.StringMap(this, "related_components");
  public get relatedComponents() {
    return this._relatedComponents;
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // sub_type - computed: true, optional: false, required: false
  public get subType() {
    return this.getStringAttribute('sub_type');
  }

  // teardown - computed: true, optional: false, required: false
  public get teardown() {
    return this.getBooleanAttribute('teardown');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateConfigurationCategories {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateConfigurationCategoriesToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateConfigurationCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateConfigurationCategoriesToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateConfigurationCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateConfigurationCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateConfigurationCategories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateConfigurationCategories | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateConfigurationCategoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateConfigurationCategoriesOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateConfigurationCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateConfiguration {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateConfigurationToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateConfigurationToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // categories - computed: true, optional: false, required: false
  private _categories = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateConfigurationCategoriesList(this, "categories", false);
  public get categories() {
    return this._categories;
  }

  // comparator - computed: true, optional: false, required: false
  public get comparator() {
    return this.getStringAttribute('comparator');
  }

  // controller_fqdd - computed: true, optional: false, required: false
  public get controllerFqdd() {
    return this.getStringAttribute('controller_fqdd');
  }

  // disktype - computed: true, optional: false, required: false
  public get disktype() {
    return this.getStringAttribute('disktype');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // numberofdisks - computed: true, optional: false, required: false
  public get numberofdisks() {
    return this.getNumberAttribute('numberofdisks');
  }

  // raidlevel - computed: true, optional: false, required: false
  public get raidlevel() {
    return this.getStringAttribute('raidlevel');
  }

  // virtual_disk_fqdd - computed: true, optional: false, required: false
  public get virtualDiskFqdd() {
    return this.getStringAttribute('virtual_disk_fqdd');
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsAssignedUsers {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsAssignedUsersToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsAssignedUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsAssignedUsersToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsAssignedUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsAssignedUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsAssignedUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsAssignedUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // group_dn - computed: true, optional: false, required: false
  public get groupDn() {
    return this.getStringAttribute('group_dn');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // phone_number - computed: true, optional: false, required: false
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // roles - computed: true, optional: false, required: false
  public get roles() {
    return this.getListAttribute('roles');
  }

  // system_user - computed: true, optional: false, required: false
  public get systemUser() {
    return this.getBooleanAttribute('system_user');
  }

  // update_password - computed: true, optional: false, required: false
  public get updatePassword() {
    return this.getBooleanAttribute('update_password');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // user_preference - computed: true, optional: false, required: false
  public get userPreference() {
    return this.getStringAttribute('user_preference');
  }

  // user_seq_id - computed: true, optional: false, required: false
  public get userSeqId() {
    return this.getNumberAttribute('user_seq_id');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsAssignedUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsAssignedUsersOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsAssignedUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentDevice {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentDeviceToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentDeviceToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // brownfield - computed: true, optional: false, required: false
  public get brownfield() {
    return this.getBooleanAttribute('brownfield');
  }

  // brownfield_status - computed: true, optional: false, required: false
  public get brownfieldStatus() {
    return this.getStringAttribute('brownfield_status');
  }

  // cloud_link - computed: true, optional: false, required: false
  public get cloudLink() {
    return this.getBooleanAttribute('cloud_link');
  }

  // compliant_state - computed: true, optional: false, required: false
  public get compliantState() {
    return this.getStringAttribute('compliant_state');
  }

  // component_id - computed: true, optional: false, required: false
  public get componentId() {
    return this.getStringAttribute('component_id');
  }

  // current_ip_address - computed: true, optional: false, required: false
  public get currentIpAddress() {
    return this.getStringAttribute('current_ip_address');
  }

  // das_cache - computed: true, optional: false, required: false
  public get dasCache() {
    return this.getBooleanAttribute('das_cache');
  }

  // device_group_name - computed: true, optional: false, required: false
  public get deviceGroupName() {
    return this.getStringAttribute('device_group_name');
  }

  // device_health - computed: true, optional: false, required: false
  public get deviceHealth() {
    return this.getStringAttribute('device_health');
  }

  // device_state - computed: true, optional: false, required: false
  public get deviceState() {
    return this.getStringAttribute('device_state');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // health_message - computed: true, optional: false, required: false
  public get healthMessage() {
    return this.getStringAttribute('health_message');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // log_dump - computed: true, optional: false, required: false
  public get logDump() {
    return this.getStringAttribute('log_dump');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // puppet_cert_name - computed: true, optional: false, required: false
  public get puppetCertName() {
    return this.getStringAttribute('puppet_cert_name');
  }

  // ref_id - computed: true, optional: false, required: false
  public get refId() {
    return this.getStringAttribute('ref_id');
  }

  // ref_type - computed: true, optional: false, required: false
  public get refType() {
    return this.getStringAttribute('ref_type');
  }

  // service_tag - computed: true, optional: false, required: false
  public get serviceTag() {
    return this.getStringAttribute('service_tag');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_end_time - computed: true, optional: false, required: false
  public get statusEndTime() {
    return this.getStringAttribute('status_end_time');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // status_start_time - computed: true, optional: false, required: false
  public get statusStartTime() {
    return this.getStringAttribute('status_start_time');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentDeviceList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentDeviceOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValidMessages {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValidMessagesToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValidMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValidMessagesToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValidMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValidMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValidMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValidMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // correlation_id - computed: true, optional: false, required: false
  public get correlationId() {
    return this.getStringAttribute('correlation_id');
  }

  // detailed_message - computed: true, optional: false, required: false
  public get detailedMessage() {
    return this.getStringAttribute('detailed_message');
  }

  // display_message - computed: true, optional: false, required: false
  public get displayMessage() {
    return this.getStringAttribute('display_message');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message_bundle - computed: true, optional: false, required: false
  public get messageBundle() {
    return this.getStringAttribute('message_bundle');
  }

  // message_code - computed: true, optional: false, required: false
  public get messageCode() {
    return this.getStringAttribute('message_code');
  }

  // response_action - computed: true, optional: false, required: false
  public get responseAction() {
    return this.getStringAttribute('response_action');
  }

  // sequence_number - computed: true, optional: false, required: false
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // time_stamp - computed: true, optional: false, required: false
  public get timeStamp() {
    return this.getStringAttribute('time_stamp');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValidMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValidMessagesOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValidMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValid {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValidToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValidToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // messages - computed: true, optional: false, required: false
  private _messages = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValidMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }

  // valid - computed: true, optional: false, required: false
  public get valid() {
    return this.getBooleanAttribute('valid');
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValidationResponse {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValidationResponseToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValidationResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValidationResponseToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValidationResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValidationResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValidationResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValidationResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // can_deploy - computed: true, optional: false, required: false
  public get canDeploy() {
    return this.getBooleanAttribute('can_deploy');
  }

  // disk_type_mismatch - computed: true, optional: false, required: false
  public get diskTypeMismatch() {
    return this.getBooleanAttribute('disk_type_mismatch');
  }

  // drives_per_storage_pool - computed: true, optional: false, required: false
  public get drivesPerStoragePool() {
    return this.getNumberAttribute('drives_per_storage_pool');
  }

  // hostnames - computed: true, optional: false, required: false
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }

  // max_scalability - computed: true, optional: false, required: false
  public get maxScalability() {
    return this.getNumberAttribute('max_scalability');
  }

  // new_node_disk_types - computed: true, optional: false, required: false
  public get newNodeDiskTypes() {
    return this.getListAttribute('new_node_disk_types');
  }

  // no_of_fault_sets - computed: true, optional: false, required: false
  public get noOfFaultSets() {
    return this.getNumberAttribute('no_of_fault_sets');
  }

  // nodes - computed: true, optional: false, required: false
  public get nodes() {
    return this.getNumberAttribute('nodes');
  }

  // nodes_per_fault_set - computed: true, optional: false, required: false
  public get nodesPerFaultSet() {
    return this.getNumberAttribute('nodes_per_fault_set');
  }

  // number_of_service_volumes - computed: true, optional: false, required: false
  public get numberOfServiceVolumes() {
    return this.getNumberAttribute('number_of_service_volumes');
  }

  // protection_domain - computed: true, optional: false, required: false
  public get protectionDomain() {
    return this.getStringAttribute('protection_domain');
  }

  // storage_pool_disk_type - computed: true, optional: false, required: false
  public get storagePoolDiskType() {
    return this.getListAttribute('storage_pool_disk_type');
  }

  // storage_pools - computed: true, optional: false, required: false
  public get storagePools() {
    return this.getNumberAttribute('storage_pools');
  }

  // virtual_machines - computed: true, optional: false, required: false
  public get virtualMachines() {
    return this.getNumberAttribute('virtual_machines');
  }

  // warning_messages - computed: true, optional: false, required: false
  public get warningMessages() {
    return this.getListAttribute('warning_messages');
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsJobDetails {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsJobDetailsToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsJobDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsJobDetailsToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsJobDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsJobDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsJobDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsJobDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component_id - computed: true, optional: false, required: false
  public get componentId() {
    return this.getStringAttribute('component_id');
  }

  // execution_id - computed: true, optional: false, required: false
  public get executionId() {
    return this.getStringAttribute('execution_id');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsJobDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsJobDetailsOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsJobDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsLicenseRepository {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsLicenseRepositoryToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsLicenseRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsLicenseRepositoryToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsLicenseRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsLicenseRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsLicenseRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsLicenseRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // disk_location - computed: true, optional: false, required: false
  public get diskLocation() {
    return this.getStringAttribute('disk_location');
  }

  // filename - computed: true, optional: false, required: false
  public get filename() {
    return this.getStringAttribute('filename');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license_data - computed: true, optional: false, required: false
  public get licenseData() {
    return this.getStringAttribute('license_data');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsVms {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsVmsToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsVms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsVmsToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsVms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsVmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsVms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsVms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_name - computed: true, optional: false, required: false
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }

  // vm_ipaddress - computed: true, optional: false, required: false
  public get vmIpaddress() {
    return this.getStringAttribute('vm_ipaddress');
  }

  // vm_manufacturer - computed: true, optional: false, required: false
  public get vmManufacturer() {
    return this.getStringAttribute('vm_manufacturer');
  }

  // vm_model - computed: true, optional: false, required: false
  public get vmModel() {
    return this.getStringAttribute('vm_model');
  }

  // vm_service_tag - computed: true, optional: false, required: false
  public get vmServiceTag() {
    return this.getStringAttribute('vm_service_tag');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsVmsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsVmsOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsVmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeployments {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeployments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeployments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeployments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeployments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_users_allowed - computed: true, optional: false, required: false
  public get allUsersAllowed() {
    return this.getBooleanAttribute('all_users_allowed');
  }

  // assigned_users - computed: true, optional: false, required: false
  private _assignedUsers = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsAssignedUsersList(this, "assigned_users", false);
  public get assignedUsers() {
    return this._assignedUsers;
  }

  // brownfield - computed: true, optional: false, required: false
  public get brownfield() {
    return this.getBooleanAttribute('brownfield');
  }

  // can_migratev_clsv_ms - computed: true, optional: false, required: false
  public get canMigratevClsvMs() {
    return this.getBooleanAttribute('can_migratev_clsv_ms');
  }

  // compliant - computed: true, optional: false, required: false
  public get compliant() {
    return this.getBooleanAttribute('compliant');
  }

  // configuration_change - computed: true, optional: false, required: false
  public get configurationChange() {
    return this.getBooleanAttribute('configuration_change');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // current_batch_count - computed: true, optional: false, required: false
  public get currentBatchCount() {
    return this.getStringAttribute('current_batch_count');
  }

  // current_step_count - computed: true, optional: false, required: false
  public get currentStepCount() {
    return this.getStringAttribute('current_step_count');
  }

  // current_step_message - computed: true, optional: false, required: false
  public get currentStepMessage() {
    return this.getStringAttribute('current_step_message');
  }

  // custom_image - computed: true, optional: false, required: false
  public get customImage() {
    return this.getStringAttribute('custom_image');
  }

  // deployment_description - computed: true, optional: false, required: false
  public get deploymentDescription() {
    return this.getStringAttribute('deployment_description');
  }

  // deployment_device - computed: true, optional: false, required: false
  private _deploymentDevice = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentDeviceList(this, "deployment_device", false);
  public get deploymentDevice() {
    return this._deploymentDevice;
  }

  // deployment_finished_date - computed: true, optional: false, required: false
  public get deploymentFinishedDate() {
    return this.getStringAttribute('deployment_finished_date');
  }

  // deployment_health_status_type - computed: true, optional: false, required: false
  public get deploymentHealthStatusType() {
    return this.getStringAttribute('deployment_health_status_type');
  }

  // deployment_name - computed: true, optional: false, required: false
  public get deploymentName() {
    return this.getStringAttribute('deployment_name');
  }

  // deployment_scheduled_date - computed: true, optional: false, required: false
  public get deploymentScheduledDate() {
    return this.getStringAttribute('deployment_scheduled_date');
  }

  // deployment_started_date - computed: true, optional: false, required: false
  public get deploymentStartedDate() {
    return this.getStringAttribute('deployment_started_date');
  }

  // deployment_valid - computed: true, optional: false, required: false
  private _deploymentValid = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValidOutputReference(this, "deployment_valid");
  public get deploymentValid() {
    return this._deploymentValid;
  }

  // deployment_validation_response - computed: true, optional: false, required: false
  private _deploymentValidationResponse = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsDeploymentValidationResponseOutputReference(this, "deployment_validation_response");
  public get deploymentValidationResponse() {
    return this._deploymentValidationResponse;
  }

  // disruptive_firmware - computed: true, optional: false, required: false
  public get disruptiveFirmware() {
    return this.getBooleanAttribute('disruptive_firmware');
  }

  // firmware_init - computed: true, optional: false, required: false
  public get firmwareInit() {
    return this.getBooleanAttribute('firmware_init');
  }

  // firmware_repository_id - computed: true, optional: false, required: false
  public get firmwareRepositoryId() {
    return this.getStringAttribute('firmware_repository_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // individual_teardown - computed: true, optional: false, required: false
  public get individualTeardown() {
    return this.getBooleanAttribute('individual_teardown');
  }

  // job_details - computed: true, optional: false, required: false
  private _jobDetails = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsJobDetailsList(this, "job_details", false);
  public get jobDetails() {
    return this._jobDetails;
  }

  // license_repository - computed: true, optional: false, required: false
  private _licenseRepository = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsLicenseRepositoryOutputReference(this, "license_repository");
  public get licenseRepository() {
    return this._licenseRepository;
  }

  // license_repository_id - computed: true, optional: false, required: false
  public get licenseRepositoryId() {
    return this.getStringAttribute('license_repository_id');
  }

  // lifecycle_mode - computed: true, optional: false, required: false
  public get lifecycleMode() {
    return this.getBooleanAttribute('lifecycle_mode');
  }

  // lifecycle_mode_reasons - computed: true, optional: false, required: false
  public get lifecycleModeReasons() {
    return this.getListAttribute('lifecycle_mode_reasons');
  }

  // no_op - computed: true, optional: false, required: false
  public get noOp() {
    return this.getBooleanAttribute('no_op');
  }

  // number_of_deployments - computed: true, optional: false, required: false
  public get numberOfDeployments() {
    return this.getNumberAttribute('number_of_deployments');
  }

  // operation_data - computed: true, optional: false, required: false
  public get operationData() {
    return this.getStringAttribute('operation_data');
  }

  // operation_status - computed: true, optional: false, required: false
  public get operationStatus() {
    return this.getStringAttribute('operation_status');
  }

  // operation_type - computed: true, optional: false, required: false
  public get operationType() {
    return this.getStringAttribute('operation_type');
  }

  // original_deployment_id - computed: true, optional: false, required: false
  public get originalDeploymentId() {
    return this.getStringAttribute('original_deployment_id');
  }

  // overall_device_health - computed: true, optional: false, required: false
  public get overallDeviceHealth() {
    return this.getStringAttribute('overall_device_health');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // precalculated_device_health - computed: true, optional: false, required: false
  public get precalculatedDeviceHealth() {
    return this.getStringAttribute('precalculated_device_health');
  }

  // preconfigure_svm - computed: true, optional: false, required: false
  public get preconfigureSvm() {
    return this.getBooleanAttribute('preconfigure_svm');
  }

  // preconfigure_svm_and_update - computed: true, optional: false, required: false
  public get preconfigureSvmAndUpdate() {
    return this.getBooleanAttribute('preconfigure_svm_and_update');
  }

  // remove_service - computed: true, optional: false, required: false
  public get removeService() {
    return this.getBooleanAttribute('remove_service');
  }

  // retry - computed: true, optional: false, required: false
  public get retry() {
    return this.getBooleanAttribute('retry');
  }

  // scale_up - computed: true, optional: false, required: false
  public get scaleUp() {
    return this.getBooleanAttribute('scale_up');
  }

  // schedule_date - computed: true, optional: false, required: false
  public get scheduleDate() {
    return this.getStringAttribute('schedule_date');
  }

  // services_deployed - computed: true, optional: false, required: false
  public get servicesDeployed() {
    return this.getStringAttribute('services_deployed');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // teardown - computed: true, optional: false, required: false
  public get teardown() {
    return this.getBooleanAttribute('teardown');
  }

  // teardown_after_cancel - computed: true, optional: false, required: false
  public get teardownAfterCancel() {
    return this.getBooleanAttribute('teardown_after_cancel');
  }

  // template_valid - computed: true, optional: false, required: false
  public get templateValid() {
    return this.getBooleanAttribute('template_valid');
  }

  // total_batch_count - computed: true, optional: false, required: false
  public get totalBatchCount() {
    return this.getStringAttribute('total_batch_count');
  }

  // total_num_of_steps - computed: true, optional: false, required: false
  public get totalNumOfSteps() {
    return this.getStringAttribute('total_num_of_steps');
  }

  // update_server_firmware - computed: true, optional: false, required: false
  public get updateServerFirmware() {
    return this.getBooleanAttribute('update_server_firmware');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }

  // use_default_catalog - computed: true, optional: false, required: false
  public get useDefaultCatalog() {
    return this.getBooleanAttribute('use_default_catalog');
  }

  // vds - computed: true, optional: false, required: false
  public get vds() {
    return this.getBooleanAttribute('vds');
  }

  // vms - computed: true, optional: false, required: false
  private _vms = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsVmsList(this, "vms", false);
  public get vms() {
    return this._vms;
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareBundlesSoftwareComponents {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareBundlesSoftwareComponentsToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareBundlesSoftwareComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareBundlesSoftwareComponentsToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareBundlesSoftwareComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareBundlesSoftwareComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareBundlesSoftwareComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareBundlesSoftwareComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // component_id - computed: true, optional: false, required: false
  public get componentId() {
    return this.getStringAttribute('component_id');
  }

  // component_type - computed: true, optional: false, required: false
  public get componentType() {
    return this.getStringAttribute('component_type');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // custom - computed: true, optional: false, required: false
  public get custom() {
    return this.getBooleanAttribute('custom');
  }

  // dell_version - computed: true, optional: false, required: false
  public get dellVersion() {
    return this.getStringAttribute('dell_version');
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }

  // firmware_repo_name - computed: true, optional: false, required: false
  public get firmwareRepoName() {
    return this.getStringAttribute('firmware_repo_name');
  }

  // hash_md_5 - computed: true, optional: false, required: false
  public get hashMd5() {
    return this.getStringAttribute('hash_md_5');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore - computed: true, optional: false, required: false
  public get ignore() {
    return this.getBooleanAttribute('ignore');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // needs_attention - computed: true, optional: false, required: false
  public get needsAttention() {
    return this.getBooleanAttribute('needs_attention');
  }

  // operating_system - computed: true, optional: false, required: false
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }

  // original_component_id - computed: true, optional: false, required: false
  public get originalComponentId() {
    return this.getStringAttribute('original_component_id');
  }

  // original_version - computed: true, optional: false, required: false
  public get originalVersion() {
    return this.getStringAttribute('original_version');
  }

  // package_id - computed: true, optional: false, required: false
  public get packageId() {
    return this.getStringAttribute('package_id');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // sub_device_id - computed: true, optional: false, required: false
  public get subDeviceId() {
    return this.getStringAttribute('sub_device_id');
  }

  // sub_vendor_id - computed: true, optional: false, required: false
  public get subVendorId() {
    return this.getStringAttribute('sub_vendor_id');
  }

  // system_ids - computed: true, optional: false, required: false
  public get systemIds() {
    return this.getListAttribute('system_ids');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }

  // vendor_id - computed: true, optional: false, required: false
  public get vendorId() {
    return this.getStringAttribute('vendor_id');
  }

  // vendor_version - computed: true, optional: false, required: false
  public get vendorVersion() {
    return this.getStringAttribute('vendor_version');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareBundlesSoftwareComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareBundlesSoftwareComponentsOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareBundlesSoftwareComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareBundles {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareBundlesToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareBundlesToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareBundles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareBundles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bundle_date - computed: true, optional: false, required: false
  public get bundleDate() {
    return this.getStringAttribute('bundle_date');
  }

  // bundle_type - computed: true, optional: false, required: false
  public get bundleType() {
    return this.getStringAttribute('bundle_type');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // criticality - computed: true, optional: false, required: false
  public get criticality() {
    return this.getStringAttribute('criticality');
  }

  // custom - computed: true, optional: false, required: false
  public get custom() {
    return this.getBooleanAttribute('custom');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_model - computed: true, optional: false, required: false
  public get deviceModel() {
    return this.getStringAttribute('device_model');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // fw_repository_id - computed: true, optional: false, required: false
  public get fwRepositoryId() {
    return this.getStringAttribute('fw_repository_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // needs_attention - computed: true, optional: false, required: false
  public get needsAttention() {
    return this.getBooleanAttribute('needs_attention');
  }

  // software_components - computed: true, optional: false, required: false
  private _softwareComponents = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareBundlesSoftwareComponentsList(this, "software_components", false);
  public get softwareComponents() {
    return this._softwareComponents;
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }

  // user_bundle - computed: true, optional: false, required: false
  public get userBundle() {
    return this.getBooleanAttribute('user_bundle');
  }

  // user_bundle_hash_md_5 - computed: true, optional: false, required: false
  public get userBundleHashMd5() {
    return this.getStringAttribute('user_bundle_hash_md_5');
  }

  // user_bundle_path - computed: true, optional: false, required: false
  public get userBundlePath() {
    return this.getStringAttribute('user_bundle_path');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareBundlesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareBundlesOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareComponents {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareComponentsToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareComponentsToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // component_id - computed: true, optional: false, required: false
  public get componentId() {
    return this.getStringAttribute('component_id');
  }

  // component_type - computed: true, optional: false, required: false
  public get componentType() {
    return this.getStringAttribute('component_type');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // custom - computed: true, optional: false, required: false
  public get custom() {
    return this.getBooleanAttribute('custom');
  }

  // dell_version - computed: true, optional: false, required: false
  public get dellVersion() {
    return this.getStringAttribute('dell_version');
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }

  // firmware_repo_name - computed: true, optional: false, required: false
  public get firmwareRepoName() {
    return this.getStringAttribute('firmware_repo_name');
  }

  // hash_md_5 - computed: true, optional: false, required: false
  public get hashMd5() {
    return this.getStringAttribute('hash_md_5');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore - computed: true, optional: false, required: false
  public get ignore() {
    return this.getBooleanAttribute('ignore');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // needs_attention - computed: true, optional: false, required: false
  public get needsAttention() {
    return this.getBooleanAttribute('needs_attention');
  }

  // operating_system - computed: true, optional: false, required: false
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }

  // original_component_id - computed: true, optional: false, required: false
  public get originalComponentId() {
    return this.getStringAttribute('original_component_id');
  }

  // original_version - computed: true, optional: false, required: false
  public get originalVersion() {
    return this.getStringAttribute('original_version');
  }

  // package_id - computed: true, optional: false, required: false
  public get packageId() {
    return this.getStringAttribute('package_id');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // sub_device_id - computed: true, optional: false, required: false
  public get subDeviceId() {
    return this.getStringAttribute('sub_device_id');
  }

  // sub_vendor_id - computed: true, optional: false, required: false
  public get subVendorId() {
    return this.getStringAttribute('sub_vendor_id');
  }

  // system_ids - computed: true, optional: false, required: false
  public get systemIds() {
    return this.getListAttribute('system_ids');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }

  // vendor_id - computed: true, optional: false, required: false
  public get vendorId() {
    return this.getStringAttribute('vendor_id');
  }

  // vendor_version - computed: true, optional: false, required: false
  public get vendorVersion() {
    return this.getStringAttribute('vendor_version');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareComponentsOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepository {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bundle_count - computed: true, optional: false, required: false
  public get bundleCount() {
    return this.getNumberAttribute('bundle_count');
  }

  // component_count - computed: true, optional: false, required: false
  public get componentCount() {
    return this.getNumberAttribute('component_count');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // custom - computed: true, optional: false, required: false
  public get custom() {
    return this.getBooleanAttribute('custom');
  }

  // default_catalog - computed: true, optional: false, required: false
  public get defaultCatalog() {
    return this.getBooleanAttribute('default_catalog');
  }

  // deployments - computed: true, optional: false, required: false
  private _deployments = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryDeploymentsList(this, "deployments", false);
  public get deployments() {
    return this._deployments;
  }

  // disk_location - computed: true, optional: false, required: false
  public get diskLocation() {
    return this.getStringAttribute('disk_location');
  }

  // download_progress - computed: true, optional: false, required: false
  public get downloadProgress() {
    return this.getNumberAttribute('download_progress');
  }

  // download_status - computed: true, optional: false, required: false
  public get downloadStatus() {
    return this.getStringAttribute('download_status');
  }

  // embedded - computed: true, optional: false, required: false
  public get embedded() {
    return this.getBooleanAttribute('embedded');
  }

  // extract_progress - computed: true, optional: false, required: false
  public get extractProgress() {
    return this.getNumberAttribute('extract_progress');
  }

  // file_size_in_gigabytes - computed: true, optional: false, required: false
  public get fileSizeInGigabytes() {
    return this.getNumberAttribute('file_size_in_gigabytes');
  }

  // filename - computed: true, optional: false, required: false
  public get filename() {
    return this.getStringAttribute('filename');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_id - computed: true, optional: false, required: false
  public get jobId() {
    return this.getStringAttribute('job_id');
  }

  // md_5_hash - computed: true, optional: false, required: false
  public get md5Hash() {
    return this.getStringAttribute('md_5_hash');
  }

  // minimal - computed: true, optional: false, required: false
  public get minimal() {
    return this.getBooleanAttribute('minimal');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // needs_attention - computed: true, optional: false, required: false
  public get needsAttention() {
    return this.getBooleanAttribute('needs_attention');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // rcmapproved - computed: true, optional: false, required: false
  public get rcmapproved() {
    return this.getBooleanAttribute('rcmapproved');
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // signed_key_source_location - computed: true, optional: false, required: false
  public get signedKeySourceLocation() {
    return this.getStringAttribute('signed_key_source_location');
  }

  // software_bundles - computed: true, optional: false, required: false
  private _softwareBundles = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareBundlesList(this, "software_bundles", false);
  public get softwareBundles() {
    return this._softwareBundles;
  }

  // software_components - computed: true, optional: false, required: false
  private _softwareComponents = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositorySoftwareComponentsList(this, "software_components", false);
  public get softwareComponents() {
    return this._softwareComponents;
  }

  // source_location - computed: true, optional: false, required: false
  public get sourceLocation() {
    return this.getStringAttribute('source_location');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }

  // user_bundle_count - computed: true, optional: false, required: false
  public get userBundleCount() {
    return this.getNumberAttribute('user_bundle_count');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateLicenseRepository {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateLicenseRepositoryToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateLicenseRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateLicenseRepositoryToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateLicenseRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateLicenseRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateLicenseRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateLicenseRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // disk_location - computed: true, optional: false, required: false
  public get diskLocation() {
    return this.getStringAttribute('disk_location');
  }

  // filename - computed: true, optional: false, required: false
  public get filename() {
    return this.getStringAttribute('filename');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license_data - computed: true, optional: false, required: false
  public get licenseData() {
    return this.getStringAttribute('license_data');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationIpRange {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationIpRangeToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationIpRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationIpRangeToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationIpRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationIpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationIpRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationIpRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ending_ip - computed: true, optional: false, required: false
  public get endingIp() {
    return this.getStringAttribute('ending_ip');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // starting_ip - computed: true, optional: false, required: false
  public get startingIp() {
    return this.getStringAttribute('starting_ip');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationIpRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationIpRangeOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationIpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationStaticRoute {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationStaticRouteToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationStaticRouteToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationStaticRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationStaticRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationStaticRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_ip_address - computed: true, optional: false, required: false
  public get destinationIpAddress() {
    return this.getStringAttribute('destination_ip_address');
  }

  // static_route_destination_network_id - computed: true, optional: false, required: false
  public get staticRouteDestinationNetworkId() {
    return this.getStringAttribute('static_route_destination_network_id');
  }

  // static_route_gateway - computed: true, optional: false, required: false
  public get staticRouteGateway() {
    return this.getStringAttribute('static_route_gateway');
  }

  // static_route_source_network_id - computed: true, optional: false, required: false
  public get staticRouteSourceNetworkId() {
    return this.getStringAttribute('static_route_source_network_id');
  }

  // subnet_mask - computed: true, optional: false, required: false
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationStaticRouteList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationStaticRouteOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationStaticRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfiguration {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_suffix - computed: true, optional: false, required: false
  public get dnsSuffix() {
    return this.getStringAttribute('dns_suffix');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_range - computed: true, optional: false, required: false
  private _ipRange = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationIpRangeList(this, "ip_range", false);
  public get ipRange() {
    return this._ipRange;
  }

  // primary_dns - computed: true, optional: false, required: false
  public get primaryDns() {
    return this.getStringAttribute('primary_dns');
  }

  // secondary_dns - computed: true, optional: false, required: false
  public get secondaryDns() {
    return this.getStringAttribute('secondary_dns');
  }

  // static_route - computed: true, optional: false, required: false
  private _staticRoute = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationStaticRouteList(this, "static_route", false);
  public get staticRoute() {
    return this._staticRoute;
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworks {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination_ip_address - computed: true, optional: false, required: false
  public get destinationIpAddress() {
    return this.getStringAttribute('destination_ip_address');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // static - computed: true, optional: false, required: false
  public get static() {
    return this.getBooleanAttribute('static');
  }

  // static_network_configuration - computed: true, optional: false, required: false
  private _staticNetworkConfiguration = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksStaticNetworkConfigurationOutputReference(this, "static_network_configuration");
  public get staticNetworkConfiguration() {
    return this._staticNetworkConfiguration;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateTemplateValidMessages {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateTemplateValidMessagesToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateTemplateValidMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateTemplateValidMessagesToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateTemplateValidMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateTemplateValidMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateTemplateValidMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateTemplateValidMessages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // correlation_id - computed: true, optional: false, required: false
  public get correlationId() {
    return this.getStringAttribute('correlation_id');
  }

  // detailed_message - computed: true, optional: false, required: false
  public get detailedMessage() {
    return this.getStringAttribute('detailed_message');
  }

  // display_message - computed: true, optional: false, required: false
  public get displayMessage() {
    return this.getStringAttribute('display_message');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message_bundle - computed: true, optional: false, required: false
  public get messageBundle() {
    return this.getStringAttribute('message_bundle');
  }

  // message_code - computed: true, optional: false, required: false
  public get messageCode() {
    return this.getStringAttribute('message_code');
  }

  // response_action - computed: true, optional: false, required: false
  public get responseAction() {
    return this.getStringAttribute('response_action');
  }

  // sequence_number - computed: true, optional: false, required: false
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // time_stamp - computed: true, optional: false, required: false
  public get timeStamp() {
    return this.getStringAttribute('time_stamp');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateTemplateValidMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateTemplateValidMessagesOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateTemplateValidMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateTemplateValid {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateTemplateValidToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateTemplateValid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateTemplateValidToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateTemplateValid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateTemplateValidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateTemplateValid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateTemplateValid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // messages - computed: true, optional: false, required: false
  private _messages = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateTemplateValidMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }

  // valid - computed: true, optional: false, required: false
  public get valid() {
    return this.getBooleanAttribute('valid');
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsServiceTemplate {
}

export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsServiceTemplateToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsServiceTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsServiceTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_users_allowed - computed: true, optional: false, required: false
  public get allUsersAllowed() {
    return this.getBooleanAttribute('all_users_allowed');
  }

  // assigned_users - computed: true, optional: false, required: false
  private _assignedUsers = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateAssignedUsersList(this, "assigned_users", false);
  public get assignedUsers() {
    return this._assignedUsers;
  }

  // brownfield_template_type - computed: true, optional: false, required: false
  public get brownfieldTemplateType() {
    return this.getStringAttribute('brownfield_template_type');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // cluster_count - computed: true, optional: false, required: false
  public get clusterCount() {
    return this.getNumberAttribute('cluster_count');
  }

  // components - computed: true, optional: false, required: false
  private _components = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // draft - computed: true, optional: false, required: false
  public get draft() {
    return this.getBooleanAttribute('draft');
  }

  // firmware_repository - computed: true, optional: false, required: false
  private _firmwareRepository = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateFirmwareRepositoryOutputReference(this, "firmware_repository");
  public get firmwareRepository() {
    return this._firmwareRepository;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // in_configuration - computed: true, optional: false, required: false
  public get inConfiguration() {
    return this.getBooleanAttribute('in_configuration');
  }

  // last_deployed_date - computed: true, optional: false, required: false
  public get lastDeployedDate() {
    return this.getStringAttribute('last_deployed_date');
  }

  // license_repository - computed: true, optional: false, required: false
  private _licenseRepository = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateLicenseRepositoryOutputReference(this, "license_repository");
  public get licenseRepository() {
    return this._licenseRepository;
  }

  // manage_firmware - computed: true, optional: false, required: false
  public get manageFirmware() {
    return this.getBooleanAttribute('manage_firmware');
  }

  // networks - computed: true, optional: false, required: false
  private _networks = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }

  // original_template_id - computed: true, optional: false, required: false
  public get originalTemplateId() {
    return this.getStringAttribute('original_template_id');
  }

  // sdnas_count - computed: true, optional: false, required: false
  public get sdnasCount() {
    return this.getNumberAttribute('sdnas_count');
  }

  // server_count - computed: true, optional: false, required: false
  public get serverCount() {
    return this.getNumberAttribute('server_count');
  }

  // service_count - computed: true, optional: false, required: false
  public get serviceCount() {
    return this.getNumberAttribute('service_count');
  }

  // storage_count - computed: true, optional: false, required: false
  public get storageCount() {
    return this.getNumberAttribute('storage_count');
  }

  // switch_count - computed: true, optional: false, required: false
  public get switchCount() {
    return this.getNumberAttribute('switch_count');
  }

  // template_description - computed: true, optional: false, required: false
  public get templateDescription() {
    return this.getStringAttribute('template_description');
  }

  // template_locked - computed: true, optional: false, required: false
  public get templateLocked() {
    return this.getBooleanAttribute('template_locked');
  }

  // template_name - computed: true, optional: false, required: false
  public get templateName() {
    return this.getStringAttribute('template_name');
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // template_valid - computed: true, optional: false, required: false
  private _templateValid = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateTemplateValidOutputReference(this, "template_valid");
  public get templateValid() {
    return this._templateValid;
  }

  // template_version - computed: true, optional: false, required: false
  public get templateVersion() {
    return this.getStringAttribute('template_version');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }

  // use_default_catalog - computed: true, optional: false, required: false
  public get useDefaultCatalog() {
    return this.getBooleanAttribute('use_default_catalog');
  }

  // vm_count - computed: true, optional: false, required: false
  public get vmCount() {
    return this.getNumberAttribute('vm_count');
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetailsVms {
}

export function dataPowerflexResourceGroupResourceGroupDetailsVmsToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsVms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsVmsToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetailsVms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsVmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetailsVms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetailsVms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_name - computed: true, optional: false, required: false
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }

  // vm_ipaddress - computed: true, optional: false, required: false
  public get vmIpaddress() {
    return this.getStringAttribute('vm_ipaddress');
  }

  // vm_manufacturer - computed: true, optional: false, required: false
  public get vmManufacturer() {
    return this.getStringAttribute('vm_manufacturer');
  }

  // vm_model - computed: true, optional: false, required: false
  public get vmModel() {
    return this.getStringAttribute('vm_model');
  }

  // vm_service_tag - computed: true, optional: false, required: false
  public get vmServiceTag() {
    return this.getStringAttribute('vm_service_tag');
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsVmsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsVmsOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsVmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupResourceGroupDetails {
}

export function dataPowerflexResourceGroupResourceGroupDetailsToTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexResourceGroupResourceGroupDetailsToHclTerraform(struct?: DataPowerflexResourceGroupResourceGroupDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexResourceGroupResourceGroupDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexResourceGroupResourceGroupDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupResourceGroupDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_users_allowed - computed: true, optional: false, required: false
  public get allUsersAllowed() {
    return this.getBooleanAttribute('all_users_allowed');
  }

  // assigned_users - computed: true, optional: false, required: false
  private _assignedUsers = new DataPowerflexResourceGroupResourceGroupDetailsAssignedUsersList(this, "assigned_users", false);
  public get assignedUsers() {
    return this._assignedUsers;
  }

  // brownfield - computed: true, optional: false, required: false
  public get brownfield() {
    return this.getBooleanAttribute('brownfield');
  }

  // can_migratev_clsv_ms - computed: true, optional: false, required: false
  public get canMigratevClsvMs() {
    return this.getBooleanAttribute('can_migratev_clsv_ms');
  }

  // compliant - computed: true, optional: false, required: false
  public get compliant() {
    return this.getBooleanAttribute('compliant');
  }

  // configuration_change - computed: true, optional: false, required: false
  public get configurationChange() {
    return this.getBooleanAttribute('configuration_change');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // current_batch_count - computed: true, optional: false, required: false
  public get currentBatchCount() {
    return this.getStringAttribute('current_batch_count');
  }

  // current_step_count - computed: true, optional: false, required: false
  public get currentStepCount() {
    return this.getStringAttribute('current_step_count');
  }

  // current_step_message - computed: true, optional: false, required: false
  public get currentStepMessage() {
    return this.getStringAttribute('current_step_message');
  }

  // custom_image - computed: true, optional: false, required: false
  public get customImage() {
    return this.getStringAttribute('custom_image');
  }

  // deployment_description - computed: true, optional: false, required: false
  public get deploymentDescription() {
    return this.getStringAttribute('deployment_description');
  }

  // deployment_device - computed: true, optional: false, required: false
  private _deploymentDevice = new DataPowerflexResourceGroupResourceGroupDetailsDeploymentDeviceList(this, "deployment_device", false);
  public get deploymentDevice() {
    return this._deploymentDevice;
  }

  // deployment_finished_date - computed: true, optional: false, required: false
  public get deploymentFinishedDate() {
    return this.getStringAttribute('deployment_finished_date');
  }

  // deployment_health_status_type - computed: true, optional: false, required: false
  public get deploymentHealthStatusType() {
    return this.getStringAttribute('deployment_health_status_type');
  }

  // deployment_name - computed: true, optional: false, required: false
  public get deploymentName() {
    return this.getStringAttribute('deployment_name');
  }

  // deployment_scheduled_date - computed: true, optional: false, required: false
  public get deploymentScheduledDate() {
    return this.getStringAttribute('deployment_scheduled_date');
  }

  // deployment_started_date - computed: true, optional: false, required: false
  public get deploymentStartedDate() {
    return this.getStringAttribute('deployment_started_date');
  }

  // deployment_valid - computed: true, optional: false, required: false
  private _deploymentValid = new DataPowerflexResourceGroupResourceGroupDetailsDeploymentValidOutputReference(this, "deployment_valid");
  public get deploymentValid() {
    return this._deploymentValid;
  }

  // deployment_validation_response - computed: true, optional: false, required: false
  private _deploymentValidationResponse = new DataPowerflexResourceGroupResourceGroupDetailsDeploymentValidationResponseOutputReference(this, "deployment_validation_response");
  public get deploymentValidationResponse() {
    return this._deploymentValidationResponse;
  }

  // detail_message - computed: true, optional: false, required: false
  public get detailMessage() {
    return this.getStringAttribute('detail_message');
  }

  // disruptive_firmware - computed: true, optional: false, required: false
  public get disruptiveFirmware() {
    return this.getBooleanAttribute('disruptive_firmware');
  }

  // error - computed: true, optional: false, required: false
  public get error() {
    return this.getStringAttribute('error');
  }

  // firmware_init - computed: true, optional: false, required: false
  public get firmwareInit() {
    return this.getBooleanAttribute('firmware_init');
  }

  // firmware_repository - computed: true, optional: false, required: false
  private _firmwareRepository = new DataPowerflexResourceGroupResourceGroupDetailsFirmwareRepositoryOutputReference(this, "firmware_repository");
  public get firmwareRepository() {
    return this._firmwareRepository;
  }

  // firmware_repository_id - computed: true, optional: false, required: false
  public get firmwareRepositoryId() {
    return this.getStringAttribute('firmware_repository_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // individual_teardown - computed: true, optional: false, required: false
  public get individualTeardown() {
    return this.getBooleanAttribute('individual_teardown');
  }

  // job_details - computed: true, optional: false, required: false
  private _jobDetails = new DataPowerflexResourceGroupResourceGroupDetailsJobDetailsList(this, "job_details", false);
  public get jobDetails() {
    return this._jobDetails;
  }

  // license_repository - computed: true, optional: false, required: false
  private _licenseRepository = new DataPowerflexResourceGroupResourceGroupDetailsLicenseRepositoryOutputReference(this, "license_repository");
  public get licenseRepository() {
    return this._licenseRepository;
  }

  // license_repository_id - computed: true, optional: false, required: false
  public get licenseRepositoryId() {
    return this.getStringAttribute('license_repository_id');
  }

  // lifecycle_mode - computed: true, optional: false, required: false
  public get lifecycleMode() {
    return this.getBooleanAttribute('lifecycle_mode');
  }

  // lifecycle_mode_reasons - computed: true, optional: false, required: false
  public get lifecycleModeReasons() {
    return this.getListAttribute('lifecycle_mode_reasons');
  }

  // messages - computed: true, optional: false, required: false
  private _messages = new DataPowerflexResourceGroupResourceGroupDetailsMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }

  // no_op - computed: true, optional: false, required: false
  public get noOp() {
    return this.getBooleanAttribute('no_op');
  }

  // number_of_deployments - computed: true, optional: false, required: false
  public get numberOfDeployments() {
    return this.getNumberAttribute('number_of_deployments');
  }

  // operation_data - computed: true, optional: false, required: false
  public get operationData() {
    return this.getStringAttribute('operation_data');
  }

  // operation_status - computed: true, optional: false, required: false
  public get operationStatus() {
    return this.getStringAttribute('operation_status');
  }

  // operation_type - computed: true, optional: false, required: false
  public get operationType() {
    return this.getStringAttribute('operation_type');
  }

  // original_deployment_id - computed: true, optional: false, required: false
  public get originalDeploymentId() {
    return this.getStringAttribute('original_deployment_id');
  }

  // overall_device_health - computed: true, optional: false, required: false
  public get overallDeviceHealth() {
    return this.getStringAttribute('overall_device_health');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // precalculated_device_health - computed: true, optional: false, required: false
  public get precalculatedDeviceHealth() {
    return this.getStringAttribute('precalculated_device_health');
  }

  // preconfigure_svm - computed: true, optional: false, required: false
  public get preconfigureSvm() {
    return this.getBooleanAttribute('preconfigure_svm');
  }

  // preconfigure_svm_and_update - computed: true, optional: false, required: false
  public get preconfigureSvmAndUpdate() {
    return this.getBooleanAttribute('preconfigure_svm_and_update');
  }

  // remove_service - computed: true, optional: false, required: false
  public get removeService() {
    return this.getBooleanAttribute('remove_service');
  }

  // retry - computed: true, optional: false, required: false
  public get retry() {
    return this.getBooleanAttribute('retry');
  }

  // scale_up - computed: true, optional: false, required: false
  public get scaleUp() {
    return this.getBooleanAttribute('scale_up');
  }

  // schedule_date - computed: true, optional: false, required: false
  public get scheduleDate() {
    return this.getStringAttribute('schedule_date');
  }

  // service_template - computed: true, optional: false, required: false
  private _serviceTemplate = new DataPowerflexResourceGroupResourceGroupDetailsServiceTemplateOutputReference(this, "service_template");
  public get serviceTemplate() {
    return this._serviceTemplate;
  }

  // services_deployed - computed: true, optional: false, required: false
  public get servicesDeployed() {
    return this.getStringAttribute('services_deployed');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // teardown - computed: true, optional: false, required: false
  public get teardown() {
    return this.getBooleanAttribute('teardown');
  }

  // teardown_after_cancel - computed: true, optional: false, required: false
  public get teardownAfterCancel() {
    return this.getBooleanAttribute('teardown_after_cancel');
  }

  // template_valid - computed: true, optional: false, required: false
  public get templateValid() {
    return this.getBooleanAttribute('template_valid');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // total_batch_count - computed: true, optional: false, required: false
  public get totalBatchCount() {
    return this.getStringAttribute('total_batch_count');
  }

  // total_num_of_steps - computed: true, optional: false, required: false
  public get totalNumOfSteps() {
    return this.getStringAttribute('total_num_of_steps');
  }

  // update_server_firmware - computed: true, optional: false, required: false
  public get updateServerFirmware() {
    return this.getBooleanAttribute('update_server_firmware');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getStringAttribute('updated_date');
  }

  // use_default_catalog - computed: true, optional: false, required: false
  public get useDefaultCatalog() {
    return this.getBooleanAttribute('use_default_catalog');
  }

  // vds - computed: true, optional: false, required: false
  public get vds() {
    return this.getBooleanAttribute('vds');
  }

  // vms - computed: true, optional: false, required: false
  private _vms = new DataPowerflexResourceGroupResourceGroupDetailsVmsList(this, "vms", false);
  public get vms() {
    return this._vms;
  }
}

export class DataPowerflexResourceGroupResourceGroupDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexResourceGroupResourceGroupDetailsOutputReference {
    return new DataPowerflexResourceGroupResourceGroupDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexResourceGroupFilter {
  /**
  * Value for all_users_allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#all_users_allowed DataPowerflexResourceGroup#all_users_allowed}
  */
  readonly allUsersAllowed?: boolean | cdktf.IResolvable;
  /**
  * Value for brownfield
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#brownfield DataPowerflexResourceGroup#brownfield}
  */
  readonly brownfield?: boolean | cdktf.IResolvable;
  /**
  * Value for can_migratev_clsv_ms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#can_migratev_clsv_ms DataPowerflexResourceGroup#can_migratev_clsv_ms}
  */
  readonly canMigratevClsvMs?: boolean | cdktf.IResolvable;
  /**
  * Value for compliant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#compliant DataPowerflexResourceGroup#compliant}
  */
  readonly compliant?: boolean | cdktf.IResolvable;
  /**
  * Value for configuration_change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#configuration_change DataPowerflexResourceGroup#configuration_change}
  */
  readonly configurationChange?: boolean | cdktf.IResolvable;
  /**
  * List of created_by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#created_by DataPowerflexResourceGroup#created_by}
  */
  readonly createdBy?: string[];
  /**
  * List of created_date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#created_date DataPowerflexResourceGroup#created_date}
  */
  readonly createdDate?: string[];
  /**
  * List of current_batch_count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#current_batch_count DataPowerflexResourceGroup#current_batch_count}
  */
  readonly currentBatchCount?: string[];
  /**
  * List of current_step_count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#current_step_count DataPowerflexResourceGroup#current_step_count}
  */
  readonly currentStepCount?: string[];
  /**
  * List of current_step_message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#current_step_message DataPowerflexResourceGroup#current_step_message}
  */
  readonly currentStepMessage?: string[];
  /**
  * List of custom_image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#custom_image DataPowerflexResourceGroup#custom_image}
  */
  readonly customImage?: string[];
  /**
  * List of deployment_description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#deployment_description DataPowerflexResourceGroup#deployment_description}
  */
  readonly deploymentDescription?: string[];
  /**
  * List of deployment_finished_date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#deployment_finished_date DataPowerflexResourceGroup#deployment_finished_date}
  */
  readonly deploymentFinishedDate?: string[];
  /**
  * List of deployment_health_status_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#deployment_health_status_type DataPowerflexResourceGroup#deployment_health_status_type}
  */
  readonly deploymentHealthStatusType?: string[];
  /**
  * List of deployment_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#deployment_name DataPowerflexResourceGroup#deployment_name}
  */
  readonly deploymentName?: string[];
  /**
  * List of deployment_scheduled_date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#deployment_scheduled_date DataPowerflexResourceGroup#deployment_scheduled_date}
  */
  readonly deploymentScheduledDate?: string[];
  /**
  * List of deployment_started_date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#deployment_started_date DataPowerflexResourceGroup#deployment_started_date}
  */
  readonly deploymentStartedDate?: string[];
  /**
  * List of detail_message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#detail_message DataPowerflexResourceGroup#detail_message}
  */
  readonly detailMessage?: string[];
  /**
  * Value for disruptive_firmware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#disruptive_firmware DataPowerflexResourceGroup#disruptive_firmware}
  */
  readonly disruptiveFirmware?: boolean | cdktf.IResolvable;
  /**
  * List of error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#error DataPowerflexResourceGroup#error}
  */
  readonly error?: string[];
  /**
  * Value for firmware_init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#firmware_init DataPowerflexResourceGroup#firmware_init}
  */
  readonly firmwareInit?: boolean | cdktf.IResolvable;
  /**
  * List of firmware_repository_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#firmware_repository_id DataPowerflexResourceGroup#firmware_repository_id}
  */
  readonly firmwareRepositoryId?: string[];
  /**
  * List of id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#id DataPowerflexResourceGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * Value for individual_teardown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#individual_teardown DataPowerflexResourceGroup#individual_teardown}
  */
  readonly individualTeardown?: boolean | cdktf.IResolvable;
  /**
  * List of license_repository_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#license_repository_id DataPowerflexResourceGroup#license_repository_id}
  */
  readonly licenseRepositoryId?: string[];
  /**
  * Value for lifecycle_mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#lifecycle_mode DataPowerflexResourceGroup#lifecycle_mode}
  */
  readonly lifecycleMode?: boolean | cdktf.IResolvable;
  /**
  * Value for no_op
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#no_op DataPowerflexResourceGroup#no_op}
  */
  readonly noOp?: boolean | cdktf.IResolvable;
  /**
  * List of number_of_deployments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#number_of_deployments DataPowerflexResourceGroup#number_of_deployments}
  */
  readonly numberOfDeployments?: number[];
  /**
  * List of operation_data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#operation_data DataPowerflexResourceGroup#operation_data}
  */
  readonly operationData?: string[];
  /**
  * List of operation_status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#operation_status DataPowerflexResourceGroup#operation_status}
  */
  readonly operationStatus?: string[];
  /**
  * List of operation_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#operation_type DataPowerflexResourceGroup#operation_type}
  */
  readonly operationType?: string[];
  /**
  * List of original_deployment_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#original_deployment_id DataPowerflexResourceGroup#original_deployment_id}
  */
  readonly originalDeploymentId?: string[];
  /**
  * List of overall_device_health
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#overall_device_health DataPowerflexResourceGroup#overall_device_health}
  */
  readonly overallDeviceHealth?: string[];
  /**
  * List of owner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#owner DataPowerflexResourceGroup#owner}
  */
  readonly owner?: string[];
  /**
  * List of path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#path DataPowerflexResourceGroup#path}
  */
  readonly path?: string[];
  /**
  * List of precalculated_device_health
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#precalculated_device_health DataPowerflexResourceGroup#precalculated_device_health}
  */
  readonly precalculatedDeviceHealth?: string[];
  /**
  * Value for preconfigure_svm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#preconfigure_svm DataPowerflexResourceGroup#preconfigure_svm}
  */
  readonly preconfigureSvm?: boolean | cdktf.IResolvable;
  /**
  * Value for preconfigure_svm_and_update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#preconfigure_svm_and_update DataPowerflexResourceGroup#preconfigure_svm_and_update}
  */
  readonly preconfigureSvmAndUpdate?: boolean | cdktf.IResolvable;
  /**
  * Value for remove_service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#remove_service DataPowerflexResourceGroup#remove_service}
  */
  readonly removeService?: boolean | cdktf.IResolvable;
  /**
  * Value for retry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#retry DataPowerflexResourceGroup#retry}
  */
  readonly retry?: boolean | cdktf.IResolvable;
  /**
  * Value for scale_up
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#scale_up DataPowerflexResourceGroup#scale_up}
  */
  readonly scaleUp?: boolean | cdktf.IResolvable;
  /**
  * List of schedule_date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#schedule_date DataPowerflexResourceGroup#schedule_date}
  */
  readonly scheduleDate?: string[];
  /**
  * List of services_deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#services_deployed DataPowerflexResourceGroup#services_deployed}
  */
  readonly servicesDeployed?: string[];
  /**
  * List of status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#status DataPowerflexResourceGroup#status}
  */
  readonly status?: string[];
  /**
  * Value for teardown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#teardown DataPowerflexResourceGroup#teardown}
  */
  readonly teardown?: boolean | cdktf.IResolvable;
  /**
  * Value for teardown_after_cancel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#teardown_after_cancel DataPowerflexResourceGroup#teardown_after_cancel}
  */
  readonly teardownAfterCancel?: boolean | cdktf.IResolvable;
  /**
  * Value for template_valid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#template_valid DataPowerflexResourceGroup#template_valid}
  */
  readonly templateValid?: boolean | cdktf.IResolvable;
  /**
  * List of timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#timestamp DataPowerflexResourceGroup#timestamp}
  */
  readonly timestamp?: string[];
  /**
  * List of total_batch_count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#total_batch_count DataPowerflexResourceGroup#total_batch_count}
  */
  readonly totalBatchCount?: string[];
  /**
  * List of total_num_of_steps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#total_num_of_steps DataPowerflexResourceGroup#total_num_of_steps}
  */
  readonly totalNumOfSteps?: string[];
  /**
  * Value for update_server_firmware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#update_server_firmware DataPowerflexResourceGroup#update_server_firmware}
  */
  readonly updateServerFirmware?: boolean | cdktf.IResolvable;
  /**
  * List of updated_by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#updated_by DataPowerflexResourceGroup#updated_by}
  */
  readonly updatedBy?: string[];
  /**
  * List of updated_date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#updated_date DataPowerflexResourceGroup#updated_date}
  */
  readonly updatedDate?: string[];
  /**
  * Value for use_default_catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#use_default_catalog DataPowerflexResourceGroup#use_default_catalog}
  */
  readonly useDefaultCatalog?: boolean | cdktf.IResolvable;
  /**
  * Value for vds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#vds DataPowerflexResourceGroup#vds}
  */
  readonly vds?: boolean | cdktf.IResolvable;
}

export function dataPowerflexResourceGroupFilterToTerraform(struct?: DataPowerflexResourceGroupFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_users_allowed: cdktf.booleanToTerraform(struct!.allUsersAllowed),
    brownfield: cdktf.booleanToTerraform(struct!.brownfield),
    can_migratev_clsv_ms: cdktf.booleanToTerraform(struct!.canMigratevClsvMs),
    compliant: cdktf.booleanToTerraform(struct!.compliant),
    configuration_change: cdktf.booleanToTerraform(struct!.configurationChange),
    created_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.createdBy),
    created_date: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.createdDate),
    current_batch_count: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.currentBatchCount),
    current_step_count: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.currentStepCount),
    current_step_message: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.currentStepMessage),
    custom_image: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customImage),
    deployment_description: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deploymentDescription),
    deployment_finished_date: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deploymentFinishedDate),
    deployment_health_status_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deploymentHealthStatusType),
    deployment_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deploymentName),
    deployment_scheduled_date: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deploymentScheduledDate),
    deployment_started_date: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deploymentStartedDate),
    detail_message: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.detailMessage),
    disruptive_firmware: cdktf.booleanToTerraform(struct!.disruptiveFirmware),
    error: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.error),
    firmware_init: cdktf.booleanToTerraform(struct!.firmwareInit),
    firmware_repository_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.firmwareRepositoryId),
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    individual_teardown: cdktf.booleanToTerraform(struct!.individualTeardown),
    license_repository_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.licenseRepositoryId),
    lifecycle_mode: cdktf.booleanToTerraform(struct!.lifecycleMode),
    no_op: cdktf.booleanToTerraform(struct!.noOp),
    number_of_deployments: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.numberOfDeployments),
    operation_data: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operationData),
    operation_status: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operationStatus),
    operation_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operationType),
    original_deployment_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.originalDeploymentId),
    overall_device_health: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.overallDeviceHealth),
    owner: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.owner),
    path: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.path),
    precalculated_device_health: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.precalculatedDeviceHealth),
    preconfigure_svm: cdktf.booleanToTerraform(struct!.preconfigureSvm),
    preconfigure_svm_and_update: cdktf.booleanToTerraform(struct!.preconfigureSvmAndUpdate),
    remove_service: cdktf.booleanToTerraform(struct!.removeService),
    retry: cdktf.booleanToTerraform(struct!.retry),
    scale_up: cdktf.booleanToTerraform(struct!.scaleUp),
    schedule_date: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scheduleDate),
    services_deployed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.servicesDeployed),
    status: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.status),
    teardown: cdktf.booleanToTerraform(struct!.teardown),
    teardown_after_cancel: cdktf.booleanToTerraform(struct!.teardownAfterCancel),
    template_valid: cdktf.booleanToTerraform(struct!.templateValid),
    timestamp: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.timestamp),
    total_batch_count: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.totalBatchCount),
    total_num_of_steps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.totalNumOfSteps),
    update_server_firmware: cdktf.booleanToTerraform(struct!.updateServerFirmware),
    updated_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.updatedBy),
    updated_date: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.updatedDate),
    use_default_catalog: cdktf.booleanToTerraform(struct!.useDefaultCatalog),
    vds: cdktf.booleanToTerraform(struct!.vds),
  }
}


export function dataPowerflexResourceGroupFilterToHclTerraform(struct?: DataPowerflexResourceGroupFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_users_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.allUsersAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    brownfield: {
      value: cdktf.booleanToHclTerraform(struct!.brownfield),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    can_migratev_clsv_ms: {
      value: cdktf.booleanToHclTerraform(struct!.canMigratevClsvMs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compliant: {
      value: cdktf.booleanToHclTerraform(struct!.compliant),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    configuration_change: {
      value: cdktf.booleanToHclTerraform(struct!.configurationChange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    created_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.createdBy),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    created_date: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.createdDate),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    current_batch_count: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.currentBatchCount),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    current_step_count: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.currentStepCount),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    current_step_message: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.currentStepMessage),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    custom_image: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customImage),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    deployment_description: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deploymentDescription),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    deployment_finished_date: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deploymentFinishedDate),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    deployment_health_status_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deploymentHealthStatusType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    deployment_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deploymentName),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    deployment_scheduled_date: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deploymentScheduledDate),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    deployment_started_date: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deploymentStartedDate),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    detail_message: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.detailMessage),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    disruptive_firmware: {
      value: cdktf.booleanToHclTerraform(struct!.disruptiveFirmware),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    error: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.error),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    firmware_init: {
      value: cdktf.booleanToHclTerraform(struct!.firmwareInit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    firmware_repository_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.firmwareRepositoryId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    individual_teardown: {
      value: cdktf.booleanToHclTerraform(struct!.individualTeardown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    license_repository_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.licenseRepositoryId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    lifecycle_mode: {
      value: cdktf.booleanToHclTerraform(struct!.lifecycleMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_op: {
      value: cdktf.booleanToHclTerraform(struct!.noOp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    number_of_deployments: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.numberOfDeployments),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    operation_data: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operationData),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    operation_status: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operationStatus),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    operation_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operationType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    original_deployment_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.originalDeploymentId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    overall_device_health: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.overallDeviceHealth),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    owner: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.owner),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.path),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    precalculated_device_health: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.precalculatedDeviceHealth),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    preconfigure_svm: {
      value: cdktf.booleanToHclTerraform(struct!.preconfigureSvm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preconfigure_svm_and_update: {
      value: cdktf.booleanToHclTerraform(struct!.preconfigureSvmAndUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remove_service: {
      value: cdktf.booleanToHclTerraform(struct!.removeService),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retry: {
      value: cdktf.booleanToHclTerraform(struct!.retry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scale_up: {
      value: cdktf.booleanToHclTerraform(struct!.scaleUp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schedule_date: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scheduleDate),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    services_deployed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.servicesDeployed),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    status: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.status),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    teardown: {
      value: cdktf.booleanToHclTerraform(struct!.teardown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    teardown_after_cancel: {
      value: cdktf.booleanToHclTerraform(struct!.teardownAfterCancel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    template_valid: {
      value: cdktf.booleanToHclTerraform(struct!.templateValid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timestamp: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.timestamp),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    total_batch_count: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.totalBatchCount),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    total_num_of_steps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.totalNumOfSteps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    update_server_firmware: {
      value: cdktf.booleanToHclTerraform(struct!.updateServerFirmware),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    updated_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.updatedBy),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    updated_date: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.updatedDate),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    use_default_catalog: {
      value: cdktf.booleanToHclTerraform(struct!.useDefaultCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vds: {
      value: cdktf.booleanToHclTerraform(struct!.vds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerflexResourceGroupFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexResourceGroupFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allUsersAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allUsersAllowed = this._allUsersAllowed;
    }
    if (this._brownfield !== undefined) {
      hasAnyValues = true;
      internalValueResult.brownfield = this._brownfield;
    }
    if (this._canMigratevClsvMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.canMigratevClsvMs = this._canMigratevClsvMs;
    }
    if (this._compliant !== undefined) {
      hasAnyValues = true;
      internalValueResult.compliant = this._compliant;
    }
    if (this._configurationChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationChange = this._configurationChange;
    }
    if (this._createdBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBy = this._createdBy;
    }
    if (this._createdDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdDate = this._createdDate;
    }
    if (this._currentBatchCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentBatchCount = this._currentBatchCount;
    }
    if (this._currentStepCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentStepCount = this._currentStepCount;
    }
    if (this._currentStepMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentStepMessage = this._currentStepMessage;
    }
    if (this._customImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImage = this._customImage;
    }
    if (this._deploymentDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentDescription = this._deploymentDescription;
    }
    if (this._deploymentFinishedDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentFinishedDate = this._deploymentFinishedDate;
    }
    if (this._deploymentHealthStatusType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentHealthStatusType = this._deploymentHealthStatusType;
    }
    if (this._deploymentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentName = this._deploymentName;
    }
    if (this._deploymentScheduledDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentScheduledDate = this._deploymentScheduledDate;
    }
    if (this._deploymentStartedDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentStartedDate = this._deploymentStartedDate;
    }
    if (this._detailMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailMessage = this._detailMessage;
    }
    if (this._disruptiveFirmware !== undefined) {
      hasAnyValues = true;
      internalValueResult.disruptiveFirmware = this._disruptiveFirmware;
    }
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._firmwareInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.firmwareInit = this._firmwareInit;
    }
    if (this._firmwareRepositoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.firmwareRepositoryId = this._firmwareRepositoryId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._individualTeardown !== undefined) {
      hasAnyValues = true;
      internalValueResult.individualTeardown = this._individualTeardown;
    }
    if (this._licenseRepositoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseRepositoryId = this._licenseRepositoryId;
    }
    if (this._lifecycleMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleMode = this._lifecycleMode;
    }
    if (this._noOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.noOp = this._noOp;
    }
    if (this._numberOfDeployments !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfDeployments = this._numberOfDeployments;
    }
    if (this._operationData !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationData = this._operationData;
    }
    if (this._operationStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationStatus = this._operationStatus;
    }
    if (this._operationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationType = this._operationType;
    }
    if (this._originalDeploymentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalDeploymentId = this._originalDeploymentId;
    }
    if (this._overallDeviceHealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.overallDeviceHealth = this._overallDeviceHealth;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._precalculatedDeviceHealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.precalculatedDeviceHealth = this._precalculatedDeviceHealth;
    }
    if (this._preconfigureSvm !== undefined) {
      hasAnyValues = true;
      internalValueResult.preconfigureSvm = this._preconfigureSvm;
    }
    if (this._preconfigureSvmAndUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.preconfigureSvmAndUpdate = this._preconfigureSvmAndUpdate;
    }
    if (this._removeService !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeService = this._removeService;
    }
    if (this._retry !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry;
    }
    if (this._scaleUp !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleUp = this._scaleUp;
    }
    if (this._scheduleDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleDate = this._scheduleDate;
    }
    if (this._servicesDeployed !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesDeployed = this._servicesDeployed;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._teardown !== undefined) {
      hasAnyValues = true;
      internalValueResult.teardown = this._teardown;
    }
    if (this._teardownAfterCancel !== undefined) {
      hasAnyValues = true;
      internalValueResult.teardownAfterCancel = this._teardownAfterCancel;
    }
    if (this._templateValid !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateValid = this._templateValid;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._totalBatchCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalBatchCount = this._totalBatchCount;
    }
    if (this._totalNumOfSteps !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalNumOfSteps = this._totalNumOfSteps;
    }
    if (this._updateServerFirmware !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateServerFirmware = this._updateServerFirmware;
    }
    if (this._updatedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedBy = this._updatedBy;
    }
    if (this._updatedDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedDate = this._updatedDate;
    }
    if (this._useDefaultCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefaultCatalog = this._useDefaultCatalog;
    }
    if (this._vds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vds = this._vds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexResourceGroupFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allUsersAllowed = undefined;
      this._brownfield = undefined;
      this._canMigratevClsvMs = undefined;
      this._compliant = undefined;
      this._configurationChange = undefined;
      this._createdBy = undefined;
      this._createdDate = undefined;
      this._currentBatchCount = undefined;
      this._currentStepCount = undefined;
      this._currentStepMessage = undefined;
      this._customImage = undefined;
      this._deploymentDescription = undefined;
      this._deploymentFinishedDate = undefined;
      this._deploymentHealthStatusType = undefined;
      this._deploymentName = undefined;
      this._deploymentScheduledDate = undefined;
      this._deploymentStartedDate = undefined;
      this._detailMessage = undefined;
      this._disruptiveFirmware = undefined;
      this._error = undefined;
      this._firmwareInit = undefined;
      this._firmwareRepositoryId = undefined;
      this._id = undefined;
      this._individualTeardown = undefined;
      this._licenseRepositoryId = undefined;
      this._lifecycleMode = undefined;
      this._noOp = undefined;
      this._numberOfDeployments = undefined;
      this._operationData = undefined;
      this._operationStatus = undefined;
      this._operationType = undefined;
      this._originalDeploymentId = undefined;
      this._overallDeviceHealth = undefined;
      this._owner = undefined;
      this._path = undefined;
      this._precalculatedDeviceHealth = undefined;
      this._preconfigureSvm = undefined;
      this._preconfigureSvmAndUpdate = undefined;
      this._removeService = undefined;
      this._retry = undefined;
      this._scaleUp = undefined;
      this._scheduleDate = undefined;
      this._servicesDeployed = undefined;
      this._status = undefined;
      this._teardown = undefined;
      this._teardownAfterCancel = undefined;
      this._templateValid = undefined;
      this._timestamp = undefined;
      this._totalBatchCount = undefined;
      this._totalNumOfSteps = undefined;
      this._updateServerFirmware = undefined;
      this._updatedBy = undefined;
      this._updatedDate = undefined;
      this._useDefaultCatalog = undefined;
      this._vds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allUsersAllowed = value.allUsersAllowed;
      this._brownfield = value.brownfield;
      this._canMigratevClsvMs = value.canMigratevClsvMs;
      this._compliant = value.compliant;
      this._configurationChange = value.configurationChange;
      this._createdBy = value.createdBy;
      this._createdDate = value.createdDate;
      this._currentBatchCount = value.currentBatchCount;
      this._currentStepCount = value.currentStepCount;
      this._currentStepMessage = value.currentStepMessage;
      this._customImage = value.customImage;
      this._deploymentDescription = value.deploymentDescription;
      this._deploymentFinishedDate = value.deploymentFinishedDate;
      this._deploymentHealthStatusType = value.deploymentHealthStatusType;
      this._deploymentName = value.deploymentName;
      this._deploymentScheduledDate = value.deploymentScheduledDate;
      this._deploymentStartedDate = value.deploymentStartedDate;
      this._detailMessage = value.detailMessage;
      this._disruptiveFirmware = value.disruptiveFirmware;
      this._error = value.error;
      this._firmwareInit = value.firmwareInit;
      this._firmwareRepositoryId = value.firmwareRepositoryId;
      this._id = value.id;
      this._individualTeardown = value.individualTeardown;
      this._licenseRepositoryId = value.licenseRepositoryId;
      this._lifecycleMode = value.lifecycleMode;
      this._noOp = value.noOp;
      this._numberOfDeployments = value.numberOfDeployments;
      this._operationData = value.operationData;
      this._operationStatus = value.operationStatus;
      this._operationType = value.operationType;
      this._originalDeploymentId = value.originalDeploymentId;
      this._overallDeviceHealth = value.overallDeviceHealth;
      this._owner = value.owner;
      this._path = value.path;
      this._precalculatedDeviceHealth = value.precalculatedDeviceHealth;
      this._preconfigureSvm = value.preconfigureSvm;
      this._preconfigureSvmAndUpdate = value.preconfigureSvmAndUpdate;
      this._removeService = value.removeService;
      this._retry = value.retry;
      this._scaleUp = value.scaleUp;
      this._scheduleDate = value.scheduleDate;
      this._servicesDeployed = value.servicesDeployed;
      this._status = value.status;
      this._teardown = value.teardown;
      this._teardownAfterCancel = value.teardownAfterCancel;
      this._templateValid = value.templateValid;
      this._timestamp = value.timestamp;
      this._totalBatchCount = value.totalBatchCount;
      this._totalNumOfSteps = value.totalNumOfSteps;
      this._updateServerFirmware = value.updateServerFirmware;
      this._updatedBy = value.updatedBy;
      this._updatedDate = value.updatedDate;
      this._useDefaultCatalog = value.useDefaultCatalog;
      this._vds = value.vds;
    }
  }

  // all_users_allowed - computed: false, optional: true, required: false
  private _allUsersAllowed?: boolean | cdktf.IResolvable; 
  public get allUsersAllowed() {
    return this.getBooleanAttribute('all_users_allowed');
  }
  public set allUsersAllowed(value: boolean | cdktf.IResolvable) {
    this._allUsersAllowed = value;
  }
  public resetAllUsersAllowed() {
    this._allUsersAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allUsersAllowedInput() {
    return this._allUsersAllowed;
  }

  // brownfield - computed: false, optional: true, required: false
  private _brownfield?: boolean | cdktf.IResolvable; 
  public get brownfield() {
    return this.getBooleanAttribute('brownfield');
  }
  public set brownfield(value: boolean | cdktf.IResolvable) {
    this._brownfield = value;
  }
  public resetBrownfield() {
    this._brownfield = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brownfieldInput() {
    return this._brownfield;
  }

  // can_migratev_clsv_ms - computed: false, optional: true, required: false
  private _canMigratevClsvMs?: boolean | cdktf.IResolvable; 
  public get canMigratevClsvMs() {
    return this.getBooleanAttribute('can_migratev_clsv_ms');
  }
  public set canMigratevClsvMs(value: boolean | cdktf.IResolvable) {
    this._canMigratevClsvMs = value;
  }
  public resetCanMigratevClsvMs() {
    this._canMigratevClsvMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canMigratevClsvMsInput() {
    return this._canMigratevClsvMs;
  }

  // compliant - computed: false, optional: true, required: false
  private _compliant?: boolean | cdktf.IResolvable; 
  public get compliant() {
    return this.getBooleanAttribute('compliant');
  }
  public set compliant(value: boolean | cdktf.IResolvable) {
    this._compliant = value;
  }
  public resetCompliant() {
    this._compliant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compliantInput() {
    return this._compliant;
  }

  // configuration_change - computed: false, optional: true, required: false
  private _configurationChange?: boolean | cdktf.IResolvable; 
  public get configurationChange() {
    return this.getBooleanAttribute('configuration_change');
  }
  public set configurationChange(value: boolean | cdktf.IResolvable) {
    this._configurationChange = value;
  }
  public resetConfigurationChange() {
    this._configurationChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationChangeInput() {
    return this._configurationChange;
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string[]; 
  public get createdBy() {
    return cdktf.Fn.tolist(this.getListAttribute('created_by'));
  }
  public set createdBy(value: string[]) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // created_date - computed: false, optional: true, required: false
  private _createdDate?: string[]; 
  public get createdDate() {
    return cdktf.Fn.tolist(this.getListAttribute('created_date'));
  }
  public set createdDate(value: string[]) {
    this._createdDate = value;
  }
  public resetCreatedDate() {
    this._createdDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdDateInput() {
    return this._createdDate;
  }

  // current_batch_count - computed: false, optional: true, required: false
  private _currentBatchCount?: string[]; 
  public get currentBatchCount() {
    return cdktf.Fn.tolist(this.getListAttribute('current_batch_count'));
  }
  public set currentBatchCount(value: string[]) {
    this._currentBatchCount = value;
  }
  public resetCurrentBatchCount() {
    this._currentBatchCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentBatchCountInput() {
    return this._currentBatchCount;
  }

  // current_step_count - computed: false, optional: true, required: false
  private _currentStepCount?: string[]; 
  public get currentStepCount() {
    return cdktf.Fn.tolist(this.getListAttribute('current_step_count'));
  }
  public set currentStepCount(value: string[]) {
    this._currentStepCount = value;
  }
  public resetCurrentStepCount() {
    this._currentStepCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentStepCountInput() {
    return this._currentStepCount;
  }

  // current_step_message - computed: false, optional: true, required: false
  private _currentStepMessage?: string[]; 
  public get currentStepMessage() {
    return cdktf.Fn.tolist(this.getListAttribute('current_step_message'));
  }
  public set currentStepMessage(value: string[]) {
    this._currentStepMessage = value;
  }
  public resetCurrentStepMessage() {
    this._currentStepMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentStepMessageInput() {
    return this._currentStepMessage;
  }

  // custom_image - computed: false, optional: true, required: false
  private _customImage?: string[]; 
  public get customImage() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_image'));
  }
  public set customImage(value: string[]) {
    this._customImage = value;
  }
  public resetCustomImage() {
    this._customImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageInput() {
    return this._customImage;
  }

  // deployment_description - computed: false, optional: true, required: false
  private _deploymentDescription?: string[]; 
  public get deploymentDescription() {
    return cdktf.Fn.tolist(this.getListAttribute('deployment_description'));
  }
  public set deploymentDescription(value: string[]) {
    this._deploymentDescription = value;
  }
  public resetDeploymentDescription() {
    this._deploymentDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentDescriptionInput() {
    return this._deploymentDescription;
  }

  // deployment_finished_date - computed: false, optional: true, required: false
  private _deploymentFinishedDate?: string[]; 
  public get deploymentFinishedDate() {
    return cdktf.Fn.tolist(this.getListAttribute('deployment_finished_date'));
  }
  public set deploymentFinishedDate(value: string[]) {
    this._deploymentFinishedDate = value;
  }
  public resetDeploymentFinishedDate() {
    this._deploymentFinishedDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentFinishedDateInput() {
    return this._deploymentFinishedDate;
  }

  // deployment_health_status_type - computed: false, optional: true, required: false
  private _deploymentHealthStatusType?: string[]; 
  public get deploymentHealthStatusType() {
    return cdktf.Fn.tolist(this.getListAttribute('deployment_health_status_type'));
  }
  public set deploymentHealthStatusType(value: string[]) {
    this._deploymentHealthStatusType = value;
  }
  public resetDeploymentHealthStatusType() {
    this._deploymentHealthStatusType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentHealthStatusTypeInput() {
    return this._deploymentHealthStatusType;
  }

  // deployment_name - computed: false, optional: true, required: false
  private _deploymentName?: string[]; 
  public get deploymentName() {
    return cdktf.Fn.tolist(this.getListAttribute('deployment_name'));
  }
  public set deploymentName(value: string[]) {
    this._deploymentName = value;
  }
  public resetDeploymentName() {
    this._deploymentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentNameInput() {
    return this._deploymentName;
  }

  // deployment_scheduled_date - computed: false, optional: true, required: false
  private _deploymentScheduledDate?: string[]; 
  public get deploymentScheduledDate() {
    return cdktf.Fn.tolist(this.getListAttribute('deployment_scheduled_date'));
  }
  public set deploymentScheduledDate(value: string[]) {
    this._deploymentScheduledDate = value;
  }
  public resetDeploymentScheduledDate() {
    this._deploymentScheduledDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentScheduledDateInput() {
    return this._deploymentScheduledDate;
  }

  // deployment_started_date - computed: false, optional: true, required: false
  private _deploymentStartedDate?: string[]; 
  public get deploymentStartedDate() {
    return cdktf.Fn.tolist(this.getListAttribute('deployment_started_date'));
  }
  public set deploymentStartedDate(value: string[]) {
    this._deploymentStartedDate = value;
  }
  public resetDeploymentStartedDate() {
    this._deploymentStartedDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentStartedDateInput() {
    return this._deploymentStartedDate;
  }

  // detail_message - computed: false, optional: true, required: false
  private _detailMessage?: string[]; 
  public get detailMessage() {
    return cdktf.Fn.tolist(this.getListAttribute('detail_message'));
  }
  public set detailMessage(value: string[]) {
    this._detailMessage = value;
  }
  public resetDetailMessage() {
    this._detailMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailMessageInput() {
    return this._detailMessage;
  }

  // disruptive_firmware - computed: false, optional: true, required: false
  private _disruptiveFirmware?: boolean | cdktf.IResolvable; 
  public get disruptiveFirmware() {
    return this.getBooleanAttribute('disruptive_firmware');
  }
  public set disruptiveFirmware(value: boolean | cdktf.IResolvable) {
    this._disruptiveFirmware = value;
  }
  public resetDisruptiveFirmware() {
    this._disruptiveFirmware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disruptiveFirmwareInput() {
    return this._disruptiveFirmware;
  }

  // error - computed: false, optional: true, required: false
  private _error?: string[]; 
  public get error() {
    return cdktf.Fn.tolist(this.getListAttribute('error'));
  }
  public set error(value: string[]) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // firmware_init - computed: false, optional: true, required: false
  private _firmwareInit?: boolean | cdktf.IResolvable; 
  public get firmwareInit() {
    return this.getBooleanAttribute('firmware_init');
  }
  public set firmwareInit(value: boolean | cdktf.IResolvable) {
    this._firmwareInit = value;
  }
  public resetFirmwareInit() {
    this._firmwareInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareInitInput() {
    return this._firmwareInit;
  }

  // firmware_repository_id - computed: false, optional: true, required: false
  private _firmwareRepositoryId?: string[]; 
  public get firmwareRepositoryId() {
    return cdktf.Fn.tolist(this.getListAttribute('firmware_repository_id'));
  }
  public set firmwareRepositoryId(value: string[]) {
    this._firmwareRepositoryId = value;
  }
  public resetFirmwareRepositoryId() {
    this._firmwareRepositoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareRepositoryIdInput() {
    return this._firmwareRepositoryId;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string[]; 
  public get id() {
    return cdktf.Fn.tolist(this.getListAttribute('id'));
  }
  public set id(value: string[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // individual_teardown - computed: false, optional: true, required: false
  private _individualTeardown?: boolean | cdktf.IResolvable; 
  public get individualTeardown() {
    return this.getBooleanAttribute('individual_teardown');
  }
  public set individualTeardown(value: boolean | cdktf.IResolvable) {
    this._individualTeardown = value;
  }
  public resetIndividualTeardown() {
    this._individualTeardown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get individualTeardownInput() {
    return this._individualTeardown;
  }

  // license_repository_id - computed: false, optional: true, required: false
  private _licenseRepositoryId?: string[]; 
  public get licenseRepositoryId() {
    return cdktf.Fn.tolist(this.getListAttribute('license_repository_id'));
  }
  public set licenseRepositoryId(value: string[]) {
    this._licenseRepositoryId = value;
  }
  public resetLicenseRepositoryId() {
    this._licenseRepositoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseRepositoryIdInput() {
    return this._licenseRepositoryId;
  }

  // lifecycle_mode - computed: false, optional: true, required: false
  private _lifecycleMode?: boolean | cdktf.IResolvable; 
  public get lifecycleMode() {
    return this.getBooleanAttribute('lifecycle_mode');
  }
  public set lifecycleMode(value: boolean | cdktf.IResolvable) {
    this._lifecycleMode = value;
  }
  public resetLifecycleMode() {
    this._lifecycleMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleModeInput() {
    return this._lifecycleMode;
  }

  // no_op - computed: false, optional: true, required: false
  private _noOp?: boolean | cdktf.IResolvable; 
  public get noOp() {
    return this.getBooleanAttribute('no_op');
  }
  public set noOp(value: boolean | cdktf.IResolvable) {
    this._noOp = value;
  }
  public resetNoOp() {
    this._noOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noOpInput() {
    return this._noOp;
  }

  // number_of_deployments - computed: false, optional: true, required: false
  private _numberOfDeployments?: number[]; 
  public get numberOfDeployments() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('number_of_deployments')));
  }
  public set numberOfDeployments(value: number[]) {
    this._numberOfDeployments = value;
  }
  public resetNumberOfDeployments() {
    this._numberOfDeployments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfDeploymentsInput() {
    return this._numberOfDeployments;
  }

  // operation_data - computed: false, optional: true, required: false
  private _operationData?: string[]; 
  public get operationData() {
    return cdktf.Fn.tolist(this.getListAttribute('operation_data'));
  }
  public set operationData(value: string[]) {
    this._operationData = value;
  }
  public resetOperationData() {
    this._operationData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationDataInput() {
    return this._operationData;
  }

  // operation_status - computed: false, optional: true, required: false
  private _operationStatus?: string[]; 
  public get operationStatus() {
    return cdktf.Fn.tolist(this.getListAttribute('operation_status'));
  }
  public set operationStatus(value: string[]) {
    this._operationStatus = value;
  }
  public resetOperationStatus() {
    this._operationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationStatusInput() {
    return this._operationStatus;
  }

  // operation_type - computed: false, optional: true, required: false
  private _operationType?: string[]; 
  public get operationType() {
    return cdktf.Fn.tolist(this.getListAttribute('operation_type'));
  }
  public set operationType(value: string[]) {
    this._operationType = value;
  }
  public resetOperationType() {
    this._operationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationTypeInput() {
    return this._operationType;
  }

  // original_deployment_id - computed: false, optional: true, required: false
  private _originalDeploymentId?: string[]; 
  public get originalDeploymentId() {
    return cdktf.Fn.tolist(this.getListAttribute('original_deployment_id'));
  }
  public set originalDeploymentId(value: string[]) {
    this._originalDeploymentId = value;
  }
  public resetOriginalDeploymentId() {
    this._originalDeploymentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalDeploymentIdInput() {
    return this._originalDeploymentId;
  }

  // overall_device_health - computed: false, optional: true, required: false
  private _overallDeviceHealth?: string[]; 
  public get overallDeviceHealth() {
    return cdktf.Fn.tolist(this.getListAttribute('overall_device_health'));
  }
  public set overallDeviceHealth(value: string[]) {
    this._overallDeviceHealth = value;
  }
  public resetOverallDeviceHealth() {
    this._overallDeviceHealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overallDeviceHealthInput() {
    return this._overallDeviceHealth;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string[]; 
  public get owner() {
    return cdktf.Fn.tolist(this.getListAttribute('owner'));
  }
  public set owner(value: string[]) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string[]; 
  public get path() {
    return cdktf.Fn.tolist(this.getListAttribute('path'));
  }
  public set path(value: string[]) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // precalculated_device_health - computed: false, optional: true, required: false
  private _precalculatedDeviceHealth?: string[]; 
  public get precalculatedDeviceHealth() {
    return cdktf.Fn.tolist(this.getListAttribute('precalculated_device_health'));
  }
  public set precalculatedDeviceHealth(value: string[]) {
    this._precalculatedDeviceHealth = value;
  }
  public resetPrecalculatedDeviceHealth() {
    this._precalculatedDeviceHealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precalculatedDeviceHealthInput() {
    return this._precalculatedDeviceHealth;
  }

  // preconfigure_svm - computed: false, optional: true, required: false
  private _preconfigureSvm?: boolean | cdktf.IResolvable; 
  public get preconfigureSvm() {
    return this.getBooleanAttribute('preconfigure_svm');
  }
  public set preconfigureSvm(value: boolean | cdktf.IResolvable) {
    this._preconfigureSvm = value;
  }
  public resetPreconfigureSvm() {
    this._preconfigureSvm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preconfigureSvmInput() {
    return this._preconfigureSvm;
  }

  // preconfigure_svm_and_update - computed: false, optional: true, required: false
  private _preconfigureSvmAndUpdate?: boolean | cdktf.IResolvable; 
  public get preconfigureSvmAndUpdate() {
    return this.getBooleanAttribute('preconfigure_svm_and_update');
  }
  public set preconfigureSvmAndUpdate(value: boolean | cdktf.IResolvable) {
    this._preconfigureSvmAndUpdate = value;
  }
  public resetPreconfigureSvmAndUpdate() {
    this._preconfigureSvmAndUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preconfigureSvmAndUpdateInput() {
    return this._preconfigureSvmAndUpdate;
  }

  // remove_service - computed: false, optional: true, required: false
  private _removeService?: boolean | cdktf.IResolvable; 
  public get removeService() {
    return this.getBooleanAttribute('remove_service');
  }
  public set removeService(value: boolean | cdktf.IResolvable) {
    this._removeService = value;
  }
  public resetRemoveService() {
    this._removeService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeServiceInput() {
    return this._removeService;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: boolean | cdktf.IResolvable; 
  public get retry() {
    return this.getBooleanAttribute('retry');
  }
  public set retry(value: boolean | cdktf.IResolvable) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // scale_up - computed: false, optional: true, required: false
  private _scaleUp?: boolean | cdktf.IResolvable; 
  public get scaleUp() {
    return this.getBooleanAttribute('scale_up');
  }
  public set scaleUp(value: boolean | cdktf.IResolvable) {
    this._scaleUp = value;
  }
  public resetScaleUp() {
    this._scaleUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUpInput() {
    return this._scaleUp;
  }

  // schedule_date - computed: false, optional: true, required: false
  private _scheduleDate?: string[]; 
  public get scheduleDate() {
    return cdktf.Fn.tolist(this.getListAttribute('schedule_date'));
  }
  public set scheduleDate(value: string[]) {
    this._scheduleDate = value;
  }
  public resetScheduleDate() {
    this._scheduleDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleDateInput() {
    return this._scheduleDate;
  }

  // services_deployed - computed: false, optional: true, required: false
  private _servicesDeployed?: string[]; 
  public get servicesDeployed() {
    return cdktf.Fn.tolist(this.getListAttribute('services_deployed'));
  }
  public set servicesDeployed(value: string[]) {
    this._servicesDeployed = value;
  }
  public resetServicesDeployed() {
    this._servicesDeployed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesDeployedInput() {
    return this._servicesDeployed;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string[]; 
  public get status() {
    return cdktf.Fn.tolist(this.getListAttribute('status'));
  }
  public set status(value: string[]) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // teardown - computed: false, optional: true, required: false
  private _teardown?: boolean | cdktf.IResolvable; 
  public get teardown() {
    return this.getBooleanAttribute('teardown');
  }
  public set teardown(value: boolean | cdktf.IResolvable) {
    this._teardown = value;
  }
  public resetTeardown() {
    this._teardown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teardownInput() {
    return this._teardown;
  }

  // teardown_after_cancel - computed: false, optional: true, required: false
  private _teardownAfterCancel?: boolean | cdktf.IResolvable; 
  public get teardownAfterCancel() {
    return this.getBooleanAttribute('teardown_after_cancel');
  }
  public set teardownAfterCancel(value: boolean | cdktf.IResolvable) {
    this._teardownAfterCancel = value;
  }
  public resetTeardownAfterCancel() {
    this._teardownAfterCancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teardownAfterCancelInput() {
    return this._teardownAfterCancel;
  }

  // template_valid - computed: false, optional: true, required: false
  private _templateValid?: boolean | cdktf.IResolvable; 
  public get templateValid() {
    return this.getBooleanAttribute('template_valid');
  }
  public set templateValid(value: boolean | cdktf.IResolvable) {
    this._templateValid = value;
  }
  public resetTemplateValid() {
    this._templateValid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateValidInput() {
    return this._templateValid;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string[]; 
  public get timestamp() {
    return cdktf.Fn.tolist(this.getListAttribute('timestamp'));
  }
  public set timestamp(value: string[]) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // total_batch_count - computed: false, optional: true, required: false
  private _totalBatchCount?: string[]; 
  public get totalBatchCount() {
    return cdktf.Fn.tolist(this.getListAttribute('total_batch_count'));
  }
  public set totalBatchCount(value: string[]) {
    this._totalBatchCount = value;
  }
  public resetTotalBatchCount() {
    this._totalBatchCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBatchCountInput() {
    return this._totalBatchCount;
  }

  // total_num_of_steps - computed: false, optional: true, required: false
  private _totalNumOfSteps?: string[]; 
  public get totalNumOfSteps() {
    return cdktf.Fn.tolist(this.getListAttribute('total_num_of_steps'));
  }
  public set totalNumOfSteps(value: string[]) {
    this._totalNumOfSteps = value;
  }
  public resetTotalNumOfSteps() {
    this._totalNumOfSteps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalNumOfStepsInput() {
    return this._totalNumOfSteps;
  }

  // update_server_firmware - computed: false, optional: true, required: false
  private _updateServerFirmware?: boolean | cdktf.IResolvable; 
  public get updateServerFirmware() {
    return this.getBooleanAttribute('update_server_firmware');
  }
  public set updateServerFirmware(value: boolean | cdktf.IResolvable) {
    this._updateServerFirmware = value;
  }
  public resetUpdateServerFirmware() {
    this._updateServerFirmware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateServerFirmwareInput() {
    return this._updateServerFirmware;
  }

  // updated_by - computed: false, optional: true, required: false
  private _updatedBy?: string[]; 
  public get updatedBy() {
    return cdktf.Fn.tolist(this.getListAttribute('updated_by'));
  }
  public set updatedBy(value: string[]) {
    this._updatedBy = value;
  }
  public resetUpdatedBy() {
    this._updatedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedByInput() {
    return this._updatedBy;
  }

  // updated_date - computed: false, optional: true, required: false
  private _updatedDate?: string[]; 
  public get updatedDate() {
    return cdktf.Fn.tolist(this.getListAttribute('updated_date'));
  }
  public set updatedDate(value: string[]) {
    this._updatedDate = value;
  }
  public resetUpdatedDate() {
    this._updatedDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedDateInput() {
    return this._updatedDate;
  }

  // use_default_catalog - computed: false, optional: true, required: false
  private _useDefaultCatalog?: boolean | cdktf.IResolvable; 
  public get useDefaultCatalog() {
    return this.getBooleanAttribute('use_default_catalog');
  }
  public set useDefaultCatalog(value: boolean | cdktf.IResolvable) {
    this._useDefaultCatalog = value;
  }
  public resetUseDefaultCatalog() {
    this._useDefaultCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultCatalogInput() {
    return this._useDefaultCatalog;
  }

  // vds - computed: false, optional: true, required: false
  private _vds?: boolean | cdktf.IResolvable; 
  public get vds() {
    return this.getBooleanAttribute('vds');
  }
  public set vds(value: boolean | cdktf.IResolvable) {
    this._vds = value;
  }
  public resetVds() {
    this._vds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdsInput() {
    return this._vds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group powerflex_resource_group}
*/
export class DataPowerflexResourceGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_resource_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerflexResourceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerflexResourceGroup to import
  * @param importFromId The id of the existing DataPowerflexResourceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerflexResourceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_resource_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/resource_group powerflex_resource_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerflexResourceGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerflexResourceGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerflex_resource_group',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // resource_group_details - computed: true, optional: false, required: false
  private _resourceGroupDetails = new DataPowerflexResourceGroupResourceGroupDetailsList(this, "resource_group_details", true);
  public get resourceGroupDetails() {
    return this._resourceGroupDetails;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerflexResourceGroupFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerflexResourceGroupFilter) {
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
      filter: dataPowerflexResourceGroupFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerflexResourceGroupFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerflexResourceGroupFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
