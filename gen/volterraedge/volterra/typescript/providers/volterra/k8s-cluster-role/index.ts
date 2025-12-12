// https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/k8s_cluster_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K8SClusterRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/k8s_cluster_role#annotations K8SClusterRole#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/k8s_cluster_role#description K8SClusterRole#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/k8s_cluster_role#disable K8SClusterRole#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/k8s_cluster_role#id K8SClusterRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/k8s_cluster_role#labels K8SClusterRole#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/k8s_cluster_role#name K8SClusterRole#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/k8s_cluster_role#namespace K8SClusterRole#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/k8s_cluster_role#yaml K8SClusterRole#yaml}
  */
  readonly yaml?: string;
  /**
  * k8s_cluster_role_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/k8s_cluster_role#k8s_cluster_role_selector K8SClusterRole#k8s_cluster_role_selector}
  */
  readonly k8SClusterRoleSelector?: K8SClusterRoleK8SClusterRoleSelector;
  /**
  * policy_rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/k8s_cluster_role#policy_rule_list K8SClusterRole#policy_rule_list}
  */
  readonly policyRuleList?: K8SClusterRolePolicyRuleListStruct;
}
export interface K8SClusterRoleK8SClusterRoleSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/k8s_cluster_role#expressions K8SClusterRole#expressions}
  */
  readonly expressions: string[];
}

export function k8SClusterRoleK8SClusterRoleSelectorToTerraform(struct?: K8SClusterRoleK8SClusterRoleSelectorOutputReference | K8SClusterRoleK8SClusterRoleSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function k8SClusterRoleK8SClusterRoleSelectorToHclTerraform(struct?: K8SClusterRoleK8SClusterRoleSelectorOutputReference | K8SClusterRoleK8SClusterRoleSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expressions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterRoleK8SClusterRoleSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterRoleK8SClusterRoleSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterRoleK8SClusterRoleSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressions = value.expressions;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions?: string[]; 
  public get expressions() {
    return this.getListAttribute('expressions');
  }
  public set expressions(value: string[]) {
    this._expressions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions;
  }
}
export interface K8SClusterRolePolicyRuleListPolicyRuleNonResourceUrlListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/k8s_cluster_role#urls K8SClusterRole#urls}
  */
  readonly urls: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/k8s_cluster_role#verbs K8SClusterRole#verbs}
  */
  readonly verbs: string[];
}

export function k8SClusterRolePolicyRuleListPolicyRuleNonResourceUrlListStructToTerraform(struct?: K8SClusterRolePolicyRuleListPolicyRuleNonResourceUrlListStructOutputReference | K8SClusterRolePolicyRuleListPolicyRuleNonResourceUrlListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.urls),
    verbs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.verbs),
  }
}


export function k8SClusterRolePolicyRuleListPolicyRuleNonResourceUrlListStructToHclTerraform(struct?: K8SClusterRolePolicyRuleListPolicyRuleNonResourceUrlListStructOutputReference | K8SClusterRolePolicyRuleListPolicyRuleNonResourceUrlListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.urls),
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

export class K8SClusterRolePolicyRuleListPolicyRuleNonResourceUrlListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterRolePolicyRuleListPolicyRuleNonResourceUrlListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._urls !== undefined) {
      hasAnyValues = true;
      internalValueResult.urls = this._urls;
    }
    if (this._verbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbs = this._verbs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterRolePolicyRuleListPolicyRuleNonResourceUrlListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._urls = undefined;
      this._verbs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._urls = value.urls;
      this._verbs = value.verbs;
    }
  }

  // urls - computed: false, optional: false, required: true
  private _urls?: string[]; 
  public get urls() {
    return this.getListAttribute('urls');
  }
  public set urls(value: string[]) {
    this._urls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls;
  }

  // verbs - computed: false, optional: false, required: true
  private _verbs?: string[]; 
  public get verbs() {
    return this.getListAttribute('verbs');
  }
  public set verbs(value: string[]) {
    this._verbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verbsInput() {
    return this._verbs;
  }
}
export interface K8SClusterRolePolicyRuleListPolicyRuleResourceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/k8s_cluster_role#api_groups K8SClusterRole#api_groups}
  */
  readonly apiGroups: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/k8s_cluster_role#resource_instances K8SClusterRole#resource_instances}
  */
  readonly resourceInstances?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/k8s_cluster_role#resource_types K8SClusterRole#resource_types}
  */
  readonly resourceTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/k8s_cluster_role#verbs K8SClusterRole#verbs}
  */
  readonly verbs: string[];
}

export function k8SClusterRolePolicyRuleListPolicyRuleResourceListStructToTerraform(struct?: K8SClusterRolePolicyRuleListPolicyRuleResourceListStructOutputReference | K8SClusterRolePolicyRuleListPolicyRuleResourceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
    resource_instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceInstances),
    resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceTypes),
    verbs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.verbs),
  }
}


export function k8SClusterRolePolicyRuleListPolicyRuleResourceListStructToHclTerraform(struct?: K8SClusterRolePolicyRuleListPolicyRuleResourceListStructOutputReference | K8SClusterRolePolicyRuleListPolicyRuleResourceListStruct): any {
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
    resource_instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceInstances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceTypes),
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

