// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerflexTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#filter DataPowerflexTemplate#filter}
  */
  readonly filter?: DataPowerflexTemplateFilter;
}
export interface DataPowerflexTemplateTemplateDetailsAssignedUsers {
}

export function dataPowerflexTemplateTemplateDetailsAssignedUsersToTerraform(struct?: DataPowerflexTemplateTemplateDetailsAssignedUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsAssignedUsersToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsAssignedUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsAssignedUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexTemplateTemplateDetailsAssignedUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsAssignedUsers | undefined) {
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

export class DataPowerflexTemplateTemplateDetailsAssignedUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexTemplateTemplateDetailsAssignedUsersOutputReference {
    return new DataPowerflexTemplateTemplateDetailsAssignedUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexTemplateTemplateDetailsComponentsComponentValidMessages {
}

export function dataPowerflexTemplateTemplateDetailsComponentsComponentValidMessagesToTerraform(struct?: DataPowerflexTemplateTemplateDetailsComponentsComponentValidMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsComponentsComponentValidMessagesToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsComponentsComponentValidMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsComponentsComponentValidMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexTemplateTemplateDetailsComponentsComponentValidMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsComponentsComponentValidMessages | undefined) {
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

export class DataPowerflexTemplateTemplateDetailsComponentsComponentValidMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexTemplateTemplateDetailsComponentsComponentValidMessagesOutputReference {
    return new DataPowerflexTemplateTemplateDetailsComponentsComponentValidMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexTemplateTemplateDetailsComponentsComponentValid {
}

export function dataPowerflexTemplateTemplateDetailsComponentsComponentValidToTerraform(struct?: DataPowerflexTemplateTemplateDetailsComponentsComponentValid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsComponentsComponentValidToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsComponentsComponentValid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsComponentsComponentValidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexTemplateTemplateDetailsComponentsComponentValid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsComponentsComponentValid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // messages - computed: true, optional: false, required: false
  private _messages = new DataPowerflexTemplateTemplateDetailsComponentsComponentValidMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }

  // valid - computed: true, optional: false, required: false
  public get valid() {
    return this.getBooleanAttribute('valid');
  }
}
export interface DataPowerflexTemplateTemplateDetailsComponentsResources {
}

export function dataPowerflexTemplateTemplateDetailsComponentsResourcesToTerraform(struct?: DataPowerflexTemplateTemplateDetailsComponentsResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsComponentsResourcesToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsComponentsResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsComponentsResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexTemplateTemplateDetailsComponentsResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsComponentsResources | undefined) {
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

export class DataPowerflexTemplateTemplateDetailsComponentsResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexTemplateTemplateDetailsComponentsResourcesOutputReference {
    return new DataPowerflexTemplateTemplateDetailsComponentsResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexTemplateTemplateDetailsComponents {
}

export function dataPowerflexTemplateTemplateDetailsComponentsToTerraform(struct?: DataPowerflexTemplateTemplateDetailsComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsComponentsToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexTemplateTemplateDetailsComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsComponents | undefined) {
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
  private _componentValid = new DataPowerflexTemplateTemplateDetailsComponentsComponentValidOutputReference(this, "component_valid");
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
  private _resources = new DataPowerflexTemplateTemplateDetailsComponentsResourcesList(this, "resources", false);
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

export class DataPowerflexTemplateTemplateDetailsComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexTemplateTemplateDetailsComponentsOutputReference {
    return new DataPowerflexTemplateTemplateDetailsComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexTemplateTemplateDetailsConfigurationCategories {
}

export function dataPowerflexTemplateTemplateDetailsConfigurationCategoriesToTerraform(struct?: DataPowerflexTemplateTemplateDetailsConfigurationCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsConfigurationCategoriesToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsConfigurationCategories): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsConfigurationCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexTemplateTemplateDetailsConfigurationCategories | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsConfigurationCategories | undefined) {
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

export class DataPowerflexTemplateTemplateDetailsConfigurationCategoriesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexTemplateTemplateDetailsConfigurationCategoriesOutputReference {
    return new DataPowerflexTemplateTemplateDetailsConfigurationCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexTemplateTemplateDetailsConfiguration {
}

export function dataPowerflexTemplateTemplateDetailsConfigurationToTerraform(struct?: DataPowerflexTemplateTemplateDetailsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsConfigurationToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexTemplateTemplateDetailsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // categories - computed: true, optional: false, required: false
  private _categories = new DataPowerflexTemplateTemplateDetailsConfigurationCategoriesList(this, "categories", false);
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
export interface DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsAssignedUsers {
}

export function dataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsAssignedUsersToTerraform(struct?: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsAssignedUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsAssignedUsersToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsAssignedUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsAssignedUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsAssignedUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsAssignedUsers | undefined) {
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

export class DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsAssignedUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsAssignedUsersOutputReference {
    return new DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsAssignedUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentDevice {
}

export function dataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentDeviceToTerraform(struct?: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentDeviceToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentDevice | undefined) {
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

export class DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentDeviceList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentDeviceOutputReference {
    return new DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValidMessages {
}

export function dataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValidMessagesToTerraform(struct?: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValidMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValidMessagesToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValidMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValidMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValidMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValidMessages | undefined) {
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

export class DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValidMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValidMessagesOutputReference {
    return new DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValidMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValid {
}

export function dataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValidToTerraform(struct?: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValidToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // messages - computed: true, optional: false, required: false
  private _messages = new DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValidMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }

  // valid - computed: true, optional: false, required: false
  public get valid() {
    return this.getBooleanAttribute('valid');
  }
}
export interface DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValidationResponse {
}

export function dataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValidationResponseToTerraform(struct?: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValidationResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValidationResponseToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValidationResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValidationResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValidationResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValidationResponse | undefined) {
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
export interface DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsJobDetails {
}

export function dataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsJobDetailsToTerraform(struct?: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsJobDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsJobDetailsToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsJobDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsJobDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsJobDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsJobDetails | undefined) {
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

export class DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsJobDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsJobDetailsOutputReference {
    return new DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsJobDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsLicenseRepository {
}

export function dataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsLicenseRepositoryToTerraform(struct?: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsLicenseRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsLicenseRepositoryToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsLicenseRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsLicenseRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsLicenseRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsLicenseRepository | undefined) {
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
export interface DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsVms {
}

export function dataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsVmsToTerraform(struct?: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsVms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsVmsToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsVms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsVmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsVms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsVms | undefined) {
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

export class DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsVmsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsVmsOutputReference {
    return new DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsVmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeployments {
}

export function dataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsToTerraform(struct?: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeployments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeployments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeployments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeployments | undefined) {
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
  private _assignedUsers = new DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsAssignedUsersList(this, "assigned_users", false);
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
  private _deploymentDevice = new DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentDeviceList(this, "deployment_device", false);
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
  private _deploymentValid = new DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValidOutputReference(this, "deployment_valid");
  public get deploymentValid() {
    return this._deploymentValid;
  }

  // deployment_validation_response - computed: true, optional: false, required: false
  private _deploymentValidationResponse = new DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsDeploymentValidationResponseOutputReference(this, "deployment_validation_response");
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
  private _jobDetails = new DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsJobDetailsList(this, "job_details", false);
  public get jobDetails() {
    return this._jobDetails;
  }

  // license_repository - computed: true, optional: false, required: false
  private _licenseRepository = new DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsLicenseRepositoryOutputReference(this, "license_repository");
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
  private _vms = new DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsVmsList(this, "vms", false);
  public get vms() {
    return this._vms;
  }
}

export class DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsOutputReference {
    return new DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareBundlesSoftwareComponents {
}

export function dataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareBundlesSoftwareComponentsToTerraform(struct?: DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareBundlesSoftwareComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareBundlesSoftwareComponentsToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareBundlesSoftwareComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareBundlesSoftwareComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareBundlesSoftwareComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareBundlesSoftwareComponents | undefined) {
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

export class DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareBundlesSoftwareComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareBundlesSoftwareComponentsOutputReference {
    return new DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareBundlesSoftwareComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareBundles {
}

export function dataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareBundlesToTerraform(struct?: DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareBundlesToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareBundles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareBundles | undefined) {
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
  private _softwareComponents = new DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareBundlesSoftwareComponentsList(this, "software_components", false);
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

export class DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareBundlesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareBundlesOutputReference {
    return new DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareComponents {
}

export function dataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareComponentsToTerraform(struct?: DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareComponentsToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareComponents | undefined) {
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

export class DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareComponentsOutputReference {
    return new DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexTemplateTemplateDetailsFirmwareRepository {
}

export function dataPowerflexTemplateTemplateDetailsFirmwareRepositoryToTerraform(struct?: DataPowerflexTemplateTemplateDetailsFirmwareRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsFirmwareRepositoryToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsFirmwareRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsFirmwareRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexTemplateTemplateDetailsFirmwareRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsFirmwareRepository | undefined) {
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
  private _deployments = new DataPowerflexTemplateTemplateDetailsFirmwareRepositoryDeploymentsList(this, "deployments", false);
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
  private _softwareBundles = new DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareBundlesList(this, "software_bundles", false);
  public get softwareBundles() {
    return this._softwareBundles;
  }

  // software_components - computed: true, optional: false, required: false
  private _softwareComponents = new DataPowerflexTemplateTemplateDetailsFirmwareRepositorySoftwareComponentsList(this, "software_components", false);
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
export interface DataPowerflexTemplateTemplateDetailsLicenseRepository {
}

export function dataPowerflexTemplateTemplateDetailsLicenseRepositoryToTerraform(struct?: DataPowerflexTemplateTemplateDetailsLicenseRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsLicenseRepositoryToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsLicenseRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsLicenseRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexTemplateTemplateDetailsLicenseRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsLicenseRepository | undefined) {
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
export interface DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationIpRange {
}

export function dataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationIpRangeToTerraform(struct?: DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationIpRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationIpRangeToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationIpRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationIpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationIpRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationIpRange | undefined) {
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

export class DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationIpRangeList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationIpRangeOutputReference {
    return new DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationIpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationStaticRoute {
}

export function dataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationStaticRouteToTerraform(struct?: DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationStaticRouteToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationStaticRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationStaticRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationStaticRoute | undefined) {
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

export class DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationStaticRouteList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationStaticRouteOutputReference {
    return new DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationStaticRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfiguration {
}

export function dataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationToTerraform(struct?: DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfiguration | undefined) {
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
  private _ipRange = new DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationIpRangeList(this, "ip_range", false);
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
  private _staticRoute = new DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationStaticRouteList(this, "static_route", false);
  public get staticRoute() {
    return this._staticRoute;
  }

  // subnet - computed: true, optional: false, required: false
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
}
export interface DataPowerflexTemplateTemplateDetailsNetworks {
}

export function dataPowerflexTemplateTemplateDetailsNetworksToTerraform(struct?: DataPowerflexTemplateTemplateDetailsNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsNetworksToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexTemplateTemplateDetailsNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsNetworks | undefined) {
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
  private _staticNetworkConfiguration = new DataPowerflexTemplateTemplateDetailsNetworksStaticNetworkConfigurationOutputReference(this, "static_network_configuration");
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

export class DataPowerflexTemplateTemplateDetailsNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexTemplateTemplateDetailsNetworksOutputReference {
    return new DataPowerflexTemplateTemplateDetailsNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexTemplateTemplateDetailsTemplateValidMessages {
}

export function dataPowerflexTemplateTemplateDetailsTemplateValidMessagesToTerraform(struct?: DataPowerflexTemplateTemplateDetailsTemplateValidMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsTemplateValidMessagesToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsTemplateValidMessages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsTemplateValidMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexTemplateTemplateDetailsTemplateValidMessages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsTemplateValidMessages | undefined) {
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

export class DataPowerflexTemplateTemplateDetailsTemplateValidMessagesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexTemplateTemplateDetailsTemplateValidMessagesOutputReference {
    return new DataPowerflexTemplateTemplateDetailsTemplateValidMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexTemplateTemplateDetailsTemplateValid {
}

export function dataPowerflexTemplateTemplateDetailsTemplateValidToTerraform(struct?: DataPowerflexTemplateTemplateDetailsTemplateValid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsTemplateValidToHclTerraform(struct?: DataPowerflexTemplateTemplateDetailsTemplateValid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsTemplateValidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexTemplateTemplateDetailsTemplateValid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetailsTemplateValid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // messages - computed: true, optional: false, required: false
  private _messages = new DataPowerflexTemplateTemplateDetailsTemplateValidMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }

  // valid - computed: true, optional: false, required: false
  public get valid() {
    return this.getBooleanAttribute('valid');
  }
}
export interface DataPowerflexTemplateTemplateDetails {
}

export function dataPowerflexTemplateTemplateDetailsToTerraform(struct?: DataPowerflexTemplateTemplateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexTemplateTemplateDetailsToHclTerraform(struct?: DataPowerflexTemplateTemplateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexTemplateTemplateDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexTemplateTemplateDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateTemplateDetails | undefined) {
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
  private _assignedUsers = new DataPowerflexTemplateTemplateDetailsAssignedUsersList(this, "assigned_users", false);
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
  private _components = new DataPowerflexTemplateTemplateDetailsComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }

  // configuration - computed: true, optional: false, required: false
  private _configuration = new DataPowerflexTemplateTemplateDetailsConfigurationOutputReference(this, "configuration");
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
  private _firmwareRepository = new DataPowerflexTemplateTemplateDetailsFirmwareRepositoryOutputReference(this, "firmware_repository");
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
  private _licenseRepository = new DataPowerflexTemplateTemplateDetailsLicenseRepositoryOutputReference(this, "license_repository");
  public get licenseRepository() {
    return this._licenseRepository;
  }

  // manage_firmware - computed: true, optional: false, required: false
  public get manageFirmware() {
    return this.getBooleanAttribute('manage_firmware');
  }

  // networks - computed: true, optional: false, required: false
  private _networks = new DataPowerflexTemplateTemplateDetailsNetworksList(this, "networks", false);
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
  private _templateValid = new DataPowerflexTemplateTemplateDetailsTemplateValidOutputReference(this, "template_valid");
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

export class DataPowerflexTemplateTemplateDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexTemplateTemplateDetailsOutputReference {
    return new DataPowerflexTemplateTemplateDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexTemplateFilter {
  /**
  * Value for all_users_allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#all_users_allowed DataPowerflexTemplate#all_users_allowed}
  */
  readonly allUsersAllowed?: boolean | cdktf.IResolvable;
  /**
  * List of brownfield_template_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#brownfield_template_type DataPowerflexTemplate#brownfield_template_type}
  */
  readonly brownfieldTemplateType?: string[];
  /**
  * List of category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#category DataPowerflexTemplate#category}
  */
  readonly category?: string[];
  /**
  * List of cluster_count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#cluster_count DataPowerflexTemplate#cluster_count}
  */
  readonly clusterCount?: number[];
  /**
  * List of created_by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#created_by DataPowerflexTemplate#created_by}
  */
  readonly createdBy?: string[];
  /**
  * List of created_date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#created_date DataPowerflexTemplate#created_date}
  */
  readonly createdDate?: string[];
  /**
  * Value for draft
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#draft DataPowerflexTemplate#draft}
  */
  readonly draft?: boolean | cdktf.IResolvable;
  /**
  * List of id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#id DataPowerflexTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * Value for in_configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#in_configuration DataPowerflexTemplate#in_configuration}
  */
  readonly inConfiguration?: boolean | cdktf.IResolvable;
  /**
  * List of last_deployed_date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#last_deployed_date DataPowerflexTemplate#last_deployed_date}
  */
  readonly lastDeployedDate?: string[];
  /**
  * Value for manage_firmware
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#manage_firmware DataPowerflexTemplate#manage_firmware}
  */
  readonly manageFirmware?: boolean | cdktf.IResolvable;
  /**
  * List of original_template_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#original_template_id DataPowerflexTemplate#original_template_id}
  */
  readonly originalTemplateId?: string[];
  /**
  * List of sdnas_count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#sdnas_count DataPowerflexTemplate#sdnas_count}
  */
  readonly sdnasCount?: number[];
  /**
  * List of server_count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#server_count DataPowerflexTemplate#server_count}
  */
  readonly serverCount?: number[];
  /**
  * List of service_count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#service_count DataPowerflexTemplate#service_count}
  */
  readonly serviceCount?: number[];
  /**
  * List of storage_count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#storage_count DataPowerflexTemplate#storage_count}
  */
  readonly storageCount?: number[];
  /**
  * List of switch_count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#switch_count DataPowerflexTemplate#switch_count}
  */
  readonly switchCount?: number[];
  /**
  * List of template_description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#template_description DataPowerflexTemplate#template_description}
  */
  readonly templateDescription?: string[];
  /**
  * Value for template_locked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#template_locked DataPowerflexTemplate#template_locked}
  */
  readonly templateLocked?: boolean | cdktf.IResolvable;
  /**
  * List of template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#template_name DataPowerflexTemplate#template_name}
  */
  readonly templateName?: string[];
  /**
  * List of template_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#template_type DataPowerflexTemplate#template_type}
  */
  readonly templateType?: string[];
  /**
  * List of template_version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#template_version DataPowerflexTemplate#template_version}
  */
  readonly templateVersion?: string[];
  /**
  * List of updated_by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#updated_by DataPowerflexTemplate#updated_by}
  */
  readonly updatedBy?: string[];
  /**
  * List of updated_date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#updated_date DataPowerflexTemplate#updated_date}
  */
  readonly updatedDate?: string[];
  /**
  * Value for use_default_catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#use_default_catalog DataPowerflexTemplate#use_default_catalog}
  */
  readonly useDefaultCatalog?: boolean | cdktf.IResolvable;
  /**
  * List of vm_count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#vm_count DataPowerflexTemplate#vm_count}
  */
  readonly vmCount?: number[];
}

export function dataPowerflexTemplateFilterToTerraform(struct?: DataPowerflexTemplateFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_users_allowed: cdktf.booleanToTerraform(struct!.allUsersAllowed),
    brownfield_template_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.brownfieldTemplateType),
    category: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.category),
    cluster_count: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.clusterCount),
    created_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.createdBy),
    created_date: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.createdDate),
    draft: cdktf.booleanToTerraform(struct!.draft),
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    in_configuration: cdktf.booleanToTerraform(struct!.inConfiguration),
    last_deployed_date: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lastDeployedDate),
    manage_firmware: cdktf.booleanToTerraform(struct!.manageFirmware),
    original_template_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.originalTemplateId),
    sdnas_count: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.sdnasCount),
    server_count: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.serverCount),
    service_count: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.serviceCount),
    storage_count: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.storageCount),
    switch_count: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.switchCount),
    template_description: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.templateDescription),
    template_locked: cdktf.booleanToTerraform(struct!.templateLocked),
    template_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.templateName),
    template_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.templateType),
    template_version: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.templateVersion),
    updated_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.updatedBy),
    updated_date: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.updatedDate),
    use_default_catalog: cdktf.booleanToTerraform(struct!.useDefaultCatalog),
    vm_count: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.vmCount),
  }
}


export function dataPowerflexTemplateFilterToHclTerraform(struct?: DataPowerflexTemplateFilter | cdktf.IResolvable): any {
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
    brownfield_template_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.brownfieldTemplateType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    category: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.category),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    cluster_count: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.clusterCount),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
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
    draft: {
      value: cdktf.booleanToHclTerraform(struct!.draft),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    in_configuration: {
      value: cdktf.booleanToHclTerraform(struct!.inConfiguration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_deployed_date: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lastDeployedDate),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    manage_firmware: {
      value: cdktf.booleanToHclTerraform(struct!.manageFirmware),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    original_template_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.originalTemplateId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sdnas_count: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.sdnasCount),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    server_count: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.serverCount),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    service_count: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.serviceCount),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    storage_count: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.storageCount),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    switch_count: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.switchCount),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    template_description: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.templateDescription),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    template_locked: {
      value: cdktf.booleanToHclTerraform(struct!.templateLocked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    template_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.templateName),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    template_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.templateType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    template_version: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.templateVersion),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    vm_count: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.vmCount),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerflexTemplateFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexTemplateFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allUsersAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.allUsersAllowed = this._allUsersAllowed;
    }
    if (this._brownfieldTemplateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.brownfieldTemplateType = this._brownfieldTemplateType;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._clusterCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCount = this._clusterCount;
    }
    if (this._createdBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBy = this._createdBy;
    }
    if (this._createdDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdDate = this._createdDate;
    }
    if (this._draft !== undefined) {
      hasAnyValues = true;
      internalValueResult.draft = this._draft;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.inConfiguration = this._inConfiguration;
    }
    if (this._lastDeployedDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastDeployedDate = this._lastDeployedDate;
    }
    if (this._manageFirmware !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageFirmware = this._manageFirmware;
    }
    if (this._originalTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalTemplateId = this._originalTemplateId;
    }
    if (this._sdnasCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdnasCount = this._sdnasCount;
    }
    if (this._serverCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCount = this._serverCount;
    }
    if (this._serviceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceCount = this._serviceCount;
    }
    if (this._storageCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageCount = this._storageCount;
    }
    if (this._switchCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchCount = this._switchCount;
    }
    if (this._templateDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateDescription = this._templateDescription;
    }
    if (this._templateLocked !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateLocked = this._templateLocked;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    if (this._templateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateType = this._templateType;
    }
    if (this._templateVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateVersion = this._templateVersion;
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
    if (this._vmCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmCount = this._vmCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexTemplateFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allUsersAllowed = undefined;
      this._brownfieldTemplateType = undefined;
      this._category = undefined;
      this._clusterCount = undefined;
      this._createdBy = undefined;
      this._createdDate = undefined;
      this._draft = undefined;
      this._id = undefined;
      this._inConfiguration = undefined;
      this._lastDeployedDate = undefined;
      this._manageFirmware = undefined;
      this._originalTemplateId = undefined;
      this._sdnasCount = undefined;
      this._serverCount = undefined;
      this._serviceCount = undefined;
      this._storageCount = undefined;
      this._switchCount = undefined;
      this._templateDescription = undefined;
      this._templateLocked = undefined;
      this._templateName = undefined;
      this._templateType = undefined;
      this._templateVersion = undefined;
      this._updatedBy = undefined;
      this._updatedDate = undefined;
      this._useDefaultCatalog = undefined;
      this._vmCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allUsersAllowed = value.allUsersAllowed;
      this._brownfieldTemplateType = value.brownfieldTemplateType;
      this._category = value.category;
      this._clusterCount = value.clusterCount;
      this._createdBy = value.createdBy;
      this._createdDate = value.createdDate;
      this._draft = value.draft;
      this._id = value.id;
      this._inConfiguration = value.inConfiguration;
      this._lastDeployedDate = value.lastDeployedDate;
      this._manageFirmware = value.manageFirmware;
      this._originalTemplateId = value.originalTemplateId;
      this._sdnasCount = value.sdnasCount;
      this._serverCount = value.serverCount;
      this._serviceCount = value.serviceCount;
      this._storageCount = value.storageCount;
      this._switchCount = value.switchCount;
      this._templateDescription = value.templateDescription;
      this._templateLocked = value.templateLocked;
      this._templateName = value.templateName;
      this._templateType = value.templateType;
      this._templateVersion = value.templateVersion;
      this._updatedBy = value.updatedBy;
      this._updatedDate = value.updatedDate;
      this._useDefaultCatalog = value.useDefaultCatalog;
      this._vmCount = value.vmCount;
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

  // brownfield_template_type - computed: false, optional: true, required: false
  private _brownfieldTemplateType?: string[]; 
  public get brownfieldTemplateType() {
    return cdktf.Fn.tolist(this.getListAttribute('brownfield_template_type'));
  }
  public set brownfieldTemplateType(value: string[]) {
    this._brownfieldTemplateType = value;
  }
  public resetBrownfieldTemplateType() {
    this._brownfieldTemplateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brownfieldTemplateTypeInput() {
    return this._brownfieldTemplateType;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string[]; 
  public get category() {
    return cdktf.Fn.tolist(this.getListAttribute('category'));
  }
  public set category(value: string[]) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // cluster_count - computed: false, optional: true, required: false
  private _clusterCount?: number[]; 
  public get clusterCount() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('cluster_count')));
  }
  public set clusterCount(value: number[]) {
    this._clusterCount = value;
  }
  public resetClusterCount() {
    this._clusterCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCountInput() {
    return this._clusterCount;
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

  // draft - computed: false, optional: true, required: false
  private _draft?: boolean | cdktf.IResolvable; 
  public get draft() {
    return this.getBooleanAttribute('draft');
  }
  public set draft(value: boolean | cdktf.IResolvable) {
    this._draft = value;
  }
  public resetDraft() {
    this._draft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get draftInput() {
    return this._draft;
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

  // in_configuration - computed: false, optional: true, required: false
  private _inConfiguration?: boolean | cdktf.IResolvable; 
  public get inConfiguration() {
    return this.getBooleanAttribute('in_configuration');
  }
  public set inConfiguration(value: boolean | cdktf.IResolvable) {
    this._inConfiguration = value;
  }
  public resetInConfiguration() {
    this._inConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inConfigurationInput() {
    return this._inConfiguration;
  }

  // last_deployed_date - computed: false, optional: true, required: false
  private _lastDeployedDate?: string[]; 
  public get lastDeployedDate() {
    return cdktf.Fn.tolist(this.getListAttribute('last_deployed_date'));
  }
  public set lastDeployedDate(value: string[]) {
    this._lastDeployedDate = value;
  }
  public resetLastDeployedDate() {
    this._lastDeployedDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastDeployedDateInput() {
    return this._lastDeployedDate;
  }

  // manage_firmware - computed: false, optional: true, required: false
  private _manageFirmware?: boolean | cdktf.IResolvable; 
  public get manageFirmware() {
    return this.getBooleanAttribute('manage_firmware');
  }
  public set manageFirmware(value: boolean | cdktf.IResolvable) {
    this._manageFirmware = value;
  }
  public resetManageFirmware() {
    this._manageFirmware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageFirmwareInput() {
    return this._manageFirmware;
  }

  // original_template_id - computed: false, optional: true, required: false
  private _originalTemplateId?: string[]; 
  public get originalTemplateId() {
    return cdktf.Fn.tolist(this.getListAttribute('original_template_id'));
  }
  public set originalTemplateId(value: string[]) {
    this._originalTemplateId = value;
  }
  public resetOriginalTemplateId() {
    this._originalTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalTemplateIdInput() {
    return this._originalTemplateId;
  }

  // sdnas_count - computed: false, optional: true, required: false
  private _sdnasCount?: number[]; 
  public get sdnasCount() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('sdnas_count')));
  }
  public set sdnasCount(value: number[]) {
    this._sdnasCount = value;
  }
  public resetSdnasCount() {
    this._sdnasCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdnasCountInput() {
    return this._sdnasCount;
  }

  // server_count - computed: false, optional: true, required: false
  private _serverCount?: number[]; 
  public get serverCount() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('server_count')));
  }
  public set serverCount(value: number[]) {
    this._serverCount = value;
  }
  public resetServerCount() {
    this._serverCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCountInput() {
    return this._serverCount;
  }

  // service_count - computed: false, optional: true, required: false
  private _serviceCount?: number[]; 
  public get serviceCount() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('service_count')));
  }
  public set serviceCount(value: number[]) {
    this._serviceCount = value;
  }
  public resetServiceCount() {
    this._serviceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCountInput() {
    return this._serviceCount;
  }

  // storage_count - computed: false, optional: true, required: false
  private _storageCount?: number[]; 
  public get storageCount() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('storage_count')));
  }
  public set storageCount(value: number[]) {
    this._storageCount = value;
  }
  public resetStorageCount() {
    this._storageCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCountInput() {
    return this._storageCount;
  }

  // switch_count - computed: false, optional: true, required: false
  private _switchCount?: number[]; 
  public get switchCount() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('switch_count')));
  }
  public set switchCount(value: number[]) {
    this._switchCount = value;
  }
  public resetSwitchCount() {
    this._switchCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchCountInput() {
    return this._switchCount;
  }

  // template_description - computed: false, optional: true, required: false
  private _templateDescription?: string[]; 
  public get templateDescription() {
    return cdktf.Fn.tolist(this.getListAttribute('template_description'));
  }
  public set templateDescription(value: string[]) {
    this._templateDescription = value;
  }
  public resetTemplateDescription() {
    this._templateDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDescriptionInput() {
    return this._templateDescription;
  }

  // template_locked - computed: false, optional: true, required: false
  private _templateLocked?: boolean | cdktf.IResolvable; 
  public get templateLocked() {
    return this.getBooleanAttribute('template_locked');
  }
  public set templateLocked(value: boolean | cdktf.IResolvable) {
    this._templateLocked = value;
  }
  public resetTemplateLocked() {
    this._templateLocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateLockedInput() {
    return this._templateLocked;
  }

  // template_name - computed: false, optional: true, required: false
  private _templateName?: string[]; 
  public get templateName() {
    return cdktf.Fn.tolist(this.getListAttribute('template_name'));
  }
  public set templateName(value: string[]) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // template_type - computed: false, optional: true, required: false
  private _templateType?: string[]; 
  public get templateType() {
    return cdktf.Fn.tolist(this.getListAttribute('template_type'));
  }
  public set templateType(value: string[]) {
    this._templateType = value;
  }
  public resetTemplateType() {
    this._templateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTypeInput() {
    return this._templateType;
  }

  // template_version - computed: false, optional: true, required: false
  private _templateVersion?: string[]; 
  public get templateVersion() {
    return cdktf.Fn.tolist(this.getListAttribute('template_version'));
  }
  public set templateVersion(value: string[]) {
    this._templateVersion = value;
  }
  public resetTemplateVersion() {
    this._templateVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVersionInput() {
    return this._templateVersion;
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

  // vm_count - computed: false, optional: true, required: false
  private _vmCount?: number[]; 
  public get vmCount() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('vm_count')));
  }
  public set vmCount(value: number[]) {
    this._vmCount = value;
  }
  public resetVmCount() {
    this._vmCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmCountInput() {
    return this._vmCount;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template powerflex_template}
*/
export class DataPowerflexTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerflexTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerflexTemplate to import
  * @param importFromId The id of the existing DataPowerflexTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerflexTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/template powerflex_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerflexTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerflexTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerflex_template',
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

  // template_details - computed: true, optional: false, required: false
  private _templateDetails = new DataPowerflexTemplateTemplateDetailsList(this, "template_details", true);
  public get templateDetails() {
    return this._templateDetails;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerflexTemplateFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerflexTemplateFilter) {
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
      filter: dataPowerflexTemplateFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerflexTemplateFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerflexTemplateFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
