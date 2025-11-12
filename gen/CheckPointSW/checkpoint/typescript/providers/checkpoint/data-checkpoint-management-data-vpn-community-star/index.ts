// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_data_vpn_community_star
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementDataVpnCommunityStarConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_data_vpn_community_star#id DataCheckpointManagementDataVpnCommunityStar#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_data_vpn_community_star#name DataCheckpointManagementDataVpnCommunityStar#name}
  */
  readonly name?: string;
  /**
  * Object unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_data_vpn_community_star#uid DataCheckpointManagementDataVpnCommunityStar#uid}
  */
  readonly uid?: string;
}
export interface DataCheckpointManagementDataVpnCommunityStarAdvancedProperties {
}

export function dataCheckpointManagementDataVpnCommunityStarAdvancedPropertiesToTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarAdvancedProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityStarAdvancedPropertiesToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarAdvancedProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityStarAdvancedPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityStarAdvancedProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityStarAdvancedProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // support_ip_compression - computed: true, optional: false, required: false
  public get supportIpCompression() {
    return this.getBooleanAttribute('support_ip_compression');
  }

  // use_aggressive_mode - computed: true, optional: false, required: false
  public get useAggressiveMode() {
    return this.getBooleanAttribute('use_aggressive_mode');
  }
}

export class DataCheckpointManagementDataVpnCommunityStarAdvancedPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityStarAdvancedPropertiesOutputReference {
    return new DataCheckpointManagementDataVpnCommunityStarAdvancedPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityStarEncryptedTraffic {
}

export function dataCheckpointManagementDataVpnCommunityStarEncryptedTrafficToTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarEncryptedTraffic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityStarEncryptedTrafficToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarEncryptedTraffic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityStarEncryptedTrafficOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityStarEncryptedTraffic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityStarEncryptedTraffic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // community_members - computed: true, optional: false, required: false
  public get communityMembers() {
    return this.getStringAttribute('community_members');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}

export class DataCheckpointManagementDataVpnCommunityStarEncryptedTrafficList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityStarEncryptedTrafficOutputReference {
    return new DataCheckpointManagementDataVpnCommunityStarEncryptedTrafficOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityStarGranularEncryptions {
}

export function dataCheckpointManagementDataVpnCommunityStarGranularEncryptionsToTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarGranularEncryptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityStarGranularEncryptionsToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarGranularEncryptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityStarGranularEncryptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityStarGranularEncryptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityStarGranularEncryptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encryption_method - computed: true, optional: false, required: false
  public get encryptionMethod() {
    return this.getStringAttribute('encryption_method');
  }

  // encryption_suite - computed: true, optional: false, required: false
  public get encryptionSuite() {
    return this.getStringAttribute('encryption_suite');
  }

  // external_gateway - computed: true, optional: false, required: false
  public get externalGateway() {
    return this.getStringAttribute('external_gateway');
  }

  // ike_phase_1 - computed: true, optional: false, required: false
  private _ikePhase1 = new cdktf.StringMap(this, "ike_phase_1");
  public get ikePhase1() {
    return this._ikePhase1;
  }

  // ike_phase_2 - computed: true, optional: false, required: false
  private _ikePhase2 = new cdktf.StringMap(this, "ike_phase_2");
  public get ikePhase2() {
    return this._ikePhase2;
  }

  // internal_gateway - computed: true, optional: false, required: false
  public get internalGateway() {
    return this.getStringAttribute('internal_gateway');
  }
}

export class DataCheckpointManagementDataVpnCommunityStarGranularEncryptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityStarGranularEncryptionsOutputReference {
    return new DataCheckpointManagementDataVpnCommunityStarGranularEncryptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityStarMepDefaultPriorityRule {
}

export function dataCheckpointManagementDataVpnCommunityStarMepDefaultPriorityRuleToTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarMepDefaultPriorityRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityStarMepDefaultPriorityRuleToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarMepDefaultPriorityRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityStarMepDefaultPriorityRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityStarMepDefaultPriorityRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityStarMepDefaultPriorityRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // first_priority_center_gateways - computed: true, optional: false, required: false
  public get firstPriorityCenterGateways() {
    return cdktf.Fn.tolist(this.getListAttribute('first_priority_center_gateways'));
  }

