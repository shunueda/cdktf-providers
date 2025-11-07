// https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project_cloud_access_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectCloudAccessRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project_cloud_access_role#apply_to_all_accounts ProjectCloudAccessRole#apply_to_all_accounts}
  */
  readonly applyToAllAccounts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project_cloud_access_role#aws_iam_path ProjectCloudAccessRole#aws_iam_path}
  */
  readonly awsIamPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project_cloud_access_role#aws_iam_permissions_boundary ProjectCloudAccessRole#aws_iam_permissions_boundary}
  */
  readonly awsIamPermissionsBoundary?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project_cloud_access_role#aws_iam_role_name ProjectCloudAccessRole#aws_iam_role_name}
  */
  readonly awsIamRoleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project_cloud_access_role#future_accounts ProjectCloudAccessRole#future_accounts}
  */
  readonly futureAccounts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project_cloud_access_role#id ProjectCloudAccessRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project_cloud_access_role#last_updated ProjectCloudAccessRole#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project_cloud_access_role#long_term_access_keys ProjectCloudAccessRole#long_term_access_keys}
  */
  readonly longTermAccessKeys?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project_cloud_access_role#name ProjectCloudAccessRole#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project_cloud_access_role#project_id ProjectCloudAccessRole#project_id}
  */
  readonly projectId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project_cloud_access_role#short_term_access_keys ProjectCloudAccessRole#short_term_access_keys}
  */
  readonly shortTermAccessKeys?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project_cloud_access_role#web_access ProjectCloudAccessRole#web_access}
  */
  readonly webAccess?: boolean | cdktf.IResolvable;
  /**
  * accounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project_cloud_access_role#accounts ProjectCloudAccessRole#accounts}
  */
  readonly accounts?: ProjectCloudAccessRoleAccounts[] | cdktf.IResolvable;
  /**
  * aws_iam_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project_cloud_access_role#aws_iam_policies ProjectCloudAccessRole#aws_iam_policies}
  */
  readonly awsIamPolicies?: ProjectCloudAccessRoleAwsIamPolicies[] | cdktf.IResolvable;
  /**
  * azure_role_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project_cloud_access_role#azure_role_definitions ProjectCloudAccessRole#azure_role_definitions}
  */
  readonly azureRoleDefinitions?: ProjectCloudAccessRoleAzureRoleDefinitions[] | cdktf.IResolvable;
  /**
  * user_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project_cloud_access_role#user_groups ProjectCloudAccessRole#user_groups}
  */
  readonly userGroups?: ProjectCloudAccessRoleUserGroups[] | cdktf.IResolvable;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project_cloud_access_role#users ProjectCloudAccessRole#users}
  */
  readonly users?: ProjectCloudAccessRoleUsers[] | cdktf.IResolvable;
}
export interface ProjectCloudAccessRoleAccounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project_cloud_access_role#id ProjectCloudAccessRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function projectCloudAccessRoleAccountsToTerraform(struct?: ProjectCloudAccessRoleAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function projectCloudAccessRoleAccountsToHclTerraform(struct?: ProjectCloudAccessRoleAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectCloudAccessRoleAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectCloudAccessRoleAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudAccessRoleAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ProjectCloudAccessRoleAccountsList extends cdktf.ComplexList {
  public internalValue? : ProjectCloudAccessRoleAccounts[] | cdktf.IResolvable

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
  public get(index: number): ProjectCloudAccessRoleAccountsOutputReference {
    return new ProjectCloudAccessRoleAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudAccessRoleAwsIamPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project_cloud_access_role#id ProjectCloudAccessRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function projectCloudAccessRoleAwsIamPoliciesToTerraform(struct?: ProjectCloudAccessRoleAwsIamPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function projectCloudAccessRoleAwsIamPoliciesToHclTerraform(struct?: ProjectCloudAccessRoleAwsIamPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectCloudAccessRoleAwsIamPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectCloudAccessRoleAwsIamPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudAccessRoleAwsIamPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ProjectCloudAccessRoleAwsIamPoliciesList extends cdktf.ComplexList {
  public internalValue? : ProjectCloudAccessRoleAwsIamPolicies[] | cdktf.IResolvable

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
  public get(index: number): ProjectCloudAccessRoleAwsIamPoliciesOutputReference {
    return new ProjectCloudAccessRoleAwsIamPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudAccessRoleAzureRoleDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project_cloud_access_role#id ProjectCloudAccessRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function projectCloudAccessRoleAzureRoleDefinitionsToTerraform(struct?: ProjectCloudAccessRoleAzureRoleDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function projectCloudAccessRoleAzureRoleDefinitionsToHclTerraform(struct?: ProjectCloudAccessRoleAzureRoleDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectCloudAccessRoleAzureRoleDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectCloudAccessRoleAzureRoleDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudAccessRoleAzureRoleDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ProjectCloudAccessRoleAzureRoleDefinitionsList extends cdktf.ComplexList {
  public internalValue? : ProjectCloudAccessRoleAzureRoleDefinitions[] | cdktf.IResolvable

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
  public get(index: number): ProjectCloudAccessRoleAzureRoleDefinitionsOutputReference {
    return new ProjectCloudAccessRoleAzureRoleDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudAccessRoleUserGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project_cloud_access_role#id ProjectCloudAccessRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function projectCloudAccessRoleUserGroupsToTerraform(struct?: ProjectCloudAccessRoleUserGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function projectCloudAccessRoleUserGroupsToHclTerraform(struct?: ProjectCloudAccessRoleUserGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectCloudAccessRoleUserGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectCloudAccessRoleUserGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudAccessRoleUserGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ProjectCloudAccessRoleUserGroupsList extends cdktf.ComplexList {
  public internalValue? : ProjectCloudAccessRoleUserGroups[] | cdktf.IResolvable

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
  public get(index: number): ProjectCloudAccessRoleUserGroupsOutputReference {
    return new ProjectCloudAccessRoleUserGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectCloudAccessRoleUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project_cloud_access_role#id ProjectCloudAccessRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function projectCloudAccessRoleUsersToTerraform(struct?: ProjectCloudAccessRoleUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function projectCloudAccessRoleUsersToHclTerraform(struct?: ProjectCloudAccessRoleUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectCloudAccessRoleUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectCloudAccessRoleUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectCloudAccessRoleUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ProjectCloudAccessRoleUsersList extends cdktf.ComplexList {
  public internalValue? : ProjectCloudAccessRoleUsers[] | cdktf.IResolvable

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
  public get(index: number): ProjectCloudAccessRoleUsersOutputReference {
    return new ProjectCloudAccessRoleUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project_cloud_access_role cloudtamerio_project_cloud_access_role}
*/
export class ProjectCloudAccessRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudtamerio_project_cloud_access_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectCloudAccessRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectCloudAccessRole to import
  * @param importFromId The id of the existing ProjectCloudAccessRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project_cloud_access_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectCloudAccessRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudtamerio_project_cloud_access_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudtamer-io/cloudtamerio/0.2.0/docs/resources/project_cloud_access_role cloudtamerio_project_cloud_access_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectCloudAccessRoleConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectCloudAccessRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudtamerio_project_cloud_access_role',
      terraformGeneratorMetadata: {
        providerName: 'cloudtamerio',
        providerVersion: '0.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applyToAllAccounts = config.applyToAllAccounts;
    this._awsIamPath = config.awsIamPath;
    this._awsIamPermissionsBoundary = config.awsIamPermissionsBoundary;
    this._awsIamRoleName = config.awsIamRoleName;
    this._futureAccounts = config.futureAccounts;
    this._id = config.id;
    this._lastUpdated = config.lastUpdated;
    this._longTermAccessKeys = config.longTermAccessKeys;
    this._name = config.name;
    this._projectId = config.projectId;
    this._shortTermAccessKeys = config.shortTermAccessKeys;
    this._webAccess = config.webAccess;
    this._accounts.internalValue = config.accounts;
    this._awsIamPolicies.internalValue = config.awsIamPolicies;
    this._azureRoleDefinitions.internalValue = config.azureRoleDefinitions;
    this._userGroups.internalValue = config.userGroups;
    this._users.internalValue = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_to_all_accounts - computed: false, optional: true, required: false
  private _applyToAllAccounts?: boolean | cdktf.IResolvable; 
  public get applyToAllAccounts() {
    return this.getBooleanAttribute('apply_to_all_accounts');
  }
  public set applyToAllAccounts(value: boolean | cdktf.IResolvable) {
    this._applyToAllAccounts = value;
  }
  public resetApplyToAllAccounts() {
    this._applyToAllAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyToAllAccountsInput() {
    return this._applyToAllAccounts;
  }

  // aws_iam_path - computed: false, optional: true, required: false
  private _awsIamPath?: string; 
  public get awsIamPath() {
    return this.getStringAttribute('aws_iam_path');
  }
  public set awsIamPath(value: string) {
    this._awsIamPath = value;
  }
  public resetAwsIamPath() {
    this._awsIamPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamPathInput() {
    return this._awsIamPath;
  }

  // aws_iam_permissions_boundary - computed: false, optional: true, required: false
  private _awsIamPermissionsBoundary?: number; 
  public get awsIamPermissionsBoundary() {
    return this.getNumberAttribute('aws_iam_permissions_boundary');
  }
  public set awsIamPermissionsBoundary(value: number) {
    this._awsIamPermissionsBoundary = value;
  }
  public resetAwsIamPermissionsBoundary() {
    this._awsIamPermissionsBoundary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamPermissionsBoundaryInput() {
    return this._awsIamPermissionsBoundary;
  }

  // aws_iam_role_name - computed: false, optional: false, required: true
  private _awsIamRoleName?: string; 
  public get awsIamRoleName() {
    return this.getStringAttribute('aws_iam_role_name');
  }
  public set awsIamRoleName(value: string) {
    this._awsIamRoleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamRoleNameInput() {
    return this._awsIamRoleName;
  }

  // future_accounts - computed: false, optional: true, required: false
  private _futureAccounts?: boolean | cdktf.IResolvable; 
  public get futureAccounts() {
    return this.getBooleanAttribute('future_accounts');
  }
  public set futureAccounts(value: boolean | cdktf.IResolvable) {
    this._futureAccounts = value;
  }
  public resetFutureAccounts() {
    this._futureAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get futureAccountsInput() {
    return this._futureAccounts;
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

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // long_term_access_keys - computed: false, optional: true, required: false
  private _longTermAccessKeys?: boolean | cdktf.IResolvable; 
  public get longTermAccessKeys() {
    return this.getBooleanAttribute('long_term_access_keys');
  }
  public set longTermAccessKeys(value: boolean | cdktf.IResolvable) {
    this._longTermAccessKeys = value;
  }
  public resetLongTermAccessKeys() {
    this._longTermAccessKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longTermAccessKeysInput() {
    return this._longTermAccessKeys;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // short_term_access_keys - computed: false, optional: true, required: false
  private _shortTermAccessKeys?: boolean | cdktf.IResolvable; 
  public get shortTermAccessKeys() {
    return this.getBooleanAttribute('short_term_access_keys');
  }
  public set shortTermAccessKeys(value: boolean | cdktf.IResolvable) {
    this._shortTermAccessKeys = value;
  }
  public resetShortTermAccessKeys() {
    this._shortTermAccessKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortTermAccessKeysInput() {
    return this._shortTermAccessKeys;
  }

  // web_access - computed: false, optional: true, required: false
  private _webAccess?: boolean | cdktf.IResolvable; 
  public get webAccess() {
    return this.getBooleanAttribute('web_access');
  }
  public set webAccess(value: boolean | cdktf.IResolvable) {
    this._webAccess = value;
  }
  public resetWebAccess() {
    this._webAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAccessInput() {
    return this._webAccess;
  }

  // accounts - computed: false, optional: true, required: false
  private _accounts = new ProjectCloudAccessRoleAccountsList(this, "accounts", false);
  public get accounts() {
    return this._accounts;
  }
  public putAccounts(value: ProjectCloudAccessRoleAccounts[] | cdktf.IResolvable) {
    this._accounts.internalValue = value;
  }
  public resetAccounts() {
    this._accounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsInput() {
    return this._accounts.internalValue;
  }

  // aws_iam_policies - computed: false, optional: true, required: false
  private _awsIamPolicies = new ProjectCloudAccessRoleAwsIamPoliciesList(this, "aws_iam_policies", false);
  public get awsIamPolicies() {
    return this._awsIamPolicies;
  }
  public putAwsIamPolicies(value: ProjectCloudAccessRoleAwsIamPolicies[] | cdktf.IResolvable) {
    this._awsIamPolicies.internalValue = value;
  }
  public resetAwsIamPolicies() {
    this._awsIamPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamPoliciesInput() {
    return this._awsIamPolicies.internalValue;
  }

  // azure_role_definitions - computed: false, optional: true, required: false
  private _azureRoleDefinitions = new ProjectCloudAccessRoleAzureRoleDefinitionsList(this, "azure_role_definitions", false);
  public get azureRoleDefinitions() {
    return this._azureRoleDefinitions;
  }
  public putAzureRoleDefinitions(value: ProjectCloudAccessRoleAzureRoleDefinitions[] | cdktf.IResolvable) {
    this._azureRoleDefinitions.internalValue = value;
  }
  public resetAzureRoleDefinitions() {
    this._azureRoleDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureRoleDefinitionsInput() {
    return this._azureRoleDefinitions.internalValue;
  }

  // user_groups - computed: false, optional: true, required: false
  private _userGroups = new ProjectCloudAccessRoleUserGroupsList(this, "user_groups", false);
  public get userGroups() {
    return this._userGroups;
  }
  public putUserGroups(value: ProjectCloudAccessRoleUserGroups[] | cdktf.IResolvable) {
    this._userGroups.internalValue = value;
  }
  public resetUserGroups() {
    this._userGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupsInput() {
    return this._userGroups.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new ProjectCloudAccessRoleUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: ProjectCloudAccessRoleUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_to_all_accounts: cdktf.booleanToTerraform(this._applyToAllAccounts),
      aws_iam_path: cdktf.stringToTerraform(this._awsIamPath),
      aws_iam_permissions_boundary: cdktf.numberToTerraform(this._awsIamPermissionsBoundary),
      aws_iam_role_name: cdktf.stringToTerraform(this._awsIamRoleName),
      future_accounts: cdktf.booleanToTerraform(this._futureAccounts),
      id: cdktf.stringToTerraform(this._id),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      long_term_access_keys: cdktf.booleanToTerraform(this._longTermAccessKeys),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.numberToTerraform(this._projectId),
      short_term_access_keys: cdktf.booleanToTerraform(this._shortTermAccessKeys),
      web_access: cdktf.booleanToTerraform(this._webAccess),
      accounts: cdktf.listMapper(projectCloudAccessRoleAccountsToTerraform, true)(this._accounts.internalValue),
      aws_iam_policies: cdktf.listMapper(projectCloudAccessRoleAwsIamPoliciesToTerraform, true)(this._awsIamPolicies.internalValue),
      azure_role_definitions: cdktf.listMapper(projectCloudAccessRoleAzureRoleDefinitionsToTerraform, true)(this._azureRoleDefinitions.internalValue),
      user_groups: cdktf.listMapper(projectCloudAccessRoleUserGroupsToTerraform, true)(this._userGroups.internalValue),
      users: cdktf.listMapper(projectCloudAccessRoleUsersToTerraform, true)(this._users.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_to_all_accounts: {
        value: cdktf.booleanToHclTerraform(this._applyToAllAccounts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aws_iam_path: {
        value: cdktf.stringToHclTerraform(this._awsIamPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_iam_permissions_boundary: {
        value: cdktf.numberToHclTerraform(this._awsIamPermissionsBoundary),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      aws_iam_role_name: {
        value: cdktf.stringToHclTerraform(this._awsIamRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      future_accounts: {
        value: cdktf.booleanToHclTerraform(this._futureAccounts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      long_term_access_keys: {
        value: cdktf.booleanToHclTerraform(this._longTermAccessKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      short_term_access_keys: {
        value: cdktf.booleanToHclTerraform(this._shortTermAccessKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      web_access: {
        value: cdktf.booleanToHclTerraform(this._webAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      accounts: {
        value: cdktf.listMapperHcl(projectCloudAccessRoleAccountsToHclTerraform, true)(this._accounts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectCloudAccessRoleAccountsList",
      },
      aws_iam_policies: {
        value: cdktf.listMapperHcl(projectCloudAccessRoleAwsIamPoliciesToHclTerraform, true)(this._awsIamPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectCloudAccessRoleAwsIamPoliciesList",
      },
      azure_role_definitions: {
        value: cdktf.listMapperHcl(projectCloudAccessRoleAzureRoleDefinitionsToHclTerraform, true)(this._azureRoleDefinitions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectCloudAccessRoleAzureRoleDefinitionsList",
      },
      user_groups: {
        value: cdktf.listMapperHcl(projectCloudAccessRoleUserGroupsToHclTerraform, true)(this._userGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectCloudAccessRoleUserGroupsList",
      },
      users: {
        value: cdktf.listMapperHcl(projectCloudAccessRoleUsersToHclTerraform, true)(this._users.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectCloudAccessRoleUsersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
