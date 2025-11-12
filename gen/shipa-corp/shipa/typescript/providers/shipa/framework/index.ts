// https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FrameworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#id Framework#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * framework block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#framework Framework#framework}
  */
  readonly framework: FrameworkFramework;
}
export interface FrameworkFrameworkResourcesGeneralAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#append Framework#append}
  */
  readonly append?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#blacklist Framework#blacklist}
  */
  readonly blacklist?: string[];
}

export function frameworkFrameworkResourcesGeneralAccessToTerraform(struct?: FrameworkFrameworkResourcesGeneralAccessOutputReference | FrameworkFrameworkResourcesGeneralAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.append),
    blacklist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blacklist),
  }
}


export function frameworkFrameworkResourcesGeneralAccessToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralAccessOutputReference | FrameworkFrameworkResourcesGeneralAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.append),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    blacklist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blacklist),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameworkFrameworkResourcesGeneralAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._blacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.blacklist = this._blacklist;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrameworkFrameworkResourcesGeneralAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._append = undefined;
      this._blacklist = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._append = value.append;
      this._blacklist = value.blacklist;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append?: string[]; 
  public get append() {
    return this.getListAttribute('append');
  }
  public set append(value: string[]) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
  }

  // blacklist - computed: false, optional: true, required: false
  private _blacklist?: string[]; 
  public get blacklist() {
    return this.getListAttribute('blacklist');
  }
  public set blacklist(value: string[]) {
    this._blacklist = value;
  }
  public resetBlacklist() {
    this._blacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistInput() {
    return this._blacklist;
  }
}
export interface FrameworkFrameworkResourcesGeneralAppQuota {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#limit Framework#limit}
  */
  readonly limit?: string;
}

export function frameworkFrameworkResourcesGeneralAppQuotaToTerraform(struct?: FrameworkFrameworkResourcesGeneralAppQuotaOutputReference | FrameworkFrameworkResourcesGeneralAppQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
  }
}


export function frameworkFrameworkResourcesGeneralAppQuotaToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralAppQuotaOutputReference | FrameworkFrameworkResourcesGeneralAppQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralAppQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameworkFrameworkResourcesGeneralAppQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrameworkFrameworkResourcesGeneralAppQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limit = value.limit;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }
}
export interface FrameworkFrameworkResourcesGeneralContainerPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#allowed_hosts Framework#allowed_hosts}
  */
  readonly allowedHosts?: string[];
}

export function frameworkFrameworkResourcesGeneralContainerPolicyToTerraform(struct?: FrameworkFrameworkResourcesGeneralContainerPolicyOutputReference | FrameworkFrameworkResourcesGeneralContainerPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
  }
}


export function frameworkFrameworkResourcesGeneralContainerPolicyToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralContainerPolicyOutputReference | FrameworkFrameworkResourcesGeneralContainerPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralContainerPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameworkFrameworkResourcesGeneralContainerPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrameworkFrameworkResourcesGeneralContainerPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
    }
  }

  // allowed_hosts - computed: false, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }
}
export interface FrameworkFrameworkResourcesGeneralDomainPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#allowed_cnames Framework#allowed_cnames}
  */
  readonly allowedCnames?: string[];
}

export function frameworkFrameworkResourcesGeneralDomainPolicyToTerraform(struct?: FrameworkFrameworkResourcesGeneralDomainPolicyOutputReference | FrameworkFrameworkResourcesGeneralDomainPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_cnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedCnames),
  }
}


