// https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#description Identity#description}
  */
  readonly description?: string;
  /**
  * The GVC to which this identity belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#gvc Identity#gvc}
  */
  readonly gvc: string;
  /**
  * Name of the identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#name Identity#name}
  */
  readonly name: string;
  /**
  * Key-value map of resource tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#tags Identity#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * aws_access_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#aws_access_policy Identity#aws_access_policy}
  */
  readonly awsAccessPolicy?: IdentityAwsAccessPolicy[] | cdktf.IResolvable;
  /**
  * azure_access_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#azure_access_policy Identity#azure_access_policy}
  */
  readonly azureAccessPolicy?: IdentityAzureAccessPolicy[] | cdktf.IResolvable;
  /**
  * gcp_access_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#gcp_access_policy Identity#gcp_access_policy}
  */
  readonly gcpAccessPolicy?: IdentityGcpAccessPolicy[] | cdktf.IResolvable;
  /**
  * native_network_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#native_network_resource Identity#native_network_resource}
  */
  readonly nativeNetworkResource?: IdentityNativeNetworkResource[] | cdktf.IResolvable;
  /**
  * network_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#network_resource Identity#network_resource}
  */
  readonly networkResource?: IdentityNetworkResource[] | cdktf.IResolvable;
  /**
  * ngs_access_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#ngs_access_policy Identity#ngs_access_policy}
  */
  readonly ngsAccessPolicy?: IdentityNgsAccessPolicy[] | cdktf.IResolvable;
}
export interface IdentityAwsAccessPolicyTrustPolicy {
  /**
  * List of statements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#statement Identity#statement}
  */
  readonly statement?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Version of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#version Identity#version}
  */
  readonly version?: string;
}

