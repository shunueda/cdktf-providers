// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformResourceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account Identifier of the account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group#account_id PlatformResourceGroup#account_id}
  */
  readonly accountId: string;
  /**
  * The scope levels at which this resource group can be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group#allowed_scope_levels PlatformResourceGroup#allowed_scope_levels}
  */
  readonly allowedScopeLevels?: string[];
  /**
  * Color of the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group#color PlatformResourceGroup#color}
  */
  readonly color?: string;
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group#description PlatformResourceGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group#id PlatformResourceGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group#identifier PlatformResourceGroup#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group#name PlatformResourceGroup#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group#org_id PlatformResourceGroup#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group#project_id PlatformResourceGroup#project_id}
  */
  readonly projectId?: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group#tags PlatformResourceGroup#tags}
  */
  readonly tags?: string[];
  /**
  * included_scopes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group#included_scopes PlatformResourceGroup#included_scopes}
  */
  readonly includedScopes?: PlatformResourceGroupIncludedScopes[] | cdktf.IResolvable;
  /**
  * resource_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group#resource_filter PlatformResourceGroup#resource_filter}
  */
  readonly resourceFilter?: PlatformResourceGroupResourceFilter[] | cdktf.IResolvable;
}
export interface PlatformResourceGroupIncludedScopes {
  /**
  * Account Identifier of the account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group#account_id PlatformResourceGroup#account_id}
  */
  readonly accountId?: string;
  /**
  * Can be one of these 2 EXCLUDING_CHILD_SCOPES or INCLUDING_CHILD_SCOPES
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group#filter PlatformResourceGroup#filter}
  */
  readonly filter: string;
  /**
  * Organization Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group#org_id PlatformResourceGroup#org_id}
  */
  readonly orgId?: string;
  /**
  * Project Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group#project_id PlatformResourceGroup#project_id}
  */
  readonly projectId?: string;
}

