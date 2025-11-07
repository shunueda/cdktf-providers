// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_snmp_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanCiscoSnmpFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_snmp_feature_template#id DataSdwanCiscoSnmpFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_snmp_feature_template#name DataSdwanCiscoSnmpFeatureTemplate#name}
  */
  readonly name?: string;
}
export interface DataSdwanCiscoSnmpFeatureTemplateCommunities {
}

export function dataSdwanCiscoSnmpFeatureTemplateCommunitiesToTerraform(struct?: DataSdwanCiscoSnmpFeatureTemplateCommunities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoSnmpFeatureTemplateCommunitiesToHclTerraform(struct?: DataSdwanCiscoSnmpFeatureTemplateCommunities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoSnmpFeatureTemplateCommunitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoSnmpFeatureTemplateCommunities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoSnmpFeatureTemplateCommunities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorization - computed: true, optional: false, required: false
  public get authorization() {
    return this.getStringAttribute('authorization');
  }

  // authorization_variable - computed: true, optional: false, required: false
  public get authorizationVariable() {
    return this.getStringAttribute('authorization_variable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // view - computed: true, optional: false, required: false
  public get view() {
    return this.getStringAttribute('view');
  }

  // view_variable - computed: true, optional: false, required: false
  public get viewVariable() {
    return this.getStringAttribute('view_variable');
  }
}

export class DataSdwanCiscoSnmpFeatureTemplateCommunitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoSnmpFeatureTemplateCommunitiesOutputReference {
    return new DataSdwanCiscoSnmpFeatureTemplateCommunitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoSnmpFeatureTemplateGroups {
}

export function dataSdwanCiscoSnmpFeatureTemplateGroupsToTerraform(struct?: DataSdwanCiscoSnmpFeatureTemplateGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoSnmpFeatureTemplateGroupsToHclTerraform(struct?: DataSdwanCiscoSnmpFeatureTemplateGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoSnmpFeatureTemplateGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoSnmpFeatureTemplateGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoSnmpFeatureTemplateGroups | undefined) {
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

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // security_level - computed: true, optional: false, required: false
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }

  // view - computed: true, optional: false, required: false
  public get view() {
    return this.getStringAttribute('view');
  }

  // view_variable - computed: true, optional: false, required: false
  public get viewVariable() {
    return this.getStringAttribute('view_variable');
  }
}

export class DataSdwanCiscoSnmpFeatureTemplateGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoSnmpFeatureTemplateGroupsOutputReference {
    return new DataSdwanCiscoSnmpFeatureTemplateGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoSnmpFeatureTemplateTrapTargets {
}

export function dataSdwanCiscoSnmpFeatureTemplateTrapTargetsToTerraform(struct?: DataSdwanCiscoSnmpFeatureTemplateTrapTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoSnmpFeatureTemplateTrapTargetsToHclTerraform(struct?: DataSdwanCiscoSnmpFeatureTemplateTrapTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoSnmpFeatureTemplateTrapTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoSnmpFeatureTemplateTrapTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoSnmpFeatureTemplateTrapTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // community_name - computed: true, optional: false, required: false
  public get communityName() {
    return this.getStringAttribute('community_name');
  }

  // community_name_variable - computed: true, optional: false, required: false
  public get communityNameVariable() {
    return this.getStringAttribute('community_name_variable');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // ip_variable - computed: true, optional: false, required: false
  public get ipVariable() {
    return this.getStringAttribute('ip_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // source_interface - computed: true, optional: false, required: false
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }

  // source_interface_variable - computed: true, optional: false, required: false
  public get sourceInterfaceVariable() {
    return this.getStringAttribute('source_interface_variable');
  }

  // udp_port - computed: true, optional: false, required: false
  public get udpPort() {
    return this.getNumberAttribute('udp_port');
  }

  // udp_port_variable - computed: true, optional: false, required: false
  public get udpPortVariable() {
    return this.getStringAttribute('udp_port_variable');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // user_variable - computed: true, optional: false, required: false
  public get userVariable() {
    return this.getStringAttribute('user_variable');
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }

  // vpn_id_variable - computed: true, optional: false, required: false
  public get vpnIdVariable() {
    return this.getStringAttribute('vpn_id_variable');
  }
}

export class DataSdwanCiscoSnmpFeatureTemplateTrapTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoSnmpFeatureTemplateTrapTargetsOutputReference {
    return new DataSdwanCiscoSnmpFeatureTemplateTrapTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoSnmpFeatureTemplateUsers {
}

export function dataSdwanCiscoSnmpFeatureTemplateUsersToTerraform(struct?: DataSdwanCiscoSnmpFeatureTemplateUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoSnmpFeatureTemplateUsersToHclTerraform(struct?: DataSdwanCiscoSnmpFeatureTemplateUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoSnmpFeatureTemplateUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoSnmpFeatureTemplateUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoSnmpFeatureTemplateUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_password - computed: true, optional: false, required: false
  public get authenticationPassword() {
    return this.getStringAttribute('authentication_password');
  }

  // authentication_password_variable - computed: true, optional: false, required: false
  public get authenticationPasswordVariable() {
    return this.getStringAttribute('authentication_password_variable');
  }

  // authentication_protocol - computed: true, optional: false, required: false
  public get authenticationProtocol() {
    return this.getStringAttribute('authentication_protocol');
  }

  // authentication_protocol_variable - computed: true, optional: false, required: false
  public get authenticationProtocolVariable() {
    return this.getStringAttribute('authentication_protocol_variable');
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // group_variable - computed: true, optional: false, required: false
  public get groupVariable() {
    return this.getStringAttribute('group_variable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // privacy_password - computed: true, optional: false, required: false
  public get privacyPassword() {
    return this.getStringAttribute('privacy_password');
  }

  // privacy_password_variable - computed: true, optional: false, required: false
  public get privacyPasswordVariable() {
    return this.getStringAttribute('privacy_password_variable');
  }

  // privacy_protocol - computed: true, optional: false, required: false
  public get privacyProtocol() {
    return this.getStringAttribute('privacy_protocol');
  }

  // privacy_protocol_variable - computed: true, optional: false, required: false
  public get privacyProtocolVariable() {
    return this.getStringAttribute('privacy_protocol_variable');
  }
}

export class DataSdwanCiscoSnmpFeatureTemplateUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoSnmpFeatureTemplateUsersOutputReference {
    return new DataSdwanCiscoSnmpFeatureTemplateUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoSnmpFeatureTemplateViewsObjectIdentifiers {
}

export function dataSdwanCiscoSnmpFeatureTemplateViewsObjectIdentifiersToTerraform(struct?: DataSdwanCiscoSnmpFeatureTemplateViewsObjectIdentifiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoSnmpFeatureTemplateViewsObjectIdentifiersToHclTerraform(struct?: DataSdwanCiscoSnmpFeatureTemplateViewsObjectIdentifiers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoSnmpFeatureTemplateViewsObjectIdentifiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoSnmpFeatureTemplateViewsObjectIdentifiers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoSnmpFeatureTemplateViewsObjectIdentifiers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude - computed: true, optional: false, required: false
  public get exclude() {
    return this.getBooleanAttribute('exclude');
  }

  // exclude_variable - computed: true, optional: false, required: false
  public get excludeVariable() {
    return this.getStringAttribute('exclude_variable');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // id_variable - computed: true, optional: false, required: false
  public get idVariable() {
    return this.getStringAttribute('id_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanCiscoSnmpFeatureTemplateViewsObjectIdentifiersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoSnmpFeatureTemplateViewsObjectIdentifiersOutputReference {
    return new DataSdwanCiscoSnmpFeatureTemplateViewsObjectIdentifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoSnmpFeatureTemplateViews {
}

export function dataSdwanCiscoSnmpFeatureTemplateViewsToTerraform(struct?: DataSdwanCiscoSnmpFeatureTemplateViews): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoSnmpFeatureTemplateViewsToHclTerraform(struct?: DataSdwanCiscoSnmpFeatureTemplateViews): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoSnmpFeatureTemplateViewsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoSnmpFeatureTemplateViews | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoSnmpFeatureTemplateViews | undefined) {
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

  // object_identifiers - computed: true, optional: false, required: false
  private _objectIdentifiers = new DataSdwanCiscoSnmpFeatureTemplateViewsObjectIdentifiersList(this, "object_identifiers", false);
  public get objectIdentifiers() {
    return this._objectIdentifiers;
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanCiscoSnmpFeatureTemplateViewsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoSnmpFeatureTemplateViewsOutputReference {
    return new DataSdwanCiscoSnmpFeatureTemplateViewsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_snmp_feature_template sdwan_cisco_snmp_feature_template}
*/
export class DataSdwanCiscoSnmpFeatureTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_snmp_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanCiscoSnmpFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanCiscoSnmpFeatureTemplate to import
  * @param importFromId The id of the existing DataSdwanCiscoSnmpFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_snmp_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanCiscoSnmpFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_snmp_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_snmp_feature_template sdwan_cisco_snmp_feature_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanCiscoSnmpFeatureTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdwanCiscoSnmpFeatureTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_snmp_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // communities - computed: true, optional: false, required: false
  private _communities = new DataSdwanCiscoSnmpFeatureTemplateCommunitiesList(this, "communities", false);
  public get communities() {
    return this._communities;
  }

  // contact - computed: true, optional: false, required: false
  public get contact() {
    return this.getStringAttribute('contact');
  }

  // contact_variable - computed: true, optional: false, required: false
  public get contactVariable() {
    return this.getStringAttribute('contact_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_types - computed: true, optional: false, required: false
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataSdwanCiscoSnmpFeatureTemplateGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
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

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // location_variable - computed: true, optional: false, required: false
  public get locationVariable() {
    return this.getStringAttribute('location_variable');
  }

  // name - computed: true, optional: true, required: false
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

  // shutdown - computed: true, optional: false, required: false
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }

  // shutdown_variable - computed: true, optional: false, required: false
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // trap_targets - computed: true, optional: false, required: false
  private _trapTargets = new DataSdwanCiscoSnmpFeatureTemplateTrapTargetsList(this, "trap_targets", false);
  public get trapTargets() {
    return this._trapTargets;
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataSdwanCiscoSnmpFeatureTemplateUsersList(this, "users", false);
  public get users() {
    return this._users;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // views - computed: true, optional: false, required: false
  private _views = new DataSdwanCiscoSnmpFeatureTemplateViewsList(this, "views", false);
  public get views() {
    return this._views;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