  // second_priority_center_gateways - computed: true, optional: false, required: false
  public get secondPriorityCenterGateways() {
    return cdktf.Fn.tolist(this.getListAttribute('second_priority_center_gateways'));
  }

  // third_priority_center_gateways - computed: true, optional: false, required: false
  public get thirdPriorityCenterGateways() {
    return cdktf.Fn.tolist(this.getListAttribute('third_priority_center_gateways'));
  }
}

export class DataCheckpointManagementDataVpnCommunityStarMepDefaultPriorityRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityStarMepDefaultPriorityRuleOutputReference {
    return new DataCheckpointManagementDataVpnCommunityStarMepDefaultPriorityRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityStarMepExceptionPriorityRules {
}

export function dataCheckpointManagementDataVpnCommunityStarMepExceptionPriorityRulesToTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarMepExceptionPriorityRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityStarMepExceptionPriorityRulesToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarMepExceptionPriorityRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityStarMepExceptionPriorityRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityStarMepExceptionPriorityRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityStarMepExceptionPriorityRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // first_priority_center_gateways - computed: true, optional: false, required: false
  public get firstPriorityCenterGateways() {
    return cdktf.Fn.tolist(this.getListAttribute('first_priority_center_gateways'));
  }

  // satellite_gateways - computed: true, optional: false, required: false
  public get satelliteGateways() {
    return cdktf.Fn.tolist(this.getListAttribute('satellite_gateways'));
  }

  // second_priority_center_gateways - computed: true, optional: false, required: false
  public get secondPriorityCenterGateways() {
    return cdktf.Fn.tolist(this.getListAttribute('second_priority_center_gateways'));
  }

  // third_priority_center_gateways - computed: true, optional: false, required: false
  public get thirdPriorityCenterGateways() {
    return cdktf.Fn.tolist(this.getListAttribute('third_priority_center_gateways'));
  }
}

export class DataCheckpointManagementDataVpnCommunityStarMepExceptionPriorityRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityStarMepExceptionPriorityRulesOutputReference {
    return new DataCheckpointManagementDataVpnCommunityStarMepExceptionPriorityRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityStarMep {
}

export function dataCheckpointManagementDataVpnCommunityStarMepToTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarMep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityStarMepToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarMep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityStarMepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityStarMep | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityStarMep | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_priority_rule - computed: true, optional: false, required: false
  private _defaultPriorityRule = new DataCheckpointManagementDataVpnCommunityStarMepDefaultPriorityRuleList(this, "default_priority_rule", false);
  public get defaultPriorityRule() {
    return this._defaultPriorityRule;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // entry_point_final_selection_mechanism - computed: true, optional: false, required: false
  public get entryPointFinalSelectionMechanism() {
    return this.getStringAttribute('entry_point_final_selection_mechanism');
  }

  // entry_point_selection_mechanism - computed: true, optional: false, required: false
  public get entryPointSelectionMechanism() {
    return this.getStringAttribute('entry_point_selection_mechanism');
  }

  // exception_priority_rules - computed: true, optional: false, required: false
  private _exceptionPriorityRules = new DataCheckpointManagementDataVpnCommunityStarMepExceptionPriorityRulesList(this, "exception_priority_rules", false);
  public get exceptionPriorityRules() {
    return this._exceptionPriorityRules;
  }

  // tracking - computed: true, optional: false, required: false
  public get tracking() {
    return this.getStringAttribute('tracking');
  }
}

export class DataCheckpointManagementDataVpnCommunityStarMepList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityStarMepOutputReference {
    return new DataCheckpointManagementDataVpnCommunityStarMepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityStarOverrideInterfacesInterfaces {
}

export function dataCheckpointManagementDataVpnCommunityStarOverrideInterfacesInterfacesToTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarOverrideInterfacesInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityStarOverrideInterfacesInterfacesToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarOverrideInterfacesInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityStarOverrideInterfacesInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityStarOverrideInterfacesInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityStarOverrideInterfacesInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // next_hop_ip - computed: true, optional: false, required: false
  public get nextHopIp() {
    return this.getStringAttribute('next_hop_ip');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // redundancy_mode - computed: true, optional: false, required: false
  public get redundancyMode() {
    return this.getStringAttribute('redundancy_mode');
  }

  // static_nat_ip - computed: true, optional: false, required: false
  public get staticNatIp() {
    return this.getStringAttribute('static_nat_ip');
  }
}

export class DataCheckpointManagementDataVpnCommunityStarOverrideInterfacesInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityStarOverrideInterfacesInterfacesOutputReference {
    return new DataCheckpointManagementDataVpnCommunityStarOverrideInterfacesInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityStarOverrideInterfaces {
}

export function dataCheckpointManagementDataVpnCommunityStarOverrideInterfacesToTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarOverrideInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityStarOverrideInterfacesToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarOverrideInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityStarOverrideInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityStarOverrideInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityStarOverrideInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataCheckpointManagementDataVpnCommunityStarOverrideInterfacesInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
}

export class DataCheckpointManagementDataVpnCommunityStarOverrideInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityStarOverrideInterfacesOutputReference {
    return new DataCheckpointManagementDataVpnCommunityStarOverrideInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityStarOverrideVpnDomains {
}

export function dataCheckpointManagementDataVpnCommunityStarOverrideVpnDomainsToTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarOverrideVpnDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityStarOverrideVpnDomainsToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarOverrideVpnDomains): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityStarOverrideVpnDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityStarOverrideVpnDomains | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityStarOverrideVpnDomains | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // vpn_domain - computed: true, optional: false, required: false
  public get vpnDomain() {
    return this.getStringAttribute('vpn_domain');
  }
}

export class DataCheckpointManagementDataVpnCommunityStarOverrideVpnDomainsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityStarOverrideVpnDomainsOutputReference {
    return new DataCheckpointManagementDataVpnCommunityStarOverrideVpnDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsGateways {
}

export function dataCheckpointManagementDataVpnCommunityStarPermanentTunnelsGatewaysToTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsGateways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityStarPermanentTunnelsGatewaysToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsGateways): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsGatewaysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsGateways | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsGateways | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // override_tunnel_down_track - computed: true, optional: false, required: false
  public get overrideTunnelDownTrack() {
    return this.getStringAttribute('override_tunnel_down_track');
  }

