// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgCloudAccountV2Config extends cdktf.TerraformMetaArguments {
  /**
  * to disable cloud account instead of deleting on calling destroy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#disable_on_destroy OrgCloudAccountV2#disable_on_destroy}
  */
  readonly disableOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#id OrgCloudAccountV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#aws OrgCloudAccountV2#aws}
  */
  readonly aws?: OrgCloudAccountV2Aws;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#azure OrgCloudAccountV2#azure}
  */
  readonly azure?: OrgCloudAccountV2Azure;
  /**
  * gcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#gcp OrgCloudAccountV2#gcp}
  */
  readonly gcp?: OrgCloudAccountV2Gcp;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#timeouts OrgCloudAccountV2#timeouts}
  */
  readonly timeouts?: OrgCloudAccountV2Timeouts;
}
export interface OrgCloudAccountV2AwsFeatures {
  /**
  * Feature name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#name OrgCloudAccountV2#name}
  */
  readonly name: string;
  /**
  * Feature state, one of enabled and disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#state OrgCloudAccountV2#state}
  */
  readonly state: string;
}

export function orgCloudAccountV2AwsFeaturesToTerraform(struct?: OrgCloudAccountV2AwsFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function orgCloudAccountV2AwsFeaturesToHclTerraform(struct?: OrgCloudAccountV2AwsFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgCloudAccountV2AwsFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgCloudAccountV2AwsFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgCloudAccountV2AwsFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._state = value.state;
    }
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

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class OrgCloudAccountV2AwsFeaturesList extends cdktf.ComplexList {
  public internalValue? : OrgCloudAccountV2AwsFeatures[] | cdktf.IResolvable

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
  public get(index: number): OrgCloudAccountV2AwsFeaturesOutputReference {
    return new OrgCloudAccountV2AwsFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgCloudAccountV2AwsHierarchySelection {
  /**
  * Display name for AWS OU, AWS account, or AWS organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#display_name OrgCloudAccountV2#display_name}
  */
  readonly displayName: string;
  /**
  * Valid values: OU, ACCOUNT, ORG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#node_type OrgCloudAccountV2#node_type}
  */
  readonly nodeType: string;
  /**
  * Resource ID. Valid values are AWS OU ID, AWS account ID, or AWS Organization ID. Note you must escape any double quotes in the resource ID with a backslash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#resource_id OrgCloudAccountV2#resource_id}
  */
  readonly resourceId: string;
  /**
  * Selection type. Valid values: INCLUDE to include the specified resource to onboard, EXCLUDE to exclude the specified resource and onboard the rest, ALL to onboard all resources in the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#selection_type OrgCloudAccountV2#selection_type}
  */
  readonly selectionType: string;
}

export function orgCloudAccountV2AwsHierarchySelectionToTerraform(struct?: OrgCloudAccountV2AwsHierarchySelection | cdktf.IResolvable): any {
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


export function orgCloudAccountV2AwsHierarchySelectionToHclTerraform(struct?: OrgCloudAccountV2AwsHierarchySelection | cdktf.IResolvable): any {
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

export class OrgCloudAccountV2AwsHierarchySelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgCloudAccountV2AwsHierarchySelection | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OrgCloudAccountV2AwsHierarchySelection | cdktf.IResolvable | undefined) {
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

export class OrgCloudAccountV2AwsHierarchySelectionList extends cdktf.ComplexList {
  public internalValue? : OrgCloudAccountV2AwsHierarchySelection[] | cdktf.IResolvable

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
  public get(index: number): OrgCloudAccountV2AwsHierarchySelectionOutputReference {
    return new OrgCloudAccountV2AwsHierarchySelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgCloudAccountV2Aws {
  /**
  * AWS account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#account_id OrgCloudAccountV2#account_id}
  */
  readonly accountId: string;
  /**
  * Account type - organization or account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#account_type OrgCloudAccountV2#account_type}
  */
  readonly accountType?: string;
  /**
  * Account group id to which you are assigning this account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#default_account_group_id OrgCloudAccountV2#default_account_group_id}
  */
  readonly defaultAccountGroupId?: string;
  /**
  * Whether or not the account is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#enabled OrgCloudAccountV2#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of account IDs to which you are assigning this account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#group_ids OrgCloudAccountV2#group_ids}
  */
  readonly groupIds?: string[];
  /**
  * Name to be used for the account on the Prisma Cloud platform (must be unique)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#name OrgCloudAccountV2#name}
  */
  readonly name: string;
  /**
  * Unique identifier for an AWS resource (ARN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#role_arn OrgCloudAccountV2#role_arn}
  */
  readonly roleArn: string;
  /**
  * features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#features OrgCloudAccountV2#features}
  */
  readonly features?: OrgCloudAccountV2AwsFeatures[] | cdktf.IResolvable;
  /**
  * hierarchy_selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#hierarchy_selection OrgCloudAccountV2#hierarchy_selection}
  */
  readonly hierarchySelection?: OrgCloudAccountV2AwsHierarchySelection[] | cdktf.IResolvable;
}

export function orgCloudAccountV2AwsToTerraform(struct?: OrgCloudAccountV2AwsOutputReference | OrgCloudAccountV2Aws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    account_type: cdktf.stringToTerraform(struct!.accountType),
    default_account_group_id: cdktf.stringToTerraform(struct!.defaultAccountGroupId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupIds),
    name: cdktf.stringToTerraform(struct!.name),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    features: cdktf.listMapper(orgCloudAccountV2AwsFeaturesToTerraform, true)(struct!.features),
    hierarchy_selection: cdktf.listMapper(orgCloudAccountV2AwsHierarchySelectionToTerraform, true)(struct!.hierarchySelection),
  }
}


export function orgCloudAccountV2AwsToHclTerraform(struct?: OrgCloudAccountV2AwsOutputReference | OrgCloudAccountV2Aws): any {
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
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    features: {
      value: cdktf.listMapperHcl(orgCloudAccountV2AwsFeaturesToHclTerraform, true)(struct!.features),
      isBlock: true,
      type: "set",
      storageClassType: "OrgCloudAccountV2AwsFeaturesList",
    },
    hierarchy_selection: {
      value: cdktf.listMapperHcl(orgCloudAccountV2AwsHierarchySelectionToHclTerraform, true)(struct!.hierarchySelection),
      isBlock: true,
      type: "set",
      storageClassType: "OrgCloudAccountV2AwsHierarchySelectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgCloudAccountV2AwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrgCloudAccountV2Aws | undefined {
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
    if (this._groupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIds = this._groupIds;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._features?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.features = this._features?.internalValue;
    }
    if (this._hierarchySelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchySelection = this._hierarchySelection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgCloudAccountV2Aws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountId = undefined;
      this._accountType = undefined;
      this._defaultAccountGroupId = undefined;
      this._enabled = undefined;
      this._groupIds = undefined;
      this._name = undefined;
      this._roleArn = undefined;
      this._features.internalValue = undefined;
      this._hierarchySelection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountId = value.accountId;
      this._accountType = value.accountType;
      this._defaultAccountGroupId = value.defaultAccountGroupId;
      this._enabled = value.enabled;
      this._groupIds = value.groupIds;
      this._name = value.name;
      this._roleArn = value.roleArn;
      this._features.internalValue = value.features;
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

  // cloud_type - computed: true, optional: false, required: false
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }

  // created_epoch_millis - computed: true, optional: false, required: false
  public get createdEpochMillis() {
    return this.getNumberAttribute('created_epoch_millis');
  }

  // customer_name - computed: true, optional: false, required: false
  public get customerName() {
    return this.getStringAttribute('customer_name');
  }

  // default_account_group_id - computed: false, optional: true, required: false
  private _defaultAccountGroupId?: string; 
  public get defaultAccountGroupId() {
    return this.getStringAttribute('default_account_group_id');
  }
  public set defaultAccountGroupId(value: string) {
    this._defaultAccountGroupId = value;
  }
  public resetDefaultAccountGroupId() {
    this._defaultAccountGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAccountGroupIdInput() {
    return this._defaultAccountGroupId;
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
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

  // eventbridge_rule_name_prefix - computed: true, optional: false, required: false
  public get eventbridgeRuleNamePrefix() {
    return this.getStringAttribute('eventbridge_rule_name_prefix');
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // group_ids - computed: true, optional: true, required: false
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

  // has_member_role - computed: true, optional: false, required: false
  public get hasMemberRole() {
    return this.getBooleanAttribute('has_member_role');
  }

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // last_modified_epoch_millis - computed: true, optional: false, required: false
  public get lastModifiedEpochMillis() {
    return this.getNumberAttribute('last_modified_epoch_millis');
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

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }

  // protection_mode - computed: true, optional: false, required: false
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
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

  // template_url - computed: true, optional: false, required: false
  public get templateUrl() {
    return this.getStringAttribute('template_url');
  }

  // features - computed: false, optional: true, required: false
  private _features = new OrgCloudAccountV2AwsFeaturesList(this, "features", true);
  public get features() {
    return this._features;
  }
  public putFeatures(value: OrgCloudAccountV2AwsFeatures[] | cdktf.IResolvable) {
    this._features.internalValue = value;
  }
  public resetFeatures() {
    this._features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // hierarchy_selection - computed: false, optional: true, required: false
  private _hierarchySelection = new OrgCloudAccountV2AwsHierarchySelectionList(this, "hierarchy_selection", true);
  public get hierarchySelection() {
    return this._hierarchySelection;
  }
  public putHierarchySelection(value: OrgCloudAccountV2AwsHierarchySelection[] | cdktf.IResolvable) {
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
export interface OrgCloudAccountV2AzureFeatures {
  /**
  * Feature name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#name OrgCloudAccountV2#name}
  */
  readonly name: string;
  /**
  * Feature state, one of enabled and disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#state OrgCloudAccountV2#state}
  */
  readonly state: string;
}

export function orgCloudAccountV2AzureFeaturesToTerraform(struct?: OrgCloudAccountV2AzureFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function orgCloudAccountV2AzureFeaturesToHclTerraform(struct?: OrgCloudAccountV2AzureFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgCloudAccountV2AzureFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgCloudAccountV2AzureFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgCloudAccountV2AzureFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._state = value.state;
    }
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

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class OrgCloudAccountV2AzureFeaturesList extends cdktf.ComplexList {
  public internalValue? : OrgCloudAccountV2AzureFeatures[] | cdktf.IResolvable

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
  public get(index: number): OrgCloudAccountV2AzureFeaturesOutputReference {
    return new OrgCloudAccountV2AzureFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgCloudAccountV2AzureHierarchySelection {
  /**
  * Display name for management group or subscription
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#display_name OrgCloudAccountV2#display_name}
  */
  readonly displayName: string;
  /**
  * Valid values: SUBSCRIPTION, TENANT, MANAGEMENT_GROUP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#node_type OrgCloudAccountV2#node_type}
  */
  readonly nodeType: string;
  /**
  * Management group ID or subscription ID.
  * Note you must escape any double quotes in the resource ID with a backslash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#resource_id OrgCloudAccountV2#resource_id}
  */
  readonly resourceId: string;
  /**
  * Selection type.Valid values: INCLUDE to include the specified resource to onboard, EXCLUDE to exclude the specified resource and onboard the rest, ALL to onboard all resources in the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#selection_type OrgCloudAccountV2#selection_type}
  */
  readonly selectionType: string;
}

export function orgCloudAccountV2AzureHierarchySelectionToTerraform(struct?: OrgCloudAccountV2AzureHierarchySelection | cdktf.IResolvable): any {
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


export function orgCloudAccountV2AzureHierarchySelectionToHclTerraform(struct?: OrgCloudAccountV2AzureHierarchySelection | cdktf.IResolvable): any {
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

export class OrgCloudAccountV2AzureHierarchySelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgCloudAccountV2AzureHierarchySelection | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OrgCloudAccountV2AzureHierarchySelection | cdktf.IResolvable | undefined) {
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

export class OrgCloudAccountV2AzureHierarchySelectionList extends cdktf.ComplexList {
  public internalValue? : OrgCloudAccountV2AzureHierarchySelection[] | cdktf.IResolvable

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
  public get(index: number): OrgCloudAccountV2AzureHierarchySelectionOutputReference {
    return new OrgCloudAccountV2AzureHierarchySelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgCloudAccountV2Azure {
  /**
  * Account type - tenant or account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#account_type OrgCloudAccountV2#account_type}
  */
  readonly accountType?: string;
  /**
  * Application ID registered with Active Directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#client_id OrgCloudAccountV2#client_id}
  */
  readonly clientId: string;
  /**
  * Account group id to which you are assigning this account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#default_account_group_id OrgCloudAccountV2#default_account_group_id}
  */
  readonly defaultAccountGroupId?: string;
  /**
  * Whether or not the account is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#enabled OrgCloudAccountV2#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Environment type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#environment_type OrgCloudAccountV2#environment_type}
  */
  readonly environmentType?: string;
  /**
  * List of account IDs to which you are assigning this account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#group_ids OrgCloudAccountV2#group_ids}
  */
  readonly groupIds?: string[];
  /**
  * Application ID key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#key OrgCloudAccountV2#key}
  */
  readonly key: string;
  /**
  * Automatically ingest flow logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#monitor_flow_logs OrgCloudAccountV2#monitor_flow_logs}
  */
  readonly monitorFlowLogs?: boolean | cdktf.IResolvable;
  /**
  * Name to be used for the account on the Prisma Cloud platform (must be unique)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#name OrgCloudAccountV2#name}
  */
  readonly name: string;
  /**
  * Azure tenant has children. Must be set to true when azure tenant is onboarded with children
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#root_sync_enabled OrgCloudAccountV2#root_sync_enabled}
  */
  readonly rootSyncEnabled?: boolean | cdktf.IResolvable;
  /**
  * Unique ID of the service principle object associated with the Prisma Cloud application that you create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#service_principal_id OrgCloudAccountV2#service_principal_id}
  */
  readonly servicePrincipalId: string;
  /**
  * Active Directory ID associated with Azure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#tenant_id OrgCloudAccountV2#tenant_id}
  */
  readonly tenantId: string;
  /**
  * features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#features OrgCloudAccountV2#features}
  */
  readonly features?: OrgCloudAccountV2AzureFeatures[] | cdktf.IResolvable;
  /**
  * hierarchy_selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#hierarchy_selection OrgCloudAccountV2#hierarchy_selection}
  */
  readonly hierarchySelection?: OrgCloudAccountV2AzureHierarchySelection[] | cdktf.IResolvable;
}

export function orgCloudAccountV2AzureToTerraform(struct?: OrgCloudAccountV2AzureOutputReference | OrgCloudAccountV2Azure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_type: cdktf.stringToTerraform(struct!.accountType),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    default_account_group_id: cdktf.stringToTerraform(struct!.defaultAccountGroupId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    environment_type: cdktf.stringToTerraform(struct!.environmentType),
    group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupIds),
    key: cdktf.stringToTerraform(struct!.key),
    monitor_flow_logs: cdktf.booleanToTerraform(struct!.monitorFlowLogs),
    name: cdktf.stringToTerraform(struct!.name),
    root_sync_enabled: cdktf.booleanToTerraform(struct!.rootSyncEnabled),
    service_principal_id: cdktf.stringToTerraform(struct!.servicePrincipalId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    features: cdktf.listMapper(orgCloudAccountV2AzureFeaturesToTerraform, true)(struct!.features),
    hierarchy_selection: cdktf.listMapper(orgCloudAccountV2AzureHierarchySelectionToTerraform, true)(struct!.hierarchySelection),
  }
}


export function orgCloudAccountV2AzureToHclTerraform(struct?: OrgCloudAccountV2AzureOutputReference | OrgCloudAccountV2Azure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    environment_type: {
      value: cdktf.stringToHclTerraform(struct!.environmentType),
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
    features: {
      value: cdktf.listMapperHcl(orgCloudAccountV2AzureFeaturesToHclTerraform, true)(struct!.features),
      isBlock: true,
      type: "set",
      storageClassType: "OrgCloudAccountV2AzureFeaturesList",
    },
    hierarchy_selection: {
      value: cdktf.listMapperHcl(orgCloudAccountV2AzureHierarchySelectionToHclTerraform, true)(struct!.hierarchySelection),
      isBlock: true,
      type: "set",
      storageClassType: "OrgCloudAccountV2AzureHierarchySelectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgCloudAccountV2AzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrgCloudAccountV2Azure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountType = this._accountType;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._defaultAccountGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAccountGroupId = this._defaultAccountGroupId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._environmentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentType = this._environmentType;
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
    if (this._features?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.features = this._features?.internalValue;
    }
    if (this._hierarchySelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchySelection = this._hierarchySelection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgCloudAccountV2Azure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountType = undefined;
      this._clientId = undefined;
      this._defaultAccountGroupId = undefined;
      this._enabled = undefined;
      this._environmentType = undefined;
      this._groupIds = undefined;
      this._key = undefined;
      this._monitorFlowLogs = undefined;
      this._name = undefined;
      this._rootSyncEnabled = undefined;
      this._servicePrincipalId = undefined;
      this._tenantId = undefined;
      this._features.internalValue = undefined;
      this._hierarchySelection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountType = value.accountType;
      this._clientId = value.clientId;
      this._defaultAccountGroupId = value.defaultAccountGroupId;
      this._enabled = value.enabled;
      this._environmentType = value.environmentType;
      this._groupIds = value.groupIds;
      this._key = value.key;
      this._monitorFlowLogs = value.monitorFlowLogs;
      this._name = value.name;
      this._rootSyncEnabled = value.rootSyncEnabled;
      this._servicePrincipalId = value.servicePrincipalId;
      this._tenantId = value.tenantId;
      this._features.internalValue = value.features;
      this._hierarchySelection.internalValue = value.hierarchySelection;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
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

  // cloud_type - computed: true, optional: false, required: false
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
  }

  // created_epoch_millis - computed: true, optional: false, required: false
  public get createdEpochMillis() {
    return this.getNumberAttribute('created_epoch_millis');
  }

  // customer_name - computed: true, optional: false, required: false
  public get customerName() {
    return this.getStringAttribute('customer_name');
  }

  // default_account_group_id - computed: false, optional: true, required: false
  private _defaultAccountGroupId?: string; 
  public get defaultAccountGroupId() {
    return this.getStringAttribute('default_account_group_id');
  }
  public set defaultAccountGroupId(value: string) {
    this._defaultAccountGroupId = value;
  }
  public resetDefaultAccountGroupId() {
    this._defaultAccountGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAccountGroupIdInput() {
    return this._defaultAccountGroupId;
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }

  // deployment_type_description - computed: true, optional: false, required: false
  public get deploymentTypeDescription() {
    return this.getStringAttribute('deployment_type_description');
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

  // environment_type - computed: false, optional: true, required: false
  private _environmentType?: string; 
  public get environmentType() {
    return this.getStringAttribute('environment_type');
  }
  public set environmentType(value: string) {
    this._environmentType = value;
  }
  public resetEnvironmentType() {
    this._environmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentTypeInput() {
    return this._environmentType;
  }

  // group_ids - computed: true, optional: true, required: false
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

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // last_modified_epoch_millis - computed: true, optional: false, required: false
  public get lastModifiedEpochMillis() {
    return this.getNumberAttribute('last_modified_epoch_millis');
  }

  // member_sync_enabled - computed: true, optional: false, required: false
  public get memberSyncEnabled() {
    return this.getBooleanAttribute('member_sync_enabled');
  }

  // monitor_flow_logs - computed: false, optional: true, required: false
  private _monitorFlowLogs?: boolean | cdktf.IResolvable; 
  public get monitorFlowLogs() {
    return this.getBooleanAttribute('monitor_flow_logs');
  }
  public set monitorFlowLogs(value: boolean | cdktf.IResolvable) {
    this._monitorFlowLogs = value;
  }
  public resetMonitorFlowLogs() {
    this._monitorFlowLogs = undefined;
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

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }

  // protection_mode - computed: true, optional: false, required: false
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
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

  // template_url - computed: true, optional: false, required: false
  public get templateUrl() {
    return this.getStringAttribute('template_url');
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

  // features - computed: false, optional: true, required: false
  private _features = new OrgCloudAccountV2AzureFeaturesList(this, "features", true);
  public get features() {
    return this._features;
  }
  public putFeatures(value: OrgCloudAccountV2AzureFeatures[] | cdktf.IResolvable) {
    this._features.internalValue = value;
  }
  public resetFeatures() {
    this._features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // hierarchy_selection - computed: false, optional: true, required: false
  private _hierarchySelection = new OrgCloudAccountV2AzureHierarchySelectionList(this, "hierarchy_selection", true);
  public get hierarchySelection() {
    return this._hierarchySelection;
  }
  public putHierarchySelection(value: OrgCloudAccountV2AzureHierarchySelection[] | cdktf.IResolvable) {
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
export interface OrgCloudAccountV2GcpFeatures {
  /**
  * Feature name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#name OrgCloudAccountV2#name}
  */
  readonly name: string;
  /**
  * Feature state, one of enabled and disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#state OrgCloudAccountV2#state}
  */
  readonly state: string;
}

export function orgCloudAccountV2GcpFeaturesToTerraform(struct?: OrgCloudAccountV2GcpFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function orgCloudAccountV2GcpFeaturesToHclTerraform(struct?: OrgCloudAccountV2GcpFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgCloudAccountV2GcpFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgCloudAccountV2GcpFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgCloudAccountV2GcpFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._state = value.state;
    }
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

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class OrgCloudAccountV2GcpFeaturesList extends cdktf.ComplexList {
  public internalValue? : OrgCloudAccountV2GcpFeatures[] | cdktf.IResolvable

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
  public get(index: number): OrgCloudAccountV2GcpFeaturesOutputReference {
    return new OrgCloudAccountV2GcpFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgCloudAccountV2GcpHierarchySelection {
  /**
  * Display name for folder, project, or organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#display_name OrgCloudAccountV2#display_name}
  */
  readonly displayName: string;
  /**
  * Node type. Valid values - FOLDER, PROJECT, ORG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#node_type OrgCloudAccountV2#node_type}
  */
  readonly nodeType: string;
  /**
  * Resource ID. For folders, format is folders/{folder ID}. For projects, format is {project number}. For orgs, format is organizations/{org ID}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#resource_id OrgCloudAccountV2#resource_id}
  */
  readonly resourceId: string;
  /**
  * Selection type. Valid values: INCLUDE, EXCLUDE, ALL. If hierarchySelection.nodeType is PROJECT or FOLDER, then a valid value is either INCLUDE or EXCLUDE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#selection_type OrgCloudAccountV2#selection_type}
  */
  readonly selectionType: string;
}

export function orgCloudAccountV2GcpHierarchySelectionToTerraform(struct?: OrgCloudAccountV2GcpHierarchySelection | cdktf.IResolvable): any {
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


export function orgCloudAccountV2GcpHierarchySelectionToHclTerraform(struct?: OrgCloudAccountV2GcpHierarchySelection | cdktf.IResolvable): any {
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

export class OrgCloudAccountV2GcpHierarchySelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgCloudAccountV2GcpHierarchySelection | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OrgCloudAccountV2GcpHierarchySelection | cdktf.IResolvable | undefined) {
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

export class OrgCloudAccountV2GcpHierarchySelectionList extends cdktf.ComplexList {
  public internalValue? : OrgCloudAccountV2GcpHierarchySelection[] | cdktf.IResolvable

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
  public get(index: number): OrgCloudAccountV2GcpHierarchySelectionOutputReference {
    return new OrgCloudAccountV2GcpHierarchySelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgCloudAccountV2Gcp {
  /**
  * Cloud account group creation mode. Valid values - MANUAL, AUTO or RECURSIVE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#account_group_creation_mode OrgCloudAccountV2#account_group_creation_mode}
  */
  readonly accountGroupCreationMode?: string;
  /**
  * GCP project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#account_id OrgCloudAccountV2#account_id}
  */
  readonly accountId: string;
  /**
  * Account type - organization or account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#account_type OrgCloudAccountV2#account_type}
  */
  readonly accountType: string;
  /**
  * Enable or disable compressed network flow log generation. Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#compression_enabled OrgCloudAccountV2#compression_enabled}
  */
  readonly compressionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Content of the JSON credentials file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#credentials OrgCloudAccountV2#credentials}
  */
  readonly credentials: string;
  /**
  * Project ID where the Dataflow API is enabled. Required if `compressionEnabled` is set to `true` and if the `accountType` is `organization`. Optional if the `accountType` is `account` or `masterServiceAccount`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#dataflow_enabled_project OrgCloudAccountV2#dataflow_enabled_project}
  */
  readonly dataflowEnabledProject?: string;
  /**
  * Account group id to which you are assigning this account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#default_account_group_id OrgCloudAccountV2#default_account_group_id}
  */
  readonly defaultAccountGroupId: string;
  /**
  * Whether or not the account is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#enabled OrgCloudAccountV2#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Cloud Storage Bucket name that is used store the flow logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#flow_log_storage_bucket OrgCloudAccountV2#flow_log_storage_bucket}
  */
  readonly flowLogStorageBucket?: string;
  /**
  * Name to be used for the account on the Prisma Cloud platform (must be unique)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#name OrgCloudAccountV2#name}
  */
  readonly name: string;
  /**
  * GCP organization name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#organization_name OrgCloudAccountV2#organization_name}
  */
  readonly organizationName?: string;
  /**
  * GCP project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#project_id OrgCloudAccountV2#project_id}
  */
  readonly projectId?: string;
  /**
  * features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#features OrgCloudAccountV2#features}
  */
  readonly features?: OrgCloudAccountV2GcpFeatures[] | cdktf.IResolvable;
  /**
  * hierarchy_selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#hierarchy_selection OrgCloudAccountV2#hierarchy_selection}
  */
  readonly hierarchySelection?: OrgCloudAccountV2GcpHierarchySelection[] | cdktf.IResolvable;
}

export function orgCloudAccountV2GcpToTerraform(struct?: OrgCloudAccountV2GcpOutputReference | OrgCloudAccountV2Gcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_group_creation_mode: cdktf.stringToTerraform(struct!.accountGroupCreationMode),
    account_id: cdktf.stringToTerraform(struct!.accountId),
    account_type: cdktf.stringToTerraform(struct!.accountType),
    compression_enabled: cdktf.booleanToTerraform(struct!.compressionEnabled),
    credentials: cdktf.stringToTerraform(struct!.credentials),
    dataflow_enabled_project: cdktf.stringToTerraform(struct!.dataflowEnabledProject),
    default_account_group_id: cdktf.stringToTerraform(struct!.defaultAccountGroupId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    flow_log_storage_bucket: cdktf.stringToTerraform(struct!.flowLogStorageBucket),
    name: cdktf.stringToTerraform(struct!.name),
    organization_name: cdktf.stringToTerraform(struct!.organizationName),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    features: cdktf.listMapper(orgCloudAccountV2GcpFeaturesToTerraform, true)(struct!.features),
    hierarchy_selection: cdktf.listMapper(orgCloudAccountV2GcpHierarchySelectionToTerraform, true)(struct!.hierarchySelection),
  }
}


export function orgCloudAccountV2GcpToHclTerraform(struct?: OrgCloudAccountV2GcpOutputReference | OrgCloudAccountV2Gcp): any {
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
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
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
    flow_log_storage_bucket: {
      value: cdktf.stringToHclTerraform(struct!.flowLogStorageBucket),
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
    organization_name: {
      value: cdktf.stringToHclTerraform(struct!.organizationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    features: {
      value: cdktf.listMapperHcl(orgCloudAccountV2GcpFeaturesToHclTerraform, true)(struct!.features),
      isBlock: true,
      type: "set",
      storageClassType: "OrgCloudAccountV2GcpFeaturesList",
    },
    hierarchy_selection: {
      value: cdktf.listMapperHcl(orgCloudAccountV2GcpHierarchySelectionToHclTerraform, true)(struct!.hierarchySelection),
      isBlock: true,
      type: "set",
      storageClassType: "OrgCloudAccountV2GcpHierarchySelectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgCloudAccountV2GcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrgCloudAccountV2Gcp | undefined {
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
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._dataflowEnabledProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataflowEnabledProject = this._dataflowEnabledProject;
    }
    if (this._defaultAccountGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAccountGroupId = this._defaultAccountGroupId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._flowLogStorageBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowLogStorageBucket = this._flowLogStorageBucket;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._organizationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationName = this._organizationName;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._features?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.features = this._features?.internalValue;
    }
    if (this._hierarchySelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchySelection = this._hierarchySelection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgCloudAccountV2Gcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountGroupCreationMode = undefined;
      this._accountId = undefined;
      this._accountType = undefined;
      this._compressionEnabled = undefined;
      this._credentials = undefined;
      this._dataflowEnabledProject = undefined;
      this._defaultAccountGroupId = undefined;
      this._enabled = undefined;
      this._flowLogStorageBucket = undefined;
      this._name = undefined;
      this._organizationName = undefined;
      this._projectId = undefined;
      this._features.internalValue = undefined;
      this._hierarchySelection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountGroupCreationMode = value.accountGroupCreationMode;
      this._accountId = value.accountId;
      this._accountType = value.accountType;
      this._compressionEnabled = value.compressionEnabled;
      this._credentials = value.credentials;
      this._dataflowEnabledProject = value.dataflowEnabledProject;
      this._defaultAccountGroupId = value.defaultAccountGroupId;
      this._enabled = value.enabled;
      this._flowLogStorageBucket = value.flowLogStorageBucket;
      this._name = value.name;
      this._organizationName = value.organizationName;
      this._projectId = value.projectId;
      this._features.internalValue = value.features;
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

  // added_on_ts - computed: true, optional: false, required: false
  public get addedOnTs() {
    return this.getNumberAttribute('added_on_ts');
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // cloud_type - computed: true, optional: false, required: false
  public get cloudType() {
    return this.getStringAttribute('cloud_type');
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

  // created_epoch_millis - computed: true, optional: false, required: false
  public get createdEpochMillis() {
    return this.getNumberAttribute('created_epoch_millis');
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // customer_name - computed: true, optional: false, required: false
  public get customerName() {
    return this.getStringAttribute('customer_name');
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

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }

  // deployment_type_description - computed: true, optional: false, required: false
  public get deploymentTypeDescription() {
    return this.getStringAttribute('deployment_type_description');
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

  // group_ids - computed: true, optional: false, required: false
  public get groupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('group_ids'));
  }

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // last_modified_epoch_millis - computed: true, optional: false, required: false
  public get lastModifiedEpochMillis() {
    return this.getNumberAttribute('last_modified_epoch_millis');
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

  // organization_name - computed: true, optional: true, required: false
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  public resetOrganizationName() {
    this._organizationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
  }

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // protection_mode - computed: true, optional: false, required: false
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
  }

  // service_account_email - computed: true, optional: false, required: false
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }

  // storage_scan_enabled - computed: true, optional: false, required: false
  public get storageScanEnabled() {
    return this.getBooleanAttribute('storage_scan_enabled');
  }

  // features - computed: false, optional: true, required: false
  private _features = new OrgCloudAccountV2GcpFeaturesList(this, "features", true);
  public get features() {
    return this._features;
  }
  public putFeatures(value: OrgCloudAccountV2GcpFeatures[] | cdktf.IResolvable) {
    this._features.internalValue = value;
  }
  public resetFeatures() {
    this._features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // hierarchy_selection - computed: false, optional: true, required: false
  private _hierarchySelection = new OrgCloudAccountV2GcpHierarchySelectionList(this, "hierarchy_selection", true);
  public get hierarchySelection() {
    return this._hierarchySelection;
  }
  public putHierarchySelection(value: OrgCloudAccountV2GcpHierarchySelection[] | cdktf.IResolvable) {
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
export interface OrgCloudAccountV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#create OrgCloudAccountV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#delete OrgCloudAccountV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#update OrgCloudAccountV2#update}
  */
  readonly update?: string;
}

export function orgCloudAccountV2TimeoutsToTerraform(struct?: OrgCloudAccountV2Timeouts | cdktf.IResolvable): any {
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


export function orgCloudAccountV2TimeoutsToHclTerraform(struct?: OrgCloudAccountV2Timeouts | cdktf.IResolvable): any {
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

export class OrgCloudAccountV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgCloudAccountV2Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OrgCloudAccountV2Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2 prismacloud_org_cloud_account_v2}
*/
export class OrgCloudAccountV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_org_cloud_account_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgCloudAccountV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgCloudAccountV2 to import
  * @param importFromId The id of the existing OrgCloudAccountV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgCloudAccountV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_org_cloud_account_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/org_cloud_account_v2 prismacloud_org_cloud_account_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgCloudAccountV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: OrgCloudAccountV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'prismacloud_org_cloud_account_v2',
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
  private _aws = new OrgCloudAccountV2AwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: OrgCloudAccountV2Aws) {
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
  private _azure = new OrgCloudAccountV2AzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: OrgCloudAccountV2Azure) {
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
  private _gcp = new OrgCloudAccountV2GcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: OrgCloudAccountV2Gcp) {
    this._gcp.internalValue = value;
  }
  public resetGcp() {
    this._gcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpInput() {
    return this._gcp.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OrgCloudAccountV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OrgCloudAccountV2Timeouts) {
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
      aws: orgCloudAccountV2AwsToTerraform(this._aws.internalValue),
      azure: orgCloudAccountV2AzureToTerraform(this._azure.internalValue),
      gcp: orgCloudAccountV2GcpToTerraform(this._gcp.internalValue),
      timeouts: orgCloudAccountV2TimeoutsToTerraform(this._timeouts.internalValue),
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
        value: orgCloudAccountV2AwsToHclTerraform(this._aws.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgCloudAccountV2AwsList",
      },
      azure: {
        value: orgCloudAccountV2AzureToHclTerraform(this._azure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgCloudAccountV2AzureList",
      },
      gcp: {
        value: orgCloudAccountV2GcpToHclTerraform(this._gcp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgCloudAccountV2GcpList",
      },
      timeouts: {
        value: orgCloudAccountV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgCloudAccountV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
