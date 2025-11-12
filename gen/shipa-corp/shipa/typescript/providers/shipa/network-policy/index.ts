// https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#id NetworkPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * network_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#network_policy NetworkPolicy#network_policy}
  */
  readonly networkPolicy: NetworkPolicyNetworkPolicy;
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#key NetworkPolicy#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#operator NetworkPolicy#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#values NetworkPolicy#values}
  */
  readonly values?: string[];
}

export function networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressionsToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressionsToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressionsOutputReference {
    return new NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#match_labels NetworkPolicy#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#match_expressions NetworkPolicy#match_expressions}
  */
  readonly matchExpressions?: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorOutputReference | NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorOutputReference | NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#key NetworkPolicy#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#operator NetworkPolicy#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#values NetworkPolicy#values}
  */
  readonly values?: string[];
}

export function networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressionsToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressionsToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressionsOutputReference {
    return new NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#match_labels NetworkPolicy#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#match_expressions NetworkPolicy#match_expressions}
  */
  readonly matchExpressions?: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorOutputReference | NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorOutputReference | NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#ip_block NetworkPolicy#ip_block}
  */
  readonly ipBlock?: string[];
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#namespace_selector NetworkPolicy#namespace_selector}
  */
  readonly namespaceSelector?: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelector;
  /**
  * pod_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#pod_selector NetworkPolicy#pod_selector}
  */
  readonly podSelector?: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelector;
}

export function networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_block: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipBlock),
    namespace_selector: networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorToTerraform(struct!.namespaceSelector),
    pod_selector: networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorToTerraform(struct!.podSelector),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_block: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipBlock),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorList",
    },
    pod_selector: {
      value: networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBlock = this._ipBlock;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._podSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipBlock = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._podSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipBlock = value.ipBlock;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._podSelector.internalValue = value.podSelector;
    }
  }

  // ip_block - computed: false, optional: true, required: false
  private _ipBlock?: string[]; 
  public get ipBlock() {
    return this.getListAttribute('ip_block');
  }
  public set ipBlock(value: string[]) {
    this._ipBlock = value;
  }
  public resetIpBlock() {
    this._ipBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBlockInput() {
    return this._ipBlock;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // pod_selector - computed: false, optional: true, required: false
  private _podSelector = new NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersPodSelector) {
    this._podSelector.internalValue = value;
  }
  public resetPodSelector() {
    this._podSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }
}

