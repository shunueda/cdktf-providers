// https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/rbac_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RbacGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/rbac_group#id RbacGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/rbac_group#name RbacGroup#name}
  */
  readonly name: string;
  /**
  * member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/rbac_group#member RbacGroup#member}
  */
  readonly member?: RbacGroupMember[] | cdktf.IResolvable;
  /**
  * permission_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/rbac_group#permission_set RbacGroup#permission_set}
  */
  readonly permissionSet?: RbacGroupPermissionSet;
}
export interface RbacGroupMember {
  /**
  * The email address of the group member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/rbac_group#email RbacGroup#email}
  */
  readonly email?: string;
  /**
  * The user id of the group member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/rbac_group#user_id RbacGroup#user_id}
  */
  readonly userId: string;
}

export function rbacGroupMemberToTerraform(struct?: RbacGroupMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    user_id: cdktf.stringToTerraform(struct!.userId),
  }
}


export function rbacGroupMemberToHclTerraform(struct?: RbacGroupMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RbacGroupMemberOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RbacGroupMember | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RbacGroupMember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._userId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._userId = value.userId;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }
}

export class RbacGroupMemberList extends cdktf.ComplexList {
  public internalValue? : RbacGroupMember[] | cdktf.IResolvable

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
  public get(index: number): RbacGroupMemberOutputReference {
    return new RbacGroupMemberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RbacGroupPermissionSet {
  /**
  * The scope bindings to restrict access to applications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/rbac_group#application_ids RbacGroup#application_ids}
  */
  readonly applicationIds?: string[];
  /**
  * The scope binding for the dynamic filter query to restrict access to infrastructure assets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/rbac_group#infra_dfq_filter RbacGroup#infra_dfq_filter}
  */
  readonly infraDfqFilter?: string;
  /**
  * The scope bindings to restrict access to Kubernetes Clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/rbac_group#kubernetes_cluster_uuids RbacGroup#kubernetes_cluster_uuids}
  */
  readonly kubernetesClusterUuids?: string[];
  /**
  * The scope bindings to restrict access to Kubernetes namespaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/rbac_group#kubernetes_namespaces_uuids RbacGroup#kubernetes_namespaces_uuids}
  */
  readonly kubernetesNamespacesUuids?: string[];
  /**
  * The scope bindings to restrict access to mobile apps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/rbac_group#mobile_app_ids RbacGroup#mobile_app_ids}
  */
  readonly mobileAppIds?: string[];
  /**
  * The permissions assigned which should be assigned to the users of the group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/rbac_group#permissions RbacGroup#permissions}
  */
  readonly permissions?: string[];
  /**
  * The scope bindings to restrict access to websites
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/rbac_group#website_ids RbacGroup#website_ids}
  */
  readonly websiteIds?: string[];
}

export function rbacGroupPermissionSetToTerraform(struct?: RbacGroupPermissionSetOutputReference | RbacGroupPermissionSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applicationIds),
    infra_dfq_filter: cdktf.stringToTerraform(struct!.infraDfqFilter),
    kubernetes_cluster_uuids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kubernetesClusterUuids),
    kubernetes_namespaces_uuids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kubernetesNamespacesUuids),
    mobile_app_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mobileAppIds),
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
    website_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.websiteIds),
  }
}