  // override_tunnel_up_track - computed: true, optional: false, required: false
  public get overrideTunnelUpTrack() {
    return this.getStringAttribute('override_tunnel_up_track');
  }

  // track_options - computed: true, optional: false, required: false
  public get trackOptions() {
    return this.getStringAttribute('track_options');
  }
}

export class DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsGatewaysList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsGatewaysOutputReference {
    return new DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsGatewaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsRim {
}

export function dataCheckpointManagementDataVpnCommunityStarPermanentTunnelsRimToTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsRim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityStarPermanentTunnelsRimToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsRim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsRimOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsRim | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsRim | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_on_center_gateways - computed: true, optional: false, required: false
  public get enableOnCenterGateways() {
    return this.getBooleanAttribute('enable_on_center_gateways');
  }

  // enable_on_satellite_gateways - computed: true, optional: false, required: false
  public get enableOnSatelliteGateways() {
    return this.getBooleanAttribute('enable_on_satellite_gateways');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // route_injection_track - computed: true, optional: false, required: false
  public get routeInjectionTrack() {
    return this.getStringAttribute('route_injection_track');
  }
}

export class DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsRimList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsRimOutputReference {
    return new DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsRimOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsTunnels {
}

export function dataCheckpointManagementDataVpnCommunityStarPermanentTunnelsTunnelsToTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsTunnels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityStarPermanentTunnelsTunnelsToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsTunnels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsTunnelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsTunnels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsTunnels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // first_tunnel_endpoint - computed: true, optional: false, required: false
  public get firstTunnelEndpoint() {
    return this.getStringAttribute('first_tunnel_endpoint');
  }

  // override_tunnel_down_track - computed: true, optional: false, required: false
  public get overrideTunnelDownTrack() {
    return this.getStringAttribute('override_tunnel_down_track');
  }

  // override_tunnel_up_track - computed: true, optional: false, required: false
  public get overrideTunnelUpTrack() {
    return this.getStringAttribute('override_tunnel_up_track');
  }

  // second_tunnel_endpoint - computed: true, optional: false, required: false
  public get secondTunnelEndpoint() {
    return this.getStringAttribute('second_tunnel_endpoint');
  }

