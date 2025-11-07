// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerflexNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#filter DataPowerflexNode#filter}
  */
  readonly filter?: DataPowerflexNodeFilter;
}
export interface DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupGroupUserListGroupUsers {
}

export function dataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupGroupUserListGroupUsersToTerraform(struct?: DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupGroupUserListGroupUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupGroupUserListGroupUsersToHclTerraform(struct?: DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupGroupUserListGroupUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupGroupUserListGroupUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupGroupUserListGroupUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupGroupUserListGroupUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // user_seq_id - computed: true, optional: false, required: false
  public get userSeqId() {
    return this.getNumberAttribute('user_seq_id');
  }
}

export class DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupGroupUserListGroupUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupGroupUserListGroupUsersOutputReference {
    return new DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupGroupUserListGroupUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupGroupUserListStruct {
}

export function dataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupGroupUserListStructToTerraform(struct?: DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupGroupUserListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupGroupUserListStructToHclTerraform(struct?: DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupGroupUserListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupGroupUserListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupGroupUserListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupGroupUserListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_users - computed: true, optional: false, required: false
  private _groupUsers = new DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupGroupUserListGroupUsersList(this, "group_users", false);
  public get groupUsers() {
    return this._groupUsers;
  }

  // total_records - computed: true, optional: false, required: false
  public get totalRecords() {
    return this.getNumberAttribute('total_records');
  }
}
export interface DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroup {
}

export function dataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupToTerraform(struct?: DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupToHclTerraform(struct?: DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroup | undefined) {
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

  // group_description - computed: true, optional: false, required: false
  public get groupDescription() {
    return this.getStringAttribute('group_description');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // group_seq_id - computed: true, optional: false, required: false
  public get groupSeqId() {
    return this.getNumberAttribute('group_seq_id');
  }

  // group_user_list - computed: true, optional: false, required: false
  private _groupUserList = new DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupGroupUserListStructOutputReference(this, "group_user_list");
  public get groupUserList() {
    return this._groupUserList;
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

export class DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupOutputReference {
    return new DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexNodeNodeDetailsDeviceGroupListStruct {
}

export function dataPowerflexNodeNodeDetailsDeviceGroupListStructToTerraform(struct?: DataPowerflexNodeNodeDetailsDeviceGroupListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexNodeNodeDetailsDeviceGroupListStructToHclTerraform(struct?: DataPowerflexNodeNodeDetailsDeviceGroupListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexNodeNodeDetailsDeviceGroupListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexNodeNodeDetailsDeviceGroupListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexNodeNodeDetailsDeviceGroupListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_group - computed: true, optional: false, required: false
  private _deviceGroup = new DataPowerflexNodeNodeDetailsDeviceGroupListDeviceGroupList(this, "device_group", false);
  public get deviceGroup() {
    return this._deviceGroup;
  }
}
export interface DataPowerflexNodeNodeDetails {
}

export function dataPowerflexNodeNodeDetailsToTerraform(struct?: DataPowerflexNodeNodeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexNodeNodeDetailsToHclTerraform(struct?: DataPowerflexNodeNodeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexNodeNodeDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexNodeNodeDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexNodeNodeDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compliance - computed: true, optional: false, required: false
  public get compliance() {
    return this.getStringAttribute('compliance');
  }

  // compliance_check_date - computed: true, optional: false, required: false
  public get complianceCheckDate() {
    return this.getStringAttribute('compliance_check_date');
  }

  // cred_id - computed: true, optional: false, required: false
  public get credId() {
    return this.getStringAttribute('cred_id');
  }

  // current_ip_address - computed: true, optional: false, required: false
  public get currentIpAddress() {
    return this.getStringAttribute('current_ip_address');
  }

  // custom_firmware - computed: true, optional: false, required: false
  public get customFirmware() {
    return this.getBooleanAttribute('custom_firmware');
  }

  // device_group_list - computed: true, optional: false, required: false
  private _deviceGroupList = new DataPowerflexNodeNodeDetailsDeviceGroupListStructOutputReference(this, "device_group_list");
  public get deviceGroupList() {
    return this._deviceGroupList;
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // discover_device_type - computed: true, optional: false, required: false
  public get discoverDeviceType() {
    return this.getStringAttribute('discover_device_type');
  }

  // discovered_date - computed: true, optional: false, required: false
  public get discoveredDate() {
    return this.getStringAttribute('discovered_date');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // esxi_maint_mode - computed: true, optional: false, required: false
  public get esxiMaintMode() {
    return this.getNumberAttribute('esxi_maint_mode');
  }

  // facts - computed: true, optional: false, required: false
  public get facts() {
    return this.getStringAttribute('facts');
  }

  // failures_count - computed: true, optional: false, required: false
  public get failuresCount() {
    return this.getNumberAttribute('failures_count');
  }

  // flex_os_maint_mode - computed: true, optional: false, required: false
  public get flexOsMaintMode() {
    return this.getNumberAttribute('flex_os_maint_mode');
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // health_message - computed: true, optional: false, required: false
  public get healthMessage() {
    return this.getStringAttribute('health_message');
  }

  // in_use - computed: true, optional: false, required: false
  public get inUse() {
    return this.getBooleanAttribute('in_use');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // managed_state - computed: true, optional: false, required: false
  public get managedState() {
    return this.getStringAttribute('managed_state');
  }

  // manufacturer - computed: true, optional: false, required: false
  public get manufacturer() {
    return this.getStringAttribute('manufacturer');
  }

  // memory_in_gb - computed: true, optional: false, required: false
  public get memoryInGb() {
    return this.getNumberAttribute('memory_in_gb');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // needs_attention - computed: true, optional: false, required: false
  public get needsAttention() {
    return this.getBooleanAttribute('needs_attention');
  }

  // nics - computed: true, optional: false, required: false
  public get nics() {
    return this.getNumberAttribute('nics');
  }

  // number_of_cpus - computed: true, optional: false, required: false
  public get numberOfCpus() {
    return this.getNumberAttribute('number_of_cpus');
  }

  // operating_system - computed: true, optional: false, required: false
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }

  // puppet_cert_name - computed: true, optional: false, required: false
  public get puppetCertName() {
    return this.getStringAttribute('puppet_cert_name');
  }

  // ref_id - computed: true, optional: false, required: false
  public get refId() {
    return this.getStringAttribute('ref_id');
  }

  // service_tag - computed: true, optional: false, required: false
  public get serviceTag() {
    return this.getStringAttribute('service_tag');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_id - computed: true, optional: false, required: false
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
}

export class DataPowerflexNodeNodeDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexNodeNodeDetailsOutputReference {
    return new DataPowerflexNodeNodeDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexNodeFilter {
  /**
  * List of compliance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#compliance DataPowerflexNode#compliance}
  */
  readonly compliance?: string[];
  /**
  * List of compliance_check_date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#compliance_check_date DataPowerflexNode#compliance_check_date}
  */
  readonly complianceCheckDate?: string[];
  /**
  * List of cred_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#cred_id DataPowerflexNode#cred_id}
  */
  readonly credId?: string[];
  /**
  * List of current_ip_address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#current_ip_address DataPowerflexNode#current_ip_address}
  */
  readonly currentIpAddress?: string[];
  /**
  * Value for custom_firmware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#custom_firmware DataPowerflexNode#custom_firmware}
  */
  readonly customFirmware?: boolean | cdktf.IResolvable;
  /**
  * List of device_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#device_type DataPowerflexNode#device_type}
  */
  readonly deviceType?: string[];
  /**
  * List of discover_device_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#discover_device_type DataPowerflexNode#discover_device_type}
  */
  readonly discoverDeviceType?: string[];
  /**
  * List of discovered_date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#discovered_date DataPowerflexNode#discovered_date}
  */
  readonly discoveredDate?: string[];
  /**
  * List of display_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#display_name DataPowerflexNode#display_name}
  */
  readonly displayName?: string[];
  /**
  * List of esxi_maint_mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#esxi_maint_mode DataPowerflexNode#esxi_maint_mode}
  */
  readonly esxiMaintMode?: number[];
  /**
  * List of failures_count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#failures_count DataPowerflexNode#failures_count}
  */
  readonly failuresCount?: number[];
  /**
  * List of flex_os_maint_mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#flex_os_maint_mode DataPowerflexNode#flex_os_maint_mode}
  */
  readonly flexOsMaintMode?: number[];
  /**
  * List of health
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#health DataPowerflexNode#health}
  */
  readonly health?: string[];
  /**
  * List of health_message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#health_message DataPowerflexNode#health_message}
  */
  readonly healthMessage?: string[];
  /**
  * Value for in_use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#in_use DataPowerflexNode#in_use}
  */
  readonly inUse?: boolean | cdktf.IResolvable;
  /**
  * List of ip_address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#ip_address DataPowerflexNode#ip_address}
  */
  readonly ipAddress?: string[];
  /**
  * List of managed_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#managed_state DataPowerflexNode#managed_state}
  */
  readonly managedState?: string[];
  /**
  * List of manufacturer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#manufacturer DataPowerflexNode#manufacturer}
  */
  readonly manufacturer?: string[];
  /**
  * List of memory_in_gb
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#memory_in_gb DataPowerflexNode#memory_in_gb}
  */
  readonly memoryInGb?: number[];
  /**
  * List of model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#model DataPowerflexNode#model}
  */
  readonly model?: string[];
  /**
  * Value for needs_attention
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#needs_attention DataPowerflexNode#needs_attention}
  */
  readonly needsAttention?: boolean | cdktf.IResolvable;
  /**
  * List of nics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#nics DataPowerflexNode#nics}
  */
  readonly nics?: number[];
  /**
  * List of number_of_cpus
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#number_of_cpus DataPowerflexNode#number_of_cpus}
  */
  readonly numberOfCpus?: number[];
  /**
  * List of operating_system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#operating_system DataPowerflexNode#operating_system}
  */
  readonly operatingSystem?: string[];
  /**
  * List of puppet_cert_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#puppet_cert_name DataPowerflexNode#puppet_cert_name}
  */
  readonly puppetCertName?: string[];
  /**
  * List of ref_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#ref_id DataPowerflexNode#ref_id}
  */
  readonly refId?: string[];
  /**
  * List of service_tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#service_tag DataPowerflexNode#service_tag}
  */
  readonly serviceTag?: string[];
  /**
  * List of state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#state DataPowerflexNode#state}
  */
  readonly state?: string[];
  /**
  * List of system_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#system_id DataPowerflexNode#system_id}
  */
  readonly systemId?: string[];
}

export function dataPowerflexNodeFilterToTerraform(struct?: DataPowerflexNodeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compliance: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.compliance),
    compliance_check_date: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.complianceCheckDate),
    cred_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.credId),
    current_ip_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.currentIpAddress),
    custom_firmware: cdktf.booleanToTerraform(struct!.customFirmware),
    device_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deviceType),
    discover_device_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.discoverDeviceType),
    discovered_date: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.discoveredDate),
    display_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.displayName),
    esxi_maint_mode: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.esxiMaintMode),
    failures_count: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.failuresCount),
    flex_os_maint_mode: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.flexOsMaintMode),
    health: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.health),
    health_message: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.healthMessage),
    in_use: cdktf.booleanToTerraform(struct!.inUse),
    ip_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddress),
    managed_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.managedState),
    manufacturer: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.manufacturer),
    memory_in_gb: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.memoryInGb),
    model: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.model),
    needs_attention: cdktf.booleanToTerraform(struct!.needsAttention),
    nics: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.nics),
    number_of_cpus: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.numberOfCpus),
    operating_system: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.operatingSystem),
    puppet_cert_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.puppetCertName),
    ref_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.refId),
    service_tag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceTag),
    state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.state),
    system_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.systemId),
  }
}


