// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkPolicyViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#annotations NetworkPolicyView#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#description NetworkPolicyView#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#disable NetworkPolicyView#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#id NetworkPolicyView#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#labels NetworkPolicyView#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#name NetworkPolicyView#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#namespace NetworkPolicyView#namespace}
  */
  readonly namespace: string;
  /**
  * egress_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#egress_rules NetworkPolicyView#egress_rules}
  */
  readonly egressRules?: NetworkPolicyViewEgressRules[] | cdktf.IResolvable;
  /**
  * endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#endpoint NetworkPolicyView#endpoint}
  */
  readonly endpoint: NetworkPolicyViewEndpoint;
  /**
  * ingress_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#ingress_rules NetworkPolicyView#ingress_rules}
  */
  readonly ingressRules?: NetworkPolicyViewIngressRules[] | cdktf.IResolvable;
}
export interface NetworkPolicyViewEgressRulesAdvAction {
}

export function networkPolicyViewEgressRulesAdvActionToTerraform(struct?: NetworkPolicyViewEgressRulesAdvActionOutputReference | NetworkPolicyViewEgressRulesAdvAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function networkPolicyViewEgressRulesAdvActionToHclTerraform(struct?: NetworkPolicyViewEgressRulesAdvActionOutputReference | NetworkPolicyViewEgressRulesAdvAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NetworkPolicyViewEgressRulesAdvActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyViewEgressRulesAdvAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyViewEgressRulesAdvAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface NetworkPolicyViewEgressRulesApplications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#applications NetworkPolicyView#applications}
  */
  readonly applications?: string[];
}

export function networkPolicyViewEgressRulesApplicationsToTerraform(struct?: NetworkPolicyViewEgressRulesApplicationsOutputReference | NetworkPolicyViewEgressRulesApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applications),
  }
}


export function networkPolicyViewEgressRulesApplicationsToHclTerraform(struct?: NetworkPolicyViewEgressRulesApplicationsOutputReference | NetworkPolicyViewEgressRulesApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyViewEgressRulesApplicationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyViewEgressRulesApplications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyViewEgressRulesApplications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applications = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applications = value.applications;
    }
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return this.getListAttribute('applications');
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }
}
export interface NetworkPolicyViewEgressRulesIpPrefixSetRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#name NetworkPolicyView#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#namespace NetworkPolicyView#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#tenant NetworkPolicyView#tenant}
  */
  readonly tenant?: string;
}

export function networkPolicyViewEgressRulesIpPrefixSetRefToTerraform(struct?: NetworkPolicyViewEgressRulesIpPrefixSetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function networkPolicyViewEgressRulesIpPrefixSetRefToHclTerraform(struct?: NetworkPolicyViewEgressRulesIpPrefixSetRef | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyViewEgressRulesIpPrefixSetRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyViewEgressRulesIpPrefixSetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyViewEgressRulesIpPrefixSetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class NetworkPolicyViewEgressRulesIpPrefixSetRefList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyViewEgressRulesIpPrefixSetRef[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyViewEgressRulesIpPrefixSetRefOutputReference {
    return new NetworkPolicyViewEgressRulesIpPrefixSetRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyViewEgressRulesIpPrefixSet {
  /**
  * ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#ref NetworkPolicyView#ref}
  */
  readonly ref?: NetworkPolicyViewEgressRulesIpPrefixSetRef[] | cdktf.IResolvable;
}

export function networkPolicyViewEgressRulesIpPrefixSetToTerraform(struct?: NetworkPolicyViewEgressRulesIpPrefixSetOutputReference | NetworkPolicyViewEgressRulesIpPrefixSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: cdktf.listMapper(networkPolicyViewEgressRulesIpPrefixSetRefToTerraform, true)(struct!.ref),
  }
}


export function networkPolicyViewEgressRulesIpPrefixSetToHclTerraform(struct?: NetworkPolicyViewEgressRulesIpPrefixSetOutputReference | NetworkPolicyViewEgressRulesIpPrefixSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: cdktf.listMapperHcl(networkPolicyViewEgressRulesIpPrefixSetRefToHclTerraform, true)(struct!.ref),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyViewEgressRulesIpPrefixSetRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyViewEgressRulesIpPrefixSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyViewEgressRulesIpPrefixSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyViewEgressRulesIpPrefixSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ref.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ref.internalValue = value.ref;
    }
  }

  // ref - computed: false, optional: true, required: false
  private _ref = new NetworkPolicyViewEgressRulesIpPrefixSetRefList(this, "ref", false);
  public get ref() {
    return this._ref;
  }
  public putRef(value: NetworkPolicyViewEgressRulesIpPrefixSetRef[] | cdktf.IResolvable) {
    this._ref.internalValue = value;
  }
  public resetRef() {
    this._ref.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface NetworkPolicyViewEgressRulesLabelMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#keys NetworkPolicyView#keys}
  */
  readonly keys?: string[];
}

export function networkPolicyViewEgressRulesLabelMatcherToTerraform(struct?: NetworkPolicyViewEgressRulesLabelMatcherOutputReference | NetworkPolicyViewEgressRulesLabelMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
  }
}


export function networkPolicyViewEgressRulesLabelMatcherToHclTerraform(struct?: NetworkPolicyViewEgressRulesLabelMatcherOutputReference | NetworkPolicyViewEgressRulesLabelMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyViewEgressRulesLabelMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyViewEgressRulesLabelMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyViewEgressRulesLabelMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keys = value.keys;
    }
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }
}
export interface NetworkPolicyViewEgressRulesLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#expressions NetworkPolicyView#expressions}
  */
  readonly expressions: string[];
}

export function networkPolicyViewEgressRulesLabelSelectorToTerraform(struct?: NetworkPolicyViewEgressRulesLabelSelectorOutputReference | NetworkPolicyViewEgressRulesLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function networkPolicyViewEgressRulesLabelSelectorToHclTerraform(struct?: NetworkPolicyViewEgressRulesLabelSelectorOutputReference | NetworkPolicyViewEgressRulesLabelSelector): any {
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

export class NetworkPolicyViewEgressRulesLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyViewEgressRulesLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyViewEgressRulesLabelSelector | undefined) {
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
export interface NetworkPolicyViewEgressRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#description NetworkPolicyView#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#name NetworkPolicyView#name}
  */
  readonly name: string;
}

export function networkPolicyViewEgressRulesMetadataToTerraform(struct?: NetworkPolicyViewEgressRulesMetadataOutputReference | NetworkPolicyViewEgressRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function networkPolicyViewEgressRulesMetadataToHclTerraform(struct?: NetworkPolicyViewEgressRulesMetadataOutputReference | NetworkPolicyViewEgressRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyViewEgressRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyViewEgressRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyViewEgressRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
    }
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
}
export interface NetworkPolicyViewEgressRulesPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#ipv6_prefixes NetworkPolicyView#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#prefixes NetworkPolicyView#prefixes}
  */
  readonly prefixes?: string[];
}

