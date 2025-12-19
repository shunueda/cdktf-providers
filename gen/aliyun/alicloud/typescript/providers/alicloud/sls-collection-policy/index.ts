// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlsCollectionPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy#centralize_enabled SlsCollectionPolicy#centralize_enabled}
  */
  readonly centralizeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy#data_code SlsCollectionPolicy#data_code}
  */
  readonly dataCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy#enabled SlsCollectionPolicy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy#id SlsCollectionPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy#policy_name SlsCollectionPolicy#policy_name}
  */
  readonly policyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy#product_code SlsCollectionPolicy#product_code}
  */
  readonly productCode: string;
  /**
  * centralize_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy#centralize_config SlsCollectionPolicy#centralize_config}
  */
  readonly centralizeConfig?: SlsCollectionPolicyCentralizeConfig;
  /**
  * data_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy#data_config SlsCollectionPolicy#data_config}
  */
  readonly dataConfig?: SlsCollectionPolicyDataConfig;
  /**
  * policy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy#policy_config SlsCollectionPolicy#policy_config}
  */
  readonly policyConfig: SlsCollectionPolicyPolicyConfig;
  /**
  * resource_directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy#resource_directory SlsCollectionPolicy#resource_directory}
  */
  readonly resourceDirectory?: SlsCollectionPolicyResourceDirectory;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy#timeouts SlsCollectionPolicy#timeouts}
  */
  readonly timeouts?: SlsCollectionPolicyTimeouts;
}
export interface SlsCollectionPolicyCentralizeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy#dest_logstore SlsCollectionPolicy#dest_logstore}
  */
  readonly destLogstore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy#dest_project SlsCollectionPolicy#dest_project}
  */
  readonly destProject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy#dest_region SlsCollectionPolicy#dest_region}
  */
  readonly destRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy#dest_ttl SlsCollectionPolicy#dest_ttl}
  */
  readonly destTtl?: number;
}

export function slsCollectionPolicyCentralizeConfigToTerraform(struct?: SlsCollectionPolicyCentralizeConfigOutputReference | SlsCollectionPolicyCentralizeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_logstore: cdktf.stringToTerraform(struct!.destLogstore),
    dest_project: cdktf.stringToTerraform(struct!.destProject),
    dest_region: cdktf.stringToTerraform(struct!.destRegion),
    dest_ttl: cdktf.numberToTerraform(struct!.destTtl),
  }
}