export function platformResourceGroupIncludedScopesToTerraform(struct?: PlatformResourceGroupIncludedScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    filter: cdktf.stringToTerraform(struct!.filter),
    org_id: cdktf.stringToTerraform(struct!.orgId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function platformResourceGroupIncludedScopesToHclTerraform(struct?: PlatformResourceGroupIncludedScopes | cdktf.IResolvable): any {
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
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org_id: {
      value: cdktf.stringToHclTerraform(struct!.orgId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformResourceGroupIncludedScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformResourceGroupIncludedScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._orgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgId = this._orgId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformResourceGroupIncludedScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._filter = undefined;
      this._orgId = undefined;
      this._projectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._filter = value.filter;
      this._orgId = value.orgId;
      this._projectId = value.projectId;
    }
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
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
}

export class PlatformResourceGroupIncludedScopesList extends cdktf.ComplexList {
  public internalValue? : PlatformResourceGroupIncludedScopes[] | cdktf.IResolvable

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
  public get(index: number): PlatformResourceGroupIncludedScopesOutputReference {
    return new PlatformResourceGroupIncludedScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformResourceGroupResourceFilterResourcesAttributeFilter {
  /**
  * Name of the attribute. Valid values are `category`, `type`, `labels`, `tag` or `tags`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group#attribute_name PlatformResourceGroup#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * Value of the attributes.Valid values for `category` are [ARTIFACTORY,CLOUD_COST,CLOUD_PROVIDER,CODE_REPO,MONITORING,SECRET_MANAGER,TICKETING], for `type` are [Production,PreProduction], for `labels`, it can be using the syntax 'label:value', for `tag` or `tags` it can be any string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group#attribute_values PlatformResourceGroup#attribute_values}
  */
  readonly attributeValues?: string[];
}

export function platformResourceGroupResourceFilterResourcesAttributeFilterToTerraform(struct?: PlatformResourceGroupResourceFilterResourcesAttributeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    attribute_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributeValues),
  }
}


export function platformResourceGroupResourceFilterResourcesAttributeFilterToHclTerraform(struct?: PlatformResourceGroupResourceFilterResourcesAttributeFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attributeValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformResourceGroupResourceFilterResourcesAttributeFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformResourceGroupResourceFilterResourcesAttributeFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._attributeValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeValues = this._attributeValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformResourceGroupResourceFilterResourcesAttributeFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._attributeValues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._attributeValues = value.attributeValues;
    }
  }

  // attribute_name - computed: false, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // attribute_values - computed: false, optional: true, required: false
  private _attributeValues?: string[]; 
  public get attributeValues() {
    return cdktf.Fn.tolist(this.getListAttribute('attribute_values'));
  }
  public set attributeValues(value: string[]) {
    this._attributeValues = value;
  }
  public resetAttributeValues() {
    this._attributeValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValuesInput() {
    return this._attributeValues;
  }
}

export class PlatformResourceGroupResourceFilterResourcesAttributeFilterList extends cdktf.ComplexList {
  public internalValue? : PlatformResourceGroupResourceFilterResourcesAttributeFilter[] | cdktf.IResolvable

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
  public get(index: number): PlatformResourceGroupResourceFilterResourcesAttributeFilterOutputReference {
    return new PlatformResourceGroupResourceFilterResourcesAttributeFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformResourceGroupResourceFilterResources {
  /**
  * List of the identifiers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group#identifiers PlatformResourceGroup#identifiers}
  */
  readonly identifiers?: string[];
  /**
  * Type of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group#resource_type PlatformResourceGroup#resource_type}
  */
  readonly resourceType: string;
  /**
  * attribute_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group#attribute_filter PlatformResourceGroup#attribute_filter}
  */
  readonly attributeFilter?: PlatformResourceGroupResourceFilterResourcesAttributeFilter[] | cdktf.IResolvable;
}

export function platformResourceGroupResourceFilterResourcesToTerraform(struct?: PlatformResourceGroupResourceFilterResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identifiers),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    attribute_filter: cdktf.listMapper(platformResourceGroupResourceFilterResourcesAttributeFilterToTerraform, true)(struct!.attributeFilter),
  }
}


export function platformResourceGroupResourceFilterResourcesToHclTerraform(struct?: PlatformResourceGroupResourceFilterResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identifiers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identifiers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_filter: {
      value: cdktf.listMapperHcl(platformResourceGroupResourceFilterResourcesAttributeFilterToHclTerraform, true)(struct!.attributeFilter),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformResourceGroupResourceFilterResourcesAttributeFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformResourceGroupResourceFilterResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformResourceGroupResourceFilterResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifiers = this._identifiers;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._attributeFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeFilter = this._attributeFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformResourceGroupResourceFilterResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifiers = undefined;
      this._resourceType = undefined;
      this._attributeFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifiers = value.identifiers;
      this._resourceType = value.resourceType;
      this._attributeFilter.internalValue = value.attributeFilter;
    }
  }

  // identifiers - computed: false, optional: true, required: false
  private _identifiers?: string[]; 
  public get identifiers() {
    return cdktf.Fn.tolist(this.getListAttribute('identifiers'));
  }
  public set identifiers(value: string[]) {
    this._identifiers = value;
  }
  public resetIdentifiers() {
    this._identifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifiersInput() {
    return this._identifiers;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // attribute_filter - computed: false, optional: true, required: false
  private _attributeFilter = new PlatformResourceGroupResourceFilterResourcesAttributeFilterList(this, "attribute_filter", false);
  public get attributeFilter() {
    return this._attributeFilter;
  }
  public putAttributeFilter(value: PlatformResourceGroupResourceFilterResourcesAttributeFilter[] | cdktf.IResolvable) {
    this._attributeFilter.internalValue = value;
  }
  public resetAttributeFilter() {
    this._attributeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeFilterInput() {
    return this._attributeFilter.internalValue;
  }
}

export class PlatformResourceGroupResourceFilterResourcesList extends cdktf.ComplexList {
  public internalValue? : PlatformResourceGroupResourceFilterResources[] | cdktf.IResolvable

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
  public get(index: number): PlatformResourceGroupResourceFilterResourcesOutputReference {
    return new PlatformResourceGroupResourceFilterResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformResourceGroupResourceFilter {
  /**
  * Include all resource or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group#include_all_resources PlatformResourceGroup#include_all_resources}
  */
  readonly includeAllResources?: boolean | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group#resources PlatformResourceGroup#resources}
  */
  readonly resources?: PlatformResourceGroupResourceFilterResources[] | cdktf.IResolvable;
}

export function platformResourceGroupResourceFilterToTerraform(struct?: PlatformResourceGroupResourceFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_all_resources: cdktf.booleanToTerraform(struct!.includeAllResources),
    resources: cdktf.listMapper(platformResourceGroupResourceFilterResourcesToTerraform, true)(struct!.resources),
  }
}


export function platformResourceGroupResourceFilterToHclTerraform(struct?: PlatformResourceGroupResourceFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_all_resources: {
      value: cdktf.booleanToHclTerraform(struct!.includeAllResources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resources: {
      value: cdktf.listMapperHcl(platformResourceGroupResourceFilterResourcesToHclTerraform, true)(struct!.resources),
      isBlock: true,
      type: "set",
      storageClassType: "PlatformResourceGroupResourceFilterResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformResourceGroupResourceFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformResourceGroupResourceFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeAllResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAllResources = this._includeAllResources;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformResourceGroupResourceFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeAllResources = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeAllResources = value.includeAllResources;
      this._resources.internalValue = value.resources;
    }
  }

  // include_all_resources - computed: false, optional: true, required: false
  private _includeAllResources?: boolean | cdktf.IResolvable; 
  public get includeAllResources() {
    return this.getBooleanAttribute('include_all_resources');
  }
  public set includeAllResources(value: boolean | cdktf.IResolvable) {
    this._includeAllResources = value;
  }
  public resetIncludeAllResources() {
    this._includeAllResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllResourcesInput() {
    return this._includeAllResources;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new PlatformResourceGroupResourceFilterResourcesList(this, "resources", true);
  public get resources() {
    return this._resources;
  }
  public putResources(value: PlatformResourceGroupResourceFilterResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class PlatformResourceGroupResourceFilterList extends cdktf.ComplexList {
  public internalValue? : PlatformResourceGroupResourceFilter[] | cdktf.IResolvable

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
  public get(index: number): PlatformResourceGroupResourceFilterOutputReference {
    return new PlatformResourceGroupResourceFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group harness_platform_resource_group}
*/
export class PlatformResourceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_resource_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformResourceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformResourceGroup to import
  * @param importFromId The id of the existing PlatformResourceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformResourceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_resource_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_resource_group harness_platform_resource_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformResourceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformResourceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_resource_group',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0',
        providerVersionConstraint: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._allowedScopeLevels = config.allowedScopeLevels;
    this._color = config.color;
    this._description = config.description;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._tags = config.tags;
    this._includedScopes.internalValue = config.includedScopes;
    this._resourceFilter.internalValue = config.resourceFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // allowed_scope_levels - computed: true, optional: true, required: false
  private _allowedScopeLevels?: string[]; 
  public get allowedScopeLevels() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_scope_levels'));
  }
  public set allowedScopeLevels(value: string[]) {
    this._allowedScopeLevels = value;
  }
  public resetAllowedScopeLevels() {
    this._allowedScopeLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedScopeLevelsInput() {
    return this._allowedScopeLevels;
  }

  // color - computed: true, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // description - computed: false, optional: true, required: false
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // included_scopes - computed: false, optional: true, required: false
  private _includedScopes = new PlatformResourceGroupIncludedScopesList(this, "included_scopes", true);
  public get includedScopes() {
    return this._includedScopes;
  }
  public putIncludedScopes(value: PlatformResourceGroupIncludedScopes[] | cdktf.IResolvable) {
    this._includedScopes.internalValue = value;
  }
  public resetIncludedScopes() {
    this._includedScopes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedScopesInput() {
    return this._includedScopes.internalValue;
  }

  // resource_filter - computed: false, optional: true, required: false
  private _resourceFilter = new PlatformResourceGroupResourceFilterList(this, "resource_filter", false);
  public get resourceFilter() {
    return this._resourceFilter;
  }
  public putResourceFilter(value: PlatformResourceGroupResourceFilter[] | cdktf.IResolvable) {
    this._resourceFilter.internalValue = value;
  }
  public resetResourceFilter() {
    this._resourceFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFilterInput() {
    return this._resourceFilter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      allowed_scope_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedScopeLevels),
      color: cdktf.stringToTerraform(this._color),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      included_scopes: cdktf.listMapper(platformResourceGroupIncludedScopesToTerraform, true)(this._includedScopes.internalValue),
      resource_filter: cdktf.listMapper(platformResourceGroupResourceFilterToTerraform, true)(this._resourceFilter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_scope_levels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedScopeLevels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      included_scopes: {
        value: cdktf.listMapperHcl(platformResourceGroupIncludedScopesToHclTerraform, true)(this._includedScopes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PlatformResourceGroupIncludedScopesList",
      },
      resource_filter: {
        value: cdktf.listMapperHcl(platformResourceGroupResourceFilterToHclTerraform, true)(this._resourceFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformResourceGroupResourceFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