export function networkPolicyViewEgressRulesPrefixListStructToTerraform(struct?: NetworkPolicyViewEgressRulesPrefixListStructOutputReference | NetworkPolicyViewEgressRulesPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function networkPolicyViewEgressRulesPrefixListStructToHclTerraform(struct?: NetworkPolicyViewEgressRulesPrefixListStructOutputReference | NetworkPolicyViewEgressRulesPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyViewEgressRulesPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyViewEgressRulesPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyViewEgressRulesPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Prefixes = undefined;
      this._prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Prefixes = value.ipv6Prefixes;
      this._prefixes = value.prefixes;
    }
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }
}
export interface NetworkPolicyViewEgressRulesProtocolPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#port_ranges NetworkPolicyView#port_ranges}
  */
  readonly portRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#protocol NetworkPolicyView#protocol}
  */
  readonly protocol?: string;
}

export function networkPolicyViewEgressRulesProtocolPortRangeToTerraform(struct?: NetworkPolicyViewEgressRulesProtocolPortRangeOutputReference | NetworkPolicyViewEgressRulesProtocolPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portRanges),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function networkPolicyViewEgressRulesProtocolPortRangeToHclTerraform(struct?: NetworkPolicyViewEgressRulesProtocolPortRangeOutputReference | NetworkPolicyViewEgressRulesProtocolPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.portRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyViewEgressRulesProtocolPortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyViewEgressRulesProtocolPortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyViewEgressRulesProtocolPortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._portRanges = undefined;
      this._protocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._portRanges = value.portRanges;
      this._protocol = value.protocol;
    }
  }

  // port_ranges - computed: false, optional: true, required: false
  private _portRanges?: string[]; 
  public get portRanges() {
    return this.getListAttribute('port_ranges');
  }
  public set portRanges(value: string[]) {
    this._portRanges = value;
  }
  public resetPortRanges() {
    this._portRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface NetworkPolicyViewEgressRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#action NetworkPolicyView#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#all_tcp_traffic NetworkPolicyView#all_tcp_traffic}
  */
  readonly allTcpTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#all_traffic NetworkPolicyView#all_traffic}
  */
  readonly allTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#all_udp_traffic NetworkPolicyView#all_udp_traffic}
  */
  readonly allUdpTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#any NetworkPolicyView#any}
  */
  readonly any?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#inside_endpoints NetworkPolicyView#inside_endpoints}
  */
  readonly insideEndpoints?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#outside_endpoints NetworkPolicyView#outside_endpoints}
  */
  readonly outsideEndpoints?: boolean | cdktf.IResolvable;
  /**
  * adv_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#adv_action NetworkPolicyView#adv_action}
  */
  readonly advAction?: NetworkPolicyViewEgressRulesAdvAction;
  /**
  * applications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#applications NetworkPolicyView#applications}
  */
  readonly applications?: NetworkPolicyViewEgressRulesApplications;
  /**
  * ip_prefix_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#ip_prefix_set NetworkPolicyView#ip_prefix_set}
  */
  readonly ipPrefixSet?: NetworkPolicyViewEgressRulesIpPrefixSet;
  /**
  * label_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#label_matcher NetworkPolicyView#label_matcher}
  */
  readonly labelMatcher?: NetworkPolicyViewEgressRulesLabelMatcher;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#label_selector NetworkPolicyView#label_selector}
  */
  readonly labelSelector?: NetworkPolicyViewEgressRulesLabelSelector;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#metadata NetworkPolicyView#metadata}
  */
  readonly metadata: NetworkPolicyViewEgressRulesMetadata;
  /**
  * prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#prefix_list NetworkPolicyView#prefix_list}
  */
  readonly prefixList?: NetworkPolicyViewEgressRulesPrefixListStruct;
  /**
  * protocol_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#protocol_port_range NetworkPolicyView#protocol_port_range}
  */
  readonly protocolPortRange?: NetworkPolicyViewEgressRulesProtocolPortRange;
}

export function networkPolicyViewEgressRulesToTerraform(struct?: NetworkPolicyViewEgressRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    all_tcp_traffic: cdktf.booleanToTerraform(struct!.allTcpTraffic),
    all_traffic: cdktf.booleanToTerraform(struct!.allTraffic),
    all_udp_traffic: cdktf.booleanToTerraform(struct!.allUdpTraffic),
    any: cdktf.booleanToTerraform(struct!.any),
    inside_endpoints: cdktf.booleanToTerraform(struct!.insideEndpoints),
    outside_endpoints: cdktf.booleanToTerraform(struct!.outsideEndpoints),
    adv_action: networkPolicyViewEgressRulesAdvActionToTerraform(struct!.advAction),
    applications: networkPolicyViewEgressRulesApplicationsToTerraform(struct!.applications),
    ip_prefix_set: networkPolicyViewEgressRulesIpPrefixSetToTerraform(struct!.ipPrefixSet),
    label_matcher: networkPolicyViewEgressRulesLabelMatcherToTerraform(struct!.labelMatcher),
    label_selector: networkPolicyViewEgressRulesLabelSelectorToTerraform(struct!.labelSelector),
    metadata: networkPolicyViewEgressRulesMetadataToTerraform(struct!.metadata),
    prefix_list: networkPolicyViewEgressRulesPrefixListStructToTerraform(struct!.prefixList),
    protocol_port_range: networkPolicyViewEgressRulesProtocolPortRangeToTerraform(struct!.protocolPortRange),
  }
}


