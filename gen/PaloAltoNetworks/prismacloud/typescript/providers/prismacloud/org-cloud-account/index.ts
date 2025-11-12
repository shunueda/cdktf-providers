// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgCloudAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * to disable cloud account instead of deleting on calling destroy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#disable_on_destroy OrgCloudAccount#disable_on_destroy}
  */
  readonly disableOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#id OrgCloudAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#aws OrgCloudAccount#aws}
  */
  readonly aws?: OrgCloudAccountAws;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#azure OrgCloudAccount#azure}
  */
  readonly azure?: OrgCloudAccountAzure;
  /**
  * gcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#gcp OrgCloudAccount#gcp}
  */
  readonly gcp?: OrgCloudAccountGcp;
  /**
  * oci block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#oci OrgCloudAccount#oci}
  */
  readonly oci?: OrgCloudAccountOci;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#timeouts OrgCloudAccount#timeouts}
  */
  readonly timeouts?: OrgCloudAccountTimeouts;
}
export interface OrgCloudAccountAwsHierarchySelection {
  /**
  * Display name for AWS OU, AWS account, or AWS organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#display_name OrgCloudAccount#display_name}
  */
  readonly displayName: string;
  /**
  * Valid values: OU, ACCOUNT, ORG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#node_type OrgCloudAccount#node_type}
  */
  readonly nodeType: string;
  /**
  * Resource ID. Valid values are AWS OU ID, AWS account ID, or AWS Organization ID. Note you must escape any double quotes in the resource ID with a backslash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#resource_id OrgCloudAccount#resource_id}
  */
  readonly resourceId: string;
  /**
  * Selection type. Valid values: INCLUDE to include the specified resource to onboard, EXCLUDE to exclude the specified resource and onboard the rest, ALL to onboard all resources in the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#selection_type OrgCloudAccount#selection_type}
  */
  readonly selectionType: string;
}

export function orgCloudAccountAwsHierarchySelectionToTerraform(struct?: OrgCloudAccountAwsHierarchySelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    selection_type: cdktf.stringToTerraform(struct!.selectionType),
  }
}