export class K8SClusterRolePolicyRuleListPolicyRuleResourceListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterRolePolicyRuleListPolicyRuleResourceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups;
    }
    if (this._resourceInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceInstances = this._resourceInstances;
    }
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    if (this._verbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbs = this._verbs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterRolePolicyRuleListPolicyRuleResourceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiGroups = undefined;
      this._resourceInstances = undefined;
      this._resourceTypes = undefined;
      this._verbs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiGroups = value.apiGroups;
      this._resourceInstances = value.resourceInstances;
      this._resourceTypes = value.resourceTypes;
      this._verbs = value.verbs;
    }
  }

  // api_groups - computed: false, optional: false, required: true
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return this.getListAttribute('api_groups');
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups;
  }

  // resource_instances - computed: false, optional: true, required: false
  private _resourceInstances?: string[]; 
  public get resourceInstances() {
    return this.getListAttribute('resource_instances');
  }
  public set resourceInstances(value: string[]) {
    this._resourceInstances = value;
  }
  public resetResourceInstances() {
    this._resourceInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInstancesInput() {
    return this._resourceInstances;
  }

  // resource_types - computed: false, optional: false, required: true
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // verbs - computed: false, optional: false, required: true
  private _verbs?: string[]; 
  public get verbs() {
    return this.getListAttribute('verbs');
  }
  public set verbs(value: string[]) {
    this._verbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verbsInput() {
    return this._verbs;
  }
}
export interface K8SClusterRolePolicyRuleListPolicyRule {
  /**
  * non_resource_url_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/k8s_cluster_role#non_resource_url_list K8SClusterRole#non_resource_url_list}
  */
  readonly nonResourceUrlList?: K8SClusterRolePolicyRuleListPolicyRuleNonResourceUrlListStruct;
  /**
  * resource_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/k8s_cluster_role#resource_list K8SClusterRole#resource_list}
  */
  readonly resourceList?: K8SClusterRolePolicyRuleListPolicyRuleResourceListStruct;
}

export function k8SClusterRolePolicyRuleListPolicyRuleToTerraform(struct?: K8SClusterRolePolicyRuleListPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    non_resource_url_list: k8SClusterRolePolicyRuleListPolicyRuleNonResourceUrlListStructToTerraform(struct!.nonResourceUrlList),
    resource_list: k8SClusterRolePolicyRuleListPolicyRuleResourceListStructToTerraform(struct!.resourceList),
  }
}


