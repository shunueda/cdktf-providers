// https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpRoutingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#annotations BgpRoutingPolicy#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#description BgpRoutingPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#disable BgpRoutingPolicy#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#id BgpRoutingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#labels BgpRoutingPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#name BgpRoutingPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#namespace BgpRoutingPolicy#namespace}
  */
  readonly namespace: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#rules BgpRoutingPolicy#rules}
  */
  readonly rules: BgpRoutingPolicyRules[] | cdktf.IResolvable;
}
export interface BgpRoutingPolicyRulesActionCommunity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#community BgpRoutingPolicy#community}
  */
  readonly community: string[];
}

export function bgpRoutingPolicyRulesActionCommunityToTerraform(struct?: BgpRoutingPolicyRulesActionCommunityOutputReference | BgpRoutingPolicyRulesActionCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.community),
  }
}


export function bgpRoutingPolicyRulesActionCommunityToHclTerraform(struct?: BgpRoutingPolicyRulesActionCommunityOutputReference | BgpRoutingPolicyRulesActionCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.community),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRoutingPolicyRulesActionCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpRoutingPolicyRulesActionCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._community !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRoutingPolicyRulesActionCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._community = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._community = value.community;
    }
  }

  // community - computed: false, optional: false, required: true
  private _community?: string[]; 
  public get community() {
    return this.getListAttribute('community');
  }
  public set community(value: string[]) {
    this._community = value;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
  }
}
export interface BgpRoutingPolicyRulesAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#aggregate BgpRoutingPolicy#aggregate}
  */
  readonly aggregate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#allow BgpRoutingPolicy#allow}
  */
  readonly allow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#as_path BgpRoutingPolicy#as_path}
  */
  readonly asPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#deny BgpRoutingPolicy#deny}
  */
  readonly deny?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#local_preference BgpRoutingPolicy#local_preference}
  */
  readonly localPreference?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#metric BgpRoutingPolicy#metric}
  */
  readonly metric?: number;
  /**
  * community block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#community BgpRoutingPolicy#community}
  */
  readonly community?: BgpRoutingPolicyRulesActionCommunity;
}

export function bgpRoutingPolicyRulesActionToTerraform(struct?: BgpRoutingPolicyRulesActionOutputReference | BgpRoutingPolicyRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate: cdktf.booleanToTerraform(struct!.aggregate),
    allow: cdktf.booleanToTerraform(struct!.allow),
    as_path: cdktf.stringToTerraform(struct!.asPath),
    deny: cdktf.booleanToTerraform(struct!.deny),
    local_preference: cdktf.numberToTerraform(struct!.localPreference),
    metric: cdktf.numberToTerraform(struct!.metric),
    community: bgpRoutingPolicyRulesActionCommunityToTerraform(struct!.community),
  }
}


