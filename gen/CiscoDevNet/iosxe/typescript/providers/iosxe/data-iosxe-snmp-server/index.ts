// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/snmp_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeSnmpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/snmp_server#device DataIosxeSnmpServer#device}
  */
  readonly device?: string;
}
export interface DataIosxeSnmpServerContexts {
}

export function dataIosxeSnmpServerContextsToTerraform(struct?: DataIosxeSnmpServerContexts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeSnmpServerContextsToHclTerraform(struct?: DataIosxeSnmpServerContexts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeSnmpServerContextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeSnmpServerContexts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeSnmpServerContexts | undefined) {
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
}

export class DataIosxeSnmpServerContextsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeSnmpServerContextsOutputReference {
    return new DataIosxeSnmpServerContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeSnmpServerGroupsV3Security {
}

export function dataIosxeSnmpServerGroupsV3SecurityToTerraform(struct?: DataIosxeSnmpServerGroupsV3Security): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeSnmpServerGroupsV3SecurityToHclTerraform(struct?: DataIosxeSnmpServerGroupsV3Security): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeSnmpServerGroupsV3SecurityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeSnmpServerGroupsV3Security | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeSnmpServerGroupsV3Security | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_acl_name - computed: true, optional: false, required: false
  public get accessAclName() {
    return this.getStringAttribute('access_acl_name');
  }

  // access_ipv6_acl - computed: true, optional: false, required: false
  public get accessIpv6Acl() {
    return this.getStringAttribute('access_ipv6_acl');
  }

  // access_standard_acl - computed: true, optional: false, required: false
  public get accessStandardAcl() {
    return this.getNumberAttribute('access_standard_acl');
  }

  // context_node - computed: true, optional: false, required: false
  public get contextNode() {
    return this.getStringAttribute('context_node');
  }

  // match_node - computed: true, optional: false, required: false
  public get matchNode() {
    return this.getStringAttribute('match_node');
  }

  // notify_node - computed: true, optional: false, required: false
  public get notifyNode() {
    return this.getStringAttribute('notify_node');
  }

  // read_node - computed: true, optional: false, required: false
  public get readNode() {
    return this.getStringAttribute('read_node');
  }

  // security_level - computed: true, optional: false, required: false
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }

  // write_node - computed: true, optional: false, required: false
  public get writeNode() {
    return this.getStringAttribute('write_node');
  }
}

