// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyoptionsPolicyStatementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add this policy in `routing-options forwarding-table export` list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#add_it_to_forwarding_table_export PolicyoptionsPolicyStatement#add_it_to_forwarding_table_export}
  */
  readonly addItToForwardingTableExport?: boolean | cdktf.IResolvable;
  /**
  * Object may exist in dynamic database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#dynamic_db PolicyoptionsPolicyStatement#dynamic_db}
  */
  readonly dynamicDb?: boolean | cdktf.IResolvable;
  /**
  * Name to identify the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#name PolicyoptionsPolicyStatement#name}
  */
  readonly name: string;
  /**
  * from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#from PolicyoptionsPolicyStatement#from}
  */
  readonly from?: PolicyoptionsPolicyStatementFrom;
  /**
  * term block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#term PolicyoptionsPolicyStatement#term}
  */
  readonly term?: PolicyoptionsPolicyStatementTerm[] | cdktf.IResolvable;
  /**
  * then block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#then PolicyoptionsPolicyStatement#then}
  */
  readonly then?: PolicyoptionsPolicyStatementThen;
  /**
  * to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#to PolicyoptionsPolicyStatement#to}
  */
  readonly to?: PolicyoptionsPolicyStatementTo;
}
export interface PolicyoptionsPolicyStatementFromBgpAsPathCalcLength {
  /**
  * Number of ASes (0..1024).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#count PolicyoptionsPolicyStatement#count}
  */
  readonly count: number;
  /**
  * Type of match: equal values, higher or equal values, lower or equal values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#match PolicyoptionsPolicyStatement#match}
  */
  readonly match: string;
}

export function policyoptionsPolicyStatementFromBgpAsPathCalcLengthToTerraform(struct?: PolicyoptionsPolicyStatementFromBgpAsPathCalcLength | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    match: cdktf.stringToTerraform(struct!.match),
  }
}


export function policyoptionsPolicyStatementFromBgpAsPathCalcLengthToHclTerraform(struct?: PolicyoptionsPolicyStatementFromBgpAsPathCalcLength | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyoptionsPolicyStatementFromBgpAsPathCalcLengthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyoptionsPolicyStatementFromBgpAsPathCalcLength | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyoptionsPolicyStatementFromBgpAsPathCalcLength | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._match = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._match = value.match;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // match - computed: false, optional: false, required: true
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }
}

export class PolicyoptionsPolicyStatementFromBgpAsPathCalcLengthList extends cdktf.ComplexList {
  public internalValue? : PolicyoptionsPolicyStatementFromBgpAsPathCalcLength[] | cdktf.IResolvable

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
  public get(index: number): PolicyoptionsPolicyStatementFromBgpAsPathCalcLengthOutputReference {
    return new PolicyoptionsPolicyStatementFromBgpAsPathCalcLengthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyoptionsPolicyStatementFromBgpAsPathUniqueCount {
  /**
  * Number of ASes (0..1024).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#count PolicyoptionsPolicyStatement#count}
  */
  readonly count: number;
  /**
  * Type of match: equal values, higher or equal values, lower or equal values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#match PolicyoptionsPolicyStatement#match}
  */
  readonly match: string;
}

export function policyoptionsPolicyStatementFromBgpAsPathUniqueCountToTerraform(struct?: PolicyoptionsPolicyStatementFromBgpAsPathUniqueCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    match: cdktf.stringToTerraform(struct!.match),
  }
}


export function policyoptionsPolicyStatementFromBgpAsPathUniqueCountToHclTerraform(struct?: PolicyoptionsPolicyStatementFromBgpAsPathUniqueCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyoptionsPolicyStatementFromBgpAsPathUniqueCountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyoptionsPolicyStatementFromBgpAsPathUniqueCount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyoptionsPolicyStatementFromBgpAsPathUniqueCount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._match = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._match = value.match;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // match - computed: false, optional: false, required: true
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }
}

export class PolicyoptionsPolicyStatementFromBgpAsPathUniqueCountList extends cdktf.ComplexList {
  public internalValue? : PolicyoptionsPolicyStatementFromBgpAsPathUniqueCount[] | cdktf.IResolvable

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
  public get(index: number): PolicyoptionsPolicyStatementFromBgpAsPathUniqueCountOutputReference {
    return new PolicyoptionsPolicyStatementFromBgpAsPathUniqueCountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyoptionsPolicyStatementFromBgpCommunityCount {
  /**
  * Number of communities (0..1024).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#count PolicyoptionsPolicyStatement#count}
  */
  readonly count: number;
  /**
  * Type of match: equal values, higher or equal values, lower or equal values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#match PolicyoptionsPolicyStatement#match}
  */
  readonly match: string;
}

export function policyoptionsPolicyStatementFromBgpCommunityCountToTerraform(struct?: PolicyoptionsPolicyStatementFromBgpCommunityCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    match: cdktf.stringToTerraform(struct!.match),
  }
}


export function policyoptionsPolicyStatementFromBgpCommunityCountToHclTerraform(struct?: PolicyoptionsPolicyStatementFromBgpCommunityCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyoptionsPolicyStatementFromBgpCommunityCountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyoptionsPolicyStatementFromBgpCommunityCount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyoptionsPolicyStatementFromBgpCommunityCount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._match = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._match = value.match;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // match - computed: false, optional: false, required: true
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }
}

export class PolicyoptionsPolicyStatementFromBgpCommunityCountList extends cdktf.ComplexList {
  public internalValue? : PolicyoptionsPolicyStatementFromBgpCommunityCount[] | cdktf.IResolvable

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
  public get(index: number): PolicyoptionsPolicyStatementFromBgpCommunityCountOutputReference {
    return new PolicyoptionsPolicyStatementFromBgpCommunityCountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyoptionsPolicyStatementFromNextHopWeight {
  /**
  * Type of match for weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#match PolicyoptionsPolicyStatement#match}
  */
  readonly match: string;
  /**
  * Weight of the gateway (1..65535).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#weight PolicyoptionsPolicyStatement#weight}
  */
  readonly weight: number;
}

export function policyoptionsPolicyStatementFromNextHopWeightToTerraform(struct?: PolicyoptionsPolicyStatementFromNextHopWeight | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.stringToTerraform(struct!.match),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function policyoptionsPolicyStatementFromNextHopWeightToHclTerraform(struct?: PolicyoptionsPolicyStatementFromNextHopWeight | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyoptionsPolicyStatementFromNextHopWeightOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyoptionsPolicyStatementFromNextHopWeight | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyoptionsPolicyStatementFromNextHopWeight | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match = value.match;
      this._weight = value.weight;
    }
  }

  // match - computed: false, optional: false, required: true
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class PolicyoptionsPolicyStatementFromNextHopWeightList extends cdktf.ComplexList {
  public internalValue? : PolicyoptionsPolicyStatementFromNextHopWeight[] | cdktf.IResolvable

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
  public get(index: number): PolicyoptionsPolicyStatementFromNextHopWeightOutputReference {
    return new PolicyoptionsPolicyStatementFromNextHopWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyoptionsPolicyStatementFromRouteFilter {
  /**
  * Mask option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#option PolicyoptionsPolicyStatement#option}
  */
  readonly option: string;
  /**
  * For options that need an argument.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#option_value PolicyoptionsPolicyStatement#option_value}
  */
  readonly optionValue?: string;
  /**
  * IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#route PolicyoptionsPolicyStatement#route}
  */
  readonly route: string;
}

export function policyoptionsPolicyStatementFromRouteFilterToTerraform(struct?: PolicyoptionsPolicyStatementFromRouteFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    option: cdktf.stringToTerraform(struct!.option),
    option_value: cdktf.stringToTerraform(struct!.optionValue),
    route: cdktf.stringToTerraform(struct!.route),
  }
}


export function policyoptionsPolicyStatementFromRouteFilterToHclTerraform(struct?: PolicyoptionsPolicyStatementFromRouteFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    option: {
      value: cdktf.stringToHclTerraform(struct!.option),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_value: {
      value: cdktf.stringToHclTerraform(struct!.optionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route: {
      value: cdktf.stringToHclTerraform(struct!.route),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyoptionsPolicyStatementFromRouteFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyoptionsPolicyStatementFromRouteFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
    }
    if (this._optionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionValue = this._optionValue;
    }
    if (this._route !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyoptionsPolicyStatementFromRouteFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._option = undefined;
      this._optionValue = undefined;
      this._route = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._option = value.option;
      this._optionValue = value.optionValue;
      this._route = value.route;
    }
  }

  // option - computed: false, optional: false, required: true
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
  }

  // option_value - computed: false, optional: true, required: false
  private _optionValue?: string; 
  public get optionValue() {
    return this.getStringAttribute('option_value');
  }
  public set optionValue(value: string) {
    this._optionValue = value;
  }
  public resetOptionValue() {
    this._optionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionValueInput() {
    return this._optionValue;
  }

  // route - computed: false, optional: false, required: true
  private _route?: string; 
  public get route() {
    return this.getStringAttribute('route');
  }
  public set route(value: string) {
    this._route = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route;
  }
}

export class PolicyoptionsPolicyStatementFromRouteFilterList extends cdktf.ComplexList {
  public internalValue? : PolicyoptionsPolicyStatementFromRouteFilter[] | cdktf.IResolvable

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
  public get(index: number): PolicyoptionsPolicyStatementFromRouteFilterOutputReference {
    return new PolicyoptionsPolicyStatementFromRouteFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyoptionsPolicyStatementFrom {
  /**
  * Match more specifics of an aggregate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#aggregate_contributor PolicyoptionsPolicyStatement#aggregate_contributor}
  */
  readonly aggregateContributor?: boolean | cdktf.IResolvable;
  /**
  * Name of AS path regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#bgp_as_path PolicyoptionsPolicyStatement#bgp_as_path}
  */
  readonly bgpAsPath?: string[];
  /**
  * Name of AS path group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#bgp_as_path_group PolicyoptionsPolicyStatement#bgp_as_path_group}
  */
  readonly bgpAsPathGroup?: string[];
  /**
  * BGP community.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#bgp_community PolicyoptionsPolicyStatement#bgp_community}
  */
  readonly bgpCommunity?: string[];
  /**
  * BGP origin attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#bgp_origin PolicyoptionsPolicyStatement#bgp_origin}
  */
  readonly bgpOrigin?: string;
  /**
  * Srte discriminator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#bgp_srte_discriminator PolicyoptionsPolicyStatement#bgp_srte_discriminator}
  */
  readonly bgpSrteDiscriminator?: number;
  /**
  * Color (preference) value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#color PolicyoptionsPolicyStatement#color}
  */
  readonly color?: number;
  /**
  * ESI in EVPN Route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#evpn_esi PolicyoptionsPolicyStatement#evpn_esi}
  */
  readonly evpnEsi?: string[];
  /**
  * EVPN Mac Route type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#evpn_mac_route PolicyoptionsPolicyStatement#evpn_mac_route}
  */
  readonly evpnMacRoute?: string;
  /**
  * Tag in EVPN Route (0..4294967295).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#evpn_tag PolicyoptionsPolicyStatement#evpn_tag}
  */
  readonly evpnTag?: number[];
  /**
  * Family.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#family PolicyoptionsPolicyStatement#family}
  */
  readonly family?: string;
  /**
  * Interface name or address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#interface PolicyoptionsPolicyStatement#interface}
  */
  readonly interface?: string[];
  /**
  * Local preference associated with a route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#local_preference PolicyoptionsPolicyStatement#local_preference}
  */
  readonly localPreference?: number;
  /**
  * Metric value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#metric PolicyoptionsPolicyStatement#metric}
  */
  readonly metric?: number;
  /**
  * Neighboring router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#neighbor PolicyoptionsPolicyStatement#neighbor}
  */
  readonly neighbor?: string[];
  /**
  * Next-hop router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#next_hop PolicyoptionsPolicyStatement#next_hop}
  */
  readonly nextHop?: string[];
  /**
  * Merged next hop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#next_hop_type_merged PolicyoptionsPolicyStatement#next_hop_type_merged}
  */
  readonly nextHopTypeMerged?: boolean | cdktf.IResolvable;
  /**
  * OSPF area identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#ospf_area PolicyoptionsPolicyStatement#ospf_area}
  */
  readonly ospfArea?: string;
  /**
  * Name of policy to evaluate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#policy PolicyoptionsPolicyStatement#policy}
  */
  readonly policy?: string[];
  /**
  * Preference value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#preference PolicyoptionsPolicyStatement#preference}
  */
  readonly preference?: number;
  /**
  * Prefix-lists of routes to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#prefix_list PolicyoptionsPolicyStatement#prefix_list}
  */
  readonly prefixList?: string[];
  /**
  * Protocol from which route was learned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#protocol PolicyoptionsPolicyStatement#protocol}
  */
  readonly protocol?: string[];
  /**
  * Route type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#route_type PolicyoptionsPolicyStatement#route_type}
  */
  readonly routeType?: string;
  /**
  * Routing protocol instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#routing_instance PolicyoptionsPolicyStatement#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Srte color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#srte_color PolicyoptionsPolicyStatement#srte_color}
  */
  readonly srteColor?: number;
  /**
  * Route state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#state PolicyoptionsPolicyStatement#state}
  */
  readonly state?: string;
  /**
  * Tunnel type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#tunnel_type PolicyoptionsPolicyStatement#tunnel_type}
  */
  readonly tunnelType?: string[];
  /**
  * Name to identify a validation-state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#validation_database PolicyoptionsPolicyStatement#validation_database}
  */
  readonly validationDatabase?: string;
  /**
  * bgp_as_path_calc_length block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#bgp_as_path_calc_length PolicyoptionsPolicyStatement#bgp_as_path_calc_length}
  */
  readonly bgpAsPathCalcLength?: PolicyoptionsPolicyStatementFromBgpAsPathCalcLength[] | cdktf.IResolvable;
  /**
  * bgp_as_path_unique_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#bgp_as_path_unique_count PolicyoptionsPolicyStatement#bgp_as_path_unique_count}
  */
  readonly bgpAsPathUniqueCount?: PolicyoptionsPolicyStatementFromBgpAsPathUniqueCount[] | cdktf.IResolvable;
  /**
  * bgp_community_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#bgp_community_count PolicyoptionsPolicyStatement#bgp_community_count}
  */
  readonly bgpCommunityCount?: PolicyoptionsPolicyStatementFromBgpCommunityCount[] | cdktf.IResolvable;
  /**
  * next_hop_weight block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#next_hop_weight PolicyoptionsPolicyStatement#next_hop_weight}
  */
  readonly nextHopWeight?: PolicyoptionsPolicyStatementFromNextHopWeight[] | cdktf.IResolvable;
  /**
  * route_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#route_filter PolicyoptionsPolicyStatement#route_filter}
  */
  readonly routeFilter?: PolicyoptionsPolicyStatementFromRouteFilter[] | cdktf.IResolvable;
}

export function policyoptionsPolicyStatementFromToTerraform(struct?: PolicyoptionsPolicyStatementFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate_contributor: cdktf.booleanToTerraform(struct!.aggregateContributor),
    bgp_as_path: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bgpAsPath),
    bgp_as_path_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bgpAsPathGroup),
    bgp_community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bgpCommunity),
    bgp_origin: cdktf.stringToTerraform(struct!.bgpOrigin),
    bgp_srte_discriminator: cdktf.numberToTerraform(struct!.bgpSrteDiscriminator),
    color: cdktf.numberToTerraform(struct!.color),
    evpn_esi: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.evpnEsi),
    evpn_mac_route: cdktf.stringToTerraform(struct!.evpnMacRoute),
    evpn_tag: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.evpnTag),
    family: cdktf.stringToTerraform(struct!.family),
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    local_preference: cdktf.numberToTerraform(struct!.localPreference),
    metric: cdktf.numberToTerraform(struct!.metric),
    neighbor: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.neighbor),
    next_hop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nextHop),
    next_hop_type_merged: cdktf.booleanToTerraform(struct!.nextHopTypeMerged),
    ospf_area: cdktf.stringToTerraform(struct!.ospfArea),
    policy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policy),
    preference: cdktf.numberToTerraform(struct!.preference),
    prefix_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixList),
    protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocol),
    route_type: cdktf.stringToTerraform(struct!.routeType),
    routing_instance: cdktf.stringToTerraform(struct!.routingInstance),
    srte_color: cdktf.numberToTerraform(struct!.srteColor),
    state: cdktf.stringToTerraform(struct!.state),
    tunnel_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tunnelType),
    validation_database: cdktf.stringToTerraform(struct!.validationDatabase),
    bgp_as_path_calc_length: cdktf.listMapper(policyoptionsPolicyStatementFromBgpAsPathCalcLengthToTerraform, true)(struct!.bgpAsPathCalcLength),
    bgp_as_path_unique_count: cdktf.listMapper(policyoptionsPolicyStatementFromBgpAsPathUniqueCountToTerraform, true)(struct!.bgpAsPathUniqueCount),
    bgp_community_count: cdktf.listMapper(policyoptionsPolicyStatementFromBgpCommunityCountToTerraform, true)(struct!.bgpCommunityCount),
    next_hop_weight: cdktf.listMapper(policyoptionsPolicyStatementFromNextHopWeightToTerraform, true)(struct!.nextHopWeight),
    route_filter: cdktf.listMapper(policyoptionsPolicyStatementFromRouteFilterToTerraform, true)(struct!.routeFilter),
  }
}