export function dataPowerflexNodeFilterToHclTerraform(struct?: DataPowerflexNodeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compliance: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.compliance),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    compliance_check_date: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.complianceCheckDate),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    cred_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.credId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    current_ip_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.currentIpAddress),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    custom_firmware: {
      value: cdktf.booleanToHclTerraform(struct!.customFirmware),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deviceType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    discover_device_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.discoverDeviceType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    discovered_date: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.discoveredDate),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    display_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.displayName),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    esxi_maint_mode: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.esxiMaintMode),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    failures_count: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.failuresCount),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    flex_os_maint_mode: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.flexOsMaintMode),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    health: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.health),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    health_message: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.healthMessage),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    in_use: {
      value: cdktf.booleanToHclTerraform(struct!.inUse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddress),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    managed_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.managedState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    manufacturer: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.manufacturer),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    memory_in_gb: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.memoryInGb),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    model: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.model),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    needs_attention: {
      value: cdktf.booleanToHclTerraform(struct!.needsAttention),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nics: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.nics),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    number_of_cpus: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.numberOfCpus),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    operating_system: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.operatingSystem),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    puppet_cert_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.puppetCertName),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ref_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.refId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    service_tag: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceTag),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.state),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    system_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.systemId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerflexNodeFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexNodeFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compliance !== undefined) {
      hasAnyValues = true;
      internalValueResult.compliance = this._compliance;
    }
    if (this._complianceCheckDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.complianceCheckDate = this._complianceCheckDate;
    }
    if (this._credId !== undefined) {
      hasAnyValues = true;
      internalValueResult.credId = this._credId;
    }
    if (this._currentIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentIpAddress = this._currentIpAddress;
    }
    if (this._customFirmware !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFirmware = this._customFirmware;
    }
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    if (this._discoverDeviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoverDeviceType = this._discoverDeviceType;
    }
    if (this._discoveredDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveredDate = this._discoveredDate;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._esxiMaintMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.esxiMaintMode = this._esxiMaintMode;
    }
    if (this._failuresCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.failuresCount = this._failuresCount;
    }
    if (this._flexOsMaintMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.flexOsMaintMode = this._flexOsMaintMode;
    }
    if (this._health !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health;
    }
    if (this._healthMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthMessage = this._healthMessage;
    }
    if (this._inUse !== undefined) {
      hasAnyValues = true;
      internalValueResult.inUse = this._inUse;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._managedState !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedState = this._managedState;
    }
    if (this._manufacturer !== undefined) {
      hasAnyValues = true;
      internalValueResult.manufacturer = this._manufacturer;
    }
    if (this._memoryInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGb = this._memoryInGb;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._needsAttention !== undefined) {
      hasAnyValues = true;
      internalValueResult.needsAttention = this._needsAttention;
    }
    if (this._nics !== undefined) {
      hasAnyValues = true;
      internalValueResult.nics = this._nics;
    }
    if (this._numberOfCpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfCpus = this._numberOfCpus;
    }
    if (this._operatingSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystem = this._operatingSystem;
    }
    if (this._puppetCertName !== undefined) {
      hasAnyValues = true;
      internalValueResult.puppetCertName = this._puppetCertName;
    }
    if (this._refId !== undefined) {
      hasAnyValues = true;
      internalValueResult.refId = this._refId;
    }
    if (this._serviceTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTag = this._serviceTag;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._systemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemId = this._systemId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexNodeFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compliance = undefined;
      this._complianceCheckDate = undefined;
      this._credId = undefined;
      this._currentIpAddress = undefined;
      this._customFirmware = undefined;
      this._deviceType = undefined;
      this._discoverDeviceType = undefined;
      this._discoveredDate = undefined;
      this._displayName = undefined;
      this._esxiMaintMode = undefined;
      this._failuresCount = undefined;
      this._flexOsMaintMode = undefined;
      this._health = undefined;
      this._healthMessage = undefined;
      this._inUse = undefined;
      this._ipAddress = undefined;
      this._managedState = undefined;
      this._manufacturer = undefined;
      this._memoryInGb = undefined;
      this._model = undefined;
      this._needsAttention = undefined;
      this._nics = undefined;
      this._numberOfCpus = undefined;
      this._operatingSystem = undefined;
      this._puppetCertName = undefined;
      this._refId = undefined;
      this._serviceTag = undefined;
      this._state = undefined;
      this._systemId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compliance = value.compliance;
      this._complianceCheckDate = value.complianceCheckDate;
      this._credId = value.credId;
      this._currentIpAddress = value.currentIpAddress;
      this._customFirmware = value.customFirmware;
      this._deviceType = value.deviceType;
      this._discoverDeviceType = value.discoverDeviceType;
      this._discoveredDate = value.discoveredDate;
      this._displayName = value.displayName;
      this._esxiMaintMode = value.esxiMaintMode;
      this._failuresCount = value.failuresCount;
      this._flexOsMaintMode = value.flexOsMaintMode;
      this._health = value.health;
      this._healthMessage = value.healthMessage;
      this._inUse = value.inUse;
      this._ipAddress = value.ipAddress;
      this._managedState = value.managedState;
      this._manufacturer = value.manufacturer;
      this._memoryInGb = value.memoryInGb;
      this._model = value.model;
      this._needsAttention = value.needsAttention;
      this._nics = value.nics;
      this._numberOfCpus = value.numberOfCpus;
      this._operatingSystem = value.operatingSystem;
      this._puppetCertName = value.puppetCertName;
      this._refId = value.refId;
      this._serviceTag = value.serviceTag;
      this._state = value.state;
      this._systemId = value.systemId;
    }
  }

  // compliance - computed: false, optional: true, required: false
  private _compliance?: string[]; 
  public get compliance() {
    return cdktf.Fn.tolist(this.getListAttribute('compliance'));
  }
  public set compliance(value: string[]) {
    this._compliance = value;
  }
  public resetCompliance() {
    this._compliance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceInput() {
    return this._compliance;
  }

  // compliance_check_date - computed: false, optional: true, required: false
  private _complianceCheckDate?: string[]; 
  public get complianceCheckDate() {
    return cdktf.Fn.tolist(this.getListAttribute('compliance_check_date'));
  }
  public set complianceCheckDate(value: string[]) {
    this._complianceCheckDate = value;
  }
  public resetComplianceCheckDate() {
    this._complianceCheckDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceCheckDateInput() {
    return this._complianceCheckDate;
  }

  // cred_id - computed: false, optional: true, required: false
  private _credId?: string[]; 
  public get credId() {
    return cdktf.Fn.tolist(this.getListAttribute('cred_id'));
  }
  public set credId(value: string[]) {
    this._credId = value;
  }
  public resetCredId() {
    this._credId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credIdInput() {
    return this._credId;
  }

  // current_ip_address - computed: false, optional: true, required: false
  private _currentIpAddress?: string[]; 
  public get currentIpAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('current_ip_address'));
  }
  public set currentIpAddress(value: string[]) {
    this._currentIpAddress = value;
  }
  public resetCurrentIpAddress() {
    this._currentIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentIpAddressInput() {
    return this._currentIpAddress;
  }

  // custom_firmware - computed: false, optional: true, required: false
  private _customFirmware?: boolean | cdktf.IResolvable; 
  public get customFirmware() {
    return this.getBooleanAttribute('custom_firmware');
  }
  public set customFirmware(value: boolean | cdktf.IResolvable) {
    this._customFirmware = value;
  }
  public resetCustomFirmware() {
    this._customFirmware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFirmwareInput() {
    return this._customFirmware;
  }

  // device_type - computed: false, optional: true, required: false
  private _deviceType?: string[]; 
  public get deviceType() {
    return cdktf.Fn.tolist(this.getListAttribute('device_type'));
  }
  public set deviceType(value: string[]) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // discover_device_type - computed: false, optional: true, required: false
  private _discoverDeviceType?: string[]; 
  public get discoverDeviceType() {
    return cdktf.Fn.tolist(this.getListAttribute('discover_device_type'));
  }
  public set discoverDeviceType(value: string[]) {
    this._discoverDeviceType = value;
  }
  public resetDiscoverDeviceType() {
    this._discoverDeviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverDeviceTypeInput() {
    return this._discoverDeviceType;
  }

  // discovered_date - computed: false, optional: true, required: false
  private _discoveredDate?: string[]; 
  public get discoveredDate() {
    return cdktf.Fn.tolist(this.getListAttribute('discovered_date'));
  }
  public set discoveredDate(value: string[]) {
    this._discoveredDate = value;
  }
  public resetDiscoveredDate() {
    this._discoveredDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveredDateInput() {
    return this._discoveredDate;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string[]; 
  public get displayName() {
    return cdktf.Fn.tolist(this.getListAttribute('display_name'));
  }
  public set displayName(value: string[]) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // esxi_maint_mode - computed: false, optional: true, required: false
  private _esxiMaintMode?: number[]; 
  public get esxiMaintMode() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('esxi_maint_mode')));
  }
  public set esxiMaintMode(value: number[]) {
    this._esxiMaintMode = value;
  }
  public resetEsxiMaintMode() {
    this._esxiMaintMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esxiMaintModeInput() {
    return this._esxiMaintMode;
  }

  // failures_count - computed: false, optional: true, required: false
  private _failuresCount?: number[]; 
  public get failuresCount() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('failures_count')));
  }
  public set failuresCount(value: number[]) {
    this._failuresCount = value;
  }
  public resetFailuresCount() {
    this._failuresCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failuresCountInput() {
    return this._failuresCount;
  }

  // flex_os_maint_mode - computed: false, optional: true, required: false
  private _flexOsMaintMode?: number[]; 
  public get flexOsMaintMode() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('flex_os_maint_mode')));
  }
  public set flexOsMaintMode(value: number[]) {
    this._flexOsMaintMode = value;
  }
  public resetFlexOsMaintMode() {
    this._flexOsMaintMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexOsMaintModeInput() {
    return this._flexOsMaintMode;
  }

  // health - computed: false, optional: true, required: false
  private _health?: string[]; 
  public get health() {
    return cdktf.Fn.tolist(this.getListAttribute('health'));
  }
  public set health(value: string[]) {
    this._health = value;
  }
  public resetHealth() {
    this._health = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health;
  }

  // health_message - computed: false, optional: true, required: false
  private _healthMessage?: string[]; 
  public get healthMessage() {
    return cdktf.Fn.tolist(this.getListAttribute('health_message'));
  }
  public set healthMessage(value: string[]) {
    this._healthMessage = value;
  }
  public resetHealthMessage() {
    this._healthMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMessageInput() {
    return this._healthMessage;
  }

  // in_use - computed: false, optional: true, required: false
  private _inUse?: boolean | cdktf.IResolvable; 
  public get inUse() {
    return this.getBooleanAttribute('in_use');
  }
  public set inUse(value: boolean | cdktf.IResolvable) {
    this._inUse = value;
  }
  public resetInUse() {
    this._inUse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inUseInput() {
    return this._inUse;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string[]; 
  public get ipAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_address'));
  }
  public set ipAddress(value: string[]) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // managed_state - computed: false, optional: true, required: false
  private _managedState?: string[]; 
  public get managedState() {
    return cdktf.Fn.tolist(this.getListAttribute('managed_state'));
  }
  public set managedState(value: string[]) {
    this._managedState = value;
  }
  public resetManagedState() {
    this._managedState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedStateInput() {
    return this._managedState;
  }

  // manufacturer - computed: false, optional: true, required: false
  private _manufacturer?: string[]; 
  public get manufacturer() {
    return cdktf.Fn.tolist(this.getListAttribute('manufacturer'));
  }
  public set manufacturer(value: string[]) {
    this._manufacturer = value;
  }
  public resetManufacturer() {
    this._manufacturer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manufacturerInput() {
    return this._manufacturer;
  }

  // memory_in_gb - computed: false, optional: true, required: false
  private _memoryInGb?: number[]; 
  public get memoryInGb() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('memory_in_gb')));
  }
  public set memoryInGb(value: number[]) {
    this._memoryInGb = value;
  }
  public resetMemoryInGb() {
    this._memoryInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbInput() {
    return this._memoryInGb;
  }

  // model - computed: false, optional: true, required: false
  private _model?: string[]; 
  public get model() {
    return cdktf.Fn.tolist(this.getListAttribute('model'));
  }
  public set model(value: string[]) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // needs_attention - computed: false, optional: true, required: false
  private _needsAttention?: boolean | cdktf.IResolvable; 
  public get needsAttention() {
    return this.getBooleanAttribute('needs_attention');
  }
  public set needsAttention(value: boolean | cdktf.IResolvable) {
    this._needsAttention = value;
  }
  public resetNeedsAttention() {
    this._needsAttention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needsAttentionInput() {
    return this._needsAttention;
  }

  // nics - computed: false, optional: true, required: false
  private _nics?: number[]; 
  public get nics() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('nics')));
  }
  public set nics(value: number[]) {
    this._nics = value;
  }
  public resetNics() {
    this._nics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicsInput() {
    return this._nics;
  }

  // number_of_cpus - computed: false, optional: true, required: false
  private _numberOfCpus?: number[]; 
  public get numberOfCpus() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('number_of_cpus')));
  }
  public set numberOfCpus(value: number[]) {
    this._numberOfCpus = value;
  }
  public resetNumberOfCpus() {
    this._numberOfCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfCpusInput() {
    return this._numberOfCpus;
  }

  // operating_system - computed: false, optional: true, required: false
  private _operatingSystem?: string[]; 
  public get operatingSystem() {
    return cdktf.Fn.tolist(this.getListAttribute('operating_system'));
  }
  public set operatingSystem(value: string[]) {
    this._operatingSystem = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // puppet_cert_name - computed: false, optional: true, required: false
  private _puppetCertName?: string[]; 
  public get puppetCertName() {
    return cdktf.Fn.tolist(this.getListAttribute('puppet_cert_name'));
  }
  public set puppetCertName(value: string[]) {
    this._puppetCertName = value;
  }
  public resetPuppetCertName() {
    this._puppetCertName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get puppetCertNameInput() {
    return this._puppetCertName;
  }

  // ref_id - computed: false, optional: true, required: false
  private _refId?: string[]; 
  public get refId() {
    return cdktf.Fn.tolist(this.getListAttribute('ref_id'));
  }
  public set refId(value: string[]) {
    this._refId = value;
  }
  public resetRefId() {
    this._refId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refIdInput() {
    return this._refId;
  }

  // service_tag - computed: false, optional: true, required: false
  private _serviceTag?: string[]; 
  public get serviceTag() {
    return cdktf.Fn.tolist(this.getListAttribute('service_tag'));
  }
  public set serviceTag(value: string[]) {
    this._serviceTag = value;
  }
  public resetServiceTag() {
    this._serviceTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTagInput() {
    return this._serviceTag;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string[]; 
  public get state() {
    return cdktf.Fn.tolist(this.getListAttribute('state'));
  }
  public set state(value: string[]) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // system_id - computed: false, optional: true, required: false
  private _systemId?: string[]; 
  public get systemId() {
    return cdktf.Fn.tolist(this.getListAttribute('system_id'));
  }
  public set systemId(value: string[]) {
    this._systemId = value;
  }
  public resetSystemId() {
    this._systemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node powerflex_node}
*/
export class DataPowerflexNode extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerflexNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerflexNode to import
  * @param importFromId The id of the existing DataPowerflexNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerflexNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/node powerflex_node} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerflexNodeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerflexNodeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerflex_node',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0'
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

  // node_details - computed: true, optional: false, required: false
  private _nodeDetails = new DataPowerflexNodeNodeDetailsList(this, "node_details", true);
  public get nodeDetails() {
    return this._nodeDetails;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerflexNodeFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerflexNodeFilter) {
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
      filter: dataPowerflexNodeFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerflexNodeFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerflexNodeFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