export class NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeers[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersOutputReference {
    return new NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#port NetworkPolicy#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#protocol NetworkPolicy#protocol}
  */
  readonly protocol?: string;
}

export function networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPortsToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPortsToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

export class NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPortsList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPorts[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPortsOutputReference {
    return new NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#allowed_apps NetworkPolicy#allowed_apps}
  */
  readonly allowedApps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#allowed_frameworks NetworkPolicy#allowed_frameworks}
  */
  readonly allowedFrameworks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#description NetworkPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#enabled NetworkPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#id NetworkPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * peers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#peers NetworkPolicy#peers}
  */
  readonly peers?: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeers[] | cdktf.IResolvable;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#ports NetworkPolicy#ports}
  */
  readonly ports?: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPorts[] | cdktf.IResolvable;
}

export function networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_apps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedApps),
    allowed_frameworks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedFrameworks),
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    peers: cdktf.listMapper(networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersToTerraform, true)(struct!.peers),
    ports: cdktf.listMapper(networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPortsToTerraform, true)(struct!.ports),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_apps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedApps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_frameworks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedFrameworks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peers: {
      value: cdktf.listMapperHcl(networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersToHclTerraform, true)(struct!.peers),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersList",
    },
    ports: {
      value: cdktf.listMapperHcl(networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPortsToHclTerraform, true)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedApps !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedApps = this._allowedApps;
    }
    if (this._allowedFrameworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedFrameworks = this._allowedFrameworks;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._peers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peers = this._peers?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedApps = undefined;
      this._allowedFrameworks = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._peers.internalValue = undefined;
      this._ports.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedApps = value.allowedApps;
      this._allowedFrameworks = value.allowedFrameworks;
      this._description = value.description;
      this._enabled = value.enabled;
      this._id = value.id;
      this._peers.internalValue = value.peers;
      this._ports.internalValue = value.ports;
    }
  }

  // allowed_apps - computed: false, optional: true, required: false
  private _allowedApps?: string[]; 
  public get allowedApps() {
    return this.getListAttribute('allowed_apps');
  }
  public set allowedApps(value: string[]) {
    this._allowedApps = value;
  }
  public resetAllowedApps() {
    this._allowedApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAppsInput() {
    return this._allowedApps;
  }

  // allowed_frameworks - computed: false, optional: true, required: false
  private _allowedFrameworks?: string[]; 
  public get allowedFrameworks() {
    return this.getListAttribute('allowed_frameworks');
  }
  public set allowedFrameworks(value: string[]) {
    this._allowedFrameworks = value;
  }
  public resetAllowedFrameworks() {
    this._allowedFrameworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedFrameworksInput() {
    return this._allowedFrameworks;
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

  // id - computed: false, optional: true, required: false
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

  // peers - computed: false, optional: true, required: false
  private _peers = new NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeersList(this, "peers", false);
  public get peers() {
    return this._peers;
  }
  public putPeers(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPeers[] | cdktf.IResolvable) {
    this._peers.internalValue = value;
  }
  public resetPeers() {
    this._peers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peersInput() {
    return this._peers.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }
}

export class NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRules[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesOutputReference {
    return new NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#key NetworkPolicy#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#operator NetworkPolicy#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#values NetworkPolicy#values}
  */
  readonly values?: string[];
}

export function networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressionsToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressionsToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressionsOutputReference {
    return new NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#match_labels NetworkPolicy#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#match_expressions NetworkPolicy#match_expressions}
  */
  readonly matchExpressions?: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorOutputReference | NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorOutputReference | NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#key NetworkPolicy#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#operator NetworkPolicy#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#values NetworkPolicy#values}
  */
  readonly values?: string[];
}

export function networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressionsToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressionsToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressionsOutputReference {
    return new NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#match_labels NetworkPolicy#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#match_expressions NetworkPolicy#match_expressions}
  */
  readonly matchExpressions?: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorOutputReference | NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorOutputReference | NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#ip_block NetworkPolicy#ip_block}
  */
  readonly ipBlock?: string[];
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#namespace_selector NetworkPolicy#namespace_selector}
  */
  readonly namespaceSelector?: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelector;
  /**
  * pod_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#pod_selector NetworkPolicy#pod_selector}
  */
  readonly podSelector?: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelector;
}

export function networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_block: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipBlock),
    namespace_selector: networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorToTerraform(struct!.namespaceSelector),
    pod_selector: networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorToTerraform(struct!.podSelector),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_block: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipBlock),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorList",
    },
    pod_selector: {
      value: networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBlock = this._ipBlock;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._podSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipBlock = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._podSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipBlock = value.ipBlock;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._podSelector.internalValue = value.podSelector;
    }
  }

  // ip_block - computed: false, optional: true, required: false
  private _ipBlock?: string[]; 
  public get ipBlock() {
    return this.getListAttribute('ip_block');
  }
  public set ipBlock(value: string[]) {
    this._ipBlock = value;
  }
  public resetIpBlock() {
    this._ipBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBlockInput() {
    return this._ipBlock;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // pod_selector - computed: false, optional: true, required: false
  private _podSelector = new NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersPodSelector) {
    this._podSelector.internalValue = value;
  }
  public resetPodSelector() {
    this._podSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }
}