export function identityAwsAccessPolicyTrustPolicyToTerraform(struct?: IdentityAwsAccessPolicyTrustPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    statement: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.statement),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function identityAwsAccessPolicyTrustPolicyToHclTerraform(struct?: IdentityAwsAccessPolicyTrustPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    statement: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.statement),
      isBlock: false,
      type: "set",
      storageClassType: "stringMapList",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityAwsAccessPolicyTrustPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityAwsAccessPolicyTrustPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statement !== undefined) {
      hasAnyValues = true;
      internalValueResult.statement = this._statement;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityAwsAccessPolicyTrustPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statement = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statement = value.statement;
      this._version = value.version;
    }
  }

  // statement - computed: false, optional: true, required: false
  private _statement?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get statement() {
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('statement')));
  }
  public set statement(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._statement = value;
  }
  public resetStatement() {
    this._statement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class IdentityAwsAccessPolicyTrustPolicyList extends cdktf.ComplexList {
  public internalValue? : IdentityAwsAccessPolicyTrustPolicy[] | cdktf.IResolvable

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
  public get(index: number): IdentityAwsAccessPolicyTrustPolicyOutputReference {
    return new IdentityAwsAccessPolicyTrustPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityAwsAccessPolicy {
  /**
  * Full link to referenced cloud account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#cloud_account_link Identity#cloud_account_link}
  */
  readonly cloudAccountLink: string;
  /**
  * List of policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#policy_refs Identity#policy_refs}
  */
  readonly policyRefs?: string[];
  /**
  * Role name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#role_name Identity#role_name}
  */
  readonly roleName?: string;
  /**
  * trust_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#trust_policy Identity#trust_policy}
  */
  readonly trustPolicy?: IdentityAwsAccessPolicyTrustPolicy[] | cdktf.IResolvable;
}

export function identityAwsAccessPolicyToTerraform(struct?: IdentityAwsAccessPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_account_link: cdktf.stringToTerraform(struct!.cloudAccountLink),
    policy_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyRefs),
    role_name: cdktf.stringToTerraform(struct!.roleName),
    trust_policy: cdktf.listMapper(identityAwsAccessPolicyTrustPolicyToTerraform, true)(struct!.trustPolicy),
  }
}


export function identityAwsAccessPolicyToHclTerraform(struct?: IdentityAwsAccessPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_account_link: {
      value: cdktf.stringToHclTerraform(struct!.cloudAccountLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_refs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policyRefs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    role_name: {
      value: cdktf.stringToHclTerraform(struct!.roleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_policy: {
      value: cdktf.listMapperHcl(identityAwsAccessPolicyTrustPolicyToHclTerraform, true)(struct!.trustPolicy),
      isBlock: true,
      type: "set",
      storageClassType: "IdentityAwsAccessPolicyTrustPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityAwsAccessPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityAwsAccessPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudAccountLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudAccountLink = this._cloudAccountLink;
    }
    if (this._policyRefs !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyRefs = this._policyRefs;
    }
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    if (this._trustPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustPolicy = this._trustPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityAwsAccessPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudAccountLink = undefined;
      this._policyRefs = undefined;
      this._roleName = undefined;
      this._trustPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudAccountLink = value.cloudAccountLink;
      this._policyRefs = value.policyRefs;
      this._roleName = value.roleName;
      this._trustPolicy.internalValue = value.trustPolicy;
    }
  }

  // cloud_account_link - computed: false, optional: false, required: true
  private _cloudAccountLink?: string; 
  public get cloudAccountLink() {
    return this.getStringAttribute('cloud_account_link');
  }
  public set cloudAccountLink(value: string) {
    this._cloudAccountLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountLinkInput() {
    return this._cloudAccountLink;
  }

  // policy_refs - computed: false, optional: true, required: false
  private _policyRefs?: string[]; 
  public get policyRefs() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_refs'));
  }
  public set policyRefs(value: string[]) {
    this._policyRefs = value;
  }
  public resetPolicyRefs() {
    this._policyRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRefsInput() {
    return this._policyRefs;
  }

  // role_name - computed: false, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // trust_policy - computed: false, optional: true, required: false
  private _trustPolicy = new IdentityAwsAccessPolicyTrustPolicyList(this, "trust_policy", true);
  public get trustPolicy() {
    return this._trustPolicy;
  }
  public putTrustPolicy(value: IdentityAwsAccessPolicyTrustPolicy[] | cdktf.IResolvable) {
    this._trustPolicy.internalValue = value;
  }
  public resetTrustPolicy() {
    this._trustPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustPolicyInput() {
    return this._trustPolicy.internalValue;
  }
}

export class IdentityAwsAccessPolicyList extends cdktf.ComplexList {
  public internalValue? : IdentityAwsAccessPolicy[] | cdktf.IResolvable

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
  public get(index: number): IdentityAwsAccessPolicyOutputReference {
    return new IdentityAwsAccessPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityAzureAccessPolicyRoleAssignment {
  /**
  * List of assigned roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#roles Identity#roles}
  */
  readonly roles?: string[];
  /**
  * Scope of roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#scope Identity#scope}
  */
  readonly scope?: string;
}

export function identityAzureAccessPolicyRoleAssignmentToTerraform(struct?: IdentityAzureAccessPolicyRoleAssignment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function identityAzureAccessPolicyRoleAssignmentToHclTerraform(struct?: IdentityAzureAccessPolicyRoleAssignment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityAzureAccessPolicyRoleAssignmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityAzureAccessPolicyRoleAssignment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityAzureAccessPolicyRoleAssignment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roles = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roles = value.roles;
      this._scope = value.scope;
    }
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}

export class IdentityAzureAccessPolicyRoleAssignmentList extends cdktf.ComplexList {
  public internalValue? : IdentityAzureAccessPolicyRoleAssignment[] | cdktf.IResolvable

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
  public get(index: number): IdentityAzureAccessPolicyRoleAssignmentOutputReference {
    return new IdentityAzureAccessPolicyRoleAssignmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityAzureAccessPolicy {
  /**
  * Full link to referenced cloud account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#cloud_account_link Identity#cloud_account_link}
  */
  readonly cloudAccountLink: string;
  /**
  * role_assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#role_assignment Identity#role_assignment}
  */
  readonly roleAssignment?: IdentityAzureAccessPolicyRoleAssignment[] | cdktf.IResolvable;
}

export function identityAzureAccessPolicyToTerraform(struct?: IdentityAzureAccessPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_account_link: cdktf.stringToTerraform(struct!.cloudAccountLink),
    role_assignment: cdktf.listMapper(identityAzureAccessPolicyRoleAssignmentToTerraform, true)(struct!.roleAssignment),
  }
}


export function identityAzureAccessPolicyToHclTerraform(struct?: IdentityAzureAccessPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_account_link: {
      value: cdktf.stringToHclTerraform(struct!.cloudAccountLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_assignment: {
      value: cdktf.listMapperHcl(identityAzureAccessPolicyRoleAssignmentToHclTerraform, true)(struct!.roleAssignment),
      isBlock: true,
      type: "set",
      storageClassType: "IdentityAzureAccessPolicyRoleAssignmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityAzureAccessPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityAzureAccessPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudAccountLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudAccountLink = this._cloudAccountLink;
    }
    if (this._roleAssignment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleAssignment = this._roleAssignment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityAzureAccessPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudAccountLink = undefined;
      this._roleAssignment.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudAccountLink = value.cloudAccountLink;
      this._roleAssignment.internalValue = value.roleAssignment;
    }
  }

  // cloud_account_link - computed: false, optional: false, required: true
  private _cloudAccountLink?: string; 
  public get cloudAccountLink() {
    return this.getStringAttribute('cloud_account_link');
  }
  public set cloudAccountLink(value: string) {
    this._cloudAccountLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountLinkInput() {
    return this._cloudAccountLink;
  }

  // role_assignment - computed: false, optional: true, required: false
  private _roleAssignment = new IdentityAzureAccessPolicyRoleAssignmentList(this, "role_assignment", true);
  public get roleAssignment() {
    return this._roleAssignment;
  }
  public putRoleAssignment(value: IdentityAzureAccessPolicyRoleAssignment[] | cdktf.IResolvable) {
    this._roleAssignment.internalValue = value;
  }
  public resetRoleAssignment() {
    this._roleAssignment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleAssignmentInput() {
    return this._roleAssignment.internalValue;
  }
}

export class IdentityAzureAccessPolicyList extends cdktf.ComplexList {
  public internalValue? : IdentityAzureAccessPolicy[] | cdktf.IResolvable

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
  public get(index: number): IdentityAzureAccessPolicyOutputReference {
    return new IdentityAzureAccessPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityGcpAccessPolicyBinding {
  /**
  * Name of resource for binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#resource Identity#resource}
  */
  readonly resource?: string;
  /**
  * List of allowed roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#roles Identity#roles}
  */
  readonly roles?: string[];
}

export function identityGcpAccessPolicyBindingToTerraform(struct?: IdentityGcpAccessPolicyBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource: cdktf.stringToTerraform(struct!.resource),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
  }
}


export function identityGcpAccessPolicyBindingToHclTerraform(struct?: IdentityGcpAccessPolicyBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityGcpAccessPolicyBindingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityGcpAccessPolicyBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityGcpAccessPolicyBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resource = undefined;
      this._roles = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resource = value.resource;
      this._roles = value.roles;
    }
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
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

export class IdentityGcpAccessPolicyBindingList extends cdktf.ComplexList {
  public internalValue? : IdentityGcpAccessPolicyBinding[] | cdktf.IResolvable

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
  public get(index: number): IdentityGcpAccessPolicyBindingOutputReference {
    return new IdentityGcpAccessPolicyBindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityGcpAccessPolicy {
  /**
  * Full link to referenced cloud account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#cloud_account_link Identity#cloud_account_link}
  */
  readonly cloudAccountLink: string;
  /**
  * Comma delimited list of GCP scope URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#scopes Identity#scopes}
  */
  readonly scopes?: string;
  /**
  * Name of existing GCP service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#service_account Identity#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * binding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#binding Identity#binding}
  */
  readonly binding?: IdentityGcpAccessPolicyBinding[] | cdktf.IResolvable;
}

export function identityGcpAccessPolicyToTerraform(struct?: IdentityGcpAccessPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_account_link: cdktf.stringToTerraform(struct!.cloudAccountLink),
    scopes: cdktf.stringToTerraform(struct!.scopes),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    binding: cdktf.listMapper(identityGcpAccessPolicyBindingToTerraform, true)(struct!.binding),
  }
}


export function identityGcpAccessPolicyToHclTerraform(struct?: IdentityGcpAccessPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_account_link: {
      value: cdktf.stringToHclTerraform(struct!.cloudAccountLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.stringToHclTerraform(struct!.scopes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    binding: {
      value: cdktf.listMapperHcl(identityGcpAccessPolicyBindingToHclTerraform, true)(struct!.binding),
      isBlock: true,
      type: "set",
      storageClassType: "IdentityGcpAccessPolicyBindingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityGcpAccessPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityGcpAccessPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudAccountLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudAccountLink = this._cloudAccountLink;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._binding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.binding = this._binding?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityGcpAccessPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudAccountLink = undefined;
      this._scopes = undefined;
      this._serviceAccount = undefined;
      this._binding.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudAccountLink = value.cloudAccountLink;
      this._scopes = value.scopes;
      this._serviceAccount = value.serviceAccount;
      this._binding.internalValue = value.binding;
    }
  }

  // cloud_account_link - computed: false, optional: false, required: true
  private _cloudAccountLink?: string; 
  public get cloudAccountLink() {
    return this.getStringAttribute('cloud_account_link');
  }
  public set cloudAccountLink(value: string) {
    this._cloudAccountLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountLinkInput() {
    return this._cloudAccountLink;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string; 
  public get scopes() {
    return this.getStringAttribute('scopes');
  }
  public set scopes(value: string) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // binding - computed: false, optional: true, required: false
  private _binding = new IdentityGcpAccessPolicyBindingList(this, "binding", true);
  public get binding() {
    return this._binding;
  }
  public putBinding(value: IdentityGcpAccessPolicyBinding[] | cdktf.IResolvable) {
    this._binding.internalValue = value;
  }
  public resetBinding() {
    this._binding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingInput() {
    return this._binding.internalValue;
  }
}

export class IdentityGcpAccessPolicyList extends cdktf.ComplexList {
  public internalValue? : IdentityGcpAccessPolicy[] | cdktf.IResolvable

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
  public get(index: number): IdentityGcpAccessPolicyOutputReference {
    return new IdentityGcpAccessPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityNativeNetworkResourceAwsPrivateLink {
  /**
  * Endpoint service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#endpoint_service_name Identity#endpoint_service_name}
  */
  readonly endpointServiceName: string;
}

export function identityNativeNetworkResourceAwsPrivateLinkToTerraform(struct?: IdentityNativeNetworkResourceAwsPrivateLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_service_name: cdktf.stringToTerraform(struct!.endpointServiceName),
  }
}


export function identityNativeNetworkResourceAwsPrivateLinkToHclTerraform(struct?: IdentityNativeNetworkResourceAwsPrivateLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_service_name: {
      value: cdktf.stringToHclTerraform(struct!.endpointServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityNativeNetworkResourceAwsPrivateLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityNativeNetworkResourceAwsPrivateLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointServiceName = this._endpointServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityNativeNetworkResourceAwsPrivateLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointServiceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointServiceName = value.endpointServiceName;
    }
  }

  // endpoint_service_name - computed: false, optional: false, required: true
  private _endpointServiceName?: string; 
  public get endpointServiceName() {
    return this.getStringAttribute('endpoint_service_name');
  }
  public set endpointServiceName(value: string) {
    this._endpointServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointServiceNameInput() {
    return this._endpointServiceName;
  }
}

export class IdentityNativeNetworkResourceAwsPrivateLinkList extends cdktf.ComplexList {
  public internalValue? : IdentityNativeNetworkResourceAwsPrivateLink[] | cdktf.IResolvable

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
  public get(index: number): IdentityNativeNetworkResourceAwsPrivateLinkOutputReference {
    return new IdentityNativeNetworkResourceAwsPrivateLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityNativeNetworkResourceGcpServiceConnect {
  /**
  * Target service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#target_service Identity#target_service}
  */
  readonly targetService: string;
}

export function identityNativeNetworkResourceGcpServiceConnectToTerraform(struct?: IdentityNativeNetworkResourceGcpServiceConnect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_service: cdktf.stringToTerraform(struct!.targetService),
  }
}


export function identityNativeNetworkResourceGcpServiceConnectToHclTerraform(struct?: IdentityNativeNetworkResourceGcpServiceConnect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_service: {
      value: cdktf.stringToHclTerraform(struct!.targetService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityNativeNetworkResourceGcpServiceConnectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityNativeNetworkResourceGcpServiceConnect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetService !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetService = this._targetService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityNativeNetworkResourceGcpServiceConnect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetService = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetService = value.targetService;
    }
  }

  // target_service - computed: false, optional: false, required: true
  private _targetService?: string; 
  public get targetService() {
    return this.getStringAttribute('target_service');
  }
  public set targetService(value: string) {
    this._targetService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetServiceInput() {
    return this._targetService;
  }
}

export class IdentityNativeNetworkResourceGcpServiceConnectList extends cdktf.ComplexList {
  public internalValue? : IdentityNativeNetworkResourceGcpServiceConnect[] | cdktf.IResolvable

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
  public get(index: number): IdentityNativeNetworkResourceGcpServiceConnectOutputReference {
    return new IdentityNativeNetworkResourceGcpServiceConnectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityNativeNetworkResource {
  /**
  * Fully qualified domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#fqdn Identity#fqdn}
  */
  readonly fqdn: string;
  /**
  * Name of the Native Network Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#name Identity#name}
  */
  readonly name: string;
  /**
  * Ports to expose. At least one port is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#ports Identity#ports}
  */
  readonly ports: number[];
  /**
  * aws_private_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#aws_private_link Identity#aws_private_link}
  */
  readonly awsPrivateLink?: IdentityNativeNetworkResourceAwsPrivateLink[] | cdktf.IResolvable;
  /**
  * gcp_service_connect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#gcp_service_connect Identity#gcp_service_connect}
  */
  readonly gcpServiceConnect?: IdentityNativeNetworkResourceGcpServiceConnect[] | cdktf.IResolvable;
}

export function identityNativeNetworkResourceToTerraform(struct?: IdentityNativeNetworkResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    name: cdktf.stringToTerraform(struct!.name),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
    aws_private_link: cdktf.listMapper(identityNativeNetworkResourceAwsPrivateLinkToTerraform, true)(struct!.awsPrivateLink),
    gcp_service_connect: cdktf.listMapper(identityNativeNetworkResourceGcpServiceConnectToTerraform, true)(struct!.gcpServiceConnect),
  }
}


export function identityNativeNetworkResourceToHclTerraform(struct?: IdentityNativeNetworkResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
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
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    aws_private_link: {
      value: cdktf.listMapperHcl(identityNativeNetworkResourceAwsPrivateLinkToHclTerraform, true)(struct!.awsPrivateLink),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityNativeNetworkResourceAwsPrivateLinkList",
    },
    gcp_service_connect: {
      value: cdktf.listMapperHcl(identityNativeNetworkResourceGcpServiceConnectToHclTerraform, true)(struct!.gcpServiceConnect),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityNativeNetworkResourceGcpServiceConnectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityNativeNetworkResourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityNativeNetworkResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._awsPrivateLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsPrivateLink = this._awsPrivateLink?.internalValue;
    }
    if (this._gcpServiceConnect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpServiceConnect = this._gcpServiceConnect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityNativeNetworkResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._name = undefined;
      this._ports = undefined;
      this._awsPrivateLink.internalValue = undefined;
      this._gcpServiceConnect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._name = value.name;
      this._ports = value.ports;
      this._awsPrivateLink.internalValue = value.awsPrivateLink;
      this._gcpServiceConnect.internalValue = value.gcpServiceConnect;
    }
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
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

  // ports - computed: false, optional: false, required: true
  private _ports?: number[]; 
  public get ports() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ports')));
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // aws_private_link - computed: false, optional: true, required: false
  private _awsPrivateLink = new IdentityNativeNetworkResourceAwsPrivateLinkList(this, "aws_private_link", false);
  public get awsPrivateLink() {
    return this._awsPrivateLink;
  }
  public putAwsPrivateLink(value: IdentityNativeNetworkResourceAwsPrivateLink[] | cdktf.IResolvable) {
    this._awsPrivateLink.internalValue = value;
  }
  public resetAwsPrivateLink() {
    this._awsPrivateLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsPrivateLinkInput() {
    return this._awsPrivateLink.internalValue;
  }

  // gcp_service_connect - computed: false, optional: true, required: false
  private _gcpServiceConnect = new IdentityNativeNetworkResourceGcpServiceConnectList(this, "gcp_service_connect", false);
  public get gcpServiceConnect() {
    return this._gcpServiceConnect;
  }
  public putGcpServiceConnect(value: IdentityNativeNetworkResourceGcpServiceConnect[] | cdktf.IResolvable) {
    this._gcpServiceConnect.internalValue = value;
  }
  public resetGcpServiceConnect() {
    this._gcpServiceConnect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceConnectInput() {
    return this._gcpServiceConnect.internalValue;
  }
}

export class IdentityNativeNetworkResourceList extends cdktf.ComplexList {
  public internalValue? : IdentityNativeNetworkResource[] | cdktf.IResolvable

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
  public get(index: number): IdentityNativeNetworkResourceOutputReference {
    return new IdentityNativeNetworkResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityNetworkResource {
  /**
  * Full link to referenced Agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#agent_link Identity#agent_link}
  */
  readonly agentLink?: string;
  /**
  * Fully qualified domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#fqdn Identity#fqdn}
  */
  readonly fqdn?: string;
  /**
  * List of IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#ips Identity#ips}
  */
  readonly ips?: string[];
  /**
  * Name of the Network Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#name Identity#name}
  */
  readonly name: string;
  /**
  * Ports to expose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#ports Identity#ports}
  */
  readonly ports: number[];
  /**
  * Resolver IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#resolver_ip Identity#resolver_ip}
  */
  readonly resolverIp?: string;
}

export function identityNetworkResourceToTerraform(struct?: IdentityNetworkResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_link: cdktf.stringToTerraform(struct!.agentLink),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
    name: cdktf.stringToTerraform(struct!.name),
    ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ports),
    resolver_ip: cdktf.stringToTerraform(struct!.resolverIp),
  }
}


export function identityNetworkResourceToHclTerraform(struct?: IdentityNetworkResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_link: {
      value: cdktf.stringToHclTerraform(struct!.agentLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ips),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    resolver_ip: {
      value: cdktf.stringToHclTerraform(struct!.resolverIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityNetworkResourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityNetworkResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentLink = this._agentLink;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    if (this._resolverIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolverIp = this._resolverIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityNetworkResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentLink = undefined;
      this._fqdn = undefined;
      this._ips = undefined;
      this._name = undefined;
      this._ports = undefined;
      this._resolverIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentLink = value.agentLink;
      this._fqdn = value.fqdn;
      this._ips = value.ips;
      this._name = value.name;
      this._ports = value.ports;
      this._resolverIp = value.resolverIp;
    }
  }

  // agent_link - computed: false, optional: true, required: false
  private _agentLink?: string; 
  public get agentLink() {
    return this.getStringAttribute('agent_link');
  }
  public set agentLink(value: string) {
    this._agentLink = value;
  }
  public resetAgentLink() {
    this._agentLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentLinkInput() {
    return this._agentLink;
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ips - computed: false, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return cdktf.Fn.tolist(this.getListAttribute('ips'));
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
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

  // ports - computed: false, optional: false, required: true
  private _ports?: number[]; 
  public get ports() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ports')));
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // resolver_ip - computed: false, optional: true, required: false
  private _resolverIp?: string; 
  public get resolverIp() {
    return this.getStringAttribute('resolver_ip');
  }
  public set resolverIp(value: string) {
    this._resolverIp = value;
  }
  public resetResolverIp() {
    this._resolverIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverIpInput() {
    return this._resolverIp;
  }
}

export class IdentityNetworkResourceList extends cdktf.ComplexList {
  public internalValue? : IdentityNetworkResource[] | cdktf.IResolvable

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
  public get(index: number): IdentityNetworkResourceOutputReference {
    return new IdentityNetworkResourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityNgsAccessPolicyPub {
  /**
  * List of allow subjects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#allow Identity#allow}
  */
  readonly allow?: string[];
  /**
  * List of deny subjects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#deny Identity#deny}
  */
  readonly deny?: string[];
}

export function identityNgsAccessPolicyPubToTerraform(struct?: IdentityNgsAccessPolicyPub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allow),
    deny: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deny),
  }
}


export function identityNgsAccessPolicyPubToHclTerraform(struct?: IdentityNgsAccessPolicyPub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allow),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    deny: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deny),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityNgsAccessPolicyPubOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityNgsAccessPolicyPub | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityNgsAccessPolicyPub | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow = undefined;
      this._deny = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow = value.allow;
      this._deny = value.deny;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: string[]; 
  public get allow() {
    return cdktf.Fn.tolist(this.getListAttribute('allow'));
  }
  public set allow(value: string[]) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: string[]; 
  public get deny() {
    return cdktf.Fn.tolist(this.getListAttribute('deny'));
  }
  public set deny(value: string[]) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }
}

export class IdentityNgsAccessPolicyPubList extends cdktf.ComplexList {
  public internalValue? : IdentityNgsAccessPolicyPub[] | cdktf.IResolvable

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
  public get(index: number): IdentityNgsAccessPolicyPubOutputReference {
    return new IdentityNgsAccessPolicyPubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityNgsAccessPolicyResp {
  /**
  * Number of responses allowed on the replyTo subject, -1 means no limit. Default: -1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#max Identity#max}
  */
  readonly max?: number;
  /**
  * Deadline to send replies on the replyTo subject [#ms(millis) | #s(econds) | m(inutes) | h(ours)]. -1 means no restriction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#ttl Identity#ttl}
  */
  readonly ttl?: string;
}

export function identityNgsAccessPolicyRespToTerraform(struct?: IdentityNgsAccessPolicyResp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    ttl: cdktf.stringToTerraform(struct!.ttl),
  }
}


export function identityNgsAccessPolicyRespToHclTerraform(struct?: IdentityNgsAccessPolicyResp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityNgsAccessPolicyRespOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityNgsAccessPolicyResp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityNgsAccessPolicyResp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._ttl = value.ttl;
    }
  }

  // max - computed: true, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}

export class IdentityNgsAccessPolicyRespList extends cdktf.ComplexList {
  public internalValue? : IdentityNgsAccessPolicyResp[] | cdktf.IResolvable

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
  public get(index: number): IdentityNgsAccessPolicyRespOutputReference {
    return new IdentityNgsAccessPolicyRespOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityNgsAccessPolicySub {
  /**
  * List of allow subjects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#allow Identity#allow}
  */
  readonly allow?: string[];
  /**
  * List of deny subjects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#deny Identity#deny}
  */
  readonly deny?: string[];
}

export function identityNgsAccessPolicySubToTerraform(struct?: IdentityNgsAccessPolicySub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allow),
    deny: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deny),
  }
}


export function identityNgsAccessPolicySubToHclTerraform(struct?: IdentityNgsAccessPolicySub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allow),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    deny: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deny),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityNgsAccessPolicySubOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityNgsAccessPolicySub | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityNgsAccessPolicySub | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow = undefined;
      this._deny = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow = value.allow;
      this._deny = value.deny;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: string[]; 
  public get allow() {
    return cdktf.Fn.tolist(this.getListAttribute('allow'));
  }
  public set allow(value: string[]) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: string[]; 
  public get deny() {
    return cdktf.Fn.tolist(this.getListAttribute('deny'));
  }
  public set deny(value: string[]) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }
}

export class IdentityNgsAccessPolicySubList extends cdktf.ComplexList {
  public internalValue? : IdentityNgsAccessPolicySub[] | cdktf.IResolvable

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
  public get(index: number): IdentityNgsAccessPolicySubOutputReference {
    return new IdentityNgsAccessPolicySubOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityNgsAccessPolicy {
  /**
  * Full link to referenced cloud account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#cloud_account_link Identity#cloud_account_link}
  */
  readonly cloudAccountLink: string;
  /**
  * Max number of bytes a connection can send. Default: -1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#data Identity#data}
  */
  readonly data?: number;
  /**
  * Max message payload. Default: -1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#payload Identity#payload}
  */
  readonly payload?: number;
  /**
  * Max number of subscriptions per connection. Default: -1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#subs Identity#subs}
  */
  readonly subs?: number;
  /**
  * pub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#pub Identity#pub}
  */
  readonly pub?: IdentityNgsAccessPolicyPub[] | cdktf.IResolvable;
  /**
  * resp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#resp Identity#resp}
  */
  readonly resp?: IdentityNgsAccessPolicyResp[] | cdktf.IResolvable;
  /**
  * sub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#sub Identity#sub}
  */
  readonly sub?: IdentityNgsAccessPolicySub[] | cdktf.IResolvable;
}

export function identityNgsAccessPolicyToTerraform(struct?: IdentityNgsAccessPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_account_link: cdktf.stringToTerraform(struct!.cloudAccountLink),
    data: cdktf.numberToTerraform(struct!.data),
    payload: cdktf.numberToTerraform(struct!.payload),
    subs: cdktf.numberToTerraform(struct!.subs),
    pub: cdktf.listMapper(identityNgsAccessPolicyPubToTerraform, true)(struct!.pub),
    resp: cdktf.listMapper(identityNgsAccessPolicyRespToTerraform, true)(struct!.resp),
    sub: cdktf.listMapper(identityNgsAccessPolicySubToTerraform, true)(struct!.sub),
  }
}


export function identityNgsAccessPolicyToHclTerraform(struct?: IdentityNgsAccessPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_account_link: {
      value: cdktf.stringToHclTerraform(struct!.cloudAccountLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data: {
      value: cdktf.numberToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    payload: {
      value: cdktf.numberToHclTerraform(struct!.payload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subs: {
      value: cdktf.numberToHclTerraform(struct!.subs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pub: {
      value: cdktf.listMapperHcl(identityNgsAccessPolicyPubToHclTerraform, true)(struct!.pub),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityNgsAccessPolicyPubList",
    },
    resp: {
      value: cdktf.listMapperHcl(identityNgsAccessPolicyRespToHclTerraform, true)(struct!.resp),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityNgsAccessPolicyRespList",
    },
    sub: {
      value: cdktf.listMapperHcl(identityNgsAccessPolicySubToHclTerraform, true)(struct!.sub),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityNgsAccessPolicySubList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityNgsAccessPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityNgsAccessPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudAccountLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudAccountLink = this._cloudAccountLink;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._subs !== undefined) {
      hasAnyValues = true;
      internalValueResult.subs = this._subs;
    }
    if (this._pub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pub = this._pub?.internalValue;
    }
    if (this._resp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resp = this._resp?.internalValue;
    }
    if (this._sub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sub = this._sub?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityNgsAccessPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudAccountLink = undefined;
      this._data = undefined;
      this._payload = undefined;
      this._subs = undefined;
      this._pub.internalValue = undefined;
      this._resp.internalValue = undefined;
      this._sub.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudAccountLink = value.cloudAccountLink;
      this._data = value.data;
      this._payload = value.payload;
      this._subs = value.subs;
      this._pub.internalValue = value.pub;
      this._resp.internalValue = value.resp;
      this._sub.internalValue = value.sub;
    }
  }

  // cloud_account_link - computed: false, optional: false, required: true
  private _cloudAccountLink?: string; 
  public get cloudAccountLink() {
    return this.getStringAttribute('cloud_account_link');
  }
  public set cloudAccountLink(value: string) {
    this._cloudAccountLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountLinkInput() {
    return this._cloudAccountLink;
  }

  // data - computed: true, optional: true, required: false
  private _data?: number; 
  public get data() {
    return this.getNumberAttribute('data');
  }
  public set data(value: number) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // payload - computed: true, optional: true, required: false
  private _payload?: number; 
  public get payload() {
    return this.getNumberAttribute('payload');
  }
  public set payload(value: number) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // subs - computed: true, optional: true, required: false
  private _subs?: number; 
  public get subs() {
    return this.getNumberAttribute('subs');
  }
  public set subs(value: number) {
    this._subs = value;
  }
  public resetSubs() {
    this._subs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsInput() {
    return this._subs;
  }

  // pub - computed: false, optional: true, required: false
  private _pub = new IdentityNgsAccessPolicyPubList(this, "pub", false);
  public get pub() {
    return this._pub;
  }
  public putPub(value: IdentityNgsAccessPolicyPub[] | cdktf.IResolvable) {
    this._pub.internalValue = value;
  }
  public resetPub() {
    this._pub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubInput() {
    return this._pub.internalValue;
  }

  // resp - computed: false, optional: true, required: false
  private _resp = new IdentityNgsAccessPolicyRespList(this, "resp", false);
  public get resp() {
    return this._resp;
  }
  public putResp(value: IdentityNgsAccessPolicyResp[] | cdktf.IResolvable) {
    this._resp.internalValue = value;
  }
  public resetResp() {
    this._resp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respInput() {
    return this._resp.internalValue;
  }

  // sub - computed: false, optional: true, required: false
  private _sub = new IdentityNgsAccessPolicySubList(this, "sub", false);
  public get sub() {
    return this._sub;
  }
  public putSub(value: IdentityNgsAccessPolicySub[] | cdktf.IResolvable) {
    this._sub.internalValue = value;
  }
  public resetSub() {
    this._sub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subInput() {
    return this._sub.internalValue;
  }
}

export class IdentityNgsAccessPolicyList extends cdktf.ComplexList {
  public internalValue? : IdentityNgsAccessPolicy[] | cdktf.IResolvable

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
  public get(index: number): IdentityNgsAccessPolicyOutputReference {
    return new IdentityNgsAccessPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity cpln_identity}
*/
export class Identity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cpln_identity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Identity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Identity to import
  * @param importFromId The id of the existing Identity that should be imported. Refer to the {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Identity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cpln_identity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.14/docs/resources/identity cpln_identity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'cpln_identity',
      terraformGeneratorMetadata: {
        providerName: 'cpln',
        providerVersion: '1.2.14',
        providerVersionConstraint: '1.2.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._gvc = config.gvc;
    this._name = config.name;
    this._tags = config.tags;
    this._awsAccessPolicy.internalValue = config.awsAccessPolicy;
    this._azureAccessPolicy.internalValue = config.azureAccessPolicy;
    this._gcpAccessPolicy.internalValue = config.gcpAccessPolicy;
    this._nativeNetworkResource.internalValue = config.nativeNetworkResource;
    this._networkResource.internalValue = config.networkResource;
    this._ngsAccessPolicy.internalValue = config.ngsAccessPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpln_id - computed: true, optional: false, required: false
  public get cplnId() {
    return this.getStringAttribute('cpln_id');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // gvc - computed: false, optional: false, required: true
  private _gvc?: string; 
  public get gvc() {
    return this.getStringAttribute('gvc');
  }
  public set gvc(value: string) {
    this._gvc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gvcInput() {
    return this._gvc;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // status - computed: true, optional: false, required: false
  private _status = new cdktf.StringMap(this, "status");
  public get status() {
    return this._status;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // aws_access_policy - computed: false, optional: true, required: false
  private _awsAccessPolicy = new IdentityAwsAccessPolicyList(this, "aws_access_policy", false);
  public get awsAccessPolicy() {
    return this._awsAccessPolicy;
  }
  public putAwsAccessPolicy(value: IdentityAwsAccessPolicy[] | cdktf.IResolvable) {
    this._awsAccessPolicy.internalValue = value;
  }
  public resetAwsAccessPolicy() {
    this._awsAccessPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessPolicyInput() {
    return this._awsAccessPolicy.internalValue;
  }

  // azure_access_policy - computed: false, optional: true, required: false
  private _azureAccessPolicy = new IdentityAzureAccessPolicyList(this, "azure_access_policy", false);
  public get azureAccessPolicy() {
    return this._azureAccessPolicy;
  }
  public putAzureAccessPolicy(value: IdentityAzureAccessPolicy[] | cdktf.IResolvable) {
    this._azureAccessPolicy.internalValue = value;
  }
  public resetAzureAccessPolicy() {
    this._azureAccessPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAccessPolicyInput() {
    return this._azureAccessPolicy.internalValue;
  }

  // gcp_access_policy - computed: false, optional: true, required: false
  private _gcpAccessPolicy = new IdentityGcpAccessPolicyList(this, "gcp_access_policy", false);
  public get gcpAccessPolicy() {
    return this._gcpAccessPolicy;
  }
  public putGcpAccessPolicy(value: IdentityGcpAccessPolicy[] | cdktf.IResolvable) {
    this._gcpAccessPolicy.internalValue = value;
  }
  public resetGcpAccessPolicy() {
    this._gcpAccessPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpAccessPolicyInput() {
    return this._gcpAccessPolicy.internalValue;
  }

  // native_network_resource - computed: false, optional: true, required: false
  private _nativeNetworkResource = new IdentityNativeNetworkResourceList(this, "native_network_resource", true);
  public get nativeNetworkResource() {
    return this._nativeNetworkResource;
  }
  public putNativeNetworkResource(value: IdentityNativeNetworkResource[] | cdktf.IResolvable) {
    this._nativeNetworkResource.internalValue = value;
  }
  public resetNativeNetworkResource() {
    this._nativeNetworkResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeNetworkResourceInput() {
    return this._nativeNetworkResource.internalValue;
  }

  // network_resource - computed: false, optional: true, required: false
  private _networkResource = new IdentityNetworkResourceList(this, "network_resource", true);
  public get networkResource() {
    return this._networkResource;
  }
  public putNetworkResource(value: IdentityNetworkResource[] | cdktf.IResolvable) {
    this._networkResource.internalValue = value;
  }
  public resetNetworkResource() {
    this._networkResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkResourceInput() {
    return this._networkResource.internalValue;
  }

  // ngs_access_policy - computed: false, optional: true, required: false
  private _ngsAccessPolicy = new IdentityNgsAccessPolicyList(this, "ngs_access_policy", false);
  public get ngsAccessPolicy() {
    return this._ngsAccessPolicy;
  }
  public putNgsAccessPolicy(value: IdentityNgsAccessPolicy[] | cdktf.IResolvable) {
    this._ngsAccessPolicy.internalValue = value;
  }
  public resetNgsAccessPolicy() {
    this._ngsAccessPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngsAccessPolicyInput() {
    return this._ngsAccessPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      gvc: cdktf.stringToTerraform(this._gvc),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      aws_access_policy: cdktf.listMapper(identityAwsAccessPolicyToTerraform, true)(this._awsAccessPolicy.internalValue),
      azure_access_policy: cdktf.listMapper(identityAzureAccessPolicyToTerraform, true)(this._azureAccessPolicy.internalValue),
      gcp_access_policy: cdktf.listMapper(identityGcpAccessPolicyToTerraform, true)(this._gcpAccessPolicy.internalValue),
      native_network_resource: cdktf.listMapper(identityNativeNetworkResourceToTerraform, true)(this._nativeNetworkResource.internalValue),
      network_resource: cdktf.listMapper(identityNetworkResourceToTerraform, true)(this._networkResource.internalValue),
      ngs_access_policy: cdktf.listMapper(identityNgsAccessPolicyToTerraform, true)(this._ngsAccessPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gvc: {
        value: cdktf.stringToHclTerraform(this._gvc),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      aws_access_policy: {
        value: cdktf.listMapperHcl(identityAwsAccessPolicyToHclTerraform, true)(this._awsAccessPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityAwsAccessPolicyList",
      },
      azure_access_policy: {
        value: cdktf.listMapperHcl(identityAzureAccessPolicyToHclTerraform, true)(this._azureAccessPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityAzureAccessPolicyList",
      },
      gcp_access_policy: {
        value: cdktf.listMapperHcl(identityGcpAccessPolicyToHclTerraform, true)(this._gcpAccessPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityGcpAccessPolicyList",
      },
      native_network_resource: {
        value: cdktf.listMapperHcl(identityNativeNetworkResourceToHclTerraform, true)(this._nativeNetworkResource.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdentityNativeNetworkResourceList",
      },
      network_resource: {
        value: cdktf.listMapperHcl(identityNetworkResourceToHclTerraform, true)(this._networkResource.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdentityNetworkResourceList",
      },
      ngs_access_policy: {
        value: cdktf.listMapperHcl(identityNgsAccessPolicyToHclTerraform, true)(this._ngsAccessPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityNgsAccessPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
