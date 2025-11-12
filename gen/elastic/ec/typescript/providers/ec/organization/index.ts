// https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Manages the members of an Elastic Cloud organization. The key of each entry should be the email of the member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/organization#members Organization#members}
  */
  readonly members?: { [key: string]: OrganizationMembers } | cdktf.IResolvable;
}
export interface OrganizationMembersDeploymentRoles {
  /**
  * Role applies to all deployments in the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/organization#all_deployments Organization#all_deployments}
  */
  readonly allDeployments?: boolean | cdktf.IResolvable;
  /**
  * If provided, the user assigned this role assignment will be granted this application role when signing in to the deployment(s) specified in the role assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/organization#application_roles Organization#application_roles}
  */
  readonly applicationRoles?: string[];
  /**
  * Role applies to deployments listed here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/organization#deployment_ids Organization#deployment_ids}
  */
  readonly deploymentIds?: string[];
  /**
  * Assigned role. Must be on of `viewer`, `editor` or `admin`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/organization#role Organization#role}
  */
  readonly role: string;
}

export function organizationMembersDeploymentRolesToTerraform(struct?: OrganizationMembersDeploymentRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_deployments: cdktf.booleanToTerraform(struct!.allDeployments),
    application_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applicationRoles),
    deployment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deploymentIds),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function organizationMembersDeploymentRolesToHclTerraform(struct?: OrganizationMembersDeploymentRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_deployments: {
      value: cdktf.booleanToHclTerraform(struct!.allDeployments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    application_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applicationRoles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    deployment_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deploymentIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationMembersDeploymentRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationMembersDeploymentRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDeployments !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDeployments = this._allDeployments;
    }
    if (this._applicationRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationRoles = this._applicationRoles;
    }
    if (this._deploymentIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentIds = this._deploymentIds;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationMembersDeploymentRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDeployments = undefined;
      this._applicationRoles = undefined;
      this._deploymentIds = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDeployments = value.allDeployments;
      this._applicationRoles = value.applicationRoles;
      this._deploymentIds = value.deploymentIds;
      this._role = value.role;
    }
  }

  // all_deployments - computed: false, optional: true, required: false
  private _allDeployments?: boolean | cdktf.IResolvable; 
  public get allDeployments() {
    return this.getBooleanAttribute('all_deployments');
  }
  public set allDeployments(value: boolean | cdktf.IResolvable) {
    this._allDeployments = value;
  }
  public resetAllDeployments() {
    this._allDeployments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDeploymentsInput() {
    return this._allDeployments;
  }

  // application_roles - computed: false, optional: true, required: false
  private _applicationRoles?: string[]; 
  public get applicationRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('application_roles'));
  }
  public set applicationRoles(value: string[]) {
    this._applicationRoles = value;
  }
  public resetApplicationRoles() {
    this._applicationRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationRolesInput() {
    return this._applicationRoles;
  }

  // deployment_ids - computed: false, optional: true, required: false
  private _deploymentIds?: string[]; 
  public get deploymentIds() {
    return cdktf.Fn.tolist(this.getListAttribute('deployment_ids'));
  }
  public set deploymentIds(value: string[]) {
    this._deploymentIds = value;
  }
  public resetDeploymentIds() {
    this._deploymentIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdsInput() {
    return this._deploymentIds;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class OrganizationMembersDeploymentRolesList extends cdktf.ComplexList {
  public internalValue? : OrganizationMembersDeploymentRoles[] | cdktf.IResolvable

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
  public get(index: number): OrganizationMembersDeploymentRolesOutputReference {
    return new OrganizationMembersDeploymentRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrganizationMembersProjectElasticsearchRoles {
  /**
  * Role applies to all projects in the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/organization#all_projects Organization#all_projects}
  */
  readonly allProjects?: boolean | cdktf.IResolvable;
  /**
  * If provided, the user assigned this role assignment will be granted this application role when signing in to the project(s) specified in the role assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/organization#application_roles Organization#application_roles}
  */
  readonly applicationRoles?: string[];
  /**
  * Role applies to projects listed here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/organization#project_ids Organization#project_ids}
  */
  readonly projectIds?: string[];
  /**
  * Assigned role. (Allowed values: `admin`, `developer`, `viewer`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/organization#role Organization#role}
  */
  readonly role: string;
}

export function organizationMembersProjectElasticsearchRolesToTerraform(struct?: OrganizationMembersProjectElasticsearchRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_projects: cdktf.booleanToTerraform(struct!.allProjects),
    application_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applicationRoles),
    project_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.projectIds),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function organizationMembersProjectElasticsearchRolesToHclTerraform(struct?: OrganizationMembersProjectElasticsearchRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_projects: {
      value: cdktf.booleanToHclTerraform(struct!.allProjects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    application_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applicationRoles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    project_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.projectIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationMembersProjectElasticsearchRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationMembersProjectElasticsearchRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allProjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.allProjects = this._allProjects;
    }
    if (this._applicationRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationRoles = this._applicationRoles;
    }
    if (this._projectIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectIds = this._projectIds;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationMembersProjectElasticsearchRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allProjects = undefined;
      this._applicationRoles = undefined;
      this._projectIds = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allProjects = value.allProjects;
      this._applicationRoles = value.applicationRoles;
      this._projectIds = value.projectIds;
      this._role = value.role;
    }
  }

  // all_projects - computed: true, optional: true, required: false
  private _allProjects?: boolean | cdktf.IResolvable; 
  public get allProjects() {
    return this.getBooleanAttribute('all_projects');
  }
  public set allProjects(value: boolean | cdktf.IResolvable) {
    this._allProjects = value;
  }
  public resetAllProjects() {
    this._allProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allProjectsInput() {
    return this._allProjects;
  }

  // application_roles - computed: true, optional: true, required: false
  private _applicationRoles?: string[]; 
  public get applicationRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('application_roles'));
  }
  public set applicationRoles(value: string[]) {
    this._applicationRoles = value;
  }
  public resetApplicationRoles() {
    this._applicationRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationRolesInput() {
    return this._applicationRoles;
  }

  // project_ids - computed: true, optional: true, required: false
  private _projectIds?: string[]; 
  public get projectIds() {
    return cdktf.Fn.tolist(this.getListAttribute('project_ids'));
  }
  public set projectIds(value: string[]) {
    this._projectIds = value;
  }
  public resetProjectIds() {
    this._projectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdsInput() {
    return this._projectIds;
  }

  // role - computed: true, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class OrganizationMembersProjectElasticsearchRolesList extends cdktf.ComplexList {
  public internalValue? : OrganizationMembersProjectElasticsearchRoles[] | cdktf.IResolvable

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
  public get(index: number): OrganizationMembersProjectElasticsearchRolesOutputReference {
    return new OrganizationMembersProjectElasticsearchRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrganizationMembersProjectObservabilityRoles {
  /**
  * Role applies to all projects in the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/organization#all_projects Organization#all_projects}
  */
  readonly allProjects?: boolean | cdktf.IResolvable;
  /**
  * If provided, the user assigned this role assignment will be granted this application role when signing in to the project(s) specified in the role assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/organization#application_roles Organization#application_roles}
  */
  readonly applicationRoles?: string[];
  /**
  * Role applies to projects listed here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/organization#project_ids Organization#project_ids}
  */
  readonly projectIds?: string[];
  /**
  * Assigned role. (Allowed values: `admin`, `editor`, `viewer`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/organization#role Organization#role}
  */
  readonly role: string;
}

export function organizationMembersProjectObservabilityRolesToTerraform(struct?: OrganizationMembersProjectObservabilityRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_projects: cdktf.booleanToTerraform(struct!.allProjects),
    application_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applicationRoles),
    project_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.projectIds),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function organizationMembersProjectObservabilityRolesToHclTerraform(struct?: OrganizationMembersProjectObservabilityRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_projects: {
      value: cdktf.booleanToHclTerraform(struct!.allProjects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    application_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applicationRoles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    project_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.projectIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationMembersProjectObservabilityRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationMembersProjectObservabilityRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allProjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.allProjects = this._allProjects;
    }
    if (this._applicationRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationRoles = this._applicationRoles;
    }
    if (this._projectIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectIds = this._projectIds;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationMembersProjectObservabilityRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allProjects = undefined;
      this._applicationRoles = undefined;
      this._projectIds = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allProjects = value.allProjects;
      this._applicationRoles = value.applicationRoles;
      this._projectIds = value.projectIds;
      this._role = value.role;
    }
  }

  // all_projects - computed: true, optional: true, required: false
  private _allProjects?: boolean | cdktf.IResolvable; 
  public get allProjects() {
    return this.getBooleanAttribute('all_projects');
  }
  public set allProjects(value: boolean | cdktf.IResolvable) {
    this._allProjects = value;
  }
  public resetAllProjects() {
    this._allProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allProjectsInput() {
    return this._allProjects;
  }

  // application_roles - computed: true, optional: true, required: false
  private _applicationRoles?: string[]; 
  public get applicationRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('application_roles'));
  }
  public set applicationRoles(value: string[]) {
    this._applicationRoles = value;
  }
  public resetApplicationRoles() {
    this._applicationRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationRolesInput() {
    return this._applicationRoles;
  }

  // project_ids - computed: true, optional: true, required: false
  private _projectIds?: string[]; 
  public get projectIds() {
    return cdktf.Fn.tolist(this.getListAttribute('project_ids'));
  }
  public set projectIds(value: string[]) {
    this._projectIds = value;
  }
  public resetProjectIds() {
    this._projectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdsInput() {
    return this._projectIds;
  }

  // role - computed: true, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class OrganizationMembersProjectObservabilityRolesList extends cdktf.ComplexList {
  public internalValue? : OrganizationMembersProjectObservabilityRoles[] | cdktf.IResolvable

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
  public get(index: number): OrganizationMembersProjectObservabilityRolesOutputReference {
    return new OrganizationMembersProjectObservabilityRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrganizationMembersProjectSecurityRoles {
  /**
  * Role applies to all projects in the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/organization#all_projects Organization#all_projects}
  */
  readonly allProjects?: boolean | cdktf.IResolvable;
  /**
  * If provided, the user assigned this role assignment will be granted this application role when signing in to the project(s) specified in the role assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/organization#application_roles Organization#application_roles}
  */
  readonly applicationRoles?: string[];
  /**
  * Role applies to projects listed here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/organization#project_ids Organization#project_ids}
  */
  readonly projectIds?: string[];
  /**
  * Assigned role. (Allowed values: `admin`, `editor`, `viewer`, `t1-analyst`, `t2-analyst`, `t3-analyst`, `threat-intel-analyst`, `rule-author`, `soc-manager`, `endpoint-operations-analyst`, `platform-engineer`, `detections-admin`, `endpoint-policy-manager`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/organization#role Organization#role}
  */
  readonly role: string;
}

export function organizationMembersProjectSecurityRolesToTerraform(struct?: OrganizationMembersProjectSecurityRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_projects: cdktf.booleanToTerraform(struct!.allProjects),
    application_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applicationRoles),
    project_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.projectIds),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function organizationMembersProjectSecurityRolesToHclTerraform(struct?: OrganizationMembersProjectSecurityRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_projects: {
      value: cdktf.booleanToHclTerraform(struct!.allProjects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    application_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applicationRoles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    project_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.projectIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationMembersProjectSecurityRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationMembersProjectSecurityRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allProjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.allProjects = this._allProjects;
    }
    if (this._applicationRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationRoles = this._applicationRoles;
    }
    if (this._projectIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectIds = this._projectIds;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationMembersProjectSecurityRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allProjects = undefined;
      this._applicationRoles = undefined;
      this._projectIds = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allProjects = value.allProjects;
      this._applicationRoles = value.applicationRoles;
      this._projectIds = value.projectIds;
      this._role = value.role;
    }
  }

  // all_projects - computed: true, optional: true, required: false
  private _allProjects?: boolean | cdktf.IResolvable; 
  public get allProjects() {
    return this.getBooleanAttribute('all_projects');
  }
  public set allProjects(value: boolean | cdktf.IResolvable) {
    this._allProjects = value;
  }
  public resetAllProjects() {
    this._allProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allProjectsInput() {
    return this._allProjects;
  }

  // application_roles - computed: true, optional: true, required: false
  private _applicationRoles?: string[]; 
  public get applicationRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('application_roles'));
  }
  public set applicationRoles(value: string[]) {
    this._applicationRoles = value;
  }
  public resetApplicationRoles() {
    this._applicationRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationRolesInput() {
    return this._applicationRoles;
  }

  // project_ids - computed: true, optional: true, required: false
  private _projectIds?: string[]; 
  public get projectIds() {
    return cdktf.Fn.tolist(this.getListAttribute('project_ids'));
  }
  public set projectIds(value: string[]) {
    this._projectIds = value;
  }
  public resetProjectIds() {
    this._projectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdsInput() {
    return this._projectIds;
  }

  // role - computed: true, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class OrganizationMembersProjectSecurityRolesList extends cdktf.ComplexList {
  public internalValue? : OrganizationMembersProjectSecurityRoles[] | cdktf.IResolvable

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
  public get(index: number): OrganizationMembersProjectSecurityRolesOutputReference {
    return new OrganizationMembersProjectSecurityRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrganizationMembers {
  /**
  * Grant access to one or more deployments. For more info see: [Deployment instance roles](https://www.elastic.co/guide/en/cloud/current/ec-user-privileges.html#ec_instance_access_roles).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/organization#deployment_roles Organization#deployment_roles}
  */
  readonly deploymentRoles?: OrganizationMembersDeploymentRoles[] | cdktf.IResolvable;
  /**
  * The optional organization role for the member. Can be one of `organization-admin`, `billing-admin`. For more info see: [Organization roles](https://www.elastic.co/guide/en/cloud/current/ec-user-privileges.html#ec_organization_level_roles)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/organization#organization_role Organization#organization_role}
  */
  readonly organizationRole?: string;
  /**
  * Roles assigned for elasticsearch projects. For more info see: [Serverless elasticsearch roles](https://www.elastic.co/docs/current/serverless/general/assign-user-roles#es) 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/organization#project_elasticsearch_roles Organization#project_elasticsearch_roles}
  */
  readonly projectElasticsearchRoles?: OrganizationMembersProjectElasticsearchRoles[] | cdktf.IResolvable;
  /**
  * Roles assigned for observability projects. For more info see: [Serverless observability roles](https://www.elastic.co/docs/current/serverless/general/assign-user-roles#observability)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/organization#project_observability_roles Organization#project_observability_roles}
  */
  readonly projectObservabilityRoles?: OrganizationMembersProjectObservabilityRoles[] | cdktf.IResolvable;
  /**
  * Roles assigned for security projects. For more info see: [Serverless security roles](https://www.elastic.co/docs/current/serverless/general/assign-user-roles#security)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/organization#project_security_roles Organization#project_security_roles}
  */
  readonly projectSecurityRoles?: OrganizationMembersProjectSecurityRoles[] | cdktf.IResolvable;
}

export function organizationMembersToTerraform(struct?: OrganizationMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_roles: cdktf.listMapper(organizationMembersDeploymentRolesToTerraform, false)(struct!.deploymentRoles),
    organization_role: cdktf.stringToTerraform(struct!.organizationRole),
    project_elasticsearch_roles: cdktf.listMapper(organizationMembersProjectElasticsearchRolesToTerraform, false)(struct!.projectElasticsearchRoles),
    project_observability_roles: cdktf.listMapper(organizationMembersProjectObservabilityRolesToTerraform, false)(struct!.projectObservabilityRoles),
    project_security_roles: cdktf.listMapper(organizationMembersProjectSecurityRolesToTerraform, false)(struct!.projectSecurityRoles),
  }
}


export function organizationMembersToHclTerraform(struct?: OrganizationMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment_roles: {
      value: cdktf.listMapperHcl(organizationMembersDeploymentRolesToHclTerraform, false)(struct!.deploymentRoles),
      isBlock: true,
      type: "set",
      storageClassType: "OrganizationMembersDeploymentRolesList",
    },
    organization_role: {
      value: cdktf.stringToHclTerraform(struct!.organizationRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_elasticsearch_roles: {
      value: cdktf.listMapperHcl(organizationMembersProjectElasticsearchRolesToHclTerraform, false)(struct!.projectElasticsearchRoles),
      isBlock: true,
      type: "set",
      storageClassType: "OrganizationMembersProjectElasticsearchRolesList",
    },
    project_observability_roles: {
      value: cdktf.listMapperHcl(organizationMembersProjectObservabilityRolesToHclTerraform, false)(struct!.projectObservabilityRoles),
      isBlock: true,
      type: "set",
      storageClassType: "OrganizationMembersProjectObservabilityRolesList",
    },
    project_security_roles: {
      value: cdktf.listMapperHcl(organizationMembersProjectSecurityRolesToHclTerraform, false)(struct!.projectSecurityRoles),
      isBlock: true,
      type: "set",
      storageClassType: "OrganizationMembersProjectSecurityRolesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationMembersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): OrganizationMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentRoles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentRoles = this._deploymentRoles?.internalValue;
    }
    if (this._organizationRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationRole = this._organizationRole;
    }
    if (this._projectElasticsearchRoles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectElasticsearchRoles = this._projectElasticsearchRoles?.internalValue;
    }
    if (this._projectObservabilityRoles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectObservabilityRoles = this._projectObservabilityRoles?.internalValue;
    }
    if (this._projectSecurityRoles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectSecurityRoles = this._projectSecurityRoles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deploymentRoles.internalValue = undefined;
      this._organizationRole = undefined;
      this._projectElasticsearchRoles.internalValue = undefined;
      this._projectObservabilityRoles.internalValue = undefined;
      this._projectSecurityRoles.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deploymentRoles.internalValue = value.deploymentRoles;
      this._organizationRole = value.organizationRole;
      this._projectElasticsearchRoles.internalValue = value.projectElasticsearchRoles;
      this._projectObservabilityRoles.internalValue = value.projectObservabilityRoles;
      this._projectSecurityRoles.internalValue = value.projectSecurityRoles;
    }
  }

  // deployment_roles - computed: false, optional: true, required: false
  private _deploymentRoles = new OrganizationMembersDeploymentRolesList(this, "deployment_roles", true);
  public get deploymentRoles() {
    return this._deploymentRoles;
  }
  public putDeploymentRoles(value: OrganizationMembersDeploymentRoles[] | cdktf.IResolvable) {
    this._deploymentRoles.internalValue = value;
  }
  public resetDeploymentRoles() {
    this._deploymentRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentRolesInput() {
    return this._deploymentRoles.internalValue;
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // invitation_pending - computed: true, optional: false, required: false
  public get invitationPending() {
    return this.getBooleanAttribute('invitation_pending');
  }

  // organization_role - computed: false, optional: true, required: false
  private _organizationRole?: string; 
  public get organizationRole() {
    return this.getStringAttribute('organization_role');
  }
  public set organizationRole(value: string) {
    this._organizationRole = value;
  }
  public resetOrganizationRole() {
    this._organizationRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationRoleInput() {
    return this._organizationRole;
  }

  // project_elasticsearch_roles - computed: true, optional: true, required: false
  private _projectElasticsearchRoles = new OrganizationMembersProjectElasticsearchRolesList(this, "project_elasticsearch_roles", true);
  public get projectElasticsearchRoles() {
    return this._projectElasticsearchRoles;
  }
  public putProjectElasticsearchRoles(value: OrganizationMembersProjectElasticsearchRoles[] | cdktf.IResolvable) {
    this._projectElasticsearchRoles.internalValue = value;
  }
  public resetProjectElasticsearchRoles() {
    this._projectElasticsearchRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectElasticsearchRolesInput() {
    return this._projectElasticsearchRoles.internalValue;
  }

  // project_observability_roles - computed: true, optional: true, required: false
  private _projectObservabilityRoles = new OrganizationMembersProjectObservabilityRolesList(this, "project_observability_roles", true);
  public get projectObservabilityRoles() {
    return this._projectObservabilityRoles;
  }
  public putProjectObservabilityRoles(value: OrganizationMembersProjectObservabilityRoles[] | cdktf.IResolvable) {
    this._projectObservabilityRoles.internalValue = value;
  }
  public resetProjectObservabilityRoles() {
    this._projectObservabilityRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectObservabilityRolesInput() {
    return this._projectObservabilityRoles.internalValue;
  }

  // project_security_roles - computed: true, optional: true, required: false
  private _projectSecurityRoles = new OrganizationMembersProjectSecurityRolesList(this, "project_security_roles", true);
  public get projectSecurityRoles() {
    return this._projectSecurityRoles;
  }
  public putProjectSecurityRoles(value: OrganizationMembersProjectSecurityRoles[] | cdktf.IResolvable) {
    this._projectSecurityRoles.internalValue = value;
  }
  public resetProjectSecurityRoles() {
    this._projectSecurityRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectSecurityRolesInput() {
    return this._projectSecurityRoles.internalValue;
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}

export class OrganizationMembersMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrganizationMembers } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): OrganizationMembersOutputReference {
    return new OrganizationMembersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/organization ec_organization}
*/
export class Organization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ec_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Organization to import
  * @param importFromId The id of the existing Organization that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Organization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ec_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/ec/0.12.2/docs/resources/organization ec_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OrganizationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ec_organization',
      terraformGeneratorMetadata: {
        providerName: 'ec',
        providerVersion: '0.12.2',
        providerVersionConstraint: '0.12.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._members.internalValue = config.members;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // members - computed: false, optional: true, required: false
  private _members = new OrganizationMembersMap(this, "members");
  public get members() {
    return this._members;
  }
  public putMembers(value: { [key: string]: OrganizationMembers } | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      members: cdktf.hashMapper(organizationMembersToTerraform)(this._members.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      members: {
        value: cdktf.hashMapperHcl(organizationMembersToHclTerraform)(this._members.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "OrganizationMembersMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