export class NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeers[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersOutputReference {
    return new NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#port NetworkPolicy#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#protocol NetworkPolicy#protocol}
  */
  readonly protocol?: string;
}

export function networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPortsToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPortsToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

export class NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPortsList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPorts[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPortsOutputReference {
    return new NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#allowed_apps NetworkPolicy#allowed_apps}
  */
  readonly allowedApps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#allowed_frameworks NetworkPolicy#allowed_frameworks}
  */
  readonly allowedFrameworks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#description NetworkPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#enabled NetworkPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#id NetworkPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * peers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#peers NetworkPolicy#peers}
  */
  readonly peers?: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeers[] | cdktf.IResolvable;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#ports NetworkPolicy#ports}
  */
  readonly ports?: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPorts[] | cdktf.IResolvable;
}

export function networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_apps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedApps),
    allowed_frameworks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedFrameworks),
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    peers: cdktf.listMapper(networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersToTerraform, true)(struct!.peers),
    ports: cdktf.listMapper(networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPortsToTerraform, true)(struct!.ports),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_apps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedApps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_frameworks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedFrameworks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peers: {
      value: cdktf.listMapperHcl(networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersToHclTerraform, true)(struct!.peers),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersList",
    },
    ports: {
      value: cdktf.listMapperHcl(networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPortsToHclTerraform, true)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedApps !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedApps = this._allowedApps;
    }
    if (this._allowedFrameworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedFrameworks = this._allowedFrameworks;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._peers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peers = this._peers?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedApps = undefined;
      this._allowedFrameworks = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._peers.internalValue = undefined;
      this._ports.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedApps = value.allowedApps;
      this._allowedFrameworks = value.allowedFrameworks;
      this._description = value.description;
      this._enabled = value.enabled;
      this._id = value.id;
      this._peers.internalValue = value.peers;
      this._ports.internalValue = value.ports;
    }
  }

  // allowed_apps - computed: false, optional: true, required: false
  private _allowedApps?: string[]; 
  public get allowedApps() {
    return this.getListAttribute('allowed_apps');
  }
  public set allowedApps(value: string[]) {
    this._allowedApps = value;
  }
  public resetAllowedApps() {
    this._allowedApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAppsInput() {
    return this._allowedApps;
  }

  // allowed_frameworks - computed: false, optional: true, required: false
  private _allowedFrameworks?: string[]; 
  public get allowedFrameworks() {
    return this.getListAttribute('allowed_frameworks');
  }
  public set allowedFrameworks(value: string[]) {
    this._allowedFrameworks = value;
  }
  public resetAllowedFrameworks() {
    this._allowedFrameworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedFrameworksInput() {
    return this._allowedFrameworks;
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

  // id - computed: false, optional: true, required: false
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

  // peers - computed: false, optional: true, required: false
  private _peers = new NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeersList(this, "peers", false);
  public get peers() {
    return this._peers;
  }
  public putPeers(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPeers[] | cdktf.IResolvable) {
    this._peers.internalValue = value;
  }
  public resetPeers() {
    this._peers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peersInput() {
    return this._peers.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }
}

export class NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRules[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesOutputReference {
    return new NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyEgress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#policy_mode NetworkPolicy#policy_mode}
  */
  readonly policyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#shipa_rules_enabled NetworkPolicy#shipa_rules_enabled}
  */
  readonly shipaRulesEnabled?: string[];
  /**
  * custom_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#custom_rules NetworkPolicy#custom_rules}
  */
  readonly customRules?: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRules[] | cdktf.IResolvable;
  /**
  * shipa_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#shipa_rules NetworkPolicy#shipa_rules}
  */
  readonly shipaRules?: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRules[] | cdktf.IResolvable;
}

export function networkPolicyNetworkPolicyNetworkPolicyEgressToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressOutputReference | NetworkPolicyNetworkPolicyNetworkPolicyEgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_mode: cdktf.stringToTerraform(struct!.policyMode),
    shipa_rules_enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.shipaRulesEnabled),
    custom_rules: cdktf.listMapper(networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesToTerraform, true)(struct!.customRules),
    shipa_rules: cdktf.listMapper(networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesToTerraform, true)(struct!.shipaRules),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyEgressToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyEgressOutputReference | NetworkPolicyNetworkPolicyNetworkPolicyEgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_mode: {
      value: cdktf.stringToHclTerraform(struct!.policyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shipa_rules_enabled: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.shipaRulesEnabled),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    custom_rules: {
      value: cdktf.listMapperHcl(networkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesToHclTerraform, true)(struct!.customRules),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesList",
    },
    shipa_rules: {
      value: cdktf.listMapperHcl(networkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesToHclTerraform, true)(struct!.shipaRules),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyEgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyEgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyMode = this._policyMode;
    }
    if (this._shipaRulesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.shipaRulesEnabled = this._shipaRulesEnabled;
    }
    if (this._customRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRules = this._customRules?.internalValue;
    }
    if (this._shipaRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shipaRules = this._shipaRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyEgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policyMode = undefined;
      this._shipaRulesEnabled = undefined;
      this._customRules.internalValue = undefined;
      this._shipaRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyMode = value.policyMode;
      this._shipaRulesEnabled = value.shipaRulesEnabled;
      this._customRules.internalValue = value.customRules;
      this._shipaRules.internalValue = value.shipaRules;
    }
  }

  // policy_mode - computed: false, optional: true, required: false
  private _policyMode?: string; 
  public get policyMode() {
    return this.getStringAttribute('policy_mode');
  }
  public set policyMode(value: string) {
    this._policyMode = value;
  }
  public resetPolicyMode() {
    this._policyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyModeInput() {
    return this._policyMode;
  }

  // shipa_rules_enabled - computed: false, optional: true, required: false
  private _shipaRulesEnabled?: string[]; 
  public get shipaRulesEnabled() {
    return this.getListAttribute('shipa_rules_enabled');
  }
  public set shipaRulesEnabled(value: string[]) {
    this._shipaRulesEnabled = value;
  }
  public resetShipaRulesEnabled() {
    this._shipaRulesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shipaRulesEnabledInput() {
    return this._shipaRulesEnabled;
  }

  // custom_rules - computed: false, optional: true, required: false
  private _customRules = new NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRulesList(this, "custom_rules", false);
  public get customRules() {
    return this._customRules;
  }
  public putCustomRules(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressCustomRules[] | cdktf.IResolvable) {
    this._customRules.internalValue = value;
  }
  public resetCustomRules() {
    this._customRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRulesInput() {
    return this._customRules.internalValue;
  }

  // shipa_rules - computed: false, optional: true, required: false
  private _shipaRules = new NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRulesList(this, "shipa_rules", false);
  public get shipaRules() {
    return this._shipaRules;
  }
  public putShipaRules(value: NetworkPolicyNetworkPolicyNetworkPolicyEgressShipaRules[] | cdktf.IResolvable) {
    this._shipaRules.internalValue = value;
  }
  public resetShipaRules() {
    this._shipaRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shipaRulesInput() {
    return this._shipaRules.internalValue;
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#key NetworkPolicy#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#operator NetworkPolicy#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#values NetworkPolicy#values}
  */
  readonly values?: string[];
}

export function networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressionsToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressionsToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressionsOutputReference {
    return new NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#match_labels NetworkPolicy#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#match_expressions NetworkPolicy#match_expressions}
  */
  readonly matchExpressions?: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorOutputReference | NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorOutputReference | NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#key NetworkPolicy#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#operator NetworkPolicy#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#values NetworkPolicy#values}
  */
  readonly values?: string[];
}

export function networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressionsToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressionsToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressionsOutputReference {
    return new NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#match_labels NetworkPolicy#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#match_expressions NetworkPolicy#match_expressions}
  */
  readonly matchExpressions?: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorOutputReference | NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorOutputReference | NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#ip_block NetworkPolicy#ip_block}
  */
  readonly ipBlock?: string[];
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#namespace_selector NetworkPolicy#namespace_selector}
  */
  readonly namespaceSelector?: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelector;
  /**
  * pod_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#pod_selector NetworkPolicy#pod_selector}
  */
  readonly podSelector?: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelector;
}

export function networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_block: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipBlock),
    namespace_selector: networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorToTerraform(struct!.namespaceSelector),
    pod_selector: networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorToTerraform(struct!.podSelector),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_block: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipBlock),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorList",
    },
    pod_selector: {
      value: networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBlock = this._ipBlock;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._podSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipBlock = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._podSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipBlock = value.ipBlock;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._podSelector.internalValue = value.podSelector;
    }
  }

  // ip_block - computed: false, optional: true, required: false
  private _ipBlock?: string[]; 
  public get ipBlock() {
    return this.getListAttribute('ip_block');
  }
  public set ipBlock(value: string[]) {
    this._ipBlock = value;
  }
  public resetIpBlock() {
    this._ipBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBlockInput() {
    return this._ipBlock;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // pod_selector - computed: false, optional: true, required: false
  private _podSelector = new NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersPodSelector) {
    this._podSelector.internalValue = value;
  }
  public resetPodSelector() {
    this._podSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }
}

export class NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeers[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersOutputReference {
    return new NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#port NetworkPolicy#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#protocol NetworkPolicy#protocol}
  */
  readonly protocol?: string;
}

export function networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPortsToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPortsToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

export class NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPortsList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPorts[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPortsOutputReference {
    return new NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#allowed_apps NetworkPolicy#allowed_apps}
  */
  readonly allowedApps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#allowed_frameworks NetworkPolicy#allowed_frameworks}
  */
  readonly allowedFrameworks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#description NetworkPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#enabled NetworkPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#id NetworkPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * peers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#peers NetworkPolicy#peers}
  */
  readonly peers?: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeers[] | cdktf.IResolvable;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#ports NetworkPolicy#ports}
  */
  readonly ports?: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPorts[] | cdktf.IResolvable;
}

export function networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_apps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedApps),
    allowed_frameworks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedFrameworks),
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    peers: cdktf.listMapper(networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersToTerraform, true)(struct!.peers),
    ports: cdktf.listMapper(networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPortsToTerraform, true)(struct!.ports),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_apps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedApps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_frameworks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedFrameworks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peers: {
      value: cdktf.listMapperHcl(networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersToHclTerraform, true)(struct!.peers),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersList",
    },
    ports: {
      value: cdktf.listMapperHcl(networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPortsToHclTerraform, true)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedApps !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedApps = this._allowedApps;
    }
    if (this._allowedFrameworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedFrameworks = this._allowedFrameworks;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._peers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peers = this._peers?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedApps = undefined;
      this._allowedFrameworks = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._peers.internalValue = undefined;
      this._ports.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedApps = value.allowedApps;
      this._allowedFrameworks = value.allowedFrameworks;
      this._description = value.description;
      this._enabled = value.enabled;
      this._id = value.id;
      this._peers.internalValue = value.peers;
      this._ports.internalValue = value.ports;
    }
  }

  // allowed_apps - computed: false, optional: true, required: false
  private _allowedApps?: string[]; 
  public get allowedApps() {
    return this.getListAttribute('allowed_apps');
  }
  public set allowedApps(value: string[]) {
    this._allowedApps = value;
  }
  public resetAllowedApps() {
    this._allowedApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAppsInput() {
    return this._allowedApps;
  }

  // allowed_frameworks - computed: false, optional: true, required: false
  private _allowedFrameworks?: string[]; 
  public get allowedFrameworks() {
    return this.getListAttribute('allowed_frameworks');
  }
  public set allowedFrameworks(value: string[]) {
    this._allowedFrameworks = value;
  }
  public resetAllowedFrameworks() {
    this._allowedFrameworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedFrameworksInput() {
    return this._allowedFrameworks;
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

  // id - computed: false, optional: true, required: false
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

  // peers - computed: false, optional: true, required: false
  private _peers = new NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeersList(this, "peers", false);
  public get peers() {
    return this._peers;
  }
  public putPeers(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPeers[] | cdktf.IResolvable) {
    this._peers.internalValue = value;
  }
  public resetPeers() {
    this._peers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peersInput() {
    return this._peers.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }
}

export class NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRules[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesOutputReference {
    return new NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#key NetworkPolicy#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#operator NetworkPolicy#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#values NetworkPolicy#values}
  */
  readonly values?: string[];
}

export function networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressionsToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressionsToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressionsOutputReference {
    return new NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#match_labels NetworkPolicy#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#match_expressions NetworkPolicy#match_expressions}
  */
  readonly matchExpressions?: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorOutputReference | NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorOutputReference | NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#key NetworkPolicy#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#operator NetworkPolicy#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#values NetworkPolicy#values}
  */
  readonly values?: string[];
}

export function networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressionsToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressionsToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressionsOutputReference {
    return new NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#match_labels NetworkPolicy#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#match_expressions NetworkPolicy#match_expressions}
  */
  readonly matchExpressions?: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorOutputReference | NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorOutputReference | NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#ip_block NetworkPolicy#ip_block}
  */
  readonly ipBlock?: string[];
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#namespace_selector NetworkPolicy#namespace_selector}
  */
  readonly namespaceSelector?: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelector;
  /**
  * pod_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#pod_selector NetworkPolicy#pod_selector}
  */
  readonly podSelector?: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelector;
}

export function networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_block: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipBlock),
    namespace_selector: networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorToTerraform(struct!.namespaceSelector),
    pod_selector: networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorToTerraform(struct!.podSelector),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_block: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipBlock),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorList",
    },
    pod_selector: {
      value: networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBlock = this._ipBlock;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._podSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipBlock = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._podSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipBlock = value.ipBlock;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._podSelector.internalValue = value.podSelector;
    }
  }

  // ip_block - computed: false, optional: true, required: false
  private _ipBlock?: string[]; 
  public get ipBlock() {
    return this.getListAttribute('ip_block');
  }
  public set ipBlock(value: string[]) {
    this._ipBlock = value;
  }
  public resetIpBlock() {
    this._ipBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBlockInput() {
    return this._ipBlock;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // pod_selector - computed: false, optional: true, required: false
  private _podSelector = new NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersPodSelector) {
    this._podSelector.internalValue = value;
  }
  public resetPodSelector() {
    this._podSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }
}

export class NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeers[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersOutputReference {
    return new NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#port NetworkPolicy#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#protocol NetworkPolicy#protocol}
  */
  readonly protocol?: string;
}

export function networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPortsToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPortsToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

export class NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPortsList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPorts[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPortsOutputReference {
    return new NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#allowed_apps NetworkPolicy#allowed_apps}
  */
  readonly allowedApps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#allowed_frameworks NetworkPolicy#allowed_frameworks}
  */
  readonly allowedFrameworks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#description NetworkPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#enabled NetworkPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#id NetworkPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * peers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#peers NetworkPolicy#peers}
  */
  readonly peers?: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeers[] | cdktf.IResolvable;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#ports NetworkPolicy#ports}
  */
  readonly ports?: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPorts[] | cdktf.IResolvable;
}

export function networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_apps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedApps),
    allowed_frameworks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedFrameworks),
    description: cdktf.stringToTerraform(struct!.description),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id: cdktf.stringToTerraform(struct!.id),
    peers: cdktf.listMapper(networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersToTerraform, true)(struct!.peers),
    ports: cdktf.listMapper(networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPortsToTerraform, true)(struct!.ports),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_apps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedApps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_frameworks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedFrameworks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peers: {
      value: cdktf.listMapperHcl(networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersToHclTerraform, true)(struct!.peers),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersList",
    },
    ports: {
      value: cdktf.listMapperHcl(networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPortsToHclTerraform, true)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedApps !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedApps = this._allowedApps;
    }
    if (this._allowedFrameworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedFrameworks = this._allowedFrameworks;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._peers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peers = this._peers?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedApps = undefined;
      this._allowedFrameworks = undefined;
      this._description = undefined;
      this._enabled = undefined;
      this._id = undefined;
      this._peers.internalValue = undefined;
      this._ports.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedApps = value.allowedApps;
      this._allowedFrameworks = value.allowedFrameworks;
      this._description = value.description;
      this._enabled = value.enabled;
      this._id = value.id;
      this._peers.internalValue = value.peers;
      this._ports.internalValue = value.ports;
    }
  }

  // allowed_apps - computed: false, optional: true, required: false
  private _allowedApps?: string[]; 
  public get allowedApps() {
    return this.getListAttribute('allowed_apps');
  }
  public set allowedApps(value: string[]) {
    this._allowedApps = value;
  }
  public resetAllowedApps() {
    this._allowedApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAppsInput() {
    return this._allowedApps;
  }

  // allowed_frameworks - computed: false, optional: true, required: false
  private _allowedFrameworks?: string[]; 
  public get allowedFrameworks() {
    return this.getListAttribute('allowed_frameworks');
  }
  public set allowedFrameworks(value: string[]) {
    this._allowedFrameworks = value;
  }
  public resetAllowedFrameworks() {
    this._allowedFrameworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedFrameworksInput() {
    return this._allowedFrameworks;
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

  // id - computed: false, optional: true, required: false
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

  // peers - computed: false, optional: true, required: false
  private _peers = new NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeersList(this, "peers", false);
  public get peers() {
    return this._peers;
  }
  public putPeers(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPeers[] | cdktf.IResolvable) {
    this._peers.internalValue = value;
  }
  public resetPeers() {
    this._peers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peersInput() {
    return this._peers.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }
}

export class NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRules[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesOutputReference {
    return new NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicyIngress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#policy_mode NetworkPolicy#policy_mode}
  */
  readonly policyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#shipa_rules_enabled NetworkPolicy#shipa_rules_enabled}
  */
  readonly shipaRulesEnabled?: string[];
  /**
  * custom_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#custom_rules NetworkPolicy#custom_rules}
  */
  readonly customRules?: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRules[] | cdktf.IResolvable;
  /**
  * shipa_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#shipa_rules NetworkPolicy#shipa_rules}
  */
  readonly shipaRules?: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRules[] | cdktf.IResolvable;
}

export function networkPolicyNetworkPolicyNetworkPolicyIngressToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressOutputReference | NetworkPolicyNetworkPolicyNetworkPolicyIngress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_mode: cdktf.stringToTerraform(struct!.policyMode),
    shipa_rules_enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.shipaRulesEnabled),
    custom_rules: cdktf.listMapper(networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesToTerraform, true)(struct!.customRules),
    shipa_rules: cdktf.listMapper(networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesToTerraform, true)(struct!.shipaRules),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyIngressToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyIngressOutputReference | NetworkPolicyNetworkPolicyNetworkPolicyIngress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_mode: {
      value: cdktf.stringToHclTerraform(struct!.policyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shipa_rules_enabled: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.shipaRulesEnabled),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    custom_rules: {
      value: cdktf.listMapperHcl(networkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesToHclTerraform, true)(struct!.customRules),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesList",
    },
    shipa_rules: {
      value: cdktf.listMapperHcl(networkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesToHclTerraform, true)(struct!.shipaRules),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicyIngress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyMode = this._policyMode;
    }
    if (this._shipaRulesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.shipaRulesEnabled = this._shipaRulesEnabled;
    }
    if (this._customRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRules = this._customRules?.internalValue;
    }
    if (this._shipaRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shipaRules = this._shipaRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicyIngress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policyMode = undefined;
      this._shipaRulesEnabled = undefined;
      this._customRules.internalValue = undefined;
      this._shipaRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyMode = value.policyMode;
      this._shipaRulesEnabled = value.shipaRulesEnabled;
      this._customRules.internalValue = value.customRules;
      this._shipaRules.internalValue = value.shipaRules;
    }
  }

  // policy_mode - computed: false, optional: true, required: false
  private _policyMode?: string; 
  public get policyMode() {
    return this.getStringAttribute('policy_mode');
  }
  public set policyMode(value: string) {
    this._policyMode = value;
  }
  public resetPolicyMode() {
    this._policyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyModeInput() {
    return this._policyMode;
  }

  // shipa_rules_enabled - computed: false, optional: true, required: false
  private _shipaRulesEnabled?: string[]; 
  public get shipaRulesEnabled() {
    return this.getListAttribute('shipa_rules_enabled');
  }
  public set shipaRulesEnabled(value: string[]) {
    this._shipaRulesEnabled = value;
  }
  public resetShipaRulesEnabled() {
    this._shipaRulesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shipaRulesEnabledInput() {
    return this._shipaRulesEnabled;
  }

  // custom_rules - computed: false, optional: true, required: false
  private _customRules = new NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRulesList(this, "custom_rules", false);
  public get customRules() {
    return this._customRules;
  }
  public putCustomRules(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressCustomRules[] | cdktf.IResolvable) {
    this._customRules.internalValue = value;
  }
  public resetCustomRules() {
    this._customRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRulesInput() {
    return this._customRules.internalValue;
  }

  // shipa_rules - computed: false, optional: true, required: false
  private _shipaRules = new NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRulesList(this, "shipa_rules", false);
  public get shipaRules() {
    return this._shipaRules;
  }
  public putShipaRules(value: NetworkPolicyNetworkPolicyNetworkPolicyIngressShipaRules[] | cdktf.IResolvable) {
    this._shipaRules.internalValue = value;
  }
  public resetShipaRules() {
    this._shipaRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shipaRulesInput() {
    return this._shipaRules.internalValue;
  }
}
export interface NetworkPolicyNetworkPolicyNetworkPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#restart_app NetworkPolicy#restart_app}
  */
  readonly restartApp?: boolean | cdktf.IResolvable;
  /**
  * egress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#egress NetworkPolicy#egress}
  */
  readonly egress?: NetworkPolicyNetworkPolicyNetworkPolicyEgress;
  /**
  * ingress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#ingress NetworkPolicy#ingress}
  */
  readonly ingress?: NetworkPolicyNetworkPolicyNetworkPolicyIngress;
}

export function networkPolicyNetworkPolicyNetworkPolicyToTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyOutputReference | NetworkPolicyNetworkPolicyNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restart_app: cdktf.booleanToTerraform(struct!.restartApp),
    egress: networkPolicyNetworkPolicyNetworkPolicyEgressToTerraform(struct!.egress),
    ingress: networkPolicyNetworkPolicyNetworkPolicyIngressToTerraform(struct!.ingress),
  }
}


export function networkPolicyNetworkPolicyNetworkPolicyToHclTerraform(struct?: NetworkPolicyNetworkPolicyNetworkPolicyOutputReference | NetworkPolicyNetworkPolicyNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restart_app: {
      value: cdktf.booleanToHclTerraform(struct!.restartApp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    egress: {
      value: networkPolicyNetworkPolicyNetworkPolicyEgressToHclTerraform(struct!.egress),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyEgressList",
    },
    ingress: {
      value: networkPolicyNetworkPolicyNetworkPolicyIngressToHclTerraform(struct!.ingress),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyIngressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyNetworkPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyNetworkPolicyNetworkPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restartApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartApp = this._restartApp;
    }
    if (this._egress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egress = this._egress?.internalValue;
    }
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicyNetworkPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._restartApp = undefined;
      this._egress.internalValue = undefined;
      this._ingress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._restartApp = value.restartApp;
      this._egress.internalValue = value.egress;
      this._ingress.internalValue = value.ingress;
    }
  }

  // restart_app - computed: false, optional: true, required: false
  private _restartApp?: boolean | cdktf.IResolvable; 
  public get restartApp() {
    return this.getBooleanAttribute('restart_app');
  }
  public set restartApp(value: boolean | cdktf.IResolvable) {
    this._restartApp = value;
  }
  public resetRestartApp() {
    this._restartApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartAppInput() {
    return this._restartApp;
  }

  // egress - computed: false, optional: true, required: false
  private _egress = new NetworkPolicyNetworkPolicyNetworkPolicyEgressOutputReference(this, "egress");
  public get egress() {
    return this._egress;
  }
  public putEgress(value: NetworkPolicyNetworkPolicyNetworkPolicyEgress) {
    this._egress.internalValue = value;
  }
  public resetEgress() {
    this._egress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress.internalValue;
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new NetworkPolicyNetworkPolicyNetworkPolicyIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: NetworkPolicyNetworkPolicyNetworkPolicyIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }
}
export interface NetworkPolicyNetworkPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#app NetworkPolicy#app}
  */
  readonly app: string;
  /**
  * network_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#network_policy NetworkPolicy#network_policy}
  */
  readonly networkPolicy?: NetworkPolicyNetworkPolicyNetworkPolicy;
}

export function networkPolicyNetworkPolicyToTerraform(struct?: NetworkPolicyNetworkPolicyOutputReference | NetworkPolicyNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app: cdktf.stringToTerraform(struct!.app),
    network_policy: networkPolicyNetworkPolicyNetworkPolicyToTerraform(struct!.networkPolicy),
  }
}


export function networkPolicyNetworkPolicyToHclTerraform(struct?: NetworkPolicyNetworkPolicyOutputReference | NetworkPolicyNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app: {
      value: cdktf.stringToHclTerraform(struct!.app),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_policy: {
      value: networkPolicyNetworkPolicyNetworkPolicyToHclTerraform(struct!.networkPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyNetworkPolicyNetworkPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyNetworkPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyNetworkPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._app !== undefined) {
      hasAnyValues = true;
      internalValueResult.app = this._app;
    }
    if (this._networkPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicy = this._networkPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyNetworkPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._app = undefined;
      this._networkPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._app = value.app;
      this._networkPolicy.internalValue = value.networkPolicy;
    }
  }

  // app - computed: false, optional: false, required: true
  private _app?: string; 
  public get app() {
    return this.getStringAttribute('app');
  }
  public set app(value: string) {
    this._app = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app;
  }

  // network_policy - computed: false, optional: true, required: false
  private _networkPolicy = new NetworkPolicyNetworkPolicyNetworkPolicyOutputReference(this, "network_policy");
  public get networkPolicy() {
    return this._networkPolicy;
  }
  public putNetworkPolicy(value: NetworkPolicyNetworkPolicyNetworkPolicy) {
    this._networkPolicy.internalValue = value;
  }
  public resetNetworkPolicy() {
    this._networkPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy shipa_network_policy}
*/
export class NetworkPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "shipa_network_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkPolicy to import
  * @param importFromId The id of the existing NetworkPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "shipa_network_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/network_policy shipa_network_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'shipa_network_policy',
      terraformGeneratorMetadata: {
        providerName: 'shipa',
        providerVersion: '0.0.18',
        providerVersionConstraint: '0.0.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._networkPolicy.internalValue = config.networkPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // network_policy - computed: false, optional: false, required: true
  private _networkPolicy = new NetworkPolicyNetworkPolicyOutputReference(this, "network_policy");
  public get networkPolicy() {
    return this._networkPolicy;
  }
  public putNetworkPolicy(value: NetworkPolicyNetworkPolicy) {
    this._networkPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      network_policy: networkPolicyNetworkPolicyToTerraform(this._networkPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_policy: {
        value: networkPolicyNetworkPolicyToHclTerraform(this._networkPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkPolicyNetworkPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
