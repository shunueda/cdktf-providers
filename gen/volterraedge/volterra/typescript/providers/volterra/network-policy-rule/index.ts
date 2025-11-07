// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkPolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule#action NetworkPolicyRule#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule#annotations NetworkPolicyRule#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule#description NetworkPolicyRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule#disable NetworkPolicyRule#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule#id NetworkPolicyRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule#labels NetworkPolicyRule#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule#name NetworkPolicyRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule#namespace NetworkPolicyRule#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule#ports NetworkPolicyRule#ports}
  */
  readonly ports?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule#protocol NetworkPolicyRule#protocol}
  */
  readonly protocol?: string;
  /**
  * advanced_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule#advanced_action NetworkPolicyRule#advanced_action}
  */
  readonly advancedAction?: NetworkPolicyRuleAdvancedAction;
  /**
  * ip_prefix_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule#ip_prefix_set NetworkPolicyRule#ip_prefix_set}
  */
  readonly ipPrefixSet?: NetworkPolicyRuleIpPrefixSet;
  /**
  * label_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule#label_matcher NetworkPolicyRule#label_matcher}
  */
  readonly labelMatcher?: NetworkPolicyRuleLabelMatcher;
  /**
  * prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule#prefix NetworkPolicyRule#prefix}
  */
  readonly prefix?: NetworkPolicyRulePrefix;
  /**
  * prefix_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule#prefix_selector NetworkPolicyRule#prefix_selector}
  */
  readonly prefixSelector?: NetworkPolicyRulePrefixSelector;
}
export interface NetworkPolicyRuleAdvancedAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule#action NetworkPolicyRule#action}
  */
  readonly action?: string;
}

export function networkPolicyRuleAdvancedActionToTerraform(struct?: NetworkPolicyRuleAdvancedActionOutputReference | NetworkPolicyRuleAdvancedAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function networkPolicyRuleAdvancedActionToHclTerraform(struct?: NetworkPolicyRuleAdvancedActionOutputReference | NetworkPolicyRuleAdvancedAction): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyRuleAdvancedActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyRuleAdvancedAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyRuleAdvancedAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
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
}
export interface NetworkPolicyRuleIpPrefixSetRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule#name NetworkPolicyRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule#namespace NetworkPolicyRule#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule#tenant NetworkPolicyRule#tenant}
  */
  readonly tenant?: string;
}

export function networkPolicyRuleIpPrefixSetRefToTerraform(struct?: NetworkPolicyRuleIpPrefixSetRef | cdktf.IResolvable): any {
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


export function networkPolicyRuleIpPrefixSetRefToHclTerraform(struct?: NetworkPolicyRuleIpPrefixSetRef | cdktf.IResolvable): any {
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

export class NetworkPolicyRuleIpPrefixSetRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyRuleIpPrefixSetRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkPolicyRuleIpPrefixSetRef | cdktf.IResolvable | undefined) {
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

export class NetworkPolicyRuleIpPrefixSetRefList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyRuleIpPrefixSetRef[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyRuleIpPrefixSetRefOutputReference {
    return new NetworkPolicyRuleIpPrefixSetRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyRuleIpPrefixSet {
  /**
  * ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule#ref NetworkPolicyRule#ref}
  */
  readonly ref?: NetworkPolicyRuleIpPrefixSetRef[] | cdktf.IResolvable;
}

export function networkPolicyRuleIpPrefixSetToTerraform(struct?: NetworkPolicyRuleIpPrefixSetOutputReference | NetworkPolicyRuleIpPrefixSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: cdktf.listMapper(networkPolicyRuleIpPrefixSetRefToTerraform, true)(struct!.ref),
  }
}


export function networkPolicyRuleIpPrefixSetToHclTerraform(struct?: NetworkPolicyRuleIpPrefixSetOutputReference | NetworkPolicyRuleIpPrefixSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: cdktf.listMapperHcl(networkPolicyRuleIpPrefixSetRefToHclTerraform, true)(struct!.ref),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyRuleIpPrefixSetRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyRuleIpPrefixSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyRuleIpPrefixSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyRuleIpPrefixSet | undefined) {
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
  private _ref = new NetworkPolicyRuleIpPrefixSetRefList(this, "ref", false);
  public get ref() {
    return this._ref;
  }
  public putRef(value: NetworkPolicyRuleIpPrefixSetRef[] | cdktf.IResolvable) {
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
export interface NetworkPolicyRuleLabelMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule#keys NetworkPolicyRule#keys}
  */
  readonly keys?: string[];
}

export function networkPolicyRuleLabelMatcherToTerraform(struct?: NetworkPolicyRuleLabelMatcherOutputReference | NetworkPolicyRuleLabelMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
  }
}


export function networkPolicyRuleLabelMatcherToHclTerraform(struct?: NetworkPolicyRuleLabelMatcherOutputReference | NetworkPolicyRuleLabelMatcher): any {
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

export class NetworkPolicyRuleLabelMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyRuleLabelMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyRuleLabelMatcher | undefined) {
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
export interface NetworkPolicyRulePrefix {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule#ipv6_prefix NetworkPolicyRule#ipv6_prefix}
  */
  readonly ipv6Prefix?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule#prefix NetworkPolicyRule#prefix}
  */
  readonly prefix?: string[];
}

export function networkPolicyRulePrefixToTerraform(struct?: NetworkPolicyRulePrefixOutputReference | NetworkPolicyRulePrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefix),
    prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefix),
  }
}


export function networkPolicyRulePrefixToHclTerraform(struct?: NetworkPolicyRulePrefixOutputReference | NetworkPolicyRulePrefix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyRulePrefixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyRulePrefix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefix = this._ipv6Prefix;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyRulePrefix | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Prefix = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Prefix = value.ipv6Prefix;
      this._prefix = value.prefix;
    }
  }

  // ipv6_prefix - computed: false, optional: true, required: false
  private _ipv6Prefix?: string[]; 
  public get ipv6Prefix() {
    return this.getListAttribute('ipv6_prefix');
  }
  public set ipv6Prefix(value: string[]) {
    this._ipv6Prefix = value;
  }
  public resetIpv6Prefix() {
    this._ipv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string[]; 
  public get prefix() {
    return this.getListAttribute('prefix');
  }
  public set prefix(value: string[]) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface NetworkPolicyRulePrefixSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule#expressions NetworkPolicyRule#expressions}
  */
  readonly expressions: string[];
}

