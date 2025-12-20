// https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Administrative role template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#administrative RoleTemplate#administrative}
  */
  readonly administrative?: boolean | cdktf.IResolvable;
  /**
  * Annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#annotations RoleTemplate#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Context role template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#context RoleTemplate#context}
  */
  readonly context?: string;
  /**
  * Default role template for new created cluster or project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#default_role RoleTemplate#default_role}
  */
  readonly defaultRole?: boolean | cdktf.IResolvable;
  /**
  * Role template policy description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#description RoleTemplate#description}
  */
  readonly description?: string;
  /**
  * External role template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#external RoleTemplate#external}
  */
  readonly external?: boolean | cdktf.IResolvable;
  /**
  * Hidden role template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#hidden RoleTemplate#hidden}
  */
  readonly hidden?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#id RoleTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#labels RoleTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Locked role template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#locked RoleTemplate#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * Role template policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#name RoleTemplate#name}
  */
  readonly name: string;
  /**
  * Inherit role template IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#role_template_ids RoleTemplate#role_template_ids}
  */
  readonly roleTemplateIds?: string[];
  /**
  * external_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#external_rules RoleTemplate#external_rules}
  */
  readonly externalRules?: RoleTemplateExternalRules[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#rules RoleTemplate#rules}
  */
  readonly rules?: RoleTemplateRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#timeouts RoleTemplate#timeouts}
  */
  readonly timeouts?: RoleTemplateTimeouts;
}
export interface RoleTemplateExternalRules {
  /**
  * Policy rule api groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#api_groups RoleTemplate#api_groups}
  */
  readonly apiGroups?: string[];
  /**
  * Policy rule non resource urls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#non_resource_urls RoleTemplate#non_resource_urls}
  */
  readonly nonResourceUrls?: string[];
  /**
  * Policy rule resource names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#resource_names RoleTemplate#resource_names}
  */
  readonly resourceNames?: string[];
  /**
  * Policy rule resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#resources RoleTemplate#resources}
  */
  readonly resources?: string[];
  /**
  * Policy rule verbs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#verbs RoleTemplate#verbs}
  */
  readonly verbs?: string[];
}

export function roleTemplateExternalRulesToTerraform(struct?: RoleTemplateExternalRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
    non_resource_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nonResourceUrls),
    resource_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceNames),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    verbs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.verbs),
  }
}


export function roleTemplateExternalRulesToHclTerraform(struct?: RoleTemplateExternalRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    non_resource_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nonResourceUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceNames),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleTemplateExternalRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoleTemplateExternalRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups;
    }
    if (this._nonResourceUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonResourceUrls = this._nonResourceUrls;
    }
    if (this._resourceNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceNames = this._resourceNames;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._verbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbs = this._verbs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleTemplateExternalRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroups = undefined;
      this._nonResourceUrls = undefined;
      this._resourceNames = undefined;
      this._resources = undefined;
      this._verbs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroups = value.apiGroups;
      this._nonResourceUrls = value.nonResourceUrls;
      this._resourceNames = value.resourceNames;
      this._resources = value.resources;
      this._verbs = value.verbs;
    }
  }

  // api_groups - computed: false, optional: true, required: false
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return this.getListAttribute('api_groups');
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  public resetApiGroups() {
    this._apiGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups;
  }

  // non_resource_urls - computed: false, optional: true, required: false
  private _nonResourceUrls?: string[]; 
  public get nonResourceUrls() {
    return this.getListAttribute('non_resource_urls');
  }
  public set nonResourceUrls(value: string[]) {
    this._nonResourceUrls = value;
  }
  public resetNonResourceUrls() {
    this._nonResourceUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonResourceUrlsInput() {
    return this._nonResourceUrls;
  }

  // resource_names - computed: false, optional: true, required: false
  private _resourceNames?: string[]; 
  public get resourceNames() {
    return this.getListAttribute('resource_names');
  }
  public set resourceNames(value: string[]) {
    this._resourceNames = value;
  }
  public resetResourceNames() {
    this._resourceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNamesInput() {
    return this._resourceNames;
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
}

export class RoleTemplateExternalRulesList extends cdktf.ComplexList {
  public internalValue? : RoleTemplateExternalRules[] | cdktf.IResolvable

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
  public get(index: number): RoleTemplateExternalRulesOutputReference {
    return new RoleTemplateExternalRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoleTemplateRules {
  /**
  * Policy rule api groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#api_groups RoleTemplate#api_groups}
  */
  readonly apiGroups?: string[];
  /**
  * Policy rule non resource urls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#non_resource_urls RoleTemplate#non_resource_urls}
  */
  readonly nonResourceUrls?: string[];
  /**
  * Policy rule resource names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#resource_names RoleTemplate#resource_names}
  */
  readonly resourceNames?: string[];
  /**
  * Policy rule resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#resources RoleTemplate#resources}
  */
  readonly resources?: string[];
  /**
  * Policy rule verbs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#verbs RoleTemplate#verbs}
  */
  readonly verbs?: string[];
}

export function roleTemplateRulesToTerraform(struct?: RoleTemplateRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
    non_resource_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nonResourceUrls),
    resource_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceNames),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    verbs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.verbs),
  }
}


