// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NksClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication type for the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#auth_type NksCluster#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#cluster_type NksCluster#cluster_type}
  */
  readonly clusterType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#hypervisor_code NksCluster#hypervisor_code}
  */
  readonly hypervisorCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#id NksCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#ip_acl NksCluster#ip_acl}
  */
  readonly ipAcl?: NksClusterIpAcl[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#ip_acl_default_action NksCluster#ip_acl_default_action}
  */
  readonly ipAclDefaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#k8s_version NksCluster#k8s_version}
  */
  readonly k8SVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#kms_key_tag NksCluster#kms_key_tag}
  */
  readonly kmsKeyTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#kube_network_plugin NksCluster#kube_network_plugin}
  */
  readonly kubeNetworkPlugin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#lb_private_subnet_no NksCluster#lb_private_subnet_no}
  */
  readonly lbPrivateSubnetNo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#lb_public_subnet_no NksCluster#lb_public_subnet_no}
  */
  readonly lbPublicSubnetNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#login_key_name NksCluster#login_key_name}
  */
  readonly loginKeyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#name NksCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#public_network NksCluster#public_network}
  */
  readonly publicNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#return_protection NksCluster#return_protection}
  */
  readonly returnProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#subnet_no_list NksCluster#subnet_no_list}
  */
  readonly subnetNoList: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#vpc_no NksCluster#vpc_no}
  */
  readonly vpcNo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#zone NksCluster#zone}
  */
  readonly zone: string;
  /**
  * access_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#access_entries NksCluster#access_entries}
  */
  readonly accessEntries?: NksClusterAccessEntries[] | cdktf.IResolvable;
  /**
  * log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#log NksCluster#log}
  */
  readonly log?: NksClusterLog;
  /**
  * oidc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#oidc NksCluster#oidc}
  */
  readonly oidc?: NksClusterOidc;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#timeouts NksCluster#timeouts}
  */
  readonly timeouts?: NksClusterTimeouts;
}
export interface NksClusterIpAcl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#action NksCluster#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#address NksCluster#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#comment NksCluster#comment}
  */
  readonly comment?: string;
}

export function nksClusterIpAclToTerraform(struct?: NksClusterIpAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    address: cdktf.stringToTerraform(struct!.address),
    comment: cdktf.stringToTerraform(struct!.comment),
  }
}


export function nksClusterIpAclToHclTerraform(struct?: NksClusterIpAcl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NksClusterIpAclOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NksClusterIpAcl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NksClusterIpAcl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._address = undefined;
      this._comment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._address = value.address;
      this._comment = value.comment;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // comment - computed: false, optional: true, required: false
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
}

