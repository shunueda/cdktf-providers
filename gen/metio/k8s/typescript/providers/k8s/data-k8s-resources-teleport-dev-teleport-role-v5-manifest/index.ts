// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#metadata DataK8SResourcesTeleportDevTeleportRoleV5Manifest#metadata}
  */
  readonly metadata: DataK8SResourcesTeleportDevTeleportRoleV5ManifestMetadata;
  /**
  * Role resource definition v5 from Teleport
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#spec DataK8SResourcesTeleportDevTeleportRoleV5Manifest#spec}
  */
  readonly spec?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpec;
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#annotations DataK8SResourcesTeleportDevTeleportRoleV5Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#labels DataK8SResourcesTeleportDevTeleportRoleV5Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#name DataK8SResourcesTeleportDevTeleportRoleV5Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#namespace DataK8SResourcesTeleportDevTeleportRoleV5Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestMetadataToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestMetadataToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowDbPermissions {
  /**
  * Match is a list of object labels that must be matched for the permission to be granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#match DataK8SResourcesTeleportDevTeleportRoleV5Manifest#match}
  */
  readonly match?: { [key: string]: string };
  /**
  * Permission is the list of string representations of the permission to be given, e.g. SELECT, INSERT, UPDATE, ...
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#permissions DataK8SResourcesTeleportDevTeleportRoleV5Manifest#permissions}
  */
  readonly permissions?: string[];
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowDbPermissionsToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowDbPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.match),
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowDbPermissionsToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowDbPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.match),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowDbPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowDbPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowDbPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match = undefined;
      this._permissions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match = value.match;
      this._permissions = value.permissions;
    }
  }

  // match - computed: false, optional: true, required: false
  private _match?: { [key: string]: string }; 
  public get match() {
    return this.getStringMapAttribute('match');
  }
  public set match(value: { [key: string]: string }) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string[]; 
  public get permissions() {
    return this.getListAttribute('permissions');
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
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowDbPermissionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowDbPermissions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowDbPermissionsOutputReference {
    return new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowDbPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowImpersonate {
  /**
  * Roles is a list of resources this role is allowed to impersonate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#roles DataK8SResourcesTeleportDevTeleportRoleV5Manifest#roles}
  */
  readonly roles?: string[];
  /**
  * Users is a list of resources this role is allowed to impersonate, could be an empty list or a Wildcard pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#users DataK8SResourcesTeleportDevTeleportRoleV5Manifest#users}
  */
  readonly users?: string[];
  /**
  * Where specifies optional advanced matcher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#where DataK8SResourcesTeleportDevTeleportRoleV5Manifest#where}
  */
  readonly where?: string;
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowImpersonateToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowImpersonate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
    where: cdktf.stringToTerraform(struct!.where),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowImpersonateToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowImpersonate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.users),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    where: {
      value: cdktf.stringToHclTerraform(struct!.where),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowImpersonateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowImpersonate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    if (this._where !== undefined) {
      hasAnyValues = true;
      internalValueResult.where = this._where;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowImpersonate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roles = undefined;
      this._users = undefined;
      this._where = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roles = value.roles;
      this._users = value.users;
      this._where = value.where;
    }
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // where - computed: false, optional: true, required: false
  private _where?: string; 
  public get where() {
    return this.getStringAttribute('where');
  }
  public set where(value: string) {
    this._where = value;
  }
  public resetWhere() {
    this._where = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whereInput() {
    return this._where;
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowJoinSessions {
  /**
  * Kinds are the session kinds this policy applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#kinds DataK8SResourcesTeleportDevTeleportRoleV5Manifest#kinds}
  */
  readonly kinds?: string[];
  /**
  * Modes is a list of permitted participant modes for this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#modes DataK8SResourcesTeleportDevTeleportRoleV5Manifest#modes}
  */
  readonly modes?: string[];
  /**
  * Name is the name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#name DataK8SResourcesTeleportDevTeleportRoleV5Manifest#name}
  */
  readonly name?: string;
  /**
  * Roles is a list of roles that you can join the session of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#roles DataK8SResourcesTeleportDevTeleportRoleV5Manifest#roles}
  */
  readonly roles?: string[];
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowJoinSessionsToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowJoinSessions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kinds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kinds),
    modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.modes),
    name: cdktf.stringToTerraform(struct!.name),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowJoinSessionsToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowJoinSessions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kinds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.modes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowJoinSessionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowJoinSessions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinds = this._kinds;
    }
    if (this._modes !== undefined) {
      hasAnyValues = true;
      internalValueResult.modes = this._modes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowJoinSessions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kinds = undefined;
      this._modes = undefined;
      this._name = undefined;
      this._roles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kinds = value.kinds;
      this._modes = value.modes;
      this._name = value.name;
      this._roles = value.roles;
    }
  }

  // kinds - computed: false, optional: true, required: false
  private _kinds?: string[]; 
  public get kinds() {
    return this.getListAttribute('kinds');
  }
  public set kinds(value: string[]) {
    this._kinds = value;
  }
  public resetKinds() {
    this._kinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindsInput() {
    return this._kinds;
  }

  // modes - computed: false, optional: true, required: false
  private _modes?: string[]; 
  public get modes() {
    return this.getListAttribute('modes');
  }
  public set modes(value: string[]) {
    this._modes = value;
  }
  public resetModes() {
    this._modes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modesInput() {
    return this._modes;
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

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowJoinSessionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowJoinSessions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowJoinSessionsOutputReference {
    return new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowJoinSessionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowKubernetesResources {
  /**
  * Kind specifies the Kubernetes Resource type. At the moment only 'pod' is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#kind DataK8SResourcesTeleportDevTeleportRoleV5Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the resource name. It supports wildcards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#name DataK8SResourcesTeleportDevTeleportRoleV5Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace is the resource namespace. It supports wildcards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#namespace DataK8SResourcesTeleportDevTeleportRoleV5Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Verbs are the allowed Kubernetes verbs for the following resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#verbs DataK8SResourcesTeleportDevTeleportRoleV5Manifest#verbs}
  */
  readonly verbs?: string[];
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowKubernetesResourcesToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowKubernetesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    verbs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.verbs),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowKubernetesResourcesToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowKubernetesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verbs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.verbs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowKubernetesResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowKubernetesResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._verbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbs = this._verbs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowKubernetesResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._verbs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._verbs = value.verbs;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // verbs - computed: false, optional: true, required: false
  private _verbs?: string[]; 
  public get verbs() {
    return this.getListAttribute('verbs');
  }
  public set verbs(value: string[]) {
    this._verbs = value;
  }
  public resetVerbs() {
    this._verbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbsInput() {
    return this._verbs;
  }
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowKubernetesResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowKubernetesResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowKubernetesResourcesOutputReference {
    return new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowKubernetesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestClaimsToRoles {
  /**
  * Claim is a claim name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#claim DataK8SResourcesTeleportDevTeleportRoleV5Manifest#claim}
  */
  readonly claim?: string;
  /**
  * Roles is a list of static teleport roles to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#roles DataK8SResourcesTeleportDevTeleportRoleV5Manifest#roles}
  */
  readonly roles?: string[];
  /**
  * Value is a claim value to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#value DataK8SResourcesTeleportDevTeleportRoleV5Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestClaimsToRolesToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestClaimsToRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim: cdktf.stringToTerraform(struct!.claim),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestClaimsToRolesToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestClaimsToRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim: {
      value: cdktf.stringToHclTerraform(struct!.claim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestClaimsToRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestClaimsToRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claim !== undefined) {
      hasAnyValues = true;
      internalValueResult.claim = this._claim;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestClaimsToRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claim = undefined;
      this._roles = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claim = value.claim;
      this._roles = value.roles;
      this._value = value.value;
    }
  }

  // claim - computed: false, optional: true, required: false
  private _claim?: string; 
  public get claim() {
    return this.getStringAttribute('claim');
  }
  public set claim(value: string) {
    this._claim = value;
  }
  public resetClaim() {
    this._claim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimInput() {
    return this._claim;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestClaimsToRolesList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestClaimsToRoles[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestClaimsToRolesOutputReference {
    return new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestClaimsToRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestThresholds {
  /**
  * Approve is the number of matching approvals needed for state-transition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#approve DataK8SResourcesTeleportDevTeleportRoleV5Manifest#approve}
  */
  readonly approve?: number;
  /**
  * Deny is the number of denials needed for state-transition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#deny DataK8SResourcesTeleportDevTeleportRoleV5Manifest#deny}
  */
  readonly deny?: number;
  /**
  * Filter is an optional predicate used to determine which reviews count toward this threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#filter DataK8SResourcesTeleportDevTeleportRoleV5Manifest#filter}
  */
  readonly filter?: string;
  /**
  * Name is the optional human-readable name of the threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#name DataK8SResourcesTeleportDevTeleportRoleV5Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestThresholdsToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approve: cdktf.numberToTerraform(struct!.approve),
    deny: cdktf.numberToTerraform(struct!.deny),
    filter: cdktf.stringToTerraform(struct!.filter),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestThresholdsToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    approve: {
      value: cdktf.numberToHclTerraform(struct!.approve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny: {
      value: cdktf.numberToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestThresholds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approve !== undefined) {
      hasAnyValues = true;
      internalValueResult.approve = this._approve;
    }
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestThresholds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approve = undefined;
      this._deny = undefined;
      this._filter = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._approve = value.approve;
      this._deny = value.deny;
      this._filter = value.filter;
      this._name = value.name;
    }
  }

  // approve - computed: false, optional: true, required: false
  private _approve?: number; 
  public get approve() {
    return this.getNumberAttribute('approve');
  }
  public set approve(value: number) {
    this._approve = value;
  }
  public resetApprove() {
    this._approve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approveInput() {
    return this._approve;
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: number; 
  public get deny() {
    return this.getNumberAttribute('deny');
  }
  public set deny(value: number) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestThresholdsList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestThresholds[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestThresholdsOutputReference {
    return new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequest {
  /**
  * Annotations is a collection of annotations to be programmatically appended to pending Access Requests at the time of their creation. These annotations serve as a mechanism to propagate extra information to plugins. Since these annotations support variable interpolation syntax, they also offer a mechanism for forwarding claims from an external identity provider, to a plugin via '{{external.trait_name}}' style substitutions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#annotations DataK8SResourcesTeleportDevTeleportRoleV5Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * ClaimsToRoles specifies a mapping from claims (traits) to teleport roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#claims_to_roles DataK8SResourcesTeleportDevTeleportRoleV5Manifest#claims_to_roles}
  */
  readonly claimsToRoles?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestClaimsToRoles[] | cdktf.IResolvable;
  /**
  * MaxDuration is the amount of time the access will be granted for. If this is zero, the default duration is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#max_duration DataK8SResourcesTeleportDevTeleportRoleV5Manifest#max_duration}
  */
  readonly maxDuration?: string;
  /**
  * Roles is the name of roles which will match the request rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#roles DataK8SResourcesTeleportDevTeleportRoleV5Manifest#roles}
  */
  readonly roles?: string[];
  /**
  * SearchAsRoles is a list of extra roles which should apply to a user while they are searching for resources as part of a Resource Access Request, and defines the underlying roles which will be requested as part of any Resource Access Request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#search_as_roles DataK8SResourcesTeleportDevTeleportRoleV5Manifest#search_as_roles}
  */
  readonly searchAsRoles?: string[];
  /**
  * SuggestedReviewers is a list of reviewer suggestions. These can be teleport usernames, but that is not a requirement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#suggested_reviewers DataK8SResourcesTeleportDevTeleportRoleV5Manifest#suggested_reviewers}
  */
  readonly suggestedReviewers?: string[];
  /**
  * Thresholds is a list of thresholds, one of which must be met in order for reviews to trigger a state-transition. If no thresholds are provided, a default threshold of 1 for approval and denial is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#thresholds DataK8SResourcesTeleportDevTeleportRoleV5Manifest#thresholds}
  */
  readonly thresholds?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestThresholds[] | cdktf.IResolvable;
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.annotations),
    claims_to_roles: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestClaimsToRolesToTerraform, false)(struct!.claimsToRoles),
    max_duration: cdktf.stringToTerraform(struct!.maxDuration),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    search_as_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchAsRoles),
    suggested_reviewers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.suggestedReviewers),
    thresholds: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestThresholdsToTerraform, false)(struct!.thresholds),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    claims_to_roles: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestClaimsToRolesToHclTerraform, false)(struct!.claimsToRoles),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestClaimsToRolesList",
    },
    max_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    search_as_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searchAsRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    suggested_reviewers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.suggestedReviewers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    thresholds: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestThresholdsToHclTerraform, false)(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._claimsToRoles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimsToRoles = this._claimsToRoles?.internalValue;
    }
    if (this._maxDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDuration = this._maxDuration;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._searchAsRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchAsRoles = this._searchAsRoles;
    }
    if (this._suggestedReviewers !== undefined) {
      hasAnyValues = true;
      internalValueResult.suggestedReviewers = this._suggestedReviewers;
    }
    if (this._thresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholds = this._thresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._claimsToRoles.internalValue = undefined;
      this._maxDuration = undefined;
      this._roles = undefined;
      this._searchAsRoles = undefined;
      this._suggestedReviewers = undefined;
      this._thresholds.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._claimsToRoles.internalValue = value.claimsToRoles;
      this._maxDuration = value.maxDuration;
      this._roles = value.roles;
      this._searchAsRoles = value.searchAsRoles;
      this._suggestedReviewers = value.suggestedReviewers;
      this._thresholds.internalValue = value.thresholds;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get annotations() {
    return this.interpolationForAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // claims_to_roles - computed: false, optional: true, required: false
  private _claimsToRoles = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestClaimsToRolesList(this, "claims_to_roles", false);
  public get claimsToRoles() {
    return this._claimsToRoles;
  }
  public putClaimsToRoles(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestClaimsToRoles[] | cdktf.IResolvable) {
    this._claimsToRoles.internalValue = value;
  }
  public resetClaimsToRoles() {
    this._claimsToRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsToRolesInput() {
    return this._claimsToRoles.internalValue;
  }

  // max_duration - computed: false, optional: true, required: false
  private _maxDuration?: string; 
  public get maxDuration() {
    return this.getStringAttribute('max_duration');
  }
  public set maxDuration(value: string) {
    this._maxDuration = value;
  }
  public resetMaxDuration() {
    this._maxDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDurationInput() {
    return this._maxDuration;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // search_as_roles - computed: false, optional: true, required: false
  private _searchAsRoles?: string[]; 
  public get searchAsRoles() {
    return this.getListAttribute('search_as_roles');
  }
  public set searchAsRoles(value: string[]) {
    this._searchAsRoles = value;
  }
  public resetSearchAsRoles() {
    this._searchAsRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchAsRolesInput() {
    return this._searchAsRoles;
  }

  // suggested_reviewers - computed: false, optional: true, required: false
  private _suggestedReviewers?: string[]; 
  public get suggestedReviewers() {
    return this.getListAttribute('suggested_reviewers');
  }
  public set suggestedReviewers(value: string[]) {
    this._suggestedReviewers = value;
  }
  public resetSuggestedReviewers() {
    this._suggestedReviewers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suggestedReviewersInput() {
    return this._suggestedReviewers;
  }

  // thresholds - computed: false, optional: true, required: false
  private _thresholds = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestThresholdsList(this, "thresholds", false);
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestThresholds[] | cdktf.IResolvable) {
    this._thresholds.internalValue = value;
  }
  public resetThresholds() {
    this._thresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdsInput() {
    return this._thresholds.internalValue;
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequireSessionJoin {
  /**
  * Count is the amount of people that need to be matched for this policy to be fulfilled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#count DataK8SResourcesTeleportDevTeleportRoleV5Manifest#count}
  */
  readonly count?: number;
  /**
  * Filter is a predicate that determines what users count towards this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#filter DataK8SResourcesTeleportDevTeleportRoleV5Manifest#filter}
  */
  readonly filter?: string;
  /**
  * Kinds are the session kinds this policy applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#kinds DataK8SResourcesTeleportDevTeleportRoleV5Manifest#kinds}
  */
  readonly kinds?: string[];
  /**
  * Modes is the list of modes that may be used to fulfill this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#modes DataK8SResourcesTeleportDevTeleportRoleV5Manifest#modes}
  */
  readonly modes?: string[];
  /**
  * Name is the name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#name DataK8SResourcesTeleportDevTeleportRoleV5Manifest#name}
  */
  readonly name?: string;
  /**
  * OnLeave is the behaviour that's used when the policy is no longer fulfilled for a live session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#on_leave DataK8SResourcesTeleportDevTeleportRoleV5Manifest#on_leave}
  */
  readonly onLeave?: string;
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequireSessionJoinToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequireSessionJoin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    filter: cdktf.stringToTerraform(struct!.filter),
    kinds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kinds),
    modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.modes),
    name: cdktf.stringToTerraform(struct!.name),
    on_leave: cdktf.stringToTerraform(struct!.onLeave),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequireSessionJoinToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequireSessionJoin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.modes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_leave: {
      value: cdktf.stringToHclTerraform(struct!.onLeave),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequireSessionJoinOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequireSessionJoin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._kinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinds = this._kinds;
    }
    if (this._modes !== undefined) {
      hasAnyValues = true;
      internalValueResult.modes = this._modes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._onLeave !== undefined) {
      hasAnyValues = true;
      internalValueResult.onLeave = this._onLeave;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequireSessionJoin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._filter = undefined;
      this._kinds = undefined;
      this._modes = undefined;
      this._name = undefined;
      this._onLeave = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._filter = value.filter;
      this._kinds = value.kinds;
      this._modes = value.modes;
      this._name = value.name;
      this._onLeave = value.onLeave;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // kinds - computed: false, optional: true, required: false
  private _kinds?: string[]; 
  public get kinds() {
    return this.getListAttribute('kinds');
  }
  public set kinds(value: string[]) {
    this._kinds = value;
  }
  public resetKinds() {
    this._kinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindsInput() {
    return this._kinds;
  }

  // modes - computed: false, optional: true, required: false
  private _modes?: string[]; 
  public get modes() {
    return this.getListAttribute('modes');
  }
  public set modes(value: string[]) {
    this._modes = value;
  }
  public resetModes() {
    this._modes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modesInput() {
    return this._modes;
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

  // on_leave - computed: false, optional: true, required: false
  private _onLeave?: string; 
  public get onLeave() {
    return this.getStringAttribute('on_leave');
  }
  public set onLeave(value: string) {
    this._onLeave = value;
  }
  public resetOnLeave() {
    this._onLeave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onLeaveInput() {
    return this._onLeave;
  }
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequireSessionJoinList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequireSessionJoin[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequireSessionJoinOutputReference {
    return new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequireSessionJoinOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequestsClaimsToRoles {
  /**
  * Claim is a claim name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#claim DataK8SResourcesTeleportDevTeleportRoleV5Manifest#claim}
  */
  readonly claim?: string;
  /**
  * Roles is a list of static teleport roles to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#roles DataK8SResourcesTeleportDevTeleportRoleV5Manifest#roles}
  */
  readonly roles?: string[];
  /**
  * Value is a claim value to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#value DataK8SResourcesTeleportDevTeleportRoleV5Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequestsClaimsToRolesToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequestsClaimsToRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim: cdktf.stringToTerraform(struct!.claim),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequestsClaimsToRolesToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequestsClaimsToRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim: {
      value: cdktf.stringToHclTerraform(struct!.claim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequestsClaimsToRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequestsClaimsToRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claim !== undefined) {
      hasAnyValues = true;
      internalValueResult.claim = this._claim;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequestsClaimsToRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claim = undefined;
      this._roles = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claim = value.claim;
      this._roles = value.roles;
      this._value = value.value;
    }
  }

  // claim - computed: false, optional: true, required: false
  private _claim?: string; 
  public get claim() {
    return this.getStringAttribute('claim');
  }
  public set claim(value: string) {
    this._claim = value;
  }
  public resetClaim() {
    this._claim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimInput() {
    return this._claim;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequestsClaimsToRolesList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequestsClaimsToRoles[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequestsClaimsToRolesOutputReference {
    return new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequestsClaimsToRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequests {
  /**
  * ClaimsToRoles specifies a mapping from claims (traits) to teleport roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#claims_to_roles DataK8SResourcesTeleportDevTeleportRoleV5Manifest#claims_to_roles}
  */
  readonly claimsToRoles?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequestsClaimsToRoles[] | cdktf.IResolvable;
  /**
  * PreviewAsRoles is a list of extra roles which should apply to a reviewer while they are viewing a Resource Access Request for the purposes of viewing details such as the hostname and labels of requested resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#preview_as_roles DataK8SResourcesTeleportDevTeleportRoleV5Manifest#preview_as_roles}
  */
  readonly previewAsRoles?: string[];
  /**
  * Roles is the name of roles which may be reviewed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#roles DataK8SResourcesTeleportDevTeleportRoleV5Manifest#roles}
  */
  readonly roles?: string[];
  /**
  * Where is an optional predicate which further limits which requests are reviewable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#where DataK8SResourcesTeleportDevTeleportRoleV5Manifest#where}
  */
  readonly where?: string;
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequestsToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims_to_roles: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequestsClaimsToRolesToTerraform, false)(struct!.claimsToRoles),
    preview_as_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.previewAsRoles),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    where: cdktf.stringToTerraform(struct!.where),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequestsToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims_to_roles: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequestsClaimsToRolesToHclTerraform, false)(struct!.claimsToRoles),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequestsClaimsToRolesList",
    },
    preview_as_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.previewAsRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    where: {
      value: cdktf.stringToHclTerraform(struct!.where),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimsToRoles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimsToRoles = this._claimsToRoles?.internalValue;
    }
    if (this._previewAsRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.previewAsRoles = this._previewAsRoles;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._where !== undefined) {
      hasAnyValues = true;
      internalValueResult.where = this._where;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimsToRoles.internalValue = undefined;
      this._previewAsRoles = undefined;
      this._roles = undefined;
      this._where = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimsToRoles.internalValue = value.claimsToRoles;
      this._previewAsRoles = value.previewAsRoles;
      this._roles = value.roles;
      this._where = value.where;
    }
  }

  // claims_to_roles - computed: false, optional: true, required: false
  private _claimsToRoles = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequestsClaimsToRolesList(this, "claims_to_roles", false);
  public get claimsToRoles() {
    return this._claimsToRoles;
  }
  public putClaimsToRoles(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequestsClaimsToRoles[] | cdktf.IResolvable) {
    this._claimsToRoles.internalValue = value;
  }
  public resetClaimsToRoles() {
    this._claimsToRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsToRolesInput() {
    return this._claimsToRoles.internalValue;
  }

  // preview_as_roles - computed: false, optional: true, required: false
  private _previewAsRoles?: string[]; 
  public get previewAsRoles() {
    return this.getListAttribute('preview_as_roles');
  }
  public set previewAsRoles(value: string[]) {
    this._previewAsRoles = value;
  }
  public resetPreviewAsRoles() {
    this._previewAsRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewAsRolesInput() {
    return this._previewAsRoles;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // where - computed: false, optional: true, required: false
  private _where?: string; 
  public get where() {
    return this.getStringAttribute('where');
  }
  public set where(value: string) {
    this._where = value;
  }
  public resetWhere() {
    this._where = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whereInput() {
    return this._where;
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRules {
  /**
  * Actions specifies optional actions taken when this rule matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#actions DataK8SResourcesTeleportDevTeleportRoleV5Manifest#actions}
  */
  readonly actions?: string[];
  /**
  * Resources is a list of resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#resources DataK8SResourcesTeleportDevTeleportRoleV5Manifest#resources}
  */
  readonly resources?: string[];
  /**
  * Verbs is a list of verbs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#verbs DataK8SResourcesTeleportDevTeleportRoleV5Manifest#verbs}
  */
  readonly verbs?: string[];
  /**
  * Where specifies optional advanced matcher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#where DataK8SResourcesTeleportDevTeleportRoleV5Manifest#where}
  */
  readonly where?: string;
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRulesToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    verbs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.verbs),
    where: cdktf.stringToTerraform(struct!.where),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRulesToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verbs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.verbs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    where: {
      value: cdktf.stringToHclTerraform(struct!.where),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._verbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbs = this._verbs;
    }
    if (this._where !== undefined) {
      hasAnyValues = true;
      internalValueResult.where = this._where;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._resources = undefined;
      this._verbs = undefined;
      this._where = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._resources = value.resources;
      this._verbs = value.verbs;
      this._where = value.where;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // verbs - computed: false, optional: true, required: false
  private _verbs?: string[]; 
  public get verbs() {
    return this.getListAttribute('verbs');
  }
  public set verbs(value: string[]) {
    this._verbs = value;
  }
  public resetVerbs() {
    this._verbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbsInput() {
    return this._verbs;
  }

  // where - computed: false, optional: true, required: false
  private _where?: string; 
  public get where() {
    return this.getStringAttribute('where');
  }
  public set where(value: string) {
    this._where = value;
  }
  public resetWhere() {
    this._where = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whereInput() {
    return this._where;
  }
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRulesOutputReference {
    return new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowSpiffe {
  /**
  * DNSSANs specifies matchers for the SPIFFE ID DNS SANs. Each requested DNS SAN is compared against all matchers configured and if any match, the condition is considered to be met. The matcher by default allows '*' to be used to indicate zero or more of any character. Prepend '^' and append '$' to instead switch to matching using the Go regex syntax. Example: *.example.com would match foo.example.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#dns_sans DataK8SResourcesTeleportDevTeleportRoleV5Manifest#dns_sans}
  */
  readonly dnsSans?: string[];
  /**
  * IPSANs specifies matchers for the SPIFFE ID IP SANs. Each requested IP SAN is compared against all matchers configured and if any match, the condition is considered to be met. The matchers should be specified using CIDR notation, it supports IPv4 and IPv6. Examples: - 10.0.0.0/24 would match 10.0.0.0 to 10.255.255.255 - 10.0.0.42/32 would match only 10.0.0.42
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#ip_sans DataK8SResourcesTeleportDevTeleportRoleV5Manifest#ip_sans}
  */
  readonly ipSans?: string[];
  /**
  * Path specifies a matcher for the SPIFFE ID path. It should not include the trust domain and should start with a leading slash. The matcher by default allows '*' to be used to indicate zero or more of any character. Prepend '^' and append '$' to instead switch to matching using the Go regex syntax. Example: - /svc/foo/* /bar would match /svc/foo/baz/bar - ^/svc/foo/.* /bar$ would match /svc/foo/baz/bar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#path DataK8SResourcesTeleportDevTeleportRoleV5Manifest#path}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly path?: string;
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowSpiffeToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowSpiffe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsSans),
    ip_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipSans),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowSpiffeToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowSpiffe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_sans: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsSans),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_sans: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipSans),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowSpiffeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowSpiffe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsSans !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSans = this._dnsSans;
    }
    if (this._ipSans !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSans = this._ipSans;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowSpiffe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsSans = undefined;
      this._ipSans = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsSans = value.dnsSans;
      this._ipSans = value.ipSans;
      this._path = value.path;
    }
  }

  // dns_sans - computed: false, optional: true, required: false
  private _dnsSans?: string[]; 
  public get dnsSans() {
    return this.getListAttribute('dns_sans');
  }
  public set dnsSans(value: string[]) {
    this._dnsSans = value;
  }
  public resetDnsSans() {
    this._dnsSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSansInput() {
    return this._dnsSans;
  }

  // ip_sans - computed: false, optional: true, required: false
  private _ipSans?: string[]; 
  public get ipSans() {
    return this.getListAttribute('ip_sans');
  }
  public set ipSans(value: string[]) {
    this._ipSans = value;
  }
  public resetIpSans() {
    this._ipSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSansInput() {
    return this._ipSans;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowSpiffeList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowSpiffe[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowSpiffeOutputReference {
    return new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowSpiffeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllow {
  /**
  * AppLabels is a map of labels used as part of the RBAC system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#app_labels DataK8SResourcesTeleportDevTeleportRoleV5Manifest#app_labels}
  */
  readonly appLabels?: { [key: string]: string };
  /**
  * AppLabelsExpression is a predicate expression used to allow/deny access to Apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#app_labels_expression DataK8SResourcesTeleportDevTeleportRoleV5Manifest#app_labels_expression}
  */
  readonly appLabelsExpression?: string;
  /**
  * AWSRoleARNs is a list of AWS role ARNs this role is allowed to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#aws_role_arns DataK8SResourcesTeleportDevTeleportRoleV5Manifest#aws_role_arns}
  */
  readonly awsRoleArns?: string[];
  /**
  * AzureIdentities is a list of Azure identities this role is allowed to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#azure_identities DataK8SResourcesTeleportDevTeleportRoleV5Manifest#azure_identities}
  */
  readonly azureIdentities?: string[];
  /**
  * ClusterLabels is a map of node labels (used to dynamically grant access to clusters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#cluster_labels DataK8SResourcesTeleportDevTeleportRoleV5Manifest#cluster_labels}
  */
  readonly clusterLabels?: { [key: string]: string };
  /**
  * ClusterLabelsExpression is a predicate expression used to allow/deny access to remote Teleport clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#cluster_labels_expression DataK8SResourcesTeleportDevTeleportRoleV5Manifest#cluster_labels_expression}
  */
  readonly clusterLabelsExpression?: string;
  /**
  * DatabaseLabels are used in RBAC system to allow/deny access to databases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#db_labels DataK8SResourcesTeleportDevTeleportRoleV5Manifest#db_labels}
  */
  readonly dbLabels?: { [key: string]: string };
  /**
  * DatabaseLabelsExpression is a predicate expression used to allow/deny access to Databases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#db_labels_expression DataK8SResourcesTeleportDevTeleportRoleV5Manifest#db_labels_expression}
  */
  readonly dbLabelsExpression?: string;
  /**
  * DatabaseNames is a list of database names this role is allowed to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#db_names DataK8SResourcesTeleportDevTeleportRoleV5Manifest#db_names}
  */
  readonly dbNames?: string[];
  /**
  * DatabasePermissions specifies a set of permissions that will be granted to the database user when using automatic database user provisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#db_permissions DataK8SResourcesTeleportDevTeleportRoleV5Manifest#db_permissions}
  */
  readonly dbPermissions?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowDbPermissions[] | cdktf.IResolvable;
  /**
  * DatabaseRoles is a list of databases roles for automatic user creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#db_roles DataK8SResourcesTeleportDevTeleportRoleV5Manifest#db_roles}
  */
  readonly dbRoles?: string[];
  /**
  * DatabaseServiceLabels are used in RBAC system to allow/deny access to Database Services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#db_service_labels DataK8SResourcesTeleportDevTeleportRoleV5Manifest#db_service_labels}
  */
  readonly dbServiceLabels?: { [key: string]: string };
  /**
  * DatabaseServiceLabelsExpression is a predicate expression used to allow/deny access to Database Services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#db_service_labels_expression DataK8SResourcesTeleportDevTeleportRoleV5Manifest#db_service_labels_expression}
  */
  readonly dbServiceLabelsExpression?: string;
  /**
  * DatabaseUsers is a list of databases users this role is allowed to connect as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#db_users DataK8SResourcesTeleportDevTeleportRoleV5Manifest#db_users}
  */
  readonly dbUsers?: string[];
  /**
  * DesktopGroups is a list of groups for created desktop users to be added to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#desktop_groups DataK8SResourcesTeleportDevTeleportRoleV5Manifest#desktop_groups}
  */
  readonly desktopGroups?: string[];
  /**
  * GCPServiceAccounts is a list of GCP service accounts this role is allowed to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#gcp_service_accounts DataK8SResourcesTeleportDevTeleportRoleV5Manifest#gcp_service_accounts}
  */
  readonly gcpServiceAccounts?: string[];
  /**
  * GroupLabels is a map of labels used as part of the RBAC system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#group_labels DataK8SResourcesTeleportDevTeleportRoleV5Manifest#group_labels}
  */
  readonly groupLabels?: { [key: string]: string };
  /**
  * GroupLabelsExpression is a predicate expression used to allow/deny access to user groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#group_labels_expression DataK8SResourcesTeleportDevTeleportRoleV5Manifest#group_labels_expression}
  */
  readonly groupLabelsExpression?: string;
  /**
  * HostGroups is a list of groups for created users to be added to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#host_groups DataK8SResourcesTeleportDevTeleportRoleV5Manifest#host_groups}
  */
  readonly hostGroups?: string[];
  /**
  * HostSudoers is a list of entries to include in a users sudoer file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#host_sudoers DataK8SResourcesTeleportDevTeleportRoleV5Manifest#host_sudoers}
  */
  readonly hostSudoers?: string[];
  /**
  * Impersonate specifies what users and roles this role is allowed to impersonate by issuing certificates or other possible means.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#impersonate DataK8SResourcesTeleportDevTeleportRoleV5Manifest#impersonate}
  */
  readonly impersonate?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowImpersonate;
  /**
  * JoinSessions specifies policies to allow users to join other sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#join_sessions DataK8SResourcesTeleportDevTeleportRoleV5Manifest#join_sessions}
  */
  readonly joinSessions?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowJoinSessions[] | cdktf.IResolvable;
  /**
  * KubeGroups is a list of kubernetes groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#kubernetes_groups DataK8SResourcesTeleportDevTeleportRoleV5Manifest#kubernetes_groups}
  */
  readonly kubernetesGroups?: string[];
  /**
  * KubernetesLabels is a map of kubernetes cluster labels used for RBAC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#kubernetes_labels DataK8SResourcesTeleportDevTeleportRoleV5Manifest#kubernetes_labels}
  */
  readonly kubernetesLabels?: { [key: string]: string };
  /**
  * KubernetesLabelsExpression is a predicate expression used to allow/deny access to kubernetes clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#kubernetes_labels_expression DataK8SResourcesTeleportDevTeleportRoleV5Manifest#kubernetes_labels_expression}
  */
  readonly kubernetesLabelsExpression?: string;
  /**
  * KubernetesResources is the Kubernetes Resources this Role grants access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#kubernetes_resources DataK8SResourcesTeleportDevTeleportRoleV5Manifest#kubernetes_resources}
  */
  readonly kubernetesResources?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowKubernetesResources[] | cdktf.IResolvable;
  /**
  * KubeUsers is an optional kubernetes users to impersonate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#kubernetes_users DataK8SResourcesTeleportDevTeleportRoleV5Manifest#kubernetes_users}
  */
  readonly kubernetesUsers?: string[];
  /**
  * Logins is a list of *nix system logins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#logins DataK8SResourcesTeleportDevTeleportRoleV5Manifest#logins}
  */
  readonly logins?: string[];
  /**
  * NodeLabels is a map of node labels (used to dynamically grant access to nodes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#node_labels DataK8SResourcesTeleportDevTeleportRoleV5Manifest#node_labels}
  */
  readonly nodeLabels?: { [key: string]: string };
  /**
  * NodeLabelsExpression is a predicate expression used to allow/deny access to SSH nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#node_labels_expression DataK8SResourcesTeleportDevTeleportRoleV5Manifest#node_labels_expression}
  */
  readonly nodeLabelsExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#request DataK8SResourcesTeleportDevTeleportRoleV5Manifest#request}
  */
  readonly request?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequest;
  /**
  * RequireSessionJoin specifies policies for required users to start a session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#require_session_join DataK8SResourcesTeleportDevTeleportRoleV5Manifest#require_session_join}
  */
  readonly requireSessionJoin?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequireSessionJoin[] | cdktf.IResolvable;
  /**
  * ReviewRequests defines conditions for submitting access reviews.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#review_requests DataK8SResourcesTeleportDevTeleportRoleV5Manifest#review_requests}
  */
  readonly reviewRequests?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequests;
  /**
  * Rules is a list of rules and their access levels. Rules are a high level construct used for access control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#rules DataK8SResourcesTeleportDevTeleportRoleV5Manifest#rules}
  */
  readonly rules?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRules[] | cdktf.IResolvable;
  /**
  * SPIFFE is used to allow or deny access to a role holder to generating a SPIFFE SVID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#spiffe DataK8SResourcesTeleportDevTeleportRoleV5Manifest#spiffe}
  */
  readonly spiffe?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowSpiffe[] | cdktf.IResolvable;
  /**
  * WindowsDesktopLabels are used in the RBAC system to allow/deny access to Windows desktops.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#windows_desktop_labels DataK8SResourcesTeleportDevTeleportRoleV5Manifest#windows_desktop_labels}
  */
  readonly windowsDesktopLabels?: { [key: string]: string };
  /**
  * WindowsDesktopLabelsExpression is a predicate expression used to allow/deny access to Windows desktops.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#windows_desktop_labels_expression DataK8SResourcesTeleportDevTeleportRoleV5Manifest#windows_desktop_labels_expression}
  */
  readonly windowsDesktopLabelsExpression?: string;
  /**
  * WindowsDesktopLogins is a list of desktop login names allowed/denied for Windows desktops.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#windows_desktop_logins DataK8SResourcesTeleportDevTeleportRoleV5Manifest#windows_desktop_logins}
  */
  readonly windowsDesktopLogins?: string[];
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.appLabels),
    app_labels_expression: cdktf.stringToTerraform(struct!.appLabelsExpression),
    aws_role_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRoleArns),
    azure_identities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.azureIdentities),
    cluster_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.clusterLabels),
    cluster_labels_expression: cdktf.stringToTerraform(struct!.clusterLabelsExpression),
    db_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dbLabels),
    db_labels_expression: cdktf.stringToTerraform(struct!.dbLabelsExpression),
    db_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dbNames),
    db_permissions: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowDbPermissionsToTerraform, false)(struct!.dbPermissions),
    db_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dbRoles),
    db_service_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dbServiceLabels),
    db_service_labels_expression: cdktf.stringToTerraform(struct!.dbServiceLabelsExpression),
    db_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dbUsers),
    desktop_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.desktopGroups),
    gcp_service_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gcpServiceAccounts),
    group_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.groupLabels),
    group_labels_expression: cdktf.stringToTerraform(struct!.groupLabelsExpression),
    host_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostGroups),
    host_sudoers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostSudoers),
    impersonate: dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowImpersonateToTerraform(struct!.impersonate),
    join_sessions: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowJoinSessionsToTerraform, false)(struct!.joinSessions),
    kubernetes_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kubernetesGroups),
    kubernetes_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.kubernetesLabels),
    kubernetes_labels_expression: cdktf.stringToTerraform(struct!.kubernetesLabelsExpression),
    kubernetes_resources: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowKubernetesResourcesToTerraform, false)(struct!.kubernetesResources),
    kubernetes_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kubernetesUsers),
    logins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.logins),
    node_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeLabels),
    node_labels_expression: cdktf.stringToTerraform(struct!.nodeLabelsExpression),
    request: dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestToTerraform(struct!.request),
    require_session_join: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequireSessionJoinToTerraform, false)(struct!.requireSessionJoin),
    review_requests: dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequestsToTerraform(struct!.reviewRequests),
    rules: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRulesToTerraform, false)(struct!.rules),
    spiffe: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowSpiffeToTerraform, false)(struct!.spiffe),
    windows_desktop_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.windowsDesktopLabels),
    windows_desktop_labels_expression: cdktf.stringToTerraform(struct!.windowsDesktopLabelsExpression),
    windows_desktop_logins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.windowsDesktopLogins),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.appLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    app_labels_expression: {
      value: cdktf.stringToHclTerraform(struct!.appLabelsExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_role_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.awsRoleArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    azure_identities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.azureIdentities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cluster_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.clusterLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    cluster_labels_expression: {
      value: cdktf.stringToHclTerraform(struct!.clusterLabelsExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.dbLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    db_labels_expression: {
      value: cdktf.stringToHclTerraform(struct!.dbLabelsExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dbNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    db_permissions: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowDbPermissionsToHclTerraform, false)(struct!.dbPermissions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowDbPermissionsList",
    },
    db_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dbRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    db_service_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.dbServiceLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    db_service_labels_expression: {
      value: cdktf.stringToHclTerraform(struct!.dbServiceLabelsExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dbUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    desktop_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.desktopGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gcp_service_accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gcpServiceAccounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.groupLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    group_labels_expression: {
      value: cdktf.stringToHclTerraform(struct!.groupLabelsExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    host_sudoers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostSudoers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    impersonate: {
      value: dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowImpersonateToHclTerraform(struct!.impersonate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowImpersonate",
    },
    join_sessions: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowJoinSessionsToHclTerraform, false)(struct!.joinSessions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowJoinSessionsList",
    },
    kubernetes_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kubernetesGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kubernetes_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.kubernetesLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    kubernetes_labels_expression: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesLabelsExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_resources: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowKubernetesResourcesToHclTerraform, false)(struct!.kubernetesResources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowKubernetesResourcesList",
    },
    kubernetes_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kubernetesUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    logins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.logins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_labels_expression: {
      value: cdktf.stringToHclTerraform(struct!.nodeLabelsExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request: {
      value: dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestToHclTerraform(struct!.request),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequest",
    },
    require_session_join: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequireSessionJoinToHclTerraform, false)(struct!.requireSessionJoin),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequireSessionJoinList",
    },
    review_requests: {
      value: dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequestsToHclTerraform(struct!.reviewRequests),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequests",
    },
    rules: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRulesList",
    },
    spiffe: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowSpiffeToHclTerraform, false)(struct!.spiffe),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowSpiffeList",
    },
    windows_desktop_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.windowsDesktopLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    windows_desktop_labels_expression: {
      value: cdktf.stringToHclTerraform(struct!.windowsDesktopLabelsExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    windows_desktop_logins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.windowsDesktopLogins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.appLabels = this._appLabels;
    }
    if (this._appLabelsExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.appLabelsExpression = this._appLabelsExpression;
    }
    if (this._awsRoleArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRoleArns = this._awsRoleArns;
    }
    if (this._azureIdentities !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureIdentities = this._azureIdentities;
    }
    if (this._clusterLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterLabels = this._clusterLabels;
    }
    if (this._clusterLabelsExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterLabelsExpression = this._clusterLabelsExpression;
    }
    if (this._dbLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbLabels = this._dbLabels;
    }
    if (this._dbLabelsExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbLabelsExpression = this._dbLabelsExpression;
    }
    if (this._dbNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbNames = this._dbNames;
    }
    if (this._dbPermissions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbPermissions = this._dbPermissions?.internalValue;
    }
    if (this._dbRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbRoles = this._dbRoles;
    }
    if (this._dbServiceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbServiceLabels = this._dbServiceLabels;
    }
    if (this._dbServiceLabelsExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbServiceLabelsExpression = this._dbServiceLabelsExpression;
    }
    if (this._dbUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbUsers = this._dbUsers;
    }
    if (this._desktopGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.desktopGroups = this._desktopGroups;
    }
    if (this._gcpServiceAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpServiceAccounts = this._gcpServiceAccounts;
    }
    if (this._groupLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupLabels = this._groupLabels;
    }
    if (this._groupLabelsExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupLabelsExpression = this._groupLabelsExpression;
    }
    if (this._hostGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostGroups = this._hostGroups;
    }
    if (this._hostSudoers !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostSudoers = this._hostSudoers;
    }
    if (this._impersonate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.impersonate = this._impersonate?.internalValue;
    }
    if (this._joinSessions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinSessions = this._joinSessions?.internalValue;
    }
    if (this._kubernetesGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesGroups = this._kubernetesGroups;
    }
    if (this._kubernetesLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesLabels = this._kubernetesLabels;
    }
    if (this._kubernetesLabelsExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesLabelsExpression = this._kubernetesLabelsExpression;
    }
    if (this._kubernetesResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesResources = this._kubernetesResources?.internalValue;
    }
    if (this._kubernetesUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesUsers = this._kubernetesUsers;
    }
    if (this._logins !== undefined) {
      hasAnyValues = true;
      internalValueResult.logins = this._logins;
    }
    if (this._nodeLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLabels = this._nodeLabels;
    }
    if (this._nodeLabelsExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLabelsExpression = this._nodeLabelsExpression;
    }
    if (this._request?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request?.internalValue;
    }
    if (this._requireSessionJoin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireSessionJoin = this._requireSessionJoin?.internalValue;
    }
    if (this._reviewRequests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewRequests = this._reviewRequests?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._spiffe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spiffe = this._spiffe?.internalValue;
    }
    if (this._windowsDesktopLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsDesktopLabels = this._windowsDesktopLabels;
    }
    if (this._windowsDesktopLabelsExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsDesktopLabelsExpression = this._windowsDesktopLabelsExpression;
    }
    if (this._windowsDesktopLogins !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsDesktopLogins = this._windowsDesktopLogins;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appLabels = undefined;
      this._appLabelsExpression = undefined;
      this._awsRoleArns = undefined;
      this._azureIdentities = undefined;
      this._clusterLabels = undefined;
      this._clusterLabelsExpression = undefined;
      this._dbLabels = undefined;
      this._dbLabelsExpression = undefined;
      this._dbNames = undefined;
      this._dbPermissions.internalValue = undefined;
      this._dbRoles = undefined;
      this._dbServiceLabels = undefined;
      this._dbServiceLabelsExpression = undefined;
      this._dbUsers = undefined;
      this._desktopGroups = undefined;
      this._gcpServiceAccounts = undefined;
      this._groupLabels = undefined;
      this._groupLabelsExpression = undefined;
      this._hostGroups = undefined;
      this._hostSudoers = undefined;
      this._impersonate.internalValue = undefined;
      this._joinSessions.internalValue = undefined;
      this._kubernetesGroups = undefined;
      this._kubernetesLabels = undefined;
      this._kubernetesLabelsExpression = undefined;
      this._kubernetesResources.internalValue = undefined;
      this._kubernetesUsers = undefined;
      this._logins = undefined;
      this._nodeLabels = undefined;
      this._nodeLabelsExpression = undefined;
      this._request.internalValue = undefined;
      this._requireSessionJoin.internalValue = undefined;
      this._reviewRequests.internalValue = undefined;
      this._rules.internalValue = undefined;
      this._spiffe.internalValue = undefined;
      this._windowsDesktopLabels = undefined;
      this._windowsDesktopLabelsExpression = undefined;
      this._windowsDesktopLogins = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appLabels = value.appLabels;
      this._appLabelsExpression = value.appLabelsExpression;
      this._awsRoleArns = value.awsRoleArns;
      this._azureIdentities = value.azureIdentities;
      this._clusterLabels = value.clusterLabels;
      this._clusterLabelsExpression = value.clusterLabelsExpression;
      this._dbLabels = value.dbLabels;
      this._dbLabelsExpression = value.dbLabelsExpression;
      this._dbNames = value.dbNames;
      this._dbPermissions.internalValue = value.dbPermissions;
      this._dbRoles = value.dbRoles;
      this._dbServiceLabels = value.dbServiceLabels;
      this._dbServiceLabelsExpression = value.dbServiceLabelsExpression;
      this._dbUsers = value.dbUsers;
      this._desktopGroups = value.desktopGroups;
      this._gcpServiceAccounts = value.gcpServiceAccounts;
      this._groupLabels = value.groupLabels;
      this._groupLabelsExpression = value.groupLabelsExpression;
      this._hostGroups = value.hostGroups;
      this._hostSudoers = value.hostSudoers;
      this._impersonate.internalValue = value.impersonate;
      this._joinSessions.internalValue = value.joinSessions;
      this._kubernetesGroups = value.kubernetesGroups;
      this._kubernetesLabels = value.kubernetesLabels;
      this._kubernetesLabelsExpression = value.kubernetesLabelsExpression;
      this._kubernetesResources.internalValue = value.kubernetesResources;
      this._kubernetesUsers = value.kubernetesUsers;
      this._logins = value.logins;
      this._nodeLabels = value.nodeLabels;
      this._nodeLabelsExpression = value.nodeLabelsExpression;
      this._request.internalValue = value.request;
      this._requireSessionJoin.internalValue = value.requireSessionJoin;
      this._reviewRequests.internalValue = value.reviewRequests;
      this._rules.internalValue = value.rules;
      this._spiffe.internalValue = value.spiffe;
      this._windowsDesktopLabels = value.windowsDesktopLabels;
      this._windowsDesktopLabelsExpression = value.windowsDesktopLabelsExpression;
      this._windowsDesktopLogins = value.windowsDesktopLogins;
    }
  }

  // app_labels - computed: false, optional: true, required: false
  private _appLabels?: { [key: string]: string }; 
  public get appLabels() {
    return this.getStringMapAttribute('app_labels');
  }
  public set appLabels(value: { [key: string]: string }) {
    this._appLabels = value;
  }
  public resetAppLabels() {
    this._appLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLabelsInput() {
    return this._appLabels;
  }

  // app_labels_expression - computed: false, optional: true, required: false
  private _appLabelsExpression?: string; 
  public get appLabelsExpression() {
    return this.getStringAttribute('app_labels_expression');
  }
  public set appLabelsExpression(value: string) {
    this._appLabelsExpression = value;
  }
  public resetAppLabelsExpression() {
    this._appLabelsExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLabelsExpressionInput() {
    return this._appLabelsExpression;
  }

  // aws_role_arns - computed: false, optional: true, required: false
  private _awsRoleArns?: string[]; 
  public get awsRoleArns() {
    return this.getListAttribute('aws_role_arns');
  }
  public set awsRoleArns(value: string[]) {
    this._awsRoleArns = value;
  }
  public resetAwsRoleArns() {
    this._awsRoleArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRoleArnsInput() {
    return this._awsRoleArns;
  }

  // azure_identities - computed: false, optional: true, required: false
  private _azureIdentities?: string[]; 
  public get azureIdentities() {
    return this.getListAttribute('azure_identities');
  }
  public set azureIdentities(value: string[]) {
    this._azureIdentities = value;
  }
  public resetAzureIdentities() {
    this._azureIdentities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureIdentitiesInput() {
    return this._azureIdentities;
  }

  // cluster_labels - computed: false, optional: true, required: false
  private _clusterLabels?: { [key: string]: string }; 
  public get clusterLabels() {
    return this.getStringMapAttribute('cluster_labels');
  }
  public set clusterLabels(value: { [key: string]: string }) {
    this._clusterLabels = value;
  }
  public resetClusterLabels() {
    this._clusterLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLabelsInput() {
    return this._clusterLabels;
  }

  // cluster_labels_expression - computed: false, optional: true, required: false
  private _clusterLabelsExpression?: string; 
  public get clusterLabelsExpression() {
    return this.getStringAttribute('cluster_labels_expression');
  }
  public set clusterLabelsExpression(value: string) {
    this._clusterLabelsExpression = value;
  }
  public resetClusterLabelsExpression() {
    this._clusterLabelsExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLabelsExpressionInput() {
    return this._clusterLabelsExpression;
  }

  // db_labels - computed: false, optional: true, required: false
  private _dbLabels?: { [key: string]: string }; 
  public get dbLabels() {
    return this.getStringMapAttribute('db_labels');
  }
  public set dbLabels(value: { [key: string]: string }) {
    this._dbLabels = value;
  }
  public resetDbLabels() {
    this._dbLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbLabelsInput() {
    return this._dbLabels;
  }

  // db_labels_expression - computed: false, optional: true, required: false
  private _dbLabelsExpression?: string; 
  public get dbLabelsExpression() {
    return this.getStringAttribute('db_labels_expression');
  }
  public set dbLabelsExpression(value: string) {
    this._dbLabelsExpression = value;
  }
  public resetDbLabelsExpression() {
    this._dbLabelsExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbLabelsExpressionInput() {
    return this._dbLabelsExpression;
  }

  // db_names - computed: false, optional: true, required: false
  private _dbNames?: string[]; 
  public get dbNames() {
    return this.getListAttribute('db_names');
  }
  public set dbNames(value: string[]) {
    this._dbNames = value;
  }
  public resetDbNames() {
    this._dbNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNamesInput() {
    return this._dbNames;
  }

  // db_permissions - computed: false, optional: true, required: false
  private _dbPermissions = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowDbPermissionsList(this, "db_permissions", false);
  public get dbPermissions() {
    return this._dbPermissions;
  }
  public putDbPermissions(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowDbPermissions[] | cdktf.IResolvable) {
    this._dbPermissions.internalValue = value;
  }
  public resetDbPermissions() {
    this._dbPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbPermissionsInput() {
    return this._dbPermissions.internalValue;
  }

  // db_roles - computed: false, optional: true, required: false
  private _dbRoles?: string[]; 
  public get dbRoles() {
    return this.getListAttribute('db_roles');
  }
  public set dbRoles(value: string[]) {
    this._dbRoles = value;
  }
  public resetDbRoles() {
    this._dbRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbRolesInput() {
    return this._dbRoles;
  }

  // db_service_labels - computed: false, optional: true, required: false
  private _dbServiceLabels?: { [key: string]: string }; 
  public get dbServiceLabels() {
    return this.getStringMapAttribute('db_service_labels');
  }
  public set dbServiceLabels(value: { [key: string]: string }) {
    this._dbServiceLabels = value;
  }
  public resetDbServiceLabels() {
    this._dbServiceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbServiceLabelsInput() {
    return this._dbServiceLabels;
  }

  // db_service_labels_expression - computed: false, optional: true, required: false
  private _dbServiceLabelsExpression?: string; 
  public get dbServiceLabelsExpression() {
    return this.getStringAttribute('db_service_labels_expression');
  }
  public set dbServiceLabelsExpression(value: string) {
    this._dbServiceLabelsExpression = value;
  }
  public resetDbServiceLabelsExpression() {
    this._dbServiceLabelsExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbServiceLabelsExpressionInput() {
    return this._dbServiceLabelsExpression;
  }

  // db_users - computed: false, optional: true, required: false
  private _dbUsers?: string[]; 
  public get dbUsers() {
    return this.getListAttribute('db_users');
  }
  public set dbUsers(value: string[]) {
    this._dbUsers = value;
  }
  public resetDbUsers() {
    this._dbUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUsersInput() {
    return this._dbUsers;
  }

  // desktop_groups - computed: false, optional: true, required: false
  private _desktopGroups?: string[]; 
  public get desktopGroups() {
    return this.getListAttribute('desktop_groups');
  }
  public set desktopGroups(value: string[]) {
    this._desktopGroups = value;
  }
  public resetDesktopGroups() {
    this._desktopGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desktopGroupsInput() {
    return this._desktopGroups;
  }

  // gcp_service_accounts - computed: false, optional: true, required: false
  private _gcpServiceAccounts?: string[]; 
  public get gcpServiceAccounts() {
    return this.getListAttribute('gcp_service_accounts');
  }
  public set gcpServiceAccounts(value: string[]) {
    this._gcpServiceAccounts = value;
  }
  public resetGcpServiceAccounts() {
    this._gcpServiceAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceAccountsInput() {
    return this._gcpServiceAccounts;
  }

  // group_labels - computed: false, optional: true, required: false
  private _groupLabels?: { [key: string]: string }; 
  public get groupLabels() {
    return this.getStringMapAttribute('group_labels');
  }
  public set groupLabels(value: { [key: string]: string }) {
    this._groupLabels = value;
  }
  public resetGroupLabels() {
    this._groupLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupLabelsInput() {
    return this._groupLabels;
  }

  // group_labels_expression - computed: false, optional: true, required: false
  private _groupLabelsExpression?: string; 
  public get groupLabelsExpression() {
    return this.getStringAttribute('group_labels_expression');
  }
  public set groupLabelsExpression(value: string) {
    this._groupLabelsExpression = value;
  }
  public resetGroupLabelsExpression() {
    this._groupLabelsExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupLabelsExpressionInput() {
    return this._groupLabelsExpression;
  }

  // host_groups - computed: false, optional: true, required: false
  private _hostGroups?: string[]; 
  public get hostGroups() {
    return this.getListAttribute('host_groups');
  }
  public set hostGroups(value: string[]) {
    this._hostGroups = value;
  }
  public resetHostGroups() {
    this._hostGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupsInput() {
    return this._hostGroups;
  }

  // host_sudoers - computed: false, optional: true, required: false
  private _hostSudoers?: string[]; 
  public get hostSudoers() {
    return this.getListAttribute('host_sudoers');
  }
  public set hostSudoers(value: string[]) {
    this._hostSudoers = value;
  }
  public resetHostSudoers() {
    this._hostSudoers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSudoersInput() {
    return this._hostSudoers;
  }

  // impersonate - computed: false, optional: true, required: false
  private _impersonate = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowImpersonateOutputReference(this, "impersonate");
  public get impersonate() {
    return this._impersonate;
  }
  public putImpersonate(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowImpersonate) {
    this._impersonate.internalValue = value;
  }
  public resetImpersonate() {
    this._impersonate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impersonateInput() {
    return this._impersonate.internalValue;
  }

  // join_sessions - computed: false, optional: true, required: false
  private _joinSessions = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowJoinSessionsList(this, "join_sessions", false);
  public get joinSessions() {
    return this._joinSessions;
  }
  public putJoinSessions(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowJoinSessions[] | cdktf.IResolvable) {
    this._joinSessions.internalValue = value;
  }
  public resetJoinSessions() {
    this._joinSessions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinSessionsInput() {
    return this._joinSessions.internalValue;
  }

  // kubernetes_groups - computed: false, optional: true, required: false
  private _kubernetesGroups?: string[]; 
  public get kubernetesGroups() {
    return this.getListAttribute('kubernetes_groups');
  }
  public set kubernetesGroups(value: string[]) {
    this._kubernetesGroups = value;
  }
  public resetKubernetesGroups() {
    this._kubernetesGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesGroupsInput() {
    return this._kubernetesGroups;
  }

  // kubernetes_labels - computed: false, optional: true, required: false
  private _kubernetesLabels?: { [key: string]: string }; 
  public get kubernetesLabels() {
    return this.getStringMapAttribute('kubernetes_labels');
  }
  public set kubernetesLabels(value: { [key: string]: string }) {
    this._kubernetesLabels = value;
  }
  public resetKubernetesLabels() {
    this._kubernetesLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesLabelsInput() {
    return this._kubernetesLabels;
  }

  // kubernetes_labels_expression - computed: false, optional: true, required: false
  private _kubernetesLabelsExpression?: string; 
  public get kubernetesLabelsExpression() {
    return this.getStringAttribute('kubernetes_labels_expression');
  }
  public set kubernetesLabelsExpression(value: string) {
    this._kubernetesLabelsExpression = value;
  }
  public resetKubernetesLabelsExpression() {
    this._kubernetesLabelsExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesLabelsExpressionInput() {
    return this._kubernetesLabelsExpression;
  }

  // kubernetes_resources - computed: false, optional: true, required: false
  private _kubernetesResources = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowKubernetesResourcesList(this, "kubernetes_resources", false);
  public get kubernetesResources() {
    return this._kubernetesResources;
  }
  public putKubernetesResources(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowKubernetesResources[] | cdktf.IResolvable) {
    this._kubernetesResources.internalValue = value;
  }
  public resetKubernetesResources() {
    this._kubernetesResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesResourcesInput() {
    return this._kubernetesResources.internalValue;
  }

  // kubernetes_users - computed: false, optional: true, required: false
  private _kubernetesUsers?: string[]; 
  public get kubernetesUsers() {
    return this.getListAttribute('kubernetes_users');
  }
  public set kubernetesUsers(value: string[]) {
    this._kubernetesUsers = value;
  }
  public resetKubernetesUsers() {
    this._kubernetesUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesUsersInput() {
    return this._kubernetesUsers;
  }

  // logins - computed: false, optional: true, required: false
  private _logins?: string[]; 
  public get logins() {
    return this.getListAttribute('logins');
  }
  public set logins(value: string[]) {
    this._logins = value;
  }
  public resetLogins() {
    this._logins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginsInput() {
    return this._logins;
  }

  // node_labels - computed: false, optional: true, required: false
  private _nodeLabels?: { [key: string]: string }; 
  public get nodeLabels() {
    return this.getStringMapAttribute('node_labels');
  }
  public set nodeLabels(value: { [key: string]: string }) {
    this._nodeLabels = value;
  }
  public resetNodeLabels() {
    this._nodeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLabelsInput() {
    return this._nodeLabels;
  }

  // node_labels_expression - computed: false, optional: true, required: false
  private _nodeLabelsExpression?: string; 
  public get nodeLabelsExpression() {
    return this.getStringAttribute('node_labels_expression');
  }
  public set nodeLabelsExpression(value: string) {
    this._nodeLabelsExpression = value;
  }
  public resetNodeLabelsExpression() {
    this._nodeLabelsExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLabelsExpressionInput() {
    return this._nodeLabelsExpression;
  }

  // request - computed: false, optional: true, required: false
  private _request = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequest) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // require_session_join - computed: false, optional: true, required: false
  private _requireSessionJoin = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequireSessionJoinList(this, "require_session_join", false);
  public get requireSessionJoin() {
    return this._requireSessionJoin;
  }
  public putRequireSessionJoin(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRequireSessionJoin[] | cdktf.IResolvable) {
    this._requireSessionJoin.internalValue = value;
  }
  public resetRequireSessionJoin() {
    this._requireSessionJoin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSessionJoinInput() {
    return this._requireSessionJoin.internalValue;
  }

  // review_requests - computed: false, optional: true, required: false
  private _reviewRequests = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequestsOutputReference(this, "review_requests");
  public get reviewRequests() {
    return this._reviewRequests;
  }
  public putReviewRequests(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowReviewRequests) {
    this._reviewRequests.internalValue = value;
  }
  public resetReviewRequests() {
    this._reviewRequests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewRequestsInput() {
    return this._reviewRequests.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // spiffe - computed: false, optional: true, required: false
  private _spiffe = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowSpiffeList(this, "spiffe", false);
  public get spiffe() {
    return this._spiffe;
  }
  public putSpiffe(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowSpiffe[] | cdktf.IResolvable) {
    this._spiffe.internalValue = value;
  }
  public resetSpiffe() {
    this._spiffe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spiffeInput() {
    return this._spiffe.internalValue;
  }

  // windows_desktop_labels - computed: false, optional: true, required: false
  private _windowsDesktopLabels?: { [key: string]: string }; 
  public get windowsDesktopLabels() {
    return this.getStringMapAttribute('windows_desktop_labels');
  }
  public set windowsDesktopLabels(value: { [key: string]: string }) {
    this._windowsDesktopLabels = value;
  }
  public resetWindowsDesktopLabels() {
    this._windowsDesktopLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsDesktopLabelsInput() {
    return this._windowsDesktopLabels;
  }

  // windows_desktop_labels_expression - computed: false, optional: true, required: false
  private _windowsDesktopLabelsExpression?: string; 
  public get windowsDesktopLabelsExpression() {
    return this.getStringAttribute('windows_desktop_labels_expression');
  }
  public set windowsDesktopLabelsExpression(value: string) {
    this._windowsDesktopLabelsExpression = value;
  }
  public resetWindowsDesktopLabelsExpression() {
    this._windowsDesktopLabelsExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsDesktopLabelsExpressionInput() {
    return this._windowsDesktopLabelsExpression;
  }

  // windows_desktop_logins - computed: false, optional: true, required: false
  private _windowsDesktopLogins?: string[]; 
  public get windowsDesktopLogins() {
    return this.getListAttribute('windows_desktop_logins');
  }
  public set windowsDesktopLogins(value: string[]) {
    this._windowsDesktopLogins = value;
  }
  public resetWindowsDesktopLogins() {
    this._windowsDesktopLogins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsDesktopLoginsInput() {
    return this._windowsDesktopLogins;
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyDbPermissions {
  /**
  * Match is a list of object labels that must be matched for the permission to be granted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#match DataK8SResourcesTeleportDevTeleportRoleV5Manifest#match}
  */
  readonly match?: { [key: string]: string };
  /**
  * Permission is the list of string representations of the permission to be given, e.g. SELECT, INSERT, UPDATE, ...
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#permissions DataK8SResourcesTeleportDevTeleportRoleV5Manifest#permissions}
  */
  readonly permissions?: string[];
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyDbPermissionsToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyDbPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.match),
    permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permissions),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyDbPermissionsToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyDbPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.match),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    permissions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permissions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyDbPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyDbPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyDbPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match = undefined;
      this._permissions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match = value.match;
      this._permissions = value.permissions;
    }
  }

  // match - computed: false, optional: true, required: false
  private _match?: { [key: string]: string }; 
  public get match() {
    return this.getStringMapAttribute('match');
  }
  public set match(value: { [key: string]: string }) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string[]; 
  public get permissions() {
    return this.getListAttribute('permissions');
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
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyDbPermissionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyDbPermissions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyDbPermissionsOutputReference {
    return new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyDbPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyImpersonate {
  /**
  * Roles is a list of resources this role is allowed to impersonate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#roles DataK8SResourcesTeleportDevTeleportRoleV5Manifest#roles}
  */
  readonly roles?: string[];
  /**
  * Users is a list of resources this role is allowed to impersonate, could be an empty list or a Wildcard pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#users DataK8SResourcesTeleportDevTeleportRoleV5Manifest#users}
  */
  readonly users?: string[];
  /**
  * Where specifies optional advanced matcher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#where DataK8SResourcesTeleportDevTeleportRoleV5Manifest#where}
  */
  readonly where?: string;
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyImpersonateToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyImpersonate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.users),
    where: cdktf.stringToTerraform(struct!.where),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyImpersonateToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyImpersonate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.users),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    where: {
      value: cdktf.stringToHclTerraform(struct!.where),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyImpersonateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyImpersonate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    if (this._where !== undefined) {
      hasAnyValues = true;
      internalValueResult.where = this._where;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyImpersonate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roles = undefined;
      this._users = undefined;
      this._where = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roles = value.roles;
      this._users = value.users;
      this._where = value.where;
    }
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[]; 
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // where - computed: false, optional: true, required: false
  private _where?: string; 
  public get where() {
    return this.getStringAttribute('where');
  }
  public set where(value: string) {
    this._where = value;
  }
  public resetWhere() {
    this._where = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whereInput() {
    return this._where;
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyJoinSessions {
  /**
  * Kinds are the session kinds this policy applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#kinds DataK8SResourcesTeleportDevTeleportRoleV5Manifest#kinds}
  */
  readonly kinds?: string[];
  /**
  * Modes is a list of permitted participant modes for this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#modes DataK8SResourcesTeleportDevTeleportRoleV5Manifest#modes}
  */
  readonly modes?: string[];
  /**
  * Name is the name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#name DataK8SResourcesTeleportDevTeleportRoleV5Manifest#name}
  */
  readonly name?: string;
  /**
  * Roles is a list of roles that you can join the session of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#roles DataK8SResourcesTeleportDevTeleportRoleV5Manifest#roles}
  */
  readonly roles?: string[];
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyJoinSessionsToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyJoinSessions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kinds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kinds),
    modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.modes),
    name: cdktf.stringToTerraform(struct!.name),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyJoinSessionsToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyJoinSessions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kinds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.modes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyJoinSessionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyJoinSessions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinds = this._kinds;
    }
    if (this._modes !== undefined) {
      hasAnyValues = true;
      internalValueResult.modes = this._modes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyJoinSessions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kinds = undefined;
      this._modes = undefined;
      this._name = undefined;
      this._roles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kinds = value.kinds;
      this._modes = value.modes;
      this._name = value.name;
      this._roles = value.roles;
    }
  }

  // kinds - computed: false, optional: true, required: false
  private _kinds?: string[]; 
  public get kinds() {
    return this.getListAttribute('kinds');
  }
  public set kinds(value: string[]) {
    this._kinds = value;
  }
  public resetKinds() {
    this._kinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindsInput() {
    return this._kinds;
  }

  // modes - computed: false, optional: true, required: false
  private _modes?: string[]; 
  public get modes() {
    return this.getListAttribute('modes');
  }
  public set modes(value: string[]) {
    this._modes = value;
  }
  public resetModes() {
    this._modes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modesInput() {
    return this._modes;
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

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyJoinSessionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyJoinSessions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyJoinSessionsOutputReference {
    return new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyJoinSessionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyKubernetesResources {
  /**
  * Kind specifies the Kubernetes Resource type. At the moment only 'pod' is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#kind DataK8SResourcesTeleportDevTeleportRoleV5Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name is the resource name. It supports wildcards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#name DataK8SResourcesTeleportDevTeleportRoleV5Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace is the resource namespace. It supports wildcards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#namespace DataK8SResourcesTeleportDevTeleportRoleV5Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Verbs are the allowed Kubernetes verbs for the following resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#verbs DataK8SResourcesTeleportDevTeleportRoleV5Manifest#verbs}
  */
  readonly verbs?: string[];
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyKubernetesResourcesToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyKubernetesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    verbs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.verbs),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyKubernetesResourcesToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyKubernetesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verbs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.verbs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyKubernetesResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyKubernetesResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._verbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbs = this._verbs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyKubernetesResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._verbs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._verbs = value.verbs;
    }
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // verbs - computed: false, optional: true, required: false
  private _verbs?: string[]; 
  public get verbs() {
    return this.getListAttribute('verbs');
  }
  public set verbs(value: string[]) {
    this._verbs = value;
  }
  public resetVerbs() {
    this._verbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbsInput() {
    return this._verbs;
  }
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyKubernetesResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyKubernetesResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyKubernetesResourcesOutputReference {
    return new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyKubernetesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestClaimsToRoles {
  /**
  * Claim is a claim name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#claim DataK8SResourcesTeleportDevTeleportRoleV5Manifest#claim}
  */
  readonly claim?: string;
  /**
  * Roles is a list of static teleport roles to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#roles DataK8SResourcesTeleportDevTeleportRoleV5Manifest#roles}
  */
  readonly roles?: string[];
  /**
  * Value is a claim value to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#value DataK8SResourcesTeleportDevTeleportRoleV5Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestClaimsToRolesToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestClaimsToRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim: cdktf.stringToTerraform(struct!.claim),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestClaimsToRolesToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestClaimsToRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim: {
      value: cdktf.stringToHclTerraform(struct!.claim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestClaimsToRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestClaimsToRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claim !== undefined) {
      hasAnyValues = true;
      internalValueResult.claim = this._claim;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestClaimsToRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claim = undefined;
      this._roles = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claim = value.claim;
      this._roles = value.roles;
      this._value = value.value;
    }
  }

  // claim - computed: false, optional: true, required: false
  private _claim?: string; 
  public get claim() {
    return this.getStringAttribute('claim');
  }
  public set claim(value: string) {
    this._claim = value;
  }
  public resetClaim() {
    this._claim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimInput() {
    return this._claim;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestClaimsToRolesList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestClaimsToRoles[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestClaimsToRolesOutputReference {
    return new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestClaimsToRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestThresholds {
  /**
  * Approve is the number of matching approvals needed for state-transition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#approve DataK8SResourcesTeleportDevTeleportRoleV5Manifest#approve}
  */
  readonly approve?: number;
  /**
  * Deny is the number of denials needed for state-transition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#deny DataK8SResourcesTeleportDevTeleportRoleV5Manifest#deny}
  */
  readonly deny?: number;
  /**
  * Filter is an optional predicate used to determine which reviews count toward this threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#filter DataK8SResourcesTeleportDevTeleportRoleV5Manifest#filter}
  */
  readonly filter?: string;
  /**
  * Name is the optional human-readable name of the threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#name DataK8SResourcesTeleportDevTeleportRoleV5Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestThresholdsToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approve: cdktf.numberToTerraform(struct!.approve),
    deny: cdktf.numberToTerraform(struct!.deny),
    filter: cdktf.stringToTerraform(struct!.filter),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestThresholdsToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    approve: {
      value: cdktf.numberToHclTerraform(struct!.approve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny: {
      value: cdktf.numberToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestThresholds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approve !== undefined) {
      hasAnyValues = true;
      internalValueResult.approve = this._approve;
    }
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestThresholds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approve = undefined;
      this._deny = undefined;
      this._filter = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._approve = value.approve;
      this._deny = value.deny;
      this._filter = value.filter;
      this._name = value.name;
    }
  }

  // approve - computed: false, optional: true, required: false
  private _approve?: number; 
  public get approve() {
    return this.getNumberAttribute('approve');
  }
  public set approve(value: number) {
    this._approve = value;
  }
  public resetApprove() {
    this._approve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approveInput() {
    return this._approve;
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: number; 
  public get deny() {
    return this.getNumberAttribute('deny');
  }
  public set deny(value: number) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestThresholdsList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestThresholds[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestThresholdsOutputReference {
    return new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequest {
  /**
  * Annotations is a collection of annotations to be programmatically appended to pending Access Requests at the time of their creation. These annotations serve as a mechanism to propagate extra information to plugins. Since these annotations support variable interpolation syntax, they also offer a mechanism for forwarding claims from an external identity provider, to a plugin via '{{external.trait_name}}' style substitutions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#annotations DataK8SResourcesTeleportDevTeleportRoleV5Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * ClaimsToRoles specifies a mapping from claims (traits) to teleport roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#claims_to_roles DataK8SResourcesTeleportDevTeleportRoleV5Manifest#claims_to_roles}
  */
  readonly claimsToRoles?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestClaimsToRoles[] | cdktf.IResolvable;
  /**
  * MaxDuration is the amount of time the access will be granted for. If this is zero, the default duration is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#max_duration DataK8SResourcesTeleportDevTeleportRoleV5Manifest#max_duration}
  */
  readonly maxDuration?: string;
  /**
  * Roles is the name of roles which will match the request rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#roles DataK8SResourcesTeleportDevTeleportRoleV5Manifest#roles}
  */
  readonly roles?: string[];
  /**
  * SearchAsRoles is a list of extra roles which should apply to a user while they are searching for resources as part of a Resource Access Request, and defines the underlying roles which will be requested as part of any Resource Access Request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#search_as_roles DataK8SResourcesTeleportDevTeleportRoleV5Manifest#search_as_roles}
  */
  readonly searchAsRoles?: string[];
  /**
  * SuggestedReviewers is a list of reviewer suggestions. These can be teleport usernames, but that is not a requirement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#suggested_reviewers DataK8SResourcesTeleportDevTeleportRoleV5Manifest#suggested_reviewers}
  */
  readonly suggestedReviewers?: string[];
  /**
  * Thresholds is a list of thresholds, one of which must be met in order for reviews to trigger a state-transition. If no thresholds are provided, a default threshold of 1 for approval and denial is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#thresholds DataK8SResourcesTeleportDevTeleportRoleV5Manifest#thresholds}
  */
  readonly thresholds?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestThresholds[] | cdktf.IResolvable;
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.annotations),
    claims_to_roles: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestClaimsToRolesToTerraform, false)(struct!.claimsToRoles),
    max_duration: cdktf.stringToTerraform(struct!.maxDuration),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    search_as_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchAsRoles),
    suggested_reviewers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.suggestedReviewers),
    thresholds: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestThresholdsToTerraform, false)(struct!.thresholds),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    claims_to_roles: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestClaimsToRolesToHclTerraform, false)(struct!.claimsToRoles),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestClaimsToRolesList",
    },
    max_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    search_as_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searchAsRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    suggested_reviewers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.suggestedReviewers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    thresholds: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestThresholdsToHclTerraform, false)(struct!.thresholds),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._claimsToRoles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimsToRoles = this._claimsToRoles?.internalValue;
    }
    if (this._maxDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDuration = this._maxDuration;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._searchAsRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchAsRoles = this._searchAsRoles;
    }
    if (this._suggestedReviewers !== undefined) {
      hasAnyValues = true;
      internalValueResult.suggestedReviewers = this._suggestedReviewers;
    }
    if (this._thresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholds = this._thresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._claimsToRoles.internalValue = undefined;
      this._maxDuration = undefined;
      this._roles = undefined;
      this._searchAsRoles = undefined;
      this._suggestedReviewers = undefined;
      this._thresholds.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._claimsToRoles.internalValue = value.claimsToRoles;
      this._maxDuration = value.maxDuration;
      this._roles = value.roles;
      this._searchAsRoles = value.searchAsRoles;
      this._suggestedReviewers = value.suggestedReviewers;
      this._thresholds.internalValue = value.thresholds;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get annotations() {
    return this.interpolationForAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // claims_to_roles - computed: false, optional: true, required: false
  private _claimsToRoles = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestClaimsToRolesList(this, "claims_to_roles", false);
  public get claimsToRoles() {
    return this._claimsToRoles;
  }
  public putClaimsToRoles(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestClaimsToRoles[] | cdktf.IResolvable) {
    this._claimsToRoles.internalValue = value;
  }
  public resetClaimsToRoles() {
    this._claimsToRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsToRolesInput() {
    return this._claimsToRoles.internalValue;
  }

  // max_duration - computed: false, optional: true, required: false
  private _maxDuration?: string; 
  public get maxDuration() {
    return this.getStringAttribute('max_duration');
  }
  public set maxDuration(value: string) {
    this._maxDuration = value;
  }
  public resetMaxDuration() {
    this._maxDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDurationInput() {
    return this._maxDuration;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // search_as_roles - computed: false, optional: true, required: false
  private _searchAsRoles?: string[]; 
  public get searchAsRoles() {
    return this.getListAttribute('search_as_roles');
  }
  public set searchAsRoles(value: string[]) {
    this._searchAsRoles = value;
  }
  public resetSearchAsRoles() {
    this._searchAsRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchAsRolesInput() {
    return this._searchAsRoles;
  }

  // suggested_reviewers - computed: false, optional: true, required: false
  private _suggestedReviewers?: string[]; 
  public get suggestedReviewers() {
    return this.getListAttribute('suggested_reviewers');
  }
  public set suggestedReviewers(value: string[]) {
    this._suggestedReviewers = value;
  }
  public resetSuggestedReviewers() {
    this._suggestedReviewers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suggestedReviewersInput() {
    return this._suggestedReviewers;
  }

  // thresholds - computed: false, optional: true, required: false
  private _thresholds = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestThresholdsList(this, "thresholds", false);
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestThresholds[] | cdktf.IResolvable) {
    this._thresholds.internalValue = value;
  }
  public resetThresholds() {
    this._thresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdsInput() {
    return this._thresholds.internalValue;
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequireSessionJoin {
  /**
  * Count is the amount of people that need to be matched for this policy to be fulfilled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#count DataK8SResourcesTeleportDevTeleportRoleV5Manifest#count}
  */
  readonly count?: number;
  /**
  * Filter is a predicate that determines what users count towards this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#filter DataK8SResourcesTeleportDevTeleportRoleV5Manifest#filter}
  */
  readonly filter?: string;
  /**
  * Kinds are the session kinds this policy applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#kinds DataK8SResourcesTeleportDevTeleportRoleV5Manifest#kinds}
  */
  readonly kinds?: string[];
  /**
  * Modes is the list of modes that may be used to fulfill this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#modes DataK8SResourcesTeleportDevTeleportRoleV5Manifest#modes}
  */
  readonly modes?: string[];
  /**
  * Name is the name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#name DataK8SResourcesTeleportDevTeleportRoleV5Manifest#name}
  */
  readonly name?: string;
  /**
  * OnLeave is the behaviour that's used when the policy is no longer fulfilled for a live session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#on_leave DataK8SResourcesTeleportDevTeleportRoleV5Manifest#on_leave}
  */
  readonly onLeave?: string;
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequireSessionJoinToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequireSessionJoin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    filter: cdktf.stringToTerraform(struct!.filter),
    kinds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kinds),
    modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.modes),
    name: cdktf.stringToTerraform(struct!.name),
    on_leave: cdktf.stringToTerraform(struct!.onLeave),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequireSessionJoinToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequireSessionJoin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.modes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_leave: {
      value: cdktf.stringToHclTerraform(struct!.onLeave),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequireSessionJoinOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequireSessionJoin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._kinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinds = this._kinds;
    }
    if (this._modes !== undefined) {
      hasAnyValues = true;
      internalValueResult.modes = this._modes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._onLeave !== undefined) {
      hasAnyValues = true;
      internalValueResult.onLeave = this._onLeave;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequireSessionJoin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._filter = undefined;
      this._kinds = undefined;
      this._modes = undefined;
      this._name = undefined;
      this._onLeave = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._filter = value.filter;
      this._kinds = value.kinds;
      this._modes = value.modes;
      this._name = value.name;
      this._onLeave = value.onLeave;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // kinds - computed: false, optional: true, required: false
  private _kinds?: string[]; 
  public get kinds() {
    return this.getListAttribute('kinds');
  }
  public set kinds(value: string[]) {
    this._kinds = value;
  }
  public resetKinds() {
    this._kinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindsInput() {
    return this._kinds;
  }

  // modes - computed: false, optional: true, required: false
  private _modes?: string[]; 
  public get modes() {
    return this.getListAttribute('modes');
  }
  public set modes(value: string[]) {
    this._modes = value;
  }
  public resetModes() {
    this._modes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modesInput() {
    return this._modes;
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

  // on_leave - computed: false, optional: true, required: false
  private _onLeave?: string; 
  public get onLeave() {
    return this.getStringAttribute('on_leave');
  }
  public set onLeave(value: string) {
    this._onLeave = value;
  }
  public resetOnLeave() {
    this._onLeave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onLeaveInput() {
    return this._onLeave;
  }
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequireSessionJoinList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequireSessionJoin[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequireSessionJoinOutputReference {
    return new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequireSessionJoinOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequestsClaimsToRoles {
  /**
  * Claim is a claim name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#claim DataK8SResourcesTeleportDevTeleportRoleV5Manifest#claim}
  */
  readonly claim?: string;
  /**
  * Roles is a list of static teleport roles to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#roles DataK8SResourcesTeleportDevTeleportRoleV5Manifest#roles}
  */
  readonly roles?: string[];
  /**
  * Value is a claim value to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#value DataK8SResourcesTeleportDevTeleportRoleV5Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequestsClaimsToRolesToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequestsClaimsToRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim: cdktf.stringToTerraform(struct!.claim),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequestsClaimsToRolesToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequestsClaimsToRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim: {
      value: cdktf.stringToHclTerraform(struct!.claim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequestsClaimsToRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequestsClaimsToRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claim !== undefined) {
      hasAnyValues = true;
      internalValueResult.claim = this._claim;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequestsClaimsToRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claim = undefined;
      this._roles = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claim = value.claim;
      this._roles = value.roles;
      this._value = value.value;
    }
  }

  // claim - computed: false, optional: true, required: false
  private _claim?: string; 
  public get claim() {
    return this.getStringAttribute('claim');
  }
  public set claim(value: string) {
    this._claim = value;
  }
  public resetClaim() {
    this._claim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimInput() {
    return this._claim;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequestsClaimsToRolesList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequestsClaimsToRoles[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequestsClaimsToRolesOutputReference {
    return new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequestsClaimsToRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequests {
  /**
  * ClaimsToRoles specifies a mapping from claims (traits) to teleport roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#claims_to_roles DataK8SResourcesTeleportDevTeleportRoleV5Manifest#claims_to_roles}
  */
  readonly claimsToRoles?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequestsClaimsToRoles[] | cdktf.IResolvable;
  /**
  * PreviewAsRoles is a list of extra roles which should apply to a reviewer while they are viewing a Resource Access Request for the purposes of viewing details such as the hostname and labels of requested resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#preview_as_roles DataK8SResourcesTeleportDevTeleportRoleV5Manifest#preview_as_roles}
  */
  readonly previewAsRoles?: string[];
  /**
  * Roles is the name of roles which may be reviewed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#roles DataK8SResourcesTeleportDevTeleportRoleV5Manifest#roles}
  */
  readonly roles?: string[];
  /**
  * Where is an optional predicate which further limits which requests are reviewable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#where DataK8SResourcesTeleportDevTeleportRoleV5Manifest#where}
  */
  readonly where?: string;
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequestsToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims_to_roles: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequestsClaimsToRolesToTerraform, false)(struct!.claimsToRoles),
    preview_as_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.previewAsRoles),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    where: cdktf.stringToTerraform(struct!.where),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequestsToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims_to_roles: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequestsClaimsToRolesToHclTerraform, false)(struct!.claimsToRoles),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequestsClaimsToRolesList",
    },
    preview_as_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.previewAsRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    where: {
      value: cdktf.stringToHclTerraform(struct!.where),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimsToRoles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimsToRoles = this._claimsToRoles?.internalValue;
    }
    if (this._previewAsRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.previewAsRoles = this._previewAsRoles;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._where !== undefined) {
      hasAnyValues = true;
      internalValueResult.where = this._where;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimsToRoles.internalValue = undefined;
      this._previewAsRoles = undefined;
      this._roles = undefined;
      this._where = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimsToRoles.internalValue = value.claimsToRoles;
      this._previewAsRoles = value.previewAsRoles;
      this._roles = value.roles;
      this._where = value.where;
    }
  }

  // claims_to_roles - computed: false, optional: true, required: false
  private _claimsToRoles = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequestsClaimsToRolesList(this, "claims_to_roles", false);
  public get claimsToRoles() {
    return this._claimsToRoles;
  }
  public putClaimsToRoles(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequestsClaimsToRoles[] | cdktf.IResolvable) {
    this._claimsToRoles.internalValue = value;
  }
  public resetClaimsToRoles() {
    this._claimsToRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsToRolesInput() {
    return this._claimsToRoles.internalValue;
  }

  // preview_as_roles - computed: false, optional: true, required: false
  private _previewAsRoles?: string[]; 
  public get previewAsRoles() {
    return this.getListAttribute('preview_as_roles');
  }
  public set previewAsRoles(value: string[]) {
    this._previewAsRoles = value;
  }
  public resetPreviewAsRoles() {
    this._previewAsRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewAsRolesInput() {
    return this._previewAsRoles;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // where - computed: false, optional: true, required: false
  private _where?: string; 
  public get where() {
    return this.getStringAttribute('where');
  }
  public set where(value: string) {
    this._where = value;
  }
  public resetWhere() {
    this._where = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whereInput() {
    return this._where;
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRules {
  /**
  * Actions specifies optional actions taken when this rule matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#actions DataK8SResourcesTeleportDevTeleportRoleV5Manifest#actions}
  */
  readonly actions?: string[];
  /**
  * Resources is a list of resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#resources DataK8SResourcesTeleportDevTeleportRoleV5Manifest#resources}
  */
  readonly resources?: string[];
  /**
  * Verbs is a list of verbs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#verbs DataK8SResourcesTeleportDevTeleportRoleV5Manifest#verbs}
  */
  readonly verbs?: string[];
  /**
  * Where specifies optional advanced matcher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#where DataK8SResourcesTeleportDevTeleportRoleV5Manifest#where}
  */
  readonly where?: string;
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRulesToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    verbs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.verbs),
    where: cdktf.stringToTerraform(struct!.where),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRulesToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verbs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.verbs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    where: {
      value: cdktf.stringToHclTerraform(struct!.where),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._verbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbs = this._verbs;
    }
    if (this._where !== undefined) {
      hasAnyValues = true;
      internalValueResult.where = this._where;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._resources = undefined;
      this._verbs = undefined;
      this._where = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._resources = value.resources;
      this._verbs = value.verbs;
      this._where = value.where;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // verbs - computed: false, optional: true, required: false
  private _verbs?: string[]; 
  public get verbs() {
    return this.getListAttribute('verbs');
  }
  public set verbs(value: string[]) {
    this._verbs = value;
  }
  public resetVerbs() {
    this._verbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbsInput() {
    return this._verbs;
  }

  // where - computed: false, optional: true, required: false
  private _where?: string; 
  public get where() {
    return this.getStringAttribute('where');
  }
  public set where(value: string) {
    this._where = value;
  }
  public resetWhere() {
    this._where = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whereInput() {
    return this._where;
  }
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRulesOutputReference {
    return new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenySpiffe {
  /**
  * DNSSANs specifies matchers for the SPIFFE ID DNS SANs. Each requested DNS SAN is compared against all matchers configured and if any match, the condition is considered to be met. The matcher by default allows '*' to be used to indicate zero or more of any character. Prepend '^' and append '$' to instead switch to matching using the Go regex syntax. Example: *.example.com would match foo.example.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#dns_sans DataK8SResourcesTeleportDevTeleportRoleV5Manifest#dns_sans}
  */
  readonly dnsSans?: string[];
  /**
  * IPSANs specifies matchers for the SPIFFE ID IP SANs. Each requested IP SAN is compared against all matchers configured and if any match, the condition is considered to be met. The matchers should be specified using CIDR notation, it supports IPv4 and IPv6. Examples: - 10.0.0.0/24 would match 10.0.0.0 to 10.255.255.255 - 10.0.0.42/32 would match only 10.0.0.42
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#ip_sans DataK8SResourcesTeleportDevTeleportRoleV5Manifest#ip_sans}
  */
  readonly ipSans?: string[];
  /**
  * Path specifies a matcher for the SPIFFE ID path. It should not include the trust domain and should start with a leading slash. The matcher by default allows '*' to be used to indicate zero or more of any character. Prepend '^' and append '$' to instead switch to matching using the Go regex syntax. Example: - /svc/foo/* /bar would match /svc/foo/baz/bar - ^/svc/foo/.* /bar$ would match /svc/foo/baz/bar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#path DataK8SResourcesTeleportDevTeleportRoleV5Manifest#path}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly path?: string;
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenySpiffeToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenySpiffe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsSans),
    ip_sans: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipSans),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenySpiffeToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenySpiffe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_sans: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsSans),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_sans: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipSans),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenySpiffeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenySpiffe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsSans !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSans = this._dnsSans;
    }
    if (this._ipSans !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSans = this._ipSans;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenySpiffe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsSans = undefined;
      this._ipSans = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsSans = value.dnsSans;
      this._ipSans = value.ipSans;
      this._path = value.path;
    }
  }

  // dns_sans - computed: false, optional: true, required: false
  private _dnsSans?: string[]; 
  public get dnsSans() {
    return this.getListAttribute('dns_sans');
  }
  public set dnsSans(value: string[]) {
    this._dnsSans = value;
  }
  public resetDnsSans() {
    this._dnsSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSansInput() {
    return this._dnsSans;
  }

  // ip_sans - computed: false, optional: true, required: false
  private _ipSans?: string[]; 
  public get ipSans() {
    return this.getListAttribute('ip_sans');
  }
  public set ipSans(value: string[]) {
    this._ipSans = value;
  }
  public resetIpSans() {
    this._ipSans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSansInput() {
    return this._ipSans;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenySpiffeList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenySpiffe[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenySpiffeOutputReference {
    return new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenySpiffeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDeny {
  /**
  * AppLabels is a map of labels used as part of the RBAC system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#app_labels DataK8SResourcesTeleportDevTeleportRoleV5Manifest#app_labels}
  */
  readonly appLabels?: { [key: string]: string };
  /**
  * AppLabelsExpression is a predicate expression used to allow/deny access to Apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#app_labels_expression DataK8SResourcesTeleportDevTeleportRoleV5Manifest#app_labels_expression}
  */
  readonly appLabelsExpression?: string;
  /**
  * AWSRoleARNs is a list of AWS role ARNs this role is allowed to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#aws_role_arns DataK8SResourcesTeleportDevTeleportRoleV5Manifest#aws_role_arns}
  */
  readonly awsRoleArns?: string[];
  /**
  * AzureIdentities is a list of Azure identities this role is allowed to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#azure_identities DataK8SResourcesTeleportDevTeleportRoleV5Manifest#azure_identities}
  */
  readonly azureIdentities?: string[];
  /**
  * ClusterLabels is a map of node labels (used to dynamically grant access to clusters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#cluster_labels DataK8SResourcesTeleportDevTeleportRoleV5Manifest#cluster_labels}
  */
  readonly clusterLabels?: { [key: string]: string };
  /**
  * ClusterLabelsExpression is a predicate expression used to allow/deny access to remote Teleport clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#cluster_labels_expression DataK8SResourcesTeleportDevTeleportRoleV5Manifest#cluster_labels_expression}
  */
  readonly clusterLabelsExpression?: string;
  /**
  * DatabaseLabels are used in RBAC system to allow/deny access to databases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#db_labels DataK8SResourcesTeleportDevTeleportRoleV5Manifest#db_labels}
  */
  readonly dbLabels?: { [key: string]: string };
  /**
  * DatabaseLabelsExpression is a predicate expression used to allow/deny access to Databases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#db_labels_expression DataK8SResourcesTeleportDevTeleportRoleV5Manifest#db_labels_expression}
  */
  readonly dbLabelsExpression?: string;
  /**
  * DatabaseNames is a list of database names this role is allowed to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#db_names DataK8SResourcesTeleportDevTeleportRoleV5Manifest#db_names}
  */
  readonly dbNames?: string[];
  /**
  * DatabasePermissions specifies a set of permissions that will be granted to the database user when using automatic database user provisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#db_permissions DataK8SResourcesTeleportDevTeleportRoleV5Manifest#db_permissions}
  */
  readonly dbPermissions?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyDbPermissions[] | cdktf.IResolvable;
  /**
  * DatabaseRoles is a list of databases roles for automatic user creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#db_roles DataK8SResourcesTeleportDevTeleportRoleV5Manifest#db_roles}
  */
  readonly dbRoles?: string[];
  /**
  * DatabaseServiceLabels are used in RBAC system to allow/deny access to Database Services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#db_service_labels DataK8SResourcesTeleportDevTeleportRoleV5Manifest#db_service_labels}
  */
  readonly dbServiceLabels?: { [key: string]: string };
  /**
  * DatabaseServiceLabelsExpression is a predicate expression used to allow/deny access to Database Services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#db_service_labels_expression DataK8SResourcesTeleportDevTeleportRoleV5Manifest#db_service_labels_expression}
  */
  readonly dbServiceLabelsExpression?: string;
  /**
  * DatabaseUsers is a list of databases users this role is allowed to connect as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#db_users DataK8SResourcesTeleportDevTeleportRoleV5Manifest#db_users}
  */
  readonly dbUsers?: string[];
  /**
  * DesktopGroups is a list of groups for created desktop users to be added to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#desktop_groups DataK8SResourcesTeleportDevTeleportRoleV5Manifest#desktop_groups}
  */
  readonly desktopGroups?: string[];
  /**
  * GCPServiceAccounts is a list of GCP service accounts this role is allowed to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#gcp_service_accounts DataK8SResourcesTeleportDevTeleportRoleV5Manifest#gcp_service_accounts}
  */
  readonly gcpServiceAccounts?: string[];
  /**
  * GroupLabels is a map of labels used as part of the RBAC system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#group_labels DataK8SResourcesTeleportDevTeleportRoleV5Manifest#group_labels}
  */
  readonly groupLabels?: { [key: string]: string };
  /**
  * GroupLabelsExpression is a predicate expression used to allow/deny access to user groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#group_labels_expression DataK8SResourcesTeleportDevTeleportRoleV5Manifest#group_labels_expression}
  */
  readonly groupLabelsExpression?: string;
  /**
  * HostGroups is a list of groups for created users to be added to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#host_groups DataK8SResourcesTeleportDevTeleportRoleV5Manifest#host_groups}
  */
  readonly hostGroups?: string[];
  /**
  * HostSudoers is a list of entries to include in a users sudoer file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#host_sudoers DataK8SResourcesTeleportDevTeleportRoleV5Manifest#host_sudoers}
  */
  readonly hostSudoers?: string[];
  /**
  * Impersonate specifies what users and roles this role is allowed to impersonate by issuing certificates or other possible means.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#impersonate DataK8SResourcesTeleportDevTeleportRoleV5Manifest#impersonate}
  */
  readonly impersonate?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyImpersonate;
  /**
  * JoinSessions specifies policies to allow users to join other sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#join_sessions DataK8SResourcesTeleportDevTeleportRoleV5Manifest#join_sessions}
  */
  readonly joinSessions?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyJoinSessions[] | cdktf.IResolvable;
  /**
  * KubeGroups is a list of kubernetes groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#kubernetes_groups DataK8SResourcesTeleportDevTeleportRoleV5Manifest#kubernetes_groups}
  */
  readonly kubernetesGroups?: string[];
  /**
  * KubernetesLabels is a map of kubernetes cluster labels used for RBAC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#kubernetes_labels DataK8SResourcesTeleportDevTeleportRoleV5Manifest#kubernetes_labels}
  */
  readonly kubernetesLabels?: { [key: string]: string };
  /**
  * KubernetesLabelsExpression is a predicate expression used to allow/deny access to kubernetes clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#kubernetes_labels_expression DataK8SResourcesTeleportDevTeleportRoleV5Manifest#kubernetes_labels_expression}
  */
  readonly kubernetesLabelsExpression?: string;
  /**
  * KubernetesResources is the Kubernetes Resources this Role grants access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#kubernetes_resources DataK8SResourcesTeleportDevTeleportRoleV5Manifest#kubernetes_resources}
  */
  readonly kubernetesResources?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyKubernetesResources[] | cdktf.IResolvable;
  /**
  * KubeUsers is an optional kubernetes users to impersonate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#kubernetes_users DataK8SResourcesTeleportDevTeleportRoleV5Manifest#kubernetes_users}
  */
  readonly kubernetesUsers?: string[];
  /**
  * Logins is a list of *nix system logins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#logins DataK8SResourcesTeleportDevTeleportRoleV5Manifest#logins}
  */
  readonly logins?: string[];
  /**
  * NodeLabels is a map of node labels (used to dynamically grant access to nodes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#node_labels DataK8SResourcesTeleportDevTeleportRoleV5Manifest#node_labels}
  */
  readonly nodeLabels?: { [key: string]: string };
  /**
  * NodeLabelsExpression is a predicate expression used to allow/deny access to SSH nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#node_labels_expression DataK8SResourcesTeleportDevTeleportRoleV5Manifest#node_labels_expression}
  */
  readonly nodeLabelsExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#request DataK8SResourcesTeleportDevTeleportRoleV5Manifest#request}
  */
  readonly request?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequest;
  /**
  * RequireSessionJoin specifies policies for required users to start a session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#require_session_join DataK8SResourcesTeleportDevTeleportRoleV5Manifest#require_session_join}
  */
  readonly requireSessionJoin?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequireSessionJoin[] | cdktf.IResolvable;
  /**
  * ReviewRequests defines conditions for submitting access reviews.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#review_requests DataK8SResourcesTeleportDevTeleportRoleV5Manifest#review_requests}
  */
  readonly reviewRequests?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequests;
  /**
  * Rules is a list of rules and their access levels. Rules are a high level construct used for access control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#rules DataK8SResourcesTeleportDevTeleportRoleV5Manifest#rules}
  */
  readonly rules?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRules[] | cdktf.IResolvable;
  /**
  * SPIFFE is used to allow or deny access to a role holder to generating a SPIFFE SVID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#spiffe DataK8SResourcesTeleportDevTeleportRoleV5Manifest#spiffe}
  */
  readonly spiffe?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenySpiffe[] | cdktf.IResolvable;
  /**
  * WindowsDesktopLabels are used in the RBAC system to allow/deny access to Windows desktops.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#windows_desktop_labels DataK8SResourcesTeleportDevTeleportRoleV5Manifest#windows_desktop_labels}
  */
  readonly windowsDesktopLabels?: { [key: string]: string };
  /**
  * WindowsDesktopLabelsExpression is a predicate expression used to allow/deny access to Windows desktops.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#windows_desktop_labels_expression DataK8SResourcesTeleportDevTeleportRoleV5Manifest#windows_desktop_labels_expression}
  */
  readonly windowsDesktopLabelsExpression?: string;
  /**
  * WindowsDesktopLogins is a list of desktop login names allowed/denied for Windows desktops.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#windows_desktop_logins DataK8SResourcesTeleportDevTeleportRoleV5Manifest#windows_desktop_logins}
  */
  readonly windowsDesktopLogins?: string[];
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDeny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.appLabels),
    app_labels_expression: cdktf.stringToTerraform(struct!.appLabelsExpression),
    aws_role_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.awsRoleArns),
    azure_identities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.azureIdentities),
    cluster_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.clusterLabels),
    cluster_labels_expression: cdktf.stringToTerraform(struct!.clusterLabelsExpression),
    db_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dbLabels),
    db_labels_expression: cdktf.stringToTerraform(struct!.dbLabelsExpression),
    db_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dbNames),
    db_permissions: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyDbPermissionsToTerraform, false)(struct!.dbPermissions),
    db_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dbRoles),
    db_service_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dbServiceLabels),
    db_service_labels_expression: cdktf.stringToTerraform(struct!.dbServiceLabelsExpression),
    db_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dbUsers),
    desktop_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.desktopGroups),
    gcp_service_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gcpServiceAccounts),
    group_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.groupLabels),
    group_labels_expression: cdktf.stringToTerraform(struct!.groupLabelsExpression),
    host_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostGroups),
    host_sudoers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostSudoers),
    impersonate: dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyImpersonateToTerraform(struct!.impersonate),
    join_sessions: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyJoinSessionsToTerraform, false)(struct!.joinSessions),
    kubernetes_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kubernetesGroups),
    kubernetes_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.kubernetesLabels),
    kubernetes_labels_expression: cdktf.stringToTerraform(struct!.kubernetesLabelsExpression),
    kubernetes_resources: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyKubernetesResourcesToTerraform, false)(struct!.kubernetesResources),
    kubernetes_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kubernetesUsers),
    logins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.logins),
    node_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeLabels),
    node_labels_expression: cdktf.stringToTerraform(struct!.nodeLabelsExpression),
    request: dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestToTerraform(struct!.request),
    require_session_join: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequireSessionJoinToTerraform, false)(struct!.requireSessionJoin),
    review_requests: dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequestsToTerraform(struct!.reviewRequests),
    rules: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRulesToTerraform, false)(struct!.rules),
    spiffe: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenySpiffeToTerraform, false)(struct!.spiffe),
    windows_desktop_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.windowsDesktopLabels),
    windows_desktop_labels_expression: cdktf.stringToTerraform(struct!.windowsDesktopLabelsExpression),
    windows_desktop_logins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.windowsDesktopLogins),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDeny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.appLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    app_labels_expression: {
      value: cdktf.stringToHclTerraform(struct!.appLabelsExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_role_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.awsRoleArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    azure_identities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.azureIdentities),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cluster_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.clusterLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    cluster_labels_expression: {
      value: cdktf.stringToHclTerraform(struct!.clusterLabelsExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.dbLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    db_labels_expression: {
      value: cdktf.stringToHclTerraform(struct!.dbLabelsExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dbNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    db_permissions: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyDbPermissionsToHclTerraform, false)(struct!.dbPermissions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyDbPermissionsList",
    },
    db_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dbRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    db_service_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.dbServiceLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    db_service_labels_expression: {
      value: cdktf.stringToHclTerraform(struct!.dbServiceLabelsExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dbUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    desktop_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.desktopGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gcp_service_accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gcpServiceAccounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.groupLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    group_labels_expression: {
      value: cdktf.stringToHclTerraform(struct!.groupLabelsExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    host_sudoers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostSudoers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    impersonate: {
      value: dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyImpersonateToHclTerraform(struct!.impersonate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyImpersonate",
    },
    join_sessions: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyJoinSessionsToHclTerraform, false)(struct!.joinSessions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyJoinSessionsList",
    },
    kubernetes_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kubernetesGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kubernetes_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.kubernetesLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    kubernetes_labels_expression: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesLabelsExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubernetes_resources: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyKubernetesResourcesToHclTerraform, false)(struct!.kubernetesResources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyKubernetesResourcesList",
    },
    kubernetes_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kubernetesUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    logins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.logins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_labels_expression: {
      value: cdktf.stringToHclTerraform(struct!.nodeLabelsExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request: {
      value: dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestToHclTerraform(struct!.request),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequest",
    },
    require_session_join: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequireSessionJoinToHclTerraform, false)(struct!.requireSessionJoin),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequireSessionJoinList",
    },
    review_requests: {
      value: dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequestsToHclTerraform(struct!.reviewRequests),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequests",
    },
    rules: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRulesToHclTerraform, false)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRulesList",
    },
    spiffe: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenySpiffeToHclTerraform, false)(struct!.spiffe),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenySpiffeList",
    },
    windows_desktop_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.windowsDesktopLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    windows_desktop_labels_expression: {
      value: cdktf.stringToHclTerraform(struct!.windowsDesktopLabelsExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    windows_desktop_logins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.windowsDesktopLogins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDeny | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.appLabels = this._appLabels;
    }
    if (this._appLabelsExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.appLabelsExpression = this._appLabelsExpression;
    }
    if (this._awsRoleArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRoleArns = this._awsRoleArns;
    }
    if (this._azureIdentities !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureIdentities = this._azureIdentities;
    }
    if (this._clusterLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterLabels = this._clusterLabels;
    }
    if (this._clusterLabelsExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterLabelsExpression = this._clusterLabelsExpression;
    }
    if (this._dbLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbLabels = this._dbLabels;
    }
    if (this._dbLabelsExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbLabelsExpression = this._dbLabelsExpression;
    }
    if (this._dbNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbNames = this._dbNames;
    }
    if (this._dbPermissions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbPermissions = this._dbPermissions?.internalValue;
    }
    if (this._dbRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbRoles = this._dbRoles;
    }
    if (this._dbServiceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbServiceLabels = this._dbServiceLabels;
    }
    if (this._dbServiceLabelsExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbServiceLabelsExpression = this._dbServiceLabelsExpression;
    }
    if (this._dbUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbUsers = this._dbUsers;
    }
    if (this._desktopGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.desktopGroups = this._desktopGroups;
    }
    if (this._gcpServiceAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpServiceAccounts = this._gcpServiceAccounts;
    }
    if (this._groupLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupLabels = this._groupLabels;
    }
    if (this._groupLabelsExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupLabelsExpression = this._groupLabelsExpression;
    }
    if (this._hostGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostGroups = this._hostGroups;
    }
    if (this._hostSudoers !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostSudoers = this._hostSudoers;
    }
    if (this._impersonate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.impersonate = this._impersonate?.internalValue;
    }
    if (this._joinSessions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinSessions = this._joinSessions?.internalValue;
    }
    if (this._kubernetesGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesGroups = this._kubernetesGroups;
    }
    if (this._kubernetesLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesLabels = this._kubernetesLabels;
    }
    if (this._kubernetesLabelsExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesLabelsExpression = this._kubernetesLabelsExpression;
    }
    if (this._kubernetesResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesResources = this._kubernetesResources?.internalValue;
    }
    if (this._kubernetesUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesUsers = this._kubernetesUsers;
    }
    if (this._logins !== undefined) {
      hasAnyValues = true;
      internalValueResult.logins = this._logins;
    }
    if (this._nodeLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLabels = this._nodeLabels;
    }
    if (this._nodeLabelsExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLabelsExpression = this._nodeLabelsExpression;
    }
    if (this._request?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request?.internalValue;
    }
    if (this._requireSessionJoin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireSessionJoin = this._requireSessionJoin?.internalValue;
    }
    if (this._reviewRequests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewRequests = this._reviewRequests?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._spiffe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spiffe = this._spiffe?.internalValue;
    }
    if (this._windowsDesktopLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsDesktopLabels = this._windowsDesktopLabels;
    }
    if (this._windowsDesktopLabelsExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsDesktopLabelsExpression = this._windowsDesktopLabelsExpression;
    }
    if (this._windowsDesktopLogins !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsDesktopLogins = this._windowsDesktopLogins;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDeny | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appLabels = undefined;
      this._appLabelsExpression = undefined;
      this._awsRoleArns = undefined;
      this._azureIdentities = undefined;
      this._clusterLabels = undefined;
      this._clusterLabelsExpression = undefined;
      this._dbLabels = undefined;
      this._dbLabelsExpression = undefined;
      this._dbNames = undefined;
      this._dbPermissions.internalValue = undefined;
      this._dbRoles = undefined;
      this._dbServiceLabels = undefined;
      this._dbServiceLabelsExpression = undefined;
      this._dbUsers = undefined;
      this._desktopGroups = undefined;
      this._gcpServiceAccounts = undefined;
      this._groupLabels = undefined;
      this._groupLabelsExpression = undefined;
      this._hostGroups = undefined;
      this._hostSudoers = undefined;
      this._impersonate.internalValue = undefined;
      this._joinSessions.internalValue = undefined;
      this._kubernetesGroups = undefined;
      this._kubernetesLabels = undefined;
      this._kubernetesLabelsExpression = undefined;
      this._kubernetesResources.internalValue = undefined;
      this._kubernetesUsers = undefined;
      this._logins = undefined;
      this._nodeLabels = undefined;
      this._nodeLabelsExpression = undefined;
      this._request.internalValue = undefined;
      this._requireSessionJoin.internalValue = undefined;
      this._reviewRequests.internalValue = undefined;
      this._rules.internalValue = undefined;
      this._spiffe.internalValue = undefined;
      this._windowsDesktopLabels = undefined;
      this._windowsDesktopLabelsExpression = undefined;
      this._windowsDesktopLogins = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appLabels = value.appLabels;
      this._appLabelsExpression = value.appLabelsExpression;
      this._awsRoleArns = value.awsRoleArns;
      this._azureIdentities = value.azureIdentities;
      this._clusterLabels = value.clusterLabels;
      this._clusterLabelsExpression = value.clusterLabelsExpression;
      this._dbLabels = value.dbLabels;
      this._dbLabelsExpression = value.dbLabelsExpression;
      this._dbNames = value.dbNames;
      this._dbPermissions.internalValue = value.dbPermissions;
      this._dbRoles = value.dbRoles;
      this._dbServiceLabels = value.dbServiceLabels;
      this._dbServiceLabelsExpression = value.dbServiceLabelsExpression;
      this._dbUsers = value.dbUsers;
      this._desktopGroups = value.desktopGroups;
      this._gcpServiceAccounts = value.gcpServiceAccounts;
      this._groupLabels = value.groupLabels;
      this._groupLabelsExpression = value.groupLabelsExpression;
      this._hostGroups = value.hostGroups;
      this._hostSudoers = value.hostSudoers;
      this._impersonate.internalValue = value.impersonate;
      this._joinSessions.internalValue = value.joinSessions;
      this._kubernetesGroups = value.kubernetesGroups;
      this._kubernetesLabels = value.kubernetesLabels;
      this._kubernetesLabelsExpression = value.kubernetesLabelsExpression;
      this._kubernetesResources.internalValue = value.kubernetesResources;
      this._kubernetesUsers = value.kubernetesUsers;
      this._logins = value.logins;
      this._nodeLabels = value.nodeLabels;
      this._nodeLabelsExpression = value.nodeLabelsExpression;
      this._request.internalValue = value.request;
      this._requireSessionJoin.internalValue = value.requireSessionJoin;
      this._reviewRequests.internalValue = value.reviewRequests;
      this._rules.internalValue = value.rules;
      this._spiffe.internalValue = value.spiffe;
      this._windowsDesktopLabels = value.windowsDesktopLabels;
      this._windowsDesktopLabelsExpression = value.windowsDesktopLabelsExpression;
      this._windowsDesktopLogins = value.windowsDesktopLogins;
    }
  }

  // app_labels - computed: false, optional: true, required: false
  private _appLabels?: { [key: string]: string }; 
  public get appLabels() {
    return this.getStringMapAttribute('app_labels');
  }
  public set appLabels(value: { [key: string]: string }) {
    this._appLabels = value;
  }
  public resetAppLabels() {
    this._appLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLabelsInput() {
    return this._appLabels;
  }

  // app_labels_expression - computed: false, optional: true, required: false
  private _appLabelsExpression?: string; 
  public get appLabelsExpression() {
    return this.getStringAttribute('app_labels_expression');
  }
  public set appLabelsExpression(value: string) {
    this._appLabelsExpression = value;
  }
  public resetAppLabelsExpression() {
    this._appLabelsExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLabelsExpressionInput() {
    return this._appLabelsExpression;
  }

  // aws_role_arns - computed: false, optional: true, required: false
  private _awsRoleArns?: string[]; 
  public get awsRoleArns() {
    return this.getListAttribute('aws_role_arns');
  }
  public set awsRoleArns(value: string[]) {
    this._awsRoleArns = value;
  }
  public resetAwsRoleArns() {
    this._awsRoleArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRoleArnsInput() {
    return this._awsRoleArns;
  }

  // azure_identities - computed: false, optional: true, required: false
  private _azureIdentities?: string[]; 
  public get azureIdentities() {
    return this.getListAttribute('azure_identities');
  }
  public set azureIdentities(value: string[]) {
    this._azureIdentities = value;
  }
  public resetAzureIdentities() {
    this._azureIdentities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureIdentitiesInput() {
    return this._azureIdentities;
  }

  // cluster_labels - computed: false, optional: true, required: false
  private _clusterLabels?: { [key: string]: string }; 
  public get clusterLabels() {
    return this.getStringMapAttribute('cluster_labels');
  }
  public set clusterLabels(value: { [key: string]: string }) {
    this._clusterLabels = value;
  }
  public resetClusterLabels() {
    this._clusterLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLabelsInput() {
    return this._clusterLabels;
  }

  // cluster_labels_expression - computed: false, optional: true, required: false
  private _clusterLabelsExpression?: string; 
  public get clusterLabelsExpression() {
    return this.getStringAttribute('cluster_labels_expression');
  }
  public set clusterLabelsExpression(value: string) {
    this._clusterLabelsExpression = value;
  }
  public resetClusterLabelsExpression() {
    this._clusterLabelsExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLabelsExpressionInput() {
    return this._clusterLabelsExpression;
  }

  // db_labels - computed: false, optional: true, required: false
  private _dbLabels?: { [key: string]: string }; 
  public get dbLabels() {
    return this.getStringMapAttribute('db_labels');
  }
  public set dbLabels(value: { [key: string]: string }) {
    this._dbLabels = value;
  }
  public resetDbLabels() {
    this._dbLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbLabelsInput() {
    return this._dbLabels;
  }

  // db_labels_expression - computed: false, optional: true, required: false
  private _dbLabelsExpression?: string; 
  public get dbLabelsExpression() {
    return this.getStringAttribute('db_labels_expression');
  }
  public set dbLabelsExpression(value: string) {
    this._dbLabelsExpression = value;
  }
  public resetDbLabelsExpression() {
    this._dbLabelsExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbLabelsExpressionInput() {
    return this._dbLabelsExpression;
  }

  // db_names - computed: false, optional: true, required: false
  private _dbNames?: string[]; 
  public get dbNames() {
    return this.getListAttribute('db_names');
  }
  public set dbNames(value: string[]) {
    this._dbNames = value;
  }
  public resetDbNames() {
    this._dbNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNamesInput() {
    return this._dbNames;
  }

  // db_permissions - computed: false, optional: true, required: false
  private _dbPermissions = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyDbPermissionsList(this, "db_permissions", false);
  public get dbPermissions() {
    return this._dbPermissions;
  }
  public putDbPermissions(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyDbPermissions[] | cdktf.IResolvable) {
    this._dbPermissions.internalValue = value;
  }
  public resetDbPermissions() {
    this._dbPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbPermissionsInput() {
    return this._dbPermissions.internalValue;
  }

  // db_roles - computed: false, optional: true, required: false
  private _dbRoles?: string[]; 
  public get dbRoles() {
    return this.getListAttribute('db_roles');
  }
  public set dbRoles(value: string[]) {
    this._dbRoles = value;
  }
  public resetDbRoles() {
    this._dbRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbRolesInput() {
    return this._dbRoles;
  }

  // db_service_labels - computed: false, optional: true, required: false
  private _dbServiceLabels?: { [key: string]: string }; 
  public get dbServiceLabels() {
    return this.getStringMapAttribute('db_service_labels');
  }
  public set dbServiceLabels(value: { [key: string]: string }) {
    this._dbServiceLabels = value;
  }
  public resetDbServiceLabels() {
    this._dbServiceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbServiceLabelsInput() {
    return this._dbServiceLabels;
  }

  // db_service_labels_expression - computed: false, optional: true, required: false
  private _dbServiceLabelsExpression?: string; 
  public get dbServiceLabelsExpression() {
    return this.getStringAttribute('db_service_labels_expression');
  }
  public set dbServiceLabelsExpression(value: string) {
    this._dbServiceLabelsExpression = value;
  }
  public resetDbServiceLabelsExpression() {
    this._dbServiceLabelsExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbServiceLabelsExpressionInput() {
    return this._dbServiceLabelsExpression;
  }

  // db_users - computed: false, optional: true, required: false
  private _dbUsers?: string[]; 
  public get dbUsers() {
    return this.getListAttribute('db_users');
  }
  public set dbUsers(value: string[]) {
    this._dbUsers = value;
  }
  public resetDbUsers() {
    this._dbUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUsersInput() {
    return this._dbUsers;
  }

  // desktop_groups - computed: false, optional: true, required: false
  private _desktopGroups?: string[]; 
  public get desktopGroups() {
    return this.getListAttribute('desktop_groups');
  }
  public set desktopGroups(value: string[]) {
    this._desktopGroups = value;
  }
  public resetDesktopGroups() {
    this._desktopGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desktopGroupsInput() {
    return this._desktopGroups;
  }

  // gcp_service_accounts - computed: false, optional: true, required: false
  private _gcpServiceAccounts?: string[]; 
  public get gcpServiceAccounts() {
    return this.getListAttribute('gcp_service_accounts');
  }
  public set gcpServiceAccounts(value: string[]) {
    this._gcpServiceAccounts = value;
  }
  public resetGcpServiceAccounts() {
    this._gcpServiceAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceAccountsInput() {
    return this._gcpServiceAccounts;
  }

  // group_labels - computed: false, optional: true, required: false
  private _groupLabels?: { [key: string]: string }; 
  public get groupLabels() {
    return this.getStringMapAttribute('group_labels');
  }
  public set groupLabels(value: { [key: string]: string }) {
    this._groupLabels = value;
  }
  public resetGroupLabels() {
    this._groupLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupLabelsInput() {
    return this._groupLabels;
  }

  // group_labels_expression - computed: false, optional: true, required: false
  private _groupLabelsExpression?: string; 
  public get groupLabelsExpression() {
    return this.getStringAttribute('group_labels_expression');
  }
  public set groupLabelsExpression(value: string) {
    this._groupLabelsExpression = value;
  }
  public resetGroupLabelsExpression() {
    this._groupLabelsExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupLabelsExpressionInput() {
    return this._groupLabelsExpression;
  }

  // host_groups - computed: false, optional: true, required: false
  private _hostGroups?: string[]; 
  public get hostGroups() {
    return this.getListAttribute('host_groups');
  }
  public set hostGroups(value: string[]) {
    this._hostGroups = value;
  }
  public resetHostGroups() {
    this._hostGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupsInput() {
    return this._hostGroups;
  }

  // host_sudoers - computed: false, optional: true, required: false
  private _hostSudoers?: string[]; 
  public get hostSudoers() {
    return this.getListAttribute('host_sudoers');
  }
  public set hostSudoers(value: string[]) {
    this._hostSudoers = value;
  }
  public resetHostSudoers() {
    this._hostSudoers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSudoersInput() {
    return this._hostSudoers;
  }

  // impersonate - computed: false, optional: true, required: false
  private _impersonate = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyImpersonateOutputReference(this, "impersonate");
  public get impersonate() {
    return this._impersonate;
  }
  public putImpersonate(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyImpersonate) {
    this._impersonate.internalValue = value;
  }
  public resetImpersonate() {
    this._impersonate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impersonateInput() {
    return this._impersonate.internalValue;
  }

  // join_sessions - computed: false, optional: true, required: false
  private _joinSessions = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyJoinSessionsList(this, "join_sessions", false);
  public get joinSessions() {
    return this._joinSessions;
  }
  public putJoinSessions(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyJoinSessions[] | cdktf.IResolvable) {
    this._joinSessions.internalValue = value;
  }
  public resetJoinSessions() {
    this._joinSessions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinSessionsInput() {
    return this._joinSessions.internalValue;
  }

  // kubernetes_groups - computed: false, optional: true, required: false
  private _kubernetesGroups?: string[]; 
  public get kubernetesGroups() {
    return this.getListAttribute('kubernetes_groups');
  }
  public set kubernetesGroups(value: string[]) {
    this._kubernetesGroups = value;
  }
  public resetKubernetesGroups() {
    this._kubernetesGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesGroupsInput() {
    return this._kubernetesGroups;
  }

  // kubernetes_labels - computed: false, optional: true, required: false
  private _kubernetesLabels?: { [key: string]: string }; 
  public get kubernetesLabels() {
    return this.getStringMapAttribute('kubernetes_labels');
  }
  public set kubernetesLabels(value: { [key: string]: string }) {
    this._kubernetesLabels = value;
  }
  public resetKubernetesLabels() {
    this._kubernetesLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesLabelsInput() {
    return this._kubernetesLabels;
  }

  // kubernetes_labels_expression - computed: false, optional: true, required: false
  private _kubernetesLabelsExpression?: string; 
  public get kubernetesLabelsExpression() {
    return this.getStringAttribute('kubernetes_labels_expression');
  }
  public set kubernetesLabelsExpression(value: string) {
    this._kubernetesLabelsExpression = value;
  }
  public resetKubernetesLabelsExpression() {
    this._kubernetesLabelsExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesLabelsExpressionInput() {
    return this._kubernetesLabelsExpression;
  }

  // kubernetes_resources - computed: false, optional: true, required: false
  private _kubernetesResources = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyKubernetesResourcesList(this, "kubernetes_resources", false);
  public get kubernetesResources() {
    return this._kubernetesResources;
  }
  public putKubernetesResources(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyKubernetesResources[] | cdktf.IResolvable) {
    this._kubernetesResources.internalValue = value;
  }
  public resetKubernetesResources() {
    this._kubernetesResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesResourcesInput() {
    return this._kubernetesResources.internalValue;
  }

  // kubernetes_users - computed: false, optional: true, required: false
  private _kubernetesUsers?: string[]; 
  public get kubernetesUsers() {
    return this.getListAttribute('kubernetes_users');
  }
  public set kubernetesUsers(value: string[]) {
    this._kubernetesUsers = value;
  }
  public resetKubernetesUsers() {
    this._kubernetesUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesUsersInput() {
    return this._kubernetesUsers;
  }

  // logins - computed: false, optional: true, required: false
  private _logins?: string[]; 
  public get logins() {
    return this.getListAttribute('logins');
  }
  public set logins(value: string[]) {
    this._logins = value;
  }
  public resetLogins() {
    this._logins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginsInput() {
    return this._logins;
  }

  // node_labels - computed: false, optional: true, required: false
  private _nodeLabels?: { [key: string]: string }; 
  public get nodeLabels() {
    return this.getStringMapAttribute('node_labels');
  }
  public set nodeLabels(value: { [key: string]: string }) {
    this._nodeLabels = value;
  }
  public resetNodeLabels() {
    this._nodeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLabelsInput() {
    return this._nodeLabels;
  }

  // node_labels_expression - computed: false, optional: true, required: false
  private _nodeLabelsExpression?: string; 
  public get nodeLabelsExpression() {
    return this.getStringAttribute('node_labels_expression');
  }
  public set nodeLabelsExpression(value: string) {
    this._nodeLabelsExpression = value;
  }
  public resetNodeLabelsExpression() {
    this._nodeLabelsExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLabelsExpressionInput() {
    return this._nodeLabelsExpression;
  }

  // request - computed: false, optional: true, required: false
  private _request = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequest) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // require_session_join - computed: false, optional: true, required: false
  private _requireSessionJoin = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequireSessionJoinList(this, "require_session_join", false);
  public get requireSessionJoin() {
    return this._requireSessionJoin;
  }
  public putRequireSessionJoin(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRequireSessionJoin[] | cdktf.IResolvable) {
    this._requireSessionJoin.internalValue = value;
  }
  public resetRequireSessionJoin() {
    this._requireSessionJoin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSessionJoinInput() {
    return this._requireSessionJoin.internalValue;
  }

  // review_requests - computed: false, optional: true, required: false
  private _reviewRequests = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequestsOutputReference(this, "review_requests");
  public get reviewRequests() {
    return this._reviewRequests;
  }
  public putReviewRequests(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyReviewRequests) {
    this._reviewRequests.internalValue = value;
  }
  public resetReviewRequests() {
    this._reviewRequests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewRequestsInput() {
    return this._reviewRequests.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // spiffe - computed: false, optional: true, required: false
  private _spiffe = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenySpiffeList(this, "spiffe", false);
  public get spiffe() {
    return this._spiffe;
  }
  public putSpiffe(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenySpiffe[] | cdktf.IResolvable) {
    this._spiffe.internalValue = value;
  }
  public resetSpiffe() {
    this._spiffe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spiffeInput() {
    return this._spiffe.internalValue;
  }

  // windows_desktop_labels - computed: false, optional: true, required: false
  private _windowsDesktopLabels?: { [key: string]: string }; 
  public get windowsDesktopLabels() {
    return this.getStringMapAttribute('windows_desktop_labels');
  }
  public set windowsDesktopLabels(value: { [key: string]: string }) {
    this._windowsDesktopLabels = value;
  }
  public resetWindowsDesktopLabels() {
    this._windowsDesktopLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsDesktopLabelsInput() {
    return this._windowsDesktopLabels;
  }

  // windows_desktop_labels_expression - computed: false, optional: true, required: false
  private _windowsDesktopLabelsExpression?: string; 
  public get windowsDesktopLabelsExpression() {
    return this.getStringAttribute('windows_desktop_labels_expression');
  }
  public set windowsDesktopLabelsExpression(value: string) {
    this._windowsDesktopLabelsExpression = value;
  }
  public resetWindowsDesktopLabelsExpression() {
    this._windowsDesktopLabelsExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsDesktopLabelsExpressionInput() {
    return this._windowsDesktopLabelsExpression;
  }

  // windows_desktop_logins - computed: false, optional: true, required: false
  private _windowsDesktopLogins?: string[]; 
  public get windowsDesktopLogins() {
    return this.getListAttribute('windows_desktop_logins');
  }
  public set windowsDesktopLogins(value: string[]) {
    this._windowsDesktopLogins = value;
  }
  public resetWindowsDesktopLogins() {
    this._windowsDesktopLogins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsDesktopLoginsInput() {
    return this._windowsDesktopLogins;
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsCertExtensions {
  /**
  * Mode is the type of extension to be used -- currently critical-option is not supported. 0 is 'extension'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#mode DataK8SResourcesTeleportDevTeleportRoleV5Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Name specifies the key to be used in the cert extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#name DataK8SResourcesTeleportDevTeleportRoleV5Manifest#name}
  */
  readonly name?: string;
  /**
  * Type represents the certificate type being extended, only ssh is supported at this time. 0 is 'ssh'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#type DataK8SResourcesTeleportDevTeleportRoleV5Manifest#type}
  */
  readonly type?: string;
  /**
  * Value specifies the value to be used in the cert extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#value DataK8SResourcesTeleportDevTeleportRoleV5Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsCertExtensionsToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsCertExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsCertExtensionsToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsCertExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsCertExtensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsCertExtensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsCertExtensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsCertExtensionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsCertExtensions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsCertExtensionsOutputReference {
    return new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsCertExtensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdpSaml {
  /**
  * Enabled is set to true if this option allows access to the Teleport SAML IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#enabled DataK8SResourcesTeleportDevTeleportRoleV5Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdpSamlToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdpSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdpSamlToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdpSaml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdpSamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdpSaml | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdpSaml | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdp {
  /**
  * SAML are options related to the Teleport SAML IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#saml DataK8SResourcesTeleportDevTeleportRoleV5Manifest#saml}
  */
  readonly saml?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdpSaml;
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdpToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    saml: dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdpSamlToTerraform(struct!.saml),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdpToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    saml: {
      value: dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdpSamlToHclTerraform(struct!.saml),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdpSaml",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._saml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saml = this._saml?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._saml.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._saml.internalValue = value.saml;
    }
  }

  // saml - computed: false, optional: true, required: false
  private _saml = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdpSamlOutputReference(this, "saml");
  public get saml() {
    return this._saml;
  }
  public putSaml(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdpSaml) {
    this._saml.internalValue = value;
  }
  public resetSaml() {
    this._saml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml.internalValue;
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsRecordSession {
  /**
  * Default indicates the default value for the services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#default DataK8SResourcesTeleportDevTeleportRoleV5Manifest#default}
  */
  readonly default?: string;
  /**
  * Desktop indicates whether desktop sessions should be recorded. It defaults to true unless explicitly set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#desktop DataK8SResourcesTeleportDevTeleportRoleV5Manifest#desktop}
  */
  readonly desktop?: boolean | cdktf.IResolvable;
  /**
  * SSH indicates the session mode used on SSH sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#ssh DataK8SResourcesTeleportDevTeleportRoleV5Manifest#ssh}
  */
  readonly ssh?: string;
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsRecordSessionToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsRecordSession | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    desktop: cdktf.booleanToTerraform(struct!.desktop),
    ssh: cdktf.stringToTerraform(struct!.ssh),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsRecordSessionToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsRecordSession | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    desktop: {
      value: cdktf.booleanToHclTerraform(struct!.desktop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssh: {
      value: cdktf.stringToHclTerraform(struct!.ssh),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsRecordSessionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsRecordSession | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._desktop !== undefined) {
      hasAnyValues = true;
      internalValueResult.desktop = this._desktop;
    }
    if (this._ssh !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssh = this._ssh;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsRecordSession | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._desktop = undefined;
      this._ssh = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._desktop = value.desktop;
      this._ssh = value.ssh;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // desktop - computed: false, optional: true, required: false
  private _desktop?: boolean | cdktf.IResolvable; 
  public get desktop() {
    return this.getBooleanAttribute('desktop');
  }
  public set desktop(value: boolean | cdktf.IResolvable) {
    this._desktop = value;
  }
  public resetDesktop() {
    this._desktop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desktopInput() {
    return this._desktop;
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh?: string; 
  public get ssh() {
    return this.getStringAttribute('ssh');
  }
  public set ssh(value: string) {
    this._ssh = value;
  }
  public resetSsh() {
    this._ssh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh;
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptions {
  /**
  * CertExtensions specifies the key/values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#cert_extensions DataK8SResourcesTeleportDevTeleportRoleV5Manifest#cert_extensions}
  */
  readonly certExtensions?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsCertExtensions[] | cdktf.IResolvable;
  /**
  * CertificateFormat defines the format of the user certificate to allow compatibility with older versions of OpenSSH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#cert_format DataK8SResourcesTeleportDevTeleportRoleV5Manifest#cert_format}
  */
  readonly certFormat?: string;
  /**
  * ClientIdleTimeout sets disconnect clients on idle timeout behavior, if set to 0 means do not disconnect, otherwise is set to the idle duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#client_idle_timeout DataK8SResourcesTeleportDevTeleportRoleV5Manifest#client_idle_timeout}
  */
  readonly clientIdleTimeout?: string;
  /**
  * CreateDatabaseUser enabled automatic database user creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#create_db_user DataK8SResourcesTeleportDevTeleportRoleV5Manifest#create_db_user}
  */
  readonly createDbUser?: boolean | cdktf.IResolvable;
  /**
  * CreateDatabaseUserMode allows users to be automatically created on a database when not set to off. 0 is 'unspecified', 1 is 'off', 2 is 'keep', 3 is 'best_effort_drop'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#create_db_user_mode DataK8SResourcesTeleportDevTeleportRoleV5Manifest#create_db_user_mode}
  */
  readonly createDbUserMode?: string;
  /**
  * CreateDesktopUser allows users to be automatically created on a Windows desktop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#create_desktop_user DataK8SResourcesTeleportDevTeleportRoleV5Manifest#create_desktop_user}
  */
  readonly createDesktopUser?: boolean | cdktf.IResolvable;
  /**
  * Deprecated: use CreateHostUserMode instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#create_host_user DataK8SResourcesTeleportDevTeleportRoleV5Manifest#create_host_user}
  */
  readonly createHostUser?: boolean | cdktf.IResolvable;
  /**
  * CreateHostUserDefaultShell is used to configure the default shell for newly provisioned host users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#create_host_user_default_shell DataK8SResourcesTeleportDevTeleportRoleV5Manifest#create_host_user_default_shell}
  */
  readonly createHostUserDefaultShell?: string;
  /**
  * CreateHostUserMode allows users to be automatically created on a host when not set to off. 0 is 'unspecified'; 1 is 'off'; 2 is 'drop' (removed for v15 and above), 3 is 'keep'; 4 is 'insecure-drop'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#create_host_user_mode DataK8SResourcesTeleportDevTeleportRoleV5Manifest#create_host_user_mode}
  */
  readonly createHostUserMode?: string;
  /**
  * DesktopClipboard indicates whether clipboard sharing is allowed between the user's workstation and the remote desktop. It defaults to true unless explicitly set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#desktop_clipboard DataK8SResourcesTeleportDevTeleportRoleV5Manifest#desktop_clipboard}
  */
  readonly desktopClipboard?: boolean | cdktf.IResolvable;
  /**
  * DesktopDirectorySharing indicates whether directory sharing is allowed between the user's workstation and the remote desktop. It defaults to false unless explicitly set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#desktop_directory_sharing DataK8SResourcesTeleportDevTeleportRoleV5Manifest#desktop_directory_sharing}
  */
  readonly desktopDirectorySharing?: boolean | cdktf.IResolvable;
  /**
  * DeviceTrustMode is the device authorization mode used for the resources associated with the role. See DeviceTrust.Mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#device_trust_mode DataK8SResourcesTeleportDevTeleportRoleV5Manifest#device_trust_mode}
  */
  readonly deviceTrustMode?: string;
  /**
  * DisconnectExpiredCert sets disconnect clients on expired certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#disconnect_expired_cert DataK8SResourcesTeleportDevTeleportRoleV5Manifest#disconnect_expired_cert}
  */
  readonly disconnectExpiredCert?: boolean | cdktf.IResolvable;
  /**
  * BPF defines what events to record for the BPF-based session recorder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#enhanced_recording DataK8SResourcesTeleportDevTeleportRoleV5Manifest#enhanced_recording}
  */
  readonly enhancedRecording?: string[];
  /**
  * ForwardAgent is SSH agent forwarding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#forward_agent DataK8SResourcesTeleportDevTeleportRoleV5Manifest#forward_agent}
  */
  readonly forwardAgent?: boolean | cdktf.IResolvable;
  /**
  * IDP is a set of options related to accessing IdPs within Teleport. Requires Teleport Enterprise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#idp DataK8SResourcesTeleportDevTeleportRoleV5Manifest#idp}
  */
  readonly idp?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdp;
  /**
  * Lock specifies the locking mode (strict|best_effort) to be applied with the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#lock DataK8SResourcesTeleportDevTeleportRoleV5Manifest#lock}
  */
  readonly lock?: string;
  /**
  * MaxConnections defines the maximum number of concurrent connections a user may hold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#max_connections DataK8SResourcesTeleportDevTeleportRoleV5Manifest#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * MaxKubernetesConnections defines the maximum number of concurrent Kubernetes sessions a user may hold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#max_kubernetes_connections DataK8SResourcesTeleportDevTeleportRoleV5Manifest#max_kubernetes_connections}
  */
  readonly maxKubernetesConnections?: number;
  /**
  * MaxSessionTTL defines how long a SSH session can last for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#max_session_ttl DataK8SResourcesTeleportDevTeleportRoleV5Manifest#max_session_ttl}
  */
  readonly maxSessionTtl?: string;
  /**
  * MaxSessions defines the maximum number of concurrent sessions per connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#max_sessions DataK8SResourcesTeleportDevTeleportRoleV5Manifest#max_sessions}
  */
  readonly maxSessions?: number;
  /**
  * MFAVerificationInterval optionally defines the maximum duration that can elapse between successive MFA verifications. This variable is used to ensure that users are periodically prompted to verify their identity, enhancing security by preventing prolonged sessions without re-authentication when using tsh proxy * derivatives. It's only effective if the session requires MFA. If not set, defaults to 'max_session_ttl'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#mfa_verification_interval DataK8SResourcesTeleportDevTeleportRoleV5Manifest#mfa_verification_interval}
  */
  readonly mfaVerificationInterval?: string;
  /**
  * PermitX11Forwarding authorizes use of X11 forwarding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#permit_x11_forwarding DataK8SResourcesTeleportDevTeleportRoleV5Manifest#permit_x11_forwarding}
  */
  readonly permitX11Forwarding?: boolean | cdktf.IResolvable;
  /**
  * PinSourceIP forces the same client IP for certificate generation and usage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#pin_source_ip DataK8SResourcesTeleportDevTeleportRoleV5Manifest#pin_source_ip}
  */
  readonly pinSourceIp?: boolean | cdktf.IResolvable;
  /**
  * PortForwarding defines if the certificate will have 'permit-port-forwarding' in the certificate. PortForwarding is 'yes' if not set, that's why this is a pointer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#port_forwarding DataK8SResourcesTeleportDevTeleportRoleV5Manifest#port_forwarding}
  */
  readonly portForwarding?: boolean | cdktf.IResolvable;
  /**
  * RecordDesktopSession indicates whether desktop access sessions should be recorded. It defaults to true unless explicitly set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#record_session DataK8SResourcesTeleportDevTeleportRoleV5Manifest#record_session}
  */
  readonly recordSession?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsRecordSession;
  /**
  * RequestAccess defines the request strategy (optional|note|always) where optional is the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#request_access DataK8SResourcesTeleportDevTeleportRoleV5Manifest#request_access}
  */
  readonly requestAccess?: string;
  /**
  * RequestPrompt is an optional message which tells users what they aught to request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#request_prompt DataK8SResourcesTeleportDevTeleportRoleV5Manifest#request_prompt}
  */
  readonly requestPrompt?: string;
  /**
  * RequireMFAType is the type of MFA requirement enforced for this user. 0 is 'OFF', 1 is 'SESSION', 2 is 'SESSION_AND_HARDWARE_KEY', 3 is 'HARDWARE_KEY_TOUCH', 4 is 'HARDWARE_KEY_PIN', 5 is 'HARDWARE_KEY_TOUCH_AND_PIN'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#require_session_mfa DataK8SResourcesTeleportDevTeleportRoleV5Manifest#require_session_mfa}
  */
  readonly requireSessionMfa?: string;
  /**
  * SSHFileCopy indicates whether remote file operations via SCP or SFTP are allowed over an SSH session. It defaults to true unless explicitly set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#ssh_file_copy DataK8SResourcesTeleportDevTeleportRoleV5Manifest#ssh_file_copy}
  */
  readonly sshFileCopy?: boolean | cdktf.IResolvable;
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_extensions: cdktf.listMapper(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsCertExtensionsToTerraform, false)(struct!.certExtensions),
    cert_format: cdktf.stringToTerraform(struct!.certFormat),
    client_idle_timeout: cdktf.stringToTerraform(struct!.clientIdleTimeout),
    create_db_user: cdktf.booleanToTerraform(struct!.createDbUser),
    create_db_user_mode: cdktf.stringToTerraform(struct!.createDbUserMode),
    create_desktop_user: cdktf.booleanToTerraform(struct!.createDesktopUser),
    create_host_user: cdktf.booleanToTerraform(struct!.createHostUser),
    create_host_user_default_shell: cdktf.stringToTerraform(struct!.createHostUserDefaultShell),
    create_host_user_mode: cdktf.stringToTerraform(struct!.createHostUserMode),
    desktop_clipboard: cdktf.booleanToTerraform(struct!.desktopClipboard),
    desktop_directory_sharing: cdktf.booleanToTerraform(struct!.desktopDirectorySharing),
    device_trust_mode: cdktf.stringToTerraform(struct!.deviceTrustMode),
    disconnect_expired_cert: cdktf.booleanToTerraform(struct!.disconnectExpiredCert),
    enhanced_recording: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enhancedRecording),
    forward_agent: cdktf.booleanToTerraform(struct!.forwardAgent),
    idp: dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdpToTerraform(struct!.idp),
    lock: cdktf.stringToTerraform(struct!.lock),
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_kubernetes_connections: cdktf.numberToTerraform(struct!.maxKubernetesConnections),
    max_session_ttl: cdktf.stringToTerraform(struct!.maxSessionTtl),
    max_sessions: cdktf.numberToTerraform(struct!.maxSessions),
    mfa_verification_interval: cdktf.stringToTerraform(struct!.mfaVerificationInterval),
    permit_x11_forwarding: cdktf.booleanToTerraform(struct!.permitX11Forwarding),
    pin_source_ip: cdktf.booleanToTerraform(struct!.pinSourceIp),
    port_forwarding: cdktf.booleanToTerraform(struct!.portForwarding),
    record_session: dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsRecordSessionToTerraform(struct!.recordSession),
    request_access: cdktf.stringToTerraform(struct!.requestAccess),
    request_prompt: cdktf.stringToTerraform(struct!.requestPrompt),
    require_session_mfa: cdktf.stringToTerraform(struct!.requireSessionMfa),
    ssh_file_copy: cdktf.booleanToTerraform(struct!.sshFileCopy),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_extensions: {
      value: cdktf.listMapperHcl(dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsCertExtensionsToHclTerraform, false)(struct!.certExtensions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsCertExtensionsList",
    },
    cert_format: {
      value: cdktf.stringToHclTerraform(struct!.certFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_idle_timeout: {
      value: cdktf.stringToHclTerraform(struct!.clientIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_db_user: {
      value: cdktf.booleanToHclTerraform(struct!.createDbUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    create_db_user_mode: {
      value: cdktf.stringToHclTerraform(struct!.createDbUserMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_desktop_user: {
      value: cdktf.booleanToHclTerraform(struct!.createDesktopUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    create_host_user: {
      value: cdktf.booleanToHclTerraform(struct!.createHostUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    create_host_user_default_shell: {
      value: cdktf.stringToHclTerraform(struct!.createHostUserDefaultShell),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_host_user_mode: {
      value: cdktf.stringToHclTerraform(struct!.createHostUserMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    desktop_clipboard: {
      value: cdktf.booleanToHclTerraform(struct!.desktopClipboard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    desktop_directory_sharing: {
      value: cdktf.booleanToHclTerraform(struct!.desktopDirectorySharing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device_trust_mode: {
      value: cdktf.stringToHclTerraform(struct!.deviceTrustMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disconnect_expired_cert: {
      value: cdktf.booleanToHclTerraform(struct!.disconnectExpiredCert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enhanced_recording: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enhancedRecording),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    forward_agent: {
      value: cdktf.booleanToHclTerraform(struct!.forwardAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idp: {
      value: dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdpToHclTerraform(struct!.idp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdp",
    },
    lock: {
      value: cdktf.stringToHclTerraform(struct!.lock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_kubernetes_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxKubernetesConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_session_ttl: {
      value: cdktf.stringToHclTerraform(struct!.maxSessionTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_sessions: {
      value: cdktf.numberToHclTerraform(struct!.maxSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mfa_verification_interval: {
      value: cdktf.stringToHclTerraform(struct!.mfaVerificationInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_x11_forwarding: {
      value: cdktf.booleanToHclTerraform(struct!.permitX11Forwarding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pin_source_ip: {
      value: cdktf.booleanToHclTerraform(struct!.pinSourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port_forwarding: {
      value: cdktf.booleanToHclTerraform(struct!.portForwarding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    record_session: {
      value: dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsRecordSessionToHclTerraform(struct!.recordSession),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsRecordSession",
    },
    request_access: {
      value: cdktf.stringToHclTerraform(struct!.requestAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_prompt: {
      value: cdktf.stringToHclTerraform(struct!.requestPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_session_mfa: {
      value: cdktf.stringToHclTerraform(struct!.requireSessionMfa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_file_copy: {
      value: cdktf.booleanToHclTerraform(struct!.sshFileCopy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certExtensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certExtensions = this._certExtensions?.internalValue;
    }
    if (this._certFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFormat = this._certFormat;
    }
    if (this._clientIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIdleTimeout = this._clientIdleTimeout;
    }
    if (this._createDbUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.createDbUser = this._createDbUser;
    }
    if (this._createDbUserMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.createDbUserMode = this._createDbUserMode;
    }
    if (this._createDesktopUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.createDesktopUser = this._createDesktopUser;
    }
    if (this._createHostUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.createHostUser = this._createHostUser;
    }
    if (this._createHostUserDefaultShell !== undefined) {
      hasAnyValues = true;
      internalValueResult.createHostUserDefaultShell = this._createHostUserDefaultShell;
    }
    if (this._createHostUserMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.createHostUserMode = this._createHostUserMode;
    }
    if (this._desktopClipboard !== undefined) {
      hasAnyValues = true;
      internalValueResult.desktopClipboard = this._desktopClipboard;
    }
    if (this._desktopDirectorySharing !== undefined) {
      hasAnyValues = true;
      internalValueResult.desktopDirectorySharing = this._desktopDirectorySharing;
    }
    if (this._deviceTrustMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceTrustMode = this._deviceTrustMode;
    }
    if (this._disconnectExpiredCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.disconnectExpiredCert = this._disconnectExpiredCert;
    }
    if (this._enhancedRecording !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedRecording = this._enhancedRecording;
    }
    if (this._forwardAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardAgent = this._forwardAgent;
    }
    if (this._idp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idp = this._idp?.internalValue;
    }
    if (this._lock !== undefined) {
      hasAnyValues = true;
      internalValueResult.lock = this._lock;
    }
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._maxKubernetesConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxKubernetesConnections = this._maxKubernetesConnections;
    }
    if (this._maxSessionTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSessionTtl = this._maxSessionTtl;
    }
    if (this._maxSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSessions = this._maxSessions;
    }
    if (this._mfaVerificationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfaVerificationInterval = this._mfaVerificationInterval;
    }
    if (this._permitX11Forwarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitX11Forwarding = this._permitX11Forwarding;
    }
    if (this._pinSourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.pinSourceIp = this._pinSourceIp;
    }
    if (this._portForwarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.portForwarding = this._portForwarding;
    }
    if (this._recordSession?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordSession = this._recordSession?.internalValue;
    }
    if (this._requestAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestAccess = this._requestAccess;
    }
    if (this._requestPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPrompt = this._requestPrompt;
    }
    if (this._requireSessionMfa !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireSessionMfa = this._requireSessionMfa;
    }
    if (this._sshFileCopy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshFileCopy = this._sshFileCopy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certExtensions.internalValue = undefined;
      this._certFormat = undefined;
      this._clientIdleTimeout = undefined;
      this._createDbUser = undefined;
      this._createDbUserMode = undefined;
      this._createDesktopUser = undefined;
      this._createHostUser = undefined;
      this._createHostUserDefaultShell = undefined;
      this._createHostUserMode = undefined;
      this._desktopClipboard = undefined;
      this._desktopDirectorySharing = undefined;
      this._deviceTrustMode = undefined;
      this._disconnectExpiredCert = undefined;
      this._enhancedRecording = undefined;
      this._forwardAgent = undefined;
      this._idp.internalValue = undefined;
      this._lock = undefined;
      this._maxConnections = undefined;
      this._maxKubernetesConnections = undefined;
      this._maxSessionTtl = undefined;
      this._maxSessions = undefined;
      this._mfaVerificationInterval = undefined;
      this._permitX11Forwarding = undefined;
      this._pinSourceIp = undefined;
      this._portForwarding = undefined;
      this._recordSession.internalValue = undefined;
      this._requestAccess = undefined;
      this._requestPrompt = undefined;
      this._requireSessionMfa = undefined;
      this._sshFileCopy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certExtensions.internalValue = value.certExtensions;
      this._certFormat = value.certFormat;
      this._clientIdleTimeout = value.clientIdleTimeout;
      this._createDbUser = value.createDbUser;
      this._createDbUserMode = value.createDbUserMode;
      this._createDesktopUser = value.createDesktopUser;
      this._createHostUser = value.createHostUser;
      this._createHostUserDefaultShell = value.createHostUserDefaultShell;
      this._createHostUserMode = value.createHostUserMode;
      this._desktopClipboard = value.desktopClipboard;
      this._desktopDirectorySharing = value.desktopDirectorySharing;
      this._deviceTrustMode = value.deviceTrustMode;
      this._disconnectExpiredCert = value.disconnectExpiredCert;
      this._enhancedRecording = value.enhancedRecording;
      this._forwardAgent = value.forwardAgent;
      this._idp.internalValue = value.idp;
      this._lock = value.lock;
      this._maxConnections = value.maxConnections;
      this._maxKubernetesConnections = value.maxKubernetesConnections;
      this._maxSessionTtl = value.maxSessionTtl;
      this._maxSessions = value.maxSessions;
      this._mfaVerificationInterval = value.mfaVerificationInterval;
      this._permitX11Forwarding = value.permitX11Forwarding;
      this._pinSourceIp = value.pinSourceIp;
      this._portForwarding = value.portForwarding;
      this._recordSession.internalValue = value.recordSession;
      this._requestAccess = value.requestAccess;
      this._requestPrompt = value.requestPrompt;
      this._requireSessionMfa = value.requireSessionMfa;
      this._sshFileCopy = value.sshFileCopy;
    }
  }

  // cert_extensions - computed: false, optional: true, required: false
  private _certExtensions = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsCertExtensionsList(this, "cert_extensions", false);
  public get certExtensions() {
    return this._certExtensions;
  }
  public putCertExtensions(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsCertExtensions[] | cdktf.IResolvable) {
    this._certExtensions.internalValue = value;
  }
  public resetCertExtensions() {
    this._certExtensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certExtensionsInput() {
    return this._certExtensions.internalValue;
  }

  // cert_format - computed: false, optional: true, required: false
  private _certFormat?: string; 
  public get certFormat() {
    return this.getStringAttribute('cert_format');
  }
  public set certFormat(value: string) {
    this._certFormat = value;
  }
  public resetCertFormat() {
    this._certFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFormatInput() {
    return this._certFormat;
  }

  // client_idle_timeout - computed: false, optional: true, required: false
  private _clientIdleTimeout?: string; 
  public get clientIdleTimeout() {
    return this.getStringAttribute('client_idle_timeout');
  }
  public set clientIdleTimeout(value: string) {
    this._clientIdleTimeout = value;
  }
  public resetClientIdleTimeout() {
    this._clientIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdleTimeoutInput() {
    return this._clientIdleTimeout;
  }

  // create_db_user - computed: false, optional: true, required: false
  private _createDbUser?: boolean | cdktf.IResolvable; 
  public get createDbUser() {
    return this.getBooleanAttribute('create_db_user');
  }
  public set createDbUser(value: boolean | cdktf.IResolvable) {
    this._createDbUser = value;
  }
  public resetCreateDbUser() {
    this._createDbUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDbUserInput() {
    return this._createDbUser;
  }

  // create_db_user_mode - computed: false, optional: true, required: false
  private _createDbUserMode?: string; 
  public get createDbUserMode() {
    return this.getStringAttribute('create_db_user_mode');
  }
  public set createDbUserMode(value: string) {
    this._createDbUserMode = value;
  }
  public resetCreateDbUserMode() {
    this._createDbUserMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDbUserModeInput() {
    return this._createDbUserMode;
  }

  // create_desktop_user - computed: false, optional: true, required: false
  private _createDesktopUser?: boolean | cdktf.IResolvable; 
  public get createDesktopUser() {
    return this.getBooleanAttribute('create_desktop_user');
  }
  public set createDesktopUser(value: boolean | cdktf.IResolvable) {
    this._createDesktopUser = value;
  }
  public resetCreateDesktopUser() {
    this._createDesktopUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDesktopUserInput() {
    return this._createDesktopUser;
  }

  // create_host_user - computed: false, optional: true, required: false
  private _createHostUser?: boolean | cdktf.IResolvable; 
  public get createHostUser() {
    return this.getBooleanAttribute('create_host_user');
  }
  public set createHostUser(value: boolean | cdktf.IResolvable) {
    this._createHostUser = value;
  }
  public resetCreateHostUser() {
    this._createHostUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createHostUserInput() {
    return this._createHostUser;
  }

  // create_host_user_default_shell - computed: false, optional: true, required: false
  private _createHostUserDefaultShell?: string; 
  public get createHostUserDefaultShell() {
    return this.getStringAttribute('create_host_user_default_shell');
  }
  public set createHostUserDefaultShell(value: string) {
    this._createHostUserDefaultShell = value;
  }
  public resetCreateHostUserDefaultShell() {
    this._createHostUserDefaultShell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createHostUserDefaultShellInput() {
    return this._createHostUserDefaultShell;
  }

  // create_host_user_mode - computed: false, optional: true, required: false
  private _createHostUserMode?: string; 
  public get createHostUserMode() {
    return this.getStringAttribute('create_host_user_mode');
  }
  public set createHostUserMode(value: string) {
    this._createHostUserMode = value;
  }
  public resetCreateHostUserMode() {
    this._createHostUserMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createHostUserModeInput() {
    return this._createHostUserMode;
  }

  // desktop_clipboard - computed: false, optional: true, required: false
  private _desktopClipboard?: boolean | cdktf.IResolvable; 
  public get desktopClipboard() {
    return this.getBooleanAttribute('desktop_clipboard');
  }
  public set desktopClipboard(value: boolean | cdktf.IResolvable) {
    this._desktopClipboard = value;
  }
  public resetDesktopClipboard() {
    this._desktopClipboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desktopClipboardInput() {
    return this._desktopClipboard;
  }

  // desktop_directory_sharing - computed: false, optional: true, required: false
  private _desktopDirectorySharing?: boolean | cdktf.IResolvable; 
  public get desktopDirectorySharing() {
    return this.getBooleanAttribute('desktop_directory_sharing');
  }
  public set desktopDirectorySharing(value: boolean | cdktf.IResolvable) {
    this._desktopDirectorySharing = value;
  }
  public resetDesktopDirectorySharing() {
    this._desktopDirectorySharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desktopDirectorySharingInput() {
    return this._desktopDirectorySharing;
  }

  // device_trust_mode - computed: false, optional: true, required: false
  private _deviceTrustMode?: string; 
  public get deviceTrustMode() {
    return this.getStringAttribute('device_trust_mode');
  }
  public set deviceTrustMode(value: string) {
    this._deviceTrustMode = value;
  }
  public resetDeviceTrustMode() {
    this._deviceTrustMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTrustModeInput() {
    return this._deviceTrustMode;
  }

  // disconnect_expired_cert - computed: false, optional: true, required: false
  private _disconnectExpiredCert?: boolean | cdktf.IResolvable; 
  public get disconnectExpiredCert() {
    return this.getBooleanAttribute('disconnect_expired_cert');
  }
  public set disconnectExpiredCert(value: boolean | cdktf.IResolvable) {
    this._disconnectExpiredCert = value;
  }
  public resetDisconnectExpiredCert() {
    this._disconnectExpiredCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectExpiredCertInput() {
    return this._disconnectExpiredCert;
  }

  // enhanced_recording - computed: false, optional: true, required: false
  private _enhancedRecording?: string[]; 
  public get enhancedRecording() {
    return this.getListAttribute('enhanced_recording');
  }
  public set enhancedRecording(value: string[]) {
    this._enhancedRecording = value;
  }
  public resetEnhancedRecording() {
    this._enhancedRecording = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedRecordingInput() {
    return this._enhancedRecording;
  }

  // forward_agent - computed: false, optional: true, required: false
  private _forwardAgent?: boolean | cdktf.IResolvable; 
  public get forwardAgent() {
    return this.getBooleanAttribute('forward_agent');
  }
  public set forwardAgent(value: boolean | cdktf.IResolvable) {
    this._forwardAgent = value;
  }
  public resetForwardAgent() {
    this._forwardAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardAgentInput() {
    return this._forwardAgent;
  }

  // idp - computed: false, optional: true, required: false
  private _idp = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdpOutputReference(this, "idp");
  public get idp() {
    return this._idp;
  }
  public putIdp(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsIdp) {
    this._idp.internalValue = value;
  }
  public resetIdp() {
    this._idp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpInput() {
    return this._idp.internalValue;
  }

  // lock - computed: false, optional: true, required: false
  private _lock?: string; 
  public get lock() {
    return this.getStringAttribute('lock');
  }
  public set lock(value: string) {
    this._lock = value;
  }
  public resetLock() {
    this._lock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockInput() {
    return this._lock;
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_kubernetes_connections - computed: false, optional: true, required: false
  private _maxKubernetesConnections?: number; 
  public get maxKubernetesConnections() {
    return this.getNumberAttribute('max_kubernetes_connections');
  }
  public set maxKubernetesConnections(value: number) {
    this._maxKubernetesConnections = value;
  }
  public resetMaxKubernetesConnections() {
    this._maxKubernetesConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxKubernetesConnectionsInput() {
    return this._maxKubernetesConnections;
  }

  // max_session_ttl - computed: false, optional: true, required: false
  private _maxSessionTtl?: string; 
  public get maxSessionTtl() {
    return this.getStringAttribute('max_session_ttl');
  }
  public set maxSessionTtl(value: string) {
    this._maxSessionTtl = value;
  }
  public resetMaxSessionTtl() {
    this._maxSessionTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSessionTtlInput() {
    return this._maxSessionTtl;
  }

  // max_sessions - computed: false, optional: true, required: false
  private _maxSessions?: number; 
  public get maxSessions() {
    return this.getNumberAttribute('max_sessions');
  }
  public set maxSessions(value: number) {
    this._maxSessions = value;
  }
  public resetMaxSessions() {
    this._maxSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSessionsInput() {
    return this._maxSessions;
  }

  // mfa_verification_interval - computed: false, optional: true, required: false
  private _mfaVerificationInterval?: string; 
  public get mfaVerificationInterval() {
    return this.getStringAttribute('mfa_verification_interval');
  }
  public set mfaVerificationInterval(value: string) {
    this._mfaVerificationInterval = value;
  }
  public resetMfaVerificationInterval() {
    this._mfaVerificationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaVerificationIntervalInput() {
    return this._mfaVerificationInterval;
  }

  // permit_x11_forwarding - computed: false, optional: true, required: false
  private _permitX11Forwarding?: boolean | cdktf.IResolvable; 
  public get permitX11Forwarding() {
    return this.getBooleanAttribute('permit_x11_forwarding');
  }
  public set permitX11Forwarding(value: boolean | cdktf.IResolvable) {
    this._permitX11Forwarding = value;
  }
  public resetPermitX11Forwarding() {
    this._permitX11Forwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitX11ForwardingInput() {
    return this._permitX11Forwarding;
  }

  // pin_source_ip - computed: false, optional: true, required: false
  private _pinSourceIp?: boolean | cdktf.IResolvable; 
  public get pinSourceIp() {
    return this.getBooleanAttribute('pin_source_ip');
  }
  public set pinSourceIp(value: boolean | cdktf.IResolvable) {
    this._pinSourceIp = value;
  }
  public resetPinSourceIp() {
    this._pinSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinSourceIpInput() {
    return this._pinSourceIp;
  }

  // port_forwarding - computed: false, optional: true, required: false
  private _portForwarding?: boolean | cdktf.IResolvable; 
  public get portForwarding() {
    return this.getBooleanAttribute('port_forwarding');
  }
  public set portForwarding(value: boolean | cdktf.IResolvable) {
    this._portForwarding = value;
  }
  public resetPortForwarding() {
    this._portForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portForwardingInput() {
    return this._portForwarding;
  }

  // record_session - computed: false, optional: true, required: false
  private _recordSession = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsRecordSessionOutputReference(this, "record_session");
  public get recordSession() {
    return this._recordSession;
  }
  public putRecordSession(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsRecordSession) {
    this._recordSession.internalValue = value;
  }
  public resetRecordSession() {
    this._recordSession.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSessionInput() {
    return this._recordSession.internalValue;
  }

  // request_access - computed: false, optional: true, required: false
  private _requestAccess?: string; 
  public get requestAccess() {
    return this.getStringAttribute('request_access');
  }
  public set requestAccess(value: string) {
    this._requestAccess = value;
  }
  public resetRequestAccess() {
    this._requestAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestAccessInput() {
    return this._requestAccess;
  }

  // request_prompt - computed: false, optional: true, required: false
  private _requestPrompt?: string; 
  public get requestPrompt() {
    return this.getStringAttribute('request_prompt');
  }
  public set requestPrompt(value: string) {
    this._requestPrompt = value;
  }
  public resetRequestPrompt() {
    this._requestPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPromptInput() {
    return this._requestPrompt;
  }

  // require_session_mfa - computed: false, optional: true, required: false
  private _requireSessionMfa?: string; 
  public get requireSessionMfa() {
    return this.getStringAttribute('require_session_mfa');
  }
  public set requireSessionMfa(value: string) {
    this._requireSessionMfa = value;
  }
  public resetRequireSessionMfa() {
    this._requireSessionMfa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSessionMfaInput() {
    return this._requireSessionMfa;
  }

  // ssh_file_copy - computed: false, optional: true, required: false
  private _sshFileCopy?: boolean | cdktf.IResolvable; 
  public get sshFileCopy() {
    return this.getBooleanAttribute('ssh_file_copy');
  }
  public set sshFileCopy(value: boolean | cdktf.IResolvable) {
    this._sshFileCopy = value;
  }
  public resetSshFileCopy() {
    this._sshFileCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshFileCopyInput() {
    return this._sshFileCopy;
  }
}
export interface DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpec {
  /**
  * Allow is the set of conditions evaluated to grant access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#allow DataK8SResourcesTeleportDevTeleportRoleV5Manifest#allow}
  */
  readonly allow?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllow;
  /**
  * Deny is the set of conditions evaluated to deny access. Deny takes priority over allow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#deny DataK8SResourcesTeleportDevTeleportRoleV5Manifest#deny}
  */
  readonly deny?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDeny;
  /**
  * Options is for OpenSSH options like agent forwarding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#options DataK8SResourcesTeleportDevTeleportRoleV5Manifest#options}
  */
  readonly options?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptions;
}

export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecToTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowToTerraform(struct!.allow),
    deny: dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyToTerraform(struct!.deny),
    options: dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsToTerraform(struct!.options),
  }
}


export function dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecToHclTerraform(struct?: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowToHclTerraform(struct!.allow),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllow",
    },
    deny: {
      value: dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyToHclTerraform(struct!.deny),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDeny",
    },
    options: {
      value: dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._deny?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow.internalValue = undefined;
      this._deny.internalValue = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow.internalValue = value.allow;
      this._deny.internalValue = value.deny;
      this._options.internalValue = value.options;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }
  public putAllow(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecAllow) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // deny - computed: false, optional: true, required: false
  private _deny = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDenyOutputReference(this, "deny");
  public get deny() {
    return this._deny;
  }
  public putDeny(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecDeny) {
    this._deny.internalValue = value;
  }
  public resetDeny() {
    this._deny.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest k8s_resources_teleport_dev_teleport_role_v5_manifest}
*/
export class DataK8SResourcesTeleportDevTeleportRoleV5Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_resources_teleport_dev_teleport_role_v5_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SResourcesTeleportDevTeleportRoleV5Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SResourcesTeleportDevTeleportRoleV5Manifest to import
  * @param importFromId The id of the existing DataK8SResourcesTeleportDevTeleportRoleV5Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SResourcesTeleportDevTeleportRoleV5Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_resources_teleport_dev_teleport_role_v5_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/resources_teleport_dev_teleport_role_v5_manifest k8s_resources_teleport_dev_teleport_role_v5_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SResourcesTeleportDevTeleportRoleV5ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SResourcesTeleportDevTeleportRoleV5ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_resources_teleport_dev_teleport_role_v5_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SResourcesTeleportDevTeleportRoleV5ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SResourcesTeleportDevTeleportRoleV5ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestMetadata",
      },
      spec: {
        value: dataK8SResourcesTeleportDevTeleportRoleV5ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SResourcesTeleportDevTeleportRoleV5ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