export function slsCollectionPolicyCentralizeConfigToHclTerraform(struct?: SlsCollectionPolicyCentralizeConfigOutputReference | SlsCollectionPolicyCentralizeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_logstore: {
      value: cdktf.stringToHclTerraform(struct!.destLogstore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_project: {
      value: cdktf.stringToHclTerraform(struct!.destProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_region: {
      value: cdktf.stringToHclTerraform(struct!.destRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_ttl: {
      value: cdktf.numberToHclTerraform(struct!.destTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlsCollectionPolicyCentralizeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlsCollectionPolicyCentralizeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destLogstore !== undefined) {
      hasAnyValues = true;
      internalValueResult.destLogstore = this._destLogstore;
    }
    if (this._destProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.destProject = this._destProject;
    }
    if (this._destRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.destRegion = this._destRegion;
    }
    if (this._destTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.destTtl = this._destTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlsCollectionPolicyCentralizeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destLogstore = undefined;
      this._destProject = undefined;
      this._destRegion = undefined;
      this._destTtl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destLogstore = value.destLogstore;
      this._destProject = value.destProject;
      this._destRegion = value.destRegion;
      this._destTtl = value.destTtl;
    }
  }

  // dest_logstore - computed: false, optional: true, required: false
  private _destLogstore?: string; 
  public get destLogstore() {
    return this.getStringAttribute('dest_logstore');
  }
  public set destLogstore(value: string) {
    this._destLogstore = value;
  }
  public resetDestLogstore() {
    this._destLogstore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destLogstoreInput() {
    return this._destLogstore;
  }

  // dest_project - computed: false, optional: true, required: false
  private _destProject?: string; 
  public get destProject() {
    return this.getStringAttribute('dest_project');
  }
  public set destProject(value: string) {
    this._destProject = value;
  }
  public resetDestProject() {
    this._destProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destProjectInput() {
    return this._destProject;
  }

  // dest_region - computed: false, optional: true, required: false
  private _destRegion?: string; 
  public get destRegion() {
    return this.getStringAttribute('dest_region');
  }
  public set destRegion(value: string) {
    this._destRegion = value;
  }
  public resetDestRegion() {
    this._destRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destRegionInput() {
    return this._destRegion;
  }

  // dest_ttl - computed: false, optional: true, required: false
  private _destTtl?: number; 
  public get destTtl() {
    return this.getNumberAttribute('dest_ttl');
  }
  public set destTtl(value: number) {
    this._destTtl = value;
  }
  public resetDestTtl() {
    this._destTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destTtlInput() {
    return this._destTtl;
  }
}
export interface SlsCollectionPolicyDataConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy#data_region SlsCollectionPolicy#data_region}
  */
  readonly dataRegion?: string;
}

export function slsCollectionPolicyDataConfigToTerraform(struct?: SlsCollectionPolicyDataConfigOutputReference | SlsCollectionPolicyDataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_region: cdktf.stringToTerraform(struct!.dataRegion),
  }
}


export function slsCollectionPolicyDataConfigToHclTerraform(struct?: SlsCollectionPolicyDataConfigOutputReference | SlsCollectionPolicyDataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_region: {
      value: cdktf.stringToHclTerraform(struct!.dataRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlsCollectionPolicyDataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlsCollectionPolicyDataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataRegion = this._dataRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlsCollectionPolicyDataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataRegion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataRegion = value.dataRegion;
    }
  }

  // data_project - computed: true, optional: false, required: false
  public get dataProject() {
    return this.getStringAttribute('data_project');
  }

  // data_region - computed: false, optional: true, required: false
  private _dataRegion?: string; 
  public get dataRegion() {
    return this.getStringAttribute('data_region');
  }
  public set dataRegion(value: string) {
    this._dataRegion = value;
  }
  public resetDataRegion() {
    this._dataRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRegionInput() {
    return this._dataRegion;
  }
}
export interface SlsCollectionPolicyPolicyConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy#instance_ids SlsCollectionPolicy#instance_ids}
  */
  readonly instanceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy#regions SlsCollectionPolicy#regions}
  */
  readonly regions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy#resource_mode SlsCollectionPolicy#resource_mode}
  */
  readonly resourceMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy#resource_tags SlsCollectionPolicy#resource_tags}
  */
  readonly resourceTags?: { [key: string]: string };
}

export function slsCollectionPolicyPolicyConfigToTerraform(struct?: SlsCollectionPolicyPolicyConfigOutputReference | SlsCollectionPolicyPolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instanceIds),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    resource_mode: cdktf.stringToTerraform(struct!.resourceMode),
    resource_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceTags),
  }
}


export function slsCollectionPolicyPolicyConfigToHclTerraform(struct?: SlsCollectionPolicyPolicyConfigOutputReference | SlsCollectionPolicyPolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instanceIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_mode: {
      value: cdktf.stringToHclTerraform(struct!.resourceMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlsCollectionPolicyPolicyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlsCollectionPolicyPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceIds = this._instanceIds;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._resourceMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceMode = this._resourceMode;
    }
    if (this._resourceTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTags = this._resourceTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlsCollectionPolicyPolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceIds = undefined;
      this._regions = undefined;
      this._resourceMode = undefined;
      this._resourceTags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceIds = value.instanceIds;
      this._regions = value.regions;
      this._resourceMode = value.resourceMode;
      this._resourceTags = value.resourceTags;
    }
  }

  // instance_ids - computed: false, optional: true, required: false
  private _instanceIds?: string[]; 
  public get instanceIds() {
    return this.getListAttribute('instance_ids');
  }
  public set instanceIds(value: string[]) {
    this._instanceIds = value;
  }
  public resetInstanceIds() {
    this._instanceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdsInput() {
    return this._instanceIds;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // resource_mode - computed: false, optional: false, required: true
  private _resourceMode?: string; 
  public get resourceMode() {
    return this.getStringAttribute('resource_mode');
  }
  public set resourceMode(value: string) {
    this._resourceMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceModeInput() {
    return this._resourceMode;
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags?: { [key: string]: string }; 
  public get resourceTags() {
    return this.getStringMapAttribute('resource_tags');
  }
  public set resourceTags(value: { [key: string]: string }) {
    this._resourceTags = value;
  }
  public resetResourceTags() {
    this._resourceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags;
  }
}
export interface SlsCollectionPolicyResourceDirectory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy#account_group_type SlsCollectionPolicy#account_group_type}
  */
  readonly accountGroupType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy#members SlsCollectionPolicy#members}
  */
  readonly members?: string[];
}

export function slsCollectionPolicyResourceDirectoryToTerraform(struct?: SlsCollectionPolicyResourceDirectoryOutputReference | SlsCollectionPolicyResourceDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_group_type: cdktf.stringToTerraform(struct!.accountGroupType),
    members: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.members),
  }
}


export function slsCollectionPolicyResourceDirectoryToHclTerraform(struct?: SlsCollectionPolicyResourceDirectoryOutputReference | SlsCollectionPolicyResourceDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_group_type: {
      value: cdktf.stringToHclTerraform(struct!.accountGroupType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    members: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.members),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlsCollectionPolicyResourceDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlsCollectionPolicyResourceDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountGroupType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountGroupType = this._accountGroupType;
    }
    if (this._members !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlsCollectionPolicyResourceDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountGroupType = undefined;
      this._members = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountGroupType = value.accountGroupType;
      this._members = value.members;
    }
  }

  // account_group_type - computed: false, optional: true, required: false
  private _accountGroupType?: string; 
  public get accountGroupType() {
    return this.getStringAttribute('account_group_type');
  }
  public set accountGroupType(value: string) {
    this._accountGroupType = value;
  }
  public resetAccountGroupType() {
    this._accountGroupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountGroupTypeInput() {
    return this._accountGroupType;
  }

  // members - computed: false, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return this.getListAttribute('members');
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }
}
export interface SlsCollectionPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy#create SlsCollectionPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy#delete SlsCollectionPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy#update SlsCollectionPolicy#update}
  */
  readonly update?: string;
}

export function slsCollectionPolicyTimeoutsToTerraform(struct?: SlsCollectionPolicyTimeouts | cdktf.IResolvable): any {
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


export function slsCollectionPolicyTimeoutsToHclTerraform(struct?: SlsCollectionPolicyTimeouts | cdktf.IResolvable): any {
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

export class SlsCollectionPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SlsCollectionPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlsCollectionPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy alicloud_sls_collection_policy}
*/
export class SlsCollectionPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_sls_collection_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlsCollectionPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlsCollectionPolicy to import
  * @param importFromId The id of the existing SlsCollectionPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlsCollectionPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_sls_collection_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/sls_collection_policy alicloud_sls_collection_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlsCollectionPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SlsCollectionPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_sls_collection_policy',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._centralizeEnabled = config.centralizeEnabled;
    this._dataCode = config.dataCode;
    this._enabled = config.enabled;
    this._id = config.id;
    this._policyName = config.policyName;
    this._productCode = config.productCode;
    this._centralizeConfig.internalValue = config.centralizeConfig;
    this._dataConfig.internalValue = config.dataConfig;
    this._policyConfig.internalValue = config.policyConfig;
    this._resourceDirectory.internalValue = config.resourceDirectory;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // centralize_enabled - computed: false, optional: true, required: false
  private _centralizeEnabled?: boolean | cdktf.IResolvable; 
  public get centralizeEnabled() {
    return this.getBooleanAttribute('centralize_enabled');
  }
  public set centralizeEnabled(value: boolean | cdktf.IResolvable) {
    this._centralizeEnabled = value;
  }
  public resetCentralizeEnabled() {
    this._centralizeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centralizeEnabledInput() {
    return this._centralizeEnabled;
  }

  // data_code - computed: false, optional: false, required: true
  private _dataCode?: string; 
  public get dataCode() {
    return this.getStringAttribute('data_code');
  }
  public set dataCode(value: string) {
    this._dataCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCodeInput() {
    return this._dataCode;
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

  // product_code - computed: false, optional: false, required: true
  private _productCode?: string; 
  public get productCode() {
    return this.getStringAttribute('product_code');
  }
  public set productCode(value: string) {
    this._productCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productCodeInput() {
    return this._productCode;
  }

  // centralize_config - computed: false, optional: true, required: false
  private _centralizeConfig = new SlsCollectionPolicyCentralizeConfigOutputReference(this, "centralize_config");
  public get centralizeConfig() {
    return this._centralizeConfig;
  }
  public putCentralizeConfig(value: SlsCollectionPolicyCentralizeConfig) {
    this._centralizeConfig.internalValue = value;
  }
  public resetCentralizeConfig() {
    this._centralizeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centralizeConfigInput() {
    return this._centralizeConfig.internalValue;
  }

  // data_config - computed: false, optional: true, required: false
  private _dataConfig = new SlsCollectionPolicyDataConfigOutputReference(this, "data_config");
  public get dataConfig() {
    return this._dataConfig;
  }
  public putDataConfig(value: SlsCollectionPolicyDataConfig) {
    this._dataConfig.internalValue = value;
  }
  public resetDataConfig() {
    this._dataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataConfigInput() {
    return this._dataConfig.internalValue;
  }

  // policy_config - computed: false, optional: false, required: true
  private _policyConfig = new SlsCollectionPolicyPolicyConfigOutputReference(this, "policy_config");
  public get policyConfig() {
    return this._policyConfig;
  }
  public putPolicyConfig(value: SlsCollectionPolicyPolicyConfig) {
    this._policyConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyConfigInput() {
    return this._policyConfig.internalValue;
  }

  // resource_directory - computed: false, optional: true, required: false
  private _resourceDirectory = new SlsCollectionPolicyResourceDirectoryOutputReference(this, "resource_directory");
  public get resourceDirectory() {
    return this._resourceDirectory;
  }
  public putResourceDirectory(value: SlsCollectionPolicyResourceDirectory) {
    this._resourceDirectory.internalValue = value;
  }
  public resetResourceDirectory() {
    this._resourceDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceDirectoryInput() {
    return this._resourceDirectory.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SlsCollectionPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SlsCollectionPolicyTimeouts) {
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
      centralize_enabled: cdktf.booleanToTerraform(this._centralizeEnabled),
      data_code: cdktf.stringToTerraform(this._dataCode),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      policy_name: cdktf.stringToTerraform(this._policyName),
      product_code: cdktf.stringToTerraform(this._productCode),
      centralize_config: slsCollectionPolicyCentralizeConfigToTerraform(this._centralizeConfig.internalValue),
      data_config: slsCollectionPolicyDataConfigToTerraform(this._dataConfig.internalValue),
      policy_config: slsCollectionPolicyPolicyConfigToTerraform(this._policyConfig.internalValue),
      resource_directory: slsCollectionPolicyResourceDirectoryToTerraform(this._resourceDirectory.internalValue),
      timeouts: slsCollectionPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      centralize_enabled: {
        value: cdktf.booleanToHclTerraform(this._centralizeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_code: {
        value: cdktf.stringToHclTerraform(this._dataCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_code: {
        value: cdktf.stringToHclTerraform(this._productCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      centralize_config: {
        value: slsCollectionPolicyCentralizeConfigToHclTerraform(this._centralizeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlsCollectionPolicyCentralizeConfigList",
      },
      data_config: {
        value: slsCollectionPolicyDataConfigToHclTerraform(this._dataConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlsCollectionPolicyDataConfigList",
      },
      policy_config: {
        value: slsCollectionPolicyPolicyConfigToHclTerraform(this._policyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlsCollectionPolicyPolicyConfigList",
      },
      resource_directory: {
        value: slsCollectionPolicyResourceDirectoryToHclTerraform(this._resourceDirectory.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlsCollectionPolicyResourceDirectoryList",
      },
      timeouts: {
        value: slsCollectionPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SlsCollectionPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
