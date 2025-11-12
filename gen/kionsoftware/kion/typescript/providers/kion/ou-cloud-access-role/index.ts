// https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/ou_cloud_access_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OuCloudAccessRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/ou_cloud_access_role#aws_iam_path OuCloudAccessRole#aws_iam_path}
  */
  readonly awsIamPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/ou_cloud_access_role#aws_iam_permissions_boundary OuCloudAccessRole#aws_iam_permissions_boundary}
  */
  readonly awsIamPermissionsBoundary?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/ou_cloud_access_role#aws_iam_role_name OuCloudAccessRole#aws_iam_role_name}
  */
  readonly awsIamRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/ou_cloud_access_role#id OuCloudAccessRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/ou_cloud_access_role#last_updated OuCloudAccessRole#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/ou_cloud_access_role#long_term_access_keys OuCloudAccessRole#long_term_access_keys}
  */
  readonly longTermAccessKeys?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/ou_cloud_access_role#name OuCloudAccessRole#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/ou_cloud_access_role#ou_id OuCloudAccessRole#ou_id}
  */
  readonly ouId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/ou_cloud_access_role#short_term_access_keys OuCloudAccessRole#short_term_access_keys}
  */
  readonly shortTermAccessKeys?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/ou_cloud_access_role#web_access OuCloudAccessRole#web_access}
  */
  readonly webAccess?: boolean | cdktf.IResolvable;
  /**
  * aws_iam_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/ou_cloud_access_role#aws_iam_policies OuCloudAccessRole#aws_iam_policies}
  */
  readonly awsIamPolicies?: OuCloudAccessRoleAwsIamPolicies[] | cdktf.IResolvable;
  /**
  * azure_role_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/ou_cloud_access_role#azure_role_definitions OuCloudAccessRole#azure_role_definitions}
  */
  readonly azureRoleDefinitions?: OuCloudAccessRoleAzureRoleDefinitions[] | cdktf.IResolvable;
  /**
  * gcp_iam_roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/ou_cloud_access_role#gcp_iam_roles OuCloudAccessRole#gcp_iam_roles}
  */
  readonly gcpIamRoles?: OuCloudAccessRoleGcpIamRoles[] | cdktf.IResolvable;
  /**
  * user_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/ou_cloud_access_role#user_groups OuCloudAccessRole#user_groups}
  */
  readonly userGroups?: OuCloudAccessRoleUserGroups[] | cdktf.IResolvable;
  /**
  * users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/ou_cloud_access_role#users OuCloudAccessRole#users}
  */
  readonly users?: OuCloudAccessRoleUsers[] | cdktf.IResolvable;
}
export interface OuCloudAccessRoleAwsIamPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/ou_cloud_access_role#id OuCloudAccessRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function ouCloudAccessRoleAwsIamPoliciesToTerraform(struct?: OuCloudAccessRoleAwsIamPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function ouCloudAccessRoleAwsIamPoliciesToHclTerraform(struct?: OuCloudAccessRoleAwsIamPolicies | cdktf.IResolvable): any {
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

export class OuCloudAccessRoleAwsIamPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OuCloudAccessRoleAwsIamPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OuCloudAccessRoleAwsIamPolicies | cdktf.IResolvable | undefined) {
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

export class OuCloudAccessRoleAwsIamPoliciesList extends cdktf.ComplexList {
  public internalValue? : OuCloudAccessRoleAwsIamPolicies[] | cdktf.IResolvable

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
  public get(index: number): OuCloudAccessRoleAwsIamPoliciesOutputReference {
    return new OuCloudAccessRoleAwsIamPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OuCloudAccessRoleAzureRoleDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/ou_cloud_access_role#id OuCloudAccessRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function ouCloudAccessRoleAzureRoleDefinitionsToTerraform(struct?: OuCloudAccessRoleAzureRoleDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function ouCloudAccessRoleAzureRoleDefinitionsToHclTerraform(struct?: OuCloudAccessRoleAzureRoleDefinitions | cdktf.IResolvable): any {
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

export class OuCloudAccessRoleAzureRoleDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OuCloudAccessRoleAzureRoleDefinitions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OuCloudAccessRoleAzureRoleDefinitions | cdktf.IResolvable | undefined) {
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

export class OuCloudAccessRoleAzureRoleDefinitionsList extends cdktf.ComplexList {
  public internalValue? : OuCloudAccessRoleAzureRoleDefinitions[] | cdktf.IResolvable

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
  public get(index: number): OuCloudAccessRoleAzureRoleDefinitionsOutputReference {
    return new OuCloudAccessRoleAzureRoleDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OuCloudAccessRoleGcpIamRoles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/ou_cloud_access_role#id OuCloudAccessRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function ouCloudAccessRoleGcpIamRolesToTerraform(struct?: OuCloudAccessRoleGcpIamRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function ouCloudAccessRoleGcpIamRolesToHclTerraform(struct?: OuCloudAccessRoleGcpIamRoles | cdktf.IResolvable): any {
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

export class OuCloudAccessRoleGcpIamRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OuCloudAccessRoleGcpIamRoles | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OuCloudAccessRoleGcpIamRoles | cdktf.IResolvable | undefined) {
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

export class OuCloudAccessRoleGcpIamRolesList extends cdktf.ComplexList {
  public internalValue? : OuCloudAccessRoleGcpIamRoles[] | cdktf.IResolvable

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
  public get(index: number): OuCloudAccessRoleGcpIamRolesOutputReference {
    return new OuCloudAccessRoleGcpIamRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OuCloudAccessRoleUserGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/ou_cloud_access_role#id OuCloudAccessRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function ouCloudAccessRoleUserGroupsToTerraform(struct?: OuCloudAccessRoleUserGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function ouCloudAccessRoleUserGroupsToHclTerraform(struct?: OuCloudAccessRoleUserGroups | cdktf.IResolvable): any {
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

export class OuCloudAccessRoleUserGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OuCloudAccessRoleUserGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OuCloudAccessRoleUserGroups | cdktf.IResolvable | undefined) {
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

export class OuCloudAccessRoleUserGroupsList extends cdktf.ComplexList {
  public internalValue? : OuCloudAccessRoleUserGroups[] | cdktf.IResolvable

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
  public get(index: number): OuCloudAccessRoleUserGroupsOutputReference {
    return new OuCloudAccessRoleUserGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OuCloudAccessRoleUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/ou_cloud_access_role#id OuCloudAccessRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function ouCloudAccessRoleUsersToTerraform(struct?: OuCloudAccessRoleUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function ouCloudAccessRoleUsersToHclTerraform(struct?: OuCloudAccessRoleUsers | cdktf.IResolvable): any {
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

export class OuCloudAccessRoleUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OuCloudAccessRoleUsers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OuCloudAccessRoleUsers | cdktf.IResolvable | undefined) {
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

export class OuCloudAccessRoleUsersList extends cdktf.ComplexList {
  public internalValue? : OuCloudAccessRoleUsers[] | cdktf.IResolvable

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
  public get(index: number): OuCloudAccessRoleUsersOutputReference {
    return new OuCloudAccessRoleUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/ou_cloud_access_role kion_ou_cloud_access_role}
*/
export class OuCloudAccessRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kion_ou_cloud_access_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OuCloudAccessRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OuCloudAccessRole to import
  * @param importFromId The id of the existing OuCloudAccessRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/ou_cloud_access_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OuCloudAccessRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kion_ou_cloud_access_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/ou_cloud_access_role kion_ou_cloud_access_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OuCloudAccessRoleConfig
  */
  public constructor(scope: Construct, id: string, config: OuCloudAccessRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'kion_ou_cloud_access_role',
      terraformGeneratorMetadata: {
        providerName: 'kion',
        providerVersion: '0.3.29',
        providerVersionConstraint: '0.3.29'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsIamPath = config.awsIamPath;
    this._awsIamPermissionsBoundary = config.awsIamPermissionsBoundary;
    this._awsIamRoleName = config.awsIamRoleName;
    this._id = config.id;
    this._lastUpdated = config.lastUpdated;
    this._longTermAccessKeys = config.longTermAccessKeys;
    this._name = config.name;
    this._ouId = config.ouId;
    this._shortTermAccessKeys = config.shortTermAccessKeys;
    this._webAccess = config.webAccess;
    this._awsIamPolicies.internalValue = config.awsIamPolicies;
    this._azureRoleDefinitions.internalValue = config.azureRoleDefinitions;
    this._gcpIamRoles.internalValue = config.gcpIamRoles;
    this._userGroups.internalValue = config.userGroups;
    this._users.internalValue = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // aws_iam_role_name - computed: false, optional: true, required: false
  private _awsIamRoleName?: string; 
  public get awsIamRoleName() {
    return this.getStringAttribute('aws_iam_role_name');
  }
  public set awsIamRoleName(value: string) {
    this._awsIamRoleName = value;
  }
  public resetAwsIamRoleName() {
    this._awsIamRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamRoleNameInput() {
    return this._awsIamRoleName;
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

  // ou_id - computed: false, optional: false, required: true
  private _ouId?: number; 
  public get ouId() {
    return this.getNumberAttribute('ou_id');
  }
  public set ouId(value: number) {
    this._ouId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ouIdInput() {
    return this._ouId;
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

  // aws_iam_policies - computed: false, optional: true, required: false
  private _awsIamPolicies = new OuCloudAccessRoleAwsIamPoliciesList(this, "aws_iam_policies", true);
  public get awsIamPolicies() {
    return this._awsIamPolicies;
  }
  public putAwsIamPolicies(value: OuCloudAccessRoleAwsIamPolicies[] | cdktf.IResolvable) {
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
  private _azureRoleDefinitions = new OuCloudAccessRoleAzureRoleDefinitionsList(this, "azure_role_definitions", true);
  public get azureRoleDefinitions() {
    return this._azureRoleDefinitions;
  }
  public putAzureRoleDefinitions(value: OuCloudAccessRoleAzureRoleDefinitions[] | cdktf.IResolvable) {
    this._azureRoleDefinitions.internalValue = value;
  }
  public resetAzureRoleDefinitions() {
    this._azureRoleDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureRoleDefinitionsInput() {
    return this._azureRoleDefinitions.internalValue;
  }

  // gcp_iam_roles - computed: false, optional: true, required: false
  private _gcpIamRoles = new OuCloudAccessRoleGcpIamRolesList(this, "gcp_iam_roles", true);
  public get gcpIamRoles() {
    return this._gcpIamRoles;
  }
  public putGcpIamRoles(value: OuCloudAccessRoleGcpIamRoles[] | cdktf.IResolvable) {
    this._gcpIamRoles.internalValue = value;
  }
  public resetGcpIamRoles() {
    this._gcpIamRoles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpIamRolesInput() {
    return this._gcpIamRoles.internalValue;
  }

  // user_groups - computed: false, optional: true, required: false
  private _userGroups = new OuCloudAccessRoleUserGroupsList(this, "user_groups", true);
  public get userGroups() {
    return this._userGroups;
  }
  public putUserGroups(value: OuCloudAccessRoleUserGroups[] | cdktf.IResolvable) {
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
  private _users = new OuCloudAccessRoleUsersList(this, "users", true);
  public get users() {
    return this._users;
  }
  public putUsers(value: OuCloudAccessRoleUsers[] | cdktf.IResolvable) {
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
      aws_iam_path: cdktf.stringToTerraform(this._awsIamPath),
      aws_iam_permissions_boundary: cdktf.numberToTerraform(this._awsIamPermissionsBoundary),
      aws_iam_role_name: cdktf.stringToTerraform(this._awsIamRoleName),
      id: cdktf.stringToTerraform(this._id),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      long_term_access_keys: cdktf.booleanToTerraform(this._longTermAccessKeys),
      name: cdktf.stringToTerraform(this._name),
      ou_id: cdktf.numberToTerraform(this._ouId),
      short_term_access_keys: cdktf.booleanToTerraform(this._shortTermAccessKeys),
      web_access: cdktf.booleanToTerraform(this._webAccess),
      aws_iam_policies: cdktf.listMapper(ouCloudAccessRoleAwsIamPoliciesToTerraform, true)(this._awsIamPolicies.internalValue),
      azure_role_definitions: cdktf.listMapper(ouCloudAccessRoleAzureRoleDefinitionsToTerraform, true)(this._azureRoleDefinitions.internalValue),
      gcp_iam_roles: cdktf.listMapper(ouCloudAccessRoleGcpIamRolesToTerraform, true)(this._gcpIamRoles.internalValue),
      user_groups: cdktf.listMapper(ouCloudAccessRoleUserGroupsToTerraform, true)(this._userGroups.internalValue),
      users: cdktf.listMapper(ouCloudAccessRoleUsersToTerraform, true)(this._users.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      ou_id: {
        value: cdktf.numberToHclTerraform(this._ouId),
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
      aws_iam_policies: {
        value: cdktf.listMapperHcl(ouCloudAccessRoleAwsIamPoliciesToHclTerraform, true)(this._awsIamPolicies.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OuCloudAccessRoleAwsIamPoliciesList",
      },
      azure_role_definitions: {
        value: cdktf.listMapperHcl(ouCloudAccessRoleAzureRoleDefinitionsToHclTerraform, true)(this._azureRoleDefinitions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OuCloudAccessRoleAzureRoleDefinitionsList",
      },
      gcp_iam_roles: {
        value: cdktf.listMapperHcl(ouCloudAccessRoleGcpIamRolesToHclTerraform, true)(this._gcpIamRoles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OuCloudAccessRoleGcpIamRolesList",
      },
      user_groups: {
        value: cdktf.listMapperHcl(ouCloudAccessRoleUserGroupsToHclTerraform, true)(this._userGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OuCloudAccessRoleUserGroupsList",
      },
      users: {
        value: cdktf.listMapperHcl(ouCloudAccessRoleUsersToHclTerraform, true)(this._users.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OuCloudAccessRoleUsersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