export function networkPolicyRulePrefixSelectorToTerraform(struct?: NetworkPolicyRulePrefixSelectorOutputReference | NetworkPolicyRulePrefixSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function networkPolicyRulePrefixSelectorToHclTerraform(struct?: NetworkPolicyRulePrefixSelectorOutputReference | NetworkPolicyRulePrefixSelector): any {
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

export class NetworkPolicyRulePrefixSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyRulePrefixSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyRulePrefixSelector | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule volterra_network_policy_rule}
*/
export class NetworkPolicyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_network_policy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkPolicyRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkPolicyRule to import
  * @param importFromId The id of the existing NetworkPolicyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkPolicyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_network_policy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy_rule volterra_network_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkPolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkPolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_network_policy_rule',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._ports = config.ports;
    this._protocol = config.protocol;
    this._advancedAction.internalValue = config.advancedAction;
    this._ipPrefixSet.internalValue = config.ipPrefixSet;
    this._labelMatcher.internalValue = config.labelMatcher;
    this._prefix.internalValue = config.prefix;
    this._prefixSelector.internalValue = config.prefixSelector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ports - computed: false, optional: true, required: false
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
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

  // advanced_action - computed: false, optional: true, required: false
  private _advancedAction = new NetworkPolicyRuleAdvancedActionOutputReference(this, "advanced_action");
  public get advancedAction() {
    return this._advancedAction;
  }
  public putAdvancedAction(value: NetworkPolicyRuleAdvancedAction) {
    this._advancedAction.internalValue = value;
  }
  public resetAdvancedAction() {
    this._advancedAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedActionInput() {
    return this._advancedAction.internalValue;
  }

  // ip_prefix_set - computed: false, optional: true, required: false
  private _ipPrefixSet = new NetworkPolicyRuleIpPrefixSetOutputReference(this, "ip_prefix_set");
  public get ipPrefixSet() {
    return this._ipPrefixSet;
  }
  public putIpPrefixSet(value: NetworkPolicyRuleIpPrefixSet) {
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
  private _labelMatcher = new NetworkPolicyRuleLabelMatcherOutputReference(this, "label_matcher");
  public get labelMatcher() {
    return this._labelMatcher;
  }
  public putLabelMatcher(value: NetworkPolicyRuleLabelMatcher) {
    this._labelMatcher.internalValue = value;
  }
  public resetLabelMatcher() {
    this._labelMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelMatcherInput() {
    return this._labelMatcher.internalValue;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix = new NetworkPolicyRulePrefixOutputReference(this, "prefix");
  public get prefix() {
    return this._prefix;
  }
  public putPrefix(value: NetworkPolicyRulePrefix) {
    this._prefix.internalValue = value;
  }
  public resetPrefix() {
    this._prefix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix.internalValue;
  }

  // prefix_selector - computed: false, optional: true, required: false
  private _prefixSelector = new NetworkPolicyRulePrefixSelectorOutputReference(this, "prefix_selector");
  public get prefixSelector() {
    return this._prefixSelector;
  }
  public putPrefixSelector(value: NetworkPolicyRulePrefixSelector) {
    this._prefixSelector.internalValue = value;
  }
  public resetPrefixSelector() {
    this._prefixSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSelectorInput() {
    return this._prefixSelector.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ports),
      protocol: cdktf.stringToTerraform(this._protocol),
      advanced_action: networkPolicyRuleAdvancedActionToTerraform(this._advancedAction.internalValue),
      ip_prefix_set: networkPolicyRuleIpPrefixSetToTerraform(this._ipPrefixSet.internalValue),
      label_matcher: networkPolicyRuleLabelMatcherToTerraform(this._labelMatcher.internalValue),
      prefix: networkPolicyRulePrefixToTerraform(this._prefix.internalValue),
      prefix_selector: networkPolicyRulePrefixSelectorToTerraform(this._prefixSelector.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ports),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_action: {
        value: networkPolicyRuleAdvancedActionToHclTerraform(this._advancedAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkPolicyRuleAdvancedActionList",
      },
      ip_prefix_set: {
        value: networkPolicyRuleIpPrefixSetToHclTerraform(this._ipPrefixSet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkPolicyRuleIpPrefixSetList",
      },
      label_matcher: {
        value: networkPolicyRuleLabelMatcherToHclTerraform(this._labelMatcher.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkPolicyRuleLabelMatcherList",
      },
      prefix: {
        value: networkPolicyRulePrefixToHclTerraform(this._prefix.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkPolicyRulePrefixList",
      },
      prefix_selector: {
        value: networkPolicyRulePrefixSelectorToHclTerraform(this._prefixSelector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkPolicyRulePrefixSelectorList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