  // track_options - computed: true, optional: false, required: false
  public get trackOptions() {
    return this.getStringAttribute('track_options');
  }
}

export class DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsTunnelsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsTunnelsOutputReference {
    return new DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsTunnelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityStarPermanentTunnels {
}

export function dataCheckpointManagementDataVpnCommunityStarPermanentTunnelsToTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarPermanentTunnels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityStarPermanentTunnelsToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarPermanentTunnels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityStarPermanentTunnels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityStarPermanentTunnels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gateways - computed: true, optional: false, required: false
  private _gateways = new DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsGatewaysList(this, "gateways", false);
  public get gateways() {
    return this._gateways;
  }

  // rim - computed: true, optional: false, required: false
  private _rim = new DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsRimList(this, "rim", false);
  public get rim() {
    return this._rim;
  }

  // set_permanent_tunnels - computed: true, optional: false, required: false
  public get setPermanentTunnels() {
    return this.getStringAttribute('set_permanent_tunnels');
  }

  // tunnel_down_track - computed: true, optional: false, required: false
  public get tunnelDownTrack() {
    return this.getStringAttribute('tunnel_down_track');
  }

  // tunnel_up_track - computed: true, optional: false, required: false
  public get tunnelUpTrack() {
    return this.getStringAttribute('tunnel_up_track');
  }

  // tunnels - computed: true, optional: false, required: false
  private _tunnels = new DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsTunnelsList(this, "tunnels", false);
  public get tunnels() {
    return this._tunnels;
  }
}

export class DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsOutputReference {
    return new DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityStarSharedSecrets {
}

export function dataCheckpointManagementDataVpnCommunityStarSharedSecretsToTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarSharedSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityStarSharedSecretsToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarSharedSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityStarSharedSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityStarSharedSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityStarSharedSecrets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_gateway - computed: true, optional: false, required: false
  public get externalGateway() {
    return this.getStringAttribute('external_gateway');
  }

  // shared_secret - computed: true, optional: false, required: false
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }
}

export class DataCheckpointManagementDataVpnCommunityStarSharedSecretsList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityStarSharedSecretsOutputReference {
    return new DataCheckpointManagementDataVpnCommunityStarSharedSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementDataVpnCommunityStarWireMode {
}

export function dataCheckpointManagementDataVpnCommunityStarWireModeToTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarWireMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementDataVpnCommunityStarWireModeToHclTerraform(struct?: DataCheckpointManagementDataVpnCommunityStarWireMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementDataVpnCommunityStarWireModeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementDataVpnCommunityStarWireMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementDataVpnCommunityStarWireMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_uninspected_encrypted_routing - computed: true, optional: false, required: false
  public get allowUninspectedEncryptedRouting() {
    return this.getBooleanAttribute('allow_uninspected_encrypted_routing');
  }

  // allow_uninspected_encrypted_traffic - computed: true, optional: false, required: false
  public get allowUninspectedEncryptedTraffic() {
    return this.getBooleanAttribute('allow_uninspected_encrypted_traffic');
  }
}

export class DataCheckpointManagementDataVpnCommunityStarWireModeList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementDataVpnCommunityStarWireModeOutputReference {
    return new DataCheckpointManagementDataVpnCommunityStarWireModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_data_vpn_community_star checkpoint_management_data_vpn_community_star}
*/
export class DataCheckpointManagementDataVpnCommunityStar extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_data_vpn_community_star";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementDataVpnCommunityStar resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementDataVpnCommunityStar to import
  * @param importFromId The id of the existing DataCheckpointManagementDataVpnCommunityStar that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_data_vpn_community_star#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementDataVpnCommunityStar to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_data_vpn_community_star", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_data_vpn_community_star checkpoint_management_data_vpn_community_star} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementDataVpnCommunityStarConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementDataVpnCommunityStarConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_data_vpn_community_star',
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
    this._id = config.id;
    this._name = config.name;
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_properties - computed: true, optional: false, required: false
  private _advancedProperties = new DataCheckpointManagementDataVpnCommunityStarAdvancedPropertiesList(this, "advanced_properties", false);
  public get advancedProperties() {
    return this._advancedProperties;
  }