export function bgpRoutingPolicyRulesActionToHclTerraform(struct?: BgpRoutingPolicyRulesActionOutputReference | BgpRoutingPolicyRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregate: {
      value: cdktf.booleanToHclTerraform(struct!.aggregate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow: {
      value: cdktf.booleanToHclTerraform(struct!.allow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    as_path: {
      value: cdktf.stringToHclTerraform(struct!.asPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deny: {
      value: cdktf.booleanToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_preference: {
      value: cdktf.numberToHclTerraform(struct!.localPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    community: {
      value: bgpRoutingPolicyRulesActionCommunityToHclTerraform(struct!.community),
      isBlock: true,
      type: "list",
      storageClassType: "BgpRoutingPolicyRulesActionCommunityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRoutingPolicyRulesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpRoutingPolicyRulesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregate !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregate = this._aggregate;
    }
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._asPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPath = this._asPath;
    }
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    if (this._localPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._community?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRoutingPolicyRulesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregate = undefined;
      this._allow = undefined;
      this._asPath = undefined;
      this._deny = undefined;
      this._localPreference = undefined;
      this._metric = undefined;
      this._community.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregate = value.aggregate;
      this._allow = value.allow;
      this._asPath = value.asPath;
      this._deny = value.deny;
      this._localPreference = value.localPreference;
      this._metric = value.metric;
      this._community.internalValue = value.community;
    }
  }

  // aggregate - computed: false, optional: true, required: false
  private _aggregate?: boolean | cdktf.IResolvable; 
  public get aggregate() {
    return this.getBooleanAttribute('aggregate');
  }
  public set aggregate(value: boolean | cdktf.IResolvable) {
    this._aggregate = value;
  }
  public resetAggregate() {
    this._aggregate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateInput() {
    return this._aggregate;
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: boolean | cdktf.IResolvable; 
  public get allow() {
    return this.getBooleanAttribute('allow');
  }
  public set allow(value: boolean | cdktf.IResolvable) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // as_path - computed: false, optional: true, required: false
  private _asPath?: string; 
  public get asPath() {
    return this.getStringAttribute('as_path');
  }
  public set asPath(value: string) {
    this._asPath = value;
  }
  public resetAsPath() {
    this._asPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathInput() {
    return this._asPath;
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: boolean | cdktf.IResolvable; 
  public get deny() {
    return this.getBooleanAttribute('deny');
  }
  public set deny(value: boolean | cdktf.IResolvable) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }

  // local_preference - computed: false, optional: true, required: false
  private _localPreference?: number; 
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }
  public set localPreference(value: number) {
    this._localPreference = value;
  }
  public resetLocalPreference() {
    this._localPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPreferenceInput() {
    return this._localPreference;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // community - computed: false, optional: true, required: false
  private _community = new BgpRoutingPolicyRulesActionCommunityOutputReference(this, "community");
  public get community() {
    return this._community;
  }
  public putCommunity(value: BgpRoutingPolicyRulesActionCommunity) {
    this._community.internalValue = value;
  }
  public resetCommunity() {
    this._community.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community.internalValue;
  }
}
export interface BgpRoutingPolicyRulesMatchCommunity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#community BgpRoutingPolicy#community}
  */
  readonly community: string[];
}

export function bgpRoutingPolicyRulesMatchCommunityToTerraform(struct?: BgpRoutingPolicyRulesMatchCommunityOutputReference | BgpRoutingPolicyRulesMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.community),
  }
}


export function bgpRoutingPolicyRulesMatchCommunityToHclTerraform(struct?: BgpRoutingPolicyRulesMatchCommunityOutputReference | BgpRoutingPolicyRulesMatchCommunity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.community),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRoutingPolicyRulesMatchCommunityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpRoutingPolicyRulesMatchCommunity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._community !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRoutingPolicyRulesMatchCommunity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._community = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._community = value.community;
    }
  }

  // community - computed: false, optional: false, required: true
  private _community?: string[]; 
  public get community() {
    return this.getListAttribute('community');
  }
  public set community(value: string[]) {
    this._community = value;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
  }
}
export interface BgpRoutingPolicyRulesMatchIpPrefixesPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#equal_or_longer_than BgpRoutingPolicy#equal_or_longer_than}
  */
  readonly equalOrLongerThan?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#exact_match BgpRoutingPolicy#exact_match}
  */
  readonly exactMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#ip_prefixes BgpRoutingPolicy#ip_prefixes}
  */
  readonly ipPrefixes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#longer_than BgpRoutingPolicy#longer_than}
  */
  readonly longerThan?: boolean | cdktf.IResolvable;
}

export function bgpRoutingPolicyRulesMatchIpPrefixesPrefixesToTerraform(struct?: BgpRoutingPolicyRulesMatchIpPrefixesPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    equal_or_longer_than: cdktf.booleanToTerraform(struct!.equalOrLongerThan),
    exact_match: cdktf.booleanToTerraform(struct!.exactMatch),
    ip_prefixes: cdktf.stringToTerraform(struct!.ipPrefixes),
    longer_than: cdktf.booleanToTerraform(struct!.longerThan),
  }
}


export function bgpRoutingPolicyRulesMatchIpPrefixesPrefixesToHclTerraform(struct?: BgpRoutingPolicyRulesMatchIpPrefixesPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    equal_or_longer_than: {
      value: cdktf.booleanToHclTerraform(struct!.equalOrLongerThan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exact_match: {
      value: cdktf.booleanToHclTerraform(struct!.exactMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_prefixes: {
      value: cdktf.stringToHclTerraform(struct!.ipPrefixes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    longer_than: {
      value: cdktf.booleanToHclTerraform(struct!.longerThan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRoutingPolicyRulesMatchIpPrefixesPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpRoutingPolicyRulesMatchIpPrefixesPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._equalOrLongerThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalOrLongerThan = this._equalOrLongerThan;
    }
    if (this._exactMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactMatch = this._exactMatch;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._longerThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.longerThan = this._longerThan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRoutingPolicyRulesMatchIpPrefixesPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._equalOrLongerThan = undefined;
      this._exactMatch = undefined;
      this._ipPrefixes = undefined;
      this._longerThan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._equalOrLongerThan = value.equalOrLongerThan;
      this._exactMatch = value.exactMatch;
      this._ipPrefixes = value.ipPrefixes;
      this._longerThan = value.longerThan;
    }
  }

  // equal_or_longer_than - computed: false, optional: true, required: false
  private _equalOrLongerThan?: boolean | cdktf.IResolvable; 
  public get equalOrLongerThan() {
    return this.getBooleanAttribute('equal_or_longer_than');
  }
  public set equalOrLongerThan(value: boolean | cdktf.IResolvable) {
    this._equalOrLongerThan = value;
  }
  public resetEqualOrLongerThan() {
    this._equalOrLongerThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalOrLongerThanInput() {
    return this._equalOrLongerThan;
  }

  // exact_match - computed: false, optional: true, required: false
  private _exactMatch?: boolean | cdktf.IResolvable; 
  public get exactMatch() {
    return this.getBooleanAttribute('exact_match');
  }
  public set exactMatch(value: boolean | cdktf.IResolvable) {
    this._exactMatch = value;
  }
  public resetExactMatch() {
    this._exactMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactMatchInput() {
    return this._exactMatch;
  }

  // ip_prefixes - computed: false, optional: true, required: false
  private _ipPrefixes?: string; 
  public get ipPrefixes() {
    return this.getStringAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string) {
    this._ipPrefixes = value;
  }
  public resetIpPrefixes() {
    this._ipPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // longer_than - computed: false, optional: true, required: false
  private _longerThan?: boolean | cdktf.IResolvable; 
  public get longerThan() {
    return this.getBooleanAttribute('longer_than');
  }
  public set longerThan(value: boolean | cdktf.IResolvable) {
    this._longerThan = value;
  }
  public resetLongerThan() {
    this._longerThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longerThanInput() {
    return this._longerThan;
  }
}

export class BgpRoutingPolicyRulesMatchIpPrefixesPrefixesList extends cdktf.ComplexList {
  public internalValue? : BgpRoutingPolicyRulesMatchIpPrefixesPrefixes[] | cdktf.IResolvable

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
  public get(index: number): BgpRoutingPolicyRulesMatchIpPrefixesPrefixesOutputReference {
    return new BgpRoutingPolicyRulesMatchIpPrefixesPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpRoutingPolicyRulesMatchIpPrefixes {
  /**
  * prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#prefixes BgpRoutingPolicy#prefixes}
  */
  readonly prefixes: BgpRoutingPolicyRulesMatchIpPrefixesPrefixes[] | cdktf.IResolvable;
}

export function bgpRoutingPolicyRulesMatchIpPrefixesToTerraform(struct?: BgpRoutingPolicyRulesMatchIpPrefixesOutputReference | BgpRoutingPolicyRulesMatchIpPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefixes: cdktf.listMapper(bgpRoutingPolicyRulesMatchIpPrefixesPrefixesToTerraform, true)(struct!.prefixes),
  }
}


export function bgpRoutingPolicyRulesMatchIpPrefixesToHclTerraform(struct?: BgpRoutingPolicyRulesMatchIpPrefixesOutputReference | BgpRoutingPolicyRulesMatchIpPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefixes: {
      value: cdktf.listMapperHcl(bgpRoutingPolicyRulesMatchIpPrefixesPrefixesToHclTerraform, true)(struct!.prefixes),
      isBlock: true,
      type: "list",
      storageClassType: "BgpRoutingPolicyRulesMatchIpPrefixesPrefixesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRoutingPolicyRulesMatchIpPrefixesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpRoutingPolicyRulesMatchIpPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRoutingPolicyRulesMatchIpPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefixes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefixes.internalValue = value.prefixes;
    }
  }

  // prefixes - computed: false, optional: false, required: true
  private _prefixes = new BgpRoutingPolicyRulesMatchIpPrefixesPrefixesList(this, "prefixes", false);
  public get prefixes() {
    return this._prefixes;
  }
  public putPrefixes(value: BgpRoutingPolicyRulesMatchIpPrefixesPrefixes[] | cdktf.IResolvable) {
    this._prefixes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes.internalValue;
  }
}
export interface BgpRoutingPolicyRulesMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#as_path BgpRoutingPolicy#as_path}
  */
  readonly asPath?: string;
  /**
  * community block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#community BgpRoutingPolicy#community}
  */
  readonly community?: BgpRoutingPolicyRulesMatchCommunity;
  /**
  * ip_prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#ip_prefixes BgpRoutingPolicy#ip_prefixes}
  */
  readonly ipPrefixes?: BgpRoutingPolicyRulesMatchIpPrefixes;
}

export function bgpRoutingPolicyRulesMatchToTerraform(struct?: BgpRoutingPolicyRulesMatchOutputReference | BgpRoutingPolicyRulesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_path: cdktf.stringToTerraform(struct!.asPath),
    community: bgpRoutingPolicyRulesMatchCommunityToTerraform(struct!.community),
    ip_prefixes: bgpRoutingPolicyRulesMatchIpPrefixesToTerraform(struct!.ipPrefixes),
  }
}


export function bgpRoutingPolicyRulesMatchToHclTerraform(struct?: BgpRoutingPolicyRulesMatchOutputReference | BgpRoutingPolicyRulesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_path: {
      value: cdktf.stringToHclTerraform(struct!.asPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    community: {
      value: bgpRoutingPolicyRulesMatchCommunityToHclTerraform(struct!.community),
      isBlock: true,
      type: "list",
      storageClassType: "BgpRoutingPolicyRulesMatchCommunityList",
    },
    ip_prefixes: {
      value: bgpRoutingPolicyRulesMatchIpPrefixesToHclTerraform(struct!.ipPrefixes),
      isBlock: true,
      type: "list",
      storageClassType: "BgpRoutingPolicyRulesMatchIpPrefixesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRoutingPolicyRulesMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpRoutingPolicyRulesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPath = this._asPath;
    }
    if (this._community?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community?.internalValue;
    }
    if (this._ipPrefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRoutingPolicyRulesMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asPath = undefined;
      this._community.internalValue = undefined;
      this._ipPrefixes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asPath = value.asPath;
      this._community.internalValue = value.community;
      this._ipPrefixes.internalValue = value.ipPrefixes;
    }
  }

  // as_path - computed: false, optional: true, required: false
  private _asPath?: string; 
  public get asPath() {
    return this.getStringAttribute('as_path');
  }
  public set asPath(value: string) {
    this._asPath = value;
  }
  public resetAsPath() {
    this._asPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathInput() {
    return this._asPath;
  }

  // community - computed: false, optional: true, required: false
  private _community = new BgpRoutingPolicyRulesMatchCommunityOutputReference(this, "community");
  public get community() {
    return this._community;
  }
  public putCommunity(value: BgpRoutingPolicyRulesMatchCommunity) {
    this._community.internalValue = value;
  }
  public resetCommunity() {
    this._community.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community.internalValue;
  }

  // ip_prefixes - computed: false, optional: true, required: false
  private _ipPrefixes = new BgpRoutingPolicyRulesMatchIpPrefixesOutputReference(this, "ip_prefixes");
  public get ipPrefixes() {
    return this._ipPrefixes;
  }
  public putIpPrefixes(value: BgpRoutingPolicyRulesMatchIpPrefixes) {
    this._ipPrefixes.internalValue = value;
  }
  public resetIpPrefixes() {
    this._ipPrefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes.internalValue;
  }
}
export interface BgpRoutingPolicyRules {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#action BgpRoutingPolicy#action}
  */
  readonly action?: BgpRoutingPolicyRulesAction;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#match BgpRoutingPolicy#match}
  */
  readonly match?: BgpRoutingPolicyRulesMatch;
}

export function bgpRoutingPolicyRulesToTerraform(struct?: BgpRoutingPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: bgpRoutingPolicyRulesActionToTerraform(struct!.action),
    match: bgpRoutingPolicyRulesMatchToTerraform(struct!.match),
  }
}


export function bgpRoutingPolicyRulesToHclTerraform(struct?: BgpRoutingPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: bgpRoutingPolicyRulesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "BgpRoutingPolicyRulesActionList",
    },
    match: {
      value: bgpRoutingPolicyRulesMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "BgpRoutingPolicyRulesMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpRoutingPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpRoutingPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpRoutingPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action = new BgpRoutingPolicyRulesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: BgpRoutingPolicyRulesAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new BgpRoutingPolicyRulesMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: BgpRoutingPolicyRulesMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}

export class BgpRoutingPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : BgpRoutingPolicyRules[] | cdktf.IResolvable

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
  public get(index: number): BgpRoutingPolicyRulesOutputReference {
    return new BgpRoutingPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy volterra_bgp_routing_policy}
*/
export class BgpRoutingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_bgp_routing_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpRoutingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpRoutingPolicy to import
  * @param importFromId The id of the existing BgpRoutingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpRoutingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_bgp_routing_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/bgp_routing_policy volterra_bgp_routing_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpRoutingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: BgpRoutingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_bgp_routing_policy',
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

  // rules - computed: false, optional: false, required: true
  private _rules = new BgpRoutingPolicyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: BgpRoutingPolicyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
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
      rules: cdktf.listMapper(bgpRoutingPolicyRulesToTerraform, true)(this._rules.internalValue),
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
      rules: {
        value: cdktf.listMapperHcl(bgpRoutingPolicyRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BgpRoutingPolicyRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