export function frameworkFrameworkResourcesGeneralDomainPolicyToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralDomainPolicyOutputReference | FrameworkFrameworkResourcesGeneralDomainPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_cnames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedCnames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralDomainPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameworkFrameworkResourcesGeneralDomainPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedCnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCnames = this._allowedCnames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrameworkFrameworkResourcesGeneralDomainPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedCnames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedCnames = value.allowedCnames;
    }
  }

  // allowed_cnames - computed: false, optional: true, required: false
  private _allowedCnames?: string[]; 
  public get allowedCnames() {
    return this.getListAttribute('allowed_cnames');
  }
  public set allowedCnames(value: string[]) {
    this._allowedCnames = value;
  }
  public resetAllowedCnames() {
    this._allowedCnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCnamesInput() {
    return this._allowedCnames;
  }
}
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#key Framework#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#operator Framework#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#values Framework#values}
  */
  readonly values?: string[];
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressionsToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressionsToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressionsOutputReference {
    return new FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#match_labels Framework#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#match_expressions Framework#match_expressions}
  */
  readonly matchExpressions?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorOutputReference | FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorOutputReference | FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelector): any {
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
      value: cdktf.listMapperHcl(frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelector | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelector | undefined) {
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
  private _matchExpressions = new FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#key Framework#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#operator Framework#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#values Framework#values}
  */
  readonly values?: string[];
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressionsToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressionsToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressionsOutputReference {
    return new FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#match_labels Framework#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#match_expressions Framework#match_expressions}
  */
  readonly matchExpressions?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorOutputReference | FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorOutputReference | FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelector): any {
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
      value: cdktf.listMapperHcl(frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelector | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelector | undefined) {
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
  private _matchExpressions = new FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#ip_block Framework#ip_block}
  */
  readonly ipBlock?: string[];
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#namespace_selector Framework#namespace_selector}
  */
  readonly namespaceSelector?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelector;
  /**
  * pod_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#pod_selector Framework#pod_selector}
  */
  readonly podSelector?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelector;
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_block: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipBlock),
    namespace_selector: frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorToTerraform(struct!.namespaceSelector),
    pod_selector: frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorToTerraform(struct!.podSelector),
  }
}


export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeers | cdktf.IResolvable): any {
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
      value: frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorList",
    },
    pod_selector: {
      value: frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeers | cdktf.IResolvable | undefined) {
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
  private _namespaceSelector = new FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersNamespaceSelector) {
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
  private _podSelector = new FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersPodSelector) {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersList extends cdktf.ComplexList {
  public internalValue? : FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeers[] | cdktf.IResolvable

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
  public get(index: number): FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersOutputReference {
    return new FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#port Framework#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#protocol Framework#protocol}
  */
  readonly protocol?: string;
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPortsToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPortsToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPorts | cdktf.IResolvable): any {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPorts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPorts | cdktf.IResolvable | undefined) {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPortsList extends cdktf.ComplexList {
  public internalValue? : FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPorts[] | cdktf.IResolvable

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
  public get(index: number): FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPortsOutputReference {
    return new FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#allowed_apps Framework#allowed_apps}
  */
  readonly allowedApps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#allowed_frameworks Framework#allowed_frameworks}
  */
  readonly allowedFrameworks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#description Framework#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#enabled Framework#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#id Framework#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * peers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#peers Framework#peers}
  */
  readonly peers?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeers[] | cdktf.IResolvable;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#ports Framework#ports}
  */
  readonly ports?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPorts[] | cdktf.IResolvable;
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRules | cdktf.IResolvable): any {
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
    peers: cdktf.listMapper(frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersToTerraform, true)(struct!.peers),
    ports: cdktf.listMapper(frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPortsToTerraform, true)(struct!.ports),
  }
}


export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRules | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersToHclTerraform, true)(struct!.peers),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersList",
    },
    ports: {
      value: cdktf.listMapperHcl(frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPortsToHclTerraform, true)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRules | cdktf.IResolvable | undefined) {
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
  private _peers = new FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeersList(this, "peers", false);
  public get peers() {
    return this._peers;
  }
  public putPeers(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPeers[] | cdktf.IResolvable) {
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
  private _ports = new FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesPorts[] | cdktf.IResolvable) {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesList extends cdktf.ComplexList {
  public internalValue? : FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRules[] | cdktf.IResolvable

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
  public get(index: number): FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesOutputReference {
    return new FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#key Framework#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#operator Framework#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#values Framework#values}
  */
  readonly values?: string[];
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressionsToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressionsToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressionsOutputReference {
    return new FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#match_labels Framework#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#match_expressions Framework#match_expressions}
  */
  readonly matchExpressions?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorOutputReference | FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorOutputReference | FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelector): any {
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
      value: cdktf.listMapperHcl(frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelector | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelector | undefined) {
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
  private _matchExpressions = new FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#key Framework#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#operator Framework#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#values Framework#values}
  */
  readonly values?: string[];
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressionsToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressionsToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressionsOutputReference {
    return new FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#match_labels Framework#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#match_expressions Framework#match_expressions}
  */
  readonly matchExpressions?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorOutputReference | FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorOutputReference | FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelector): any {
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
      value: cdktf.listMapperHcl(frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelector | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelector | undefined) {
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
  private _matchExpressions = new FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#ip_block Framework#ip_block}
  */
  readonly ipBlock?: string[];
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#namespace_selector Framework#namespace_selector}
  */
  readonly namespaceSelector?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelector;
  /**
  * pod_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#pod_selector Framework#pod_selector}
  */
  readonly podSelector?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelector;
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_block: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipBlock),
    namespace_selector: frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorToTerraform(struct!.namespaceSelector),
    pod_selector: frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorToTerraform(struct!.podSelector),
  }
}


export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeers | cdktf.IResolvable): any {
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
      value: frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorList",
    },
    pod_selector: {
      value: frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeers | cdktf.IResolvable | undefined) {
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
  private _namespaceSelector = new FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersNamespaceSelector) {
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
  private _podSelector = new FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersPodSelector) {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersList extends cdktf.ComplexList {
  public internalValue? : FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeers[] | cdktf.IResolvable

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
  public get(index: number): FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersOutputReference {
    return new FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#port Framework#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#protocol Framework#protocol}
  */
  readonly protocol?: string;
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPortsToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPortsToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPorts | cdktf.IResolvable): any {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPorts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPorts | cdktf.IResolvable | undefined) {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPortsList extends cdktf.ComplexList {
  public internalValue? : FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPorts[] | cdktf.IResolvable

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
  public get(index: number): FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPortsOutputReference {
    return new FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#allowed_apps Framework#allowed_apps}
  */
  readonly allowedApps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#allowed_frameworks Framework#allowed_frameworks}
  */
  readonly allowedFrameworks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#description Framework#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#enabled Framework#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#id Framework#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * peers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#peers Framework#peers}
  */
  readonly peers?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeers[] | cdktf.IResolvable;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#ports Framework#ports}
  */
  readonly ports?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPorts[] | cdktf.IResolvable;
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRules | cdktf.IResolvable): any {
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
    peers: cdktf.listMapper(frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersToTerraform, true)(struct!.peers),
    ports: cdktf.listMapper(frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPortsToTerraform, true)(struct!.ports),
  }
}


export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRules | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersToHclTerraform, true)(struct!.peers),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersList",
    },
    ports: {
      value: cdktf.listMapperHcl(frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPortsToHclTerraform, true)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRules | cdktf.IResolvable | undefined) {
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
  private _peers = new FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeersList(this, "peers", false);
  public get peers() {
    return this._peers;
  }
  public putPeers(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPeers[] | cdktf.IResolvable) {
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
  private _ports = new FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesPorts[] | cdktf.IResolvable) {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesList extends cdktf.ComplexList {
  public internalValue? : FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRules[] | cdktf.IResolvable

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
  public get(index: number): FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesOutputReference {
    return new FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyEgress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#policy_mode Framework#policy_mode}
  */
  readonly policyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#shipa_rules_enabled Framework#shipa_rules_enabled}
  */
  readonly shipaRulesEnabled?: string[];
  /**
  * custom_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#custom_rules Framework#custom_rules}
  */
  readonly customRules?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRules[] | cdktf.IResolvable;
  /**
  * shipa_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#shipa_rules Framework#shipa_rules}
  */
  readonly shipaRules?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRules[] | cdktf.IResolvable;
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressOutputReference | FrameworkFrameworkResourcesGeneralNetworkPolicyEgress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_mode: cdktf.stringToTerraform(struct!.policyMode),
    shipa_rules_enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.shipaRulesEnabled),
    custom_rules: cdktf.listMapper(frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesToTerraform, true)(struct!.customRules),
    shipa_rules: cdktf.listMapper(frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesToTerraform, true)(struct!.shipaRules),
  }
}


export function frameworkFrameworkResourcesGeneralNetworkPolicyEgressToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressOutputReference | FrameworkFrameworkResourcesGeneralNetworkPolicyEgress): any {
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
      value: cdktf.listMapperHcl(frameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesToHclTerraform, true)(struct!.customRules),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesList",
    },
    shipa_rules: {
      value: cdktf.listMapperHcl(frameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesToHclTerraform, true)(struct!.shipaRules),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralNetworkPolicyEgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyEgress | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgress | undefined) {
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
  private _customRules = new FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRulesList(this, "custom_rules", false);
  public get customRules() {
    return this._customRules;
  }
  public putCustomRules(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressCustomRules[] | cdktf.IResolvable) {
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
  private _shipaRules = new FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRulesList(this, "shipa_rules", false);
  public get shipaRules() {
    return this._shipaRules;
  }
  public putShipaRules(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgressShipaRules[] | cdktf.IResolvable) {
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
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#key Framework#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#operator Framework#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#values Framework#values}
  */
  readonly values?: string[];
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressionsToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressionsToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressionsOutputReference {
    return new FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#match_labels Framework#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#match_expressions Framework#match_expressions}
  */
  readonly matchExpressions?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorOutputReference | FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorOutputReference | FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelector): any {
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
      value: cdktf.listMapperHcl(frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelector | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelector | undefined) {
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
  private _matchExpressions = new FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#key Framework#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#operator Framework#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#values Framework#values}
  */
  readonly values?: string[];
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressionsToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressionsToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressionsOutputReference {
    return new FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#match_labels Framework#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#match_expressions Framework#match_expressions}
  */
  readonly matchExpressions?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorOutputReference | FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorOutputReference | FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelector): any {
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
      value: cdktf.listMapperHcl(frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelector | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelector | undefined) {
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
  private _matchExpressions = new FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#ip_block Framework#ip_block}
  */
  readonly ipBlock?: string[];
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#namespace_selector Framework#namespace_selector}
  */
  readonly namespaceSelector?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelector;
  /**
  * pod_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#pod_selector Framework#pod_selector}
  */
  readonly podSelector?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelector;
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_block: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipBlock),
    namespace_selector: frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorToTerraform(struct!.namespaceSelector),
    pod_selector: frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorToTerraform(struct!.podSelector),
  }
}


export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeers | cdktf.IResolvable): any {
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
      value: frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorList",
    },
    pod_selector: {
      value: frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeers | cdktf.IResolvable | undefined) {
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
  private _namespaceSelector = new FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersNamespaceSelector) {
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
  private _podSelector = new FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersPodSelector) {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersList extends cdktf.ComplexList {
  public internalValue? : FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeers[] | cdktf.IResolvable

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
  public get(index: number): FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersOutputReference {
    return new FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#port Framework#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#protocol Framework#protocol}
  */
  readonly protocol?: string;
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPortsToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPortsToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPorts | cdktf.IResolvable): any {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPorts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPorts | cdktf.IResolvable | undefined) {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPortsList extends cdktf.ComplexList {
  public internalValue? : FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPorts[] | cdktf.IResolvable

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
  public get(index: number): FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPortsOutputReference {
    return new FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#allowed_apps Framework#allowed_apps}
  */
  readonly allowedApps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#allowed_frameworks Framework#allowed_frameworks}
  */
  readonly allowedFrameworks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#description Framework#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#enabled Framework#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#id Framework#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * peers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#peers Framework#peers}
  */
  readonly peers?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeers[] | cdktf.IResolvable;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#ports Framework#ports}
  */
  readonly ports?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPorts[] | cdktf.IResolvable;
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRules | cdktf.IResolvable): any {
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
    peers: cdktf.listMapper(frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersToTerraform, true)(struct!.peers),
    ports: cdktf.listMapper(frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPortsToTerraform, true)(struct!.ports),
  }
}


export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRules | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersToHclTerraform, true)(struct!.peers),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersList",
    },
    ports: {
      value: cdktf.listMapperHcl(frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPortsToHclTerraform, true)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRules | cdktf.IResolvable | undefined) {
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
  private _peers = new FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeersList(this, "peers", false);
  public get peers() {
    return this._peers;
  }
  public putPeers(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPeers[] | cdktf.IResolvable) {
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
  private _ports = new FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesPorts[] | cdktf.IResolvable) {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesList extends cdktf.ComplexList {
  public internalValue? : FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRules[] | cdktf.IResolvable

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
  public get(index: number): FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesOutputReference {
    return new FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#key Framework#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#operator Framework#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#values Framework#values}
  */
  readonly values?: string[];
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressionsToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressionsToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressionsOutputReference {
    return new FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#match_labels Framework#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#match_expressions Framework#match_expressions}
  */
  readonly matchExpressions?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorOutputReference | FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorOutputReference | FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelector): any {
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
      value: cdktf.listMapperHcl(frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelector | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelector | undefined) {
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
  private _matchExpressions = new FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#key Framework#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#operator Framework#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#values Framework#values}
  */
  readonly values?: string[];
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressionsToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressionsToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressionsOutputReference {
    return new FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#match_labels Framework#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#match_expressions Framework#match_expressions}
  */
  readonly matchExpressions?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorOutputReference | FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorOutputReference | FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelector): any {
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
      value: cdktf.listMapperHcl(frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelector | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelector | undefined) {
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
  private _matchExpressions = new FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#ip_block Framework#ip_block}
  */
  readonly ipBlock?: string[];
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#namespace_selector Framework#namespace_selector}
  */
  readonly namespaceSelector?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelector;
  /**
  * pod_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#pod_selector Framework#pod_selector}
  */
  readonly podSelector?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelector;
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_block: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipBlock),
    namespace_selector: frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorToTerraform(struct!.namespaceSelector),
    pod_selector: frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorToTerraform(struct!.podSelector),
  }
}


export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeers | cdktf.IResolvable): any {
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
      value: frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorList",
    },
    pod_selector: {
      value: frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeers | cdktf.IResolvable | undefined) {
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
  private _namespaceSelector = new FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersNamespaceSelector) {
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
  private _podSelector = new FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersPodSelector) {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersList extends cdktf.ComplexList {
  public internalValue? : FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeers[] | cdktf.IResolvable

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
  public get(index: number): FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersOutputReference {
    return new FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#port Framework#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#protocol Framework#protocol}
  */
  readonly protocol?: string;
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPortsToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPortsToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPorts | cdktf.IResolvable): any {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPorts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPorts | cdktf.IResolvable | undefined) {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPortsList extends cdktf.ComplexList {
  public internalValue? : FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPorts[] | cdktf.IResolvable

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
  public get(index: number): FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPortsOutputReference {
    return new FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#allowed_apps Framework#allowed_apps}
  */
  readonly allowedApps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#allowed_frameworks Framework#allowed_frameworks}
  */
  readonly allowedFrameworks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#description Framework#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#enabled Framework#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#id Framework#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * peers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#peers Framework#peers}
  */
  readonly peers?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeers[] | cdktf.IResolvable;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#ports Framework#ports}
  */
  readonly ports?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPorts[] | cdktf.IResolvable;
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRules | cdktf.IResolvable): any {
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
    peers: cdktf.listMapper(frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersToTerraform, true)(struct!.peers),
    ports: cdktf.listMapper(frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPortsToTerraform, true)(struct!.ports),
  }
}


export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRules | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersToHclTerraform, true)(struct!.peers),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersList",
    },
    ports: {
      value: cdktf.listMapperHcl(frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPortsToHclTerraform, true)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRules | cdktf.IResolvable | undefined) {
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
  private _peers = new FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeersList(this, "peers", false);
  public get peers() {
    return this._peers;
  }
  public putPeers(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPeers[] | cdktf.IResolvable) {
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
  private _ports = new FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesPorts[] | cdktf.IResolvable) {
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

export class FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesList extends cdktf.ComplexList {
  public internalValue? : FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRules[] | cdktf.IResolvable

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
  public get(index: number): FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesOutputReference {
    return new FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FrameworkFrameworkResourcesGeneralNetworkPolicyIngress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#policy_mode Framework#policy_mode}
  */
  readonly policyMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#shipa_rules_enabled Framework#shipa_rules_enabled}
  */
  readonly shipaRulesEnabled?: string[];
  /**
  * custom_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#custom_rules Framework#custom_rules}
  */
  readonly customRules?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRules[] | cdktf.IResolvable;
  /**
  * shipa_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#shipa_rules Framework#shipa_rules}
  */
  readonly shipaRules?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRules[] | cdktf.IResolvable;
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressOutputReference | FrameworkFrameworkResourcesGeneralNetworkPolicyIngress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_mode: cdktf.stringToTerraform(struct!.policyMode),
    shipa_rules_enabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.shipaRulesEnabled),
    custom_rules: cdktf.listMapper(frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesToTerraform, true)(struct!.customRules),
    shipa_rules: cdktf.listMapper(frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesToTerraform, true)(struct!.shipaRules),
  }
}


export function frameworkFrameworkResourcesGeneralNetworkPolicyIngressToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressOutputReference | FrameworkFrameworkResourcesGeneralNetworkPolicyIngress): any {
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
      value: cdktf.listMapperHcl(frameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesToHclTerraform, true)(struct!.customRules),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesList",
    },
    shipa_rules: {
      value: cdktf.listMapperHcl(frameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesToHclTerraform, true)(struct!.shipaRules),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralNetworkPolicyIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicyIngress | undefined {
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngress | undefined) {
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
  private _customRules = new FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRulesList(this, "custom_rules", false);
  public get customRules() {
    return this._customRules;
  }
  public putCustomRules(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressCustomRules[] | cdktf.IResolvable) {
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
  private _shipaRules = new FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRulesList(this, "shipa_rules", false);
  public get shipaRules() {
    return this._shipaRules;
  }
  public putShipaRules(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngressShipaRules[] | cdktf.IResolvable) {
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
export interface FrameworkFrameworkResourcesGeneralNetworkPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#disable_app_policies Framework#disable_app_policies}
  */
  readonly disableAppPolicies?: boolean | cdktf.IResolvable;
  /**
  * egress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#egress Framework#egress}
  */
  readonly egress?: FrameworkFrameworkResourcesGeneralNetworkPolicyEgress;
  /**
  * ingress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#ingress Framework#ingress}
  */
  readonly ingress?: FrameworkFrameworkResourcesGeneralNetworkPolicyIngress;
}

export function frameworkFrameworkResourcesGeneralNetworkPolicyToTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyOutputReference | FrameworkFrameworkResourcesGeneralNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_app_policies: cdktf.booleanToTerraform(struct!.disableAppPolicies),
    egress: frameworkFrameworkResourcesGeneralNetworkPolicyEgressToTerraform(struct!.egress),
    ingress: frameworkFrameworkResourcesGeneralNetworkPolicyIngressToTerraform(struct!.ingress),
  }
}


export function frameworkFrameworkResourcesGeneralNetworkPolicyToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNetworkPolicyOutputReference | FrameworkFrameworkResourcesGeneralNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_app_policies: {
      value: cdktf.booleanToHclTerraform(struct!.disableAppPolicies),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    egress: {
      value: frameworkFrameworkResourcesGeneralNetworkPolicyEgressToHclTerraform(struct!.egress),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyEgressList",
    },
    ingress: {
      value: frameworkFrameworkResourcesGeneralNetworkPolicyIngressToHclTerraform(struct!.ingress),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyIngressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralNetworkPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameworkFrameworkResourcesGeneralNetworkPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableAppPolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAppPolicies = this._disableAppPolicies;
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

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNetworkPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableAppPolicies = undefined;
      this._egress.internalValue = undefined;
      this._ingress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableAppPolicies = value.disableAppPolicies;
      this._egress.internalValue = value.egress;
      this._ingress.internalValue = value.ingress;
    }
  }

  // disable_app_policies - computed: false, optional: true, required: false
  private _disableAppPolicies?: boolean | cdktf.IResolvable; 
  public get disableAppPolicies() {
    return this.getBooleanAttribute('disable_app_policies');
  }
  public set disableAppPolicies(value: boolean | cdktf.IResolvable) {
    this._disableAppPolicies = value;
  }
  public resetDisableAppPolicies() {
    this._disableAppPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAppPoliciesInput() {
    return this._disableAppPolicies;
  }

  // egress - computed: false, optional: true, required: false
  private _egress = new FrameworkFrameworkResourcesGeneralNetworkPolicyEgressOutputReference(this, "egress");
  public get egress() {
    return this._egress;
  }
  public putEgress(value: FrameworkFrameworkResourcesGeneralNetworkPolicyEgress) {
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
  private _ingress = new FrameworkFrameworkResourcesGeneralNetworkPolicyIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: FrameworkFrameworkResourcesGeneralNetworkPolicyIngress) {
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
export interface FrameworkFrameworkResourcesGeneralNodeSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#strict Framework#strict}
  */
  readonly strict?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#terms Framework#terms}
  */
  readonly terms: { [key: string]: string };
}

export function frameworkFrameworkResourcesGeneralNodeSelectorToTerraform(struct?: FrameworkFrameworkResourcesGeneralNodeSelectorOutputReference | FrameworkFrameworkResourcesGeneralNodeSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    strict: cdktf.booleanToTerraform(struct!.strict),
    terms: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.terms),
  }
}


export function frameworkFrameworkResourcesGeneralNodeSelectorToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralNodeSelectorOutputReference | FrameworkFrameworkResourcesGeneralNodeSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    strict: {
      value: cdktf.booleanToHclTerraform(struct!.strict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    terms: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.terms),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralNodeSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameworkFrameworkResourcesGeneralNodeSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._strict !== undefined) {
      hasAnyValues = true;
      internalValueResult.strict = this._strict;
    }
    if (this._terms !== undefined) {
      hasAnyValues = true;
      internalValueResult.terms = this._terms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrameworkFrameworkResourcesGeneralNodeSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._strict = undefined;
      this._terms = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._strict = value.strict;
      this._terms = value.terms;
    }
  }

  // strict - computed: false, optional: true, required: false
  private _strict?: boolean | cdktf.IResolvable; 
  public get strict() {
    return this.getBooleanAttribute('strict');
  }
  public set strict(value: boolean | cdktf.IResolvable) {
    this._strict = value;
  }
  public resetStrict() {
    this._strict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictInput() {
    return this._strict;
  }

  // terms - computed: false, optional: false, required: true
  private _terms?: { [key: string]: string }; 
  public get terms() {
    return this.getStringMapAttribute('terms');
  }
  public set terms(value: { [key: string]: string }) {
    this._terms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get termsInput() {
    return this._terms;
  }
}
export interface FrameworkFrameworkResourcesGeneralPlan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#name Framework#name}
  */
  readonly name?: string;
}

export function frameworkFrameworkResourcesGeneralPlanToTerraform(struct?: FrameworkFrameworkResourcesGeneralPlanOutputReference | FrameworkFrameworkResourcesGeneralPlan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function frameworkFrameworkResourcesGeneralPlanToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralPlanOutputReference | FrameworkFrameworkResourcesGeneralPlan): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralPlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameworkFrameworkResourcesGeneralPlan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrameworkFrameworkResourcesGeneralPlan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface FrameworkFrameworkResourcesGeneralPodAutoScaler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#disable_app_override Framework#disable_app_override}
  */
  readonly disableAppOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#max_replicas Framework#max_replicas}
  */
  readonly maxReplicas: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#min_replicas Framework#min_replicas}
  */
  readonly minReplicas: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#target_cpu_utilization_percentage Framework#target_cpu_utilization_percentage}
  */
  readonly targetCpuUtilizationPercentage: number;
}

export function frameworkFrameworkResourcesGeneralPodAutoScalerToTerraform(struct?: FrameworkFrameworkResourcesGeneralPodAutoScalerOutputReference | FrameworkFrameworkResourcesGeneralPodAutoScaler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_app_override: cdktf.booleanToTerraform(struct!.disableAppOverride),
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
    target_cpu_utilization_percentage: cdktf.numberToTerraform(struct!.targetCpuUtilizationPercentage),
  }
}


export function frameworkFrameworkResourcesGeneralPodAutoScalerToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralPodAutoScalerOutputReference | FrameworkFrameworkResourcesGeneralPodAutoScaler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_app_override: {
      value: cdktf.booleanToHclTerraform(struct!.disableAppOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_replicas: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_cpu_utilization_percentage: {
      value: cdktf.numberToHclTerraform(struct!.targetCpuUtilizationPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralPodAutoScalerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameworkFrameworkResourcesGeneralPodAutoScaler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableAppOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAppOverride = this._disableAppOverride;
    }
    if (this._maxReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicas = this._maxReplicas;
    }
    if (this._minReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicas = this._minReplicas;
    }
    if (this._targetCpuUtilizationPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCpuUtilizationPercentage = this._targetCpuUtilizationPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrameworkFrameworkResourcesGeneralPodAutoScaler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableAppOverride = undefined;
      this._maxReplicas = undefined;
      this._minReplicas = undefined;
      this._targetCpuUtilizationPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableAppOverride = value.disableAppOverride;
      this._maxReplicas = value.maxReplicas;
      this._minReplicas = value.minReplicas;
      this._targetCpuUtilizationPercentage = value.targetCpuUtilizationPercentage;
    }
  }

  // disable_app_override - computed: false, optional: true, required: false
  private _disableAppOverride?: boolean | cdktf.IResolvable; 
  public get disableAppOverride() {
    return this.getBooleanAttribute('disable_app_override');
  }
  public set disableAppOverride(value: boolean | cdktf.IResolvable) {
    this._disableAppOverride = value;
  }
  public resetDisableAppOverride() {
    this._disableAppOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAppOverrideInput() {
    return this._disableAppOverride;
  }

  // max_replicas - computed: false, optional: false, required: true
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas;
  }

  // min_replicas - computed: false, optional: false, required: true
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
  }

  // target_cpu_utilization_percentage - computed: false, optional: false, required: true
  private _targetCpuUtilizationPercentage?: number; 
  public get targetCpuUtilizationPercentage() {
    return this.getNumberAttribute('target_cpu_utilization_percentage');
  }
  public set targetCpuUtilizationPercentage(value: number) {
    this._targetCpuUtilizationPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCpuUtilizationPercentageInput() {
    return this._targetCpuUtilizationPercentage;
  }
}
export interface FrameworkFrameworkResourcesGeneralSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#disable_scan Framework#disable_scan}
  */
  readonly disableScan?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#ignore_components Framework#ignore_components}
  */
  readonly ignoreComponents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#ignore_cves Framework#ignore_cves}
  */
  readonly ignoreCves?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#scan_platform_layers Framework#scan_platform_layers}
  */
  readonly scanPlatformLayers?: boolean | cdktf.IResolvable;
}

export function frameworkFrameworkResourcesGeneralSecurityToTerraform(struct?: FrameworkFrameworkResourcesGeneralSecurityOutputReference | FrameworkFrameworkResourcesGeneralSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_scan: cdktf.booleanToTerraform(struct!.disableScan),
    ignore_components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoreComponents),
    ignore_cves: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoreCves),
    scan_platform_layers: cdktf.booleanToTerraform(struct!.scanPlatformLayers),
  }
}


export function frameworkFrameworkResourcesGeneralSecurityToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralSecurityOutputReference | FrameworkFrameworkResourcesGeneralSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_scan: {
      value: cdktf.booleanToHclTerraform(struct!.disableScan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_components: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoreComponents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ignore_cves: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoreCves),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    scan_platform_layers: {
      value: cdktf.booleanToHclTerraform(struct!.scanPlatformLayers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameworkFrameworkResourcesGeneralSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableScan = this._disableScan;
    }
    if (this._ignoreComponents !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreComponents = this._ignoreComponents;
    }
    if (this._ignoreCves !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCves = this._ignoreCves;
    }
    if (this._scanPlatformLayers !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanPlatformLayers = this._scanPlatformLayers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrameworkFrameworkResourcesGeneralSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableScan = undefined;
      this._ignoreComponents = undefined;
      this._ignoreCves = undefined;
      this._scanPlatformLayers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableScan = value.disableScan;
      this._ignoreComponents = value.ignoreComponents;
      this._ignoreCves = value.ignoreCves;
      this._scanPlatformLayers = value.scanPlatformLayers;
    }
  }

  // disable_scan - computed: false, optional: true, required: false
  private _disableScan?: boolean | cdktf.IResolvable; 
  public get disableScan() {
    return this.getBooleanAttribute('disable_scan');
  }
  public set disableScan(value: boolean | cdktf.IResolvable) {
    this._disableScan = value;
  }
  public resetDisableScan() {
    this._disableScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableScanInput() {
    return this._disableScan;
  }

  // ignore_components - computed: false, optional: true, required: false
  private _ignoreComponents?: string[]; 
  public get ignoreComponents() {
    return this.getListAttribute('ignore_components');
  }
  public set ignoreComponents(value: string[]) {
    this._ignoreComponents = value;
  }
  public resetIgnoreComponents() {
    this._ignoreComponents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreComponentsInput() {
    return this._ignoreComponents;
  }

  // ignore_cves - computed: false, optional: true, required: false
  private _ignoreCves?: string[]; 
  public get ignoreCves() {
    return this.getListAttribute('ignore_cves');
  }
  public set ignoreCves(value: string[]) {
    this._ignoreCves = value;
  }
  public resetIgnoreCves() {
    this._ignoreCves = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCvesInput() {
    return this._ignoreCves;
  }

  // scan_platform_layers - computed: false, optional: true, required: false
  private _scanPlatformLayers?: boolean | cdktf.IResolvable; 
  public get scanPlatformLayers() {
    return this.getBooleanAttribute('scan_platform_layers');
  }
  public set scanPlatformLayers(value: boolean | cdktf.IResolvable) {
    this._scanPlatformLayers = value;
  }
  public resetScanPlatformLayers() {
    this._scanPlatformLayers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanPlatformLayersInput() {
    return this._scanPlatformLayers;
  }
}
export interface FrameworkFrameworkResourcesGeneralServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#append Framework#append}
  */
  readonly append?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#blacklist Framework#blacklist}
  */
  readonly blacklist?: string[];
}

export function frameworkFrameworkResourcesGeneralServicesToTerraform(struct?: FrameworkFrameworkResourcesGeneralServicesOutputReference | FrameworkFrameworkResourcesGeneralServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.append),
    blacklist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blacklist),
  }
}


export function frameworkFrameworkResourcesGeneralServicesToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralServicesOutputReference | FrameworkFrameworkResourcesGeneralServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.append),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    blacklist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blacklist),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameworkFrameworkResourcesGeneralServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._blacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.blacklist = this._blacklist;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrameworkFrameworkResourcesGeneralServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._append = undefined;
      this._blacklist = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._append = value.append;
      this._blacklist = value.blacklist;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append?: string[]; 
  public get append() {
    return this.getListAttribute('append');
  }
  public set append(value: string[]) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
  }

  // blacklist - computed: false, optional: true, required: false
  private _blacklist?: string[]; 
  public get blacklist() {
    return this.getListAttribute('blacklist');
  }
  public set blacklist(value: string[]) {
    this._blacklist = value;
  }
  public resetBlacklist() {
    this._blacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistInput() {
    return this._blacklist;
  }
}
export interface FrameworkFrameworkResourcesGeneralSetup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#default Framework#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#kubernetes_namespace Framework#kubernetes_namespace}
  */
  readonly kubernetesNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#provisioner Framework#provisioner}
  */
  readonly provisioner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#public Framework#public}
  */
  readonly public?: boolean | cdktf.IResolvable;
}

export function frameworkFrameworkResourcesGeneralSetupToTerraform(struct?: FrameworkFrameworkResourcesGeneralSetupOutputReference | FrameworkFrameworkResourcesGeneralSetup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.booleanToTerraform(struct!.default),
    kubernetes_namespace: cdktf.stringToTerraform(struct!.kubernetesNamespace),
    provisioner: cdktf.stringToTerraform(struct!.provisioner),
    public: cdktf.booleanToTerraform(struct!.public),
  }
}


export function frameworkFrameworkResourcesGeneralSetupToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralSetupOutputReference | FrameworkFrameworkResourcesGeneralSetup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.booleanToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kubernetes_namespace: {
      value: cdktf.stringToHclTerraform(struct!.kubernetesNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioner: {
      value: cdktf.stringToHclTerraform(struct!.provisioner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public: {
      value: cdktf.booleanToHclTerraform(struct!.public),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralSetupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameworkFrameworkResourcesGeneralSetup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._kubernetesNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesNamespace = this._kubernetesNamespace;
    }
    if (this._provisioner !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioner = this._provisioner;
    }
    if (this._public !== undefined) {
      hasAnyValues = true;
      internalValueResult.public = this._public;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrameworkFrameworkResourcesGeneralSetup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default = undefined;
      this._kubernetesNamespace = undefined;
      this._provisioner = undefined;
      this._public = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._default = value.default;
      this._kubernetesNamespace = value.kubernetesNamespace;
      this._provisioner = value.provisioner;
      this._public = value.public;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // kubernetes_namespace - computed: false, optional: true, required: false
  private _kubernetesNamespace?: string; 
  public get kubernetesNamespace() {
    return this.getStringAttribute('kubernetes_namespace');
  }
  public set kubernetesNamespace(value: string) {
    this._kubernetesNamespace = value;
  }
  public resetKubernetesNamespace() {
    this._kubernetesNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesNamespaceInput() {
    return this._kubernetesNamespace;
  }

  // provisioner - computed: false, optional: true, required: false
  private _provisioner?: string; 
  public get provisioner() {
    return this.getStringAttribute('provisioner');
  }
  public set provisioner(value: string) {
    this._provisioner = value;
  }
  public resetProvisioner() {
    this._provisioner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerInput() {
    return this._provisioner;
  }

  // public - computed: false, optional: true, required: false
  private _public?: boolean | cdktf.IResolvable; 
  public get public() {
    return this.getBooleanAttribute('public');
  }
  public set public(value: boolean | cdktf.IResolvable) {
    this._public = value;
  }
  public resetPublic() {
    this._public = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public;
  }
}
export interface FrameworkFrameworkResourcesGeneral {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#router Framework#router}
  */
  readonly router?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#volumes Framework#volumes}
  */
  readonly volumes?: string[];
  /**
  * access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#access Framework#access}
  */
  readonly access?: FrameworkFrameworkResourcesGeneralAccess;
  /**
  * app_quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#app_quota Framework#app_quota}
  */
  readonly appQuota?: FrameworkFrameworkResourcesGeneralAppQuota;
  /**
  * container_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#container_policy Framework#container_policy}
  */
  readonly containerPolicy?: FrameworkFrameworkResourcesGeneralContainerPolicy;
  /**
  * domain_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#domain_policy Framework#domain_policy}
  */
  readonly domainPolicy?: FrameworkFrameworkResourcesGeneralDomainPolicy;
  /**
  * network_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#network_policy Framework#network_policy}
  */
  readonly networkPolicy?: FrameworkFrameworkResourcesGeneralNetworkPolicy;
  /**
  * node_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#node_selector Framework#node_selector}
  */
  readonly nodeSelector?: FrameworkFrameworkResourcesGeneralNodeSelector;
  /**
  * plan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#plan Framework#plan}
  */
  readonly plan?: FrameworkFrameworkResourcesGeneralPlan;
  /**
  * pod_auto_scaler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#pod_auto_scaler Framework#pod_auto_scaler}
  */
  readonly podAutoScaler?: FrameworkFrameworkResourcesGeneralPodAutoScaler;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#security Framework#security}
  */
  readonly security?: FrameworkFrameworkResourcesGeneralSecurity;
  /**
  * services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#services Framework#services}
  */
  readonly services?: FrameworkFrameworkResourcesGeneralServices;
  /**
  * setup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#setup Framework#setup}
  */
  readonly setup?: FrameworkFrameworkResourcesGeneralSetup;
}

export function frameworkFrameworkResourcesGeneralToTerraform(struct?: FrameworkFrameworkResourcesGeneralOutputReference | FrameworkFrameworkResourcesGeneral): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    router: cdktf.stringToTerraform(struct!.router),
    volumes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.volumes),
    access: frameworkFrameworkResourcesGeneralAccessToTerraform(struct!.access),
    app_quota: frameworkFrameworkResourcesGeneralAppQuotaToTerraform(struct!.appQuota),
    container_policy: frameworkFrameworkResourcesGeneralContainerPolicyToTerraform(struct!.containerPolicy),
    domain_policy: frameworkFrameworkResourcesGeneralDomainPolicyToTerraform(struct!.domainPolicy),
    network_policy: frameworkFrameworkResourcesGeneralNetworkPolicyToTerraform(struct!.networkPolicy),
    node_selector: frameworkFrameworkResourcesGeneralNodeSelectorToTerraform(struct!.nodeSelector),
    plan: frameworkFrameworkResourcesGeneralPlanToTerraform(struct!.plan),
    pod_auto_scaler: frameworkFrameworkResourcesGeneralPodAutoScalerToTerraform(struct!.podAutoScaler),
    security: frameworkFrameworkResourcesGeneralSecurityToTerraform(struct!.security),
    services: frameworkFrameworkResourcesGeneralServicesToTerraform(struct!.services),
    setup: frameworkFrameworkResourcesGeneralSetupToTerraform(struct!.setup),
  }
}


export function frameworkFrameworkResourcesGeneralToHclTerraform(struct?: FrameworkFrameworkResourcesGeneralOutputReference | FrameworkFrameworkResourcesGeneral): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    router: {
      value: cdktf.stringToHclTerraform(struct!.router),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.volumes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access: {
      value: frameworkFrameworkResourcesGeneralAccessToHclTerraform(struct!.access),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralAccessList",
    },
    app_quota: {
      value: frameworkFrameworkResourcesGeneralAppQuotaToHclTerraform(struct!.appQuota),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralAppQuotaList",
    },
    container_policy: {
      value: frameworkFrameworkResourcesGeneralContainerPolicyToHclTerraform(struct!.containerPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralContainerPolicyList",
    },
    domain_policy: {
      value: frameworkFrameworkResourcesGeneralDomainPolicyToHclTerraform(struct!.domainPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralDomainPolicyList",
    },
    network_policy: {
      value: frameworkFrameworkResourcesGeneralNetworkPolicyToHclTerraform(struct!.networkPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNetworkPolicyList",
    },
    node_selector: {
      value: frameworkFrameworkResourcesGeneralNodeSelectorToHclTerraform(struct!.nodeSelector),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralNodeSelectorList",
    },
    plan: {
      value: frameworkFrameworkResourcesGeneralPlanToHclTerraform(struct!.plan),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralPlanList",
    },
    pod_auto_scaler: {
      value: frameworkFrameworkResourcesGeneralPodAutoScalerToHclTerraform(struct!.podAutoScaler),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralPodAutoScalerList",
    },
    security: {
      value: frameworkFrameworkResourcesGeneralSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralSecurityList",
    },
    services: {
      value: frameworkFrameworkResourcesGeneralServicesToHclTerraform(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralServicesList",
    },
    setup: {
      value: frameworkFrameworkResourcesGeneralSetupToHclTerraform(struct!.setup),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralSetupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesGeneralOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameworkFrameworkResourcesGeneral | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._router !== undefined) {
      hasAnyValues = true;
      internalValueResult.router = this._router;
    }
    if (this._volumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes;
    }
    if (this._access?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access?.internalValue;
    }
    if (this._appQuota?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appQuota = this._appQuota?.internalValue;
    }
    if (this._containerPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPolicy = this._containerPolicy?.internalValue;
    }
    if (this._domainPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainPolicy = this._domainPolicy?.internalValue;
    }
    if (this._networkPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicy = this._networkPolicy?.internalValue;
    }
    if (this._nodeSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector?.internalValue;
    }
    if (this._plan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plan = this._plan?.internalValue;
    }
    if (this._podAutoScaler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAutoScaler = this._podAutoScaler?.internalValue;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    if (this._setup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setup = this._setup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrameworkFrameworkResourcesGeneral | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._router = undefined;
      this._volumes = undefined;
      this._access.internalValue = undefined;
      this._appQuota.internalValue = undefined;
      this._containerPolicy.internalValue = undefined;
      this._domainPolicy.internalValue = undefined;
      this._networkPolicy.internalValue = undefined;
      this._nodeSelector.internalValue = undefined;
      this._plan.internalValue = undefined;
      this._podAutoScaler.internalValue = undefined;
      this._security.internalValue = undefined;
      this._services.internalValue = undefined;
      this._setup.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._router = value.router;
      this._volumes = value.volumes;
      this._access.internalValue = value.access;
      this._appQuota.internalValue = value.appQuota;
      this._containerPolicy.internalValue = value.containerPolicy;
      this._domainPolicy.internalValue = value.domainPolicy;
      this._networkPolicy.internalValue = value.networkPolicy;
      this._nodeSelector.internalValue = value.nodeSelector;
      this._plan.internalValue = value.plan;
      this._podAutoScaler.internalValue = value.podAutoScaler;
      this._security.internalValue = value.security;
      this._services.internalValue = value.services;
      this._setup.internalValue = value.setup;
    }
  }

  // router - computed: false, optional: true, required: false
  private _router?: string; 
  public get router() {
    return this.getStringAttribute('router');
  }
  public set router(value: string) {
    this._router = value;
  }
  public resetRouter() {
    this._router = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes?: string[]; 
  public get volumes() {
    return this.getListAttribute('volumes');
  }
  public set volumes(value: string[]) {
    this._volumes = value;
  }
  public resetVolumes() {
    this._volumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes;
  }

  // access - computed: false, optional: true, required: false
  private _access = new FrameworkFrameworkResourcesGeneralAccessOutputReference(this, "access");
  public get access() {
    return this._access;
  }
  public putAccess(value: FrameworkFrameworkResourcesGeneralAccess) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // app_quota - computed: false, optional: true, required: false
  private _appQuota = new FrameworkFrameworkResourcesGeneralAppQuotaOutputReference(this, "app_quota");
  public get appQuota() {
    return this._appQuota;
  }
  public putAppQuota(value: FrameworkFrameworkResourcesGeneralAppQuota) {
    this._appQuota.internalValue = value;
  }
  public resetAppQuota() {
    this._appQuota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appQuotaInput() {
    return this._appQuota.internalValue;
  }

  // container_policy - computed: false, optional: true, required: false
  private _containerPolicy = new FrameworkFrameworkResourcesGeneralContainerPolicyOutputReference(this, "container_policy");
  public get containerPolicy() {
    return this._containerPolicy;
  }
  public putContainerPolicy(value: FrameworkFrameworkResourcesGeneralContainerPolicy) {
    this._containerPolicy.internalValue = value;
  }
  public resetContainerPolicy() {
    this._containerPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPolicyInput() {
    return this._containerPolicy.internalValue;
  }

  // domain_policy - computed: false, optional: true, required: false
  private _domainPolicy = new FrameworkFrameworkResourcesGeneralDomainPolicyOutputReference(this, "domain_policy");
  public get domainPolicy() {
    return this._domainPolicy;
  }
  public putDomainPolicy(value: FrameworkFrameworkResourcesGeneralDomainPolicy) {
    this._domainPolicy.internalValue = value;
  }
  public resetDomainPolicy() {
    this._domainPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainPolicyInput() {
    return this._domainPolicy.internalValue;
  }

  // network_policy - computed: false, optional: true, required: false
  private _networkPolicy = new FrameworkFrameworkResourcesGeneralNetworkPolicyOutputReference(this, "network_policy");
  public get networkPolicy() {
    return this._networkPolicy;
  }
  public putNetworkPolicy(value: FrameworkFrameworkResourcesGeneralNetworkPolicy) {
    this._networkPolicy.internalValue = value;
  }
  public resetNetworkPolicy() {
    this._networkPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy.internalValue;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector = new FrameworkFrameworkResourcesGeneralNodeSelectorOutputReference(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }
  public putNodeSelector(value: FrameworkFrameworkResourcesGeneralNodeSelector) {
    this._nodeSelector.internalValue = value;
  }
  public resetNodeSelector() {
    this._nodeSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector.internalValue;
  }

  // plan - computed: false, optional: true, required: false
  private _plan = new FrameworkFrameworkResourcesGeneralPlanOutputReference(this, "plan");
  public get plan() {
    return this._plan;
  }
  public putPlan(value: FrameworkFrameworkResourcesGeneralPlan) {
    this._plan.internalValue = value;
  }
  public resetPlan() {
    this._plan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan.internalValue;
  }

  // pod_auto_scaler - computed: false, optional: true, required: false
  private _podAutoScaler = new FrameworkFrameworkResourcesGeneralPodAutoScalerOutputReference(this, "pod_auto_scaler");
  public get podAutoScaler() {
    return this._podAutoScaler;
  }
  public putPodAutoScaler(value: FrameworkFrameworkResourcesGeneralPodAutoScaler) {
    this._podAutoScaler.internalValue = value;
  }
  public resetPodAutoScaler() {
    this._podAutoScaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAutoScalerInput() {
    return this._podAutoScaler.internalValue;
  }

  // security - computed: false, optional: true, required: false
  private _security = new FrameworkFrameworkResourcesGeneralSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: FrameworkFrameworkResourcesGeneralSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // services - computed: false, optional: true, required: false
  private _services = new FrameworkFrameworkResourcesGeneralServicesOutputReference(this, "services");
  public get services() {
    return this._services;
  }
  public putServices(value: FrameworkFrameworkResourcesGeneralServices) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // setup - computed: false, optional: true, required: false
  private _setup = new FrameworkFrameworkResourcesGeneralSetupOutputReference(this, "setup");
  public get setup() {
    return this._setup;
  }
  public putSetup(value: FrameworkFrameworkResourcesGeneralSetup) {
    this._setup.internalValue = value;
  }
  public resetSetup() {
    this._setup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setupInput() {
    return this._setup.internalValue;
  }
}
export interface FrameworkFrameworkResourcesShipaNodeAutoScale {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#max_container Framework#max_container}
  */
  readonly maxContainer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#max_memory Framework#max_memory}
  */
  readonly maxMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#rebalance Framework#rebalance}
  */
  readonly rebalance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#scale_down Framework#scale_down}
  */
  readonly scaleDown?: number;
}

export function frameworkFrameworkResourcesShipaNodeAutoScaleToTerraform(struct?: FrameworkFrameworkResourcesShipaNodeAutoScaleOutputReference | FrameworkFrameworkResourcesShipaNodeAutoScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_container: cdktf.numberToTerraform(struct!.maxContainer),
    max_memory: cdktf.numberToTerraform(struct!.maxMemory),
    rebalance: cdktf.booleanToTerraform(struct!.rebalance),
    scale_down: cdktf.numberToTerraform(struct!.scaleDown),
  }
}


export function frameworkFrameworkResourcesShipaNodeAutoScaleToHclTerraform(struct?: FrameworkFrameworkResourcesShipaNodeAutoScaleOutputReference | FrameworkFrameworkResourcesShipaNodeAutoScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_container: {
      value: cdktf.numberToHclTerraform(struct!.maxContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_memory: {
      value: cdktf.numberToHclTerraform(struct!.maxMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rebalance: {
      value: cdktf.booleanToHclTerraform(struct!.rebalance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scale_down: {
      value: cdktf.numberToHclTerraform(struct!.scaleDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesShipaNodeAutoScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameworkFrameworkResourcesShipaNodeAutoScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxContainer = this._maxContainer;
    }
    if (this._maxMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemory = this._maxMemory;
    }
    if (this._rebalance !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebalance = this._rebalance;
    }
    if (this._scaleDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDown = this._scaleDown;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrameworkFrameworkResourcesShipaNodeAutoScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxContainer = undefined;
      this._maxMemory = undefined;
      this._rebalance = undefined;
      this._scaleDown = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxContainer = value.maxContainer;
      this._maxMemory = value.maxMemory;
      this._rebalance = value.rebalance;
      this._scaleDown = value.scaleDown;
    }
  }

  // max_container - computed: false, optional: true, required: false
  private _maxContainer?: number; 
  public get maxContainer() {
    return this.getNumberAttribute('max_container');
  }
  public set maxContainer(value: number) {
    this._maxContainer = value;
  }
  public resetMaxContainer() {
    this._maxContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxContainerInput() {
    return this._maxContainer;
  }

  // max_memory - computed: false, optional: true, required: false
  private _maxMemory?: number; 
  public get maxMemory() {
    return this.getNumberAttribute('max_memory');
  }
  public set maxMemory(value: number) {
    this._maxMemory = value;
  }
  public resetMaxMemory() {
    this._maxMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryInput() {
    return this._maxMemory;
  }

  // rebalance - computed: false, optional: true, required: false
  private _rebalance?: boolean | cdktf.IResolvable; 
  public get rebalance() {
    return this.getBooleanAttribute('rebalance');
  }
  public set rebalance(value: boolean | cdktf.IResolvable) {
    this._rebalance = value;
  }
  public resetRebalance() {
    this._rebalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebalanceInput() {
    return this._rebalance;
  }

  // scale_down - computed: false, optional: true, required: false
  private _scaleDown?: number; 
  public get scaleDown() {
    return this.getNumberAttribute('scale_down');
  }
  public set scaleDown(value: number) {
    this._scaleDown = value;
  }
  public resetScaleDown() {
    this._scaleDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownInput() {
    return this._scaleDown;
  }
}
export interface FrameworkFrameworkResourcesShipaNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#drivers Framework#drivers}
  */
  readonly drivers?: string[];
  /**
  * auto_scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#auto_scale Framework#auto_scale}
  */
  readonly autoScale?: FrameworkFrameworkResourcesShipaNodeAutoScale;
}

export function frameworkFrameworkResourcesShipaNodeToTerraform(struct?: FrameworkFrameworkResourcesShipaNodeOutputReference | FrameworkFrameworkResourcesShipaNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drivers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.drivers),
    auto_scale: frameworkFrameworkResourcesShipaNodeAutoScaleToTerraform(struct!.autoScale),
  }
}


export function frameworkFrameworkResourcesShipaNodeToHclTerraform(struct?: FrameworkFrameworkResourcesShipaNodeOutputReference | FrameworkFrameworkResourcesShipaNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drivers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.drivers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    auto_scale: {
      value: frameworkFrameworkResourcesShipaNodeAutoScaleToHclTerraform(struct!.autoScale),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesShipaNodeAutoScaleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesShipaNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameworkFrameworkResourcesShipaNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drivers !== undefined) {
      hasAnyValues = true;
      internalValueResult.drivers = this._drivers;
    }
    if (this._autoScale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScale = this._autoScale?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrameworkFrameworkResourcesShipaNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drivers = undefined;
      this._autoScale.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drivers = value.drivers;
      this._autoScale.internalValue = value.autoScale;
    }
  }

  // drivers - computed: false, optional: true, required: false
  private _drivers?: string[]; 
  public get drivers() {
    return this.getListAttribute('drivers');
  }
  public set drivers(value: string[]) {
    this._drivers = value;
  }
  public resetDrivers() {
    this._drivers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driversInput() {
    return this._drivers;
  }

  // auto_scale - computed: false, optional: true, required: false
  private _autoScale = new FrameworkFrameworkResourcesShipaNodeAutoScaleOutputReference(this, "auto_scale");
  public get autoScale() {
    return this._autoScale;
  }
  public putAutoScale(value: FrameworkFrameworkResourcesShipaNodeAutoScale) {
    this._autoScale.internalValue = value;
  }
  public resetAutoScale() {
    this._autoScale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScaleInput() {
    return this._autoScale.internalValue;
  }
}
export interface FrameworkFrameworkResources {
  /**
  * general block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#general Framework#general}
  */
  readonly general?: FrameworkFrameworkResourcesGeneral;
  /**
  * shipa_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#shipa_node Framework#shipa_node}
  */
  readonly shipaNode?: FrameworkFrameworkResourcesShipaNode;
}

export function frameworkFrameworkResourcesToTerraform(struct?: FrameworkFrameworkResourcesOutputReference | FrameworkFrameworkResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    general: frameworkFrameworkResourcesGeneralToTerraform(struct!.general),
    shipa_node: frameworkFrameworkResourcesShipaNodeToTerraform(struct!.shipaNode),
  }
}


export function frameworkFrameworkResourcesToHclTerraform(struct?: FrameworkFrameworkResourcesOutputReference | FrameworkFrameworkResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    general: {
      value: frameworkFrameworkResourcesGeneralToHclTerraform(struct!.general),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesGeneralList",
    },
    shipa_node: {
      value: frameworkFrameworkResourcesShipaNodeToHclTerraform(struct!.shipaNode),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesShipaNodeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameworkFrameworkResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._general?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.general = this._general?.internalValue;
    }
    if (this._shipaNode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shipaNode = this._shipaNode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrameworkFrameworkResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._general.internalValue = undefined;
      this._shipaNode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._general.internalValue = value.general;
      this._shipaNode.internalValue = value.shipaNode;
    }
  }

  // general - computed: false, optional: true, required: false
  private _general = new FrameworkFrameworkResourcesGeneralOutputReference(this, "general");
  public get general() {
    return this._general;
  }
  public putGeneral(value: FrameworkFrameworkResourcesGeneral) {
    this._general.internalValue = value;
  }
  public resetGeneral() {
    this._general.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generalInput() {
    return this._general.internalValue;
  }

  // shipa_node - computed: false, optional: true, required: false
  private _shipaNode = new FrameworkFrameworkResourcesShipaNodeOutputReference(this, "shipa_node");
  public get shipaNode() {
    return this._shipaNode;
  }
  public putShipaNode(value: FrameworkFrameworkResourcesShipaNode) {
    this._shipaNode.internalValue = value;
  }
  public resetShipaNode() {
    this._shipaNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shipaNodeInput() {
    return this._shipaNode.internalValue;
  }
}
export interface FrameworkFramework {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#name Framework#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#provisioner Framework#provisioner}
  */
  readonly provisioner: string;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#resources Framework#resources}
  */
  readonly resources?: FrameworkFrameworkResources;
}

export function frameworkFrameworkToTerraform(struct?: FrameworkFrameworkOutputReference | FrameworkFramework): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    provisioner: cdktf.stringToTerraform(struct!.provisioner),
    resources: frameworkFrameworkResourcesToTerraform(struct!.resources),
  }
}


export function frameworkFrameworkToHclTerraform(struct?: FrameworkFrameworkOutputReference | FrameworkFramework): any {
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
    provisioner: {
      value: cdktf.stringToHclTerraform(struct!.provisioner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: frameworkFrameworkResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "FrameworkFrameworkResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FrameworkFrameworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FrameworkFramework | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._provisioner !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioner = this._provisioner;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FrameworkFramework | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._provisioner = undefined;
      this._resources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._provisioner = value.provisioner;
      this._resources.internalValue = value.resources;
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

  // provisioner - computed: false, optional: false, required: true
  private _provisioner?: string; 
  public get provisioner() {
    return this.getStringAttribute('provisioner');
  }
  public set provisioner(value: string) {
    this._provisioner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerInput() {
    return this._provisioner;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new FrameworkFrameworkResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: FrameworkFrameworkResources) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework shipa_framework}
*/
export class Framework extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "shipa_framework";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Framework resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Framework to import
  * @param importFromId The id of the existing Framework that should be imported. Refer to the {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Framework to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "shipa_framework", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/shipa-corp/shipa/0.0.18/docs/resources/framework shipa_framework} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FrameworkConfig
  */
  public constructor(scope: Construct, id: string, config: FrameworkConfig) {
    super(scope, id, {
      terraformResourceType: 'shipa_framework',
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
    this._framework.internalValue = config.framework;
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

  // framework - computed: false, optional: false, required: true
  private _framework = new FrameworkFrameworkOutputReference(this, "framework");
  public get framework() {
    return this._framework;
  }
  public putFramework(value: FrameworkFramework) {
    this._framework.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkInput() {
    return this._framework.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      framework: frameworkFrameworkToTerraform(this._framework.internalValue),
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
      framework: {
        value: frameworkFrameworkToHclTerraform(this._framework.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FrameworkFrameworkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
