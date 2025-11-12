// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_best_practice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementBestPracticeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Best Practice ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_best_practice#best_practice_id DataCheckpointManagementBestPractice#best_practice_id}
  */
  readonly bestPracticeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_best_practice#id DataCheckpointManagementBestPractice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_best_practice#name DataCheckpointManagementBestPractice#name}
  */
  readonly name?: string;
  /**
  * Show the applicable regulations of the Best Practice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_best_practice#show_regulations DataCheckpointManagementBestPractice#show_regulations}
  */
  readonly showRegulations?: boolean | cdktf.IResolvable;
  /**
  * Object unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_best_practice#uid DataCheckpointManagementBestPractice#uid}
  */
  readonly uid?: string;
}
export interface DataCheckpointManagementBestPracticeRegulations {
}

export function dataCheckpointManagementBestPracticeRegulationsToTerraform(struct?: DataCheckpointManagementBestPracticeRegulations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeRegulationsToHclTerraform(struct?: DataCheckpointManagementBestPracticeRegulations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeRegulationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeRegulations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeRegulations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // regulation_name - computed: true, optional: false, required: false
  public get regulationName() {
    return this.getStringAttribute('regulation_name');
  }

  // requirement_description - computed: true, optional: false, required: false
  public get requirementDescription() {
    return this.getStringAttribute('requirement_description');
  }

  // requirement_id - computed: true, optional: false, required: false
  public get requirementId() {
    return this.getStringAttribute('requirement_id');
  }

  // requirement_status - computed: true, optional: false, required: false
  public get requirementStatus() {
    return this.getStringAttribute('requirement_status');
  }

  // requirement_uid - computed: true, optional: false, required: false
  public get requirementUid() {
    return this.getStringAttribute('requirement_uid');
  }
}

export class DataCheckpointManagementBestPracticeRegulationsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeRegulationsOutputReference {
    return new DataCheckpointManagementBestPracticeRegulationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeRelevantObjectsAccessRulesInfo {
}

export function dataCheckpointManagementBestPracticeRelevantObjectsAccessRulesInfoToTerraform(struct?: DataCheckpointManagementBestPracticeRelevantObjectsAccessRulesInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeRelevantObjectsAccessRulesInfoToHclTerraform(struct?: DataCheckpointManagementBestPracticeRelevantObjectsAccessRulesInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeRelevantObjectsAccessRulesInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeRelevantObjectsAccessRulesInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeRelevantObjectsAccessRulesInfo | undefined) {
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

  // layer_name - computed: true, optional: false, required: false
  public get layerName() {
    return this.getStringAttribute('layer_name');
  }

  // layer_uid - computed: true, optional: false, required: false
  public get layerUid() {
    return this.getStringAttribute('layer_uid');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // rule_indexes - computed: true, optional: false, required: false
  public get ruleIndexes() {
    return this.getStringAttribute('rule_indexes');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataCheckpointManagementBestPracticeRelevantObjectsAccessRulesInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeRelevantObjectsAccessRulesInfoOutputReference {
    return new DataCheckpointManagementBestPracticeRelevantObjectsAccessRulesInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeRelevantObjectsCpmRelevantObjectsInfo {
}

export function dataCheckpointManagementBestPracticeRelevantObjectsCpmRelevantObjectsInfoToTerraform(struct?: DataCheckpointManagementBestPracticeRelevantObjectsCpmRelevantObjectsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeRelevantObjectsCpmRelevantObjectsInfoToHclTerraform(struct?: DataCheckpointManagementBestPracticeRelevantObjectsCpmRelevantObjectsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeRelevantObjectsCpmRelevantObjectsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeRelevantObjectsCpmRelevantObjectsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeRelevantObjectsCpmRelevantObjectsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpm_relevant_object_type - computed: true, optional: false, required: false
  public get cpmRelevantObjectType() {
    return this.getStringAttribute('cpm_relevant_object_type');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataCheckpointManagementBestPracticeRelevantObjectsCpmRelevantObjectsInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeRelevantObjectsCpmRelevantObjectsInfoOutputReference {
    return new DataCheckpointManagementBestPracticeRelevantObjectsCpmRelevantObjectsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeRelevantObjectsIpsProtectionsInfo {
}

export function dataCheckpointManagementBestPracticeRelevantObjectsIpsProtectionsInfoToTerraform(struct?: DataCheckpointManagementBestPracticeRelevantObjectsIpsProtectionsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeRelevantObjectsIpsProtectionsInfoToHclTerraform(struct?: DataCheckpointManagementBestPracticeRelevantObjectsIpsProtectionsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeRelevantObjectsIpsProtectionsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeRelevantObjectsIpsProtectionsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeRelevantObjectsIpsProtectionsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // profile_name - computed: true, optional: false, required: false
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }

  // profile_uid - computed: true, optional: false, required: false
  public get profileUid() {
    return this.getStringAttribute('profile_uid');
  }

  // protection_name - computed: true, optional: false, required: false
  public get protectionName() {
    return this.getStringAttribute('protection_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataCheckpointManagementBestPracticeRelevantObjectsIpsProtectionsInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeRelevantObjectsIpsProtectionsInfoOutputReference {
    return new DataCheckpointManagementBestPracticeRelevantObjectsIpsProtectionsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeRelevantObjects {
}

export function dataCheckpointManagementBestPracticeRelevantObjectsToTerraform(struct?: DataCheckpointManagementBestPracticeRelevantObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeRelevantObjectsToHclTerraform(struct?: DataCheckpointManagementBestPracticeRelevantObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeRelevantObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeRelevantObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeRelevantObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_rules_info - computed: true, optional: false, required: false
  private _accessRulesInfo = new DataCheckpointManagementBestPracticeRelevantObjectsAccessRulesInfoList(this, "access_rules_info", false);
  public get accessRulesInfo() {
    return this._accessRulesInfo;
  }

  // cpm_relevant_objects_info - computed: true, optional: false, required: false
  private _cpmRelevantObjectsInfo = new DataCheckpointManagementBestPracticeRelevantObjectsCpmRelevantObjectsInfoList(this, "cpm_relevant_objects_info", false);
  public get cpmRelevantObjectsInfo() {
    return this._cpmRelevantObjectsInfo;
  }

  // ips_protections_info - computed: true, optional: false, required: false
  private _ipsProtectionsInfo = new DataCheckpointManagementBestPracticeRelevantObjectsIpsProtectionsInfoList(this, "ips_protections_info", false);
  public get ipsProtectionsInfo() {
    return this._ipsProtectionsInfo;
  }

  // relevant_objects_type - computed: true, optional: false, required: false
  public get relevantObjectsType() {
    return this.getStringAttribute('relevant_objects_type');
  }
}

export class DataCheckpointManagementBestPracticeRelevantObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeRelevantObjectsOutputReference {
    return new DataCheckpointManagementBestPracticeRelevantObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesActionReferenceObjects {
}

export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesActionReferenceObjectsToTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesActionReferenceObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesActionReferenceObjectsToHclTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesActionReferenceObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesActionReferenceObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesActionReferenceObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesActionReferenceObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // reference_object_type - computed: true, optional: false, required: false
  public get referenceObjectType() {
    return this.getStringAttribute('reference_object_type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesActionReferenceObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesActionReferenceObjectsOutputReference {
    return new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesActionReferenceObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesAction {
}

export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesActionToTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesActionToHclTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // negate - computed: true, optional: false, required: false
  public get negate() {
    return this.getBooleanAttribute('negate');
  }

  // reference_objects - computed: true, optional: false, required: false
  private _referenceObjects = new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesActionReferenceObjectsList(this, "reference_objects", false);
  public get referenceObjects() {
    return this._referenceObjects;
  }
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesActionList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesActionOutputReference {
    return new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesComment {
}

export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesCommentToTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesComment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesCommentToHclTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesComment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesCommentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesComment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesComment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesCommentList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesCommentOutputReference {
    return new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesCommentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesDestinationReferenceObjects {
}

export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesDestinationReferenceObjectsToTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesDestinationReferenceObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesDestinationReferenceObjectsToHclTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesDestinationReferenceObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesDestinationReferenceObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesDestinationReferenceObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesDestinationReferenceObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // reference_object_type - computed: true, optional: false, required: false
  public get referenceObjectType() {
    return this.getStringAttribute('reference_object_type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesDestinationReferenceObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesDestinationReferenceObjectsOutputReference {
    return new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesDestinationReferenceObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesDestination {
}

export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesDestinationToTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesDestinationToHclTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // negate - computed: true, optional: false, required: false
  public get negate() {
    return this.getBooleanAttribute('negate');
  }

  // reference_objects - computed: true, optional: false, required: false
  private _referenceObjects = new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesDestinationReferenceObjectsList(this, "reference_objects", false);
  public get referenceObjects() {
    return this._referenceObjects;
  }
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesDestinationList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesDestinationOutputReference {
    return new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesHitCountReferenceObjects {
}

export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesHitCountReferenceObjectsToTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesHitCountReferenceObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesHitCountReferenceObjectsToHclTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesHitCountReferenceObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesHitCountReferenceObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesHitCountReferenceObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesHitCountReferenceObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // reference_object_type - computed: true, optional: false, required: false
  public get referenceObjectType() {
    return this.getStringAttribute('reference_object_type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesHitCountReferenceObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesHitCountReferenceObjectsOutputReference {
    return new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesHitCountReferenceObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesHitCount {
}

export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesHitCountToTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesHitCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesHitCountToHclTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesHitCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesHitCountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesHitCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesHitCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // negate - computed: true, optional: false, required: false
  public get negate() {
    return this.getBooleanAttribute('negate');
  }

  // reference_objects - computed: true, optional: false, required: false
  private _referenceObjects = new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesHitCountReferenceObjectsList(this, "reference_objects", false);
  public get referenceObjects() {
    return this._referenceObjects;
  }
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesHitCountList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesHitCountOutputReference {
    return new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesHitCountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesInstallOnReferenceObjects {
}

export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesInstallOnReferenceObjectsToTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesInstallOnReferenceObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesInstallOnReferenceObjectsToHclTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesInstallOnReferenceObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesInstallOnReferenceObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesInstallOnReferenceObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesInstallOnReferenceObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // reference_object_type - computed: true, optional: false, required: false
  public get referenceObjectType() {
    return this.getStringAttribute('reference_object_type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesInstallOnReferenceObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesInstallOnReferenceObjectsOutputReference {
    return new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesInstallOnReferenceObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesInstallOn {
}

export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesInstallOnToTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesInstallOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesInstallOnToHclTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesInstallOn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesInstallOnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesInstallOn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesInstallOn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // negate - computed: true, optional: false, required: false
  public get negate() {
    return this.getBooleanAttribute('negate');
  }

  // reference_objects - computed: true, optional: false, required: false
  private _referenceObjects = new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesInstallOnReferenceObjectsList(this, "reference_objects", false);
  public get referenceObjects() {
    return this._referenceObjects;
  }
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesInstallOnList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesInstallOnOutputReference {
    return new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesInstallOnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesName {
}

export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesNameToTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesNameToHclTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesNameList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesNameOutputReference {
    return new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesServicesAndApplicationsReferenceObjects {
}

export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesServicesAndApplicationsReferenceObjectsToTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesServicesAndApplicationsReferenceObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesServicesAndApplicationsReferenceObjectsToHclTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesServicesAndApplicationsReferenceObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesServicesAndApplicationsReferenceObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesServicesAndApplicationsReferenceObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesServicesAndApplicationsReferenceObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // reference_object_type - computed: true, optional: false, required: false
  public get referenceObjectType() {
    return this.getStringAttribute('reference_object_type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesServicesAndApplicationsReferenceObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesServicesAndApplicationsReferenceObjectsOutputReference {
    return new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesServicesAndApplicationsReferenceObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesServicesAndApplications {
}

export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesServicesAndApplicationsToTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesServicesAndApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesServicesAndApplicationsToHclTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesServicesAndApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesServicesAndApplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesServicesAndApplications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesServicesAndApplications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // negate - computed: true, optional: false, required: false
  public get negate() {
    return this.getBooleanAttribute('negate');
  }

  // reference_objects - computed: true, optional: false, required: false
  private _referenceObjects = new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesServicesAndApplicationsReferenceObjectsList(this, "reference_objects", false);
  public get referenceObjects() {
    return this._referenceObjects;
  }
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesServicesAndApplicationsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesServicesAndApplicationsOutputReference {
    return new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesServicesAndApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesSourceReferenceObjects {
}

export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesSourceReferenceObjectsToTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesSourceReferenceObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesSourceReferenceObjectsToHclTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesSourceReferenceObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesSourceReferenceObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesSourceReferenceObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesSourceReferenceObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // reference_object_type - computed: true, optional: false, required: false
  public get referenceObjectType() {
    return this.getStringAttribute('reference_object_type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesSourceReferenceObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesSourceReferenceObjectsOutputReference {
    return new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesSourceReferenceObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesSource {
}

export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesSourceToTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesSourceToHclTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // negate - computed: true, optional: false, required: false
  public get negate() {
    return this.getBooleanAttribute('negate');
  }

  // reference_objects - computed: true, optional: false, required: false
  private _referenceObjects = new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesSourceReferenceObjectsList(this, "reference_objects", false);
  public get referenceObjects() {
    return this._referenceObjects;
  }
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesSourceOutputReference {
    return new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTimeReferenceObjects {
}

export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTimeReferenceObjectsToTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTimeReferenceObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTimeReferenceObjectsToHclTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTimeReferenceObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTimeReferenceObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTimeReferenceObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTimeReferenceObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // reference_object_type - computed: true, optional: false, required: false
  public get referenceObjectType() {
    return this.getStringAttribute('reference_object_type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTimeReferenceObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTimeReferenceObjectsOutputReference {
    return new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTimeReferenceObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTime {
}

export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTimeToTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTimeToHclTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // negate - computed: true, optional: false, required: false
  public get negate() {
    return this.getBooleanAttribute('negate');
  }

  // reference_objects - computed: true, optional: false, required: false
  private _referenceObjects = new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTimeReferenceObjectsList(this, "reference_objects", false);
  public get referenceObjects() {
    return this._referenceObjects;
  }
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTimeOutputReference {
    return new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTrackReferenceObjects {
}

export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTrackReferenceObjectsToTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTrackReferenceObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTrackReferenceObjectsToHclTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTrackReferenceObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTrackReferenceObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTrackReferenceObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTrackReferenceObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // reference_object_type - computed: true, optional: false, required: false
  public get referenceObjectType() {
    return this.getStringAttribute('reference_object_type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTrackReferenceObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTrackReferenceObjectsOutputReference {
    return new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTrackReferenceObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTrack {
}

export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTrackToTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTrack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTrackToHclTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTrack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTrackOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTrack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTrack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // negate - computed: true, optional: false, required: false
  public get negate() {
    return this.getBooleanAttribute('negate');
  }

  // reference_objects - computed: true, optional: false, required: false
  private _referenceObjects = new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTrackReferenceObjectsList(this, "reference_objects", false);
  public get referenceObjects() {
    return this._referenceObjects;
  }
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTrackList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTrackOutputReference {
    return new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTrackOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesVpnReferenceObjects {
}

export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesVpnReferenceObjectsToTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesVpnReferenceObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesVpnReferenceObjectsToHclTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesVpnReferenceObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesVpnReferenceObjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesVpnReferenceObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesVpnReferenceObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // reference_object_type - computed: true, optional: false, required: false
  public get referenceObjectType() {
    return this.getStringAttribute('reference_object_type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesVpnReferenceObjectsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesVpnReferenceObjectsOutputReference {
    return new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesVpnReferenceObjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesVpn {
}

export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesVpnToTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesVpn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesVpnToHclTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesVpn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesVpnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesVpn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesVpn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // negate - computed: true, optional: false, required: false
  public get negate() {
    return this.getBooleanAttribute('negate');
  }

  // reference_objects - computed: true, optional: false, required: false
  private _referenceObjects = new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesVpnReferenceObjectsList(this, "reference_objects", false);
  public get referenceObjects() {
    return this._referenceObjects;
  }
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesVpnList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesVpnOutputReference {
    return new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesVpnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRules {
}

export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesToTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesToHclTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesActionList(this, "action", false);
  public get action() {
    return this._action;
  }

  // comment - computed: true, optional: false, required: false
  private _comment = new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesCommentList(this, "comment", false);
  public get comment() {
    return this._comment;
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }

  // hit_count - computed: true, optional: false, required: false
  private _hitCount = new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesHitCountList(this, "hit_count", false);
  public get hitCount() {
    return this._hitCount;
  }

  // install_on - computed: true, optional: false, required: false
  private _installOn = new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesInstallOnList(this, "install_on", false);
  public get installOn() {
    return this._installOn;
  }

  // name - computed: true, optional: false, required: false
  private _name = new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesNameList(this, "name", false);
  public get name() {
    return this._name;
  }

  // services_and_applications - computed: true, optional: false, required: false
  private _servicesAndApplications = new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesServicesAndApplicationsList(this, "services_and_applications", false);
  public get servicesAndApplications() {
    return this._servicesAndApplications;
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesSourceList(this, "source", false);
  public get source() {
    return this._source;
  }

  // time - computed: true, optional: false, required: false
  private _time = new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTimeList(this, "time", false);
  public get time() {
    return this._time;
  }

  // track - computed: true, optional: false, required: false
  private _track = new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesTrackList(this, "track", false);
  public get track() {
    return this._track;
  }

  // vpn - computed: true, optional: false, required: false
  private _vpn = new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesVpnList(this, "vpn", false);
  public get vpn() {
    return this._vpn;
  }
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesOutputReference {
    return new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeUserDefinedFirewall {
}

export function dataCheckpointManagementBestPracticeUserDefinedFirewallToTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeUserDefinedFirewallToHclTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeUserDefinedFirewall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeUserDefinedFirewall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // policy_range_percentage - computed: true, optional: false, required: false
  public get policyRangePercentage() {
    return this.getNumberAttribute('policy_range_percentage');
  }

  // policy_range_position - computed: true, optional: false, required: false
  public get policyRangePosition() {
    return this.getStringAttribute('policy_range_position');
  }

  // poor_condition - computed: true, optional: false, required: false
  public get poorCondition() {
    return this.getStringAttribute('poor_condition');
  }

  // secure_condition - computed: true, optional: false, required: false
  public get secureCondition() {
    return this.getStringAttribute('secure_condition');
  }

  // tolerance - computed: true, optional: false, required: false
  public get tolerance() {
    return this.getNumberAttribute('tolerance');
  }

  // user_defined_rules - computed: true, optional: false, required: false
  private _userDefinedRules = new DataCheckpointManagementBestPracticeUserDefinedFirewallUserDefinedRulesList(this, "user_defined_rules", false);
  public get userDefinedRules() {
    return this._userDefinedRules;
  }

  // violation_condition - computed: true, optional: false, required: false
  public get violationCondition() {
    return this.getStringAttribute('violation_condition');
  }
}

export class DataCheckpointManagementBestPracticeUserDefinedFirewallList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeUserDefinedFirewallOutputReference {
    return new DataCheckpointManagementBestPracticeUserDefinedFirewallOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementBestPracticeUserDefinedGaiaOs {
}

export function dataCheckpointManagementBestPracticeUserDefinedGaiaOsToTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedGaiaOs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementBestPracticeUserDefinedGaiaOsToHclTerraform(struct?: DataCheckpointManagementBestPracticeUserDefinedGaiaOs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementBestPracticeUserDefinedGaiaOsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementBestPracticeUserDefinedGaiaOs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementBestPracticeUserDefinedGaiaOs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expected_output_base64 - computed: true, optional: false, required: false
  public get expectedOutputBase64() {
    return this.getStringAttribute('expected_output_base64');
  }

  // practice_script_base64 - computed: true, optional: false, required: false
  public get practiceScriptBase64() {
    return this.getStringAttribute('practice_script_base64');
  }
}

export class DataCheckpointManagementBestPracticeUserDefinedGaiaOsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementBestPracticeUserDefinedGaiaOsOutputReference {
    return new DataCheckpointManagementBestPracticeUserDefinedGaiaOsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_best_practice checkpoint_management_best_practice}
*/
export class DataCheckpointManagementBestPractice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_best_practice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementBestPractice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementBestPractice to import
  * @param importFromId The id of the existing DataCheckpointManagementBestPractice that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_best_practice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementBestPractice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_best_practice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_best_practice checkpoint_management_best_practice} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementBestPracticeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementBestPracticeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_best_practice',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bestPracticeId = config.bestPracticeId;
    this._id = config.id;
    this._name = config.name;
    this._showRegulations = config.showRegulations;
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_item - computed: true, optional: false, required: false
  public get actionItem() {
    return this.getStringAttribute('action_item');
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // best_practice_id - computed: false, optional: true, required: false
  private _bestPracticeId?: string; 
  public get bestPracticeId() {
    return this.getStringAttribute('best_practice_id');
  }
  public set bestPracticeId(value: string) {
    this._bestPracticeId = value;
  }
  public resetBestPracticeId() {
    this._bestPracticeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bestPracticeIdInput() {
    return this._bestPracticeId;
  }

  // blade - computed: true, optional: false, required: false
  public get blade() {
    return this.getStringAttribute('blade');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // due_date - computed: true, optional: false, required: false
  public get dueDate() {
    return this.getStringAttribute('due_date');
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // regulations - computed: true, optional: false, required: false
  private _regulations = new DataCheckpointManagementBestPracticeRegulationsList(this, "regulations", false);
  public get regulations() {
    return this._regulations;
  }

  // relevant_objects - computed: true, optional: false, required: false
  private _relevantObjects = new DataCheckpointManagementBestPracticeRelevantObjectsList(this, "relevant_objects", false);
  public get relevantObjects() {
    return this._relevantObjects;
  }

  // show_regulations - computed: false, optional: true, required: false
  private _showRegulations?: boolean | cdktf.IResolvable; 
  public get showRegulations() {
    return this.getBooleanAttribute('show_regulations');
  }
  public set showRegulations(value: boolean | cdktf.IResolvable) {
    this._showRegulations = value;
  }
  public resetShowRegulations() {
    this._showRegulations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showRegulationsInput() {
    return this._showRegulations;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // user_defined - computed: true, optional: false, required: false
  public get userDefined() {
    return this.getBooleanAttribute('user_defined');
  }

  // user_defined_firewall - computed: true, optional: false, required: false
  private _userDefinedFirewall = new DataCheckpointManagementBestPracticeUserDefinedFirewallList(this, "user_defined_firewall", false);
  public get userDefinedFirewall() {
    return this._userDefinedFirewall;
  }

  // user_defined_gaia_os - computed: true, optional: false, required: false
  private _userDefinedGaiaOs = new DataCheckpointManagementBestPracticeUserDefinedGaiaOsList(this, "user_defined_gaia_os", false);
  public get userDefinedGaiaOs() {
    return this._userDefinedGaiaOs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      best_practice_id: cdktf.stringToTerraform(this._bestPracticeId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      show_regulations: cdktf.booleanToTerraform(this._showRegulations),
      uid: cdktf.stringToTerraform(this._uid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      best_practice_id: {
        value: cdktf.stringToHclTerraform(this._bestPracticeId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_regulations: {
        value: cdktf.booleanToHclTerraform(this._showRegulations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