export function orgCloudAccountAwsHierarchySelectionToHclTerraform(struct?: OrgCloudAccountAwsHierarchySelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection_type: {
      value: cdktf.stringToHclTerraform(struct!.selectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgCloudAccountAwsHierarchySelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgCloudAccountAwsHierarchySelection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._selectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionType = this._selectionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgCloudAccountAwsHierarchySelection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._nodeType = undefined;
      this._resourceId = undefined;
      this._selectionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._nodeType = value.nodeType;
      this._resourceId = value.resourceId;
      this._selectionType = value.selectionType;
    }
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // selection_type - computed: false, optional: false, required: true
  private _selectionType?: string; 
  public get selectionType() {
    return this.getStringAttribute('selection_type');
  }
  public set selectionType(value: string) {
    this._selectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionTypeInput() {
    return this._selectionType;
  }
}

export class OrgCloudAccountAwsHierarchySelectionList extends cdktf.ComplexList {
  public internalValue? : OrgCloudAccountAwsHierarchySelection[] | cdktf.IResolvable

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
  public get(index: number): OrgCloudAccountAwsHierarchySelectionOutputReference {
    return new OrgCloudAccountAwsHierarchySelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgCloudAccountAws {
  /**
  * AWS account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#account_id OrgCloudAccount#account_id}
  */
  readonly accountId: string;
  /**
  * Account type - organization or account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#account_type OrgCloudAccount#account_type}
  */
  readonly accountType?: string;
  /**
  * Whether or not the account is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#enabled OrgCloudAccount#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * AWS account external ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#external_id OrgCloudAccount#external_id}
  */
  readonly externalId: string;
  /**
  * List of account IDs to which you are assigning this account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#group_ids OrgCloudAccount#group_ids}
  */
  readonly groupIds: string[];
  /**
  * AWS Member account role's external ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#member_external_id OrgCloudAccount#member_external_id}
  */
  readonly memberExternalId: string;
  /**
  * AWS Member account role name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#member_role_name OrgCloudAccount#member_role_name}
  */
  readonly memberRoleName: string;
  /**
  * true = The member role created using stack set exists in all the member accounts. All the Org accounts will be added.
  * false = Only the master account will be added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#member_role_status OrgCloudAccount#member_role_status}
  */
  readonly memberRoleStatus?: boolean | cdktf.IResolvable;
  /**
  * Name to be used for the account on the Prisma Cloud platform (must be unique)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#name OrgCloudAccount#name}
  */
  readonly name: string;
  /**
  * Monitor or Monitor and Protect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#protection_mode OrgCloudAccount#protection_mode}
  */
  readonly protectionMode?: string;
  /**
  * Unique identifier for an AWS resource (ARN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#role_arn OrgCloudAccount#role_arn}
  */
  readonly roleArn: string;
  /**
  * hierarchy_selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#hierarchy_selection OrgCloudAccount#hierarchy_selection}
  */
  readonly hierarchySelection?: OrgCloudAccountAwsHierarchySelection[] | cdktf.IResolvable;
}

export function orgCloudAccountAwsToTerraform(struct?: OrgCloudAccountAwsOutputReference | OrgCloudAccountAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    account_type: cdktf.stringToTerraform(struct!.accountType),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupIds),
    member_external_id: cdktf.stringToTerraform(struct!.memberExternalId),
    member_role_name: cdktf.stringToTerraform(struct!.memberRoleName),
    member_role_status: cdktf.booleanToTerraform(struct!.memberRoleStatus),
    name: cdktf.stringToTerraform(struct!.name),
    protection_mode: cdktf.stringToTerraform(struct!.protectionMode),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    hierarchy_selection: cdktf.listMapper(orgCloudAccountAwsHierarchySelectionToTerraform, true)(struct!.hierarchySelection),
  }
}


export function orgCloudAccountAwsToHclTerraform(struct?: OrgCloudAccountAwsOutputReference | OrgCloudAccountAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_type: {
      value: cdktf.stringToHclTerraform(struct!.accountType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    member_external_id: {
      value: cdktf.stringToHclTerraform(struct!.memberExternalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_role_name: {
      value: cdktf.stringToHclTerraform(struct!.memberRoleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_role_status: {
      value: cdktf.booleanToHclTerraform(struct!.memberRoleStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_mode: {
      value: cdktf.stringToHclTerraform(struct!.protectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hierarchy_selection: {
      value: cdktf.listMapperHcl(orgCloudAccountAwsHierarchySelectionToHclTerraform, true)(struct!.hierarchySelection),
      isBlock: true,
      type: "set",
      storageClassType: "OrgCloudAccountAwsHierarchySelectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgCloudAccountAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrgCloudAccountAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._accountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountType = this._accountType;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._groupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIds = this._groupIds;
    }
    if (this._memberExternalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberExternalId = this._memberExternalId;
    }
    if (this._memberRoleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberRoleName = this._memberRoleName;
    }
    if (this._memberRoleStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberRoleStatus = this._memberRoleStatus;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionMode = this._protectionMode;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._hierarchySelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchySelection = this._hierarchySelection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgCloudAccountAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountId = undefined;
      this._accountType = undefined;
      this._enabled = undefined;
      this._externalId = undefined;
      this._groupIds = undefined;
      this._memberExternalId = undefined;
      this._memberRoleName = undefined;
      this._memberRoleStatus = undefined;
      this._name = undefined;
      this._protectionMode = undefined;
      this._roleArn = undefined;
      this._hierarchySelection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountId = value.accountId;
      this._accountType = value.accountType;
      this._enabled = value.enabled;
      this._externalId = value.externalId;
      this._groupIds = value.groupIds;
      this._memberExternalId = value.memberExternalId;
      this._memberRoleName = value.memberRoleName;
      this._memberRoleStatus = value.memberRoleStatus;
      this._name = value.name;
      this._protectionMode = value.protectionMode;
      this._roleArn = value.roleArn;
      this._hierarchySelection.internalValue = value.hierarchySelection;
    }
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // account_type - computed: false, optional: true, required: false
  private _accountType?: string; 
  public get accountType() {
    return this.getStringAttribute('account_type');
  }
  public set accountType(value: string) {
    this._accountType = value;
  }
  public resetAccountType() {
    this._accountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTypeInput() {
    return this._accountType;
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

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // group_ids - computed: false, optional: false, required: true
  private _groupIds?: string[]; 
  public get groupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('group_ids'));
  }
  public set groupIds(value: string[]) {
    this._groupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
  }

  // member_external_id - computed: false, optional: false, required: true
  private _memberExternalId?: string; 
  public get memberExternalId() {
    return this.getStringAttribute('member_external_id');
  }
  public set memberExternalId(value: string) {
    this._memberExternalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberExternalIdInput() {
    return this._memberExternalId;
  }

  // member_role_name - computed: false, optional: false, required: true
  private _memberRoleName?: string; 
  public get memberRoleName() {
    return this.getStringAttribute('member_role_name');
  }
  public set memberRoleName(value: string) {
    this._memberRoleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberRoleNameInput() {
    return this._memberRoleName;
  }

  // member_role_status - computed: false, optional: true, required: false
  private _memberRoleStatus?: boolean | cdktf.IResolvable; 
  public get memberRoleStatus() {
    return this.getBooleanAttribute('member_role_status');
  }
  public set memberRoleStatus(value: boolean | cdktf.IResolvable) {
    this._memberRoleStatus = value;
  }
  public resetMemberRoleStatus() {
    this._memberRoleStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberRoleStatusInput() {
    return this._memberRoleStatus;
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

  // protection_mode - computed: false, optional: true, required: false
  private _protectionMode?: string; 
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
  }
  public set protectionMode(value: string) {
    this._protectionMode = value;
  }
  public resetProtectionMode() {
    this._protectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionModeInput() {
    return this._protectionMode;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // hierarchy_selection - computed: false, optional: true, required: false
  private _hierarchySelection = new OrgCloudAccountAwsHierarchySelectionList(this, "hierarchy_selection", true);
  public get hierarchySelection() {
    return this._hierarchySelection;
  }
  public putHierarchySelection(value: OrgCloudAccountAwsHierarchySelection[] | cdktf.IResolvable) {
    this._hierarchySelection.internalValue = value;
  }
  public resetHierarchySelection() {
    this._hierarchySelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchySelectionInput() {
    return this._hierarchySelection.internalValue;
  }
}
export interface OrgCloudAccountAzureHierarchySelection {
  /**
  * Display name for management group or subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#display_name OrgCloudAccount#display_name}
  */
  readonly displayName: string;
  /**
  * Node type. Valid values: SUBSCRIPTION, TENANT, MANAGEMENT_GROUP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#node_type OrgCloudAccount#node_type}
  */
  readonly nodeType: string;
  /**
  * Resource ID. Management group ID or subscription ID.
  * Note you must escape any double quotes in the resource ID with a backslash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#resource_id OrgCloudAccount#resource_id}
  */
  readonly resourceId: string;
  /**
  * Selection type. Valid values: INCLUDE to include the specified resource to onboard, EXCLUDE to exclude the specified resource and onboard the rest, ALL to onboard all resources in the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#selection_type OrgCloudAccount#selection_type}
  */
  readonly selectionType: string;
}

export function orgCloudAccountAzureHierarchySelectionToTerraform(struct?: OrgCloudAccountAzureHierarchySelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    selection_type: cdktf.stringToTerraform(struct!.selectionType),
  }
}


export function orgCloudAccountAzureHierarchySelectionToHclTerraform(struct?: OrgCloudAccountAzureHierarchySelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection_type: {
      value: cdktf.stringToHclTerraform(struct!.selectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgCloudAccountAzureHierarchySelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgCloudAccountAzureHierarchySelection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._selectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionType = this._selectionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgCloudAccountAzureHierarchySelection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._nodeType = undefined;
      this._resourceId = undefined;
      this._selectionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._nodeType = value.nodeType;
      this._resourceId = value.resourceId;
      this._selectionType = value.selectionType;
    }
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // selection_type - computed: false, optional: false, required: true
  private _selectionType?: string; 
  public get selectionType() {
    return this.getStringAttribute('selection_type');
  }
  public set selectionType(value: string) {
    this._selectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionTypeInput() {
    return this._selectionType;
  }
}

export class OrgCloudAccountAzureHierarchySelectionList extends cdktf.ComplexList {
  public internalValue? : OrgCloudAccountAzureHierarchySelection[] | cdktf.IResolvable

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
  public get(index: number): OrgCloudAccountAzureHierarchySelectionOutputReference {
    return new OrgCloudAccountAzureHierarchySelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgCloudAccountAzure {
  /**
  * Azure account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#account_id OrgCloudAccount#account_id}
  */
  readonly accountId: string;
  /**
  * Account type - account or tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#account_type OrgCloudAccount#account_type}
  */
  readonly accountType?: string;
  /**
  * Application ID registered with Active Directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#client_id OrgCloudAccount#client_id}
  */
  readonly clientId: string;
  /**
  * Whether or not the account is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#enabled OrgCloudAccount#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of account IDs to which you are assigning this account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#group_ids OrgCloudAccount#group_ids}
  */
  readonly groupIds: string[];
  /**
  * Application ID key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#key OrgCloudAccount#key}
  */
  readonly key: string;
  /**
  * Automatically ingest flow logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#monitor_flow_logs OrgCloudAccount#monitor_flow_logs}
  */
  readonly monitorFlowLogs: boolean | cdktf.IResolvable;
  /**
  * Name to be used for the account on the Prisma Cloud platform (must be unique)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#name OrgCloudAccount#name}
  */
  readonly name: string;
  /**
  * Monitor or Monitor and Protect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#protection_mode OrgCloudAccount#protection_mode}
  */
  readonly protectionMode?: string;
  /**
  * Azure tenant has children. Must be set to true when azure tenant is onboarded with children
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#root_sync_enabled OrgCloudAccount#root_sync_enabled}
  */
  readonly rootSyncEnabled?: boolean | cdktf.IResolvable;
  /**
  * Unique ID of the service principal object associated with the Prisma Cloud application that you create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#service_principal_id OrgCloudAccount#service_principal_id}
  */
  readonly servicePrincipalId: string;
  /**
  * Active Directory ID associated with Azure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#tenant_id OrgCloudAccount#tenant_id}
  */
  readonly tenantId: string;
  /**
  * hierarchy_selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#hierarchy_selection OrgCloudAccount#hierarchy_selection}
  */
  readonly hierarchySelection?: OrgCloudAccountAzureHierarchySelection[] | cdktf.IResolvable;
}

export function orgCloudAccountAzureToTerraform(struct?: OrgCloudAccountAzureOutputReference | OrgCloudAccountAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    account_type: cdktf.stringToTerraform(struct!.accountType),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupIds),
    key: cdktf.stringToTerraform(struct!.key),
    monitor_flow_logs: cdktf.booleanToTerraform(struct!.monitorFlowLogs),
    name: cdktf.stringToTerraform(struct!.name),
    protection_mode: cdktf.stringToTerraform(struct!.protectionMode),
    root_sync_enabled: cdktf.booleanToTerraform(struct!.rootSyncEnabled),
    service_principal_id: cdktf.stringToTerraform(struct!.servicePrincipalId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    hierarchy_selection: cdktf.listMapper(orgCloudAccountAzureHierarchySelectionToTerraform, true)(struct!.hierarchySelection),
  }
}


export function orgCloudAccountAzureToHclTerraform(struct?: OrgCloudAccountAzureOutputReference | OrgCloudAccountAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_type: {
      value: cdktf.stringToHclTerraform(struct!.accountType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor_flow_logs: {
      value: cdktf.booleanToHclTerraform(struct!.monitorFlowLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_mode: {
      value: cdktf.stringToHclTerraform(struct!.protectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_sync_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.rootSyncEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_principal_id: {
      value: cdktf.stringToHclTerraform(struct!.servicePrincipalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hierarchy_selection: {
      value: cdktf.listMapperHcl(orgCloudAccountAzureHierarchySelectionToHclTerraform, true)(struct!.hierarchySelection),
      isBlock: true,
      type: "set",
      storageClassType: "OrgCloudAccountAzureHierarchySelectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgCloudAccountAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrgCloudAccountAzure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._accountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountType = this._accountType;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._groupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIds = this._groupIds;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._monitorFlowLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorFlowLogs = this._monitorFlowLogs;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionMode = this._protectionMode;
    }
    if (this._rootSyncEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootSyncEnabled = this._rootSyncEnabled;
    }
    if (this._servicePrincipalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipalId = this._servicePrincipalId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._hierarchySelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchySelection = this._hierarchySelection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgCloudAccountAzure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountId = undefined;
      this._accountType = undefined;
      this._clientId = undefined;
      this._enabled = undefined;
      this._groupIds = undefined;
      this._key = undefined;
      this._monitorFlowLogs = undefined;
      this._name = undefined;
      this._protectionMode = undefined;
      this._rootSyncEnabled = undefined;
      this._servicePrincipalId = undefined;
      this._tenantId = undefined;
      this._hierarchySelection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountId = value.accountId;
      this._accountType = value.accountType;
      this._clientId = value.clientId;
      this._enabled = value.enabled;
      this._groupIds = value.groupIds;
      this._key = value.key;
      this._monitorFlowLogs = value.monitorFlowLogs;
      this._name = value.name;
      this._protectionMode = value.protectionMode;
      this._rootSyncEnabled = value.rootSyncEnabled;
      this._servicePrincipalId = value.servicePrincipalId;
      this._tenantId = value.tenantId;
      this._hierarchySelection.internalValue = value.hierarchySelection;
    }
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // account_type - computed: false, optional: true, required: false
  private _accountType?: string; 
  public get accountType() {
    return this.getStringAttribute('account_type');
  }
  public set accountType(value: string) {
    this._accountType = value;
  }
  public resetAccountType() {
    this._accountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTypeInput() {
    return this._accountType;
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

  // group_ids - computed: false, optional: false, required: true
  private _groupIds?: string[]; 
  public get groupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('group_ids'));
  }
  public set groupIds(value: string[]) {
    this._groupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // monitor_flow_logs - computed: false, optional: false, required: true
  private _monitorFlowLogs?: boolean | cdktf.IResolvable; 
  public get monitorFlowLogs() {
    return this.getBooleanAttribute('monitor_flow_logs');
  }
  public set monitorFlowLogs(value: boolean | cdktf.IResolvable) {
    this._monitorFlowLogs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorFlowLogsInput() {
    return this._monitorFlowLogs;
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

  // protection_mode - computed: false, optional: true, required: false
  private _protectionMode?: string; 
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
  }
  public set protectionMode(value: string) {
    this._protectionMode = value;
  }
  public resetProtectionMode() {
    this._protectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionModeInput() {
    return this._protectionMode;
  }

  // root_sync_enabled - computed: false, optional: true, required: false
  private _rootSyncEnabled?: boolean | cdktf.IResolvable; 
  public get rootSyncEnabled() {
    return this.getBooleanAttribute('root_sync_enabled');
  }
  public set rootSyncEnabled(value: boolean | cdktf.IResolvable) {
    this._rootSyncEnabled = value;
  }
  public resetRootSyncEnabled() {
    this._rootSyncEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootSyncEnabledInput() {
    return this._rootSyncEnabled;
  }

  // service_principal_id - computed: false, optional: false, required: true
  private _servicePrincipalId?: string; 
  public get servicePrincipalId() {
    return this.getStringAttribute('service_principal_id');
  }
  public set servicePrincipalId(value: string) {
    this._servicePrincipalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalIdInput() {
    return this._servicePrincipalId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // hierarchy_selection - computed: false, optional: true, required: false
  private _hierarchySelection = new OrgCloudAccountAzureHierarchySelectionList(this, "hierarchy_selection", true);
  public get hierarchySelection() {
    return this._hierarchySelection;
  }
  public putHierarchySelection(value: OrgCloudAccountAzureHierarchySelection[] | cdktf.IResolvable) {
    this._hierarchySelection.internalValue = value;
  }
  public resetHierarchySelection() {
    this._hierarchySelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchySelectionInput() {
    return this._hierarchySelection.internalValue;
  }
}
export interface OrgCloudAccountGcpHierarchySelection {
  /**
  * Display name for folder, project, or organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#display_name OrgCloudAccount#display_name}
  */
  readonly displayName: string;
  /**
  * Node type. Valid values - FOLDER, PROJECT, ORG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#node_type OrgCloudAccount#node_type}
  */
  readonly nodeType: string;
  /**
  * Resource ID. For folders, format is folders/{folder ID}. For projects, format is {project number}. For orgs, format is organizations/{org ID}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#resource_id OrgCloudAccount#resource_id}
  */
  readonly resourceId: string;
  /**
  * Selection type. Valid values: INCLUDE, EXCLUDE, ALL. If hierarchySelection.nodeType is PROJECT or FOLDER, then a valid value is either INCLUDE or EXCLUDE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#selection_type OrgCloudAccount#selection_type}
  */
  readonly selectionType: string;
}

export function orgCloudAccountGcpHierarchySelectionToTerraform(struct?: OrgCloudAccountGcpHierarchySelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    selection_type: cdktf.stringToTerraform(struct!.selectionType),
  }
}


export function orgCloudAccountGcpHierarchySelectionToHclTerraform(struct?: OrgCloudAccountGcpHierarchySelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection_type: {
      value: cdktf.stringToHclTerraform(struct!.selectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgCloudAccountGcpHierarchySelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgCloudAccountGcpHierarchySelection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._selectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionType = this._selectionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgCloudAccountGcpHierarchySelection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._nodeType = undefined;
      this._resourceId = undefined;
      this._selectionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._nodeType = value.nodeType;
      this._resourceId = value.resourceId;
      this._selectionType = value.selectionType;
    }
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // selection_type - computed: false, optional: false, required: true
  private _selectionType?: string; 
  public get selectionType() {
    return this.getStringAttribute('selection_type');
  }
  public set selectionType(value: string) {
    this._selectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionTypeInput() {
    return this._selectionType;
  }
}

export class OrgCloudAccountGcpHierarchySelectionList extends cdktf.ComplexList {
  public internalValue? : OrgCloudAccountGcpHierarchySelection[] | cdktf.IResolvable

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
  public get(index: number): OrgCloudAccountGcpHierarchySelectionOutputReference {
    return new OrgCloudAccountGcpHierarchySelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgCloudAccountGcp {
  /**
  * Cloud account group creation mode. Valid values - MANUAL, AUTO or RECURSIVE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#account_group_creation_mode OrgCloudAccount#account_group_creation_mode}
  */
  readonly accountGroupCreationMode?: string;
  /**
  * GCP project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#account_id OrgCloudAccount#account_id}
  */
  readonly accountId: string;
  /**
  * Account type - organization or account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#account_type OrgCloudAccount#account_type}
  */
  readonly accountType?: string;
  /**
  * Enable flow log compression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#compression_enabled OrgCloudAccount#compression_enabled}
  */
  readonly compressionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Content of the JSON credentials file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#credentials_json OrgCloudAccount#credentials_json}
  */
  readonly credentialsJson: string;
  /**
  * GCP project for flow log compression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#dataflow_enabled_project OrgCloudAccount#dataflow_enabled_project}
  */
  readonly dataflowEnabledProject?: string;
  /**
  * Whether or not the account is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#enabled OrgCloudAccount#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * GCP flow logs storage bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#flow_log_storage_bucket OrgCloudAccount#flow_log_storage_bucket}
  */
  readonly flowLogStorageBucket?: string;
  /**
  * List of account IDs to which you are assigning this account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#group_ids OrgCloudAccount#group_ids}
  */
  readonly groupIds?: string[];
  /**
  * Name to be used for the account on the Prisma Cloud platform (must be unique)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#name OrgCloudAccount#name}
  */
  readonly name: string;
  /**
  * GCP organization name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#organization_name OrgCloudAccount#organization_name}
  */
  readonly organizationName: string;
  /**
  * Protection Mode - Monitor or Monitor and Protect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#protection_mode OrgCloudAccount#protection_mode}
  */
  readonly protectionMode?: string;
  /**
  * hierarchy_selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#hierarchy_selection OrgCloudAccount#hierarchy_selection}
  */
  readonly hierarchySelection?: OrgCloudAccountGcpHierarchySelection[] | cdktf.IResolvable;
}

export function orgCloudAccountGcpToTerraform(struct?: OrgCloudAccountGcpOutputReference | OrgCloudAccountGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_group_creation_mode: cdktf.stringToTerraform(struct!.accountGroupCreationMode),
    account_id: cdktf.stringToTerraform(struct!.accountId),
    account_type: cdktf.stringToTerraform(struct!.accountType),
    compression_enabled: cdktf.booleanToTerraform(struct!.compressionEnabled),
    credentials_json: cdktf.stringToTerraform(struct!.credentialsJson),
    dataflow_enabled_project: cdktf.stringToTerraform(struct!.dataflowEnabledProject),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    flow_log_storage_bucket: cdktf.stringToTerraform(struct!.flowLogStorageBucket),
    group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupIds),
    name: cdktf.stringToTerraform(struct!.name),
    organization_name: cdktf.stringToTerraform(struct!.organizationName),
    protection_mode: cdktf.stringToTerraform(struct!.protectionMode),
    hierarchy_selection: cdktf.listMapper(orgCloudAccountGcpHierarchySelectionToTerraform, true)(struct!.hierarchySelection),
  }
}


export function orgCloudAccountGcpToHclTerraform(struct?: OrgCloudAccountGcpOutputReference | OrgCloudAccountGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_group_creation_mode: {
      value: cdktf.stringToHclTerraform(struct!.accountGroupCreationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_type: {
      value: cdktf.stringToHclTerraform(struct!.accountType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.compressionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    credentials_json: {
      value: cdktf.stringToHclTerraform(struct!.credentialsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataflow_enabled_project: {
      value: cdktf.stringToHclTerraform(struct!.dataflowEnabledProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flow_log_storage_bucket: {
      value: cdktf.stringToHclTerraform(struct!.flowLogStorageBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupIds),
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
    organization_name: {
      value: cdktf.stringToHclTerraform(struct!.organizationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_mode: {
      value: cdktf.stringToHclTerraform(struct!.protectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hierarchy_selection: {
      value: cdktf.listMapperHcl(orgCloudAccountGcpHierarchySelectionToHclTerraform, true)(struct!.hierarchySelection),
      isBlock: true,
      type: "set",
      storageClassType: "OrgCloudAccountGcpHierarchySelectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgCloudAccountGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrgCloudAccountGcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountGroupCreationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountGroupCreationMode = this._accountGroupCreationMode;
    }
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._accountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountType = this._accountType;
    }
    if (this._compressionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionEnabled = this._compressionEnabled;
    }
    if (this._credentialsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsJson = this._credentialsJson;
    }
    if (this._dataflowEnabledProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataflowEnabledProject = this._dataflowEnabledProject;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._flowLogStorageBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowLogStorageBucket = this._flowLogStorageBucket;
    }
    if (this._groupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIds = this._groupIds;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._organizationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationName = this._organizationName;
    }
    if (this._protectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionMode = this._protectionMode;
    }
    if (this._hierarchySelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchySelection = this._hierarchySelection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgCloudAccountGcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountGroupCreationMode = undefined;
      this._accountId = undefined;
      this._accountType = undefined;
      this._compressionEnabled = undefined;
      this._credentialsJson = undefined;
      this._dataflowEnabledProject = undefined;
      this._enabled = undefined;
      this._flowLogStorageBucket = undefined;
      this._groupIds = undefined;
      this._name = undefined;
      this._organizationName = undefined;
      this._protectionMode = undefined;
      this._hierarchySelection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountGroupCreationMode = value.accountGroupCreationMode;
      this._accountId = value.accountId;
      this._accountType = value.accountType;
      this._compressionEnabled = value.compressionEnabled;
      this._credentialsJson = value.credentialsJson;
      this._dataflowEnabledProject = value.dataflowEnabledProject;
      this._enabled = value.enabled;
      this._flowLogStorageBucket = value.flowLogStorageBucket;
      this._groupIds = value.groupIds;
      this._name = value.name;
      this._organizationName = value.organizationName;
      this._protectionMode = value.protectionMode;
      this._hierarchySelection.internalValue = value.hierarchySelection;
    }
  }

  // account_group_creation_mode - computed: false, optional: true, required: false
  private _accountGroupCreationMode?: string; 
  public get accountGroupCreationMode() {
    return this.getStringAttribute('account_group_creation_mode');
  }
  public set accountGroupCreationMode(value: string) {
    this._accountGroupCreationMode = value;
  }
  public resetAccountGroupCreationMode() {
    this._accountGroupCreationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountGroupCreationModeInput() {
    return this._accountGroupCreationMode;
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // account_type - computed: false, optional: true, required: false
  private _accountType?: string; 
  public get accountType() {
    return this.getStringAttribute('account_type');
  }
  public set accountType(value: string) {
    this._accountType = value;
  }
  public resetAccountType() {
    this._accountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTypeInput() {
    return this._accountType;
  }

  // compression_enabled - computed: false, optional: true, required: false
  private _compressionEnabled?: boolean | cdktf.IResolvable; 
  public get compressionEnabled() {
    return this.getBooleanAttribute('compression_enabled');
  }
  public set compressionEnabled(value: boolean | cdktf.IResolvable) {
    this._compressionEnabled = value;
  }
  public resetCompressionEnabled() {
    this._compressionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionEnabledInput() {
    return this._compressionEnabled;
  }

  // credentials_json - computed: false, optional: false, required: true
  private _credentialsJson?: string; 
  public get credentialsJson() {
    return this.getStringAttribute('credentials_json');
  }
  public set credentialsJson(value: string) {
    this._credentialsJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsJsonInput() {
    return this._credentialsJson;
  }

  // dataflow_enabled_project - computed: false, optional: true, required: false
  private _dataflowEnabledProject?: string; 
  public get dataflowEnabledProject() {
    return this.getStringAttribute('dataflow_enabled_project');
  }
  public set dataflowEnabledProject(value: string) {
    this._dataflowEnabledProject = value;
  }
  public resetDataflowEnabledProject() {
    this._dataflowEnabledProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataflowEnabledProjectInput() {
    return this._dataflowEnabledProject;
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

  // flow_log_storage_bucket - computed: false, optional: true, required: false
  private _flowLogStorageBucket?: string; 
  public get flowLogStorageBucket() {
    return this.getStringAttribute('flow_log_storage_bucket');
  }
  public set flowLogStorageBucket(value: string) {
    this._flowLogStorageBucket = value;
  }
  public resetFlowLogStorageBucket() {
    this._flowLogStorageBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLogStorageBucketInput() {
    return this._flowLogStorageBucket;
  }

  // group_ids - computed: false, optional: true, required: false
  private _groupIds?: string[]; 
  public get groupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('group_ids'));
  }
  public set groupIds(value: string[]) {
    this._groupIds = value;
  }
  public resetGroupIds() {
    this._groupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
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

  // organization_name - computed: false, optional: false, required: true
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
  }

  // protection_mode - computed: false, optional: true, required: false
  private _protectionMode?: string; 
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
  }
  public set protectionMode(value: string) {
    this._protectionMode = value;
  }
  public resetProtectionMode() {
    this._protectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionModeInput() {
    return this._protectionMode;
  }

  // hierarchy_selection - computed: false, optional: true, required: false
  private _hierarchySelection = new OrgCloudAccountGcpHierarchySelectionList(this, "hierarchy_selection", true);
  public get hierarchySelection() {
    return this._hierarchySelection;
  }
  public putHierarchySelection(value: OrgCloudAccountGcpHierarchySelection[] | cdktf.IResolvable) {
    this._hierarchySelection.internalValue = value;
  }
  public resetHierarchySelection() {
    this._hierarchySelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchySelectionInput() {
    return this._hierarchySelection.internalValue;
  }
}
export interface OrgCloudAccountOci {
  /**
  * Org account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#account_id OrgCloudAccount#account_id}
  */
  readonly accountId: string;
  /**
  * Account type - account or tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#account_type OrgCloudAccount#account_type}
  */
  readonly accountType: string;
  /**
  * Account group id for this account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#default_account_group_id OrgCloudAccount#default_account_group_id}
  */
  readonly defaultAccountGroupId: string;
  /**
  * Whether or not the account is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#enabled OrgCloudAccount#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * OCI identity group name that you define. Can be an existing group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#group_name OrgCloudAccount#group_name}
  */
  readonly groupName: string;
  /**
  * OCI tenancy home region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#home_region OrgCloudAccount#home_region}
  */
  readonly homeRegion: string;
  /**
  * Name to be used for the account on the Prisma Cloud platform (must be unique)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#name OrgCloudAccount#name}
  */
  readonly name: string;
  /**
  * OCI identity policy name that you define. Can be an existing policy that has the right policy statements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#policy_name OrgCloudAccount#policy_name}
  */
  readonly policyName: string;
  /**
  * OCI identity user name that you define. Can be an existing user that has the right privileges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#user_name OrgCloudAccount#user_name}
  */
  readonly userName: string;
  /**
  * OCI identity user Ocid that you define. Can be an existing user that has the right privileges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#user_ocid OrgCloudAccount#user_ocid}
  */
  readonly userOcid: string;
}

export function orgCloudAccountOciToTerraform(struct?: OrgCloudAccountOciOutputReference | OrgCloudAccountOci): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    account_type: cdktf.stringToTerraform(struct!.accountType),
    default_account_group_id: cdktf.stringToTerraform(struct!.defaultAccountGroupId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    home_region: cdktf.stringToTerraform(struct!.homeRegion),
    name: cdktf.stringToTerraform(struct!.name),
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    user_name: cdktf.stringToTerraform(struct!.userName),
    user_ocid: cdktf.stringToTerraform(struct!.userOcid),
  }
}


export function orgCloudAccountOciToHclTerraform(struct?: OrgCloudAccountOciOutputReference | OrgCloudAccountOci): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_type: {
      value: cdktf.stringToHclTerraform(struct!.accountType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_account_group_id: {
      value: cdktf.stringToHclTerraform(struct!.defaultAccountGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    home_region: {
      value: cdktf.stringToHclTerraform(struct!.homeRegion),
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
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_ocid: {
      value: cdktf.stringToHclTerraform(struct!.userOcid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgCloudAccountOciOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrgCloudAccountOci | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._accountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountType = this._accountType;
    }
    if (this._defaultAccountGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAccountGroupId = this._defaultAccountGroupId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._homeRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.homeRegion = this._homeRegion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._userOcid !== undefined) {
      hasAnyValues = true;
      internalValueResult.userOcid = this._userOcid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgCloudAccountOci | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountId = undefined;
      this._accountType = undefined;
      this._defaultAccountGroupId = undefined;
      this._enabled = undefined;
      this._groupName = undefined;
      this._homeRegion = undefined;
      this._name = undefined;
      this._policyName = undefined;
      this._userName = undefined;
      this._userOcid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountId = value.accountId;
      this._accountType = value.accountType;
      this._defaultAccountGroupId = value.defaultAccountGroupId;
      this._enabled = value.enabled;
      this._groupName = value.groupName;
      this._homeRegion = value.homeRegion;
      this._name = value.name;
      this._policyName = value.policyName;
      this._userName = value.userName;
      this._userOcid = value.userOcid;
    }
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // account_type - computed: false, optional: false, required: true
  private _accountType?: string; 
  public get accountType() {
    return this.getStringAttribute('account_type');
  }
  public set accountType(value: string) {
    this._accountType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTypeInput() {
    return this._accountType;
  }

  // default_account_group_id - computed: false, optional: false, required: true
  private _defaultAccountGroupId?: string; 
  public get defaultAccountGroupId() {
    return this.getStringAttribute('default_account_group_id');
  }
  public set defaultAccountGroupId(value: string) {
    this._defaultAccountGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAccountGroupIdInput() {
    return this._defaultAccountGroupId;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // home_region - computed: false, optional: false, required: true
  private _homeRegion?: string; 
  public get homeRegion() {
    return this.getStringAttribute('home_region');
  }
  public set homeRegion(value: string) {
    this._homeRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get homeRegionInput() {
    return this._homeRegion;
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

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // user_ocid - computed: false, optional: false, required: true
  private _userOcid?: string; 
  public get userOcid() {
    return this.getStringAttribute('user_ocid');
  }
  public set userOcid(value: string) {
    this._userOcid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userOcidInput() {
    return this._userOcid;
  }
}
export interface OrgCloudAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#create OrgCloudAccount#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#delete OrgCloudAccount#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#update OrgCloudAccount#update}
  */
  readonly update?: string;
}

export function orgCloudAccountTimeoutsToTerraform(struct?: OrgCloudAccountTimeouts | cdktf.IResolvable): any {
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


export function orgCloudAccountTimeoutsToHclTerraform(struct?: OrgCloudAccountTimeouts | cdktf.IResolvable): any {
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

export class OrgCloudAccountTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgCloudAccountTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OrgCloudAccountTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account prismacloud_org_cloud_account}
*/
export class OrgCloudAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_org_cloud_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgCloudAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgCloudAccount to import
  * @param importFromId The id of the existing OrgCloudAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgCloudAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_org_cloud_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account prismacloud_org_cloud_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgCloudAccountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OrgCloudAccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prismacloud_org_cloud_account',
      terraformGeneratorMetadata: {
        providerName: 'prismacloud',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disableOnDestroy = config.disableOnDestroy;
    this._id = config.id;
    this._aws.internalValue = config.aws;
    this._azure.internalValue = config.azure;
    this._gcp.internalValue = config.gcp;
    this._oci.internalValue = config.oci;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_on_destroy - computed: false, optional: true, required: false
  private _disableOnDestroy?: boolean | cdktf.IResolvable; 
  public get disableOnDestroy() {
    return this.getBooleanAttribute('disable_on_destroy');
  }
  public set disableOnDestroy(value: boolean | cdktf.IResolvable) {
    this._disableOnDestroy = value;
  }
  public resetDisableOnDestroy() {
    this._disableOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOnDestroyInput() {
    return this._disableOnDestroy;
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

  // aws - computed: false, optional: true, required: false
  private _aws = new OrgCloudAccountAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: OrgCloudAccountAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new OrgCloudAccountAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: OrgCloudAccountAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // gcp - computed: false, optional: true, required: false
  private _gcp = new OrgCloudAccountGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: OrgCloudAccountGcp) {
    this._gcp.internalValue = value;
  }
  public resetGcp() {
    this._gcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpInput() {
    return this._gcp.internalValue;
  }

  // oci - computed: false, optional: true, required: false
  private _oci = new OrgCloudAccountOciOutputReference(this, "oci");
  public get oci() {
    return this._oci;
  }
  public putOci(value: OrgCloudAccountOci) {
    this._oci.internalValue = value;
  }
  public resetOci() {
    this._oci.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociInput() {
    return this._oci.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OrgCloudAccountTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OrgCloudAccountTimeouts) {
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
      disable_on_destroy: cdktf.booleanToTerraform(this._disableOnDestroy),
      id: cdktf.stringToTerraform(this._id),
      aws: orgCloudAccountAwsToTerraform(this._aws.internalValue),
      azure: orgCloudAccountAzureToTerraform(this._azure.internalValue),
      gcp: orgCloudAccountGcpToTerraform(this._gcp.internalValue),
      oci: orgCloudAccountOciToTerraform(this._oci.internalValue),
      timeouts: orgCloudAccountTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._disableOnDestroy),
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
      aws: {
        value: orgCloudAccountAwsToHclTerraform(this._aws.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgCloudAccountAwsList",
      },
      azure: {
        value: orgCloudAccountAzureToHclTerraform(this._azure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgCloudAccountAzureList",
      },
      gcp: {
        value: orgCloudAccountGcpToHclTerraform(this._gcp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgCloudAccountGcpList",
      },
      oci: {
        value: orgCloudAccountOciToHclTerraform(this._oci.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgCloudAccountOciList",
      },
      timeouts: {
        value: orgCloudAccountTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgCloudAccountTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