export class NksClusterIpAclList extends cdktf.ComplexList {
  public internalValue? : NksClusterIpAcl[] | cdktf.IResolvable

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
  public get(index: number): NksClusterIpAclOutputReference {
    return new NksClusterIpAclOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NksClusterAccessEntriesPolicies {
  /**
  * List of namespaces when scope is 'namespace'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#namespaces NksCluster#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Scope of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#scope NksCluster#scope}
  */
  readonly scope: string;
  /**
  * Type of policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#type NksCluster#type}
  */
  readonly type: string;
}

export function nksClusterAccessEntriesPoliciesToTerraform(struct?: NksClusterAccessEntriesPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    scope: cdktf.stringToTerraform(struct!.scope),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function nksClusterAccessEntriesPoliciesToHclTerraform(struct?: NksClusterAccessEntriesPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NksClusterAccessEntriesPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NksClusterAccessEntriesPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NksClusterAccessEntriesPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaces = undefined;
      this._scope = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaces = value.namespaces;
      this._scope = value.scope;
      this._type = value.type;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class NksClusterAccessEntriesPoliciesList extends cdktf.ComplexList {
  public internalValue? : NksClusterAccessEntriesPolicies[] | cdktf.IResolvable

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
  public get(index: number): NksClusterAccessEntriesPoliciesOutputReference {
    return new NksClusterAccessEntriesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NksClusterAccessEntries {
  /**
  * Access entry value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#entry NksCluster#entry}
  */
  readonly entry: string;
  /**
  * List of groups assigned to the access entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#groups NksCluster#groups}
  */
  readonly groups?: string[];
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#policies NksCluster#policies}
  */
  readonly policies?: NksClusterAccessEntriesPolicies[] | cdktf.IResolvable;
}

export function nksClusterAccessEntriesToTerraform(struct?: NksClusterAccessEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry: cdktf.stringToTerraform(struct!.entry),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    policies: cdktf.listMapper(nksClusterAccessEntriesPoliciesToTerraform, true)(struct!.policies),
  }
}


export function nksClusterAccessEntriesToHclTerraform(struct?: NksClusterAccessEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry: {
      value: cdktf.stringToHclTerraform(struct!.entry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    policies: {
      value: cdktf.listMapperHcl(nksClusterAccessEntriesPoliciesToHclTerraform, true)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "NksClusterAccessEntriesPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NksClusterAccessEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NksClusterAccessEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entry !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NksClusterAccessEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entry = undefined;
      this._groups = undefined;
      this._policies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entry = value.entry;
      this._groups = value.groups;
      this._policies.internalValue = value.policies;
    }
  }

  // entry - computed: false, optional: false, required: true
  private _entry?: string; 
  public get entry() {
    return this.getStringAttribute('entry');
  }
  public set entry(value: string) {
    this._entry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new NksClusterAccessEntriesPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: NksClusterAccessEntriesPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }
}

export class NksClusterAccessEntriesList extends cdktf.ComplexList {
  public internalValue? : NksClusterAccessEntries[] | cdktf.IResolvable

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
  public get(index: number): NksClusterAccessEntriesOutputReference {
    return new NksClusterAccessEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NksClusterLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#audit NksCluster#audit}
  */
  readonly audit: boolean | cdktf.IResolvable;
}

export function nksClusterLogToTerraform(struct?: NksClusterLogOutputReference | NksClusterLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit: cdktf.booleanToTerraform(struct!.audit),
  }
}


export function nksClusterLogToHclTerraform(struct?: NksClusterLogOutputReference | NksClusterLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit: {
      value: cdktf.booleanToHclTerraform(struct!.audit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NksClusterLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NksClusterLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audit !== undefined) {
      hasAnyValues = true;
      internalValueResult.audit = this._audit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NksClusterLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audit = value.audit;
    }
  }

  // audit - computed: false, optional: false, required: true
  private _audit?: boolean | cdktf.IResolvable; 
  public get audit() {
    return this.getBooleanAttribute('audit');
  }
  public set audit(value: boolean | cdktf.IResolvable) {
    this._audit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditInput() {
    return this._audit;
  }
}
export interface NksClusterOidc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#client_id NksCluster#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#groups_claim NksCluster#groups_claim}
  */
  readonly groupsClaim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#groups_prefix NksCluster#groups_prefix}
  */
  readonly groupsPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#issuer_url NksCluster#issuer_url}
  */
  readonly issuerUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#required_claim NksCluster#required_claim}
  */
  readonly requiredClaim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#username_claim NksCluster#username_claim}
  */
  readonly usernameClaim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#username_prefix NksCluster#username_prefix}
  */
  readonly usernamePrefix?: string;
}

export function nksClusterOidcToTerraform(struct?: NksClusterOidcOutputReference | NksClusterOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    groups_claim: cdktf.stringToTerraform(struct!.groupsClaim),
    groups_prefix: cdktf.stringToTerraform(struct!.groupsPrefix),
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
    required_claim: cdktf.stringToTerraform(struct!.requiredClaim),
    username_claim: cdktf.stringToTerraform(struct!.usernameClaim),
    username_prefix: cdktf.stringToTerraform(struct!.usernamePrefix),
  }
}


export function nksClusterOidcToHclTerraform(struct?: NksClusterOidcOutputReference | NksClusterOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups_claim: {
      value: cdktf.stringToHclTerraform(struct!.groupsClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups_prefix: {
      value: cdktf.stringToHclTerraform(struct!.groupsPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_url: {
      value: cdktf.stringToHclTerraform(struct!.issuerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required_claim: {
      value: cdktf.stringToHclTerraform(struct!.requiredClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_claim: {
      value: cdktf.stringToHclTerraform(struct!.usernameClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_prefix: {
      value: cdktf.stringToHclTerraform(struct!.usernamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NksClusterOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NksClusterOidc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._groupsClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupsClaim = this._groupsClaim;
    }
    if (this._groupsPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupsPrefix = this._groupsPrefix;
    }
    if (this._issuerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUrl = this._issuerUrl;
    }
    if (this._requiredClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredClaim = this._requiredClaim;
    }
    if (this._usernameClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameClaim = this._usernameClaim;
    }
    if (this._usernamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernamePrefix = this._usernamePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NksClusterOidc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._groupsClaim = undefined;
      this._groupsPrefix = undefined;
      this._issuerUrl = undefined;
      this._requiredClaim = undefined;
      this._usernameClaim = undefined;
      this._usernamePrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._groupsClaim = value.groupsClaim;
      this._groupsPrefix = value.groupsPrefix;
      this._issuerUrl = value.issuerUrl;
      this._requiredClaim = value.requiredClaim;
      this._usernameClaim = value.usernameClaim;
      this._usernamePrefix = value.usernamePrefix;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // groups_claim - computed: false, optional: true, required: false
  private _groupsClaim?: string; 
  public get groupsClaim() {
    return this.getStringAttribute('groups_claim');
  }
  public set groupsClaim(value: string) {
    this._groupsClaim = value;
  }
  public resetGroupsClaim() {
    this._groupsClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsClaimInput() {
    return this._groupsClaim;
  }

  // groups_prefix - computed: false, optional: true, required: false
  private _groupsPrefix?: string; 
  public get groupsPrefix() {
    return this.getStringAttribute('groups_prefix');
  }
  public set groupsPrefix(value: string) {
    this._groupsPrefix = value;
  }
  public resetGroupsPrefix() {
    this._groupsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsPrefixInput() {
    return this._groupsPrefix;
  }

  // issuer_url - computed: false, optional: false, required: true
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }

  // required_claim - computed: false, optional: true, required: false
  private _requiredClaim?: string; 
  public get requiredClaim() {
    return this.getStringAttribute('required_claim');
  }
  public set requiredClaim(value: string) {
    this._requiredClaim = value;
  }
  public resetRequiredClaim() {
    this._requiredClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredClaimInput() {
    return this._requiredClaim;
  }

  // username_claim - computed: false, optional: true, required: false
  private _usernameClaim?: string; 
  public get usernameClaim() {
    return this.getStringAttribute('username_claim');
  }
  public set usernameClaim(value: string) {
    this._usernameClaim = value;
  }
  public resetUsernameClaim() {
    this._usernameClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameClaimInput() {
    return this._usernameClaim;
  }

  // username_prefix - computed: false, optional: true, required: false
  private _usernamePrefix?: string; 
  public get usernamePrefix() {
    return this.getStringAttribute('username_prefix');
  }
  public set usernamePrefix(value: string) {
    this._usernamePrefix = value;
  }
  public resetUsernamePrefix() {
    this._usernamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamePrefixInput() {
    return this._usernamePrefix;
  }
}
export interface NksClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#create NksCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#delete NksCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#update NksCluster#update}
  */
  readonly update?: string;
}

export function nksClusterTimeoutsToTerraform(struct?: NksClusterTimeouts | cdktf.IResolvable): any {
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


export function nksClusterTimeoutsToHclTerraform(struct?: NksClusterTimeouts | cdktf.IResolvable): any {
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

export class NksClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NksClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NksClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster ncloud_nks_cluster}
*/
export class NksCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_nks_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NksCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NksCluster to import
  * @param importFromId The id of the existing NksCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NksCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_nks_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/nks_cluster ncloud_nks_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NksClusterConfig
  */
  public constructor(scope: Construct, id: string, config: NksClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'ncloud_nks_cluster',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authType = config.authType;
    this._clusterType = config.clusterType;
    this._hypervisorCode = config.hypervisorCode;
    this._id = config.id;
    this._ipAcl.internalValue = config.ipAcl;
    this._ipAclDefaultAction = config.ipAclDefaultAction;
    this._k8SVersion = config.k8SVersion;
    this._kmsKeyTag = config.kmsKeyTag;
    this._kubeNetworkPlugin = config.kubeNetworkPlugin;
    this._lbPrivateSubnetNo = config.lbPrivateSubnetNo;
    this._lbPublicSubnetNo = config.lbPublicSubnetNo;
    this._loginKeyName = config.loginKeyName;
    this._name = config.name;
    this._publicNetwork = config.publicNetwork;
    this._returnProtection = config.returnProtection;
    this._subnetNoList = config.subnetNoList;
    this._vpcNo = config.vpcNo;
    this._zone = config.zone;
    this._accessEntries.internalValue = config.accessEntries;
    this._log.internalValue = config.log;
    this._oidc.internalValue = config.oidc;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acg_no - computed: true, optional: false, required: false
  public get acgNo() {
    return this.getStringAttribute('acg_no');
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // cluster_type - computed: false, optional: false, required: true
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // hypervisor_code - computed: true, optional: true, required: false
  private _hypervisorCode?: string; 
  public get hypervisorCode() {
    return this.getStringAttribute('hypervisor_code');
  }
  public set hypervisorCode(value: string) {
    this._hypervisorCode = value;
  }
  public resetHypervisorCode() {
    this._hypervisorCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorCodeInput() {
    return this._hypervisorCode;
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

  // ip_acl - computed: false, optional: true, required: false
  private _ipAcl = new NksClusterIpAclList(this, "ip_acl", true);
  public get ipAcl() {
    return this._ipAcl;
  }
  public putIpAcl(value: NksClusterIpAcl[] | cdktf.IResolvable) {
    this._ipAcl.internalValue = value;
  }
  public resetIpAcl() {
    this._ipAcl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAclInput() {
    return this._ipAcl.internalValue;
  }

  // ip_acl_default_action - computed: true, optional: true, required: false
  private _ipAclDefaultAction?: string; 
  public get ipAclDefaultAction() {
    return this.getStringAttribute('ip_acl_default_action');
  }
  public set ipAclDefaultAction(value: string) {
    this._ipAclDefaultAction = value;
  }
  public resetIpAclDefaultAction() {
    this._ipAclDefaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAclDefaultActionInput() {
    return this._ipAclDefaultAction;
  }

  // k8s_version - computed: true, optional: true, required: false
  private _k8SVersion?: string; 
  public get k8SVersion() {
    return this.getStringAttribute('k8s_version');
  }
  public set k8SVersion(value: string) {
    this._k8SVersion = value;
  }
  public resetK8SVersion() {
    this._k8SVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SVersionInput() {
    return this._k8SVersion;
  }

  // kms_key_tag - computed: false, optional: true, required: false
  private _kmsKeyTag?: string; 
  public get kmsKeyTag() {
    return this.getStringAttribute('kms_key_tag');
  }
  public set kmsKeyTag(value: string) {
    this._kmsKeyTag = value;
  }
  public resetKmsKeyTag() {
    this._kmsKeyTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyTagInput() {
    return this._kmsKeyTag;
  }

  // kube_network_plugin - computed: true, optional: true, required: false
  private _kubeNetworkPlugin?: string; 
  public get kubeNetworkPlugin() {
    return this.getStringAttribute('kube_network_plugin');
  }
  public set kubeNetworkPlugin(value: string) {
    this._kubeNetworkPlugin = value;
  }
  public resetKubeNetworkPlugin() {
    this._kubeNetworkPlugin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeNetworkPluginInput() {
    return this._kubeNetworkPlugin;
  }

  // lb_private_subnet_no - computed: false, optional: false, required: true
  private _lbPrivateSubnetNo?: string; 
  public get lbPrivateSubnetNo() {
    return this.getStringAttribute('lb_private_subnet_no');
  }
  public set lbPrivateSubnetNo(value: string) {
    this._lbPrivateSubnetNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbPrivateSubnetNoInput() {
    return this._lbPrivateSubnetNo;
  }

  // lb_public_subnet_no - computed: false, optional: true, required: false
  private _lbPublicSubnetNo?: string; 
  public get lbPublicSubnetNo() {
    return this.getStringAttribute('lb_public_subnet_no');
  }
  public set lbPublicSubnetNo(value: string) {
    this._lbPublicSubnetNo = value;
  }
  public resetLbPublicSubnetNo() {
    this._lbPublicSubnetNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbPublicSubnetNoInput() {
    return this._lbPublicSubnetNo;
  }

  // login_key_name - computed: false, optional: false, required: true
  private _loginKeyName?: string; 
  public get loginKeyName() {
    return this.getStringAttribute('login_key_name');
  }
  public set loginKeyName(value: string) {
    this._loginKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginKeyNameInput() {
    return this._loginKeyName;
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

  // public_network - computed: true, optional: true, required: false
  private _publicNetwork?: boolean | cdktf.IResolvable; 
  public get publicNetwork() {
    return this.getBooleanAttribute('public_network');
  }
  public set publicNetwork(value: boolean | cdktf.IResolvable) {
    this._publicNetwork = value;
  }
  public resetPublicNetwork() {
    this._publicNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkInput() {
    return this._publicNetwork;
  }

  // return_protection - computed: true, optional: true, required: false
  private _returnProtection?: boolean | cdktf.IResolvable; 
  public get returnProtection() {
    return this.getBooleanAttribute('return_protection');
  }
  public set returnProtection(value: boolean | cdktf.IResolvable) {
    this._returnProtection = value;
  }
  public resetReturnProtection() {
    this._returnProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnProtectionInput() {
    return this._returnProtection;
  }

  // subnet_no_list - computed: false, optional: false, required: true
  private _subnetNoList?: string[]; 
  public get subnetNoList() {
    return this.getListAttribute('subnet_no_list');
  }
  public set subnetNoList(value: string[]) {
    this._subnetNoList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNoListInput() {
    return this._subnetNoList;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vpc_no - computed: false, optional: false, required: true
  private _vpcNo?: string; 
  public get vpcNo() {
    return this.getStringAttribute('vpc_no');
  }
  public set vpcNo(value: string) {
    this._vpcNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNoInput() {
    return this._vpcNo;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // access_entries - computed: false, optional: true, required: false
  private _accessEntries = new NksClusterAccessEntriesList(this, "access_entries", true);
  public get accessEntries() {
    return this._accessEntries;
  }
  public putAccessEntries(value: NksClusterAccessEntries[] | cdktf.IResolvable) {
    this._accessEntries.internalValue = value;
  }
  public resetAccessEntries() {
    this._accessEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessEntriesInput() {
    return this._accessEntries.internalValue;
  }

  // log - computed: false, optional: true, required: false
  private _log = new NksClusterLogOutputReference(this, "log");
  public get log() {
    return this._log;
  }
  public putLog(value: NksClusterLog) {
    this._log.internalValue = value;
  }
  public resetLog() {
    this._log.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log.internalValue;
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new NksClusterOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: NksClusterOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NksClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NksClusterTimeouts) {
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
      auth_type: cdktf.stringToTerraform(this._authType),
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      hypervisor_code: cdktf.stringToTerraform(this._hypervisorCode),
      id: cdktf.stringToTerraform(this._id),
      ip_acl: cdktf.listMapper(nksClusterIpAclToTerraform, false)(this._ipAcl.internalValue),
      ip_acl_default_action: cdktf.stringToTerraform(this._ipAclDefaultAction),
      k8s_version: cdktf.stringToTerraform(this._k8SVersion),
      kms_key_tag: cdktf.stringToTerraform(this._kmsKeyTag),
      kube_network_plugin: cdktf.stringToTerraform(this._kubeNetworkPlugin),
      lb_private_subnet_no: cdktf.stringToTerraform(this._lbPrivateSubnetNo),
      lb_public_subnet_no: cdktf.stringToTerraform(this._lbPublicSubnetNo),
      login_key_name: cdktf.stringToTerraform(this._loginKeyName),
      name: cdktf.stringToTerraform(this._name),
      public_network: cdktf.booleanToTerraform(this._publicNetwork),
      return_protection: cdktf.booleanToTerraform(this._returnProtection),
      subnet_no_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetNoList),
      vpc_no: cdktf.stringToTerraform(this._vpcNo),
      zone: cdktf.stringToTerraform(this._zone),
      access_entries: cdktf.listMapper(nksClusterAccessEntriesToTerraform, true)(this._accessEntries.internalValue),
      log: nksClusterLogToTerraform(this._log.internalValue),
      oidc: nksClusterOidcToTerraform(this._oidc.internalValue),
      timeouts: nksClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hypervisor_code: {
        value: cdktf.stringToHclTerraform(this._hypervisorCode),
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
      ip_acl: {
        value: cdktf.listMapperHcl(nksClusterIpAclToHclTerraform, false)(this._ipAcl.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NksClusterIpAclList",
      },
      ip_acl_default_action: {
        value: cdktf.stringToHclTerraform(this._ipAclDefaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      k8s_version: {
        value: cdktf.stringToHclTerraform(this._k8SVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_tag: {
        value: cdktf.stringToHclTerraform(this._kmsKeyTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kube_network_plugin: {
        value: cdktf.stringToHclTerraform(this._kubeNetworkPlugin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lb_private_subnet_no: {
        value: cdktf.stringToHclTerraform(this._lbPrivateSubnetNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lb_public_subnet_no: {
        value: cdktf.stringToHclTerraform(this._lbPublicSubnetNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_key_name: {
        value: cdktf.stringToHclTerraform(this._loginKeyName),
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
      public_network: {
        value: cdktf.booleanToHclTerraform(this._publicNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      return_protection: {
        value: cdktf.booleanToHclTerraform(this._returnProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subnet_no_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetNoList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vpc_no: {
        value: cdktf.stringToHclTerraform(this._vpcNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_entries: {
        value: cdktf.listMapperHcl(nksClusterAccessEntriesToHclTerraform, true)(this._accessEntries.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NksClusterAccessEntriesList",
      },
      log: {
        value: nksClusterLogToHclTerraform(this._log.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NksClusterLogList",
      },
      oidc: {
        value: nksClusterOidcToHclTerraform(this._oidc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NksClusterOidcList",
      },
      timeouts: {
        value: nksClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NksClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