  // center_gateways - computed: true, optional: false, required: false
  public get centerGateways() {
    return cdktf.Fn.tolist(this.getListAttribute('center_gateways'));
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // disable_nat - computed: true, optional: false, required: false
  public get disableNat() {
    return this.getBooleanAttribute('disable_nat');
  }

  // disable_nat_on - computed: true, optional: false, required: false
  public get disableNatOn() {
    return this.getStringAttribute('disable_nat_on');
  }

  // encrypted_traffic - computed: true, optional: false, required: false
  private _encryptedTraffic = new DataCheckpointManagementDataVpnCommunityStarEncryptedTrafficList(this, "encrypted_traffic", false);
  public get encryptedTraffic() {
    return this._encryptedTraffic;
  }

  // encryption_method - computed: true, optional: false, required: false
  public get encryptionMethod() {
    return this.getStringAttribute('encryption_method');
  }

  // encryption_suite - computed: true, optional: false, required: false
  public get encryptionSuite() {
    return this.getStringAttribute('encryption_suite');
  }

  // excluded_services - computed: true, optional: false, required: false
  public get excludedServices() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_services'));
  }

  // granular_encryptions - computed: true, optional: false, required: false
  private _granularEncryptions = new DataCheckpointManagementDataVpnCommunityStarGranularEncryptionsList(this, "granular_encryptions", false);
  public get granularEncryptions() {
    return this._granularEncryptions;
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

  // ike_phase_1 - computed: true, optional: false, required: false
  private _ikePhase1 = new cdktf.StringMap(this, "ike_phase_1");
  public get ikePhase1() {
    return this._ikePhase1;
  }

  // ike_phase_2 - computed: true, optional: false, required: false
  private _ikePhase2 = new cdktf.StringMap(this, "ike_phase_2");
  public get ikePhase2() {
    return this._ikePhase2;
  }

  // link_selection_mode - computed: true, optional: false, required: false
  public get linkSelectionMode() {
    return this.getStringAttribute('link_selection_mode');
  }

  // mep - computed: true, optional: false, required: false
  private _mep = new DataCheckpointManagementDataVpnCommunityStarMepList(this, "mep", false);
  public get mep() {
    return this._mep;
  }

  // mesh_center_gateways - computed: true, optional: false, required: false
  public get meshCenterGateways() {
    return this.getBooleanAttribute('mesh_center_gateways');
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

  // override_interfaces - computed: true, optional: false, required: false
  private _overrideInterfaces = new DataCheckpointManagementDataVpnCommunityStarOverrideInterfacesList(this, "override_interfaces", false);
  public get overrideInterfaces() {
    return this._overrideInterfaces;
  }

  // override_vpn_domains - computed: true, optional: false, required: false
  private _overrideVpnDomains = new DataCheckpointManagementDataVpnCommunityStarOverrideVpnDomainsList(this, "override_vpn_domains", false);
  public get overrideVpnDomains() {
    return this._overrideVpnDomains;
  }

  // permanent_tunnels - computed: true, optional: false, required: false
  private _permanentTunnels = new DataCheckpointManagementDataVpnCommunityStarPermanentTunnelsList(this, "permanent_tunnels", false);
  public get permanentTunnels() {
    return this._permanentTunnels;
  }

  // routing_mode - computed: true, optional: false, required: false
  public get routingMode() {
    return this.getStringAttribute('routing_mode');
  }

  // satellite_gateways - computed: true, optional: false, required: false
  public get satelliteGateways() {
    return cdktf.Fn.tolist(this.getListAttribute('satellite_gateways'));
  }

  // shared_secrets - computed: true, optional: false, required: false
  private _sharedSecrets = new DataCheckpointManagementDataVpnCommunityStarSharedSecretsList(this, "shared_secrets", false);
  public get sharedSecrets() {
    return this._sharedSecrets;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // tunnel_granularity - computed: true, optional: false, required: false
  public get tunnelGranularity() {
    return this.getStringAttribute('tunnel_granularity');
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

  // use_shared_secret - computed: true, optional: false, required: false
  public get useSharedSecret() {
    return this.getBooleanAttribute('use_shared_secret');
  }

  // vpn_routing - computed: true, optional: false, required: false
  public get vpnRouting() {
    return this.getStringAttribute('vpn_routing');
  }

  // wire_mode - computed: true, optional: false, required: false
  private _wireMode = new DataCheckpointManagementDataVpnCommunityStarWireModeList(this, "wire_mode", false);
  public get wireMode() {
    return this._wireMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uid: cdktf.stringToTerraform(this._uid),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