export function networkPolicyViewEgressRulesToHclTerraform(struct?: NetworkPolicyViewEgressRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    all_tcp_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.allTcpTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    all_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.allTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    all_udp_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.allUdpTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any: {
      value: cdktf.booleanToHclTerraform(struct!.any),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inside_endpoints: {
      value: cdktf.booleanToHclTerraform(struct!.insideEndpoints),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    outside_endpoints: {
      value: cdktf.booleanToHclTerraform(struct!.outsideEndpoints),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    adv_action: {
      value: networkPolicyViewEgressRulesAdvActionToHclTerraform(struct!.advAction),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyViewEgressRulesAdvActionList",
    },
    applications: {
      value: networkPolicyViewEgressRulesApplicationsToHclTerraform(struct!.applications),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyViewEgressRulesApplicationsList",
    },
    ip_prefix_set: {
      value: networkPolicyViewEgressRulesIpPrefixSetToHclTerraform(struct!.ipPrefixSet),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyViewEgressRulesIpPrefixSetList",
    },
    label_matcher: {
      value: networkPolicyViewEgressRulesLabelMatcherToHclTerraform(struct!.labelMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyViewEgressRulesLabelMatcherList",
    },
    label_selector: {
      value: networkPolicyViewEgressRulesLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyViewEgressRulesLabelSelectorList",
    },
    metadata: {
      value: networkPolicyViewEgressRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyViewEgressRulesMetadataList",
    },
    prefix_list: {
      value: networkPolicyViewEgressRulesPrefixListStructToHclTerraform(struct!.prefixList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyViewEgressRulesPrefixListStructList",
    },
    protocol_port_range: {
      value: networkPolicyViewEgressRulesProtocolPortRangeToHclTerraform(struct!.protocolPortRange),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyViewEgressRulesProtocolPortRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyViewEgressRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyViewEgressRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._allTcpTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.allTcpTraffic = this._allTcpTraffic;
    }
    if (this._allTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.allTraffic = this._allTraffic;
    }
    if (this._allUdpTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.allUdpTraffic = this._allUdpTraffic;
    }
    if (this._any !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any;
    }
    if (this._insideEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideEndpoints = this._insideEndpoints;
    }
    if (this._outsideEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideEndpoints = this._outsideEndpoints;
    }
    if (this._advAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advAction = this._advAction?.internalValue;
    }
    if (this._applications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications?.internalValue;
    }
    if (this._ipPrefixSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixSet = this._ipPrefixSet?.internalValue;
    }
    if (this._labelMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelMatcher = this._labelMatcher?.internalValue;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._prefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList?.internalValue;
    }
    if (this._protocolPortRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolPortRange = this._protocolPortRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyViewEgressRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._allTcpTraffic = undefined;
      this._allTraffic = undefined;
      this._allUdpTraffic = undefined;
      this._any = undefined;
      this._insideEndpoints = undefined;
      this._outsideEndpoints = undefined;
      this._advAction.internalValue = undefined;
      this._applications.internalValue = undefined;
      this._ipPrefixSet.internalValue = undefined;
      this._labelMatcher.internalValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._prefixList.internalValue = undefined;
      this._protocolPortRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._allTcpTraffic = value.allTcpTraffic;
      this._allTraffic = value.allTraffic;
      this._allUdpTraffic = value.allUdpTraffic;
      this._any = value.any;
      this._insideEndpoints = value.insideEndpoints;
      this._outsideEndpoints = value.outsideEndpoints;
      this._advAction.internalValue = value.advAction;
      this._applications.internalValue = value.applications;
      this._ipPrefixSet.internalValue = value.ipPrefixSet;
      this._labelMatcher.internalValue = value.labelMatcher;
      this._labelSelector.internalValue = value.labelSelector;
      this._metadata.internalValue = value.metadata;
      this._prefixList.internalValue = value.prefixList;
      this._protocolPortRange.internalValue = value.protocolPortRange;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // all_tcp_traffic - computed: false, optional: true, required: false
  private _allTcpTraffic?: boolean | cdktf.IResolvable; 
  public get allTcpTraffic() {
    return this.getBooleanAttribute('all_tcp_traffic');
  }
  public set allTcpTraffic(value: boolean | cdktf.IResolvable) {
    this._allTcpTraffic = value;
  }
  public resetAllTcpTraffic() {
    this._allTcpTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allTcpTrafficInput() {
    return this._allTcpTraffic;
  }

  // all_traffic - computed: false, optional: true, required: false
  private _allTraffic?: boolean | cdktf.IResolvable; 
  public get allTraffic() {
    return this.getBooleanAttribute('all_traffic');
  }
  public set allTraffic(value: boolean | cdktf.IResolvable) {
    this._allTraffic = value;
  }
  public resetAllTraffic() {
    this._allTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allTrafficInput() {
    return this._allTraffic;
  }

  // all_udp_traffic - computed: false, optional: true, required: false
  private _allUdpTraffic?: boolean | cdktf.IResolvable; 
  public get allUdpTraffic() {
    return this.getBooleanAttribute('all_udp_traffic');
  }
  public set allUdpTraffic(value: boolean | cdktf.IResolvable) {
    this._allUdpTraffic = value;
  }
  public resetAllUdpTraffic() {
    this._allUdpTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allUdpTrafficInput() {
    return this._allUdpTraffic;
  }

  // any - computed: false, optional: true, required: false
  private _any?: boolean | cdktf.IResolvable; 
  public get any() {
    return this.getBooleanAttribute('any');
  }
  public set any(value: boolean | cdktf.IResolvable) {
    this._any = value;
  }
  public resetAny() {
    this._any = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any;
  }

  // inside_endpoints - computed: false, optional: true, required: false
  private _insideEndpoints?: boolean | cdktf.IResolvable; 
  public get insideEndpoints() {
    return this.getBooleanAttribute('inside_endpoints');
  }
  public set insideEndpoints(value: boolean | cdktf.IResolvable) {
    this._insideEndpoints = value;
  }
  public resetInsideEndpoints() {
    this._insideEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideEndpointsInput() {
    return this._insideEndpoints;
  }

  // outside_endpoints - computed: false, optional: true, required: false
  private _outsideEndpoints?: boolean | cdktf.IResolvable; 
  public get outsideEndpoints() {
    return this.getBooleanAttribute('outside_endpoints');
  }
  public set outsideEndpoints(value: boolean | cdktf.IResolvable) {
    this._outsideEndpoints = value;
  }
  public resetOutsideEndpoints() {
    this._outsideEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideEndpointsInput() {
    return this._outsideEndpoints;
  }

  // adv_action - computed: false, optional: true, required: false
  private _advAction = new NetworkPolicyViewEgressRulesAdvActionOutputReference(this, "adv_action");
  public get advAction() {
    return this._advAction;
  }
  public putAdvAction(value: NetworkPolicyViewEgressRulesAdvAction) {
    this._advAction.internalValue = value;
  }
  public resetAdvAction() {
    this._advAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advActionInput() {
    return this._advAction.internalValue;
  }

  // applications - computed: false, optional: true, required: false
  private _applications = new NetworkPolicyViewEgressRulesApplicationsOutputReference(this, "applications");
  public get applications() {
    return this._applications;
  }
  public putApplications(value: NetworkPolicyViewEgressRulesApplications) {
    this._applications.internalValue = value;
  }
  public resetApplications() {
    this._applications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications.internalValue;
  }

  // ip_prefix_set - computed: false, optional: true, required: false
  private _ipPrefixSet = new NetworkPolicyViewEgressRulesIpPrefixSetOutputReference(this, "ip_prefix_set");
  public get ipPrefixSet() {
    return this._ipPrefixSet;
  }
  public putIpPrefixSet(value: NetworkPolicyViewEgressRulesIpPrefixSet) {
    this._ipPrefixSet.internalValue = value;
  }
  public resetIpPrefixSet() {
    this._ipPrefixSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixSetInput() {
    return this._ipPrefixSet.internalValue;
  }

  // label_matcher - computed: false, optional: true, required: false
  private _labelMatcher = new NetworkPolicyViewEgressRulesLabelMatcherOutputReference(this, "label_matcher");
  public get labelMatcher() {
    return this._labelMatcher;
  }
  public putLabelMatcher(value: NetworkPolicyViewEgressRulesLabelMatcher) {
    this._labelMatcher.internalValue = value;
  }
  public resetLabelMatcher() {
    this._labelMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelMatcherInput() {
    return this._labelMatcher.internalValue;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new NetworkPolicyViewEgressRulesLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: NetworkPolicyViewEgressRulesLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new NetworkPolicyViewEgressRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: NetworkPolicyViewEgressRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList = new NetworkPolicyViewEgressRulesPrefixListStructOutputReference(this, "prefix_list");
  public get prefixList() {
    return this._prefixList;
  }
  public putPrefixList(value: NetworkPolicyViewEgressRulesPrefixListStruct) {
    this._prefixList.internalValue = value;
  }
  public resetPrefixList() {
    this._prefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList.internalValue;
  }

  // protocol_port_range - computed: false, optional: true, required: false
  private _protocolPortRange = new NetworkPolicyViewEgressRulesProtocolPortRangeOutputReference(this, "protocol_port_range");
  public get protocolPortRange() {
    return this._protocolPortRange;
  }
  public putProtocolPortRange(value: NetworkPolicyViewEgressRulesProtocolPortRange) {
    this._protocolPortRange.internalValue = value;
  }
  public resetProtocolPortRange() {
    this._protocolPortRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolPortRangeInput() {
    return this._protocolPortRange.internalValue;
  }
}

export class NetworkPolicyViewEgressRulesList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyViewEgressRules[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyViewEgressRulesOutputReference {
    return new NetworkPolicyViewEgressRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyViewEndpointLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#expressions NetworkPolicyView#expressions}
  */
  readonly expressions: string[];
}

export function networkPolicyViewEndpointLabelSelectorToTerraform(struct?: NetworkPolicyViewEndpointLabelSelectorOutputReference | NetworkPolicyViewEndpointLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function networkPolicyViewEndpointLabelSelectorToHclTerraform(struct?: NetworkPolicyViewEndpointLabelSelectorOutputReference | NetworkPolicyViewEndpointLabelSelector): any {
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

export class NetworkPolicyViewEndpointLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyViewEndpointLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyViewEndpointLabelSelector | undefined) {
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
export interface NetworkPolicyViewEndpointPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#ipv6_prefixes NetworkPolicyView#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#prefixes NetworkPolicyView#prefixes}
  */
  readonly prefixes?: string[];
}

export function networkPolicyViewEndpointPrefixListStructToTerraform(struct?: NetworkPolicyViewEndpointPrefixListStructOutputReference | NetworkPolicyViewEndpointPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function networkPolicyViewEndpointPrefixListStructToHclTerraform(struct?: NetworkPolicyViewEndpointPrefixListStructOutputReference | NetworkPolicyViewEndpointPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyViewEndpointPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyViewEndpointPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyViewEndpointPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Prefixes = undefined;
      this._prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Prefixes = value.ipv6Prefixes;
      this._prefixes = value.prefixes;
    }
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }
}
export interface NetworkPolicyViewEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#any NetworkPolicyView#any}
  */
  readonly any?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#inside_endpoints NetworkPolicyView#inside_endpoints}
  */
  readonly insideEndpoints?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#outside_endpoints NetworkPolicyView#outside_endpoints}
  */
  readonly outsideEndpoints?: boolean | cdktf.IResolvable;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#label_selector NetworkPolicyView#label_selector}
  */
  readonly labelSelector?: NetworkPolicyViewEndpointLabelSelector;
  /**
  * prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#prefix_list NetworkPolicyView#prefix_list}
  */
  readonly prefixList?: NetworkPolicyViewEndpointPrefixListStruct;
}

export function networkPolicyViewEndpointToTerraform(struct?: NetworkPolicyViewEndpointOutputReference | NetworkPolicyViewEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any: cdktf.booleanToTerraform(struct!.any),
    inside_endpoints: cdktf.booleanToTerraform(struct!.insideEndpoints),
    outside_endpoints: cdktf.booleanToTerraform(struct!.outsideEndpoints),
    label_selector: networkPolicyViewEndpointLabelSelectorToTerraform(struct!.labelSelector),
    prefix_list: networkPolicyViewEndpointPrefixListStructToTerraform(struct!.prefixList),
  }
}


export function networkPolicyViewEndpointToHclTerraform(struct?: NetworkPolicyViewEndpointOutputReference | NetworkPolicyViewEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any: {
      value: cdktf.booleanToHclTerraform(struct!.any),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inside_endpoints: {
      value: cdktf.booleanToHclTerraform(struct!.insideEndpoints),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    outside_endpoints: {
      value: cdktf.booleanToHclTerraform(struct!.outsideEndpoints),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    label_selector: {
      value: networkPolicyViewEndpointLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyViewEndpointLabelSelectorList",
    },
    prefix_list: {
      value: networkPolicyViewEndpointPrefixListStructToHclTerraform(struct!.prefixList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyViewEndpointPrefixListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyViewEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyViewEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._any !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any;
    }
    if (this._insideEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideEndpoints = this._insideEndpoints;
    }
    if (this._outsideEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideEndpoints = this._outsideEndpoints;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._prefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyViewEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._any = undefined;
      this._insideEndpoints = undefined;
      this._outsideEndpoints = undefined;
      this._labelSelector.internalValue = undefined;
      this._prefixList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._any = value.any;
      this._insideEndpoints = value.insideEndpoints;
      this._outsideEndpoints = value.outsideEndpoints;
      this._labelSelector.internalValue = value.labelSelector;
      this._prefixList.internalValue = value.prefixList;
    }
  }

  // any - computed: false, optional: true, required: false
  private _any?: boolean | cdktf.IResolvable; 
  public get any() {
    return this.getBooleanAttribute('any');
  }
  public set any(value: boolean | cdktf.IResolvable) {
    this._any = value;
  }
  public resetAny() {
    this._any = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any;
  }

  // inside_endpoints - computed: false, optional: true, required: false
  private _insideEndpoints?: boolean | cdktf.IResolvable; 
  public get insideEndpoints() {
    return this.getBooleanAttribute('inside_endpoints');
  }
  public set insideEndpoints(value: boolean | cdktf.IResolvable) {
    this._insideEndpoints = value;
  }
  public resetInsideEndpoints() {
    this._insideEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideEndpointsInput() {
    return this._insideEndpoints;
  }

  // outside_endpoints - computed: false, optional: true, required: false
  private _outsideEndpoints?: boolean | cdktf.IResolvable; 
  public get outsideEndpoints() {
    return this.getBooleanAttribute('outside_endpoints');
  }
  public set outsideEndpoints(value: boolean | cdktf.IResolvable) {
    this._outsideEndpoints = value;
  }
  public resetOutsideEndpoints() {
    this._outsideEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideEndpointsInput() {
    return this._outsideEndpoints;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new NetworkPolicyViewEndpointLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: NetworkPolicyViewEndpointLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList = new NetworkPolicyViewEndpointPrefixListStructOutputReference(this, "prefix_list");
  public get prefixList() {
    return this._prefixList;
  }
  public putPrefixList(value: NetworkPolicyViewEndpointPrefixListStruct) {
    this._prefixList.internalValue = value;
  }
  public resetPrefixList() {
    this._prefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList.internalValue;
  }
}
export interface NetworkPolicyViewIngressRulesAdvAction {
}

export function networkPolicyViewIngressRulesAdvActionToTerraform(struct?: NetworkPolicyViewIngressRulesAdvActionOutputReference | NetworkPolicyViewIngressRulesAdvAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function networkPolicyViewIngressRulesAdvActionToHclTerraform(struct?: NetworkPolicyViewIngressRulesAdvActionOutputReference | NetworkPolicyViewIngressRulesAdvAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NetworkPolicyViewIngressRulesAdvActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyViewIngressRulesAdvAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyViewIngressRulesAdvAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface NetworkPolicyViewIngressRulesApplications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#applications NetworkPolicyView#applications}
  */
  readonly applications?: string[];
}

export function networkPolicyViewIngressRulesApplicationsToTerraform(struct?: NetworkPolicyViewIngressRulesApplicationsOutputReference | NetworkPolicyViewIngressRulesApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applications),
  }
}


export function networkPolicyViewIngressRulesApplicationsToHclTerraform(struct?: NetworkPolicyViewIngressRulesApplicationsOutputReference | NetworkPolicyViewIngressRulesApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyViewIngressRulesApplicationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyViewIngressRulesApplications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyViewIngressRulesApplications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applications = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applications = value.applications;
    }
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return this.getListAttribute('applications');
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }
}
export interface NetworkPolicyViewIngressRulesIpPrefixSetRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#name NetworkPolicyView#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#namespace NetworkPolicyView#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#tenant NetworkPolicyView#tenant}
  */
  readonly tenant?: string;
}

export function networkPolicyViewIngressRulesIpPrefixSetRefToTerraform(struct?: NetworkPolicyViewIngressRulesIpPrefixSetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function networkPolicyViewIngressRulesIpPrefixSetRefToHclTerraform(struct?: NetworkPolicyViewIngressRulesIpPrefixSetRef | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyViewIngressRulesIpPrefixSetRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyViewIngressRulesIpPrefixSetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyViewIngressRulesIpPrefixSetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class NetworkPolicyViewIngressRulesIpPrefixSetRefList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyViewIngressRulesIpPrefixSetRef[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyViewIngressRulesIpPrefixSetRefOutputReference {
    return new NetworkPolicyViewIngressRulesIpPrefixSetRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyViewIngressRulesIpPrefixSet {
  /**
  * ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#ref NetworkPolicyView#ref}
  */
  readonly ref?: NetworkPolicyViewIngressRulesIpPrefixSetRef[] | cdktf.IResolvable;
}

export function networkPolicyViewIngressRulesIpPrefixSetToTerraform(struct?: NetworkPolicyViewIngressRulesIpPrefixSetOutputReference | NetworkPolicyViewIngressRulesIpPrefixSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: cdktf.listMapper(networkPolicyViewIngressRulesIpPrefixSetRefToTerraform, true)(struct!.ref),
  }
}


export function networkPolicyViewIngressRulesIpPrefixSetToHclTerraform(struct?: NetworkPolicyViewIngressRulesIpPrefixSetOutputReference | NetworkPolicyViewIngressRulesIpPrefixSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: cdktf.listMapperHcl(networkPolicyViewIngressRulesIpPrefixSetRefToHclTerraform, true)(struct!.ref),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyViewIngressRulesIpPrefixSetRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyViewIngressRulesIpPrefixSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyViewIngressRulesIpPrefixSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyViewIngressRulesIpPrefixSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ref.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ref.internalValue = value.ref;
    }
  }

  // ref - computed: false, optional: true, required: false
  private _ref = new NetworkPolicyViewIngressRulesIpPrefixSetRefList(this, "ref", false);
  public get ref() {
    return this._ref;
  }
  public putRef(value: NetworkPolicyViewIngressRulesIpPrefixSetRef[] | cdktf.IResolvable) {
    this._ref.internalValue = value;
  }
  public resetRef() {
    this._ref.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface NetworkPolicyViewIngressRulesLabelMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#keys NetworkPolicyView#keys}
  */
  readonly keys?: string[];
}

export function networkPolicyViewIngressRulesLabelMatcherToTerraform(struct?: NetworkPolicyViewIngressRulesLabelMatcherOutputReference | NetworkPolicyViewIngressRulesLabelMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
  }
}


export function networkPolicyViewIngressRulesLabelMatcherToHclTerraform(struct?: NetworkPolicyViewIngressRulesLabelMatcherOutputReference | NetworkPolicyViewIngressRulesLabelMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyViewIngressRulesLabelMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyViewIngressRulesLabelMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyViewIngressRulesLabelMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keys = value.keys;
    }
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }
}
export interface NetworkPolicyViewIngressRulesLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#expressions NetworkPolicyView#expressions}
  */
  readonly expressions: string[];
}

export function networkPolicyViewIngressRulesLabelSelectorToTerraform(struct?: NetworkPolicyViewIngressRulesLabelSelectorOutputReference | NetworkPolicyViewIngressRulesLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function networkPolicyViewIngressRulesLabelSelectorToHclTerraform(struct?: NetworkPolicyViewIngressRulesLabelSelectorOutputReference | NetworkPolicyViewIngressRulesLabelSelector): any {
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

export class NetworkPolicyViewIngressRulesLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyViewIngressRulesLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyViewIngressRulesLabelSelector | undefined) {
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
export interface NetworkPolicyViewIngressRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#description NetworkPolicyView#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#name NetworkPolicyView#name}
  */
  readonly name: string;
}

export function networkPolicyViewIngressRulesMetadataToTerraform(struct?: NetworkPolicyViewIngressRulesMetadataOutputReference | NetworkPolicyViewIngressRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function networkPolicyViewIngressRulesMetadataToHclTerraform(struct?: NetworkPolicyViewIngressRulesMetadataOutputReference | NetworkPolicyViewIngressRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyViewIngressRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyViewIngressRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyViewIngressRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
    }
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
}
export interface NetworkPolicyViewIngressRulesPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#ipv6_prefixes NetworkPolicyView#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#prefixes NetworkPolicyView#prefixes}
  */
  readonly prefixes?: string[];
}

export function networkPolicyViewIngressRulesPrefixListStructToTerraform(struct?: NetworkPolicyViewIngressRulesPrefixListStructOutputReference | NetworkPolicyViewIngressRulesPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function networkPolicyViewIngressRulesPrefixListStructToHclTerraform(struct?: NetworkPolicyViewIngressRulesPrefixListStructOutputReference | NetworkPolicyViewIngressRulesPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyViewIngressRulesPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyViewIngressRulesPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyViewIngressRulesPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Prefixes = undefined;
      this._prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Prefixes = value.ipv6Prefixes;
      this._prefixes = value.prefixes;
    }
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }
}
export interface NetworkPolicyViewIngressRulesProtocolPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#port_ranges NetworkPolicyView#port_ranges}
  */
  readonly portRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#protocol NetworkPolicyView#protocol}
  */
  readonly protocol?: string;
}

export function networkPolicyViewIngressRulesProtocolPortRangeToTerraform(struct?: NetworkPolicyViewIngressRulesProtocolPortRangeOutputReference | NetworkPolicyViewIngressRulesProtocolPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portRanges),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function networkPolicyViewIngressRulesProtocolPortRangeToHclTerraform(struct?: NetworkPolicyViewIngressRulesProtocolPortRangeOutputReference | NetworkPolicyViewIngressRulesProtocolPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.portRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyViewIngressRulesProtocolPortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyViewIngressRulesProtocolPortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyViewIngressRulesProtocolPortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._portRanges = undefined;
      this._protocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._portRanges = value.portRanges;
      this._protocol = value.protocol;
    }
  }

  // port_ranges - computed: false, optional: true, required: false
  private _portRanges?: string[]; 
  public get portRanges() {
    return this.getListAttribute('port_ranges');
  }
  public set portRanges(value: string[]) {
    this._portRanges = value;
  }
  public resetPortRanges() {
    this._portRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface NetworkPolicyViewIngressRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#action NetworkPolicyView#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#all_tcp_traffic NetworkPolicyView#all_tcp_traffic}
  */
  readonly allTcpTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#all_traffic NetworkPolicyView#all_traffic}
  */
  readonly allTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#all_udp_traffic NetworkPolicyView#all_udp_traffic}
  */
  readonly allUdpTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#any NetworkPolicyView#any}
  */
  readonly any?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#inside_endpoints NetworkPolicyView#inside_endpoints}
  */
  readonly insideEndpoints?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#outside_endpoints NetworkPolicyView#outside_endpoints}
  */
  readonly outsideEndpoints?: boolean | cdktf.IResolvable;
  /**
  * adv_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#adv_action NetworkPolicyView#adv_action}
  */
  readonly advAction?: NetworkPolicyViewIngressRulesAdvAction;
  /**
  * applications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#applications NetworkPolicyView#applications}
  */
  readonly applications?: NetworkPolicyViewIngressRulesApplications;
  /**
  * ip_prefix_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#ip_prefix_set NetworkPolicyView#ip_prefix_set}
  */
  readonly ipPrefixSet?: NetworkPolicyViewIngressRulesIpPrefixSet;
  /**
  * label_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#label_matcher NetworkPolicyView#label_matcher}
  */
  readonly labelMatcher?: NetworkPolicyViewIngressRulesLabelMatcher;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#label_selector NetworkPolicyView#label_selector}
  */
  readonly labelSelector?: NetworkPolicyViewIngressRulesLabelSelector;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#metadata NetworkPolicyView#metadata}
  */
  readonly metadata: NetworkPolicyViewIngressRulesMetadata;
  /**
  * prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#prefix_list NetworkPolicyView#prefix_list}
  */
  readonly prefixList?: NetworkPolicyViewIngressRulesPrefixListStruct;
  /**
  * protocol_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#protocol_port_range NetworkPolicyView#protocol_port_range}
  */
  readonly protocolPortRange?: NetworkPolicyViewIngressRulesProtocolPortRange;
}

export function networkPolicyViewIngressRulesToTerraform(struct?: NetworkPolicyViewIngressRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    all_tcp_traffic: cdktf.booleanToTerraform(struct!.allTcpTraffic),
    all_traffic: cdktf.booleanToTerraform(struct!.allTraffic),
    all_udp_traffic: cdktf.booleanToTerraform(struct!.allUdpTraffic),
    any: cdktf.booleanToTerraform(struct!.any),
    inside_endpoints: cdktf.booleanToTerraform(struct!.insideEndpoints),
    outside_endpoints: cdktf.booleanToTerraform(struct!.outsideEndpoints),
    adv_action: networkPolicyViewIngressRulesAdvActionToTerraform(struct!.advAction),
    applications: networkPolicyViewIngressRulesApplicationsToTerraform(struct!.applications),
    ip_prefix_set: networkPolicyViewIngressRulesIpPrefixSetToTerraform(struct!.ipPrefixSet),
    label_matcher: networkPolicyViewIngressRulesLabelMatcherToTerraform(struct!.labelMatcher),
    label_selector: networkPolicyViewIngressRulesLabelSelectorToTerraform(struct!.labelSelector),
    metadata: networkPolicyViewIngressRulesMetadataToTerraform(struct!.metadata),
    prefix_list: networkPolicyViewIngressRulesPrefixListStructToTerraform(struct!.prefixList),
    protocol_port_range: networkPolicyViewIngressRulesProtocolPortRangeToTerraform(struct!.protocolPortRange),
  }
}


export function networkPolicyViewIngressRulesToHclTerraform(struct?: NetworkPolicyViewIngressRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    all_tcp_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.allTcpTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    all_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.allTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    all_udp_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.allUdpTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any: {
      value: cdktf.booleanToHclTerraform(struct!.any),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inside_endpoints: {
      value: cdktf.booleanToHclTerraform(struct!.insideEndpoints),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    outside_endpoints: {
      value: cdktf.booleanToHclTerraform(struct!.outsideEndpoints),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    adv_action: {
      value: networkPolicyViewIngressRulesAdvActionToHclTerraform(struct!.advAction),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyViewIngressRulesAdvActionList",
    },
    applications: {
      value: networkPolicyViewIngressRulesApplicationsToHclTerraform(struct!.applications),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyViewIngressRulesApplicationsList",
    },
    ip_prefix_set: {
      value: networkPolicyViewIngressRulesIpPrefixSetToHclTerraform(struct!.ipPrefixSet),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyViewIngressRulesIpPrefixSetList",
    },
    label_matcher: {
      value: networkPolicyViewIngressRulesLabelMatcherToHclTerraform(struct!.labelMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyViewIngressRulesLabelMatcherList",
    },
    label_selector: {
      value: networkPolicyViewIngressRulesLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyViewIngressRulesLabelSelectorList",
    },
    metadata: {
      value: networkPolicyViewIngressRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyViewIngressRulesMetadataList",
    },
    prefix_list: {
      value: networkPolicyViewIngressRulesPrefixListStructToHclTerraform(struct!.prefixList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyViewIngressRulesPrefixListStructList",
    },
    protocol_port_range: {
      value: networkPolicyViewIngressRulesProtocolPortRangeToHclTerraform(struct!.protocolPortRange),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyViewIngressRulesProtocolPortRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyViewIngressRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyViewIngressRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._allTcpTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.allTcpTraffic = this._allTcpTraffic;
    }
    if (this._allTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.allTraffic = this._allTraffic;
    }
    if (this._allUdpTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.allUdpTraffic = this._allUdpTraffic;
    }
    if (this._any !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any;
    }
    if (this._insideEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideEndpoints = this._insideEndpoints;
    }
    if (this._outsideEndpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideEndpoints = this._outsideEndpoints;
    }
    if (this._advAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advAction = this._advAction?.internalValue;
    }
    if (this._applications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications?.internalValue;
    }
    if (this._ipPrefixSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixSet = this._ipPrefixSet?.internalValue;
    }
    if (this._labelMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelMatcher = this._labelMatcher?.internalValue;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._prefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList?.internalValue;
    }
    if (this._protocolPortRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolPortRange = this._protocolPortRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyViewIngressRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._allTcpTraffic = undefined;
      this._allTraffic = undefined;
      this._allUdpTraffic = undefined;
      this._any = undefined;
      this._insideEndpoints = undefined;
      this._outsideEndpoints = undefined;
      this._advAction.internalValue = undefined;
      this._applications.internalValue = undefined;
      this._ipPrefixSet.internalValue = undefined;
      this._labelMatcher.internalValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._prefixList.internalValue = undefined;
      this._protocolPortRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._allTcpTraffic = value.allTcpTraffic;
      this._allTraffic = value.allTraffic;
      this._allUdpTraffic = value.allUdpTraffic;
      this._any = value.any;
      this._insideEndpoints = value.insideEndpoints;
      this._outsideEndpoints = value.outsideEndpoints;
      this._advAction.internalValue = value.advAction;
      this._applications.internalValue = value.applications;
      this._ipPrefixSet.internalValue = value.ipPrefixSet;
      this._labelMatcher.internalValue = value.labelMatcher;
      this._labelSelector.internalValue = value.labelSelector;
      this._metadata.internalValue = value.metadata;
      this._prefixList.internalValue = value.prefixList;
      this._protocolPortRange.internalValue = value.protocolPortRange;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // all_tcp_traffic - computed: false, optional: true, required: false
  private _allTcpTraffic?: boolean | cdktf.IResolvable; 
  public get allTcpTraffic() {
    return this.getBooleanAttribute('all_tcp_traffic');
  }
  public set allTcpTraffic(value: boolean | cdktf.IResolvable) {
    this._allTcpTraffic = value;
  }
  public resetAllTcpTraffic() {
    this._allTcpTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allTcpTrafficInput() {
    return this._allTcpTraffic;
  }

  // all_traffic - computed: false, optional: true, required: false
  private _allTraffic?: boolean | cdktf.IResolvable; 
  public get allTraffic() {
    return this.getBooleanAttribute('all_traffic');
  }
  public set allTraffic(value: boolean | cdktf.IResolvable) {
    this._allTraffic = value;
  }
  public resetAllTraffic() {
    this._allTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allTrafficInput() {
    return this._allTraffic;
  }

  // all_udp_traffic - computed: false, optional: true, required: false
  private _allUdpTraffic?: boolean | cdktf.IResolvable; 
  public get allUdpTraffic() {
    return this.getBooleanAttribute('all_udp_traffic');
  }
  public set allUdpTraffic(value: boolean | cdktf.IResolvable) {
    this._allUdpTraffic = value;
  }
  public resetAllUdpTraffic() {
    this._allUdpTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allUdpTrafficInput() {
    return this._allUdpTraffic;
  }

  // any - computed: false, optional: true, required: false
  private _any?: boolean | cdktf.IResolvable; 
  public get any() {
    return this.getBooleanAttribute('any');
  }
  public set any(value: boolean | cdktf.IResolvable) {
    this._any = value;
  }
  public resetAny() {
    this._any = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any;
  }

  // inside_endpoints - computed: false, optional: true, required: false
  private _insideEndpoints?: boolean | cdktf.IResolvable; 
  public get insideEndpoints() {
    return this.getBooleanAttribute('inside_endpoints');
  }
  public set insideEndpoints(value: boolean | cdktf.IResolvable) {
    this._insideEndpoints = value;
  }
  public resetInsideEndpoints() {
    this._insideEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideEndpointsInput() {
    return this._insideEndpoints;
  }

  // outside_endpoints - computed: false, optional: true, required: false
  private _outsideEndpoints?: boolean | cdktf.IResolvable; 
  public get outsideEndpoints() {
    return this.getBooleanAttribute('outside_endpoints');
  }
  public set outsideEndpoints(value: boolean | cdktf.IResolvable) {
    this._outsideEndpoints = value;
  }
  public resetOutsideEndpoints() {
    this._outsideEndpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideEndpointsInput() {
    return this._outsideEndpoints;
  }

  // adv_action - computed: false, optional: true, required: false
  private _advAction = new NetworkPolicyViewIngressRulesAdvActionOutputReference(this, "adv_action");
  public get advAction() {
    return this._advAction;
  }
  public putAdvAction(value: NetworkPolicyViewIngressRulesAdvAction) {
    this._advAction.internalValue = value;
  }
  public resetAdvAction() {
    this._advAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advActionInput() {
    return this._advAction.internalValue;
  }

  // applications - computed: false, optional: true, required: false
  private _applications = new NetworkPolicyViewIngressRulesApplicationsOutputReference(this, "applications");
  public get applications() {
    return this._applications;
  }
  public putApplications(value: NetworkPolicyViewIngressRulesApplications) {
    this._applications.internalValue = value;
  }
  public resetApplications() {
    this._applications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications.internalValue;
  }

  // ip_prefix_set - computed: false, optional: true, required: false
  private _ipPrefixSet = new NetworkPolicyViewIngressRulesIpPrefixSetOutputReference(this, "ip_prefix_set");
  public get ipPrefixSet() {
    return this._ipPrefixSet;
  }
  public putIpPrefixSet(value: NetworkPolicyViewIngressRulesIpPrefixSet) {
    this._ipPrefixSet.internalValue = value;
  }
  public resetIpPrefixSet() {
    this._ipPrefixSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixSetInput() {
    return this._ipPrefixSet.internalValue;
  }

  // label_matcher - computed: false, optional: true, required: false
  private _labelMatcher = new NetworkPolicyViewIngressRulesLabelMatcherOutputReference(this, "label_matcher");
  public get labelMatcher() {
    return this._labelMatcher;
  }
  public putLabelMatcher(value: NetworkPolicyViewIngressRulesLabelMatcher) {
    this._labelMatcher.internalValue = value;
  }
  public resetLabelMatcher() {
    this._labelMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelMatcherInput() {
    return this._labelMatcher.internalValue;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new NetworkPolicyViewIngressRulesLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: NetworkPolicyViewIngressRulesLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new NetworkPolicyViewIngressRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: NetworkPolicyViewIngressRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList = new NetworkPolicyViewIngressRulesPrefixListStructOutputReference(this, "prefix_list");
  public get prefixList() {
    return this._prefixList;
  }
  public putPrefixList(value: NetworkPolicyViewIngressRulesPrefixListStruct) {
    this._prefixList.internalValue = value;
  }
  public resetPrefixList() {
    this._prefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList.internalValue;
  }

  // protocol_port_range - computed: false, optional: true, required: false
  private _protocolPortRange = new NetworkPolicyViewIngressRulesProtocolPortRangeOutputReference(this, "protocol_port_range");
  public get protocolPortRange() {
    return this._protocolPortRange;
  }
  public putProtocolPortRange(value: NetworkPolicyViewIngressRulesProtocolPortRange) {
    this._protocolPortRange.internalValue = value;
  }
  public resetProtocolPortRange() {
    this._protocolPortRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolPortRangeInput() {
    return this._protocolPortRange.internalValue;
  }
}

export class NetworkPolicyViewIngressRulesList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyViewIngressRules[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyViewIngressRulesOutputReference {
    return new NetworkPolicyViewIngressRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view volterra_network_policy_view}
*/
export class NetworkPolicyView extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_network_policy_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkPolicyView resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkPolicyView to import
  * @param importFromId The id of the existing NetworkPolicyView that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkPolicyView to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_network_policy_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_view volterra_network_policy_view} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkPolicyViewConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkPolicyViewConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_network_policy_view',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44',
        providerVersionConstraint: '0.11.44'
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
    this._egressRules.internalValue = config.egressRules;
    this._endpoint.internalValue = config.endpoint;
    this._ingressRules.internalValue = config.ingressRules;
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

  // egress_rules - computed: false, optional: true, required: false
  private _egressRules = new NetworkPolicyViewEgressRulesList(this, "egress_rules", false);
  public get egressRules() {
    return this._egressRules;
  }
  public putEgressRules(value: NetworkPolicyViewEgressRules[] | cdktf.IResolvable) {
    this._egressRules.internalValue = value;
  }
  public resetEgressRules() {
    this._egressRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressRulesInput() {
    return this._egressRules.internalValue;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint = new NetworkPolicyViewEndpointOutputReference(this, "endpoint");
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: NetworkPolicyViewEndpoint) {
    this._endpoint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
  }

  // ingress_rules - computed: false, optional: true, required: false
  private _ingressRules = new NetworkPolicyViewIngressRulesList(this, "ingress_rules", false);
  public get ingressRules() {
    return this._ingressRules;
  }
  public putIngressRules(value: NetworkPolicyViewIngressRules[] | cdktf.IResolvable) {
    this._ingressRules.internalValue = value;
  }
  public resetIngressRules() {
    this._ingressRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressRulesInput() {
    return this._ingressRules.internalValue;
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
      egress_rules: cdktf.listMapper(networkPolicyViewEgressRulesToTerraform, true)(this._egressRules.internalValue),
      endpoint: networkPolicyViewEndpointToTerraform(this._endpoint.internalValue),
      ingress_rules: cdktf.listMapper(networkPolicyViewIngressRulesToTerraform, true)(this._ingressRules.internalValue),
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
      egress_rules: {
        value: cdktf.listMapperHcl(networkPolicyViewEgressRulesToHclTerraform, true)(this._egressRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkPolicyViewEgressRulesList",
      },
      endpoint: {
        value: networkPolicyViewEndpointToHclTerraform(this._endpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkPolicyViewEndpointList",
      },
      ingress_rules: {
        value: cdktf.listMapperHcl(networkPolicyViewIngressRulesToHclTerraform, true)(this._ingressRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkPolicyViewIngressRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