export function roleTemplateRulesToHclTerraform(struct?: RoleTemplateRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    non_resource_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nonResourceUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceNames),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RoleTemplateRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RoleTemplateRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups;
    }
    if (this._nonResourceUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonResourceUrls = this._nonResourceUrls;
    }
    if (this._resourceNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceNames = this._resourceNames;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._verbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbs = this._verbs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RoleTemplateRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroups = undefined;
      this._nonResourceUrls = undefined;
      this._resourceNames = undefined;
      this._resources = undefined;
      this._verbs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroups = value.apiGroups;
      this._nonResourceUrls = value.nonResourceUrls;
      this._resourceNames = value.resourceNames;
      this._resources = value.resources;
      this._verbs = value.verbs;
    }
  }

  // api_groups - computed: false, optional: true, required: false
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return this.getListAttribute('api_groups');
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  public resetApiGroups() {
    this._apiGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups;
  }

  // non_resource_urls - computed: false, optional: true, required: false
  private _nonResourceUrls?: string[]; 
  public get nonResourceUrls() {
    return this.getListAttribute('non_resource_urls');
  }
  public set nonResourceUrls(value: string[]) {
    this._nonResourceUrls = value;
  }
  public resetNonResourceUrls() {
    this._nonResourceUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonResourceUrlsInput() {
    return this._nonResourceUrls;
  }

  // resource_names - computed: false, optional: true, required: false
  private _resourceNames?: string[]; 
  public get resourceNames() {
    return this.getListAttribute('resource_names');
  }
  public set resourceNames(value: string[]) {
    this._resourceNames = value;
  }
  public resetResourceNames() {
    this._resourceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNamesInput() {
    return this._resourceNames;
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
}

export class RoleTemplateRulesList extends cdktf.ComplexList {
  public internalValue? : RoleTemplateRules[] | cdktf.IResolvable

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
  public get(index: number): RoleTemplateRulesOutputReference {
    return new RoleTemplateRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RoleTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#create RoleTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#delete RoleTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#update RoleTemplate#update}
  */
  readonly update?: string;
}

export function roleTemplateTimeoutsToTerraform(struct?: RoleTemplateTimeouts | cdktf.IResolvable): any {
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


export function roleTemplateTimeoutsToHclTerraform(struct?: RoleTemplateTimeouts | cdktf.IResolvable): any {
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

export class RoleTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RoleTemplateTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RoleTemplateTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template rancher2_role_template}
*/
export class RoleTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rancher2_role_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoleTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoleTemplate to import
  * @param importFromId The id of the existing RoleTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoleTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rancher2_role_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/role_template rancher2_role_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: RoleTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'rancher2_role_template',
      terraformGeneratorMetadata: {
        providerName: 'rancher2',
        providerVersion: '7.9.0',
        providerVersionConstraint: '7.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._administrative = config.administrative;
    this._annotations = config.annotations;
    this._context = config.context;
    this._defaultRole = config.defaultRole;
    this._description = config.description;
    this._external = config.external;
    this._hidden = config.hidden;
    this._id = config.id;
    this._labels = config.labels;
    this._locked = config.locked;
    this._name = config.name;
    this._roleTemplateIds = config.roleTemplateIds;
    this._externalRules.internalValue = config.externalRules;
    this._rules.internalValue = config.rules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrative - computed: false, optional: true, required: false
  private _administrative?: boolean | cdktf.IResolvable; 
  public get administrative() {
    return this.getBooleanAttribute('administrative');
  }
  public set administrative(value: boolean | cdktf.IResolvable) {
    this._administrative = value;
  }
  public resetAdministrative() {
    this._administrative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administrativeInput() {
    return this._administrative;
  }

  // annotations - computed: true, optional: true, required: false
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

  // builtin - computed: true, optional: false, required: false
  public get builtin() {
    return this.getBooleanAttribute('builtin');
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // default_role - computed: false, optional: true, required: false
  private _defaultRole?: boolean | cdktf.IResolvable; 
  public get defaultRole() {
    return this.getBooleanAttribute('default_role');
  }
  public set defaultRole(value: boolean | cdktf.IResolvable) {
    this._defaultRole = value;
  }
  public resetDefaultRole() {
    this._defaultRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRoleInput() {
    return this._defaultRole;
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

  // external - computed: false, optional: true, required: false
  private _external?: boolean | cdktf.IResolvable; 
  public get external() {
    return this.getBooleanAttribute('external');
  }
  public set external(value: boolean | cdktf.IResolvable) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // hidden - computed: false, optional: true, required: false
  private _hidden?: boolean | cdktf.IResolvable; 
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }
  public set hidden(value: boolean | cdktf.IResolvable) {
    this._hidden = value;
  }
  public resetHidden() {
    this._hidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden;
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

  // labels - computed: true, optional: true, required: false
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

  // locked - computed: false, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
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

  // role_template_ids - computed: true, optional: true, required: false
  private _roleTemplateIds?: string[]; 
  public get roleTemplateIds() {
    return this.getListAttribute('role_template_ids');
  }
  public set roleTemplateIds(value: string[]) {
    this._roleTemplateIds = value;
  }
  public resetRoleTemplateIds() {
    this._roleTemplateIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleTemplateIdsInput() {
    return this._roleTemplateIds;
  }

  // external_rules - computed: false, optional: true, required: false
  private _externalRules = new RoleTemplateExternalRulesList(this, "external_rules", false);
  public get externalRules() {
    return this._externalRules;
  }
  public putExternalRules(value: RoleTemplateExternalRules[] | cdktf.IResolvable) {
    this._externalRules.internalValue = value;
  }
  public resetExternalRules() {
    this._externalRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalRulesInput() {
    return this._externalRules.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new RoleTemplateRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: RoleTemplateRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RoleTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RoleTemplateTimeouts) {
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
      administrative: cdktf.booleanToTerraform(this._administrative),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      context: cdktf.stringToTerraform(this._context),
      default_role: cdktf.booleanToTerraform(this._defaultRole),
      description: cdktf.stringToTerraform(this._description),
      external: cdktf.booleanToTerraform(this._external),
      hidden: cdktf.booleanToTerraform(this._hidden),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      locked: cdktf.booleanToTerraform(this._locked),
      name: cdktf.stringToTerraform(this._name),
      role_template_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roleTemplateIds),
      external_rules: cdktf.listMapper(roleTemplateExternalRulesToTerraform, true)(this._externalRules.internalValue),
      rules: cdktf.listMapper(roleTemplateRulesToTerraform, true)(this._rules.internalValue),
      timeouts: roleTemplateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      administrative: {
        value: cdktf.booleanToHclTerraform(this._administrative),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      context: {
        value: cdktf.stringToHclTerraform(this._context),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_role: {
        value: cdktf.booleanToHclTerraform(this._defaultRole),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external: {
        value: cdktf.booleanToHclTerraform(this._external),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hidden: {
        value: cdktf.booleanToHclTerraform(this._hidden),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      locked: {
        value: cdktf.booleanToHclTerraform(this._locked),
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
      role_template_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roleTemplateIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      external_rules: {
        value: cdktf.listMapperHcl(roleTemplateExternalRulesToHclTerraform, true)(this._externalRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoleTemplateExternalRulesList",
      },
      rules: {
        value: cdktf.listMapperHcl(roleTemplateRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RoleTemplateRulesList",
      },
      timeouts: {
        value: roleTemplateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RoleTemplateTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