export function k8SClusterRolePolicyRuleListPolicyRuleToHclTerraform(struct?: K8SClusterRolePolicyRuleListPolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    non_resource_url_list: {
      value: k8SClusterRolePolicyRuleListPolicyRuleNonResourceUrlListStructToHclTerraform(struct!.nonResourceUrlList),
      isBlock: true,
      type: "list",
      storageClassType: "K8SClusterRolePolicyRuleListPolicyRuleNonResourceUrlListStructList",
    },
    resource_list: {
      value: k8SClusterRolePolicyRuleListPolicyRuleResourceListStructToHclTerraform(struct!.resourceList),
      isBlock: true,
      type: "list",
      storageClassType: "K8SClusterRolePolicyRuleListPolicyRuleResourceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterRolePolicyRuleListPolicyRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): K8SClusterRolePolicyRuleListPolicyRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nonResourceUrlList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonResourceUrlList = this._nonResourceUrlList?.internalValue;
    }
    if (this._resourceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceList = this._resourceList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterRolePolicyRuleListPolicyRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nonResourceUrlList.internalValue = undefined;
      this._resourceList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nonResourceUrlList.internalValue = value.nonResourceUrlList;
      this._resourceList.internalValue = value.resourceList;
    }
  }

  // non_resource_url_list - computed: false, optional: true, required: false
  private _nonResourceUrlList = new K8SClusterRolePolicyRuleListPolicyRuleNonResourceUrlListStructOutputReference(this, "non_resource_url_list");
  public get nonResourceUrlList() {
    return this._nonResourceUrlList;
  }
  public putNonResourceUrlList(value: K8SClusterRolePolicyRuleListPolicyRuleNonResourceUrlListStruct) {
    this._nonResourceUrlList.internalValue = value;
  }
  public resetNonResourceUrlList() {
    this._nonResourceUrlList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonResourceUrlListInput() {
    return this._nonResourceUrlList.internalValue;
  }

  // resource_list - computed: false, optional: true, required: false
  private _resourceList = new K8SClusterRolePolicyRuleListPolicyRuleResourceListStructOutputReference(this, "resource_list");
  public get resourceList() {
    return this._resourceList;
  }
  public putResourceList(value: K8SClusterRolePolicyRuleListPolicyRuleResourceListStruct) {
    this._resourceList.internalValue = value;
  }
  public resetResourceList() {
    this._resourceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceListInput() {
    return this._resourceList.internalValue;
  }
}

export class K8SClusterRolePolicyRuleListPolicyRuleList extends cdktf.ComplexList {
  public internalValue? : K8SClusterRolePolicyRuleListPolicyRule[] | cdktf.IResolvable

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
  public get(index: number): K8SClusterRolePolicyRuleListPolicyRuleOutputReference {
    return new K8SClusterRolePolicyRuleListPolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface K8SClusterRolePolicyRuleListStruct {
  /**
  * policy_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/k8s_cluster_role#policy_rule K8SClusterRole#policy_rule}
  */
  readonly policyRule: K8SClusterRolePolicyRuleListPolicyRule[] | cdktf.IResolvable;
}

export function k8SClusterRolePolicyRuleListStructToTerraform(struct?: K8SClusterRolePolicyRuleListStructOutputReference | K8SClusterRolePolicyRuleListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_rule: cdktf.listMapper(k8SClusterRolePolicyRuleListPolicyRuleToTerraform, true)(struct!.policyRule),
  }
}


export function k8SClusterRolePolicyRuleListStructToHclTerraform(struct?: K8SClusterRolePolicyRuleListStructOutputReference | K8SClusterRolePolicyRuleListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_rule: {
      value: cdktf.listMapperHcl(k8SClusterRolePolicyRuleListPolicyRuleToHclTerraform, true)(struct!.policyRule),
      isBlock: true,
      type: "list",
      storageClassType: "K8SClusterRolePolicyRuleListPolicyRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class K8SClusterRolePolicyRuleListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): K8SClusterRolePolicyRuleListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyRule = this._policyRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: K8SClusterRolePolicyRuleListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policyRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyRule.internalValue = value.policyRule;
    }
  }

  // policy_rule - computed: false, optional: false, required: true
  private _policyRule = new K8SClusterRolePolicyRuleListPolicyRuleList(this, "policy_rule", false);
  public get policyRule() {
    return this._policyRule;
  }
  public putPolicyRule(value: K8SClusterRolePolicyRuleListPolicyRule[] | cdktf.IResolvable) {
    this._policyRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRuleInput() {
    return this._policyRule.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/k8s_cluster_role volterra_k8s_cluster_role}
*/
export class K8SClusterRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_k8s_cluster_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a K8SClusterRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the K8SClusterRole to import
  * @param importFromId The id of the existing K8SClusterRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/k8s_cluster_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the K8SClusterRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_k8s_cluster_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/k8s_cluster_role volterra_k8s_cluster_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K8SClusterRoleConfig
  */
  public constructor(scope: Construct, id: string, config: K8SClusterRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_k8s_cluster_role',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.46',
        providerVersionConstraint: '0.11.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._yaml = config.yaml;
    this._k8SClusterRoleSelector.internalValue = config.k8SClusterRoleSelector;
    this._policyRuleList.internalValue = config.policyRuleList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // yaml - computed: false, optional: true, required: false
  private _yaml?: string; 
  public get yaml() {
    return this.getStringAttribute('yaml');
  }
  public set yaml(value: string) {
    this._yaml = value;
  }
  public resetYaml() {
    this._yaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yamlInput() {
    return this._yaml;
  }

  // k8s_cluster_role_selector - computed: false, optional: true, required: false
  private _k8SClusterRoleSelector = new K8SClusterRoleK8SClusterRoleSelectorOutputReference(this, "k8s_cluster_role_selector");
  public get k8SClusterRoleSelector() {
    return this._k8SClusterRoleSelector;
  }
  public putK8SClusterRoleSelector(value: K8SClusterRoleK8SClusterRoleSelector) {
    this._k8SClusterRoleSelector.internalValue = value;
  }
  public resetK8SClusterRoleSelector() {
    this._k8SClusterRoleSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SClusterRoleSelectorInput() {
    return this._k8SClusterRoleSelector.internalValue;
  }

  // policy_rule_list - computed: false, optional: true, required: false
  private _policyRuleList = new K8SClusterRolePolicyRuleListStructOutputReference(this, "policy_rule_list");
  public get policyRuleList() {
    return this._policyRuleList;
  }
  public putPolicyRuleList(value: K8SClusterRolePolicyRuleListStruct) {
    this._policyRuleList.internalValue = value;
  }
  public resetPolicyRuleList() {
    this._policyRuleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyRuleListInput() {
    return this._policyRuleList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      yaml: cdktf.stringToTerraform(this._yaml),
      k8s_cluster_role_selector: k8SClusterRoleK8SClusterRoleSelectorToTerraform(this._k8SClusterRoleSelector.internalValue),
      policy_rule_list: k8SClusterRolePolicyRuleListStructToTerraform(this._policyRuleList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      yaml: {
        value: cdktf.stringToHclTerraform(this._yaml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      k8s_cluster_role_selector: {
        value: k8SClusterRoleK8SClusterRoleSelectorToHclTerraform(this._k8SClusterRoleSelector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SClusterRoleK8SClusterRoleSelectorList",
      },
      policy_rule_list: {
        value: k8SClusterRolePolicyRuleListStructToHclTerraform(this._policyRuleList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "K8SClusterRolePolicyRuleListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