export function rbacGroupPermissionSetToHclTerraform(struct?: RbacGroupPermissionSetOutputReference | RbacGroupPermissionSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applicationIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    infra_dfq_filter: {
      value: cdktf.stringToHclTerraform(struct!.infraDfqFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_cluster_uuids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kubernetesClusterUuids),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    kubernetes_namespaces_uuids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kubernetesNamespacesUuids),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mobile_app_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mobileAppIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    website_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.websiteIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RbacGroupPermissionSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RbacGroupPermissionSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationIds = this._applicationIds;
    }
    if (this._infraDfqFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.infraDfqFilter = this._infraDfqFilter;
    }
    if (this._kubernetesClusterUuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesClusterUuids = this._kubernetesClusterUuids;
    }
    if (this._kubernetesNamespacesUuids !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesNamespacesUuids = this._kubernetesNamespacesUuids;
    }
    if (this._mobileAppIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileAppIds = this._mobileAppIds;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._websiteIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.websiteIds = this._websiteIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RbacGroupPermissionSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationIds = undefined;
      this._infraDfqFilter = undefined;
      this._kubernetesClusterUuids = undefined;
      this._kubernetesNamespacesUuids = undefined;
      this._mobileAppIds = undefined;
      this._permissions = undefined;
      this._websiteIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationIds = value.applicationIds;
      this._infraDfqFilter = value.infraDfqFilter;
      this._kubernetesClusterUuids = value.kubernetesClusterUuids;
      this._kubernetesNamespacesUuids = value.kubernetesNamespacesUuids;
      this._mobileAppIds = value.mobileAppIds;
      this._permissions = value.permissions;
      this._websiteIds = value.websiteIds;
    }
  }

  // application_ids - computed: false, optional: true, required: false
  private _applicationIds?: string[]; 
  public get applicationIds() {
    return cdktf.Fn.tolist(this.getListAttribute('application_ids'));
  }
  public set applicationIds(value: string[]) {
    this._applicationIds = value;
  }
  public resetApplicationIds() {
    this._applicationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdsInput() {
    return this._applicationIds;
  }

  // infra_dfq_filter - computed: false, optional: true, required: false
  private _infraDfqFilter?: string; 
  public get infraDfqFilter() {
    return this.getStringAttribute('infra_dfq_filter');
  }
  public set infraDfqFilter(value: string) {
    this._infraDfqFilter = value;
  }
  public resetInfraDfqFilter() {
    this._infraDfqFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infraDfqFilterInput() {
    return this._infraDfqFilter;
  }

  // kubernetes_cluster_uuids - computed: false, optional: true, required: false
  private _kubernetesClusterUuids?: string[]; 
  public get kubernetesClusterUuids() {
    return cdktf.Fn.tolist(this.getListAttribute('kubernetes_cluster_uuids'));
  }
  public set kubernetesClusterUuids(value: string[]) {
    this._kubernetesClusterUuids = value;
  }
  public resetKubernetesClusterUuids() {
    this._kubernetesClusterUuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesClusterUuidsInput() {
    return this._kubernetesClusterUuids;
  }

  // kubernetes_namespaces_uuids - computed: false, optional: true, required: false
  private _kubernetesNamespacesUuids?: string[]; 
  public get kubernetesNamespacesUuids() {
    return cdktf.Fn.tolist(this.getListAttribute('kubernetes_namespaces_uuids'));
  }
  public set kubernetesNamespacesUuids(value: string[]) {
    this._kubernetesNamespacesUuids = value;
  }
  public resetKubernetesNamespacesUuids() {
    this._kubernetesNamespacesUuids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesNamespacesUuidsInput() {
    return this._kubernetesNamespacesUuids;
  }

  // mobile_app_ids - computed: false, optional: true, required: false
  private _mobileAppIds?: string[]; 
  public get mobileAppIds() {
    return cdktf.Fn.tolist(this.getListAttribute('mobile_app_ids'));
  }
  public set mobileAppIds(value: string[]) {
    this._mobileAppIds = value;
  }
  public resetMobileAppIds() {
    this._mobileAppIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileAppIdsInput() {
    return this._mobileAppIds;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // website_ids - computed: false, optional: true, required: false
  private _websiteIds?: string[]; 
  public get websiteIds() {
    return cdktf.Fn.tolist(this.getListAttribute('website_ids'));
  }
  public set websiteIds(value: string[]) {
    this._websiteIds = value;
  }
  public resetWebsiteIds() {
    this._websiteIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteIdsInput() {
    return this._websiteIds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/rbac_group instana_rbac_group}
*/
export class RbacGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instana_rbac_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RbacGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RbacGroup to import
  * @param importFromId The id of the existing RbacGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/rbac_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RbacGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instana_rbac_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gessnerfl/instana/3.0.0/docs/resources/rbac_group instana_rbac_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RbacGroupConfig
  */
  public constructor(scope: Construct, id: string, config: RbacGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'instana_rbac_group',
      terraformGeneratorMetadata: {
        providerName: 'instana',
        providerVersion: '3.0.0'
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
    this._member.internalValue = config.member;
    this._permissionSet.internalValue = config.permissionSet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // member - computed: false, optional: true, required: false
  private _member = new RbacGroupMemberList(this, "member", true);
  public get member() {
    return this._member;
  }
  public putMember(value: RbacGroupMember[] | cdktf.IResolvable) {
    this._member.internalValue = value;
  }
  public resetMember() {
    this._member.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member.internalValue;
  }

  // permission_set - computed: false, optional: true, required: false
  private _permissionSet = new RbacGroupPermissionSetOutputReference(this, "permission_set");
  public get permissionSet() {
    return this._permissionSet;
  }
  public putPermissionSet(value: RbacGroupPermissionSet) {
    this._permissionSet.internalValue = value;
  }
  public resetPermissionSet() {
    this._permissionSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionSetInput() {
    return this._permissionSet.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      member: cdktf.listMapper(rbacGroupMemberToTerraform, true)(this._member.internalValue),
      permission_set: rbacGroupPermissionSetToTerraform(this._permissionSet.internalValue),
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
      member: {
        value: cdktf.listMapperHcl(rbacGroupMemberToHclTerraform, true)(this._member.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RbacGroupMemberList",
      },
      permission_set: {
        value: rbacGroupPermissionSetToHclTerraform(this._permissionSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RbacGroupPermissionSetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