export function policyoptionsPolicyStatementFromToHclTerraform(struct?: PolicyoptionsPolicyStatementFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregate_contributor: {
      value: cdktf.booleanToHclTerraform(struct!.aggregateContributor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bgp_as_path: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bgpAsPath),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bgp_as_path_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bgpAsPathGroup),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bgp_community: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bgpCommunity),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bgp_origin: {
      value: cdktf.stringToHclTerraform(struct!.bgpOrigin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp_srte_discriminator: {
      value: cdktf.numberToHclTerraform(struct!.bgpSrteDiscriminator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    color: {
      value: cdktf.numberToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    evpn_esi: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.evpnEsi),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    evpn_mac_route: {
      value: cdktf.stringToHclTerraform(struct!.evpnMacRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evpn_tag: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.evpnTag),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    neighbor: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.neighbor),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    next_hop: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nextHop),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    next_hop_type_merged: {
      value: cdktf.booleanToHclTerraform(struct!.nextHopTypeMerged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ospf_area: {
      value: cdktf.stringToHclTerraform(struct!.ospfArea),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    preference: {
      value: cdktf.numberToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocol),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_type: {
      value: cdktf.stringToHclTerraform(struct!.routeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_instance: {
      value: cdktf.stringToHclTerraform(struct!.routingInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srte_color: {
      value: cdktf.numberToHclTerraform(struct!.srteColor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tunnelType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    validation_database: {
      value: cdktf.stringToHclTerraform(struct!.validationDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp_as_path_calc_length: {
      value: cdktf.listMapperHcl(policyoptionsPolicyStatementFromBgpAsPathCalcLengthToHclTerraform, true)(struct!.bgpAsPathCalcLength),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyoptionsPolicyStatementFromBgpAsPathCalcLengthList",
    },
    bgp_as_path_unique_count: {
      value: cdktf.listMapperHcl(policyoptionsPolicyStatementFromBgpAsPathUniqueCountToHclTerraform, true)(struct!.bgpAsPathUniqueCount),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyoptionsPolicyStatementFromBgpAsPathUniqueCountList",
    },
    bgp_community_count: {
      value: cdktf.listMapperHcl(policyoptionsPolicyStatementFromBgpCommunityCountToHclTerraform, true)(struct!.bgpCommunityCount),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyoptionsPolicyStatementFromBgpCommunityCountList",
    },
    next_hop_weight: {
      value: cdktf.listMapperHcl(policyoptionsPolicyStatementFromNextHopWeightToHclTerraform, true)(struct!.nextHopWeight),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyoptionsPolicyStatementFromNextHopWeightList",
    },
    route_filter: {
      value: cdktf.listMapperHcl(policyoptionsPolicyStatementFromRouteFilterToHclTerraform, true)(struct!.routeFilter),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyoptionsPolicyStatementFromRouteFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyoptionsPolicyStatementFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PolicyoptionsPolicyStatementFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregateContributor !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateContributor = this._aggregateContributor;
    }
    if (this._bgpAsPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpAsPath = this._bgpAsPath;
    }
    if (this._bgpAsPathGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpAsPathGroup = this._bgpAsPathGroup;
    }
    if (this._bgpCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpCommunity = this._bgpCommunity;
    }
    if (this._bgpOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpOrigin = this._bgpOrigin;
    }
    if (this._bgpSrteDiscriminator !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpSrteDiscriminator = this._bgpSrteDiscriminator;
    }
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._evpnEsi !== undefined) {
      hasAnyValues = true;
      internalValueResult.evpnEsi = this._evpnEsi;
    }
    if (this._evpnMacRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.evpnMacRoute = this._evpnMacRoute;
    }
    if (this._evpnTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.evpnTag = this._evpnTag;
    }
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._localPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._neighbor !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._nextHopTypeMerged !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopTypeMerged = this._nextHopTypeMerged;
    }
    if (this._ospfArea !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfArea = this._ospfArea;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._routeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeType = this._routeType;
    }
    if (this._routingInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingInstance = this._routingInstance;
    }
    if (this._srteColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.srteColor = this._srteColor;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._tunnelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelType = this._tunnelType;
    }
    if (this._validationDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationDatabase = this._validationDatabase;
    }
    if (this._bgpAsPathCalcLength?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpAsPathCalcLength = this._bgpAsPathCalcLength?.internalValue;
    }
    if (this._bgpAsPathUniqueCount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpAsPathUniqueCount = this._bgpAsPathUniqueCount?.internalValue;
    }
    if (this._bgpCommunityCount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpCommunityCount = this._bgpCommunityCount?.internalValue;
    }
    if (this._nextHopWeight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopWeight = this._nextHopWeight?.internalValue;
    }
    if (this._routeFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeFilter = this._routeFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyoptionsPolicyStatementFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregateContributor = undefined;
      this._bgpAsPath = undefined;
      this._bgpAsPathGroup = undefined;
      this._bgpCommunity = undefined;
      this._bgpOrigin = undefined;
      this._bgpSrteDiscriminator = undefined;
      this._color = undefined;
      this._evpnEsi = undefined;
      this._evpnMacRoute = undefined;
      this._evpnTag = undefined;
      this._family = undefined;
      this._interface = undefined;
      this._localPreference = undefined;
      this._metric = undefined;
      this._neighbor = undefined;
      this._nextHop = undefined;
      this._nextHopTypeMerged = undefined;
      this._ospfArea = undefined;
      this._policy = undefined;
      this._preference = undefined;
      this._prefixList = undefined;
      this._protocol = undefined;
      this._routeType = undefined;
      this._routingInstance = undefined;
      this._srteColor = undefined;
      this._state = undefined;
      this._tunnelType = undefined;
      this._validationDatabase = undefined;
      this._bgpAsPathCalcLength.internalValue = undefined;
      this._bgpAsPathUniqueCount.internalValue = undefined;
      this._bgpCommunityCount.internalValue = undefined;
      this._nextHopWeight.internalValue = undefined;
      this._routeFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregateContributor = value.aggregateContributor;
      this._bgpAsPath = value.bgpAsPath;
      this._bgpAsPathGroup = value.bgpAsPathGroup;
      this._bgpCommunity = value.bgpCommunity;
      this._bgpOrigin = value.bgpOrigin;
      this._bgpSrteDiscriminator = value.bgpSrteDiscriminator;
      this._color = value.color;
      this._evpnEsi = value.evpnEsi;
      this._evpnMacRoute = value.evpnMacRoute;
      this._evpnTag = value.evpnTag;
      this._family = value.family;
      this._interface = value.interface;
      this._localPreference = value.localPreference;
      this._metric = value.metric;
      this._neighbor = value.neighbor;
      this._nextHop = value.nextHop;
      this._nextHopTypeMerged = value.nextHopTypeMerged;
      this._ospfArea = value.ospfArea;
      this._policy = value.policy;
      this._preference = value.preference;
      this._prefixList = value.prefixList;
      this._protocol = value.protocol;
      this._routeType = value.routeType;
      this._routingInstance = value.routingInstance;
      this._srteColor = value.srteColor;
      this._state = value.state;
      this._tunnelType = value.tunnelType;
      this._validationDatabase = value.validationDatabase;
      this._bgpAsPathCalcLength.internalValue = value.bgpAsPathCalcLength;
      this._bgpAsPathUniqueCount.internalValue = value.bgpAsPathUniqueCount;
      this._bgpCommunityCount.internalValue = value.bgpCommunityCount;
      this._nextHopWeight.internalValue = value.nextHopWeight;
      this._routeFilter.internalValue = value.routeFilter;
    }
  }

  // aggregate_contributor - computed: false, optional: true, required: false
  private _aggregateContributor?: boolean | cdktf.IResolvable; 
  public get aggregateContributor() {
    return this.getBooleanAttribute('aggregate_contributor');
  }
  public set aggregateContributor(value: boolean | cdktf.IResolvable) {
    this._aggregateContributor = value;
  }
  public resetAggregateContributor() {
    this._aggregateContributor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateContributorInput() {
    return this._aggregateContributor;
  }

  // bgp_as_path - computed: false, optional: true, required: false
  private _bgpAsPath?: string[]; 
  public get bgpAsPath() {
    return cdktf.Fn.tolist(this.getListAttribute('bgp_as_path'));
  }
  public set bgpAsPath(value: string[]) {
    this._bgpAsPath = value;
  }
  public resetBgpAsPath() {
    this._bgpAsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAsPathInput() {
    return this._bgpAsPath;
  }

  // bgp_as_path_group - computed: false, optional: true, required: false
  private _bgpAsPathGroup?: string[]; 
  public get bgpAsPathGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('bgp_as_path_group'));
  }
  public set bgpAsPathGroup(value: string[]) {
    this._bgpAsPathGroup = value;
  }
  public resetBgpAsPathGroup() {
    this._bgpAsPathGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAsPathGroupInput() {
    return this._bgpAsPathGroup;
  }

  // bgp_community - computed: false, optional: true, required: false
  private _bgpCommunity?: string[]; 
  public get bgpCommunity() {
    return cdktf.Fn.tolist(this.getListAttribute('bgp_community'));
  }
  public set bgpCommunity(value: string[]) {
    this._bgpCommunity = value;
  }
  public resetBgpCommunity() {
    this._bgpCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpCommunityInput() {
    return this._bgpCommunity;
  }

  // bgp_origin - computed: false, optional: true, required: false
  private _bgpOrigin?: string; 
  public get bgpOrigin() {
    return this.getStringAttribute('bgp_origin');
  }
  public set bgpOrigin(value: string) {
    this._bgpOrigin = value;
  }
  public resetBgpOrigin() {
    this._bgpOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpOriginInput() {
    return this._bgpOrigin;
  }

  // bgp_srte_discriminator - computed: false, optional: true, required: false
  private _bgpSrteDiscriminator?: number; 
  public get bgpSrteDiscriminator() {
    return this.getNumberAttribute('bgp_srte_discriminator');
  }
  public set bgpSrteDiscriminator(value: number) {
    this._bgpSrteDiscriminator = value;
  }
  public resetBgpSrteDiscriminator() {
    this._bgpSrteDiscriminator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpSrteDiscriminatorInput() {
    return this._bgpSrteDiscriminator;
  }

  // color - computed: false, optional: true, required: false
  private _color?: number; 
  public get color() {
    return this.getNumberAttribute('color');
  }
  public set color(value: number) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // evpn_esi - computed: false, optional: true, required: false
  private _evpnEsi?: string[]; 
  public get evpnEsi() {
    return cdktf.Fn.tolist(this.getListAttribute('evpn_esi'));
  }
  public set evpnEsi(value: string[]) {
    this._evpnEsi = value;
  }
  public resetEvpnEsi() {
    this._evpnEsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnEsiInput() {
    return this._evpnEsi;
  }

  // evpn_mac_route - computed: false, optional: true, required: false
  private _evpnMacRoute?: string; 
  public get evpnMacRoute() {
    return this.getStringAttribute('evpn_mac_route');
  }
  public set evpnMacRoute(value: string) {
    this._evpnMacRoute = value;
  }
  public resetEvpnMacRoute() {
    this._evpnMacRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnMacRouteInput() {
    return this._evpnMacRoute;
  }

  // evpn_tag - computed: false, optional: true, required: false
  private _evpnTag?: number[]; 
  public get evpnTag() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('evpn_tag')));
  }
  public set evpnTag(value: number[]) {
    this._evpnTag = value;
  }
  public resetEvpnTag() {
    this._evpnTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnTagInput() {
    return this._evpnTag;
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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

  // neighbor - computed: false, optional: true, required: false
  private _neighbor?: string[]; 
  public get neighbor() {
    return cdktf.Fn.tolist(this.getListAttribute('neighbor'));
  }
  public set neighbor(value: string[]) {
    this._neighbor = value;
  }
  public resetNeighbor() {
    this._neighbor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor;
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop?: string[]; 
  public get nextHop() {
    return cdktf.Fn.tolist(this.getListAttribute('next_hop'));
  }
  public set nextHop(value: string[]) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // next_hop_type_merged - computed: false, optional: true, required: false
  private _nextHopTypeMerged?: boolean | cdktf.IResolvable; 
  public get nextHopTypeMerged() {
    return this.getBooleanAttribute('next_hop_type_merged');
  }
  public set nextHopTypeMerged(value: boolean | cdktf.IResolvable) {
    this._nextHopTypeMerged = value;
  }
  public resetNextHopTypeMerged() {
    this._nextHopTypeMerged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopTypeMergedInput() {
    return this._nextHopTypeMerged;
  }

  // ospf_area - computed: false, optional: true, required: false
  private _ospfArea?: string; 
  public get ospfArea() {
    return this.getStringAttribute('ospf_area');
  }
  public set ospfArea(value: string) {
    this._ospfArea = value;
  }
  public resetOspfArea() {
    this._ospfArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfAreaInput() {
    return this._ospfArea;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string[]; 
  public get policy() {
    return this.getListAttribute('policy');
  }
  public set policy(value: string[]) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // preference - computed: false, optional: true, required: false
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string[]; 
  public get prefixList() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_list'));
  }
  public set prefixList(value: string[]) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string[]; 
  public get protocol() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol'));
  }
  public set protocol(value: string[]) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // route_type - computed: false, optional: true, required: false
  private _routeType?: string; 
  public get routeType() {
    return this.getStringAttribute('route_type');
  }
  public set routeType(value: string) {
    this._routeType = value;
  }
  public resetRouteType() {
    this._routeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTypeInput() {
    return this._routeType;
  }

  // routing_instance - computed: false, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // srte_color - computed: false, optional: true, required: false
  private _srteColor?: number; 
  public get srteColor() {
    return this.getNumberAttribute('srte_color');
  }
  public set srteColor(value: number) {
    this._srteColor = value;
  }
  public resetSrteColor() {
    this._srteColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srteColorInput() {
    return this._srteColor;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // tunnel_type - computed: false, optional: true, required: false
  private _tunnelType?: string[]; 
  public get tunnelType() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel_type'));
  }
  public set tunnelType(value: string[]) {
    this._tunnelType = value;
  }
  public resetTunnelType() {
    this._tunnelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelTypeInput() {
    return this._tunnelType;
  }

  // validation_database - computed: false, optional: true, required: false
  private _validationDatabase?: string; 
  public get validationDatabase() {
    return this.getStringAttribute('validation_database');
  }
  public set validationDatabase(value: string) {
    this._validationDatabase = value;
  }
  public resetValidationDatabase() {
    this._validationDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationDatabaseInput() {
    return this._validationDatabase;
  }

  // bgp_as_path_calc_length - computed: false, optional: true, required: false
  private _bgpAsPathCalcLength = new PolicyoptionsPolicyStatementFromBgpAsPathCalcLengthList(this, "bgp_as_path_calc_length", true);
  public get bgpAsPathCalcLength() {
    return this._bgpAsPathCalcLength;
  }
  public putBgpAsPathCalcLength(value: PolicyoptionsPolicyStatementFromBgpAsPathCalcLength[] | cdktf.IResolvable) {
    this._bgpAsPathCalcLength.internalValue = value;
  }
  public resetBgpAsPathCalcLength() {
    this._bgpAsPathCalcLength.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAsPathCalcLengthInput() {
    return this._bgpAsPathCalcLength.internalValue;
  }

  // bgp_as_path_unique_count - computed: false, optional: true, required: false
  private _bgpAsPathUniqueCount = new PolicyoptionsPolicyStatementFromBgpAsPathUniqueCountList(this, "bgp_as_path_unique_count", true);
  public get bgpAsPathUniqueCount() {
    return this._bgpAsPathUniqueCount;
  }
  public putBgpAsPathUniqueCount(value: PolicyoptionsPolicyStatementFromBgpAsPathUniqueCount[] | cdktf.IResolvable) {
    this._bgpAsPathUniqueCount.internalValue = value;
  }
  public resetBgpAsPathUniqueCount() {
    this._bgpAsPathUniqueCount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAsPathUniqueCountInput() {
    return this._bgpAsPathUniqueCount.internalValue;
  }

  // bgp_community_count - computed: false, optional: true, required: false
  private _bgpCommunityCount = new PolicyoptionsPolicyStatementFromBgpCommunityCountList(this, "bgp_community_count", true);
  public get bgpCommunityCount() {
    return this._bgpCommunityCount;
  }
  public putBgpCommunityCount(value: PolicyoptionsPolicyStatementFromBgpCommunityCount[] | cdktf.IResolvable) {
    this._bgpCommunityCount.internalValue = value;
  }
  public resetBgpCommunityCount() {
    this._bgpCommunityCount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpCommunityCountInput() {
    return this._bgpCommunityCount.internalValue;
  }

  // next_hop_weight - computed: false, optional: true, required: false
  private _nextHopWeight = new PolicyoptionsPolicyStatementFromNextHopWeightList(this, "next_hop_weight", true);
  public get nextHopWeight() {
    return this._nextHopWeight;
  }
  public putNextHopWeight(value: PolicyoptionsPolicyStatementFromNextHopWeight[] | cdktf.IResolvable) {
    this._nextHopWeight.internalValue = value;
  }
  public resetNextHopWeight() {
    this._nextHopWeight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopWeightInput() {
    return this._nextHopWeight.internalValue;
  }

  // route_filter - computed: false, optional: true, required: false
  private _routeFilter = new PolicyoptionsPolicyStatementFromRouteFilterList(this, "route_filter", false);
  public get routeFilter() {
    return this._routeFilter;
  }
  public putRouteFilter(value: PolicyoptionsPolicyStatementFromRouteFilter[] | cdktf.IResolvable) {
    this._routeFilter.internalValue = value;
  }
  public resetRouteFilter() {
    this._routeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeFilterInput() {
    return this._routeFilter.internalValue;
  }
}
export interface PolicyoptionsPolicyStatementTermFromBgpAsPathCalcLength {
  /**
  * Number of ASes (0..1024).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#count PolicyoptionsPolicyStatement#count}
  */
  readonly count: number;
  /**
  * Type of match: equal values, higher or equal values, lower or equal values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#match PolicyoptionsPolicyStatement#match}
  */
  readonly match: string;
}

export function policyoptionsPolicyStatementTermFromBgpAsPathCalcLengthToTerraform(struct?: PolicyoptionsPolicyStatementTermFromBgpAsPathCalcLength | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    match: cdktf.stringToTerraform(struct!.match),
  }
}


export function policyoptionsPolicyStatementTermFromBgpAsPathCalcLengthToHclTerraform(struct?: PolicyoptionsPolicyStatementTermFromBgpAsPathCalcLength | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyoptionsPolicyStatementTermFromBgpAsPathCalcLengthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyoptionsPolicyStatementTermFromBgpAsPathCalcLength | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyoptionsPolicyStatementTermFromBgpAsPathCalcLength | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._match = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._match = value.match;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // match - computed: false, optional: false, required: true
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }
}

export class PolicyoptionsPolicyStatementTermFromBgpAsPathCalcLengthList extends cdktf.ComplexList {
  public internalValue? : PolicyoptionsPolicyStatementTermFromBgpAsPathCalcLength[] | cdktf.IResolvable

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
  public get(index: number): PolicyoptionsPolicyStatementTermFromBgpAsPathCalcLengthOutputReference {
    return new PolicyoptionsPolicyStatementTermFromBgpAsPathCalcLengthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyoptionsPolicyStatementTermFromBgpAsPathUniqueCount {
  /**
  * Number of ASes (0..1024).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#count PolicyoptionsPolicyStatement#count}
  */
  readonly count: number;
  /**
  * Type of match: equal values, higher or equal values, lower or equal values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#match PolicyoptionsPolicyStatement#match}
  */
  readonly match: string;
}

export function policyoptionsPolicyStatementTermFromBgpAsPathUniqueCountToTerraform(struct?: PolicyoptionsPolicyStatementTermFromBgpAsPathUniqueCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    match: cdktf.stringToTerraform(struct!.match),
  }
}


export function policyoptionsPolicyStatementTermFromBgpAsPathUniqueCountToHclTerraform(struct?: PolicyoptionsPolicyStatementTermFromBgpAsPathUniqueCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyoptionsPolicyStatementTermFromBgpAsPathUniqueCountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyoptionsPolicyStatementTermFromBgpAsPathUniqueCount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyoptionsPolicyStatementTermFromBgpAsPathUniqueCount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._match = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._match = value.match;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // match - computed: false, optional: false, required: true
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }
}

export class PolicyoptionsPolicyStatementTermFromBgpAsPathUniqueCountList extends cdktf.ComplexList {
  public internalValue? : PolicyoptionsPolicyStatementTermFromBgpAsPathUniqueCount[] | cdktf.IResolvable

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
  public get(index: number): PolicyoptionsPolicyStatementTermFromBgpAsPathUniqueCountOutputReference {
    return new PolicyoptionsPolicyStatementTermFromBgpAsPathUniqueCountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyoptionsPolicyStatementTermFromBgpCommunityCount {
  /**
  * Number of communities (0..1024).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#count PolicyoptionsPolicyStatement#count}
  */
  readonly count: number;
  /**
  * Type of match: equal values, higher or equal values, lower or equal values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#match PolicyoptionsPolicyStatement#match}
  */
  readonly match: string;
}

export function policyoptionsPolicyStatementTermFromBgpCommunityCountToTerraform(struct?: PolicyoptionsPolicyStatementTermFromBgpCommunityCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    match: cdktf.stringToTerraform(struct!.match),
  }
}


export function policyoptionsPolicyStatementTermFromBgpCommunityCountToHclTerraform(struct?: PolicyoptionsPolicyStatementTermFromBgpCommunityCount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyoptionsPolicyStatementTermFromBgpCommunityCountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyoptionsPolicyStatementTermFromBgpCommunityCount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyoptionsPolicyStatementTermFromBgpCommunityCount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._match = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._match = value.match;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // match - computed: false, optional: false, required: true
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }
}

export class PolicyoptionsPolicyStatementTermFromBgpCommunityCountList extends cdktf.ComplexList {
  public internalValue? : PolicyoptionsPolicyStatementTermFromBgpCommunityCount[] | cdktf.IResolvable

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
  public get(index: number): PolicyoptionsPolicyStatementTermFromBgpCommunityCountOutputReference {
    return new PolicyoptionsPolicyStatementTermFromBgpCommunityCountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyoptionsPolicyStatementTermFromNextHopWeight {
  /**
  * Type of match for weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#match PolicyoptionsPolicyStatement#match}
  */
  readonly match: string;
  /**
  * Weight of the gateway (1..65535).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#weight PolicyoptionsPolicyStatement#weight}
  */
  readonly weight: number;
}

export function policyoptionsPolicyStatementTermFromNextHopWeightToTerraform(struct?: PolicyoptionsPolicyStatementTermFromNextHopWeight | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.stringToTerraform(struct!.match),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function policyoptionsPolicyStatementTermFromNextHopWeightToHclTerraform(struct?: PolicyoptionsPolicyStatementTermFromNextHopWeight | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyoptionsPolicyStatementTermFromNextHopWeightOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyoptionsPolicyStatementTermFromNextHopWeight | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyoptionsPolicyStatementTermFromNextHopWeight | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match = value.match;
      this._weight = value.weight;
    }
  }

  // match - computed: false, optional: false, required: true
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class PolicyoptionsPolicyStatementTermFromNextHopWeightList extends cdktf.ComplexList {
  public internalValue? : PolicyoptionsPolicyStatementTermFromNextHopWeight[] | cdktf.IResolvable

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
  public get(index: number): PolicyoptionsPolicyStatementTermFromNextHopWeightOutputReference {
    return new PolicyoptionsPolicyStatementTermFromNextHopWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyoptionsPolicyStatementTermFromRouteFilter {
  /**
  * Mask option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#option PolicyoptionsPolicyStatement#option}
  */
  readonly option: string;
  /**
  * For options that need an argument.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#option_value PolicyoptionsPolicyStatement#option_value}
  */
  readonly optionValue?: string;
  /**
  * IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#route PolicyoptionsPolicyStatement#route}
  */
  readonly route: string;
}

export function policyoptionsPolicyStatementTermFromRouteFilterToTerraform(struct?: PolicyoptionsPolicyStatementTermFromRouteFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    option: cdktf.stringToTerraform(struct!.option),
    option_value: cdktf.stringToTerraform(struct!.optionValue),
    route: cdktf.stringToTerraform(struct!.route),
  }
}


export function policyoptionsPolicyStatementTermFromRouteFilterToHclTerraform(struct?: PolicyoptionsPolicyStatementTermFromRouteFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    option: {
      value: cdktf.stringToHclTerraform(struct!.option),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_value: {
      value: cdktf.stringToHclTerraform(struct!.optionValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route: {
      value: cdktf.stringToHclTerraform(struct!.route),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyoptionsPolicyStatementTermFromRouteFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyoptionsPolicyStatementTermFromRouteFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
    }
    if (this._optionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionValue = this._optionValue;
    }
    if (this._route !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyoptionsPolicyStatementTermFromRouteFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._option = undefined;
      this._optionValue = undefined;
      this._route = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._option = value.option;
      this._optionValue = value.optionValue;
      this._route = value.route;
    }
  }

  // option - computed: false, optional: false, required: true
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
  }

  // option_value - computed: false, optional: true, required: false
  private _optionValue?: string; 
  public get optionValue() {
    return this.getStringAttribute('option_value');
  }
  public set optionValue(value: string) {
    this._optionValue = value;
  }
  public resetOptionValue() {
    this._optionValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionValueInput() {
    return this._optionValue;
  }

  // route - computed: false, optional: false, required: true
  private _route?: string; 
  public get route() {
    return this.getStringAttribute('route');
  }
  public set route(value: string) {
    this._route = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route;
  }
}

export class PolicyoptionsPolicyStatementTermFromRouteFilterList extends cdktf.ComplexList {
  public internalValue? : PolicyoptionsPolicyStatementTermFromRouteFilter[] | cdktf.IResolvable

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
  public get(index: number): PolicyoptionsPolicyStatementTermFromRouteFilterOutputReference {
    return new PolicyoptionsPolicyStatementTermFromRouteFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyoptionsPolicyStatementTermFrom {
  /**
  * Match more specifics of an aggregate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#aggregate_contributor PolicyoptionsPolicyStatement#aggregate_contributor}
  */
  readonly aggregateContributor?: boolean | cdktf.IResolvable;
  /**
  * Name of AS path regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#bgp_as_path PolicyoptionsPolicyStatement#bgp_as_path}
  */
  readonly bgpAsPath?: string[];
  /**
  * Name of AS path group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#bgp_as_path_group PolicyoptionsPolicyStatement#bgp_as_path_group}
  */
  readonly bgpAsPathGroup?: string[];
  /**
  * BGP community.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#bgp_community PolicyoptionsPolicyStatement#bgp_community}
  */
  readonly bgpCommunity?: string[];
  /**
  * BGP origin attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#bgp_origin PolicyoptionsPolicyStatement#bgp_origin}
  */
  readonly bgpOrigin?: string;
  /**
  * Srte discriminator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#bgp_srte_discriminator PolicyoptionsPolicyStatement#bgp_srte_discriminator}
  */
  readonly bgpSrteDiscriminator?: number;
  /**
  * Color (preference) value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#color PolicyoptionsPolicyStatement#color}
  */
  readonly color?: number;
  /**
  * ESI in EVPN Route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#evpn_esi PolicyoptionsPolicyStatement#evpn_esi}
  */
  readonly evpnEsi?: string[];
  /**
  * EVPN Mac Route type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#evpn_mac_route PolicyoptionsPolicyStatement#evpn_mac_route}
  */
  readonly evpnMacRoute?: string;
  /**
  * Tag in EVPN Route (0..4294967295).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#evpn_tag PolicyoptionsPolicyStatement#evpn_tag}
  */
  readonly evpnTag?: number[];
  /**
  * Family.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#family PolicyoptionsPolicyStatement#family}
  */
  readonly family?: string;
  /**
  * Interface name or address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#interface PolicyoptionsPolicyStatement#interface}
  */
  readonly interface?: string[];
  /**
  * Local preference associated with a route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#local_preference PolicyoptionsPolicyStatement#local_preference}
  */
  readonly localPreference?: number;
  /**
  * Metric value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#metric PolicyoptionsPolicyStatement#metric}
  */
  readonly metric?: number;
  /**
  * Neighboring router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#neighbor PolicyoptionsPolicyStatement#neighbor}
  */
  readonly neighbor?: string[];
  /**
  * Next-hop router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#next_hop PolicyoptionsPolicyStatement#next_hop}
  */
  readonly nextHop?: string[];
  /**
  * Merged next hop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#next_hop_type_merged PolicyoptionsPolicyStatement#next_hop_type_merged}
  */
  readonly nextHopTypeMerged?: boolean | cdktf.IResolvable;
  /**
  * OSPF area identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#ospf_area PolicyoptionsPolicyStatement#ospf_area}
  */
  readonly ospfArea?: string;
  /**
  * Name of policy to evaluate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#policy PolicyoptionsPolicyStatement#policy}
  */
  readonly policy?: string[];
  /**
  * Preference value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#preference PolicyoptionsPolicyStatement#preference}
  */
  readonly preference?: number;
  /**
  * Prefix-lists of routes to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#prefix_list PolicyoptionsPolicyStatement#prefix_list}
  */
  readonly prefixList?: string[];
  /**
  * Protocol from which route was learned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#protocol PolicyoptionsPolicyStatement#protocol}
  */
  readonly protocol?: string[];
  /**
  * Route type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#route_type PolicyoptionsPolicyStatement#route_type}
  */
  readonly routeType?: string;
  /**
  * Routing protocol instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#routing_instance PolicyoptionsPolicyStatement#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Srte color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#srte_color PolicyoptionsPolicyStatement#srte_color}
  */
  readonly srteColor?: number;
  /**
  * Route state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#state PolicyoptionsPolicyStatement#state}
  */
  readonly state?: string;
  /**
  * Tunnel type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#tunnel_type PolicyoptionsPolicyStatement#tunnel_type}
  */
  readonly tunnelType?: string[];
  /**
  * Name to identify a validation-state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#validation_database PolicyoptionsPolicyStatement#validation_database}
  */
  readonly validationDatabase?: string;
  /**
  * bgp_as_path_calc_length block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#bgp_as_path_calc_length PolicyoptionsPolicyStatement#bgp_as_path_calc_length}
  */
  readonly bgpAsPathCalcLength?: PolicyoptionsPolicyStatementTermFromBgpAsPathCalcLength[] | cdktf.IResolvable;
  /**
  * bgp_as_path_unique_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#bgp_as_path_unique_count PolicyoptionsPolicyStatement#bgp_as_path_unique_count}
  */
  readonly bgpAsPathUniqueCount?: PolicyoptionsPolicyStatementTermFromBgpAsPathUniqueCount[] | cdktf.IResolvable;
  /**
  * bgp_community_count block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#bgp_community_count PolicyoptionsPolicyStatement#bgp_community_count}
  */
  readonly bgpCommunityCount?: PolicyoptionsPolicyStatementTermFromBgpCommunityCount[] | cdktf.IResolvable;
  /**
  * next_hop_weight block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#next_hop_weight PolicyoptionsPolicyStatement#next_hop_weight}
  */
  readonly nextHopWeight?: PolicyoptionsPolicyStatementTermFromNextHopWeight[] | cdktf.IResolvable;
  /**
  * route_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#route_filter PolicyoptionsPolicyStatement#route_filter}
  */
  readonly routeFilter?: PolicyoptionsPolicyStatementTermFromRouteFilter[] | cdktf.IResolvable;
}

export function policyoptionsPolicyStatementTermFromToTerraform(struct?: PolicyoptionsPolicyStatementTermFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate_contributor: cdktf.booleanToTerraform(struct!.aggregateContributor),
    bgp_as_path: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bgpAsPath),
    bgp_as_path_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bgpAsPathGroup),
    bgp_community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bgpCommunity),
    bgp_origin: cdktf.stringToTerraform(struct!.bgpOrigin),
    bgp_srte_discriminator: cdktf.numberToTerraform(struct!.bgpSrteDiscriminator),
    color: cdktf.numberToTerraform(struct!.color),
    evpn_esi: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.evpnEsi),
    evpn_mac_route: cdktf.stringToTerraform(struct!.evpnMacRoute),
    evpn_tag: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.evpnTag),
    family: cdktf.stringToTerraform(struct!.family),
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    local_preference: cdktf.numberToTerraform(struct!.localPreference),
    metric: cdktf.numberToTerraform(struct!.metric),
    neighbor: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.neighbor),
    next_hop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nextHop),
    next_hop_type_merged: cdktf.booleanToTerraform(struct!.nextHopTypeMerged),
    ospf_area: cdktf.stringToTerraform(struct!.ospfArea),
    policy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policy),
    preference: cdktf.numberToTerraform(struct!.preference),
    prefix_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixList),
    protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocol),
    route_type: cdktf.stringToTerraform(struct!.routeType),
    routing_instance: cdktf.stringToTerraform(struct!.routingInstance),
    srte_color: cdktf.numberToTerraform(struct!.srteColor),
    state: cdktf.stringToTerraform(struct!.state),
    tunnel_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tunnelType),
    validation_database: cdktf.stringToTerraform(struct!.validationDatabase),
    bgp_as_path_calc_length: cdktf.listMapper(policyoptionsPolicyStatementTermFromBgpAsPathCalcLengthToTerraform, true)(struct!.bgpAsPathCalcLength),
    bgp_as_path_unique_count: cdktf.listMapper(policyoptionsPolicyStatementTermFromBgpAsPathUniqueCountToTerraform, true)(struct!.bgpAsPathUniqueCount),
    bgp_community_count: cdktf.listMapper(policyoptionsPolicyStatementTermFromBgpCommunityCountToTerraform, true)(struct!.bgpCommunityCount),
    next_hop_weight: cdktf.listMapper(policyoptionsPolicyStatementTermFromNextHopWeightToTerraform, true)(struct!.nextHopWeight),
    route_filter: cdktf.listMapper(policyoptionsPolicyStatementTermFromRouteFilterToTerraform, true)(struct!.routeFilter),
  }
}


export function policyoptionsPolicyStatementTermFromToHclTerraform(struct?: PolicyoptionsPolicyStatementTermFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregate_contributor: {
      value: cdktf.booleanToHclTerraform(struct!.aggregateContributor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bgp_as_path: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bgpAsPath),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bgp_as_path_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bgpAsPathGroup),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bgp_community: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bgpCommunity),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bgp_origin: {
      value: cdktf.stringToHclTerraform(struct!.bgpOrigin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp_srte_discriminator: {
      value: cdktf.numberToHclTerraform(struct!.bgpSrteDiscriminator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    color: {
      value: cdktf.numberToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    evpn_esi: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.evpnEsi),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    evpn_mac_route: {
      value: cdktf.stringToHclTerraform(struct!.evpnMacRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evpn_tag: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.evpnTag),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    neighbor: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.neighbor),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    next_hop: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nextHop),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    next_hop_type_merged: {
      value: cdktf.booleanToHclTerraform(struct!.nextHopTypeMerged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ospf_area: {
      value: cdktf.stringToHclTerraform(struct!.ospfArea),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    preference: {
      value: cdktf.numberToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocol),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    route_type: {
      value: cdktf.stringToHclTerraform(struct!.routeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_instance: {
      value: cdktf.stringToHclTerraform(struct!.routingInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srte_color: {
      value: cdktf.numberToHclTerraform(struct!.srteColor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tunnelType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    validation_database: {
      value: cdktf.stringToHclTerraform(struct!.validationDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp_as_path_calc_length: {
      value: cdktf.listMapperHcl(policyoptionsPolicyStatementTermFromBgpAsPathCalcLengthToHclTerraform, true)(struct!.bgpAsPathCalcLength),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyoptionsPolicyStatementTermFromBgpAsPathCalcLengthList",
    },
    bgp_as_path_unique_count: {
      value: cdktf.listMapperHcl(policyoptionsPolicyStatementTermFromBgpAsPathUniqueCountToHclTerraform, true)(struct!.bgpAsPathUniqueCount),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyoptionsPolicyStatementTermFromBgpAsPathUniqueCountList",
    },
    bgp_community_count: {
      value: cdktf.listMapperHcl(policyoptionsPolicyStatementTermFromBgpCommunityCountToHclTerraform, true)(struct!.bgpCommunityCount),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyoptionsPolicyStatementTermFromBgpCommunityCountList",
    },
    next_hop_weight: {
      value: cdktf.listMapperHcl(policyoptionsPolicyStatementTermFromNextHopWeightToHclTerraform, true)(struct!.nextHopWeight),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyoptionsPolicyStatementTermFromNextHopWeightList",
    },
    route_filter: {
      value: cdktf.listMapperHcl(policyoptionsPolicyStatementTermFromRouteFilterToHclTerraform, true)(struct!.routeFilter),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyoptionsPolicyStatementTermFromRouteFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyoptionsPolicyStatementTermFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PolicyoptionsPolicyStatementTermFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregateContributor !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateContributor = this._aggregateContributor;
    }
    if (this._bgpAsPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpAsPath = this._bgpAsPath;
    }
    if (this._bgpAsPathGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpAsPathGroup = this._bgpAsPathGroup;
    }
    if (this._bgpCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpCommunity = this._bgpCommunity;
    }
    if (this._bgpOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpOrigin = this._bgpOrigin;
    }
    if (this._bgpSrteDiscriminator !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpSrteDiscriminator = this._bgpSrteDiscriminator;
    }
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._evpnEsi !== undefined) {
      hasAnyValues = true;
      internalValueResult.evpnEsi = this._evpnEsi;
    }
    if (this._evpnMacRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.evpnMacRoute = this._evpnMacRoute;
    }
    if (this._evpnTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.evpnTag = this._evpnTag;
    }
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._localPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._neighbor !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._nextHopTypeMerged !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopTypeMerged = this._nextHopTypeMerged;
    }
    if (this._ospfArea !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfArea = this._ospfArea;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._routeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeType = this._routeType;
    }
    if (this._routingInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingInstance = this._routingInstance;
    }
    if (this._srteColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.srteColor = this._srteColor;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._tunnelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelType = this._tunnelType;
    }
    if (this._validationDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationDatabase = this._validationDatabase;
    }
    if (this._bgpAsPathCalcLength?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpAsPathCalcLength = this._bgpAsPathCalcLength?.internalValue;
    }
    if (this._bgpAsPathUniqueCount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpAsPathUniqueCount = this._bgpAsPathUniqueCount?.internalValue;
    }
    if (this._bgpCommunityCount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpCommunityCount = this._bgpCommunityCount?.internalValue;
    }
    if (this._nextHopWeight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopWeight = this._nextHopWeight?.internalValue;
    }
    if (this._routeFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeFilter = this._routeFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyoptionsPolicyStatementTermFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregateContributor = undefined;
      this._bgpAsPath = undefined;
      this._bgpAsPathGroup = undefined;
      this._bgpCommunity = undefined;
      this._bgpOrigin = undefined;
      this._bgpSrteDiscriminator = undefined;
      this._color = undefined;
      this._evpnEsi = undefined;
      this._evpnMacRoute = undefined;
      this._evpnTag = undefined;
      this._family = undefined;
      this._interface = undefined;
      this._localPreference = undefined;
      this._metric = undefined;
      this._neighbor = undefined;
      this._nextHop = undefined;
      this._nextHopTypeMerged = undefined;
      this._ospfArea = undefined;
      this._policy = undefined;
      this._preference = undefined;
      this._prefixList = undefined;
      this._protocol = undefined;
      this._routeType = undefined;
      this._routingInstance = undefined;
      this._srteColor = undefined;
      this._state = undefined;
      this._tunnelType = undefined;
      this._validationDatabase = undefined;
      this._bgpAsPathCalcLength.internalValue = undefined;
      this._bgpAsPathUniqueCount.internalValue = undefined;
      this._bgpCommunityCount.internalValue = undefined;
      this._nextHopWeight.internalValue = undefined;
      this._routeFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregateContributor = value.aggregateContributor;
      this._bgpAsPath = value.bgpAsPath;
      this._bgpAsPathGroup = value.bgpAsPathGroup;
      this._bgpCommunity = value.bgpCommunity;
      this._bgpOrigin = value.bgpOrigin;
      this._bgpSrteDiscriminator = value.bgpSrteDiscriminator;
      this._color = value.color;
      this._evpnEsi = value.evpnEsi;
      this._evpnMacRoute = value.evpnMacRoute;
      this._evpnTag = value.evpnTag;
      this._family = value.family;
      this._interface = value.interface;
      this._localPreference = value.localPreference;
      this._metric = value.metric;
      this._neighbor = value.neighbor;
      this._nextHop = value.nextHop;
      this._nextHopTypeMerged = value.nextHopTypeMerged;
      this._ospfArea = value.ospfArea;
      this._policy = value.policy;
      this._preference = value.preference;
      this._prefixList = value.prefixList;
      this._protocol = value.protocol;
      this._routeType = value.routeType;
      this._routingInstance = value.routingInstance;
      this._srteColor = value.srteColor;
      this._state = value.state;
      this._tunnelType = value.tunnelType;
      this._validationDatabase = value.validationDatabase;
      this._bgpAsPathCalcLength.internalValue = value.bgpAsPathCalcLength;
      this._bgpAsPathUniqueCount.internalValue = value.bgpAsPathUniqueCount;
      this._bgpCommunityCount.internalValue = value.bgpCommunityCount;
      this._nextHopWeight.internalValue = value.nextHopWeight;
      this._routeFilter.internalValue = value.routeFilter;
    }
  }

  // aggregate_contributor - computed: false, optional: true, required: false
  private _aggregateContributor?: boolean | cdktf.IResolvable; 
  public get aggregateContributor() {
    return this.getBooleanAttribute('aggregate_contributor');
  }
  public set aggregateContributor(value: boolean | cdktf.IResolvable) {
    this._aggregateContributor = value;
  }
  public resetAggregateContributor() {
    this._aggregateContributor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateContributorInput() {
    return this._aggregateContributor;
  }

  // bgp_as_path - computed: false, optional: true, required: false
  private _bgpAsPath?: string[]; 
  public get bgpAsPath() {
    return cdktf.Fn.tolist(this.getListAttribute('bgp_as_path'));
  }
  public set bgpAsPath(value: string[]) {
    this._bgpAsPath = value;
  }
  public resetBgpAsPath() {
    this._bgpAsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAsPathInput() {
    return this._bgpAsPath;
  }

  // bgp_as_path_group - computed: false, optional: true, required: false
  private _bgpAsPathGroup?: string[]; 
  public get bgpAsPathGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('bgp_as_path_group'));
  }
  public set bgpAsPathGroup(value: string[]) {
    this._bgpAsPathGroup = value;
  }
  public resetBgpAsPathGroup() {
    this._bgpAsPathGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAsPathGroupInput() {
    return this._bgpAsPathGroup;
  }

  // bgp_community - computed: false, optional: true, required: false
  private _bgpCommunity?: string[]; 
  public get bgpCommunity() {
    return cdktf.Fn.tolist(this.getListAttribute('bgp_community'));
  }
  public set bgpCommunity(value: string[]) {
    this._bgpCommunity = value;
  }
  public resetBgpCommunity() {
    this._bgpCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpCommunityInput() {
    return this._bgpCommunity;
  }

  // bgp_origin - computed: false, optional: true, required: false
  private _bgpOrigin?: string; 
  public get bgpOrigin() {
    return this.getStringAttribute('bgp_origin');
  }
  public set bgpOrigin(value: string) {
    this._bgpOrigin = value;
  }
  public resetBgpOrigin() {
    this._bgpOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpOriginInput() {
    return this._bgpOrigin;
  }

  // bgp_srte_discriminator - computed: false, optional: true, required: false
  private _bgpSrteDiscriminator?: number; 
  public get bgpSrteDiscriminator() {
    return this.getNumberAttribute('bgp_srte_discriminator');
  }
  public set bgpSrteDiscriminator(value: number) {
    this._bgpSrteDiscriminator = value;
  }
  public resetBgpSrteDiscriminator() {
    this._bgpSrteDiscriminator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpSrteDiscriminatorInput() {
    return this._bgpSrteDiscriminator;
  }

  // color - computed: false, optional: true, required: false
  private _color?: number; 
  public get color() {
    return this.getNumberAttribute('color');
  }
  public set color(value: number) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // evpn_esi - computed: false, optional: true, required: false
  private _evpnEsi?: string[]; 
  public get evpnEsi() {
    return cdktf.Fn.tolist(this.getListAttribute('evpn_esi'));
  }
  public set evpnEsi(value: string[]) {
    this._evpnEsi = value;
  }
  public resetEvpnEsi() {
    this._evpnEsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnEsiInput() {
    return this._evpnEsi;
  }

  // evpn_mac_route - computed: false, optional: true, required: false
  private _evpnMacRoute?: string; 
  public get evpnMacRoute() {
    return this.getStringAttribute('evpn_mac_route');
  }
  public set evpnMacRoute(value: string) {
    this._evpnMacRoute = value;
  }
  public resetEvpnMacRoute() {
    this._evpnMacRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnMacRouteInput() {
    return this._evpnMacRoute;
  }

  // evpn_tag - computed: false, optional: true, required: false
  private _evpnTag?: number[]; 
  public get evpnTag() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('evpn_tag')));
  }
  public set evpnTag(value: number[]) {
    this._evpnTag = value;
  }
  public resetEvpnTag() {
    this._evpnTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnTagInput() {
    return this._evpnTag;
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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

  // neighbor - computed: false, optional: true, required: false
  private _neighbor?: string[]; 
  public get neighbor() {
    return cdktf.Fn.tolist(this.getListAttribute('neighbor'));
  }
  public set neighbor(value: string[]) {
    this._neighbor = value;
  }
  public resetNeighbor() {
    this._neighbor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor;
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop?: string[]; 
  public get nextHop() {
    return cdktf.Fn.tolist(this.getListAttribute('next_hop'));
  }
  public set nextHop(value: string[]) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // next_hop_type_merged - computed: false, optional: true, required: false
  private _nextHopTypeMerged?: boolean | cdktf.IResolvable; 
  public get nextHopTypeMerged() {
    return this.getBooleanAttribute('next_hop_type_merged');
  }
  public set nextHopTypeMerged(value: boolean | cdktf.IResolvable) {
    this._nextHopTypeMerged = value;
  }
  public resetNextHopTypeMerged() {
    this._nextHopTypeMerged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopTypeMergedInput() {
    return this._nextHopTypeMerged;
  }

  // ospf_area - computed: false, optional: true, required: false
  private _ospfArea?: string; 
  public get ospfArea() {
    return this.getStringAttribute('ospf_area');
  }
  public set ospfArea(value: string) {
    this._ospfArea = value;
  }
  public resetOspfArea() {
    this._ospfArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfAreaInput() {
    return this._ospfArea;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string[]; 
  public get policy() {
    return this.getListAttribute('policy');
  }
  public set policy(value: string[]) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // preference - computed: false, optional: true, required: false
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string[]; 
  public get prefixList() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_list'));
  }
  public set prefixList(value: string[]) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string[]; 
  public get protocol() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol'));
  }
  public set protocol(value: string[]) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // route_type - computed: false, optional: true, required: false
  private _routeType?: string; 
  public get routeType() {
    return this.getStringAttribute('route_type');
  }
  public set routeType(value: string) {
    this._routeType = value;
  }
  public resetRouteType() {
    this._routeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTypeInput() {
    return this._routeType;
  }

  // routing_instance - computed: false, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // srte_color - computed: false, optional: true, required: false
  private _srteColor?: number; 
  public get srteColor() {
    return this.getNumberAttribute('srte_color');
  }
  public set srteColor(value: number) {
    this._srteColor = value;
  }
  public resetSrteColor() {
    this._srteColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srteColorInput() {
    return this._srteColor;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // tunnel_type - computed: false, optional: true, required: false
  private _tunnelType?: string[]; 
  public get tunnelType() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel_type'));
  }
  public set tunnelType(value: string[]) {
    this._tunnelType = value;
  }
  public resetTunnelType() {
    this._tunnelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelTypeInput() {
    return this._tunnelType;
  }

  // validation_database - computed: false, optional: true, required: false
  private _validationDatabase?: string; 
  public get validationDatabase() {
    return this.getStringAttribute('validation_database');
  }
  public set validationDatabase(value: string) {
    this._validationDatabase = value;
  }
  public resetValidationDatabase() {
    this._validationDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationDatabaseInput() {
    return this._validationDatabase;
  }

  // bgp_as_path_calc_length - computed: false, optional: true, required: false
  private _bgpAsPathCalcLength = new PolicyoptionsPolicyStatementTermFromBgpAsPathCalcLengthList(this, "bgp_as_path_calc_length", true);
  public get bgpAsPathCalcLength() {
    return this._bgpAsPathCalcLength;
  }
  public putBgpAsPathCalcLength(value: PolicyoptionsPolicyStatementTermFromBgpAsPathCalcLength[] | cdktf.IResolvable) {
    this._bgpAsPathCalcLength.internalValue = value;
  }
  public resetBgpAsPathCalcLength() {
    this._bgpAsPathCalcLength.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAsPathCalcLengthInput() {
    return this._bgpAsPathCalcLength.internalValue;
  }

  // bgp_as_path_unique_count - computed: false, optional: true, required: false
  private _bgpAsPathUniqueCount = new PolicyoptionsPolicyStatementTermFromBgpAsPathUniqueCountList(this, "bgp_as_path_unique_count", true);
  public get bgpAsPathUniqueCount() {
    return this._bgpAsPathUniqueCount;
  }
  public putBgpAsPathUniqueCount(value: PolicyoptionsPolicyStatementTermFromBgpAsPathUniqueCount[] | cdktf.IResolvable) {
    this._bgpAsPathUniqueCount.internalValue = value;
  }
  public resetBgpAsPathUniqueCount() {
    this._bgpAsPathUniqueCount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAsPathUniqueCountInput() {
    return this._bgpAsPathUniqueCount.internalValue;
  }

  // bgp_community_count - computed: false, optional: true, required: false
  private _bgpCommunityCount = new PolicyoptionsPolicyStatementTermFromBgpCommunityCountList(this, "bgp_community_count", true);
  public get bgpCommunityCount() {
    return this._bgpCommunityCount;
  }
  public putBgpCommunityCount(value: PolicyoptionsPolicyStatementTermFromBgpCommunityCount[] | cdktf.IResolvable) {
    this._bgpCommunityCount.internalValue = value;
  }
  public resetBgpCommunityCount() {
    this._bgpCommunityCount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpCommunityCountInput() {
    return this._bgpCommunityCount.internalValue;
  }

  // next_hop_weight - computed: false, optional: true, required: false
  private _nextHopWeight = new PolicyoptionsPolicyStatementTermFromNextHopWeightList(this, "next_hop_weight", true);
  public get nextHopWeight() {
    return this._nextHopWeight;
  }
  public putNextHopWeight(value: PolicyoptionsPolicyStatementTermFromNextHopWeight[] | cdktf.IResolvable) {
    this._nextHopWeight.internalValue = value;
  }
  public resetNextHopWeight() {
    this._nextHopWeight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopWeightInput() {
    return this._nextHopWeight.internalValue;
  }

  // route_filter - computed: false, optional: true, required: false
  private _routeFilter = new PolicyoptionsPolicyStatementTermFromRouteFilterList(this, "route_filter", false);
  public get routeFilter() {
    return this._routeFilter;
  }
  public putRouteFilter(value: PolicyoptionsPolicyStatementTermFromRouteFilter[] | cdktf.IResolvable) {
    this._routeFilter.internalValue = value;
  }
  public resetRouteFilter() {
    this._routeFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeFilterInput() {
    return this._routeFilter.internalValue;
  }
}
export interface PolicyoptionsPolicyStatementTermThenCommunity {
  /**
  * Action on BGP community.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#action PolicyoptionsPolicyStatement#action}
  */
  readonly action: string;
  /**
  * Name to identify a BGP community.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#value PolicyoptionsPolicyStatement#value}
  */
  readonly value: string;
}

export function policyoptionsPolicyStatementTermThenCommunityToTerraform(struct?: PolicyoptionsPolicyStatementTermThenCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function policyoptionsPolicyStatementTermThenCommunityToHclTerraform(struct?: PolicyoptionsPolicyStatementTermThenCommunity | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyoptionsPolicyStatementTermThenCommunityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyoptionsPolicyStatementTermThenCommunity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyoptionsPolicyStatementTermThenCommunity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._value = value.value;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PolicyoptionsPolicyStatementTermThenCommunityList extends cdktf.ComplexList {
  public internalValue? : PolicyoptionsPolicyStatementTermThenCommunity[] | cdktf.IResolvable

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
  public get(index: number): PolicyoptionsPolicyStatementTermThenCommunityOutputReference {
    return new PolicyoptionsPolicyStatementTermThenCommunityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyoptionsPolicyStatementTermThenLocalPreference {
  /**
  * Action on local-preference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#action PolicyoptionsPolicyStatement#action}
  */
  readonly action?: string;
  /**
  * Value for action (local-preference, constant).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#value PolicyoptionsPolicyStatement#value}
  */
  readonly value?: number;
}

export function policyoptionsPolicyStatementTermThenLocalPreferenceToTerraform(struct?: PolicyoptionsPolicyStatementTermThenLocalPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function policyoptionsPolicyStatementTermThenLocalPreferenceToHclTerraform(struct?: PolicyoptionsPolicyStatementTermThenLocalPreference | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyoptionsPolicyStatementTermThenLocalPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PolicyoptionsPolicyStatementTermThenLocalPreference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyoptionsPolicyStatementTermThenLocalPreference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PolicyoptionsPolicyStatementTermThenMetric {
  /**
  * Action on metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#action PolicyoptionsPolicyStatement#action}
  */
  readonly action?: string;
  /**
  * Value for action (metric, constant).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#value PolicyoptionsPolicyStatement#value}
  */
  readonly value?: number;
}

export function policyoptionsPolicyStatementTermThenMetricToTerraform(struct?: PolicyoptionsPolicyStatementTermThenMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function policyoptionsPolicyStatementTermThenMetricToHclTerraform(struct?: PolicyoptionsPolicyStatementTermThenMetric | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyoptionsPolicyStatementTermThenMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PolicyoptionsPolicyStatementTermThenMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyoptionsPolicyStatementTermThenMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PolicyoptionsPolicyStatementTermThenPreference {
  /**
  * Action on preference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#action PolicyoptionsPolicyStatement#action}
  */
  readonly action?: string;
  /**
  * Value for action (preference, constant).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#value PolicyoptionsPolicyStatement#value}
  */
  readonly value?: number;
}

export function policyoptionsPolicyStatementTermThenPreferenceToTerraform(struct?: PolicyoptionsPolicyStatementTermThenPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function policyoptionsPolicyStatementTermThenPreferenceToHclTerraform(struct?: PolicyoptionsPolicyStatementTermThenPreference | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyoptionsPolicyStatementTermThenPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PolicyoptionsPolicyStatementTermThenPreference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyoptionsPolicyStatementTermThenPreference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PolicyoptionsPolicyStatementTermThen {
  /**
  * Action `accept` or `reject`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#action PolicyoptionsPolicyStatement#action}
  */
  readonly action?: string;
  /**
  * Prepend AS numbers prior to adding local-as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#as_path_expand PolicyoptionsPolicyStatement#as_path_expand}
  */
  readonly asPathExpand?: string;
  /**
  * Prepend AS numbers to an AS path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#as_path_prepend PolicyoptionsPolicyStatement#as_path_prepend}
  */
  readonly asPathPrepend?: string;
  /**
  * Set default policy action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#default_action PolicyoptionsPolicyStatement#default_action}
  */
  readonly defaultAction?: string;
  /**
  * Type of load balancing in forwarding table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#load_balance PolicyoptionsPolicyStatement#load_balance}
  */
  readonly loadBalance?: string;
  /**
  * Skip to next `policy` or `term`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#next PolicyoptionsPolicyStatement#next}
  */
  readonly next?: string;
  /**
  * Set the address of the next-hop router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#next_hop PolicyoptionsPolicyStatement#next_hop}
  */
  readonly nextHop?: string;
  /**
  * BGP path origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#origin PolicyoptionsPolicyStatement#origin}
  */
  readonly origin?: string;
  /**
  * community block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#community PolicyoptionsPolicyStatement#community}
  */
  readonly community?: PolicyoptionsPolicyStatementTermThenCommunity[] | cdktf.IResolvable;
  /**
  * local_preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#local_preference PolicyoptionsPolicyStatement#local_preference}
  */
  readonly localPreference?: PolicyoptionsPolicyStatementTermThenLocalPreference;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#metric PolicyoptionsPolicyStatement#metric}
  */
  readonly metric?: PolicyoptionsPolicyStatementTermThenMetric;
  /**
  * preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#preference PolicyoptionsPolicyStatement#preference}
  */
  readonly preference?: PolicyoptionsPolicyStatementTermThenPreference;
}

export function policyoptionsPolicyStatementTermThenToTerraform(struct?: PolicyoptionsPolicyStatementTermThen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    as_path_expand: cdktf.stringToTerraform(struct!.asPathExpand),
    as_path_prepend: cdktf.stringToTerraform(struct!.asPathPrepend),
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    load_balance: cdktf.stringToTerraform(struct!.loadBalance),
    next: cdktf.stringToTerraform(struct!.next),
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    origin: cdktf.stringToTerraform(struct!.origin),
    community: cdktf.listMapper(policyoptionsPolicyStatementTermThenCommunityToTerraform, true)(struct!.community),
    local_preference: policyoptionsPolicyStatementTermThenLocalPreferenceToTerraform(struct!.localPreference),
    metric: policyoptionsPolicyStatementTermThenMetricToTerraform(struct!.metric),
    preference: policyoptionsPolicyStatementTermThenPreferenceToTerraform(struct!.preference),
  }
}


export function policyoptionsPolicyStatementTermThenToHclTerraform(struct?: PolicyoptionsPolicyStatementTermThen | cdktf.IResolvable): any {
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
    as_path_expand: {
      value: cdktf.stringToHclTerraform(struct!.asPathExpand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    as_path_prepend: {
      value: cdktf.stringToHclTerraform(struct!.asPathPrepend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_action: {
      value: cdktf.stringToHclTerraform(struct!.defaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balance: {
      value: cdktf.stringToHclTerraform(struct!.loadBalance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next: {
      value: cdktf.stringToHclTerraform(struct!.next),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    community: {
      value: cdktf.listMapperHcl(policyoptionsPolicyStatementTermThenCommunityToHclTerraform, true)(struct!.community),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyoptionsPolicyStatementTermThenCommunityList",
    },
    local_preference: {
      value: policyoptionsPolicyStatementTermThenLocalPreferenceToHclTerraform(struct!.localPreference),
      isBlock: true,
      type: "struct",
      storageClassType: "PolicyoptionsPolicyStatementTermThenLocalPreference",
    },
    metric: {
      value: policyoptionsPolicyStatementTermThenMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "PolicyoptionsPolicyStatementTermThenMetric",
    },
    preference: {
      value: policyoptionsPolicyStatementTermThenPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "struct",
      storageClassType: "PolicyoptionsPolicyStatementTermThenPreference",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyoptionsPolicyStatementTermThenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PolicyoptionsPolicyStatementTermThen | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._asPathExpand !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPathExpand = this._asPathExpand;
    }
    if (this._asPathPrepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPathPrepend = this._asPathPrepend;
    }
    if (this._defaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    if (this._loadBalance !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalance = this._loadBalance;
    }
    if (this._next !== undefined) {
      hasAnyValues = true;
      internalValueResult.next = this._next;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._community?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community?.internalValue;
    }
    if (this._localPreference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference?.internalValue;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._preference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyoptionsPolicyStatementTermThen | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._asPathExpand = undefined;
      this._asPathPrepend = undefined;
      this._defaultAction = undefined;
      this._loadBalance = undefined;
      this._next = undefined;
      this._nextHop = undefined;
      this._origin = undefined;
      this._community.internalValue = undefined;
      this._localPreference.internalValue = undefined;
      this._metric.internalValue = undefined;
      this._preference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._asPathExpand = value.asPathExpand;
      this._asPathPrepend = value.asPathPrepend;
      this._defaultAction = value.defaultAction;
      this._loadBalance = value.loadBalance;
      this._next = value.next;
      this._nextHop = value.nextHop;
      this._origin = value.origin;
      this._community.internalValue = value.community;
      this._localPreference.internalValue = value.localPreference;
      this._metric.internalValue = value.metric;
      this._preference.internalValue = value.preference;
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

  // as_path_expand - computed: false, optional: true, required: false
  private _asPathExpand?: string; 
  public get asPathExpand() {
    return this.getStringAttribute('as_path_expand');
  }
  public set asPathExpand(value: string) {
    this._asPathExpand = value;
  }
  public resetAsPathExpand() {
    this._asPathExpand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathExpandInput() {
    return this._asPathExpand;
  }

  // as_path_prepend - computed: false, optional: true, required: false
  private _asPathPrepend?: string; 
  public get asPathPrepend() {
    return this.getStringAttribute('as_path_prepend');
  }
  public set asPathPrepend(value: string) {
    this._asPathPrepend = value;
  }
  public resetAsPathPrepend() {
    this._asPathPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathPrependInput() {
    return this._asPathPrepend;
  }

  // default_action - computed: false, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // load_balance - computed: false, optional: true, required: false
  private _loadBalance?: string; 
  public get loadBalance() {
    return this.getStringAttribute('load_balance');
  }
  public set loadBalance(value: string) {
    this._loadBalance = value;
  }
  public resetLoadBalance() {
    this._loadBalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalanceInput() {
    return this._loadBalance;
  }

  // next - computed: false, optional: true, required: false
  private _next?: string; 
  public get next() {
    return this.getStringAttribute('next');
  }
  public set next(value: string) {
    this._next = value;
  }
  public resetNext() {
    this._next = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextInput() {
    return this._next;
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // community - computed: false, optional: true, required: false
  private _community = new PolicyoptionsPolicyStatementTermThenCommunityList(this, "community", false);
  public get community() {
    return this._community;
  }
  public putCommunity(value: PolicyoptionsPolicyStatementTermThenCommunity[] | cdktf.IResolvable) {
    this._community.internalValue = value;
  }
  public resetCommunity() {
    this._community.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community.internalValue;
  }

  // local_preference - computed: false, optional: true, required: false
  private _localPreference = new PolicyoptionsPolicyStatementTermThenLocalPreferenceOutputReference(this, "local_preference");
  public get localPreference() {
    return this._localPreference;
  }
  public putLocalPreference(value: PolicyoptionsPolicyStatementTermThenLocalPreference) {
    this._localPreference.internalValue = value;
  }
  public resetLocalPreference() {
    this._localPreference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPreferenceInput() {
    return this._localPreference.internalValue;
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new PolicyoptionsPolicyStatementTermThenMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: PolicyoptionsPolicyStatementTermThenMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // preference - computed: false, optional: true, required: false
  private _preference = new PolicyoptionsPolicyStatementTermThenPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: PolicyoptionsPolicyStatementTermThenPreference) {
    this._preference.internalValue = value;
  }
  public resetPreference() {
    this._preference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference.internalValue;
  }
}
export interface PolicyoptionsPolicyStatementTermTo {
  /**
  * Name of AS path regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#bgp_as_path PolicyoptionsPolicyStatement#bgp_as_path}
  */
  readonly bgpAsPath?: string[];
  /**
  * Name of AS path group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#bgp_as_path_group PolicyoptionsPolicyStatement#bgp_as_path_group}
  */
  readonly bgpAsPathGroup?: string[];
  /**
  * BGP community.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#bgp_community PolicyoptionsPolicyStatement#bgp_community}
  */
  readonly bgpCommunity?: string[];
  /**
  * BGP origin attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#bgp_origin PolicyoptionsPolicyStatement#bgp_origin}
  */
  readonly bgpOrigin?: string;
  /**
  * Family.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#family PolicyoptionsPolicyStatement#family}
  */
  readonly family?: string;
  /**
  * Interface name or address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#interface PolicyoptionsPolicyStatement#interface}
  */
  readonly interface?: string[];
  /**
  * Local preference associated with a route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#local_preference PolicyoptionsPolicyStatement#local_preference}
  */
  readonly localPreference?: number;
  /**
  * Metric value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#metric PolicyoptionsPolicyStatement#metric}
  */
  readonly metric?: number;
  /**
  * Neighboring router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#neighbor PolicyoptionsPolicyStatement#neighbor}
  */
  readonly neighbor?: string[];
  /**
  * Next-hop router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#next_hop PolicyoptionsPolicyStatement#next_hop}
  */
  readonly nextHop?: string[];
  /**
  * OSPF area identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#ospf_area PolicyoptionsPolicyStatement#ospf_area}
  */
  readonly ospfArea?: string;
  /**
  * Name of policy to evaluate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#policy PolicyoptionsPolicyStatement#policy}
  */
  readonly policy?: string[];
  /**
  * Preference value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#preference PolicyoptionsPolicyStatement#preference}
  */
  readonly preference?: number;
  /**
  * Protocol from which route was learned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#protocol PolicyoptionsPolicyStatement#protocol}
  */
  readonly protocol?: string[];
  /**
  * Routing protocol instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#routing_instance PolicyoptionsPolicyStatement#routing_instance}
  */
  readonly routingInstance?: string;
}

export function policyoptionsPolicyStatementTermToToTerraform(struct?: PolicyoptionsPolicyStatementTermTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_as_path: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bgpAsPath),
    bgp_as_path_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bgpAsPathGroup),
    bgp_community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bgpCommunity),
    bgp_origin: cdktf.stringToTerraform(struct!.bgpOrigin),
    family: cdktf.stringToTerraform(struct!.family),
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    local_preference: cdktf.numberToTerraform(struct!.localPreference),
    metric: cdktf.numberToTerraform(struct!.metric),
    neighbor: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.neighbor),
    next_hop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nextHop),
    ospf_area: cdktf.stringToTerraform(struct!.ospfArea),
    policy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policy),
    preference: cdktf.numberToTerraform(struct!.preference),
    protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocol),
    routing_instance: cdktf.stringToTerraform(struct!.routingInstance),
  }
}


export function policyoptionsPolicyStatementTermToToHclTerraform(struct?: PolicyoptionsPolicyStatementTermTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp_as_path: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bgpAsPath),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bgp_as_path_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bgpAsPathGroup),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bgp_community: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bgpCommunity),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bgp_origin: {
      value: cdktf.stringToHclTerraform(struct!.bgpOrigin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    neighbor: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.neighbor),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    next_hop: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nextHop),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ospf_area: {
      value: cdktf.stringToHclTerraform(struct!.ospfArea),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    preference: {
      value: cdktf.numberToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocol),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    routing_instance: {
      value: cdktf.stringToHclTerraform(struct!.routingInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyoptionsPolicyStatementTermToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PolicyoptionsPolicyStatementTermTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpAsPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpAsPath = this._bgpAsPath;
    }
    if (this._bgpAsPathGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpAsPathGroup = this._bgpAsPathGroup;
    }
    if (this._bgpCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpCommunity = this._bgpCommunity;
    }
    if (this._bgpOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpOrigin = this._bgpOrigin;
    }
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._localPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._neighbor !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._ospfArea !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfArea = this._ospfArea;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._routingInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingInstance = this._routingInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyoptionsPolicyStatementTermTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgpAsPath = undefined;
      this._bgpAsPathGroup = undefined;
      this._bgpCommunity = undefined;
      this._bgpOrigin = undefined;
      this._family = undefined;
      this._interface = undefined;
      this._localPreference = undefined;
      this._metric = undefined;
      this._neighbor = undefined;
      this._nextHop = undefined;
      this._ospfArea = undefined;
      this._policy = undefined;
      this._preference = undefined;
      this._protocol = undefined;
      this._routingInstance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgpAsPath = value.bgpAsPath;
      this._bgpAsPathGroup = value.bgpAsPathGroup;
      this._bgpCommunity = value.bgpCommunity;
      this._bgpOrigin = value.bgpOrigin;
      this._family = value.family;
      this._interface = value.interface;
      this._localPreference = value.localPreference;
      this._metric = value.metric;
      this._neighbor = value.neighbor;
      this._nextHop = value.nextHop;
      this._ospfArea = value.ospfArea;
      this._policy = value.policy;
      this._preference = value.preference;
      this._protocol = value.protocol;
      this._routingInstance = value.routingInstance;
    }
  }

  // bgp_as_path - computed: false, optional: true, required: false
  private _bgpAsPath?: string[]; 
  public get bgpAsPath() {
    return cdktf.Fn.tolist(this.getListAttribute('bgp_as_path'));
  }
  public set bgpAsPath(value: string[]) {
    this._bgpAsPath = value;
  }
  public resetBgpAsPath() {
    this._bgpAsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAsPathInput() {
    return this._bgpAsPath;
  }

  // bgp_as_path_group - computed: false, optional: true, required: false
  private _bgpAsPathGroup?: string[]; 
  public get bgpAsPathGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('bgp_as_path_group'));
  }
  public set bgpAsPathGroup(value: string[]) {
    this._bgpAsPathGroup = value;
  }
  public resetBgpAsPathGroup() {
    this._bgpAsPathGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAsPathGroupInput() {
    return this._bgpAsPathGroup;
  }

  // bgp_community - computed: false, optional: true, required: false
  private _bgpCommunity?: string[]; 
  public get bgpCommunity() {
    return cdktf.Fn.tolist(this.getListAttribute('bgp_community'));
  }
  public set bgpCommunity(value: string[]) {
    this._bgpCommunity = value;
  }
  public resetBgpCommunity() {
    this._bgpCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpCommunityInput() {
    return this._bgpCommunity;
  }

  // bgp_origin - computed: false, optional: true, required: false
  private _bgpOrigin?: string; 
  public get bgpOrigin() {
    return this.getStringAttribute('bgp_origin');
  }
  public set bgpOrigin(value: string) {
    this._bgpOrigin = value;
  }
  public resetBgpOrigin() {
    this._bgpOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpOriginInput() {
    return this._bgpOrigin;
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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

  // neighbor - computed: false, optional: true, required: false
  private _neighbor?: string[]; 
  public get neighbor() {
    return cdktf.Fn.tolist(this.getListAttribute('neighbor'));
  }
  public set neighbor(value: string[]) {
    this._neighbor = value;
  }
  public resetNeighbor() {
    this._neighbor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor;
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop?: string[]; 
  public get nextHop() {
    return cdktf.Fn.tolist(this.getListAttribute('next_hop'));
  }
  public set nextHop(value: string[]) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // ospf_area - computed: false, optional: true, required: false
  private _ospfArea?: string; 
  public get ospfArea() {
    return this.getStringAttribute('ospf_area');
  }
  public set ospfArea(value: string) {
    this._ospfArea = value;
  }
  public resetOspfArea() {
    this._ospfArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfAreaInput() {
    return this._ospfArea;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string[]; 
  public get policy() {
    return this.getListAttribute('policy');
  }
  public set policy(value: string[]) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // preference - computed: false, optional: true, required: false
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string[]; 
  public get protocol() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol'));
  }
  public set protocol(value: string[]) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // routing_instance - computed: false, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }
}
export interface PolicyoptionsPolicyStatementTerm {
  /**
  * Name of term.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#name PolicyoptionsPolicyStatement#name}
  */
  readonly name: string;
  /**
  * from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#from PolicyoptionsPolicyStatement#from}
  */
  readonly from?: PolicyoptionsPolicyStatementTermFrom;
  /**
  * then block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#then PolicyoptionsPolicyStatement#then}
  */
  readonly then?: PolicyoptionsPolicyStatementTermThen;
  /**
  * to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#to PolicyoptionsPolicyStatement#to}
  */
  readonly to?: PolicyoptionsPolicyStatementTermTo;
}

export function policyoptionsPolicyStatementTermToTerraform(struct?: PolicyoptionsPolicyStatementTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    from: policyoptionsPolicyStatementTermFromToTerraform(struct!.from),
    then: policyoptionsPolicyStatementTermThenToTerraform(struct!.then),
    to: policyoptionsPolicyStatementTermToToTerraform(struct!.to),
  }
}


export function policyoptionsPolicyStatementTermToHclTerraform(struct?: PolicyoptionsPolicyStatementTerm | cdktf.IResolvable): any {
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
    from: {
      value: policyoptionsPolicyStatementTermFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "PolicyoptionsPolicyStatementTermFrom",
    },
    then: {
      value: policyoptionsPolicyStatementTermThenToHclTerraform(struct!.then),
      isBlock: true,
      type: "struct",
      storageClassType: "PolicyoptionsPolicyStatementTermThen",
    },
    to: {
      value: policyoptionsPolicyStatementTermToToHclTerraform(struct!.to),
      isBlock: true,
      type: "struct",
      storageClassType: "PolicyoptionsPolicyStatementTermTo",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyoptionsPolicyStatementTermOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyoptionsPolicyStatementTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._then?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.then = this._then?.internalValue;
    }
    if (this._to?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyoptionsPolicyStatementTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._from.internalValue = undefined;
      this._then.internalValue = undefined;
      this._to.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._from.internalValue = value.from;
      this._then.internalValue = value.then;
      this._to.internalValue = value.to;
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

  // from - computed: false, optional: true, required: false
  private _from = new PolicyoptionsPolicyStatementTermFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: PolicyoptionsPolicyStatementTermFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // then - computed: false, optional: true, required: false
  private _then = new PolicyoptionsPolicyStatementTermThenOutputReference(this, "then");
  public get then() {
    return this._then;
  }
  public putThen(value: PolicyoptionsPolicyStatementTermThen) {
    this._then.internalValue = value;
  }
  public resetThen() {
    this._then.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thenInput() {
    return this._then.internalValue;
  }

  // to - computed: false, optional: true, required: false
  private _to = new PolicyoptionsPolicyStatementTermToOutputReference(this, "to");
  public get to() {
    return this._to;
  }
  public putTo(value: PolicyoptionsPolicyStatementTermTo) {
    this._to.internalValue = value;
  }
  public resetTo() {
    this._to.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }
}

export class PolicyoptionsPolicyStatementTermList extends cdktf.ComplexList {
  public internalValue? : PolicyoptionsPolicyStatementTerm[] | cdktf.IResolvable

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
  public get(index: number): PolicyoptionsPolicyStatementTermOutputReference {
    return new PolicyoptionsPolicyStatementTermOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyoptionsPolicyStatementThenCommunity {
  /**
  * Action on BGP community.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#action PolicyoptionsPolicyStatement#action}
  */
  readonly action: string;
  /**
  * Name to identify a BGP community.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#value PolicyoptionsPolicyStatement#value}
  */
  readonly value: string;
}

export function policyoptionsPolicyStatementThenCommunityToTerraform(struct?: PolicyoptionsPolicyStatementThenCommunity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function policyoptionsPolicyStatementThenCommunityToHclTerraform(struct?: PolicyoptionsPolicyStatementThenCommunity | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyoptionsPolicyStatementThenCommunityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyoptionsPolicyStatementThenCommunity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyoptionsPolicyStatementThenCommunity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._value = value.value;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PolicyoptionsPolicyStatementThenCommunityList extends cdktf.ComplexList {
  public internalValue? : PolicyoptionsPolicyStatementThenCommunity[] | cdktf.IResolvable

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
  public get(index: number): PolicyoptionsPolicyStatementThenCommunityOutputReference {
    return new PolicyoptionsPolicyStatementThenCommunityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyoptionsPolicyStatementThenLocalPreference {
  /**
  * Action on local-preference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#action PolicyoptionsPolicyStatement#action}
  */
  readonly action?: string;
  /**
  * Value for action (local-preference, constant).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#value PolicyoptionsPolicyStatement#value}
  */
  readonly value?: number;
}

export function policyoptionsPolicyStatementThenLocalPreferenceToTerraform(struct?: PolicyoptionsPolicyStatementThenLocalPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function policyoptionsPolicyStatementThenLocalPreferenceToHclTerraform(struct?: PolicyoptionsPolicyStatementThenLocalPreference | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyoptionsPolicyStatementThenLocalPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PolicyoptionsPolicyStatementThenLocalPreference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyoptionsPolicyStatementThenLocalPreference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PolicyoptionsPolicyStatementThenMetric {
  /**
  * Action on metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#action PolicyoptionsPolicyStatement#action}
  */
  readonly action?: string;
  /**
  * Value for action (metric, constant).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#value PolicyoptionsPolicyStatement#value}
  */
  readonly value?: number;
}

export function policyoptionsPolicyStatementThenMetricToTerraform(struct?: PolicyoptionsPolicyStatementThenMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function policyoptionsPolicyStatementThenMetricToHclTerraform(struct?: PolicyoptionsPolicyStatementThenMetric | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyoptionsPolicyStatementThenMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PolicyoptionsPolicyStatementThenMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyoptionsPolicyStatementThenMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PolicyoptionsPolicyStatementThenPreference {
  /**
  * Action on preference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#action PolicyoptionsPolicyStatement#action}
  */
  readonly action?: string;
  /**
  * Value for action (preference, constant).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#value PolicyoptionsPolicyStatement#value}
  */
  readonly value?: number;
}

export function policyoptionsPolicyStatementThenPreferenceToTerraform(struct?: PolicyoptionsPolicyStatementThenPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function policyoptionsPolicyStatementThenPreferenceToHclTerraform(struct?: PolicyoptionsPolicyStatementThenPreference | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyoptionsPolicyStatementThenPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PolicyoptionsPolicyStatementThenPreference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyoptionsPolicyStatementThenPreference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface PolicyoptionsPolicyStatementThen {
  /**
  * Action `accept` or `reject`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#action PolicyoptionsPolicyStatement#action}
  */
  readonly action?: string;
  /**
  * Prepend AS numbers prior to adding local-as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#as_path_expand PolicyoptionsPolicyStatement#as_path_expand}
  */
  readonly asPathExpand?: string;
  /**
  * Prepend AS numbers to an AS path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#as_path_prepend PolicyoptionsPolicyStatement#as_path_prepend}
  */
  readonly asPathPrepend?: string;
  /**
  * Set default policy action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#default_action PolicyoptionsPolicyStatement#default_action}
  */
  readonly defaultAction?: string;
  /**
  * Type of load balancing in forwarding table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#load_balance PolicyoptionsPolicyStatement#load_balance}
  */
  readonly loadBalance?: string;
  /**
  * Skip to next `policy` or `term`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#next PolicyoptionsPolicyStatement#next}
  */
  readonly next?: string;
  /**
  * Set the address of the next-hop router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#next_hop PolicyoptionsPolicyStatement#next_hop}
  */
  readonly nextHop?: string;
  /**
  * BGP path origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#origin PolicyoptionsPolicyStatement#origin}
  */
  readonly origin?: string;
  /**
  * community block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#community PolicyoptionsPolicyStatement#community}
  */
  readonly community?: PolicyoptionsPolicyStatementThenCommunity[] | cdktf.IResolvable;
  /**
  * local_preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#local_preference PolicyoptionsPolicyStatement#local_preference}
  */
  readonly localPreference?: PolicyoptionsPolicyStatementThenLocalPreference;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#metric PolicyoptionsPolicyStatement#metric}
  */
  readonly metric?: PolicyoptionsPolicyStatementThenMetric;
  /**
  * preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#preference PolicyoptionsPolicyStatement#preference}
  */
  readonly preference?: PolicyoptionsPolicyStatementThenPreference;
}

export function policyoptionsPolicyStatementThenToTerraform(struct?: PolicyoptionsPolicyStatementThen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    as_path_expand: cdktf.stringToTerraform(struct!.asPathExpand),
    as_path_prepend: cdktf.stringToTerraform(struct!.asPathPrepend),
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    load_balance: cdktf.stringToTerraform(struct!.loadBalance),
    next: cdktf.stringToTerraform(struct!.next),
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    origin: cdktf.stringToTerraform(struct!.origin),
    community: cdktf.listMapper(policyoptionsPolicyStatementThenCommunityToTerraform, true)(struct!.community),
    local_preference: policyoptionsPolicyStatementThenLocalPreferenceToTerraform(struct!.localPreference),
    metric: policyoptionsPolicyStatementThenMetricToTerraform(struct!.metric),
    preference: policyoptionsPolicyStatementThenPreferenceToTerraform(struct!.preference),
  }
}


export function policyoptionsPolicyStatementThenToHclTerraform(struct?: PolicyoptionsPolicyStatementThen | cdktf.IResolvable): any {
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
    as_path_expand: {
      value: cdktf.stringToHclTerraform(struct!.asPathExpand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    as_path_prepend: {
      value: cdktf.stringToHclTerraform(struct!.asPathPrepend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_action: {
      value: cdktf.stringToHclTerraform(struct!.defaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    load_balance: {
      value: cdktf.stringToHclTerraform(struct!.loadBalance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next: {
      value: cdktf.stringToHclTerraform(struct!.next),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    community: {
      value: cdktf.listMapperHcl(policyoptionsPolicyStatementThenCommunityToHclTerraform, true)(struct!.community),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyoptionsPolicyStatementThenCommunityList",
    },
    local_preference: {
      value: policyoptionsPolicyStatementThenLocalPreferenceToHclTerraform(struct!.localPreference),
      isBlock: true,
      type: "struct",
      storageClassType: "PolicyoptionsPolicyStatementThenLocalPreference",
    },
    metric: {
      value: policyoptionsPolicyStatementThenMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "PolicyoptionsPolicyStatementThenMetric",
    },
    preference: {
      value: policyoptionsPolicyStatementThenPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "struct",
      storageClassType: "PolicyoptionsPolicyStatementThenPreference",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyoptionsPolicyStatementThenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PolicyoptionsPolicyStatementThen | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._asPathExpand !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPathExpand = this._asPathExpand;
    }
    if (this._asPathPrepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPathPrepend = this._asPathPrepend;
    }
    if (this._defaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    if (this._loadBalance !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalance = this._loadBalance;
    }
    if (this._next !== undefined) {
      hasAnyValues = true;
      internalValueResult.next = this._next;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._community?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community?.internalValue;
    }
    if (this._localPreference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference?.internalValue;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._preference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyoptionsPolicyStatementThen | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._asPathExpand = undefined;
      this._asPathPrepend = undefined;
      this._defaultAction = undefined;
      this._loadBalance = undefined;
      this._next = undefined;
      this._nextHop = undefined;
      this._origin = undefined;
      this._community.internalValue = undefined;
      this._localPreference.internalValue = undefined;
      this._metric.internalValue = undefined;
      this._preference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._asPathExpand = value.asPathExpand;
      this._asPathPrepend = value.asPathPrepend;
      this._defaultAction = value.defaultAction;
      this._loadBalance = value.loadBalance;
      this._next = value.next;
      this._nextHop = value.nextHop;
      this._origin = value.origin;
      this._community.internalValue = value.community;
      this._localPreference.internalValue = value.localPreference;
      this._metric.internalValue = value.metric;
      this._preference.internalValue = value.preference;
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

  // as_path_expand - computed: false, optional: true, required: false
  private _asPathExpand?: string; 
  public get asPathExpand() {
    return this.getStringAttribute('as_path_expand');
  }
  public set asPathExpand(value: string) {
    this._asPathExpand = value;
  }
  public resetAsPathExpand() {
    this._asPathExpand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathExpandInput() {
    return this._asPathExpand;
  }

  // as_path_prepend - computed: false, optional: true, required: false
  private _asPathPrepend?: string; 
  public get asPathPrepend() {
    return this.getStringAttribute('as_path_prepend');
  }
  public set asPathPrepend(value: string) {
    this._asPathPrepend = value;
  }
  public resetAsPathPrepend() {
    this._asPathPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathPrependInput() {
    return this._asPathPrepend;
  }

  // default_action - computed: false, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // load_balance - computed: false, optional: true, required: false
  private _loadBalance?: string; 
  public get loadBalance() {
    return this.getStringAttribute('load_balance');
  }
  public set loadBalance(value: string) {
    this._loadBalance = value;
  }
  public resetLoadBalance() {
    this._loadBalance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalanceInput() {
    return this._loadBalance;
  }

  // next - computed: false, optional: true, required: false
  private _next?: string; 
  public get next() {
    return this.getStringAttribute('next');
  }
  public set next(value: string) {
    this._next = value;
  }
  public resetNext() {
    this._next = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextInput() {
    return this._next;
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // community - computed: false, optional: true, required: false
  private _community = new PolicyoptionsPolicyStatementThenCommunityList(this, "community", false);
  public get community() {
    return this._community;
  }
  public putCommunity(value: PolicyoptionsPolicyStatementThenCommunity[] | cdktf.IResolvable) {
    this._community.internalValue = value;
  }
  public resetCommunity() {
    this._community.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community.internalValue;
  }

  // local_preference - computed: false, optional: true, required: false
  private _localPreference = new PolicyoptionsPolicyStatementThenLocalPreferenceOutputReference(this, "local_preference");
  public get localPreference() {
    return this._localPreference;
  }
  public putLocalPreference(value: PolicyoptionsPolicyStatementThenLocalPreference) {
    this._localPreference.internalValue = value;
  }
  public resetLocalPreference() {
    this._localPreference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPreferenceInput() {
    return this._localPreference.internalValue;
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new PolicyoptionsPolicyStatementThenMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: PolicyoptionsPolicyStatementThenMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // preference - computed: false, optional: true, required: false
  private _preference = new PolicyoptionsPolicyStatementThenPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: PolicyoptionsPolicyStatementThenPreference) {
    this._preference.internalValue = value;
  }
  public resetPreference() {
    this._preference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference.internalValue;
  }
}
export interface PolicyoptionsPolicyStatementTo {
  /**
  * Name of AS path regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#bgp_as_path PolicyoptionsPolicyStatement#bgp_as_path}
  */
  readonly bgpAsPath?: string[];
  /**
  * Name of AS path group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#bgp_as_path_group PolicyoptionsPolicyStatement#bgp_as_path_group}
  */
  readonly bgpAsPathGroup?: string[];
  /**
  * BGP community.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#bgp_community PolicyoptionsPolicyStatement#bgp_community}
  */
  readonly bgpCommunity?: string[];
  /**
  * BGP origin attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#bgp_origin PolicyoptionsPolicyStatement#bgp_origin}
  */
  readonly bgpOrigin?: string;
  /**
  * Family.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#family PolicyoptionsPolicyStatement#family}
  */
  readonly family?: string;
  /**
  * Interface name or address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#interface PolicyoptionsPolicyStatement#interface}
  */
  readonly interface?: string[];
  /**
  * Local preference associated with a route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#local_preference PolicyoptionsPolicyStatement#local_preference}
  */
  readonly localPreference?: number;
  /**
  * Metric value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#metric PolicyoptionsPolicyStatement#metric}
  */
  readonly metric?: number;
  /**
  * Neighboring router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#neighbor PolicyoptionsPolicyStatement#neighbor}
  */
  readonly neighbor?: string[];
  /**
  * Next-hop router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#next_hop PolicyoptionsPolicyStatement#next_hop}
  */
  readonly nextHop?: string[];
  /**
  * OSPF area identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#ospf_area PolicyoptionsPolicyStatement#ospf_area}
  */
  readonly ospfArea?: string;
  /**
  * Name of policy to evaluate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#policy PolicyoptionsPolicyStatement#policy}
  */
  readonly policy?: string[];
  /**
  * Preference value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#preference PolicyoptionsPolicyStatement#preference}
  */
  readonly preference?: number;
  /**
  * Protocol from which route was learned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#protocol PolicyoptionsPolicyStatement#protocol}
  */
  readonly protocol?: string[];
  /**
  * Routing protocol instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#routing_instance PolicyoptionsPolicyStatement#routing_instance}
  */
  readonly routingInstance?: string;
}

export function policyoptionsPolicyStatementToToTerraform(struct?: PolicyoptionsPolicyStatementTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_as_path: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bgpAsPath),
    bgp_as_path_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bgpAsPathGroup),
    bgp_community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bgpCommunity),
    bgp_origin: cdktf.stringToTerraform(struct!.bgpOrigin),
    family: cdktf.stringToTerraform(struct!.family),
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    local_preference: cdktf.numberToTerraform(struct!.localPreference),
    metric: cdktf.numberToTerraform(struct!.metric),
    neighbor: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.neighbor),
    next_hop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nextHop),
    ospf_area: cdktf.stringToTerraform(struct!.ospfArea),
    policy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policy),
    preference: cdktf.numberToTerraform(struct!.preference),
    protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocol),
    routing_instance: cdktf.stringToTerraform(struct!.routingInstance),
  }
}


export function policyoptionsPolicyStatementToToHclTerraform(struct?: PolicyoptionsPolicyStatementTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp_as_path: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bgpAsPath),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bgp_as_path_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bgpAsPathGroup),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bgp_community: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bgpCommunity),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bgp_origin: {
      value: cdktf.stringToHclTerraform(struct!.bgpOrigin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
    neighbor: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.neighbor),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    next_hop: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nextHop),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ospf_area: {
      value: cdktf.stringToHclTerraform(struct!.ospfArea),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    preference: {
      value: cdktf.numberToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocol),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    routing_instance: {
      value: cdktf.stringToHclTerraform(struct!.routingInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyoptionsPolicyStatementToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PolicyoptionsPolicyStatementTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpAsPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpAsPath = this._bgpAsPath;
    }
    if (this._bgpAsPathGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpAsPathGroup = this._bgpAsPathGroup;
    }
    if (this._bgpCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpCommunity = this._bgpCommunity;
    }
    if (this._bgpOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpOrigin = this._bgpOrigin;
    }
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._localPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._neighbor !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._ospfArea !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfArea = this._ospfArea;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._routingInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingInstance = this._routingInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyoptionsPolicyStatementTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgpAsPath = undefined;
      this._bgpAsPathGroup = undefined;
      this._bgpCommunity = undefined;
      this._bgpOrigin = undefined;
      this._family = undefined;
      this._interface = undefined;
      this._localPreference = undefined;
      this._metric = undefined;
      this._neighbor = undefined;
      this._nextHop = undefined;
      this._ospfArea = undefined;
      this._policy = undefined;
      this._preference = undefined;
      this._protocol = undefined;
      this._routingInstance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgpAsPath = value.bgpAsPath;
      this._bgpAsPathGroup = value.bgpAsPathGroup;
      this._bgpCommunity = value.bgpCommunity;
      this._bgpOrigin = value.bgpOrigin;
      this._family = value.family;
      this._interface = value.interface;
      this._localPreference = value.localPreference;
      this._metric = value.metric;
      this._neighbor = value.neighbor;
      this._nextHop = value.nextHop;
      this._ospfArea = value.ospfArea;
      this._policy = value.policy;
      this._preference = value.preference;
      this._protocol = value.protocol;
      this._routingInstance = value.routingInstance;
    }
  }

  // bgp_as_path - computed: false, optional: true, required: false
  private _bgpAsPath?: string[]; 
  public get bgpAsPath() {
    return cdktf.Fn.tolist(this.getListAttribute('bgp_as_path'));
  }
  public set bgpAsPath(value: string[]) {
    this._bgpAsPath = value;
  }
  public resetBgpAsPath() {
    this._bgpAsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAsPathInput() {
    return this._bgpAsPath;
  }

  // bgp_as_path_group - computed: false, optional: true, required: false
  private _bgpAsPathGroup?: string[]; 
  public get bgpAsPathGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('bgp_as_path_group'));
  }
  public set bgpAsPathGroup(value: string[]) {
    this._bgpAsPathGroup = value;
  }
  public resetBgpAsPathGroup() {
    this._bgpAsPathGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAsPathGroupInput() {
    return this._bgpAsPathGroup;
  }

  // bgp_community - computed: false, optional: true, required: false
  private _bgpCommunity?: string[]; 
  public get bgpCommunity() {
    return cdktf.Fn.tolist(this.getListAttribute('bgp_community'));
  }
  public set bgpCommunity(value: string[]) {
    this._bgpCommunity = value;
  }
  public resetBgpCommunity() {
    this._bgpCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpCommunityInput() {
    return this._bgpCommunity;
  }

  // bgp_origin - computed: false, optional: true, required: false
  private _bgpOrigin?: string; 
  public get bgpOrigin() {
    return this.getStringAttribute('bgp_origin');
  }
  public set bgpOrigin(value: string) {
    this._bgpOrigin = value;
  }
  public resetBgpOrigin() {
    this._bgpOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpOriginInput() {
    return this._bgpOrigin;
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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

  // neighbor - computed: false, optional: true, required: false
  private _neighbor?: string[]; 
  public get neighbor() {
    return cdktf.Fn.tolist(this.getListAttribute('neighbor'));
  }
  public set neighbor(value: string[]) {
    this._neighbor = value;
  }
  public resetNeighbor() {
    this._neighbor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor;
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop?: string[]; 
  public get nextHop() {
    return cdktf.Fn.tolist(this.getListAttribute('next_hop'));
  }
  public set nextHop(value: string[]) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // ospf_area - computed: false, optional: true, required: false
  private _ospfArea?: string; 
  public get ospfArea() {
    return this.getStringAttribute('ospf_area');
  }
  public set ospfArea(value: string) {
    this._ospfArea = value;
  }
  public resetOspfArea() {
    this._ospfArea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfAreaInput() {
    return this._ospfArea;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string[]; 
  public get policy() {
    return this.getListAttribute('policy');
  }
  public set policy(value: string[]) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // preference - computed: false, optional: true, required: false
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string[]; 
  public get protocol() {
    return cdktf.Fn.tolist(this.getListAttribute('protocol'));
  }
  public set protocol(value: string[]) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // routing_instance - computed: false, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement junos_policyoptions_policy_statement}
*/
export class PolicyoptionsPolicyStatement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_policyoptions_policy_statement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyoptionsPolicyStatement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyoptionsPolicyStatement to import
  * @param importFromId The id of the existing PolicyoptionsPolicyStatement that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyoptionsPolicyStatement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_policyoptions_policy_statement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/policyoptions_policy_statement junos_policyoptions_policy_statement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyoptionsPolicyStatementConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyoptionsPolicyStatementConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_policyoptions_policy_statement',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addItToForwardingTableExport = config.addItToForwardingTableExport;
    this._dynamicDb = config.dynamicDb;
    this._name = config.name;
    this._from.internalValue = config.from;
    this._term.internalValue = config.term;
    this._then.internalValue = config.then;
    this._to.internalValue = config.to;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_it_to_forwarding_table_export - computed: false, optional: true, required: false
  private _addItToForwardingTableExport?: boolean | cdktf.IResolvable; 
  public get addItToForwardingTableExport() {
    return this.getBooleanAttribute('add_it_to_forwarding_table_export');
  }
  public set addItToForwardingTableExport(value: boolean | cdktf.IResolvable) {
    this._addItToForwardingTableExport = value;
  }
  public resetAddItToForwardingTableExport() {
    this._addItToForwardingTableExport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addItToForwardingTableExportInput() {
    return this._addItToForwardingTableExport;
  }

  // dynamic_db - computed: false, optional: true, required: false
  private _dynamicDb?: boolean | cdktf.IResolvable; 
  public get dynamicDb() {
    return this.getBooleanAttribute('dynamic_db');
  }
  public set dynamicDb(value: boolean | cdktf.IResolvable) {
    this._dynamicDb = value;
  }
  public resetDynamicDb() {
    this._dynamicDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicDbInput() {
    return this._dynamicDb;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // from - computed: false, optional: true, required: false
  private _from = new PolicyoptionsPolicyStatementFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: PolicyoptionsPolicyStatementFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // term - computed: false, optional: true, required: false
  private _term = new PolicyoptionsPolicyStatementTermList(this, "term", false);
  public get term() {
    return this._term;
  }
  public putTerm(value: PolicyoptionsPolicyStatementTerm[] | cdktf.IResolvable) {
    this._term.internalValue = value;
  }
  public resetTerm() {
    this._term.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termInput() {
    return this._term.internalValue;
  }

  // then - computed: false, optional: true, required: false
  private _then = new PolicyoptionsPolicyStatementThenOutputReference(this, "then");
  public get then() {
    return this._then;
  }
  public putThen(value: PolicyoptionsPolicyStatementThen) {
    this._then.internalValue = value;
  }
  public resetThen() {
    this._then.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thenInput() {
    return this._then.internalValue;
  }

  // to - computed: false, optional: true, required: false
  private _to = new PolicyoptionsPolicyStatementToOutputReference(this, "to");
  public get to() {
    return this._to;
  }
  public putTo(value: PolicyoptionsPolicyStatementTo) {
    this._to.internalValue = value;
  }
  public resetTo() {
    this._to.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_it_to_forwarding_table_export: cdktf.booleanToTerraform(this._addItToForwardingTableExport),
      dynamic_db: cdktf.booleanToTerraform(this._dynamicDb),
      name: cdktf.stringToTerraform(this._name),
      from: policyoptionsPolicyStatementFromToTerraform(this._from.internalValue),
      term: cdktf.listMapper(policyoptionsPolicyStatementTermToTerraform, true)(this._term.internalValue),
      then: policyoptionsPolicyStatementThenToTerraform(this._then.internalValue),
      to: policyoptionsPolicyStatementToToTerraform(this._to.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_it_to_forwarding_table_export: {
        value: cdktf.booleanToHclTerraform(this._addItToForwardingTableExport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dynamic_db: {
        value: cdktf.booleanToHclTerraform(this._dynamicDb),
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
      from: {
        value: policyoptionsPolicyStatementFromToHclTerraform(this._from.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PolicyoptionsPolicyStatementFrom",
      },
      term: {
        value: cdktf.listMapperHcl(policyoptionsPolicyStatementTermToHclTerraform, true)(this._term.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyoptionsPolicyStatementTermList",
      },
      then: {
        value: policyoptionsPolicyStatementThenToHclTerraform(this._then.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PolicyoptionsPolicyStatementThen",
      },
      to: {
        value: policyoptionsPolicyStatementToToHclTerraform(this._to.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PolicyoptionsPolicyStatementTo",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