export class DataIosxeSnmpServerGroupsV3SecurityList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeSnmpServerGroupsV3SecurityOutputReference {
    return new DataIosxeSnmpServerGroupsV3SecurityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeSnmpServerGroups {
}

export function dataIosxeSnmpServerGroupsToTerraform(struct?: DataIosxeSnmpServerGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeSnmpServerGroupsToHclTerraform(struct?: DataIosxeSnmpServerGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeSnmpServerGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeSnmpServerGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeSnmpServerGroups | undefined) {
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

  // v3_security - computed: true, optional: false, required: false
  private _v3Security = new DataIosxeSnmpServerGroupsV3SecurityList(this, "v3_security", false);
  public get v3Security() {
    return this._v3Security;
  }
}

export class DataIosxeSnmpServerGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeSnmpServerGroupsOutputReference {
    return new DataIosxeSnmpServerGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeSnmpServerHosts {
}

export function dataIosxeSnmpServerHostsToTerraform(struct?: DataIosxeSnmpServerHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeSnmpServerHostsToHclTerraform(struct?: DataIosxeSnmpServerHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeSnmpServerHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeSnmpServerHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeSnmpServerHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // community_or_user - computed: true, optional: false, required: false
  public get communityOrUser() {
    return this.getStringAttribute('community_or_user');
  }

  // encryption - computed: true, optional: false, required: false
  public get encryption() {
    return this.getStringAttribute('encryption');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // security_level - computed: true, optional: false, required: false
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataIosxeSnmpServerHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeSnmpServerHostsOutputReference {
    return new DataIosxeSnmpServerHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeSnmpServerSnmpCommunities {
}

export function dataIosxeSnmpServerSnmpCommunitiesToTerraform(struct?: DataIosxeSnmpServerSnmpCommunities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeSnmpServerSnmpCommunitiesToHclTerraform(struct?: DataIosxeSnmpServerSnmpCommunities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeSnmpServerSnmpCommunitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeSnmpServerSnmpCommunities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeSnmpServerSnmpCommunities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_list_name - computed: true, optional: false, required: false
  public get accessListName() {
    return this.getStringAttribute('access_list_name');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permission - computed: true, optional: false, required: false
  public get permission() {
    return this.getStringAttribute('permission');
  }

  // view - computed: true, optional: false, required: false
  public get view() {
    return this.getStringAttribute('view');
  }
}

export class DataIosxeSnmpServerSnmpCommunitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeSnmpServerSnmpCommunitiesOutputReference {
    return new DataIosxeSnmpServerSnmpCommunitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeSnmpServerUsers {
}

export function dataIosxeSnmpServerUsersToTerraform(struct?: DataIosxeSnmpServerUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeSnmpServerUsersToHclTerraform(struct?: DataIosxeSnmpServerUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeSnmpServerUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeSnmpServerUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeSnmpServerUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // grpname - computed: true, optional: false, required: false
  public get grpname() {
    return this.getStringAttribute('grpname');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // v3_auth_access_acl_name - computed: true, optional: false, required: false
  public get v3AuthAccessAclName() {
    return this.getStringAttribute('v3_auth_access_acl_name');
  }

  // v3_auth_access_ipv6_acl - computed: true, optional: false, required: false
  public get v3AuthAccessIpv6Acl() {
    return this.getStringAttribute('v3_auth_access_ipv6_acl');
  }

  // v3_auth_access_standard_acl - computed: true, optional: false, required: false
  public get v3AuthAccessStandardAcl() {
    return this.getNumberAttribute('v3_auth_access_standard_acl');
  }

  // v3_auth_algorithm - computed: true, optional: false, required: false
  public get v3AuthAlgorithm() {
    return this.getStringAttribute('v3_auth_algorithm');
  }

  // v3_auth_password - computed: true, optional: false, required: false
  public get v3AuthPassword() {
    return this.getStringAttribute('v3_auth_password');
  }

  // v3_auth_priv_aes_access_acl_name - computed: true, optional: false, required: false
  public get v3AuthPrivAesAccessAclName() {
    return this.getStringAttribute('v3_auth_priv_aes_access_acl_name');
  }

  // v3_auth_priv_aes_access_ipv6_acl - computed: true, optional: false, required: false
  public get v3AuthPrivAesAccessIpv6Acl() {
    return this.getStringAttribute('v3_auth_priv_aes_access_ipv6_acl');
  }

  // v3_auth_priv_aes_access_standard_acl - computed: true, optional: false, required: false
  public get v3AuthPrivAesAccessStandardAcl() {
    return this.getNumberAttribute('v3_auth_priv_aes_access_standard_acl');
  }

  // v3_auth_priv_aes_algorithm - computed: true, optional: false, required: false
  public get v3AuthPrivAesAlgorithm() {
    return this.getStringAttribute('v3_auth_priv_aes_algorithm');
  }

  // v3_auth_priv_aes_password - computed: true, optional: false, required: false
  public get v3AuthPrivAesPassword() {
    return this.getStringAttribute('v3_auth_priv_aes_password');
  }

  // v3_auth_priv_des3_access_acl_name - computed: true, optional: false, required: false
  public get v3AuthPrivDes3AccessAclName() {
    return this.getStringAttribute('v3_auth_priv_des3_access_acl_name');
  }

  // v3_auth_priv_des3_access_ipv6_acl - computed: true, optional: false, required: false
  public get v3AuthPrivDes3AccessIpv6Acl() {
    return this.getStringAttribute('v3_auth_priv_des3_access_ipv6_acl');
  }

  // v3_auth_priv_des3_access_standard_acl - computed: true, optional: false, required: false
  public get v3AuthPrivDes3AccessStandardAcl() {
    return this.getNumberAttribute('v3_auth_priv_des3_access_standard_acl');
  }

  // v3_auth_priv_des3_password - computed: true, optional: false, required: false
  public get v3AuthPrivDes3Password() {
    return this.getStringAttribute('v3_auth_priv_des3_password');
  }

  // v3_auth_priv_des_access_acl_name - computed: true, optional: false, required: false
  public get v3AuthPrivDesAccessAclName() {
    return this.getStringAttribute('v3_auth_priv_des_access_acl_name');
  }

  // v3_auth_priv_des_access_ipv6_acl - computed: true, optional: false, required: false
  public get v3AuthPrivDesAccessIpv6Acl() {
    return this.getStringAttribute('v3_auth_priv_des_access_ipv6_acl');
  }

  // v3_auth_priv_des_access_standard_acl - computed: true, optional: false, required: false
  public get v3AuthPrivDesAccessStandardAcl() {
    return this.getNumberAttribute('v3_auth_priv_des_access_standard_acl');
  }

  // v3_auth_priv_des_password - computed: true, optional: false, required: false
  public get v3AuthPrivDesPassword() {
    return this.getStringAttribute('v3_auth_priv_des_password');
  }
}

export class DataIosxeSnmpServerUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeSnmpServerUsersOutputReference {
    return new DataIosxeSnmpServerUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeSnmpServerViews {
}

export function dataIosxeSnmpServerViewsToTerraform(struct?: DataIosxeSnmpServerViews): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeSnmpServerViewsToHclTerraform(struct?: DataIosxeSnmpServerViews): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeSnmpServerViewsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeSnmpServerViews | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeSnmpServerViews | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inc_exl - computed: true, optional: false, required: false
  public get incExl() {
    return this.getStringAttribute('inc_exl');
  }

  // mib - computed: true, optional: false, required: false
  public get mib() {
    return this.getStringAttribute('mib');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIosxeSnmpServerViewsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeSnmpServerViewsOutputReference {
    return new DataIosxeSnmpServerViewsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeSnmpServerVrfHosts {
}

export function dataIosxeSnmpServerVrfHostsToTerraform(struct?: DataIosxeSnmpServerVrfHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeSnmpServerVrfHostsToHclTerraform(struct?: DataIosxeSnmpServerVrfHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeSnmpServerVrfHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeSnmpServerVrfHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeSnmpServerVrfHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // community_or_user - computed: true, optional: false, required: false
  public get communityOrUser() {
    return this.getStringAttribute('community_or_user');
  }

  // encryption - computed: true, optional: false, required: false
  public get encryption() {
    return this.getStringAttribute('encryption');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // security_level - computed: true, optional: false, required: false
  public get securityLevel() {
    return this.getStringAttribute('security_level');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // vrf - computed: true, optional: false, required: false
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
}

export class DataIosxeSnmpServerVrfHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeSnmpServerVrfHostsOutputReference {
    return new DataIosxeSnmpServerVrfHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/snmp_server iosxe_snmp_server}
*/
export class DataIosxeSnmpServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_snmp_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeSnmpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeSnmpServer to import
  * @param importFromId The id of the existing DataIosxeSnmpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/snmp_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeSnmpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_snmp_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.5/docs/data-sources/snmp_server iosxe_snmp_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeSnmpServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxeSnmpServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_snmp_server',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.5',
        providerVersionConstraint: '0.14.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chassis_id - computed: true, optional: false, required: false
  public get chassisId() {
    return this.getStringAttribute('chassis_id');
  }

  // contact - computed: true, optional: false, required: false
  public get contact() {
    return this.getStringAttribute('contact');
  }

  // contexts - computed: true, optional: false, required: false
  private _contexts = new DataIosxeSnmpServerContextsList(this, "contexts", false);
  public get contexts() {
    return this._contexts;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // enable_informs - computed: true, optional: false, required: false
  public get enableInforms() {
    return this.getBooleanAttribute('enable_informs');
  }

  // enable_logging_getop - computed: true, optional: false, required: false
  public get enableLoggingGetop() {
    return this.getBooleanAttribute('enable_logging_getop');
  }

  // enable_logging_setop - computed: true, optional: false, required: false
  public get enableLoggingSetop() {
    return this.getBooleanAttribute('enable_logging_setop');
  }

  // enable_traps - computed: true, optional: false, required: false
  public get enableTraps() {
    return this.getBooleanAttribute('enable_traps');
  }

  // enable_traps_aaa_server - computed: true, optional: false, required: false
  public get enableTrapsAaaServer() {
    return this.getBooleanAttribute('enable_traps_aaa_server');
  }

  // enable_traps_adslline - computed: true, optional: false, required: false
  public get enableTrapsAdslline() {
    return this.getBooleanAttribute('enable_traps_adslline');
  }

  // enable_traps_alarm_type - computed: true, optional: false, required: false
  public get enableTrapsAlarmType() {
    return this.getStringAttribute('enable_traps_alarm_type');
  }

  // enable_traps_auth_framework_sec_violation - computed: true, optional: false, required: false
  public get enableTrapsAuthFrameworkSecViolation() {
    return this.getBooleanAttribute('enable_traps_auth_framework_sec_violation');
  }

  // enable_traps_bfd - computed: true, optional: false, required: false
  public get enableTrapsBfd() {
    return this.getBooleanAttribute('enable_traps_bfd');
  }

  // enable_traps_bgp - computed: true, optional: false, required: false
  public get enableTrapsBgp() {
    return this.getBooleanAttribute('enable_traps_bgp');
  }

  // enable_traps_bgp_cbgp2 - computed: true, optional: false, required: false
  public get enableTrapsBgpCbgp2() {
    return this.getBooleanAttribute('enable_traps_bgp_cbgp2');
  }

  // enable_traps_bgp_cbgp2_state_changes - computed: true, optional: false, required: false
  public get enableTrapsBgpCbgp2StateChanges() {
    return this.getListAttribute('enable_traps_bgp_cbgp2_state_changes');
  }

  // enable_traps_bgp_cbgp2_threshold_prefix - computed: true, optional: false, required: false
  public get enableTrapsBgpCbgp2ThresholdPrefix() {
    return this.getBooleanAttribute('enable_traps_bgp_cbgp2_threshold_prefix');
  }

  // enable_traps_bridge_newroot - computed: true, optional: false, required: false
  public get enableTrapsBridgeNewroot() {
    return this.getBooleanAttribute('enable_traps_bridge_newroot');
  }

  // enable_traps_bridge_topologychange - computed: true, optional: false, required: false
  public get enableTrapsBridgeTopologychange() {
    return this.getBooleanAttribute('enable_traps_bridge_topologychange');
  }

  // enable_traps_bulkstat_collection - computed: true, optional: false, required: false
  public get enableTrapsBulkstatCollection() {
    return this.getBooleanAttribute('enable_traps_bulkstat_collection');
  }

  // enable_traps_bulkstat_transfer - computed: true, optional: false, required: false
  public get enableTrapsBulkstatTransfer() {
    return this.getBooleanAttribute('enable_traps_bulkstat_transfer');
  }

  // enable_traps_call_home_message_send_fail - computed: true, optional: false, required: false
  public get enableTrapsCallHomeMessageSendFail() {
    return this.getBooleanAttribute('enable_traps_call_home_message_send_fail');
  }

  // enable_traps_call_home_server_fail - computed: true, optional: false, required: false
  public get enableTrapsCallHomeServerFail() {
    return this.getBooleanAttribute('enable_traps_call_home_server_fail');
  }

  // enable_traps_casa - computed: true, optional: false, required: false
  public get enableTrapsCasa() {
    return this.getBooleanAttribute('enable_traps_casa');
  }

  // enable_traps_cbgp2 - computed: true, optional: false, required: false
  public get enableTrapsCbgp2() {
    return this.getBooleanAttribute('enable_traps_cbgp2');
  }

  // enable_traps_cef_inconsistency - computed: true, optional: false, required: false
  public get enableTrapsCefInconsistency() {
    return this.getBooleanAttribute('enable_traps_cef_inconsistency');
  }

  // enable_traps_cef_peer_fib_state_change - computed: true, optional: false, required: false
  public get enableTrapsCefPeerFibStateChange() {
    return this.getBooleanAttribute('enable_traps_cef_peer_fib_state_change');
  }

  // enable_traps_cef_peer_state_change - computed: true, optional: false, required: false
  public get enableTrapsCefPeerStateChange() {
    return this.getBooleanAttribute('enable_traps_cef_peer_state_change');
  }

  // enable_traps_cef_resource_failure - computed: true, optional: false, required: false
  public get enableTrapsCefResourceFailure() {
    return this.getBooleanAttribute('enable_traps_cef_resource_failure');
  }

  // enable_traps_cnpd - computed: true, optional: false, required: false
  public get enableTrapsCnpd() {
    return this.getBooleanAttribute('enable_traps_cnpd');
  }

  // enable_traps_config - computed: true, optional: false, required: false
  public get enableTrapsConfig() {
    return this.getBooleanAttribute('enable_traps_config');
  }

  // enable_traps_config_copy - computed: true, optional: false, required: false
  public get enableTrapsConfigCopy() {
    return this.getBooleanAttribute('enable_traps_config_copy');
  }

  // enable_traps_config_ctid - computed: true, optional: false, required: false
  public get enableTrapsConfigCtid() {
    return this.getBooleanAttribute('enable_traps_config_ctid');
  }

  // enable_traps_cpu_threshold - computed: true, optional: false, required: false
  public get enableTrapsCpuThreshold() {
    return this.getBooleanAttribute('enable_traps_cpu_threshold');
  }

  // enable_traps_dhcp - computed: true, optional: false, required: false
  public get enableTrapsDhcp() {
    return this.getBooleanAttribute('enable_traps_dhcp');
  }

  // enable_traps_dial - computed: true, optional: false, required: false
  public get enableTrapsDial() {
    return this.getBooleanAttribute('enable_traps_dial');
  }

  // enable_traps_dlsw - computed: true, optional: false, required: false
  public get enableTrapsDlsw() {
    return this.getBooleanAttribute('enable_traps_dlsw');
  }

  // enable_traps_ds1 - computed: true, optional: false, required: false
  public get enableTrapsDs1() {
    return this.getBooleanAttribute('enable_traps_ds1');
  }

  // enable_traps_dsp_card_status - computed: true, optional: false, required: false
  public get enableTrapsDspCardStatus() {
    return this.getBooleanAttribute('enable_traps_dsp_card_status');
  }

  // enable_traps_dsp_oper_state - computed: true, optional: false, required: false
  public get enableTrapsDspOperState() {
    return this.getBooleanAttribute('enable_traps_dsp_oper_state');
  }

  // enable_traps_eigrp - computed: true, optional: false, required: false
  public get enableTrapsEigrp() {
    return this.getBooleanAttribute('enable_traps_eigrp');
  }

  // enable_traps_energywise - computed: true, optional: false, required: false
  public get enableTrapsEnergywise() {
    return this.getBooleanAttribute('enable_traps_energywise');
  }

  // enable_traps_entity - computed: true, optional: false, required: false
  public get enableTrapsEntity() {
    return this.getBooleanAttribute('enable_traps_entity');
  }

  // enable_traps_entity_diag_boot_up_fail - computed: true, optional: false, required: false
  public get enableTrapsEntityDiagBootUpFail() {
    return this.getBooleanAttribute('enable_traps_entity_diag_boot_up_fail');
  }

  // enable_traps_entity_diag_hm_test_recover - computed: true, optional: false, required: false
  public get enableTrapsEntityDiagHmTestRecover() {
    return this.getBooleanAttribute('enable_traps_entity_diag_hm_test_recover');
  }

  // enable_traps_entity_diag_hm_thresh_reached - computed: true, optional: false, required: false
  public get enableTrapsEntityDiagHmThreshReached() {
    return this.getBooleanAttribute('enable_traps_entity_diag_hm_thresh_reached');
  }

  // enable_traps_entity_diag_scheduled_test_fail - computed: true, optional: false, required: false
  public get enableTrapsEntityDiagScheduledTestFail() {
    return this.getBooleanAttribute('enable_traps_entity_diag_scheduled_test_fail');
  }

  // enable_traps_entity_perf_throughput_notif - computed: true, optional: false, required: false
  public get enableTrapsEntityPerfThroughputNotif() {
    return this.getBooleanAttribute('enable_traps_entity_perf_throughput_notif');
  }

  // enable_traps_entity_qfp_mem_res_thresh - computed: true, optional: false, required: false
  public get enableTrapsEntityQfpMemResThresh() {
    return this.getBooleanAttribute('enable_traps_entity_qfp_mem_res_thresh');
  }

  // enable_traps_entity_qfp_throughput_notif - computed: true, optional: false, required: false
  public get enableTrapsEntityQfpThroughputNotif() {
    return this.getBooleanAttribute('enable_traps_entity_qfp_throughput_notif');
  }

  // enable_traps_entity_sensor - computed: true, optional: false, required: false
  public get enableTrapsEntitySensor() {
    return this.getBooleanAttribute('enable_traps_entity_sensor');
  }

  // enable_traps_entity_state - computed: true, optional: false, required: false
  public get enableTrapsEntityState() {
    return this.getBooleanAttribute('enable_traps_entity_state');
  }

  // enable_traps_envmon - computed: true, optional: false, required: false
  public get enableTrapsEnvmon() {
    return this.getBooleanAttribute('enable_traps_envmon');
  }

  // enable_traps_errdisable - computed: true, optional: false, required: false
  public get enableTrapsErrdisable() {
    return this.getBooleanAttribute('enable_traps_errdisable');
  }

  // enable_traps_ether_oam - computed: true, optional: false, required: false
  public get enableTrapsEtherOam() {
    return this.getBooleanAttribute('enable_traps_ether_oam');
  }

  // enable_traps_ethernet_cfm_alarm - computed: true, optional: false, required: false
  public get enableTrapsEthernetCfmAlarm() {
    return this.getBooleanAttribute('enable_traps_ethernet_cfm_alarm');
  }

  // enable_traps_ethernet_cfm_cc_config - computed: true, optional: false, required: false
  public get enableTrapsEthernetCfmCcConfig() {
    return this.getBooleanAttribute('enable_traps_ethernet_cfm_cc_config');
  }

  // enable_traps_ethernet_cfm_cc_cross_connect - computed: true, optional: false, required: false
  public get enableTrapsEthernetCfmCcCrossConnect() {
    return this.getBooleanAttribute('enable_traps_ethernet_cfm_cc_cross_connect');
  }

  // enable_traps_ethernet_cfm_cc_loop - computed: true, optional: false, required: false
  public get enableTrapsEthernetCfmCcLoop() {
    return this.getBooleanAttribute('enable_traps_ethernet_cfm_cc_loop');
  }

  // enable_traps_ethernet_cfm_cc_mep_down - computed: true, optional: false, required: false
  public get enableTrapsEthernetCfmCcMepDown() {
    return this.getBooleanAttribute('enable_traps_ethernet_cfm_cc_mep_down');
  }

  // enable_traps_ethernet_cfm_cc_mep_up - computed: true, optional: false, required: false
  public get enableTrapsEthernetCfmCcMepUp() {
    return this.getBooleanAttribute('enable_traps_ethernet_cfm_cc_mep_up');
  }

  // enable_traps_ethernet_cfm_crosscheck_mep_missing - computed: true, optional: false, required: false
  public get enableTrapsEthernetCfmCrosscheckMepMissing() {
    return this.getBooleanAttribute('enable_traps_ethernet_cfm_crosscheck_mep_missing');
  }

  // enable_traps_ethernet_cfm_crosscheck_mep_unknown - computed: true, optional: false, required: false
  public get enableTrapsEthernetCfmCrosscheckMepUnknown() {
    return this.getBooleanAttribute('enable_traps_ethernet_cfm_crosscheck_mep_unknown');
  }

  // enable_traps_ethernet_cfm_crosscheck_service_up - computed: true, optional: false, required: false
  public get enableTrapsEthernetCfmCrosscheckServiceUp() {
    return this.getBooleanAttribute('enable_traps_ethernet_cfm_crosscheck_service_up');
  }

  // enable_traps_ethernet_evc_create - computed: true, optional: false, required: false
  public get enableTrapsEthernetEvcCreate() {
    return this.getBooleanAttribute('enable_traps_ethernet_evc_create');
  }

  // enable_traps_ethernet_evc_delete - computed: true, optional: false, required: false
  public get enableTrapsEthernetEvcDelete() {
    return this.getBooleanAttribute('enable_traps_ethernet_evc_delete');
  }

  // enable_traps_ethernet_evc_status - computed: true, optional: false, required: false
  public get enableTrapsEthernetEvcStatus() {
    return this.getBooleanAttribute('enable_traps_ethernet_evc_status');
  }

  // enable_traps_event_manager - computed: true, optional: false, required: false
  public get enableTrapsEventManager() {
    return this.getBooleanAttribute('enable_traps_event_manager');
  }

  // enable_traps_fast_reroute_protected - computed: true, optional: false, required: false
  public get enableTrapsFastRerouteProtected() {
    return this.getBooleanAttribute('enable_traps_fast_reroute_protected');
  }

  // enable_traps_firewall_serverstatus - computed: true, optional: false, required: false
  public get enableTrapsFirewallServerstatus() {
    return this.getBooleanAttribute('enable_traps_firewall_serverstatus');
  }

  // enable_traps_flash_insertion - computed: true, optional: false, required: false
  public get enableTrapsFlashInsertion() {
    return this.getBooleanAttribute('enable_traps_flash_insertion');
  }

  // enable_traps_flash_lowspace - computed: true, optional: false, required: false
  public get enableTrapsFlashLowspace() {
    return this.getBooleanAttribute('enable_traps_flash_lowspace');
  }

  // enable_traps_flash_removal - computed: true, optional: false, required: false
  public get enableTrapsFlashRemoval() {
    return this.getBooleanAttribute('enable_traps_flash_removal');
  }

  // enable_traps_flowmon - computed: true, optional: false, required: false
  public get enableTrapsFlowmon() {
    return this.getBooleanAttribute('enable_traps_flowmon');
  }

  // enable_traps_frame_relay_config_bundle_mismatch - computed: true, optional: false, required: false
  public get enableTrapsFrameRelayConfigBundleMismatch() {
    return this.getBooleanAttribute('enable_traps_frame_relay_config_bundle_mismatch');
  }

  // enable_traps_frame_relay_config_only - computed: true, optional: false, required: false
  public get enableTrapsFrameRelayConfigOnly() {
    return this.getBooleanAttribute('enable_traps_frame_relay_config_only');
  }

  // enable_traps_frame_relay_config_subif_configs - computed: true, optional: false, required: false
  public get enableTrapsFrameRelayConfigSubifConfigs() {
    return this.getBooleanAttribute('enable_traps_frame_relay_config_subif_configs');
  }

  // enable_traps_frame_relay_multilink_bundle_mismatch - computed: true, optional: false, required: false
  public get enableTrapsFrameRelayMultilinkBundleMismatch() {
    return this.getBooleanAttribute('enable_traps_frame_relay_multilink_bundle_mismatch');
  }

  // enable_traps_frame_relay_subif_count - computed: true, optional: false, required: false
  public get enableTrapsFrameRelaySubifCount() {
    return this.getNumberAttribute('enable_traps_frame_relay_subif_count');
  }

  // enable_traps_frame_relay_subif_interval - computed: true, optional: false, required: false
  public get enableTrapsFrameRelaySubifInterval() {
    return this.getNumberAttribute('enable_traps_frame_relay_subif_interval');
  }

  // enable_traps_fru_ctrl - computed: true, optional: false, required: false
  public get enableTrapsFruCtrl() {
    return this.getBooleanAttribute('enable_traps_fru_ctrl');
  }

  // enable_traps_hsrp - computed: true, optional: false, required: false
  public get enableTrapsHsrp() {
    return this.getBooleanAttribute('enable_traps_hsrp');
  }

  // enable_traps_ike_policy_add - computed: true, optional: false, required: false
  public get enableTrapsIkePolicyAdd() {
    return this.getBooleanAttribute('enable_traps_ike_policy_add');
  }

  // enable_traps_ike_policy_delete - computed: true, optional: false, required: false
  public get enableTrapsIkePolicyDelete() {
    return this.getBooleanAttribute('enable_traps_ike_policy_delete');
  }

  // enable_traps_ike_tunnel_start - computed: true, optional: false, required: false
  public get enableTrapsIkeTunnelStart() {
    return this.getBooleanAttribute('enable_traps_ike_tunnel_start');
  }

  // enable_traps_ike_tunnel_stop - computed: true, optional: false, required: false
  public get enableTrapsIkeTunnelStop() {
    return this.getBooleanAttribute('enable_traps_ike_tunnel_stop');
  }

  // enable_traps_ip_local_pool - computed: true, optional: false, required: false
  public get enableTrapsIpLocalPool() {
    return this.getBooleanAttribute('enable_traps_ip_local_pool');
  }

  // enable_traps_ipmulticast - computed: true, optional: false, required: false
  public get enableTrapsIpmulticast() {
    return this.getBooleanAttribute('enable_traps_ipmulticast');
  }

  // enable_traps_ipsec_cryptomap_add - computed: true, optional: false, required: false
  public get enableTrapsIpsecCryptomapAdd() {
    return this.getBooleanAttribute('enable_traps_ipsec_cryptomap_add');
  }

  // enable_traps_ipsec_cryptomap_attach - computed: true, optional: false, required: false
  public get enableTrapsIpsecCryptomapAttach() {
    return this.getBooleanAttribute('enable_traps_ipsec_cryptomap_attach');
  }

  // enable_traps_ipsec_cryptomap_delete - computed: true, optional: false, required: false
  public get enableTrapsIpsecCryptomapDelete() {
    return this.getBooleanAttribute('enable_traps_ipsec_cryptomap_delete');
  }

  // enable_traps_ipsec_cryptomap_detach - computed: true, optional: false, required: false
  public get enableTrapsIpsecCryptomapDetach() {
    return this.getBooleanAttribute('enable_traps_ipsec_cryptomap_detach');
  }

  // enable_traps_ipsec_too_many_sas - computed: true, optional: false, required: false
  public get enableTrapsIpsecTooManySas() {
    return this.getBooleanAttribute('enable_traps_ipsec_too_many_sas');
  }

  // enable_traps_ipsec_tunnel_start - computed: true, optional: false, required: false
  public get enableTrapsIpsecTunnelStart() {
    return this.getBooleanAttribute('enable_traps_ipsec_tunnel_start');
  }

  // enable_traps_ipsec_tunnel_stop - computed: true, optional: false, required: false
  public get enableTrapsIpsecTunnelStop() {
    return this.getBooleanAttribute('enable_traps_ipsec_tunnel_stop');
  }

  // enable_traps_ipsla - computed: true, optional: false, required: false
  public get enableTrapsIpsla() {
    return this.getBooleanAttribute('enable_traps_ipsla');
  }

  // enable_traps_isdn_call_information - computed: true, optional: false, required: false
  public get enableTrapsIsdnCallInformation() {
    return this.getBooleanAttribute('enable_traps_isdn_call_information');
  }

  // enable_traps_isdn_chan_not_avail - computed: true, optional: false, required: false
  public get enableTrapsIsdnChanNotAvail() {
    return this.getBooleanAttribute('enable_traps_isdn_chan_not_avail');
  }

  // enable_traps_isdn_ietf - computed: true, optional: false, required: false
  public get enableTrapsIsdnIetf() {
    return this.getBooleanAttribute('enable_traps_isdn_ietf');
  }

  // enable_traps_isdn_layer2 - computed: true, optional: false, required: false
  public get enableTrapsIsdnLayer2() {
    return this.getBooleanAttribute('enable_traps_isdn_layer2');
  }

  // enable_traps_isis - computed: true, optional: false, required: false
  public get enableTrapsIsis() {
    return this.getBooleanAttribute('enable_traps_isis');
  }

  // enable_traps_l2tun_pseudowire_status - computed: true, optional: false, required: false
  public get enableTrapsL2TunPseudowireStatus() {
    return this.getBooleanAttribute('enable_traps_l2tun_pseudowire_status');
  }

  // enable_traps_l2tun_session - computed: true, optional: false, required: false
  public get enableTrapsL2TunSession() {
    return this.getBooleanAttribute('enable_traps_l2tun_session');
  }

  // enable_traps_l2tun_tunnel - computed: true, optional: false, required: false
  public get enableTrapsL2TunTunnel() {
    return this.getBooleanAttribute('enable_traps_l2tun_tunnel');
  }

  // enable_traps_license - computed: true, optional: false, required: false
  public get enableTrapsLicense() {
    return this.getBooleanAttribute('enable_traps_license');
  }

  // enable_traps_lisp - computed: true, optional: false, required: false
  public get enableTrapsLisp() {
    return this.getBooleanAttribute('enable_traps_lisp');
  }

  // enable_traps_local_auth - computed: true, optional: false, required: false
  public get enableTrapsLocalAuth() {
    return this.getBooleanAttribute('enable_traps_local_auth');
  }

  // enable_traps_mac_notification_change - computed: true, optional: false, required: false
  public get enableTrapsMacNotificationChange() {
    return this.getBooleanAttribute('enable_traps_mac_notification_change');
  }

  // enable_traps_mac_notification_move - computed: true, optional: false, required: false
  public get enableTrapsMacNotificationMove() {
    return this.getBooleanAttribute('enable_traps_mac_notification_move');
  }

  // enable_traps_mac_notification_threshold - computed: true, optional: false, required: false
  public get enableTrapsMacNotificationThreshold() {
    return this.getBooleanAttribute('enable_traps_mac_notification_threshold');
  }

  // enable_traps_memory_bufferpeak - computed: true, optional: false, required: false
  public get enableTrapsMemoryBufferpeak() {
    return this.getBooleanAttribute('enable_traps_memory_bufferpeak');
  }

  // enable_traps_mpls - computed: true, optional: false, required: false
  public get enableTrapsMpls() {
    return this.getBooleanAttribute('enable_traps_mpls');
  }

  // enable_traps_mpls_ldp - computed: true, optional: false, required: false
  public get enableTrapsMplsLdp() {
    return this.getBooleanAttribute('enable_traps_mpls_ldp');
  }

  // enable_traps_mpls_rfc - computed: true, optional: false, required: false
  public get enableTrapsMplsRfc() {
    return this.getBooleanAttribute('enable_traps_mpls_rfc');
  }

  // enable_traps_mpls_rfc_ldp - computed: true, optional: false, required: false
  public get enableTrapsMplsRfcLdp() {
    return this.getBooleanAttribute('enable_traps_mpls_rfc_ldp');
  }

  // enable_traps_mpls_traffic_eng - computed: true, optional: false, required: false
  public get enableTrapsMplsTrafficEng() {
    return this.getBooleanAttribute('enable_traps_mpls_traffic_eng');
  }

  // enable_traps_mpls_vpn - computed: true, optional: false, required: false
  public get enableTrapsMplsVpn() {
    return this.getBooleanAttribute('enable_traps_mpls_vpn');
  }

  // enable_traps_msdp - computed: true, optional: false, required: false
  public get enableTrapsMsdp() {
    return this.getBooleanAttribute('enable_traps_msdp');
  }

  // enable_traps_mvpn - computed: true, optional: false, required: false
  public get enableTrapsMvpn() {
    return this.getBooleanAttribute('enable_traps_mvpn');
  }

  // enable_traps_nhrp_nhc - computed: true, optional: false, required: false
  public get enableTrapsNhrpNhc() {
    return this.getBooleanAttribute('enable_traps_nhrp_nhc');
  }

  // enable_traps_nhrp_nhp - computed: true, optional: false, required: false
  public get enableTrapsNhrpNhp() {
    return this.getBooleanAttribute('enable_traps_nhrp_nhp');
  }

  // enable_traps_nhrp_nhs - computed: true, optional: false, required: false
  public get enableTrapsNhrpNhs() {
    return this.getBooleanAttribute('enable_traps_nhrp_nhs');
  }

  // enable_traps_nhrp_quota_exceeded - computed: true, optional: false, required: false
  public get enableTrapsNhrpQuotaExceeded() {
    return this.getBooleanAttribute('enable_traps_nhrp_quota_exceeded');
  }

  // enable_traps_ospf_config_errors - computed: true, optional: false, required: false
  public get enableTrapsOspfConfigErrors() {
    return this.getBooleanAttribute('enable_traps_ospf_config_errors');
  }

  // enable_traps_ospf_config_lsa - computed: true, optional: false, required: false
  public get enableTrapsOspfConfigLsa() {
    return this.getBooleanAttribute('enable_traps_ospf_config_lsa');
  }

  // enable_traps_ospf_config_retransmit - computed: true, optional: false, required: false
  public get enableTrapsOspfConfigRetransmit() {
    return this.getBooleanAttribute('enable_traps_ospf_config_retransmit');
  }

  // enable_traps_ospf_config_state_change - computed: true, optional: false, required: false
  public get enableTrapsOspfConfigStateChange() {
    return this.getBooleanAttribute('enable_traps_ospf_config_state_change');
  }

  // enable_traps_ospf_errors_enable - computed: true, optional: false, required: false
  public get enableTrapsOspfErrorsEnable() {
    return this.getBooleanAttribute('enable_traps_ospf_errors_enable');
  }

  // enable_traps_ospf_lsa_enable - computed: true, optional: false, required: false
  public get enableTrapsOspfLsaEnable() {
    return this.getBooleanAttribute('enable_traps_ospf_lsa_enable');
  }

  // enable_traps_ospf_nssa_trans_change - computed: true, optional: false, required: false
  public get enableTrapsOspfNssaTransChange() {
    return this.getBooleanAttribute('enable_traps_ospf_nssa_trans_change');
  }

  // enable_traps_ospf_retransmit_enable - computed: true, optional: false, required: false
  public get enableTrapsOspfRetransmitEnable() {
    return this.getBooleanAttribute('enable_traps_ospf_retransmit_enable');
  }

  // enable_traps_ospf_shamlink_interface - computed: true, optional: false, required: false
  public get enableTrapsOspfShamlinkInterface() {
    return this.getBooleanAttribute('enable_traps_ospf_shamlink_interface');
  }

  // enable_traps_ospf_shamlink_neighbor - computed: true, optional: false, required: false
  public get enableTrapsOspfShamlinkNeighbor() {
    return this.getBooleanAttribute('enable_traps_ospf_shamlink_neighbor');
  }

  // enable_traps_ospfv3_config_errors - computed: true, optional: false, required: false
  public get enableTrapsOspfv3ConfigErrors() {
    return this.getBooleanAttribute('enable_traps_ospfv3_config_errors');
  }

  // enable_traps_ospfv3_config_state_change - computed: true, optional: false, required: false
  public get enableTrapsOspfv3ConfigStateChange() {
    return this.getBooleanAttribute('enable_traps_ospfv3_config_state_change');
  }

  // enable_traps_ospfv3_errors - computed: true, optional: false, required: false
  public get enableTrapsOspfv3Errors() {
    return this.getBooleanAttribute('enable_traps_ospfv3_errors');
  }

  // enable_traps_ospfv3_state_change - computed: true, optional: false, required: false
  public get enableTrapsOspfv3StateChange() {
    return this.getBooleanAttribute('enable_traps_ospfv3_state_change');
  }

  // enable_traps_pfr - computed: true, optional: false, required: false
  public get enableTrapsPfr() {
    return this.getBooleanAttribute('enable_traps_pfr');
  }

  // enable_traps_pim_invalid_pim_message - computed: true, optional: false, required: false
  public get enableTrapsPimInvalidPimMessage() {
    return this.getBooleanAttribute('enable_traps_pim_invalid_pim_message');
  }

  // enable_traps_pim_neighbor_change - computed: true, optional: false, required: false
  public get enableTrapsPimNeighborChange() {
    return this.getBooleanAttribute('enable_traps_pim_neighbor_change');
  }

  // enable_traps_pim_rp_mapping_change - computed: true, optional: false, required: false
  public get enableTrapsPimRpMappingChange() {
    return this.getBooleanAttribute('enable_traps_pim_rp_mapping_change');
  }

  // enable_traps_pimstdmib_interface_election - computed: true, optional: false, required: false
  public get enableTrapsPimstdmibInterfaceElection() {
    return this.getBooleanAttribute('enable_traps_pimstdmib_interface_election');
  }

  // enable_traps_pimstdmib_invalid_join_prune - computed: true, optional: false, required: false
  public get enableTrapsPimstdmibInvalidJoinPrune() {
    return this.getBooleanAttribute('enable_traps_pimstdmib_invalid_join_prune');
  }

  // enable_traps_pimstdmib_invalid_register - computed: true, optional: false, required: false
  public get enableTrapsPimstdmibInvalidRegister() {
    return this.getBooleanAttribute('enable_traps_pimstdmib_invalid_register');
  }

  // enable_traps_pimstdmib_neighbor_loss - computed: true, optional: false, required: false
  public get enableTrapsPimstdmibNeighborLoss() {
    return this.getBooleanAttribute('enable_traps_pimstdmib_neighbor_loss');
  }

  // enable_traps_pimstdmib_rp_mapping_change - computed: true, optional: false, required: false
  public get enableTrapsPimstdmibRpMappingChange() {
    return this.getBooleanAttribute('enable_traps_pimstdmib_rp_mapping_change');
  }

  // enable_traps_pki - computed: true, optional: false, required: false
  public get enableTrapsPki() {
    return this.getBooleanAttribute('enable_traps_pki');
  }

  // enable_traps_port_security - computed: true, optional: false, required: false
  public get enableTrapsPortSecurity() {
    return this.getBooleanAttribute('enable_traps_port_security');
  }

  // enable_traps_power_ethernet_group - computed: true, optional: false, required: false
  public get enableTrapsPowerEthernetGroup() {
    return this.getStringAttribute('enable_traps_power_ethernet_group');
  }

  // enable_traps_power_ethernet_police - computed: true, optional: false, required: false
  public get enableTrapsPowerEthernetPolice() {
    return this.getBooleanAttribute('enable_traps_power_ethernet_police');
  }

  // enable_traps_pppoe - computed: true, optional: false, required: false
  public get enableTrapsPppoe() {
    return this.getBooleanAttribute('enable_traps_pppoe');
  }

  // enable_traps_pw_vc - computed: true, optional: false, required: false
  public get enableTrapsPwVc() {
    return this.getBooleanAttribute('enable_traps_pw_vc');
  }

  // enable_traps_rep - computed: true, optional: false, required: false
  public get enableTrapsRep() {
    return this.getBooleanAttribute('enable_traps_rep');
  }

  // enable_traps_resource_policy - computed: true, optional: false, required: false
  public get enableTrapsResourcePolicy() {
    return this.getBooleanAttribute('enable_traps_resource_policy');
  }

  // enable_traps_rf - computed: true, optional: false, required: false
  public get enableTrapsRf() {
    return this.getBooleanAttribute('enable_traps_rf');
  }

  // enable_traps_rsvp - computed: true, optional: false, required: false
  public get enableTrapsRsvp() {
    return this.getBooleanAttribute('enable_traps_rsvp');
  }

  // enable_traps_smart_license - computed: true, optional: false, required: false
  public get enableTrapsSmartLicense() {
    return this.getBooleanAttribute('enable_traps_smart_license');
  }

  // enable_traps_snmp_authentication - computed: true, optional: false, required: false
  public get enableTrapsSnmpAuthentication() {
    return this.getBooleanAttribute('enable_traps_snmp_authentication');
  }

  // enable_traps_snmp_coldstart - computed: true, optional: false, required: false
  public get enableTrapsSnmpColdstart() {
    return this.getBooleanAttribute('enable_traps_snmp_coldstart');
  }

  // enable_traps_snmp_linkdown - computed: true, optional: false, required: false
  public get enableTrapsSnmpLinkdown() {
    return this.getBooleanAttribute('enable_traps_snmp_linkdown');
  }

  // enable_traps_snmp_linkup - computed: true, optional: false, required: false
  public get enableTrapsSnmpLinkup() {
    return this.getBooleanAttribute('enable_traps_snmp_linkup');
  }

  // enable_traps_snmp_warmstart - computed: true, optional: false, required: false
  public get enableTrapsSnmpWarmstart() {
    return this.getBooleanAttribute('enable_traps_snmp_warmstart');
  }

  // enable_traps_sonet - computed: true, optional: false, required: false
  public get enableTrapsSonet() {
    return this.getBooleanAttribute('enable_traps_sonet');
  }

  // enable_traps_srp - computed: true, optional: false, required: false
  public get enableTrapsSrp() {
    return this.getBooleanAttribute('enable_traps_srp');
  }

  // enable_traps_stackwise - computed: true, optional: false, required: false
  public get enableTrapsStackwise() {
    return this.getBooleanAttribute('enable_traps_stackwise');
  }

  // enable_traps_stpx_inconsistency - computed: true, optional: false, required: false
  public get enableTrapsStpxInconsistency() {
    return this.getBooleanAttribute('enable_traps_stpx_inconsistency');
  }

  // enable_traps_stpx_loop_inconsistency - computed: true, optional: false, required: false
  public get enableTrapsStpxLoopInconsistency() {
    return this.getBooleanAttribute('enable_traps_stpx_loop_inconsistency');
  }

  // enable_traps_stpx_root_inconsistency - computed: true, optional: false, required: false
  public get enableTrapsStpxRootInconsistency() {
    return this.getBooleanAttribute('enable_traps_stpx_root_inconsistency');
  }

  // enable_traps_syslog - computed: true, optional: false, required: false
  public get enableTrapsSyslog() {
    return this.getBooleanAttribute('enable_traps_syslog');
  }

  // enable_traps_transceiver_all - computed: true, optional: false, required: false
  public get enableTrapsTransceiverAll() {
    return this.getBooleanAttribute('enable_traps_transceiver_all');
  }

  // enable_traps_tty - computed: true, optional: false, required: false
  public get enableTrapsTty() {
    return this.getBooleanAttribute('enable_traps_tty');
  }

  // enable_traps_udld_link_fail_rpt - computed: true, optional: false, required: false
  public get enableTrapsUdldLinkFailRpt() {
    return this.getBooleanAttribute('enable_traps_udld_link_fail_rpt');
  }

  // enable_traps_udld_status_change - computed: true, optional: false, required: false
  public get enableTrapsUdldStatusChange() {
    return this.getBooleanAttribute('enable_traps_udld_status_change');
  }

  // enable_traps_vdsl2line - computed: true, optional: false, required: false
  public get enableTrapsVdsl2Line() {
    return this.getBooleanAttribute('enable_traps_vdsl2line');
  }

  // enable_traps_vlan_membership - computed: true, optional: false, required: false
  public get enableTrapsVlanMembership() {
    return this.getBooleanAttribute('enable_traps_vlan_membership');
  }

  // enable_traps_vlancreate - computed: true, optional: false, required: false
  public get enableTrapsVlancreate() {
    return this.getBooleanAttribute('enable_traps_vlancreate');
  }

  // enable_traps_vlandelete - computed: true, optional: false, required: false
  public get enableTrapsVlandelete() {
    return this.getBooleanAttribute('enable_traps_vlandelete');
  }

  // enable_traps_voice - computed: true, optional: false, required: false
  public get enableTrapsVoice() {
    return this.getBooleanAttribute('enable_traps_voice');
  }

  // enable_traps_vrfmib_vnet_trunk_down - computed: true, optional: false, required: false
  public get enableTrapsVrfmibVnetTrunkDown() {
    return this.getBooleanAttribute('enable_traps_vrfmib_vnet_trunk_down');
  }

  // enable_traps_vrfmib_vnet_trunk_up - computed: true, optional: false, required: false
  public get enableTrapsVrfmibVnetTrunkUp() {
    return this.getBooleanAttribute('enable_traps_vrfmib_vnet_trunk_up');
  }

  // enable_traps_vrfmib_vrf_down - computed: true, optional: false, required: false
  public get enableTrapsVrfmibVrfDown() {
    return this.getBooleanAttribute('enable_traps_vrfmib_vrf_down');
  }

  // enable_traps_vrfmib_vrf_up - computed: true, optional: false, required: false
  public get enableTrapsVrfmibVrfUp() {
    return this.getBooleanAttribute('enable_traps_vrfmib_vrf_up');
  }

  // enable_traps_vrrp - computed: true, optional: false, required: false
  public get enableTrapsVrrp() {
    return this.getBooleanAttribute('enable_traps_vrrp');
  }

  // enable_traps_vtp - computed: true, optional: false, required: false
  public get enableTrapsVtp() {
    return this.getBooleanAttribute('enable_traps_vtp');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataIosxeSnmpServerGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }

  // hosts - computed: true, optional: false, required: false
  private _hosts = new DataIosxeSnmpServerHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ifindex_persist - computed: true, optional: false, required: false
  public get ifindexPersist() {
    return this.getBooleanAttribute('ifindex_persist');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // packetsize - computed: true, optional: false, required: false
  public get packetsize() {
    return this.getNumberAttribute('packetsize');
  }

  // queue_length - computed: true, optional: false, required: false
  public get queueLength() {
    return this.getNumberAttribute('queue_length');
  }

  // snmp_communities - computed: true, optional: false, required: false
  private _snmpCommunities = new DataIosxeSnmpServerSnmpCommunitiesList(this, "snmp_communities", false);
  public get snmpCommunities() {
    return this._snmpCommunities;
  }

  // source_interface_informs_forty_gigabit_ethernet - computed: true, optional: false, required: false
  public get sourceInterfaceInformsFortyGigabitEthernet() {
    return this.getStringAttribute('source_interface_informs_forty_gigabit_ethernet');
  }

  // source_interface_informs_gigabit_ethernet - computed: true, optional: false, required: false
  public get sourceInterfaceInformsGigabitEthernet() {
    return this.getStringAttribute('source_interface_informs_gigabit_ethernet');
  }

  // source_interface_informs_hundred_gig_e - computed: true, optional: false, required: false
  public get sourceInterfaceInformsHundredGigE() {
    return this.getStringAttribute('source_interface_informs_hundred_gig_e');
  }

  // source_interface_informs_loopback - computed: true, optional: false, required: false
  public get sourceInterfaceInformsLoopback() {
    return this.getNumberAttribute('source_interface_informs_loopback');
  }

  // source_interface_informs_port_channel - computed: true, optional: false, required: false
  public get sourceInterfaceInformsPortChannel() {
    return this.getNumberAttribute('source_interface_informs_port_channel');
  }

  // source_interface_informs_port_channel_subinterface - computed: true, optional: false, required: false
  public get sourceInterfaceInformsPortChannelSubinterface() {
    return this.getStringAttribute('source_interface_informs_port_channel_subinterface');
  }

  // source_interface_informs_ten_gigabit_ethernet - computed: true, optional: false, required: false
  public get sourceInterfaceInformsTenGigabitEthernet() {
    return this.getStringAttribute('source_interface_informs_ten_gigabit_ethernet');
  }

  // source_interface_informs_vlan - computed: true, optional: false, required: false
  public get sourceInterfaceInformsVlan() {
    return this.getNumberAttribute('source_interface_informs_vlan');
  }

  // source_interface_traps_forty_gigabit_ethernet - computed: true, optional: false, required: false
  public get sourceInterfaceTrapsFortyGigabitEthernet() {
    return this.getStringAttribute('source_interface_traps_forty_gigabit_ethernet');
  }

  // source_interface_traps_gigabit_ethernet - computed: true, optional: false, required: false
  public get sourceInterfaceTrapsGigabitEthernet() {
    return this.getStringAttribute('source_interface_traps_gigabit_ethernet');
  }

  // source_interface_traps_hundred_gig_e - computed: true, optional: false, required: false
  public get sourceInterfaceTrapsHundredGigE() {
    return this.getStringAttribute('source_interface_traps_hundred_gig_e');
  }

  // source_interface_traps_loopback - computed: true, optional: false, required: false
  public get sourceInterfaceTrapsLoopback() {
    return this.getNumberAttribute('source_interface_traps_loopback');
  }

  // source_interface_traps_port_channel - computed: true, optional: false, required: false
  public get sourceInterfaceTrapsPortChannel() {
    return this.getNumberAttribute('source_interface_traps_port_channel');
  }

  // source_interface_traps_port_channel_subinterface - computed: true, optional: false, required: false
  public get sourceInterfaceTrapsPortChannelSubinterface() {
    return this.getStringAttribute('source_interface_traps_port_channel_subinterface');
  }

  // source_interface_traps_ten_gigabit_ethernet - computed: true, optional: false, required: false
  public get sourceInterfaceTrapsTenGigabitEthernet() {
    return this.getStringAttribute('source_interface_traps_ten_gigabit_ethernet');
  }

  // source_interface_traps_vlan - computed: true, optional: false, required: false
  public get sourceInterfaceTrapsVlan() {
    return this.getNumberAttribute('source_interface_traps_vlan');
  }

  // system_shutdown - computed: true, optional: false, required: false
  public get systemShutdown() {
    return this.getBooleanAttribute('system_shutdown');
  }

  // trap_source_forty_gigabit_ethernet - computed: true, optional: false, required: false
  public get trapSourceFortyGigabitEthernet() {
    return this.getStringAttribute('trap_source_forty_gigabit_ethernet');
  }

  // trap_source_gigabit_ethernet - computed: true, optional: false, required: false
  public get trapSourceGigabitEthernet() {
    return this.getStringAttribute('trap_source_gigabit_ethernet');
  }

  // trap_source_hundred_gig_e - computed: true, optional: false, required: false
  public get trapSourceHundredGigE() {
    return this.getStringAttribute('trap_source_hundred_gig_e');
  }

  // trap_source_loopback - computed: true, optional: false, required: false
  public get trapSourceLoopback() {
    return this.getNumberAttribute('trap_source_loopback');
  }

  // trap_source_port_channel - computed: true, optional: false, required: false
  public get trapSourcePortChannel() {
    return this.getNumberAttribute('trap_source_port_channel');
  }

  // trap_source_port_channel_subinterface - computed: true, optional: false, required: false
  public get trapSourcePortChannelSubinterface() {
    return this.getStringAttribute('trap_source_port_channel_subinterface');
  }

  // trap_source_ten_gigabit_ethernet - computed: true, optional: false, required: false
  public get trapSourceTenGigabitEthernet() {
    return this.getStringAttribute('trap_source_ten_gigabit_ethernet');
  }

  // trap_source_vlan - computed: true, optional: false, required: false
  public get trapSourceVlan() {
    return this.getNumberAttribute('trap_source_vlan');
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataIosxeSnmpServerUsersList(this, "users", false);
  public get users() {
    return this._users;
  }

  // views - computed: true, optional: false, required: false
  private _views = new DataIosxeSnmpServerViewsList(this, "views", false);
  public get views() {
    return this._views;
  }

  // vrf_hosts - computed: true, optional: false, required: false
  private _vrfHosts = new DataIosxeSnmpServerVrfHostsList(this, "vrf_hosts", false);
  public get vrfHosts() {
    return this._vrfHosts;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
