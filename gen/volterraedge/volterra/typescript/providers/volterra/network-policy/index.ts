// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#annotations NetworkPolicy#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#description NetworkPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#disable NetworkPolicy#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#id NetworkPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#labels NetworkPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#name NetworkPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#namespace NetworkPolicy#namespace}
  */
  readonly namespace: string;
  /**
  * endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#endpoint NetworkPolicy#endpoint}
  */
  readonly endpoint: NetworkPolicyEndpoint;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#rules NetworkPolicy#rules}
  */
  readonly rules?: NetworkPolicyRules;
}
export interface NetworkPolicyEndpointLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#expressions NetworkPolicy#expressions}
  */
  readonly expressions: string[];
}

export function networkPolicyEndpointLabelSelectorToTerraform(struct?: NetworkPolicyEndpointLabelSelectorOutputReference | NetworkPolicyEndpointLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function networkPolicyEndpointLabelSelectorToHclTerraform(struct?: NetworkPolicyEndpointLabelSelectorOutputReference | NetworkPolicyEndpointLabelSelector): any {
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

export class NetworkPolicyEndpointLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyEndpointLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyEndpointLabelSelector | undefined) {
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
export interface NetworkPolicyEndpointPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#ipv6_prefixes NetworkPolicy#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#prefixes NetworkPolicy#prefixes}
  */
  readonly prefixes?: string[];
}

export function networkPolicyEndpointPrefixListStructToTerraform(struct?: NetworkPolicyEndpointPrefixListStructOutputReference | NetworkPolicyEndpointPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function networkPolicyEndpointPrefixListStructToHclTerraform(struct?: NetworkPolicyEndpointPrefixListStructOutputReference | NetworkPolicyEndpointPrefixListStruct): any {
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

export class NetworkPolicyEndpointPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyEndpointPrefixListStruct | undefined {
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

  public set internalValue(value: NetworkPolicyEndpointPrefixListStruct | undefined) {
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
export interface NetworkPolicyEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#any NetworkPolicy#any}
  */
  readonly any?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#inside_endpoints NetworkPolicy#inside_endpoints}
  */
  readonly insideEndpoints?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#outside_endpoints NetworkPolicy#outside_endpoints}
  */
  readonly outsideEndpoints?: boolean | cdktf.IResolvable;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#label_selector NetworkPolicy#label_selector}
  */
  readonly labelSelector?: NetworkPolicyEndpointLabelSelector;
  /**
  * prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#prefix_list NetworkPolicy#prefix_list}
  */
  readonly prefixList?: NetworkPolicyEndpointPrefixListStruct;
}

export function networkPolicyEndpointToTerraform(struct?: NetworkPolicyEndpointOutputReference | NetworkPolicyEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any: cdktf.booleanToTerraform(struct!.any),
    inside_endpoints: cdktf.booleanToTerraform(struct!.insideEndpoints),
    outside_endpoints: cdktf.booleanToTerraform(struct!.outsideEndpoints),
    label_selector: networkPolicyEndpointLabelSelectorToTerraform(struct!.labelSelector),
    prefix_list: networkPolicyEndpointPrefixListStructToTerraform(struct!.prefixList),
  }
}


export function networkPolicyEndpointToHclTerraform(struct?: NetworkPolicyEndpointOutputReference | NetworkPolicyEndpoint): any {
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
      value: networkPolicyEndpointLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyEndpointLabelSelectorList",
    },
    prefix_list: {
      value: networkPolicyEndpointPrefixListStructToHclTerraform(struct!.prefixList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyEndpointPrefixListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyEndpoint | undefined {
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

  public set internalValue(value: NetworkPolicyEndpoint | undefined) {
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
  private _labelSelector = new NetworkPolicyEndpointLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: NetworkPolicyEndpointLabelSelector) {
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
  private _prefixList = new NetworkPolicyEndpointPrefixListStructOutputReference(this, "prefix_list");
  public get prefixList() {
    return this._prefixList;
  }
  public putPrefixList(value: NetworkPolicyEndpointPrefixListStruct) {
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
export interface NetworkPolicyRulesEgressRulesAdvAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#action NetworkPolicy#action}
  */
  readonly action?: string;
}

export function networkPolicyRulesEgressRulesAdvActionToTerraform(struct?: NetworkPolicyRulesEgressRulesAdvActionOutputReference | NetworkPolicyRulesEgressRulesAdvAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function networkPolicyRulesEgressRulesAdvActionToHclTerraform(struct?: NetworkPolicyRulesEgressRulesAdvActionOutputReference | NetworkPolicyRulesEgressRulesAdvAction): any {
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

export class NetworkPolicyRulesEgressRulesAdvActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyRulesEgressRulesAdvAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyRulesEgressRulesAdvAction | undefined) {
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
export interface NetworkPolicyRulesEgressRulesApplications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#applications NetworkPolicy#applications}
  */
  readonly applications?: string[];
}

export function networkPolicyRulesEgressRulesApplicationsToTerraform(struct?: NetworkPolicyRulesEgressRulesApplicationsOutputReference | NetworkPolicyRulesEgressRulesApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applications),
  }
}


export function networkPolicyRulesEgressRulesApplicationsToHclTerraform(struct?: NetworkPolicyRulesEgressRulesApplicationsOutputReference | NetworkPolicyRulesEgressRulesApplications): any {
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

export class NetworkPolicyRulesEgressRulesApplicationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyRulesEgressRulesApplications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyRulesEgressRulesApplications | undefined) {
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
export interface NetworkPolicyRulesEgressRulesIpPrefixSetRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#name NetworkPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#namespace NetworkPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#tenant NetworkPolicy#tenant}
  */
  readonly tenant?: string;
}

export function networkPolicyRulesEgressRulesIpPrefixSetRefToTerraform(struct?: NetworkPolicyRulesEgressRulesIpPrefixSetRef | cdktf.IResolvable): any {
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


export function networkPolicyRulesEgressRulesIpPrefixSetRefToHclTerraform(struct?: NetworkPolicyRulesEgressRulesIpPrefixSetRef | cdktf.IResolvable): any {
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

export class NetworkPolicyRulesEgressRulesIpPrefixSetRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyRulesEgressRulesIpPrefixSetRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkPolicyRulesEgressRulesIpPrefixSetRef | cdktf.IResolvable | undefined) {
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

export class NetworkPolicyRulesEgressRulesIpPrefixSetRefList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyRulesEgressRulesIpPrefixSetRef[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyRulesEgressRulesIpPrefixSetRefOutputReference {
    return new NetworkPolicyRulesEgressRulesIpPrefixSetRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyRulesEgressRulesIpPrefixSet {
  /**
  * ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#ref NetworkPolicy#ref}
  */
  readonly ref?: NetworkPolicyRulesEgressRulesIpPrefixSetRef[] | cdktf.IResolvable;
}

export function networkPolicyRulesEgressRulesIpPrefixSetToTerraform(struct?: NetworkPolicyRulesEgressRulesIpPrefixSetOutputReference | NetworkPolicyRulesEgressRulesIpPrefixSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: cdktf.listMapper(networkPolicyRulesEgressRulesIpPrefixSetRefToTerraform, true)(struct!.ref),
  }
}


export function networkPolicyRulesEgressRulesIpPrefixSetToHclTerraform(struct?: NetworkPolicyRulesEgressRulesIpPrefixSetOutputReference | NetworkPolicyRulesEgressRulesIpPrefixSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: cdktf.listMapperHcl(networkPolicyRulesEgressRulesIpPrefixSetRefToHclTerraform, true)(struct!.ref),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyRulesEgressRulesIpPrefixSetRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyRulesEgressRulesIpPrefixSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyRulesEgressRulesIpPrefixSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyRulesEgressRulesIpPrefixSet | undefined) {
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
  private _ref = new NetworkPolicyRulesEgressRulesIpPrefixSetRefList(this, "ref", false);
  public get ref() {
    return this._ref;
  }
  public putRef(value: NetworkPolicyRulesEgressRulesIpPrefixSetRef[] | cdktf.IResolvable) {
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
export interface NetworkPolicyRulesEgressRulesLabelMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#keys NetworkPolicy#keys}
  */
  readonly keys?: string[];
}

export function networkPolicyRulesEgressRulesLabelMatcherToTerraform(struct?: NetworkPolicyRulesEgressRulesLabelMatcherOutputReference | NetworkPolicyRulesEgressRulesLabelMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
  }
}


export function networkPolicyRulesEgressRulesLabelMatcherToHclTerraform(struct?: NetworkPolicyRulesEgressRulesLabelMatcherOutputReference | NetworkPolicyRulesEgressRulesLabelMatcher): any {
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

export class NetworkPolicyRulesEgressRulesLabelMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyRulesEgressRulesLabelMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyRulesEgressRulesLabelMatcher | undefined) {
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
export interface NetworkPolicyRulesEgressRulesLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#expressions NetworkPolicy#expressions}
  */
  readonly expressions: string[];
}

export function networkPolicyRulesEgressRulesLabelSelectorToTerraform(struct?: NetworkPolicyRulesEgressRulesLabelSelectorOutputReference | NetworkPolicyRulesEgressRulesLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function networkPolicyRulesEgressRulesLabelSelectorToHclTerraform(struct?: NetworkPolicyRulesEgressRulesLabelSelectorOutputReference | NetworkPolicyRulesEgressRulesLabelSelector): any {
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

export class NetworkPolicyRulesEgressRulesLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyRulesEgressRulesLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyRulesEgressRulesLabelSelector | undefined) {
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
export interface NetworkPolicyRulesEgressRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#description NetworkPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#name NetworkPolicy#name}
  */
  readonly name: string;
}

export function networkPolicyRulesEgressRulesMetadataToTerraform(struct?: NetworkPolicyRulesEgressRulesMetadataOutputReference | NetworkPolicyRulesEgressRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function networkPolicyRulesEgressRulesMetadataToHclTerraform(struct?: NetworkPolicyRulesEgressRulesMetadataOutputReference | NetworkPolicyRulesEgressRulesMetadata): any {
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

export class NetworkPolicyRulesEgressRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyRulesEgressRulesMetadata | undefined {
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

  public set internalValue(value: NetworkPolicyRulesEgressRulesMetadata | undefined) {
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
export interface NetworkPolicyRulesEgressRulesPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#ipv6_prefixes NetworkPolicy#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#prefixes NetworkPolicy#prefixes}
  */
  readonly prefixes?: string[];
}

export function networkPolicyRulesEgressRulesPrefixListStructToTerraform(struct?: NetworkPolicyRulesEgressRulesPrefixListStructOutputReference | NetworkPolicyRulesEgressRulesPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function networkPolicyRulesEgressRulesPrefixListStructToHclTerraform(struct?: NetworkPolicyRulesEgressRulesPrefixListStructOutputReference | NetworkPolicyRulesEgressRulesPrefixListStruct): any {
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

export class NetworkPolicyRulesEgressRulesPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyRulesEgressRulesPrefixListStruct | undefined {
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

  public set internalValue(value: NetworkPolicyRulesEgressRulesPrefixListStruct | undefined) {
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
export interface NetworkPolicyRulesEgressRulesProtocolPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#port_ranges NetworkPolicy#port_ranges}
  */
  readonly portRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#protocol NetworkPolicy#protocol}
  */
  readonly protocol?: string;
}

export function networkPolicyRulesEgressRulesProtocolPortRangeToTerraform(struct?: NetworkPolicyRulesEgressRulesProtocolPortRangeOutputReference | NetworkPolicyRulesEgressRulesProtocolPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portRanges),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function networkPolicyRulesEgressRulesProtocolPortRangeToHclTerraform(struct?: NetworkPolicyRulesEgressRulesProtocolPortRangeOutputReference | NetworkPolicyRulesEgressRulesProtocolPortRange): any {
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

export class NetworkPolicyRulesEgressRulesProtocolPortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyRulesEgressRulesProtocolPortRange | undefined {
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

  public set internalValue(value: NetworkPolicyRulesEgressRulesProtocolPortRange | undefined) {
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
export interface NetworkPolicyRulesEgressRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#action NetworkPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#all_tcp_traffic NetworkPolicy#all_tcp_traffic}
  */
  readonly allTcpTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#all_traffic NetworkPolicy#all_traffic}
  */
  readonly allTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#all_udp_traffic NetworkPolicy#all_udp_traffic}
  */
  readonly allUdpTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#any NetworkPolicy#any}
  */
  readonly any?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#inside_endpoints NetworkPolicy#inside_endpoints}
  */
  readonly insideEndpoints?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#outside_endpoints NetworkPolicy#outside_endpoints}
  */
  readonly outsideEndpoints?: boolean | cdktf.IResolvable;
  /**
  * adv_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#adv_action NetworkPolicy#adv_action}
  */
  readonly advAction?: NetworkPolicyRulesEgressRulesAdvAction;
  /**
  * applications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#applications NetworkPolicy#applications}
  */
  readonly applications?: NetworkPolicyRulesEgressRulesApplications;
  /**
  * ip_prefix_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#ip_prefix_set NetworkPolicy#ip_prefix_set}
  */
  readonly ipPrefixSet?: NetworkPolicyRulesEgressRulesIpPrefixSet;
  /**
  * label_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#label_matcher NetworkPolicy#label_matcher}
  */
  readonly labelMatcher?: NetworkPolicyRulesEgressRulesLabelMatcher;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#label_selector NetworkPolicy#label_selector}
  */
  readonly labelSelector?: NetworkPolicyRulesEgressRulesLabelSelector;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#metadata NetworkPolicy#metadata}
  */
  readonly metadata: NetworkPolicyRulesEgressRulesMetadata;
  /**
  * prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#prefix_list NetworkPolicy#prefix_list}
  */
  readonly prefixList?: NetworkPolicyRulesEgressRulesPrefixListStruct;
  /**
  * protocol_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#protocol_port_range NetworkPolicy#protocol_port_range}
  */
  readonly protocolPortRange?: NetworkPolicyRulesEgressRulesProtocolPortRange;
}

export function networkPolicyRulesEgressRulesToTerraform(struct?: NetworkPolicyRulesEgressRules | cdktf.IResolvable): any {
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
    adv_action: networkPolicyRulesEgressRulesAdvActionToTerraform(struct!.advAction),
    applications: networkPolicyRulesEgressRulesApplicationsToTerraform(struct!.applications),
    ip_prefix_set: networkPolicyRulesEgressRulesIpPrefixSetToTerraform(struct!.ipPrefixSet),
    label_matcher: networkPolicyRulesEgressRulesLabelMatcherToTerraform(struct!.labelMatcher),
    label_selector: networkPolicyRulesEgressRulesLabelSelectorToTerraform(struct!.labelSelector),
    metadata: networkPolicyRulesEgressRulesMetadataToTerraform(struct!.metadata),
    prefix_list: networkPolicyRulesEgressRulesPrefixListStructToTerraform(struct!.prefixList),
    protocol_port_range: networkPolicyRulesEgressRulesProtocolPortRangeToTerraform(struct!.protocolPortRange),
  }
}


export function networkPolicyRulesEgressRulesToHclTerraform(struct?: NetworkPolicyRulesEgressRules | cdktf.IResolvable): any {
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
      value: networkPolicyRulesEgressRulesAdvActionToHclTerraform(struct!.advAction),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyRulesEgressRulesAdvActionList",
    },
    applications: {
      value: networkPolicyRulesEgressRulesApplicationsToHclTerraform(struct!.applications),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyRulesEgressRulesApplicationsList",
    },
    ip_prefix_set: {
      value: networkPolicyRulesEgressRulesIpPrefixSetToHclTerraform(struct!.ipPrefixSet),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyRulesEgressRulesIpPrefixSetList",
    },
    label_matcher: {
      value: networkPolicyRulesEgressRulesLabelMatcherToHclTerraform(struct!.labelMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyRulesEgressRulesLabelMatcherList",
    },
    label_selector: {
      value: networkPolicyRulesEgressRulesLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyRulesEgressRulesLabelSelectorList",
    },
    metadata: {
      value: networkPolicyRulesEgressRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyRulesEgressRulesMetadataList",
    },
    prefix_list: {
      value: networkPolicyRulesEgressRulesPrefixListStructToHclTerraform(struct!.prefixList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyRulesEgressRulesPrefixListStructList",
    },
    protocol_port_range: {
      value: networkPolicyRulesEgressRulesProtocolPortRangeToHclTerraform(struct!.protocolPortRange),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyRulesEgressRulesProtocolPortRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyRulesEgressRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyRulesEgressRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkPolicyRulesEgressRules | cdktf.IResolvable | undefined) {
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
  private _advAction = new NetworkPolicyRulesEgressRulesAdvActionOutputReference(this, "adv_action");
  public get advAction() {
    return this._advAction;
  }
  public putAdvAction(value: NetworkPolicyRulesEgressRulesAdvAction) {
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
  private _applications = new NetworkPolicyRulesEgressRulesApplicationsOutputReference(this, "applications");
  public get applications() {
    return this._applications;
  }
  public putApplications(value: NetworkPolicyRulesEgressRulesApplications) {
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
  private _ipPrefixSet = new NetworkPolicyRulesEgressRulesIpPrefixSetOutputReference(this, "ip_prefix_set");
  public get ipPrefixSet() {
    return this._ipPrefixSet;
  }
  public putIpPrefixSet(value: NetworkPolicyRulesEgressRulesIpPrefixSet) {
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
  private _labelMatcher = new NetworkPolicyRulesEgressRulesLabelMatcherOutputReference(this, "label_matcher");
  public get labelMatcher() {
    return this._labelMatcher;
  }
  public putLabelMatcher(value: NetworkPolicyRulesEgressRulesLabelMatcher) {
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
  private _labelSelector = new NetworkPolicyRulesEgressRulesLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: NetworkPolicyRulesEgressRulesLabelSelector) {
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
  private _metadata = new NetworkPolicyRulesEgressRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: NetworkPolicyRulesEgressRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList = new NetworkPolicyRulesEgressRulesPrefixListStructOutputReference(this, "prefix_list");
  public get prefixList() {
    return this._prefixList;
  }
  public putPrefixList(value: NetworkPolicyRulesEgressRulesPrefixListStruct) {
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
  private _protocolPortRange = new NetworkPolicyRulesEgressRulesProtocolPortRangeOutputReference(this, "protocol_port_range");
  public get protocolPortRange() {
    return this._protocolPortRange;
  }
  public putProtocolPortRange(value: NetworkPolicyRulesEgressRulesProtocolPortRange) {
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

export class NetworkPolicyRulesEgressRulesList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyRulesEgressRules[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyRulesEgressRulesOutputReference {
    return new NetworkPolicyRulesEgressRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyRulesIngressRulesAdvAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#action NetworkPolicy#action}
  */
  readonly action?: string;
}

export function networkPolicyRulesIngressRulesAdvActionToTerraform(struct?: NetworkPolicyRulesIngressRulesAdvActionOutputReference | NetworkPolicyRulesIngressRulesAdvAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function networkPolicyRulesIngressRulesAdvActionToHclTerraform(struct?: NetworkPolicyRulesIngressRulesAdvActionOutputReference | NetworkPolicyRulesIngressRulesAdvAction): any {
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

export class NetworkPolicyRulesIngressRulesAdvActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyRulesIngressRulesAdvAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyRulesIngressRulesAdvAction | undefined) {
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
export interface NetworkPolicyRulesIngressRulesApplications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#applications NetworkPolicy#applications}
  */
  readonly applications?: string[];
}

export function networkPolicyRulesIngressRulesApplicationsToTerraform(struct?: NetworkPolicyRulesIngressRulesApplicationsOutputReference | NetworkPolicyRulesIngressRulesApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applications),
  }
}


export function networkPolicyRulesIngressRulesApplicationsToHclTerraform(struct?: NetworkPolicyRulesIngressRulesApplicationsOutputReference | NetworkPolicyRulesIngressRulesApplications): any {
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

export class NetworkPolicyRulesIngressRulesApplicationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyRulesIngressRulesApplications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyRulesIngressRulesApplications | undefined) {
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
export interface NetworkPolicyRulesIngressRulesIpPrefixSetRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#name NetworkPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#namespace NetworkPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#tenant NetworkPolicy#tenant}
  */
  readonly tenant?: string;
}

export function networkPolicyRulesIngressRulesIpPrefixSetRefToTerraform(struct?: NetworkPolicyRulesIngressRulesIpPrefixSetRef | cdktf.IResolvable): any {
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


export function networkPolicyRulesIngressRulesIpPrefixSetRefToHclTerraform(struct?: NetworkPolicyRulesIngressRulesIpPrefixSetRef | cdktf.IResolvable): any {
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

export class NetworkPolicyRulesIngressRulesIpPrefixSetRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyRulesIngressRulesIpPrefixSetRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkPolicyRulesIngressRulesIpPrefixSetRef | cdktf.IResolvable | undefined) {
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

export class NetworkPolicyRulesIngressRulesIpPrefixSetRefList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyRulesIngressRulesIpPrefixSetRef[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyRulesIngressRulesIpPrefixSetRefOutputReference {
    return new NetworkPolicyRulesIngressRulesIpPrefixSetRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyRulesIngressRulesIpPrefixSet {
  /**
  * ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#ref NetworkPolicy#ref}
  */
  readonly ref?: NetworkPolicyRulesIngressRulesIpPrefixSetRef[] | cdktf.IResolvable;
}

export function networkPolicyRulesIngressRulesIpPrefixSetToTerraform(struct?: NetworkPolicyRulesIngressRulesIpPrefixSetOutputReference | NetworkPolicyRulesIngressRulesIpPrefixSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: cdktf.listMapper(networkPolicyRulesIngressRulesIpPrefixSetRefToTerraform, true)(struct!.ref),
  }
}


export function networkPolicyRulesIngressRulesIpPrefixSetToHclTerraform(struct?: NetworkPolicyRulesIngressRulesIpPrefixSetOutputReference | NetworkPolicyRulesIngressRulesIpPrefixSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: cdktf.listMapperHcl(networkPolicyRulesIngressRulesIpPrefixSetRefToHclTerraform, true)(struct!.ref),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyRulesIngressRulesIpPrefixSetRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyRulesIngressRulesIpPrefixSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyRulesIngressRulesIpPrefixSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyRulesIngressRulesIpPrefixSet | undefined) {
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
  private _ref = new NetworkPolicyRulesIngressRulesIpPrefixSetRefList(this, "ref", false);
  public get ref() {
    return this._ref;
  }
  public putRef(value: NetworkPolicyRulesIngressRulesIpPrefixSetRef[] | cdktf.IResolvable) {
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
export interface NetworkPolicyRulesIngressRulesLabelMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#keys NetworkPolicy#keys}
  */
  readonly keys?: string[];
}

export function networkPolicyRulesIngressRulesLabelMatcherToTerraform(struct?: NetworkPolicyRulesIngressRulesLabelMatcherOutputReference | NetworkPolicyRulesIngressRulesLabelMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
  }
}


export function networkPolicyRulesIngressRulesLabelMatcherToHclTerraform(struct?: NetworkPolicyRulesIngressRulesLabelMatcherOutputReference | NetworkPolicyRulesIngressRulesLabelMatcher): any {
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

export class NetworkPolicyRulesIngressRulesLabelMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyRulesIngressRulesLabelMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyRulesIngressRulesLabelMatcher | undefined) {
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
export interface NetworkPolicyRulesIngressRulesLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#expressions NetworkPolicy#expressions}
  */
  readonly expressions: string[];
}

export function networkPolicyRulesIngressRulesLabelSelectorToTerraform(struct?: NetworkPolicyRulesIngressRulesLabelSelectorOutputReference | NetworkPolicyRulesIngressRulesLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function networkPolicyRulesIngressRulesLabelSelectorToHclTerraform(struct?: NetworkPolicyRulesIngressRulesLabelSelectorOutputReference | NetworkPolicyRulesIngressRulesLabelSelector): any {
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

export class NetworkPolicyRulesIngressRulesLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyRulesIngressRulesLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyRulesIngressRulesLabelSelector | undefined) {
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
export interface NetworkPolicyRulesIngressRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#description NetworkPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#name NetworkPolicy#name}
  */
  readonly name: string;
}

export function networkPolicyRulesIngressRulesMetadataToTerraform(struct?: NetworkPolicyRulesIngressRulesMetadataOutputReference | NetworkPolicyRulesIngressRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function networkPolicyRulesIngressRulesMetadataToHclTerraform(struct?: NetworkPolicyRulesIngressRulesMetadataOutputReference | NetworkPolicyRulesIngressRulesMetadata): any {
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

export class NetworkPolicyRulesIngressRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyRulesIngressRulesMetadata | undefined {
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

  public set internalValue(value: NetworkPolicyRulesIngressRulesMetadata | undefined) {
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
export interface NetworkPolicyRulesIngressRulesPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#ipv6_prefixes NetworkPolicy#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#prefixes NetworkPolicy#prefixes}
  */
  readonly prefixes?: string[];
}

export function networkPolicyRulesIngressRulesPrefixListStructToTerraform(struct?: NetworkPolicyRulesIngressRulesPrefixListStructOutputReference | NetworkPolicyRulesIngressRulesPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function networkPolicyRulesIngressRulesPrefixListStructToHclTerraform(struct?: NetworkPolicyRulesIngressRulesPrefixListStructOutputReference | NetworkPolicyRulesIngressRulesPrefixListStruct): any {
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

export class NetworkPolicyRulesIngressRulesPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyRulesIngressRulesPrefixListStruct | undefined {
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

  public set internalValue(value: NetworkPolicyRulesIngressRulesPrefixListStruct | undefined) {
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
export interface NetworkPolicyRulesIngressRulesProtocolPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#port_ranges NetworkPolicy#port_ranges}
  */
  readonly portRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#protocol NetworkPolicy#protocol}
  */
  readonly protocol?: string;
}

export function networkPolicyRulesIngressRulesProtocolPortRangeToTerraform(struct?: NetworkPolicyRulesIngressRulesProtocolPortRangeOutputReference | NetworkPolicyRulesIngressRulesProtocolPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portRanges),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function networkPolicyRulesIngressRulesProtocolPortRangeToHclTerraform(struct?: NetworkPolicyRulesIngressRulesProtocolPortRangeOutputReference | NetworkPolicyRulesIngressRulesProtocolPortRange): any {
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

export class NetworkPolicyRulesIngressRulesProtocolPortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyRulesIngressRulesProtocolPortRange | undefined {
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

  public set internalValue(value: NetworkPolicyRulesIngressRulesProtocolPortRange | undefined) {
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
export interface NetworkPolicyRulesIngressRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#action NetworkPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#all_tcp_traffic NetworkPolicy#all_tcp_traffic}
  */
  readonly allTcpTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#all_traffic NetworkPolicy#all_traffic}
  */
  readonly allTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#all_udp_traffic NetworkPolicy#all_udp_traffic}
  */
  readonly allUdpTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#any NetworkPolicy#any}
  */
  readonly any?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#inside_endpoints NetworkPolicy#inside_endpoints}
  */
  readonly insideEndpoints?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#outside_endpoints NetworkPolicy#outside_endpoints}
  */
  readonly outsideEndpoints?: boolean | cdktf.IResolvable;
  /**
  * adv_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#adv_action NetworkPolicy#adv_action}
  */
  readonly advAction?: NetworkPolicyRulesIngressRulesAdvAction;
  /**
  * applications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#applications NetworkPolicy#applications}
  */
  readonly applications?: NetworkPolicyRulesIngressRulesApplications;
  /**
  * ip_prefix_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#ip_prefix_set NetworkPolicy#ip_prefix_set}
  */
  readonly ipPrefixSet?: NetworkPolicyRulesIngressRulesIpPrefixSet;
  /**
  * label_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#label_matcher NetworkPolicy#label_matcher}
  */
  readonly labelMatcher?: NetworkPolicyRulesIngressRulesLabelMatcher;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#label_selector NetworkPolicy#label_selector}
  */
  readonly labelSelector?: NetworkPolicyRulesIngressRulesLabelSelector;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#metadata NetworkPolicy#metadata}
  */
  readonly metadata: NetworkPolicyRulesIngressRulesMetadata;
  /**
  * prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#prefix_list NetworkPolicy#prefix_list}
  */
  readonly prefixList?: NetworkPolicyRulesIngressRulesPrefixListStruct;
  /**
  * protocol_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#protocol_port_range NetworkPolicy#protocol_port_range}
  */
  readonly protocolPortRange?: NetworkPolicyRulesIngressRulesProtocolPortRange;
}

export function networkPolicyRulesIngressRulesToTerraform(struct?: NetworkPolicyRulesIngressRules | cdktf.IResolvable): any {
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
    adv_action: networkPolicyRulesIngressRulesAdvActionToTerraform(struct!.advAction),
    applications: networkPolicyRulesIngressRulesApplicationsToTerraform(struct!.applications),
    ip_prefix_set: networkPolicyRulesIngressRulesIpPrefixSetToTerraform(struct!.ipPrefixSet),
    label_matcher: networkPolicyRulesIngressRulesLabelMatcherToTerraform(struct!.labelMatcher),
    label_selector: networkPolicyRulesIngressRulesLabelSelectorToTerraform(struct!.labelSelector),
    metadata: networkPolicyRulesIngressRulesMetadataToTerraform(struct!.metadata),
    prefix_list: networkPolicyRulesIngressRulesPrefixListStructToTerraform(struct!.prefixList),
    protocol_port_range: networkPolicyRulesIngressRulesProtocolPortRangeToTerraform(struct!.protocolPortRange),
  }
}


export function networkPolicyRulesIngressRulesToHclTerraform(struct?: NetworkPolicyRulesIngressRules | cdktf.IResolvable): any {
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
      value: networkPolicyRulesIngressRulesAdvActionToHclTerraform(struct!.advAction),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyRulesIngressRulesAdvActionList",
    },
    applications: {
      value: networkPolicyRulesIngressRulesApplicationsToHclTerraform(struct!.applications),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyRulesIngressRulesApplicationsList",
    },
    ip_prefix_set: {
      value: networkPolicyRulesIngressRulesIpPrefixSetToHclTerraform(struct!.ipPrefixSet),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyRulesIngressRulesIpPrefixSetList",
    },
    label_matcher: {
      value: networkPolicyRulesIngressRulesLabelMatcherToHclTerraform(struct!.labelMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyRulesIngressRulesLabelMatcherList",
    },
    label_selector: {
      value: networkPolicyRulesIngressRulesLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyRulesIngressRulesLabelSelectorList",
    },
    metadata: {
      value: networkPolicyRulesIngressRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyRulesIngressRulesMetadataList",
    },
    prefix_list: {
      value: networkPolicyRulesIngressRulesPrefixListStructToHclTerraform(struct!.prefixList),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyRulesIngressRulesPrefixListStructList",
    },
    protocol_port_range: {
      value: networkPolicyRulesIngressRulesProtocolPortRangeToHclTerraform(struct!.protocolPortRange),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyRulesIngressRulesProtocolPortRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyRulesIngressRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkPolicyRulesIngressRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkPolicyRulesIngressRules | cdktf.IResolvable | undefined) {
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
  private _advAction = new NetworkPolicyRulesIngressRulesAdvActionOutputReference(this, "adv_action");
  public get advAction() {
    return this._advAction;
  }
  public putAdvAction(value: NetworkPolicyRulesIngressRulesAdvAction) {
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
  private _applications = new NetworkPolicyRulesIngressRulesApplicationsOutputReference(this, "applications");
  public get applications() {
    return this._applications;
  }
  public putApplications(value: NetworkPolicyRulesIngressRulesApplications) {
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
  private _ipPrefixSet = new NetworkPolicyRulesIngressRulesIpPrefixSetOutputReference(this, "ip_prefix_set");
  public get ipPrefixSet() {
    return this._ipPrefixSet;
  }
  public putIpPrefixSet(value: NetworkPolicyRulesIngressRulesIpPrefixSet) {
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
  private _labelMatcher = new NetworkPolicyRulesIngressRulesLabelMatcherOutputReference(this, "label_matcher");
  public get labelMatcher() {
    return this._labelMatcher;
  }
  public putLabelMatcher(value: NetworkPolicyRulesIngressRulesLabelMatcher) {
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
  private _labelSelector = new NetworkPolicyRulesIngressRulesLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: NetworkPolicyRulesIngressRulesLabelSelector) {
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
  private _metadata = new NetworkPolicyRulesIngressRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: NetworkPolicyRulesIngressRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList = new NetworkPolicyRulesIngressRulesPrefixListStructOutputReference(this, "prefix_list");
  public get prefixList() {
    return this._prefixList;
  }
  public putPrefixList(value: NetworkPolicyRulesIngressRulesPrefixListStruct) {
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
  private _protocolPortRange = new NetworkPolicyRulesIngressRulesProtocolPortRangeOutputReference(this, "protocol_port_range");
  public get protocolPortRange() {
    return this._protocolPortRange;
  }
  public putProtocolPortRange(value: NetworkPolicyRulesIngressRulesProtocolPortRange) {
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

export class NetworkPolicyRulesIngressRulesList extends cdktf.ComplexList {
  public internalValue? : NetworkPolicyRulesIngressRules[] | cdktf.IResolvable

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
  public get(index: number): NetworkPolicyRulesIngressRulesOutputReference {
    return new NetworkPolicyRulesIngressRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkPolicyRules {
  /**
  * egress_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#egress_rules NetworkPolicy#egress_rules}
  */
  readonly egressRules?: NetworkPolicyRulesEgressRules[] | cdktf.IResolvable;
  /**
  * ingress_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#ingress_rules NetworkPolicy#ingress_rules}
  */
  readonly ingressRules?: NetworkPolicyRulesIngressRules[] | cdktf.IResolvable;
}

export function networkPolicyRulesToTerraform(struct?: NetworkPolicyRulesOutputReference | NetworkPolicyRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_rules: cdktf.listMapper(networkPolicyRulesEgressRulesToTerraform, true)(struct!.egressRules),
    ingress_rules: cdktf.listMapper(networkPolicyRulesIngressRulesToTerraform, true)(struct!.ingressRules),
  }
}


export function networkPolicyRulesToHclTerraform(struct?: NetworkPolicyRulesOutputReference | NetworkPolicyRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_rules: {
      value: cdktf.listMapperHcl(networkPolicyRulesEgressRulesToHclTerraform, true)(struct!.egressRules),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyRulesEgressRulesList",
    },
    ingress_rules: {
      value: cdktf.listMapperHcl(networkPolicyRulesIngressRulesToHclTerraform, true)(struct!.ingressRules),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkPolicyRulesIngressRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkPolicyRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkPolicyRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressRules = this._egressRules?.internalValue;
    }
    if (this._ingressRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressRules = this._ingressRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkPolicyRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._egressRules.internalValue = undefined;
      this._ingressRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._egressRules.internalValue = value.egressRules;
      this._ingressRules.internalValue = value.ingressRules;
    }
  }

  // egress_rules - computed: false, optional: true, required: false
  private _egressRules = new NetworkPolicyRulesEgressRulesList(this, "egress_rules", false);
  public get egressRules() {
    return this._egressRules;
  }
  public putEgressRules(value: NetworkPolicyRulesEgressRules[] | cdktf.IResolvable) {
    this._egressRules.internalValue = value;
  }
  public resetEgressRules() {
    this._egressRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressRulesInput() {
    return this._egressRules.internalValue;
  }

  // ingress_rules - computed: false, optional: true, required: false
  private _ingressRules = new NetworkPolicyRulesIngressRulesList(this, "ingress_rules", false);
  public get ingressRules() {
    return this._ingressRules;
  }
  public putIngressRules(value: NetworkPolicyRulesIngressRules[] | cdktf.IResolvable) {
    this._ingressRules.internalValue = value;
  }
  public resetIngressRules() {
    this._ingressRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressRulesInput() {
    return this._ingressRules.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy volterra_network_policy}
*/
export class NetworkPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_network_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkPolicy to import
  * @param importFromId The id of the existing NetworkPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_network_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/network_policy volterra_network_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_network_policy',
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
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._endpoint.internalValue = config.endpoint;
    this._rules.internalValue = config.rules;
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

  // endpoint - computed: false, optional: false, required: true
  private _endpoint = new NetworkPolicyEndpointOutputReference(this, "endpoint");
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: NetworkPolicyEndpoint) {
    this._endpoint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new NetworkPolicyRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: NetworkPolicyRules) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
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
      endpoint: networkPolicyEndpointToTerraform(this._endpoint.internalValue),
      rules: networkPolicyRulesToTerraform(this._rules.internalValue),
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
      endpoint: {
        value: networkPolicyEndpointToHclTerraform(this._endpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkPolicyEndpointList",
      },
      rules: {
        value: networkPolicyRulesToHclTerraform(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkPolicyRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
